"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28889"],{356243:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"API/TCPEventClass","title":"TCPEvent","description":"The TCPEvent class provides information about events occurring during the lifecycle of a TCP connection. It is generated when a TCPConnection is opened and is typically utilized in callbacks such as onConnection, onData, onError, and others.","source":"@site/versioned_docs/version-20-R8/API/TCPEventClass.md","sourceDirName":"API","slug":"/API/TCPEventClass","permalink":"/docs/es/API/TCPEventClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FTCPEventClass.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"TCPEventClass","title":"TCPEvent"},"sidebar":"docs","previous":{"title":"TCPConnection","permalink":"/docs/es/API/TCPConnectionClass"},"next":{"title":"WebForm","permalink":"/docs/es/API/WebFormClass"}}'),i=t("785893"),r=t("250065");let d={id:"TCPEventClass",title:"TCPEvent"},o=void 0,c={},a=[{value:"TCPEvent Object",id:"tcpevent-object",level:3},{value:".type",id:"type",level:2},{value:"Description",id:"description",level:4},{value:".data",id:"data",level:2},{value:"Description",id:"description-1",level:4}];function l(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"TCPEvent"})," class provides information about events occurring during the lifecycle of a TCP connection. It is generated when a ",(0,i.jsx)(n.a,{href:"/docs/es/API/TCPConnectionClass",children:"TCPConnection"})," is opened and is typically utilized in callbacks such as ",(0,i.jsx)(n.code,{children:"onConnection"}),", ",(0,i.jsx)(n.code,{children:"onData"}),", ",(0,i.jsx)(n.code,{children:"onError"}),", and others."]}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"History"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Changes"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20 R8"}),(0,i.jsx)(n.td,{children:"Class added"})]})})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"tcpevent-object",children:"TCPEvent Object"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"TCPEvent"})," object is immutable and non-streamable."]}),"\n",(0,i.jsx)(n.p,{children:"The following properties are available:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.a,{href:"#type"}),(0,i.jsx)(n.br,{})]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#data",children:[(0,i.jsx)(n.strong,{children:"data"})," : Blob"]}),(0,i.jsx)(n.br,{}),"the data associated with the event"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"type"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".type"})," property contains the type of the event. Possible values are:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"connection"'}),": Indicates that a TCPConnection was successfully established."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"data"'}),": Indicates that data has been received."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"error"'}),": Indicates that an error occurred during the TCPConnection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"close"'}),": Indicates that the TCPConnection has been properly closed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"terminate"'}),": Indicates that the TCPConnection is about to be released."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"data",children:".data"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"data"})," : Blob"]}),"\n",(0,i.jsx)(n.h4,{id:"description-1",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".data"})," property contains the data associated with the event. It is only valid for events of type ",(0,i.jsx)(n.code,{children:'"data"'}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"When working with low-level TCP/IP connections, keep in mind there is no guarantee that all data will arrive in a single packet. Data arrives in order but may be fragmented across multiple packets."})})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);