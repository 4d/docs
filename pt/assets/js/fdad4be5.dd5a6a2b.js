"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29866],{715090:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var d=s(474848),r=s(28453);const i={id:"set-index-cache-priority",title:"SET INDEX CACHE PRIORITY",slug:"/commands/set-index-cache-priority",displayed_sidebar:"docs"},t=void 0,o={id:"commands-legacy/set-index-cache-priority",title:"SET INDEX CACHE PRIORITY",description:"SET INDEX CACHE PRIORITY ( Campo ; prioridade )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-index-cache-priority.md",sourceDirName:"commands-legacy",slug:"/commands/set-index-cache-priority",permalink:"/docs/pt/commands/set-index-cache-priority",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-index-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"set-index-cache-priority",title:"SET INDEX CACHE PRIORITY",slug:"/commands/set-index-cache-priority",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SET CACHE SIZE",permalink:"/docs/pt/commands/set-cache-size"},next:{title:"SET TABLE CACHE PRIORITY",permalink:"/docs/pt/commands/set-table-cache-priority"}},a={},c=[{value:"Modo especialista",id:"modo-especialista",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET INDEX CACHE PRIORITY"})," ( ",(0,d.jsx)(n.em,{children:"Campo"})," ; ",(0,d.jsx)(n.em,{children:"prioridade"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Field"}),(0,d.jsx)(n.td,{children:"Field"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Campo cujo valor de prioridade de \xedndices vai ser estabelecida para a sess\xe3o"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"prioridade"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Valor de prioridade cache para o campo \xedndice"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"modo-especialista",children:"Modo especialista"}),"\n",(0,d.jsx)(n.p,{children:"Este comando est\xe1 reservado para necessidades espec\xedficas. Deve ser utilizado com cuidado, j\xe1 que pode afetar o rendimento do banco de dados."}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando ",(0,d.jsx)(n.strong,{children:"SET INDEX CACHE PRIORITY"})," estabelece uma ",(0,d.jsx)(n.em,{children:"prioridade"})," espec\xedfica para o \xedndice relacionado ao cache ",(0,d.jsx)(n.em,{children:"Campo"})," para todos os processos na sess\xe3o atual. Este comando devia ser chamado no m\xe9todo de banco de dados ",(0,d.jsx)(n.strong,{children:"On Startup"})," ou ",(0,d.jsx)(n.strong,{children:"On Server Startup"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," Este comando s\xf3 funciona em modo local (4D Server e 4D); n\xe3o pode ser usada em modo remoto 4D."]}),"\n",(0,d.jsxs)(n.p,{children:["Este comando maneja prioridade para todos os \xedndices relacionadas ao ",(0,d.jsx)(n.em,{children:"Campo"}),", incluindo \xedndices de palavras chaves (prioridade de \xedndices compostos n\xe3o pode ser personalizada)."]}),"\n",(0,d.jsxs)(n.p,{children:["Passe em ",(0,d.jsx)(n.em,{children:"prioridade"}),' uma das constantes abaixo do tema "',(0,d.jsx)(n.em,{children:"Gest\xe3o de Cache"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority low"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority very low"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority normal"}),(0,d.jsx)(n.td,{children:"Define a prioridade da cache a seu valor padr\xe3o"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority high"}),(0,d.jsx)(n.td,{})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Cache priority very high"}),(0,d.jsx)(n.td,{})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Em , se quiser estabelecer uma alta prioridade para os \xedndices campo [Customer]LastName:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0SET INDEX CACHE PRIORITY([Customer]LastName;Cache priority very high)\n"})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/adjust-index-cache-priority",children:"ADJUST INDEX CACHE PRIORITY"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-adjusted-index-cache-priority",children:"Get adjusted index cache priority"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>o});var d=s(296540);const r={},i=d.createContext(r);function t(e){const n=d.useContext(i);return d.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);