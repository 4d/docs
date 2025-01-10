"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["36959"],{636586:function(e,n,d){d.r(n),d.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>l,assets:()=>c,toc:()=>a,contentTitle:()=>t});var l=JSON.parse('{"id":"commands-legacy/field","title":"Field","description":"Field ( tableNum ; fieldNum ) -> fieldPtr","source":"@site/versioned_docs/version-20-R7/commands-legacy/field.md","sourceDirName":"commands-legacy","slug":"/commands/field","permalink":"/docs/commands/field","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffield.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"field","title":"Field","slug":"/commands/field","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT STRUCTURE","permalink":"/docs/commands/export-structure"},"next":{"title":"Field name","permalink":"/docs/commands/field-name"}}'),i=d("785893"),s=d("250065");let r={id:"field",title:"Field",slug:"/commands/field",displayed_sidebar:"docs"},t=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Field"})," ( ",(0,i.jsx)(n.em,{children:"tableNum"})," ; ",(0,i.jsx)(n.em,{children:"fieldNum"})," ) -> fieldPtr \xa0",(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.strong,{children:"Field"})," ( ",(0,i.jsx)(n.em,{children:"fieldPtr"})," ) -> fieldNum"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tableNum"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldNum"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Field number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldPtr"}),(0,i.jsx)(n.td,{children:"Pointer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Field pointer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Field ( fieldPtr ) -> fieldNum"}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Parameter"}),(0,i.jsx)(n.td,{children:"Type"}),(0,i.jsx)(n.td,{children:"Description"}),(0,i.jsx)(n.td,{})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldPtr"}),(0,i.jsx)(n.td,{children:"Pointer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Field pointer"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldNum"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Field number"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Field"})," command has two forms:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you pass a table number in ",(0,i.jsx)(n.em,{children:"tableNum"})," and a field number in fieldNum, ",(0,i.jsx)(n.strong,{children:"Field"})," returns a pointer to the field.returns the field number of the field."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["The following example sets the ",(0,i.jsx)(n.em,{children:"fieldPtr"})," variable to a pointer to the second field in the third table:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0FieldPtr:=Field(3;2)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(n.p,{children:["Passing ",(0,i.jsx)(n.em,{children:"fieldPtr"})," (a pointer to the second field of a table) to ",(0,i.jsx)(n.strong,{children:"Field"})," returns the number 2. The following line sets ",(0,i.jsx)(n.em,{children:"FieldNum"})," to 2:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0FieldNum:=Field(FieldPtr)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsxs)(n.p,{children:["The following example sets the ",(0,i.jsx)(n.em,{children:"FieldNum"})," variable to the field number of [Table3]Field2:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0FieldNum:=Field(->[Table3]Field2)\n"})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/field-name",children:"Field name"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/last-field-number",children:"Last field number"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/table",children:"Table"})]}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"253"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return t},a:function(){return r}});var l=d(667294);let i={},s=l.createContext(i);function r(e){let n=l.useContext(s);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),l.createElement(s.Provider,{value:n},e.children)}}}]);