import{D as I,cl as B,cm as F,e as Z,M as q,P as K,k as y,co as N,s as O,o as i,j as u,a,w as s,c as _,b as V,z as b,l as m,t as v,F as E,n as D,i as n}from"./index.09f51eb8.js";import{g as H}from"./tableDataUtils.637a273e.js";import{D as R}from"./DataOverview.75cd0a9e.js";import{E as W}from"./EnvoyData.4c5a7bbc.js";import{F as M}from"./FrameSkeleton.fcef0e24.js";import{_ as P}from"./LabelList.vue_vue_type_style_index_0_lang.6ccc9977.js";import{S as j,a as G}from"./SubscriptionHeader.1363ed57.js";import{T as U}from"./TabsWidget.55b438d0.js";import"./EmptyBlock.vue_vue_type_script_setup_true_lang.264304d3.js";import"./ErrorBlock.6cb5eaea.js";import"./LoadingBlock.vue_vue_type_script_setup_true_lang.f2b15057.js";import"./TagList.c6e1c385.js";import"./CodeBlock.vue_vue_type_style_index_0_lang.f4101bd8.js";import"./_commonjsHelpers.f037b798.js";const X={name:"ZoneEgresses",components:{AccordionItem:B,AccordionList:F,DataOverview:R,EnvoyData:W,FrameSkeleton:M,LabelList:P,SubscriptionDetails:j,SubscriptionHeader:G,TabsWidget:U,KButton:Z,KCard:q},data(){return{isLoading:!0,isEmpty:!1,error:null,empty_state:{title:"No Data",message:"There are no Zone Egresses present."},tableData:{headers:[{key:"actions",hideLabel:!0},{label:"Status",key:"status"},{label:"Name",key:"name"}],data:[]},tabs:[{hash:"#overview",title:"Overview"},{hash:"#insights",title:"Zone Egress Insights"},{hash:"#xds-configuration",title:"XDS Configuration"},{hash:"#envoy-stats",title:"Stats"},{hash:"#envoy-clusters",title:"Clusters"}],entity:{},rawData:[],pageSize:K,next:null,subscriptionsReversed:[]}},watch:{$route(){this.isLoading=!0,this.isEmpty=!1,this.error=null,this.init()}},beforeMount(){this.init()},methods:{init(){this.loadData()},tableAction(r){const o=r;this.getEntity(o)},async loadData(r="0"){this.isLoading=!0,this.isEmpty=!1;const o=this.$route.query.ns||null;try{const{data:t,next:p}=await H({getAllEntities:y.getAllZoneEgressOverviews.bind(y),getSingleEntity:y.getZoneEgressOverview.bind(y),size:this.pageSize,offset:r,query:o});this.next=p,t.length?(this.isEmpty=!1,this.rawData=t,this.getEntity({name:t[0].name}),this.tableData.data=t.map(e=>{const{zoneEgressInsight:l={}}=e;return{...e,...N(l)}})):(this.tableData.data=[],this.isEmpty=!0)}catch(t){t instanceof Error?error.value=t:console.error(t),this.isEmpty=!0}finally{this.isLoading=!1}},getEntity(r){var e,l;const o=["type","name"],t=this.rawData.find(g=>g.name===r.name),p=(l=(e=t==null?void 0:t.zoneEgressInsight)==null?void 0:e.subscriptions)!=null?l:[];this.subscriptionsReversed=Array.from(p).reverse(),this.entity=O(t,o)}}},J={class:"zoneegresses"},Q=m("span",{class:"custom-control-icon"}," \u2190 ",-1),Y={key:0};function $(r,o,t,p,e,l){const g=n("KButton"),S=n("DataOverview"),z=n("LabelList"),k=n("SubscriptionHeader"),L=n("SubscriptionDetails"),w=n("AccordionItem"),A=n("AccordionList"),x=n("KCard"),h=n("EnvoyData"),T=n("TabsWidget"),C=n("FrameSkeleton");return i(),u("div",J,[a(C,null,{default:s(()=>{var f;return[a(S,{"selected-entity-name":(f=e.entity)==null?void 0:f.name,"page-size":e.pageSize,"is-loading":e.isLoading,error:e.error,"empty-state":e.empty_state,"table-data":e.tableData,"table-data-is-empty":e.isEmpty,next:e.next,onTableAction:l.tableAction,onLoadData:o[0]||(o[0]=c=>l.loadData(c))},{additionalControls:s(()=>[r.$route.query.ns?(i(),_(g,{key:0,class:"back-button",appearance:"primary",to:{name:"zoneegresses"}},{default:s(()=>[Q,V(" View All ")]),_:1})):b("",!0)]),_:1},8,["selected-entity-name","page-size","is-loading","error","empty-state","table-data","table-data-is-empty","next","onTableAction"]),e.isEmpty===!1?(i(),_(T,{key:0,"has-error":e.error!==null,"is-loading":e.isLoading,tabs:e.tabs,"initial-tab-override":"overview"},{tabHeader:s(()=>[m("div",null,[m("h3",null," Zone Egress: "+v(e.entity.name),1)])]),overview:s(()=>[a(z,null,{default:s(()=>[m("div",null,[m("ul",null,[(i(!0),u(E,null,D(e.entity,(c,d)=>(i(),u("li",{key:d},[c?(i(),u("h4",Y,v(d),1)):b("",!0),m("p",null,v(c),1)]))),128))])])]),_:1})]),insights:s(()=>[a(x,{"border-variant":"noBorder"},{body:s(()=>[a(A,{"initially-open":0},{default:s(()=>[(i(!0),u(E,null,D(e.subscriptionsReversed,(c,d)=>(i(),_(w,{key:d},{"accordion-header":s(()=>[a(k,{details:c},null,8,["details"])]),"accordion-content":s(()=>[a(L,{details:c,"is-discovery-subscription":""},null,8,["details"])]),_:2},1024))),128))]),_:1})]),_:1})]),"xds-configuration":s(()=>[a(h,{"data-path":"xds","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-stats":s(()=>[a(h,{"data-path":"stats","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),"envoy-clusters":s(()=>[a(h,{"data-path":"clusters","zone-egress-name":e.entity.name,"query-key":"envoy-data-zone-egress"},null,8,["zone-egress-name"])]),_:1},8,["has-error","is-loading","tabs"])):b("",!0)]}),_:1})])}const ye=I(X,[["render",$]]);export{ye as default};
