"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51555"],{764203:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/previous-record","title":"PREVIOUS RECORD","description":"PREVIOUS RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/previous-record.md","sourceDirName":"commands-legacy","slug":"/commands/previous-record","permalink":"/docs/pt/commands/previous-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fprevious-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"previous-record","title":"PREVIOUS RECORD","slug":"/commands/previous-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ONE RECORD SELECT","permalink":"/docs/pt/commands/one-record-select"},"next":{"title":"Records in selection","permalink":"/docs/pt/commands/records-in-selection"}}'),o=n("785893"),t=n("250065");let d={id:"previous-record",title:"PREVIOUS RECORD",slug:"/commands/previous-record",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let r={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"PREVIOUS RECORD"})," {( ",(0,o.jsx)(r.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tabela"}),(0,o.jsx)(r.td,{children:"Table"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Tabela para a qual vai mover o registro previamente selecionado, ou tabela padr\xe3o, se omitido"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["PREVIOUS RECORD move o ponteiro do registro atual ao registro anterior na sele\xe7\xe3o de ",(0,o.jsx)(r.em,{children:"tabela"})," para o processo atual. Se a sele\xe7\xe3o atual estiver vazia, ou se ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/before-selection",children:"Before selection"})," ou ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/end-selection",children:"End selection"})," for TRUE, PREVIOUS RECORD n\xe3o tem nenhum efeito."]}),"\n",(0,o.jsxs)(r.p,{children:["Se PREVIOUS RECORD move o ponteiro do registro atual antes da sele\xe7\xe3o atual, Before selection retorna TRUE, e n\xe3o h\xe1 registro atual. Se ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/end-selection",children:"End selection"})," retorna TRUE, utilize ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/first-record",children:"FIRST RECORD"}),", ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/last-record",children:"LAST RECORD"})," ou ",(0,o.jsx)(r.a,{href:"/docs/pt/commands/goto-selected-record",children:"GOTO SELECTED RECORD"})," para mover o ponteiro do registro atual na sele\xe7\xe3o atual."]}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/commands/before-selection",children:"Before selection"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/end-selection",children:"End selection"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/first-record",children:"FIRST RECORD"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/last-record",children:"LAST RECORD"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/commands/next-record",children:"NEXT RECORD"})]}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"110"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2713"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Modificar o registro atual"}),(0,o.jsx)(r.td,{})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return d}});var s=n(667294);let o={},t=s.createContext(o);function d(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);