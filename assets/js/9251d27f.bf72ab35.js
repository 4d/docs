"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49325"],{669071:function(e,s,n){n.r(s),n.d(s,{default:()=>l,frontMatter:()=>a,metadata:()=>r,assets:()=>i,toc:()=>o,contentTitle:()=>h});var r=JSON.parse('{"id":"commands-legacy/verify-password-hash","title":"Verify password hash","description":"Verify password hash ( password ; hash ) : Boolean","source":"@site/versioned_docs/version-20-R9/commands-legacy/verify-password-hash.md","sourceDirName":"commands-legacy","slug":"/commands/verify-password-hash","permalink":"/docs/commands/verify-password-hash","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-password-hash.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"verify-password-hash","title":"Verify password hash","slug":"/commands/verify-password-hash","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"STOP MONITORING ACTIVITY","permalink":"/docs/commands/stop-monitoring-activity"},"next":{"title":"Transactions","permalink":"/docs/commands/theme/Transactions"}}'),d=n("785893"),t=n("250065");let a={id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},h=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"Error management",id:"error-management",level:3},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Verify password hash"})," ( ",(0,d.jsx)(s.em,{children:"password"})," ; ",(0,d.jsx)(s.em,{children:"hash"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Parameter"}),(0,d.jsx)(s.th,{children:"Type"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Description"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"password"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"The user's password.  Only the first 72 characters are used."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"hash"}),(0,d.jsx)(s.td,{children:"Text"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"A password hash."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Function result"}),(0,d.jsx)(s.td,{children:"Boolean"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"Returns TRUE if the password and hash match, otherwise returns FALSE."})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(s.p,{children:["The ",(0,d.jsx)(s.strong,{children:"Verify password hash"})," function verifies that the given ",(0,d.jsx)(s.em,{children:"hash"})," matches the given ",(0,d.jsx)(s.em,{children:"password"}),"."]}),"\n",(0,d.jsxs)(s.p,{children:["This function compares ",(0,d.jsx)(s.em,{children:"password"})," to a ",(0,d.jsx)(s.em,{children:"hash"})," generated by the ",(0,d.jsx)(s.a,{href:"/docs/commands/generate-password-hash",children:"Generate password hash"})," function."]}),"\n",(0,d.jsx)(s.h3,{id:"error-management",children:"Error management"}),"\n",(0,d.jsxs)(s.p,{children:["The following errors may be returned. You can review an error with the ",(0,d.jsx)(s.a,{href:"/docs/commands/last-errors",children:"Last errors"}),"  and ",(0,d.jsx)(s.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," commands."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"Number"})}),(0,d.jsx)(s.th,{children:(0,d.jsx)(s.strong,{children:"Message"})})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"850"}),(0,d.jsx)(s.td,{children:"Password-hash: Unsupported algorithm."})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"851"}),(0,d.jsx)(s.td,{children:"Password-hash: Consistency check failure."})]})]})]}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Reminder:"})," Only bcrypt algorithm is supported. If your hash was not generated using bcrypt, an error is returned."]}),"\n",(0,d.jsx)(s.h2,{id:"example",children:"Example"}),"\n",(0,d.jsxs)(s.p,{children:["This example verifies a password hash previously created by ",(0,d.jsx)(s.a,{href:"/docs/commands/generate-password-hash",children:"Generate password hash"})," and stored in a [Users] table with a newly entered password:"]}),"\n",(0,d.jsx)(s.pre,{children:(0,d.jsx)(s.code,{className:"language-4d",children:'\xa0var $password : Text\n\xa0$password:=Request("Please enter your password")\n\xa0\n\xa0If(Verify password hash($password;[Users]hash))\n\xa0\xa0\xa0\xa0ALERT("Good password")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Password error")\n\xa0End if\n'})}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Note:"})," The password is never stored on disk, only the hash. Using a remote 4D application, the hash could be produced on the client side. If instead, you use a JavaScript (or similar) based front end, the best practice for security is to create the hash on the server side. Of course, you should use a TLS encrypted network connection for security, as this requires transferring the password over the network."]}),"\n",(0,d.jsx)(s.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsx)(s.p,{children:(0,d.jsx)(s.a,{href:"/docs/commands/generate-password-hash",children:"Generate password hash"})}),"\n",(0,d.jsx)(s.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Command number"}),(0,d.jsx)(s.td,{children:"1534"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread safe"}),(0,d.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return h},a:function(){return a}});var r=n(667294);let d={},t=r.createContext(d);function a(e){let s=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function h(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);