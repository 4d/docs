"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8995"],{156965:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>i,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/on-server-close-connection-database-method","title":"On Server Close Connection database method","description":"On Server Close Connection ($user Integer ; $toIgnore : Integer)","source":"@site/versioned_docs/version-20-R9/commands-legacy/on-server-close-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-close-connection-database-method","permalink":"/docs/commands/on-server-close-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-close-connection-database-method.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"on-server-close-connection-database-method","title":"On Server Close Connection database method","slug":"/commands/on-server-close-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On REST Authentication database method","permalink":"/docs/commands/on-rest-authentication-database-method"},"next":{"title":"On Server Open Connection database method","permalink":"/docs/commands/on-server-open-connection-database-method"}}'),s=t("785893"),o=t("250065");let d={id:"on-server-close-connection-database-method",title:"On Server Close Connection database method",slug:"/commands/on-server-close-connection-database-method",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"On Server Close Connection ($user : Integer ; $id : Integer ; $toIgnore : Integer)"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$user"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"User ID number used internally by 4D Server to identify users"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$id"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Connection ID number used internally by 4D Server to identify a connection"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$toIgnore"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Obsolete: Always returns 0 but must be declared"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"On Server Close Connection database method"})," is called once on the Server machine each time a 4D Client process ends."]}),"\n",(0,s.jsxs)(n.p,{children:["As for the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),", 4D Server passes three Long Integer parameters to the ",(0,s.jsx)(n.strong,{children:"On Server Close Connection database method"}),". On the other hand, no result is expected by 4D Server."]}),"\n",(0,s.jsx)(n.p,{children:"The method must therefore be explicitly declared with three Long Integer parameters:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0#DECLARE($user : Integer ; $id : Integer ; $toIgnore : Integer)\n"})}),"\n",(0,s.jsx)(n.p,{children:"This table details the information provided by the three parameters passed to the database method:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Parameter"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$user"}),(0,s.jsx)(n.td,{children:"User ID number used internally by 4D Server to identify users"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$id"}),(0,s.jsx)(n.td,{children:"Connection ID number used internally by 4D Server to identify a connection"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$toIgnore"}),(0,s.jsx)(n.td,{children:"Obsolete: Always returns 0 but must be declared"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"On Server Close Connection database method"})," is the exact counterpoint to the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),". For more information and a description of the ",(0,s.jsx)(n.strong,{children:"4D Client processes"}),", see the description of this database method."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["See the first example for ",(0,s.jsx)(n.a,{href:"/docs/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),"."]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var r=t(667294);let s={},o=r.createContext(s);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);