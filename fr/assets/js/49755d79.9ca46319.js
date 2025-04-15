"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59802"],{566989:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"commands/session-storage","title":"Session storage","description":"Session storage ( id ) : Object","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/commands/session-storage.md","sourceDirName":"commands","slug":"/commands/session-storage","permalink":"/docs/fr/commands/session-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession-storage.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"session-storage","title":"Session storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session info","permalink":"/docs/fr/commands/session-info"},"next":{"title":"UNREGISTER CLIENT","permalink":"/docs/fr/commands/unregister-client"}}'),r=n("785893"),i=n("250065");let o={id:"session-storage",title:"Session storage",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:2},{value:"Propri\xe9t\xe9s",id:"propri\xe9t\xe9s",level:2}];function a(e){let s={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Session storage"})," ( ",(0,r.jsx)(s.em,{children:"id"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Param\xe8tres"}),(0,r.jsx)(s.th,{children:"Type"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"id"}),(0,r.jsx)(s.td,{children:"Text"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Identifiant unique (UUID) de la session"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"R\xe9sultat"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Objet de stockage de la session"})]})]})]}),"\n",(0,r.jsxs)(s.details,{children:[(0,r.jsx)(s.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Release"}),(0,r.jsx)(s.th,{children:"Modifications"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R8"}),(0,r.jsx)(s.td,{children:"Prise en charge des sessions autonomes"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"20 R6"}),(0,r.jsx)(s.td,{children:"Ajout"})]})]})]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.strong,{children:"Session storage"})," command returns the storage object of the session whose unique identifier you passed in the ",(0,r.jsx)(s.em,{children:"id"})," parameter."]}),"\n",(0,r.jsxs)(s.p,{children:["In ",(0,r.jsx)(s.em,{children:"id"}),", pass the UUID of the session for which you want to get the storage. It is automatically assigned by 4D (4D Server or, for standalone sessions, 4D single-user) and is stored in the ",(0,r.jsx)(s.a,{href:"/docs/fr/API/SessionClass#id",children:(0,r.jsx)(s.strong,{children:".id"})})," property of the ",(0,r.jsx)(s.a,{href:"/docs/fr/API/SessionClass",children:"session object"}),". If the session does not exist, the command returns ",(0,r.jsx)(s.strong,{children:"Null"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Note:"})," You can get the session identifiers using the ",(0,r.jsx)(s.a,{href:"/docs/fr/commands/process-activity",children:"Process activity"})," command."]}),"\n",(0,r.jsxs)(s.p,{children:["The returned object is the ",(0,r.jsx)(s.a,{href:"/docs/fr/API/SessionClass#storage",children:(0,r.jsx)(s.strong,{children:".storage"})})," property of the session. It is a shared object used to store information available to all processes of the session."]}),"\n",(0,r.jsx)(s.h2,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(s.p,{children:'This method modifies the value of a "settings" property stored in the storage object of a specific session:'}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//Set storage for a session\n\xa0\xa0//The "Execute On Server" method property is set\n\xa0\n\xa0#DECLARE($id : Text; $text : Text)\n\xa0var $obj : Object\n\xa0\n\xa0$obj:=Session storage($id)\n\xa0\n\xa0If($obj.settings=Null)\n\xa0\xa0\xa0\xa0Use($obj)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings:=New shared object("text";$text)\n\xa0\xa0\xa0\xa0End use\n\xa0Else\n\xa0\xa0\xa0\xa0Use($obj.settings)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings.text:=$text\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n'})}),"\n",(0,r.jsx)(s.h2,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/fr/commands/process-activity",children:"Process activity"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/fr/API/SessionClass#session",children:"Session"})]}),"\n",(0,r.jsx)(s.h2,{id:"propri\xe9t\xe9s",children:"Propri\xe9t\xe9s"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Num\xe9ro de commande"}),(0,r.jsx)(s.td,{children:"1839"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread safe"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return o}});var t=n(667294);let r={},i=t.createContext(r);function o(e){let s=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);