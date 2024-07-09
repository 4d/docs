/*! For license information please see b6e22feb.fef2ff44.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[76751],{553898:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=s(474848),i=s(28453);const o={id:"datastores",title:"Using a remote datastore"},a=void 0,r={id:"ORDA/datastores",title:"Using a remote datastore",description:"A datastore exposed on a 4D application can be accessed simultaneously through different clients:",source:"@site/versioned_docs/version-20/ORDA/remoteDatastores.md",sourceDirName:"ORDA",slug:"/ORDA/datastores",permalink:"/docs/20/ORDA/datastores",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2FremoteDatastores.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"datastores",title:"Using a remote datastore"},sidebar:"docs",previous:{title:"Working with data",permalink:"/docs/20/ORDA/entities"},next:{title:"Privileges",permalink:"/docs/20/ORDA/privileges"}},l={},c=[{value:"Opening sessions",id:"Opening-sessions",level:2},{value:"Viewing sessions",id:"Viewing-sessions",level:3},{value:"Locking and transactions",id:"Locking-and-transactions",level:3},{value:"Closing sessions",id:"Closing-sessions",level:3},{value:"Client/server optimization",id:"Clientserver-optimization",level:2},{value:"Context",id:"Context",level:3},{value:"Example",id:"Example",level:4},{value:"Reusing the context property",id:"Reusing-the-context-property",level:4},{value:"Entity selection-based list box",id:"Entity-selection-based-list-box",level:4},{value:"Preconfiguring contexts",id:"Preconfiguring-contexts",level:4},{value:"ORDA cache",id:"ORDA-cache",level:3}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.a,{href:"/docs/20/ORDA/dsmapping#datastore",children:"datastore"})," exposed on a 4D application can be accessed simultaneously through different clients:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["4D remote applications using ORDA to access the main datastore with the ",(0,n.jsx)(t.code,{children:"ds"})," command. Note that the 4D remote application can still access the database in classic mode. These accesses are handled by the ",(0,n.jsx)(t.strong,{children:"4D application server"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Other 4D applications (4D remote, 4D Server) opening a session on the remote datastore through the ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataStoreClass#open-datastore",children:(0,n.jsx)(t.code,{children:"Open datastore"})})," command. These accesses are handled by the ",(0,n.jsx)(t.strong,{children:"HTTP REST server"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"https://developer.4d.com/go-mobile/",children:"4D for iOS or 4D for Android"})," queries for updating mobile applications. These accesses are handled by the ",(0,n.jsx)(t.strong,{children:"HTTP server"}),"."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"Opening-sessions",children:"Opening sessions"}),"\n",(0,n.jsxs)(t.p,{children:["When you work with a remote datastore referenced through calls to the ",(0,n.jsx)(t.code,{children:"Open datastore"})," command, the connection between the requesting processes and the remote datastore is handled via sessions."]}),"\n",(0,n.jsxs)(t.p,{children:["A session in created on the remote datastore to handle the connection. This session is identified using a internal session ID which is associated to the ",(0,n.jsx)(t.code,{children:"localID"})," on the 4D application side. This session automatically manages access to data, entity selections, or entities."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"localID"})," is local to the machine that connects to the remote datastore, which means:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If other processes of the same application need to access the same remote datastore, they can use the same ",(0,n.jsx)(t.code,{children:"localID"})," and thus, share the same session."]}),"\n",(0,n.jsxs)(t.li,{children:["If another process of the same application opens the same remote datastore but with another ",(0,n.jsx)(t.code,{children:"localID"}),", it will create a new session on the remote datastore."]}),"\n",(0,n.jsxs)(t.li,{children:["If another machine connects to the same remote datastore with the same ",(0,n.jsx)(t.code,{children:"localID"}),", it will create another session with another cookie."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"These principles are illustrated in the following graphics:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(909452).A+"",width:"962",height:"719"})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["For sessions opened by REST requests, please refer to ",(0,n.jsx)(t.a,{href:"/docs/20/REST/authUsers",children:"Users and sessions"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"Viewing-sessions",children:"Viewing sessions"}),"\n",(0,n.jsx)(t.p,{children:"Processes that manage sessions for datastore access are shown in the 4D Server administration window:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:'name: "REST Handler: <process name>"'}),"\n",(0,n.jsx)(t.li,{children:"type: HTTP Server Worker type"}),"\n",(0,n.jsxs)(t.li,{children:["session: session name is the user name passed to the ",(0,n.jsx)(t.code,{children:"Open datastore"})," command."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"In the following example, two processes are running for the same session:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(633522).A+"",width:"1402",height:"708"})}),"\n",(0,n.jsx)(t.h3,{id:"Locking-and-transactions",children:"Locking and transactions"}),"\n",(0,n.jsx)(t.p,{children:"ORDA features related to entity locking and transaction are managed at process level in remote datastores, just like in ORDA client/server mode:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If a process locks an entity from a remote datastore, the entity is locked for all other processes, even when these processes share the same session (see ",(0,n.jsx)(t.a,{href:"/docs/20/ORDA/entities#entity-locking",children:"Entity locking"}),"). If several entities pointing to a same record have been locked in a process, they must be all unlocked in the process to remove the lock. If a lock has been put on an entity, the lock is removed when there is no more reference to this entity in memory."]}),"\n",(0,n.jsxs)(t.li,{children:["Transactions can be started, validated or cancelled separately on each remote datastore using the ",(0,n.jsx)(t.code,{children:"dataStore.startTransaction()"}),", ",(0,n.jsx)(t.code,{children:"dataStore.cancelTransaction()"}),", and ",(0,n.jsx)(t.code,{children:"dataStore.validateTransaction()"})," functions. They do not impact other datastores."]}),"\n",(0,n.jsxs)(t.li,{children:["Classic 4D language commands (",(0,n.jsx)(t.code,{children:"START TRANSACTION"}),", ",(0,n.jsx)(t.code,{children:"VALIDATE TRANSACTION"}),", ",(0,n.jsx)(t.code,{children:"CANCEL TRANSACTION"}),") only apply to the main datastore (returned by ",(0,n.jsx)(t.code,{children:"ds"}),").\nIf an entity from a remote datastore is hold by a transaction in a process, other processes cannot update it, even if these processes share the same session."]}),"\n",(0,n.jsxs)(t.li,{children:["Locks on entities are removed and transactions are rollbacked:\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"when the process is killed."}),"\n",(0,n.jsx)(t.li,{children:"when the session is closed on the server"}),"\n",(0,n.jsx)(t.li,{children:"when the session is killed from the server administration window."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"Closing-sessions",children:"Closing sessions"}),"\n",(0,n.jsxs)(t.p,{children:["A session is automatically closed by 4D when there has been no activity during its timeout period. The default timeout is 60 mn, but this value can be modified using the ",(0,n.jsx)(t.em,{children:"connectionInfo"})," parameter of the ",(0,n.jsx)(t.code,{children:"Open datastore"})," command."]}),"\n",(0,n.jsx)(t.p,{children:"If a request is sent to the remote datastore after the session has been closed, it is automatically re-created if possible (license available, server not stopped...). However, keep in mind that the context of the session regarding locks and transactions is lost (see above)."}),"\n",(0,n.jsx)(t.h2,{id:"Clientserver-optimization",children:"Client/server optimization"}),"\n",(0,n.jsxs)(t.p,{children:["4D provides optimizations for ORDA requests that use entity selections or load entities in client/server configurations (datastore accessed remotely through ",(0,n.jsx)(t.code,{children:"ds"})," or via ",(0,n.jsx)(t.code,{children:"Open datastore"}),"). These optimizations speed up the execution of your 4D application by reducing drastically the volume of information transmitted over the network. They include:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["the ",(0,n.jsx)(t.strong,{children:"optimization context"})]}),"\n",(0,n.jsxs)(t.li,{children:["the ",(0,n.jsx)(t.strong,{children:"ORDA cache"})]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"Context",children:"Context"}),"\n",(0,n.jsx)(t.p,{children:"The optimization context is based upon the following implementations:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:'When a client requests an entity selection from the server, 4D automatically "learns" which attributes of the entity selection are actually used on the client side during the code execution, and builds a corresponding "optimization context". This context is attached to the entity selection and stores the used attributes. It will be dynamically updated if other attributes are used afterwards. The following methods and functions trigger the learning phase:'}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntitySelectionClass#create-entity-selection",children:(0,n.jsx)(t.code,{children:"Create entity selection"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#fromcollection",children:(0,n.jsx)(t.code,{children:"dataClass.fromCollection()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#all",children:(0,n.jsx)(t.code,{children:"dataClass.all()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#get",children:(0,n.jsx)(t.code,{children:"dataClass.get()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#query",children:(0,n.jsx)(t.code,{children:"dataClass.query()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntitySelectionClass#query",children:(0,n.jsx)(t.code,{children:"entitySelection.query()"})})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["Subsequent requests sent to the server on the same entity selection automatically reuse the optimization context and only get necessary attributes from the server, which accelerates the processing. For example, in an ",(0,n.jsx)(t.a,{href:"#entity-selection-based-list-box",children:"entity selection-based list box"}),", the learning phase takes place during the display of the first row. the display of the next rows is optimized. The following functions automatically associate the optimization context of the source entity selection to the returned entity selection:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntitySelectionClass#and",children:(0,n.jsx)(t.code,{children:"entitySelection.and()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntitySelectionClass#minus",children:(0,n.jsx)(t.code,{children:"entitySelection.minus()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntitySelectionClass#or",children:(0,n.jsx)(t.code,{children:"entitySelection.or()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntitySelectionClass#orderBy",children:(0,n.jsx)(t.code,{children:"entitySelection.orderBy()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntitySelectionClass#slice",children:(0,n.jsx)(t.code,{children:"entitySelection.slice()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntitySelectionClass#drop",children:(0,n.jsx)(t.code,{children:"entitySelection.drop()"})})}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["An existing optimization context can be passed as a property to another entity selection of the same dataclass, thus bypassing the learning phase and accelerating the application (see ",(0,n.jsx)(t.a,{href:"#reusing-the-context-property",children:"Using the context property"})," below)."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["You can build optimization contexts manually using the ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataStoreClass#setremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.setRemoteContextInfo()"})})," function (see ",(0,n.jsx)(t.a,{href:"#preconfiguring-contexts",children:"Preconfiguring contexts"}),")."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{src:s(79535).A+"",width:"3439",height:"2018"})}),"\n",(0,n.jsx)(t.admonition,{title:"Compatibility Note",type:"warning",children:(0,n.jsxs)(t.p,{children:["Contexts handled in connections established through ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataStoreClass#open-datastore",children:(0,n.jsx)(t.code,{children:"Open datastore"})})," can only be used between similar main versions of 4D. For example, a 4D v20.x remote application can only use contexts of a 4D Server v20.x datastore."]})}),"\n",(0,n.jsx)(t.h4,{id:"Example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"Given the following code:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:' $sel:=$ds.Employee.query("firstname = ab@")\n For each($e;$sel)\n    $s:=$e.firstname+" "+$e.lastname+" works for "+$e.employer.name // $e.employer refers to Company table\n End for each\n'})}),"\n",(0,n.jsxs)(t.p,{children:["Thanks to the optimization, this request will only get data from used attributes (firstname, lastname, employer, employer.name) in ",(0,n.jsx)(t.em,{children:"$sel"})," from the second iteration of the loop."]}),"\n",(0,n.jsx)(t.h4,{id:"Reusing-the-context-property",children:"Reusing the context property"}),"\n",(0,n.jsxs)(t.p,{children:["You can increase the benefits of the optimization by using the ",(0,n.jsx)(t.strong,{children:"context"}),' property. This property references an optimization context "learned" for an entity selection. It can be passed as parameter to ORDA functions that return new entity selections, so that entity selections directly request used attributes to the server and bypass the learning phase.']}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["You can also create contexts using the ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataStoreClass#setremotecontextinfo",children:(0,n.jsx)(t.code,{children:".setRemoteContextInfo()"})})," function."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The same optimization context property can be passed to unlimited number of entity selections on the same dataclass. All ORDA functions that handle entity selections support the ",(0,n.jsx)(t.strong,{children:"context"})," property (for example ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#query",children:(0,n.jsx)(t.code,{children:"dataClass.query()"})})," or ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#all",children:(0,n.jsx)(t.code,{children:"dataClass.all()"})}),"). Keep in mind, however, that a context is automatically updated when new attributes are used in other parts of the code. Reusing the same context in different codes could result in overloading the context and then, reduce its efficiency."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["A similar mechanism is implemented for entities that are loaded, so that only used attributes are requested (see the ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#get",children:(0,n.jsx)(t.code,{children:"dataClass.get()"})})," function)."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsxs)(t.strong,{children:["Example with ",(0,n.jsx)(t.code,{children:"dataClass.query()"}),":"]})}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:' var $sel1; $sel2; $sel3; $sel4; $querysettings; $querysettings2 : Object\n var $data : Collection\n $querysettings:=New object("context";"shortList")\n $querysettings2:=New object("context";"longList")\n \n $sel1:=ds.Employee.query("lastname = S@";$querysettings)\n $data:=extractData($sel1) // In extractData method an optimization is triggered   \n // and associated to context "shortList"\n \n $sel2:=ds.Employee.query("lastname = Sm@";$querysettings)\n $data:=extractData($sel2) // In extractData method the optimization associated   \n // to context "shortList" is applied\n \n $sel3:=ds.Employee.query("lastname = Smith";$querysettings2)\n $data:=extractDetailedData($sel3) // In extractDetailedData method an optimization  \n // is triggered and associated to context "longList"\n \n $sel4:=ds.Employee.query("lastname = Brown";$querysettings2)\n $data:=extractDetailedData($sel4) // In extractDetailedData method the optimization  \n // associated to context "longList" is applied\n'})}),"\n",(0,n.jsx)(t.h4,{id:"Entity-selection-based-list-box",children:"Entity selection-based list box"}),"\n",(0,n.jsx)(t.p,{children:"Entity selection optimization is automatically applied to entity selection-based list boxes in client/server configurations, when displaying and scrolling a list box content: only the attributes displayed in the list box are requested from the server."}),"\n",(0,n.jsxs)(t.p,{children:['A specific "page mode" context is also provided when loading the current entity through the ',(0,n.jsx)(t.strong,{children:"Current item"})," property expression of the list box (see ",(0,n.jsx)(t.a,{href:"/docs/20/FormObjects/listboxOverview#list-box-types",children:"Collection or entity selection type list boxes"}),'). This feature allows you to not overload the list box initial context in this case, especially if the "page" requests additional attributes. Note that only the use of ',(0,n.jsx)(t.strong,{children:"Current item"})," expression will create/use the page context (access through ",(0,n.jsx)(t.code,{children:"entitySelection\\[index]"})," will alter the entity selection context)."]}),"\n",(0,n.jsx)(t.p,{children:"Subsequent requests to server sent by entity browsing functions will also support this optimization. The following functions automatically associate the optimization context of the source entity to the returned entity:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntityClass#next",children:(0,n.jsx)(t.code,{children:"entity.next()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntityClass#first",children:(0,n.jsx)(t.code,{children:"entity.first()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntityClass#last",children:(0,n.jsx)(t.code,{children:"entity.last()"})})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/EntityClass#previous",children:(0,n.jsx)(t.code,{children:"entity.previous()"})})}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"For example, the following code loads the selected entity and allows browsing in the entity selection. Entities are loaded in a separate context and the list box initial context is left untouched:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:" $myEntity:=Form.currentElement //current item expression\n  //... do something\n $myEntity:=$myEntity.next() //loads the next entity using the same context\n"})}),"\n",(0,n.jsx)(t.h4,{id:"Preconfiguring-contexts",children:"Preconfiguring contexts"}),"\n",(0,n.jsx)(t.p,{children:"An optimization context should be defined for every feature or algorithm of your application, in order to have the best performances. For example, a context can be used for queries on customers, another context for queries on products, etc."}),"\n",(0,n.jsx)(t.p,{children:"If you want to deliver final applications with the highest level of optimization, you can preconfigure your contexts and thus save learning phases by following these steps:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Design your algorithms."}),"\n",(0,n.jsx)(t.li,{children:"Run your application and let the automatic learning mechanism fill the optimization contexts."}),"\n",(0,n.jsxs)(t.li,{children:["Call the ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataStoreClass#getremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.getRemoteContextInfo()"})})," or ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataStoreClass#getallremotecontexts",children:(0,n.jsx)(t.code,{children:"dataStore.getAllRemoteContexts()"})})," function to collect  contexts. You can use the ",(0,n.jsx)(t.a,{href:"/docs/20/API/EntitySelectionClass#getremotecontextattributes",children:(0,n.jsx)(t.code,{children:"entitySelection.getRemoteContextAttributes()"})})," and ",(0,n.jsx)(t.a,{href:"/docs/20/API/EntityClass#getremotecontextattributes",children:(0,n.jsx)(t.code,{children:"entity.getRemoteContextAttributes()"})})," functions to analyse how your algorithms use attributes."]}),"\n",(0,n.jsxs)(t.li,{children:["In the final step, call the ",(0,n.jsx)(t.a,{href:"/docs/20/API/DataStoreClass#setremotecontextinfo",children:(0,n.jsx)(t.code,{children:"dataStore.setRemoteContextInfo()"})})," function to build contexts at application startup and ",(0,n.jsx)(t.a,{href:"#reusing-the-context-property",children:"use them"})," in your algorithms."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ORDA-cache",children:"ORDA cache"}),"\n",(0,n.jsx)(t.p,{children:"For optimization reasons, data requested from the server via ORDA is loaded in the ORDA remote cache (which is different from the 4D cache). The ORDA cache is organized by dataclass, and expires after 30 seconds."}),"\n",(0,n.jsx)(t.p,{children:"The data contained in the cache is considered as expired when the timeout is reached. Any access to expired data will send a request to the server. Expired data remains in the cache until space is needed."}),"\n",(0,n.jsx)(t.p,{children:"By default, the ORDA cache is transparently handled by 4D. However, you can control its contents using the following ORDA class functions:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#setremotecachesettings",children:"dataClass.setRemoteCacheSettings()"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#getremotecache",children:"dataClass.getRemoteCache()"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/docs/20/API/DataClassClass#clearremotecache",children:"dataClass.clearRemoteCache()"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},221020:(e,t,s)=>{var n=s(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,r=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,s){var n,o={},c=null,d=null;for(n in void 0!==s&&(c=""+s),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(d=t.ref),t)a.call(t,n)&&!l.hasOwnProperty(n)&&(o[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===o[n]&&(o[n]=t[n]);return{$$typeof:i,type:e,key:c,ref:d,props:o,_owner:r.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},474848:(e,t,s)=>{e.exports=s(221020)},79535:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/cs-optimization-process-0810df7e186eabd072bc04a037744fb1.png"},633522:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/sessionAdmin-fb7129cb6aaab939e9e8b20cb43bce8f.png"},909452:(e,t,s)=>{s.d(t,{A:()=>n});const n=s.p+"assets/images/sessions-69775ca2d11bfdbc289284efe41c0b59.png"},28453:(e,t,s)=>{s.d(t,{R:()=>a,x:()=>r});var n=s(296540);const i={},o=n.createContext(i);function a(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);