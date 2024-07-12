/*! For license information please see f5b6e83c.574654ce.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51813],{523744:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>a});var s=t(474848),r=t(28453);const o={id:"clientServer",title:"Client/Server Management"},i=void 0,c={id:"Desktop/clientServer",title:"Client/Server Management",description:"4D Desktop applications can be used in a Client/Server configuration, either as merged client/server applications or as remote projects.",source:"@site/versioned_docs/version-20-R5/Desktop/clientServer.md",sourceDirName:"Desktop",slug:"/Desktop/clientServer",permalink:"/docs/20-R5/Desktop/clientServer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Desktop%2FclientServer.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"clientServer",title:"Client/Server Management"},sidebar:"docs",previous:{title:"Desktop Applications",permalink:"/docs/20-R5/category/desktop-applications"},next:{title:"Access Rights",permalink:"/docs/20-R5/category/access-rights"}},l={},a=[{value:"Opening a merged client/server application",id:"opening-a-merged-clientserver-application",level:2},{value:"Opening a remote project",id:"opening-a-remote-project",level:2},{value:"Updating project files on the server",id:"updating-project-files-on-the-server",level:3},{value:"Updating project files on remote machines",id:"updating-project-files-on-remote-machines",level:3},{value:"Using 4D and 4D Server on the same machine",id:"using-4d-and-4d-server-on-the-same-machine",level:2},{value:"Remote user sessions",id:"remote-user-sessions",level:2},{value:"Usage",id:"usage",level:3},{value:"Availability",id:"availability",level:3},{value:"See also (blog post)",id:"see-also-blog-post",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"4D Desktop applications can be used in a Client/Server configuration, either as merged client/server applications or as remote projects."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"merged client/server applications"})," are generated by the ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Desktop/building#clientserver-page",children:"Build Application manager"}),". They are used for application deployments."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"remote projects"})," are ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Project/architecture",children:".4DProject"})," files opened by 4D Server and accessed with 4D in remote mode. The server sends a .4dz version of the project (",(0,s.jsx)(n.a,{href:"/docs/20-R5/Desktop/building#build-compiled-structure",children:"compressed format"}),") to the remote 4D, thus structure files are read-only. This configuration is usually used for application testing."]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(571996).A+"",width:"581",height:"249"})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Connecting to a remote project from the ",(0,s.jsx)(n.strong,{children:"same machine as 4D Server"})," allows modifying the project files. This ",(0,s.jsx)(n.a,{href:"#using-4d-and-4d-server-on-the-same-machine",children:"specific feature"})," allows to develop a client/server application in the same context as the deployment context."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"opening-a-merged-clientserver-application",children:"Opening a merged client/server application"}),"\n",(0,s.jsx)(n.p,{children:"A merged client/server application is customized and its starting is simplified:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"To launch the server portion, the user simply double-clicks on the server application. The project file does not need to be selected."}),"\n",(0,s.jsx)(n.li,{children:"To launch the client portion, the user simply double-clicks the client application, which connects directly to the server application."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["These principles are detailed in the ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Desktop/building#what-is-a-clientserver-application",children:"Build Application"})," page."]}),"\n",(0,s.jsx)(n.h2,{id:"opening-a-remote-project",children:"Opening a remote project"}),"\n",(0,s.jsxs)(n.p,{children:["The first time you connect to a 4D Server project via a remote 4D, you will usually use the standard connection dialog. Thereafter, you will be able to connect directly using the ",(0,s.jsx)(n.strong,{children:"Open Recent Projects"})," menu or a 4DLink shortcut file."]}),"\n",(0,s.jsx)(n.p,{children:"To connect remotely to a 4D Server project:"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["Do one of the following:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Connect to 4D Server"})," in the Welcome Wizard dialog"]}),"\n",(0,s.jsxs)(n.li,{children:["Select ",(0,s.jsx)(n.strong,{children:"Open/Remote Project..."})," from the ",(0,s.jsx)(n.strong,{children:"File"})," menu or the ",(0,s.jsx)(n.strong,{children:"Open"})," toolbar button."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The 4D Server connection dialog appears. This dialog has three tabs: ",(0,s.jsx)(n.strong,{children:"Recent"}),", ",(0,s.jsx)(n.strong,{children:"Available"}),", and ",(0,s.jsx)(n.strong,{children:"Custom"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If 4D Server is connected to the same subnetwork as the remote 4D, select ",(0,s.jsx)(n.strong,{children:"Available"}),". 4D Server includes a built-in broadcasting system that, by default, publishes the name of the 4D Server projects available over the network. The list is sorted by order of appearance and updated dynamically."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(291506).A+"",width:"522",height:"482"})}),"\n",(0,s.jsxs)(n.p,{children:["To connect to a server from the list, double-click on its name or select it and click the ",(0,s.jsx)(n.strong,{children:"OK"})," button."]}),"\n",(0,s.jsxs)(n.p,{children:["If the published project is not displayed in the ",(0,s.jsx)(n.strong,{children:"Available"})," list, select ",(0,s.jsx)(n.strong,{children:"Custom"}),". The Custom page allows you to connect to a published server on the network using its network address and assigning it a customized name."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(838300).A+"",width:"522",height:"522"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Project name"}),": Defines the local name of the 4D Server project. This name will be used in the ",(0,s.jsx)(n.strong,{children:"Recent"})," page when referring to the project."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Network address"}),": The IP address of the machine where the 4D Server was launched.\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If two servers are executed simultaneously on the same machine, the IP address must be followed by a colon and port number, for example: ",(0,s.jsx)(n.code,{children:"192.168.92.104:19814"}),"."]}),"\n",(0,s.jsx)(n.li,{children:"By default, the publishing port of a 4D Server is 19813. This number can be modified in the Project settings."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Activate development mode"})," option opens the remote connection in a special read/write mode and requires to access the project folder from the remote 4D (compatibility option)."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Once this page assigns a server, clicking the ",(0,s.jsx)(n.strong,{children:"OK"})," button will allow you to connect to the server."]}),"\n",(0,s.jsxs)(n.p,{children:["Once a connection to the server has been established, the remote project will be listed on the ",(0,s.jsx)(n.strong,{children:"Recent"})," tab."]}),"\n",(0,s.jsx)(n.h3,{id:"updating-project-files-on-the-server",children:"Updating project files on the server"}),"\n",(0,s.jsxs)(n.p,{children:["4D Server automatically creates and sends the remote machines a ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Desktop/building#build-compiled-structure",children:".4dz version"})," of the ",(0,s.jsx)(n.em,{children:".4DProject"})," project file (not compressed) in interpreted mode."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["An updated .4dz version of the project is automatically produced when necessary, ",(0,s.jsx)(n.em,{children:"i.e."})," when the project has been modified and reloaded by 4D Server. The project is reloaded:\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"automatically, when the 4D Server application window comes to the front of the OS or when the 4D application on the same machine saves a modification (see below)."}),"\n",(0,s.jsxs)(n.li,{children:["when the ",(0,s.jsx)(n.code,{children:"RELOAD PROJECT"})," command is executed. Calling this command is necessary for example when you have pulled a new version of the project from the source control platform."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.h3,{id:"updating-project-files-on-remote-machines",children:"Updating project files on remote machines"}),"\n",(0,s.jsx)(n.p,{children:"When an updated .4dz version of the project has been produced on 4D Server, connected remote 4D machines must log out and reconnect to 4D Server in order to benefit from the updated version."}),"\n",(0,s.jsx)(n.h2,{id:"using-4d-and-4d-server-on-the-same-machine",children:"Using 4D and 4D Server on the same machine"}),"\n",(0,s.jsx)(n.p,{children:"When 4D connects to a 4D Server on the same machine, the application behaves as 4D in single user mode and the design environment allows you to edit project files. This feature allows you to develop a client/server application in the same context as the deployment context."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["When 4D connects to a 4D Server on the same machine, the ",(0,s.jsx)(n.strong,{children:"development mode"})," is automatically activated, whatever the ",(0,s.jsx)(n.a,{href:"#opening-a-remote-project",children:"opening option"})," status."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Each time 4D performs a ",(0,s.jsx)(n.strong,{children:"Save all"})," action from the design environment (explicitly from ",(0,s.jsx)(n.strong,{children:"File"})," menu or implicitly by switching to application mode for example), 4D Server synchronously reloads project files. 4D waits for 4D Server to finish reloading the project files before it continues."]}),"\n",(0,s.jsxs)(n.p,{children:["However, you need to pay attention to the following behavior differences compared to ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Project/architecture",children:"standard project architecture"}),":"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'the userPreferences.{username} folder used by 4D is not the same folder used by 4D Server in the project folder. Instead, it is a dedicated folder, named "userPreferences", stored in the project system folder (i.e., the same location as when opening a .4dz project).'}),"\n",(0,s.jsx)(n.li,{children:'the folder used by 4D for derived data is not the folder named "DerivedData" in the project folder. Instead it is a dedicated folder named "DerivedDataRemote" located in the project system folder.'}),"\n",(0,s.jsx)(n.li,{children:"the catalog.4DCatalog file is not edited by 4D but by 4D Server. Catalog information is synchronised using client/server requests"}),"\n",(0,s.jsx)(n.li,{children:"the directory.json file is not edited by 4D but by 4D Server. Directory information is synchronised using client/server requests"}),"\n",(0,s.jsx)(n.li,{children:"4D uses its own internal components and plug-ins instead of those in 4D Server."}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"It is not recommended to install plug-ins or components at the 4D or 4D Server application level."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"remote-user-sessions",children:"Remote user sessions"}),"\n",(0,s.jsxs)(n.p,{children:["On the server, the ",(0,s.jsx)(n.a,{href:"/docs/20-R5/API/SessionClass#session",children:(0,s.jsx)(n.code,{children:"Session"})})," command returns a ",(0,s.jsx)(n.code,{children:"session"})," object describing the current user session. This object is handled through the functions and properties of the ",(0,s.jsxs)(n.a,{href:"/docs/20-R5/API/SessionClass",children:[(0,s.jsx)(n.code,{children:"Session"})," class"]}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"session"})," object allows you to get information about the remote user session. You can share data between all processes of the user session using the ",(0,s.jsx)(n.a,{href:"/docs/20-R5/API/SessionClass#storage",children:(0,s.jsx)(n.code,{children:"session.storage"})})," shared object."]}),"\n",(0,s.jsx)(n.p,{children:"For example, you can launch a user authentication and verification procedure when a client connects to the server, involving entering a code sent by e-mail or SMS into the application. You then add the user information to the session storage, enabling the server to identify the user. This way, the 4D server can access user information for all client processes, enabling customized code to be written according to the user's role."}),"\n",(0,s.jsx)(n.h3,{id:"availability",children:"Availability"}),"\n",(0,s.jsxs)(n.p,{children:["The remote user ",(0,s.jsx)(n.code,{children:"session"})," object is available from:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Project methods that have the ",(0,s.jsx)(n.a,{href:"/docs/20-R5/Project/code-overview#execute-on-server",children:"Execute on Server"}),' attribute (they are executed in the "twinned" process of the client process),']}),"\n",(0,s.jsx)(n.li,{children:"Triggers,"}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"On Server Open Connection"})," and ",(0,s.jsx)(n.code,{children:"On Server Shutdown Connection"})," database methods."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["All stored procedures on the server share the same virtual user session. For more information, see ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv20R5/4D/20-R5/4D-Server-and-the-4D-Language.300-6932726.en.html",children:"this page on doc.4d.com"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"see-also-blog-post",children:"See also (blog post)"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"https://blog.4d.com/new-4D-remote-session-object-with-client-server-connection-and-stored-procedure",children:"4D remote session object with Client/Server connection and Stored procedure"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var s,o={},a=null,d=null;for(s in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,s)&&!l.hasOwnProperty(s)&&(o[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===o[s]&&(o[s]=n[s]);return{$$typeof:r,type:e,key:a,ref:d,props:o,_owner:c.current}}n.Fragment=o,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},838300:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/serverConnect2-2617f5a73a8b33f5ebfac1b36a006c1c.png"},571996:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/localremote-5c33fe5479db4c271ef3a6dabde98395.png"},291506:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/serverConnect-cb74aeff8307fbc27a084e5c6ec84144.png"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var s=t(296540);const r={},o=s.createContext(r);function i(e){const n=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);