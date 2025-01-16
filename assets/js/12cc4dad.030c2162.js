"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82342"],{566383:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/soap-send-fault","title":"SOAP SEND FAULT","description":"SOAP SEND FAULT ( faultType ; description )","source":"@site/versioned_docs/version-20-R8/commands-legacy/soap-send-fault.md","sourceDirName":"commands-legacy","slug":"/commands/soap-send-fault","permalink":"/docs/commands/soap-send-fault","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-send-fault.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"soap-send-fault","title":"SOAP SEND FAULT","slug":"/commands/soap-send-fault","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SOAP Request","permalink":"/docs/commands/soap-request"},"next":{"title":"Windows","permalink":"/docs/category/windows"}}'),r=t("785893"),i=t("250065");let d={id:"soap-send-fault",title:"SOAP SEND FAULT",slug:"/commands/soap-send-fault",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SOAP SEND FAULT"})," ( ",(0,r.jsx)(n.em,{children:"faultType"})," ; ",(0,r.jsx)(n.em,{children:"description"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"faultType"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"1 = Client fault, 2 = Server fault"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Description of error to be sent to SOAP client"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SOAP SEND FAULT"})," command returns an error to a SOAP client indicating the origin of the fault: client or server. Using this command lets you indicate an error to a client without having to return a result."]}),"\n",(0,r.jsx)(n.p,{children:"For instance, a fault on the client side may be detected when you publish a \u201CSquare_root\u201D Web Service and a client sends a request with a negative number; you can use this command to indicate to the client that a positive value is required."}),"\n",(0,r.jsx)(n.p,{children:"A possible fault on the server side may be, for instance, a lack of memory occurring during method execution."}),"\n",(0,r.jsxs)(n.p,{children:["Pass the origin of the error in ",(0,r.jsx)(n.em,{children:"faultType"}),". You can use the following predefined constants, located in the ",(0,r.jsx)(n.em,{children:"Web Services (Server)"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP client fault"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP server fault"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["Pass a description of the error in ",(0,r.jsx)(n.em,{children:"description"}),". If the client implementation is in conformity, the error can be processed."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"To go back to the example of the \u201CSquare_root\u201D Web Service provided in the command description, the following command can be used to process requests with negative numbers:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0SEND SOAP FAULT(SOAP client fault;"Positive values required")\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/soap-declaration",children:"SOAP DECLARATION"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/soap-get-info",children:"SOAP Get info"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"781"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let r={},i=s.createContext(r);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);