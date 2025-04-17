"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["1249"],{163741:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"ORDA/datastores","title":"Remote datastores","description":"A remote datastore is a reference, on a local 4D application (4D or 4D Server), to a datastore stored in another 4D application.","source":"@site/versioned_docs/version-20-R9/ORDA/remoteDatastores.md","sourceDirName":"ORDA","slug":"/ORDA/datastores","permalink":"/docs/ORDA/datastores","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"datastores","title":"Remote datastores"},"sidebar":"docs","previous":{"title":"Using the Global Stamp","permalink":"/docs/ORDA/global-stamp"},"next":{"title":"Privileges","permalink":"/docs/ORDA/privileges"}}'),o=n("785893"),i=n("250065");let a={id:"datastores",title:"Remote datastores"},r=void 0,c={},d=[{value:"Using web sessions",id:"using-web-sessions",level:2},{value:"Viewing sessions",id:"viewing-sessions",level:3},{value:"Closing sessions",id:"closing-sessions",level:2},{value:"Locking and transactions",id:"locking-and-transactions",level:2}];function l(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:["A ",(0,o.jsx)(s.strong,{children:"remote datastore"})," is a reference, on a local 4D application (4D or 4D Server), to a ",(0,o.jsx)(s.a,{href:"/docs/ORDA/dsmapping#datastore",children:"datastore"})," stored in another 4D application."]}),"\n",(0,o.jsxs)(s.p,{children:["The local 4D application connects to and references the remote datastore through a call to the ",(0,o.jsx)(s.a,{href:"/docs/commands/open-datastore",children:(0,o.jsx)(s.code,{children:"Open datastore"})})," command."]}),"\n",(0,o.jsxs)(s.p,{children:["On the remote machine, 4D opens a ",(0,o.jsx)(s.a,{href:"/docs/WebServer/sessions",children:"session"})," to handle requests from the application that call ",(0,o.jsx)(s.code,{children:"Open datastore"}),". Requests internally use the ",(0,o.jsx)(s.a,{href:"/docs/REST/gettingStarted",children:"REST API"}),", which means that they might require ",(0,o.jsx)(s.a,{href:"/docs/REST/authUsers",children:"available licenses"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"using-web-sessions",children:"Using web sessions"}),"\n",(0,o.jsxs)(s.p,{children:["When you work with a remote datastore referenced through calls to the ",(0,o.jsx)(s.a,{href:"/docs/commands/open-datastore",children:(0,o.jsx)(s.code,{children:"Open datastore"})})," command, the connection with the requesting processes is handled via ",(0,o.jsx)(s.a,{href:"/docs/WebServer/sessions",children:"web sessions"})," on the remote machine."]}),"\n",(0,o.jsxs)(s.p,{children:["The web session created on the remote datastore is identified using a internal session ID which is associated to the ",(0,o.jsx)(s.code,{children:"localID"})," on the 4D application side. This session automatically manages access to data, entity selections, or entities."]}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"localID"})," is local to the machine that connects to the remote datastore, which means:"]}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["If other processes of the same application need to access the same remote datastore, they can use the same ",(0,o.jsx)(s.code,{children:"localID"})," and thus, share the same session."]}),"\n",(0,o.jsxs)(s.li,{children:["If another process of the same application opens the same remote datastore but with another ",(0,o.jsx)(s.code,{children:"localID"}),", it will create a new session on the remote datastore."]}),"\n",(0,o.jsxs)(s.li,{children:["If another machine connects to the same remote datastore with the same ",(0,o.jsx)(s.code,{children:"localID"}),", it will create another session with another cookie."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"These principles are illustrated in the following graphics:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:n(82141).Z+"",width:"962",height:"719"})}),"\n",(0,o.jsx)(s.h3,{id:"viewing-sessions",children:"Viewing sessions"}),"\n",(0,o.jsx)(s.p,{children:"Processes that manage sessions for datastore access are shown in the 4D Server administration window:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:'name: "REST Handler: <process name>"'}),"\n",(0,o.jsx)(s.li,{children:"type: HTTP Server Worker type"}),"\n",(0,o.jsxs)(s.li,{children:["session: session name is the user name passed to the ",(0,o.jsx)(s.code,{children:"Open datastore"})," command."]}),"\n"]}),"\n",(0,o.jsx)(s.p,{children:"In the following example, two processes are running for the same session:"}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.img,{src:n(933884).Z+"",width:"1402",height:"708"})}),"\n",(0,o.jsx)(s.h2,{id:"closing-sessions",children:"Closing sessions"}),"\n",(0,o.jsxs)(s.p,{children:["As described in the ",(0,o.jsx)(s.a,{href:"/docs/WebServer/sessions#session-lifetime",children:"session lifetime"})," paragraph, a web session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the ",(0,o.jsx)(s.em,{children:"connectionInfo"})," parameter of the ",(0,o.jsx)(s.code,{children:"Open datastore"})," command."]}),"\n",(0,o.jsx)(s.p,{children:"If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see below)."}),"\n",(0,o.jsx)(s.h2,{id:"locking-and-transactions",children:"Locking and transactions"}),"\n",(0,o.jsx)(s.p,{children:"ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see ",(0,o.jsx)(s.a,{href:"/docs/ORDA/entities#entity-locking",children:"Entity locking"}),"). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory."]}),"\n",(0,o.jsxs)(s.li,{children:["Transactions can be started, validated or cancelled separately on each remote datastore using the ",(0,o.jsx)(s.code,{children:"dataStore.startTransaction()"}),", ",(0,o.jsx)(s.code,{children:"dataStore.cancelTransaction()"}),", and ",(0,o.jsx)(s.code,{children:"dataStore.validateTransaction()"})," functions. They do not impact other datastores."]}),"\n",(0,o.jsxs)(s.li,{children:["Classic 4D language commands (",(0,o.jsx)(s.a,{href:"/docs/commands/start-transaction",children:(0,o.jsx)(s.code,{children:"START TRANSACTION"})}),", ",(0,o.jsx)(s.a,{href:"/docs/commands/validate-transaction",children:(0,o.jsx)(s.code,{children:"VALIDATE TRANSACTION"})}),", ",(0,o.jsx)(s.a,{href:"/docs/commands/cancel-transaction",children:(0,o.jsx)(s.code,{children:"CANCEL TRANSACTION"})}),") only apply to the main datastore (returned by ",(0,o.jsx)(s.code,{children:"ds"}),").\nIf an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session."]}),"\n",(0,o.jsxs)(s.li,{children:["Locks on entities are removed and transactions are rollbacked:\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"when the process is killed."}),"\n",(0,o.jsx)(s.li,{children:"when the session is closed on the server"}),"\n",(0,o.jsx)(s.li,{children:"when the session is killed from the server administration window."}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},933884:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},82141:function(e,s,n){n.d(s,{Z:function(){return t}});let t=n.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"},250065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return a}});var t=n(667294);let o={},i=t.createContext(o);function a(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);