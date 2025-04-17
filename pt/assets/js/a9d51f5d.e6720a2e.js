"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60716"],{411462:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>a,toc:()=>i,contentTitle:()=>c});var o=JSON.parse('{"id":"commands-legacy/next-record","title":"NEXT RECORD","description":"NEXT RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/next-record.md","sourceDirName":"commands-legacy","slug":"/commands/next-record","permalink":"/docs/pt/commands/next-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnext-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"next-record","title":"NEXT RECORD","slug":"/commands/next-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"MODIFY SELECTION","permalink":"/docs/pt/commands/modify-selection"},"next":{"title":"ONE RECORD SELECT","permalink":"/docs/pt/commands/one-record-select"}}'),s=r("785893"),t=r("250065");let d={id:"next-record",title:"NEXT RECORD",slug:"/commands/next-record",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"NEXT RECORD"})," {( ",(0,s.jsx)(n.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabela"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabela para a qual mover o novo registro selecionado, ou tabela padr\xe3o, se omitido"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["NEXT RECORD move o ponteiro do registro atual ao seguinte registro na sele\xe7\xe3o atual de tabela para o processo atual. Se a sele\xe7\xe3o atual estiver vazia, ou se ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/before-selection",children:"Before selection"})," ou ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/end-selection",children:"End selection"})," for TRUE, NEXT RECORD n\xe3o tem nenhum efeito."]}),"\n",(0,s.jsxs)(n.p,{children:["Se NEXT RECORD move o ponteiro do registro atual ao final da sele\xe7\xe3o atual, ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/end-selection",children:"End selection"})," retorna TRUE, e n\xe3o houver registro atual. Se ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/end-selection",children:"End selection"})," retorna TRUE, utilize ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/first-record",children:"FIRST RECORD"}),", ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/last-record",children:"LAST RECORD"})," ou ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/goto-selected-record",children:"GOTO SELECTED RECORD"})," para mover o ponteiro do registro atual de regresso a sele\xe7\xe3o atual."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsxs)(n.p,{children:["Ver o exemplo do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/display-record",title:"DISPLAY RECORD",children:"DISPLAY RECORD"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/before-selection",children:"Before selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/end-selection",children:"End selection"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/first-record",children:"FIRST RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/last-record",children:"LAST RECORD"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/previous-record",children:"PREVIOUS RECORD"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"51"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar o registro atual"}),(0,s.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var o=r(667294);let s={},t=o.createContext(s);function d(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);