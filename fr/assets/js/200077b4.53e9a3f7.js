/*! For license information please see 200077b4.53e9a3f7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18201],{147155:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=r(474848),t=r(28453);const i={id:"vp-insert-rows",title:"VP INSERT ROWS"},o=void 0,l={id:"ViewPro/commands/vp-insert-rows",title:"VP INSERT ROWS",description:"VP INSERT ROWS ( rangeObj : Object )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-insert-rows.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-insert-rows",permalink:"/docs/fr/ViewPro/commands/vp-insert-rows",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-insert-rows.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-insert-rows",title:"VP INSERT ROWS"},sidebar:"docs",previous:{title:"VP INSERT COLUMNS",permalink:"/docs/fr/ViewPro/commands/vp-insert-columns"},next:{title:"VP INSERT TABLE COLUMNS",permalink:"/docs/fr/ViewPro/commands/vp-insert-table-columns"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP INSERT ROWS"})," ( ",(0,s.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Objet plage"}),(0,s.jsx)(n.td,{})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.code,{children:"VP INSERT ROWS"})," ins\xe8re les lignes d\xe9finies dans ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans ",(0,s.jsx)(n.em,{children:"rangeObj"}),", passez un objet contenant une plage de la ligne de d\xe9but (la ligne qui indique o\xf9 la nouvelle ligne sera ins\xe9r\xe9e) et le nombre de lignes \xe0 ins\xe9rer. Si le nombre de lignes \xe0 ins\xe9rer est omis (non d\xe9fini), une seule ligne est ins\xe9r\xe9e."]}),"\n",(0,s.jsxs)(n.p,{children:["De nouvelles lignes sont ins\xe9r\xe9es directement avant la premi\xe8re ligne dans ",(0,s.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Pour ins\xe9rer 3 lignes avant la premi\xe8re ligne :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'VP INSERT ROWS(VP Row("ViewProArea";0;3))\n'})}),"\n",(0,s.jsx)(n.p,{children:"Le r\xe9sultat est le suivant :"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(173740).A+"",width:"722",height:"346"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-delete-columns",children:"VP DELETE COLUMNS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-delete-rows",children:"VP DELETE ROWS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-insert-columns",children:"VP INSERT COLUMNS"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,r){var s,i={},c=null,a=null;for(s in void 0!==r&&(c=""+r),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:c,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,r)=>{e.exports=r(221020)},173740:(e,n,r)=>{r.d(n,{A:()=>s});const s=r.p+"assets/images/cmd_vpInsertRows-7c9cfb66eebdb78e37581a8a9258c879.PNG"},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>l});var s=r(296540);const t={},i=s.createContext(t);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);