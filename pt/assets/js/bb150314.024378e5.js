"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58172"],{107136:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/last-record","title":"LAST RECORD","description":"LAST RECORD {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/last-record.md","sourceDirName":"commands-legacy","slug":"/commands/last-record","permalink":"/docs/pt/commands/last-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flast-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"last-record","title":"LAST RECORD","slug":"/commands/last-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"HIGHLIGHT RECORDS","permalink":"/docs/pt/commands/highlight-records"},"next":{"title":"MODIFY SELECTION","permalink":"/docs/pt/commands/modify-selection"}}'),t=r("785893"),d=r("250065");let o={id:"last-record",title:"LAST RECORD",slug:"/commands/last-record",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LAST RECORD"})," {( ",(0,t.jsx)(n.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tabela"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tabela para a qual mover ao \xfaltimo registro selecionado, ou tabela padr\xe3o, se omitido"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["LAST RECORD designa o \xfaltimo registro da sele\xe7\xe3o de ",(0,t.jsx)(n.em,{children:"tabela"})," como registro atual e \xe9 carregado em mem\xf3ria. Se a sele\xe7\xe3o atual estiver vazia ou se o registro atual j\xe1 \xe9 o \xfaltimo da sele\xe7\xe3o, LAST RECORD n\xe3o tem efeito."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"O exemplo a seguir designa o \xfaltimo registro da tabela [Pessoas] como registro atual:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0LAST RECORD([Pessoas])\n"})}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/before-selection",children:"Before selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/end-selection",children:"End selection"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/first-record",children:"FIRST RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/next-record",children:"NEXT RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/previous-record",children:"PREVIOUS RECORD"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"200"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modificar o registro atual"}),(0,t.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var s=r(667294);let t={},d=s.createContext(t);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);