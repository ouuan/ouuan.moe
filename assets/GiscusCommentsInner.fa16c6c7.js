import{d as b,r as f,o as a,e as c,f as s,m as g,_ as k,p as F,q as I,s as R,x,i as o,y as $,z,F as B,A as C}from"./vendor-vue.f1976dd3.js";import{a as S}from"./vite.5ce4fca4.js";import{u as T}from"./useTheme.24080fa4.js";import{s as m}from"./site.b21fb919.js";const j=function(e,t){return[{type:"image/webp",srcset:"/assets/wechat-donate.d6163079.webp"},{type:void 0,srcset:e,loading:"lazy",src:e,width:t,height:t}]}("/assets/wechat-donate.4318dd04.png",1037),q=function(e,t){return[{type:"image/webp",srcset:"/assets/alipay-donate.4b8654e6.webp"},{type:void 0,srcset:e,loading:"lazy",src:e,width:t,height:t}]}("/assets/alipay-donate.9afdaaf8.png",732),d=e=>(F("data-v-f598337b"),e=e(),I(),e),H={class:"my-6 flex justify-center"},N=d(()=>s("span",{class:"i-mdi-gift"},null,-1)),O=d(()=>s("span",null,"赞赏支持",-1)),A=[N,O],E={key:1,class:"relative flex justify-center gap-6"},V={class:"flex flex-1 flex-col items-center gap-3"},U=d(()=>s("figcaption",null,"微信打赏",-1)),G={class:"flex flex-1 flex-col items-center gap-3"},L=d(()=>s("figcaption",null,"支付宝打赏",-1)),P=b({__name:"SponsorRequest",props:{clickToOpen:{type:Boolean,default:!1}},setup(e){const t=f(!1);return(u,r)=>{const p=k;return a(),c("div",H,[u.clickToOpen&&!t.value?(a(),c("button",{key:0,class:"btn gap-1 px-2 btn-normal",onClick:r[0]||(r[0]=n=>t.value=!0)},A)):(a(),c("div",E,[s("figure",V,[g(p,{alt:"微信赞赏码",src:j}),U]),s("figure",G,[g(p,{alt:"支付宝收款码",src:q}),L])]))])}}});const K=S(P,[["__scopeId","data-v-f598337b"]]),M={key:1,class:"flex items-center justify-center gap-2"},Y=["href"],D=s("span",{class:"i-mdi-loading motion-safe:animate-spin"},null,-1),Z=b({__name:"GiscusCommentsInner",props:{term:{}},setup(e){const t=m.repo,u=m.giscusRepoId,r=m.giscusCategoryId,p=T(),n=f(!0),h=f(!1);return window.addEventListener("message",i=>{var y,v;if(i.origin!=="https://giscus.app")return;const _=(y=i.data)==null?void 0:y.giscus;if(typeof _!="object")return;n.value=!1;const l=(v=_.discussion)==null?void 0:v.reactions;typeof l=="object"&&(h.value=Boolean(["THUMBS_UP","LAUGH","HOORAY","HEART","ROCKET"].find(w=>l[w].viewerHasReacted)))}),(i,_)=>{const l=K;return a(),c(B,null,[h.value?(a(),R(l,{key:0,"click-to-open":""})):x("v-if",!0),n.value?(a(),c("div",M,[s("span",null,[s("a",{class:"text-link active:text-active hover:text-hover",href:`https://github.com/${o(t)}/discussions/categories/comments?discussions_q=${i.term}`},"评论",8,Y),$("加载中… ")]),D])):x("v-if",!0),g(o(C),{style:z(n.value&&{opacity:0,position:"absolute",zIndex:-1,width:0,height:0}),"aria-hidden":n.value,repo:o(t),"repo-id":o(u),"category-id":o(r),mapping:"specific",term:i.term,"reactions-enabled":"1","emit-metadata":"1","input-position":"top",theme:o(p),lang:"zh-CN",loading:"lazy",strict:"1"},null,8,["style","aria-hidden","repo","repo-id","category-id","term","theme"])],64)}}});export{Z as _};
