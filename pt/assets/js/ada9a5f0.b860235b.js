"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70765"],{910412:function(e,r,n){n.r(r),n.d(r,{default:()=>x,frontMatter:()=>d,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/listbox-set-array","title":"LISTBOX SET ARRAY","description":"LISTBOX SET ARRAY ( { ;} objeto ; tipoArray ; proArray* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-array.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-array","permalink":"/docs/pt/20-R8/commands/listbox-set-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-array","title":"LISTBOX SET ARRAY","slug":"/commands/listbox-set-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SELECT ROWS","permalink":"/docs/pt/20-R8/commands/listbox-select-rows"},"next":{"title":"LISTBOX SET AUTO ROW HEIGHT","permalink":"/docs/pt/20-R8/commands/listbox-set-auto-row-height"}}'),o=n("785893"),t=n("250065");let d={id:"listbox-set-array",title:"LISTBOX SET ARRAY",slug:"/commands/listbox-set-array",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"LISTBOX SET ARRAY"})," ( {* ;} ",(0,o.jsx)(r.em,{children:"objeto"})," ; ",(0,o.jsx)(r.em,{children:"tipoArray"})," ; ",(0,o.jsx)(r.em,{children:"proArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Par\xe2metro"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"*"}),(0,o.jsx)(r.td,{children:"Operador"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"objeto"}),(0,o.jsx)(r.td,{children:"any"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Nome de objeto (se * for especificado) ou vari\xe1vel (se * for omitido)"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"tipoArray"}),(0,o.jsx)(r.td,{children:"Integer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Tipo de Array"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"proArray"}),(0,o.jsx)(r.td,{children:"Pointer"}),(0,o.jsx)(r.td,{children:"\u2192"}),(0,o.jsx)(r.td,{children:"Array a associar com propriedade"})]})]})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota"}),": este comando s\xf3 funciona com os list box de tipo array."]}),"\n",(0,o.jsxs)(r.p,{children:["O comando ",(0,o.jsx)(r.strong,{children:"LISTBOX SET ARRAY"})," associa um array de tipo ",(0,o.jsx)(r.em,{children:"tipoArray"})," ao list box ou a coluna de list box designada pelos par\xe2metros ",(0,o.jsx)(r.em,{children:"objeto e"})," ",(0,o.jsx)(r.em,{children:"*"})," ."]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.strong,{children:"Nota"}),": os arrays de estilo, de cores ou de cor de fundo ou de controle de linhas tamb\xe9m podem estar associados aos list box de tipo array utilizando a lista de propriedades em modo Desenho."]}),"\n",(0,o.jsxs)(r.p,{children:["Se passar o par\xe2metro opcional ",(0,o.jsx)(r.em,{children:"*"})," indica que o par\xe2metro ",(0,o.jsx)(r.em,{children:"objeto \xe9"})," um nome de objeto (string). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,o.jsx)(r.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, se passa uma refer\xeancia de vari\xe1vel ao inv\xe9s de uma string. Pode designar como par\xe2metro ",(0,o.jsx)(r.em,{children:"objeto"})," um list box ou uma coluna de list box."]}),"\n",(0,o.jsxs)(r.p,{children:["Em ",(0,o.jsx)(r.em,{children:"tipoArray"}),', passe o tipo de array a associar ao list box ou a coluna. Pode utilizar uma das seguintes constantes do tema "',(0,o.jsx)(r.em,{children:"List box"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Constante"}),(0,o.jsx)(r.th,{children:"Tipo"}),(0,o.jsx)(r.th,{children:"Valor"}),(0,o.jsx)(r.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"lk background color array"}),(0,o.jsx)(r.td,{children:"Inteiro longo"}),(0,o.jsx)(r.td,{children:"1"}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"lk control array"}),(0,o.jsx)(r.td,{children:"Inteiro longo"}),(0,o.jsx)(r.td,{children:"3"}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"lk font color array"}),(0,o.jsx)(r.td,{children:"Inteiro longo"}),(0,o.jsx)(r.td,{children:"0"}),(0,o.jsx)(r.td,{})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"lk row height array"}),(0,o.jsx)(r.td,{children:"Inteiro longo"}),(0,o.jsx)(r.td,{children:"4"}),(0,o.jsx)(r.td,{children:"(licen\xe7a 4D View Pro exigida)"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"lk style array"}),(0,o.jsx)(r.td,{children:"Inteiro longo"}),(0,o.jsx)(r.td,{children:"2"}),(0,o.jsx)(r.td,{})]})]})]}),"\n",(0,o.jsxs)(r.p,{children:["No par\xe2metro ",(0,o.jsx)(r.em,{children:"proArray"}),", se passa um ponteiro ao array a utilizar para suportar o tipo de propriedade."]}),"\n",(0,o.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,o.jsx)(r.p,{children:"Usted quiere volver a utilizar el array de colores de fuente de la columna 4ta para la columna 10ma:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0\xa0// recuperar un puntero al array de la columna 4\n\xa0$Pointer:=LISTBOX Get array(*;"Col4";lk font color array)\n\xa0\xa0// verificar que existe\n\xa0If(Not(Nil($Pointer)))\n\xa0\xa0//transferir a la columna 10\n\xa0\xa0\xa0\xa0LISTBOX SET ARRAY(*;"Col10";lk font color array;$Pointer)\n\xa0End if\n'})}),"\n",(0,o.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,o.jsx)(r.p,{children:"Se quiser definir um array de altura de linha para um list box:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'\xa0LISTBOX SET ARRAY(*;"LB";lk row height array;->RowHeightArray)\n'})}),"\n",(0,o.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/listbox-get-array",children:"LISTBOX Get array"}),(0,o.jsx)(r.br,{}),"\n",(0,o.jsx)(r.a,{href:"/docs/pt/20-R8/commands/listbox-get-arrays",children:"LISTBOX GET ARRAYS"})]}),"\n",(0,o.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{}),(0,o.jsx)(r.th,{})]})}),(0,o.jsxs)(r.tbody,{children:[(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"N\xfamero do comando"}),(0,o.jsx)(r.td,{children:"1279"})]}),(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"Thread-seguro"}),(0,o.jsx)(r.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var s=n(667294);let o={},t=s.createContext(o);function d(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);