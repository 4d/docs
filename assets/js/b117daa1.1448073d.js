"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37438"],{235751:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/qr-get-totals-data","title":"QR GET TOTALS DATA","description":"QR GET TOTALS DATA ( area ; colNum ; breakNum ; operator ; text )","source":"@site/versioned_docs/version-20-R7/commands-legacy/qr-get-totals-data.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-totals-data","permalink":"/docs/20-R7/commands/qr-get-totals-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-totals-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-totals-data","title":"QR GET TOTALS DATA","slug":"/commands/qr-get-totals-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get text property","permalink":"/docs/20-R7/commands/qr-get-text-property"},"next":{"title":"QR GET TOTALS SPACING","permalink":"/docs/20-R7/commands/qr-get-totals-spacing"}}'),s=r("785893"),d=r("250065");let l={id:"qr-get-totals-data",title:"QR GET TOTALS DATA",slug:"/commands/qr-get-totals-data",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"List Mode",id:"list-mode",level:3},{value:"Cross-table Mode",id:"cross-table-mode",level:3},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR GET TOTALS DATA"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"colNum"})," ; ",(0,s.jsx)(n.em,{children:"breakNum"})," ; ",(0,s.jsx)(n.em,{children:"operator"})," ; ",(0,s.jsx)(n.em,{children:"text"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of the area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Column number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"breakNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Break number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"operator"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Operator value for the cell"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"text"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Contents of the cell"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.h3,{id:"list-mode",children:"List Mode"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"QR GET TOTALS DATA"})," command retrieves the details of a specific break."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"area"})," is the reference of the Quick Report area."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"colNum"})," is the number of the column whose data will be retrieved."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"breakNum"})," is the number of the break whose data will be retrieved (subtotal or grand total). For a subtotal row, ",(0,s.jsx)(n.em,{children:"breakNum"})," corresponds to the row number. For a grand total, ",(0,s.jsx)(n.em,{children:"breakNum"})," is -3 (you can also use the ",(0,s.jsx)(n.em,{children:"qr grand total"})," constant from the ",(0,s.jsx)(n.em,{children:"QR Rows for Properties"})," theme)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"operator"})," returns the sum of all the operators present in the cell. You can use the constants of the ",(0,s.jsx)(n.em,{children:"QR Operators"})," theme to process the returned value:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr average"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr count"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"16"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr max"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr min"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr standard deviation"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"32"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr sum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"If the value returned is 0, there is no operator."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"text"})," returns the text present in the cell."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," ",(0,s.jsx)(n.em,{children:"operator"})," and ",(0,s.jsx)(n.em,{children:"text"})," are mutually exclusive, so you either have a result returned through ",(0,s.jsx)(n.em,{children:"operator"})," or through ",(0,s.jsx)(n.em,{children:"text"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"cross-table-mode",children:"Cross-table Mode"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"QR GET TOTALS DATA"})," command retrieves the details of a specific cell."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"area"})," is the reference of the Quick Report area."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"colNum"})," is the column number of the cell whose data is going to be retrieved."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"breakNum"})," is the row number of the cell whose data is going to be retrieved."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"operator"})," returns the sum of all the operators present in the cell. You can use the constants of the ",(0,s.jsx)(n.em,{children:"QR Operators"})," theme to process the returned value (see above)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"text"})," returns the text in the cell."]}),"\n",(0,s.jsxs)(n.p,{children:["Here is a depiction of how the parameters ",(0,s.jsx)(n.em,{children:"colNum"})," and ",(0,s.jsx)(n.em,{children:"breakNum"})," have to be combined in cross-table mode:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(935295).Z+"",width:"713",height:"329"})}),"\n",(0,s.jsxs)(n.p,{children:["If you pass an invalid ",(0,s.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,s.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,s.jsx)(n.em,{children:"colNum"})," number, the error -9852 will be generated.",(0,s.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,s.jsx)(n.em,{children:"breakNum"})," number, the error -9853 will be generated."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/qr-set-totals-data",children:"QR SET TOTALS DATA"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"768"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifies variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},935295:function(e,n,r){r.d(n,{Z:function(){return t}});let t=r.p+"assets/images/pict30726.en-b526388b470cd1458e999a64fbb97a0c.png"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var t=r(667294);let s={},d=t.createContext(s);function l(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);