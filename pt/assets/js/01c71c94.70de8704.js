"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42111"],{190685:function(e,o,n){n.r(o),n.d(o,{metadata:()=>r,contentTitle:()=>i,default:()=>u,assets:()=>a,toc:()=>l,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/listbox-set-footer-calculation","title":"LISTBOX SET FOOTER CALCULATION","description":"LISTBOX SET FOOTER CALCULATION ( { ;} objeto ; calculo* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-footer-calculation.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-footer-calculation","permalink":"/docs/pt/commands/listbox-set-footer-calculation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-footer-calculation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-footer-calculation","title":"LISTBOX SET FOOTER CALCULATION","slug":"/commands/listbox-set-footer-calculation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET COLUMN WIDTH","permalink":"/docs/pt/commands/listbox-set-column-width"},"next":{"title":"LISTBOX SET FOOTERS HEIGHT","permalink":"/docs/pt/commands/listbox-set-footers-height"}}'),d=n("785893"),s=n("250065");let t={id:"listbox-set-footer-calculation",title:"LISTBOX SET FOOTER CALCULATION",slug:"/commands/listbox-set-footer-calculation",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let o={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"LISTBOX SET FOOTER CALCULATION"})," ( {* ;} ",(0,d.jsx)(o.em,{children:"objeto"})," ; ",(0,d.jsx)(o.em,{children:"calculo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Par\xe2metro"}),(0,d.jsx)(o.th,{children:"Tipo"}),(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"*"}),(0,d.jsx)(o.td,{children:"Operador"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto(cadeia)Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"objeto"}),(0,d.jsx)(o.td,{children:"any"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Nome de objeto (se especificado *) ou Vari\xe1vel (se omitido *)"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"calculo"}),(0,d.jsx)(o.td,{children:"Integer"}),(0,d.jsx)(o.td,{children:"\u2192"}),(0,d.jsx)(o.td,{children:"Calculo para \xe0 \xe1rea de rodap\xe9"})]})]})]}),"\n",(0,d.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(o.p,{children:["O comando ",(0,d.jsx)(o.strong,{children:"LISTBOX SET FOOTER CALCULATION"})," permite definir o c\xe1lculo autom\xe1tico associado \xe0 \xe1rea de rodap\xe9 do list box designado pelos par\xe2metros ",(0,d.jsx)(o.em,{children:"objeto"})," e ",(0,d.jsx)(o.em,{children:"*"}),"."]}),"\n",(0,d.jsxs)(o.p,{children:["Se passado o par\xe2metro opcional ",(0,d.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,d.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,d.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, passe uma referencia de vari\xe1vel no lugar de uma cadeia.",(0,d.jsx)(o.br,{}),"\nO par\xe2metro ",(0,d.jsx)(o.em,{children:"objeto"})," pode designar:"]}),"\n",(0,d.jsxs)(o.ul,{children:["\n",(0,d.jsx)(o.li,{children:"a vari\xe1vel ou o nome de uma \xe1rea de rodap\xe9 de p\xe1gina. Neste caso, o comando aplica a esta \xe1rea."}),"\n",(0,d.jsx)(o.li,{children:"a vari\xe1vel ou o nome de uma coluna de list box. Neste caso, o comando aplica \xe0 \xe1rea de rodap\xe9 desta coluna."}),"\n",(0,d.jsx)(o.li,{children:"a vari\xe1vel ou o nome de um list box. Neste caso, o comando aplica as \xe1reas de rodap\xe9 do listbox."}),"\n"]}),"\n",(0,d.jsxs)(o.p,{children:["No par\xe2metro ",(0,d.jsx)(o.em,{children:"calculo"}),", passe uma das seguintes constantes do tema ",(0,d.jsx)(o.em,{children:"Listbox Footer Calculation"}),", com a finalidade de definir o c\xe1lculo a realizar:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{children:"Constante"}),(0,d.jsx)(o.th,{children:"Tipo"}),(0,d.jsx)(o.th,{children:"Valor"}),(0,d.jsx)(o.th,{children:"Coment\xe1rio"})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Listbox footer std deviation"}),(0,d.jsx)(o.td,{children:"Inteiro longo"}),(0,d.jsx)(o.td,{children:"7"}),(0,d.jsxs)(o.td,{children:["Utiliz\xe1vel com as colunas de tipo num\xe9rico, hora (list boxes de tipo array unicamente)",(0,d.jsx)(o.br,{})," Tipo de resultado por padr\xe3o: Real"]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"lk footer average"}),(0,d.jsx)(o.td,{children:"Inteiro longo"}),(0,d.jsx)(o.td,{children:"6"}),(0,d.jsxs)(o.td,{children:["Utiliz\xe1vel com as colunas de tipo num\xe9rico, hora",(0,d.jsx)(o.br,{})," Tipo de resultado por padr\xe3o:Real"]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"lk footer count"}),(0,d.jsx)(o.td,{children:"Inteiro longo"}),(0,d.jsx)(o.td,{children:"5"}),(0,d.jsxs)(o.td,{children:["Utiliz\xe1vel com as colunas de tipo num\xe9rico, texto, data, hora, booleano, imagem",(0,d.jsx)(o.br,{})," Tipo de resultado por padr\xe3o: Inteiro longo"]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"lk footer custom"}),(0,d.jsx)(o.td,{children:"Inteiro longo"}),(0,d.jsx)(o.td,{children:"1"}),(0,d.jsx)(o.td,{children:"Nenhum c\xe1lculo \xe9 realizado por 4D. A vari\xe1vel do rodap\xe9 deve ser calculada por programa\xe7\xe3o. Tipo por padr\xe3o do resultado do c\xe1lculo: tipo da vari\xe1vel"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"lk footer max"}),(0,d.jsx)(o.td,{children:"Inteiro longo"}),(0,d.jsx)(o.td,{children:"3"}),(0,d.jsxs)(o.td,{children:["Utiliz\xe1vel com as colunas de tipo num\xe9rico, data, hora, booleano",(0,d.jsx)(o.br,{}),"Tipo de resultado por padr\xe3o: tipo do array ou campo da coluna"]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"lk footer min"}),(0,d.jsx)(o.td,{children:"Inteiro longo"}),(0,d.jsx)(o.td,{children:"2"}),(0,d.jsxs)(o.td,{children:["Utiliz\xe1vel com as colunas de tipo num\xe9rico, data, hora, booleano",(0,d.jsx)(o.br,{}),"Tipo por padr\xe3o do resultado: tipo do array ou campo da coluna"]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"lk footer sum"}),(0,d.jsx)(o.td,{children:"Inteiro longo"}),(0,d.jsx)(o.td,{children:"4"}),(0,d.jsxs)(o.td,{children:["Utiliz\xe1vel com as colunas de tipo num\xe9rico, data, hora, booleano",(0,d.jsx)(o.br,{}),"Tipo de resultado por padr\xe3o: tipo do array ou campo da coluna"]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"lk footer sum squares"}),(0,d.jsx)(o.td,{children:"Inteiro longo"}),(0,d.jsx)(o.td,{children:"9"}),(0,d.jsxs)(o.td,{children:["Utiliz\xe1vel com as colunas de tipo num\xe9rico, hora (listbox de tipo array unicamente)",(0,d.jsx)(o.br,{}),"Tipo por padr\xe3o do resultado: Real"]})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"lk footer variance"}),(0,d.jsx)(o.td,{children:"Inteiro longo"}),(0,d.jsx)(o.td,{children:"8"}),(0,d.jsxs)(o.td,{children:["Utiliz\xe1vel com as colunas de tipo num\xe9rico, hora (listbox de tipo array unicamente)",(0,d.jsx)(o.br,{}),"Tipo por padr\xe3o do resultado: Real"]})]})]})]}),"\n",(0,d.jsx)(o.p,{children:"Note que os c\xe1lculos predefinidos tem em conta todos os valores da coluna do list box, incluindo os valores das poss\xedveis linhas ocultas. Se deseja restringir um c\xe1lculo as linhas vis\xedveis, deve utilizar a constante lk footer custom e realizar um c\xe1lculo personalizado."}),"\n",(0,d.jsxs)(o.p,{children:["Se o tipo de dados da coluna ou de pelo menos uma coluna do list box (se objeto designa um list box) n\xe3o \xe9 compat\xedvel com o ",(0,d.jsx)(o.em,{children:"calculo"})," definido, o rodap\xe9 n\xe3o ser\xe1 modificado e formar\xe1 um erro 18. Se uma coluna cont\xe9m una f\xf3rmula (list box de tipo sele\xe7\xe3o), ser\xe1 gerado o erro 10."]}),"\n",(0,d.jsxs)(o.p,{children:[(0,d.jsx)(o.strong,{children:"Nota:"})," As vari\xe1veis da \xe1rea rodap\xe9 se definem automaticamente (quando n\xe3o se definem por programa\xe7\xe3o) em fun\xe7\xe3o do tipo de c\xe1lculo definido na Lista de propriedades (",(0,d.jsx)(o.em,{children:"List box footer specific properties"}),"). Se o tipo da vari\xe1vel n\xe3o corresponde ao resultado esperado pelo comando ",(0,d.jsx)(o.strong,{children:"LISTBOX SET FOOTER CALCULATION"}),", \xe9 gerado um erro. Por exemplo, para uma coluna que mostra datas, se o rodap\xe9 faz um c\xe1lculo 'Maximum', a vari\xe1vel roda",(0,d.jsx)(o.em,{children:"p\xe9"})," ser\xe1 definida em data. Se executar a instru\xe7\xe3o ",(0,d.jsx)(o.strong,{children:"LISTBOX SET FOOTER CALCULATION"})," (rodap\xe9;lk footer count), \xe9 gerado um erro pelo tipo do resultado esperado (inteiro largo) varia do tipo da vari\xe1vel."]}),"\n",(0,d.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(o.p,{children:(0,d.jsx)(o.a,{href:"/docs/pt/commands/listbox-get-footer-calculation",children:"LISTBOX Get footer calculation"})}),"\n",(0,d.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(o.table,{children:[(0,d.jsx)(o.thead,{children:(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.th,{}),(0,d.jsx)(o.th,{})]})}),(0,d.jsxs)(o.tbody,{children:[(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"N\xfamero do comando"}),(0,d.jsx)(o.td,{children:"1140"})]}),(0,d.jsxs)(o.tr,{children:[(0,d.jsx)(o.td,{children:"Thread-seguro"}),(0,d.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function u(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,d.jsx)(o,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return t}});var r=n(667294);let d={},s=r.createContext(d);function t(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);