"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51012"],{651803:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/st-get-options","title":"ST GET OPTIONS","description":"ST GET OPTIONS ( { ;} objeto ; opcao ; valor {; opcao2 ; valor2 ; ... ; opcaoN ; valorN*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/st-get-options.md","sourceDirName":"commands-legacy","slug":"/commands/st-get-options","permalink":"/docs/pt/commands/st-get-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-get-options.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"st-get-options","title":"ST GET OPTIONS","slug":"/commands/st-get-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST Get expression","permalink":"/docs/pt/commands/st-get-expression"},"next":{"title":"ST Get plain text","permalink":"/docs/pt/commands/st-get-plain-text"}}'),t=o("785893"),r=o("250065");let d={id:"st-get-options",title:"ST GET OPTIONS",slug:"/commands/st-get-options",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"ST GET OPTIONS"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"opcao"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," {; ",(0,t.jsx)(n.em,{children:"opcao2"})," ; ",(0,t.jsx)(n.em,{children:"valor2"})," ; ... ; ",(0,t.jsx)(n.em,{children:"opcaoN"})," ; ",(0,t.jsx)(n.em,{children:"valorN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 um campo ou uma vari\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsxs)(n.td,{children:["Nome de objeto (se * for especificado) ou",(0,t.jsx)(n.br,{}),"Campo ou vari\xe1vel (se * for omitido)"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"opcao"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Op\xe7\xe3o a ler"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor atual da op\xe7\xe3o"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando ",(0,t.jsx)(n.strong,{children:"ST GET OPTIONS"})," obt\xe9m o valor atual de uma ou v\xe1rias op\xe7\xf5es de funcionamento do campo ou da vari\xe1vel de texto com estilo designada pelo par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"*"})," indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Durante a execu\xe7\xe3o, se o objeto tem o foco, o comando devolve a informa\xe7\xe3o do objeto que se est\xe1 editando, e se o objeto n\xe3o tem o foco, o comando devolve a informa\xe7\xe3o da fonte de dados do objeto (vari\xe1vel ou campo).",(0,t.jsx)(n.br,{}),"\nSe omitir o par\xe2metro ",(0,t.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um campo ou uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de campo ou vari\xe1vel no lugar de uma cadeia. Durante a execu\xe7\xe3o, o comando devolve a informa\xe7\xe3o da vari\xe1vel ou do campo."]}),"\n",(0,t.jsxs)(n.p,{children:["Passe o c\xf3digo da op\xe7\xe3o a ler no par\xe2metro ",(0,t.jsx)(n.em,{children:"opcao"}),". O comando devolve em ",(0,t.jsx)(n.em,{children:"valor"}),' o atual da op\xe7\xe3o. Para ambos par\xe2metros, pode utilizar as seguintes constantes, que se encontram no tema "',(0,t.jsx)(n.em,{children:"Texto multi estilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST Expressions display mode"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsxs)(n.td,{children:["O par\xe2metro ",(0,t.jsx)(n.em,{children:"valor"})," pode conter ST Values ou ST References"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST References"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Mostra as cadeias fonte das express\xf5es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"ST Values"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Mostra os valores calculados das express\xf5es"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/st-set-options",children:"ST SET OPTIONS"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"1290"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var s=o(667294);let t={},r=s.createContext(t);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);