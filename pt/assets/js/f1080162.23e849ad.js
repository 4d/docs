"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97943"],{252680:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>o,assets:()=>t,toc:()=>c,contentTitle:()=>s});var o=JSON.parse('{"id":"commands-legacy/find-in-array","title":"Find in array","description":"Find in array ( array ; valor {; inicio} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/find-in-array.md","sourceDirName":"commands-legacy","slug":"/commands/find-in-array","permalink":"/docs/pt/commands/find-in-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffind-in-array.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"find-in-array","title":"Find in array","slug":"/commands/find-in-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DISTINCT VALUES","permalink":"/docs/pt/commands/distinct-values"},"next":{"title":"Find in sorted array","permalink":"/docs/pt/commands/find-in-sorted-array"}}'),a=r("785893"),d=r("250065");let i={id:"find-in-array",title:"Find in array",slug:"/commands/find-in-array",displayed_sidebar:"docs"},s=void 0,t={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Find in array"})," ( ",(0,a.jsx)(n.em,{children:"array"})," ; ",(0,a.jsx)(n.em,{children:"valor"})," {; ",(0,a.jsx)(n.em,{children:"inicio"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"array"}),(0,a.jsx)(n.td,{children:"Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Array a buscar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"valor"}),(0,a.jsx)(n.td,{children:"Expression"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Valor do mesmo tipo a ser buscado no array"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"inicio"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Elemento no qual se inicia a busca"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"N\xfamero do primeiro elemento no array que corresponde ao valor"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["O comando Find in array devolve o n\xfamero do primeiro elemento do ",(0,a.jsx)(n.a,{href:"#",title:"An array of values",children:"Array"})," que corresponde a valor."]}),"\n",(0,a.jsxs)(n.p,{children:["Find in array pode se utilizar com arrays de tipo Texto, Alfa, Num\xe9rico, Data, Apontador e Booleano. Os par\xe2metros ",(0,a.jsx)(n.a,{href:"#",title:"An array of values",children:"Array"})," e valor devem ser do mesmo tipo."]}),"\n",(0,a.jsxs)(n.p,{children:["valor deve ser exatamente igual ao elmento a encontrar (mesmas regras que as aplicadas ao operador de igualdade, ver ",(0,a.jsx)(n.em,{children:"Operadores de Compara\xe7\xe3o"}),"). Se nenhum resultado for encontrado, Find in array retorna \u20131."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": Com arrays Objeto, pode usar apenas refer\xeancias de objeto no par\xe2metro valor"]}),"\n",(0,a.jsxs)(n.p,{children:["Se especificar ",(0,a.jsx)(n.em,{children:"principio"}),", o comando come\xe7a a busca no n\xfamero de elemento especificado por ",(0,a.jsx)(n.em,{children:"principio"}),". Se n\xe3o se especifica ",(0,a.jsx)(n.em,{children:"principio"}),", o comando come\xe7a a busca no elemento 1."]}),"\n",(0,a.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"O m\xe9todo de projeto a seguir deleta todos os elementos apagados do string ou array de texto cujo ponteiro \xe9 passado como par\xe2metro:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projecto LIMPAR ARRAY\n\xa0\xa0// LIMPAR ARRAY ( Ponteiro )\n\xa0\xa0// LIMPAR ARRAY ( -> Array de Texto ou Alfa )\n\xa0\n\xa0#DECLARE ($arrPtr : Pointer) : Pointer\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vlElem:=Find in array($arrPtr->;"")\n\xa0\xa0\xa0\xa0If($vlElem>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY($arrPtr->;$vlElem)\n\xa0\xa0\xa0\xa0End if\n\xa0Until($vlElem<0)\n'})}),"\n",(0,a.jsx)(n.p,{children:"Depois de implementar este m\xe9todo de projeto em uma base, pode escrever:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT(atValores;...)\n\xa0\xa0// ...\n\xa0\xa0// Utilizar o array como quiser\n\xa0\xa0// ...\n\xa0\xa0// Eliminar os elementos de cadeias vazias\n\xa0LIMPAR ARRAY(->atValores)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"O m\xe9todo de projeto a seguir selecionar o primeiro elemento de um array cujo ponteiro passa como primeiro par\xe2metro que corresponde ao valor da vari\xe1vel ou campo cujo ponteiro \xe9 passado como par\xe2metro:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de projeto SELECIONAR ELEMENTO\n\xa0\xa0// SELECIONAR ELEMENTO( Ponteiro ;\xa0Ponteiro)\n\xa0\xa0//SELECIONAR ELEMENTO ( -> Array Texto ou Alfa ; -> Campo ou vari\xe1vel de tipo Texto ou Alfa )\n\xa0\n\xa0#DECLARE($arrPtr : Pointer ; $varPtr : Pointer)\n$arrPtr->:=Find in array($arrPtr->; $varPtr->)\n\xa0If($tabPtr->=-1)\n\xa0\xa0\xa0\xa0$tabPtr->:=0\xa0// Se um elemento n\xe3o \xe9 encontrado, fixar o array em um elemento n\xe3o selecionado\n\xa0End if\n"})}),"\n",(0,a.jsx)(n.p,{children:"Depois de implementar este m\xe9todo em um banco, voc\xea pode escrever:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de objeto de menu suspenso asGenero\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SELECIONAR ELEMENTO(->asGenero;->[Pessoas]Genero)\n\xa0\n\xa0End case\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\n//``\n\n**Nota:** este exemplo utiliza o **elemento selecionado** do array. Leve em conta que o elemento selecionado n\xe3o \xe9 significativo se o array cont\xe9m mais de 32.767 elementos (ver *Arrays e objetos de formul\xe1rio*). Neste caso, \xe9 necess\xe1rio utilizar uma vari\xe1vel de tipo inteiro longo para armazenar o resultado de **Find in array**. \n\n## Exemplo 3 \n\nPara encontrar uma refer\xeancia de objeto\n\n```4d\n\xa0ARRAY OBJECT($objects;100)\n\n$o1:={a10;b"xyz"}\n\xa0$o2:={a10;b"xyz"}\n\xa0\n\xa0$objects{20}:=$o1\n\xa0var $p : Integer\n\xa0\n\xa0$p:=Find in array($objects;$o1)\xa0//$p = 20\xa0\n\xa0$p:=Find in array($objects;$o2)\xa0//$p = -1\xa0\n\xa0$p:=Find in array($objects;{a10;b"xyz"})\xa0//$p = -1\n\n\n'})}),"\n",(0,a.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/pt/commands/count-in-array",children:"Count in array"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/delete-from-array",children:"DELETE FROM ARRAY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/find-in-sorted-array",children:"Find in sorted array"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/insert-in-array",children:"INSERT IN ARRAY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/size-of-array",children:"Size of array"})]}),"\n",(0,a.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"230"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return s},a:function(){return i}});var o=r(667294);let a={},d=o.createContext(a);function i(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);