"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53566"],{503503:function(e,t,n){n.r(t),n.d(t,{metadata:()=>a,contentTitle:()=>r,default:()=>h,assets:()=>i,toc:()=>l,frontMatter:()=>d});var a=JSON.parse('{"id":"commands-legacy/on-startup-database-method","title":"On Startup database method","description":"On Startup database method","source":"@site/versioned_docs/version-20-R7/commands-legacy/on-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-startup-database-method","permalink":"/docs/es/commands/on-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-startup-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-startup-database-method","title":"On Startup database method","slug":"/commands/on-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On SQL Authentication database method","permalink":"/docs/es/commands/on-sql-authentication-database-method"},"next":{"title":"On System Event database method","permalink":"/docs/es/commands/on-system-event-database-method"}}'),s=n("785893"),o=n("250065");let d={id:"on-startup-database-method",title:"On Startup database method",slug:"/commands/on-startup-database-method",displayed_sidebar:"docs"},r=void 0,i={},l=[{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"On Startup database method"})}),"\n\n\n\n\n\n\n\n",(0,s.jsx)(t.table,{children:(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Does not require any parameters"}),(0,s.jsx)(t.th,{})]})})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(t.h4,{id:""}),"\n",(0,s.jsx)(t.p,{children:"The On Startup database method is called once when you open a database."}),"\n",(0,s.jsx)(t.p,{children:"This occurs in the following 4D environments:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"4D in local mode"}),"\n",(0,s.jsx)(t.li,{children:"4D in remote mode (on the client side, after the connection has been accepted by 4D Server)"}),"\n",(0,s.jsx)(t.li,{children:"4D application compiled and merged with 4D Volume Desktop"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note"}),": The On Startup database method is NOT invoked by 4D Server."]}),"\n",(0,s.jsx)(t.p,{children:"The On Startup database method is automatically invoked by 4D; unlike project methods, you cannot call this database method yourself by programming. You can however execute it from the Method editor. You can also use subroutines."}),"\n",(0,s.jsx)(t.p,{children:"The On Startup database method is the perfect place to:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Initialize interprocess variables that you will use during the whole working session."}),"\n",(0,s.jsx)(t.li,{children:"Start processes automatically when a database is opened."}),"\n",(0,s.jsx)(t.li,{children:"Load Preferences or Settings saved for this purpose during the previous working session."}),"\n",(0,s.jsxs)(t.li,{children:["Prevent the opening of the database if a condition is not met (i.e., missing system resources) by explicitly calling ",(0,s.jsx)(t.a,{href:"quit-4d.md",children:"QUIT 4D"}),"."]}),"\n",(0,s.jsx)(t.li,{children:"Perform any other actions that you want to be performed automatically each time a database is opened."}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["However, we strongly recommend that you do NOT launch print jobs from the ",(0,s.jsx)(t.strong,{children:"On Startup database method"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["See the example in the ",(0,s.jsx)(t.a,{href:"semaphore.md",children:"Semaphore"})," section."]}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Database Methods"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/es/commands/on-exit-database-method",children:"On Exit database method"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"quit-4d.md",children:"QUIT 4D"})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return d}});var a=n(667294);let s={},o=a.createContext(s);function d(e){let t=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);