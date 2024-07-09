/*! For license information please see e87f256b.3cb98d25.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26596],{144759:(e,a,n)=>{n.r(a),n.d(a,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>t,toc:()=>d});var i=n(474848),r=n(28453);const o={id:"overview",title:"Copia de seguridad y restauraci\xf3n"},s=void 0,t={id:"Backup/overview",title:"Copia de seguridad y restauraci\xf3n",description:"4D incluye un m\xf3dulo completo de copia de seguridad y de restauraci\xf3n de la aplicaci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/Backup/overview.md",sourceDirName:"Backup",slug:"/Backup/overview",permalink:"/docs/es/20-R4/Backup/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Backup%2Foverview.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"overview",title:"Copia de seguridad y restauraci\xf3n"},sidebar:"docs",previous:{title:"Encrypt Page",permalink:"/docs/es/20-R4/MSC/encrypt"},next:{title:"Copia de seguridad",permalink:"/docs/es/20-R4/Backup/"}},c={},d=[];function l(e){const a={a:"a",blockquote:"blockquote",li:"li",p:"p",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(a.p,{children:"4D incluye un m\xf3dulo completo de copia de seguridad y de restauraci\xf3n de la aplicaci\xf3n."}),"\n",(0,i.jsx)(a.p,{children:"Este m\xf3dulo permite hacer una copia de seguridad de una aplicaci\xf3n en uso sin tener que salir de ella. Cada copia de seguridad puede incluir la carpeta del proyecto, el archivo de datos y cualquier archivo o carpeta adicional. Estos par\xe1metros se definen primero en las Propiedades."}),"\n",(0,i.jsx)(a.p,{children:"Las copias de seguridad pueden iniciarse de forma manual o autom\xe1tica a intervalos regulares sin intervenci\xf3n del usuario. Los comandos espec\xedficos del lenguaje, as\xed como los m\xe9todos base espec\xedficos, permiten integrar las funciones de copia de seguridad en una interfaz personalizada."}),"\n",(0,i.jsx)(a.p,{children:"Las aplicaciones pueden restaurarse autom\xe1ticamente cuando se abre una aplicaci\xf3n da\xf1ada."}),"\n",(0,i.jsxs)(a.p,{children:["Adem\xe1s, el m\xf3dulo de copia de seguridad integrado puede aprovechar el archivo .journal (",(0,i.jsx)(a.a,{href:"/docs/es/20-R4/Backup/log",children:"de historial"}),"). Este archivo mantiene un registro de todas las operaciones realizadas en los datos y tambi\xe9n garantiza una seguridad total entre dos copias de seguridad. Puede ver el contenido del archivo de historial en cualquier momento. En caso de problemas con una aplicaci\xf3n en uso, las operaciones que falten en el archivo de datos se reintegran autom\xe1ticamente la pr\xf3xima vez que se abra la aplicaci\xf3n."]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsx)(a.p,{children:"Tambi\xe9n puede implementar soluciones alternativas para replicar y sincronizar los datos con el fin de mantener versiones id\xe9nticas de las aplicaciones con fines de copia de seguridad. These solutions can be based on the following mechanisms and technologies:"}),"\n",(0,i.jsxs)(a.ul,{children:["\n",(0,i.jsx)(a.li,{children:"Setting up a logical mirror with 4D Server (using the integrated backup module mechanisms)"}),"\n",(0,i.jsx)(a.li,{children:"Synchronization using SQL - Synchronization using HTTP (/rest/url)"}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(a.blockquote,{children:["\n",(0,i.jsxs)(a.p,{children:["Para una visi\xf3n general de las funciones de seguridad de 4D, consulte la ",(0,i.jsx)(a.a,{href:"https://blog.4d.com/4d-security-guide/",children:"Gu\xeda de seguridad de 4D"}),"."]}),"\n"]})]})}function u(e={}){const{wrapper:a}={...(0,r.R)(),...e.components};return a?(0,i.jsx)(a,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},221020:(e,a,n)=>{var i=n(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,t=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,a,n){var i,o={},d=null,l=null;for(i in void 0!==n&&(d=""+n),void 0!==a.key&&(d=""+a.key),void 0!==a.ref&&(l=a.ref),a)s.call(a,i)&&!c.hasOwnProperty(i)&&(o[i]=a[i]);if(e&&e.defaultProps)for(i in a=e.defaultProps)void 0===o[i]&&(o[i]=a[i]);return{$$typeof:r,type:e,key:d,ref:l,props:o,_owner:t.current}}a.Fragment=o,a.jsx=d,a.jsxs=d},474848:(e,a,n)=>{e.exports=n(221020)},28453:(e,a,n)=>{n.d(a,{R:()=>s,x:()=>t});var i=n(296540);const r={},o=i.createContext(r);function s(e){const a=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(a):{...a,...e}}),[a,e])}function t(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:a},e.children)}}}]);