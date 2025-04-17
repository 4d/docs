"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4112"],{793482:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/on-startup-database-method","title":"On Startup database method","description":"On Startup database method","source":"@site/versioned_docs/version-20-R9/commands-legacy/on-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-startup-database-method","permalink":"/docs/commands/on-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-startup-database-method.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"on-startup-database-method","title":"On Startup database method","slug":"/commands/on-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On SQL Authentication database method","permalink":"/docs/commands/on-sql-authentication-database-method"},"next":{"title":"On System Event database method","permalink":"/docs/commands/on-system-event-database-method"}}'),a=n("785893"),o=n("250065");let d={id:"on-startup-database-method",title:"On Startup database method",slug:"/commands/on-startup-database-method",displayed_sidebar:"docs"},r=void 0,i={},l=[{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.strong,{children:"On Startup database method"})}),"\n\n\n\n\n\n\n\n",(0,a.jsx)(t.table,{children:(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Does not require any parameters"}),(0,a.jsx)(t.th,{})]})})}),"\n",(0,a.jsx)(t.h2,{id:""}),"\n",(0,a.jsx)(t.p,{children:"The On Startup database method is called once when you open a database."}),"\n",(0,a.jsx)(t.p,{children:"This occurs in the following 4D environments:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"4D in local mode"}),"\n",(0,a.jsx)(t.li,{children:"4D in remote mode (on the client side, after the connection has been accepted by 4D Server)"}),"\n",(0,a.jsx)(t.li,{children:"4D application compiled and merged with 4D Volume Desktop"}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Note"}),": The On Startup database method is NOT invoked by 4D Server."]}),"\n",(0,a.jsx)(t.p,{children:"The On Startup database method is automatically invoked by 4D; unlike project methods, you cannot call this database method yourself by programming. You can however execute it from the Method editor. You can also use subroutines."}),"\n",(0,a.jsx)(t.p,{children:"The On Startup database method is the perfect place to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Initialize interprocess variables that you will use during the whole working session."}),"\n",(0,a.jsx)(t.li,{children:"Start processes automatically when a database is opened."}),"\n",(0,a.jsx)(t.li,{children:"Load Preferences or Settings saved for this purpose during the previous working session."}),"\n",(0,a.jsxs)(t.li,{children:["Prevent the opening of the database if a condition is not met (i.e., missing system resources) by explicitly calling ",(0,a.jsx)(t.a,{href:"/docs/commands/quit-4d",children:"QUIT 4D"}),"."]}),"\n",(0,a.jsx)(t.li,{children:"Perform any other actions that you want to be performed automatically each time a database is opened."}),"\n"]}),"\n",(0,a.jsxs)(t.p,{children:["However, we strongly recommend that you do NOT launch print jobs from the ",(0,a.jsx)(t.strong,{children:"On Startup database method"}),"."]}),"\n",(0,a.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,a.jsxs)(t.p,{children:["See the example in the ",(0,a.jsx)(t.a,{href:"/docs/commands/semaphore",children:"Semaphore"})," section."]}),"\n",(0,a.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Database Methods"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/commands/quit-4d",children:"QUIT 4D"})]}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Command number"}),(0,a.jsx)(t.td,{children:"905263"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Thread safe"}),(0,a.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return d}});var s=n(667294);let a={},o=s.createContext(a);function d(e){let t=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);