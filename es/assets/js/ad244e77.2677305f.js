"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91813"],{201183:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>o,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>t});var a=JSON.parse('{"id":"commands-legacy/json-stringify-array","title":"JSON Stringify array","description":"JSON Stringify array ( array {; *} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/json-stringify-array.md","sourceDirName":"commands-legacy","slug":"/commands/json-stringify-array","permalink":"/docs/es/commands/json-stringify-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-stringify-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-stringify-array","title":"JSON Stringify array","slug":"/commands/json-stringify-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON Stringify","permalink":"/docs/es/commands/json-stringify"},"next":{"title":"JSON TO SELECTION","permalink":"/docs/es/commands/json-to-selection"}}'),s=r("785893"),i=r("250065");let t={id:"json-stringify-array",title:"JSON Stringify array",slug:"/commands/json-stringify-array",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"JSON Stringify array"})," ( ",(0,s.jsx)(n.em,{children:"array"})," {; *} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Text array, Real array, Boolean array, Pointer array, Object array"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array cuyo contenido debe ser serializado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Mejorar el formato"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Cadena que contiene el array JSON serializado"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"JSON Stringify array"})," convierte el array ",(0,s.jsx)(n.em,{children:"array"})," 4D en un array JSON serializado. Este comando realiza la acci\xf3n inversa del comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/json-parse-array",children:"JSON PARSE ARRAY"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"array"}),", pase un array 4D con los datos a serializar. Este array puede ser de tipo de texto, real, booleano, puntero u objeto."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si pasa una variable escalar o un campo en ",(0,s.jsx)(n.em,{children:"array"}),', el comando devolver\xe1 simplemente el valor del par\xe1metro entre "[ ]".']}),"\n",(0,s.jsxs)(n.p,{children:["Puede pasar el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"})," para utilizar los caracteres de formato en la cadena resultante. Esta opci\xf3n mejora la presentaci\xf3n de los datos JSON cuando se muestran en una p\xe1gina web (",(0,s.jsx)(n.em,{children:"pretty formatting"}),")."]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"Conversi\xf3n de un array texto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $jsonString : Text\n\xa0ARRAY TEXT($ArrayFirstname;2)\n\xa0$ArrayFirstname{1}:="John"\n\xa0$ArrayFirstname{2}:="Jim"\n\xa0$jsonString :=JSON Stringify array($ArrayFirstname)\n\xa0\n\xa0\xa0// $jsonString = "["John","Jim"]"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"Conversi\xf3n de un array texto que contiene n\xfameros:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($phoneNumbers;0)\n\xa0APPEND TO ARRAY($phoneNumbers ;"555-0100")\n\xa0APPEND TO ARRAY($phoneNumbers ;"555-0120")\n\xa0$string :=JSON Stringify array($phoneNumbers)\n\xa0\xa0// $string = "["555-0100","555-0120"]"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"Conversi\xf3n de un array objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref_john : Object\n\xa0var $ref_jim : Object\n\xa0ARRAY OBJECT($myArray;0)\n\xa0OB SET($ref_john;"name";"John";"age";35)\n\xa0OB SET($ref_jim;"name";"Jim";"age";40)\n\xa0APPEND TO ARRAY($myArray ;$ref_john)\n\xa0APPEND TO ARRAY($myArray ;$ref_jim)\n\xa0$JsonString :=JSON Stringify array($myArray)\n\xa0\xa0// $JsonString = "[{"name":"John","age":35},{"name":"Jim","age":40}]"\n\xa0\n\xa0\xa0// Si desea visualizar el resultado en una p\xe1gina web,\n\xa0\xa0// pase el par\xe1metro opcional *:\n\xa0$JsonStringPretty :=JSON Stringify array($myArray;*)\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(17808).Z+"",width:"153",height:"149"})}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"Conversi\xf3n de una selecci\xf3n 4D en un array objeto:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $jsonObject : Object\n\xa0var $jsonString : Text\n\xa0\n\xa0QUERY([Company];[Company]Company Name="a@")\n\xa0OB SET($jsonObject;"company name";->[Company]Company Name)\n\xa0OB SET($jsonObject;"city";->[Company]City)\n\xa0OB SET($jsonObject;"date";[Company]Date_input)\n\xa0OB SET($jsonObject;"time";[Company]Time_input)\n\xa0ARRAY OBJECT($arraySel;0)\n\xa0\n\xa0While(Not(End selection([Company])))\n\xa0\xa0\xa0\xa0$ref_value:=OB Copy($jsonObject;True)\n\xa0\xa0// Si no los copia, los valores ser\xe1n cadenas vac\xedas\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($arraySel;$ref_value)\n\xa0\xa0// Cada elemento contiene los valores seleccionados, por ejemplo:\n\xa0\xa0// $arraySel{1} = // {"company name":"APPLE","time":43200000,"city":\n\xa0\xa0// "Paris","date":"2012-08-02T00:00:00Z"}\n\xa0\xa0\xa0\xa0NEXT RECORD([Company])\n\xa0End while\n\xa0\n\xa0$jsonString:=JSON Stringify array($arraySel)\n\xa0\xa0// $jsonString = "[{"company name":"APPLE","time":43200000,"city":\n\xa0\xa0//"Paris","date":"2012-08-02T00:00:00Z"},{"company name":\n\xa0\xa0//"ALMANZA",...}]"\n'})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/json-parse-array",children:"JSON PARSE ARRAY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/json-stringify",children:"JSON Stringify"})]}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1228"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},17808:function(e,n,r){r.d(n,{Z:function(){return a}});let a="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return t}});var a=r(667294);let s={},i=a.createContext(s);function t(e){let n=a.useContext(i);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);