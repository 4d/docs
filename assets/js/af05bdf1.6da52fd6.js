"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70153"],{238766:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/cut-named-selection","title":"CUT NAMED SELECTION","description":"CUT NAMED SELECTION ( {aTable ;} name )","source":"@site/versioned_docs/version-20-R8/commands-legacy/cut-named-selection.md","sourceDirName":"commands-legacy","slug":"/commands/cut-named-selection","permalink":"/docs/20-R8/commands/cut-named-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcut-named-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"cut-named-selection","title":"CUT NAMED SELECTION","slug":"/commands/cut-named-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"COPY NAMED SELECTION","permalink":"/docs/20-R8/commands/copy-named-selection"},"next":{"title":"USE NAMED SELECTION","permalink":"/docs/20-R8/commands/use-named-selection"}}'),c=s("785893"),d=s("250065");let r={id:"cut-named-selection",title:"CUT NAMED SELECTION",slug:"/commands/cut-named-selection",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," ( {",(0,c.jsx)(n.em,{children:"aTable"})," ;} ",(0,c.jsx)(n.em,{children:"name"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"aTable"}),(0,c.jsx)(n.td,{children:"Table"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Table from which to cut selection, or Default table, if omitted"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"name"}),(0,c.jsx)(n.td,{children:"Text"}),(0,c.jsx)(n.td,{children:"\u2192"}),(0,c.jsx)(n.td,{children:"Name of the named selection to create"})]})]})]}),"\n",(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," creates a named selection ",(0,c.jsx)(n.em,{children:"name"})," and moves the current selection of ",(0,c.jsx)(n.em,{children:"aTable"})," to it. This command differs from ",(0,c.jsx)(n.a,{href:"/docs/20-R8/commands/copy-named-selection",children:"COPY NAMED SELECTION"})," in that it does not copy the current selection, but moves the current selection of ",(0,c.jsx)(n.em,{children:"table"})," itself."]}),"\n",(0,c.jsxs)(n.p,{children:["After the command has been executed, the current selection of ",(0,c.jsx)(n.em,{children:"aTable"})," in the current process becomes empty. Therefore, ",(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," should not be used while a record is being modified."]}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"})," is more memory efficient than ",(0,c.jsx)(n.a,{href:"/docs/20-R8/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),". With ",(0,c.jsx)(n.a,{href:"/docs/20-R8/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),", 4 bytes times the number of selected records is duplicated in memory. With ",(0,c.jsx)(n.strong,{children:"CUT NAMED SELECTION"}),", only the reference to the list is moved."]}),"\n",(0,c.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,c.jsxs)(n.p,{children:["The following method empties the current selection of a table ",(0,c.jsx)(n.em,{children:"[Customers]"}),":"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'\xa0CUT NAMED SELECTION([Customers];"ToBeCleared")\n\xa0CLEAR NAMED SELECTION("ToBeCleared")\n'})}),"\n",(0,c.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/20-R8/commands/clear-named-selection",children:"CLEAR NAMED SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/20-R8/commands/copy-named-selection",children:"COPY NAMED SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/20-R8/commands/use-named-selection",children:"USE NAMED SELECTION"})]}),"\n",(0,c.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Command number"}),(0,c.jsx)(n.td,{children:"334"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Thread safe"}),(0,c.jsx)(n.td,{children:"\u2713"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"Changes current selection"}),(0,c.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return r}});var t=s(667294);let c={},d=t.createContext(c);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);