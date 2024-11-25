"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98042"],{849507:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>l,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-delete-column","title":"LISTBOX DELETE COLUMN","description":"LISTBOX DELETE COLUMN ( { ;} objeto ; posi\xe7aoCol {; numero*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-delete-column.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-delete-column","permalink":"/docs/pt/commands/listbox-delete-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-delete-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-delete-column","title":"LISTBOX DELETE COLUMN","slug":"/commands/listbox-delete-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX COLLAPSE","permalink":"/docs/pt/commands/listbox-collapse"},"next":{"title":"LISTBOX DELETE ROWS","permalink":"/docs/pt/commands/listbox-delete-rows"}}'),t=o("785893"),r=o("250065");let d={id:"listbox-delete-column",title:"LISTBOX DELETE COLUMN",slug:"/commands/listbox-delete-column",displayed_sidebar:"docs"},i=void 0,l={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX DELETE COLUMN"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"objeto"})," ; ",(0,t.jsx)(n.em,{children:"posi\xe7aoCol"})," {; ",(0,t.jsx)(n.em,{children:"numero"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 a vari\xe1vel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objeto"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nome de objeto (se* \xe9 especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"posi\xe7aoCol"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de coluna a remover"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numero"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de colunas a remover"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando LISTBOX DELETE COLUMN apaga uma ou mais colunas (vis\xedveis ou n\xe3o) no list box designado pelos par\xe2metros ",(0,t.jsx)(n.em,{children:"objeto"})," e ",(0,t.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," este comando n\xe3o faz nada se \xe9 aplicada a primeira coluna de um list box mostrado em modo hier\xe1rquico."]}),"\n",(0,t.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,t.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ."]}),"\n",(0,t.jsxs)(n.p,{children:["Se n\xe3o passa o par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"n\xfamero"}),", o comando simplesmente elimina a coluna definida no par\xe2metro ",(0,t.jsx)(n.em,{children:"posicaoCol"}),".",(0,t.jsx)(n.br,{}),"\nDo contr\xe1rio, o par\xe2metro ",(0,t.jsx)(n.em,{children:"n\xfamero"})," indica o n\xfamero de colunas a eliminar a direita come\xe7ando desde a coluna ",(0,t.jsx)(n.em,{children:"posicaoCol"})," (esta inclu\xedda)."]}),"\n",(0,t.jsxs)(n.p,{children:["Se o par\xe2metro ",(0,t.jsx)(n.em,{children:"posicionCol"})," \xe9 maior que o n\xfamero de colunas no list box, o comando n\xe3o faz nada."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/listbox-get-number-of-columns",children:"LISTBOX Get number of columns"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/listbox-insert-column",children:"LISTBOX INSERT COLUMN"})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var s=o(667294);let t={},r=s.createContext(t);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);