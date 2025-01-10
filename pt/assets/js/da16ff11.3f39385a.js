"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91239"],{929983:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>d});var o=JSON.parse('{"id":"commands-legacy/boolean-array-from-set","title":"BOOLEAN ARRAY FROM SET","description":"BOOLEAN ARRAY FROM SET ( booleanArr {; conjunto} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/boolean-array-from-set.md","sourceDirName":"commands-legacy","slug":"/commands/boolean-array-from-set","permalink":"/docs/pt/commands/boolean-array-from-set","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fboolean-array-from-set.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"boolean-array-from-set","title":"BOOLEAN ARRAY FROM SET","slug":"/commands/boolean-array-from-set","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY TO SELECTION","permalink":"/docs/pt/commands/array-to-selection"},"next":{"title":"COPY ARRAY","permalink":"/docs/pt/commands/copy-array"}}'),s=r("785893"),t=r("250065");let a={id:"boolean-array-from-set",title:"BOOLEAN ARRAY FROM SET",slug:"/commands/boolean-array-from-set",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"BOOLEAN ARRAY FROM SET"})," ( ",(0,s.jsx)(n.em,{children:"booleanArr"})," {; ",(0,s.jsx)(n.em,{children:"conjunto"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"booleanArr"}),(0,s.jsx)(n.td,{children:"Boolean array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Array para indicar se um registro est\xe1 no conjunto ou n\xe3o"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"conjunto"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome do conjunto ou UserSet se o par\xe2metro for omitido"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando BOOLEAN ARRAY FROM SET  preenche um array de booleanos indicando se cada registro na tablea est\xe1 ou n\xe3o no ",(0,s.jsx)(n.em,{children:"conjunto"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Os elementos no array s\xe3o ordenados em fun\xe7\xe3o da ordem de cria\xe7\xe3o dos registros na tabela (n\xfameros de registro absolutos). Se N \xe9 o n\xfamero de registros na tabela, o elemento 0 do array corresponde ao registro n\xfamero 0, o elemento 1 do array corresponde ao registro n\xfamero 1, etc."}),"\n",(0,s.jsx)(n.p,{children:"Cada elemento do array \xe9:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/true",title:"True",children:"True"})," se o registro correspondente pertence ao conjunto."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/false",title:"False",children:"False"})," se o registro correspondente n\xe3o pertence ao conjunto."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Advert\xeancia:"})," o n\xfamero total de elementos no array ",(0,s.jsx)(n.em,{children:"arrBool"})," n\xe3o \xe9 significativo. Por raz\xf5es estruturais, este n\xfamero pode ser diferente do n\xfamero de registros realmente presentes na tabela. Os poss\xedveis elementos extras s\xe3o definidos como ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/false",title:"False",children:"False"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Se voc\xea n\xe3o passar o par\xe2metro ",(0,s.jsx)(n.em,{children:"conjunto"}),", o comando utilizar\xe1 UserSet no processo atual."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/create-set-from-array",children:"CREATE SET FROM ARRAY"})}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"646"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var o=r(667294);let s={},t=o.createContext(s);function a(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);