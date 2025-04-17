"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98515"],{21175:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/self","title":"Self","description":"Self  : Pointer","source":"@site/versioned_docs/version-20-R8/commands-legacy/self.md","sourceDirName":"commands-legacy","slug":"/commands/self","permalink":"/docs/20-R8/commands/self","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fself.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"self","title":"Self","slug":"/commands/self","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESOLVE POINTER","permalink":"/docs/20-R8/commands/resolve-pointer"},"next":{"title":"Super","permalink":"/docs/20-R8/commands/super"}}'),i=t("785893"),r=t("250065");let o={id:"self",title:"Self",slug:"/commands/self",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Compatibility Note",id:"compatibility-note",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Self"}),"  : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Pointer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Pointer to form object (if any) whose method is currently being executed. Otherwise Nil (->[]) if outside of context"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"compatibility-note",children:"Compatibility Note"}),"\n",(0,i.jsxs)(n.p,{children:["This command is kept only for compatibility reasons. Starting with version 12 of 4D, it is recommended to use the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/object-get-pointer",children:"OBJECT Get pointer"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"Self"}),"  command returns a pointer to the object whose object method is currently being executed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Self"})," is used to reference a variable within its own object method. It returns a valid pointer when it is called from within an object method or from within a project method that is called directly or indirectly by an object method."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.strong,{children:"Self"})," is called out of context, it returns a ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/is-nil-pointer",children:"Is nil pointer"})," pointer (",(0,i.jsx)(n.em,{children:"->[]"}),")."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," ",(0,i.jsx)(n.strong,{children:"Self"})," is useful when several objects on a form need to perform the same task, yet operate on themselves."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," When it is used in the context of a list box, the function returns a pointer to the list box or the column of the list box depending on the context. For more information, please refer to the ",(0,i.jsx)(n.em,{children:"Managing List Box Objects"})," section."]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsxs)(n.p,{children:["See the example for the ",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/resolve-pointer",children:"RESOLVE POINTER"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/object-get-pointer",children:"OBJECT Get pointer"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/resolve-pointer",children:"RESOLVE POINTER"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/this",children:"This"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"308"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);