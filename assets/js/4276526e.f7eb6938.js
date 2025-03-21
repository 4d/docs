"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70986"],{670007:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/send-variable","title":"SEND VARIABLE","description":"SEND VARIABLE ( variable )","source":"@site/versioned_docs/version-20-R7/commands-legacy/send-variable.md","sourceDirName":"commands-legacy","slug":"/commands/send-variable","permalink":"/docs/20-R7/commands/send-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-variable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"send-variable","title":"SEND VARIABLE","slug":"/commands/send-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND RECORD","permalink":"/docs/20-R7/commands/send-record"},"next":{"title":"SET CHANNEL","permalink":"/docs/20-R7/commands/set-channel"}}'),d=s("785893"),t=s("250065");let a={id:"send-variable",title:"SEND VARIABLE",slug:"/commands/send-variable",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SEND VARIABLE"})," ( ",(0,d.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"variable"}),(0,d.jsx)(n.td,{children:"Variable"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Variable to send"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["SEND VARIABLE sends ",(0,d.jsx)(n.em,{children:"variable"})," to the document or serial port previously opened by ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/set-channel",children:"SET CHANNEL"}),". The variable is sent with a special internal format that can be read only by ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/receive-variable",children:"RECEIVE VARIABLE"}),". SEND VARIABLE sends the complete variable (including its type and value)."]}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,d.jsxs)(n.ol,{children:["\n",(0,d.jsxs)(n.li,{children:["If you send a variable to a document using this command, the document must have been opened using the ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/set-channel",children:"SET CHANNEL"})," command. You cannot use SEND VARIABLE with a document opened with ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/open-document",children:"Open document"}),", ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/create-document",children:"Create document"})," or ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/append-document",children:"Append document"}),"."]}),"\n",(0,d.jsxs)(n.li,{children:["This command does not support array variables. If you want to send and receive arrays from a document or over a serial port, use the ",(0,d.jsx)(n.em,{children:"BLOB Commands"}),"."]}),"\n"]}),"\n",(0,d.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,d.jsxs)(n.p,{children:["See example for the ",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/receive-record",children:"RECEIVE RECORD"})," command."]}),"\n",(0,d.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/receive-record",children:"RECEIVE RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/send-record",children:"SEND RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/20-R7/commands/set-channel",children:"SET CHANNEL"})]}),"\n",(0,d.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Command number"}),(0,d.jsx)(n.td,{children:"80"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread safe"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return a}});var r=s(667294);let d={},t=r.createContext(d);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);