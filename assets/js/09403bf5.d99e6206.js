"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41308],{603905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(667294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=m(e,["components","mdxType","originalType","parentName"]),c=p(n),k=r,u=c["".concat(i,".").concat(k)]||c[k]||d[k]||o;return n?a.createElement(u,l(l({ref:t},s),{},{components:n})):a.createElement(u,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var m={};for(var i in t)hasOwnProperty.call(t,i)&&(m[i]=t[i]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},214611:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>m,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>s});n(667294);var a=n(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}const l={id:"WebFormClass",title:"WebForm"},m=void 0,i={unversionedId:"API/WebFormClass",id:"version-20-R4/API/WebFormClass",title:"WebForm",description:"The WebForm class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the Qodly documentation.",source:"@site/versioned_docs/version-20-R4/API/WebFormClass.md",sourceDirName:"API",slug:"/API/WebFormClass",permalink:"/docs/20-R4/API/WebFormClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormClass.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"WebFormClass",title:"WebForm"},sidebar:"docs",previous:{title:"SystemWorker",permalink:"/docs/20-R4/API/SystemWorkerClass"},next:{title:"WebFormItem",permalink:"/docs/20-R4/API/WebFormItemClass"}},p={},s=[{value:"Commands and functions",id:"commands-and-functions",level:3},{value:"<em>.componentName</em>",id:"componentname",level:3},{value:"Description",id:"description",level:4},{value:".setError()",id:"seterror",level:3},{value:"Description",id:"description-1",level:4},{value:".setMessage()",id:"setmessage",level:3},{value:"Description",id:"description-2",level:4},{value:".setWarning()",id:"setwarning",level:3},{value:"Description",id:"description-3",level:4},{value:"Web Form",id:"web-form",level:2},{value:"Description",id:"description-4",level:4},{value:"Web Event",id:"web-event",level:2},{value:"Description",id:"description-5",level:4}],d={toc:s};function c(e){var{components:t}=e,n=o(e,["components"]);return(0,a.kt)("wrapper",r({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"WebForm")," class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass"}),"Qodly documentation"),"."),(0,a.kt)("details",null,(0,a.kt)("summary",null,"History"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Release"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Changes"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"20 R2"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Added"))))),(0,a.kt)("h3",r({},{id:"commands-and-functions"}),"Commands and functions"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null})))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#componentname"}),(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("em",{parentName:"strong"},".componentName"))," : [4D.WebFormItem](/docs/20-R4/API/WebFormItemClass)"),"\xa0","\xa0","\xa0","\xa0","objects that are available directly as properties")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#seterror"}),(0,a.kt)("strong",{parentName:"a"},".setError"),"( ",(0,a.kt)("em",{parentName:"a"},"msg")," : string)"),"\xa0","\xa0","\xa0","\xa0","sends ",(0,a.kt)("em",{parentName:"td"},"msg")," as an error message to the web form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#setmessage"}),(0,a.kt)("strong",{parentName:"a"},".setMessage"),"( ",(0,a.kt)("em",{parentName:"a"},"msg")," : string)"),"\xa0","\xa0","\xa0","\xa0","sends ",(0,a.kt)("em",{parentName:"td"},"msg")," as an information message to the web form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#setwarning"}),(0,a.kt)("strong",{parentName:"a"},".setWarning"),"( ",(0,a.kt)("em",{parentName:"a"},"msg")," : string)"),"\xa0","\xa0","\xa0","\xa0","sends ",(0,a.kt)("em",{parentName:"td"},"msg")," as a warning message to the web form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#web-form"}),(0,a.kt)("strong",{parentName:"a"},"Web Form")," : 4D.WebForm"),"\xa0","\xa0","\xa0","\xa0"," returns a ",(0,a.kt)("inlineCode",{parentName:"td"},"4D.WebForm")," proxy object that allows you to interact with the web form")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),(0,a.kt)("a",r({parentName:"td"},{href:"#web-event"}),(0,a.kt)("strong",{parentName:"a"},"Web Event")," : object"),"\xa0","\xa0","\xa0","\xa0","returns an object with information on a triggered event linked to a webform component")))),(0,a.kt)("h3",r({},{id:"componentname"}),(0,a.kt)("em",{parentName:"h3"},".componentName")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},".componentName"))," : ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/20-R4/API/WebFormItemClass"}),"4D.WebFormItem")),(0,a.kt)("h4",r({},{id:"description"}),"Description"),(0,a.kt)("p",null,"The components of webforms are objects that are available directly as properties of these webforms."),(0,a.kt)("p",null,"For more information, please refer to the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#componentname"}),(0,a.kt)("inlineCode",{parentName:"a"},".componentName")," description in the Qodly documentation"),". "),(0,a.kt)("h3",r({},{id:"seterror"}),".setError()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".setError"),"( ",(0,a.kt)("em",{parentName:"p"},"msg")," : string)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"msg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Error message to display in the web form")))),(0,a.kt)("h4",r({},{id:"description-1"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".setError()")," function sends ",(0,a.kt)("em",{parentName:"p"},"msg")," as an error message to the web form."),(0,a.kt)("p",null,"For more information, please refer to the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#seterror"}),(0,a.kt)("inlineCode",{parentName:"a"},".setError()")," description in the Qodly documentation"),". "),(0,a.kt)("h3",r({},{id:"setmessage"}),".setMessage()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".setMessage"),"( ",(0,a.kt)("em",{parentName:"p"},"msg")," : string)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"msg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Information message to display in the web form")))),(0,a.kt)("h4",r({},{id:"description-2"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".setMessage()")," function sends ",(0,a.kt)("em",{parentName:"p"},"msg")," as an information message to the web form."),(0,a.kt)("p",null,"For more information, please refer to the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#setmessage"}),(0,a.kt)("inlineCode",{parentName:"a"},".setMessage()")," description in the Qodly documentation"),". "),(0,a.kt)("h3",r({},{id:"setwarning"}),".setWarning()"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},".setWarning"),"( ",(0,a.kt)("em",{parentName:"p"},"msg")," : string)"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"msg"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Warning message to display in the web form")))),(0,a.kt)("h4",r({},{id:"description-3"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},".setWarning()")," function  sends ",(0,a.kt)("em",{parentName:"p"},"msg")," as a warning message to the web form."),(0,a.kt)("p",null,"For more information, please refer to the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#setwarning"}),(0,a.kt)("inlineCode",{parentName:"a"},".setWarning()")," description in the Qodly documentation"),". "),(0,a.kt)("h2",r({},{id:"web-form"}),"Web Form"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Web Form")," : 4D.WebForm"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"4D.WebForm"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"New ",(0,a.kt)("inlineCode",{parentName:"td"},"WebForm")," proxy object")))),(0,a.kt)("h4",r({},{id:"description-4"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Web Form")," command  returns a ",(0,a.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," proxy object that allows you to interact with the web form. "),(0,a.kt)("p",null,"For more information, please refer to the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#webform"}),(0,a.kt)("inlineCode",{parentName:"a"},"webForm")," command description in the Qodly documentation"),". "),(0,a.kt)("h2",r({},{id:"web-event"}),"Web Event"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Web Event")," : object"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Parameter"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Type"),(0,a.kt)("th",r({parentName:"tr"},{align:"center"})),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"object"),(0,a.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"object")))),(0,a.kt)("h4",r({},{id:"description-5"}),"Description"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"Web Event")," command returns an object with information on a triggered event linked to a webform component."),(0,a.kt)("p",null,"For more information, please refer to the ",(0,a.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#webevent"}),(0,a.kt)("inlineCode",{parentName:"a"},"webEvent")," command description in the Qodly documentation"),"."))}c.isMDXComponent=!0}}]);