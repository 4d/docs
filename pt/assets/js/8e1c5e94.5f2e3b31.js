"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17405"],{872571:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>r,metadata:()=>n,assets:()=>t,toc:()=>l,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/listbox-select-row","title":"LISTBOX SELECT ROW","description":"LISTBOX SELECT ROW  ( { ;} objeto ; posi\xe7ao {; a\xe7ao*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/listbox-select-row.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-select-row","permalink":"/docs/pt/commands/listbox-select-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-select-row.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-select-row","title":"LISTBOX SELECT ROW","slug":"/commands/listbox-select-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SELECT BREAK","permalink":"/docs/pt/commands/listbox-select-break"},"next":{"title":"LISTBOX SELECT ROWS","permalink":"/docs/pt/commands/listbox-select-rows"}}'),a=s("785893"),i=s("250065");let r={id:"listbox-select-row",title:"LISTBOX SELECT ROW",slug:"/commands/listbox-select-row",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let o={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"LISTBOX SELECT ROW"}),"  ( {* ;} ",(0,a.jsx)(o.em,{children:"objeto"})," ; ",(0,a.jsx)(o.em,{children:"posi\xe7ao"})," {; ",(0,a.jsx)(o.em,{children:"a\xe7ao"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"*"}),(0,a.jsx)(o.td,{children:"Operador"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"objeto"}),(0,a.jsx)(o.td,{children:"any"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"posi\xe7ao"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"N\xfamero da fila a selecionar"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"a\xe7ao"}),(0,a.jsx)(o.td,{children:"Integer"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"A\xe7\xe3o de sele\xe7\xe3o"})]})]})]}),"\n",(0,a.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["O comando  LISTBOX SELECT ROW seleciona a fila cujo n\xfamero \xe9 passado em ",(0,a.jsx)(o.em,{children:"posi\xe7\xe3o"})," no list box designado pelos par\xe2metros ",(0,a.jsx)(o.em,{children:"objeto"})," e ",(0,a.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Se passar o par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,a.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,a.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,a.jsx)(o.em,{children:"Propriedades dos objetos"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"a\xe7\xe3o"}),", se for passado, se utiliza para definir a a\xe7\xe3o de sele\xe7\xe3o a executar quando uma sele\xe7\xe3o de filas j\xe1 existe no list box. Pode passar um valor ou uma das seguintes constantes (localizadas no tema \u201C",(0,a.jsx)(o.em,{children:"List box"}),"\u201D):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Constante"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{children:"Valor"}),(0,a.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"lk add to selection"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"1"}),(0,a.jsx)(o.td,{children:"A linha selecionada \xe9 adicionada \xe0 sele\xe7\xe3o existente. Se a linha selecionada j\xe1 pertence \xe0 sele\xe7\xe3o existente, o comando n\xe3o faz nada."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"lk remove from selection"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"2"}),(0,a.jsx)(o.td,{children:"A linha selecionada \xe9 removida da sele\xe7\xe3o existente. Se a linha especificada n\xe3o pertence \xe0 sele\xe7\xe3o existente, o comando n\xe3o faz nada."})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"lk replace selection"}),(0,a.jsx)(o.td,{children:"Inteiro longo"}),(0,a.jsx)(o.td,{children:"0"}),(0,a.jsxs)(o.td,{children:["A linha selecionada torna-se a nova sele\xe7\xe3o e substitui a sele\xe7\xe3o existente. O comando tem o mesmo efeito que um clique do usu\xe1rio em uma linha (no entanto, o evento On Clicked n\xe3o \xe9 gerado). Esta \xe9 a a\xe7\xe3o padr\xe3o (se o par\xe2metro ",(0,a.jsx)(o.em,{children:"a\xe7\xe3o"})," \xe9 omitido)."]})]})]})]}),"\n",(0,a.jsxs)(o.p,{children:["Quando o par\xe2metro ",(0,a.jsx)(o.em,{children:"posi\xe7\xe3o"})," n\xe3o corresponde exatamente a um n\xfamero de fila existente, o comando atua da seguinte maneira:"]}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Se ",(0,a.jsx)(o.em,{children:"posi"})," ",(0,a.jsx)(o.em,{children:"\xe7\xe3o"})," \xe9 <0, o comando n\xe3o faz nada, qualquer que seja o valor do par\xe2metro ",(0,a.jsx)(o.em,{children:"a\xe7\xe3o"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:["Se ",(0,a.jsx)(o.em,{children:"posi"})," ",(0,a.jsx)(o.em,{children:"\xe7\xe3o"})," \xe9 0 e o par\xe2metro ",(0,a.jsx)(o.em,{children:"a"})," ",(0,a.jsx)(o.em,{children:"\xe7\xe3o"})," cont\xe9m lk replace selection ou \xe9 omitido, todas as filas do list box s\xe3o selecionadas. Se o par\xe2metro ",(0,a.jsx)(o.em,{children:"a"})," ",(0,a.jsx)(o.em,{children:"\xe7\xe3o"})," cont\xe9m lk remove from selection, todas as filas do list box s\xe3o desmarcadas."]}),"\n",(0,a.jsxs)(o.li,{children:["Se o valor de ",(0,a.jsx)(o.em,{children:"posi"})," ",(0,a.jsx)(o.em,{children:"\xe7\xe3o"})," \xe9 superior ao n\xfamero total de filas contidas no list box (s\xf3 no caso de um array de tipo listbox), ou array booleano associado ao list box \xe9 redimensionado automaticamente e a a\xe7\xe3o de sele\xe7\xe3o \xe9 realizada. Este mecanismo permite utilizar  LISTBOX SELECT ROW com os comandos \u201Cpadr\xe3o\u201D de gest\xe3o de arrays (tais como ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/append-to-array",children:"APPEND TO ARRAY"}),") que n\xe3o provocam a sincroniza\xe7\xe3o imediata do listbox."]}),"\n"]}),"\n",(0,a.jsx)(o.p,{children:"Depois da execu\xe7\xe3o do m\xe9todo, os arrays s\xe3o sincronizados: se o array fonte do listbox for redimensionado efetivamente, a a\xe7\xe3o de sele\xe7\xe3o \xe9 realizada. Do contr\xe1rio, o array booleano associado com o list box volta ao seu tamanho inicial e o comando n\xe3o faz nada."}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(o.ul,{children:["\n",(0,a.jsxs)(o.li,{children:["Se deseja que o list box tenha rolagem automaticamente para mostrar a fila selecionada, utilize o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION "}),"."]}),"\n",(0,a.jsxs)(o.li,{children:["Para passar uma fila a modo edi\xe7\xe3o (para permitir a entrada de dados), utilize o comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/edit-item",children:"EDIT ITEM"}),"."]}),"\n",(0,a.jsxs)(o.li,{children:["Se o n\xfamero passado em ",(0,a.jsx)(o.em,{children:"posi\xe7\xe3o"})," corresponde a uma linha oculta no listbox, a linha \xe9 selecionada mas n\xe3o \xe9 mostrada."]}),"\n",(0,a.jsxs)(o.li,{children:["Se tiver selecionado a op\xe7\xe3o Ocultar o ressaltado de sele\xe7\xe3o para um list box, dever\xe1 fazer as sele\xe7\xf5es de list box vis\xedveis utilizando as op\xe7\xf5es de interface dispon\xedveis. Para maior informa\xe7ao sobre como fazer isto, ver ",(0,a.jsx)(o.em,{children:"Personalizar a apar\xeancia"}),"."]}),"\n"]}),"\n",(0,a.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/commands/edit-item",children:"EDIT ITEM"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/listbox-delete-rows",children:"LISTBOX DELETE ROWS"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/listbox-insert-rows",children:"LISTBOX INSERT ROWS"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/listbox-select-break",children:"LISTBOX SELECT BREAK"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/listbox-select-rows",children:"LISTBOX SELECT ROWS"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION "})]}),"\n",(0,a.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"N\xfamero do comando"}),(0,a.jsx)(o.td,{children:"912"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Thread-seguro"}),(0,a.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,i.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return d},a:function(){return r}});var n=s(667294);let a={},i=n.createContext(a);function r(e){let o=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),n.createElement(i.Provider,{value:o},e.children)}}}]);