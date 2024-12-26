"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39616"],{896721:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>i,default:()=>m,assets:()=>o,toc:()=>l,frontMatter:()=>c});var d=JSON.parse('{"id":"commands-legacy/qr-execute-command","title":"QR EXECUTE COMMAND","description":"QR EXECUTE COMMAND ( area ; command )","source":"@site/versioned_docs/version-20-R7/commands-legacy/qr-execute-command.md","sourceDirName":"commands-legacy","slug":"/commands/qr-execute-command","permalink":"/docs/commands/qr-execute-command","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-execute-command.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-execute-command","title":"QR EXECUTE COMMAND","slug":"/commands/qr-execute-command","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR DELETE OFFSCREEN AREA","permalink":"/docs/commands/qr-delete-offscreen-area"},"next":{"title":"QR Find column","permalink":"/docs/commands/qr-find-column"}}'),r=s("785893"),t=s("250065");let c={id:"qr-execute-command",title:"QR EXECUTE COMMAND",slug:"/commands/qr-execute-command",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR EXECUTE COMMAND"})," ( ",(0,r.jsx)(n.em,{children:"area"})," ; ",(0,r.jsx)(n.em,{children:"command"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"area"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of the area"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"command"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Menu command to be executed"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"QR EXECUTE COMMAND"})," command executes the toolbar button command whose reference was passed in ",(0,r.jsx)(n.em,{children:"command"}),". The most common use for this command is to execute a command selected by the user and intercepted in your code via the ",(0,r.jsx)(n.a,{href:"/docs/commands/qr-on-command",children:"QR ON COMMAND"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"command"}),", pass a value or one of the following constants of the ",(0,r.jsx)(n.em,{children:"QR Commands"})," constant theme (only listed events are supported):"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr cmd generate"}),(0,r.jsx)(n.td,{children:"2008"}),(0,r.jsxs)(n.td,{children:["Use of command ",(0,r.jsx)(n.a,{href:"/docs/commands/qr-run",children:"QR RUN"})," recommended"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr cmd open"}),(0,r.jsx)(n.td,{children:"2001"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr cmd page setup"}),(0,r.jsx)(n.td,{children:"2006"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr cmd print preview"}),(0,r.jsx)(n.td,{children:"2007"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr cmd save"}),(0,r.jsx)(n.td,{children:"2002"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"qr cmd save as"}),(0,r.jsx)(n.td,{children:"2003"}),(0,r.jsx)(n.td,{})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass an invalid ",(0,r.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass an invalid ",(0,r.jsx)(n.em,{children:"command"})," number, the error -9852 will be generated."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/qr-get-command-status",children:"QR Get command status"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/qr-on-command",children:"QR ON COMMAND"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"791"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return c}});var d=s(667294);let r={},t=d.createContext(r);function c(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);