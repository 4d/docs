"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39003],{393397:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>p,frontMatter:()=>d,metadata:()=>c,toc:()=>o});var t=r(474848),s=r(28453);const d={id:"qr-get-area-property",title:"QR Get area property",slug:"/commands/qr-get-area-property",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/qr-get-area-property",title:"QR Get area property",description:"QR Get area property ( zone ; propri\xe9t\xe9 ) -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-area-property.md",sourceDirName:"commands-legacy",slug:"/commands/qr-get-area-property",permalink:"/docs/fr/commands/qr-get-area-property",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-area-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-get-area-property",title:"QR Get area property",slug:"/commands/qr-get-area-property",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR Find column",permalink:"/docs/fr/commands/qr-find-column"},next:{title:"QR GET BORDERS",permalink:"/docs/fr/commands/qr-get-borders"}},a={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR Get area property"})," ( ",(0,t.jsx)(n.em,{children:"zone"})," ; ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," ) -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"zone"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propri\xe9t\xe9"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"El\xe9ment d'interface"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"R\xe9sultat"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"1 = affich\xe9, 0 = cach\xe9"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"QR Get area property"})," retourne 0 si l'\xe9l\xe9ment d'interface dont la r\xe9f\xe9rence est pass\xe9e dans le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," est masqu\xe9 dans la ",(0,t.jsx)(n.em,{children:"zone"}),", sinon elle retourne 1."]}),"\n",(0,t.jsx)(n.p,{children:"Cette commande peut \xeatre utilis\xe9e uniquement avec une zone Etat rapide int\xe9gr\xe9e dans un formulaire."}),"\n",(0,t.jsxs)(n.p,{children:["Vous pouvez utiliser la constante suivante du th\xe8me ",(0,t.jsx)(n.em,{children:"QR Propri\xe9t\xe9s de zone"})," dans ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Valeur"}),(0,t.jsx)(n.th,{children:"Comment"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr view contextual menus"}),(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"Affichage des menus contextuels (Affich\xe9s=1, Cach\xe9s=0)"})]})})]}),"\n",(0,t.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,t.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:["Si le param\xe8tre ",(0,t.jsx)(n.em,{children:"propri\xe9t\xe9"})," est incorrect, l\u2019erreur -9852 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/qr-set-area-property",children:"QR SET AREA PROPERTY"})})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>i,x:()=>c});var t=r(296540);const s={},d=t.createContext(s);function i(e){const n=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);