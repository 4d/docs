"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21222],{933358:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>a});var r=t(474848),i=t(28453);const s={id:"onWindowOpeningDenied",title:"On Window Opening Denied"},d=void 0,o={id:"Events/onWindowOpeningDenied",title:"On Window Opening Denied",description:"| Code | Peut \xeatre appel\xe9 par                           | D\xe9finition                       |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Events/onWindowOpeningDenied.md",sourceDirName:"Events",slug:"/Events/onWindowOpeningDenied",permalink:"/docs/fr/Events/onWindowOpeningDenied",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonWindowOpeningDenied.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"onWindowOpeningDenied",title:"On Window Opening Denied"},sidebar:"docs",previous:{title:"On VP Ready",permalink:"/docs/fr/Events/onVpReady"},next:{title:"Menus",permalink:"/docs/fr/Menus/overview"}},l={},a=[{value:"Description",id:"description",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}];function c(e){const n={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"53"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/FormObjects/webAreaOverview",children:"Zone Web"})}),(0,r.jsx)(n.td,{children:"Une fen\xeatre pop-up a \xe9t\xe9 bloqu\xe9e"})]})})]}),"\n",(0,r.jsxs)(n.details,{children:[(0,r.jsx)(n.summary,{children:"Historique"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Release"}),(0,r.jsx)(n.th,{children:"Modifications"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"19 R5"}),(0,r.jsx)(n.td,{children:"Triggered on drop"})]})})]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsque l'ouverture d'une fen\xeatre pop-up est bloqu\xe9e par la zone Web. Les zones Web de 4D ne permettent pas l'ouverture de fen\xeatres contextuelles."}),"\n",(0,r.jsxs)(n.p,{children:["Vous pouvez identifier l'URL bloqu\xe9e \xe0 l'aide de la commande ",(0,r.jsx)(n.code,{children:"WA Get last filtered URL"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Cet \xe9v\xe9nement est \xe9galement g\xe9n\xe9r\xe9 lorsqu'une op\xe9ration de d\xe9poser a \xe9t\xe9 effectu\xe9e dans la zone Web (avec les ",(0,r.jsx)(n.a,{href:"/docs/fr/FormObjects/propertiesWebArea#use-embedded-web-rendering-engine",children:"moteurs de rendu"})," syst\xe8me embarqu\xe9 et Windows) si l'option ",(0,r.jsx)(n.a,{href:"/docs/fr/FormObjects/webAreaOverview#user-interface",children:"Glisser-d\xe9poser"})," est \xe9galement activ\xe9e pour la zone. Vous pouvez accepter l'action de d\xe9poser en appelant :"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'//m\xe9thode objet zone web\nIf (FORM Event.code=On Window Opening Denied)\n\tWA OPEN URL(*; "WebArea"; WA Get last filtered URL(*; "WebArea"))  \n\t// ou UrlVariable:=WA Get last filtered URL(*; "WebArea")  \n\t// o\xf9 UrlVariable est la variable URL associ\xe9e \xe0 la zone web\nEnd if \n'})}),"\n",(0,r.jsx)(n.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/Events/onOpenExternalLink",children:(0,r.jsx)(n.code,{children:"On Open External Link"})})})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>o});var r=t(296540);const i={},s=r.createContext(i);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);