function $(e,t){var r=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(r!=null){var n,a,i,c,o=[],s=!0,l=!1;try{if(i=(r=r.call(e)).next,t===0){if(Object(r)!==r)return;s=!1}else for(;!(s=(n=i.call(r)).done)&&(o.push(n.value),o.length!==t);s=!0);}catch(T){l=!0,a=T}finally{try{if(!s&&r.return!=null&&(c=r.return(),Object(c)!==c))return}finally{if(l)throw a}}return o}}function I(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function b(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,_(n.key),n)}}function U(e,t,r){return t&&b(e.prototype,t),r&&b(e,r),Object.defineProperty(e,"prototype",{writable:!1}),e}function y(e,t,r){return t=_(t),t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function j(e,t){return R(e)||$(e,t)||F(e,t)||C()}function R(e){if(Array.isArray(e))return e}function F(e,t){if(e){if(typeof e=="string")return v(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);if(r==="Object"&&e.constructor&&(r=e.constructor.name),r==="Map"||r==="Set")return Array.from(e);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return v(e,t)}}function v(e,t){(t==null||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function C(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function G(e,t){if(typeof e!="object"||e===null)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function _(e){var t=G(e,"string");return typeof t=="symbol"?t:String(t)}function u(e,t){var r=P(e,t,"get");return L(e,r)}function A(e,t,r){var n=P(e,t,"set");return W(e,n,r),r}function P(e,t,r){if(!t.has(e))throw new TypeError("attempted to "+r+" private field on non-instance");return t.get(e)}function L(e,t){return t.get?t.get.call(e):t.value}function W(e,t,r){if(t.set)t.set.call(e,r);else{if(!t.writable)throw new TypeError("attempted to set read only private field");t.value=r}}function h(e,t,r){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return r}function S(e,t){if(t.has(e))throw new TypeError("Cannot initialize the same private elements twice on an object")}function w(e,t,r){S(e,t),t.set(e,r)}function k(e,t){S(e,t),t.add(e)}var O=[" daum[ /]"," deusu/","(?:^| )site","@[a-z]","\\(at\\)[a-z]","\\(github\\.com/","\\[at\\][a-z]","^12345","^<","^[\\w \\.\\-\\(\\)]+(/v?\\d+(\\.\\d+)?(\\.\\d{1,10})?)?$","^[^ ]{50,}$","^active","^ad muncher","^anglesharp/","^anonymous","^avsdevicesdk/","^axios/","^bidtellect/","^biglotron","^castro","^clamav[ /]","^cobweb/","^coccoc","^custom","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^facebook","^fdm[ /]\\d","^getright/","^gozilla/","^hatena","^hobbit","^hotzonu","^hwcdn/","^jeode/","^jetty/","^jigsaw","^linkdex","^lwp[-: ]","^metauri","^microsoft bits","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^navermailapp","^netsurf","^offline explorer","^phantom","^php","^postman","^postrank","^python","^read","^reed","^restsharp/","^snapchat","^space bison","^svn","^swcd ","^taringa","^test certificate info","^thumbor/","^tumblr/","^user-agent:mozilla","^valid","^venus/fedoraplanet","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zoom marketplace/","^{{.*}}$","adbeat\\.com","appinsights","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","bot","browsex","burpcollaborator","capture","catch","check","chrome-lighthouse","chromeframe","client","cloud","crawl","cryptoapi","dareboost","datanyze","dataprovider","dejaclick","dmbrowser","download","evc-batch/","feed","firephp","freesafeip","ghost","gomezagent","google","headlesschrome/","http","httrack","hubspot marketing grader","hydra","ibisbrowser","images","iplabel","ips-agent","java","library","mail\\.ru/","manager","monitor","morningscore/","neustar wpm","news","nutch","offbyone","optimize","pageburst","pagespeed","perl","pingdom","powermarks","preview","proxy","ptst[ /]\\d","reader","rexx;","rigor","rss","scan","scrape","search","serp ?reputation ?management","server","sogou","sparkler/","spider","statuscake","stumbleupon\\.com","supercleaner","synapse","synthetic","taginspector/","torrent","tracemyfile","transcoder","trendsmapresolver","twingly recon","url","virtuoso","wappalyzer","webglance","webkit2png","websitemetadataretriever","whatcms/","wordpress","zgrab"];function D(e){try{new RegExp("(?<! cu)bot").test("dangerbot")}catch{return e}return[["bot","(?<! cu)bot"],["google","(?<! (?:channel/|google/))google(?!(app|/google| pixel))"],["http","(?<!(?:lib))http"],["java","java(?!;)"],["search","(?<! ya(?:yandex)?)search"]].forEach(function(t){var r=j(t,2),n=r[0],a=r[1],i=e.lastIndexOf(n);~i&&e.splice(i,1,a)}),e}D(O);var z="i",f=new WeakMap,p=new WeakMap,d=new WeakSet,g=new WeakSet,H=function(){function e(t){var r=this;I(this,e),k(this,g),k(this,d),w(this,f,{writable:!0,value:void 0}),w(this,p,{writable:!0,value:void 0}),A(this,f,t||O.slice()),h(this,d,m).call(this);var n=function(i){return r.test(i)};return Object.defineProperties(n,Object.entries(Object.getOwnPropertyDescriptors(e.prototype)).reduce(function(a,i){var c=j(i,2),o=c[0],s=c[1];return typeof s.value=="function"&&Object.assign(a,y({},o,{value:r[o].bind(r)})),typeof s.get=="function"&&Object.assign(a,y({},o,{get:function(){return r[o]}})),a},{}))}return U(e,[{key:"pattern",get:function(){return new RegExp(u(this,p))}},{key:"test",value:function(r){return Boolean(r)&&u(this,p).test(r)}},{key:"find",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"",n=r.match(u(this,p));return n&&n[0]}},{key:"matches",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";return u(this,f).filter(function(n){return new RegExp(n,z).test(r)})}},{key:"clear",value:function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";this.exclude(this.matches(r))}},{key:"extend",value:function(){var r=this,n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];[].push.apply(u(this,f),n.filter(function(a){return h(r,g,x).call(r,a)===-1}).map(function(a){return a.toLowerCase()})),h(this,d,m).call(this)}},{key:"exclude",value:function(){for(var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],n=r.length;n--;){var a=h(this,g,x).call(this,r[n]);a>-1&&u(this,f).splice(a,1)}h(this,d,m).call(this)}},{key:"spawn",value:function(r){return new e(r||u(this,f))}}]),e}();function m(){A(this,p,new RegExp(u(this,f).join("|"),z))}function x(e){return u(this,f).indexOf(e.toLowerCase())}var E=new H;var M="feed.ouuan.moe",N="https://plausible.ouuan.moe";async function B(e){let t=new TextEncoder().encode(e),r=await crypto.subtle.digest("SHA-1",t);return Array.from(new Uint8Array(r)).map(i=>i.toString(16).padStart(2,"0")).join("")}async function J(e){let t=e.headers.get("Referer"),r=e.headers.get("User-Agent")||"Unknown UA",n=e.headers.get("CF-Connecting-IP")||"Unknown IP",a=await B(`${r}-${n}`),i=E.find(r);async function c(o,s){try{let l=await fetch(`${N}/api/event`,{method:"POST",headers:{"User-Agent":`${i?"Mozilla/5.0 (X11; Linux x86_64; rv:107.0) Gecko/20100101 Firefox/107.0":r} (${a})`,"Content-Type":"application/json"},body:JSON.stringify({domain:M,name:o,url:e.url,...t&&{referer:t},...s&&{props:JSON.stringify(s)}})});l.ok||console.log(`${l.status}: ${await l.text()}`)}catch(l){console.log(l)}}await c("pageview"),await c("Feed",{bot:i||"Not A Bot"})}var q=e=>{let{request:t}=e;return/\/feed\.(xml|atom|json)\/*$/.test(new URL(t.url).pathname)&&e.waitUntil(J(t)),e.next()};export{q as onRequestGet};
