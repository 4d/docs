"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51310"],{146184:function(e,n,l){l.r(n),l.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/is-field-value-null","title":"Is field value Null","description":"Is field value Null ( aField ) : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/is-field-value-null.md","sourceDirName":"commands-legacy","slug":"/commands/is-field-value-null","permalink":"/docs/20-R7/commands/is-field-value-null","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-field-value-null.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"is-field-value-null","title":"Is field value Null","slug":"/commands/is-field-value-null","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"End SQL","permalink":"/docs/20-R7/commands/end-sql"},"next":{"title":"QUERY BY SQL","permalink":"/docs/20-R7/commands/query-by-sql"}}'),t=l("785893"),d=l("250065");let i={id:"is-field-value-null",title:"Is field value Null",slug:"/commands/is-field-value-null",displayed_sidebar:"docs"},r=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Is field value Null"})," ( ",(0,t.jsx)(n.em,{children:"aField"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aField"}),(0,t.jsx)(n.td,{children:"Field"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Field to be evaluated"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True = field is NULL, False = field is not NULL"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The Is field value Null command returns ",(0,t.jsx)(n.strong,{children:"True"})," if the field designated by the ",(0,t.jsx)(n.em,{children:"aField"})," parameter contains the NULL value, and ",(0,t.jsx)(n.strong,{children:"False"})," otherwise."]}),"\n",(0,t.jsxs)(n.p,{children:["The NULL value is used by the SQL kernel of 4D. For more information, refer to the ",(0,t.jsx)(n.em,{children:"4D SQL Reference"})," manual."]}),"\n",(0,t.jsxs)(n.p,{children:['The value returned by this command is only meaningful if the "',(0,t.jsx)(n.em,{children:"Map NULL values to blank values"}),'" option is not checked in the field definition of the Structure editor. Otherwise, it always returns ',(0,t.jsx)(n.strong,{children:"False"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," This command cannot be used with objects and object properties. Null values in object fields are handled through the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/null",children:"Null"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/null",children:"Null"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/set-field-value-null",children:"SET FIELD VALUE NULL"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"964"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,l){l.d(n,{Z:function(){return r},a:function(){return i}});var s=l(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);