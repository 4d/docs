"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38758"],{115516:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/soap-get-info","title":"SOAP Get info","description":"SOAP Get info ( infoNum ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/soap-get-info.md","sourceDirName":"commands-legacy","slug":"/commands/soap-get-info","permalink":"/docs/20-R7/commands/soap-get-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-get-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"soap-get-info","title":"SOAP Get info","slug":"/commands/soap-get-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SOAP DECLARATION","permalink":"/docs/20-R7/commands/soap-declaration"},"next":{"title":"SOAP REJECT NEW REQUESTS","permalink":"/docs/20-R7/commands/soap-reject-new-requests"}}'),r=t("785893"),i=t("250065");let o={id:"soap-get-info",title:"SOAP Get info",slug:"/commands/soap-get-info",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"SOAP Get info"})," ( ",(0,r.jsx)(n.em,{children:"infoNum"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"infoNum"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number of type of SOAP info to get"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"SOAP Information"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"SOAP Get info"})," command retrieves, in the form of a character string, the different types of information concerning a SOAP request."]}),"\n",(0,r.jsxs)(n.p,{children:["When you process a SOAP request, it can be useful to obtain additional information \u2014 other than the RPC parameter values \u2014 about the request. For instance, for security reasons, you can use this command in the ",(0,r.jsx)(n.em,{children:"On Web Authentication Database Method"})," to find out the name of the requested Web Service method."]}),"\n",(0,r.jsxs)(n.p,{children:["Pass the number of the type of SOAP information you want to get in the ",(0,r.jsx)(n.em,{children:"infoNum"})," parameter. You can use the following predefined constants, located in the ",(0,r.jsx)(n.em,{children:"Web Services (Server)"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP method name"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsx)(n.td,{children:"Name of the Web Service method about to be executed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"SOAP service name"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsx)(n.td,{children:"Name of the Web Service to which the method belongs"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Also for security reasons, it is possible to set the maximum size for Web Services requests sent to 4D. This configuration is carried out using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," command."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/soap-send-fault",children:"SOAP SEND FAULT"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"784"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);