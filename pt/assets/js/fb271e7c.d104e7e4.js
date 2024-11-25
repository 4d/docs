"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74903"],{532297:function(e,o,n){n.r(o),n.d(o,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/listbox-move-column","title":"LISTBOX MOVE COLUMN","description":"LISTBOX MOVE COLUMN ( { ;} objeto ; colPosition* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-move-column.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-move-column","permalink":"/docs/pt/commands/listbox-move-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-move-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-move-column","title":"LISTBOX MOVE COLUMN","slug":"/commands/listbox-move-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX INSERT ROWS","permalink":"/docs/pt/commands/listbox-insert-rows"},"next":{"title":"LISTBOX MOVED COLUMN NUMBER","permalink":"/docs/pt/commands/listbox-moved-column-number"}}'),t=n("785893"),a=n("250065");let r={id:"listbox-move-column",title:"LISTBOX MOVE COLUMN",slug:"/commands/listbox-move-column",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"LISTBOX MOVE COLUMN"})," ( {* ;} ",(0,t.jsx)(o.em,{children:"objeto"})," ; ",(0,t.jsx)(o.em,{children:"colPosition"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"*"}),(0,t.jsx)(o.td,{children:"Operador"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto (cadeia) Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objeto"}),(0,t.jsx)(o.td,{children:"any"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsxs)(o.td,{children:["Nome do objeto (se especificado *) ou",(0,t.jsx)(o.br,{}),"Vari\xe1vel (se omitido *) da coluna a mover"]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"colPosition"}),(0,t.jsx)(o.td,{children:"Integer"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nova localiza\xe7\xe3o da coluna"})]})]})]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando ",(0,t.jsx)(o.strong,{children:"LISTBOX MOVE COLUMN"})," move por programa\xe7\xe3o a coluna designada pelos par\xe2metros ",(0,t.jsx)(o.em,{children:"objeto"})," e ",(0,t.jsx)(o.em,{children:"*"})," no contexto do formul\xe1rio em execu\xe7\xe3o (modo Aplica\xe7\xe3o). O formul\xe1rio original, gerado em modo Desenho, n\xe3o se modifica."]}),"\n",(0,t.jsxs)(o.p,{children:["Os par\xe2metros ",(0,t.jsx)(o.em,{children:"objeto"})," e ",(0,t.jsx)(o.em,{children:"*"})," designam a coluna a mover. Ao passar o par\xe2metro opcional ",(0,t.jsx)(o.em,{children:"*"})," indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 um nome de coluna (cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel de coluna. Neste caso, passe uma refer\xeancia de vari\xe1vel no lugar de uma cadeia.",(0,t.jsx)(o.br,{}),"\ni",(0,t.jsx)(o.br,{}),"\nA coluna se move justo em frente da designada pelo par\xe2metro ",(0,t.jsx)(o.em,{children:"posicaoCol"}),". Se o par\xe2metro ",(0,t.jsx)(o.em,{children:"posicaoCol"})," \xe9 maior ao n\xfamero total de colunas, logo a coluna se move at\xe9 justo depois da \xfaltima coluna."]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota"}),": Este comando n\xe3o faz nada quando se aplica a primeira coluna de um list box que se mostra no modo hier\xe1rquico."]}),"\n",(0,t.jsx)(o.p,{children:"O comando em conta as propriedades das colunas est\xe1ticas e bloqueadas: por exemplo, se tentar mover uma coluna est\xe1tica, o comando n\xe3o faz nada."}),"\n",(0,t.jsx)(o.p,{children:"Esta funcionalidade est\xe1 presente em 4D em modo Aplica\xe7\xe3o: o usu\xe1rio pode mover as colunas n\xe3o est\xe1ticas utilizando o mouse. No entanto, a diferen\xe7a do deslocamento realizado pelo usu\xe1rio, este comando n\xe3o gera o evento On Column Moved."}),"\n",(0,t.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"Voc\xea quer inverter a segunda e terceira coluna do list box:"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0LISTBOX MOVE COLUMN(*;"column2";3)\n'})}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/pt/commands/listbox-duplicate-column",children:"LISTBOX DUPLICATE COLUMN"})})]})}function m(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return r}});var s=n(667294);let t={},a=s.createContext(t);function r(e){let o=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),s.createElement(a.Provider,{value:o},e.children)}}}]);