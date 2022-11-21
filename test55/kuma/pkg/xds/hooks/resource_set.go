package hooks

import (
	core_xds "github.com/kumahq/kuma/pkg/core/xds"
	xds_context "github.com/kumahq/kuma/pkg/xds/context"
)

// ResourceSetHook is a way to modify XDS resources generated by Kuma
// Since resourceSet is an argument, you can add new, remove or modify the existing resources
// To support V2 and V3, search the resource set for typeUrls for proper version
// If you want to for example modify only inbound listeners, search for the resource origin of OriginInbound
//
// WARNING: Please, be aware that Hooks are being called also in Ingress Dataplanes
//
//	and when method Modify is being called, the passed MeshContext
//	inside xds_context.Context will be empty
type ResourceSetHook interface {
	Modify(resourceSet *core_xds.ResourceSet, ctx xds_context.Context, proxy *core_xds.Proxy) error
}
