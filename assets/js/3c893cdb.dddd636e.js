"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86278"],{707237:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/delete-user","title":"DELETE USER","description":"DELETE USER ( userID )","source":"@site/versioned_docs/version-20-R7/commands-legacy/delete-user.md","sourceDirName":"commands-legacy","slug":"/commands/delete-user","permalink":"/docs/20-R7/commands/delete-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-user.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"delete-user","title":"DELETE USER","slug":"/commands/delete-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current user","permalink":"/docs/20-R7/commands/current-user"},"next":{"title":"EDIT ACCESS","permalink":"/docs/20-R7/commands/edit-access"}}'),t=n("785893"),d=n("250065");let i={id:"delete-user",title:"DELETE USER",slug:"/commands/delete-user",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Error management",id:"error-management",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"DELETE USER"})," ( ",(0,t.jsx)(s.em,{children:"userID"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"userID"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"ID number of user to delete"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"DELETE USER"})," command deletes the user whose unique user ID number you pass in ",(0,t.jsx)(s.em,{children:"userID"}),". You must pass a valid user ID number returned by the ",(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/get-user-list",children:"GET USER LIST"})," command."]}),"\n",(0,t.jsxs)(s.p,{children:["If the user account does not exist or has already been deleted, the error -9979 is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"Only the Designer and Administrator can delete users. It is not possible for the Administrator to delete a user created by the Designer."}),"\n",(0,t.jsxs)(s.p,{children:["Deleted user names no longer appear in the Users editor displayed when you call ",(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/edit-access",children:"EDIT ACCESS"}),", nor in the Design mode. Note that the numbers for deleted users can be reassigned when new user accounts are created."]}),"\n",(0,t.jsx)(s.h4,{id:"error-management",children:"Error management"}),"\n",(0,t.jsxs)(s.p,{children:["If you do not have the proper access privileges for calling DELETE USER or if the Password system is already accessed by another process, an access privilege error is generated. You can catch this error with an error-handling method installed using ",(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/get-user-list",children:"GET USER LIST"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/is-user-deleted",children:"Is user deleted"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/20-R7/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"615"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modifies variables"}),(0,t.jsx)(s.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var r=n(667294);let t={},d=r.createContext(t);function i(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);