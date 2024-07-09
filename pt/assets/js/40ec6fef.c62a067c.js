/*! For license information please see 40ec6fef.c62a067c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[88622],{352625:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>i});var s=t(474848),r=t(28453);const o={id:"vp-get-tables",title:"VP Get tables"},l=void 0,d={id:"ViewPro/commands/vp-get-tables",title:"VP Get tables",description:"Hist\xf3ria",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/ViewPro/commands/vp-get-tables.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-tables",permalink:"/docs/pt/ViewPro/commands/vp-get-tables",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-tables.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-tables",title:"VP Get tables"},sidebar:"docs",previous:{title:"VP Get table theme",permalink:"/docs/pt/ViewPro/commands/vp-get-table-theme"},next:{title:"VP Get value",permalink:"/docs/pt/ViewPro/commands/vp-get-value"}},a={},i=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:4},{value:"Exemplo",id:"Exemplo",level:4},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.details,{children:[(0,s.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Release"}),(0,s.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"18 R6"}),(0,s.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get tables"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"\xcdndice da folha (folha atual se omitida)"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultados"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Text collection with all table names"}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get tables"})," command returns a collection of all table names defined in the ",(0,s.jsx)(n.em,{children:"sheet"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", passe o nome da \xe1rea 4D View Pro."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. Se nenhum \xedndice for especificado, o comando se aplica \xe0 folha atual."]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"A indexa\xe7\xe3o come\xe7a em 0."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"Exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"O c\xf3digo abaixo devolver\xe1 uma cole\xe7\xe3o de todos os nomes de tabelas da folha atual:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$tables:=VP Get tables("ViewProArea")\n//$tables cont\xe9m por exemplo ["contextTable","emailTable"]\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/ViewPro/commands/vp-create-table",children:"VP CREATE TABLE"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function i(e,n,t){var s,o={},i=null,c=null;for(s in void 0!==t&&(i=""+t),void 0!==n.key&&(i=""+n.key),void 0!==n.ref&&(c=n.ref),n)l.call(n,s)&&!a.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:i,ref:c,props:o,_owner:d.current}}n.Fragment=o,n.jsx=i,n.jsxs=i},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>l,x:()=>d});var s=t(296540);const r={},o=s.createContext(r);function l(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);