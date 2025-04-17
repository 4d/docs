"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9915"],{503166:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>a,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/listbox-sort-columns","title":"LISTBOX SORT COLUMNS","description":"LISTBOX SORT COLUMNS ( { ;} objeto ; numColuna ; ordenar {; numColuna2 ; ordenar2 ; ... ; numColunaN ; ordenarN*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-sort-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-sort-columns","permalink":"/docs/pt/20-R8/commands/listbox-sort-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-sort-columns.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-sort-columns","title":"LISTBOX SORT COLUMNS","slug":"/commands/listbox-sort-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET TABLE SOURCE","permalink":"/docs/pt/20-R8/commands/listbox-set-table-source"},"next":{"title":"Mail","permalink":"/docs/pt/20-R8/commands/theme/Mail"}}'),r=o("785893"),d=o("250065");let t={id:"listbox-sort-columns",title:"LISTBOX SORT COLUMNS",slug:"/commands/listbox-sort-columns",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX SORT COLUMNS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"objeto"})," ; ",(0,r.jsx)(n.em,{children:"numColuna"})," ; ",(0,r.jsx)(n.em,{children:"ordenar"})," {; ",(0,r.jsx)(n.em,{children:"numColuna2"})," ; ",(0,r.jsx)(n.em,{children:"ordenar2"})," ; ... ; ",(0,r.jsx)(n.em,{children:"numColunaN"})," ; ",(0,r.jsx)(n.em,{children:"ordenarN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"se especificado, objeto \xe9 um nome de objeto (string). Se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objeto"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numColuna"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero da coluna a ordenar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ordenar"}),(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:'">" para ordernar em ordem ascendente ou "<" para ordenar em ordem descendente'})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"O comando LISTBOX SORT COLUMNS [descv] ordena as filas do list box designado pelos par\xe2metros objeto e * em fun\xe7\xe3o dos valores de uma ou v\xe1rias colunas.[#/descv]"}),"\n",(0,r.jsxs)(n.p,{children:["Nota: uma ordena\xe7\xe3o padr\xe3o se aplica em bancos de dados a um \xfanico valor de coluna quando o usu\xe1rio clicar no cabe\xe7alho da coluna (ver ",(0,r.jsx)(n.em,{children:"Ordena\xe7\xe3o padr\xe3o"}),")."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passar o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 um nome de objeto (string). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma string, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,r.jsx)(n.em,{children:"Propriedades dos objetos"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"numCol"}),", passe o n\xfamero de coluna cujos valores quer utilizar como crit\xe9rio de ordena\xe7\xe3o. Pode utilizar todo tipo de dados, a exce\xe7\xe3o de imagens e ponteiros."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"ordem"}),", passe o s\xedmbolo > ou < para indicar o crit\xe9rio de ordena\xe7\xe3o. Se ",(0,r.jsx)(n.em,{children:"ordem"})," cont\xe9m o s\xedmbolo \u201Cmaior que\u201D(>), o crit\xe9rio de ordena\xe7\xe3o \xe9 ascendente. Se ",(0,r.jsx)(n.em,{children:"ordem"})," cont\xe9m o s\xedmbolo \u201Cmenor que\u201D (<), o crit\xe9rio de ordena\xe7\xe3o es descendente."]}),"\n",(0,r.jsxs)(n.p,{children:["Pode definir ordena\xe7\xf5es multiniveis: para fazer isso, passe tantos pares (",(0,r.jsx)(n.em,{children:"numCol;orden"}),") como seja necess\xe1rio. O n\xedvel de ordena\xe7\xe3o \xe9 definido pela posi\xe7\xe3o do par\xe2metro na chamada."]}),"\n",(0,r.jsx)(n.p,{children:"Conforme com o princ\xedpio de funcionamento do list box, as colunas est\xe3o sincronizadas, o que significa que a ordena\xe7\xe3o de uma coluna repercute automaticamente em todas as outras colunas do objeto."}),"\n",(0,r.jsxs)(n.p,{children:["Nota: O comando LISTBOX SORT COLUMNS n\xe3o leva em considera\xe7\xe3o a propriedade de listbox ",(0,r.jsx)(n.em,{children:"Orden\xe1vel"})," ."]}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"916"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return t}});var s=o(667294);let r={},d=s.createContext(r);function t(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);