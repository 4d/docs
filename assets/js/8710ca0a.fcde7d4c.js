"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["94863"],{501822:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/execute-method","title":"EXECUTE METHOD","description":"EXECUTE METHOD ( methodName {; result {; param}}{; param2 ; ... ; paramN} )","source":"@site/versioned_docs/version-20-R9/commands-legacy/execute-method.md","sourceDirName":"commands-legacy","slug":"/commands/execute-method","permalink":"/docs/commands/execute-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fexecute-method.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"execute-method","title":"EXECUTE METHOD","slug":"/commands/execute-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current method name","permalink":"/docs/commands/current-method-name"},"next":{"title":"Get pointer","permalink":"/docs/commands/get-pointer"}}'),r=n("785893"),d=n("250065");let a={id:"execute-method",title:"EXECUTE METHOD",slug:"/commands/execute-method",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"EXECUTE METHOD"})," ( ",(0,r.jsx)(t.em,{children:"methodName"})," {; ",(0,r.jsx)(t.em,{children:"result"})," {; ",(0,r.jsx)(t.em,{children:"param"}),"}}{; ",(0,r.jsx)(t.em,{children:"param2"})," ; ... ; ",(0,r.jsx)(t.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"methodName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Name of project method to be executed"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"result"}),(0,r.jsx)(t.td,{children:"Variable, *"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Variable receiving the method result or * for a method not returning a result"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"param"}),(0,r.jsx)(t.td,{children:"Expression"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Parameter(s) of the method"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The EXECUTE METHOD command executes the ",(0,r.jsx)(t.em,{children:"methodName"})," project method while passing any parameters in ",(0,r.jsx)(t.em,{children:"param1...paramN"}),". You can pass the name of any method that can be called from the database or the component executing the command."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"result"}),", you can pass a variable which will receive the result of the execution of ",(0,r.jsx)(t.em,{children:"methodName"})," (value placed in $0 inside ",(0,r.jsx)(t.em,{children:"methodName"}),"). If the method does not return a result, pass ",(0,r.jsx)(t.em,{children:"*"})," as the second parameter. If the method does not return a result and does not require any parameters to be passed, pass only the ",(0,r.jsx)(t.em,{children:"methodName"})," parameter."]}),"\n",(0,r.jsx)(t.p,{children:"The execution context is preserved in the called method, which means that the current form and any current form event remain defined."}),"\n",(0,r.jsxs)(t.p,{children:["If you call this command from a component and pass a method name belonging to the host database in ",(0,r.jsx)(t.em,{children:"methodName"})," (or vice versa), the method must have been shared (\u201CShared by components and host database\u201D option, in the Method properties)."]}),"\n",(0,r.jsx)(t.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(t.p,{children:"If this command is executed correctly, the system variable OK is set to 1; otherwise, it is set to 0."}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/commands/execute-formula",children:"EXECUTE FORMULA"})}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1007"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2713"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Modifies variables"}),(0,r.jsx)(t.td,{children:"OK"})]})]})]})]})}function l(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return i},a:function(){return a}});var s=n(667294);let r={},d=s.createContext(r);function a(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);