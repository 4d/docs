/*! For license information please see 2ed96df3.d4447d11.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19090],{225684:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var t=r(474848),s=r(28453);const o={id:"vp-insert-columns",title:"VP INSERT COLUMNS"},i=void 0,c={id:"ViewPro/commands/vp-insert-columns",title:"VP INSERT COLUMNS",description:"VP INSERT COLUMNS ( rangeObj : Object )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-insert-columns.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-insert-columns",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-insert-columns",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-columns.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-insert-columns",title:"VP INSERT COLUMNS"},sidebar:"docs",previous:{title:"VP IMPORT FROM OBJECT",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-import-from-object"},next:{title:"VP INSERT ROWS",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-insert-rows"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP INSERT COLUMNS"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP INSERT COLUMNS"})," command inserts columns into the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass an object containing a range of the starting column (the column which designates where the new column will be inserted) and the number of columns to insert. Si le nombre de colonnes \xe0 ins\xe9rer est omis (non d\xe9fini), une seule colonne est ins\xe9r\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["New columns are inserted on the left, directly before the starting column in the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Pour ins\xe9rer 3 colonnes avant la deuxi\xe8me colonne :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP INSERT COLUMNS(VP Column("ViewProArea";1;3))\n'})}),"\n",(0,t.jsx)(n.p,{children:"Le r\xe9sultat est le suivant :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:r(684125).A+"",width:"964",height:"367"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-delete-columns",children:"VP DELETE COLUMNS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-delete-rows",children:"VP DELETE ROWS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-insert-rows",children:"VP INSERT ROWS"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,r){var t,o={},l=null,a=null;for(t in void 0!==r&&(l=""+r),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(o[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===o[t]&&(o[t]=n[t]);return{$$typeof:s,type:e,key:l,ref:a,props:o,_owner:c.current}}n.Fragment=o,n.jsx=l,n.jsxs=l},474848:(e,n,r)=>{e.exports=r(221020)},684125:(e,n,r)=>{r.d(n,{A:()=>t});const t=r.p+"assets/images/cmd_vpInsertColumns-b1621dfbcabbe89a2e3db933745e1d03.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(296540);const s={},o=t.createContext(s);function i(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);