"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47294],{603905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>k});var a=n(667294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),d=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},N=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,m=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),N=d(n),k=r,s=N["".concat(m,".").concat(k)]||N[k]||u[k]||l;return n?a.createElement(s,o(o({ref:e},p),{},{components:n})):a.createElement(s,o({ref:e},p))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,o=new Array(l);o[0]=N;var i={};for(var m in e)hasOwnProperty.call(e,m)&&(i[m]=e[m]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var d=2;d<l;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},840576:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>N,frontMatter:()=>o,metadata:()=>m,toc:()=>p});n(667294);var a=n(603905);function r(){return r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},r.apply(this,arguments)}function l(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}const o={id:"overview",title:"Eventos formul\xe1rio"},i=void 0,m={unversionedId:"Events/overview",id:"version-20-R3/Events/overview",title:"Eventos formul\xe1rio",description:"Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R3/Events/overview.md",sourceDirName:"Events",slug:"/Events/overview",permalink:"/docs/pt/Events/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"overview",title:"Eventos formul\xe1rio"},sidebar:"docs",previous:{title:"\xc1rea Web",permalink:"/docs/pt/FormObjects/propertiesWebArea"},next:{title:"On Activate",permalink:"/docs/pt/Events/onActivate"}},d={},p=[{value:"Objecto evento",id:"objecto-evento",level:2},{value:"Eventos e m\xe9todos",id:"eventos-e-m\xe9todos",level:2},{value:"Tabela de chamadas",id:"tabela-de-chamadas",level:2}],u={toc:p};function N(t){var{components:e}=t,n=l(t,["components"]);return(0,a.kt)("wrapper",r({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Form events are events that can lead to the execution of the form method and/or form object method(s). Form events allow you to control the flow of your application and to write code that is executed only when a specific event occurs."),(0,a.kt)("p",null,"In your code, you control the events using the ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event")," command, that returns the triggered event. Por exemplo:"),(0,a.kt)("pre",null,(0,a.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"//code of a button\nIf(FORM Event.code=On Clicked) \n// do something when the button is clicked\nEnd if\n")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Every form and every active object on the form can listen to a predefined set of events, but only the events that you enabled at the form level and/or at every object level will actually occur.")),(0,a.kt)("h2",r({},{id:"objecto-evento"}),"Objecto evento"),(0,a.kt)("p",null,"Each event is returned as an object by the ",(0,a.kt)("inlineCode",{parentName:"p"},"FORM Event")," command. Por defeito, cont\xe9m as seguintes propriedades:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Propriedade"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Descri\xe7\xe3o"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null})),(0,a.kt)("td",r({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"objectName"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"text"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Name of the object triggering the event - Not included if the event is triggered by the form")))),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Form event code"),' command| |description|text|Name of the form event (e.g. "On After Edit")|'),(0,a.kt)("p",null,"Additional properties are returned when the event occurs on specific objects. Em particular:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/FormObjects/listboxOverview#supported-form-events"}),"list boxes")," and ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/FormObjects/listboxOverview#supported-form-events-1"}),"list box columns")," return ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/FormObjects/listboxOverview#additional-properties"}),"additional properties")," such as ",(0,a.kt)("inlineCode",{parentName:"li"},"columnName")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"isRowSelected"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/FormObjects/viewProAreaOverview"}),"4D View Pro areas")," return for example ",(0,a.kt)("inlineCode",{parentName:"li"},"sheetName")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"action")," properties in the ",(0,a.kt)("a",r({parentName:"li"},{href:"/docs/pt/Events/onAfterEdit"}),"On After Edit")," event object.")),(0,a.kt)("h2",r({},{id:"eventos-e-m\xe9todos"}),"Eventos e m\xe9todos"),(0,a.kt)("p",null,"Quando um evento formul\xe1rio ocorre, 4D executa as seguintes a\xe7\xf5es:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"First, it browses the objects of the form and calls the object method for any object (involved in the event) whose corresponding object event property has been selected."),(0,a.kt)("li",{parentName:"ul"},"Second, it calls the form method if the corresponding form event property has been selected.")),(0,a.kt)("p",null,"Do not assume that the object methods, if any, will be called in a particular order. The rule of thumb is that the object methods are always called before the form method. If an object is a subform, the object methods of the subform\u2019s list form are called, then the form method of the list form is called. 4D ent\xe3o continua a chamar os m\xe9todos objeto do formul\xe1rio pai. In other words, when an object is a subform, 4D uses the same rule of thumb for the object and form methods within the subform object."),(0,a.kt)("p",null,"Except for the ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Events/onLoad"}),"On Load")," and ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Events/onUnload"}),"On Unload")," events (see below), if the form event property is not selected for a given event, this does not prevent calls to object methods for the objects whose same event property is selected. In other words, enabling or disabling an event at the form level has no effect on the object event properties."),(0,a.kt)("p",null,"The number of objects involved in an event depends on the nature of the event."),(0,a.kt)("h2",r({},{id:"tabela-de-chamadas"}),"Tabela de chamadas"),(0,a.kt)("p",null,"A tabela seguinte resume a forma como os m\xe9todos objeto e formul\xe1rio s\xe3o chamados para cada tipo de evento:"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Evento"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"M\xe9todos objecto"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"M\xe9todo formul\xe1rio"),(0,a.kt)("th",r({parentName:"tr"},{align:null}),"Que objectos"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Load"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Unload"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Validate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Clicked"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Double Clicked"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Before Keystroke"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On After Keystroke"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On After Edit"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Getting Focus"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Losing Focus"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Activate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Deactivate"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Outside Call"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Page Change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Begin Drag Over"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Drop"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Drag Over"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Enter"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Move"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Leave"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Mouse Up"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Menu Selected"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Bound variable change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Data Change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Plug in Area"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Header"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Printing Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Printing Break"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Printing Footer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Close Box"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Display Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Todos os objectos")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Open Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum, excepto List boxes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Close Detail"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum, excepto List boxes")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Resize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Selection Change"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Load Record"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Timer"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nenhum")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Scroll"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Before Data Entry"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Column Moved"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Row Moved"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Column Resize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box e Area 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Header Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box e Area 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Footer Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On After Sort"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Long Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (Bot\xe3o)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Alternative Click"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (bot\xe3o e List box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Expand"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (Hier. lista e list box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Collapse"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (Hier. lista e list box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Delete Action"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (Hier. lista e list box)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On URL Resource Loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Begin URL Loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On URL Loading Error"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On URL Filtering"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On End URL Loading"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Open External Link"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Window Opening Denied"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea Web)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On VP Range Changed"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On VP Ready"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",r({parentName:"tr"},{align:null}),"On Row Resize"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Sim (\xc1rea 4D View Pro)"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Nunca"),(0,a.kt)("td",r({parentName:"tr"},{align:null}),"Apenas objecto envolvido")))),(0,a.kt)("p",null,"Always keep in mind that, for any event, the method of a form or an object is called if the corresponding event property is selected for the form or objects. The benefit of disabling events in the Design environment (using the Property List of the Form editor) is that you can reduce the number of calls to methods and therefore significantly optimize the execution speed of your forms."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"WARNING: The ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Events/onLoad"}),"On Load")," and ",(0,a.kt)("a",r({parentName:"p"},{href:"/docs/pt/Events/onUnload"}),"On Unload")," events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level.")))}N.isMDXComponent=!0}}]);