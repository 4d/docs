/*! For license information please see 6d7f3d3d.08354209.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17878],{833868:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>d,metadata:()=>i,toc:()=>a});var s=r(474848),t=r(28453);const d={id:"vp-remove-table-columns",title:"VP REMOVE TABLE COLUMNS"},l=void 0,i={id:"ViewPro/commands/vp-remove-table-columns",title:"VP REMOVE TABLE COLUMNS",description:"Historia",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-remove-table-columns.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-remove-table-columns",permalink:"/docs/es/ViewPro/commands/vp-remove-table-columns",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-table-columns.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-remove-table-columns",title:"VP REMOVE TABLE COLUMNS"},sidebar:"docs",previous:{title:"VP REMOVE TABLE",permalink:"/docs/es/ViewPro/commands/vp-remove-table"},next:{title:"VP REMOVE TABLE ROWS",permalink:"/docs/es/ViewPro/commands/vp-remove-table-rows"}},o={},a=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:4},{value:"Ejemplo",id:"Ejemplo",level:4},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:4}];function c(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Lanzamiento"}),(0,s.jsx)(n.th,{children:"Modificaciones"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"19 R7"}),(0,s.jsx)(n.td,{children:"A\xf1adidos"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP REMOVE TABLE COLUMNS"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text ; ",(0,s.jsx)(n.em,{children:"tableName"})," : Text ; ",(0,s.jsx)(n.em,{children:"column"})," : Integer {; ",(0,s.jsx)(n.em,{children:"count"})," : Integer {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer }}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de objeto formulario \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nombre de la tabla"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"column"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice en la tabla de la columna inicial a eliminar"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"count"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"N\xfamero de columnas a eliminar (debe ser >0)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice de la hoja (hoja actual si se omite)"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP REMOVE TABLE COLUMNS"})," command removes one or ",(0,s.jsx)(n.em,{children:"count"})," column(s) in the specified ",(0,s.jsx)(n.em,{children:"tableName"})," at the specified ",(0,s.jsx)(n.em,{children:"column"})," index. El comando elimina valores y estilos."]}),"\n",(0,s.jsxs)(n.p,{children:["El comando elimina las columnas de la tabla ",(0,s.jsx)(n.em,{children:"tableName"}),", NO de la hoja. El n\xfamero total de columnas de la hoja no se ve afectado por el comando. Los datos a la derecha de la tabla (si los hay) se desplazan autom\xe1ticamente a la izquierda seg\xfan el n\xfamero de columnas eliminadas."]}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"tableName"})," no existe, no pasa nada."]}),"\n",(0,s.jsx)(n.h4,{id:"Ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:'Para eliminar dos columnas de la tercera columna de la tabla "dataTable":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP REMOVE TABLE COLUMNS("ViewProArea"; "dataTable"; 3; 2)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-insert-table-columns",children:"VP INSERT TABLE COLUMNS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/ViewPro/commands/vp-remove-table-rows",children:"VP REMOVE TABLE ROWS"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),d=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,i=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var s,d={},a=null,c=null;for(s in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,s)&&!o.hasOwnProperty(s)&&(d[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===d[s]&&(d[s]=n[s]);return{$$typeof:t,type:e,key:a,ref:c,props:d,_owner:i.current}}n.Fragment=d,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>l,x:()=>i});var s=r(296540);const t={},d=s.createContext(t);function l(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);