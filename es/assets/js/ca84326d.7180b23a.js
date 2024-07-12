/*! For license information please see ca84326d.7180b23a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13830],{420138:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var a=n(474848),r=n(28453);const o={id:"users",title:"P\xe1gina Usuarios"},i=void 0,t={id:"ServerWindow/users",title:"P\xe1gina Usuarios",description:"La p\xe1gina Usuarios lista los usuarios 4D conectados al servidor.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ServerWindow/users.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/users",permalink:"/docs/es/20-R5/ServerWindow/users",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fusers.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"users",title:"P\xe1gina Usuarios"},sidebar:"docs",previous:{title:"P\xe1gina Monitor",permalink:"/docs/es/20-R5/ServerWindow/monitor"},next:{title:"P\xe1gina Procesos",permalink:"/docs/es/20-R5/ServerWindow/processes"}},c={},d=[{value:"Lista de usuarios",id:"lista-de-usuarios",level:2},{value:"Gesti\xf3n de usuarios dormidos",id:"gesti\xf3n-de-usuarios-dormidos",level:3},{value:"\xc1rea de b\xfasqueda/filtrado",id:"\xe1rea-de-b\xfasquedafiltrado",level:2},{value:"Botones de administraci\xf3n",id:"botones-de-administraci\xf3n",level:2},{value:"Enviar mensaje",id:"enviar-mensaje",level:3},{value:"Visualizar procesos",id:"visualizar-procesos",level:3},{value:"Desconectar",id:"desconectar",level:3}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:["La p\xe1gina ",(0,a.jsx)(s.strong,{children:"Usuarios"})," lista los usuarios 4D conectados al servidor."]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(767897).A+"",width:"1034",height:"163"})}),"\n",(0,a.jsx)(s.p,{children:'El bot\xf3n "Usuarios" indica, entre par\xe9ntesis, el n\xfamero total de usuarios conectados al servidor (este n\xfamero no tiene en cuenta los filtros de visualizaci\xf3n aplicados a la ventana). La p\xe1gina tambi\xe9n contiene un \xe1rea de b\xfasqueda din\xe1mica y botones de control. Puede modificar el orden de las columnas arrastrando y soltando sus \xe1reas de encabezados.'}),"\n",(0,a.jsx)(s.p,{children:"Tambi\xe9n puede ordenar la lista de los valores de las columnas haciendo clic en su encabezado. Haga clic varias veces para especificar a su vez un orden ascendente/descendente."}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(945284).A+"",width:"116",height:"20"})}),"\n",(0,a.jsx)(s.h2,{id:"lista-de-usuarios",children:"Lista de usuarios"}),"\n",(0,a.jsx)(s.p,{children:"Para cada usuario conectado al servidor, la lista ofrece la siguiente informaci\xf3n:"}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsx)(s.li,{children:"Sistema de la m\xe1quina cliente (macOS o Windows) como un icono."}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Usuario 4D"}),": nombre del usuario 4D, o alias si se ha establecido con el comando ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1666.html",children:(0,a.jsx)(s.code,{children:"SET USER ALIAS"})}),' en la m\xe1quina del usuario. Si las contrase\xf1as no est\xe1n activadas y no se ha definido ning\xfan alias, todos los usuarios se denominan "Dise\xf1ador".']}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Nombre de m\xe1quina"}),": Nombre de la m\xe1quina remota."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Nombre de sesi\xf3n"}),": nombre de la sesi\xf3n abierta en la m\xe1quina remota."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Direcci\xf3n IP"}),": direcci\xf3n IP de la m\xe1quina remota."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Fecha de conexi\xf3n"}),": fecha y hora de la conexi\xf3n de la m\xe1quina remota."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Tiempos CPU"}),": tiempos procesador consumidos por este usuario desde la conexi\xf3n."]}),"\n",(0,a.jsxs)(s.li,{children:[(0,a.jsx)(s.strong,{children:"Actividad"}),': ratio de tiempo que 4D Server dedica a este usuario (visualizaci\xf3n din\xe1mica). "En reposo" si la m\xe1quina remota ha pasado al modo reposo (ver abajo).']}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"gesti\xf3n-de-usuarios-dormidos",children:"Gesti\xf3n de usuarios dormidos"}),"\n",(0,a.jsxs)(s.p,{children:["4D Server gestiona espec\xedficamente los casos en los que una m\xe1quina que ejecuta una aplicaci\xf3n remota 4D pasa al modo de reposo mientras su conexi\xf3n con la m\xe1quina servidor sigue activa. En este caso, la aplicaci\xf3n remota 4D conectada notifica autom\xe1ticamente a 4D Server su desconexi\xf3n inminente. En el servidor, el usuario conectado pasa a un estado de actividad ",(0,a.jsx)(s.strong,{children:"Dormido"}),":"]}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(144526).A+"",width:"1139",height:"202"})}),"\n",(0,a.jsx)(s.p,{children:"Este estado libera recursos en el servidor. Adem\xe1s, la aplicaci\xf3n 4D remota se reconecta autom\xe1ticamente a 4D Server despu\xe9s de despertar del modo de suspensi\xf3n."}),"\n",(0,a.jsx)(s.p,{children:"Se soporta el siguiente escenario: un usuario remoto deja de trabajar durante un tiempo, por ejemplo durante una pausa para comer, pero mantiene abierta la conexi\xf3n con el servidor. La m\xe1quina pasa al modo reposo. Cuando el usuario regresa, despierta la m\xe1quina y la aplicaci\xf3n 4D remota recupera autom\xe1ticamente su conexi\xf3n con el servidor, as\xed como el contexto de la sesi\xf3n."}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["Una sesi\xf3n remota durmiente es abandonada autom\xe1ticamente por el servidor tras 48 horas de inactividad. You can modify this default timeout using the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page642.html",children:(0,a.jsx)(s.code,{children:"SET DATABASE PARAMETER"})})," command with the ",(0,a.jsx)(s.code,{children:"Remote connection sleep timeout"})," selector."]}),"\n"]}),"\n",(0,a.jsx)(s.h2,{id:"\xe1rea-de-b\xfasquedafiltrado",children:"\xc1rea de b\xfasqueda/filtrado"}),"\n",(0,a.jsx)(s.p,{children:"Esta funci\xf3n permite reducir el n\xfamero de l\xedneas que aparecen en la lista a las que corresponden al texto introducido en el \xe1rea de b\xfasqueda. El \xe1rea indica las columnas en las que se realizar\xe1 la b\xfasqueda/filtrado. En la p\xe1gina Usuarios, ser\xe1n las columnas Usuario 4D, Nombre de m\xe1quina y Nombre de sesi\xf3n."}),"\n",(0,a.jsxs)(s.p,{children:["La lista se actualiza en tiempo real a medida que se introduce texto en el \xe1rea. Es posible introducir m\xe1s de un valor a buscar: separe los valores con punto y coma. En este caso se utiliza el operador de tipo ",(0,a.jsx)(s.code,{children:"OR"}),'. Por ejemplo, si introduce "Juan;Mar\xeda;Pedro", s\xf3lo se conservar\xe1n las l\xedneas con Juan O Mar\xeda O Pedro en las columnas objetivo.']}),"\n",(0,a.jsx)(s.h2,{id:"botones-de-administraci\xf3n",children:"Botones de administraci\xf3n"}),"\n",(0,a.jsxs)(s.p,{children:["Esta p\xe1gina incluye tres botones de control. Estos botones est\xe1n activos si se selecciona al menos una l\xednea. Puede seleccionar varias l\xedneas manteniendo presionada la tecla ",(0,a.jsx)(s.strong,{children:"May\xfas"})," para una selecci\xf3n adyacente o ",(0,a.jsx)(s.strong,{children:"Ctrl"})," (Windows) / ",(0,a.jsx)(s.strong,{children:"Comando"})," (macOS) llave para una selecci\xf3n no adyacente."]}),"\n",(0,a.jsx)(s.h3,{id:"enviar-mensaje",children:"Enviar mensaje"}),"\n",(0,a.jsx)(s.p,{children:"Este bot\xf3n permite enviar un mensaje a los usuarios 4D seleccionados en la ventana. Si no se selecciona ning\xfan usuario, el bot\xf3n no est\xe1 activo. Al hacer clic en este bot\xf3n, aparece un di\xe1logo que le permite introducir el mensaje. El di\xe1logo indica el n\xfamero de usuarios que recibir\xe1n este mensaje:"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.img,{src:n(477428).A+"",width:"460",height:"229"})}),"\n",(0,a.jsx)(s.p,{children:"El mensaje se mostrar\xe1 como una alerta en las m\xe1quinas remotas."}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["Puede realizar la misma acci\xf3n para usuarios remotos con el comando ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1632.html",children:(0,a.jsx)(s.code,{children:"SEND MESSAGE TO REMOTE USER"})}),"."]}),"\n"]}),"\n",(0,a.jsx)(s.h3,{id:"visualizar-procesos",children:"Visualizar procesos"}),"\n",(0,a.jsxs)(s.p,{children:["This button can be used to directly show the processes of the user(s) selected on the ",(0,a.jsxs)(s.a,{href:"/docs/es/20-R5/ServerWindow/processes",children:[(0,a.jsx)(s.strong,{children:"Processes"})," page"]})," of the window. Al hacer clic en este bot\xf3n, 4D Server cambia a la p\xe1gina Procesos e introduce los nombres de usuario seleccionados en el \xe1rea de b\xfasqueda/filtrado."]}),"\n",(0,a.jsx)(s.h3,{id:"desconectar",children:"Desconectar"}),"\n",(0,a.jsxs)(s.p,{children:["Este bot\xf3n puede utilizarse para forzar al usuario(s) seleccionado a desconectarse. When you click on this button, a warning dialog box appears so that you can confirm or cancel this operation (hold down ",(0,a.jsx)(s.strong,{children:"Alt"})," key while clicking on the ",(0,a.jsx)(s.strong,{children:"Drop user"})," button to disconnect the selected user(s) directly without displaying the confirmation dialog box)."]}),"\n",(0,a.jsxs)(s.blockquote,{children:["\n",(0,a.jsxs)(s.p,{children:["You can perfom the same action for remote users with the ",(0,a.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page1633.html",children:(0,a.jsx)(s.code,{children:"DROP REMOTE USER"})})," command."]}),"\n"]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},221020:(e,s,n)=>{var a=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,n){var a,o={},d=null,l=null;for(a in void 0!==n&&(d=""+n),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(l=s.ref),s)i.call(s,a)&&!c.hasOwnProperty(a)&&(o[a]=s[a]);if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===o[a]&&(o[a]=s[a]);return{$$typeof:r,type:e,key:d,ref:l,props:o,_owner:t.current}}s.Fragment=o,s.jsx=d,s.jsxs=d},474848:(e,s,n)=>{e.exports=n(221020)},477428:(e,s,n)=>{n.d(s,{A:()=>a});const a="data:image/png;base64,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"},144526:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/server-sleeping-215c7c2ed0334b24d86018ba014b2788.png"},945284:(e,s,n)=>{n.d(s,{A:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHQAAAAUCAIAAADTDI4qAAAABGdBTUEAANkDQtZPoQAAAAlwSFlzAAALEwAACxMBAJqcGAAAACR0RVh0U29mdHdhcmUAUXVpY2tUaW1lIDcuNi4yIChNYWMgT1MgWCkAYDI1PgAAAAd0SU1FB9kJAg41DhHrjwYAAAImSURBVHic7VjNSgMxEJ6sdavSWg/+YBFEEG8efASPehA9CXrwMQTPXvUt9CZKH0EfQLCgoJ4U/KkHW/u3m+4mRqIxzWZb6W5dLfuxDDOTyST5mAxL0EvhBr6QyUxCjDBQKj0yaUS9jV5GosmiNKJt9BAQEupn5d7eXI2OzUa0nZ5F3Ba6iL9IrjmQbuv5F0i0D/kxBAXYKst0MNMvWDvUMwiTXM6p4EsosvNfI3dy6De0srrhdUbTFjjdSoEznX9+Hq7IZtt4JSAgtAy28P+VnivoVupd9oB0CeRRQbocr50eHF4e/ZiFrpIrCifE4ylEeytX2UBY68qQ2WzBLKg9V/oB7hxfSbBd0Y6byRQ03+7PSHl1rrf0KPm5yZMzXTEDnEeDlbXN3PEBk63DomkL/PCCgoDgDIrMykLB82vRllkI+VeMl2Qy1cGR2BSZI63Hb1QuUj8zEoT5tvDdECn90H2yKUPCbGrNOo9mojZYZ/4evG8LMboBFL/ndgP8PTdRr7wJ1/DdHhqcNobGaTFPSxeGdU+q90AsQoDVOrtdsVQk6wHYBcI+AAsDdsBxwFzYJRNLjE90eXEqyJ0aLg9e76C5bZJIgVUw8LNbPO9zytjImKQUS690ccV2aOP1smEV6xYQCgNDI9mt16v82UflVqs1QW56frnI5hSOTPuO1h+o/YScGkHIQEmXYMMwY6nIhtPANtRrVYzBTWb7Z9azi/uMSc7qOw86iLS/1FGTAAAAAElFTkSuQmCC"},767897:(e,s,n)=>{n.d(s,{A:()=>a});const a=n.p+"assets/images/server-users-a5fbe263f9a5f955ad40cf79716ba37b.png"},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>t});var a=n(296540);const r={},o=a.createContext(r);function i(e){const s=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);