"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24712"],{642910:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"ViewPro/commands/vp-set-show-print-lines","title":"VP SET SHOW PRINT LINES","description":"VP SET SHOW PRINT LINES ( vpAreaName Boolean}{; sheet : Integer} )","source":"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-set-show-print-lines.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-show-print-lines","permalink":"/docs/20-R6/ViewPro/commands/vp-set-show-print-lines","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-show-print-lines.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-set-show-print-lines","title":"VP SET SHOW PRINT LINES"},"sidebar":"docs","previous":{"title":"VP SET SHEET OPTIONS","permalink":"/docs/20-R6/ViewPro/commands/vp-set-sheet-options"},"next":{"title":"VP SET TABLE COLUMN ATTRIBUTES","permalink":"/docs/20-R6/ViewPro/commands/vp-set-table-column-attributes"}}'),i=s("785893"),r=s("250065");let d={id:"vp-set-show-print-lines",title:"VP SET SHOW PRINT LINES"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP SET SHOW PRINT LINES"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text {; visible : Boolean}{; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"visible"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Print lines displayed if True (default), hidden if False"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"VP SET SHOW PRINT LINES"})," command  sets whether to display print preview lines in a spreadsheet.."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"visible"}),", pass ",(0,i.jsx)(n.code,{children:"True"})," to display the print lines, and ",(0,i.jsx)(n.code,{children:"False"})," to hide them. ",(0,i.jsx)(n.code,{children:"True"})," is passed by default."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If no index is specified, the command applies to the current sheet."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Indexing starts at 0."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The position of a spreadsheet's print lines varies according to that spreadsheet's page breaks."}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The following code displays print lines in a document's second sheet:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'VP SET SHOW PRINT LINES("ViewProArea";True;1)\n\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"set-show-print-lines",src:s(562758).Z+"",width:"1340",height:"844"})}),"\n",(0,i.jsx)(n.p,{children:"With a page break:"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"set-show-print-lines-with-page-break",src:s(522282).Z+"",width:"1340",height:"844"})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-get-show-print-lines",children:"4D Get show print lines"})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},522282:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-set-show-print-lines-page-break-97bd2bcc1240ad96dc5e8ea5e3d455c1.png"},562758:function(e,n,s){s.d(n,{Z:function(){return t}});let t=s.p+"assets/images/vp-set-show-print-lines-3554e1084d22cfbcd438e14c685db7d9.png"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);