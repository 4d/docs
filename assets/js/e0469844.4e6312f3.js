"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97114"],{587832:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>l,default:()=>a,assets:()=>o,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/qr-get-selection","title":"QR GET SELECTION","description":"QR GET SELECTION ( area ; left ; top {; right {; bottom}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/qr-get-selection.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-selection","permalink":"/docs/commands/qr-get-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-selection","title":"QR GET SELECTION","slug":"/commands/qr-get-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get report table","permalink":"/docs/commands/qr-get-report-table"},"next":{"title":"QR GET SORTS","permalink":"/docs/commands/qr-get-sorts"}}'),s=t("785893"),d=t("250065");let i={id:"qr-get-selection",title:"QR GET SELECTION",slug:"/commands/qr-get-selection",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR GET SELECTION"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"left"})," ; ",(0,s.jsx)(n.em,{children:"top"})," {; ",(0,s.jsx)(n.em,{children:"right"})," {; ",(0,s.jsx)(n.em,{children:"bottom"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of the area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"left"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Left boundary"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"top"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Top boundary"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"right"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Right boundary"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"bottom"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Bottom boundary"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The QR GET SELECTION command returns the coordinates of the cell that is selected."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"left"})," returns the number of the column that is the left boundary of the selection. If ",(0,s.jsx)(n.em,{children:"left"})," equals 0, the entire row is selected."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"top"})," returns the number of the row that is the top boundary of the selection. If ",(0,s.jsx)(n.em,{children:"top"})," equals 0, the entire column is selected."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If both ",(0,s.jsx)(n.em,{children:"left"})," and ",(0,s.jsx)(n.em,{children:"top"})," equal 0, the entire area is highlighted."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"right"})," is the number of the column that is the right boundary of the selection."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"bottom"})," is the number of the row that is the top boundary of the selection."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If there is no selection, ",(0,s.jsx)(n.em,{children:"left"}),", ",(0,s.jsx)(n.em,{children:"top"}),", ",(0,s.jsx)(n.em,{children:"right"})," and ",(0,s.jsx)(n.em,{children:"bottom"})," are set to -1."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass an invalid ",(0,s.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/qr-set-selection",children:"QR SET SELECTION"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"793"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);