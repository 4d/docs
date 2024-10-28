"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5288],{865010:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>a});var t=n(474848),o=n(28453);const i={id:"session-storage",title:"Session storage",slug:"/commands/session-storage",displayed_sidebar:"docs"},r=void 0,d={id:"commands-legacy/session-storage",title:"Session storage",description:"Session storage ( id ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/session-storage.md",sourceDirName:"commands-legacy",slug:"/commands/session-storage",permalink:"/docs/commands/session-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsession-storage.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"session-storage",title:"Session storage",slug:"/commands/session-storage",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Session info",permalink:"/docs/commands/session-info"},next:{title:"UNREGISTER CLIENT",permalink:"/docs/commands/unregister-client"}},c={},a=[{value:"Note",id:"note",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Session storage"})," ( ",(0,t.jsx)(s.em,{children:"id"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"id"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Unique identifier (UUID) of the session on the server"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Function result"}),(0,t.jsx)(s.td,{children:"Object"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Storage object of the session"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"note",children:"Note"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"Session storage"})," command returns the storage object of the session whose unique identifier you passed in the ",(0,t.jsx)(s.em,{children:"id"})," parameter."]}),"\n",(0,t.jsxs)(s.p,{children:["In ",(0,t.jsx)(s.em,{children:"id"}),", pass the UUID of the session for which you want to get the storage. It is automatically assigned by the server and is stored in the ",(0,t.jsx)(s.a,{href:"https://developer.4d.com/docs/API/SessionClass#id",children:(0,t.jsx)(s.strong,{children:".id"})})," property of the ",(0,t.jsx)(s.a,{href:"https://developer.4d.com/docs/API/SessionClass",children:"session object"}),". If the session does not exist on the server, the command returns ",(0,t.jsx)(s.strong,{children:"Null"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," You can get the session identifiers using the ",(0,t.jsx)(s.a,{href:"/docs/commands/process-activity",children:"Process activity"})," command."]}),"\n",(0,t.jsxs)(s.p,{children:["The returned object is the ",(0,t.jsx)(s.a,{href:"https://developer.4d.com/docs/API/SessionClass#storage",children:(0,t.jsx)(s.strong,{children:".storage"})})," property of the session. It is a shared object used to store information available to all processes of the session."]}),"\n",(0,t.jsx)(s.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(s.p,{children:'This method modifies the value of a "settings" property stored in the storage object of a specific session:'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0\xa0//Set storage for a session\n\xa0\xa0// The "Execute On Server" method property is set\n\xa0\n\xa0#DECLARE($id Text;$text Text)\n\xa0var $obj : Object\n\xa0\n\xa0$obj:=Session storage($id)\n\xa0\n\xa0If($obj.settings=Null)\n\xa0\xa0\xa0\xa0Use($obj)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings:=New shared object("text";$text)\n\xa0\xa0\xa0\xa0End use\n\xa0Else\n\xa0\xa0\xa0\xa0Use($obj.settings)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$obj.settings.text:=$text\n\xa0\xa0\xa0\xa0End use\n\xa0End if\n'})}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/commands/process-activity",children:"Process activity"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"https://developer.4d.com/docs/API/SessionClass#session",children:"Session"})]})]})}function h(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>r,x:()=>d});var t=n(296540);const o={},i=t.createContext(o);function r(e){const s=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),t.createElement(i.Provider,{value:s},e.children)}}}]);