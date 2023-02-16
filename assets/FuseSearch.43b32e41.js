var O=Object.defineProperty,W=Object.defineProperties;var X=Object.getOwnPropertyDescriptors;var V=Object.getOwnPropertySymbols;var J=Object.prototype.hasOwnProperty,K=Object.prototype.propertyIsEnumerable;var I=(c,t,s)=>t in c?O(c,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):c[t]=s,j=(c,t)=>{for(var s in t||(t={}))J.call(t,s)&&I(c,s,t[s]);if(V)for(var s of V(t))K.call(t,s)&&I(c,s,t[s]);return c},A=(c,t)=>W(c,X(t));import Q from"./PostHead.373b675e.js";import{d as R,k as Y,l as Z,r as B,m as ee,e as a,f as o,q as D,v as te,j as C,s as se,F as b,x as E,o as n,y as ae,z as ne,n as U,t as $,g as oe}from"./vendor-vue.cceed686.js";import{F as G}from"./fuse-js.6ab03eb8.js";const ce={class:"m-4 flex flex-col gap-6"},re={class:"flex flex-wrap gap-x-5 gap-y-2"},ie={role:"search",class:"grow max-w-100 flex items-center gap-2"},le=o("label",{class:"i-mdi-magnify text-xl","aria-label":"搜索关键词",for:"__search_keywords"},null,-1),de=o("a",{class:"flex items-center text-link",href:"https://fusejs.io/examples.html#extended-search"}," 高级搜索语法 ",-1),ue={class:"flex items-center gap-1"},he=o("label",{for:"__search_showmore"},"显示匹配程度较低的结果",-1),me={key:0,class:"standard-card"},fe=["title"],pe={class:"mt-6 mb-3 max-h-72 overflow-auto whitespace-pre-wrap"},_e=["title"],ye={key:1,class:"standard-card"},xe=o("p",{class:"my-3"}," （匹配程度低，结果已隐藏） ",-1),ve=[xe],ge={key:1,class:"standard-card"},ke=o("p",{class:"my-3"}," 没有检索到任何结果 😢 要不试试缩短或者更换关键词？ ",-1),we=[ke],ze={key:2,class:"standard-card"},be=o("p",{class:"my-3"}," 请输入关键词进行搜索 ",-1),Me=[be],qe=R({__name:"FuseSearch",props:{data:null,meta:null},setup(c){const t=c,s={includeScore:!0,ignoreLocation:!0,useExtendedSearch:!0,fieldNormWeight:.2},H=new G(t.data,A(j({},s),{threshold:.4,includeMatches:!0,keys:[{name:"title",weight:2},"content","tags"]})),v=Y("history"),p=Z(()=>{var u;return(u=Array.isArray(v.q)?v.q.join(" "):v.q)==null?void 0:u.trim()}),S={miss:"未匹配",fuzzy:"模糊匹配",exact:"精确匹配",ellipsis:"省略"},T={miss:"text-footer",ellipsis:"text-footer",fuzzy:"fuzzy-matched",exact:"exact-matched"},g=50;function q(u){var e;if(p.value===void 0)return"fuzzy";const _=(e=new G([u],s).search(p.value)[0])==null?void 0:e.score;return _!==void 0&&_<.002?"exact":"fuzzy"}function N(){return p.value?H.search(p.value,{limit:20}).map(u=>{var F;const{refIndex:h,score:_}=u,e=t.meta[h];if(!e)return{};let w=[{type:"miss",content:e.frontmatter.title}],i=[{type:"miss",content:""}],y=!1;return(F=u.matches)==null||F.forEach(m=>{if(m.key==="tags"){y=!0;return}const{value:f}=m;if(!f)return;let z=m.indices.filter(([r,x])=>q(f.slice(r,x+1))==="exact");z.length===0&&(z=m.indices.slice()),z.sort((r,x)=>r[0]-x[0]);let l=[];const L=z[0];if(!L)return;let d=m.key==="title"?0:Math.max(0,L[0]-g);z.forEach(([r,x])=>{r-d>g*3?(l.push({type:"miss",content:f.slice(d,d+g)}),l.push({type:"ellipsis",content:`

……

`}),l.push({type:"miss",content:f.slice(r-g,r)})):l.push({type:"miss",content:f.slice(d,r)});const P=f.slice(Math.max(d,r),x+1);l.push({type:q(P),content:P}),d=Math.max(d,x+1)}),l.push({type:"miss",content:f.slice(d,m.key==="title"?f.length:d+g)}),l=l.filter(({content:r})=>r),m.key==="title"?w=l:m.key==="content"&&(i=l)}),{meta:e,titleParts:w,contentParts:i,refIndex:h,tagMatched:y,score:_}}):null}const k=B(N());ee(p,()=>{k.value=N()},{debounce:300});const M=B(!1);return(u,h)=>{const _=Q;return n(),a("div",ce,[o("div",re,[o("form",ie,[le,D(o("input",{id:"__search_keywords","onUpdate:modelValue":h[0]||(h[0]=e=>C(v).q=e),class:"w-full p-1 bg-card rd-1",type:"search",placeholder:"关键词"},null,512),[[te,C(v).q]])]),de,o("div",ue,[D(o("input",{id:"__search_showmore","onUpdate:modelValue":h[1]||(h[1]=e=>M.value=e),type:"checkbox"},null,512),[[se,M.value]]),he])]),k.value&&k.value.length?(n(!0),a(b,{key:0},E(k.value,e=>{var w;return n(),a(b,{key:`${C(p)}-${e.refIndex}`},[e.meta?(n(),a(b,{key:0},[((w=e.score)!=null?w:1)<.1||M.value?(n(),a("div",me,[ae(_,{href:e.meta.href,filename:e.meta.filename,frontmatter:e.meta.frontmatter,"tag-matched":e.tagMatched},{title:ne(()=>[(n(!0),a(b,null,E(e.titleParts,(i,y)=>(n(),a("span",{key:y,class:U(T[i.type]),title:S[i.type]},$(i.content),11,fe))),128))]),_:2},1032,["href","filename","frontmatter","tag-matched"]),o("pre",pe,[(n(!0),a(b,null,E(e.contentParts,(i,y)=>(n(),a("span",{key:y,class:U(T[i.type]),title:S[i.type]},$(i.content),11,_e))),128))])])):(n(),a("div",ye,ve))],64)):oe("v-if",!0)],64)}),128)):k.value?(n(),a("div",ge,we)):(n(),a("div",ze,Me))])}}});export{qe as _};
