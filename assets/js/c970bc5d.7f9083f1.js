"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86157"],{488737:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/set-timeout","title":"SET TIMEOUT","description":"SET TIMEOUT ( seconds )","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-timeout.md","sourceDirName":"commands-legacy","slug":"/commands/set-timeout","permalink":"/docs/commands/set-timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-timeout.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-timeout","title":"SET TIMEOUT","slug":"/commands/set-timeout","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET CHANNEL","permalink":"/docs/commands/set-channel"},"next":{"title":"USE CHARACTER SET","permalink":"/docs/commands/use-character-set"}}'),r=t("785893"),i=t("250065");let d={id:"set-timeout",title:"SET TIMEOUT",slug:"/commands/set-timeout",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET TIMEOUT"})," ( ",(0,r.jsx)(n.em,{children:"seconds"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"seconds"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Seconds until the timeout"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SET TIMEOUT"})," specifies how much time a serial port command has to complete. If the serial port command does not complete within the specified time, ",(0,r.jsx)(n.em,{children:"seconds"}),", the serial port command is canceled, an error -9990 is generated, and the OK system variable is set to 0. You can catch the error with an error-handling method installed using ",(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Note that the time is the total time allowed for the command to execute, not the time between characters received. To cancel a previous setting and stop monitoring serial port communication, use a setting of 0 for ",(0,r.jsx)(n.em,{children:"seconds"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"The commands that are affected by the timeout setting are:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/commands/receive-record",children:"RECEIVE RECORD"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/commands/receive-variable",children:"RECEIVE VARIABLE"})}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example sets the serial port to receive data. It then sets a time-out. The data is read with ",(0,r.jsx)(n.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"}),". If the data is not received in time, an error occurs:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(MacOS serial port;Speed 9600+Data bits 8+Stop bits one+Parity none)\xa0// Open Serial Port\n\xa0SET TIMEOUT(10)\xa0// Set the timeout for 10 seconds\n\xa0ON ERR CALL("CATCH COM ERRORS")\xa0// Do not let the method being interrupted\n\xa0RECEIVE PACKET(vtBuffer;Char(13))\xa0// Read until a carriage return is met\n\xa0If(OK=0)\n\xa0\xa0\xa0\xa0ALERT("Error receiving data.")\n\xa0Else\n\xa0\xa0\xa0\xa0[People]Name:=vtBuffer\xa0// Save received data in a field\n\xa0End if\n\xa0ON ERR CALL("")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/receive-buffer",children:"RECEIVE BUFFER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/receive-packet",children:"RECEIVE PACKET"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/receive-record",children:"RECEIVE RECORD"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/receive-variable",children:"RECEIVE VARIABLE"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"268"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);