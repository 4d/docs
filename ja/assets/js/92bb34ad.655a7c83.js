"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14167],{603905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>u});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function m(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),i=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):m(m({},t),e)),a},s=function(e){var t=i(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=i(a),u=r,g=d["".concat(p,".").concat(u)]||d[u]||k[u]||l;return a?n.createElement(g,m(m({ref:t},s),{},{components:a})):n.createElement(g,m({ref:t},s))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,m=new Array(l);m[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,m[1]=o;for(var i=2;i<l;i++)m[i]=a[i];return n.createElement.apply(null,m)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},108162:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>m,metadata:()=>p,toc:()=>s});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const m={id:"WebFormClass",title:"WebForm"},o=void 0,p={unversionedId:"API/WebFormClass",id:"version-20-R2/API/WebFormClass",title:"WebForm",description:"\u5c65\u6b74",source:"@site/i18n/ja/docusaurus-plugin-content-docs/version-20-R2/API/WebFormClass.md",sourceDirName:"API",slug:"/API/WebFormClass",permalink:"/docs/ja/20-R2/API/WebFormClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormClass.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"WebFormClass",title:"WebForm"},sidebar:"docs",previous:{title:"SystemWorker",permalink:"/docs/ja/20-R2/API/SystemWorkerClass"},next:{title:"WebFormItem",permalink:"/docs/ja/20-R2/API/WebFormItemClass"}},i={},s=[{value:"\u30b3\u30de\u30f3\u30c9\u3068\u95a2\u6570",id:"\u30b3\u30de\u30f3\u30c9\u3068\u95a2\u6570",level:3},{value:"<em>.componentName</em>",id:"componentname",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e",level:4},{value:".setError()",id:"seterror",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e-1",level:4},{value:".setMessage()",id:"setmessage",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e-2",level:4},{value:".setWarning()",id:"setwarning",level:3},{value:"\u8aac\u660e",id:"\u8aac\u660e-3",level:4},{value:"Web Form",id:"web-form",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-4",level:4},{value:"Web Event",id:"web-event",level:2},{value:"\u8aac\u660e",id:"\u8aac\u660e-5",level:4}],k={toc:s};function d(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},k,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("details",null,(0,n.kt)("summary",null,"\u5c65\u6b74"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30d0\u30fc\u30b8\u30e7\u30f3"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u5185\u5bb9"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"v20 R2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u8ffd\u52a0"))))),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"WebForm")," \u30af\u30e9\u30b9\u306b\u306f\u3001Qodly \u306e Web\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 (Web\u30d5\u30a9\u30fc\u30e0\u306e\u69cb\u6210\u8981\u7d20) \u3092\u51e6\u7406\u3059\u308b\u305f\u3081\u306e\u95a2\u6570\u3068\u30d7\u30ed\u30d1\u30c6\u30a3\u304c\u542b\u307e\u308c\u3066\u3044\u307e\u3059\u3002 \u3053\u306e\u30af\u30e9\u30b9\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass"}),"Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3")," (\u82f1\u8a9e) \u3067\u8a73\u3057\u304f\u8aac\u660e\u3055\u308c\u3066\u3044\u307e\u3059\u3002"),(0,n.kt)("h3",r({},{id:"\u30b3\u30de\u30f3\u30c9\u3068\u95a2\u6570"}),"\u30b3\u30de\u30f3\u30c9\u3068\u95a2\u6570"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#componentname"}),(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("em",{parentName:"strong"},".componentName"))," : [4D.WebFormItem](WebFormItemclass.md)"),"\xa0","\xa0","\xa0","\xa0","\u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u3057\u3066\u76f4\u63a5\u5229\u7528\u53ef\u80fd\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#seterror"}),(0,n.kt)("strong",{parentName:"a"},".setError"),"( ",(0,n.kt)("em",{parentName:"a"},"msg")," : string)"),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("em",{parentName:"td"},"msg")," \u3092\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#setmessage"}),(0,n.kt)("strong",{parentName:"a"},".setMessage"),"( ",(0,n.kt)("em",{parentName:"a"},"msg")," : string)"),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("em",{parentName:"td"},"msg")," \u3092\u60c5\u5831\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#setwarning"}),(0,n.kt)("strong",{parentName:"a"},".setWarning"),"( ",(0,n.kt)("em",{parentName:"a"},"msg")," : string)"),"\xa0","\xa0","\xa0","\xa0",(0,n.kt)("em",{parentName:"td"},"msg")," \u3092\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#web-form"}),(0,n.kt)("strong",{parentName:"a"},"Web Form")," : 4D.WebForm"),"\xa0","\xa0","\xa0","\xa0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#web-event"}),(0,n.kt)("strong",{parentName:"a"},"Web Event")," : object"),"\xa0","\xa0","\xa0","\xa0","Web\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30ea\u30f3\u30af\u3057\u3066\u767a\u751f\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u306e\u60c5\u5831\u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059")))),(0,n.kt)("h3",r({},{id:"componentname"}),(0,n.kt)("em",{parentName:"h3"},".componentName")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},".componentName"))," : ",(0,n.kt)("a",r({parentName:"p"},{href:"WebFormItemclass.md"}),"4D.WebFormItem")),(0,n.kt)("h4",r({},{id:"\u8aac\u660e"}),"\u8aac\u660e"),(0,n.kt)("p",null,"Web\u30d5\u30a9\u30fc\u30e0\u306e\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8 (\u69cb\u6210\u8981\u7d20) \u3068\u306f\u3001\u3053\u308c\u3089\u306e Web\u30d5\u30a9\u30fc\u30e0\u306e \u30d7\u30ed\u30d1\u30c6\u30a3\u3068\u3057\u3066\u76f4\u63a5\u5229\u7528\u53ef\u80fd\u306a\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3067\u3059 \u3002"),(0,n.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#componentname"}),"Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,n.kt)("inlineCode",{parentName:"a"},".componentName")," \u306e\u8aac\u660e")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",r({},{id:"seterror"}),".setError()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".setError"),"( ",(0,n.kt)("em",{parentName:"p"},"msg")," : string)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"msg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Web\u30d5\u30a9\u30fc\u30e0\u306b\u8868\u793a\u3059\u308b\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8")))),(0,n.kt)("h4",r({},{id:"\u8aac\u660e-1"}),"\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},".setError()")," \u95a2\u6570\u306f\u3001 ",(0,n.kt)("em",{parentName:"p"},"msg")," \u3092\u30a8\u30e9\u30fc\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#seterror"}),"Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,n.kt)("inlineCode",{parentName:"a"},".setError()")," \u306e\u8aac\u660e")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",r({},{id:"setmessage"}),".setMessage()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".setMessage"),"( ",(0,n.kt)("em",{parentName:"p"},"msg")," : string)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"msg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Web\u30d5\u30a9\u30fc\u30e0\u306b\u8868\u793a\u3059\u308b\u60c5\u5831\u30e1\u30c3\u30bb\u30fc\u30b8")))),(0,n.kt)("h4",r({},{id:"\u8aac\u660e-2"}),"\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},".setMessage()")," \u95a2\u6570\u306f\u3001 ",(0,n.kt)("em",{parentName:"p"},"msg")," \u3092\u60c5\u5831\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#setmessage"}),"Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,n.kt)("inlineCode",{parentName:"a"},".setMessage()")," \u306e\u8aac\u660e")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h3",r({},{id:"setwarning"}),".setWarning()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".setWarning"),"( ",(0,n.kt)("em",{parentName:"p"},"msg")," : string)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"msg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Web\u30d5\u30a9\u30fc\u30e0\u306b\u8868\u793a\u3059\u308b\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8")))),(0,n.kt)("h4",r({},{id:"\u8aac\u660e-3"}),"\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},".setWarning()")," \u95a2\u6570\u306f\u3001  ",(0,n.kt)("em",{parentName:"p"},"msg")," \u3092\u8b66\u544a\u30e1\u30c3\u30bb\u30fc\u30b8\u3068\u3057\u3066 Web\u30d5\u30a9\u30fc\u30e0\u306b\u9001\u4fe1\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#setwarning"}),"Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,n.kt)("inlineCode",{parentName:"a"},".setWarning()")," \u306e\u8aac\u660e")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",r({},{id:"web-form"}),"Web Form"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Web Form")," : 4D.WebForm"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u623b\u308a\u5024"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.WebForm"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u65b0\u3057\u3044 ",(0,n.kt)("inlineCode",{parentName:"td"},"WebForm")," \u30d7\u30ed\u30ad\u30b7\u30aa\u30d6\u30b8\u30a7\u30af\u30c8")))),(0,n.kt)("h4",r({},{id:"\u8aac\u660e-4"}),"\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Web Form")," \u30b3\u30de\u30f3\u30c9\u306f\u3001  Web\u30d5\u30a9\u30fc\u30e0\u3068\u306e\u5bfe\u8a71\u3092\u53ef\u80fd\u306b\u3059\u308b ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," \u30d7\u30ed\u30ad\u30b7\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#webform"}),"Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,n.kt)("inlineCode",{parentName:"a"},"webForm")," \u30b3\u30de\u30f3\u30c9\u306e\u8aac\u660e")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"),(0,n.kt)("h2",r({},{id:"web-event"}),"Web Event"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Web Event")," : object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u5f15\u6570"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u30bf\u30a4\u30d7"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"\u8aac\u660e"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"\u623b\u308a\u5024"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"object")))),(0,n.kt)("h4",r({},{id:"\u8aac\u660e-5"}),"\u8aac\u660e"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"Web Event")," \u30b3\u30de\u30f3\u30c9\u306f\u3001 Web\u30d5\u30a9\u30fc\u30e0\u30b3\u30f3\u30dd\u30fc\u30cd\u30f3\u30c8\u306b\u30ea\u30f3\u30af\u3057\u3066\u767a\u751f\u3057\u305f\u30a4\u30d9\u30f3\u30c8\u306e\u60c5\u5831\u3092\u6301\u3064\u30aa\u30d6\u30b8\u30a7\u30af\u30c8\u3092\u8fd4\u3057\u307e\u3059\u3002"),(0,n.kt)("p",null,"\u8a73\u7d30\u306b\u3064\u3044\u3066\u306f\u3001",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#webevent"}),"Qodly \u30c9\u30ad\u30e5\u30e1\u30f3\u30c6\u30fc\u30b7\u30e7\u30f3\u306e ",(0,n.kt)("inlineCode",{parentName:"a"},"webEvent")," \u30b3\u30de\u30f3\u30c9\u306e\u8aac\u660e")," \u3092\u53c2\u7167\u304f\u3060\u3055\u3044\u3002"))}d.isMDXComponent=!0}}]);