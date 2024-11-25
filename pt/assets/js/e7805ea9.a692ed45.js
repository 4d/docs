"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34597"],{9686:function(e,o,n){n.r(o),n.d(o,{metadata:()=>s,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-get-objects","title":"LISTBOX GET OBJECTS","description":"LISTBOX GET OBJECTS ( { ;} objeto ; arrayNomObjeto* )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-objects.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-objects","permalink":"/docs/pt/commands/listbox-get-objects","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-objects.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-objects","title":"LISTBOX GET OBJECTS","slug":"/commands/listbox-get-objects","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get number of rows","permalink":"/docs/pt/commands/listbox-get-number-of-rows"},"next":{"title":"LISTBOX GET PRINT INFORMATION","permalink":"/docs/pt/commands/listbox-get-print-information"}}'),t=n("785893"),r=n("250065");let d={id:"listbox-get-objects",title:"LISTBOX GET OBJECTS",slug:"/commands/listbox-get-objects",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.strong,{children:"LISTBOX GET OBJECTS"})," ( {* ;} ",(0,t.jsx)(o.em,{children:"objeto"})," ; ",(0,t.jsx)(o.em,{children:"arrayNomObjeto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Par\xe2metro"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"*"}),(0,t.jsx)(o.td,{children:"Operador"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsxs)(o.td,{children:["Se for especificado, o objeto \xe9 um nome de objeto (cadeia)",(0,t.jsx)(o.br,{}),"Se for omitido, o objeto \xe9 uma vari\xe1vel"]})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objeto"}),(0,t.jsx)(o.td,{children:"any"}),(0,t.jsx)(o.td,{children:"\u2192"}),(0,t.jsx)(o.td,{children:"Nome do objeto (se * for especificado) ou Vari\xe1vel (se * for omitido)"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"arrayNomObjeto"}),(0,t.jsx)(o.td,{children:"Text array"}),(0,t.jsx)(o.td,{children:"\u2190"}),(0,t.jsx)(o.td,{children:"Nomes dos sub objetos do list box (cabe\xe7alhos, colunas, p\xe9s)"})]})]})]}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,t.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O comando ",(0,t.jsx)(o.strong,{children:"LISTBOX GET OBJECTS"})," devolve um array que cont\xe9m os nomes de todos os objetos que comp\xf5em o list box designado pelos par\xe2metros ",(0,t.jsx)(o.em,{children:"objeto"})," e ",(0,t.jsx)(o.em,{children:"*"})," ."]}),"\n",(0,t.jsxs)(o.p,{children:["Ao passar o par\xe2metro opcional ",(0,t.jsx)(o.em,{children:"*"})," indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 um nome de objeto (uma cadeia). Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,t.jsx)(o.em,{children:"objeto"})," \xe9 uma vari\xe1vel. Neste caso, \xe9 passada uma refer\xeancia de vari\xe1vel no lugar de uma cadeia."]}),"\n",(0,t.jsxs)(o.p,{children:["Em ",(0,t.jsx)(o.em,{children:"arrayNomObjeto"}),", passe um array texto que \xe9 enchido automaticamente pelo comando. Os nomes dos objetos s\xe3o devolvidos em sua ordem de apresenta\xe7\xe3o, com a seguinte sequ\xeancia:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsx)(o.tr,{children:(0,t.jsx)(o.th,{children:"nomCol1"})})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsx)(o.tr,{children:(0,t.jsx)(o.td,{children:"nomCabCol1"})}),(0,t.jsx)(o.tr,{children:(0,t.jsx)(o.td,{children:"nomPeCol1"})}),(0,t.jsx)(o.tr,{children:(0,t.jsx)(o.td,{children:"nomCol2"})}),(0,t.jsx)(o.tr,{children:(0,t.jsx)(o.td,{children:"nomCabCol2"})}),(0,t.jsx)(o.tr,{children:(0,t.jsx)(o.td,{children:"nomPeCol2"})}),(0,t.jsx)(o.tr,{children:(0,t.jsx)(o.td,{children:"..."})})]})]}),"\n",(0,t.jsx)(o.p,{children:"O array devolve os nomes dos objetos de todas as colunas (incluindo os p\xe9s de coluna), independentemente de se s\xe3o ou n\xe3o vis\xedveis."}),"\n",(0,t.jsxs)(o.p,{children:["Este comando \xe9 \xfatil no contexto da an\xe1lise de um formul\xe1rio utilizando os comandos ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/form-load",children:"FORM LOAD"}),", ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/form-get-objects",children:"FORM GET OBJECTS"})," e ",(0,t.jsx)(o.a,{href:"/docs/pt/commands/object-get-type",children:"OBJECT Get type"}),". Se pode utilizar, quando seja necess\xe1rio, para obter os nomes dos sub objetos dos list box."]}),"\n",(0,t.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.p,{children:"Voc\xea quer carregar um formul\xe1rio e obter a lista de todos os objetos dos list boxes que cont\xe9m."}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:'\xa0FORM LOAD("MyForm")\n\xa0ARRAY TEXT(arrObjects;0)\n\xa0FORM GET OBJECTS(arrObjects)\n\xa0ARRAY LONGINT(ar_type;Size of array(arrObjects))\n\xa0For($i;1;Size of array(arrObjects))\n\xa0\xa0\xa0\xa0ar_type{$i}:=OBJECT Get type(*;arrObjects{$i})\n\xa0\xa0\xa0\xa0If(ar_type{$i}=Object type listbox)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(arrLBObjects;0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LISTBOX GET OBJECTS(*;arrObjects{$i};arrLBObjects)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0FORM UNLOAD\n'})}),"\n",(0,t.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(o.p,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/commands/form-load",children:"FORM LOAD"}),(0,t.jsx)(o.br,{}),"\n",(0,t.jsx)(o.a,{href:"/docs/pt/commands/object-get-type",children:"OBJECT Get type"})]})]})}function m(e={}){let{wrapper:o}={...(0,r.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return d}});var s=n(667294);let t={},r=s.createContext(t);function d(e){let o=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(r.Provider,{value:o},e.children)}}}]);