"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34795],{689194:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var t=s(474848),r=s(28453);const i={id:"soap-get-info",title:"SOAP Get info",slug:"/commands/soap-get-info",displayed_sidebar:"docs"},d=void 0,o={id:"commands-legacy/soap-get-info",title:"SOAP Get info",description:"SOAP Get info ( numInfo ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/soap-get-info.md",sourceDirName:"commands-legacy",slug:"/commands/soap-get-info",permalink:"/docs/fr/commands/soap-get-info",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsoap-get-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"soap-get-info",title:"SOAP Get info",slug:"/commands/soap-get-info",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SOAP DECLARATION",permalink:"/docs/fr/commands/soap-declaration"},next:{title:"SOAP REJECT NEW REQUESTS",permalink:"/docs/fr/commands/soap-reject-new-requests"}},a={},c=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SOAP Get info"})," ( ",(0,t.jsx)(n.em,{children:"numInfo"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numInfo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro du type d\u2019information SOAP \xe0 lire"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Information SOAP"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"SOAP Get info"})," permet de r\xe9cup\xe9rer sous forme de cha\xeene de caract\xe8res diff\xe9rents types d\u2019informations concernant une requ\xeate SOAP."]}),"\n",(0,t.jsxs)(n.p,{children:["Lorsque vous traitez une requ\xeate SOAP, il peut \xeatre utile d\u2019obtenir des informations suppl\xe9mentaires \u2014 en-dehors des valeurs des param\xe8tres RPC \u2014 sur la requ\xeate. Par exemple, pour des raisons de s\xe9curit\xe9, vous pouvez utiliser cette commande dans la ",(0,t.jsx)(n.em,{children:"M\xe9thode base Sur authentification Web"})," afin de conna\xeetre le nom de la m\xe9thode Web Service demand\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["Passez dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"numInfo"})," le num\xe9ro du type d\u2019information SOAP \xe0 conna\xeetre. Vous pouvez utiliser les constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me ",(0,t.jsx)(n.em,{children:"Web Services (Serveur)"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SOAP method name"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Nom de la m\xe9thode offerte comme Web Service sur le point d\u2019\xeatre ex\xe9cut\xe9e"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"SOAP service name"}),(0,t.jsx)(n.td,{children:"Entier long"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Nom du Web Service auquel appartient la m\xe9thode"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Pour des raisons de s\xe9curit\xe9 \xe9galement, il est possible de d\xe9finir la taille maximale des requ\xeates Web Services adress\xe9es \xe0 4D. Ce param\xe9trage est effectu\xe9 \xe0 l\u2019aide de la commande ",(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," (th\xe8me \u201cD\xe9finition structure\u201d)."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/commands/set-database-parameter",children:"SET DATABASE PARAMETER"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/commands/soap-send-fault",children:"SOAP SEND FAULT"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>o});var t=s(296540);const r={},i=t.createContext(r);function d(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);