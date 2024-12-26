"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60896"],{380543:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>l,default:()=>h,assets:()=>i,toc:()=>a,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/qr-blob-to-report","title":"QR BLOB TO REPORT","description":"QR BLOB TO REPORT ( area ; blob )","source":"@site/versioned_docs/version-20-R7/commands-legacy/qr-blob-to-report.md","sourceDirName":"commands-legacy","slug":"/commands/qr-blob-to-report","permalink":"/docs/commands/qr-blob-to-report","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-blob-to-report.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-blob-to-report","title":"QR BLOB TO REPORT","slug":"/commands/qr-blob-to-report","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Quick Report","permalink":"/docs/category/quick-report"},"next":{"title":"QR Count columns","permalink":"/docs/commands/qr-count-columns"}}'),s=r("785893"),o=r("250065");let d={id:"qr-blob-to-report",title:"QR BLOB TO REPORT",slug:"/commands/qr-blob-to-report",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR BLOB TO REPORT"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"blob"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of the area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"blob"}),(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"BLOB that houses the report"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The QR BLOB TO REPORT command places the report contained in ",(0,s.jsx)(n.em,{children:"blob"})," in the Quick Report area passed in ",(0,s.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass an invalid ",(0,s.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,s.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,s.jsx)(n.em,{children:"blob"})," parameter, the error -9852 will be generated."]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"The following code allows you to display, in MyArea, a report file named \u201Creport.4qr\u201D located next to the database structure. The report file does not have to be created with 4D version 2003; it can originate from previous versions:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $doc : Blob\n\xa0var MyArea : Integer\n\xa0DOCUMENT TO BLOB("report.4qr";$doc)\n\xa0QR BLOB TO REPORT(MyArea;$doc)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"The following statement retrieves the Quick Report stored in Field4 and displays it in MyArea:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QR BLOB TO REPORT(MyArea;[Table 1]Field4)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/qr-report-to-blob",children:"QR REPORT TO BLOB"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"771"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);