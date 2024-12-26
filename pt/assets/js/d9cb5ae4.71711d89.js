"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14265"],{808966:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>t,toc:()=>a,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/listbox-get-cell-position","title":"LISTBOX GET CELL POSITION","description":"LISTBOX GET CELL POSITION ( { ;} objeto {; X ; Y }; coluna ; linha {; varCol*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-cell-position.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-cell-position","permalink":"/docs/pt/commands/listbox-get-cell-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-cell-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-cell-position","title":"LISTBOX GET CELL POSITION","slug":"/commands/listbox-get-cell-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET CELL COORDINATES","permalink":"/docs/pt/commands/listbox-get-cell-coordinates"},"next":{"title":"LISTBOX Get column formula","permalink":"/docs/pt/commands/listbox-get-column-formula"}}'),d=o("785893"),i=o("250065");let r={id:"listbox-get-cell-position",title:"LISTBOX GET CELL POSITION",slug:"/commands/listbox-get-cell-position",displayed_sidebar:"docs"},l=void 0,t={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LISTBOX GET CELL POSITION"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objeto"})," {; ",(0,d.jsx)(n.em,{children:"X"})," ; ",(0,d.jsx)(n.em,{children:"Y"})," }; ",(0,d.jsx)(n.em,{children:"coluna"})," ; ",(0,d.jsx)(n.em,{children:"linha"})," {; ",(0,d.jsx)(n.em,{children:"varCol"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"X"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Horizontal coordinate of mouse"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Y"}),(0,d.jsx)(n.td,{children:"Real"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Vertical coordinate of mouse"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"coluna"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"N\xfamero de coluna"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"linha"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"N\xfamero da fila"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"varCol"}),(0,d.jsx)(n.td,{children:"Pointer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Ponteiro para a vari\xe1vel coluna"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando LISTBOX GET CELL POSITION devolve os n\xfameros da ",(0,d.jsx)(n.em,{children:"coluna"})," e da ",(0,d.jsx)(n.em,{children:"fila"})," correspondentes a localiza\xe7\xe3o no list box (designado por ",(0,d.jsx)(n.em,{children:"*"})," e ",(0,d.jsx)(n.em,{children:"objeto"}),") do \xfaltimo clique ou as coordenadas vertical e horizontal do mouse."]}),"\n",(0,d.jsx)(n.p,{children:"Este comando devolve as coordenadas de um clique ou de uma a\xe7\xe3o de sele\xe7\xe3o mesmo quando a entrada de dados n\xe3o \xe9 permitida no list box."}),"\n",(0,d.jsx)(n.p,{children:"Se forem passados os par\xe2metros X e Y, este comando devolve os n\xfameros de coluna e fila correspondentes \xe0s coordenadas do mouse, do contr\xe1rio este comando devolve os n\xfameros de coluna e fila de um clique ou de uma a\xe7\xe3o de sele\xe7\xe3o. O comando devolver\xe1 valores v\xe1lidos mesmo quando a entrada de dados n\xe3o esteja permitida na list box."}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notas:"})}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"O n\xfamero retornado no par\xe2metro linha n\xe3o leva em considera\xe7\xe3o estados escondidos/exibidos de linhas list box."}),"\n",(0,d.jsxs)(n.li,{children:['Se uma c\xe9lula em uma coluna falsa for clicada, o par\xe2metro linha cont\xe9m contains "X+1", onde X \xe9 o n\xfamero de colunas existentes. (Uma coluna falsa pode ser adicionada automaticamente quando a op\xe7\xe3o "Redimensionamento de coluna" for selecionada; para saber mais, veja o par\xe1grafo ',(0,d.jsx)(n.em,{children:"Redimensionar tema Opcoes"}),")."]}),"\n",(0,d.jsxs)(n.li,{children:["Em um list box hier\xe1rquico, o valor da coluna leva em considera\xe7\xe3o as colunas fusionadas para representar a hierarquia, como explicaod no par\xe1grafo ",(0,d.jsx)(n.em,{children:"Gest\xe3o de sele\xe7\xf5es e de posi\xe7\xf5es"}),"."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"varCol"})," devolve um ponteiro a vari\xe1vel (ou seja para o array) associado com a coluna."]}),"\n",(0,d.jsxs)(n.p,{children:["Quando os par\xe2metros ",(0,d.jsx)(n.em,{children:"X"})," e ",(0,d.jsx)(n.em,{children:"Y"})," n\xe3o s\xe3o utilizados, este comando s\xf3 pode ser chamado no marco de um list box que gere um dos eventos abaixo:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"On Clicked e On Double Clicked"}),"\n",(0,d.jsx)(n.li,{children:"On Before Keystroke e On After Keystroke"}),"\n",(0,d.jsx)(n.li,{children:"On After Edit"}),"\n",(0,d.jsx)(n.li,{children:"On Getting Focus e On Losing Focus"}),"\n",(0,d.jsx)(n.li,{children:"On Data Change"}),"\n",(0,d.jsx)(n.li,{children:"On Selection Change"}),"\n",(0,d.jsx)(n.li,{children:"On Before Data Entry"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:["Quando o comando \xe9 chamado fora deste contexto, ",(0,d.jsx)(n.strong,{children:"LISTBOX GET CELL POSITION"})," devolve 0 em ",(0,d.jsx)(n.em,{children:"coluna"})," e ",(0,d.jsx)(n.em,{children:"fila"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Este comando leva em considera\xe7\xe3o as a\xe7\xf5es de sele\xe7\xe3o ou desele\xe7\xe3o realizadas com o mouse, com o teclado, ou utilizando o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/edit-item",children:"EDIT ITEM"})," (o qual gera o evento On Getting Focus)."]}),"\n",(0,d.jsxs)(n.p,{children:["Se a sele\xe7\xe3o \xe9 modificada utilizando as flechas do teclado, ",(0,d.jsx)(n.em,{children:"coluna"})," devolve 0. Nesse caso, o par\xe2metro ",(0,d.jsx)(n.em,{children:"varCol"})," devolve ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/is-nil-pointer",children:"Is nil pointer"})," se for passado."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/listbox-get-cell-coordinates",children:"LISTBOX GET CELL COORDINATES"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/listbox-select-break",children:"LISTBOX SELECT BREAK"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"971"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return r}});var s=o(667294);let d={},i=s.createContext(d);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);