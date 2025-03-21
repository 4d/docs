"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["156"],{190538:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>o,assets:()=>a,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/listbox-get-print-information","title":"LISTBOX GET PRINT INFORMATION","description":"LISTBOX GET PRINT INFORMATION ( { ;} objeto ; seletor ; info* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-print-information.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-print-information","permalink":"/docs/pt/20-R7/commands/listbox-get-print-information","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-print-information.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-print-information","title":"LISTBOX GET PRINT INFORMATION","slug":"/commands/listbox-get-print-information","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET OBJECTS","permalink":"/docs/pt/20-R7/commands/listbox-get-objects"},"next":{"title":"LISTBOX Get property","permalink":"/docs/pt/20-R7/commands/listbox-get-property"}}'),i=s("785893"),t=s("250065");let r={id:"listbox-get-print-information",title:"LISTBOX GET PRINT INFORMATION",slug:"/commands/listbox-get-print-information",displayed_sidebar:"docs"},d=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX GET PRINT INFORMATION"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"seletor"})," ; ",(0,i.jsx)(n.em,{children:"info"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nome de objeto (se* for especificado) ou vari\xe1vel (se * \xe9 omitido)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"seletor"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Informa\xe7\xe3o a conseguir"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"info"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Valor atual"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["O comando LISTBOX GET PRINT INFORMATION devolve a informa\xe7\xe3o atual relativa a impress\xe3o do objeto list box designado pelos par\xe2metros ",(0,i.jsx)(n.em,{children:"objeto e"})," ",(0,i.jsx)(n.em,{children:"*"})," . Este comando permite controlar a impress\xe3o do conte\xfado do list box."]}),"\n",(0,i.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,i.jsx)(n.em,{children:"objeto"})," es um nome de objeto (cadena). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,i.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, se passa uma refer\xeancia de vari\xe1vel ao inv\xe9s de uma string."]}),"\n",(0,i.jsxs)(n.p,{children:["Este comando deve ser chamado no contexto da impress\xe3o de um list box atrav\xe9s do comando ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/print-object",children:"Print object"})," . Fora deste contexto, n\xe3o devolve valores significativos."]}),"\n",(0,i.jsxs)(n.p,{children:["Passe em ",(0,i.jsx)(n.em,{children:"selector"})," um valor que indique a informa\xe7\xe3o a encontrar e em ",(0,i.jsx)(n.em,{children:"info"})," uma vari\xe1vel de tipo num\xe9rico ou BLOB. Em ",(0,i.jsx)(n.em,{children:"seletor"}),', pode passar uma das seguintes constantes, do tema "',(0,i.jsx)(n.em,{children:"List box"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk last printed row number"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"0"}),(0,i.jsxs)(n.td,{children:["Retorna em ",(0,i.jsx)(n.em,{children:"info"})," o n\xfamero da \xfaltima linha impressa. permite conhecer o n\xfamero da pr\xf3xima linha a ser impressa.O n\xfamero retornado pode ser maior ao n\xfamero de linhas efetivamente impressas se a list box cont\xe9m as linhas invis\xedveis ou se o comando ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION "})," \xe9 chamado. Por exemplo, se as linhas 1, 18 e 20 foram impressas, ",(0,i.jsx)(n.em,{children:"info"})," \xe9 20."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk printed height"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsxs)(n.td,{children:["Retorna em ",(0,i.jsx)(n.em,{children:"info"}),' a altura em pixels do objeto efetivamente impresso (incluindo cabe\xe7alhos, linhas, etc.). Lembre que se o n\xfamero de linhas a ser impressas \xe9 menor do que a "capacidade" da list box, sua altura diminui automaticamente.']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk printed rows"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:["Retorna em ",(0,i.jsx)(n.em,{children:"info"})," o n\xfamero de linhas efetivamente impressas durante a \xfaltima chamada ao comando ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/print-object",children:"Print object"}),". este n\xfamero inclui as poss\xedveis quebras de linha adicionadas no caso de uma list box hier\xe1rquica. Por exemplo, ",(0,i.jsx)(n.em,{children:"info"})," \xe9 10 se a list box cont\xe9m 20 linhas e as linhas \xedmpares est\xe3o ocultas."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lk printing is over"}),(0,i.jsx)(n.td,{children:"Inteiro longo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:["Retorna em ",(0,i.jsx)(n.em,{children:"info"})," um booleano indicando se a \xfaltima linha (vis\xedvel) da list box foi impressa. true = a linha foi impressa; do contr\xe1rio, False."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:["Para maior informa\xe7\xe3o sobre os princ\xedpios de impress\xe3o de list boxes, consulte ",(0,i.jsx)(n.em,{children:"Imprimir list boxes"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Impress\xe3o at\xe9 que todas as linhas s\xe3o impressas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN PRINTING JOB\n\xa0FORM LOAD("SalesForm")\n\xa0\n\xa0$Over:=False\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"mylistbox")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printing is over;$Over)\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0Until($Over)\n\xa0\n\xa0CLOSE PRINTING JOB\n'})}),"\n",(0,i.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,i.jsx)(n.p,{children:"Impress\xe3o de pelo menos 500 linhas do list box, conhecendo que algumas linhas est\xe3o ocultas:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$GlobalPrinted:=0\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"mylistbox")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printed rows;$Printed)\n\xa0\xa0\xa0\xa0$GlobalPrinted:=$GlobalPrinted+$Printed\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0Until($GlobalPrinted>=500)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"1110"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return r}});var o=s(667294);let i={},t=o.createContext(i);function r(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);