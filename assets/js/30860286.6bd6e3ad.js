"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["39906"],{136994:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/web-service-get-info","title":"WEB SERVICE Get info","description":"WEB SERVICE Get info ( infoType ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/web-service-get-info.md","sourceDirName":"commands-legacy","slug":"/commands/web-service-get-info","permalink":"/docs/20-R7/commands/web-service-get-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fweb-service-get-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"web-service-get-info","title":"WEB SERVICE Get info","slug":"/commands/web-service-get-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WEB SERVICE CALL","permalink":"/docs/20-R7/commands/web-service-call"},"next":{"title":"WEB SERVICE GET RESULT","permalink":"/docs/20-R7/commands/web-service-get-result"}}'),s=t("785893"),i=t("250065");let o={id:"web-service-get-info",title:"WEB SERVICE Get info",slug:"/commands/web-service-get-info",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WEB SERVICE Get info"})," ( ",(0,s.jsx)(n.em,{children:"infoType"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"infoType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Information to be retrieved"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Information about the last SOAP error"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WEB SERVICE Get info"})," command returns information about any error generated during the execution of the last SOAP request sent to a remote Web Service. This command should generally be called within an error-handling method installed by the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/on-err-call",children:"ON ERR CALL"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"infoType"})," parameter allows you to indicate the type of information that you want to obtain. You must pass one of the constants listed below, located in the ",(0,s.jsx)(n.em,{children:"Web Services (Client)"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Web Service detailed message"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsxs)(n.td,{children:["Detailed message describing the error. The type of message differs according to the main error type. ",(0,s.jsx)(n.br,{}),"- If the main error = 9910 (Soap fault): the cause of the SOAP fault is returned (e.g.: \u201Cthe remote method does not exist\u201D).",(0,s.jsx)(n.br,{}),"- If the main error = 9911 (Parser fault): the location of the error in the XML document is returned.",(0,s.jsx)(n.br,{}),"- If the main error = 9912 (HTTP fault):",(0,s.jsx)(n.br,{}),"- if the HTTP error is located in the interval [300-400] (problems linked to the location of the requested document), the new location of the requested URL is returned. ",(0,s.jsx)(n.br,{}),"- for any other HTTP error code, the  is returned. ",(0,s.jsx)(n.br,{}),"- If the main error = 9913 (Network fault): the cause of the network fault is returned (e.g.: \u201CServerAddress: DNS lookup failure\u201D)",(0,s.jsx)(n.br,{}),"- If the main error = 9914 (Internal fault): the cause of the internal fault is returned"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Web Service error code"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsxs)(n.td,{children:["Main error code (defined by 4D). This code is also returned in the Error system variable.",(0,s.jsx)(n.br,{}),"List of codes that may be returned:",(0,s.jsx)(n.br,{}),"9910: Soap fault (see also Web Service Fault Actor)",(0,s.jsx)(n.br,{}),"9911: Parser fault",(0,s.jsx)(n.br,{}),"9912: HTTP fault (see also Web Service HTTP Error code)",(0,s.jsx)(n.br,{}),"9913: Network fault",(0,s.jsx)(n.br,{}),"9914: Internal fault."]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Web Service fault actor"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsxs)(n.td,{children:["Cause of the error (returned by the SOAP protocol \u2014 to be used in the case of main error 9910).",(0,s.jsx)(n.br,{}),"- Version Mismatch",(0,s.jsx)(n.br,{}),"- Must Understand (the server was unable to interpret a parameter defined as mandatory)",(0,s.jsx)(n.br,{}),"- Sender Fault",(0,s.jsx)(n.br,{}),"- Receiver Fault",(0,s.jsx)(n.br,{}),"- Encoding Unknown"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Web Service HTTP status code"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"HTTP error code (to be used in case of main error 9912)."})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"An empty string is returned when no information is available, more particularly when the last SOAP request did not generate any errors."}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"780"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var r=t(667294);let s={},i=r.createContext(s);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);