"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59716"],{57512:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"API/TCPEventClass","title":"TCPEvent","description":"The TCPEvent class provides information about events occurring during the lifecycle of a TCP connection. It is generated when a TCPConnection is opened and is typically utilized in callbacks such as onConnection, onData, onError, and others.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/API/TCPEventClass.md","sourceDirName":"API","slug":"/API/TCPEventClass","permalink":"/docs/es/API/TCPEventClass","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2FTCPEventClass.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"TCPEventClass","title":"TCPEvent"},"sidebar":"docs","previous":{"title":"TCPConnection","permalink":"/docs/es/API/TCPConnectionClass"},"next":{"title":"TCPListener","permalink":"/docs/es/API/TCPListenerClass"}}'),i=s("785893"),r=s("250065");let d={id:"TCPEventClass",title:"TCPEvent"},c=void 0,o={},l=[{value:"Objeto TCPEvent",id:"objeto-tcpevent",level:3},{value:".data",id:"data",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:".ip",id:"ip",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-1",level:4},{value:".port",id:"port",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-2",level:4},{value:".type",id:"type",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n-3",level:4}];function a(e){let n={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"TCPEvent"})," class provides information about events occurring during the lifecycle of a TCP connection. It is generated when a ",(0,i.jsx)(n.a,{href:"/docs/es/API/TCPConnectionClass",children:"TCPConnection"})," is opened and is typically utilized in callbacks such as ",(0,i.jsx)(n.code,{children:"onConnection"}),", ",(0,i.jsx)(n.code,{children:"onData"}),", ",(0,i.jsx)(n.code,{children:"onError"}),", and others."]}),"\n",(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Lanzamiento"}),(0,i.jsx)(n.th,{children:"Modificaciones"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20 R9"}),(0,i.jsxs)(n.td,{children:["New ",(0,i.jsx)(n.code,{children:"ip"}),", and ",(0,i.jsx)(n.code,{children:"port"})," attributes"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20 R8"}),(0,i.jsx)(n.td,{children:"Clase a\xf1adida"})]})]})]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"objeto-tcpevent",children:"Objeto TCPEvent"}),"\n",(0,i.jsxs)(n.p,{children:["A ",(0,i.jsx)(n.code,{children:"TCPEvent"})," object is immutable and non-streamable."]}),"\n",(0,i.jsx)(n.p,{children:"Las siguientes propiedades est\xe1n disponibles:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsx)(n.tr,{children:(0,i.jsx)(n.th,{})})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#data",children:[(0,i.jsx)(n.strong,{children:"data"})," : Blob"]}),(0,i.jsx)(n.br,{}),"los datos asociados al evento"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#ip",children:[(0,i.jsx)(n.strong,{children:"ip"})," : Text"]}),(0,i.jsx)(n.br,{}),"the IP address of the remote machine"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#port",children:[(0,i.jsx)(n.strong,{children:"port"})," : Number"]}),(0,i.jsx)(n.br,{}),"the port number of the remote machine"]})}),(0,i.jsx)(n.tr,{children:(0,i.jsxs)(n.td,{children:[(0,i.jsxs)(n.a,{href:"#type",children:[(0,i.jsx)(n.strong,{children:"type"})," : Text"]}),(0,i.jsx)(n.br,{}),"el tipo del evento"]})})]})]}),"\n",(0,i.jsx)(n.h2,{id:"data",children:".data"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"data"})," : Blob"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".data"})," contiene los datos asociados al evento. It is only valid for events of type ",(0,i.jsx)(n.code,{children:'"data"'}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"When working with low-level TCP/IP connections, keep in mind there is no guarantee that all data will arrive in a single packet. Data arrives in order but may be fragmented across multiple packets."})}),"\n",(0,i.jsx)(n.h2,{id:"ip",children:".ip"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"ip"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-1",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".ip"})," property contains the IP address of the remote machine."]}),"\n",(0,i.jsx)(n.h2,{id:"port",children:".port"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"port"})," : Number"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-2",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:".port"})," property contains the port number of the remote machine."]}),"\n",(0,i.jsx)(n.h2,{id:"type",children:".type"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"type"})," : Text"]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n-3",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["La propiedad ",(0,i.jsx)(n.code,{children:".type"})," contiene el tipo del evento. Los valores posibles son:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"connection"'}),": Indicates that a TCPConnection was successfully established."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"data"'}),": Indicates that data has been received."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"error"'}),": Indicates that an error occurred during the TCPConnection."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"close"'}),": Indicates that the TCPConnection has been properly closed."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"terminate"'}),": Indicates that the TCPConnection is about to be released."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var t=s(667294);let i={},r=t.createContext(i);function d(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);