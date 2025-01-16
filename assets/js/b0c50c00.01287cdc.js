"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65939"],{659513:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/get-registered-clients","title":"GET REGISTERED CLIENTS","description":"GET REGISTERED CLIENTS ( clientList ; methods )","source":"@site/versioned_docs/version-20-R8/commands-legacy/get-registered-clients.md","sourceDirName":"commands-legacy","slug":"/commands/get-registered-clients","permalink":"/docs/commands/get-registered-clients","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-registered-clients.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-registered-clients","title":"GET REGISTERED CLIENTS","slug":"/commands/get-registered-clients","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Execute on server","permalink":"/docs/commands/execute-on-server"},"next":{"title":"New process","permalink":"/docs/commands/new-process"}}'),r=s("785893"),i=s("250065");let d={id:"get-registered-clients",title:"GET REGISTERED CLIENTS",slug:"/commands/get-registered-clients",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"GET REGISTERED CLIENTS"})," ( ",(0,r.jsx)(n.em,{children:"clientList"})," ; ",(0,r.jsx)(n.em,{children:"methods"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"clientList"}),(0,r.jsx)(n.td,{children:"Text array"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"List of the saved 4D Clients"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"methods"}),(0,r.jsx)(n.td,{children:"Array integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"List of the methods to be executed"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"GET REGISTERED CLIENTS"})," command fills two arrays:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"clientLists"})," contains the list of clients who were \u201Cregistered\u201D by using the ",(0,r.jsx)(n.a,{href:"/docs/commands/register-client",children:"REGISTER CLIENT"})," command."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"methods"})," supplies the list of each client\u2019s \u201Cworkload\u201D. The workload is the number of methods that a 4D Client must still execute by calling the ",(0,r.jsx)(n.a,{href:"/docs/commands/execute-on-client",children:"EXECUTE ON CLIENT"})," command (for more information, please refer to the description of the ",(0,r.jsx)(n.a,{href:"/docs/commands/execute-on-client",children:"EXECUTE ON CLIENT"})," command)."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Let\u2019s assume that you want to obtain a list of all the registered clients and the methods that remain to be executed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY TEXT($clients;0)\n\xa0ARRAY LONGINT($methods;0)\n\xa0GET REGISTERED CLIENTS($clients;$methods)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.p,{children:["Refer to the example of the ",(0,r.jsx)(n.a,{href:"/docs/commands/register-client",children:"REGISTER CLIENT"})," command."]}),"\n",(0,r.jsx)(n.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,r.jsx)(n.p,{children:"If the operation was successful, the OK system variable is equal to 1."}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/register-client",children:"REGISTER CLIENT"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/unregister-client",children:"UNREGISTER CLIENT"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"650"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modifies variables"}),(0,r.jsx)(n.td,{children:"OK"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return d}});var t=s(667294);let r={},i=t.createContext(r);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);