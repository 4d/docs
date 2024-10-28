"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[52299],{636212:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>d,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var t=n(474848),r=n(28453);const o={id:"soap-reject-new-requests",title:"SOAP REJECT NEW REQUESTS",slug:"/commands/soap-reject-new-requests",displayed_sidebar:"docs"},c=void 0,i={id:"commands-legacy/soap-reject-new-requests",title:"SOAP REJECT NEW REQUESTS",description:"SOAP REJECT NEW REQUESTS ( statutRejet )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/soap-reject-new-requests.md",sourceDirName:"commands-legacy",slug:"/commands/soap-reject-new-requests",permalink:"/docs/fr/commands/soap-reject-new-requests",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-reject-new-requests.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"soap-reject-new-requests",title:"SOAP REJECT NEW REQUESTS",slug:"/commands/soap-reject-new-requests",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SOAP Get info",permalink:"/docs/fr/commands/soap-get-info"},next:{title:"SOAP Request",permalink:"/docs/fr/commands/soap-request"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"SOAP REJECT NEW REQUESTS"})," ( ",(0,t.jsx)(s.em,{children:"statutRejet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Param\xe8tre"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"statutRejet"}),(0,t.jsx)(s.td,{children:"Boolean"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Vrai si rejet de nouvelles requ\xeates, sinon Faux"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["La commande ",(0,t.jsx)(s.strong,{children:"SOAP REJECT NEW REQUESTS"})," permet d'indiquer si le serveur Web Services accepte ou non de nouvelles requ\xeates SOAP."]}),"\n",(0,t.jsxs)(s.p,{children:["Dans ",(0,t.jsx)(s.em,{children:"rejeterStatut"}),", passez ",(0,t.jsx)(s.strong,{children:"Vrai"})," pour rejeter de nouvelles requ\xeates SOAP. Passez ",(0,t.jsx)(s.strong,{children:"Faux"})," pour les autoriser."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note"})," : Cette commande ne peut \xeatre ex\xe9cut\xe9e que sur 4D Server. Si la m\xe9thode appelant la commande est ex\xe9cut\xe9e localement sur un 4D distant ou monoposte, ",(0,t.jsx)(s.strong,{children:"SOAP REJECT NEW REQUESTS"})," ne fait rien."]}),"\n",(0,t.jsx)(s.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(s.p,{children:"Vous souhaitez rejeter les nouvelles requ\xeates re\xe7ues par votre serveur Web Services :"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:"\xa0\xa0//m\xe9thode \xe0 ex\xe9cuter sur le serveur\n\xa0If(WEB Get server info.SOAPServerStarted)\n\xa0\xa0\xa0\xa0SOAP REJECT NEW REQUESTS(True)\n\xa0End if\n"})}),"\n",(0,t.jsx)(s.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.a,{href:"/docs/fr/commands/reject-new-remote-connections",children:"REJECT NEW REMOTE CONNECTIONS"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/fr/commands/web-get-server-info",children:"WEB Get server info"})]})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>c,x:()=>i});var t=n(296540);const r={},o=t.createContext(r);function c(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);