"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47714"],{126780:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/qr-get-command-status","title":"QR Get command status","description":"QR Get command status ( area ; command {; value} ) : Integer","source":"@site/versioned_docs/version-20-R9/commands-legacy/qr-get-command-status.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-command-status","permalink":"/docs/commands/qr-get-command-status","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-command-status.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"qr-get-command-status","title":"QR Get command status","slug":"/commands/qr-get-command-status","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR GET BORDERS","permalink":"/docs/commands/qr-get-borders"},"next":{"title":"QR GET DESTINATION","permalink":"/docs/commands/qr-get-destination"}}'),r=t("785893"),d=t("250065");let a={id:"qr-get-command-status",title:"QR Get command status",slug:"/commands/qr-get-command-status",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR Get command status"})," ( ",(0,r.jsx)(n.em,{children:"area"})," ; ",(0,r.jsx)(n.em,{children:"command"})," {; ",(0,r.jsx)(n.em,{children:"value"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"area"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Reference of the area"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"command"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Command number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"value"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Value for the selected sub-item"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Command status"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"QR Get command status"})," command returns 0 if the ",(0,r.jsx)(n.em,{children:"command"})," is disabled or 1 if it is enabled."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"value"})," returns the value of the selected sub-item, if any. For example, if the command that was selected is the ",(0,r.jsx)(n.strong,{children:"Font"})," menu (1000) and the font selected was \u201CArial\u201D, ",(0,r.jsx)(n.em,{children:"value"})," would return \u201CArial\u201D, or if the command that was selected is a color menu (1002, 1003 or 1004), ",(0,r.jsx)(n.em,{children:"value"})," would return the color number."]}),"\n",(0,r.jsx)(n.p,{children:"You can use the command in two types of contexts:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"As a simple statement to determine whether a command is enabled or disabled."}),"\n",(0,r.jsxs)(n.li,{children:["In the method installed by ",(0,r.jsx)(n.a,{href:"/docs/commands/qr-on-command",children:"QR ON COMMAND"}),", to allow you to know which sub-item was selected. In that method, ",(0,r.jsx)(n.em,{children:"$1"})," is the reference of the area and ",(0,r.jsx)(n.em,{children:"$2"})," is the number of the command."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"command"}),", you can pass a value or one of the constants of the ",(0,r.jsx)(n.em,{children:"QR Commands"})," constant theme."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass an invalid ",(0,r.jsx)(n.em,{children:"area"})," number, the error -9850 will be generated.",(0,r.jsx)(n.br,{}),"\nIf you pass an invalid ",(0,r.jsx)(n.em,{children:"command"})," number, the error -9852 will be generated."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/qr-on-command",children:"QR ON COMMAND"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"792"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return a}});var s=t(667294);let r={},d=s.createContext(r);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);