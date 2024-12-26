"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41788"],{359817:function(e,n,s){s.r(n),s.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>m,assets:()=>t,toc:()=>l,frontMatter:()=>o});var a=JSON.parse('{"id":"commands-legacy/find-in-list","title":"Find in list","description":"Find in list ( { ;} lista ; valor ; alcance  {; arrayElem {; }} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/find-in-list.md","sourceDirName":"commands-legacy","slug":"/commands/find-in-list","permalink":"/docs/pt/commands/find-in-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-in-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"find-in-list","title":"Find in list","slug":"/commands/find-in-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE FROM LIST","permalink":"/docs/pt/commands/delete-from-list"},"next":{"title":"GET LIST ITEM","permalink":"/docs/pt/commands/get-list-item"}}'),r=s("785893"),i=s("250065");let o={id:"find-in-list",title:"Find in list",slug:"/commands/find-in-list",displayed_sidebar:"docs"},d=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Find in list"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"lista"})," ; ",(0,r.jsx)(n.em,{children:"valor"})," ; ",(0,r.jsx)(n.em,{children:"alcance"}),"  {; ",(0,r.jsx)(n.em,{children:"arrayElem"})," {; *}} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Se especificada, lista \xe9 um nome de objeto (cadeia) Se omitida, lista \xe9 um n\xfamero de refer\xeancia de lista"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lista"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de refer\xeancia de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"valor"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Valor a buscar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"alcance"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0=Lista principal, 1=Sub-lista"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"arrayElem"}),(0,r.jsx)(n.td,{children:"Integer array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"- Se omitido o 2do *: array de posi\xe7\xf5es dos elementos encontrados - Se passado o segundo *: array de n\xfameros de refer\xeancia dos elementos encontrados"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"- Se omitido: utiliza a posi\xe7\xe3o dos elementos - Se passado: utiliza o n\xfamero de refer\xeancia dos elementos"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"- Se omitido o 2do *: posi\xe7\xe3o do elemento encontrado - Se passado 2do *: n\xfamero de refer\xeancia do elemento encontrado"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando Find in list retorna a posi\xe7\xe3o ou refer\xeancia do primeiro elemento da ",(0,r.jsx)(n.em,{children:"lista"})," que \xe9 equivalente \xe0 cadeia passada em ",(0,r.jsx)(n.em,{children:"valor"}),". Se s\xe3o encontrados v\xe1rios elementos, a fun\xe7\xe3o tamb\xe9m pode preencher um array ",(0,r.jsx)(n.em,{children:"arrayElem"})," com a posi\xe7\xe3o ou a refer\xeancia de cada elemento."]}),"\n",(0,r.jsxs)(n.p,{children:["Se passa o par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"lista"})," \xe9 um nome de objeto (cadeia) correspondente a uma representa\xe7\xe3o da lista no formul\xe1rio. Se n\xe3o passa este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(n.em,{children:"lista"})," \xe9 uma refer\xeancia de lista hier\xe1rquica (",(0,r.jsx)(n.em,{children:"RefLista"}),"). Se utilizar apenas uma representa\xe7\xe3o de lista ou trabalhar com n\xfameros de refer\xeancia de elementos (se omitir o segundo *), pode utilizar indiferentemente uma ou outra sintaxe. Por outro lado, se utilizar v\xe1rias representa\xe7\xf5es da mesma lista e trabalhar com posi\xe7\xf5es de elementos (se passa o segundo *), a sintaxe baseada no nome do objeto \xe9 necess\xe1ria j\xe1 que a posi\xe7\xe3o dos elementos pode variar de uma representa\xe7\xe3o a outra."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," se utilizar o caractere @ no nome do objeto da lista e o formul\xe1rio cont\xe9m v\xe1rias listas que correspondem a este nome, o comando Find in list ser\xe1 aplicado ao primeiro objeto cujo nome ele corresponda."]}),"\n",(0,r.jsx)(n.p,{children:"O segundo par\xe2metro * permite indicar se deseja trabalhar com as posi\xe7\xf5es atuais dos elementos (nesse caso, este par\xe2metro \xe9 omitido) ou com as refer\xeancias absolutas dos elementos (nesse caso, deve ser passado)."}),"\n",(0,r.jsxs)(n.p,{children:["Passe em ",(0,r.jsx)(n.em,{children:"valor"})," a cadeia de caracteres a pesquisar. A pesquisa ser\xe1 do tipo \u201Cexata\u201D; em outras palavras, a pesquisa de \u201Cpedra\u201D n\xe3o encontrar\xe1 \u201Cpedras\u201D. Entretanto, pode utilizar o caractere arroba (@) para definir as pesquisas de tipo \u201Ccome\xe7a por,\u201D \u201Ctermina em\u201D ou \u201Ccont\xe9m\u201D."]}),"\n",(0,r.jsxs)(n.p,{children:["O par\xe2metro ",(0,r.jsx)(n.em,{children:"alcance"})," \xe9 utilizado para definir se a pesquisa deve ser realizada unicamente no primeiro n\xedvel da ",(0,r.jsx)(n.em,{children:"list"}),"a ou se deve incluir todas as sub-listas. Passe 0 para limitar a pesquisa ao primeiro n\xedvel da lista e 1 para estend\xea-la pesquisa a todas as sub-listas."]}),"\n",(0,r.jsxs)(n.p,{children:["Se deseja conhecer a posi\xe7\xe3o ou o n\xfamero de todos os elementos correspondentes a ",(0,r.jsx)(n.em,{children:"valor"}),", passe um array inteiro longo no par\xe2metro opcional ",(0,r.jsx)(n.em,{children:"arrayElem"}),". Se for necess\xe1rio, o array ser\xe1 criado e redimensionado pelo comando. O comando preencher\xe1 o array com as posi\xe7\xf5es (se omitir o segundo *) ou os n\xfameros de refer\xeancia ( se for passado o segundo *) dos elementos encontrados."]}),"\n",(0,r.jsx)(n.p,{children:"As posi\xe7\xf5es s\xe3o expressas em rela\xe7\xe3o ao elemento superior da lista principal, considerando o estado atual expandido/contra\xeddo da lista e das sub-listas."}),"\n",(0,r.jsxs)(n.p,{children:["Se nenhum elemento corresponde ao ",(0,r.jsx)(n.em,{children:"valor"})," buscado, a fun\xe7\xe3o retorna 0 e o array ",(0,r.jsx)(n.em,{children:"arrayElem"})," \xe9 retornado vazio."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Dada a seguinte lista hier\xe1rquica:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:s(335034).Z+"",width:"167",height:"353"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$vlItemPos:=Find in list(hList;"I@";1;$arrPos)\n\xa0\xa0//$vlItemPos igual a 6\n\xa0\xa0//$arrPos{1} igual a 6 e $arrPos{2} igual a 11\n\xa0$vlItemRef:=Find in list(hList;"I@";1;$arrRefs;*)\n\xa0\xa0//$vlItemRef igual a 7\n\xa0\xa0//$arrRefs{1} igual a 7 e $arrRefs{2} igual a 18\n\xa0$vlItemPos:=Find in list(hList;"Data";1;$arrPos)\n\xa0\xa0//$vlItemPos igual a 9\n\xa0\xa0//$arrPos{1} igual a 9 e $arrPos{2} igual a 16\n\xa0$vlItemRefFind in list(hList;"Fecha";1;$arrRefs;*)\n\xa0\xa0//$vlItemRef igual a11\n\xa0\xa0//$arrRefs{1} igual a 11 e $arrRefs{2} igual a 23\n\xa0$vlItemPos:=Find in list(hList;"Fecha";0;*)\n\xa0\xa0//$vlItemPos igual a 0\n'})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"952"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},335034:function(e,n,s){s.d(n,{Z:function(){return a}});let a=s.p+"assets/images/pict22420.en-b38917cd44a4e89e7d00a3c88da4ccd4.png"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return o}});var a=s(667294);let r={},i=a.createContext(r);function o(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);