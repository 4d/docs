"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54427"],{485213:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/web-is-server-running","title":"WEB Is server running","description":"WEB Is server running : Boolean","source":"@site/versioned_docs/version-20-R9/commands-legacy/web-is-server-running.md","sourceDirName":"commands-legacy","slug":"/commands/web-is-server-running","permalink":"/docs/commands/web-is-server-running","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-is-server-running.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"web-is-server-running","title":"WEB Is server running","slug":"/commands/web-is-server-running","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB Is secured connection","permalink":"/docs/commands/web-is-secured-connection"},"next":{"title":"WEB LEGACY CLOSE SESSION","permalink":"/docs/commands/web-legacy-close-session"}}'),t=r("785893"),i=r("250065");let d={id:"web-is-server-running",title:"WEB Is server running",slug:"/commands/web-is-server-running",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"WEB Is server running"})," : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"True if the Web Server is running, otherwise False"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The new ",(0,t.jsx)(n.strong,{children:"WEB Is server running"})," command returns ",(0,t.jsx)(n.strong,{children:"True"})," if the 4D built-in Web server is running, and ",(0,t.jsx)(n.strong,{children:"False"})," if the Web server is off."]}),"\n",(0,t.jsx)(n.p,{children:"This command returns the running status of the Web Server where it is executed:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Execution context"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Returns the status of"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D stand-alone application"}),(0,t.jsx)(n.td,{children:"Local 4D Web server"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D Server"}),(0,t.jsx)(n.td,{children:"4D Server Web server"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D remote mode (local process)"}),(0,t.jsx)(n.td,{children:"Local 4D Web server"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D remote mode (4D Server stored procedure)"}),(0,t.jsx)(n.td,{children:"4D Server Web server"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"4D remote mode (other 4D remote stored procedure)"}),(0,t.jsx)(n.td,{children:"Remote 4D Web server"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"You want to check that the Web server is running:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0If(WEB Is server running)\n\xa0\xa0\xa0\xa0...\xa0//do appropriate actions\n\xa0End if\n"})}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1313"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var s=r(667294);let t={},i=s.createContext(t);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);