"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80537"],{527610:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>a,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/listbox-set-table-source","title":"LISTBOX SET TABLE SOURCE","description":"LISTBOX SET TABLE SOURCE ( { ;} objeto ; numTabela | tempo  {; nomeSelecionado*} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-set-table-source.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-table-source","permalink":"/docs/pt/commands/listbox-set-table-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-table-source.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-table-source","title":"LISTBOX SET TABLE SOURCE","slug":"/commands/listbox-set-table-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET STATIC COLUMNS","permalink":"/docs/pt/commands/listbox-set-static-columns"},"next":{"title":"LISTBOX SORT COLUMNS","permalink":"/docs/pt/commands/listbox-sort-columns"}}'),t=s("785893"),r=s("250065");let a={id:"listbox-set-table-source",title:"LISTBOX SET TABLE SOURCE",slug:"/commands/listbox-set-table-source",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"LISTBOX SET TABLE SOURCE"})," ( {* ;} ",(0,t.jsx)(o.em,{children:"objeto"})," ; numTabela | tempo  {; ",(0,t.jsx)(o.em,{children:"nomeSelecionado"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"*"}),(0,t.jsx)(o.td,{children:"Operador"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Se especificado, objeto \xe9 um nome de objeto (string), se omitido, objeto \xe9 uma vari\xe1vel"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objeto"}),(0,t.jsx)(o.td,{children:"any"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nome objeto (se * for especificado) ou Vari\xe1vel (se * \xe9 omitido)"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"numTabela | tempo"}),(0,t.jsx)(o.td,{children:"Inteiro longo, String"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Sele\xe7\xe3o tempor\xe1ria"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"nomeSelecionado"}),(0,t.jsx)(o.td,{children:"Text"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nome do conjunto selecionado"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando ",(0,t.jsx)(o.strong,{children:"LISTBOX SET TABLE SOURCE"})," permite modificar a fonte de dados mostrada no listbox desenhado pelos par\xe2metros ",(0,t.jsx)(o.em,{children:"*"})," e ",(0,t.jsx)(o.em,{children:"objeto"})]}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota:"})," este comando s\xf3 pode ser utilizado quando a propriedade \u201CFonte de dados\u201D do list box \xe9 ",(0,t.jsx)(o.strong,{children:"Sele\xe7\xe3o atual"})," ou ",(0,t.jsx)(o.strong,{children:"Sele\xe7\xe3o tempor\xe1ria"})," (para maior informa\xe7\xe3o, consulte a se\xe7\xe3o ",(0,t.jsx)(o.em,{children:"Gest\xe3o de objetos List Box"}),"). O comando n\xe3o faz nada se o utilizar com um list box associado com um array, uma cole\xe7\xe3o ou sele\xe7\xe3o de entidades."]}),"\n",(0,t.jsxs)(o.p,{children:["Se passa o par\xe2metro opcional ",(0,t.jsx)(o.em,{children:"*"}),", indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, n\xe3o passe uma cadeia e sim uma referencia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, por favor consulte a se\xe7\xe3o que indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (cadeia). Se omitir este par\xe2metro, indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Nesse caso, n\xe3o passa uma cadeia, mas uma refer\xeancia de vari\xe1vel. Para maior informa\xe7\xe3o sobre nomes de objetos, consulte a se\xe7\xe3o ",(0,t.jsx)(o.em,{children:"Propriedades dos objetos"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["Se passa um n\xfamero de tabela como par\xe2metro ",(0,t.jsx)(o.em,{children:"numTabela"}),", o list box ser\xe1 preenchido com os dados dos registros na sele\xe7\xe3o atual da tabela."]}),"\n",(0,t.jsxs)(o.p,{children:["Se passa um nome de sele\xe7\xe3o tempor\xe1ria como par\xe2metro ",(0,t.jsx)(o.em,{children:"tempo"}),", o list box ser\xe1 preenchido com os dados dos registros que pertencem \xe0 sele\xe7\xe3o tempor\xe1ria."]}),"\n",(0,t.jsxs)(o.p,{children:["O par\xe2metro opcional ",(0,t.jsx)(o.em,{children:"nomeSelecionado"})," associa um conjunto de destacar com o list box. O conjunto de destacar gerencia destacando registro pelo usu\xe1rio no list box."]}),"\n",(0,t.jsx)(o.p,{children:"Se o list box j\xe1 conter as colunas, seus conte\xfados s\xe3o atualizados depois da execu\xe7\xe3o do comando."}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"Nota"}),": por raz\xf5es de otimiza\xe7\xe3o, este comando \xe9 processado de maneira anacr\xf4nica, ou seja, a mudan\xe7a de fonte do listbox \xe9 realizada apenas quando a execu\xe7\xe3o do m\xe9todo do qual se chama o comando \xe9 completada."]}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/pt/commands/listbox-get-table-source",children:"LISTBOX GET TABLE SOURCE"})}),"\n",(0,t.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"N\xfamero do comando"}),(0,t.jsx)(o.td,{children:"1013"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"Thread-seguro"}),(0,t.jsx)(o.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return d},a:function(){return a}});var n=s(667294);let t={},r=n.createContext(t);function a(e){let o=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),n.createElement(r.Provider,{value:o},e.children)}}}]);