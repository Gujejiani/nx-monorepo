import*as K from"http://localhost:8080/product-list-remote/remoteEntry.mjs";var B={115:(o,d,i)=>{Promise.all([i.e(83),i.e(853),i.e(782),i.e(291)]).then(i.bind(i,2291)).catch(s=>console.error(s))},8608:o=>{o.exports=K}},R={};function r(o){var d=R[o];if(void 0!==d)return d.exports;var i=R[o]={exports:{}};return B[o](i,i.exports,r),i.exports}r.m=B,r.c=R,(()=>{var d,o=Object.getPrototypeOf?i=>Object.getPrototypeOf(i):i=>i.__proto__;r.t=function(i,s){if(1&s&&(i=this(i)),8&s||"object"==typeof i&&i&&(4&s&&i.__esModule||16&s&&"function"==typeof i.then))return i;var v=Object.create(null);r.r(v);var h={};d=d||[null,o({}),o([]),o(o)];for(var u=2&s&&i;"object"==typeof u&&!~d.indexOf(u);u=o(u))Object.getOwnPropertyNames(u).forEach(_=>h[_]=()=>i[_]);return h.default=()=>i,r.d(v,h),v}})(),r.d=(o,d)=>{for(var i in d)r.o(d,i)&&!r.o(o,i)&&Object.defineProperty(o,i,{enumerable:!0,get:d[i]})},r.f={},r.e=o=>Promise.all(Object.keys(r.f).reduce((d,i)=>(r.f[i](o,d),d),[])),r.u=o=>(76===o?"common":o)+"."+{53:"fba748c94d1408d7",76:"fcb46226da129388",83:"71121ba0ecaae8f5",177:"ac5ccbfbaaf1fee4",203:"6ef89064857f2d34",291:"b80912264450639a",345:"fd67005f84397580",406:"a3878a28bef24a08",488:"58b54ea01e8e6168",580:"ff3b9c2954ea7b30",626:"4a0ea7f69eacf847",658:"612b1cc1da0457d3",705:"edb2dab0995bee91",758:"cc4ce2af7730c2d0",782:"9147c22e4e213027",853:"eb8e022363ded0c1"}[o]+".js",r.miniCssF=o=>{},r.o=(o,d)=>Object.prototype.hasOwnProperty.call(o,d),(()=>{var o={},d="host-app:";r.l=(i,s,v,h)=>{if(o[i])o[i].push(s);else{var u,_;if(void 0!==v)for(var p=document.getElementsByTagName("script"),S=0;S<p.length;S++){var m=p[S];if(m.getAttribute("src")==i||m.getAttribute("data-webpack")==d+v){u=m;break}}u||(_=!0,(u=document.createElement("script")).type="module",u.charset="utf-8",u.timeout=120,r.nc&&u.setAttribute("nonce",r.nc),u.setAttribute("data-webpack",d+v),u.src=r.tu(i)),o[i]=[s];var w=(P,y)=>{u.onerror=u.onload=null,clearTimeout(c);var E=o[i];if(delete o[i],u.parentNode&&u.parentNode.removeChild(u),E&&E.forEach(b=>b(y)),P)return P(y)},c=setTimeout(w.bind(null,void 0,{type:"timeout",target:u}),12e4);u.onerror=w.bind(null,u.onerror),u.onload=w.bind(null,u.onload),_&&document.head.appendChild(u)}}})(),r.r=o=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(o,"__esModule",{value:!0})},(()=>{var o={53:[9053]},d={9053:["default","./Routes",8608]};r.f.remotes=(i,s)=>{r.o(o,i)&&o[i].forEach(v=>{var h=r.R;h||(h=[]);var u=d[v];if(!(h.indexOf(u)>=0)){if(h.push(u),u.p)return s.push(u.p);var _=c=>{c||(c=new Error("Container missing")),"string"==typeof c.message&&(c.message+='\nwhile loading "'+u[1]+'" from '+u[2]),r.m[v]=()=>{throw c},u.p=0},p=(c,P,y,E,b,O)=>{try{var T=c(P,y);if(!T||!T.then)return b(T,E,O);var V=T.then(F=>b(F,E),_);if(!O)return V;s.push(u.p=V)}catch(F){_(F)}},m=(c,P,y)=>p(P.get,u[1],h,0,w,y),w=c=>{u.p=1,r.m[v]=P=>{P.exports=c()}};p(r,u[2],0,0,(c,P,y)=>c?p(r.I,u[0],0,c,m,y):_(),1)}})}})(),(()=>{r.S={};var o={},d={};r.I=(i,s)=>{s||(s=[]);var v=d[i];if(v||(v=d[i]={}),!(s.indexOf(v)>=0)){if(s.push(v),o[i])return o[i];r.o(r.S,i)||(r.S[i]={});var h=r.S[i],_="host-app",p=(w,c,P,y)=>{var E=h[w]=h[w]||{},b=E[c];(!b||!b.loaded&&(!y!=!b.eager?y:_>b.from))&&(E[c]={get:P,from:_,eager:!!y})},m=[];return"default"===i&&(p("@angular/common/http","17.3.6",()=>Promise.all([r.e(83),r.e(853),r.e(203),r.e(626)]).then(()=>()=>r(1626))),p("@angular/common","17.3.6",()=>Promise.all([r.e(83),r.e(177)]).then(()=>()=>r(177))),p("@angular/core/primitives/signals","17.3.6",()=>r.e(488).then(()=>()=>r(3488))),p("@angular/core","17.3.6",()=>r.e(705).then(()=>()=>r(7705))),p("@angular/platform-browser","17.3.6",()=>Promise.all([r.e(83),r.e(853),r.e(345)]).then(()=>()=>r(345))),p("@angular/router","17.3.6",()=>Promise.all([r.e(83),r.e(853),r.e(203),r.e(406),r.e(782)]).then(()=>()=>r(6406))),p("@host-app/orders","0.0.0",()=>Promise.all([r.e(83),r.e(853),r.e(580),r.e(76)]).then(()=>()=>r(3057))),p("@host-app/shared-ui","0.0.0",()=>Promise.all([r.e(83),r.e(853),r.e(76)]).then(()=>()=>r(4331))),(w=>{var c=b=>(w=>{typeof console<"u"&&console.warn&&console.warn(w)})("Initialization of sharing external failed: "+b);try{var P=r(8608);if(!P)return;var y=b=>b&&b.init&&b.init(r.S[i],s);if(P.then)return m.push(P.then(y,c));var E=y(P);if(E&&E.then)return m.push(E.catch(c))}catch(b){c(b)}})()),o[i]=m.length?Promise.all(m).then(()=>o[i]=1):1}}})(),(()=>{var o;r.tt=()=>(void 0===o&&(o={createScriptURL:d=>d},typeof trustedTypes<"u"&&trustedTypes.createPolicy&&(o=trustedTypes.createPolicy("angular#bundler",o))),o)})(),r.tu=o=>r.tt().createScriptURL(o),(()=>{var o;if("string"==typeof import.meta.url&&(o=import.meta.url),!o)throw new Error("Automatic publicPath is not supported in this browser");o=o.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),r.p=o})(),(()=>{var o=t=>{var a=l=>l.split(".").map(f=>+f==f?+f:f),e=/^([^-+]+)?(?:-([^+]+))?(?:\+(.+))?$/.exec(t),n=e[1]?a(e[1]):[];return e[2]&&(n.length++,n.push.apply(n,a(e[2]))),e[3]&&(n.push([]),n.push.apply(n,a(e[3]))),n},d=(t,a)=>{t=o(t),a=o(a);for(var e=0;;){if(e>=t.length)return e<a.length&&"u"!=(typeof a[e])[0];var n=t[e],l=(typeof n)[0];if(e>=a.length)return"u"==l;var f=a[e],g=(typeof f)[0];if(l!=g)return"o"==l&&"n"==g||"s"==g||"u"==l;if("o"!=l&&"u"!=l&&n!=f)return n<f;e++}},i=t=>{var a=t[0],e="";if(1===t.length)return"*";if(a+.5){e+=0==a?">=":-1==a?"<":1==a?"^":2==a?"~":a>0?"=":"!=";for(var n=1,l=1;l<t.length;l++)n--,e+="u"==(typeof(g=t[l]))[0]?"-":(n>0?".":"")+(n=2,g);return e}var f=[];for(l=1;l<t.length;l++){var g=t[l];f.push(0===g?"not("+j()+")":1===g?"("+j()+" || "+j()+")":2===g?f.pop()+" "+f.pop():i(g))}return j();function j(){return f.pop().replace(/^\((.+)\)$/,"$1")}},s=(t,a)=>{if(0 in t){a=o(a);var e=t[0],n=e<0;n&&(e=-e-1);for(var l=0,f=1,g=!0;;f++,l++){var j,L,C=f<t.length?(typeof t[f])[0]:"";if(l>=a.length||"o"==(L=(typeof(j=a[l]))[0]))return!g||("u"==C?f>e&&!n:""==C!=n);if("u"==L){if(!g||"u"!=C)return!1}else if(g)if(C==L)if(f<=e){if(j!=t[f])return!1}else{if(n?j>t[f]:j<t[f])return!1;j!=t[f]&&(g=!1)}else if("s"!=C&&"n"!=C){if(n||f<=e)return!1;g=!1,f--}else{if(f<=e||L<C!=n)return!1;g=!1}else"s"!=C&&"n"!=C&&(g=!1,f--)}}var U=[],M=U.pop.bind(U);for(l=1;l<t.length;l++){var $=t[l];U.push(1==$?M()|M():2==$?M()&M():$?s($,a):!M())}return!!M()},m=(t,a,e,n)=>{var l=((t,a)=>{var e=t[a];return Object.keys(e).reduce((n,l)=>!n||!e[n].loaded&&d(n,l)?l:n,0)})(t,e);if(!s(n,l))throw new Error(((t,a,e,n)=>"Unsatisfied version "+e+" from "+(e&&t[a][e].from)+" of shared singleton module "+a+" (required "+i(n)+")")(t,e,l,n));return b(t[e][l])},b=t=>(t.loaded=1,t.get()),O=t=>function(a,e,n,l){var f=r.I(a);return f&&f.then?f.then(t.bind(t,a,r.S[a],e,n,l)):t(a,r.S[a],e,n,l)},V=O((t,a,e,n)=>a&&r.o(a,e)?b(((t,n)=>{var e=t[n];return(n=Object.keys(e).reduce((l,f)=>!l||d(l,f)?f:l,0))&&e[n]})(a,e)):n()),x=O((t,a,e,n,l)=>a&&r.o(a,e)?m(a,0,e,n):l()),A={},D={3083:()=>x("default","@angular/core",[2,17,3,0],()=>r.e(705).then(()=>()=>r(7705))),9853:()=>x("default","@angular/common",[2,17,3,0],()=>r.e(177).then(()=>()=>r(177))),8782:()=>x("default","@angular/platform-browser",[2,17,3,0],()=>r.e(345).then(()=>()=>r(345))),7849:()=>x("default","@angular/router",[2,17,3,0],()=>Promise.all([r.e(203),r.e(406)]).then(()=>()=>r(6406))),7059:()=>x("default","@angular/core/primitives/signals",[2,17,3,0],()=>r.e(488).then(()=>()=>r(3488))),2779:()=>x("default","@angular/common/http",[2,17,3,0],()=>Promise.all([r.e(203),r.e(626)]).then(()=>()=>r(1626))),2580:()=>V("default","@host-app/shared-ui",()=>r.e(76).then(()=>()=>r(4331))),3658:()=>V("default","product-list-remote/Routes",()=>r.e(53).then(()=>()=>r(9053))),9758:()=>V("default","@host-app/orders",()=>Promise.all([r.e(580),r.e(76)]).then(()=>()=>r(3057)))},N={83:[3083],291:[7849],345:[2779],580:[2580],658:[3658],705:[7059],758:[9758],782:[8782],853:[9853]},z={};r.f.consumes=(t,a)=>{r.o(N,t)&&N[t].forEach(e=>{if(r.o(A,e))return a.push(A[e]);if(!z[e]){var n=g=>{A[e]=0,r.m[e]=j=>{delete r.c[e],j.exports=g()}};z[e]=!0;var l=g=>{delete A[e],r.m[e]=j=>{throw delete r.c[e],g}};try{var f=D[e]();f.then?a.push(A[e]=f.then(n).catch(l)):n(f)}catch(g){l(g)}}})}})(),(()=>{var o={792:0};r.f.j=(s,v)=>{var h=r.o(o,s)?o[s]:void 0;if(0!==h)if(h)v.push(h[2]);else if(/^((5|8|85)3|[67]58|580|782)$/.test(s))o[s]=0;else{var u=new Promise((m,w)=>h=o[s]=[m,w]);v.push(h[2]=u);var _=r.p+r.u(s),p=new Error;r.l(_,m=>{if(r.o(o,s)&&(0!==(h=o[s])&&(o[s]=void 0),h)){var w=m&&("load"===m.type?"missing":m.type),c=m&&m.target&&m.target.src;p.message="Loading chunk "+s+" failed.\n("+w+": "+c+")",p.name="ChunkLoadError",p.type=w,p.request=c,h[1](p)}},"chunk-"+s,s)}};var d=(s,v)=>{var p,S,[h,u,_]=v,m=0;if(h.some(c=>0!==o[c])){for(p in u)r.o(u,p)&&(r.m[p]=u[p]);_&&_(r)}for(s&&s(v);m<h.length;m++)r.o(o,S=h[m])&&o[S]&&o[S][0](),o[S]=0},i=self.webpackChunkhost_app=self.webpackChunkhost_app||[];i.forEach(d.bind(null,0)),i.push=d.bind(null,i.push.bind(i))})();var Z=r(115);