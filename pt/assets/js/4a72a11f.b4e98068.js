"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43663"],{707302:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/adjust-blobs-cache-priority","title":"ADJUST BLOBS CACHE PRIORITY","description":"ADJUST BLOBS CACHE PRIORITY ( Tabela ; prioridade )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/adjust-blobs-cache-priority.md","sourceDirName":"commands-legacy","slug":"/commands/adjust-blobs-cache-priority","permalink":"/docs/pt/20-R8/commands/adjust-blobs-cache-priority","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fadjust-blobs-cache-priority.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"adjust-blobs-cache-priority","title":"ADJUST BLOBS CACHE PRIORITY","slug":"/commands/adjust-blobs-cache-priority","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Cache Management","permalink":"/docs/pt/20-R8/commands/theme/Cache-Management"},"next":{"title":"ADJUST INDEX CACHE PRIORITY","permalink":"/docs/pt/20-R8/commands/adjust-index-cache-priority"}}'),r=s("785893"),a=s("250065");let o={id:"adjust-blobs-cache-priority",title:"ADJUST BLOBS CACHE PRIORITY",slug:"/commands/adjust-blobs-cache-priority",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Modo especialista",id:"modo-especialista",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"ADJUST BLOBS CACHE PRIORITY"})," ( ",(0,r.jsx)(n.em,{children:"Tabela"})," ; ",(0,r.jsx)(n.em,{children:"prioridade"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"Table"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'Tabela cujos "blobs" de valores de prioridade de dados v\xe3o ser ajustados'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"prioridade"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor de prioridade de Cache para Blobs na tabela"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"modo-especialista",children:"Modo especialista"}),"\n",(0,r.jsx)(n.p,{children:"Este comando est\xe1 reservado para necessidades espec\xedficas. Deve ser utilizado com cuidado, j\xe1 que pode afetar o rendimento do banco de dados."}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"ADJUST BLOBS CACHE PRIORITY"})," modifica a ",(0,r.jsx)(n.em,{children:"prioridade"}),' dos dados "blobs" relacionados com ',(0,r.jsx)(n.em,{children:"tabela n"}),"a cach\xe9 para o processo atual. Uma chamada a este comando substitui todas as prioridades previamente ajustadas atrav\xe9s do mesmo comando no mesmo processo. Este comando ajusta a prioridade para uma necessidade tempor\xe1ria, por exemplo durante uma pesquisa ou uma importa\xe7\xe3o."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando s\xf3 funciona em modo local (4D Server e 4D); N\xe3o pode ser utilizado em modo remoto 4D."]}),"\n",(0,r.jsxs)(n.p,{children:['Os tipos de campos de datos "Blobs" incluem BLOB, texto, imagem e objeto. Este comando maneja a prioridade para tais dados quando forem armazenados no arquivo de dados unicamente.',(0,r.jsx)(n.br,{}),"\nA prioridade para os campos de tipo escalar (como os tipos data, n\xfamero ou strings) \xe9 ajustada pelo comando ",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/adjust-table-cache-priority",children:"ADJUST TABLE CACHE PRIORITY"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Passe em ",(0,r.jsx)(n.em,{children:"prioridad"}),'e uma das constantes abaixo do tema "',(0,r.jsx)(n.em,{children:"Gest\xe3o de Cache"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority high"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1000"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority low"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"-900"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority normal"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"Define a prioridade da cache a seu valor padr\xe3o"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very high"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"30000"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Cache priority very low"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"-1"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser mudar temporariamente a prioridade da cache dos campos de texto da tabela [Docs] armazenados no arquivo de dados ao executar uma pesquisa sequ\xeancial:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority very high)\n\xa0QUERY([Docs];[Docs]Author#"A@")\xa0// pesquisa sequ\xeancial de um campo n\xe3o indexado\n\xa0\xa0//... executa v\xe1rias outras pesquisas ou ordena\xe7\xf5es na mesma tabela\n\xa0\xa0// quando terminar, volta para prioridade de cache normal\n\xa0ADJUST BLOBS CACHE PRIORITY([Docs];Cache priority normal)\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-adjusted-blobs-cache-priority",children:"Get adjusted blobs cache priority"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-blobs-cache-priority",children:"SET BLOBS CACHE PRIORITY"})]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1431"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return o}});var d=s(667294);let r={},a=d.createContext(r);function o(e){let n=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(a.Provider,{value:n},e.children)}}}]);