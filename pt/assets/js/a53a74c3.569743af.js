"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70519"],{923721:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>i});var r=JSON.parse('{"id":"commands/process-activity","title":"Process activity","description":"Process activity () ObjectProcess activity ( sessionID ) Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/process-activity.md","sourceDirName":"commands","slug":"/commands/process-activity","permalink":"/docs/pt/commands/process-activity","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fprocess-activity.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"process-activity","title":"Process activity","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Process aborted","permalink":"/docs/pt/commands/process-aborted"},"next":{"title":"Process info","permalink":"/docs/pt/commands/process-info"}}'),t=n("785893"),o=n("250065");let i={id:"process-activity",title:"Process activity",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function a(e){let s={a:"a",admonition:"admonition",br:"br",code:"code",details:"details",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Process activity"})," () : Object",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Process activity"})," ( ",(0,t.jsx)(s.em,{children:"options"})," ) : Object",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Process activity"})," ( ",(0,t.jsx)(s.em,{children:"sessionID"})," ) : Object",(0,t.jsx)(s.br,{}),(0,t.jsx)(s.strong,{children:"Process activity"})," ( ",(0,t.jsx)(s.em,{children:"sessionID"})," ; ",(0,t.jsx)(s.em,{children:"options"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"sessionID"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Session ID"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"options"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Return options"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Resultado"}),(0,t.jsx)(s.td,{children:"Object"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Snapshot of running processes and/or (4D Server only) user sessions"})]})]})]}),"\n",(0,t.jsxs)(s.details,{children:[(0,t.jsx)(s.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Release"}),(0,t.jsx)(s.th,{children:"Mudan\xe7as"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"20 R7"}),(0,t.jsx)(s.td,{children:"Support of sessionID parameter"})]})})]}),"\n"]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Process activity"})," command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time.The ",(0,t.jsx)(s.strong,{children:"Process activity"})," command returns a snapshot of running processes and/or (4D Server only) connected user sessions at a given time. This command returns all processes, including internal processes that are not reachable by the ",(0,t.jsx)(s.a,{href:"/docs/pt/commands/process-info",children:"Process info"})," command."]}),"\n",(0,t.jsxs)(s.p,{children:["By default when used without any parameters, ",(0,t.jsx)(s.strong,{children:"Process activity"})," returns an object containing the following properties:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:'"processes", a collection of all processes'}),"\n",(0,t.jsx)(s.li,{children:'"sessions" (4D Server only), a collection of all sessions'}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["On 4D Server, you can filter information to be returned using the optional ",(0,t.jsx)(s.em,{children:"sessionID"})," and ",(0,t.jsx)(s.em,{children:"options"})," parameters:"]}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["If you pass a user session ID in the ",(0,t.jsx)(s.em,{children:"sessionID"})," parameter, the command only returns information related to this session. By default if the ",(0,t.jsx)(s.em,{children:"options"})," parameter is omitted, the returned object contains a collection with all processes related to the session and a collection with a single object describing the session. If you pass an invalid session ID, a ",(0,t.jsx)(s.strong,{children:"null"})," object is returned."]}),"\n",(0,t.jsxs)(s.li,{children:["You can select the collection(s) to return by passing one of the following constants in the ",(0,t.jsx)(s.em,{children:"options"})," parameter:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metros"}),(0,t.jsx)(s.th,{children:"Valor"}),(0,t.jsx)(s.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Processes and sessions"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:'Returns both "processes" and "sessions" lists (default value)'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Processes only"}),(0,t.jsx)(s.td,{children:"1"}),(0,t.jsx)(s.td,{children:'Returns only the "processes" list'})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Somente sess\xf5es"}),(0,t.jsx)(s.td,{children:"2"}),(0,t.jsx)(s.td,{children:'Returns only the "sessions" list'})]})]})]}),"\n",(0,t.jsx)(s.admonition,{type:"note",children:(0,t.jsxs)(s.p,{children:["When executed on 4D in remote or local mode, ",(0,t.jsx)(s.code,{children:"Process activity"})," always returns the list of running processes (",(0,t.jsx)(s.em,{children:"sessionID"})," and ",(0,t.jsx)(s.em,{children:"options"})," parameters are ignored)."]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Sessions"})}),"\n",(0,t.jsxs)(s.p,{children:['The "sessions" property contains a collection of objects describing all running sessions on the server. For a description of session object properties, please refer to the ',(0,t.jsx)(s.a,{href:"/docs/pt/commands/session-info",children:(0,t.jsx)(s.code,{children:"Session info"})})," command."]}),"\n",(0,t.jsx)(s.admonition,{title:"Notes",type:"note",children:(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsxs)(s.li,{children:["You can get the object of a session using the ",(0,t.jsx)(s.a,{href:"/docs/pt/commands/session",children:"Session"})," command."]}),"\n",(0,t.jsxs)(s.li,{children:[(0,t.jsx)(s.code,{children:"Process activity"})," returns remote client sessions, stored procedure session and rest sessions but not Web sessions (limitation)."]}),"\n"]})}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.strong,{children:"Processes"})}),"\n",(0,t.jsxs)(s.p,{children:['The "processes" property contains a collection of process objects describing all running processes. For a description of process object properties, please refer to the ',(0,t.jsx)(s.a,{href:"/docs/pt/commands/process-info",children:(0,t.jsx)(s.code,{children:"Process info"})})," command."]}),"\n",(0,t.jsxs)(s.p,{children:["On the server, the ",(0,t.jsx)(s.code,{children:"Process activity"}),' command returns an additional "session" property:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Additional property"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"}),(0,t.jsx)(s.th,{})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"session"}),(0,t.jsx)(s.td,{children:"Object"}),(0,t.jsxs)(s.td,{children:["The ",(0,t.jsx)(s.a,{href:"/docs/pt/API/SessionClass#info",children:(0,t.jsx)(s.code,{children:".info"})})," property of the session in which the process is running. Undefined if the ",(0,t.jsx)(s.code,{children:"Processes only"})," parameter is passed."]}),(0,t.jsx)(s.td,{})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,t.jsx)(s.p,{children:"You want to get the collection of all user sessions:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//To be executed on the server\n\xa0\n\xa0var $o : Object\n\xa0var $i : Integer\n vat $processName;$userName : Text\n\n\xa0\n $o:=Process activity //Get process & session info\n For($i;0;($o.processes.length)-1) //Iterate over the "processes" collection\n    $processName:=$o.processes[$i].name\n    $userName:=String($o.processes[$i].session.userName) // Easy access to userName\n  //use String because session object might be undefined\n End for\n'})}),"\n",(0,t.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,t.jsx)(s.p,{children:"You want to get all processes related to the current session:"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"  // to be executed on the server\n \n var $sessionID : Text:=Session.id\n var $o : Object\n \n $o:=Process activity($sessionID ;Processes only)\n\n"})}),"\n",(0,t.jsx)(s.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/pt/commands/session-storage",children:"Session storage"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/pt/commands/web-get-server-info",children:"WEB Get server info"})]})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return c},a:function(){return i}});var r=n(667294);let t={},o=r.createContext(t);function i(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);