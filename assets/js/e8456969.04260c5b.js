"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33666"],{650004:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/qr-move-column","title":"QR MOVE COLUMN","description":"QR MOVE COLUMN ( area ; column ; newPos )","source":"@site/versioned_docs/version-20-R7/commands-legacy/qr-move-column.md","sourceDirName":"commands-legacy","slug":"/commands/qr-move-column","permalink":"/docs/commands/qr-move-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-move-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-move-column","title":"QR MOVE COLUMN","slug":"/commands/qr-move-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR INSERT COLUMN","permalink":"/docs/commands/qr-insert-column"},"next":{"title":"QR NEW AREA","permalink":"/docs/commands/qr-new-area"}}'),s=t("785893"),d=t("250065");let i={id:"qr-move-column",title:"QR MOVE COLUMN",slug:"/commands/qr-move-column",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR MOVE COLUMN"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"column"})," ; ",(0,s.jsx)(n.em,{children:"newPos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of the area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"column"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Column number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"newPos"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"New position for column"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"QR MOVE COLUMN"})," command moves the column currently found at the ",(0,s.jsx)(n.em,{children:"column"})," position to the ",(0,s.jsx)(n.em,{children:"newPos"})," position."]}),"\n",(0,s.jsxs)(n.p,{children:["Both the ",(0,s.jsx)(n.em,{children:"column"})," and ",(0,s.jsx)(n.em,{children:"newPos"})," parameters must be valid column numbers (between 1 and the total number of columns in the report); otherwise, the error -9852 is returned."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command can be used with list reports only."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You have designed the following report:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(305732).Z+"",width:"676",height:"196"})}),"\n",(0,s.jsx)(n.p,{children:"If you execute:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0QR MOVE COLUMN(area;3;4)\n"})}),"\n",(0,s.jsx)(n.p,{children:"The result is:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(138457).Z+"",width:"675",height:"192"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1325"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},305732:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict2569470.en-d5be9d143bb6e93a9019fb35f2364173.png"},138457:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict2569472.en-6b0c9a6ead2b092b4d9cfba913f7d59a.png"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);