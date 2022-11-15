package callbacks

import (
	"time"

	"github.com/kumahq/kuma/pkg/core"
	util_xds "github.com/kumahq/kuma/pkg/util/xds"
)

var nackLog = core.Log.WithName("xds").WithName("nack-backoff")

type nackBackoff struct {
	backoff time.Duration
	util_xds.NoopCallbacks
}

var _ util_xds.Callbacks = &nackBackoff{}

func NewNackBackoff(backoff time.Duration) util_xds.Callbacks {
	return &nackBackoff{
		backoff: backoff,
	}
}

func (n *nackBackoff) OnStreamResponse(_ int64, request util_xds.DiscoveryRequest, _ util_xds.DiscoveryResponse) {
	if request.HasErrors() {
		// When DiscoveryRequest contains errors, it means that Envoy rejected configuration generated by Control Plane
		// It may happen for several reasons:
		// 1) Eventual consistency - ex. listener consists reference to cluster which does not exist because listener was send before cluster (there is no ordering of responses)
		// 2) Config is valid from CP side but invalid from Envoy side - ex. something already listening at this address:port
		//
		// Second case is especially dangerous because we will end up in a loop.
		// CP is constantly trying to send a config and Envoy immediately rejects the config.
		// Without this backoff, CP is under a lot of pressure from faulty Envoy.
		//
		// It is safe to sleep here because OnStreamResponse is executed in the goroutine of a single ADS stream
		nackLog.Info("config was previously rejected by Envoy. Applying backoff before resending it", "backoff", n.backoff, "nodeID", request.NodeId(), "reason", request.ErrorMsg())
		time.Sleep(n.backoff)
	}
}
