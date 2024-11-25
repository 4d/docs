"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57556"],{459528:function(e,t,a){a.r(t),a.d(t,{metadata:()=>n,contentTitle:()=>h,default:()=>l,assets:()=>r,toc:()=>i,frontMatter:()=>o});var n=JSON.parse('{"id":"commands-legacy/on-host-database-event-database-method","title":"On Host Database Event database method","description":"$1 -> On Host Database Event database method","source":"@site/versioned_docs/version-20-R7/commands-legacy/on-host-database-event-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-host-database-event-database-method","permalink":"/docs/commands/on-host-database-event-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-host-database-event-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-host-database-event-database-method","title":"On Host Database Event database method","slug":"/commands/on-host-database-event-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Exit database method","permalink":"/docs/commands/on-exit-database-method"},"next":{"title":"On Mobile App Action database method","permalink":"/docs/commands/on-mobile-app-action-database-method"}}'),s=a("785893"),d=a("250065");let o={id:"on-host-database-event-database-method",title:"On Host Database Event database method",slug:"/commands/on-host-database-event-database-method",displayed_sidebar:"docs"},h=void 0,r={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"$1 -> On Host Database Event database method"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"$1"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Event code"})]})})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"On Host Database Event database method"})," allows 4D components to execute code when the host database is opened and closed."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," For security reasons, in order to be able to call this database method, you must explicitly allow its execution in the host database. For more information about this point, refer to the ",(0,s.jsx)(t.em,{children:"Design Reference"})," manual."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"On Host Database Event database method"})," is executed automatically only in databases used as components of host databases (when it is authorized in the Settings of the host database). It is called when events related to the opening and closing of the host database occur."]}),"\n",(0,s.jsxs)(t.p,{children:["To process an event, you must test the value of the ",(0,s.jsx)(t.em,{children:"$1"}),' parameter inside the method, and compare it with one of the following constants, available in the "',(0,s.jsx)(t.em,{children:"Database Events"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"}),(0,s.jsx)(t.th,{children:"Comment"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"On after host database exit"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"4"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"})," of the host database has just finished running"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"On after host database startup"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"2"}),(0,s.jsxs)(t.td,{children:["The ",(0,s.jsx)(t.a,{href:"/docs/commands/on-startup-database-method",children:"On Startup database method"})," of the host database just finished running"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"On before host database exit"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"3"}),(0,s.jsxs)(t.td,{children:["The host database is closing. The ",(0,s.jsx)(t.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"})," of the host database has not yet been called. ",(0,s.jsx)(t.br,{}),"The ",(0,s.jsx)(t.a,{href:"/docs/commands/on-exit-database-method",children:"On Exit database method"})," of the host database is not called while the ",(0,s.jsx)(t.a,{href:"/docs/commands/on-host-database-event-database-method",children:"On Host Database Event database method"})," of the component is running"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"On before host database startup"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"1"}),(0,s.jsxs)(t.td,{children:["The host database has just been started. The ",(0,s.jsx)(t.a,{href:"/docs/commands/on-startup-database-method",children:"On Startup database method"})," method of the host database has not yet been called. ",(0,s.jsx)(t.br,{}),"The ",(0,s.jsx)(t.a,{href:"/docs/commands/on-startup-database-method",children:"On Startup database method"})," of the host database is not called while the ",(0,s.jsx)(t.a,{href:"/docs/commands/on-host-database-event-database-method",children:"On Host Database Event database method"})," of the component is running"]})]})]})]}),"\n",(0,s.jsx)(t.p,{children:"This allows 4D components to load and save preferences or user states related to the operation of the host database."}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"Example of typical structure of an On Host Database Event database method:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0\xa0// On Host Database Event database method\n\xa0var $1 : Integer\n\xa0Case of\n\xa0\xa0\xa0\xa0:($1=On before host database startup)\n\xa0\xa0// put code here that you want to execute before the "On Startup" database method\n\xa0\xa0// of the host database\n\xa0\xa0\xa0\xa0:($1=On after host database startup)\n\xa0\xa0// put code here that you want to execute after the "On Startup"\n\xa0\xa0// database method of the host database\n\xa0\xa0\xa0\xa0:($1=On before host database exit)\n\xa0\xa0// put code here that you want to execute before the "On Exit"\n\xa0\xa0// database method of the host database\n\xa0\xa0\xa0\xa0:($1=On after host database exit)\n\xa0\xa0// put code here that you want to execute after the "On Exit"\n\xa0\xa0// database method of the host database\n\xa0End case\n'})})]})}function l(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,a){a.d(t,{Z:function(){return h},a:function(){return o}});var n=a(667294);let s={},d=n.createContext(s);function o(e){let t=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);