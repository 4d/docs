/*! For license information please see 9f3c5b6b.8445050e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92805],{838387:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=s(474848),t=s(28453);const o={id:"vp-reset-selection",title:"VP RESET SELECTION"},c=void 0,i={id:"ViewPro/commands/vp-reset-selection",title:"VP RESET SELECTION",description:"VP RESET SELECTION ( vpAreaName Integer } )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-reset-selection.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-reset-selection",permalink:"/docs/es/ViewPro/commands/vp-reset-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-reset-selection.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-reset-selection",title:"VP RESET SELECTION"},sidebar:"docs",previous:{title:"VP REMOVE TABLE ROWS",permalink:"/docs/es/ViewPro/commands/vp-remove-table-rows"},next:{title:"VP RESIZE TABLE",permalink:"/docs/es/ViewPro/commands/vp-resize-table"}},l={},a=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:4},{value:"Ejemplo",id:"Ejemplo",level:4},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP RESET SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metros"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando ",(0,r.jsx)(n.code,{children:"VP RESET SELECTION"})," deselecciona todas las celdas, con lo que no hay selecci\xf3n actual ni celda activa visible."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Una celda activa por defecto (celda A1) permanece definida para los comandos 4D View Pro."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pase el nombre del \xe1rea 4D View Pro. Si pasa un nombre que no existe, se devuelve un error."]}),"\n",(0,r.jsxs)(n.p,{children:["En el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"sheet"}),", puede designar una hoja espec\xedfica donde se definir\xe1 el rango (la numeraci\xf3n comienza en 0). Si se omite, se utiliza por defecto la hoja de c\xe1lculo actual. Puede seleccionar expl\xedcitamente la hoja de c\xe1lculo actual con la siguiente constante:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Desea deseleccionar todas las celdas (la celda activa y cualquier otra celda seleccionada):"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP RESET SELECTION("myVPArea")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,s)=>{var r=s(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var r,o={},a=null,d=null;for(r in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)c.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:t,type:e,key:a,ref:d,props:o,_owner:i.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>i});var r=s(296540);const t={},o=r.createContext(t);function c(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);