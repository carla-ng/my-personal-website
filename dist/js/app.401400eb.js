(function(e){function t(t){for(var c,o,s=t[0],i=t[1],l=t[2],u=0,b=[];u<s.length;u++)o=s[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&b.push(a[o][0]),a[o]=0;for(c in i)Object.prototype.hasOwnProperty.call(i,c)&&(e[c]=i[c]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var s=n[o];0!==a[s]&&(c=!1)}c&&(r.splice(t--,1),e=i(i.s=n[0]))}return e}var c={},o={app:0},a={app:0},r=[];function s(e){return i.p+"js/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[e]||e)+"."+{about:"9cf8bee7",contact:"cc3f4c93",projects:"cf98eed5",resume:"f28b5e1d"}[e]+".js"}function i(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={about:1,contact:1,projects:1,resume:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[e]||e)+"."+{about:"c0753e69",contact:"ef6ea377",projects:"b1015208",resume:"cd590c03"}[e]+".css",a=i.p+c,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===c||u===a))return t()}var b=document.getElementsByTagName("style");for(s=0;s<b.length;s++){l=b[s],u=l.getAttribute("data-href");if(u===c||u===a)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var c=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[e],d.parentNode.removeChild(d),n(r)},d.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var b=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",b.name="ChunkLoadError",b.type=c,b.request=o,n[1](b)}a[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=c,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)i.d(n,c,function(t){return e[t]}.bind(null,c));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=u;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4200:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,a,r){const s=Object(c["D"])("Header"),i=Object(c["D"])("router-view"),l=Object(c["D"])("Footer");return Object(c["w"])(),Object(c["f"])(c["a"],null,[Object(c["j"])(s),Object(c["j"])(i),Object(c["j"])(l)],64)}const a={class:"nav__top"},r={class:"nav__top--logo"},s=Object(c["g"])("span",null,"Carla",-1),i=Object(c["g"])("span",null,"Nardone",-1),l=Object(c["g"])("span",null,null,-1),u=Object(c["g"])("span",null,null,-1),b=Object(c["g"])("span",null,null,-1),d=[l,u,b],p={class:"nav__container"},v=Object(c["g"])("span",{class:"nav__container--divider"},null,-1),f=Object(c["g"])("span",{class:"nav__container--divider"},null,-1),j=Object(c["g"])("span",{class:"nav__container--divider"},null,-1),O=Object(c["g"])("span",{class:"nav__container--divider"},null,-1);function g(e,t,n,o,l,u){const b=Object(c["D"])("router-link");return Object(c["w"])(),Object(c["f"])("header",{id:"nav",class:Object(c["q"])(o.showingNav?"show-nav":"")},[Object(c["g"])("div",a,[Object(c["g"])("div",r,[Object(c["j"])(b,{to:"/"},{default:Object(c["K"])(()=>[s,i]),_:1})]),Object(c["g"])("div",{class:"nav__top--hamburger",onClick:t[0]||(t[0]=(...e)=>o.toggleNavVisibility&&o.toggleNavVisibility(...e))},d)]),Object(c["g"])("nav",p,[Object(c["g"])("ul",null,[Object(c["g"])("li",null,[v,Object(c["j"])(b,{onClick:o.toggleNavVisibility,to:"/acerca"},{default:Object(c["K"])(()=>[Object(c["i"])("Acerca de mi")]),_:1},8,["onClick"])]),Object(c["g"])("li",null,[f,Object(c["j"])(b,{onClick:o.toggleNavVisibility,to:"/curriculum"},{default:Object(c["K"])(()=>[Object(c["i"])("Curriculum")]),_:1},8,["onClick"])]),Object(c["g"])("li",null,[j,Object(c["j"])(b,{onClick:o.toggleNavVisibility,to:"/proyectos"},{default:Object(c["K"])(()=>[Object(c["i"])("Proyectos")]),_:1},8,["onClick"])]),Object(c["g"])("li",null,[O,Object(c["j"])(b,{onClick:o.toggleNavVisibility,to:"/contacto"},{default:Object(c["K"])(()=>[Object(c["i"])("Contacto")]),_:1},8,["onClick"])])])]),o.showingNav?(Object(c["w"])(),Object(c["f"])("div",{key:0,class:"nav__veil",onClick:t[1]||(t[1]=(...e)=>o.toggleNavVisibility&&o.toggleNavVisibility(...e))})):Object(c["e"])("",!0)],2)}var h={setup(){let e=Object(c["B"])(!1),t=Object(c["B"])(window.innerWidth<769);const n=()=>{if(t.value){e.value=!e.value;let t=document.getElementsByTagName("html")[0];t.classList.contains("no-scroll")?t.classList.remove("no-scroll"):t.classList.add("no-scroll")}},o=()=>{t.value=window.innerWidth<769};return Object(c["u"])(()=>{window.addEventListener("resize",o)}),Object(c["s"])(()=>{window.removeEventListener("resize",o)}),{showingNav:e,toggleNavVisibility:n}}},m=(n("6865"),n("6b0d")),_=n.n(m);const w=_()(h,[["render",g]]);var y=w;const x=e=>(Object(c["z"])("data-v-6f0096ce"),e=e(),Object(c["x"])(),e),k=x(()=>Object(c["g"])("footer",{class:"footer"},[Object(c["g"])("a",{class:"footer__link",href:"https://github.com/carla-ng/my-personal-website",target:"_blank"},[Object(c["i"])(" Hecho con "),Object(c["g"])("span",{class:"footer__link--heart"}),Object(c["i"])(" por Carla Nardone ")])],-1));function T(e,t,n,o,a,r){const s=Object(c["D"])("ScrollToTopButton");return Object(c["w"])(),Object(c["f"])(c["a"],null,[Object(c["j"])(s),k],64)}function C(e,t,n,o,a,r){const s=Object(c["D"])("AlertBox");return Object(c["L"])((Object(c["w"])(),Object(c["d"])(s,{class:"scroll-to-top",onClick:o.scrollToTop,hide_alert_sign:"true",alert_text:'<?xml version="1.0" encoding="UTF-8"?><svg sodipodi:docbase="/datas/Projs/Cliparts Stocker/tmp/AIGA" sodipodi:docname="AIGA_Left_Arrow_1.svg" sodipodi:version="0.32" viewBox="0 0 431.32 360.61" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview bordercolor="#000" borderopacity="1.0" pagecolor="#000"/><path d="m180.2 360.4-180.2-180.2 180.2-180.2h118.85l-137.06 137.07h269.33v87.22h-268.37l136.31 136.32-119.06-0.21z" fill="#fff"/></svg>'},null,8,["onClick"])),[[c["I"],o.showScrollToTop]])}var S=n("d6df"),N={components:{AlertBox:S["a"]},setup(){const e=Object(c["B"])(!1),t=()=>{e.value=window.scrollY>600},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Object(c["u"])(()=>{window.addEventListener("scroll",t)}),Object(c["s"])(()=>{window.removeEventListener("scroll",t)}),{showScrollToTop:e,scrollToTop:n}}};n("7802");const A=_()(N,[["render",C],["__scopeId","data-v-cb880d78"]]);var L=A,B={components:{ScrollToTopButton:L}};n("eb91");const E=_()(B,[["render",T],["__scopeId","data-v-6f0096ce"]]);var P=E,D={components:{Header:y,Footer:P}};const H=_()(D,[["render",o]]);var I=H,M=n("6605");const V=e=>(Object(c["z"])("data-v-6bcc5fe3"),e=e(),Object(c["x"])(),e),z={class:"home page-container"},K={class:"home__temp-alert"},q={class:"home__container"},F=Object(c["h"])('<div class="home__image" data-v-6bcc5fe3><div class="home__image-pixelart" data-v-6bcc5fe3></div><div class="home__heart-container" data-v-6bcc5fe3><div class="heart-1__container" data-v-6bcc5fe3><div class="heart-1" data-v-6bcc5fe3></div></div><div class="heart-2__container" data-v-6bcc5fe3><div class="heart-2" data-v-6bcc5fe3></div></div><div class="heart-3__container" data-v-6bcc5fe3><div class="heart-3" data-v-6bcc5fe3></div></div></div></div>',1),W={class:"home__pixelart mobile"},G=V(()=>Object(c["g"])("div",{class:"home__intro"},[Object(c["g"])("h1",{class:"home__intro-welcome typewriter-effect"},"¡Bienvenid@!"),Object(c["g"])("p",null,[Object(c["g"])("span",null,"Soy Carla"),Object(c["i"])(", una apasionada "),Object(c["g"])("strong",{class:"accent-01"},"Desarrolladora Web especializada en Front-end"),Object(c["i"])(". Me encanta dar vida a proyectos creativos y diseñar experiencias únicas. Explorar el arte de la programación es mi pasión, y aquí compartiré contigo mis creaciones y aventuras en el universo del desarrollo web. ")])],-1)),J={class:"home__pixelart desktop"};function U(e,t,n,o,a,r){const s=Object(c["D"])("AlertBox"),i=Object(c["D"])("SpeechBubble");return Object(c["w"])(),Object(c["f"])("main",z,[Object(c["g"])("div",K,[Object(c["j"])(s,{alert_text:"¡Pssst! ¡Esta web se encuentra en construcción!"})]),Object(c["g"])("section",q,[F,Object(c["g"])("div",W,[Object(c["j"])(i,{speechbubble_text:"Todo el Pixel Art en esta web ha sido hecho por mí con CSS",speechbubble_position:"top-left"})]),G]),Object(c["g"])("div",J,[Object(c["j"])(i,{speechbubble_text:"Todo el Pixel Art en esta web ha sido hecho por mí con CSS",speechbubble_position:"top-left"})])])}var R=n("5af6"),Y={name:"Home",components:{AlertBox:S["a"],SpeechBubble:R["a"]}};n("f8b1");const Q=_()(Y,[["render",U],["__scopeId","data-v-6bcc5fe3"]]);var X=Q;const Z=[{path:"/",name:"Home",component:X},{path:"/acerca",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/curriculum",name:"Resume",component:()=>n.e("resume").then(n.bind(null,"1ba2"))},{path:"/proyectos",name:"Projects",component:()=>n.e("projects").then(n.bind(null,"acca"))},{path:"/contacto",name:"Contact",component:()=>n.e("contact").then(n.bind(null,"b8fa"))}],$=Object(M["a"])({history:Object(M["b"])("/"),routes:Z});var ee=$,te=n("5502"),ne=Object(te["a"])({state:{},mutations:{},actions:{},modules:{}});n("c860");Object(c["c"])(I).use(ne).use(ee).mount("#app")},"5af6":function(e,t,n){"use strict";var c=n("7a23");const o=["innerHTML"];function a(e,t,n,a,r,s){return Object(c["w"])(),Object(c["f"])("div",null,[Object(c["g"])("div",{class:Object(c["q"])(["speechbubble",n.speechbubble_position]),innerHTML:n.speechbubble_text},null,10,o)])}var r={props:{speechbubble_text:String,speechbubble_position:String}},s=(n("eabb"),n("6b0d")),i=n.n(s);const l=i()(r,[["render",a],["__scopeId","data-v-1e767d98"]]);t["a"]=l},6865:function(e,t,n){"use strict";n("8f9c")},"693a":function(e,t,n){},7802:function(e,t,n){"use strict";n("fe3f")},"8f9c":function(e,t,n){},"97f1":function(e,t,n){"use strict";n("b501")},b501:function(e,t,n){},c860:function(e,t,n){},d1a0:function(e,t,n){},d6df:function(e,t,n){"use strict";var c=n("7a23");const o={class:"alertbox"},a={key:0,class:"alertbox__exclamation"},r=["innerHTML"];function s(e,t,n,s,i,l){return Object(c["w"])(),Object(c["f"])("div",o,[n.hide_alert_sign?Object(c["e"])("",!0):(Object(c["w"])(),Object(c["f"])("span",a,"!")),Object(c["g"])("div",{class:"alertbox__text",innerHTML:n.alert_text},null,8,r)])}var i={props:{alert_text:String,hide_alert_sign:String}},l=(n("97f1"),n("6b0d")),u=n.n(l);const b=u()(i,[["render",s],["__scopeId","data-v-9e1caada"]]);t["a"]=b},eabb:function(e,t,n){"use strict";n("693a")},eb91:function(e,t,n){"use strict";n("4200")},f8b1:function(e,t,n){"use strict";n("d1a0")},fe3f:function(e,t,n){}});
//# sourceMappingURL=app.401400eb.js.map