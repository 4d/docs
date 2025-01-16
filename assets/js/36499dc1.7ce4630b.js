"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33146"],{643336:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/reject-new-remote-connections","title":"REJECT NEW REMOTE CONNECTIONS","description":"REJECT NEW REMOTE CONNECTIONS ( rejectStatus )","source":"@site/versioned_docs/version-20-R8/commands-legacy/reject-new-remote-connections.md","sourceDirName":"commands-legacy","slug":"/commands/reject-new-remote-connections","permalink":"/docs/commands/reject-new-remote-connections","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freject-new-remote-connections.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"reject-new-remote-connections","title":"REJECT NEW REMOTE CONNECTIONS","slug":"/commands/reject-new-remote-connections","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUIT 4D","permalink":"/docs/commands/quit-4d"},"next":{"title":"RELOAD PROJECT","permalink":"/docs/commands/reload-project"}}'),r=t("785893"),c=t("250065");let o={id:"reject-new-remote-connections",title:"REJECT NEW REMOTE CONNECTIONS",slug:"/commands/reject-new-remote-connections",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," ( ",(0,r.jsx)(n.em,{children:"rejectStatus"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rejectStatus"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"True if new connections are rejected, else false"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," command specifies whether or not the application server accepts new remote user connections."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rejectStatus"}),", pass ",(0,r.jsx)(n.strong,{children:"true"})," to reject new remote connections. Passing ",(0,r.jsx)(n.strong,{children:"false"}),", specifies that new remote connections are allowed."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note"}),": This command can only be executed on 4D Server. If the method calling the command is executed locally on a remote client or in 4D single user, ",(0,r.jsx)(n.strong,{children:"REJECT NEW REMOTE CONNECTIONS"})," does nothing."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to reject or accept new client connections:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Reject the new connections\n\xa0REJECT NEW REMOTE CONNECTIONS(True)\n\xa0\xa0// Execute the maintenance operation\n\xa0...\n\xa0\xa0// Accept the new connections\n\xa0REJECT NEW REMOTE CONNECTIONS(False)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/drop-remote-user",children:"DROP REMOTE USER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/application-info",children:"Application info"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/soap-reject-new-requests",children:"SOAP REJECT NEW REQUESTS"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1635"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let r={},c=s.createContext(r);function o(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);