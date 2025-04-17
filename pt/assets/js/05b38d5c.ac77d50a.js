"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66014"],{427494:function(e,o,n){n.r(o),n.d(o,{default:()=>p,frontMatter:()=>t,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/ob-copy","title":"OB Copy","description":"OB Copy ( objeto {; resolvePont | {; op\xe7\xe3o {; groupWith}}} )  : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/ob-copy.md","sourceDirName":"commands-legacy","slug":"/commands/ob-copy","permalink":"/docs/pt/20-R8/commands/ob-copy","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-copy.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-copy","title":"OB Copy","slug":"/commands/ob-copy","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB Class","permalink":"/docs/pt/20-R8/commands/ob-class"},"next":{"title":"OB Entries","permalink":"/docs/pt/20-R8/commands/ob-entries"}}'),s=n("785893"),a=n("250065");let t={id:"ob-copy",title:"OB Copy",slug:"/commands/ob-copy",displayed_sidebar:"docs"},d=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Exemplo 5",id:"exemplo-5",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"OB Copy"})," ( ",(0,s.jsx)(o.em,{children:"objeto"})," {; resolvePont | {; ",(0,s.jsx)(o.em,{children:"op\xe7\xe3o"})," {; ",(0,s.jsx)(o.em,{children:"groupWith"}),"}}} )  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"objeto"}),(0,s.jsx)(o.td,{children:"Object, Campo Object"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Objeto estruturado"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"resolvePont"}),(0,s.jsx)(o.td,{children:"Boolean"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"True = resolve os ponteiros, False ou se omitido = n\xe3o resolve ponteiros"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"op\xe7\xe3o"}),(0,s.jsx)(o.td,{children:"Integer"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"ck shared: retorna um objeto partilhado, ck resolve pointers: resolve os ponteiros antes de copiar"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"groupWith"}),(0,s.jsx)(o.td,{children:"Collection, Object"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Cole\xe7\xe3o partilhada ou objeto para ser agrupado com o objeto retornado"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Resultado"}),(0,s.jsx)(o.td,{children:"Object"}),(0,s.jsx)(o.td,{children:"\u2190"}),(0,s.jsx)(o.td,{children:"C\xf3pia de objeto"})]})]})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O comando ",(0,s.jsx)(o.strong,{children:"OB Copy"})," devolve um objeto que cont\xe9m uma c\xf3pia completa das propriedades, sub objetos e valores de ",(0,s.jsx)(o.em,{children:"objeto"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Se o ",(0,s.jsx)(o.em,{children:"objeto"})," conter valores de tipo de ponteiro, por padr\xe3o a c\xf3pia tamb\xe9m cont\xe9m os ponteiros. No entanto, pode resolver os ponteiros ao momento da c\xf3pia passando ",(0,s.jsx)(o.strong,{children:"True"})," no par\xe2metro ",(0,s.jsx)(o.em,{children:"resolvePont"}),". Neste caso, cada ponteiro presente como valor em objeto se avalia ao momento da c\xf3pia e utiliza seu valor n\xe3o referenciado."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota:"})," se propriedades de ",(0,s.jsx)(o.em,{children:"objeto"})," s\xe3o objetos compartilhados ou cole\xe7\xf5es compartilhadas, eles se tornam objetos ou cole\xe7\xf5es padr\xe3o (n\xe3o compartilhados) na c\xf3pia retornada. Use a segunda sintaxe se quiser retornar elementos partilhados (ver abaixo)"]}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:["Segunda sintaxe: ",(0,s.jsx)(o.strong,{children:"OB Copy(object{; option{; groupWith}})"})]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["Se passado, o par\xe2metro ",(0,s.jsx)(o.em,{children:"op\xe7\xe3o"})," pode conter uma das constantes abaixo (ou ambas):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:(0,s.jsx)(o.strong,{children:"op\xe7\xe3o"})}),(0,s.jsx)(o.th,{children:(0,s.jsx)(o.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"ck resolve pointers"}),(0,s.jsx)(o.td,{children:"se o objeto original conter valores de tipo ponteiro, como padr\xe3o a c\xf3pia tamb\xe9m cont\xe9m os ponteiros. Entretanto, pode resolver os ponteiros quando copiar (passando ck resolve pointers. Neste caso, cada ponteiro presente no objeto \xe9 avaliado quando copiar e seu valor sem refer\xeancia for usado."})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"ck shared"}),(0,s.jsxs)(o.td,{children:["como padr\xe3o ",(0,s.jsx)(o.strong,{children:"OB Copy"})," retorna um objeto normal (n\xe3o partilhado), mesmo se o comando for aplicado para um objeto partiilhado. Passe a constante ck shared para criar um objeto partilhado. Nesse caso, pode usar o par\xe2metro ",(0,s.jsx)(o.em,{children:"groupWith"})," para associar o objeto partilhado com outra cole\xe7\xe3o ou objeto (ver abaixo)."]})]})]})]}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro ",(0,s.jsx)(o.em,{children:"groupWith"})," permite que determine uma cole\xe7\xe3o ou um objeto com o qual o objteo resultante deveria ser associado."]}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.strong,{children:"Notas:"})}),"\n",(0,s.jsxs)(o.ul,{children:["\n",(0,s.jsxs)(o.li,{children:[(0,s.jsx)(o.strong,{children:"OB Copy"})," pode ser usado com um objeto de sele\xe7\xe3o de entidades. De forma predeterminada, se omitir ck shared, se devolve uma selecci\xf3n de entidades ",(0,s.jsx)(o.em,{children:"n\xe3o compartida"}),". Se passar ck shared, se devolve uma sele\xe7\xe3o de entidades compartida. Neste contexto, a op\xe7\xe3o ",(0,s.jsx)(o.em,{children:"agruparCom"})," \xe9 in\xfatil j\xe1 que uma sele\xe7\xe3o de entidades n\xe3o tem um ",(0,s.jsx)(o.em,{children:"identificador de bloqueio"}),"."]}),"\n",(0,s.jsxs)(o.li,{children:["O mesmo principio se aplica \xe0s sele\xe7\xf5es de entidades armazenadas dentro das propriedades de ",(0,s.jsx)(o.em,{children:"objeto"}),". Entretanto, o comando se otimiza quando se passa ck shared e uma sele\xe7\xe3o de entidades aninhada \xe9 ",(0,s.jsx)(o.em,{children:"compa\xedvel"}),": a mesma refer\xeancia de sele\xe7\xe3o de entidades se devolve no objeto resultante."]}),"\n",(0,s.jsxs)(o.li,{children:["Os objetos almaz\xe9m de dados, a classe de dados e entidade n\xe3o podem ser copiados. Se chamar ao comando ",(0,s.jsx)(o.strong,{children:"OB Copy"})," com eles, se devolve um valor Null."]}),"\n"]}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(o.p,{children:"Voc\xea quer duplicar um objeto que cont\xe9m valores simples:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $Object : Object\n\xa0var $JsonString : Text\n\xa0\n\xa0ARRAY OBJECT($arraySel;0)\n\xa0ALL RECORDS([Product])\n\xa0While(Not(End selection([Product])))\n\xa0\xa0\xa0\xa0OB SET($Object;"id";[Product]ID_Product)\n\xa0\xa0\xa0\xa0OB SET($Object;"Product Name";[Product]Product_Name)\n\xa0\xa0\xa0\xa0OB SET($Object;"Price";[Product]Price)\n\xa0\xa0\xa0\xa0OB SET($Object;"Tax rate";[Product]Tax_rate)\n\xa0\xa0\xa0\xa0$ref_value:=OB Copy($Object)\xa0//direct copy\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($arraySel;$ref_value)\n\xa0\xa0//o conte\xfado de $ref_value \xe9 id\xeantico ao do $Object\n\xa0\xa0\xa0\xa0NEXT RECORD([Product])\n\xa0End while\n\xa0\xa0//o conte\xfado de $ref_value\n\xa0$JsonString:=JSON Stringify array($arraySel)\n'})}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(o.p,{children:"Duplique um objeto que contenha ponteiros:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0\n\xa0OB SET($ref;"name";->[Company]name)\xa0//object with pointers\n\xa0OB SET($ref;"country";->[Company]country)\n\xa0ARRAY OBJECT($sel;0)\n\xa0ARRAY OBJECT($sel2;0)\n\xa0\n\xa0ALL RECORDS([Company])\n\xa0\n\xa0While(Not(End selection([Company])))\n\xa0\xa0\xa0\xa0$ref_comp:=OB Copy($ref)\xa0// copy without evaluating pointers\n\xa0\xa0// $ref_comp={"name":"->[Company]name","country":"->[Company]Country"}\n\xa0\xa0\xa0\xa0$ref_comp2:=OB Copy($ref;True)\xa0//copy with evaluation of pointers\n\xa0\xa0// $ref_comp={"name":"4D SAS","country":"France"}\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($sel;$ref_comp)\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($sel2;$ref_comp2)\n\xa0\xa0\xa0\xa0NEXT RECORD([Company])\n\xa0End while\n\xa0\n\xa0$Object:=JSON Stringify array($sel)\n\xa0$Object2:=JSON Stringify array($sel2)\n\xa0\n\xa0\xa0// $Object = [{"name":"","country":""},{"name":"","country":""},...]\n\xa0\xa0// $Object2 = [{"name":"4D SAS","country":"France"},{"name":"4D, Inc","country":"USA"},{"name":"Catalan","country":"France"}...]\n'})}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsxs)(o.p,{children:["Para copiar o objeto normal (n\xe3o compartilhado) ",(0,s.jsx)(o.em,{children:"$person"})," no objeto partilhado ",(0,s.jsx)(o.em,{children:"$sharedObject"}),", precisamos criar uma c\xf3pia partilhada do objeto (",(0,s.jsx)(o.em,{children:"$sharedObject"}),")."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $person;$copy;$sharedObject : Object\n\xa0var $text : Text\n\xa0\n\xa0$text:=Document to text(Get 4D folder(Current resources folder)+"person.txt")\n\xa0$person:=JSON Parse($text)\xa0//$person \xe9 um objeto padr\xe3o\n\xa0$sharedObject:=New shared object()\n\xa0$copy:=OB Copy($person;ck shared)\xa0//$copy \xe9 um objeto padr\xe3o\n\xa0\n\xa0\xa0//assim pode ser copiado em\xa0 $sharedObject\n\xa0Use($sharedObject)\n\xa0\xa0\xa0\xa0$sharedObject.person:=$copy\n\xa0End use\n'})}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.em,{children:"$obj"}),' cont\xe9m um ponteiro (propriedade "name") no registro atual do campo "name".']}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $obj;$objWithPtr;$sharedObjWithPtr : Object\n\xa0$obj:=New object()\n\xa0\n\xa0\xa0//$obj \xe9 um objeto com um ponteiro\n\xa0OB SET($obj;"name";->[Persons]name)\n\xa0\n\xa0ALL RECORDS([Persons])\n\xa0\xa0//Agora h\xe1 um registro atual na tabela [Persons] de forma que [Persons]name \xe9 preenchido\n\xa0\xa0//\n\xa0\xa0// Se quisermos copiar $obj como um objeto padr\xe3o com avalia\xe7\xe3o de ponteiros\n\xa0\xa0// fazemos isto:\n\xa0$objWithPtr:=OB Copy($obj;True)\n\xa0\xa0//\n\xa0\xa0// Se quisermos copiar $obj como um objeto compartilhado com avalia\xe7\xe3o de ponteiros\n\xa0\xa0// fazemos isto:\n\xa0$sharedObjWithPtr:=OB Copy($obj;ck resolve pointers+ck shared)\n'})}),"\n",(0,s.jsx)(o.h2,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,s.jsxs)(o.p,{children:["Imagine que queira copiar ",(0,s.jsx)(o.em,{children:"$sharedObj"})," em ",(0,s.jsx)(o.em,{children:"$sharedCol mas"})," como eles pertencem a grupos compartilhados diferentes, uma c\xf3pia direta resultaria em um erro. Primeiro deve copiar ",(0,s.jsx)(o.em,{children:"$sharedObj"})," e designar ",(0,s.jsx)(o.em,{children:"$sharedColl como um grupo compartilhado para a c\xf3pia"}),"."]}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:'\xa0var $sharedObj;$objCopy : Object\n\xa0var $sharedColl : Collection\n\xa0\n\xa0\xa0//$sharedObj pertence a um grupo compartilhado\n\xa0$sharedObj:=New shared object("lastname";"Smith";"address";New shared object("city";"New York"))\n\xa0\xa0//$sharedColl pertence a outro grupo partilhado\n\xa0$sharedColl:=New shared collection(New shared object("lastname";"Brown"))\n\xa0\n\xa0$objCopy:=OB Copy($sharedObj;ck shared;$sharedColl)\n\xa0\xa0//$objCopy agora est\xe1 no mesmo grupo partilhado que\xa0 $sharedColl\n\xa0\n\xa0\xa0//assim $objCopy pode ser copiado em\xa0 $sharedColl sem erros\n\xa0Use($sharedColl)\n\xa0\xa0\xa0\xa0$sharedColl.push($objCopy)\n\xa0End use\n'})}),"\n",(0,s.jsx)(o.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/20-R8/commands/ob-get",children:"OB Get"}),(0,s.jsx)(o.br,{}),"\n",(0,s.jsx)(o.em,{children:"Objetos compartidos e Cole\xe7\xf5es compartidas"})]}),"\n",(0,s.jsx)(o.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"1225"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function p(e={}){let{wrapper:o}={...(0,a.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return d},a:function(){return t}});var r=n(667294);let s={},a=r.createContext(s);function t(e){let o=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(a.Provider,{value:o},e.children)}}}]);