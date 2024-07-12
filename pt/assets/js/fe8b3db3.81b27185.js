/*! For license information please see fe8b3db3.81b27185.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87814],{883907:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>d,toc:()=>a});var t=r(474848),s=r(28453);const o={id:"vp-insert-rows",title:"VP INSERT ROWS"},i=void 0,d={id:"ViewPro/commands/vp-insert-rows",title:"VP INSERT ROWS",description:"VP INSERT ROWS ( rangeObj : Object )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-insert-rows.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-insert-rows",permalink:"/docs/pt/ViewPro/commands/vp-insert-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-rows.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-insert-rows",title:"VP INSERT ROWS"},sidebar:"docs",previous:{title:"VP INSERT COLUMNS",permalink:"/docs/pt/ViewPro/commands/vp-insert-columns"},next:{title:"VP INSERT TABLE COLUMNS",permalink:"/docs/pt/ViewPro/commands/vp-insert-table-columns"}},c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP INSERT ROWS"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objeto intervalo"}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP INSERT ROWS"})," command inserts rows defined by the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range of the starting row (the row which designates where the new row will be inserted) and the number of rows to insert. Se o n\xfamero de linhas a inserir for omitido (n\xe3o definido), uma \xfanica linha \xe9 inserida."]}),"\n",(0,t.jsxs)(n.p,{children:["New rows are inserted directly before the first row in the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Para inserir 3 linhas antes da primeira linha:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP INSERT ROWS(VP Row("ViewProArea";0;3))\n'})}),"\n",(0,t.jsx)(n.p,{children:"O resultado \xe9:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(522744).A+"",width:"722",height:"346"})}),"\n",(0,t.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-delete-columns",children:"VP DELETE COLUMNS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-delete-rows",children:"VP DELETE ROWS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-insert-columns",children:"VP INSERT COLUMNS"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,o={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:l,props:o,_owner:d.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},522744:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cmd_vpInsertRows-7c9cfb66eebdb78e37581a8a9258c879.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>d});var t=r(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);