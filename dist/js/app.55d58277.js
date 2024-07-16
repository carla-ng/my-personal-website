(function(e){function t(t){for(var c,o,i=t[0],s=t[1],l=t[2],d=0,u=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&u.push(a[o][0]),a[o]=0;for(c in s)Object.prototype.hasOwnProperty.call(s,c)&&(e[c]=s[c]);b&&b(t);while(u.length)u.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],c=!0,o=1;o<n.length;o++){var i=n[o];0!==a[i]&&(c=!1)}c&&(r.splice(t--,1),e=s(s.s=n[0]))}return e}var c={},o={app:0},a={app:0},r=[];function i(e){return s.p+"js/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[e]||e)+"."+{about:"2a46799a","chunk-4b08fc60":"ca489647",contact:"cc249965",projects:"28c78743",resume:"66f9341e"}[e]+".js"}function s(t){if(c[t])return c[t].exports;var n=c[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={about:1,"chunk-4b08fc60":1,contact:1,projects:1,resume:1};o[e]?t.push(o[e]):0!==o[e]&&n[e]&&t.push(o[e]=new Promise((function(t,n){for(var c="css/"+({about:"about",contact:"contact",projects:"projects",resume:"resume"}[e]||e)+"."+{about:"864e9a56","chunk-4b08fc60":"22edc4cd",contact:"72e033d8",projects:"9d99023d",resume:"ac3db30d"}[e]+".css",a=s.p+c,r=document.getElementsByTagName("link"),i=0;i<r.length;i++){var l=r[i],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===c||d===a))return t()}var u=document.getElementsByTagName("style");for(i=0;i<u.length;i++){l=u[i],d=l.getAttribute("data-href");if(d===c||d===a)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||a,r=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=c,delete o[e],b.parentNode.removeChild(b),n(r)},b.href=a;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){o[e]=0})));var c=a[e];if(0!==c)if(c)t.push(c[2]);else{var r=new Promise((function(t,n){c=a[e]=[t,n]}));t.push(c[2]=r);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,s.nc&&d.setAttribute("nonce",s.nc),d.src=i(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(b);var n=a[e];if(0!==n){if(n){var c=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+o+")",u.name="ChunkLoadError",u.type=c,u.request=o,n[1](u)}a[e]=void 0}};var b=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},s.m=e,s.c=c,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)s.d(n,c,function(t){return e[t]}.bind(null,c));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var b=d;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},1254:function(e,t,n){"use strict";n("2719")},"1ea3":function(e,t,n){"use strict";n("32dc")},2719:function(e,t,n){},"32dc":function(e,t,n){},"3e5e":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);var c=n("7a23");function o(e,t,n,o,a,r){const i=Object(c["C"])("Header"),s=Object(c["C"])("router-view"),l=Object(c["C"])("Footer");return Object(c["v"])(),Object(c["f"])(c["a"],null,[Object(c["j"])(i),Object(c["j"])(s),Object(c["j"])(l)],64)}const a={class:"nav__top"},r={class:"nav__top--logo"},i=Object(c["g"])("span",null,"Carla",-1),s=Object(c["g"])("span",null,"Nardone",-1),l=Object(c["g"])("span",null,null,-1),d=Object(c["g"])("span",null,null,-1),u=Object(c["g"])("span",null,null,-1),b=[l,d,u],p={class:"nav__container"},v=Object(c["g"])("span",{class:"nav__container--divider"},null,-1),f=Object(c["g"])("span",{class:"nav__container--divider"},null,-1),j=Object(c["g"])("span",{class:"nav__container--divider"},null,-1),h=Object(c["g"])("span",{class:"nav__container--divider"},null,-1);function g(e,t,n,o,l,d){const u=Object(c["C"])("router-link");return Object(c["v"])(),Object(c["f"])("header",{id:"nav",class:Object(c["p"])(o.showingNav?"show-nav":"")},[Object(c["g"])("div",a,[Object(c["g"])("div",r,[Object(c["j"])(u,{to:"/"},{default:Object(c["J"])(()=>[i,s]),_:1})]),Object(c["g"])("div",{class:"nav__top--hamburger",onClick:t[0]||(t[0]=(...e)=>o.toggleNavVisibility&&o.toggleNavVisibility(...e))},b)]),Object(c["g"])("nav",p,[Object(c["g"])("ul",null,[Object(c["g"])("li",null,[v,Object(c["j"])(u,{onClick:o.toggleNavVisibility,to:"/acerca"},{default:Object(c["J"])(()=>[Object(c["i"])("Acerca de mi")]),_:1},8,["onClick"])]),Object(c["g"])("li",null,[f,Object(c["j"])(u,{onClick:o.toggleNavVisibility,to:"/curriculum"},{default:Object(c["J"])(()=>[Object(c["i"])("Curriculum")]),_:1},8,["onClick"])]),Object(c["g"])("li",null,[j,Object(c["j"])(u,{onClick:o.toggleNavVisibility,to:"/portafolio"},{default:Object(c["J"])(()=>[Object(c["i"])("Portafolio")]),_:1},8,["onClick"])]),Object(c["g"])("li",null,[h,Object(c["j"])(u,{onClick:o.toggleNavVisibility,to:"/contacto"},{default:Object(c["J"])(()=>[Object(c["i"])("Contacto")]),_:1},8,["onClick"])])])]),o.showingNav?(Object(c["v"])(),Object(c["f"])("div",{key:0,class:"nav__veil",onClick:t[1]||(t[1]=(...e)=>o.toggleNavVisibility&&o.toggleNavVisibility(...e))})):Object(c["e"])("",!0)],2)}var O={setup(){let e=Object(c["A"])(!1),t=Object(c["A"])(window.innerWidth<769);const n=()=>{if(t.value){e.value=!e.value;let t=document.getElementsByTagName("html")[0];t.classList.contains("no-scroll")?t.classList.remove("no-scroll"):t.classList.add("no-scroll")}},o=()=>{t.value=window.innerWidth<769};return Object(c["t"])(()=>{window.addEventListener("resize",o)}),Object(c["r"])(()=>{window.removeEventListener("resize",o)}),{showingNav:e,toggleNavVisibility:n}}},m=(n("1254"),n("6b0d")),_=n.n(m);const w=_()(O,[["render",g]]);var y=w;const x=e=>(Object(c["y"])("data-v-04e86f64"),e=e(),Object(c["w"])(),e),C=x(()=>Object(c["g"])("footer",{class:"footer"},[Object(c["g"])("a",{class:"footer__link",href:"https://github.com/carla-ng/my-personal-website",target:"_blank"},[Object(c["i"])(" Diseñado y desarrollado con "),Object(c["g"])("span",{class:"footer__link--heart"}),Object(c["i"])(" por Carla Nardone ")])],-1));function k(e,t,n,o,a,r){const i=Object(c["C"])("ScrollToTopButton");return Object(c["v"])(),Object(c["f"])(c["a"],null,[Object(c["j"])(i),C],64)}function T(e,t,n,o,a,r){const i=Object(c["C"])("AlertBox");return Object(c["K"])((Object(c["v"])(),Object(c["d"])(i,{class:"scroll-to-top",onClick:o.scrollToTop,hide_alert_sign:"true",alert_text:'<?xml version="1.0" encoding="UTF-8"?><svg sodipodi:docbase="/datas/Projs/Cliparts Stocker/tmp/AIGA" sodipodi:docname="AIGA_Left_Arrow_1.svg" sodipodi:version="0.32" viewBox="0 0 431.32 360.61" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://web.resource.org/cc/" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" xmlns:sodipodi="http://inkscape.sourceforge.net/DTD/sodipodi-0.dtd"><sodipodi:namedview bordercolor="#000" borderopacity="1.0" pagecolor="#000"/><path d="m180.2 360.4-180.2-180.2 180.2-180.2h118.85l-137.06 137.07h269.33v87.22h-268.37l136.31 136.32-119.06-0.21z" fill="#fff"/></svg>'},null,8,["onClick"])),[[c["H"],o.showScrollToTop]])}var S=n("d6df"),N={components:{AlertBox:S["a"]},setup(){const e=Object(c["A"])(!1),t=()=>{e.value=window.scrollY>600},n=()=>{window.scrollTo({top:0,behavior:"smooth"})};return Object(c["t"])(()=>{window.addEventListener("scroll",t)}),Object(c["r"])(()=>{window.removeEventListener("scroll",t)}),{showScrollToTop:e,scrollToTop:n}}};n("1ea3");const A=_()(N,[["render",T],["__scopeId","data-v-3590f078"]]);var L=A,P={components:{ScrollToTopButton:L}};n("cc6b");const E=_()(P,[["render",k],["__scopeId","data-v-04e86f64"]]);var B=E,H={components:{Header:y,Footer:B}};const M=_()(H,[["render",o]]);var I=M,V=n("6605");const D=e=>(Object(c["y"])("data-v-989ccd52"),e=e(),Object(c["w"])(),e),J={class:"home page-container"},F={class:"home__container"},z=Object(c["h"])('<div class="home__image" data-v-989ccd52><div class="home__image-pixelart" data-v-989ccd52></div><div class="home__heart-container" data-v-989ccd52><div class="heart-1__container" data-v-989ccd52><div class="heart-1" data-v-989ccd52></div></div><div class="heart-2__container" data-v-989ccd52><div class="heart-2" data-v-989ccd52></div></div><div class="heart-3__container" data-v-989ccd52><div class="heart-3" data-v-989ccd52></div></div></div></div>',1),U={class:"home__pixelart mobile"},q=D(()=>Object(c["g"])("div",{class:"home__intro"},[Object(c["g"])("h1",{class:"home__intro-welcome typewriter-effect"},"¡Bienvenid@!"),Object(c["g"])("p",null,[Object(c["g"])("span",null,"Soy Carla"),Object(c["i"])(", una apasionada "),Object(c["g"])("strong",{class:"accent-01"},"Desarrolladora Web especializada en Frontend"),Object(c["i"])(". Me encanta dar vida a proyectos creativos, diseñar experiencias únicas y explorar el "),Object(c["g"])("strong",{class:"accent-01"},"Diseño UX/UI"),Object(c["i"])(". El arte de la programación es mi pasión, y aquí compartiré contigo mis creaciones y aventuras en el universo del diseño y el desarrollo web. ")])],-1)),W={class:"home__pixelart desktop"};function G(e,t,n,o,a,r){const i=Object(c["C"])("SpeechBubble");return Object(c["v"])(),Object(c["f"])("main",J,[Object(c["g"])("section",F,[z,Object(c["g"])("div",U,[Object(c["j"])(i,{speechbubble_text:"Todo el Pixel Art en esta web ha sido hecho por mí con CSS",speechbubble_position:"top-left"})]),q]),Object(c["g"])("div",W,[Object(c["j"])(i,{speechbubble_text:"Todo el Pixel Art en esta web ha sido hecho por mí con CSS",speechbubble_position:"top-left"})])])}var K=n("5af6"),R={name:"Home",components:{SpeechBubble:K["a"]}};n("e7fd");const X=_()(R,[["render",G],["__scopeId","data-v-989ccd52"]]);var Y=X;const Q=[{path:"/",name:"Home",component:Y},{path:"/acerca",name:"About",component:()=>n.e("about").then(n.bind(null,"f820"))},{path:"/curriculum",name:"Resume",component:()=>n.e("resume").then(n.bind(null,"1ba2"))},{path:"/portafolio",name:"Projects",component:()=>n.e("projects").then(n.bind(null,"acca"))},{path:"/contacto",name:"Contact",component:()=>n.e("contact").then(n.bind(null,"b8fa"))},{path:"/:pathMatch(.*)*",name:"PageNotFound",component:()=>n.e("chunk-4b08fc60").then(n.bind(null,"a5b5"))}],Z=Object(V["a"])({history:Object(V["b"])("/"),routes:Q});var $=Z;n("c860");Object(c["c"])(I).use($).mount("#app")},"5af6":function(e,t,n){"use strict";var c=n("7a23");const o=["innerHTML"];function a(e,t,n,a,r,i){return Object(c["v"])(),Object(c["f"])("div",null,[Object(c["g"])("div",{class:Object(c["p"])(["speechbubble",n.speechbubble_position]),innerHTML:n.speechbubble_text},null,10,o)])}var r={props:{speechbubble_text:String,speechbubble_position:String}},i=(n("c1ba"),n("6b0d")),s=n.n(i);const l=s()(r,[["render",a],["__scopeId","data-v-553507bf"]]);t["a"]=l},"90a7":function(e,t,n){},ac99:function(e,t,n){"use strict";n("3e5e")},c1ba:function(e,t,n){"use strict";n("fee0")},c860:function(e,t,n){},cc6b:function(e,t,n){"use strict";n("90a7")},d4ea:function(e,t,n){},d6df:function(e,t,n){"use strict";var c=n("7a23");const o={class:"alertbox"},a={key:0,class:"alertbox__exclamation"},r=["innerHTML"];function i(e,t,n,i,s,l){return Object(c["v"])(),Object(c["f"])("div",o,[n.hide_alert_sign?Object(c["e"])("",!0):(Object(c["v"])(),Object(c["f"])("span",a,"!")),Object(c["g"])("div",{class:"alertbox__text",innerHTML:n.alert_text},null,8,r)])}var s={props:{alert_text:String,hide_alert_sign:String}},l=(n("ac99"),n("6b0d")),d=n.n(l);const u=d()(s,[["render",i],["__scopeId","data-v-74ac33ae"]]);t["a"]=u},e7fd:function(e,t,n){"use strict";n("d4ea")},fee0:function(e,t,n){}});
//# sourceMappingURL=app.55d58277.js.map