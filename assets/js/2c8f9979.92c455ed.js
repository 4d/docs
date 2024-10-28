"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[42450],{535490:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>o});var n=t(474848),i=t(28453);const r={id:"get-registered-clients",title:"GET REGISTERED CLIENTS",slug:"/commands/get-registered-clients",displayed_sidebar:"docs"},d=void 0,c={id:"commands-legacy/get-registered-clients",title:"GET REGISTERED CLIENTS",description:"GET REGISTERED CLIENTS ( clientList ; methods )",source:"@site/versioned_docs/version-20-R7/commands-legacy/get-registered-clients.md",sourceDirName:"commands-legacy",slug:"/commands/get-registered-clients",permalink:"/docs/commands/get-registered-clients",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-registered-clients.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-registered-clients",title:"GET REGISTERED CLIENTS",slug:"/commands/get-registered-clients",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Execute on server",permalink:"/docs/commands/execute-on-server"},next:{title:"New process",permalink:"/docs/commands/new-process"}},l={},o=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"System variables and sets",id:"system-variables-and-sets",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.strong,{children:"GET REGISTERED CLIENTS"})," ( ",(0,n.jsx)(s.em,{children:"clientList"})," ; ",(0,n.jsx)(s.em,{children:"methods"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Parameter"}),(0,n.jsx)(s.th,{children:"Type"}),(0,n.jsx)(s.th,{}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"clientList"}),(0,n.jsx)(s.td,{children:"Text array"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"List of the saved 4D Clients"})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"methods"}),(0,n.jsx)(s.td,{children:"Array integer"}),(0,n.jsx)(s.td,{children:"\u2190"}),(0,n.jsx)(s.td,{children:"List of the methods to be executed"})]})]})]}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,n.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.strong,{children:"GET REGISTERED CLIENTS"})," command fills two arrays:"]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"clientLists"})," contains the list of clients who were \u201cregistered\u201d by using the ",(0,n.jsx)(s.a,{href:"/docs/commands/register-client",children:"REGISTER CLIENT"})," command."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.em,{children:"methods"})," supplies the list of each client\u2019s \u201cworkload\u201d. The workload is the number of methods that a 4D Client must still execute by calling the ",(0,n.jsx)(s.a,{href:"/docs/commands/execute-on-client",children:"EXECUTE ON CLIENT"})," command (for more information, please refer to the description of the ",(0,n.jsx)(s.a,{href:"/docs/commands/execute-on-client",children:"EXECUTE ON CLIENT"})," command)."]}),"\n"]}),"\n",(0,n.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsx)(s.p,{children:"Let\u2019s assume that you want to obtain a list of all the registered clients and the methods that remain to be executed:"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY TEXT($clients;0)\n\xa0ARRAY LONGINT($methods;0)\n\xa0GET REGISTERED CLIENTS($clients;$methods)\n"})}),"\n",(0,n.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsxs)(s.p,{children:["Refer to the example of the ",(0,n.jsx)(s.a,{href:"/docs/commands/register-client",children:"REGISTER CLIENT"})," command."]}),"\n",(0,n.jsx)(s.h4,{id:"system-variables-and-sets",children:"System variables and sets"}),"\n",(0,n.jsx)(s.p,{children:"If the operation was successful, the OK system variable is equal to 1."}),"\n",(0,n.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.p,{children:[(0,n.jsx)(s.a,{href:"/docs/commands/execute-on-client",children:"EXECUTE ON CLIENT"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/register-client",children:"REGISTER CLIENT"}),(0,n.jsx)(s.br,{}),"\n",(0,n.jsx)(s.a,{href:"/docs/commands/unregister-client",children:"UNREGISTER CLIENT"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>c});var n=t(296540);const i={},r=n.createContext(i);function d(e){const s=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(r.Provider,{value:s},e.children)}}}]);