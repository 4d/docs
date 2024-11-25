"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92745"],{971838:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/qr-get-document-property","title":"QR Get document property","description":"QR Get document property ( area ; property ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/qr-get-document-property.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-document-property","permalink":"/docs/commands/qr-get-document-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-document-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-document-property","title":"QR Get document property","slug":"/commands/qr-get-document-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET DESTINATION","permalink":"/docs/commands/qr-get-destination"},"next":{"title":"QR Get drop column","permalink":"/docs/commands/qr-get-drop-column"}}'),s=t("785893"),d=t("250065");let i={id:"qr-get-document-property",title:"QR Get document property",slug:"/commands/qr-get-document-property",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR Get document property"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"property"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Reference of the area"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"property"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"1 = Print Dialog, 2 = Document unit"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Value for the property"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"QR Get document property"})," command retrieves the display status for the print dialog box or the unit used for the document that are present in ",(0,s.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"property"}),", you can use the following constants, located in the ",(0,s.jsx)(n.em,{children:"QR Document Properties"})," constant theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr field separator"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Character code of the field separator. Default value is the system variable FldDelimit (Tab by default)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr printing dialog"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["Display of the print dialog box:",(0,s.jsx)(n.br,{}),"If value = 0, the print dialog is not displayed prior to printing.If value = 1, the print dialog is displayed prior to printing (default value)."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr record separator"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Character code of the record separator. Default value is the system variable RecDelimit (Carriage Return by default)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr unit"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsxs)(n.td,{children:["Document unit: ",(0,s.jsx)(n.br,{}),"If value = 0, the document unit is points.If value = 1, the document unit is centimeters.If value = 2, the document unit is inches."]})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass an invalid ",(0,s.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,s.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,s.jsx)(n.em,{children:"property"})," value, the error -9852 will be generated."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/qr-set-document-property",children:"QR SET DOCUMENT PROPERTY"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);