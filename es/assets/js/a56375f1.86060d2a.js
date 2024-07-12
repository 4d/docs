/*! For license information please see a56375f1.86060d2a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4647],{361866:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=o(474848),t=o(28453);const i={id:"vp-convert-from-4d-view",title:"VP Convert from 4D View"},c=void 0,s={id:"ViewPro/commands/vp-convert-from-4d-view",title:"VP Convert from 4D View",description:"VP Convert from 4D View ( 4DViewDocument Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-convert-from-4d-view.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-convert-from-4d-view",permalink:"/docs/es/20-R5/ViewPro/commands/vp-convert-from-4d-view",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-convert-from-4d-view.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-convert-from-4d-view",title:"VP Convert from 4D View"},sidebar:"docs",previous:{title:"VP Combine ranges",permalink:"/docs/es/20-R5/ViewPro/commands/vp-combine-ranges"},next:{title:"VP Convert to picture",permalink:"/docs/es/20-R5/ViewPro/commands/vp-convert-to-picture"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4}];function a(e){const n={blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Convert from 4D View"})," ( ",(0,r.jsx)(n.em,{children:"4DViewDocument"})," : Blob ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4DViewDocument"}),(0,r.jsx)(n.td,{children:"Blob"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Documento 4D View"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Objeto 4D View Pro"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP Convert from 4D View"})," permite convertir un documento heredado de 4D View en un objeto 4D View Pro."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Este comando no requiere que el plug-in 4D View est\xe9 instalado en su entorno."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro ",(0,r.jsx)(n.em,{children:"4DViewDocument"}),", pase una variable o un campo BLOB que contenga el documento 4D View a convertir. El comando devuelve un objeto 4D View Pro en el que toda la informaci\xf3n almacenada originalmente en el documento 4D View se convierte en atributos 4D View Pro."]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Quiere obtener un objeto 4D View Pro a partir de un \xe1rea 4D View almacenada en un BLOB:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"C_OBJECT($vpObj)\n$vpObj:=VP Convert from 4D View($pvblob)\n"})})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,o)=>{var r=o(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,o){var r,i={},l=null,a=null;for(r in void 0!==o&&(l=""+o),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)c.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:t,type:e,key:l,ref:a,props:i,_owner:s.current}}n.Fragment=i,n.jsx=l,n.jsxs=l},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>c,x:()=>s});var r=o(296540);const t={},i=r.createContext(t);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);