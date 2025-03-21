"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12726"],{717475:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/ob-get-property-names","title":"OB GET PROPERTY NAMES","description":"OB GET PROPERTY NAMES ( object ; arrProperties {; arrTypes} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/ob-get-property-names.md","sourceDirName":"commands-legacy","slug":"/commands/ob-get-property-names","permalink":"/docs/commands/ob-get-property-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fob-get-property-names.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"ob-get-property-names","title":"OB GET PROPERTY NAMES","slug":"/commands/ob-get-property-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OB GET ARRAY","permalink":"/docs/commands/ob-get-array"},"next":{"title":"OB Get type","permalink":"/docs/commands/ob-get-type"}}'),t=r("785893"),a=r("250065");let d={id:"ob-get-property-names",title:"OB GET PROPERTY NAMES",slug:"/commands/ob-get-property-names",displayed_sidebar:"docs"},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"OB GET PROPERTY NAMES"})," ( ",(0,t.jsx)(n.em,{children:"object"})," ; ",(0,t.jsx)(n.em,{children:"arrProperties"})," {; ",(0,t.jsx)(n.em,{children:"arrTypes"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Structured object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrProperties"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Property names"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrTypes"}),(0,t.jsx)(n.td,{children:"Array integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Property types"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"OB GET PROPERTY NAMES"})," command returns, in ",(0,t.jsx)(n.em,{children:"arrProperties"}),", the names of the properties contained in the language object designated by the ",(0,t.jsx)(n.em,{children:"object"})," parameter.can be an object varialble or a 4D object field."]}),"\n",(0,t.jsxs)(n.p,{children:["Pass a text array in the ",(0,t.jsx)(n.em,{children:"arrProperties"})," parameter. If the array does not exist, the command creates and sizes it automatically."]}),"\n",(0,t.jsxs)(n.p,{children:["Optionally, you can also pass a longint array in ",(0,t.jsx)(n.em,{children:"arrTypes"}),". For each element of ",(0,t.jsx)(n.em,{children:"arrProperties"}),", the command returns, in ",(0,t.jsx)(n.em,{children:"arrTypes"}),', the type of value stored in the property. You can compare the values received with the following constants, found in the "',(0,t.jsx)(n.em,{children:"Field and Variable Types"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Value"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is Boolean"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"6"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is collection"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"42"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is null"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"255"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is object"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"38"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is real"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"1"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Is text"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"2"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Object array"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"39"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," For array attributes, the command returns Is collection."]}),"\n",(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"You want to test that an object is not empty:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT(arrNames;0)\n\xa0ARRAY LONGINT(arrTypes;0)\n\xa0var $ref_richard : Object\n\xa0OB SET($ref_richard;"name";"Richard";"age";7)\n\xa0OB GET PROPERTY NAMES($ref_richard;arrNames;arrTypes)\n\xa0\xa0// arrNames{1}="name", arrNames{2}="age"\n\xa0\xa0// arrTypes{1}=2, arrTypes{2}=1\n\xa0If(Size of array(arrNames)#0)\n\xa0\xa0// ...\n\xa0End if\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"Using an object array element:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0var $Children;$ref_richard;$ref_susan;$ref_james : Object\n\xa0ARRAY OBJECT($arrayChildren;0)\n\xa0\n\xa0OB SET($ref_richard;"name";"Richard";"age";7)\n\xa0APPEND TO ARRAY($arrayChildren;$ref_richard)\n\xa0OB SET($ref_susan;"name";"Susan";"age";4;"girl";True)\xa0//additional attribute\n\xa0APPEND TO ARRAY($arrayChildren;$ref_susan)\n\xa0OB SET($ref_james;"name";"James")\n\xa0OB SET NULL($ref_james;"age")\xa0//null attribute\n\xa0APPEND TO ARRAY($arrayChildren;$ref_james)\n\xa0\n\xa0OB GET PROPERTY NAMES($arrayChildren{1};$arrNames;$arrTypes)\n\xa0\xa0// $arrayChildren{1} = {"name":"Richard","age":7}\n\xa0\xa0// $arrNames{1}="name"\n\xa0\xa0// $arrNames{2}="age"\n\xa0\xa0// $arrTypes{1}=2\n\xa0\xa0// $arrTypes{2}=1\n\xa0\n\xa0OB GET PROPERTY NAMES($arrayChildren{2};$arrNames;$arrTypes)\n\xa0\xa0// $arrayChildren{3} = {"name":"Susan","age":4,"girl":true}\n\xa0\xa0// $arrNames{1}="name"\n\xa0\xa0// $arrNames{2}="age"\n\xa0\xa0// $arrNames{3}="girl"\n\xa0\xa0// $arrTypes{1}=2\n\xa0\xa0// $arrTypes{2}=1\n\xa0\xa0// $arrTypes{3}=6\n\xa0\n\xa0OB GET PROPERTY NAMES($arrayChildren{3};$arrNames;$arrTypes)\n\xa0\xa0// $arrayChildren{3} = {"name":"James","age":null}\n\xa0\xa0// $arrNames{1}="name"\n\xa0\xa0// $arrNames{2}="age"\n\xa0\xa0// $arrTypes{1}=2\n\xa0\xa0// $arrTypes{2}=255\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/ob-get-type",children:"OB Get type"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/ob-set-null",children:"OB SET NULL"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1232"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let t={},a=s.createContext(t);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);