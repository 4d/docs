"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31225"],{230783:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/json-parse","title":"JSON Parse","description":"JSON Parse ( jsonString {; type}{; *} ) : any","source":"@site/versioned_docs/version-20-R7/commands-legacy/json-parse.md","sourceDirName":"commands-legacy","slug":"/commands/json-parse","permalink":"/docs/commands/json-parse","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-parse.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-parse","title":"JSON Parse","slug":"/commands/json-parse","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON","permalink":"/docs/category/json"},"next":{"title":"JSON PARSE ARRAY","permalink":"/docs/commands/json-parse-array"}}'),r=t("785893"),a=t("250065");let i={id:"json-parse",title:"JSON Parse",slug:"/commands/json-parse",displayed_sidebar:"docs"},d=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Example 5",id:"example-5",level:4},{value:"Example 6",id:"example-6",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"JSON Parse"})," ( ",(0,r.jsx)(n.em,{children:"jsonString"})," {; ",(0,r.jsx)(n.em,{children:"type"}),"}{; *} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"jsonText"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"JSON string to parse"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"type"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Type in which to convert the values"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Adds line position and offset of each property if returned value is an object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Values extracted from JSON string"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"JSON Parse"})," command parses the contents of a JSON-formatted string and extracts values that you can store in a 4D field or variable. This command deserializes JSON data; it performs the opposite action of the ",(0,r.jsx)(n.a,{href:"/docs/commands/json-stringify",children:"JSON Stringify"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"jsonString"}),", pass the JSON-formatted string whose contents you want to parse. This string must be formatted correctly, otherwise a parsing error is generated. ",(0,r.jsx)(n.strong,{children:"JSON Parse"})," can therefore be used to validate JSON strings."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If you use pointers, you must call the ",(0,r.jsx)(n.a,{href:"/docs/commands/json-stringify",children:"JSON Stringify"})," command before calling ",(0,r.jsx)(n.strong,{children:"JSON Parse"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["By default, if you omit the ",(0,r.jsx)(n.em,{children:"type"})," parameter, 4D attempts to convert the value obtained into the type of the variable or field used to store the results (if one is defined). Otherwise, 4D attempts to infer its type. You can also force the type interpretation by passing the ",(0,r.jsx)(n.em,{children:"type"})," parameter: pass one of the following constants, available in the ",(0,r.jsx)(n.em,{children:"Field and Variable Types"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is collection"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is object"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Real type values must be included in the range \xb110.421e\xb110"}),"\n",(0,r.jsx)(n.li,{children:"In text type values, all special characters must be escaped, including quotes (see examples)"}),"\n",(0,r.jsxs)(n.li,{children:["By default when you use the Is date constant, the command considers that a date string contains a local time and not GMT. You can modify this setting using the Dates inside objects selector of the ",(0,r.jsx)(n.a,{href:"/docs/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command."]}),"\n",(0,r.jsxs)(n.li,{children:['Starting with 4D v16 R6, if the current date storage setting is "date type", JSON date strings in "YYYY-MM-DD" format are automatically returned as date values by the ',(0,r.jsx)(n.strong,{children:"JSON Parse"}),' command. For more information on this setting, please refer to the "Use date type instead of ISO date format in objects" option in the ',(0,r.jsx)(n.em,{children:"Compatibility page"}),"."]}),"\n",(0,r.jsx)(n.li,{children:"Time type values can be returned from numbers in strings. By default, the parsed value is considered a number of seconds."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the ",(0,r.jsx)(n.em,{children:"*"})," optional parameter and if the ",(0,r.jsx)(n.em,{children:"jsonString"})," parameter represents an object, the returned object contains an additional property named ",(0,r.jsx)(n.em,{children:"__symbols"})," that provides path, line position, and line offset of each property and sub-property of the object. This information can be useful for debugging purposes. The structure of the ",(0,r.jsx)(n.em,{children:"__symbols"})," property is:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"__symbols:{//object description\n\xa0\xa0 myAtt.mySubAtt...:{ //property path\n\xa0\xa0\xa0\xa0\xa0 line:10, //line number of the property \n\xa0\xa0\xa0\xa0\xa0 offset:35 //offset of the property from the beginning of the line\n\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0 }\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The ",(0,r.jsx)(n.em,{children:"*"})," parameter is ignored if the returned value is not of the object ",(0,r.jsx)(n.em,{children:"type"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Examples of simple conversions:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $r : Real\n\xa0$r:=JSON Parse("42.17")\xa0//$r = 42,17 (Real)\n\xa0\n\xa0var $el : Integer\n\xa0$el:=JSON Parse("120.13";Is longint)\xa0//$el=120\n\xa0\n\xa0var $t : Text\n\xa0$t:=JSON Parse("\\"Year 42\\"";Is text)\xa0// $t="Year 42" (text)\n\xa0\n\xa0var $o : Object\n\xa0$o:=JSON Parse("{\\"name\\":\\"john\\"}")\n\xa0\xa0// $o = {"name":"john"} (4D object)\n\xa0\n\xa0var $b : Boolean\n\xa0$b:=JSON Parse("{\\"manager\\":true}";Is Boolean)\xa0// $b=true\n\xa0\n\xa0var $h : Time\n\xa0$h:=JSON Parse("5120";Is time)\xa0//$h=01:25:20\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"Examples of converting date type data:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$test:=JSON Parse("\\"1990-12-25T12:00:00Z\\"")\n\xa0\xa0// $test="1990-12-25T12:00:00Z"\n\xa0var $date;$date2;$date3 : Date\n\xa0$date:=JSON Parse("\\"2008-01-01T12:00:00Z\\"";Is date)\n\xa0\xa0//$date=01/01/08\n\xa0$date2:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date2=14/07/17 (Paris time zone)\n\xa0SET DATABASE PARAMETER(Dates inside objects;String type without time zone)\n\xa0$date3:=JSON Parse("\\"2017-07-13T23:00:00.000Z\\"";Is date)\n\xa0\xa0//$date3=13/07/17\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,r.jsx)(n.p,{children:'If the current date storage setting is "date type", you can write:'}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0var $json : Text\n\xa0var $birthday : Date\n\xa0\n\xa0$json:="{\\"name\\":\\"Marcus\\",\\"birthday\\":\\"2017-10-16\\"}"\n\xa0$o:=JSON Parse($json)\n\xa0$birthday:=$o.birthday\n\xa0\xa0//$birthday=16/10/17\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"}),' For more information on this setting, please refer to the "Use date type instead of ISO date format in objects" option in the ',(0,r.jsx)(n.em,{children:"Compatibility page"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,r.jsxs)(n.p,{children:["This example shows the combined use of the ",(0,r.jsx)(n.a,{href:"/docs/commands/json-stringify",children:"JSON Stringify"})," and ",(0,r.jsx)(n.strong,{children:"JSON Parse"})," commands:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $JSONContact : Text\n\xa0var $Contact;$Contact2 : Object\n\xa0$Contact:=New object("name";"Monroe";"firstname";"Alan")\n\xa0\n\xa0\xa0// JSON Stringify: conversion of an object into a JSON string\n\xa0$JSONContact:=JSON Stringify($Contact)\n\xa0\n\xa0\xa0// JSON Parse: conversion of JSON string into a new object\n\xa0$Contact2:=JSON Parse($JSONContact)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-5",children:"Example 5"}),"\n",(0,r.jsx)(n.p,{children:"You want to create a 4D collection from a JSON array:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $myCol : Collection\n\xa0$myCol:=JSON Parse("[\\"Monday\\",10,\\"Tuesday\\",11,\\"Wednesday\\",12,false]")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-6",children:"Example 6"}),"\n",(0,r.jsx)(n.p,{children:"You want to parse the following string and get line position and offset of each property:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n\xa0\xa0\xa0 "alpha": 4552,\n\xa0\xa0\xa0 "beta": [\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 45,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "delta": "text1" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 },\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 {\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "echo": 52,\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 "golf": "text2" \n\xa0\xa0\xa0\xa0\xa0\xa0\xa0 }\n\xa0\xa0\xa0 ]\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can write:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $obInfo : Object\n\xa0$obInfo=JSON Parse("json_string";Is object;*)\xa0//* to get the __symbols property\n\xa0\xa0//in the returned $obInfo object\n'})}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"$obInfo"})," object contains:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:"{alpha:4552,\nbeta:[{echo:45,delta:text1},{echo:52,golf:text2}],\n__symbols:{alpha:{line:2,offset:4},\nbeta:{line:3,offset:4},\nbeta[0].echo:{line:5,offset:12},\nbeta[0].delta:{line:6,offset:12},\nbeta[1].echo:{line:9,offset:12},\nbeta[1].golf:{line:10,offset:12}}}\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"Field and Variable Types"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/json-parse-array",children:"JSON PARSE ARRAY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/json-stringify",children:"JSON Stringify"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/json-validate",children:"JSON Validate"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1218"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let r={},a=s.createContext(r);function i(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);