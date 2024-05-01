"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45518],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(667294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,r=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(n),h=s,u=m["".concat(l,".").concat(h)]||m[h]||d[h]||r;return n?a.createElement(u,o(o({ref:t},p),{},{components:n})):a.createElement(u,o({ref:t},p))}));function h(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var r=n.length,o=new Array(r);o[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:s,o[1]=i;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},686134:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>o,metadata:()=>l,toc:()=>p});n(667294);var a=n(603905);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},s.apply(this,arguments)}function r(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}const o={id:"datastores",title:"Remote datastores"},i=void 0,l={unversionedId:"ORDA/datastores",id:"version-20-R5/ORDA/datastores",title:"Remote datastores",description:"A remote datastore is a reference, on a local 4D application (4D or 4D Server), to a datastore stored in another 4D application.",source:"@site/versioned_docs/version-20-R5/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/ORDA/datastores",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"datastores",title:"Remote datastores"},sidebar:"docs",previous:{title:"Using the Global Stamp",permalink:"/docs/ORDA/global-stamp"},next:{title:"Privileges",permalink:"/docs/ORDA/privileges"}},c={},p=[{value:"Using web sessions",id:"using-web-sessions",level:2},{value:"Viewing sessions",id:"viewing-sessions",level:3},{value:"Closing sessions",id:"closing-sessions",level:2},{value:"Locking and transactions",id:"locking-and-transactions",level:2}],d={toc:p};function m(e){var{components:t}=e,o=r(e,["components"]);return(0,a.kt)("wrapper",s({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A ",(0,a.kt)("strong",{parentName:"p"},"remote datastore")," is a reference, on a local 4D application (4D or 4D Server), to a ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/ORDA/dsmapping#datastore"}),"datastore")," stored in another 4D application."),(0,a.kt)("p",null,"The local 4D application connects to and references the remote datastore through a call to the ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/API/DataStoreClass#open-datastore"}),(0,a.kt)("inlineCode",{parentName:"a"},"Open datastore"))," command."),(0,a.kt)("p",null,"On the remote machine, 4D opens a ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/WebServer/sessions"}),"session")," to handle requests from the application that call ",(0,a.kt)("inlineCode",{parentName:"p"},"Open datastore"),". Requests internally use the ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/REST/gettingStarted"}),"REST API"),", which means that they might require ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/REST/authUsers"}),"available licenses"),". "),(0,a.kt)("h2",s({},{id:"using-web-sessions"}),"Using web sessions"),(0,a.kt)("p",null,"When you work with a remote datastore referenced through calls to the ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/API/DataStoreClass#open-datastore"}),(0,a.kt)("inlineCode",{parentName:"a"},"Open datastore"))," command, the connection with the requesting processes is handled via ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/WebServer/sessions"}),"web sessions")," on the remote machine. "),(0,a.kt)("p",null,"The web session created on the remote datastore is identified using a internal session ID which is associated to the ",(0,a.kt)("inlineCode",{parentName:"p"},"localID")," on the 4D application side. This session automatically manages access to data, entity selections, or entities. "),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"localID")," is local to the machine that connects to the remote datastore, which means:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If other processes of the same application need to access the same remote datastore, they can use the same ",(0,a.kt)("inlineCode",{parentName:"li"},"localID")," and thus, share the same session. "),(0,a.kt)("li",{parentName:"ul"},"If another process of the same application opens the same remote datastore but with another ",(0,a.kt)("inlineCode",{parentName:"li"},"localID"),", it will create a new session on the remote datastore."),(0,a.kt)("li",{parentName:"ul"},"If another machine connects to the same remote datastore with the same ",(0,a.kt)("inlineCode",{parentName:"li"},"localID"),", it will create another session with another cookie.")),(0,a.kt)("p",null,"These principles are illustrated in the following graphics:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(841406).Z,width:"962",height:"719"})),(0,a.kt)("h3",s({},{id:"viewing-sessions"}),"Viewing sessions"),(0,a.kt)("p",null,"Processes that manage sessions for datastore access are shown in the 4D Server administration window:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'name: "REST Handler: \\<process name',">",'" '),(0,a.kt)("li",{parentName:"ul"},"type: HTTP Server Worker type"),(0,a.kt)("li",{parentName:"ul"},"session: session name is the user name passed to the ",(0,a.kt)("inlineCode",{parentName:"li"},"Open datastore")," command.")),(0,a.kt)("p",null,"In the following example, two processes are running for the same session:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(290704).Z,width:"1402",height:"708"})),(0,a.kt)("h2",s({},{id:"closing-sessions"}),"Closing sessions"),(0,a.kt)("p",null,"As described in the ",(0,a.kt)("a",s({parentName:"p"},{href:"/docs/WebServer/sessions#session-lifetime"}),"session lifetime")," paragraph, a web session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the ",(0,a.kt)("em",{parentName:"p"},"connectionInfo")," parameter of the ",(0,a.kt)("inlineCode",{parentName:"p"},"Open datastore")," command. "),(0,a.kt)("p",null,"If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see below). "),(0,a.kt)("h2",s({},{id:"locking-and-transactions"}),"Locking and transactions"),(0,a.kt)("p",null,"ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see ",(0,a.kt)("a",s({parentName:"li"},{href:"/docs/ORDA/entities#entity-locking"}),"Entity locking"),"). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory. "),(0,a.kt)("li",{parentName:"ul"},"Transactions can be started, validated or cancelled separately on each remote datastore using the ",(0,a.kt)("inlineCode",{parentName:"li"},"dataStore.startTransaction()"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"dataStore.cancelTransaction()"),", and ",(0,a.kt)("inlineCode",{parentName:"li"},"dataStore.validateTransaction()")," functions. They do not impact other datastores. "),(0,a.kt)("li",{parentName:"ul"},"Classic 4D language commands (",(0,a.kt)("inlineCode",{parentName:"li"},"START TRANSACTION"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"VALIDATE TRANSACTION"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"CANCEL TRANSACTION"),") only apply to the main datastore (returned by ",(0,a.kt)("inlineCode",{parentName:"li"},"ds"),").\nIf an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session. "),(0,a.kt)("li",{parentName:"ul"},"Locks on entities are removed and transactions are rollbacked:",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"when the process is killed."),(0,a.kt)("li",{parentName:"ul"},"when the session is closed on the server"),(0,a.kt)("li",{parentName:"ul"},"when the session is killed from the server administration window.")))))}m.isMDXComponent=!0},290704:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},841406:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"}}]);