(function(e){function t(t){for(var n,o,u=t[0],i=t[1],s=t[2],l=0,p=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&p.push(c[o][0]),c[o]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);f&&f(t);while(p.length)p.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,o=1;o<r.length;o++){var u=r[o];0!==c[u]&&(n=!1)}n&&(a.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},o={app:0},c={app:0},a=[];function u(e){return i.p+"js/"+({about:"about",projects:"projects"}[e]||e)+"."+{about:"33d03e35",projects:"47f9aba1"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={projects:1};o[e]?t.push(o[e]):0!==o[e]&&r[e]&&t.push(o[e]=new Promise((function(t,r){for(var n="css/"+({about:"about",projects:"projects"}[e]||e)+"."+{about:"31d6cfe0",projects:"bff35de5"}[e]+".css",c=i.p+n,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var s=a[u],l=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(l===n||l===c))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){s=p[u],l=s.getAttribute("data-href");if(l===n||l===c)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var n=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=n,delete o[e],f.parentNode.removeChild(f),r(a)},f.href=c;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){o[e]=0})));var n=c[e];if(0!==n)if(n)t.push(n[2]);else{var a=new Promise((function(t,r){n=c[e]=[t,r]}));t.push(n[2]=a);var s,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e);var p=new Error;s=function(t){l.onerror=l.onload=null,clearTimeout(f);var r=c[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;p.message="Loading chunk "+e+" failed.\n("+n+": "+o+")",p.name="ChunkLoadError",p.type=n,p.request=o,r[1](p)}c[e]=void 0}};var f=setTimeout((function(){s({type:"timeout",target:l})}),12e4);l.onerror=l.onload=s,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=t,s=s.slice();for(var p=0;p<s.length;p++)t(s[p]);var f=l;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"56d7":function(e,t,r){"use strict";r.r(t);var n=r("7a23");const o={id:"nav"};function c(e,t){const r=Object(n["B"])("router-link"),c=Object(n["B"])("router-view");return Object(n["u"])(),Object(n["f"])(n["a"],null,[Object(n["g"])("div",o,[Object(n["i"])(r,{to:"/"},{default:Object(n["H"])(()=>[Object(n["h"])("Home")]),_:1}),Object(n["h"])(" | "),Object(n["i"])(r,{to:"/about"},{default:Object(n["H"])(()=>[Object(n["h"])("About")]),_:1}),Object(n["h"])(" | "),Object(n["i"])(r,{to:"/projects"},{default:Object(n["H"])(()=>[Object(n["h"])("Projects")]),_:1})]),Object(n["i"])(c)],64)}r("d503");var a=r("6b0d"),u=r.n(a);const i={},s=u()(i,[["render",c]]);var l=s,p=r("6605");const f={class:"home"},d=Object(n["g"])("p",{style:{"text-align":"center","margin-top":"2rem"}},"This is the homepage (this website is under construction)",-1),b=[d];function h(e,t,r,o,c,a){return Object(n["u"])(),Object(n["f"])("div",f,b)}var m={name:"Home"};const j=u()(m,[["render",h]]);var v=j;const g=[{path:"/",name:"Home",component:v},{path:"/about",name:"About",component:()=>r.e("about").then(r.bind(null,"f820"))},{path:"/projects",name:"Projects",component:()=>r.e("projects").then(r.bind(null,"acca"))}],O=Object(p["a"])({history:Object(p["b"])(),routes:g});var y=O,w=r("5502"),P=Object(w["a"])({state:{},mutations:{},actions:{},modules:{}});r("c860");Object(n["c"])(l).use(P).use(y).mount("#app")},8028:function(e,t,r){},c860:function(e,t,r){},d503:function(e,t,r){"use strict";r("8028")}});
//# sourceMappingURL=app.78ce29fe.js.map