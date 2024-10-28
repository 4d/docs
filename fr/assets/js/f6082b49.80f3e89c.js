"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[68098],{285782:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=t(474848),s=t(28453);const i={id:"qr-get-selection",title:"QR GET SELECTION",slug:"/commands/qr-get-selection",displayed_sidebar:"docs"},d=void 0,l={id:"commands-legacy/qr-get-selection",title:"QR GET SELECTION",description:"QR GET SELECTION ( zone ; gauche ; haut {; droite {; bas}} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-selection.md",sourceDirName:"commands-legacy",slug:"/commands/qr-get-selection",permalink:"/docs/fr/commands/qr-get-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"qr-get-selection",title:"QR GET SELECTION",slug:"/commands/qr-get-selection",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"QR Get report table",permalink:"/docs/fr/commands/qr-get-report-table"},next:{title:"QR GET SORTS",permalink:"/docs/fr/commands/qr-get-sorts"}},c={},o=[{value:"Description",id:"description",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function a(e){const n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"QR GET SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"zone"})," ; ",(0,r.jsx)(n.em,{children:"gauche"})," ; ",(0,r.jsx)(n.em,{children:"haut"})," {; ",(0,r.jsx)(n.em,{children:"droite"})," {; ",(0,r.jsx)(n.em,{children:"bas"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Param\xe8tre"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"zone"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"R\xe9f\xe9rence de la zone"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"gauche"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Limite gauche"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"haut"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Limite sup\xe9rieure"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"droite"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Limite droite"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"bas"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Limite inf\xe9rieure"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Cette commande n'est pas thread-safe, elle ne peut pas \xeatre utilis\xe9e dans du code pr\xe9emptif."})}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["La commande ",(0,r.jsx)(n.strong,{children:"QR GET SELECTION"})," retourne les coordonn\xe9es de la s\xe9lection courante de la ",(0,r.jsx)(n.em,{children:"zone"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"gauche"})," retourne le num\xe9ro de la colonne repr\xe9sentant la limite gauche de la s\xe9lection. Si ",(0,r.jsx)(n.em,{children:"gauche"})," vaut 0, la ligne enti\xe8re est s\xe9lectionn\xe9e.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"haut"})," retourne le num\xe9ro de la ligne repr\xe9sentant la limite sup\xe9rieure de la s\xe9lection. Si ",(0,r.jsx)(n.em,{children:"haut"})," vaut 0, la colonne enti\xe8re est s\xe9lectionn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si les param\xe8tres ",(0,r.jsx)(n.em,{children:"gauche"})," and ",(0,r.jsx)(n.em,{children:"haut"})," valent 0, la totalit\xe9 de la zone est s\xe9lectionn\xe9e."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.em,{children:"droite"})," retourne le num\xe9ro de la colonne repr\xe9sentant la limite droite de la s\xe9lection.",(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.em,{children:"bas"})," retourne le num\xe9ro de la ligne repr\xe9sentant la limite inf\xe9rieure de la s\xe9lection."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note :"})," Si la ",(0,r.jsx)(n.em,{children:"zone"})," ne contient aucune s\xe9lection, les param\xe8tres ",(0,r.jsx)(n.em,{children:"gauche"}),", ",(0,r.jsx)(n.em,{children:"haut"}),", ",(0,r.jsx)(n.em,{children:"droite"})," et ",(0,r.jsx)(n.em,{children:"bas"})," retournent -1."]}),"\n",(0,r.jsxs)(n.p,{children:["Si un num\xe9ro de ",(0,r.jsx)(n.em,{children:"zone"})," invalide est pass\xe9, l\u2019erreur -9850 est g\xe9n\xe9r\xe9e."]}),"\n",(0,r.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/fr/commands/qr-set-selection",children:"QR SET SELECTION"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var r=t(296540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);