"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33548"],{91095:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/qr-set-selection","title":"QR SET SELECTION","description":"QR SET SELECTION ( area ; left ; top {; right {; bottom}} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/qr-set-selection.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-selection","permalink":"/docs/commands/qr-set-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-selection.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"qr-set-selection","title":"QR SET SELECTION","slug":"/commands/qr-set-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET REPORT TABLE","permalink":"/docs/commands/qr-set-report-table"},"next":{"title":"QR SET SORTS","permalink":"/docs/commands/qr-set-sorts"}}'),r=t("785893"),i=t("250065");let d={id:"qr-set-selection",title:"QR SET SELECTION",slug:"/commands/qr-set-selection",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR SET SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"area"})," ; ",(0,r.jsx)(n.em,{children:"left"})," ; ",(0,r.jsx)(n.em,{children:"top"})," {; ",(0,r.jsx)(n.em,{children:"right"})," {; ",(0,r.jsx)(n.em,{children:"bottom"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"area"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of the area"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"left"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Left boundary"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"top"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Top boundary"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"right"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Right boundary"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bottom"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Bottom boundary"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The QR SET SELECTION command highlights a cell, a row, a column or the entire ",(0,r.jsx)(n.em,{children:"area"})," as you would with a mouse click. It also lets you deselect the current selection."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"left"})," is the number of the left boundary. If ",(0,r.jsx)(n.em,{children:"left"})," is 0, the entire row is selected."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"top"})," is the number of the top boundary. If ",(0,r.jsx)(n.em,{children:"top"})," is 0, the entire column is selected."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"right"})," is the number of the right boundary."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"bottom"})," is the number of the bottom boundary."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If both ",(0,r.jsx)(n.em,{children:"left"})," and ",(0,r.jsx)(n.em,{children:"top"})," are 0, the entire area is highlighted."]}),"\n",(0,r.jsxs)(n.li,{children:["If you want no selection, pass -1 to ",(0,r.jsx)(n.em,{children:"left"}),", ",(0,r.jsx)(n.em,{children:"right"}),", ",(0,r.jsx)(n.em,{children:"top"})," and ",(0,r.jsx)(n.em,{children:"bottom"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass an invalid ",(0,r.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/qr-get-selection",children:"QR GET SELECTION"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"794"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);