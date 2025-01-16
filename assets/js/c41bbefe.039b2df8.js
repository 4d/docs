"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29853"],{117845:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/component-list","title":"COMPONENT LIST","description":"COMPONENT LIST ( componentsArray )","source":"@site/versioned_docs/version-20-R8/commands-legacy/component-list.md","sourceDirName":"commands-legacy","slug":"/commands/component-list","permalink":"/docs/commands/component-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcomponent-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"component-list","title":"COMPONENT LIST","slug":"/commands/component-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Compact data file","permalink":"/docs/commands/compact-data-file"},"next":{"title":"CREATE DATA FILE","permalink":"/docs/commands/create-data-file"}}'),o=t("785893"),r=t("250065");let i={id:"component-list",title:"COMPONENT LIST",slug:"/commands/component-list",displayed_sidebar:"docs"},a=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"COMPONENT LIST"})," ( ",(0,o.jsx)(n.em,{children:"componentsArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"componentsArray"}),(0,o.jsx)(n.td,{children:"Text array"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Names of the components"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The COMPONENT LIST command sizes and fills the ",(0,o.jsx)(n.em,{children:"componentsArray"})," array with the names of the components loaded by the 4D application for the current host database."]}),"\n",(0,o.jsx)(n.p,{children:"When a database is opened, 4D loads the valid components found in the Components folder(s):"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"the Components folder that is next to the structure file (if any),"}),"\n",(0,o.jsx)(n.li,{children:"the Components folder that is next to the 4D application executable file."}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Reminder:"})," If the same component is placed in both locations, 4D will only load the one located next to the structure."]}),"\n",(0,o.jsxs)(n.p,{children:["This command can be called from the host database or from a component. If the database does not use any components, the ",(0,o.jsx)(n.em,{children:"componentsArray"})," array is returned empty."]}),"\n",(0,o.jsx)(n.p,{children:"The names of the components are the names of the structure files of the matrix databases (.4db, .4dc or .4dbase). This command can be used for setting up architectures and modular interfaces that offer additional functionalities according to the presence of components."}),"\n",(0,o.jsx)(n.p,{children:"For more information about 4D components, please refer to the Design Reference manual."}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/commands/plugin-list",children:"PLUGIN LIST"})}),"\n",(0,o.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"1001"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);