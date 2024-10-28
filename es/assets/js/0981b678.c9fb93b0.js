"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94666],{907248:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>o,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=n(474848),i=n(28453);const t={id:"process-activity",title:"Process activity",displayed_sidebar:"docs"},o=void 0,c={id:"commands/process-activity",title:"Process activity",description:"Process activity () ObjectProcess activity ( sessionID ) Object",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands/process-activity.md",sourceDirName:"commands",slug:"/commands/process-activity",permalink:"/docs/es/commands/process-activity",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fprocess-activity.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"process-activity",title:"Process activity",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Process aborted",permalink:"/docs/es/commands/process-aborted"},next:{title:"Process info",permalink:"/docs/es/commands/process-info"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function a(e){const s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Process activity"})," () : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Process activity"})," ( ",(0,r.jsx)(s.em,{children:"options"})," ) : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Process activity"})," ( ",(0,r.jsx)(s.em,{children:"sessionID"})," ) : Object",(0,r.jsx)(s.br,{}),(0,r.jsx)(s.strong,{children:"Process activity"})," ( ",(0,r.jsx)(s.em,{children:"sessionID"})," ; ",(0,r.jsx)(s.em,{children:"options"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metros"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sessionID"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Session ID"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"options"}),(0,r.jsx)(s.td,{children:"Integer"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Return options"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Resultado"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Snapshot of running processes and/or (4D Server only) user sessions"})]})]})]}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Lanzamiento"}),(0,r.jsx)(s.th,{children:"Modificaciones"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R7"}),(0,r.jsx)(s.td,{children:"Support of sessionID parameter"})]})})]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Process activity"})," command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.The ",(0,r.jsx)(s.strong,{children:"Process activity"})," command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time. This command returns all processes, including internal processes that are not reachable by the ",(0,r.jsx)(s.a,{href:"/docs/es/commands/process-info",children:"Process info"})," command."]}),"\n",(0,r.jsxs)(s.p,{children:["By default when used without any parameters, ",(0,r.jsx)(s.strong,{children:"Process activity"})," returns an object containing the following properties:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:'"processes", a collection of all processes'}),"\n",(0,r.jsx)(s.li,{children:'"sessions" (4D Server only), a collection of all sessions'}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["On 4D Server, you can filter information to be returned using the optional ",(0,r.jsx)(s.em,{children:"sessionID"})," and ",(0,r.jsx)(s.em,{children:"options"})," parameters:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["If you pass a user session ID in the ",(0,r.jsx)(s.em,{children:"sessionID"})," parameter, the command only returns information related to this session. By default if the ",(0,r.jsx)(s.em,{children:"options"})," parameter is omitted, the returned object contains a collection with all processes related to the session and a collection with a single object describing the session. If you pass an invalid session ID, a ",(0,r.jsx)(s.strong,{children:"null"})," object is returned."]}),"\n",(0,r.jsxs)(s.li,{children:["You can select the collection(s) to return by passing one of the following constants in the ",(0,r.jsx)(s.em,{children:"options"})," parameter:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Constante"}),(0,r.jsx)(s.th,{children:"Valor"}),(0,r.jsx)(s.th,{children:"Comentario"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Processes and sessions"}),(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:'Returns both "processes" and "sessions" lists (default value)'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Processes only"}),(0,r.jsx)(s.td,{children:"1"}),(0,r.jsx)(s.td,{children:'Returns only the "processes" list'})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Sessions only"}),(0,r.jsx)(s.td,{children:"2"}),(0,r.jsx)(s.td,{children:'Returns only the "sessions" list'})]})]})]}),"\n",(0,r.jsx)(s.admonition,{type:"note",children:(0,r.jsxs)(s.p,{children:["When executed on 4D in remote or local mode, ",(0,r.jsx)(s.code,{children:"Process activity"})," always returns the list of running processes (",(0,r.jsx)(s.em,{children:"sessionID"})," and ",(0,r.jsx)(s.em,{children:"options"})," parameters are ignored)."]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Sessions"})}),"\n",(0,r.jsxs)(s.p,{children:['The "sessions" property contains a collection of objects describing all running sessions on the server. For a description of session object properties, please refer to the ',(0,r.jsx)(s.a,{href:"/docs/es/commands/session-info",children:(0,r.jsx)(s.code,{children:"Session info"})})," command."]}),"\n",(0,r.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["You can get the object of a session using the ",(0,r.jsx)(s.a,{href:"/docs/es/commands/session",children:"Session"})," command."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"Process activity"})," returns remote client sessions, stored procedure session and rest sessions but not Web sessions (limitation)."]}),"\n"]})}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.strong,{children:"Processes"})}),"\n",(0,r.jsxs)(s.p,{children:['The "processes" property contains a collection of process objects describing all running processes. For a description of process object properties, please refer to the ',(0,r.jsx)(s.a,{href:"/docs/es/commands/process-info",children:(0,r.jsx)(s.code,{children:"Process info"})})," command."]}),"\n",(0,r.jsxs)(s.p,{children:["On the server, the ",(0,r.jsx)(s.code,{children:"Process activity"}),' command returns an additional "session" property:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Additional property"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"}),(0,r.jsx)(s.th,{})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"session"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsxs)(s.td,{children:["The ",(0,r.jsx)(s.a,{href:"/docs/es/API/SessionClass#info",children:(0,r.jsx)(s.code,{children:".info"})})," property of the session in which the process is running. Undefined if the ",(0,r.jsx)(s.code,{children:"Processes only"})," parameter is passed."]}),(0,r.jsx)(s.td,{})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsx)(s.p,{children:"You want to get the collection of all user sessions:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//To be executed on the server\n\xa0\n\xa0var $o : Object\n\xa0var $i : Integer\n vat $processName;$userName : Text\n\n\xa0\n $o:=Process activity //Get process & session info\n For($i;0;($o.processes.length)-1) //Iterate over the "processes" collection\n    $processName:=$o.processes[$i].name\n    $userName:=String($o.processes[$i].session.userName) // Easy access to userName\n  //use String because session object might be undefined\n End for\n'})}),"\n",(0,r.jsx)(s.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(s.p,{children:"You want to get all processes related to the current session:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"  // to be executed on the server\n \n var $sessionID : Text:=Session.id\n var $o : Object\n \n $o:=Process activity($sessionID ;Processes only)\n\n"})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/commands/session-storage",children:"Session storage"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/web-get-server-info",children:"WEB Get server info"})]})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>o,x:()=>c});var r=n(296540);const i={},t=r.createContext(i);function o(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);