"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["90706"],{500774:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/qr-set-borders","title":"QR SET BORDERS","description":"QR SET BORDERS ( area ; column ; row ; border ; line {; color} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/qr-set-borders.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-borders","permalink":"/docs/commands/qr-set-borders","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-borders.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-borders","title":"QR SET BORDERS","slug":"/commands/qr-set-borders","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET AREA PROPERTY","permalink":"/docs/commands/qr-set-area-property"},"next":{"title":"QR SET DESTINATION","permalink":"/docs/commands/qr-set-destination"}}'),d=r("785893"),t=r("250065");let i={id:"qr-set-borders",title:"QR SET BORDERS",slug:"/commands/qr-set-borders",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"QR SET BORDERS"})," ( ",(0,d.jsx)(n.em,{children:"area"})," ; ",(0,d.jsx)(n.em,{children:"column"})," ; ",(0,d.jsx)(n.em,{children:"row"})," ; ",(0,d.jsx)(n.em,{children:"border"})," ; ",(0,d.jsx)(n.em,{children:"line"})," {; ",(0,d.jsx)(n.em,{children:"color"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"area"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Reference of the area"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"column"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Column number"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"row"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Row number"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"border"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Border composite value"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"line"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Line thickness"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"color"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Border color"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"QR SET BORDERS"})," command sets the border style for a given cell."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"area"})," is the reference of the Quick Report area."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"column"})," is the column number of the cell."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"row"})," is the row number of the cell. You can pass either:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"a positive integer value to designate the corresponding subtotal (break) level,"}),"\n",(0,d.jsxs)(n.li,{children:["one of the following constants located in the ",(0,d.jsx)(n.em,{children:"QR Rows for Properties"})," theme:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr detail"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"-2"}),(0,d.jsx)(n.td,{children:"Detail area of report"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr grand total"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"-3"}),(0,d.jsx)(n.td,{children:"Grand total area"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr title"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"-1"}),(0,d.jsx)(n.td,{children:"Title of report"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"border"})," is a composite value that indicates which borders of the cell are to be affected. Pass one of the constants from the ",(0,d.jsx)(n.em,{children:"QR Borders"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constant"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Value"}),(0,d.jsx)(n.th,{children:"Comment"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr bottom border"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"8"}),(0,d.jsx)(n.td,{children:"Bottom border"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr inside horizontal border"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"32"}),(0,d.jsx)(n.td,{children:"Inside horizontal border"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr inside vertical border"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"16"}),(0,d.jsx)(n.td,{children:"Inside vertical border"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr left border"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Left border"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr right border"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"4"}),(0,d.jsx)(n.td,{children:"Right border"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"qr top border"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"2"}),(0,d.jsx)(n.td,{children:"Top border"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"border"})," can contain an accumulation of several values in order to designate several borders simultaneously. For example, a value of 5 passed in ",(0,d.jsx)(n.em,{children:"border"})," would affect the right and left borders."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"line"})," is the thickness of the line:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsx)(n.li,{children:"0 indicates no line"}),"\n",(0,d.jsx)(n.li,{children:"1 indicates a thickness of 1/4 point"}),"\n",(0,d.jsx)(n.li,{children:"2 indicates a thickness of 1/2 point"}),"\n",(0,d.jsx)(n.li,{children:"3 indicates a thickness of 1 point"}),"\n",(0,d.jsx)(n.li,{children:"4 indicates a thickness of 2 points"}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"color"})," is the color of the line:"]}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:["If ",(0,d.jsx)(n.em,{children:"color"})," is a positive value, it indicates a specific color."]}),"\n",(0,d.jsxs)(n.li,{children:["If ",(0,d.jsx)(n.em,{children:"color"})," equals 0, the color is black."]}),"\n",(0,d.jsxs)(n.li,{children:["If ",(0,d.jsx)(n.em,{children:"color"})," equals -1, no changes are to be made."]}),"\n"]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," The default color is black."]}),"\n",(0,d.jsxs)(n.p,{children:["If you pass an invalid area number, the error -9850 will be generated.",(0,d.jsx)(n.br,{}),"\nIf you pass an invalid column number, the error -9852 will be generated.",(0,d.jsx)(n.br,{}),"\nIf you pass an invalid row number, the error -9853 will be generated.",(0,d.jsx)(n.br,{}),"\nIf you pass an invalid border parameter, the error -9854 will be generated.",(0,d.jsx)(n.br,{}),"\nIf you pass an invalid line parameter, the error -9855 will be generated."]}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/commands/qr-get-borders",children:"QR GET BORDERS"})}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"797"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Modifies variables"}),(0,d.jsx)(n.td,{children:"error"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return i}});var s=r(667294);let d={},t=s.createContext(d);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);