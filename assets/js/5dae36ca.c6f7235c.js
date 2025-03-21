"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58905"],{715807:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/is-field-number-valid","title":"Is field number valid","description":"Is field number valid ( tableNum\xa0|\xa0tablePtr ; fieldNum ) : Boolean","source":"@site/versioned_docs/version-20-R8/commands-legacy/is-field-number-valid.md","sourceDirName":"commands-legacy","slug":"/commands/is-field-number-valid","permalink":"/docs/commands/is-field-number-valid","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-field-number-valid.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-field-number-valid","title":"Is field number valid","slug":"/commands/is-field-number-valid","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"IMPORT STRUCTURE","permalink":"/docs/commands/import-structure"},"next":{"title":"Is table number valid","permalink":"/docs/commands/is-table-number-valid"}}'),i=t("785893"),d=t("250065");let r={id:"is-field-number-valid",title:"Is field number valid",slug:"/commands/is-field-number-valid",displayed_sidebar:"docs"},l=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Is field number valid"})," ( tableNum\xa0|\xa0tablePtr ; ",(0,i.jsx)(n.em,{children:"fieldNum"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tableNum\xa0|\xa0tablePtr"}),(0,i.jsx)(n.td,{children:"Integer, Pointer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Table number or Pointer to table"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"fieldNum"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Field number"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = field exists in the table False = field does not exist in the table"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The Is field number valid command returns True if the field whose number is passed in the ",(0,i.jsx)(n.em,{children:"fieldNum"})," parameter exists in the table whose number or pointer is passed in the ",(0,i.jsx)(n.em,{children:"tableNum"})," or ",(0,i.jsx)(n.em,{children:"tablePtr"})," parameter. If the field does not exist, the command returns False. Keep in mind that the command returns False if the table containing the field is in the Trash of the Explorer."]}),"\n",(0,i.jsx)(n.p,{children:"This command can be used to detect any field deletions, which create gaps in the sequence of field numbers."}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/last-table-number",children:"Last table number"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/is-table-number-valid",children:"Is table number valid"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1000"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let i={},d=s.createContext(i);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);