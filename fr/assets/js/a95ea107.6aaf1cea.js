"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63310],{289239:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var t=s(474848),r=s(28453);const o={id:"qr-insert-column",title:"QR INSERT COLUMN",slug:"/commands/qr-insert-column",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/qr-insert-column",title:"QR INSERT COLUMN",description:"QR INSERT COLUMN ( zone ; numColonne ; objet )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-insert-column.md",sourceDirName:"commands-legacy",slug:"/commands/qr-insert-column",permalink:"/docs/fr/commands/qr-insert-column",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-insert-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-insert-column",title:"QR INSERT COLUMN",slug:"/commands/qr-insert-column",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR GET TOTALS SPACING",permalink:"/docs/fr/commands/qr-get-totals-spacing"},next:{title:"QR MOVE COLUMN",permalink:"/docs/fr/commands/qr-move-column"}},c={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR INSERT COLUMN"})," ( ",(0,t.jsx)(n.em,{children:"zone"})," ; ",(0,t.jsx)(n.em,{children:"numColonne"})," ; ",(0,t.jsx)(n.em,{children:"objet"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tre"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"zone"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numColonne"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Num\xe9ro de colonne"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objet"}),(0,t.jsx)(n.td,{children:"Field, Variable, Pointer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Objet \xe0 ins\xe9rer dans la colonne"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["La commande ",(0,t.jsx)(n.strong,{children:"QR INSERT COLUMN"})," ins\xe8re ou cr\xe9e dans ",(0,t.jsx)(n.em,{children:"zone"})," une colonne \xe0 un emplacement sp\xe9cifique. Les colonnes situ\xe9es \xe0 droite de la colonne ajout\xe9e seront d\xe9cal\xe9es en cons\xe9quence."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"numColonne"})," indique le num\xe9ro de la colonne, correspondant \xe0 la position de la colonne \u2014 les colonnes sont num\xe9rot\xe9es de gauche \xe0 droite."]}),"\n",(0,t.jsxs)(n.p,{children:["La valeur pass\xe9e dans ",(0,t.jsx)(n.em,{children:"objet"})," sera l'intitul\xe9 par d\xe9faut de la colonne."]}),"\n",(0,t.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,t.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note :"})," Cette commande ne peut pas \xeatre utilis\xe9e avec un \xe9tat en tableau crois\xe9."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"La ligne suivante ins\xe8re (ou cr\xe9e) une premi\xe8re colonne dans la zone MaZone et la remplit avec le contenu du champ Noms. L'intitul\xe9 par d\xe9faut de la colonne sera \u201cNoms\u201d :"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0QR INSERT COLUMN(MaZone;1;->[Table 1]Noms)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/fr/commands/qr-delete-column",children:"QR DELETE COLUMN"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>i});var t=s(296540);const r={},o=t.createContext(r);function d(e){const n=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);