var p=[" daum[ /]"," deusu/"," yadirectfetcher","(?:^|[^g])news(?!sapphire)","(?<! (?:channel/|google/))google(?!(app|/google| pixel))","(?<! cu)bots?(?:\\b|_)","(?<!(?: ya| yandex|^job|inapp;) ?)search","(?<!(?:lib))http","(?<![hg]m)score","@[a-z][\\w-]+\\.","\\(\\)","\\.com","\\b\\d{13}\\b","^<","^[\\w \\.\\-\\(?:\\):]+(?:/v?\\d+(?:\\.\\d+)?(?:\\.\\d{1,10})*?)?(?:,|$)","^[^ ]{50,}$","^\\d+\\b","^\\w+/[\\w\\(\\)]*$","^active","^ad muncher","^amaya","^avsdevicesdk/","^biglotron","^bot","^bw/","^clamav[ /]","^client/","^cobweb/","^custom","^ddg[_-]android","^discourse","^dispatch/\\d","^downcast/","^duckduckgo","^facebook","^getright/","^gozilla/","^hobbit","^hotzonu","^hwcdn/","^jeode/","^jetty/","^jigsaw","^microsoft bits","^movabletype","^mozilla/\\d\\.\\d \\(compatible;?\\)$","^mozilla/\\d\\.\\d \\w*$","^navermailapp","^netsurf","^offline","^owler","^postman","^python","^rank","^read","^reed","^rest","^rss","^snapchat","^space bison","^svn","^swcd ","^taringa","^thumbor/","^track","^valid","^w3c","^webbandit/","^webcopier","^wget","^whatsapp","^wordpress","^xenu link sleuth","^yahoo","^yandex","^zdm/\\d","^zoom marketplace/","^{{.*}}$","admin","analyzer","archive","ask jeeves/teoma","bit\\.ly/","bluecoat drtr","browsex","burpcollaborator","capture","catch","check\\b","checker","chrome-lighthouse","chromeframe","classifier","clean","cloudflare","crawl","cypress/","dareboost","datanyze","dejaclick","detect","dmbrowser","download","evc-batch/","exaleadcloudview","feed","firephp","gomezagent","headless","httrack","hubspot marketing grader","hydra","ibisbrowser","images","insight","inspect","iplabel","ips-agent","java(?!;)","library","linkcheck","mail\\.ru/","manager","measure","neustar wpm","node","nutch","offbyone","optimize","pageburst","pagespeed","parser","perl","phantomjs","pingdom","powermarks","preview","proxy","ptst[ /]\\d","reputation","resolver","retriever","rexx;","rigor","rss\\b","scan","scrape","server","sogou","sparkler/","speedcurve","spider","splash","statuscake","synapse","synthetic","tools","torrent","trace","transcoder","url","virtuoso","wappalyzer","watch","webglance","webkit2png","whatcms/","zgrab"];var h=p;var l=e=>h.map(a=>{var t;return(t=e?.match(new RegExp(a,"i")))==null?void 0:t[0]}).filter(Boolean);var b="feed.ouuan.moe",u="https://plausible.ouuan.moe";async function m(e){let a=new TextEncoder().encode(e),t=await crypto.subtle.digest("SHA-1",a);return Array.from(new Uint8Array(t)).map(o=>o.toString(16).padStart(2,"0")).join("")}async function g(e){let a=e.headers.get("Referer"),t=e.headers.get("User-Agent")||"Unknown UA",s=e.headers.get("CF-Connecting-IP")||"Unknown IP",n=await m(`${t}-${s}`),o=l(t).join(" ");async function i(d,c){try{let r=await fetch(`${u}/api/event`,{method:"POST",headers:{"User-Agent":`${o?"Mozilla/5.0 (X11; Linux x86_64; rv:107.0) Gecko/20100101 Firefox/107.0":t} (${n})`,"Content-Type":"application/json"},body:JSON.stringify({domain:b,name:d,url:e.url,...a&&{referer:a},...c&&{props:JSON.stringify(c)}})});r.ok||console.log(`${r.status}: ${await r.text()}`)}catch(r){console.log(r)}}await i("pageview"),await i("Feed",{bot:o||"Not A Bot"})}var y=e=>{let{request:a}=e;return/\/feed\.(?:xml|atom|json)\/*$/.test(new URL(a.url).pathname)&&e.waitUntil(g(a)),e.next()};export{y as onRequestGet};
