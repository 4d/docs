"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64289"],{587390:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/send-record","title":"SEND RECORD","description":"SEND RECORD {( aTable )}","source":"@site/versioned_docs/version-20-R8/commands-legacy/send-record.md","sourceDirName":"commands-legacy","slug":"/commands/send-record","permalink":"/docs/20-R8/commands/send-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsend-record.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"send-record","title":"SEND RECORD","slug":"/commands/send-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SEND PACKET","permalink":"/docs/20-R8/commands/send-packet"},"next":{"title":"SEND VARIABLE","permalink":"/docs/20-R8/commands/send-variable"}}'),t=r("785893"),d=r("250065");let c={id:"send-record",title:"SEND RECORD",slug:"/commands/send-record",displayed_sidebar:"docs"},o=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SEND RECORD"})," {( ",(0,t.jsx)(n.em,{children:"aTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"aTable"}),(0,t.jsx)(n.td,{children:"Table"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Table from which to send the current record, or Default table, if omitted"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SEND RECORD"})," sends the current record of ",(0,t.jsx)(n.em,{children:"aTable"})," to the serial port or document opened by the ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/set-channel",children:"SET CHANNEL"})," command. The record is sent with a special internal format that can be read only by ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/receive-record",children:"RECEIVE RECORD"}),". If no current record exists, SEND RECORD has no effect."]}),"\n",(0,t.jsx)(n.p,{children:"The complete record is sent. This means that pictures and BLOBs stored in or with the record are also sent."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Important:"})," When records are being sent and received using SEND RECORD and ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/receive-record",children:"RECEIVE RECORD"}),", the source table structure and the destination table structure must be compatible. If they are not, 4D will convert values according to the table definitions when ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/receive-record",children:"RECEIVE RECORD"})," is executed."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," If you send a record to a document using this command, the document must have been opened using the ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/set-channel",children:"SET CHANNEL"})," command. You cannot use SEND RECORD with a document opened with ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/open-document",children:"Open document"}),", ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/create-document",children:"Create document"})," or ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/append-document",children:"Append document"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Compatibility note:"})," Beginning with version 11 of 4D, this command no longer supports subtables."]}),"\n",(0,t.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,t.jsxs)(n.p,{children:["See example for the ",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/receive-record",children:"RECEIVE RECORD"})," command."]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/receive-record",children:"RECEIVE RECORD"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/receive-variable",children:"RECEIVE VARIABLE"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R8/commands/send-variable",children:"SEND VARIABLE"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"78"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return c}});var s=r(667294);let t={},d=s.createContext(t);function c(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);