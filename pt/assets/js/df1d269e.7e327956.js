"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27978],{603905:(e,t,a)=>{a.d(t,{Zo:()=>i,kt:()=>u});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),p=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},i=function(e){var t=p(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,k=c["".concat(m,".").concat(u)]||c[u]||d[u]||l;return a?n.createElement(k,o(o({ref:t},i),{},{components:a})):n.createElement(k,o({ref:t},i))}));function u(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=a[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},627938:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>i});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"WebFormItemClass",title:"WebFormItem"},s=void 0,m={unversionedId:"API/WebFormItemClass",id:"version-20-R5/API/WebFormItemClass",title:"WebFormItem",description:"4D.WebFormItem objects are properties of the 4D.WebForm object returned by the Web Form command.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/API/WebFormItemClass.md",sourceDirName:"API",slug:"/API/WebFormItemClass",permalink:"/docs/pt/API/WebFormItemClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormItemClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebFormItemClass",title:"WebFormItem"},sidebar:"docs",previous:{title:"WebForm",permalink:"/docs/pt/API/WebFormClass"},next:{title:"WebServer",permalink:"/docs/pt/API/WebServerClass"}},p={},i=[{value:"Objeto WebFormItem",id:"objeto-webformitem",level:3},{value:".hide()",id:"hide",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".show()",id:"show",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".addCSSClass()",id:"addcssclass",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".removeCSSClass()",id:"removecssclass",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4}],d={toc:i};function c(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"4D.WebFormItem")," objects are properties of the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/WebFormItemClass"}),(0,n.kt)("inlineCode",{parentName:"a"},"4D.WebForm"))," object returned by the ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/API/WebFormClass#web-form"}),(0,n.kt)("inlineCode",{parentName:"a"},"Web Form"))," command."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"WebFormItem")," class is detailed in the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass"}),"Qodly documentation"),"."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Hist\xf3ria"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"20 R2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adicionado"))))),(0,n.kt)("h3",r({},{id:"objeto-webformitem"}),"Objeto WebFormItem"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}))))),(0,n.kt)("p",null,"| ",(0,n.kt)("a",r({parentName:"p"},{href:"#addclass"}),(0,n.kt)("strong",{parentName:"a"},".addCSSClass"),"(",(0,n.kt)("em",{parentName:"a"},"className")," : string)"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp;adds the class specified in ",(0,n.kt)("em",{parentName:"p"},"className")," to the component          |\n| ",(0,n.kt)("a",r({parentName:"p"},{href:"#hide"}),(0,n.kt)("strong",{parentName:"a"},".hide"),"()"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp;hides the component                            |\n| ",(0,n.kt)("a",r({parentName:"p"},{href:"#removeclass"}),(0,n.kt)("strong",{parentName:"a"},".removeCSSClass"),"(",(0,n.kt)("em",{parentName:"a"},"className"),": string)"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp;removes the class specified in ",(0,n.kt)("em",{parentName:"p"},"className")," from the component |\n| ",(0,n.kt)("a",r({parentName:"p"},{href:"#show"}),(0,n.kt)("strong",{parentName:"a"},".show"),"()"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp;makes the component visible                            |"),(0,n.kt)("h3",r({},{id:"hide"}),".hide()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".hide"),"()"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xe3o exige nenhum par\xe2metro")))),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".hide()")," function hides the component."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass#hide"}),(0,n.kt)("inlineCode",{parentName:"a"},".hide()")," description in the Qodly documentation"),"."),(0,n.kt)("h3",r({},{id:"show"}),".show()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".show"),"()"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:"center"})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"N\xe3o exige nenhum par\xe2metro")))),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".show()")," function makes the component visible."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass#show"}),(0,n.kt)("inlineCode",{parentName:"a"},".show()")," description in the Qodly documentation"),"."),(0,n.kt)("h3",r({},{id:"addcssclass"}),".addCSSClass()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".addCSSClass"),"(",(0,n.kt)("em",{parentName:"p"},"className")," : string)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"className"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome da classe CSS a ser adicionada ao componente")))),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".addCSSClass")," function adds the class specified in ",(0,n.kt)("em",{parentName:"p"},"className")," to the component."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass#addcssclass"}),(0,n.kt)("inlineCode",{parentName:"a"},".addCSSClass")," description in the Qodly documentation"),"."),(0,n.kt)("h3",r({},{id:"removecssclass"}),".removeCSSClass()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".removeCSSClass"),"(",(0,n.kt)("em",{parentName:"p"},"className"),": string)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"className"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nome da classe CSS a ser removida do componente")))),(0,n.kt)("h4",r({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".removeCSSClass()")," function removes the class specified in ",(0,n.kt)("em",{parentName:"p"},"className")," from the component."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormItemClass#removecssclass"}),(0,n.kt)("inlineCode",{parentName:"a"},".removeCSSClass()")," description in the Qodly documentation"),"."))}c.isMDXComponent=!0}}]);