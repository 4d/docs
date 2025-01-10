"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77090"],{5514:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>t});var o=JSON.parse('{"id":"commands-legacy/ob-get","title":"OB Get","description":"OB Get ( objeto ; propriedade {; tipo} ) : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/ob-get.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get","permalink":"/docs/pt/commands/ob-get","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"ob-get","title":"OB Get","slug":"/commands/ob-get","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Entries","permalink":"/docs/pt/commands/ob-entries"},"next":{"title":"OB GET ARRAY","permalink":"/docs/pt/commands/ob-get-array"}}'),a=r("785893"),d=r("250065");let s={id:"ob-get",title:"OB Get",slug:"/commands/ob-get",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Exemplo 7",id:"exemplo-7",level:4},{value:"Exemplo 8",id:"exemplo-8",level:4},{value:"Exemplo 9",id:"exemplo-9",level:4},{value:"Exemplo 10",id:"exemplo-10",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"OB Get"})," ( ",(0,a.jsx)(n.em,{children:"objeto"})," ; ",(0,a.jsx)(n.em,{children:"propriedade"})," {; ",(0,a.jsx)(n.em,{children:"tipo"}),"} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe2metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"Object, Campo Object"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Objeto estruturado"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"propriedade"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nome da propriedade a ler"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tipo"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Tipo ao qual converter o valor"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Valor atual de propriedade"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(n.p,{children:["O comando ",(0,a.jsx)(n.strong,{children:"OB Get"})," devolve o valor atual da ",(0,a.jsx)(n.em,{children:"propriedade"})," do ",(0,a.jsx)(n.em,{children:"objeto"}),", convertido opcionalmente no ",(0,a.jsx)(n.em,{children:"tipo"})," definido.deve ter sido definido com o comando ",(0,a.jsx)(n.a,{href:"c-object.md",children:"C_OBJECT"})," ou designar um campo objeto 4D.."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," este comando suporta defini\xe7\xf5es de atributo em ",(0,a.jsx)(n.em,{children:"objetos"})," 4D Write Pro, como o comando ",(0,a.jsx)(n.em,{children:"WP GET ATTRIBUTES"})," (ver o exemplo 9). ."]}),"\n",(0,a.jsxs)(n.p,{children:["No par\xe2metro ",(0,a.jsx)(n.em,{children:"propriedade"}),", passe a etiqueta da propriedade a ler. Tenha em conta que o par\xe2metro ",(0,a.jsx)(n.em,{children:"propriedade"})," \xe9 sens\xedvel a mai\xfasculas e min\xfasculas"]}),"\n",(0,a.jsxs)(n.p,{children:['Por padr\xe3o, 4D devolve o valor da propriedade em seu tipo original. Pode "for\xe7ar" a escritura do valor devolvido utilizando o par\xe2metro opcional ',(0,a.jsx)(n.em,{children:"tipo"}),". Para isso, em ",(0,a.jsx)(n.em,{children:"tipo"})," passe uma das seguintes constantes que se encontram no tema ",(0,a.jsx)(n.em,{children:"Tipos de campos e vari\xe1veis"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constante"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{children:"Valor"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is Boolean"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"6"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is collection"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"42"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is date"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"4"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is longint"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"9"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is null"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"255"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is object"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"38"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is picture"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"3"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is pointer"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"23"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is real"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is text"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is time"}),(0,a.jsx)(n.td,{children:"Inteiro longo"}),(0,a.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:["O comando devolve o valor da ",(0,a.jsx)(n.em,{children:"propriedade"}),". V\xe1rios tipos de dados est\xe3o suportados. Leve em conta que:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Um ponteiro se devolve tal qual, pode ser avaliado utilizando o comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/json-stringify",children:"JSON Stringify"}),","]}),"\n",(0,a.jsxs)(n.li,{children:['dependendo das configura\xe7\xf5es de data de bancos de dados em atributos de objeto s\xe3o armazenadas ou com tipo data ou tipo texto (a partir de 4D v16 R6). Para saber mais, veja a op\xe7\xe3o "Use date type instead of ISO date format in objects" em ',(0,a.jsx)(n.em,{children:"P\xe1gina Compatibilidade"}),". Para que OB Get interprete corretamente uma data armazenada como texto, \xe9 necess\xe1rio usar a constante Is date (ver exemplo 5)."]}),"\n",(0,a.jsx)(n.li,{children:'Em valores reais, o separador decimal \xe9 sempre um ponto "."'}),"\n",(0,a.jsx)(n.li,{children:"As horas se devolvem como um n\xfamero. Horas s\xe3o armazenadas em segundos como padr\xe3o em objetos (veja a nota de compatibilidade abaixo). Use a constanteIs time. para obter um valor de tempo formatado 4D"}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Nota de Compatibilidade:"})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Em vers\xf5es anteriores a v17, tempos eram armazenados em milissegundos dentro de objetos. Por motivos de compatibilidade, esse comportamento anterior pode ser restaurado usando o seletor Times inside objects do comando ",(0,a.jsx)(n.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),".Qualquer que seja a configura\xe7\xe3o, o resultado ser\xe1 corrigido quando a constante Is time for passada."]}),"\n",(0,a.jsxs)(n.li,{children:["(4D Write Pro) Em vers\xf5es anteriores a v16 R6, quando ",(0,a.jsx)(n.em,{children:"propriedade"})," definia um atributo de imagem 4D Write Pro (como wk image) um valor de texto contendo um dado URI era sempre retornado. A partir de 4D v16 R6, os atributos de imagem 4D Write Pro s\xe3o sempre retornados como valores de imagem. Deve usar uma ",(0,a.jsx)(n.em,{children:"propriedade"})," especifica como wk image url para obter o dado URI."]}),"\n",(0,a.jsxs)(n.li,{children:["Em vers\xf5es anteriores a v16 R4, quando ",(0,a.jsx)(n.em,{children:"propriedade"})," continha um valor null e se o par\xe2metro ",(0,a.jsx)(n.em,{children:"tipo"}),' n\xe3o fosse usado, 4D retornava uma string vazia. Em 4D v16 R4, a constante Is null \xe9 retornada nesse caso. Para preservar a compatiblidade, esta mudan\xe7a \xe9 realizada s\xf3 se a op\xe7\xe3o "Utilizar a nota\xe7\xe3o objetos para acessar \xe0s propriedades de objetos (exige Unicode)" for ativada no banco de dados (ver o par\xe1grafo ',(0,a.jsx)(n.em,{children:"P\xe1gina Compatibilidade"}),")."]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"Recupera\xe7\xe3o de um valor de tipo texto:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0var $FirstName : Text\n\xa0OB SET($ref;"FirstName";"Harry")\n\xa0$FirstName:=OB Get($ref;"FirstName")\xa0// $FirstName = "Harry" (text)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"Recupera\xe7\xe3o de um valor real convertido em inteiro longo:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0OB SET($ref ;"age";42)\n\xa0$age:=OB Get($ref ;"age")\xa0// $age \xe9 um n\xfamero real (default)\n\xa0$age:=OB Get($ref ;"age";Is longint)\xa0// $age \xe9 um inteiro longo\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(n.p,{children:"Recupera\xe7\xe3o dos valores de um objeto:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref1;$ref2 : Object\n\xa0OB SET($ref1;"LastName";"Smith")\xa0// $ref1={"LastName":"Smith"}\n\xa0OB SET($ref2;"son";$ref1)\xa0// $ref2={"son":{"LastName":"Smith"}}\n\xa0$son:=OB Get($ref2;"son")\xa0// $son={"LastName":"john"} (object)\n\xa0$sonsName:=OB Get($son ;"name")\xa0// $sonsName="john" (text)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsx)(n.p,{children:"Modificando a idade de um empregado duas vezes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref_john;$ref_jim : Object\n\xa0OB SET($ref_john;"name";"John";"age";35)\n\xa0OB SET($ref_jim;"name";"Jim";"age";40)\n\xa0APPEND TO ARRAY($myArray;$ref_john)\xa0// criamos um objeto array\n\xa0APPEND TO ARRAY($myArray;$ref_jim)\n\xa0\xa0// mudamos a idade de John de 35 a 25\n\xa0OB SET($myArray{1};"age";25)\n\xa0\xa0// mudamos a idade de "John" no array\n\xa0For($i;1;Size of array($myArray))\n\xa0\xa0\xa0\xa0If(OB Get($myArray{$i};"name")="John")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0OB SET($myArray{$i};"age";36)\xa0// em troca de 25\n\xa0\xa0// $ref_john={"name":"John","age":36}\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,a.jsx)(n.p,{children:"Quando recuperando uma data, o valor resultante depende das configura\xe7\xf5es atuais de data no banco de dados."}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Se a op\xe7\xe3o "Use date type instead of ISO date format in objects" n\xe3o estiver marcada:'}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $object : Object\n\xa0var $birthday : Date\n\xa0var $birthdayString : Text\n\xa0OB SET($object;"Birthday";!30/01/2010!)\n\xa0$birthday:=OB Get($object;"Birthday";Is date)\xa0//30/01/10\n\xa0$birthdayString:=OB Get($object;"Birthday")\xa0//"2010-01-29T23:00:00.000Z" (fuso hor\xe1rio de Paris)\n'})}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Se a op\xe7\xe3o "Use date type instead of ISO date format in objects" estiver marcada:'}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $object : Object\n\xa0var $birthday : Date\n\xa0OB SET($object;"Birthday";!30/01/2010!)\n\xa0$birthday:=OB Get($object;"Birthday")\xa0//30/01/10, n\xe3o precisa de Is date\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," Para saber mais sobre essa configura\xe7\xe3o, veja ",(0,a.jsx)(n.em,{children:"P\xe1gina Compatibilidade"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,a.jsx)(n.p,{children:"Utiliza\xe7\xe3o de objetos aninhados:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref1;$child;$children : Object\n\xa0var $childName : Text\n\xa0OB SET($ref1;"firstname";"John";"lastname";"Monroe")\n\xa0\xa0//{"firstname":"john","lastname";"Monroe"}\n\xa0OB SET($children;"children";$ref1)\n\xa0$child:=OB Get($children;"children")\n\xa0\xa0//$son = {"firstname":"John","lastname":"Monroe"} (object)\n\xa0$childName:=OB Get($child;"lastname")\n\xa0\xa0//$childName = "Monroe" (text)\n\xa0\xa0//o\n\xa0$childName:=OB Get(OB Get($children;"children");"lastname")\n\xa0\xa0// $childName = "Monroe" (text)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-7",children:"Exemplo 7"}),"\n",(0,a.jsx)(n.p,{children:"Recupera\xe7\xe3o em 4D de uma hora armazenada em um objeto:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $obj_o : Object\n\xa0var $set_h;$get_h : Time\n\xa0\n\xa0$set_h:=?01:00:00?+1\n\xa0OB SET($obj_o;"myHour";$set_h)\n\xa0\xa0// $obj_o = {"myHour":3601}\n\xa0\xa0// A hora \xe9 armazenada em segundos\n\xa0$get_h:=OB Get($obj_o;"myHour";Is time)\n\xa0\xa0// $get_h = ?01:00:01?\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-8",children:"Exemplo 8"}),"\n",(0,a.jsx)(n.p,{children:"Exemplos de manipula\xe7\xe3o de campos objeto 4D:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Definir um valor\n\xa0OB SET([People]Identity_OB;"First name";$firstName)\n\xa0OB SET([People]Identity_OB;"Last name";$lastName)\n\xa0\n\xa0\xa0// Obter um valor\n\xa0$firstName:=OB Get([People]Identity_OB;"First name")\n\xa0$lastName:=OB Get([People]Identity_OB;"Last name")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-9",children:"Exemplo 9"}),"\n",(0,a.jsx)(n.p,{children:"Em um m\xe9todo formul\xe1rio, pode escrever:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0If(FORM Event=On Validate)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Last edition by";Current user)\n\xa0\xa0\xa0\xa0OB SET([MyDocuments]My4DWP;"myatt_Category";"Memo")\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.p,{children:"Tamb\xe9m pode ler os atributos personalizados dos documentos:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0vAttrib:=OB Get([MyDocuments]My4DWP;"myatt_Last edition by")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"exemplo-10",children:"Exemplo 10"}),"\n",(0,a.jsx)(n.p,{children:"Se quiser conhecer o tamanho de uma imagem armazenada em um atributo objeto:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $vSize : Integer\n\xa0$vSize:=Picture size(OB Get($object;"photo";Is picture))\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," se atribuir o resultado do comando a uma vari\xe1vel imagem, a constante Is picture n\xe3o \xe9 necess\xe1ria. Exemplo:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $vPict : Picture\n\xa0$vPict:=OB Get($object;"photo")\xa0//"is picture" \xe9 in\xfatil neste caso\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/pt/commands/ob-copy",children:"OB Copy"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/pt/commands/ob-set",children:"OB SET"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"Tipos de campos e vari\xe1veis"})]}),"\n",(0,a.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero do comando"}),(0,a.jsx)(n.td,{children:"1224"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread-seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return s}});var o=r(667294);let a={},d=o.createContext(a);function s(e){let n=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),o.createElement(d.Provider,{value:n},e.children)}}}]);