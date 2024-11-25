"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52877"],{455368:function(e,s,n){n.r(s),n.d(s,{metadata:()=>t,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/on-web-legacy-close-session-database-method","title":"On Web Legacy Close Session database method","description":"On Web Legacy Close Session database method","source":"@site/versioned_docs/version-20-R7/commands-legacy/on-web-legacy-close-session-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-web-legacy-close-session-database-method","permalink":"/docs/es/commands/on-web-legacy-close-session-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-web-legacy-close-session-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-web-legacy-close-session-database-method","title":"On Web Legacy Close Session database method","slug":"/commands/on-web-legacy-close-session-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Web Connection database method","permalink":"/docs/es/commands/on-web-connection-database-method"},"next":{"title":"Date and Time","permalink":"/docs/es/category/date-and-time"}}'),a=n("785893"),o=n("250065");let i={id:"on-web-legacy-close-session-database-method",title:"On Web Legacy Close Session database method",slug:"/commands/on-web-legacy-close-session-database-method",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Compatibility Note",id:"compatibility-note",level:4},{value:"See also",id:"see-also",level:4}];function r(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.p,{children:(0,a.jsx)(s.strong,{children:"On Web Legacy Close Session database method"})}),"\n\n\n\n\n\n\n\n",(0,a.jsx)(s.table,{children:(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Does not require any parameters"}),(0,a.jsx)(s.th,{})]})})}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,a.jsx)(s.h4,{id:"compatibility-note",children:"Compatibility Note"}),"\n",(0,a.jsxs)(s.p,{children:["This database method can only be used with ",(0,a.jsx)(s.strong,{children:"legacy web sessions"}),", available in databases converted from versions prior to 4D v18 R6. It is never called when ",(0,a.jsx)(s.strong,{children:"scalable web sessions"})," mode is enabled (recommended in 4D v18 R6 and higher). For more information, please refer to the ",(0,a.jsx)(s.em,{children:"Web Sessions Management (Legacy)"})," section."]}),"\n",(0,a.jsx)(s.h4,{id:""}),"\n",(0,a.jsxs)(s.p,{children:["The ",(0,a.jsx)(s.strong,{children:"On Web Legacy Close Session database method"})," is called by the 4D Web server each time a Web session is about to be closed. A session can be closed in the following cases:"]}),"\n",(0,a.jsxs)(s.ul,{children:["\n",(0,a.jsxs)(s.li,{children:["when the maximum number of simultaneous sessions is reached (100 by default, modifiable using the ",(0,a.jsx)(s.a,{href:"web-set-option.md",children:"WEB SET OPTION"})," command), and 4D needs to create new ones (4D automatically kills the process of the oldest inactive session),"]}),"\n",(0,a.jsxs)(s.li,{children:["when the maximum period of inactivity for the session process is reached (480 minutes by default, modifiable using the ",(0,a.jsx)(s.a,{href:"web-set-option.md",children:"WEB SET OPTION"})," command),"]}),"\n",(0,a.jsxs)(s.li,{children:["when the ",(0,a.jsx)(s.a,{href:"web-legacy-close-session.md",children:"WEB LEGACY CLOSE SESSION"})," command is called."]}),"\n"]}),"\n",(0,a.jsxs)(s.p,{children:["When this database method is called, the context of the session (variables and selections generated by the user) is still valid. This means that you can save data related to the session in order to be able to use them again subsequently, more specifically using the ",(0,a.jsx)(s.a,{href:"qr-set-destination.md",children:"QR SET DESTINATION"}),"."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Note:"})," In the context of a 4D Mobile session (which can generate several processes), the ",(0,a.jsx)(s.strong,{children:"On Web Legacy Close Session database method"})," is called for each Web process that is closed, allowing you to save all types of data (variables, selection, etc.) generated by the 4D Mobile session process."]}),"\n",(0,a.jsxs)(s.p,{children:["An example of the ",(0,a.jsx)(s.strong,{children:"On Web Legacy Close Session database method"})," is provided in the ",(0,a.jsx)(s.em,{children:"Web Sessions Management (Legacy)"})," section."]}),"\n",(0,a.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"web-legacy-close-session.md",children:"WEB LEGACY CLOSE SESSION"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.em,{children:"Web Sessions Management (Legacy)"})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(r,{...e})}):r(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var t=n(667294);let a={},o=t.createContext(a);function i(e){let s=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);