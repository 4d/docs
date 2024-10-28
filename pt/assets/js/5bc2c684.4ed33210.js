"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14998],{271397:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>c,default:()=>l,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var d=t(474848),o=t(28453);const s={id:"vp-get-data-context",title:"VP Get data context"},c=void 0,i={id:"ViewPro/commands/vp-get-data-context",title:"VP Get data context",description:"Hist\xf3ria",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-get-data-context.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-data-context",permalink:"/docs/pt/20-R6/ViewPro/commands/vp-get-data-context",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-data-context.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-data-context",title:"VP Get data context"},sidebar:"docs",previous:{title:"VP Get current sheet",permalink:"/docs/pt/20-R6/ViewPro/commands/vp-get-current-sheet"},next:{title:"VP Get default style",permalink:"/docs/pt/20-R6/ViewPro/commands/vp-get-default-style"}},a={},r=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function h(e){const n={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.details,{children:[(0,d.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Release"}),(0,d.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"19 R5"}),(0,d.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"VP Get data context"})," ( ",(0,d.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,d.jsx)(n.em,{children:"sheet"})," : Integer } ) : Object",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.strong,{children:"VP Get data context"})," ( ",(0,d.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,d.jsx)(n.em,{children:"sheet"})," : Integer } ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"vpAreaName"}),(0,d.jsx)(n.td,{children:"Object"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"Nome de objeto formul\xe1rio \xe1rea 4D View Pro"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sheet"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"->"}),(0,d.jsx)(n.td,{children:"\xcdndice da folha a partir da qual se obt\xe9m o contexto de dados"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultados"}),(0,d.jsx)(n.td,{children:"Object | Collection"}),(0,d.jsx)(n.td,{children:"<-"}),(0,d.jsx)(n.td,{children:"Contexto de dados"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.code,{children:"VP Get data context"})," command returns the current data context of a worksheet. O contexto retornado inclui todas as modifica\xe7\xf5es feitas no conte\xfado do contexto de dados."]}),"\n",(0,d.jsxs)(n.p,{children:["Em ",(0,d.jsx)(n.em,{children:"sheet"}),", passe o \xedndice da planilha para obter o contexto de dados. Se nenhum \xedndice for passado, o comando retornar\xe1 o contexto de dados da planilha atual. Se n\xe3o houver contexto para a planilha, o comando retornar\xe1 ",(0,d.jsx)(n.code,{children:"Null"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The function returns an object or a collection depending on the type of data context set with ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Para obter o contexto de dados ligado \xe0s c\xe9lulas seguintes:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:t(275297).A+"",width:"300",height:"81"})}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'var $dataContext : Object\n\n$dataContext:=VP Get data context("ViewProArea") // {firstName:Freehafer,lastName:Nancy}\n'})}),"\n",(0,d.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-data-context",children:"VP SET DATA CONTEXT"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-get-binding-path",children:"VP Get binding path"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R6/ViewPro/commands/vp-set-binding-path",children:"VP SET BINDING PATH"})]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},275297:(e,n,t)=>{t.d(n,{A:()=>d});const d="data:image/png;base64,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"},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>i});var d=t(296540);const o={},s=d.createContext(o);function c(e){const n=d.useContext(s);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);