import{e as u,O as m,K as l,ck as d,cn as _,D as g,i as t,o as K,c as f,w as e,a,l as o,t as k,b as n}from"./index.09f51eb8.js";const y={name:"MultizoneInfo",components:{KButton:u,KEmptyState:m,KIcon:l},data(){return{productName:d}},computed:{..._({kumaDocsVersion:"config/getKumaDocsVersion"})}},B=o("p",null,[n(" To access this page, you must be running in "),o("strong",null,"Multi-Zone"),n(" mode. ")],-1);function D(s,M,N,V,c,h){const r=t("KIcon"),i=t("KButton"),p=t("KEmptyState");return K(),f(p,null,{title:e(()=>[a(r,{class:"kong-icon--centered",icon:"dangerCircleOutline",size:"42"}),o("p",null,k(c.productName)+" is running in Standalone mode.",1)]),message:e(()=>[B]),cta:e(()=>[a(i,{to:`https://kuma.io/docs/${s.kumaDocsVersion}/documentation/deployments/`,target:"_blank",appearance:"primary"},{default:e(()=>[n(" Learn More ")]),_:1},8,["to"])]),_:1})}const S=g(y,[["render",D]]);export{S as M};
