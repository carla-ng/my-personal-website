(function(e){function t(t){for(var a,o,i=t[0],s=t[1],l=t[2],u=0,d=[];u<i.length;u++)o=i[u],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);b&&b(t);while(d.length)d.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],a=!0,o=1;o<n.length;o++){var i=n[o];0!==r[i]&&(a=!1)}a&&(c.splice(t--,1),e=s(s.s=n[0]))}return e}var a={},o={app:0},r={app:0},c=[];function i(e){return s.p+"js/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[e]||e)+"."+{about:"36600afa",contact:"35584ca7",projects:"d5b8967e",resume:"03fcb444"}[e]+".js"}function s(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,contact:1,projects:1,resume:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var a="css/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[e]||e)+"."+{about:"fae65391",contact:"12718be2",projects:"7e993b70",resume:"07a25e8c"}[e]+".css",r=s.p+a,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var l=c[i],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===a||u===r))return t()}var d=document.getElementsByTagName("style");for(i=0;i<d.length;i++){l=d[i],u=l.getAttribute("data-href");if(u===a||u===r)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||r,c=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=a,delete o[e],b.parentNode.removeChild(b),n(c)},b.href=r;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){o[e]=0})));var a=r[e];if(0!==a)if(a)t.push(a[2]);else{var c=new Promise((function(t,n){a=r[e]=[t,n]}));t.push(a[2]=c);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=i(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=r[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+o+")",d.name="ChunkLoadError",d.type=a,d.request=o,n[1](d)}r[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=a,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)s.d(n,a,function(t){return e[t]}.bind(null,a));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var b=u;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1afc":function(e,t,n){"use strict";n("8d5f")},"2f06":function(e,t,n){},3302:function(e,t,n){},"34d0":function(e,t,n){"use strict";n("3302")},"56d7":function(e,t,n){"use strict";n.r(t);var a=n("7a23");function o(e,t,n,o,r,c){const i=Object(a["D"])("Header"),s=Object(a["D"])("router-view"),l=Object(a["D"])("Footer");return Object(a["w"])(),Object(a["f"])(a["a"],null,[Object(a["j"])(i),Object(a["j"])(s),Object(a["j"])(l)],64)}const r={class:"nav__top"},c={class:"nav__top--logo"},i=Object(a["g"])("span",null,null,-1),s=Object(a["g"])("span",null,null,-1),l=Object(a["g"])("span",null,null,-1),u=[i,s,l],d={class:"nav__container"},b=Object(a["g"])("span",{class:"nav__container--divider"},null,-1),p=Object(a["g"])("span",{class:"nav__container--divider"},null,-1),v=Object(a["g"])("span",{class:"nav__container--divider"},null,-1),f=Object(a["g"])("span",{class:"nav__container--divider"},null,-1),j={key:0,class:"nav__veil"};function m(e,t,n,o,i,s){const l=Object(a["D"])("router-link");return Object(a["w"])(),Object(a["f"])("header",{id:"nav",class:Object(a["q"])(o.showingNav?"show-nav":"")},[Object(a["g"])("div",r,[Object(a["g"])("div",c,[Object(a["j"])(l,{to:"/"},{default:Object(a["K"])(()=>[Object(a["i"])("LOGO")]),_:1})]),Object(a["g"])("div",{class:"nav__top--hamburger",onClick:t[0]||(t[0]=(...e)=>o.toggleNavVisibility&&o.toggleNavVisibility(...e))},u)]),Object(a["g"])("nav",d,[Object(a["g"])("div",null,[b,Object(a["j"])(l,{onClick:o.toggleNavVisibility,to:"/about"},{default:Object(a["K"])(()=>[Object(a["i"])("Acerca de mi")]),_:1},8,["onClick"])]),Object(a["g"])("div",null,[p,Object(a["j"])(l,{onClick:o.toggleNavVisibility,to:"/resume"},{default:Object(a["K"])(()=>[Object(a["i"])("Curriculum")]),_:1},8,["onClick"])]),Object(a["g"])("div",null,[v,Object(a["j"])(l,{onClick:o.toggleNavVisibility,to:"/projects"},{default:Object(a["K"])(()=>[Object(a["i"])("Proyectos")]),_:1},8,["onClick"])]),Object(a["g"])("div",null,[f,Object(a["j"])(l,{onClick:o.toggleNavVisibility,to:"/contact"},{default:Object(a["K"])(()=>[Object(a["i"])("Contacto")]),_:1},8,["onClick"])])]),o.showingNav?(Object(a["w"])(),Object(a["f"])("div",j)):Object(a["e"])("",!0)],2)}var g={setup(){let e=Object(a["B"])(!1),t=Object(a["B"])(window.innerWidth<769);const n=()=>{if(t.value){e.value=!e.value;var n=document.getElementsByTagName("html")[0];n.classList.contains("no-scroll")?n.classList.remove("no-scroll"):n.classList.add("no-scroll")}},o=()=>{t.value=window.innerWidth<769};return Object(a["u"])(()=>{window.addEventListener("resize",o)}),Object(a["s"])(()=>{window.removeEventListener("resize",o)}),{showingNav:e,toggleNavVisibility:n}}},O=(n("1afc"),n("6b0d")),h=n.n(O);const _=h()(g,[["render",m]]);var y=_;const w=e=>(Object(a["z"])("data-v-ea0939d8"),e=e(),Object(a["x"])(),e),C={class:"footer"},k=w(()=>Object(a["g"])("a",{class:"footer__text",href:"https://github.com/carla-ng/",target:"_blank"},[Object(a["i"])(" Hecho con "),Object(a["g"])("span",{class:"footer__text--heart"}),Object(a["i"])(" por Carla Nardone ")],-1)),N=[k];function E(e,t,n,o,r,c){return Object(a["w"])(),Object(a["f"])("footer",C,N)}var x={setup(){return{}}};n("34d0");const P=h()(x,[["render",E],["__scopeId","data-v-ea0939d8"]]);var L=P,S={components:{Header:y,Footer:L}};const A=h()(S,[["render",o]]);var T=A,B=n("6605");const D={class:"home page-container"},V=Object(a["h"])('<div class="home--container" data-v-49071cd0><div class="home__image" data-v-49071cd0></div><div class="home__intro" data-v-49071cd0><h1 class="home__intro--welcome typewriter-effect" data-v-49071cd0>¡Bienvenid@!</h1><p data-v-49071cd0><span data-v-49071cd0>Soy Carla</span>, una apasionada <strong class="accent-03" data-v-49071cd0>Desarrolladora Web especializada en Front-end</strong>. Me encanta dar vida a proyectos creativos y diseñar experiencias únicas. Explorar el arte de la programación es mi pasión, y aquí compartiré contigo mis creaciones y aventuras en el universo del desarrollo web. </p></div></div>',1),H=[V];function K(e,t,n,o,r,c){return Object(a["w"])(),Object(a["f"])("main",D,H)}var M={name:"Home"};n("d52e");const q=h()(M,[["render",K],["__scopeId","data-v-49071cd0"]]);var z=q;const F=[{path:"/",name:"Home",component:z},{path:"/about",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/resume",name:"Resume",component:()=>n.e("resume").then(n.bind(null,"1ba2"))},{path:"/projects",name:"Projects",component:()=>n.e("projects").then(n.bind(null,"acca"))},{path:"/contact",name:"Contact",component:()=>n.e("contact").then(n.bind(null,"b8fa"))}],I=Object(B["a"])({history:Object(B["b"])(),routes:F});var W=I,J=n("5502"),G=Object(J["a"])({state:{},mutations:{},actions:{},modules:{}});n("c860");Object(a["c"])(T).use(G).use(W).mount("#app")},"8d5f":function(e,t,n){},c860:function(e,t,n){},d52e:function(e,t,n){"use strict";n("2f06")}});
//# sourceMappingURL=app.8eed7d5e.js.map