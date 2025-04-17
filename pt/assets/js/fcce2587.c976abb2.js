"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73449"],{806230:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/set-table-cache-priority","title":"SET TABLE CACHE PRIORITY","description":"SET TABLE CACHE PRIORITY ( Tabela ; prioridade )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/set-table-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/set-table-cache-priority","permalink":"/docs/pt/commands/set-table-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-table-cache-priority.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"set-table-cache-priority","title":"SET TABLE CACHE PRIORITY","slug":"/commands/set-table-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET INDEX CACHE PRIORITY","permalink":"/docs/pt/commands/set-index-cache-priority"},"next":{"title":"Cole\xe7\xf5es","permalink":"/docs/pt/commands/theme/Collections"}}'),d=n("785893"),t=n("250065");let a={id:"set-table-cache-priority",title:"SET TABLE CACHE PRIORITY",slug:"/commands/set-table-cache-priority",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Modo especialista",id:"modo-especialista",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"SET TABLE CACHE PRIORITY"})," ( ",(0,d.jsx)(s.em,{children:"Tabela"})," ; ",(0,d.jsx)(s.em,{children:"prioridade"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe2metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Table"}),(0,d.jsx)(s.td,{children:"Table"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Tabela cuja prioridade de dados escalar vai ser estabelecida para a sess\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"prioridade"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Valor de prioridade de cache para valores escalares na tabela"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"modo-especialista",children:"Modo especialista"}),"\n",(0,d.jsx)(s.p,{children:"Este comando est\xe1 reservado para necessidades espec\xedficas. Deve ser utilizado com cuidado, j\xe1 que pode afetar o rendimento do banco de dados."}),"\n",(0,d.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(s.p,{children:["O comando ",(0,d.jsx)(s.strong,{children:"SET TABLE CACHE PRIORITY"})," estabelece uma ",(0,d.jsx)(s.em,{children:"prioridade"})," espec\xedfica para os dados relacionados a ",(0,d.jsx)(s.em,{children:"Tabela"})," em cache para todos os processos na sess\xe3o atual. Este comando deve ser chamado nos m\xe9todos de banco de dados ",(0,d.jsx)(s.strong,{children:"On Startup"})," ou ",(0,d.jsx)(s.strong,{children:"On Server Startup"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Nota:"})," Este comando s\xf3 funciona em modo local (4D Server e 4D); n\xe3o pode ser usado em modo remoto 4D."]}),"\n",(0,d.jsxs)(s.p,{children:["Este comando gerencia prioridade para dados apenas em campos escalares (data, n\xfamero ou tipo string). Prioridade para campos de tipo bin\xe1rio (Blobs, textos, imagens e objetos) \xe9 manejada pelo comando ",(0,d.jsx)(s.a,{href:"/docs/pt/commands/set-blobs-cache-priority",children:"SET BLOBS CACHE PRIORITY"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Passe em ",(0,d.jsx)(s.em,{children:"prioridade"}),' uma das constantes abaixo do tema "',(0,d.jsx)(s.em,{children:"Gest\xe3o de Cache"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Constante"}),(0,d.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority low"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority very low"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority normal"}),(0,d.jsx)(s.td,{children:"Define a prioridade da cache a seu valor padr\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority high"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority very high"}),(0,d.jsx)(s.td,{})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(s.p,{children:"Em , se quiser estabelecer uma prioridade mais alta para os dados escalares [Customer] :"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:"\xa0SET TABLE CACHE PRIORITY([Customer];Cache priority very high)\n"})}),"\n",(0,d.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/pt/commands/adjust-index-cache-priority",children:"ADJUST INDEX CACHE PRIORITY"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/commands/adjust-table-cache-priority",children:"ADJUST TABLE CACHE PRIORITY"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/commands/get-adjusted-table-cache-priority",children:"Get adjusted table cache priority"})]}),"\n",(0,d.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"N\xfamero do comando"}),(0,d.jsx)(s.td,{children:"1400"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread-seguro"}),(0,d.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return a}});var r=n(667294);let d={},t=r.createContext(d);function a(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);