"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31371"],{412012:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>d,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/json-to-selection","title":"JSON TO SELECTION","description":"JSON TO SELECTION ( aTable ; jsonArray )","source":"@site/versioned_docs/version-20-R7/commands-legacy/json-to-selection.md","sourceDirName":"commands-legacy","slug":"/commands/json-to-selection","permalink":"/docs/20-R7/commands/json-to-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fjson-to-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"json-to-selection","title":"JSON TO SELECTION","slug":"/commands/json-to-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"JSON Stringify array","permalink":"/docs/20-R7/commands/json-stringify-array"},"next":{"title":"JSON Validate","permalink":"/docs/20-R7/commands/json-validate"}}'),s=t("785893"),o=t("250065");let a={id:"json-to-selection",title:"JSON TO SELECTION",slug:"/commands/json-to-selection",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"JSON TO SELECTION"})," ( ",(0,s.jsx)(n.em,{children:"aTable"})," ; ",(0,s.jsx)(n.em,{children:"jsonArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"4D table into which elements are copied"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"jsonArray"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Array of objects in JSON"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"JSON TO SELECTION"})," command copies the contents of an array of JSON objects ",(0,s.jsx)(n.em,{children:"jsonArray"})," to the selection of records of ",(0,s.jsx)(n.em,{children:"aTable"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"jsonArray"})," parameter is a ",(0,s.jsx)(n.a,{href:"#",title:"A character string that may contain from 0 to 2 GB of text",children:"text"})," representing an array of objects formatted in JSON and containing one or more elements. The expected syntax is of the type:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'"[{"attribute1":"value1","attribute2":"value2",...},...,{"attribute1":"valueN","attribute2":"valueN",...}]"\n'})}),"\n",(0,s.jsxs)(n.p,{children:["If a selection exists for ",(0,s.jsx)(n.em,{children:"aTable"})," at the time of the call, the elements of the JSON array are copied into the records based on the order of the array and the order of the records. If the number of elements defined in the JSON array is greater than the number of records in the current selection, new records are created. The records, whether they are new or existing, are automatically saved."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command supports Object type fields: JSON data is converted automatically."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," Since ",(0,s.jsx)(n.strong,{children:"JSON TO SELECTION"})," replaces any information found in the existing records, this command must be used with caution."]}),"\n",(0,s.jsxs)(n.p,{children:["If a record is locked by another process during the execution of the command, it is not modified. All the locked records are placed in the ",(0,s.jsx)(n.em,{children:"The LockedSet System Set"}),". After the execution of ",(0,s.jsx)(n.strong,{children:"JSON TO SELECTION"}),", you can test whether the ",(0,s.jsx)(n.em,{children:"LockedSet"})," set contains any records that were locked."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Using the ",(0,s.jsx)(n.strong,{children:"JSON TO SELECTION"})," command to add records to the [Company] table:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $Object1;$Object2;$Object3;$Object4 : Object\n\xa0var $ObjectString : Text\n\xa0ARRAY OBJECT($arrayObject;0)\n\xa0\n\xa0OB SET($Object1;"ID";"200";"Company Name";"4D SAS";"City";"Clichy")\n\xa0APPEND TO ARRAY($arrayObject;$Object1)\n\xa0\n\xa0OB SET($Object2;"ID";"201";"Company Name";"APPLE";"City";"Paris")\n\xa0APPEND TO ARRAY($arrayObject;$Object2)\n\xa0\n\xa0OB SET($Object3;"ID";"202";"Company Name";"IBM";"City";"London")\n\xa0APPEND TO ARRAY($arrayObject;$Object3)\n\xa0\n\xa0OB SET($Object4;"ID";"203";"Company Name";"MICROSOFT";"City";"New York")\n\xa0APPEND TO ARRAY($arrayObject;$Object4)\n\xa0\n\xa0$ObjectString:=JSON Stringify array($arrayObject)\n\xa0\n\xa0\xa0// $ObjectString = "[{"ID":"200","City":"Clichy","Company Name":"4D\n\xa0\xa0// SAS"},{"ID":"201","City":"Paris","Company Name":"APPLE"},{"ID":"202",\n\xa0\xa0//"City":"London","Company Name":"IBM"},{"ID":"203","City":"New\n\xa0\xa0//York","Company Name":"MICROSOFT"}]"\n\xa0\n\xa0JSON TO SELECTION([Company];$ObjectString)\n\xa0\xa0// You create 4 records in the [Company] table, filling the ID,\n\xa0\xa0//Company name and city fields\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/selection-to-json",children:"Selection to JSON"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1235"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(667294);let s={},o=r.createContext(s);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);