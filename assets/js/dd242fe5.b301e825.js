"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17779"],{889307:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/table-name","title":"Table name","description":"Table name ( tableNum ) Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/table-name.md","sourceDirName":"commands-legacy","slug":"/commands/table-name","permalink":"/docs/20-R7/commands/table-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"table-name","title":"Table name","slug":"/commands/table-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Table","permalink":"/docs/20-R7/commands/table"},"next":{"title":"Styled Text","permalink":"/docs/20-R7/commands/theme/Styled-Text"}}'),r=t("785893"),l=t("250065");let a={id:"table-name",title:"Table name",slug:"/commands/table-name",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Table name"})," ( ",(0,r.jsx)(n.em,{children:"tableNum"})," ) : Text",(0,r.jsx)(n.br,{}),(0,r.jsx)(n.strong,{children:"Table name"})," ( ",(0,r.jsx)(n.em,{children:"tablePtr"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"tableNum\xa0|\xa0tablePtr"}),(0,r.jsx)(n.td,{children:"Integer, Pointer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Table number or Table pointer"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Name of the table"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The Table name command returns the name of the table whose number or pointer you pass in ",(0,r.jsx)(n.em,{children:"tableNum"})," or ",(0,r.jsx)(n.em,{children:"tablePtr"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"The following is an example of a generic method that displays the records of a table. The reference to the table is passed as a pointer to the table. The Table name command is used to include the name of the table in the title bar for the window:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// SHOW CURRENT SELECTION Project method\n\xa0\xa0// SHOW CURRENT SELECTION ( Pointer )\n\xa0\xa0// SHOW CURRENT SELECTION (->[Table])\n\xa0\n\xa0SET WINDOW TITLE("Records for "+Table name($1))\xa0//Sets the window title\n\xa0DISPLAY SELECTION($1->)\xa0//Displays the selection\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/field-name",children:"Field name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/last-table-number",children:"Last table number"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-table-titles",children:"SET TABLE TITLES"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/table",children:"Table"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"256"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return a}});var s=t(667294);let r={},l=s.createContext(r);function a(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);