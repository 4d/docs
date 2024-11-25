"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76362"],{441615:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>r});var t=JSON.parse('{"id":"commands-legacy/new-list","title":"New list","description":"New list  : ListRef","source":"@site/versioned_docs/version-20-R7/commands-legacy/new-list.md","sourceDirName":"commands-legacy","slug":"/commands/new-list","permalink":"/docs/commands/new-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnew-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"new-list","title":"New list","slug":"/commands/new-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Load list","permalink":"/docs/commands/load-list"},"next":{"title":"SAVE LIST","permalink":"/docs/commands/save-list"}}'),i=n("785893"),l=n("250065");let r={id:"new-list",title:"New list",slug:"/commands/new-list",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"New list"}),"  : ListRef"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Parameter"}),(0,i.jsx)(s.th,{children:"Type"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Description"})]})}),(0,i.jsx)(s.tbody,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Function result"}),(0,i.jsx)(s.td,{children:"ListRef"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"List reference number"})]})})]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"New list"})," creates a new, empty hierarchical list in memory and returns its unique list reference number."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"WARNING:"})," Hierarchical lists are held in memory. When you are finished with a hierarchical list, it is important to dispose of it and free the memory, using the command ",(0,i.jsx)(s.a,{href:"/docs/commands/clear-list",children:"CLEAR LIST"}),"."]}),"\n",(0,i.jsx)(s.p,{children:"Several other commands allow you to create hierarchical lists:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/commands/copy-list",children:"Copy list"})," duplicates a list from an existing list."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/commands/load-list",children:"Load list"})," creates a list by loading a Choice List created (manually or programmatically) in the Design enviornment List Editor."]}),"\n",(0,i.jsxs)(s.li,{children:[(0,i.jsx)(s.a,{href:"/docs/commands/blob-to-list",children:"BLOB to list"})," creates a list from the contents of a BLOB in which a list was previously saved."]}),"\n"]}),"\n",(0,i.jsxs)(s.p,{children:["After you have created a hierarchical list using ",(0,i.jsx)(s.strong,{children:"New list"}),", you can:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsxs)(s.li,{children:["Add items to that list, using the command ",(0,i.jsx)(s.a,{href:"/docs/commands/append-to-list",children:"APPEND TO LIST"})," or ",(0,i.jsx)(s.a,{href:"/docs/commands/insert-in-list",children:"INSERT IN LIST"}),"."]}),"\n",(0,i.jsxs)(s.li,{children:["Delete items from that list, using the command ",(0,i.jsx)(s.a,{href:"/docs/commands/delete-from-list",children:"DELETE FROM LIST"}),"."]}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(s.p,{children:["See example for the ",(0,i.jsx)(s.a,{href:"/docs/commands/append-to-list",children:"APPEND TO LIST"})," command."]}),"\n",(0,i.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/commands/append-to-list",children:"APPEND TO LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/commands/blob-to-list",children:"BLOB to list"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/commands/clear-list",children:"CLEAR LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/commands/copy-list",children:"Copy list"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/commands/delete-from-list",children:"DELETE FROM LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/commands/insert-in-list",children:"INSERT IN LIST"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/commands/list-to-blob",children:"LIST TO BLOB"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/commands/load-list",children:"Load list"})]})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return r}});var t=n(667294);let i={},l=t.createContext(i);function r(e){let s=t.useContext(l);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(l.Provider,{value:s},e.children)}}}]);