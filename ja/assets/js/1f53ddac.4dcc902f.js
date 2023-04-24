"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26168],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>T});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=u(r),T=a,k=m["".concat(p,".").concat(T)]||m[T]||c[T]||l;return r?n.createElement(k,o(o({ref:t},s),{},{components:r})):n.createElement(k,o({ref:t},s))}));function T(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},92183:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>p,toc:()=>s});r(67294);var n=r(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const o={id:"http-server",title:"HTTP\u30b5\u30fc\u30d0\u30fc\u30da\u30fc\u30b8"},i=void 0,p={unversionedId:"ServerWindow/http-server",id:"version-19-R8/ServerWindow/http-server",title:"HTTP\u30b5\u30fc\u30d0\u30fc\u30da\u30fc\u30b8",description:"HTTP\u30b5\u30fc\u30d0\u30fc \u30da\u30fc\u30b8\u306b\u306f\u30014D Server \u306e Web\u30b5\u30fc\u30d0\u30fc\u3084 SOAP\u30b5\u30fc\u30d0\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u96c6\u3081\u3089\u308c\u3066\u3044\u307e\u3059\u3002 Web\u30b5\u30fc\u30d0\u30fc\u306f\u3001HTML\u30da\u30fc\u30b8\u3084\u30d4\u30af\u30c1\u30e3\u30fc\u306a\u3069\u306e Web\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u516c\u958b\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002 SOAP\u30b5\u30fc\u30d0\u30fc\u306f Web\u30b5\u30fc\u30d3\u30b9\u306e\u516c\u958b\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002 \u3053\u308c\u3089 2\u3064\u306e\u30b5\u30fc\u30d0\u30fc\u306f\u30014D Server \u306e\u5185\u90e8\u7684\u306a HTTP\u30b5\u30fc\u30d0\u30fc\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-19-R8/ServerWindow/http-server.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/http-server",permalink:"/docs/ja/19-R8/ServerWindow/http-server",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fhttp-server.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"http-server",title:"HTTP\u30b5\u30fc\u30d0\u30fc\u30da\u30fc\u30b8"},sidebar:"docs",previous:{title:"SQL\u30b5\u30fc\u30d0\u30fc\u30da\u30fc\u30b8",permalink:"/docs/ja/19-R8/ServerWindow/sql-server"},next:{title:"\u30ea\u30a2\u30eb\u30bf\u30a4\u30e0\u30e2\u30cb\u30bf\u30fc\u30da\u30fc\u30b8",permalink:"/docs/ja/19-R8/ServerWindow/real-time-monitor"}},u={},s=[{value:"HTTP\u30b5\u30fc\u30d0\u30fc\u958b\u59cb/\u505c\u6b62",id:"http\u30b5\u30fc\u30d0\u30fc\u958b\u59cb\u505c\u6b62",level:2},{value:"Web\u60c5\u5831",id:"web\u60c5\u5831",level:2},{value:"SOAP\u60c5\u5831",id:"soap\u60c5\u5831",level:2},{value:"HTTP\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",id:"http\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a",level:2}],c={toc:s};function m(e){var{components:t}=e,o=l(e,["components"]);return(0,n.kt)("wrapper",a({},c,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"HTTP\u30b5\u30fc\u30d0\u30fc")," \u30da\u30fc\u30b8\u306b\u306f\u30014D Server \u306e Web\u30b5\u30fc\u30d0\u30fc\u3084 SOAP\u30b5\u30fc\u30d0\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u96c6\u3081\u3089\u308c\u3066\u3044\u307e\u3059\u3002 Web\u30b5\u30fc\u30d0\u30fc\u306f\u3001HTML\u30da\u30fc\u30b8\u3084\u30d4\u30af\u30c1\u30e3\u30fc\u306a\u3069\u306e Web\u30b3\u30f3\u30c6\u30f3\u30c4\u306e\u516c\u958b\u3092\u53ef\u80fd\u306b\u3057\u307e\u3059\u3002 SOAP\u30b5\u30fc\u30d0\u30fc\u306f Web\u30b5\u30fc\u30d3\u30b9\u306e\u516c\u958b\u3092\u7ba1\u7406\u3057\u307e\u3059\u3002 \u3053\u308c\u3089 2\u3064\u306e\u30b5\u30fc\u30d0\u30fc\u306f\u30014D Server \u306e\u5185\u90e8\u7684\u306a HTTP\u30b5\u30fc\u30d0\u30fc\u306b\u4f9d\u5b58\u3057\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(97244).Z,width:"1036",height:"701"})),(0,n.kt)("p",null,"\u30da\u30fc\u30b8\u306e\u4e0a\u90e8\u306b\u306f\u30014D Server \u306e HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u73fe\u5728\u306e\u72b6\u6cc1\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u72b6\u6cc1"),": \u958b\u59cb\u307e\u305f\u306f\u505c\u6b62"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u958b\u59cb\u6642\u523b"),": HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u8d77\u52d5\u65e5\u3068\u6642\u523b\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u52d5\u4f5c\u6642\u9593"),": HTTP\u30b5\u30fc\u30d0\u30fc\u304c\u6700\u5f8c\u306b\u958b\u59cb\u3055\u308c\u3066\u304b\u3089\u306e\u7d4c\u904e\u6642\u9593\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7dcfHTTP\u30d2\u30c3\u30c8\u6570"),": HTTP\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3066\u304b\u3089\u3001\u30b5\u30fc\u30d0\u30fc\u304c\u53d7\u4fe1\u3057\u305f\u30ed\u30fc\u30ec\u30d9\u30eb\u306e HTTP\u30d2\u30c3\u30c8\u6570\u3002")),(0,n.kt)("h2",a({},{id:"http\u30b5\u30fc\u30d0\u30fc\u958b\u59cb\u505c\u6b62"}),"HTTP\u30b5\u30fc\u30d0\u30fc\u958b\u59cb/\u505c\u6b62"),(0,n.kt)("p",null,"\u3053\u306e\u30dc\u30bf\u30f3\u306f\u5207\u308a\u66ff\u3048\u8868\u793a\u3055\u308c\u30014D Server HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u3059\u308b\u305f\u3081\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},'HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u72b6\u614b\u304c "\u958b\u59cb" \u306e\u5834\u5408\u3001\u30dc\u30bf\u30f3\u306e\u30bf\u30a4\u30c8\u30eb\u306f ',(0,n.kt)("strong",{parentName:"li"},"HTTP\u30b5\u30fc\u30d0\u30fc\u505c\u6b62")," \u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30014D Server HTTP\u30b5\u30fc\u30d0\u30fc\u306f\u5373\u5ea7\u306b\u505c\u6b62\u3057\u3001Web\u30b5\u30fc\u30d0\u30fc\u3001REST\u30b5\u30fc\u30d0\u30fc\u3001\u304a\u3088\u3073 SOAP\u30b5\u30fc\u30d0\u30fc\u306f\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u306a\u304f\u306a\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},'HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u72b6\u614b\u304c "\u505c\u6b62" \u306e\u5834\u5408\u3001\u30dc\u30bf\u30f3\u306e\u30bf\u30a4\u30c8\u30eb\u306f ',(0,n.kt)("strong",{parentName:"li"},"HTTP\u30b5\u30fc\u30d0\u30fc\u958b\u59cb")," \u306b\u306a\u308a\u307e\u3059\u3002 \u3053\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30014D Server HTTP\u30b5\u30fc\u30d0\u30fc\u306f\u5373\u5ea7\u306b\u958b\u59cb\u3057\u3001Web\u3001REST\u3001\u304a\u3088\u3073 SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u4ed8\u3051\u307e\u3059\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3059\u308b\u306b\u306f\u9069\u5207\u306a\u30e9\u30a4\u30bb\u30f3\u30b9\u304c\u5fc5\u8981\u3067\u3059\u3002"),(0,n.kt)("p",{parentName:"blockquote"},"\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3067\u8a2d\u5b9a\u3057\u3066\u30a2\u30d7\u30ea\u30b1\u30fc\u30b7\u30e7\u30f3\u8d77\u52d5\u3068\u540c\u6642\u306b\u3001\u307e\u305f\u306f\u30d7\u30ed\u30b0\u30e9\u30e0\u3092\u4f7f\u7528\u3057\u3066\u5fc5\u8981\u306a\u6642\u306b\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u81ea\u52d5\u3067\u958b\u59cb\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002")),(0,n.kt)("h2",a({},{id:"web\u60c5\u5831"}),"Web\u60c5\u5831"),(0,n.kt)("p",null,"\u3053\u306e\u30a8\u30ea\u30a2\u306b\u306f\u30014D Server \u306e Web\u30b5\u30fc\u30d0\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Web \u30ea\u30af\u30a8\u30b9\u30c8"),": \u53d7\u3051\u5165\u308c\u3001\u307e\u305f\u306f\u62d2\u5426\u3002 \u3053\u306e\u60c5\u5831\u306f Web\u30b5\u30fc\u30d0\u30fc\u304c\u6709\u52b9\u304b\u3069\u3046\u304b\u3092\u793a\u3057\u307e\u3059\u3002 Web\u30b5\u30fc\u30d0\u30fc\u306f\u76f4\u63a5 HTTP\u30b5\u30fc\u30d0\u30fc\u306b\u30ea\u30f3\u30af\u3057\u3066\u3044\u308b\u305f\u3081\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3066\u3044\u308c\u3070 Web\u30ea\u30af\u30a8\u30b9\u30c8\u306f\u53d7\u4fe1\u3055\u308c\u3001\u505c\u6b62\u3055\u308c\u3066\u3044\u308c\u3070\u62d2\u5426\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6700\u5927\u63a5\u7d9a\u6570"),": \u8a31\u53ef\u3055\u308c\u308b Web\u63a5\u7d9a\u306e\u6700\u5927\u6570\u3002 \u3053\u306e\u5024\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u3088\u308a\u307e\u3059\u3002")),(0,n.kt)("h2",a({},{id:"soap\u60c5\u5831"}),"SOAP\u60c5\u5831"),(0,n.kt)("p",null,"\u3053\u306e\u30a8\u30ea\u30a2\u306b\u306f\u30014D Server \u306e SOAP\u30b5\u30fc\u30d0\u30fc\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u3001\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u30dc\u30bf\u30f3\u3082\u4e00\u3064\u542b\u307e\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SOAP \u30ea\u30af\u30a8\u30b9\u30c8"),": \u53d7\u3051\u5165\u308c\u3001\u307e\u305f\u306f\u62d2\u5426\u3002 \u3053\u306e\u60c5\u5831\u306f SOAP\u30b5\u30fc\u30d0\u30fc\u304c\u6709\u52b9\u304b\u3069\u3046\u304b\u3092\u793a\u3057\u307e\u3059\u3002 SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u5165\u308c\u308b\u305f\u3081\u306b\u306f\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u304c\u958b\u59cb\u3055\u308c\u3001\u304b\u3064 SOAP\u30b5\u30fc\u30d0\u30fc\u304c\u660e\u793a\u7684\u306b\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u5165\u308c\u306a\u3051\u308c\u3070\u306a\u308a\u307e\u305b\u3093 (\u30dc\u30bf\u30f3\u306e\u8aac\u660e\u53c2\u7167)\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u6700\u5927\u63a5\u7d9a\u6570"),": \u8a31\u53ef\u3055\u308c\u308b SOAP\u63a5\u7d9a\u306e\u6700\u5927\u6570\u3002 \u3053\u306e\u5024\u306f\u3001\u30b5\u30fc\u30d0\u30fc\u30de\u30b7\u30f3\u306b\u30a4\u30f3\u30b9\u30c8\u30fc\u30eb\u3055\u308c\u3066\u3044\u308b\u30e9\u30a4\u30bb\u30f3\u30b9\u306b\u3088\u308a\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u53d7\u3051\u5165\u308c\u308b/\u53d7\u3051\u5165\u308c\u306a\u3044"),' \u30dc\u30bf\u30f3: \u3053\u306e\u30dc\u30bf\u30f3\u306f\u5207\u308a\u66ff\u3048\u8868\u793a\u3055\u308c\u30014D Server SOAP\u30b5\u30fc\u30d0\u30fc\u306e\u30b3\u30f3\u30c8\u30ed\u30fc\u30eb\u306b\u4f7f\u7528\u3057\u307e\u3059\u3002 \u3053\u306e\u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u306e "Web\u30b5\u30fc\u30d3\u30b9" \u30da\u30fc\u30b8\u306e ',(0,n.kt)("strong",{parentName:"li"},"Web\u30b5\u30fc\u30d3\u30b9\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8a31\u53ef\u3059\u308b")," \u30aa\u30d7\u30b7\u30e7\u30f3\u304c\u5909\u66f4\u3055\u308c\u307e\u3059\u3002 \u307e\u305f\u3001",(0,n.kt)("a",a({parentName:"li"},{href:"https://doc.4d.com/4dv19/help/command/ja/page1636.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"SOAP REJECT NEW REQUESTS"))," \u30b3\u30de\u30f3\u30c9\u3092\u4f7f\u3063\u3066\u65b0\u898f\u306e SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u62d2\u5426\u3059\u308b\u3053\u3068\u3082\u3067\u304d\u307e\u3059\u304c\u3001\u3053\u306e\u30b3\u30de\u30f3\u30c9\u306f ",(0,n.kt)("strong",{parentName:"li"},"Web\u30b5\u30fc\u30d3\u30b9\u30ea\u30af\u30a8\u30b9\u30c8\u3092\u8a31\u53ef\u3059\u308b")," \u30aa\u30d7\u30b7\u30e7\u30f3\u306e\u5024\u3092\u5909\u66f4\u3057\u307e\u305b\u3093\u3002")),(0,n.kt)("p",null,"HTTP\u30b5\u30fc\u30d0\u30fc\u505c\u6b62\u4e2d\u306b ",(0,n.kt)("strong",{parentName:"p"},"SOAP\u30ea\u30af\u30a8\u30b9\u30c8\u53d7\u3051\u5165\u308c\u308b")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u30014D \u306f\u81ea\u52d5\u3067 HTTP\u30b5\u30fc\u30d0\u30fc\u3092\u958b\u59cb\u3057\u307e\u3059\u3002"),(0,n.kt)("h2",a({},{id:"http\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a"}),"HTTP\u30b5\u30fc\u30d0\u30fc\u8a2d\u5b9a"),(0,n.kt)("p",null,"\u3053\u306e\u30a8\u30ea\u30a2\u306b\u306f\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3084\u52d5\u4f5c\u306b\u95a2\u3059\u308b\u60c5\u5831\u304c\u8868\u793a\u3055\u308c\u307e\u3059\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u958b\u59cb\u6642\u306b\u81ea\u52d5\u8d77\u52d5"),": \u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3067\u8a2d\u5b9a\u3055\u308c\u305f\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"HTTP \u30b5\u30fc\u30d0\u30fc\u30d7\u30ed\u30bb\u30b9 (\u4f7f\u7528/\u7dcf\u8a08)"),": \u30b5\u30fc\u30d0\u30fc\u4e0a\u3067\u4f5c\u6210\u3055\u308c\u305fHTTP\u30d7\u30ed\u30bb\u30b9\u6570 (\u73fe\u5728\u306e\u30d7\u30ed\u30bb\u30b9\u6570 / \u4f5c\u6210\u3055\u308c\u305f\u30d7\u30ed\u30bb\u30b9\u306e\u7dcf\u6570)\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u30e1\u30e2\u30ea"),": HTTP\u30b5\u30fc\u30d0\u30fc\u30ad\u30e3\u30c3\u30b7\u30e5\u30e1\u30e2\u30ea\u306e\u30b5\u30a4\u30ba ( \u30ad\u30e3\u30c3\u30b7\u30e5\u304c\u5b9f\u969b\u306b\u4f7f\u7528\u3057\u3066\u3044\u308b\u30b5\u30a4\u30ba / \u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u3067\u7406\u8ad6\u7684\u306b\u30ad\u30e3\u30c3\u30b7\u30e5\u306b\u5272\u308a\u5f53\u3066\u3089\u308c\u305f\u6700\u5927\u30b5\u30a4\u30ba)\u3002 ",(0,n.kt)("strong",{parentName:"li"},"\u30ad\u30e3\u30c3\u30b7\u30e5\u30af\u30ea\u30a2")," \u30dc\u30bf\u30f3\u3092\u30af\u30ea\u30c3\u30af\u3059\u308b\u3068\u3001\u73fe\u5728\u306e\u30ad\u30e3\u30c3\u30b7\u30e5\u3092\u7a7a\u306b\u3059\u308b\u3053\u3068\u304c\u3067\u304d\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u5f85\u53d7IP"),"\u3001",(0,n.kt)("strong",{parentName:"li"},"HTTP\u30dd\u30fc\u30c8")," (\u30c7\u30d5\u30a9\u30eb\u30c8\u306f 80)\u3001HTTP\u63a5\u7d9a\u7528\u306e ",(0,n.kt)("strong",{parentName:"li"},"TSL\u6709\u52b9")," (4D \u3068 SQL\u63a5\u7d9a\u306f\u5225\u8a2d\u5b9a)\u3001\u304a\u3088\u3073 ",(0,n.kt)("strong",{parentName:"li"},"HTTPS\u30dd\u30fc\u30c8"),": \u3053\u308c\u3089\u306f\u3001\u30b9\u30c8\u30e9\u30af\u30c1\u30e3\u30fc\u8a2d\u5b9a\u307e\u305f\u306f\u30d7\u30ed\u30b0\u30e9\u30df\u30f3\u30b0\u306b\u3088\u308a\u8a2d\u5b9a\u3055\u308c\u305f\u3001HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u73fe\u5728\u306e ",(0,n.kt)("a",a({parentName:"li"},{href:"/docs/ja/19-R8/WebServer/webServerConfig"}),"\u8a2d\u5b9a\u30d1\u30e9\u30e1\u30fc\u30bf\u30fc")," \u3092\u8868\u793a\u3057\u307e\u3059\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u30ed\u30b0\u30d5\u30a1\u30a4\u30eb\u60c5\u5831"),": \u540d\u79f0\u3001\u30d5\u30a9\u30fc\u30de\u30c3\u30c8\u3001\u304a\u3088\u3073 HTTP\u30b5\u30fc\u30d0\u30fc\u306e\u6b21\u56de\u306e\u81ea\u52d5\u30ed\u30b0\u30d0\u30c3\u30af\u30a2\u30c3\u30d7\u306e\u65e5\u4ed8 (logweb.txt \u30d5\u30a1\u30a4\u30eb)\u3002")))}m.isMDXComponent=!0},97244:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/server-admin-web-page-bc12a227b63b011be095b5746524f47a.png"}}]);