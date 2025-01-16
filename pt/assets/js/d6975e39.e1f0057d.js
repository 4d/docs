"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69544"],{219979:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/set-list-item-icon","title":"SET LIST ITEM ICON","description":"SET LIST ITEM ICON ( { ;} lista ; refElem |   ; icone )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-list-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-item-icon","permalink":"/docs/pt/commands/set-list-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-item-icon.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-list-item-icon","title":"SET LIST ITEM ICON","slug":"/commands/set-list-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM FONT","permalink":"/docs/pt/commands/set-list-item-font"},"next":{"title":"SET LIST ITEM PARAMETER","permalink":"/docs/pt/commands/set-list-item-parameter"}}'),i=s("785893"),o=s("250065");let r={id:"set-list-item-icon",title:"SET LIST ITEM ICON",slug:"/commands/set-list-item-icon",displayed_sidebar:"docs"},a=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET LIST ITEM ICON"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"lista"})," ; refElem | *  ; ",(0,i.jsx)(n.em,{children:"icone"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Se especificada, lista \xe9 um nome de objeto (cadeia) Se omitida, lista \xe9 um n\xfamero de refer\xeancia de lista"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"lista"}),(0,i.jsx)(n.td,{children:"Integer, Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de refer\xeancia de lista (se omitida *) ou Nome do objeto de tipo lista (se passada *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refElem | *"}),(0,i.jsx)(n.td,{children:"Inteiro longo, Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de referencia do elemento, ou 0 para o \xfaltimo elemento adicionado \xe0 lista ou * para o elemento da lista atualmente selecionada"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"icone"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"\xcdcone a associar ao elemento"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["O comando SET LIST ITEM ICON permite modificar o \xedcone associado ao elemento especificado pelo par\xe2metro ",(0,i.jsx)(n.em,{children:"refElem"})," da lista cujo n\xfamero de refer\xeancia o nome de objeto se passa em ",(0,i.jsx)(n.em,{children:"lista"})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," \xe9 poss\xedvel modificar o \xedcone associado com um elemento utilizando o comando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"}),". Entretanto, o comando aceita unicamente as refer\xeancias de imagens est\xe1ticas (refer\xeancias de recursos ou imagens da biblioteca de imagens)."]}),"\n",(0,i.jsxs)(n.p,{children:["Se passa o primeiro par\xe2metro opcional *, indica que o par\xe2metro ",(0,i.jsx)(n.em,{children:"lista"})," \xe9 um nome de objeto (cadeia) correspondente a uma representa\xe7\xe3o da lista no formul\xe1rio. Se n\xe3o passar este par\xe2metro, indica que o par\xe2metro ",(0,i.jsx)(n.em,{children:"lista"})," \xe9 uma refer\xeancia de lista hier\xe1rquica (",(0,i.jsx)(n.em,{children:"RefLista"}),"). Se utiliza uma s\xf3 representa\xe7\xe3o de lista ou trabalha com elementos estruturais (o segundo * \xe9 omitido), pode utilizar indiferentemente uma ou outra sintaxe. Pelo contr\xe1rio, se utiliza v\xe1rias representa\xe7\xf5es de uma mesma lista e trabalha com o elemento atual (se passa o segundo *), a sintaxe baseada no nome do objeto \xe9 requerida j\xe1 que cada representa\xe7\xe3o pode ter seu pr\xf3prio elemento atual."]}),"\n",(0,i.jsxs)(n.p,{children:["Pode passar um n\xfamero de refer\xeancia em ",(0,i.jsx)(n.em,{children:"refElem"}),". Se este n\xfamero n\xe3o corresponde a nenhum elemento da lista, o comando n\xe3o faz nada. Tamb\xe9m pode passar 0 em ",(0,i.jsx)(n.em,{children:"refElem"})," para obter a fonte do \xfaltimo elemento adicionado \xe0 lista (utilizando ",(0,i.jsx)(n.a,{href:"/docs/pt/commands/append-to-list",children:"APPEND TO LIST"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:["Por \xfaltimo, pode passar ",(0,i.jsx)(n.em,{children:"*"})," em ",(0,i.jsx)(n.em,{children:"refElem"}),": neste caso, o comando ser\xe1 aplicado ao elemento atual da lista. Se for selecionados v\xe1rios elementos manualmente, o elemento atual \xe9 o \xfaltimo selecionado. Se nenhum elemento estiver selecionado, o comando n\xe3o faz nada."]}),"\n",(0,i.jsxs)(n.p,{children:["Passe no par\xe2metro ",(0,i.jsx)(n.em,{children:"icone"})," uma express\xe3o de imagem 4D v\xe1lida (campo, vari\xe1vel, ponteiro, etc.). A imagem ser\xe1 colocada a direita do elemento."]}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.p,{children:"Queremos atribuir a mesma imagem a dois elementos diferentes. O seguinte c\xf3digo se otimiza j\xe1 que a imagem \xe9 carregada na mem\xf3ria s\xf3 uma vez:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $picture : Picture\n\xa0READ PICTURE FILE("myPict.png";$picture)\n\xa0SET LIST ITEM ICON(mylist;ref1;$picture)\n\xa0SET LIST ITEM ICON(mylist;ref2;$picture)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/commands/set-list-item",children:"SET LIST ITEM"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/commands/set-list-item-font",children:"SET LIST ITEM FONT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,i.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero do comando"}),(0,i.jsx)(n.td,{children:"950"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread-seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return r}});var t=s(667294);let i={},o=t.createContext(i);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);