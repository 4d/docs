"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79274"],{170894:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"commands/session-storage","title":"Session storage","description":"Session storage ( id ) : Object","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands/session-storage.md","sourceDirName":"commands","slug":"/commands/session-storage","permalink":"/docs/es/commands/session-storage","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands%2Fsession-storage.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"session-storage","title":"Session storage","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Session info","permalink":"/docs/es/commands/session-info"},"next":{"title":"UNREGISTER CLIENT","permalink":"/docs/es/commands/unregister-client"}}'),i=n("785893"),r=n("250065");let o={id:"session-storage",title:"Session storage",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let s={a:"a",br:"br",code:"code",details:"details",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Session storage"})," ( ",(0,i.jsx)(s.em,{children:"id"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Par\xe1metros"}),(0,i.jsx)(s.th,{children:"Tipo"}),(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"id"}),(0,i.jsx)(s.td,{children:"Text"}),(0,i.jsx)(s.td,{children:"\u2192"}),(0,i.jsx)(s.td,{children:"Unique identifier (UUID) of the session"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Resultado"}),(0,i.jsx)(s.td,{children:"Object"}),(0,i.jsx)(s.td,{children:"\u2190"}),(0,i.jsx)(s.td,{children:"Storage object of the session"})]})]})]}),"\n",(0,i.jsxs)(s.details,{children:[(0,i.jsx)(s.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{children:"Lanzamiento"}),(0,i.jsx)(s.th,{children:"Modificaciones"})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"20 R8"}),(0,i.jsx)(s.td,{children:"Support of standalone sessions"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"20 R6"}),(0,i.jsx)(s.td,{children:"A\xf1adidos"})]})]})]}),"\n"]}),"\n",(0,i.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(s.p,{children:["The ",(0,i.jsx)(s.strong,{children:"Session storage"})," command returns the storage object of the session whose unique identifier you passed in the ",(0,i.jsx)(s.em,{children:"id"})," parameter."]}),"\n",(0,i.jsxs)(s.p,{children:["In ",(0,i.jsx)(s.em,{children:"id"}),", pass the UUID of the session for which you want to get the storage. Se asigna autom\xe1ticamente por 4D (4D Server o, para sesiones independientes, 4D mono-usuario) y se almacena en ",(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass#id",children:(0,i.jsx)(s.strong,{children:".id"})})," propiedad del ",(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass",children:"objeto de sesi\xf3n"}),". If the session does not exist, the command returns ",(0,i.jsx)(s.strong,{children:"Null"}),"."]}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.strong,{children:"Note:"})," You can get the session identifiers using the ",(0,i.jsx)(s.a,{href:"/docs/es/commands/process-activity",children:"Process activity"})," command."]}),"\n",(0,i.jsxs)(s.p,{children:["El objeto devuelto es la propiedad ",(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass#storage",children:(0,i.jsx)(s.strong,{children:".storage"})})," de la sesi\xf3n. It is a shared object used to store information available to all processes of the session."]}),"\n",(0,i.jsx)(s.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(s.p,{children:'This method modifies the value of a "settings" property stored in the storage object of a specific session:'}),"\n",(0,i.jsx)(s.pre,{children:(0,i.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//Set storage for a session\n\xa0\xa0//The "Execute On Server" method property is set\n\xa0\n\xa0#DECLARE($id : Text; $text : Text)\n\xa0var $obj : Object\n\xa0\n\xa0$obj:=Session storage($id)\n\xa0\n\xa0If($obj.settings=Null)\n\xa0\xa0\xa0\xa0Use($obj)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings:=New shared object("text";$text)\n\xa0\xa0\xa0\xa0End use\n\xa0Else\n\xa0\xa0\xa0\xa0Use($obj.settings)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings.text:=$text\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n'})}),"\n",(0,i.jsx)(s.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(s.p,{children:[(0,i.jsx)(s.a,{href:"/docs/es/commands/process-activity",children:"Process activity"}),(0,i.jsx)(s.br,{}),"\n",(0,i.jsx)(s.a,{href:"/docs/es/API/SessionClass#session",children:"Session"})]}),"\n",(0,i.jsx)(s.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(s.table,{children:[(0,i.jsx)(s.thead,{children:(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.th,{}),(0,i.jsx)(s.th,{})]})}),(0,i.jsxs)(s.tbody,{children:[(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"N\xfamero de comando"}),(0,i.jsx)(s.td,{children:"1839"})]}),(0,i.jsxs)(s.tr,{children:[(0,i.jsx)(s.td,{children:"Hilo seguro"}),(0,i.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return o}});var t=n(667294);let i={},r=t.createContext(i);function o(e){let s=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(r.Provider,{value:s},e.children)}}}]);