/*! For license information please see 2ffa115c.e990e0d8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55150],{970812:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var s=r(474848),t=r(28453);const o={id:"vp-insert-columns",title:"VP INSERT COLUMNS"},i=void 0,c={id:"ViewPro/commands/vp-insert-columns",title:"VP INSERT COLUMNS",description:"VP INSERT COLUMNS ( rangeObj : Object )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-insert-columns.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-insert-columns",permalink:"/docs/es/20-R5/ViewPro/commands/vp-insert-columns",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-columns.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-insert-columns",title:"VP INSERT COLUMNS"},sidebar:"docs",previous:{title:"VP IMPORT FROM OBJECT",permalink:"/docs/es/20-R5/ViewPro/commands/vp-import-from-object"},next:{title:"VP INSERT ROWS",permalink:"/docs/es/20-R5/ViewPro/commands/vp-insert-rows"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP INSERT COLUMNS"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP INSERT COLUMNS"})," command inserts columns into the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. Si se omite el n\xfamero de columna a insertar (no se define), se inserta una sola columna."]}),"\n",(0,s.jsxs)(n.p,{children:["New columns are inserted on the left, directly before the starting column in the ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Para insertar tres columnas antes de la segunda columna:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP INSERT COLUMNS(VP Column("ViewProArea";1;3))\n'})}),"\n",(0,s.jsx)(n.p,{children:"El resultado es:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(56577).A+"",width:"964",height:"367"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-delete-columns",children:"VP DELETE COLUMNS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-delete-rows",children:"VP DELETE ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-insert-rows",children:"VP INSERT ROWS"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var s,o={},l=null,a=null;for(s in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,s)&&!d.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:t,type:e,key:l,ref:a,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},56577:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/cmd_vpInsertColumns-b1621dfbcabbe89a2e3db933745e1d03.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var s=r(296540);const t={},o=s.createContext(t);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);