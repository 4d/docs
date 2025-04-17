"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26466"],{366038:function(e,n,t){t.r(n),t.d(n,{default:()=>c,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/listbox-get-auto-row-height","title":"LISTBOX Get auto row height","description":"LISTBOX Get auto row height  ( { ;} objeto ; seletor {; unidade*} )  : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-get-auto-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-auto-row-height","permalink":"/docs/pt/20-R8/commands/listbox-get-auto-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-auto-row-height.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-auto-row-height","title":"LISTBOX Get auto row height","slug":"/commands/listbox-get-auto-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET ARRAYS","permalink":"/docs/pt/20-R8/commands/listbox-get-arrays"},"next":{"title":"LISTBOX GET CELL COORDINATES","permalink":"/docs/pt/20-R8/commands/listbox-get-cell-coordinates"}}'),o=t("785893"),s=t("250065");let d={id:"listbox-get-auto-row-height",title:"LISTBOX Get auto row height",slug:"/commands/listbox-get-auto-row-height",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX Get auto row height"}),"  ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ; ",(0,o.jsx)(n.em,{children:"seletor"})," {; ",(0,o.jsx)(n.em,{children:"unidade"}),"} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nome de objeto (se * for especificado) ou de vari\xe1vel (se * for omitido)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"seletor"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Valor de altura a obter: lk row min height ou lk row max height"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"unidade"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Valor da unidade de altura 0 em p\xedxels, 1 em linhas"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Valor de altura de linha selecionado"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando ",(0,o.jsx)(n.strong,{children:"LISTBOX Get auto row height"}),"  devolve o valor de altura de fila m\xednimo ou m\xe1ximo actual definido para o objeto list box designado utilizando os par\xe2metros ",(0,o.jsx)(n.em,{children:"objeto"})," e ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["O valor atual m\xednimo ou m\xe1ximo da altura da fila pode ser definido na lista de propriedades (ver ",(0,o.jsx)(n.em,{children:"Altura linha autom\xe1tica"}),") ou no processo atual utilizando o comando ",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota"}),": Esse comando s\xf3 pode ser usado com list boxes n\xe3o hier\xe1rquicas baseadas em array."]}),"\n",(0,o.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,o.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, se passar uma refer\xeancia de vari\xe1vel ao inv\xe9s de uma string. Para mais informa\xe7\xe3o sobre os nomes de objetos, consulte a se\xe7\xe3o ",(0,o.jsx)(n.em,{children:"Propriedades dos objetos"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Em ",(0,o.jsx)(n.em,{children:"seletor"}),", passe o tipo de valor a obter. Pode utilizar uma das constantes abaixo do tema ",(0,o.jsx)(n.em,{children:"List box"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk row max height"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"33"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk row min height"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,o.jsxs)(n.p,{children:["De forma predeterminada, o comando devolve o valor em p\xedxels. Pode passar uma das constantes abaixo do tema ",(0,o.jsx)(n.em,{children:"List box"})," no par\xe2metro ",(0,o.jsx)(n.em,{children:"unidade"})," para definir a unidade a utilizar:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Constante"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Valor"}),(0,o.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk lines"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"1"}),(0,o.jsx)(n.td,{children:"A altura designa um n\xfamero de linhas. 4D calcula a altura de uma linha em fun\xe7\xe3o da fonte."})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"lk pixels"}),(0,o.jsx)(n.td,{children:"Inteiro longo"}),(0,o.jsx)(n.td,{children:"0"}),(0,o.jsx)(n.td,{children:"A altura \xe9 o n\xfamero de pixels (por padr\xe3o)."})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Se quiser obter o n\xfamero m\xe1ximo de linhas para uma fila de list box:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0var vhMaxInteger\n\nvhMax:=LISTBOX Get auto row height(*;"LB";lk row max height;lk lines)\n\n\n'})}),"\n",(0,o.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/listbox-get-row-height",children:"LISTBOX Get row height "}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/listbox-get-rows-height",children:"LISTBOX Get rows height"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/pt/20-R8/commands/listbox-set-auto-row-height",children:"LISTBOX SET AUTO ROW HEIGHT"})]}),"\n",(0,o.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"1502"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return d}});var r=t(667294);let o={},s=r.createContext(o);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);