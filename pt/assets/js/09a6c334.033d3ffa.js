"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["50572"],{177650:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>o,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/list-to-array","title":"LIST TO ARRAY","description":"LIST TO ARRAY ( lista ; array {; itemRefs} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/list-to-array.md","sourceDirName":"commands-legacy","slug":"/commands/list-to-array","permalink":"/docs/pt/commands/list-to-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flist-to-array.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"list-to-array","title":"LIST TO ARRAY","slug":"/commands/list-to-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INSERT IN ARRAY","permalink":"/docs/pt/commands/insert-in-array"},"next":{"title":"LONGINT ARRAY FROM SELECTION","permalink":"/docs/pt/commands/longint-array-from-selection"}}'),t=s("785893"),i=s("250065");let a={id:"list-to-array",title:"LIST TO ARRAY",slug:"/commands/list-to-array",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LIST TO ARRAY"})," ( ",(0,t.jsx)(n.em,{children:"lista"})," ; ",(0,t.jsx)(n.em,{children:"array"})," {; ",(0,t.jsx)(n.em,{children:"itemRefs"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lista"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Lista da qual copiar os itens de primeiro n\xedvel"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"array"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array para o qual copiar os itens da lista"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"itemRefs"}),(0,t.jsx)(n.td,{children:"Array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfameros de refer\xeancia da lista de itens"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando LIST TO ARRAY cria ou substitui o array ",(0,t.jsx)(n.em,{children:"array"})," com os elementos de primeiro n\xedvel da lista ou da lista de sele\xe7\xe3o designada por ",(0,t.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["No par\xe2metro ",(0,t.jsx)(n.em,{children:"lista"})," pode passar o nome de uma lista de sele\xe7\xe3o (cadeia), ou uma refer\xeancia de lista hier\xe1rquica (RefList)."]}),"\n",(0,t.jsx)(n.p,{children:"Se n\xe3o definir previamente o array como de tipo Alfa ou Texto, LIST TO ARRAY cria um novo array de tipo Texto por padr\xe3o."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," em modo compilado, o ",(0,t.jsx)(n.em,{children:"array"})," deve ter sido definido previamente e n\xe3o pode ser digitado novamente."]}),"\n",(0,t.jsxs)(n.p,{children:["O par\xe2metro opcional ",(0,t.jsx)(n.em,{children:"itemRefs"})," (um array de tipo num\xe9rico) retorna os n\xfameros de refer\xeancia dos elementos da lista."]}),"\n",(0,t.jsxs)(n.p,{children:["\xc9 poss\xedvel continuar utilizando LIST TO ARRAY para construir um array baseado nos elementos de primeiro n\xedvel de uma lista. Entretanto, este comando n\xe3o lhe permite trabalhar com os elementos das sub-listas. Para trabalhar com listas hier\xe1rquicas, utilize os comandos de listas hier\xe1rquicas, em particular ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/load-list",children:"Load list"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsxs)(n.p,{children:["O exemplo a seguir copia os elementos de uma lista chamada Regi\xf5es no array chamado ",(0,t.jsx)(n.em,{children:"atRegioes"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0LIST TO ARRAY("Regions";atRegions)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(n.p,{children:"Dada uma lista hier\xe1rquica criada como \xe9 visto a continua\xe7\xe3o:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0myList2:=New list\n\xa0APPEND TO LIST(myList2;"Scotland";1)\n\xa0APPEND TO LIST(myList2;"England";2)\n\xa0APPEND TO LIST(myList2;"Wales";3)\n\xa0myList1:=New list\n\xa0APPEND TO LIST(myList1;"France";1)\n\xa0APPEND TO LIST(myList1;"Germany";2)\n\xa0APPEND TO LIST(myList1;"Spain";3)\n\xa0APPEND TO LIST(myList1;"Great Britain";4;myList2;True)\n\xa0APPEND TO LIST(myList1;"Portugal";5)\n\xa0APPEND TO LIST(myList1;"Belgium";6)\n\xa0APPEND TO LIST(myList1;"Italy";7)\n\xa0APPEND TO LIST(myList1;"Netherlands";8)\n\xa0APPEND TO LIST(myList1;"Ireland";9)\n'})}),"\n",(0,t.jsx)(n.p,{children:"Esta lista pode estar representada como:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(891260).Z+"",width:"223",height:"258"})}),"\n",(0,t.jsx)(n.p,{children:"Se executa a seguinte instru\xe7\xe3o:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0LIST TO ARRAY(myList1;$MyArray)\n"})}),"\n",(0,t.jsx)(n.p,{children:"...obt\xe9m"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$MyArray{1}="France"\n\xa0$MyArray{2}="Germany"\n\xa0$MyArray{3}="Spain"\n\xa0$MyArray{4}="Great Britain"\n\xa0$MyArray{5}="Portugal"\n\xa0...\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/commands/array-to-list",children:"ARRAY TO LIST"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/load-list",children:"Load list"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/commands/save-list",children:"SAVE LIST"})]}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"288"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},891260:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var r=s(667294);let t={},i=r.createContext(t);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);