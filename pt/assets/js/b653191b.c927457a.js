"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7162"],{659210:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/get-list-item-parameter","title":"GET LIST ITEM PARAMETER","description":"GET LIST ITEM PARAMETER ( { ;} lista ; refElem |  ; seletor ; valor )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-list-item-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-parameter","permalink":"/docs/pt/20-R7/commands/get-list-item-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-list-item-parameter","title":"GET LIST ITEM PARAMETER","slug":"/commands/get-list-item-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM ICON","permalink":"/docs/pt/20-R7/commands/get-list-item-icon"},"next":{"title":"GET LIST ITEM PARAMETER ARRAYS","permalink":"/docs/pt/20-R7/commands/get-list-item-parameter-arrays"}}'),a=t("785893"),s=t("250065");let o={id:"get-list-item-parameter",title:"GET LIST ITEM PARAMETER",slug:"/commands/get-list-item-parameter",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"GET LIST ITEM PARAMETER"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"lista"})," ; refElem | * ; ",(0,a.jsx)(n.em,{children:"seletor"})," ; ",(0,a.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Se especificada, lista \xe9 um nome de objeto (cadeia) Se omitida, lista \xe9 um n\xfamero de refer\xeancia de lista"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"lista"}),(0,a.jsx)(n.td,{children:"Integer, Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de refer\xeancia de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"refElem | *"}),(0,a.jsx)(n.td,{children:"Inteiro longo, Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de referencia do elemento, ou 0 para o \xfaltimo elemento adicionado \xe0 lista ou * para o elemento da lista atualmente selecionada"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"seletor"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Constante do par\xe2metro"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valor"}),(0,a.jsx)(n.td,{children:"Text, Boolean, Real"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Valor atual do par\xe2metro"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["O comandoGET LIST ITEM PARAMETER retorna o nome da fonte do caractere atual do elemento especificado pelo par\xe2metro ",(0,a.jsx)(n.em,{children:"refElem"})," da lista cujo n\xfamero de refer\xeancia o nome de objeto se passa em ",(0,a.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Se passa o primeiro par\xe2metro opcional *, indica que o par\xe2metro ",(0,a.jsx)(n.em,{children:"lista"})," \xe9 um nome de objeto (cadeia) correspondente a uma representa\xe7\xe3o da lista no formul\xe1rio. Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,a.jsx)(n.em,{children:"lista"})," \xe9 uma refer\xeancia de lista hier\xe1rquica (",(0,a.jsx)(n.em,{children:"RefLista"}),"). Se utiliza uma s\xf3 representa\xe7\xe3o de lista ou trabalha com elementos estruturais (o segundo * \xe9 omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contr\xe1rio, se utiliza v\xe1rias representa\xe7\xf5es de uma mesma lista e trabalha com o elemento atual (se passa o segundo *), a sintaxe baseada no nome do objeto se necessita j\xe1 que cada representa\xe7\xe3o pode ter seu pr\xf3prio elemento atual."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," se utiliza o caractere @ no nome de objeto da lista e o formul\xe1rio cont\xe9m v\xe1rias listas que correspondem a este nome, ou GET LIST ITEM PARAMETER se aplicar\xe1 ao primeiro objeto cujo nome corresponda."]}),"\n",(0,a.jsxs)(n.p,{children:["Pode passar um n\xfamero de refer\xeancia em ",(0,a.jsx)(n.em,{children:"refElem"}),". Se este n\xfamero n\xe3o corresponde a nenhum elemento da lista, o comando n\xe3o faz nada. Tamb\xe9m pode passar 0 em ",(0,a.jsx)(n.em,{children:"refElem"})," para obter a fonte do \xfaltimo elemento adicionado \xe0 lista (utilizando ",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/append-to-list",children:"APPEND TO LIST"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["Finalmente, pode passar * em ",(0,a.jsx)(n.em,{children:"refElem"}),": neste caso, o comando se aplicar\xe1 ao elemento atual da lista. Se v\xe1rios elementos s\xe3o selecionados manualmente, o elemento atual \xe9 o \xfaltimo selecionado. Se nenhum elemento estiver selecionado, o comando n\xe3o faz nada."]}),"\n",(0,a.jsxs)(n.p,{children:["Em ",(0,a.jsx)(n.em,{children:"seletor"}),", pode passar a constante Additional text ou a constante de a\xe7\xe3o padr\xe3o (localizada no tema \u201C",(0,a.jsx)(n.em,{children:"Listas hier\xe1rquicas"}),"\u201D) ou qualquer valor personalizado. Para maior informa\xe7\xe3o sobre os par\xe2metros ",(0,a.jsx)(n.em,{children:"seletor"})," e ",(0,a.jsx)(n.em,{children:"valor"}),", consulte a descri\xe7\xe3o do comando ",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"Listas hier\xe1rquicas"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-list-item-parameter",children:"SET LIST ITEM PARAMETER"})]}),"\n",(0,a.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"985"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var r=t(667294);let a={},s=r.createContext(a);function o(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);