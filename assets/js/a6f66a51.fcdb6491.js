"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7435"],{610394:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>c,toc:()=>o,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/receive-variable","title":"RECEIVE VARIABLE","description":"RECEIVE VARIABLE ( variable )","source":"@site/versioned_docs/version-20-R9/commands-legacy/receive-variable.md","sourceDirName":"commands-legacy","slug":"/commands/receive-variable","permalink":"/docs/commands/receive-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Freceive-variable.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"receive-variable","title":"RECEIVE VARIABLE","slug":"/commands/receive-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RECEIVE RECORD","permalink":"/docs/commands/receive-record"},"next":{"title":"SEND PACKET","permalink":"/docs/commands/send-packet"}}'),t=r("785893"),i=r("250065");let a={id:"receive-variable",title:"RECEIVE VARIABLE",slug:"/commands/receive-variable",displayed_sidebar:"docs"},d=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"System variables and sets",id:"system-variables-and-sets",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RECEIVE VARIABLE"})," ( ",(0,t.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"variable"}),(0,t.jsx)(n.td,{children:"Variable"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Variable in which to receive"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"RECEIVE VARIABLE"})," receives ",(0,t.jsx)(n.em,{children:"variable"}),", which was previously sent by ",(0,t.jsx)(n.a,{href:"/docs/commands/send-variable",children:"SEND VARIABLE"})," from the document or serial port previously opened by ",(0,t.jsx)(n.a,{href:"/docs/commands/set-channel",children:"SET CHANNEL"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In interpreted mode, if the variable does not exist prior to the call to ",(0,t.jsx)(n.strong,{children:"RECEIVE VARIABLE"}),", the variable is created, typed and assigned according to what has been received. In compiled mode, the variable must be of the same type as what is received. In both cases, the contents of the variable are replaced with what is received."]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Notes:"})}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["If you receive a variable from a document using this command, the document must have been opened using the ",(0,t.jsx)(n.a,{href:"/docs/commands/set-channel",children:"SET CHANNEL"})," command. You cannot use ",(0,t.jsx)(n.strong,{children:"RECEIVE VARIABLE"})," with a document opened with ",(0,t.jsx)(n.a,{href:"/docs/commands/open-document",children:"Open document"}),", ",(0,t.jsx)(n.a,{href:"/docs/commands/create-document",children:"Create document"})," or ",(0,t.jsx)(n.a,{href:"/docs/commands/append-document",children:"Append document"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["This command does not support array variables. If you want to send and receive arrays from a document or over a serial port, use the ",(0,t.jsx)(n.em,{children:"BLOB Commands"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["During the execution of ",(0,t.jsx)(n.strong,{children:"RECEIVE VARIABLE"}),", the user can interrupt the reception by pressing ",(0,t.jsx)(n.strong,{children:"Ctrl-Alt-Shift"})," (Windows) or ",(0,t.jsx)(n.strong,{children:"Command-Option-Shift"})," (Macintosh). This interruption generates an error -9994 that you can catch with an error-handling method installed using ",(0,t.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),". Usually, you only need to handle the interruption of a reception while communicating over a serial port."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["See example for the ",(0,t.jsx)(n.a,{href:"/docs/commands/receive-record",children:"RECEIVE RECORD"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,t.jsx)(n.p,{children:"The OK system variable is set to 1 if the variable is received. Otherwise, the OK system variable is set to 0."}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/receive-record",children:"RECEIVE RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/send-record",children:"SEND RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"81"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifies variables"}),(0,t.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var s=r(667294);let t={},i=s.createContext(t);function a(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);