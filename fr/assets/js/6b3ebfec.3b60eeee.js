/*! For license information please see 6b3ebfec.3b60eeee.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87595],{857169:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var t=s(474848),r=s(28453);const i={id:"vp-get-show-print-lines",title:"VP Get show print lines"},o=void 0,l={id:"ViewPro/commands/vp-get-show-print-lines",title:"VP Get show print lines",description:"VP Get show print lines ( vpAreaName Integer } ) : Boolean",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-show-print-lines.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-show-print-lines",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-show-print-lines",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-show-print-lines.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-show-print-lines",title:"VP Get show print lines"},sidebar:"docs",previous:{title:"VP Get sheet options",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-sheet-options"},next:{title:"VP Get spans",permalink:"/docs/fr/20-R5/ViewPro/commands/vp-get-spans"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP Get show print lines"})," ( ",(0,t.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,t.jsx)(n.em,{children:"sheet"})," : Integer } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vpAreaName"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheet"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"Num\xe9ro d'indice de la feuille"}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"<-"}),(0,t.jsx)(n.td,{children:"True si les lignes d'impression sont visibles, sinon False"}),(0,t.jsx)(n.td,{})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.code,{children:"VP Get show print lines"}),"retourne ",(0,t.jsx)(n.code,{children:"True"})," si les lignes d'aper\xe7u avant impression sont visibles et ",(0,t.jsx)(n.code,{children:"False"})," si elles sont masqu\xe9es."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"vpAreaName"}),", passez le nom de la zone 4D View Pro."]}),"\n",(0,t.jsxs)(n.p,{children:["Dans ",(0,t.jsx)(n.em,{children:"sheet"}),", passez le num\xe9ro de la page cible. Si ",(0,t.jsx)(n.em,{children:"sheet"})," est omis, la commande s'applique \xe0 la feuille courante."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"La num\xe9rotation d\xe9marre \xe0 0."}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Le code suivant permet de v\xe9rifier si les lignes d'aper\xe7u sont visibles ou masqu\xe9es dans le document :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' var $result : Boolean\n $result:=VP Get show print lines("ViewProArea";1)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/20-R5/ViewPro/commands/vp-set-show-print-lines",children:"VP SET SHOW PRINT LINES"})})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var t=s(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var t,i={},c=null,a=null;for(t in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,t)&&!d.hasOwnProperty(t)&&(i[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===i[t]&&(i[t]=n[t]);return{$$typeof:r,type:e,key:c,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>l});var t=s(296540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);