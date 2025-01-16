"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35162"],{306710:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>o,metadata:()=>s,assets:()=>h,toc:()=>a,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/method-open-path","title":"METHOD OPEN PATH","description":"METHOD OPEN PATH ( path {; line}{; *} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/method-open-path.md","sourceDirName":"commands-legacy","slug":"/commands/method-open-path","permalink":"/docs/commands/method-open-path","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmethod-open-path.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"method-open-path","title":"METHOD OPEN PATH","slug":"/commands/method-open-path","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"METHOD GET PATHS FORM","permalink":"/docs/commands/method-get-paths-form"},"next":{"title":"METHOD RESOLVE PATH","permalink":"/docs/commands/method-resolve-path"}}'),d=t("785893"),r=t("250065");let o={id:"method-open-path",title:"METHOD OPEN PATH",slug:"/commands/method-open-path",displayed_sidebar:"docs"},i=void 0,h={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"METHOD OPEN PATH"})," ( ",(0,d.jsx)(n.em,{children:"path"})," {; ",(0,d.jsx)(n.em,{children:"line"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"path"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Path of method to open"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"line"}),(0,d.jsx)(n.td,{children:"Number"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Line number"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operator"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"If passed = command applies to host database when executed from a component (parameter ignored outside of this context)"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"METHOD OPEN PATH"})," command opens, in the 4D Method editor, the method whose internal pathname is passed in the ",(0,d.jsx)(n.em,{children:"path"})," parameter."]}),"\n",(0,d.jsx)(n.p,{children:"The command is asynchronous, it returns immediately to the calling method and does not wait for the method editor to be open."}),"\n",(0,d.jsxs)(n.p,{children:["This command can open all method types and class functions. For more details, see ",(0,d.jsx)(n.em,{children:"Path syntax"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["The method must already exist. If the ",(0,d.jsx)(n.em,{children:"path"}),' parameter does not correspond to an existing method, the error -9801 "Cannot open method" is returned.']}),"\n",(0,d.jsxs)(n.p,{children:["You can execute this command from a component, but in this case, you must pass the ",(0,d.jsx)(n.em,{children:"*"})," parameter because access to the component code is read-only. If you omit the ",(0,d.jsx)(n.em,{children:"*"})," parameter in this context, the error -9763 is generated"]}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"Design Object Access Commands"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/method-get-path",children:"METHOD Get path"})]}),"\n",(0,d.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"1213"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let d={},r=s.createContext(d);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);