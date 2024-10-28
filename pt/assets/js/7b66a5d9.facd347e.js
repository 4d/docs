"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46651],{793947:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>c});var d=n(474848),o=n(28453);const a={id:"adjust-blobs-cache-priority",title:"ADJUST BLOBS CACHE PRIORITY",slug:"/commands/adjust-blobs-cache-priority",displayed_sidebar:"docs"},r=void 0,t={id:"commands-legacy/adjust-blobs-cache-priority",title:"ADJUST BLOBS CACHE PRIORITY",description:"ADJUST BLOBS CACHE PRIORITY ( Tabela ; prioridade )",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/adjust-blobs-cache-priority.md",sourceDirName:"commands-legacy",slug:"/commands/adjust-blobs-cache-priority",permalink:"/docs/pt/commands/adjust-blobs-cache-priority",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadjust-blobs-cache-priority.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"adjust-blobs-cache-priority",title:"ADJUST BLOBS CACHE PRIORITY",slug:"/commands/adjust-blobs-cache-priority",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"True",permalink:"/docs/pt/commands/true"},next:{title:"ADJUST INDEX CACHE PRIORITY",permalink:"/docs/pt/commands/adjust-index-cache-priority"}},i={},c=[{value:"Modo especialista",id:"modo-especialista",level:4},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"ADJUST BLOBS CACHE PRIORITY"})," ( ",(0,d.jsx)(s.em,{children:"Tabela"})," ; ",(0,d.jsx)(s.em,{children:"prioridade"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe2metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Table"}),(0,d.jsx)(s.td,{children:"Table"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:'Tabela cujos "blobs" de valores de prioridade de dados v\xe3o ser ajustados'})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"prioridade"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"Valor de prioridade de Cache para Blobs na tabela"})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"modo-especialista",children:"Modo especialista"}),"\n",(0,d.jsx)(s.p,{children:"Este comando est\xe1 reservado para necessidades espec\xedficas. Deve ser utilizado com cuidado, j\xe1 que pode afetar o rendimento do banco de dados."}),"\n",(0,d.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(s.p,{children:["O comando ",(0,d.jsx)(s.strong,{children:"ADJUST BLOBS CACHE PRIORITY"})," modifica a ",(0,d.jsx)(s.em,{children:"prioridade"}),' dos dados "blobs" relacionados com ',(0,d.jsx)(s.em,{children:"tabela n"}),"a cach\xe9 para o processo atual. Uma chamada a este comando substitui todas as prioridades previamente ajustadas atrav\xe9s do mesmo comando no mesmo processo. Este comando ajusta a prioridade para uma necessidade tempor\xe1ria, por exemplo durante uma pesquisa ou uma importa\xe7\xe3o."]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Nota:"})," este comando s\xf3 funciona em modo local (4D Server e 4D); N\xe3o pode ser utilizado em modo remoto 4D."]}),"\n",(0,d.jsxs)(s.p,{children:['Os tipos de campos de datos "Blobs" incluem BLOB, texto, imagem e objeto. Este comando maneja a prioridade para tais dados quando forem armazenados no arquivo de dados unicamente.',(0,d.jsx)(s.br,{}),"\nA prioridade para os campos de tipo escalar (como os tipos data, n\xfamero ou strings) \xe9 ajustada pelo comando ",(0,d.jsx)(s.a,{href:"/docs/pt/commands/adjust-table-cache-priority",children:"ADJUST TABLE CACHE PRIORITY"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["Passe em ",(0,d.jsx)(s.em,{children:"prioridad"}),'e uma das constantes abaixo do tema "',(0,d.jsx)(s.em,{children:"Gest\xe3o de Cache"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Constante"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{children:"Valor"}),(0,d.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority high"}),(0,d.jsx)(s.td,{children:"Inteiro longo"}),(0,d.jsx)(s.td,{children:"1000"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority low"}),(0,d.jsx)(s.td,{children:"Inteiro longo"}),(0,d.jsx)(s.td,{children:"-900"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority normal"}),(0,d.jsx)(s.td,{children:"Inteiro longo"}),(0,d.jsx)(s.td,{children:"0"}),(0,d.jsx)(s.td,{children:"Define a prioridade da cache a seu valor padr\xe3o"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority very high"}),(0,d.jsx)(s.td,{children:"Inteiro longo"}),(0,d.jsx)(s.td,{children:"30000"}),(0,d.jsx)(s.td,{})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Cache priority very low"}),(0,d.jsx)(s.td,{children:"Inteiro longo"}),(0,d.jsx)(s.td,{children:"-1"}),(0,d.jsx)(s.td,{})]})]})]}),"\n",(0,d.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(s.p,{children:"Se quiser mudar temporariamente a prioridade da cache dos campos de texto da tabela [Docs] armazenados no arquivo de dados ao executar uma pesquisa sequ\xeancial:"}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority very high)\n\xa0QUERY([Docs];[Docs]Author#"A@")\xa0// pesquisa sequ\xeancial de um campo n\xe3o indexado\n\xa0\xa0//... executa v\xe1rias outras pesquisas ou ordena\xe7\xf5es na mesma tabela\n\xa0\xa0// quando terminar, volta para prioridade de cache normal\n\xa0ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority normal)\n'})}),"\n",(0,d.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/pt/commands/get-adjusted-blobs-cache-priority",children:"Get adjusted blobs cache priority"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/commands/set-blobs-cache-priority",children:"SET BLOBS CACHE PRIORITY"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>t});var d=n(296540);const o={},a=d.createContext(o);function r(e){const s=d.useContext(a);return d.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),d.createElement(a.Provider,{value:s},e.children)}}}]);