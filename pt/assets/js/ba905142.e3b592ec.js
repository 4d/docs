"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62470"],{361067:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/set-query-limit","title":"SET QUERY LIMIT","description":"SET QUERY LIMIT ( limite )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-query-limit.md","sourceDirName":"commands-legacy","slug":"/commands/set-query-limit","permalink":"/docs/pt/commands/set-query-limit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-query-limit.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-query-limit","title":"SET QUERY LIMIT","slug":"/commands/set-query-limit","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET QUERY DESTINATION","permalink":"/docs/pt/commands/set-query-destination"},"next":{"title":"Quick Report","permalink":"/docs/pt/commands/theme/Quick-Report"}}'),t=n("785893"),i=n("250065");let d={id:"set-query-limit",title:"SET QUERY LIMIT",slug:"/commands/set-query-limit",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SET QUERY LIMIT"})," ( ",(0,t.jsx)(s.em,{children:"limite"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"limite"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"N\xfamero de registros, ou 0 se n\xe3o houver limite"})]})})]}),"\n",(0,t.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["SET QUERY LIMIT permite pedir a 4D deter todas as pesquisas posteriores no processo atual logo que encontre o n\xfamero de registros definido em ",(0,t.jsx)(s.em,{children:"limite"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["Se por exemplo, ",(0,t.jsx)(s.em,{children:"limite"})," for igual a 1, as pesquisas param logo que um registro coincida com as condi\xe7\xf5es de pesquisa."]}),"\n",(0,t.jsxs)(s.p,{children:["Para que as pesquisas sejam ilimitadas de novo, chame SET QUERY LIMIT novamente com ",(0,t.jsx)(s.em,{children:"limite"})," igual a 0."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Advert\xeancia:"})," SET QUERY LIMIT afeta todas as pesquisas posteriores no processo atual. LEMBRE sempre associar uma chamada a SET QUERY LIMIT(",(0,t.jsx)(s.em,{children:"limite"}),") (onde ",(0,t.jsx)(s.em,{children:"limite>0"}),") com uma chamada a SET QUERY LIMIT(0) para restabelecer as pesquisas ilimitadas."]}),"\n",(0,t.jsx)(s.p,{children:"SET QUERY LIMIT muda o comportamento dos comandos de pesquisa:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query",title:"QUERY",children:"QUERY"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-selection",title:"QUERY SELECTION",children:"QUERY SELECTION"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-by-example",title:"QUERY BY EXAMPLE",children:"QUERY BY EXAMPLE"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-by-formula",title:"QUERY BY FORMULA",children:"QUERY BY FORMULA"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-by-sql",title:"QUERY BY SQL",children:"QUERY BY SQL"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-selection-by-formula",title:"QUERY SELECTION BY FORMULA",children:"QUERY SELECTION BY FORMULA"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-selection-with-array",title:"QUERY SELECTION WITH ARRAY",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-with-array",title:"QUERY WITH ARRAY",children:"QUERY WITH ARRAY"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,t.jsx)(s.li,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-selection-by-attribute",children:"QUERY SELECTION BY ATTRIBUTE"})}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Por outro lado, SET QUERY LIMIT n\xe3o afeta os outros comandos que possam modificar a sele\xe7\xe3o atual de uma tabela como ",(0,t.jsx)(s.a,{href:"/docs/pt/commands/all-records",title:"ALL RECORDS",children:"ALL RECORDS"}),", ",(0,t.jsx)(s.a,{href:"/docs/pt/commands/relate-many",title:"RELATE MANY",children:"RELATE MANY"}),", etc."]}),"\n",(0,t.jsx)(s.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(s.p,{children:"Para realizar uma pesquisa que corresponda \xe0 f\xf3rmula \u201C...encontrar dez clientes cujas vendas sejam superiores a $1 M...\u201D, escreva o seguinte c\xf3digo:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0SET QUERY LIMIT(10)\n\xa0QUERY([Clientes];[Clientes]Vendas>1000000)\n\xa0SET QUERY LIMIT(0)\n"})}),"\n",(0,t.jsx)(s.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsxs)(s.p,{children:["Ver o segundo exemplo do comando ",(0,t.jsx)(s.a,{href:"/docs/pt/commands/set-query-destination",title:"SET QUERY DESTINATION",children:"SET QUERY DESTINATION"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/pt/commands/get-query-limit",children:"Get query limit"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/query",children:"QUERY"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-by-example",children:"QUERY BY EXAMPLE"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-by-formula",children:"QUERY BY FORMULA"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-by-sql",children:"QUERY BY SQL"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-selection",children:"QUERY SELECTION"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-selection-by-formula",children:"QUERY SELECTION BY FORMULA"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/query-with-array",children:"QUERY WITH ARRAY"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/set-query-destination",children:"SET QUERY DESTINATION"})]}),"\n",(0,t.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"N\xfamero do comando"}),(0,t.jsx)(s.td,{children:"395"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread-seguro"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return d}});var r=n(667294);let t={},i=r.createContext(t);function d(e){let s=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);