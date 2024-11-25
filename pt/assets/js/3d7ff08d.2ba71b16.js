"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9406"],{384144:function(e,o,n){n.r(o),n.d(o,{metadata:()=>t,contentTitle:()=>d,default:()=>m,assets:()=>l,toc:()=>a,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/get-highlight","title":"GET HIGHLIGHT","description":"GET HIGHLIGHT ( {Objeto ;} area ; inicioSel ; fimSel )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-highlight.md","sourceDirName":"commands-legacy","slug":"/commands/get-highlight","permalink":"/docs/pt/commands/get-highlight","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-highlight.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-highlight","title":"GET HIGHLIGHT","slug":"/commands/get-highlight","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get edited text","permalink":"/docs/pt/commands/get-edited-text"},"next":{"title":"GOTO OBJECT","permalink":"/docs/pt/commands/goto-object"}}'),i=n("785893"),s=n("250065");let r={id:"get-highlight",title:"GET HIGHLIGHT",slug:"/commands/get-highlight",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"GET HIGHLIGHT"})," ( {",(0,i.jsx)(o.em,{children:"Objeto"})," ;} ",(0,i.jsx)(o.em,{children:"area"})," ; ",(0,i.jsx)(o.em,{children:"inicioSel"})," ; ",(0,i.jsx)(o.em,{children:"fimSel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Par\xe2metro"}),(0,i.jsx)(o.th,{children:"Tipo"}),(0,i.jsx)(o.th,{}),(0,i.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"Objeto"}),(0,i.jsx)(o.td,{children:"*"}),(0,i.jsx)(o.td,{children:"\u2192"}),(0,i.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string=. Se omitido, objeto \xe9 um campo ou vari\xe1vel"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"area"}),(0,i.jsx)(o.td,{children:"Field, Variable, any"}),(0,i.jsx)(o.td,{children:"\u2192"}),(0,i.jsx)(o.td,{children:"Nome de objeto (se * for especificado) ou Campo ou vari\xe1vel (se * for omitido)"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"inicioSel"}),(0,i.jsx)(o.td,{children:"Integer"}),(0,i.jsx)(o.td,{children:"\u2190"}),(0,i.jsx)(o.td,{children:"Posi\xe7\xe3o inicial da sele\xe7\xe3o atual de texto"})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:"fimSel"}),(0,i.jsx)(o.td,{children:"Integer"}),(0,i.jsx)(o.td,{children:"\u2190"}),(0,i.jsx)(o.td,{children:"Posi\xe7\xe3o final da sele\xe7\xe3o atual de texto"})]})]})]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,i.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(o.p,{children:["O comando GET HIGHLIGHT permite determinar o texto selecionado atualmente em ",(0,i.jsx)(o.em,{children:"objeto"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,i.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,i.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passa o par\xe2metro *, indica que o par\xe2metro ",(0,i.jsx)(o.em,{children:"objeto"})," \xe9 um campo ou vari\xe1vel. Neste caso, passe a referencia do campo ou vari\xe1vel (campos ou vari\xe1veis de formul\xe1rio apenas) ao inv\xe9s de uma cadeia."]}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.strong,{children:"Nota"}),": Este comando n\xe3o pode ser utilizado com campos localizados no formul\xe1rio listado de um subformul\xe1rio."]}),"\n",(0,i.jsxs)(o.p,{children:["O texto pode ser selecionado pelo usu\xe1rio ou pelo comando ",(0,i.jsx)(o.a,{href:"/docs/pt/commands/highlight-text",children:"HIGHLIGHT TEXT"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["O par\xe2metro ",(0,i.jsx)(o.em,{children:"inicioSel"})," retorna a posi\xe7\xe3o do primeiro caractere selecionado.",(0,i.jsx)(o.br,{}),"\nO par\xe2metro ",(0,i.jsx)(o.em,{children:"finalSel"})," retorna a posi\xe7\xe3o do \xfaltimo caractere selecionado mais um."]}),"\n",(0,i.jsxs)(o.p,{children:["Se os valores retornados de ",(0,i.jsx)(o.em,{children:"inicioSel"})," e ",(0,i.jsx)(o.em,{children:"finalSel"})," s\xe3o iguais, o usu\xe1rio n\xe3o selecionou nenhum texto, e o ponto de inser\xe7\xe3o est\xe1 localizado antes do caractere especificado por ",(0,i.jsx)(o.em,{children:"inicioSel"}),"."]}),"\n",(0,i.jsxs)(o.p,{children:["Se o objeto designado pelo par\xe2metro ",(0,i.jsx)(o.em,{children:"objeto"})," n\xe3o \xe9 encontrado no formul\xe1rio, o comando devolve -1 em ",(0,i.jsx)(o.em,{children:"inicioSel"})," e -2 em ",(0,i.jsx)(o.em,{children:"finalSel"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,i.jsx)(o.p,{children:"O exemplo abaixo obt\xe9m o texto selecionado no campo [Produtos]Comentarios:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-4d",children:'\xa0GET HIGHLIGHT([Produtos]Comentarios;vFirst;vLast)\n\xa0If(vFirst<vlast) \xa0\xa0\xa0\xa0alert("o="" texto="" selecionado="" \xe9:="" "+substring([produtos]comentarios;vprimerot;vultimo-vprimeiro))="" \xa0end="" if<="" pre=""></vlast)>\n'})}),"\n",(0,i.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,i.jsxs)(o.p,{children:["Ver exemplo para o comando ",(0,i.jsx)(o.a,{href:"/docs/pt/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),"."]}),"\n",(0,i.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,i.jsx)(o.p,{children:"Modifica\xe7\xe3o do estilo do texto ressaltado:"}),"\n",(0,i.jsx)(o.pre,{children:(0,i.jsx)(o.code,{className:"language-4d",children:'\xa0GET HIGHLIGHT(*;"meuTexto";$startsel,$endsel)\n\xa0ST SET ATTRIBUTES(*;"meuTexto";$startsel,$endsel;Attribute underline style;1;Attribute bold style;1)\n'})}),"\n",(0,i.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"/docs/pt/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,i.jsx)(o.br,{}),"\n",(0,i.jsx)(o.a,{href:"/docs/pt/commands/highlight-text",children:"HIGHLIGHT TEXT"}),(0,i.jsx)(o.br,{}),"\n",(0,i.jsx)(o.a,{href:"/docs/pt/commands/keystroke",children:"Keystroke"})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return r}});var t=n(667294);let i={},s=t.createContext(i);function r(e){let o=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);