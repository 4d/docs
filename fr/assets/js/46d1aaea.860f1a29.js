"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95224],{600333:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>a});var s=n(474848),t=n(28453);const d={id:"create-record",title:"CREATE RECORD",slug:"/commands/create-record",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/create-record",title:"CREATE RECORD",description:"CREATE RECORD {( laTable )}",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-record.md",sourceDirName:"commands-legacy",slug:"/commands/create-record",permalink:"/docs/fr/commands/create-record",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-record.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"create-record",title:"CREATE RECORD",slug:"/commands/create-record",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"UNLOAD RECORD",permalink:"/docs/fr/commands/unload-record"},next:{title:"DELETE RECORD",permalink:"/docs/fr/commands/delete-record"}},o={},a=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function l(e){const r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"CREATE RECORD"})," {( ",(0,s.jsx)(r.em,{children:"laTable"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Param\xe8tre"}),(0,s.jsx)(r.th,{children:"Type"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Description"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"laTable"}),(0,s.jsx)(r.td,{children:"Table"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Table dans laquelle cr\xe9er un enregistrement ou Table par d\xe9faut si ce param\xe8tre est omis"})]})})]}),"\n",(0,s.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"CREATE RECORD"})," cr\xe9e un nouvel enregistrement vide pour ",(0,s.jsx)(r.em,{children:"laTable"}),", mais ne l'affiche pas \xe0 l'\xe9cran. Vous devez utiliser la commande ",(0,s.jsx)(r.a,{href:"/docs/fr/commands/add-record",children:"ADD RECORD"})," pour cr\xe9er un nouvel enregistrement et l'afficher dans un formulaire entr\xe9e."]}),"\n",(0,s.jsxs)(r.p,{children:["Utilisez ",(0,s.jsx)(r.strong,{children:"CREATE RECORD"})," plut\xf4t que ",(0,s.jsx)(r.a,{href:"/docs/fr/commands/add-record",children:"ADD RECORD"})," lorsque les valeurs de l'enregistrement sont entr\xe9es par programmation. Le nouvel enregistrement devient l'enregistrement courant mais la s\xe9lection courante n'est pas modifi\xe9e."]}),"\n",(0,s.jsxs)(r.p,{children:["L'enregistrement est cr\xe9\xe9 uniquement en m\xe9moire et doit \xeatre sauvegard\xe9 \xe0 l'aide de ",(0,s.jsx)(r.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"}),". Si vous changez d'enregistrement courant (par exemple \xe0 la suite d'une recherche) avant la sauvegarde, l'enregistrement cr\xe9\xe9 est perdu."]}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"Note :"})," Cette commande ne n\xe9cessite pas que ",(0,s.jsx)(r.em,{children:"laTable"})," soit en mode lecture/\xe9criture. Elle peut \xeatre utilis\xe9e m\xeame lorsque la table est en mode lecture seulement (cf. section ",(0,s.jsx)(r.em,{children:"Verrouillage d'enregistrements"}),")."]}),"\n",(0,s.jsx)(r.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(r.p,{children:["L'exemple suivant archive les enregistrements datant de plus de 30 jours. Cette op\xe9ration est r\xe9alis\xe9e par la cr\xe9ation d'enregistrements dans une table d'archive. Une fois l'op\xe9ration termin\xe9e, les enregistrements archiv\xe9s sont supprim\xe9s de la table ",(0,s.jsx)(r.em,{children:"[Comptes]"})," :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-4d",children:"\xa0\xa0// Recherche des enregistrements datant de plus de 30 jours\n\xa0QUERY([Comptes];[Comptes]Saisie <(Date du jour 30))\n\xa0For($vlRecord;1;Records in selection([Comptes]))\xa0// Boucle une fois par enregistrement\n\xa0\xa0\xa0\xa0CREATE RECORD([Archives])\xa0// Cr\xe9ation d'un nouvel enregistrement d'archive\n\xa0\xa0\xa0\xa0[Archive]Num\xe9ro:=[Comptes]Number\xa0// Copie des champs dans l'archive\n\xa0\xa0\xa0\xa0[Archive]Saisie :=[Comptes]Saisie\n\xa0\xa0\xa0\xa0[Archive]Montant:=[Comptes]Montant\n\xa0\xa0\xa0\xa0SAVE RECORD([Archive])\xa0// Sauvegarde de l'enregistrement d'archive\n\xa0\xa0\xa0\xa0NEXT RECORD([Comptes])\xa0// Passage \xe0 l'enregistrement de compte suivant\n\xa0End for\n\xa0DELETE SELECTION([Comptes])\xa0// Suppression des enregistrements\n"})}),"\n",(0,s.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/fr/commands/add-record",children:"ADD RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/fr/commands/modify-record",children:"MODIFY RECORD"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/fr/commands/save-record",children:"SAVE RECORD"})]})]})}function m(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var s=n(296540);const t={},d=s.createContext(t);function i(e){const r=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:r},e.children)}}}]);