"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14689"],{591039:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/qr-set-info-row","title":"QR SET INFO ROW","description":"QR SET INFO ROW ( area ; row ; hide )","source":"@site/versioned_docs/version-20-R8/commands-legacy/qr-set-info-row.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-info-row","permalink":"/docs/20-R8/commands/qr-set-info-row","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-info-row.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-info-row","title":"QR SET INFO ROW","slug":"/commands/qr-set-info-row","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET INFO COLUMN","permalink":"/docs/20-R8/commands/qr-set-info-column"},"next":{"title":"QR SET REPORT KIND","permalink":"/docs/20-R8/commands/qr-set-report-kind"}}'),t=r("785893"),d=r("250065");let i={id:"qr-set-info-row",title:"QR SET INFO ROW",slug:"/commands/qr-set-info-row",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR SET INFO ROW"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"row"})," ; ",(0,t.jsx)(n.em,{children:"hide"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Reference of the area created"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"row"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Row designator"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"hide"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"0 = displayed, 1 = hidden"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"QR SET INFO ROW"})," command shows/hides the row whose reference was passed in ",(0,t.jsx)(n.em,{children:"row"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"row"})," designates which row is affected. You can pass either:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"a positive integer value to designate the corresponding subtotal (break) level,"}),"\n",(0,t.jsxs)(n.li,{children:["one of the following constants from the ",(0,t.jsx)(n.em,{children:"QR Rows for Properties"})," theme:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constant"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Value"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr detail"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"-2"}),(0,t.jsx)(n.td,{children:"Detail area of report"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr grand total"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"-3"}),(0,t.jsx)(n.td,{children:"Grand total area"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr title"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"Title of report"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"hide"})," specifies whether the line is shown or hidden:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.em,{children:"hide"})," is 1, the row is hidden;"]}),"\n",(0,t.jsxs)(n.li,{children:["If ",(0,t.jsx)(n.em,{children:"hide"})," is 0, the row is shown."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass an invalid ",(0,t.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,t.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,t.jsx)(n.em,{children:"row"})," value, the error -9852 will be generated."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"The following statement hides the detail row:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0QR SET INFO ROW(area;qr detail;1)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/qr-get-info-column",children:"QR GET INFO COLUMN"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/qr-get-info-row",children:"QR Get info row"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/qr-set-info-column",children:"QR SET INFO COLUMN"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"763"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);