"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63513],{722680:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>c});var s=r(474848),t=r(28453);const a={id:"json-parse-array",title:"JSON PARSE ARRAY",slug:"/commands/json-parse-array",displayed_sidebar:"docs"},o=void 0,i={id:"commands-legacy/json-parse-array",title:"JSON PARSE ARRAY",description:"JSON PARSE ARRAY ( jsonString ; array )",source:"@site/versioned_docs/version-20-R7/commands-legacy/json-parse-array.md",sourceDirName:"commands-legacy",slug:"/commands/json-parse-array",permalink:"/docs/commands/json-parse-array",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-parse-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"json-parse-array",title:"JSON PARSE ARRAY",slug:"/commands/json-parse-array",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"JSON Parse",permalink:"/docs/commands/json-parse"},next:{title:"JSON Resolve pointers",permalink:"/docs/commands/json-resolve-pointers"}},d={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"JSON PARSE ARRAY"})," ( ",(0,s.jsx)(n.em,{children:"jsonString"})," ; ",(0,s.jsx)(n.em,{children:"array"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jsonText"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"JSON string to parse"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"array"}),(0,s.jsx)(n.td,{children:"Array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Array containing result from parsing of JSON string"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"JSON PARSE ARRAY"})," command parses the contents of a JSON-formatted string and puts the data extracted into the ",(0,s.jsx)(n.em,{children:"array"})," parameter. This command deserializes the JSON data; it performs the opposite action of the ",(0,s.jsx)(n.a,{href:"/docs/commands/json-stringify-array",children:"JSON Stringify array"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"jsonString"}),", pass the JSON-formatted string whose contents you want to parse. This string must be formatted correctly, otherwise a parsing error is generated."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"array"}),", pass an array of the desired type to receive the parsing results."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," Starting with 4D v16 R4, ",(0,s.jsx)(n.strong,{children:"JSON PARSE ARRAY"})," can usually be replaced by a call to ",(0,s.jsx)(n.a,{href:"/docs/commands/json-parse",children:"JSON Parse"})," that returns a ",(0,s.jsx)(n.strong,{children:"collection"}),". Collections are based on JSON arrays and allow to store data of mixed types, which provides more flexibility than arrays."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"In this example, data from fields of the records in a table are extracted and then placed in object arrays:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $ref : Object\n\xa0ARRAY OBJECT($sel;0)\n\xa0ARRAY OBJECT($sel2;0)\n\xa0var v_String : Text\n\xa0\n\xa0OB SET($ref;"name";->[Company]Company Name)\n\xa0OB SET($ref;"city";->[Company]City)\n\xa0\n\xa0While(Not(End selection([Company])))\n\xa0\xa0\xa0\xa0$ref_company:=OB Copy($ref;True)\n\xa0\xa0\xa0\xa0APPEND TO ARRAY($sel;$ref_company)\n\xa0\xa0// $sel{1}={"name":"4D SAS","city":"Clichy"}\n\xa0\xa0// $sel{2}={"name":"MyComp","city":"Lyon"}\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0NEXT RECORD([Company])\n\xa0End while\n\xa0\n\xa0v_String:=JSON Stringify array($sel)\n\xa0\xa0// v_String= [{"name":"4D SAS","city":"Clichy"},{"name":"MyComp","city":"Lyon"}...]\n\xa0JSON PARSE ARRAY(v_String;$sel2)\n\xa0\xa0// $sel2{1}={"name":"4D SAS","city":"Clichy"}\n\xa0\xa0// $sel2{2}={"name":"MyComp","city":"Lyon"}\n\xa0\xa0//...\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/json-parse",children:"JSON Parse"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/json-stringify-array",children:"JSON Stringify array"})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var s=r(296540);const t={},a=s.createContext(t);function o(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);