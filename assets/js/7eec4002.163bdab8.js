"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62756"],{612195:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/users-to-blob","title":"USERS TO BLOB","description":"USERS TO BLOB ( users )","source":"@site/versioned_docs/version-20-R8/commands-legacy/users-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/users-to-blob","permalink":"/docs/commands/users-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fusers-to-blob.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"users-to-blob","title":"USERS TO BLOB","slug":"/commands/users-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"User in group","permalink":"/docs/commands/user-in-group"},"next":{"title":"Validate password","permalink":"/docs/commands/validate-password"}}'),r=n("785893"),d=n("250065");let i={id:"users-to-blob",title:"USERS TO BLOB",slug:"/commands/users-to-blob",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let s={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"USERS TO BLOB"})," ( ",(0,r.jsx)(s.em,{children:"users"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Parameter"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"users"}),(0,r.jsx)(s.td,{children:"Blob"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"BLOB that must contain users"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"User accounts (encrypted)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:[(0,r.jsx)(s.em,{children:"Compatibility Note:"})," This command only works in binary databases. It always returns an empty BLOB in projects."]})}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"USERS TO BLOB"})," command stores in the BLOB ",(0,r.jsx)(s.em,{children:"users"})," the list of all user accounts and database groups created by the Administrator."]}),"\n",(0,r.jsx)(s.p,{children:"Only the database Administrator or the Designer can execute this command. If another user tries to execute it, the command does nothing and a privilege error (-9949) is generated."}),"\n",(0,r.jsxs)(s.p,{children:["The generated BLOB is encrypted automatically and can only be read using the ",(0,r.jsx)(s.a,{href:"/docs/commands/blob-to-users",children:"BLOB TO USERS"})," command. You can store this BLOB in a file on your hard disk or in a field."]}),"\n",(0,r.jsx)(s.p,{children:"This command is the equivalent of recording groups and users from the Toolbar. The only difference is that it lets you store user accounts in a BLOB field and not just in a file."}),"\n",(0,r.jsx)(s.p,{children:"This lets you keep a backup of users in the database data and, as such, implements a backup mechanism as well as a system to load users automatically when a database structure file is updated (information related to user accounts are stored by 4D in the database structure file)."}),"\n",(0,r.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/commands/blob-to-users",children:"BLOB TO USERS"})}),"\n",(0,r.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Command number"}),(0,r.jsx)(s.td,{children:"849"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2717"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modifies variables"}),(0,r.jsx)(s.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var t=n(667294);let r={},d=t.createContext(r);function i(e){let s=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);