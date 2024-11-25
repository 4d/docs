"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95060"],{542694:function(e,n,l){l.r(n),l.d(n,{metadata:()=>d,contentTitle:()=>s,default:()=>m,assets:()=>r,toc:()=>c,frontMatter:()=>a});var d=JSON.parse('{"id":"commands-legacy/field-name","title":"Field name","description":"Field name ( fieldPtr | tableNum {; fieldNum} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/field-name.md","sourceDirName":"commands-legacy","slug":"/commands/field-name","permalink":"/docs/commands/field-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffield-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"field-name","title":"Field name","slug":"/commands/field-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Field","permalink":"/docs/commands/field"},"next":{"title":"Get external data path","permalink":"/docs/commands/get-external-data-path"}}'),t=l("785893"),i=l("250065");let a={id:"field-name",title:"Field name",slug:"/commands/field-name",displayed_sidebar:"docs"},s=void 0,r={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Field name"})," ( fieldPtr | tableNum {; ",(0,t.jsx)(n.em,{children:"fieldNum"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fieldPtr | tableNum"}),(0,t.jsx)(n.td,{children:"Pointer, Longint"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Field pointer or Table number"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"fieldNum"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Field number if a table number is passed as first parameter"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Name of the field"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The Field name command returns the name of the field whose pointer you pass in ",(0,t.jsx)(n.em,{children:"fieldPtr"})," or whose table and field number you pass in ",(0,t.jsx)(n.em,{children:"tableNum"})," and ",(0,t.jsx)(n.em,{children:"fieldNum"}),"."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.p,{children:"This example sets the second element of the array FieldArray{1} to the name of the second field in the first table. FieldArray is a two-dimensional array:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0FieldArray{1}{2}:=Field name(1;2)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["This example sets the second element of the array FieldArray{1} to the name of the field ",(0,t.jsx)(n.em,{children:"[MyTable]MyField"}),". FieldArray is a two-dimensional array:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0FieldArray{1}{2}:=Field name(->[MyTable]MyField)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.p,{children:"This example displays an alert. This method passes a pointer to a field:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("The ID number for the field "+Field name($1)+" in the table "+Table name(Table($1))+" has to be longer than five characters.")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/field",children:"Field"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/last-field-number",children:"Last field number"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/table-name",children:"Table name"})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return s},a:function(){return a}});var d=l(667294);let t={},i=d.createContext(t);function a(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);