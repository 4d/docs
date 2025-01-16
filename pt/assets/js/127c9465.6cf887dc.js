"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55325"],{326483:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>i,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/cut-named-selection","title":"CUT NAMED SELECTION","description":"CUT NAMED SELECTION ( {tabela ;} nome )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/cut-named-selection.md","sourceDirName":"commands-legacy","slug":"/commands/cut-named-selection","permalink":"/docs/pt/commands/cut-named-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcut-named-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"cut-named-selection","title":"CUT NAMED SELECTION","slug":"/commands/cut-named-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY NAMED SELECTION","permalink":"/docs/pt/commands/copy-named-selection"},"next":{"title":"USE NAMED SELECTION","permalink":"/docs/pt/commands/use-named-selection"}}'),d=s("785893"),a=s("250065");let o={id:"cut-named-selection",title:"CUT NAMED SELECTION",slug:"/commands/cut-named-selection",displayed_sidebar:"docs"},r=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," ( {",(0,d.jsx)(n.em,{children:"tabela"})," ;} ",(0,d.jsx)(n.em,{children:"nome"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabela"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabela da qual cortar sele\xe7\xe3o, ou Tabela por padr\xe3o, se omitida"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nome"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome da sele\xe7\xe3o temporal a criar"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["CUT NAMED SELECTION cria uma sele\xe7\xe3o temporal ",(0,d.jsx)(n.em,{children:"nome"})," e coloca ali a sele\xe7\xe3o atual de ",(0,d.jsx)(n.em,{children:"tabela"}),". Diferente de ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"}),", este comando n\xe3o copia a sele\xe7\xe3o atual de ",(0,d.jsx)(n.em,{children:"tabela"}),", mas a move a pr\xf3pria tabela selecionada."]}),"\n",(0,d.jsxs)(n.p,{children:["Depois de executar o comando, a sele\xe7\xe3o atual de ",(0,d.jsx)(n.em,{children:"tabela"})," no processo atual fica vazia. Portanto, CUT NAMED SELECTION n\xe3o deve ser utilizado quando um registro est\xe1 sendo modificado."]}),"\n",(0,d.jsxs)(n.p,{children:["CUT NAMED SELECTION \xe9 mais eficiente em termos de utiliza\xe7\xe3o de mem\xf3ria, que ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"}),". ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",title:"COPY NAMED SELECTION",children:"COPY NAMED SELECTION"}),", utiliza 4 bytes de mem\xf3ria por cada registro da sele\xe7\xe3o. CUT NAMED SELECTION, s\xf3 a refer\xeancia \xe0 lista \xe9 movida."]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(n.p,{children:["O m\xe9todo seguinte vazia a sele\xe7\xe3o atual de uma tabela ",(0,d.jsx)(n.em,{children:"[Clientes]"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0CUT NAMED SELECTION([Clientes];"AEliminar")\n\xa0CLEAR NAMED SELECTION("AEliminar")\n'})}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/use-named-selection",children:"USE NAMED SELECTION"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"334"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,d.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return o}});var t=s(667294);let d={},a=t.createContext(d);function o(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);