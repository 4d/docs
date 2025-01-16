"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98156"],{141730:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands/session-info","title":"Session info","description":"Hist\xf3ria","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands/session-info.md","sourceDirName":"commands","slug":"/commands/session-info","permalink":"/docs/pt/20-R7/commands/session-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"session-info","title":"Session info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session","permalink":"/docs/pt/20-R7/commands/session"},"next":{"title":"Session storage","permalink":"/docs/pt/20-R7/commands/session-storage"}}'),i=s("785893"),d=s("250065");let r={id:"session-info",title:"Session info",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function a(e){let n={a:"a",admonition:"admonition",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.details,{children:[(0,i.jsx)(n.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Release"}),(0,i.jsx)(n.th,{children:"Mudan\xe7as"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"20 R7"}),(0,i.jsx)(n.td,{children:"Adicionado"})]})})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Session info"})," ( ",(0,i.jsx)(n.em,{children:"sessionId"})," : Integer ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe2metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{style:{textAlign:"center"}}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sessionID"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2192"}),(0,i.jsx)(n.td,{children:"Session ID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultados"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{style:{textAlign:"center"},children:"\u2190"}),(0,i.jsx)(n.td,{children:"Information about the session"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"Session info"})," command returns an object describing the session whose ID you pass in the ",(0,i.jsx)(n.em,{children:"sessionID"})," parameter.. If you pass an invalid ",(0,i.jsx)(n.em,{children:"sessionID"}),", the command returns a null object."]}),"\n",(0,i.jsx)(n.p,{children:"O objeto retornado cont\xe9m as propriedades abaixo:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Nome da propriedade"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"type"}),(0,i.jsx)(n.td,{children:"Text (enum)"}),(0,i.jsx)(n.td,{children:'Session type. Possible values: "remote", "storedProcedure", "rest"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"userName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Nome de usuario"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"machineName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Name of the remote machine"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"systemUserName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Name of the system session opened on the remote machine"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"IPAddress"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Endere\xe7o IP da m\xe1quina remota"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"hostType"}),(0,i.jsx)(n.td,{children:"Text (enum)"}),(0,i.jsx)(n.td,{children:'Host type. Possible values: "windows", "mac", "browser"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"creationDateTime"}),(0,i.jsx)(n.td,{children:"Text (Date ISO 8601)"}),(0,i.jsx)(n.td,{children:"Date and time of connection of the remote machine"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"state"}),(0,i.jsx)(n.td,{children:"Text (enum)"}),(0,i.jsx)(n.td,{children:'Session state. Possible values: "active", "postponed", "sleeping"'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ID"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"Session UUID"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"persistentID"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"ID persistente da sess\xe3o"})]})]})]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Este comando retorna a propriedade ",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/API/SessionClass#info",children:(0,i.jsx)(n.code,{children:".info"})})," da sess\xe3o ",(0,i.jsx)(n.em,{children:"sessionID"}),". To get information about the current session, you can directly call ",(0,i.jsx)(n.code,{children:"Session.info"}),"."]})}),"\n",(0,i.jsx)(n.p,{children:"Here is an example of output object:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'\n{\n    "ID": "3C81A8D7AFE64C2E9CCFFCDC35DC52F5",\n    "userName": "Designer",\n    "machineName": "My Computer",\n    "systemUserName": "John Doe",\n    "IPAddress": "localhost",\n    "hostType": "mac",\n    "type": "remote",\n    "state": "active",\n    "creationDateTime: "2024-09-10T09:55:54.787Z",\n    "persistentID:"8FFDAE519F1F4DCDB81E8E8DB00AD101"\n}\n\n'})}),"\n",(0,i.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\n var $session : Object\n var $id : Integer\n $session:=Session info($id)\n\n"})}),"\n",(0,i.jsx)(n.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/API/SessionClass",children:"Session"}),"\n",(0,i.jsx)(n.a,{href:"/docs/pt/20-R7/commands/process-info",children:"Process info"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var t=s(667294);let i={},d=t.createContext(i);function r(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);