"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29088"],{50142:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>a,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-allowed-methods","title":"GET ALLOWED METHODS","description":"GET ALLOWED METHODS ( methodsArray )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-allowed-methods.md","sourceDirName":"commands-legacy","slug":"/commands/get-allowed-methods","permalink":"/docs/commands/get-allowed-methods","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-allowed-methods.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-allowed-methods","title":"GET ALLOWED METHODS","slug":"/commands/get-allowed-methods","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Formula from string","permalink":"/docs/commands/formula-from-string"},"next":{"title":"Parse formula","permalink":"/docs/commands/parse-formula"}}'),r=n("785893"),o=n("250065");let d={id:"get-allowed-methods",title:"GET ALLOWED METHODS",slug:"/commands/get-allowed-methods",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let t={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET ALLOWED METHODS"})," ( ",(0,r.jsx)(t.em,{children:"methodsArray"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"methodsArray"}),(0,r.jsx)(t.td,{children:"Text array"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Array of method names"})]})})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"GET ALLOWED METHODS"})," command returns, in ",(0,r.jsx)(t.em,{children:"methodsArray"}),", the names of methods that can be used to write formulas. These methods are listed at the end of the list of commands in the editor."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, methods cannot be used in the Formula editor. Methods must be explicitly authorized using the ",(0,r.jsx)(t.a,{href:"/docs/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})," command. If this command has not been executed, ",(0,r.jsx)(t.strong,{children:"GET ALLOWED METHODS"})," returns an empty array."]}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"GET ALLOWED METHODS"})," returns exactly what was passed to the ",(0,r.jsx)(t.a,{href:"/docs/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})," command, i.e. a string array (the command creates and sizes the array). Also, if the wildcard (@) character is used to set a group of methods, the string containing the @ character is returned (and not the names of the methods of the group)."]}),"\n",(0,r.jsx)(t.p,{children:"This command is useful for storing the settings of the current set of authorized methods before the execution of a formula in a specific context (for instance, a quick report)."}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"This example authorizes a set of specific methods to create a report:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0//Store current parameters\n\xa0GET ALLOWED METHODS(methodsArray)\n\xa0\n\xa0\xa0//Define methods for quick report\n\xa0methodsarr_Reports{1}:="Reports_@"\n\xa0SET ALLOWED METHODS(methodsarr_Reports)\n\xa0QR REPORT([People];"MyReport")\n\xa0\n\xa0\xa0//Re-establish current parameters\n\xa0SET ALLOWED METHODS(methodsArray)\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/commands/set-allowed-methods",children:"SET ALLOWED METHODS"})}),"\n",(0,r.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"908"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return d}});var s=n(667294);let r={},o=s.createContext(r);function d(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);