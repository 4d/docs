"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63076"],{388473:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/php-get-full-response","title":"PHP GET FULL RESPONSE","description":"PHP GET FULL RESPONSE ( stdOut {; errLabels ; errValues} {; httpHeaderFields {; httpHeaderValues}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/php-get-full-response.md","sourceDirName":"commands-legacy","slug":"/commands/php-get-full-response","permalink":"/docs/20-R7/commands/php-get-full-response","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fphp-get-full-response.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"php-get-full-response","title":"PHP GET FULL RESPONSE","slug":"/commands/php-get-full-response","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PHP Execute","permalink":"/docs/20-R7/commands/php-execute"},"next":{"title":"PHP GET OPTION","permalink":"/docs/20-R7/commands/php-get-option"}}'),t=s("785893"),d=s("250065");let i={id:"php-get-full-response",title:"PHP GET FULL RESPONSE",slug:"/commands/php-get-full-response",displayed_sidebar:"docs"},l=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PHP GET FULL RESPONSE"})," ( ",(0,t.jsx)(n.em,{children:"stdOut"})," {; ",(0,t.jsx)(n.em,{children:"errLabels"})," ; ",(0,t.jsx)(n.em,{children:"errValues"}),"} {; ",(0,t.jsx)(n.em,{children:"httpHeaderFields"})," {; ",(0,t.jsx)(n.em,{children:"httpHeaderValues"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"stdOut"}),(0,t.jsx)(n.td,{children:"Text, Blob"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Contents of stdOut buffer"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errLabels"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Labels of errors"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errValues"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Values of errors"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"httpHeaderFields"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Names of HTTP headers"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"httpHeaderValues"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Values of HTTP headers"})]})]})]}),"\n",(0,t.jsx)(n.admonition,{title:"Compatibility",type:"info",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"PHP is deprecated in 4D"}),". It is now recommended to use the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/API/SystemWorkerClass",children:(0,t.jsx)(n.code,{children:"4D.SystemWorker class"})}),"."]})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsx)(n.p,{children:"The PHP GET FULL RESPONSE command lets you obtain additional information about the response returned by the PHP interpreter. This command is particularly useful in the case of an error occurring during execution of the script."}),"\n",(0,t.jsxs)(n.p,{children:["The PHP script can write data in the stdOut buffer (echo, print, etc.). The command returns the data directly in the ",(0,t.jsx)(n.em,{children:"stdOut"})," variable and applies the same conversion principles as described in the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/php-execute",children:"PHP Execute"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["The synchronized ",(0,t.jsx)(n.em,{children:"errLabels"})," and ",(0,t.jsx)(n.em,{children:"errValues"})," text arrays are filled when the execution of the PHP scripts causes errors. These arrays provide information in particular on the error origin, script and line. These two arrays are inseparable: if ",(0,t.jsx)(n.em,{children:"errLabels"})," is passed, ",(0,t.jsx)(n.em,{children:"errValues"})," must be passed as well."]}),"\n",(0,t.jsxs)(n.p,{children:["Since exchanges between 4D and the PHP interpreter are carried out via FastCGI, the PHP interpreter functions as if it were called by an HTTP server and therefore sends HTTP headers. You can recover these headers and their values in the ",(0,t.jsx)(n.em,{children:"httpHeaderFields"})," and ",(0,t.jsx)(n.em,{children:"httpHeaderValues"})," arrays."]}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/php-execute",children:"PHP Execute"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/commands/php-get-option",children:"PHP GET OPTION"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"1061"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);