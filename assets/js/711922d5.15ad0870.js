"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84687"],{711478:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/table-name","title":"Table name","description":"Table name ( tableNum\xa0|\xa0tablePtr ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/table-name.md","sourceDirName":"commands-legacy","slug":"/commands/table-name","permalink":"/docs/commands/table-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"table-name","title":"Table name","slug":"/commands/table-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Table","permalink":"/docs/commands/table"},"next":{"title":"Styled Text","permalink":"/docs/category/styled-text"}}'),a=t("785893"),r=t("250065");let l={id:"table-name",title:"Table name",slug:"/commands/table-name",displayed_sidebar:"docs"},d=void 0,i={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Table name"})," ( tableNum\xa0|\xa0tablePtr ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"tableNum\xa0|\xa0tablePtr"}),(0,a.jsx)(n.td,{children:"Integer, Pointer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Table number or Table pointer"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Function result"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Name of the table"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The Table name command returns the name of the table whose number or pointer you pass in ",(0,a.jsx)(n.em,{children:"tableNum"})," or ",(0,a.jsx)(n.em,{children:"tablePtr"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"The following is an example of a generic method that displays the records of a table. The reference to the table is passed as a pointer to the table. The Table name command is used to include the name of the table in the title bar for the window:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// SHOW CURRENT SELECTION Project method\n\xa0\xa0// SHOW CURRENT SELECTION ( Pointer )\n\xa0\xa0// SHOW CURRENT SELECTION (->[Table])\n\xa0\n\xa0SET WINDOW TITLE("Records for "+Table name($1))\xa0//Sets the window title\n\xa0DISPLAY SELECTION($1->)\xa0//Displays the selection\n'})}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/commands/field-name",children:"Field name"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/last-table-number",children:"Last table number"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/set-table-titles",children:"SET TABLE TITLES"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/commands/table",children:"Table"})]}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"256"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let a={},r=s.createContext(a);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);