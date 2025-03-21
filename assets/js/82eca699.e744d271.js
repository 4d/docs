"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11613"],{548087:function(e,n,s){s.r(n),s.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/value-type","title":"Value type","description":"Value type ( expression ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/value-type.md","sourceDirName":"commands-legacy","slug":"/commands/value-type","permalink":"/docs/20-R7/commands/value-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvalue-type.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"value-type","title":"Value type","slug":"/commands/value-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Undefined","permalink":"/docs/20-R7/commands/undefined"},"next":{"title":"Licenses","permalink":"/docs/20-R7/commands/theme/Licenses"}}'),r=s("785893"),d=s("250065");let l={id:"value-type",title:"Value type",slug:"/commands/value-type",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Value type"})," ( ",(0,r.jsx)(n.em,{children:"expression"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"expression"}),(0,r.jsx)(n.td,{children:"Expression"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Expression whose resulting value to be tested"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Data type number"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The Value type command returns the type of the value resulting from the evaluation of the ",(0,r.jsx)(n.em,{children:"expression"})," you passed as parameter."]}),"\n",(0,r.jsxs)(n.p,{children:["The command returns a numeric value that can be compared with one of the following constants of the ",(0,r.jsx)(n.em,{children:"Field and Variable Types"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"_o_Is float"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"35"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is BLOB"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"30"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is Boolean"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"6"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is collection"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"42"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is date"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is null"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"255"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is object"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"38"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is picture"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"3"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is pointer"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"23"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is time"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"11"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is undefined"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"5"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Is variant"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"12"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Object array"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"39"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["This command is designed to return the type of a scalar expression, ",(0,r.jsx)(n.em,{children:"i.e."})," the value stored in or returned by the ",(0,r.jsx)(n.em,{children:"expression"})," parameter. In particular, it can be applied to the following 4D expressions:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["object properties (",(0,r.jsx)(n.em,{children:"emp.name"}),"),"]}),"\n",(0,r.jsxs)(n.li,{children:["collection elements (",(0,r.jsx)(n.em,{children:"myCol[5]"}),")."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Numerical object properties are always considered real values:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $o : Object\n\xa0$o:=New object("value";42)\n\xa0$vType:=Value type($o.value)\xa0//$vType=Is real\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Value type"})," can be applied to any valid 4D expression, including fields, variables, and parameters. In this case, unlike the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/type",children:"Type"})," command, ",(0,r.jsx)(n.strong,{children:"Value type"})," returns the ",(0,r.jsx)(n.em,{children:"internal"})," type of the value resulting from the evaluation of ",(0,r.jsx)(n.em,{children:"expression"}),", and not its ",(0,r.jsx)(n.em,{children:"declared"})," type. Since the 4D language converts some value types internally, the ",(0,r.jsx)(n.strong,{children:"Value type"}),' result can differ from the declared type. For example, 4D internally converts the "',(0,r.jsx)(n.em,{children:"Integer 64 bits"}),'" type field values. This provides the following results:']}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0$vType1:=Type([myTable]Long64field)\xa0//$vType=Is integer 64 bits\n\xa0$vType2:=Value type([myTable]Long64field)\xa0//$vType=Is real (in interpreted mode)\n"})}),"\n",(0,r.jsx)(n.p,{children:"Other differences are related to arrays (evaluation of an array returns the current element index) and compiled mode. The following table lists these differences:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Declared type"})}),(0,r.jsxs)(n.th,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/type",children:"Type"})," ",(0,r.jsx)(n.strong,{children:"result"})]}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Value type result (interpreted)"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Value type result (compiled)"})}),(0,r.jsx)(n.th,{children:(0,r.jsx)(n.strong,{children:"Comment"})})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"ARRAY TEXT($t;1)"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"$t contains the current element index, which is a number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Alpha"})," field"]}),(0,r.jsx)(n.td,{children:"Is alpha field"}),(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"Is text"}),(0,r.jsx)(n.td,{children:"4D internally handles all strings as texts"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Integer"})," field"]}),(0,r.jsx)(n.td,{children:"Is integer"}),(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"For optimization reasons, in interpreted mode all numeric values are considered real and..."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Long Integer"})," field"]}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{children:"... in compiled mode, all integer values are considered longint(*)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.em,{children:"Integer 64 bits"})," field"]}),(0,r.jsx)(n.td,{children:"Is integer 64 bits"}),(0,r.jsx)(n.td,{children:"Is real"}),(0,r.jsx)(n.td,{children:"Is longint"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"(*)If you want to write a test for a numeric type value that is valid for both compiled and interpreted modes, you may consider using a code such as:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If(Value type($myValue)=Is longint)|(Value type($myValue)=Is real)\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compatibility Note:"})," Starting with 4D v16 R6, dates are stored in object properties either with date type or as text in ISO date format. For more information, please refer to the Dates inside objects selector of the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command."]}),"\n",(0,r.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"You want to handle the various possible types of an object property value:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Value type($o.value)=Is real)\n\xa0\xa0//handle a numeric value\n\xa0\xa0\xa0\xa0:(Value type($o.value)=Is text)\n\xa0\xa0//handle a text\n\xa0\xa0\xa0\xa0:(Value type($o.value)=Is object)\n\xa0\xa0//handle a sub-object\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0End case\n"})}),"\n",(0,r.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"You want to sum up all numeric values in a collection:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0var $col : Collection\n\xa0var $sum : Real\n\xa0$col:=New collection("Hello";20;"World2";15;50;Current date;True;10)\n\xa0For($i;0;$col.length-1)\xa0//-1 since collections start at 0\n\xa0\xa0\xa0\xa0If(Value type($col[$i])=Is real)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$sum:=$sum+$col[$i]\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n\xa0ALERT(String($sum))\xa0//95\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/ob-get-type",children:"OB Get type"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/type",children:"Type"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1509"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return l}});var t=s(667294);let r={},d=t.createContext(r);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);