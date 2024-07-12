/*! For license information please see 1b26df3e.c7dda83d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[16576],{967080:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>t,contentTitle:()=>l,default:()=>h,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var r=s(474848),i=s(28453);const d={id:"WebFormClass",title:"WebForm"},l=void 0,c={id:"API/WebFormClass",title:"WebForm",description:"La clase WebForm contiene funciones y propiedades que permiten manejar sus componentes de webforms Qodly. Esta clase se detalla en la documentaci\xf3n de Qodly.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/API/WebFormClass.md",sourceDirName:"API",slug:"/API/WebFormClass",permalink:"/docs/es/API/WebFormClass",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FWebFormClass.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"WebFormClass",title:"WebForm"},sidebar:"docs",previous:{title:"SystemWorker",permalink:"/docs/es/API/SystemWorkerClass"},next:{title:"WebFormItem",permalink:"/docs/es/API/WebFormItemClass"}},t={},o=[{value:"Comandos y funciones",id:"comandos-y-funciones",level:3},{value:"<em>.componentName</em>",id:"componentname",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".disableState()",id:"disablestate",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".enableState()",id:"enablestate",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:".setError()",id:"seterror",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4},{value:".setMessage()",id:"setmessage",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-4",level:4},{value:".setWarning()",id:"setwarning",level:3},{value:"Descripci\xf3n",id:"descripci\xf3n-5",level:4},{value:"Web Form",id:"web-form",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-6",level:4},{value:"Web Event",id:"web-event",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-7",level:4}];function a(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["La clase ",(0,r.jsx)(n.code,{children:"WebForm"})," contiene funciones y propiedades que permiten manejar sus componentes de webforms Qodly. Esta clase se detalla en la ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass",children:"documentaci\xf3n de Qodly"}),"."]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Lanzamiento"}),(0,r.jsx)(n.th,{children:"Modificaciones"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R6"}),(0,r.jsx)(n.td,{children:"Adici\xf3n de enableState() y disableState()"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"20 R2"}),(0,r.jsx)(n.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"comandos-y-funciones",children:"Comandos y funciones"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsx)(n.tr,{children:(0,r.jsx)(n.th,{})})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:["[",(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:".componentName"})})," : ",(0,r.jsx)(n.a,{href:"/docs/es/API/WebFormItemClass",children:"4D.WebFormItem"}),"](#componentname)",(0,r.jsx)(n.br,{}),"objetos disponibles directamente como propiedades"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#disablestate",children:[(0,r.jsx)(n.strong,{children:".disableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string)"]}),(0,r.jsx)(n.br,{}),"desactiva la renderizaci\xf3n del ",(0,r.jsx)(n.em,{children:"estado"})," en el formulario web actual"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#enablestate",children:[(0,r.jsx)(n.strong,{children:".enableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string )"]}),(0,r.jsx)(n.br,{}),"activa la renderizaci\xf3n del ",(0,r.jsx)(n.em,{children:"estado"})," en el formulario web actual"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#seterror",children:[(0,r.jsx)(n.strong,{children:".setError"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),(0,r.jsx)(n.br,{}),"env\xeda ",(0,r.jsx)(n.em,{children:"msg"})," como mensaje de error al formulario web"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#setmessage",children:[(0,r.jsx)(n.strong,{children:".setMessage"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),(0,r.jsx)(n.br,{}),"env\xeda ",(0,r.jsx)(n.em,{children:"msg"})," como mensaje de informaci\xf3n al formulario web"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#setwarning",children:[(0,r.jsx)(n.strong,{children:".setWarning"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),(0,r.jsx)(n.br,{}),"env\xeda ",(0,r.jsx)(n.em,{children:"msg"})," como mensaje de advertencia al formulario web"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#web-form",children:[(0,r.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),(0,r.jsx)(n.br,{})," devuelve un objeto proxy ",(0,r.jsx)(n.code,{children:"4D.WebForm"})," que permite interactuar con el formulario web"]})}),(0,r.jsx)(n.tr,{children:(0,r.jsxs)(n.td,{children:[(0,r.jsxs)(n.a,{href:"#web-event",children:[(0,r.jsx)(n.strong,{children:"Web Event"})," : object"]}),(0,r.jsx)(n.br,{}),"devuelve un objeto con informaci\xf3n sobre un evento desencadenado vinculado a un componente de formulario web"]})})]})]}),"\n",(0,r.jsx)(n.h3,{id:"componentname",children:(0,r.jsx)(n.em,{children:".componentName"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:(0,r.jsx)(n.strong,{children:".componentName"})})," : ",(0,r.jsx)(n.a,{href:"/docs/es/API/WebFormItemClass",children:"4D.WebFormItem"})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Los componentes de los webforms son los objetos disponibles directamente como propiedades de estos webforms."}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#componentname",children:["descripci\xf3n de ",(0,r.jsx)(n.code,{children:".componentName"})," en la documentaci\xf3n de Qodly"]}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"disablestate",children:".disableState()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".disableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Nombre del estado a desactivar en el formulario web"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".disableState()"})," desactiva la renderizaci\xf3n del ",(0,r.jsx)(n.em,{children:"estado"})," en el formulario web actual."]}),"\n",(0,r.jsx)(n.p,{children:"Esta funci\xf3n no hace nada si:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["el ",(0,r.jsx)(n.em,{children:"estado"})," no est\xe1 habilitado actualmente en el formulario web,"]}),"\n",(0,r.jsxs)(n.li,{children:["el ",(0,r.jsx)(n.em,{children:"estado"})," no existe para el formulario web."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.a,{href:"#enablestate",children:"activa"})," o desactiva varios estados en la misma funci\xf3n usuario, todas las modificaciones se env\xedan al mismo tiempo al cliente una vez finalizada la funci\xf3n."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre los estados de los formularios web, consulte ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/design-webforms/states",children:"developer.qodly.com"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"enablestate",children:".enableState()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".enableState"}),"( ",(0,r.jsx)(n.em,{children:"state"})," : string )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"state"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Nombre del estado a activar en el formulario web"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".enableState()"})," activa la renderizaci\xf3n del ",(0,r.jsx)(n.em,{children:"estado"})," en el formulario web actual."]}),"\n",(0,r.jsx)(n.p,{children:"Esta funci\xf3n no hace nada si:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["el ",(0,r.jsx)(n.em,{children:"estado"})," ya ha sido activado en el formulario web,"]}),"\n",(0,r.jsxs)(n.li,{children:["el ",(0,r.jsx)(n.em,{children:"estado"})," no existe para el formulario web."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Si activa o ",(0,r.jsx)(n.a,{href:"#disablestate",children:"desactiva"})," varios estados dentro de la misma funci\xf3n usuario, todas las modificaciones se env\xedan al mismo tiempo al cliente una vez que la funci\xf3n termina."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n sobre los estados de los formularios web, consulte ",(0,r.jsx)(n.a,{href:"https://developer.qodly.com/docs/studio/design-webforms/states",children:"developer.qodly.com"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:'Usted activa un estado espec\xedfico llamado "wrongCredentials" en caso de error en su p\xe1gina de conexi\xf3n:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'Function authenticationError()\n\tIf (Session.info.type#"remote")\n\t\tWeb Form.enableState("wrongCredentials")\n\tEnd if\n'})}),"\n",(0,r.jsx)(n.h3,{id:"seterror",children:".setError()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setError"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"msg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Mensaje de error a mostrar en el formulario web"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".setError()"})," env\xeda ",(0,r.jsx)(n.em,{children:"msg"})," como mensaje de error al formulario web."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#seterror",children:["descripci\xf3n de ",(0,r.jsx)(n.code,{children:".setError()"})," en la documentaci\xf3n de Qodly"]}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"setmessage",children:".setMessage()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setMessage"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"msg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Mensaje de informaci\xf3n a mostrar en el formulario web"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-4",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".setMessage()"})," env\xeda ",(0,r.jsx)(n.em,{children:"msg"})," como mensaje de informaci\xf3n al formulario web."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setmessage",children:["descripci\xf3n de ",(0,r.jsx)(n.code,{children:".setMessage()"})," en la documentaci\xf3n de Qodly"]}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"setwarning",children:".setWarning()"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:".setWarning"}),"( ",(0,r.jsx)(n.em,{children:"msg"})," : string)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"msg"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"->"}),(0,r.jsx)(n.td,{children:"Mensaje de advertencia para mostrar en el formulario web"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-5",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["La funci\xf3n ",(0,r.jsx)(n.code,{children:".setWarning()"})," env\xeda ",(0,r.jsx)(n.em,{children:"msg"})," como mensaje de advertencia al formulario web."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#setwarning",children:["descripci\xf3n de ",(0,r.jsx)(n.code,{children:".setWarning()"})," en la documentaci\xf3n de Qodly"]}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"web-form",children:"Web Form"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Web Form"})," : 4D.WebForm"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"4D.WebForm"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsxs)(n.td,{children:["Nuevo objeto proxy ",(0,r.jsx)(n.code,{children:"WebForm"})]})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-6",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"Web Form"}),"  devuelve un objeto proxy ",(0,r.jsx)(n.code,{children:"4D.WebForm"})," que permite interactuar con el formulario web."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webform",children:["descripci\xf3n de ",(0,r.jsx)(n.code,{children:"webForm"})," en la documentaci\xf3n de Qodly"]}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"web-event",children:"Web Event"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Web Event"})," : object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{style:{textAlign:"center"}}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{style:{textAlign:"center"},children:"<-"}),(0,r.jsx)(n.td,{children:"object"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n-7",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"Web Event"})," devuelve un objeto con informaci\xf3n sobre un evento desencadenado vinculado a un componente de formulario web."]}),"\n",(0,r.jsxs)(n.p,{children:["Para m\xe1s informaci\xf3n, consulte la ",(0,r.jsxs)(n.a,{href:"https://developer.qodly.com/docs/language/WebFormClass#webevent",children:["descripci\xf3n de ",(0,r.jsx)(n.code,{children:"webEvent"})," en la documentaci\xf3n de Qodly"]}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var r=s(296540),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,t={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var r,d={},o=null,a=null;for(r in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)l.call(n,r)&&!t.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:i,type:e,key:o,ref:a,props:d,_owner:c.current}}n.Fragment=d,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>l,x:()=>c});var r=s(296540);const i={},d=r.createContext(i);function l(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);