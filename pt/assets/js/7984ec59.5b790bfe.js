"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94002"],{505736:function(e,n,s){s.r(n),s.d(n,{metadata:()=>o,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>i});var o=JSON.parse('{"id":"commands-legacy/listbox-set-auto-row-height","title":"LISTBOX SET AUTO ROW HEIGHT","description":"LISTBOX SET AUTO ROW HEIGHT ( { ;} objeto ; seletor ; valor ; unidade* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-auto-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-auto-row-height","permalink":"/docs/pt/commands/listbox-set-auto-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-auto-row-height.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-auto-row-height","title":"LISTBOX SET AUTO ROW HEIGHT","slug":"/commands/listbox-set-auto-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ARRAY","permalink":"/docs/pt/commands/listbox-set-array"},"next":{"title":"LISTBOX SET COLUMN FORMULA","permalink":"/docs/pt/commands/listbox-set-column-formula"}}'),r=s("785893"),t=s("250065");let i={id:"listbox-set-auto-row-height",title:"LISTBOX SET AUTO ROW HEIGHT",slug:"/commands/listbox-set-auto-row-height",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX SET AUTO ROW HEIGHT"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"seletor"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," ; ",(0,r.jsx)(n.em,{children:"unidade"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se especificado, o objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome de objeto (se * for especificado) ou vari\xe1vel (se * for omitido)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"seletor"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor de altura a estabelecer: lk row min heigh ou lk row max heigh"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor m\xe1ximo ou m\xednimo de altura de linha"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"unidade"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Unidade de valor da altura: 0=pixels, 1=linhas"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"LISTBOX SET AUTO ROW HEIGHT"})," [#descv]lhe permite estabelecer o ",(0,r.jsx)(n.em,{children:"valor"})," de altura de fila m\xednimo ou m\xe1ximo no objeto de list box designado utilizando os par\xe2metros ",(0,r.jsx)(n.em,{children:"objeto"})," e ",(0,r.jsx)(n.em,{children:"*"}),"[#/descv]."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": este comando s\xf3 \xe9 levado em considera\xe7\xe3o se o list box estiver configurado em modo de altura de fila autom\xe1tica (ver ",(0,r.jsx)(n.em,{children:"Altura linha autom\xe1tica"}),"). o qual est\xe1 dispon\xedvel para listboxes baseados em arrays, n\xe3o hier\xe1rquicos. Do contrario, n\xe3o tem nenhum efeito."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto \xe9 um"})," nome de objeto (string). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," for uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de vari\xe1vel ao inv\xe9s de uma string. Para saber mais sobre os nomes de objetos, consulte a se\xe7\xe3o ",(0,r.jsx)(n.em,{children:"Propriedades dos objetos"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"seletor"}),", passe o tipo de valor a definir. Pode utilizar uma das constantes abaixo do tema ",(0,r.jsx)(n.em,{children:"List box"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk row max height"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"33"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk row min height"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"valor"}),", passe o valor correspondente na ",(0,r.jsx)(n.em,{children:"unidade"})," apropriada."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"unidade"})," pode ser ajustada utilizando uma das constantes abaixo do tema ",(0,r.jsx)(n.em,{children:"List box"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"}),(0,r.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk lines"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"A altura designa um n\xfamero de linhas. 4D calcula a altura de uma linha em fun\xe7\xe3o da fonte."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk pixels"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsx)(n.td,{children:"A altura \xe9 o n\xfamero de pixels (por padr\xe3o)."})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," o comando n\xe3o comprova a consist\xeancia dos valores. Entretanto, em tempo de execu\xe7\xe3o, o valor m\xednimo se aplicar\xe1 a ambos valores em caso de conflito. Por exemplo, se o valor m\xednimo for 5 linhas e o valor m\xe1ximo for de 3 linhas (o que \xe9 inconsistente), a altura m\xe1xima aplicada \xe0s filas de list box ser\xe1 de 5 linhas."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser definir as alturas m\xednimas e m\xe1ximas para um list box com uma altura de fila autom\xe1tica:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row min height;60;lk pixels)\xa0// 60 p\xedxels para o valor m\xednimo\n\xa0LISTBOX SET AUTO ROW HEIGHT(*;"LB";lk row max height;100;lk pixels)\xa0//y 100 p\xedxels para o valor m\xe1ximo\n'})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/listbox-get-auto-row-height",children:"LISTBOX Get auto row height "}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-row-height",children:"LISTBOX SET ROW HEIGHT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1501"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var o=s(667294);let r={},t=o.createContext(r);function i(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);