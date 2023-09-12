"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48803],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>d});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),o=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=o(e.components);return n.createElement(m.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),b=o(a),d=r,c=b["".concat(m,".").concat(d)]||b[d]||k[d]||l;return a?n.createElement(c,i(i({ref:t},u),{},{components:a})):n.createElement(c,i({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=b;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}b.displayName="MDXCreateElement"},99169:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>p,default:()=>b,frontMatter:()=>i,metadata:()=>m,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"preemptiveWeb",title:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6Web\u30d7\u30ed\u30bb\u30b9\u306e\u4f7f\u7528"},p=void 0,m={unversionedId:"WebServer/preemptiveWeb",id:"version-20-R2/WebServer/preemptiveWeb",title:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6Web\u30d7\u30ed\u30bb\u30b9\u306e\u4f7f\u7528",description:"4D Web\u30b5\u30fc\u30d0\u30fc\u3092\u4f7f\u3063\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6Web\u30d7\u30ed\u30bb\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30de\u30eb\u30c1\u30b3\u30a2\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306e\u5229\u70b9\u3092\u6700\u5927\u9650\u5f15\u304d\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 4D\u5909\u63db\u30bf\u30b0\u3084 Web\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3001ORDA \u306e REST\u30af\u30e9\u30b9\u95a2\u6570\u3092\u542b\u3081\u305f Web\u95a2\u9023\u30b3\u30fc\u30c9\u3092\u3001\u53ef\u80fd\u306a\u9650\u308a\u591a\u304f\u306e\u30b3\u30a2\u3067\u540c\u6642\u306b\u5b9f\u884c\u3059\u308b\u3088\u3046\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R2/WebServer/preemptiveWeb.md",sourceDirName:"WebServer",slug:"/WebServer/preemptiveWeb",permalink:"/docs/ja/WebServer/preemptiveWeb",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WebServer%2FpreemptiveWeb.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"preemptiveWeb",title:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6Web\u30d7\u30ed\u30bb\u30b9\u306e\u4f7f\u7528"},sidebar:"docs",previous:{title:"\u30e6\u30fc\u30b6\u30fc\u30bb\u30c3\u30b7\u30e7\u30f3",permalink:"/docs/ja/WebServer/sessions"},next:{title:"Qodly Studio",permalink:"/docs/ja/WebServer/qodly-studio"}},o={},u=[{value:"Web\u30d7\u30ed\u30bb\u30b9\u306b\u304a\u3051\u308b\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u306e\u4f7f\u7528\u53ef\u80fd\u72b6\u6cc1",id:"web\u30d7\u30ed\u30bb\u30b9\u306b\u304a\u3051\u308b\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u306e\u4f7f\u7528\u53ef\u80fd\u72b6\u6cc1",level:2},{value:"\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u306aWeb\u30b5\u30fc\u30d0\u30fc\u30b3\u30fc\u30c9\u306e\u66f8\u304d\u65b9",id:"\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u306aweb\u30b5\u30fc\u30d0\u30fc\u30b3\u30fc\u30c9\u306e\u66f8\u304d\u65b9",level:2},{value:"4D Web\u30b3\u30fc\u30c9\u306e\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u30c6\u30a3",id:"4d-web\u30b3\u30fc\u30c9\u306e\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u30c6\u30a3",level:2},{value:"4D\u30b3\u30de\u30f3\u30c9\u3068\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9",id:"4d\u30b3\u30de\u30f3\u30c9\u3068\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9",level:3},{value:"Web\u30b5\u30fc\u30d0\u30fcURL",id:"web\u30b5\u30fc\u30d0\u30fcurl",level:3},{value:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6Web\u30d7\u30ed\u30bb\u30b9\u30a2\u30a4\u30b3\u30f3",id:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6web\u30d7\u30ed\u30bb\u30b9\u30a2\u30a4\u30b3\u30f3",level:3}],k={toc:u};function b(e){var{components:t}=e,i=l(e,["components"]);return(0,n.kt)("wrapper",r({},k,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"4D Web\u30b5\u30fc\u30d0\u30fc\u3092\u4f7f\u3063\u3066\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u3067\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6Web\u30d7\u30ed\u30bb\u30b9\u3092\u4f7f\u7528\u3059\u308b\u3053\u3068\u306b\u3088\u3063\u3066\u3001\u30de\u30eb\u30c1\u30b3\u30a2\u30b3\u30f3\u30d4\u30e5\u30fc\u30bf\u30fc\u306e\u5229\u70b9\u3092\u6700\u5927\u9650\u5f15\u304d\u51fa\u3059\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002 4D\u5909\u63db\u30bf\u30b0\u3084 Web\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3001ORDA \u306e REST\u30af\u30e9\u30b9\u95a2\u6570\u3092\u542b\u3081\u305f Web\u95a2\u9023\u30b3\u30fc\u30c9\u3092\u3001\u53ef\u80fd\u306a\u9650\u308a\u591a\u304f\u306e\u30b3\u30a2\u3067\u540c\u6642\u306b\u5b9f\u884c\u3059\u308b\u3088\u3046\u8a2d\u5b9a\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059\u3002"),(0,n.kt)("p",null,"4D \u306e\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,n.kt)("em",{parentName:"p"},"\u30e9\u30f3\u30b2\u30fc\u30b8\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9")," \u306e ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com"}),(0,n.kt)("em",{parentName:"a"},"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d64D\u30d7\u30ed\u30bb\u30b9"))," \u306e\u7ae0\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",r({},{id:"web\u30d7\u30ed\u30bb\u30b9\u306b\u304a\u3051\u308b\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u306e\u4f7f\u7528\u53ef\u80fd\u72b6\u6cc1"}),"Web\u30d7\u30ed\u30bb\u30b9\u306b\u304a\u3051\u308b\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u306e\u4f7f\u7528\u53ef\u80fd\u72b6\u6cc1"),(0,n.kt)("p",null,"\u5b9f\u884c\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u3088\u3063\u3066\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u304c\u4f7f\u7528\u3055\u308c\u308b\u3001\u307e\u305f\u306f\u4f7f\u7528\u53ef\u80fd\u304b\u3092\u6b21\u306e\u8868\u306b\u793a\u3057\u307e\u3059:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"4D Server"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc (",(0,n.kt)("a",r({parentName:"th"},{href:"/docs/ja/Debugging/debugging-remote"}),"\u30c7\u30d0\u30c3\u30ac\u30fc\u6709\u52b9"),")"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc (\u30c7\u30d0\u30c3\u30ac\u30fc\u7121\u52b9)"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30b3\u30fc\u30c9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"REST \u30b5\u30fc\u30d0\u30fc"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Web \u30b5\u30fc\u30d0\u30fc"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Web\u8a2d\u5b9a"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Web\u30b5\u30fc\u30d3\u30b9\u30b5\u30fc\u30d0\u30fc"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Web\u8a2d\u5b9a"))))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"4D\u30ea\u30e2\u30fc\u30c8/\u30b7\u30f3\u30b0\u30eb\u30e6\u30fc\u30b6\u30fc"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30a4\u30f3\u30bf\u30fc\u30d7\u30ea\u30bf\u30fc\u30b3\u30fc\u30c9"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30b3\u30f3\u30d1\u30a4\u30eb\u6e08\u307f\u30b3\u30fc\u30c9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"REST \u30b5\u30fc\u30d0\u30fc"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Web \u30b5\u30fc\u30d0\u30fc"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Web\u8a2d\u5b9a"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Web\u30b5\u30fc\u30d3\u30b9\u30b5\u30fc\u30d0\u30fc"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30b3\u30aa\u30da\u30e9\u30c6\u30a3\u30d6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("em",{parentName:"td"},"Web\u8a2d\u5b9a"))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"REST \u30b5\u30fc\u30d0\u30fc: REST \u3067\u547c\u3073\u51fa\u3055\u308c\u305f ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/ja/REST/classFunctions"}),"ORDA \u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u30af\u30e9\u30b9\u95a2\u6570")," \u3092\u51e6\u7406\u3057\u307e\u3059"),(0,n.kt)("li",{parentName:"ul"},"Web \u30b5\u30fc\u30d0\u30fc: ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/ja/WebServer/templates"}),"Web \u30c6\u30f3\u30d7\u30ec\u30fc\u30c8"),"\u3001",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/ja/WebServer/httpRequests"}),"4DACTION \u3068\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9")," \u3092\u51e6\u7406\u3057\u307e\u3059"),(0,n.kt)("li",{parentName:"ul"},"Web \u30b5\u30fc\u30d3\u30b9\u30b5\u30fc\u30d0\u30fc: SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u51e6\u7406\u3057\u307e\u3059"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},(0,n.kt)("em",{parentName:"strong"},"Web\u8a2d\u5b9a"))," \u3068\u306f\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u5b9f\u884c\u304c\u8a2d\u5b9a\u306b\u3088\u308b\u3053\u3068\u3092\u8868\u3057\u307e\u3059:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/ja/WebServer/sessions#%E3%82%BB%E3%83%83%E3%82%B7%E3%83%A7%E3%83%B3%E3%81%AE%E6%9C%89%E5%8A%B9%E5%8C%96"}),(0,n.kt)("strong",{parentName:"a"},"\u30b9\u30b1\u30fc\u30e9\u30d6\u30eb\u30bb\u30c3\u30b7\u30e7\u30f3"))," \u304c\u9078\u629e\u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001Web\u30d7\u30ed\u30bb\u30b9\u306b\u304a\u3044\u3066 ",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/ja/WebServer/sessions#%E3%83%97%E3%83%AA%E3%82%A8%E3%83%B3%E3%83%97%E3%83%86%E3%82%A3%E3%83%96%E3%83%A2%E3%83%BC%E3%83%89"}),"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u304c\u81ea\u52d5\u7684\u306b\u4f7f\u7528\u3055\u308c\u307e\u3059"),"\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u305d\u308c\u4ee5\u5916\u306e\u5834\u5408\u306f\u3001",(0,n.kt)("a",r({parentName:"li"},{href:"/docs/ja/WebServer/webServerConfig#%E3%83%97%E3%83%AA%E3%82%A8%E3%83%B3%E3%83%97%E3%83%86%E3%82%A3%E3%83%96%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%82%92%E4%BD%BF%E7%94%A8"}),(0,n.kt)("strong",{parentName:"a"},"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u3092\u4f7f\u7528"))," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u8003\u616e\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},"Web\u30b5\u30fc\u30d3\u30b9\u30d7\u30ed\u30bb\u30b9 (\u30b5\u30fc\u30d0\u30fc\u307e\u305f\u306f\u30af\u30e9\u30a4\u30a2\u30f3\u30c8) \u306e\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u306f\u3001\u30e1\u30bd\u30c3\u30c9\u30ec\u30d9\u30eb\u3067\u30b5\u30dd\u30fc\u30c8\u3055\u308c\u3066\u3044\u307e\u3059\u3002 \u516c\u958b\u6e08\u307f\u306e SOAP\u30b5\u30fc\u30d0\u30fc\u30e1\u30bd\u30c3\u30c9 (",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Publishing-a-Web-Service-with-4D.300-5416868.ja.html"}),"4D\u3067 Web \u30b5\u30fc\u30d3\u30b9\u3092\u516c\u958b\u3059\u308b")," \u53c2\u7167) \u3042\u308b\u3044\u306f\u30d7\u30ed\u30ad\u30b7\u30af\u30e9\u30a4\u30a2\u30f3\u30c8\u30e1\u30bd\u30c3\u30c9 (",(0,n.kt)("a",r({parentName:"li"},{href:"https://doc.4d.com/4Dv19/4D/19/Subscribing-to-a-Web-Service-in-4D.300-5416870.ja.html"}),"4D\u304b\u3089 Web \u30b5\u30fc\u30d3\u30b9\u3078\u30b5\u30d6\u30b9\u30af\u30e9\u30a4\u30d6\u3059\u308b"),' \u53c2\u7167) \u306e "\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30d7\u30ed\u30bb\u30b9\u3067\u5b9f\u884c\u53ef\u80fd" \u30d7\u30ed\u30d1\u30c6\u30a3\u3092\u30c1\u30a7\u30c3\u30af\u3057\u3001\u30e1\u30bd\u30c3\u30c9\u304c\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u306b\u3088\u3063\u3066\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3068\u78ba\u8a8d\u3055\u308c\u308b\u3088\u3046\u306b\u3057\u307e\u3059\u3002')))),(0,n.kt)("h2",r({},{id:"\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u306aweb\u30b5\u30fc\u30d0\u30fc\u30b3\u30fc\u30c9\u306e\u66f8\u304d\u65b9"}),"\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u306aWeb\u30b5\u30fc\u30d0\u30fc\u30b3\u30fc\u30c9\u306e\u66f8\u304d\u65b9"),(0,n.kt)("p",null,"Web\u30d7\u30ed\u30bb\u30b9\u3092\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30e2\u30fc\u30c9\u3067\u5b9f\u884c\u3059\u308b\u306b\u306f\u3001Web\u30b5\u30fc\u30d0\u30fc\u3067\u5b9f\u884c\u3055\u308c\u308b\u3059\u3079\u3066\u306e 4D\u30b3\u30fc\u30c9\u304c\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093\u3002 ",(0,n.kt)("a",r({parentName:"p"},{href:"#web%E3%83%97%E3%83%AD%E3%82%BB%E3%82%B9%E3%81%AB%E3%81%8A%E3%81%91%E3%82%8B%E3%83%97%E3%83%AA%E3%82%A8%E3%83%B3%E3%83%97%E3%83%86%E3%82%A3%E3%83%96%E3%83%A2%E3%83%BC%E3%83%89%E3%81%AE%E4%BD%BF%E7%94%A8%E5%8F%AF%E8%83%BD%E7%8A%B6%E6%B3%81"}),"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u30e2\u30fc\u30c9\u304c\u6709\u52b9\u5316")," \u3055\u308c\u3066\u3044\u308b\u5834\u5408\u3001\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u306e\u4ee5\u4e0b\u306e\u90e8\u5206\u304c 4D\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u306b\u3088\u3063\u3066\u81ea\u52d5\u7684\u306b\u8a55\u4fa1\u3055\u308c\u307e\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u3059\u3079\u3066\u306e Web\u95a2\u9023\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/ja/WebServer/authentication#on-web-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Authentication"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/ja/WebServer/httpRequests#on-web-connection"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Web Connection"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"/docs/ja/REST/configuration#on-rest-authentication-%E3%83%87%E3%83%BC%E3%82%BF%E3%83%99%E3%83%BC%E3%82%B9%E3%83%A1%E3%82%BD%E3%83%83%E3%83%89%E3%82%92%E4%BD%BF%E7%94%A8%E3%81%99%E3%82%8B"}),(0,n.kt)("inlineCode",{parentName:"a"},"On REST Authentication"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",r({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-authentication"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Mobile App Authentication"))," \u3068 ",(0,n.kt)("a",r({parentName:"li"},{href:"https://developer.4d.com/go-mobile/docs/4d/on-mobile-app-action"}),(0,n.kt)("inlineCode",{parentName:"a"},"On Mobile App Action"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"compiler_web"),' \u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9 (\u5b9f\u969b\u306e "\u5b9f\u884c\u30e2\u30fc\u30c9" \u30d7\u30ed\u30d1\u30c6\u30a3\u306b\u95a2\u308f\u3089\u305a\u8a55\u4fa1\u3055\u308c\u307e\u3059)')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Web\u30b3\u30f3\u30c6\u30ad\u30b9\u30c8\u306b\u304a\u3044\u3066 ",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page816.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"PROCESS 4D TAGS"))," \u30b3\u30de\u30f3\u30c9\u306b\u3088\u3063\u3066\u51e6\u7406\u3055\u308c\u308b\u57fa\u672c\u7684\u306b\u3059\u3079\u3066\u306e\u30b3\u30fc\u30c9 (.shtml\u30da\u30fc\u30b8\u3092\u901a\u3057\u3066\u5b9f\u884c\u3055\u308c\u308b\u3082\u306e\u306a\u3069)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'"\u516c\u958b\u30aa\u30d7\u30b7\u30e7\u30f3: 4D\u30bf\u30b0\u3068URL (',(0,n.kt)("inlineCode",{parentName:"p"},"4DACTION"),')..." \u5c5e\u6027\u304c\u6709\u52b9\u306a\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3002')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},'"REST\u30ea\u30bd\u30fc\u30b9\u3068\u3057\u3066\u516c\u958b" \u5c5e\u6027\u304c\u6709\u52b9\u306a\u30c6\u30fc\u30d6\u30eb\u306e\u30c8\u30ea\u30ac\u30fc')),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"REST \u3067\u547c\u3073\u51fa\u3055\u308c\u305f ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/ja/REST/classFunctions"}),"ORDA \u30c7\u30fc\u30bf\u30e2\u30c7\u30eb\u30af\u30e9\u30b9\u95a2\u6570")))),(0,n.kt)("p",null,"\u3053\u308c\u3089\u305d\u308c\u305e\u308c\u306e\u30e1\u30bd\u30c3\u30c9\u3068\u30b3\u30fc\u30c9\u306e\u90e8\u5206\u306b\u3064\u3044\u3066\u3001\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u306e\u30eb\u30fc\u30eb\u304c\u9075\u5b88\u3055\u308c\u3066\u3044\u308b\u304b\u3092\u30b3\u30f3\u30d1\u30a4\u30e9\u30fc\u304c\u30c1\u30a7\u30c3\u30af\u3057\u3001\u554f\u984c\u304c\u3042\u3063\u305f\u5834\u5408\u306b\u306f\u30a8\u30e9\u30fc\u3092\u8fd4\u3057\u307e\u3059\u3002 \u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u30eb\u30fc\u30eb\u306b\u3064\u3044\u3066\u306e\u8a73\u7d30\u306f\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com"}),"4D\u30e9\u30f3\u30b2\u30fc\u30b8\u30ea\u30d5\u30a1\u30ec\u30f3\u30b9")," \u30de\u30cb\u30e5\u30a2\u30eb\u306e ",(0,n.kt)("em",{parentName:"p"},"\u30d7\u30ed\u30bb\u30b9")," \u306e\u7ae0\u306e ",(0,n.kt)("em",{parentName:"p"},"\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u306a\u30e1\u30bd\u30c3\u30c9\u306e\u66f8\u304d\u65b9")," \u306e\u6bb5\u843d\u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",r({},{id:"4d-web\u30b3\u30fc\u30c9\u306e\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u30c6\u30a3"}),"4D Web\u30b3\u30fc\u30c9\u306e\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u30c6\u30a3"),(0,n.kt)("p",null,"Web\u95a2\u9023\u306e\u307b\u3068\u3093\u3069\u306e 4D\u30b3\u30de\u30f3\u30c9\u3084\u95a2\u6570\u3001\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3001\u305d\u3057\u3066 URL \u304c\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3068\u306a\u308a\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30e2\u30fc\u30c9\u3067\u4f7f\u7528\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("h3",r({},{id:"4d\u30b3\u30de\u30f3\u30c9\u3068\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"}),"4D\u30b3\u30de\u30f3\u30c9\u3068\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9"),(0,n.kt)("p",null,"\u3059\u3079\u3066\u306e Web\u95a2\u9023\u30b3\u30de\u30f3\u30c9\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"Web\u30b5\u30fc\u30d0\u30fc")," \u30c6\u30fc\u30de\u306e\u5168\u30b3\u30de\u30f3\u30c9"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"HTTP\u30af\u30e9\u30a4\u30a2\u30f3\u30c8")," \u30c6\u30fc\u30de\u306e\u5168\u30b3\u30de\u30f3\u30c9")),(0,n.kt)("p",null,"Web\u95a2\u9023\u306e\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3082\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u3042\u308a\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30e2\u30fc\u30c9\u3067\u4f7f\u7528\u3059\u308b\u3053\u3068\u304c\u53ef\u80fd\u3067\u3059 (\u524d\u8ff0\u53c2\u7167): ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Authentication"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"On Web Connection"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"On REST Authentication"),"...)\u3002"),(0,n.kt)("p",null,"\u3082\u3061\u308d\u3093\u3001\u3053\u308c\u3089\u306e\u30e1\u30bd\u30c3\u30c9\u306b\u3088\u3063\u3066\u5b9f\u884c\u3055\u308c\u308b\u30b3\u30fc\u30c9\u3082\u307e\u305f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u3042\u308b\u5fc5\u8981\u304c\u3042\u308a\u307e\u3059\u3002"),(0,n.kt)("h3",r({},{id:"web\u30b5\u30fc\u30d0\u30fcurl"}),"Web\u30b5\u30fc\u30d0\u30fcURL"),(0,n.kt)("p",null,"\u4ee5\u4e0b\u306e 4D Web\u30b5\u30fc\u30d0\u30fcURL\u306f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u3042\u308a\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30e2\u30fc\u30c9\u3067\u4f7f\u7528\u53ef\u80fd\u3067\u3059:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"4daction/")," (\u547c\u3073\u51fa\u3055\u308c\u308b\u30d7\u30ed\u30b8\u30a7\u30af\u30c8\u30e1\u30bd\u30c3\u30c9\u3082\u307e\u305f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306a\u3051\u308c\u3070\u3044\u3051\u307e\u305b\u3093)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"4dcgi/")," (\u547c\u3073\u51fa\u3055\u308c\u308b\u30c7\u30fc\u30bf\u30d9\u30fc\u30b9\u30e1\u30bd\u30c3\u30c9\u3082\u307e\u305f\u30b9\u30ec\u30c3\u30c9\u30bb\u30fc\u30d5\u3067\u306a\u3051\u308c\u3070\u3044\u3051\u307e\u305b\u3093)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"4dwebtest/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"4dblank/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"4dstats/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"4dhtmlstats/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"4dcacheclear/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"rest/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"4dimgfield/")," (\u30d4\u30af\u30c1\u30e3\u30fc\u30d5\u30a3\u30fc\u30eb\u30c9\u306e Web\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u3057 ",(0,n.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," \u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"4dimg/")," (\u30d4\u30af\u30c1\u30e3\u30fc\u5909\u6570\u306e Web\u30ea\u30af\u30a8\u30b9\u30c8\u306b\u5bfe\u3057 ",(0,n.kt)("inlineCode",{parentName:"li"},"PROCESS 4D TAGS")," \u306b\u3088\u3063\u3066\u751f\u6210\u3055\u308c\u307e\u3059)")),(0,n.kt)("h3",r({},{id:"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6web\u30d7\u30ed\u30bb\u30b9\u30a2\u30a4\u30b3\u30f3"}),"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6Web\u30d7\u30ed\u30bb\u30b9\u30a2\u30a4\u30b3\u30f3"),(0,n.kt)("p",null,"\u30e9\u30f3\u30bf\u30a4\u30e0\u30a8\u30af\u30b9\u30d7\u30ed\u30fc\u30e9\u30fc\u3068 4D Server\u7ba1\u7406\u30a6\u30a3\u30f3\u30c9\u30a6\u306e\u4e21\u65b9\u306b\u304a\u3044\u3066\u3001\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6\u306a Web\u30d7\u30ed\u30bb\u30b9\u306b\u5bfe\u3057\u5c02\u7528\u30a2\u30a4\u30b3\u30f3\u304c\u8868\u793a\u3055\u308c\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3057\u305f:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30d7\u30ed\u30bb\u30b9\u30bf\u30a4\u30d7"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30a2\u30a4\u30b3\u30f3"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u30d7\u30ea\u30a8\u30f3\u30d7\u30c6\u30a3\u30d6Web\u30e1\u30bd\u30c3\u30c9"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("img",{src:a(97838).Z,width:"40",height:"32"}))))))}b.isMDXComponent=!0},97838:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);