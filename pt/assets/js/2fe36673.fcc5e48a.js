"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87146"],{562715:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands/session-storage","title":"Session storage","description":"Session storage ( id ) : Object","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands/session-storage.md","sourceDirName":"commands","slug":"/commands/session-storage","permalink":"/docs/pt/commands/session-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession-storage.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"session-storage","title":"Session storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session info","permalink":"/docs/pt/commands/session-info"},"next":{"title":"UNREGISTER CLIENT","permalink":"/docs/pt/commands/unregister-client"}}'),o=n("785893"),r=n("250065");let i={id:"session-storage",title:"Session storage",displayed_sidebar:"docs"},d=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",details:"details",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Session storage"})," ( ",(0,o.jsx)(s.em,{children:"id"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"id"}),(0,o.jsx)(s.td,{children:"Text"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Unique identifier (UUID) of the session"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Resultado"}),(0,o.jsx)(s.td,{children:"Object"}),(0,o.jsx)(s.td,{children:"\u2190"}),(0,o.jsx)(s.td,{children:"Storage object of the session"})]})]})]}),"\n",(0,o.jsxs)(s.details,{children:[(0,o.jsx)(s.summary,{children:"Hist\xf3ria"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Release"}),(0,o.jsx)(s.th,{children:"Mudan\xe7as"})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"20 R8"}),(0,o.jsx)(s.td,{children:"Support of standalone sessions"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"20 R6"}),(0,o.jsx)(s.td,{children:"Adicionado"})]})]})]}),"\n"]}),"\n",(0,o.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.strong,{children:"Session storage"})," command returns the storage object of the session whose unique identifier you passed in the ",(0,o.jsx)(s.em,{children:"id"})," parameter."]}),"\n",(0,o.jsxs)(s.p,{children:["In ",(0,o.jsx)(s.em,{children:"id"}),", pass the UUID of the session for which you want to get the storage. It is automatically assigned by 4D (4D Server or, for standalone sessions, 4D single-user) and is stored in the ",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass#id",children:(0,o.jsx)(s.strong,{children:".id"})})," property of the ",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass",children:"session object"}),". If the session does not exist, the command returns ",(0,o.jsx)(s.strong,{children:"Null"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"})," voc\xea pode obter os identificadores de sess\xe3o usando o comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/process-activity",children:"Process activity"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["O objeto retornado \xe9 a propriedade ",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass#storage",children:(0,o.jsx)(s.strong,{children:".storage"})})," da sess\xe3o. It is a shared object used to store information available to all processes of the session. It is a shared object used to store information available to all processes of the session."]}),"\n",(0,o.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:'This method modifies the value of a "settings" property stored in the storage object of a specific session:'}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//Set storage for a session\n\xa0\xa0//The "Execute On Server" method property is set\n\xa0\n\xa0#DECLARE($id : Text; $text : Text)\n\xa0var $obj : Object\n\xa0\n\xa0$obj:=Session storage($id)\n\xa0\n\xa0If($obj.settings=Null)\n\xa0\xa0\xa0\xa0Use($obj)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings:=New shared object("text";$text)\n\xa0\xa0\xa0\xa0End use\n\xa0Else\n\xa0\xa0\xa0\xa0Use($obj.settings)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings.text:=$text\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n'})}),"\n",(0,o.jsx)(s.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/process-activity",children:"Process activity"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/API/SessionClass#session",children:"Session"})]}),"\n",(0,o.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Command number"}),(0,o.jsx)(s.td,{children:"1839"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread safe"}),(0,o.jsx)(s.td,{children:"&cross;"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return i}});var t=n(667294);let o={},r=t.createContext(o);function i(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);