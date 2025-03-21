"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22750"],{664768:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/qr-set-totals-spacing","title":"QR SET TOTALS SPACING","description":"QR SET TOTALS SPACING ( area ; subtotal ; value )","source":"@site/versioned_docs/version-20-R8/commands-legacy/qr-set-totals-spacing.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-totals-spacing","permalink":"/docs/commands/qr-set-totals-spacing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-totals-spacing.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-totals-spacing","title":"QR SET TOTALS SPACING","slug":"/commands/qr-set-totals-spacing","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET TOTALS DATA","permalink":"/docs/commands/qr-set-totals-data"},"next":{"title":"Record Locking","permalink":"/docs/commands/theme/Record-Locking"}}'),r=s("785893"),l=s("250065");let i={id:"qr-set-totals-spacing",title:"QR SET TOTALS SPACING",slug:"/commands/qr-set-totals-spacing",displayed_sidebar:"docs"},a=void 0,d={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR SET TOTALS SPACING"})," ( ",(0,r.jsx)(n.em,{children:"area"})," ; ",(0,r.jsx)(n.em,{children:"subtotal"})," ; ",(0,r.jsx)(n.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"area"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of the area"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subtotal"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Subtotal number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"0=no space, 32000=inserts a page break, >0=spacing added below the break level, <0=proportional increase"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"The QR SET TOTALS SPACING command sets a space below a subtotal row. It applies only to the list mode."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"area"})," is the reference of the Quick Report area.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"subtotal"})," is the subtotal level (or break level) that will be affected."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"value"})," defines the value of the spacing:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"value"})," is 0, no space is added."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"value"})," is 32000, a page break is inserted."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"value"})," is a positive value, it expresses the spacing value in pixels."]}),"\n",(0,r.jsxs)(n.li,{children:["If ",(0,r.jsx)(n.em,{children:"value"})," is a negative value, it expresses the spacing as a percentage of the subtotal row. For example, -100 will set a space of 100% below the subtotal row."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If the space below a subtotal row \u201Cpushes\u201D the next row onto the following page, there will be no space inserted above the row on that page."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass an invalid ",(0,r.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,r.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,r.jsx)(n.em,{children:"subtotal"}),", the error -9852 will be generated."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/qr-get-totals-spacing",children:"QR GET TOTALS SPACING"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"761"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let r={},l=t.createContext(r);function i(e){let n=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);