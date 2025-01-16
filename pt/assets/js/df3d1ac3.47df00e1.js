"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23121"],{816592:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/json-parse","title":"JSON Parse","description":"JSON Parse ( cadeiaJSON {; tipo}{; *} ) : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/json-parse.md","sourceDirName":"commands-legacy","slug":"/commands/json-parse","permalink":"/docs/pt/commands/json-parse","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-parse.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"json-parse","title":"JSON Parse","slug":"/commands/json-parse","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON","permalink":"/docs/pt/category/json"},"next":{"title":"JSON PARSE ARRAY","permalink":"/docs/pt/commands/json-parse-array"}}'),r=o("785893"),a=o("250065");let d={id:"json-parse",title:"JSON Parse",slug:"/commands/json-parse",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Exemplo 5",id:"exemplo-5",level:4},{value:"Exemplo 6",id:"exemplo-6",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Parse"})," ( ",(0,r.jsx)(n.em,{children:"cadeiaJSON"})," {; ",(0,r.jsx)(n.em,{children:"tipo"}),"}{; *} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"cadeiaJSON"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Cadeia em JSON a analisar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tipo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo no qual converter os valores"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operador"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Adiciona uma posi\xe7\xe3o de linha e offset de cada propriedade se o valor retornado for um objeto"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"any, Object"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valores extra\xeddos da cadeia JSON"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando ",(0,r.jsx)(n.strong,{children:"JSON Parse"})," analisa o conte\xfado de uma cadeia com formato JSON e extraem os valores que podem armazenar em um campo ou vari\xe1vel 4D. Este comando n\xe3o realiza os dados JSON, realiza a a\xe7\xe3o inversa do comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/json-stringify",children:"JSON Stringify"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Em ",(0,r.jsx)(n.em,{children:"cadeiaJSON"}),", passe a cadeia com formato JSON cujo conte\xfado deseja analisar. Esta cadeia deve ter o formato correto, caso contr\xe1rio \xe9 gerado um erro de an\xe1lise."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": Se utilizar ponteiros, deve chamar ao comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/json-stringify",children:"JSON Stringify"})," antes de chamar a ",(0,r.jsx)(n.strong,{children:"JSON Parse"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Por padr\xe3o, se omitir o par\xe2metro ",(0,r.jsx)(n.em,{children:"tipo"}),", 4D tentar\xe1 converter o valor obtido no tipo da vari\xe1vel ou do campo que se utiliza para armazenar os resultados (se foi definido). Caso contr\xe1rio, 4D tenta deduzir seu tipo. Tamb\xe9m pode for\xe7ar a interpreta\xe7\xe3o do tipo passando o par\xe2metro ",(0,r.jsx)(n.em,{children:"tipo"}),": passe uma das seguintes constantes, dispon\xedveis no tema ",(0,r.jsx)(n.em,{children:"Tipos de campos e vari\xe1veis"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is collection"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is object"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Notas"}),":"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Os valores de tipo Real devem ser inclu\xeddos na classifica\xe7\xe3o \xb1 10.421e\xb110"}),"\n",(0,r.jsx)(n.li,{children:"Nos valores de tipo de texto, todos os caracteres especiais devem ser evadidos, incluindo as aspas (ver exemplos)"}),"\n",(0,r.jsx)(n.li,{children:'Como padr\xe3o quando usa a constante Is date, o comando considera que uma string de dados cont\xe9m uma hora local e n\xe3o GMT. Pode moficar essa configura\xe7\xe3o usando o seletor Dates inside objects ou o comando [#cmd id="642"/].'}),"\n",(0,r.jsxs)(n.li,{children:['A partir de 4D v16 R6, se a configura\xe7\xe3o de armazenamento de dados atual for "date type", strings de data JSOn em formato "AAAA-MM-DD" s\xe3o retornadas automaticamente como valores de data pelo comando ',(0,r.jsx)(n.strong,{children:"JSON Parse"}),'. Para saber mais sobre essa configura\xe7\xe3o, vjea a op\xe7\xe3o "Use date type instead of ISO date format in objects" em ',(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidade"}),".."]}),"\n",(0,r.jsx)(n.li,{children:"Valores tipo hora podem ser retornados de n\xfameros em strings. Como padr\xe3o 4D considera o o valor como n\xfamero de segundos."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Se passar o par\xe2metro opcional * e se o par\xe2metro jsonString representar um objeto, o objeto retornado cont\xe9m uma propriedade adicional chamada __symbols que oferece rota, posi\xe7\xe3o de linha e o deslocamento de linha de cada propriedade e sub-propriedade do objeto. Essa informa\xe7\xe3o pode ser \xfatil para debugar. A estrtura das propriedades __symbols \xe9:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"__symbols:{//descri\xe7\xe3o objeto\n\xa0\xa0 myAtt.mySubAtt...:{ //propriedade rota\n\xa0\xa0\xa0\xa0\xa0 line:10, //n\xfamero da linha da propriedade\n\xa0\xa0\xa0\xa0\xa0 offset:35 //deslocamento de linha da propriedade do come\xe7o da linha\n\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0 }\n"})}),"\n",(0,r.jsx)(n.p,{children:"Nota: O par\xe2metro * \xe9 ignorado se o valor retornado n\xe3o for do tipo objeto."}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsx)(n.p,{children:"Exemplos de convers\xf5es simples:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $r : Real\n\xa0$r:=JSON Parse("42.17")\xa0//$r = 42,17 (Real)\n\xa0\n\xa0var $el : Integer\n\xa0$el:=JSON Parse("120.13";Is longint)\xa0//$el=120\n\xa0\n\xa0var $t : Text\n\xa0$t:=JSON Parse("\\"Year 42\\"";Is text)\xa0// $t="Year 42" (text)\n\xa0\n\xa0var $o : Object\n\xa0$o:=JSON Parse("{\\"name\\":\\"jean\\"}")\n\xa0\xa0// $o = {"name":"john"} (4D object)\n\xa0\n\xa0var $b : Boolean\n\xa0$b:=JSON Parse("{\\"manager\\":true}";Is Boolean)\xa0// $b=true\n\xa0\n\xa0var $h : Time\n\xa0$h:=JSON Parse("5120";Is time)\xa0//$h=01:25:20\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Exemplo de convers\xe3o de dados de tipo data:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$test:=JSON Parse("\\"1990-12-25T12:00:00Z\\"")\n\xa0\xa0// $test="1990-12-25T12:00:00Z"\n\xa0var $date;$date2;$date3 : Date\n\xa0$date:=JSON Parse("\\"2008-01-01T12:00:00Z\\"";Is date)\n\xa0\xa0//$date=01/01/08\n\xa0$date2:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date2=14/07/17 (Paris time zone)\n\xa0SET DATABASE PARAMETER(Dates inside objects;String type without time zone)\n\xa0$date3:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date3=13/07/17\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,r.jsx)(n.p,{children:'Se a configura\xe7\xe3o atual de armazenagem de data for "date type", pode escrever:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0var $json : Text\n\xa0var $birthday : Date\n\xa0\n\xa0$json:="{\\"name\\":\\"Marcus\\",\\"birthday\\":\\"2017-10-16\\"}"\n\xa0$o:=JSON Parse($json)\n\xa0$birthday:=$o.birthday\n\xa0\xa0//$birthday=16/10/17\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"}),' Para saber mais sobre essa configura\xe7\xe3o, veja a op\xe7\xe3o "Use date type instead of ISO date format in objects" em ',(0,r.jsx)(n.em,{children:"P\xe1gina Compatibilidade"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,r.jsxs)(n.p,{children:["Este exemplo mostra o uso combinado dos comandos ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/json-stringify",children:"JSON Stringify"})," e ",(0,r.jsx)(n.strong,{children:"JSON Parse"}),":"]}),"\n",(0,r.jsxs)(n.p,{children:["#code4D]C_TEXT($JSONContact)",(0,r.jsx)(n.br,{}),"\nC_OBJECT($Contact;$Contact2)",(0,r.jsx)(n.br,{}),'\n$Contact:=New object("name";"Monroe";"firstname";"Alan")']}),"\n",(0,r.jsxs)(n.p,{children:["// JSON Stringify: convers\xe3o de um objeto em uma string JSON",(0,r.jsx)(n.br,{}),"\n$JSONContact:=JSON Stringify($Contact)"]}),"\n",(0,r.jsxs)(n.p,{children:["// JSON Parse: convers\xe3o de string JSON em um novo objeto",(0,r.jsx)(n.br,{}),"\n$Contact2:=JSON Parse($JSONContact)[#/code4D]"]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser criar uma cole\xe7\xe3o 4D de um array JSON:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $myCol : Collection\n\xa0$myCol:=JSON Parse("[\\"Monday\\",10,\\"Tuesday\\",11,\\"Wednesday\\",12,false]")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"exemplo-6",children:"Exemplo 6"}),"\n",(0,r.jsx)(n.p,{children:"Se quiser analisar a string abaixo e obter a posi\xe7\xe3o de linha e deslocamento de linha de cada propriedade:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "alpha": 4552,\n\xa0\xa0\xa0 "beta": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 45,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delta": "text1" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 52,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "golf": "text2" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"Pode escrever:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $obInfo : Object\n\xa0$obInfo=JSON Parse("json_string";Is object;*)\xa0//* para obter a propriedade\xa0 __symbols\n\xa0\xa0//no objeto\xa0 $obInfo retornado\n'})}),"\n",(0,r.jsxs)(n.p,{children:["O objeto ",(0,r.jsx)(n.em,{children:"$obInfo"})," cont\xe9m:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{alpha:4552,\nbeta:[{echo:45,delta:text1},{echo:52,golf:text2}],\n__symbols:{alpha:{line:2,offset:4},\nbeta:{line:3,offset:4},\nbeta[0].echo:{line:5,offset:12},\nbeta[0].delta:{line:6,offset:12},\nbeta[1].echo:{line:9,offset:12},\nbeta[1].golf:{line:10,offset:12}}}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/json-parse-array",children:"JSON PARSE ARRAY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/json-stringify",children:"JSON Stringify"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/json-validate",children:"JSON Validate"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"Tipos de campos e vari\xe1veis"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1218"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return t},a:function(){return d}});var s=o(667294);let r={},a=s.createContext(r);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);