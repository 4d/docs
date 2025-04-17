"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81925"],{628639:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/query-selection-by-attribute","title":"QUERY SELECTION BY ATTRIBUTE","description":"QUERY SELECTION BY ATTRIBUTE ( {;}{conjOp ;} objectField ; attributePath ; queryOp ; value {; *} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/query-selection-by-attribute.md","sourceDirName":"commands-legacy","slug":"/commands/query-selection-by-attribute","permalink":"/docs/commands/query-selection-by-attribute","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-selection-by-attribute.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"query-selection-by-attribute","title":"QUERY SELECTION BY ATTRIBUTE","slug":"/commands/query-selection-by-attribute","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION","permalink":"/docs/commands/query-selection"},"next":{"title":"QUERY SELECTION BY FORMULA","permalink":"/docs/commands/query-selection-by-formula"}}'),s=t("785893"),d=t("250065");let i={id:"query-selection-by-attribute",title:"QUERY SELECTION BY ATTRIBUTE",slug:"/commands/query-selection-by-attribute",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," ( {",(0,s.jsx)(n.em,{children:"aTable"}),"}{;}{",(0,s.jsx)(n.em,{children:"conjOp"})," ;} ",(0,s.jsx)(n.em,{children:"objectField"})," ; ",(0,s.jsx)(n.em,{children:"attributePath"})," ; ",(0,s.jsx)(n.em,{children:"queryOp"})," ; ",(0,s.jsx)(n.em,{children:"value"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aTable"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Table for which to return a selection of records, or Default table if omitted"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"conjOp"}),(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Conjunction operator to use to join multiple queries (if any)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objectField"}),(0,s.jsx)(n.td,{children:"Field"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object field to query attributes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"attributePath"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Name or path of attribute"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"queryOp"}),(0,s.jsx)(n.td,{children:"*, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Query operator (comparator)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Text, Number, Date, Time"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Value to compare"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Continue query flag"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," works and performs the same actions as ",(0,s.jsx)(n.a,{href:"/docs/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"}),". The difference between these two commands is the scope of the query:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})," looks for records among all the records in the table."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," looks for records among the records currently selected in the table."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," looks for records in ",(0,s.jsx)(n.em,{children:"aTable"}),". The ",(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," command changes the current selection of ",(0,s.jsx)(n.em,{children:"aTable"})," for the current process and makes the first record of the new selection the current record."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information, see the description of the ",(0,s.jsx)(n.a,{href:"/docs/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"QUERY SELECTION BY ATTRIBUTE"})," command is useful when a query cannot be defined using a combination of ",(0,s.jsx)(n.a,{href:"/docs/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})," (and even ",(0,s.jsx)(n.a,{href:"/docs/commands/query",children:"QUERY"}),") calls joined with the * parameter. Typically, this is the case when you want to query a current selection that does not result from a previous query, but from a command such as ",(0,s.jsx)(n.a,{href:"/docs/commands/use-set",children:"USE SET"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to find people with an age between 20 and 30, among the records that were previously highlighted by the user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0USE SET("UserSet")\xa0//creates a new current selection\n\xa0QUERY SELECTION BY ATTRIBUTE([People];[People]OB_Info;"age";>;20;*)\n\xa0QUERY SELECTION BY ATTRIBUTE([People];&;[People]OB_Info;"age";<;30)\xa0//triggers the query\n'})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/query-by-attribute",children:"QUERY BY ATTRIBUTE"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1424"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"OK"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current record"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Changes current selection"}),(0,s.jsx)(n.td,{})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);