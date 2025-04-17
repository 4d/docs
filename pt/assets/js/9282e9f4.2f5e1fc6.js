"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3266"],{86594:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/get-list-item-properties","title":"GET LIST ITEM PROPERTIES","description":"GET LIST ITEM PROPERTIES ( { ;} lista ; refElem |  ; editavel {; estilos {; icone {; cor}}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-list-item-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-list-item-properties","permalink":"/docs/pt/20-R8/commands/get-list-item-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-list-item-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-list-item-properties","title":"GET LIST ITEM PROPERTIES","slug":"/commands/get-list-item-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET LIST ITEM PARAMETER ARRAYS","permalink":"/docs/pt/20-R8/commands/get-list-item-parameter-arrays"},"next":{"title":"GET LIST PROPERTIES","permalink":"/docs/pt/20-R8/commands/get-list-properties"}}'),s=o("785893"),t=o("250065");let i={id:"get-list-item-properties",title:"GET LIST ITEM PROPERTIES",slug:"/commands/get-list-item-properties",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",filesystem:"filesystem",h2:"h2",li:"li",name:"name",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET LIST ITEM PROPERTIES"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"lista"})," ; refElem | * ; ",(0,s.jsx)(n.em,{children:"editavel"})," {; ",(0,s.jsx)(n.em,{children:"estilos"})," {; ",(0,s.jsx)(n.em,{children:"icone"})," {; ",(0,s.jsx)(n.em,{children:"cor"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Se especificada, lista \xe9 um nome de objeto (cadeia) Se omitida, lista \xe9 um n\xfamero de refer\xeancia de lista"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lista"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de refer\xeancia de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refElem | *"}),(0,s.jsx)(n.td,{children:"Operador, Inteiro longo"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia do elemento, ou 0 para o \xfaltimo elemento adicionado \xe0 lista ou * para o elemento da lista atualmente selecionada"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"editavel"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"TRUE = Edit\xe1vel, FALSE = N\xe3o edit\xe1vel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"estilos"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Estilo de fonte do elemento"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"icone"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"N\xfamero de recurso Mac OS \u2018cicn\u2019, ou 65536 + n\xfamero de recurso Mac OS \u2018PICT\u2019, ou 131072 + n\xfamero de refer\xeancia de imagem"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"cor"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Valor de cor RGB"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"GET LIST ITEM PROPERTIES"})," retorna o nome da fonte do caractere atual do elemento especificado pelo par\xe2metro ",(0,s.jsx)(n.em,{children:"refElem"})," da lista cujo n\xfamero de refer\xeancia o nome de objeto se passa em ",(0,s.jsx)(n.em,{children:"lista"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passa o primeiro par\xe2metro opcional *, indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"lista"})," \xe9 um nome de objeto (cadeia) correspondente a uma representa\xe7\xe3o da lista no formul\xe1rio. Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,s.jsx)(n.em,{children:"lista"})," \xe9 uma refer\xeancia de lista hier\xe1rquica (",(0,s.jsx)(n.em,{children:"RefLista"}),"). Se utiliza uma s\xf3 representa\xe7\xe3o de lista ou trabalha com elementos estruturais (o segundo * \xe9 omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contr\xe1rio, se utiliza v\xe1rias representa\xe7\xf5es de uma mesma lista e trabalha com o elemento atual (se passa o segundo *), a sintaxe baseada no nome do objeto se necessita j\xe1 que cada representa\xe7\xe3o pode ter seu pr\xf3prio elemento atual."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," se utiliza o caractere @ no nome de objeto da lista e o formul\xe1rio cont\xe9m v\xe1rias listas que correspondem a este nome, ou ",(0,s.jsx)(n.strong,{children:"GET LIST ITEM PROPERTIES"})," se aplicar\xe1 ao primeiro objeto cujo nome corresponda."]}),"\n",(0,s.jsxs)(n.p,{children:["Em ",(0,s.jsx)(n.em,{children:"refElem"}),", pode passar um n\xfamero de refer\xeancia, ou o valor 0 com o objetivo de designar o \xfaltimo elemento adicionado \xe0 lista, ou * para designar o elemento atual da lista. Se v\xe1rios elementos forem selecionados, o elemento atual \xe9 o \xfaltimo a ser selecionado."]}),"\n",(0,s.jsx)(n.p,{children:"Se passa * e nenhum elemento for selecionado ou se o n\xfamero de refer\xeancia do elemento n\xe3o corresponde a nenhum elemento da lista, o comando deixa os par\xe2metros sem mudan\xe7as."}),"\n",(0,s.jsxs)(n.p,{children:["Se trabalhar com n\xfameros de refer\xeancia dos elementos, construa uma lista na qual os elementos tenham n\xfameros de referencia \xfanicos, do contr\xe1rio n\xe3o poder\xe1 diferenciar os elementos. Para maior informa\xe7\xe3o, consulte a descri\xe7\xe3o do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/append-to-list",children:"APPEND TO LIST"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Depois de a chamar:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"editavel"})," retorna TRUE se o elemento \xe9 edit\xe1vel."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"estilos"})," retorna o estilo de fonte do elemento."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"icone"})," retorna o \xedcone ou a imagem associada ao elemento, ",(0,s.jsx)(n.em,{children:"0"})," se n\xe3o houver nenhum."]}),"\n",(0,s.jsxs)(n.li,{children:["Se o \xedcone foi especificado como um arquivo de imagem, o comando retorna em \xedcone uma rota usando o padr\xe3o ",(0,s.jsxs)(n.strong,{children:["path:",(0,s.jsx)(n.filesystem,{path:""})]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Se o \xedcone tiver sido especificado usando uma biblioteca de imagen (apenas em banco de dados bin\xe1riso), o comando retorna ou o n\xfamero ou o nome da imagem, dependendo do tipo de vari\xe1vel passado no par\xe2metro. O padr\xe3o a seguir \xe9 usado para o nome : ",(0,s.jsxs)(n.strong,{children:["pictlib:",(0,s.jsx)(n.name,{})]}),". Se n\xe3o atribuir um tipo especifico para a vari\xe1vel ",(0,s.jsx)(n.em,{children:"\xedcone"}),", como padr\xe3o, o nome da imagem \xe9 retornado (texto). Se nenhum \xedcone estiver associado com o \xedcone, o comando retorna um valor em branco.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Nota:"})," pode recuperar, em uma vari\xe1vel imagem, o \xedcone associado com um elemento utilizando o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-list-item-icon",children:"GET LIST ITEM ICON"})]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"cor"})," retorna a cor do texto do elemento especificado."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Para maior informa\xe7\xe3o sobre estas propriedades, consulte a descri\xe7\xe3o do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-list-item",children:"GET LIST ITEM"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/get-list-item-icon",children:"GET LIST ITEM ICON"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-list-item",children:"SET LIST ITEM"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"631"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return i}});var r=o(667294);let s={},t=r.createContext(s);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);