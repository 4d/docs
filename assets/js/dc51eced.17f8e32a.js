/*! For license information please see dc51eced.17f8e32a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1729],{653177:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var t=i(474848),o=i(28453);const r={id:"remote-admin",title:"Administration from Remote Machines"},a=void 0,s={id:"ServerWindow/remote-admin",title:"Administration from Remote Machines",description:"You can administer the 4D Server application from a remote 4D (client machine) by opening the 4D Server administration window on the client machine.",source:"@site/versioned_docs/version-20-R5/ServerWindow/remote-admin.md",sourceDirName:"ServerWindow",slug:"/ServerWindow/remote-admin",permalink:"/docs/20-R5/ServerWindow/remote-admin",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fremote-admin.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"remote-admin",title:"Administration from Remote Machines"},sidebar:"docs",previous:{title:"Real Time Monitor Page",permalink:"/docs/20-R5/ServerWindow/real-time-monitor"},next:{title:"Web Administration",permalink:"/docs/20-R5/category/web-administration"}},c={},d=[{value:"Opening the administration window on a remote 4D machine",id:"opening-the-administration-window-on-a-remote-4d-machine",level:2},{value:"Specificities of administration via a remote 4D machine",id:"specificities-of-administration-via-a-remote-4d-machine",level:2}];function m(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"You can administer the 4D Server application from a remote 4D (client machine) by opening the 4D Server administration window on the client machine."}),"\n",(0,t.jsx)(n.h2,{id:"opening-the-administration-window-on-a-remote-4d-machine",children:"Opening the administration window on a remote 4D machine"}),"\n",(0,t.jsx)(n.p,{children:"To open a server administration window from a client machine, you must be connected to the remote database as a Designer or Administrator. Otherwise, when you attempt to open the administration window, a privilege error (-9991) is generated."}),"\n",(0,t.jsx)(n.p,{children:"This window can be accessed in one of two manners:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Choose the ",(0,t.jsx)(n.strong,{children:"Administration Window"})," command from the ",(0,t.jsx)(n.strong,{children:"Help"})," menu or click on the corresponding button in the 4D tool bar."]}),"\n",(0,t.jsxs)(n.li,{children:["Execute the ",(0,t.jsx)(n.code,{children:"OPEN ADMINISTRATION WINDOW"})," command."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["A ",(0,t.jsx)(n.a,{href:"/docs/20-R5/ServerWindow/monitor",children:"server administration window"})," then appears on the client machine."]}),"\n",(0,t.jsx)(n.h2,{id:"specificities-of-administration-via-a-remote-4d-machine",children:"Specificities of administration via a remote 4D machine"}),"\n",(0,t.jsx)(n.p,{children:"A client machine displaying the server administration window has access to all the available information and can act upon the processes and the starting/stopping of servers. When the server administration window is displayed on a remote machine, there are nevertheless certain restrictions and specific features concerning its operation:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.a,{href:"/docs/20-R5/ServerWindow/processes",children:"Process page"}),", it is not possible to debug a user process (since the debug window appears on the server machine)."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.a,{href:"/docs/20-R5/ServerWindow/maintenance",children:"Maintenance Page"}),", it is possible to execute actions that cause all the clients to be disconnected and the server to be restarted (compacting and restarting operations). In this case, the client machine requesting the operation is automatically reconnected on restarting."]}),"\n",(0,t.jsxs)(n.li,{children:["On the ",(0,t.jsx)(n.a,{href:"/docs/20-R5/ServerWindow/maintenance",children:"Maintenance Page"}),", the ",(0,t.jsx)(n.strong,{children:"View Report"})," buttons are renamed ",(0,t.jsx)(n.strong,{children:"Download Report"})," after the execution of a maintenance operation. These files are downloaded into the local database folder on the client machine before being displayed."]}),"\n"]})]})}function l(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},221020:(e,n,i)=>{var t=i(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,i){var t,r={},d=null,m=null;for(t in void 0!==i&&(d=""+i),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(m=n.ref),n)a.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:o,type:e,key:d,ref:m,props:r,_owner:s.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},474848:(e,n,i)=>{e.exports=i(221020)},28453:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>s});var t=i(296540);const o={},r=t.createContext(o);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);