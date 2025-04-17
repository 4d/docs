"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42391"],{315877:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/qr-insert-column","title":"QR INSERT COLUMN","description":"QR INSERT COLUMN ( area ; colNumber ; object )","source":"@site/versioned_docs/version-20-R8/commands-legacy/qr-insert-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-insert-column","permalink":"/docs/20-R8/commands/qr-insert-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-insert-column.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-insert-column","title":"QR INSERT COLUMN","slug":"/commands/qr-insert-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET TOTALS SPACING","permalink":"/docs/20-R8/commands/qr-get-totals-spacing"},"next":{"title":"QR MOVE COLUMN","permalink":"/docs/20-R8/commands/qr-move-column"}}'),s=t("785893"),i=t("250065");let l={id:"qr-insert-column",title:"QR INSERT COLUMN",slug:"/commands/qr-insert-column",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR INSERT COLUMN"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"colNumber"})," ; ",(0,s.jsx)(n.em,{children:"object"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of the area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colNumber"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Column number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"Field, Variable, Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object to be inserted in the column"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The QR INSERT COLUMN command inserts or creates a column at the specified position. Columns located to the right of that position will be shifted accordingly."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"position"})," is the number of the column, established from left to right."]}),"\n",(0,s.jsxs)(n.p,{children:["The default title for the column will be the value passed in ",(0,s.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass an invalid ",(0,s.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command cannot be used with a cross-table report."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"The following statement inserts (or creates) a first column in a Quick Report area, inserts \u201CField1\u201D as column title (default behavior) and populates the contents of the body with values from Field1."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QR INSERT COLUMN(MyArea;1;->[Table 1]Field1)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/qr-delete-column",children:"QR DELETE COLUMN"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"748"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var r=t(667294);let s={},i=r.createContext(s);function l(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);