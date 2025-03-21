"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64656"],{878821:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>d,toc:()=>l,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/delete-from-list","title":"DELETE FROM LIST","description":"DELETE FROM LIST ( { ;} lista ; refElem |   {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/delete-from-list.md","sourceDirName":"commands-legacy","slug":"/commands/delete-from-list","permalink":"/docs/pt/20-R7/commands/delete-from-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-from-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-from-list","title":"DELETE FROM LIST","slug":"/commands/delete-from-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Count list items","permalink":"/docs/pt/20-R7/commands/count-list-items"},"next":{"title":"Find in list","permalink":"/docs/pt/20-R7/commands/find-in-list"}}'),r=n("785893"),t=n("250065");let o={id:"delete-from-list",title:"DELETE FROM LIST",slug:"/commands/delete-from-list",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"DELETE FROM LIST"})," ( {* ;} ",(0,r.jsx)(s.em,{children:"lista"})," ; refElem | *  {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operador"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Se especificada, lista \xe9 um nome de objeto (cadeia) Se omitida, lista \xe9 um n\xfamero de refer\xeancia de lista"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"lista"}),(0,r.jsx)(s.td,{children:"Integer, Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfamero de refer\xeancia de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"refElem | *"}),(0,r.jsx)(s.td,{children:"Inteiro longo, Operador"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"N\xfamero de referencia do elemento, ou 0 para o \xfaltimo elemento adicionado \xe0 lista ou * para o elemento da lista atualmente selecionada"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operator"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Se especificada, apaga as sub-listas (se existem) da mem\xf3ria Se omitida, as sub-listas (se existem) n\xe3o s\xe3o apagadas"})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["O comando DELETE FROM LIST apaga o elemento designado pelo par\xe2metro ",(0,r.jsx)(s.em,{children:"refElem"})," da lista cujo n\xfamero de refer\xeancia se passa em ",(0,r.jsx)(s.em,{children:"lista"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Se passa o primeiro par\xe2metro opcional ",(0,r.jsx)(s.em,{children:"*"}),", indica que o par\xe2metro ",(0,r.jsx)(s.em,{children:"lista"})," \xe9 um nome de objeto (cadeia) correspondente a uma representa\xe7\xe3o de lista no formul\xe1rio. Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,r.jsx)(s.em,{children:"lista"})," \xe9 uma referencia de lista hier\xe1rquica (",(0,r.jsx)(s.em,{children:"refLista"}),"). Se utilizar uma s\xf3 representa\xe7\xe3o de lista ou trabalha com todos os elementos (passa o segundo *), pode utilizar qualquer uma das duas sintaxes. Pelo contr\xe1rio, se utilizar v\xe1rias representa\xe7\xf5es da mesma lista e trabalha com os elementos vis\xedveis (o segundo * \xe9 omitido), a sintaxe baseada no nome do objeto \xe9 necess\xe1ria j\xe1 que cada representa\xe7\xe3o pode ter sua pr\xf3pria configura\xe7\xe3o exibida/contra\xedda."]}),"\n",(0,r.jsxs)(s.p,{children:["Se passar ",(0,r.jsx)(s.em,{children:"*"})," em ",(0,r.jsx)(s.em,{children:"refElem"}),", apaga o elemento atualmente selecionado na lista. Igualmente pode passar 0 neste par\xe2metro para apagar o \xfaltimo elemento adicionado \xe0 lista."]}),"\n",(0,r.jsxs)(s.p,{children:["Do contr\xe1rio, especifique o n\xfamero de refer\xeancia do elemento que deseja apagar. Se o n\xfamero n\xe3o corresponde a nenhum elemento da ",(0,r.jsx)(s.em,{children:"lista"}),", o comando n\xe3o faz nada."]}),"\n",(0,r.jsxs)(s.p,{children:["Se trabalhar com os n\xfameros de refer\xeancia dos elementos, construa uma lista na qual os elementos tenham n\xfameros de refer\xeancia \xfanicos, do contr\xe1rio n\xe3o poder\xe1 distinguir os elementos. Para maior informa\xe7\xe3o, consulte a descri\xe7\xe3o do comando ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/append-to-list",title:"APPEND TO LIST",children:"APPEND TO LIST"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Sem importar que elemento apague, deve especificar o par\xe2metro opcional ",(0,r.jsx)(s.em,{children:"*"})," para permitir a 4D apagar automaticamente a sub-lista associada ao elemento, se as houver. Se n\xe3o especificar o par\xe2metro ",(0,r.jsx)(s.em,{children:"*"}),", \xe9 uma boa id\xe9ia obter previamente o n\xfamero de refer\xeancia da sub-lista (se houver) associada ao elemento, de maneira que pode ser apagado, se for necess\xe1rio, utilizando o comando ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/clear-list",title:"CLEAR LIST",children:"CLEAR LIST"}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(s.p,{children:["O c\xf3digo a seguir apaga o elemento selecionado da lista ",(0,r.jsx)(s.em,{children:"hList"}),". Se o elemento tiver uma sub-lista associada for apagada (como tamb\xe9m toda sub-sub lista):"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0DELETE FROM LIST(hList;*;*)\n"})}),"\n",(0,r.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/clear-list",children:"CLEAR LIST"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/get-list-item",children:"GET LIST ITEM"})]}),"\n",(0,r.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"624"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var a=n(667294);let r={},t=a.createContext(r);function o(e){let s=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(t.Provider,{value:s},e.children)}}}]);