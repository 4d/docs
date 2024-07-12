/*! For license information please see e686427e.392afdb2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13933],{610497:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=t(474848),r=t(28453);const o={id:"vp-get-show-print-lines",title:"VP Get show print lines"},i=void 0,d={id:"ViewPro/commands/vp-get-show-print-lines",title:"VP Get show print lines",description:"VP Get show print lines ( vpAreaName Integer } ) : Boolean",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-show-print-lines.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-show-print-lines",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-get-show-print-lines",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-show-print-lines.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-show-print-lines",title:"VP Get show print lines"},sidebar:"docs",previous:{title:"VP Get sheet options",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-get-sheet-options"},next:{title:"VP Get spans",permalink:"/docs/pt/20-R5/ViewPro/commands/vp-get-spans"}},l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function a(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get show print lines"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"\xcdndice da folha"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"True se as linhas de impress\xe3o forem vis\xedveis, False caso contr\xe1rio"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get show print lines"})," command returns ",(0,s.jsx)(n.code,{children:"True"})," if the print preview lines are visible and ",(0,s.jsx)(n.code,{children:"False"})," if they are hidden."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If ",(0,s.jsx)(n.em,{children:"sheet"})," is omitted, the command applies to the current sheet."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A indexa\xe7\xe3o come\xe7a em 0."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"O c\xf3digo abaixo comprova se as linhas de visualiza\xe7\xe3o pr\xe9via s\xe3o mostradas ou ocultadas no documento:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:' var $result : Boolean\n $result:=VP Get show print lines("ViewProArea";1)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/ViewPro/commands/vp-set-show-print-lines",children:"VP SET SHOW PRINT LINES"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,o={},c=null,a=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,s)&&!l.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:a,props:o,_owner:d.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>d});var s=t(296540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);