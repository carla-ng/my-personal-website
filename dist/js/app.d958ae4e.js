(function(e){function t(t){for(var r,o,u=t[0],s=t[1],i=t[2],l=0,d=[];l<u.length;l++)o=u[l],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);b&&b(t);while(d.length)d.shift()();return a.push.apply(a,i||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,o=1;o<n.length;o++){var u=n[o];0!==c[u]&&(r=!1)}r&&(a.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},o={app:0},c={app:0},a=[];function u(e){return s.p+"js/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[e]||e)+"."+{about:"a0e7a991",contact:"28ab1f89",projects:"b77de18a",resume:"8421eaee"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,projects:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var r="css/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[e]||e)+"."+{about:"91951dfb",contact:"31d6cfe0",projects:"3db44989",resume:"31d6cfe0"}[e]+".css",c=s.p+r,a=document.getElementsByTagName("link"),u=0;u<a.length;u++){var i=a[u],l=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(l===r||l===c))return t()}var d=document.getElementsByTagName("style");for(u=0;u<d.length;u++){i=d[u],l=i.getAttribute("data-href");if(l===r||l===c)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var r=t&&t.target&&t.target.src||c,a=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");a.code="CSS_CHUNK_LOAD_FAILED",a.request=r,delete o[e],b.parentNode.removeChild(b),n(a)},b.href=c;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){o[e]=0})));var r=c[e];if(0!==r)if(r)t.push(r[2]);else{var a=new Promise((function(t,n){r=c[e]=[t,n]}));t.push(r[2]=a);var i,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=u(e);var d=new Error;i=function(t){l.onerror=l.onload=null,clearTimeout(b);var n=c[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+o+")",d.name="ChunkLoadError",d.type=r,d.request=o,n[1](d)}c[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:l})}),12e4);l.onerror=l.onload=i,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var d=0;d<i.length;d++)t(i[d]);var b=l;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"2a37":function(e,t,n){"use strict";n("2e5d")},"2e5d":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("7a23");function o(e,t,n,o,c,a){const u=Object(r["D"])("Header"),s=Object(r["D"])("router-view");return Object(r["w"])(),Object(r["f"])(r["a"],null,[Object(r["j"])(u),Object(r["j"])(s)],64)}const c={id:"nav"},a={class:"nav__logo"},u={class:"nav__container"},s=Object(r["g"])("span",{class:"nav__divider"},"❤",-1),i=Object(r["g"])("span",{class:"nav__divider"},"❤",-1),l=Object(r["g"])("span",{class:"nav__divider"},"❤",-1),d=Object(r["g"])("span",{class:"nav__divider"},"❤",-1);function b(e,t){const n=Object(r["D"])("router-link");return Object(r["w"])(),Object(r["f"])("div",c,[Object(r["g"])("div",a,[Object(r["j"])(n,{to:"/"},{default:Object(r["K"])(()=>[Object(r["i"])("LOGO")]),_:1})]),Object(r["g"])("div",u,[Object(r["g"])("div",null,[s,Object(r["j"])(n,{to:"/about"},{default:Object(r["K"])(()=>[Object(r["i"])("Acerca de mí")]),_:1})]),Object(r["g"])("div",null,[i,Object(r["j"])(n,{to:"/resume"},{default:Object(r["K"])(()=>[Object(r["i"])("Currículum")]),_:1})]),Object(r["g"])("div",null,[l,Object(r["j"])(n,{to:"/projects"},{default:Object(r["K"])(()=>[Object(r["i"])("Proyectos")]),_:1})]),Object(r["g"])("div",null,[d,Object(r["j"])(n,{to:"/contact"},{default:Object(r["K"])(()=>[Object(r["i"])("Contacto")]),_:1})])])])}n("2a37");var p=n("6b0d"),f=n.n(p);const j={},m=f()(j,[["render",b]]);var v=m,O={components:{Header:v}};const h=f()(O,[["render",o]]);var g=h,y=n("6605");const _={class:"home page-container"},w=Object(r["g"])("h2",{style:{"margin-top":"2rem"}},[Object(r["i"])("This is the homepage "),Object(r["g"])("br"),Object(r["i"])(" This website is under construction!")],-1),P=[w];function C(e,t,n,o,c,a){return Object(r["w"])(),Object(r["f"])("div",_,P)}var k={name:"Home"};const E=f()(k,[["render",C]]);var S=E;const T=[{path:"/",name:"Home",component:S},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/resume",name:"Resume",component:()=>n.e("resume").then(n.bind(null,"1ba2"))},{path:"/projects",name:"Projects",component:()=>n.e("projects").then(n.bind(null,"acca"))},{path:"/contact",name:"Contact",component:()=>n.e("contact").then(n.bind(null,"b8fa"))}],A=Object(y["a"])({history:Object(y["b"])(),routes:T});var x=A,K=n("5502"),L=Object(K["a"])({state:{},mutations:{},actions:{},modules:{}});n("c860");Object(r["c"])(g).use(L).use(x).mount("#app")},c860:function(e,t,n){}});
//# sourceMappingURL=app.d958ae4e.js.map