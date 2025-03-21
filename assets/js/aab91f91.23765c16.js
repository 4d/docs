"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81459"],{363919:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>o,toc:()=>l,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/get-user-list","title":"GET USER LIST","description":"GET USER LIST ( userNames ; userNumbers )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-user-list.md","sourceDirName":"commands-legacy","slug":"/commands/get-user-list","permalink":"/docs/commands/get-user-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-user-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-user-list","title":"GET USER LIST","slug":"/commands/get-user-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get plugin access","permalink":"/docs/commands/get-plugin-access"},"next":{"title":"GET USER PROPERTIES","permalink":"/docs/commands/get-user-properties"}}'),t=r("785893"),i=r("250065");let d={id:"get-user-list",title:"GET USER LIST",slug:"/commands/get-user-list",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Error management",id:"error-management",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET USER LIST"})," ( ",(0,t.jsx)(s.em,{children:"userNames"})," ; ",(0,t.jsx)(s.em,{children:"userNumbers"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userNames"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"User names as they appear in the Password editor window"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userNumbers"}),(0,t.jsx)(s.td,{children:"Array integer"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Corresponding unique user ID numbers"})]})]})]}),"\n",(0,t.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["GET USER LIST populates the arrays ",(0,t.jsx)(s.em,{children:"userNames"})," and ",(0,t.jsx)(s.em,{children:"userNumbers"})," with the names and unique ID numbers of the users as they appear in the Passwords window."]}),"\n",(0,t.jsxs)(s.p,{children:["The array ",(0,t.jsx)(s.em,{children:"userNames"})," is filled with the user names displayed in the Passwords window, including users whose accounts are disabled (user names displayed in green in the Passwords window)."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," Use the ",(0,t.jsx)(s.a,{href:"/docs/commands/is-user-deleted",children:"Is user deleted"})," command to detect deleted users."]}),"\n",(0,t.jsxs)(s.p,{children:["The array ",(0,t.jsx)(s.em,{children:"userNumbers"}),", synchronized with ",(0,t.jsx)(s.em,{children:"userNames"}),", is filled with the corresponding unique user ID numbers."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note for binary databases:"})," Group and user ID values depend on their creator (Designer, Administrator, or affiliated group owner). For more information, please refer to the ",(0,t.jsx)(s.em,{children:"User and group ID ranges"})," paragraph."]}),"\n",(0,t.jsx)(s.h2,{id:"error-management",children:"Error management"}),"\n",(0,t.jsxs)(s.p,{children:["If you do not have the proper access privileges for calling GET USER LIST or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(s.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/commands/get-group-list",children:"GET GROUP LIST"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,t.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"609"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifies variables"}),(0,t.jsx)(s.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return d}});var n=r(667294);let t={},i=n.createContext(t);function d(e){let s=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);