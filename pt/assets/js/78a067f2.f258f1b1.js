"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54346"],{769422:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>l,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/array-object","title":"ARRAY OBJECT","description":"ARRAY OBJECT ( nomArray ; tam {; tam2} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/array-object.md","sourceDirName":"commands-legacy","slug":"/commands/array-object","permalink":"/docs/pt/commands/array-object","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Farray-object.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"array-object","title":"ARRAY OBJECT","slug":"/commands/array-object","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ARRAY LONGINT","permalink":"/docs/pt/commands/array-longint"},"next":{"title":"ARRAY PICTURE","permalink":"/docs/pt/commands/array-picture"}}'),s=r("785893"),d=r("250065");let o={id:"array-object",title:"ARRAY OBJECT",slug:"/commands/array-object",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"ARRAY OBJECT"})," ( ",(0,s.jsx)(n.em,{children:"nomArray"})," ; ",(0,s.jsx)(n.em,{children:"tam"})," {; ",(0,s.jsx)(n.em,{children:"tam2"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomArray"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome do array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tam"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de elementos do array ou n\xfamero de arrays se especificado tam2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tam2"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de elementos do array 2D"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando ",(0,s.jsx)(n.strong,{children:"ARRAY OBJECT"})," cria e/ou redimensiona um array de elementos de tipo Objeto de linguagem em mem\xf3ria."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"nomArray"})," \xe9 o nome do array. Pode utilizar qualquer nome conforme as conven\xe7\xf5es de 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro de ",(0,s.jsx)(n.em,{children:"tam"})," \xe9 o n\xfamero de elementos do array."]}),"\n",(0,s.jsxs)(n.p,{children:["O par\xe2metro ",(0,s.jsx)(n.em,{children:"tam2"})," \xe9 opcional. Se passar, este comando cria um array de duas dimens\xf5es. Neste caso, ",(0,s.jsx)(n.em,{children:"tam"})," especifica o n\xfamero de filas e ",(0,s.jsx)(n.em,{children:"tam2"}),' o n\xfamero de colunas de cada array. Cada fila em um array de duas dimens\xf5es se pode processar tanto como um elemento e como um array. Isto significa que quando se trabalha com a primeira dimens\xe3o de um array de duas dimens\xf5es, se pode inserir e retirar arrays inteiros utilizando outros comandos do tema "Arrays".']}),"\n",(0,s.jsxs)(n.p,{children:["Quando se aplica o comando ",(0,s.jsx)(n.strong,{children:"ARRAY OBJECT"})," a um array existente:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Se amplia seu tamanho, os elementos existentes n\xe3o se mudam e os novos elementos n\xe3o est\xe3o definidos. Pode provar se um elemento se define utilizando o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/ob-is-defined",children:"OB Is defined"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'Se reduzir seu tamanho, se eliminam e perdem os elementos ao "fundo" do array.'}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Cria\xe7\xe3o de um array de processo de 100 elementos de tipo objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY OBJECT(arrObjects;100)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Cria\xe7\xe3o de um array local de 100 filas, contendo cada um 50 elementos de tipo de objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY OBJECT($arrObjects;100;50)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Cria\xe7\xe3o e cheio de um array local de objetos:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children;$ref_richard;$ref_susan;$ref_james : Object\n\xa0ARRAY OBJECT($arrayChildren;0)\n\xa0OB SET($ref_richard;"name";"Richard";"age";7)\n\xa0APPEND TO ARRAY($arrayChildren;$ref_richard)\n\xa0OB SET($ref_susan;"name";"Susan";"age";4)\n\xa0APPEND TO ARRAY($arrayChildren;$ref_susan)\n\xa0OB SET($ref_james;"name";"James";"age";3)\n\xa0APPEND TO ARRAY($arrayChildren;$ref_james)\n\xa0\xa0// $arrayChildren{1} -> {"name":"Richard","age":7}\n\xa0\xa0// $arrayChildren{2} -> {"name":"Susan","age":4}\n\xa0\xa0// $arrayChildren{3} -> {"name":"James","age":3}\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Criando arrays"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Objetos (Linguagem)"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"1221"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return o}});var a=r(667294);let s={},d=a.createContext(s);function o(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);