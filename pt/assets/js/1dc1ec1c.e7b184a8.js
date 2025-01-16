"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37680"],{213852:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>t});var n=JSON.parse('{"id":"commands-legacy/highlight-records","title":"HIGHLIGHT RECORDS","description":"HIGHLIGHT RECORDS ( {tabela }{;}{ nomConjunto {; *}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/highlight-records.md","sourceDirName":"commands-legacy","slug":"/commands/highlight-records","permalink":"/docs/pt/20-R7/commands/highlight-records","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhighlight-records.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"highlight-records","title":"HIGHLIGHT RECORDS","slug":"/commands/highlight-records","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GOTO SELECTED RECORD","permalink":"/docs/pt/20-R7/commands/goto-selected-record"},"next":{"title":"LAST RECORD","permalink":"/docs/pt/20-R7/commands/last-record"}}'),r=s("785893"),a=s("250065");let d={id:"highlight-records",title:"HIGHLIGHT RECORDS",slug:"/commands/highlight-records",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"HIGHLIGHT RECORDS"})," ( {",(0,r.jsx)(o.em,{children:"tabela"})," }{;}{ ",(0,r.jsx)(o.em,{children:"nomConjunto"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Par\xe2metro"}),(0,r.jsx)(o.th,{children:"Tipo"}),(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"tabela"}),(0,r.jsx)(o.td,{children:"Table"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Tabela cujos registros foram selecionados se omitidos, tabela do formul\xe1rio atual"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"nomConjunto"}),(0,r.jsx)(o.td,{children:"Text"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Conjunto de registros a selecionar ou Userset se omitido"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"*"}),(0,r.jsx)(o.td,{children:"Operador"}),(0,r.jsx)(o.td,{children:"\u2192"}),(0,r.jsx)(o.td,{children:"Desativar a barra de rolagem autom\xe1tico da lista"})]})]})]}),"\n",(0,r.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(o.p,{children:["O comando HIGHLIGHT RECORDS permite selecionar registros em um formul\xe1rio listado. Esta opera\xe7\xe3o \xe9 id\xeantica \xe0 sele\xe7\xe3o de registros manual em modo listado utilizando o mouse ou as combina\xe7\xf5es de teclado ",(0,r.jsx)(o.strong,{children:"Shift+Clique"})," ou ",(0,r.jsx)(o.strong,{children:"Ctrl+Clique"})," (Windows) ou ",(0,r.jsx)(o.strong,{children:"comando+Clique"})," (Mac OS). A sele\xe7\xe3o atual n\xe3o \xe9 modificada."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota"}),": o conjunto de registros selecionados \xe9 atualizado depois de redesenhar os registros; ou seja, depois da execu\xe7\xe3o de todo o m\xe9todo de chamada e n\xe3o apenas imediatamente depois da execu\xe7\xe3o de HIGHLIGHT RECORDS."]}),"\n",(0,r.jsxs)(o.p,{children:["O par\xe2metro ",(0,r.jsx)(o.em,{children:"tabela"})," permite designar a tabela da qual selecionar os registros. Este par\xe2metro pode ser utilizado, particularmente, para selecionar os registros dos subformul\xe1rios inclu\xeddos, os quais n\xe3o pertencem \xe0 tabela atual (ver a seguir)."]}),"\n",(0,r.jsxs)(o.ul,{children:["\n",(0,r.jsxs)(o.li,{children:["Se passa um nome de conjunto v\xe1lido em ",(0,r.jsx)(o.em,{children:"nomConjunto"}),", o comando ser\xe1 aplicado aos registros desse conjunto para a ",(0,r.jsx)(o.em,{children:"tabela"})," definida."]}),"\n",(0,r.jsxs)(o.li,{children:["Se omite o par\xe2metro ",(0,r.jsx)(o.em,{children:"nomConjunto"}),", o comando selecionar\xe1 unicamente os registros do conjunto UserSet atual. Este conjunto apenas \xe9 manejado em modo Desenho em caso de chamar os comandos ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/display-selection",children:"DISPLAY SELECTION"})," /",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/modify-selection",children:"MODIFY SELECTION"}),". Se deseja selecionar os registros de um subformul\xe1rio, deve passar um nome de tabela e de conjunto. Para maior informa\xe7\xe3o sobre o conjunto UserSet, consulte a se\xe7\xe3o ",(0,r.jsx)(o.em,{children:"Conjuntos"})]}),"\n"]}),"\n",(0,r.jsxs)(o.p,{children:["Quando se passa o par\xe2metro *, provoca a inativa\xe7\xe3o da fun\xe7\xe3o de rolagem autom\xe1tico da lista se os registros selecionados n\xe3o forem vis\xedveis. Este mecanismo autoriza a gest\xe3o personalizadas da rolagem atrav\xe9s do comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION "}),"."]}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.strong,{children:"Nota"}),": no marco dos subformul\xe1rios inclu\xeddos, o comando HIGHLIGHT RECORDS n\xe3o faz nada se a propriedade de sele\xe7\xe3o ",(0,r.jsx)(o.strong,{children:"V\xe1rias linhas"})," n\xe3o estiver selecionada para o formul\xe1rio. Neste caso, para selecionar uma linha, deve utilizar o comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),"."]}),"\n",(0,r.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(o.p,{children:["Em um formul\xe1rio de sa\xedda mostrado pelo comando ",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/modify-selection",children:"MODIFY SELECTION"}),", voc\xea deseja que o usu\xe1rio possa realizar pesquisas sem que a sele\xe7\xe3o atual seja modificada. Para fazer isto, coloque um bot\xe3o ",(0,r.jsx)(o.strong,{children:"Procurar"})," no formul\xe1rio e associe-o com o seguinte m\xe9todo:"]}),"\n",(0,r.jsx)(o.pre,{children:(0,r.jsx)(o.code,{className:"language-4d",children:'\xa0SET QUERY DESTINATION(Into set;"UserSet")\n\xa0QUERY\n\xa0SET QUERY DESTINATION(Into current selection)\n\xa0HIGHLIGHT RECORDS\n'})}),"\n",(0,r.jsx)(o.p,{children:"Quando o usu\xe1rio clicar no bot\xe3o, aparece a caixa de di\xe1logo padr\xe3o procurar. Quando confirmar a pesquisa, os registros encontrados ser\xe3o selecionados sem que a sele\xe7\xe3o atual seja modificada."}),"\n",(0,r.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(o.p,{children:[(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/get-highlighted-records",children:"GET HIGHLIGHTED RECORDS"}),(0,r.jsx)(o.br,{}),"\n",(0,r.jsx)(o.a,{href:"/docs/pt/20-R7/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION "})]}),"\n",(0,r.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{}),(0,r.jsx)(o.th,{})]})}),(0,r.jsxs)(o.tbody,{children:[(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"N\xfamero do comando"}),(0,r.jsx)(o.td,{children:"656"})]}),(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"Thread-seguro"}),(0,r.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return t},a:function(){return d}});var n=s(667294);let r={},a=n.createContext(r);function d(e){let o=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:o},e.children)}}}]);