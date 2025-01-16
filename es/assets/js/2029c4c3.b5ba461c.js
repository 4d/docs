"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26622"],{273959:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>o,metadata:()=>a,assets:()=>i,toc:()=>c,contentTitle:()=>d});var a=JSON.parse('{"id":"commands-legacy/on-server-startup-database-method","title":"On Server Startup database method","description":"On Server Startup database method","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-startup-database-method","permalink":"/docs/es/20-R7/commands/on-server-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-startup-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-startup-database-method","title":"On Server Startup database method","slug":"/commands/on-server-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Shutdown database method","permalink":"/docs/es/20-R7/commands/on-server-shutdown-database-method"},"next":{"title":"On SQL Authentication database method","permalink":"/docs/es/20-R7/commands/on-sql-authentication-database-method"}}'),s=n("785893"),r=n("250065");let o={id:"on-server-startup-database-method",title:"On Server Startup database method",slug:"/commands/on-server-startup-database-method",displayed_sidebar:"docs"},d=void 0,i={},c=[];function h(e){let t={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"On Server Startup database method"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(t.table,{children:(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Does not require any parameters"}),(0,s.jsx)(t.th,{})]})})}),"\n",(0,s.jsx)(t.h4,{id:""}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"On Server Startup database method"})," is called once on the server machine when you open a database with 4D Server. The ",(0,s.jsx)(t.strong,{children:"On Server Startup database method"})," is NOT invoked by any 4D environment other than 4D Server."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"On Server Startup database method"})," is the perfect place to:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Initialize interprocess variables that you will use during the whole 4D Server session."}),"\n",(0,s.jsxs)(t.li,{children:["Start ",(0,s.jsx)(t.em,{children:"Stored Procedures"})," automatically when a database is opened."]}),"\n",(0,s.jsx)(t.li,{children:"Load Preferences or Settings saved during the previous 4D Server session."}),"\n",(0,s.jsxs)(t.li,{children:["Prevent the opening of the database if a condition is not met (i.e., missing system resources) by explicitly calling ",(0,s.jsx)(t.a,{href:"/docs/es/20-R7/commands/quit-4d",children:"QUIT 4D"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Perform any other actions that you want performed automatically each time a database is opened."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["To automatically execute code on a client machine when a remote 4D connects to the server, use the ",(0,s.jsx)(t.a,{href:"/docs/es/20-R7/commands/on-startup-database-method",children:"On Startup database method"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," The ",(0,s.jsx)(t.strong,{children:"On Server Startup database method"})," is executed automatically, which means that no remote 4D can connect until the method has finished executing."]})]})}function l(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var a=n(667294);let s={},r=a.createContext(s);function o(e){let t=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);