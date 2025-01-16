"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24156"],{640348:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>l,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/all-records","title":"ALL RECORDS","description":"ALL RECORDS {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/all-records.md","sourceDirName":"commands-legacy","slug":"/commands/all-records","permalink":"/docs/pt/commands/all-records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fall-records.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"all-records","title":"ALL RECORDS","slug":"/commands/all-records","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Selection","permalink":"/docs/pt/category/selection"},"next":{"title":"APPLY TO SELECTION","permalink":"/docs/pt/commands/apply-to-selection"}}'),o=r("785893"),t=r("250065");let d={id:"all-records",title:"ALL RECORDS",slug:"/commands/all-records",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function i(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"ALL RECORDS"})," {( ",(0,o.jsx)(s.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"tabela"}),(0,o.jsx)(s.td,{children:"Table"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Tabela para a qual vai selecionar todos os registros, ou tabela padr\xe3o, se omitido"})]})})]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["ALL RECORDS seleciona todos os registros de ",(0,o.jsx)(s.em,{children:"tabela"})," para o processo atual. ALL RECORDS faz do primeiro registro da sele\xe7\xe3o o registro atual e o carrega em mem\xf3ria. ALL RECORDS retorna os registros na ordem padr\xe3o, que \xe9 a ordem no qual os registros s\xe3o armazenados no disco"]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:"O exemplo a seguir mostra todos os registros da tabela [Pessoas]:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:"\xa0ALL RECORDS([Pessoas])\xa0// Sele\xe7\xe3o de todos os registros na tabela\n\xa0DISPLAY SELECTION([Pessoas])\xa0// Mostrar os registros no formul\xe1rio de sa\xedda\n"})}),"\n",(0,o.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/display-selection",children:"DISPLAY SELECTION"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/modify-selection",children:"MODIFY SELECTION"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/order-by",children:"ORDER BY"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/query",children:"QUERY"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/records-in-selection",children:"Records in selection"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/records-in-table",children:"Records in table"})]}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"47"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Modificar o registro atual"}),(0,o.jsx)(s.td,{})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,o.jsx)(s.td,{})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(i,{...e})}):i(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return d}});var n=r(667294);let o={},t=n.createContext(o);function d(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);