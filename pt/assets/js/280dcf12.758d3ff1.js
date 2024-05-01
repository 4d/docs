"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71878],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>u});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var m=r.createContext({}),i=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=i(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,m=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=i(n),u=a,k=c["".concat(m,".").concat(u)]||c[u]||d[u]||o;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var s={};for(var m in t)hasOwnProperty.call(t,m)&&(s[m]=t[m]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<o;i++)l[i]=n[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},391493:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>l,metadata:()=>m,toc:()=>p});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const l={id:"WebFormClass",title:"WebForm"},s=void 0,m={unversionedId:"API/WebFormClass",id:"version-20-R5/API/WebFormClass",title:"WebForm",description:"The WebForm class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the Qodly documentation.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/API/WebFormClass.md",sourceDirName:"API",slug:"/API/WebFormClass",permalink:"/docs/pt/API/WebFormClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebFormClass",title:"WebForm"},sidebar:"docs",previous:{title:"SystemWorker",permalink:"/docs/pt/API/SystemWorkerClass"},next:{title:"WebFormItem",permalink:"/docs/pt/API/WebFormItemClass"}},i={},p=[{value:"Comandos e fun\xe7\xf5es",id:"comandos-e-fun\xe7\xf5es",level:3},{value:"<em>.componentName</em>",id:"componentname",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:".setError()",id:"seterror",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-1",level:4},{value:".setMessage()",id:"setmessage",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-2",level:4},{value:".setWarning()",id:"setwarning",level:3},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-3",level:4},{value:"Web Form",id:"web-form",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-4",level:4},{value:"Web Event",id:"web-event",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o-5",level:4}],d={toc:p};function c(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"WebForm")," class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass"}),"Qodly documentation"),"."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Hist\xf3ria"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Release"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Mudan\xe7as"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"20 R2"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Adicionado"))))),(0,r.kt)("h3",a({},{id:"comandos-e-fun\xe7\xf5es"}),"Comandos e fun\xe7\xf5es"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null})))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),(0,r.kt)("a",a({parentName:"td"},{href:"#componentname"}),(0,r.kt)("strong",{parentName:"a"},(0,r.kt)("em",{parentName:"strong"},".componentName"))," : [4D.WebFormItem](/docs/pt/API/WebFormItemClass)"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp;objects that are available directly as properties")))),(0,r.kt)("p",null,"| ",(0,r.kt)("a",a({parentName:"p"},{href:"#seterror"}),(0,r.kt)("strong",{parentName:"a"},".setError"),"( ",(0,r.kt)("em",{parentName:"a"},"msg")," : string)"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp;sends ",(0,r.kt)("em",{parentName:"p"},"msg")," as an error message to the web form            |\n| ",(0,r.kt)("a",a({parentName:"p"},{href:"#setmessage"}),(0,r.kt)("strong",{parentName:"a"},".setMessage"),"( ",(0,r.kt)("em",{parentName:"a"},"msg")," : string)"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp;sends ",(0,r.kt)("em",{parentName:"p"},"msg")," as an information message to the web form      |\n| ",(0,r.kt)("a",a({parentName:"p"},{href:"#setwarning"}),(0,r.kt)("strong",{parentName:"a"},".setWarning"),"( ",(0,r.kt)("em",{parentName:"a"},"msg")," : string)"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp;sends ",(0,r.kt)("em",{parentName:"p"},"msg")," as a warning message to the web form      |\n| ",(0,r.kt)("a",a({parentName:"p"},{href:"#web-form"}),(0,r.kt)("strong",{parentName:"a"},"Web Form")," : 4D.WebForm"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp; returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," proxy object that allows you to interact with the web form                      |\n| ",(0,r.kt)("a",a({parentName:"p"},{href:"#web-event"}),(0,r.kt)("strong",{parentName:"a"},"Web Event")," : object"),"&","nbsp;","&","nbsp;","&","nbsp;","&","nbsp;returns an object with information on a triggered event linked to a webform component                   |"),(0,r.kt)("h3",a({},{id:"componentname"}),(0,r.kt)("em",{parentName:"h3"},".componentName")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},(0,r.kt)("em",{parentName:"strong"},".componentName"))," : ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/pt/API/WebFormItemClass"}),"4D.WebFormItem")),(0,r.kt)("h4",a({},{id:"descri\xe7\xe3o"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The components of webforms are objects that are available directly as properties of these webforms."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#componentname"}),(0,r.kt)("inlineCode",{parentName:"a"},".componentName")," description in the Qodly documentation"),"."),(0,r.kt)("h3",a({},{id:"seterror"}),".setError()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".setError"),"( ",(0,r.kt)("em",{parentName:"p"},"msg")," : string)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"msg"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mensagem de erro a ser exibida no formul\xe1rio Web")))),(0,r.kt)("h4",a({},{id:"descri\xe7\xe3o-1"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".setError()")," function sends ",(0,r.kt)("em",{parentName:"p"},"msg")," as an error message to the web form."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#seterror"}),(0,r.kt)("inlineCode",{parentName:"a"},".setError()")," description in the Qodly documentation"),"."),(0,r.kt)("h3",a({},{id:"setmessage"}),".setMessage()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".setMessage"),"( ",(0,r.kt)("em",{parentName:"p"},"msg")," : string)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"msg"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mensagem informativa a ser exibida no formul\xe1rio Web")))),(0,r.kt)("h4",a({},{id:"descri\xe7\xe3o-2"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".setMessage()")," function sends ",(0,r.kt)("em",{parentName:"p"},"msg")," as an information message to the web form."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#setmessage"}),(0,r.kt)("inlineCode",{parentName:"a"},".setMessage()")," description in the Qodly documentation"),"."),(0,r.kt)("h3",a({},{id:"setwarning"}),".setWarning()"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},".setWarning"),"( ",(0,r.kt)("em",{parentName:"p"},"msg")," : string)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"msg"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"->"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Mensagem de aviso a ser exibida no formul\xe1rio Web")))),(0,r.kt)("h4",a({},{id:"descri\xe7\xe3o-3"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},".setWarning()")," function  sends ",(0,r.kt)("em",{parentName:"p"},"msg")," as a warning message to the web form."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#setwarning"}),(0,r.kt)("inlineCode",{parentName:"a"},".setWarning()")," description in the Qodly documentation"),"."),(0,r.kt)("h2",a({},{id:"web-form"}),"Web Form"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Web Form")," : 4D.WebForm"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Resultados"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"4D.WebForm"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"<-"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"New ",(0,r.kt)("inlineCode",{parentName:"td"},"WebForm")," proxy object")))),(0,r.kt)("h4",a({},{id:"descri\xe7\xe3o-4"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Form")," command  returns a ",(0,r.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," proxy object that allows you to interact with the web form."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#webform"}),(0,r.kt)("inlineCode",{parentName:"a"},"webForm")," command description in the Qodly documentation"),"."),(0,r.kt)("h2",a({},{id:"web-event"}),"Web Event"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Web Event")," : object"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Par\xe2metro"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Tipo"),(0,r.kt)("th",a({parentName:"tr"},{align:"center"})),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Resultados"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"object"),(0,r.kt)("td",a({parentName:"tr"},{align:"center"}),"<-"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"object")))),(0,r.kt)("h4",a({},{id:"descri\xe7\xe3o-5"}),"Descri\xe7\xe3o"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Web Event")," command returns an object with information on a triggered event linked to a webform component."),(0,r.kt)("p",null,"For more information, please refer to the ",(0,r.kt)("a",a({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#webevent"}),(0,r.kt)("inlineCode",{parentName:"a"},"webEvent")," command description in the Qodly documentation"),"."))}c.isMDXComponent=!0}}]);