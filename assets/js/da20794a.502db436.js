"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98746"],{228838:function(e,n,i){i.r(n),i.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>s});var t=JSON.parse('{"id":"ServerWindow/remote-admin","title":"Administration from Remote Machines","description":"You can administer the 4D Server application from a remote 4D (client machine) by opening the 4D Server administration window on the client machine.","source":"@site/versioned_docs/version-20-R8/ServerWindow/remote-admin.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/remote-admin","permalink":"/docs/20-R8/ServerWindow/remote-admin","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fremote-admin.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"remote-admin","title":"Administration from Remote Machines"},"sidebar":"docs","previous":{"title":"Real Time Monitor Page","permalink":"/docs/20-R8/ServerWindow/real-time-monitor"},"next":{"title":"Web Administration","permalink":"/docs/20-R8/category/web-administration"}}'),o=i("785893"),r=i("250065");let a={id:"remote-admin",title:"Administration from Remote Machines"},s=void 0,c={},d=[{value:"Opening the administration window on a remote 4D machine",id:"opening-the-administration-window-on-a-remote-4d-machine",level:2},{value:"Specificities of administration via a remote 4D machine",id:"specificities-of-administration-via-a-remote-4d-machine",level:2}];function m(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"You can administer the 4D Server application from a remote 4D (client machine) by opening the 4D Server administration window on the client machine."}),"\n",(0,o.jsx)(n.h2,{id:"opening-the-administration-window-on-a-remote-4d-machine",children:"Opening the administration window on a remote 4D machine"}),"\n",(0,o.jsx)(n.p,{children:"To open a server administration window from a client machine, you must be connected to the remote database as a Designer or Administrator. Otherwise, when you attempt to open the administration window, a privilege error (-9991) is generated."}),"\n",(0,o.jsx)(n.p,{children:"This window can be accessed in one of two manners:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Choose the ",(0,o.jsx)(n.strong,{children:"Administration Window"})," command from the ",(0,o.jsx)(n.strong,{children:"Help"})," menu or click on the corresponding button in the 4D tool bar."]}),"\n",(0,o.jsxs)(n.li,{children:["Execute the ",(0,o.jsx)(n.code,{children:"OPEN ADMINISTRATION WINDOW"})," command."]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["A ",(0,o.jsx)(n.a,{href:"/docs/20-R8/ServerWindow/monitor",children:"server administration window"})," then appears on the client machine."]}),"\n",(0,o.jsx)(n.h2,{id:"specificities-of-administration-via-a-remote-4d-machine",children:"Specificities of administration via a remote 4D machine"}),"\n",(0,o.jsx)(n.p,{children:"A client machine displaying the server administration window has access to all the available information and can act upon the processes and the starting/stopping of servers. When the server administration window is displayed on a remote machine, there are nevertheless certain restrictions and specific features concerning its operation:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.a,{href:"/docs/20-R8/ServerWindow/processes",children:"Process page"}),", it is not possible to debug a user process (since the debug window appears on the server machine)."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.a,{href:"/docs/20-R8/ServerWindow/maintenance",children:"Maintenance Page"}),", it is possible to execute actions that cause all the clients to be disconnected and the server to be restarted (compacting and restarting operations). In this case, the client machine requesting the operation is automatically reconnected on restarting."]}),"\n",(0,o.jsxs)(n.li,{children:["On the ",(0,o.jsx)(n.a,{href:"/docs/20-R8/ServerWindow/maintenance",children:"Maintenance Page"}),", the ",(0,o.jsx)(n.strong,{children:"View Report"})," buttons are renamed ",(0,o.jsx)(n.strong,{children:"Download Report"})," after the execution of a maintenance operation. These files are downloaded into the local database folder on the client machine before being displayed."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(m,{...e})}):m(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return s},a:function(){return a}});var t=i(667294);let o={},r=t.createContext(o);function a(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);