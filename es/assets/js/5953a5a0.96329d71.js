/*! For license information please see 5953a5a0.96329d71.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40592],{73206:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>a});var s=r(474848),t=r(28453);const i={id:"vp-insert-rows",title:"VP INSERT ROWS"},o=void 0,c={id:"ViewPro/commands/vp-insert-rows",title:"VP INSERT ROWS",description:"VP INSERT ROWS ( rangeObj : Object )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-insert-rows.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-insert-rows",permalink:"/docs/es/20-R5/ViewPro/commands/vp-insert-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-rows.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-insert-rows",title:"VP INSERT ROWS"},sidebar:"docs",previous:{title:"VP INSERT COLUMNS",permalink:"/docs/es/20-R5/ViewPro/commands/vp-insert-columns"},next:{title:"VP INSERT TABLE COLUMNS",permalink:"/docs/es/20-R5/ViewPro/commands/vp-insert-table-columns"}},d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP INSERT ROWS"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metros"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objeto rango"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.code,{children:"VP INSERT ROWS"})," inserta filas definidas por el ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range of the starting row (the row which designates where the new row will be inserted) and the number of rows to insert. Si se omite el n\xfamero de l\xednea a insertar (no se define), se inserta una sola l\xednea."]}),"\n",(0,s.jsxs)(n.p,{children:["Las nuevas l\xedneas se insertan directamente antes de la primera l\xednea de ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Para insertar 3 l\xedneas antes de la primera l\xednea:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP INSERT ROWS(VP Row("ViewProArea";0;3))\n'})}),"\n",(0,s.jsx)(n.p,{children:"El resultado es:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(968705).A+"",width:"722",height:"346"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-delete-columns",children:"VP DELETE COLUMNS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-delete-rows",children:"VP DELETE ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/20-R5/ViewPro/commands/vp-insert-columns",children:"VP INSERT COLUMNS"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var s,i={},a=null,l=null;for(s in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)o.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:a,ref:l,props:i,_owner:c.current}}n.Fragment=i,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},968705:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/cmd_vpInsertRows-7c9cfb66eebdb78e37581a8a9258c879.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>c});var s=r(296540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);