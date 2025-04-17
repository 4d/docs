"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55333"],{411968:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>c,metadata:()=>i,assets:()=>a,toc:()=>l,contentTitle:()=>s});var i=JSON.parse('{"id":"ServerWindow/application-server","title":"Application Server Page","description":"The Application Server page groups together information about the desktop application published by 4D Server and can be used to manage this publication.","source":"@site/versioned_docs/version-20-R9/ServerWindow/application-server.md","sourceDirName":"ServerWindow","slug":"/ServerWindow/application-server","permalink":"/docs/ServerWindow/application-server","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ServerWindow%2Fapplication-server.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"application-server","title":"Application Server Page"},"sidebar":"docs","previous":{"title":"Maintenance Page","permalink":"/docs/ServerWindow/maintenance"},"next":{"title":"SQL Server Page","permalink":"/docs/ServerWindow/sql-server"}}'),o=t("785893"),r=t("250065");let c={id:"application-server",title:"Application Server Page"},s=void 0,a={},l=[{value:"Accept/Reject New Connections",id:"acceptreject-new-connections",level:2},{value:"Information",id:"information",level:2},{value:"Configuration",id:"configuration",level:3},{value:"Memory",id:"memory",level:3},{value:"Application Server Connections",id:"application-server-connections",level:3}];function d(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"The Application Server page groups together information about the desktop application published by 4D Server and can be used to manage this publication."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(203298).Z+"",width:"1036",height:"699"})}),"\n",(0,o.jsx)(n.p,{children:"The upper part of the page provides information about the current status of the 4D Server application server."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"State"}),": Started or Stopped."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Starting time"}),": Date and time the application server was launched. This date corresponds to the opening of the project by 4D Server."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Uptime"}),": Time elapsed since last opening of the project by the server."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"acceptreject-new-connections",children:"Accept/Reject New Connections"}),"\n",(0,o.jsx)(n.p,{children:"This button toggles and can be used to manage the access of new desktop client machines to the application server."}),"\n",(0,o.jsx)(n.p,{children:"By default, when the project is published:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'The button is titled "Reject new connections."'}),"\n",(0,o.jsx)(n.li,{children:"New desktop clients can connect freely (within the limit of the connections permitted by the license)."}),"\n",(0,o.jsx)(n.li,{children:'The project name is published in the remote connection dialog box (if the "At Startup Publish Database Name in the Connection Dialog" option is checked in the Preferences).'}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["If you click on the ",(0,o.jsx)(n.strong,{children:"Reject new connections"})," button:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:'The button title changes to "Accept new connections."'}),"\n",(0,o.jsx)(n.li,{children:"No new desktop client can then connect. Clients attempting to connect will receive the following message:"}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(442523).Z+"",width:"671",height:"255"})}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:"The project name no longer appears in the remote connection dialog box."}),"\n",(0,o.jsx)(n.li,{children:"Desktop clients that are already connected are not disconnected and can continue to work normally."}),"\n"]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["You can perform the same action with the ",(0,o.jsx)(n.a,{href:"/docs/commands/reject-new-remote-connections",children:(0,o.jsx)(n.code,{children:"REJECT NEW REMOTE CONNECTIONS"})})," command."]}),"\n"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["If you click on the ",(0,o.jsx)(n.strong,{children:"Accept new connections button"}),", the application server returns to its default state."]}),"\n"]}),"\n",(0,o.jsx)(n.p,{children:"This feature permits, for example, an administrator to carry out various maintenance operations (verification, compacting, etc.) just after having started the server. If the administrator uses a remote connection, they can be certain to be the only one modifying the data. It is also possible to use this function in preparation of a maintenance operation which requires that there be no desktop client machine connected."}),"\n",(0,o.jsx)(n.h2,{id:"information",children:"Information"}),"\n",(0,o.jsx)(n.h3,{id:"configuration",children:"Configuration"}),"\n",(0,o.jsx)(n.p,{children:"This area provides information about the 4D project published by the server: name and location of data and structure files and name of database log file. You can click on the structure or data file name in order to view its complete pathname."}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"Mode"})," field indicates the current execution mode of the application: compiled or interpreted."]}),"\n",(0,o.jsx)(n.p,{children:"The lower part of the area indicates the server configuration parameters (launched as service, port and IP address) and the enabling of TLS for client-server connections (does not concern SQL nor HTTP connections)."}),"\n",(0,o.jsx)(n.h3,{id:"memory",children:"Memory"}),"\n",(0,o.jsxs)(n.p,{children:["This area indicates the ",(0,o.jsx)(n.strong,{children:"Total cache memory"})," (parameter set in the settings) and the ",(0,o.jsx)(n.strong,{children:"Used cache memory"})," (dynamic allocation by 4D Server according to its needs)."]}),"\n",(0,o.jsx)(n.h3,{id:"application-server-connections",children:"Application Server Connections"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Maximum"}),": maximum number of simultaneous client connections allowed for the application server. This value depends on the license installed on the server machine."]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.strong,{children:"Used"}),": actual number of connections currently being used."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},203298:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/server-admin-application-page-2790afb1ca369f9c919e14a195be066d.png"},442523:function(e,n,t){t.d(n,{Z:function(){return i}});let i=t.p+"assets/images/server-error-5a94dad40acb679497621d693b40b05b.png"},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return c}});var i=t(667294);let o={},r=i.createContext(o);function c(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:c(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);