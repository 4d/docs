"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4498],{603905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>k});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var m=n.createContext({}),s=function(e){var t=n.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=s(a),k=r,u=c["".concat(m,".").concat(k)]||c[k]||d[k]||l;return a?n.createElement(u,o(o({ref:t},p),{},{components:a})):n.createElement(u,o({ref:t},p))}));function k(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},511501:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>m,toc:()=>p});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"WebFormClass",title:"WebForm"},i=void 0,m={unversionedId:"API/WebFormClass",id:"version-20-R5/API/WebFormClass",title:"WebForm",description:"The WebForm class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the Qodly documentation.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/API/WebFormClass.md",sourceDirName:"API",slug:"/API/WebFormClass",permalink:"/docs/es/API/WebFormClass",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormClass.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"WebFormClass",title:"WebForm"},sidebar:"docs",previous:{title:"SystemWorker",permalink:"/docs/es/API/SystemWorkerClass"},next:{title:"WebFormItem",permalink:"/docs/es/API/WebFormItemClass"}},s={},p=[{value:"Comandos y funciones",id:"comandos-y-funciones",level:3},{value:"<em>.componentName</em>",id:"componentname",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".disableState()",id:"disablestate",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".enableState()",id:"enablestate",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:".setError()",id:"seterror",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".setMessage()",id:"setmessage",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".setWarning()",id:"setwarning",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:"Web Form",id:"web-form",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:"Web Event",id:"web-event",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-7",level:4}],d={toc:p};function c(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"WebForm")," class contains functions and properties allowing to handle your Qodly webform components. This class is detailed in the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass"}),"Qodly documentation"),"."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Historia"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Lanzamiento"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Modificaciones"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"20 R6"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Adici\xf3n de enableState() y disableState()")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"20 R2"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"A\xf1adidos"))))),(0,n.kt)("h3",r({},{id:"comandos-y-funciones"}),"Comandos y funciones"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#componentname"}),(0,n.kt)("strong",{parentName:"a"},(0,n.kt)("em",{parentName:"strong"},".componentName"))," : [4D.WebFormItem](/docs/es/API/WebFormItemClass)"),(0,n.kt)("br",null),"objects that are available directly as properties")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#disablestate"}),(0,n.kt)("strong",{parentName:"a"},".disableState"),"( ",(0,n.kt)("em",{parentName:"a"},"state")," : string)"),(0,n.kt)("br",null),"disables the rendering of the ",(0,n.kt)("em",{parentName:"td"},"state")," in the current web form")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#enablestate"}),(0,n.kt)("strong",{parentName:"a"},".enableState"),"( ",(0,n.kt)("em",{parentName:"a"},"state")," : string )"),(0,n.kt)("br",null),"enables the rendering of the ",(0,n.kt)("em",{parentName:"td"},"state")," in the current web form")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#seterror"}),(0,n.kt)("strong",{parentName:"a"},".setError"),"( ",(0,n.kt)("em",{parentName:"a"},"msg")," : string)"),(0,n.kt)("br",null),"sends ",(0,n.kt)("em",{parentName:"td"},"msg")," as an error message to the web form")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#setmessage"}),(0,n.kt)("strong",{parentName:"a"},".setMessage"),"( ",(0,n.kt)("em",{parentName:"a"},"msg")," : string)"),(0,n.kt)("br",null),"sends ",(0,n.kt)("em",{parentName:"td"},"msg")," as an information message to the web form")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#setwarning"}),(0,n.kt)("strong",{parentName:"a"},".setWarning"),"( ",(0,n.kt)("em",{parentName:"a"},"msg")," : string)"),(0,n.kt)("br",null),"sends ",(0,n.kt)("em",{parentName:"td"},"msg")," as a warning message to the web form")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#web-form"}),(0,n.kt)("strong",{parentName:"a"},"Web Form")," : 4D.WebForm"),(0,n.kt)("br",null)," returns a ",(0,n.kt)("inlineCode",{parentName:"td"},"4D.WebForm")," proxy object that allows you to interact with the web form")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),(0,n.kt)("a",r({parentName:"td"},{href:"#web-event"}),(0,n.kt)("strong",{parentName:"a"},"Web Event")," : object"),(0,n.kt)("br",null),"returns an object with information on a triggered event linked to a webform component")))),(0,n.kt)("h3",r({},{id:"componentname"}),(0,n.kt)("em",{parentName:"h3"},".componentName")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("em",{parentName:"strong"},".componentName"))," : ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/API/WebFormItemClass"}),"4D.WebFormItem")),(0,n.kt)("h4",r({},{id:"descripci\xf3n"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The components of webforms are objects that are available directly as properties of these webforms."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#componentname"}),(0,n.kt)("inlineCode",{parentName:"a"},".componentName")," description in the Qodly documentation"),"."),(0,n.kt)("h3",r({},{id:"disablestate"}),".disableState()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".disableState"),"( ",(0,n.kt)("em",{parentName:"p"},"state")," : string)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"state"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre del estado a desactivar en el formulario web")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-1"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".disableState()")," function disables the rendering of the ",(0,n.kt)("em",{parentName:"p"},"state")," in the current web form."),(0,n.kt)("p",null,"Esta funci\xf3n no hace nada si:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("em",{parentName:"li"},"state")," is currently not enabled in the web form,"),(0,n.kt)("li",{parentName:"ul"},"el ",(0,n.kt)("em",{parentName:"li"},"estado")," no existe para el formulario web.")),(0,n.kt)("p",null,"If you ",(0,n.kt)("a",r({parentName:"p"},{href:"#enablestate"}),"enable")," or disable several states in the same user function, all modifications are sent at the same time to the client once the function ends."),(0,n.kt)("p",null,"For more information on web form states, please refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/studio/design-webforms/states"}),"developer.qodly.com"),"."),(0,n.kt)("h3",r({},{id:"enablestate"}),".enableState()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".enableState"),"( ",(0,n.kt)("em",{parentName:"p"},"state")," : string )"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"state"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nombre del estado a activar en el formulario web")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-2"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".enableState()")," function enables the rendering of the ",(0,n.kt)("em",{parentName:"p"},"state")," in the current web form."),(0,n.kt)("p",null,"Esta funci\xf3n no hace nada si:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the ",(0,n.kt)("em",{parentName:"li"},"state")," has already been enabled on the web form,"),(0,n.kt)("li",{parentName:"ul"},"el ",(0,n.kt)("em",{parentName:"li"},"estado")," no existe para el formulario web.")),(0,n.kt)("p",null,"If you enable or ",(0,n.kt)("a",r({parentName:"p"},{href:"#disablestate"}),"disable")," several states within the same user function, all modifications are sent at the same time to the client once the function ends."),(0,n.kt)("p",null,"For more information on web form states, please refer to ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/studio/design-webforms/states"}),"developer.qodly.com"),"."),(0,n.kt)("h4",r({},{id:"ejemplo"}),"Ejemplo"),(0,n.kt)("p",null,'You enable a specific state named "wrongCredentials" in case of error in your login page:'),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'Function authenticationError()\n    If (Session.info.type#"remote")\n        Web Form.enableState("wrongCredentials")\n    End if\n')),(0,n.kt)("h3",r({},{id:"seterror"}),".setError()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".setError"),"( ",(0,n.kt)("em",{parentName:"p"},"msg")," : string)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"msg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mensaje de error a mostrar en el formulario web")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-3"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".setError()")," function sends ",(0,n.kt)("em",{parentName:"p"},"msg")," as an error message to the web form."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#seterror"}),(0,n.kt)("inlineCode",{parentName:"a"},".setError()")," description in the Qodly documentation"),"."),(0,n.kt)("h3",r({},{id:"setmessage"}),".setMessage()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".setMessage"),"( ",(0,n.kt)("em",{parentName:"p"},"msg")," : string)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"msg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mensaje de informaci\xf3n a mostrar en el formulario web")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-4"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".setMessage()")," function sends ",(0,n.kt)("em",{parentName:"p"},"msg")," as an information message to the web form."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#setmessage"}),(0,n.kt)("inlineCode",{parentName:"a"},".setMessage()")," description in the Qodly documentation"),"."),(0,n.kt)("h3",r({},{id:"setwarning"}),".setWarning()"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},".setWarning"),"( ",(0,n.kt)("em",{parentName:"p"},"msg")," : string)"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"msg"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"string"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"->"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Mensaje de advertencia para mostrar en el formulario web")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-5"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},".setWarning()")," function  sends ",(0,n.kt)("em",{parentName:"p"},"msg")," as a warning message to the web form."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#setwarning"}),(0,n.kt)("inlineCode",{parentName:"a"},".setWarning()")," description in the Qodly documentation"),"."),(0,n.kt)("h2",r({},{id:"web-form"}),"Web Form"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Web Form")," : 4D.WebForm"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"4D.WebForm"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Nuevo objeto proxy ",(0,n.kt)("inlineCode",{parentName:"td"},"WebForm"))))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-6"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Web Form")," command  returns a ",(0,n.kt)("inlineCode",{parentName:"p"},"4D.WebForm")," proxy object that allows you to interact with the web form."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#webform"}),(0,n.kt)("inlineCode",{parentName:"a"},"webForm")," command description in the Qodly documentation"),"."),(0,n.kt)("h2",r({},{id:"web-event"}),"Web Event"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Web Event")," : object"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Par\xe1metros"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,n.kt)("th",r({parentName:"tr"},{align:"center"})),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Result"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"object"),(0,n.kt)("td",r({parentName:"tr"},{align:"center"}),"<-"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"object")))),(0,n.kt)("h4",r({},{id:"descripci\xf3n-7"}),"Descripci\xf3n"),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Web Event")," command returns an object with information on a triggered event linked to a webform component."),(0,n.kt)("p",null,"For more information, please refer to the ",(0,n.kt)("a",r({parentName:"p"},{href:"https://developer.qodly.com/docs/language/WebFormClass#webevent"}),(0,n.kt)("inlineCode",{parentName:"a"},"webEvent")," command description in the Qodly documentation"),"."))}c.isMDXComponent=!0}}]);