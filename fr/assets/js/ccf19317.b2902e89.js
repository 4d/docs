"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44346],{45045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>l,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var s=n(474848),i=n(28453);const d={id:"vp-get-data-context",title:"VP Get data context"},r=void 0,c={id:"ViewPro/commands/vp-get-data-context",title:"VP Get data context",description:"Historique",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-data-context.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-data-context",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-get-data-context",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-data-context.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-data-context",title:"VP Get data context"},sidebar:"docs",previous:{title:"VP Get current sheet",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-get-current-sheet"},next:{title:"VP Get default style",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-get-default-style"}},o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function h(e){const t={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.details,{children:[(0,s.jsx)(t.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Release"}),(0,s.jsx)(t.th,{children:"Modifications"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"19 R5"}),(0,s.jsx)(t.td,{children:"Ajout"})]})})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Get data context"})," ( ",(0,s.jsx)(t.em,{children:"vpAreaName"})," : Text {; ",(0,s.jsx)(t.em,{children:"sheet"})," : Integer } ) : Object",(0,s.jsx)(t.br,{}),(0,s.jsx)(t.strong,{children:"VP Get data context"})," ( ",(0,s.jsx)(t.em,{children:"vpAreaName"})," : Text {; ",(0,s.jsx)(t.em,{children:"sheet"})," : Integer } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Param\xe8tres"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"}),(0,s.jsx)(t.th,{})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vpAreaName"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Nom d'objet formulaire zone 4D View Pro"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sheet"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Indice de la feuille de laquelle obtenir le data context"}),(0,s.jsx)(t.td,{})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"R\xe9sultat"}),(0,s.jsx)(t.td,{children:"Object | Collection"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Data context"}),(0,s.jsx)(t.td,{})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP Get data context"})," command returns the current data context of a worksheet. The returned context includes any modifications made to the contents of the data context."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"sheet"}),", pass the index of the sheet to get the data context from. If no index is passed, the command returns the data context of the current worksheet. If there is no context for the worksheet, the command returns ",(0,s.jsx)(t.code,{children:"Null"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The function returns an object or a collection depending on the type of data context set with ",(0,s.jsx)(t.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(t.p,{children:"To get the data context bound to the following cells:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{src:n(545053).A+"",width:"300",height:"81"})}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'var $dataContext : Object\n\n$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}\n'})}),"\n",(0,s.jsx)(t.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-binding-path",children:"VP Get binding path"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-set-binding-path",children:"VP SET BINDING PATH"})]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},545053:(e,t,n)=>{n.d(t,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var s=n(296540);const i={},d=s.createContext(i);function r(e){const t=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);