"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74255"],{705413:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/abort","title":"ABORT","description":"ABORT","source":"@site/versioned_docs/version-20-R8/commands-legacy/abort.md","sourceDirName":"commands-legacy","slug":"/commands/abort","permalink":"/docs/20-R8/commands/abort","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fabort.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"abort","title":"ABORT","slug":"/commands/abort","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Interruptions","permalink":"/docs/20-R8/commands/theme/Interruptions"},"next":{"title":"ASSERT","permalink":"/docs/20-R8/commands/assert"}}'),o=r("785893"),s=r("250065");let i={id:"abort",title:"ABORT",slug:"/commands/abort",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Historical Note",id:"historical-note",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"ABORT"})}),"\n\n\n\n\n\n\n\n",(0,o.jsx)(t.table,{children:(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Does not require any parameters"}),(0,o.jsx)(t.th,{})]})})}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"ABORT"})," command is used from within an error-handling project method installed using the command ",(0,o.jsx)(t.a,{href:"/docs/20-R8/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(t.p,{children:"If you do not have an error-handling project method, when an error occurs (for example, a database engine error) 4D displays its standard error dialog box and then interrupts the execution of your code. If the code being executed is:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"an object method, form method (or a project method called by a form or object method), the control returns to the form currently being displayed."}),"\n",(0,o.jsx)(t.li,{children:"a method called from a menu, the control returns to the menu bar or to the form currently being displayed."}),"\n",(0,o.jsx)(t.li,{children:"the master method of a process, the process then ends."}),"\n",(0,o.jsx)(t.li,{children:"a method called directly or indirectly by an import or export operation, the operation is stopped. The same is true for sequential queries or order by operations."}),"\n",(0,o.jsx)(t.li,{children:"And so on..."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"If you use an error-handling project method to catch errors, 4D neither displays its standard error dialog box nor interrupts the execution of your code. Instead, 4D calls your error-handling project method (that you can see as an exception handler), and resumes the execution to the next line of code in the method that triggered the error."}),"\n",(0,o.jsxs)(t.p,{children:["There are errors you can treat programmatically; for example, during an import operation, if you catch a database engine duplicated value error, you can \u201Ccover\u201D the error and pursue the import. However, there are errors that you cannot process and errors that you should not \u201Ccover.\u201D In these cases, you need to stop the execution by calling ",(0,o.jsx)(t.strong,{children:"ABORT"})," from within the error-handling project method."]}),"\n",(0,o.jsx)(t.h2,{id:"historical-note",children:"Historical Note"}),"\n",(0,o.jsxs)(t.p,{children:["Although the ",(0,o.jsx)(t.strong,{children:"ABORT"})," command is intended to be used only from within a error-handling project method, some members of the 4D community also use it to interrupt execution in other project methods. The fact that it works is only a side effect. We do not recommend the use of this command in methods other than error-handling methods."]}),"\n",(0,o.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/20-R8/commands/on-err-call",children:"ON ERR CALL"})}),"\n",(0,o.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Command number"}),(0,o.jsx)(t.td,{children:"156"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Thread safe"}),(0,o.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return d},a:function(){return i}});var n=r(667294);let o={},s=n.createContext(o);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);