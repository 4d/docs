/*! For license information please see 6b3ebfec.014dd8c7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87595],{857169:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var s=t(474848),r=t(28453);const i={id:"vp-get-show-print-lines",title:"VP Get show print lines"},o=void 0,l={id:"ViewPro/commands/vp-get-show-print-lines",title:"VP Get show print lines",description:"VP Get show print lines ( vpAreaName Integer } ) : Boolean",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-show-print-lines.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-show-print-lines",permalink:"/docs/fr/ViewPro/commands/vp-get-show-print-lines",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-show-print-lines.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-show-print-lines",title:"VP Get show print lines"},sidebar:"docs",previous:{title:"VP Get sheet options",permalink:"/docs/fr/ViewPro/commands/vp-get-sheet-options"},next:{title:"VP Get spans",permalink:"/docs/fr/ViewPro/commands/vp-get-spans"}},d={},c=[{value:"Description",id:"Description",level:4},{value:"Exemple",id:"Exemple",level:4},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get show print lines"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tres"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"True si les lignes d'impression sont visibles, sinon False"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get show print lines"})," command returns ",(0,s.jsx)(n.code,{children:"True"})," if the print preview lines are visible and ",(0,s.jsx)(n.code,{children:"False"})," if they are hidden."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If ",(0,s.jsx)(n.em,{children:"sheet"})," is omitted, the command applies to the current sheet."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"La num\xe9rotation d\xe9marre \xe0 0."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"Exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:"Le code suivant permet de v\xe9rifier si les lignes d'aper\xe7u sont visibles ou masqu\xe9es dans le document :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $result : Boolean\n $result:=VP Get show print lines("ViewProArea";1)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/ViewPro/commands/vp-set-show-print-lines",children:"VP SET SHOW PRINT LINES"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,i={},c=null,a=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,s)&&!d.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var s=t(296540);const r={},i=s.createContext(r);function o(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);