/*! For license information please see e2a6c62a.69f188f9.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1271],{130969:(e,A,r)=>{r.r(A),r.d(A,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>t});var n=r(474848),a=r(28453);const s={id:"overview",title:"Preferencias"},c=void 0,i={id:"Preferences/overview",title:"Preferencias",description:"Las preferencias del usuario especifican varios ajustes que afectan a su entorno de trabajo, por ejemplo, las opciones predeterminadas, los temas de visualizaci\xf3n, las caracter\xedsticas del Editor de C\xf3digo, los accesos directos, etc. Se aplican a todos los proyectos abiertos con su aplicaci\xf3n 4D o 4D Server.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Preferences/overview.md",sourceDirName:"Preferences",slug:"/Preferences/overview",permalink:"/docs/es/Preferences/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Preferences%2Foverview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"overview",title:"Preferencias"},sidebar:"docs",previous:{title:"Etiquetas de transformaci\xf3n",permalink:"/docs/es/Tags/transformation-tags"},next:{title:"P\xe1gina general",permalink:"/docs/es/Preferences/general"}},o={},t=[{value:"Acceso",id:"acceso",level:2},{value:"Storage",id:"storage",level:2},{value:"Personalizaci\xf3n y reinicializaci\xf3n de los par\xe1metros",id:"personalizaci\xf3n-y-reinicializaci\xf3n-de-los-par\xe1metros",level:2}];function d(e){const A={a:"a",blockquote:"blockquote",code:"code",h2:"h2",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(A.p,{children:"Las preferencias del usuario especifican varios ajustes que afectan a su entorno de trabajo, por ejemplo, las opciones predeterminadas, los temas de visualizaci\xf3n, las caracter\xedsticas del Editor de C\xf3digo, los accesos directos, etc. Se aplican a todos los proyectos abiertos con su aplicaci\xf3n 4D o 4D Server."}),"\n",(0,n.jsxs)(A.p,{children:[(0,n.jsx)(A.strong,{children:"4D Server"}),": el bloqueo de objetos se produce cuando dos o m\xe1s usuarios intentan modificar los par\xe1metros de la caja de di\xe1logo Preferencias al mismo tiempo. S\xf3lo un usuario puede utilizar la caja de di\xe1logo Preferencias."]}),"\n",(0,n.jsxs)(A.blockquote,{children:["\n",(0,n.jsxs)(A.p,{children:["4D ofrece un conjunto de par\xe1metros espec\xedficos diferente para el proyecto abierto: ",(0,n.jsx)(A.strong,{children:"Par\xe1metros"})," (disponible en el men\xfa ",(0,n.jsx)(A.strong,{children:"Dise\xf1o"}),"). Para m\xe1s informaci\xf3n, consulte el cap\xedtulo de Par\xe1metros."]}),"\n"]}),"\n",(0,n.jsx)(A.h2,{id:"acceso",children:"Acceso"}),"\n",(0,n.jsxs)(A.p,{children:["Puede acceder a la caja de di\xe1logo Preferencias desde el men\xfa ",(0,n.jsx)(A.strong,{children:"Editar > Preferencias..."})," (Windows) o el men\xfa de la aplicaci\xf3n ",(0,n.jsx)(A.strong,{children:"4D"})," (macOS):"]}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:r(774140).A+"",width:"314",height:"300"})}),"\n",(0,n.jsx)(A.p,{children:"Esta opci\xf3n de men\xfa est\xe1 disponible incluso cuando no hay ning\xfan proyecto abierto."}),"\n",(0,n.jsxs)(A.p,{children:['Tambi\xe9n puede mostrar el cuadro de di\xe1logo de Preferencias en el modo Aplicaci\xf3n mediante la acci\xf3n est\xe1ndar "Preferencias" (asociada a un elemento de men\xfa o a un bot\xf3n) o mediante el comando ',(0,n.jsx)(A.code,{children:"OPEN VENTANA DE AJUSTES"}),"."]}),"\n",(0,n.jsx)(A.h2,{id:"storage",children:"Storage"}),"\n",(0,n.jsxs)(A.p,{children:["Los ajustes realizados en la caja de di\xe1logo Preferencias se guardan en un archivo de preferencias en formato XML llamado ",(0,n.jsx)(A.strong,{children:"4D Preferences vXX.4DPreferences"})," que se almacena en la carpeta 4D activa del usuario actual, tal y como lo devuelve el comando ",(0,n.jsx)(A.a,{href:"https://doc.4d.com/4Dv18R6/4D/18-R6/Get-4D-folder.301-5198423.en.html",children:(0,n.jsx)(A.code,{children:"Get 4D folder"})}),":"]}),"\n",(0,n.jsxs)(A.ul,{children:["\n",(0,n.jsxs)(A.li,{children:["Windows: ",(0,n.jsx)(A.code,{children:"{disk}\\Users\\\\{username\\}\\AppData\\Roaming\\4D"})]}),"\n",(0,n.jsxs)(A.li,{children:["macOS: ",(0,n.jsx)(A.code,{children:"{disk}:Users:\\{username\\}:Library:Application Support:4D"})]}),"\n"]}),"\n",(0,n.jsx)(A.h2,{id:"personalizaci\xf3n-y-reinicializaci\xf3n-de-los-par\xe1metros",children:"Personalizaci\xf3n y reinicializaci\xf3n de los par\xe1metros"}),"\n",(0,n.jsx)(A.p,{children:"En las cajas de di\xe1logo de los par\xe1metros, los par\xe1metros cuyos valores han sido modificados aparecen en negrita:"}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:r(820599).A+"",width:"833",height:"145"})}),"\n",(0,n.jsx)(A.p,{children:"Las preferencias indicadas como personalizadas pueden haber sido modificadas directamente en la caja de di\xe1logo, o pueden haber sido modificadas previamente en el caso de una base convertida."}),"\n",(0,n.jsx)(A.p,{children:"Un par\xe1metro sigue apareciendo en negrita aunque su valor se remplace manualmente por sus valores por defecto. De este modo, siempre es posible identificar visualmente los par\xe1metros que se hayan personalizado."}),"\n",(0,n.jsxs)(A.p,{children:["Para reiniciar los par\xe1metros a sus valores por defecto y eliminar el estilo negrita que indica que han sido personalizados, haga clic en el bot\xf3n ",(0,n.jsx)(A.strong,{children:"Restablecer los par\xe1metros de f\xe1brica"}),":"]}),"\n",(0,n.jsx)(A.p,{children:(0,n.jsx)(A.img,{src:r(671933).A+"",width:"866",height:"126"})}),"\n",(0,n.jsx)(A.p,{children:"Este bot\xf3n reinicializa todos los par\xe1metros de la p\xe1gina actual. Se activa cuando se ha modificado al menos un par\xe1metro en la p\xe1gina actual."})]})}function l(e={}){const{wrapper:A}={...(0,a.R)(),...e.components};return A?(0,n.jsx)(A,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,A,r)=>{var n=r(296540),a=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function t(e,A,r){var n,s={},t=null,d=null;for(n in void 0!==r&&(t=""+r),void 0!==A.key&&(t=""+A.key),void 0!==A.ref&&(d=A.ref),A)c.call(A,n)&&!o.hasOwnProperty(n)&&(s[n]=A[n]);if(e&&e.defaultProps)for(n in A=e.defaultProps)void 0===s[n]&&(s[n]=A[n]);return{$$typeof:a,type:e,key:t,ref:d,props:s,_owner:i.current}}A.Fragment=s,A.jsx=t,A.jsxs=t},474848:(e,A,r)=>{e.exports=r(221020)},774140:(e,A,r)=>{r.d(A,{A:()=>n});const n="data:image/png;base64,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"},671933:(e,A,r)=>{r.d(A,{A:()=>n});const n="data:image/png;base64,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"},820599:(e,A,r)=>{r.d(A,{A:()=>n});const n="data:image/png;base64,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"},28453:(e,A,r)=>{r.d(A,{R:()=>c,x:()=>i});var n=r(296540);const a={},s=n.createContext(a);function c(e){const A=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(A):{...A,...e}}),[A,e])}function i(e){let A;return A=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),n.createElement(s.Provider,{value:A},e.children)}}}]);