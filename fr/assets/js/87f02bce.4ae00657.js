"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47342],{784303:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(474848),n=s(28453);const i={id:"import-data",title:"IMPORT DATA",slug:"/commands/import-data",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/import-data",title:"IMPORT DATA",description:"IMPORT DATA ( nomFichier {; projet {; *}} )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/import-data.md",sourceDirName:"commands-legacy",slug:"/commands/import-data",permalink:"/docs/fr/commands/import-data",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"import-data",title:"IMPORT DATA",slug:"/commands/import-data",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"EXPORT TEXT",permalink:"/docs/fr/commands/export-text"},next:{title:"IMPORT DIF",permalink:"/docs/fr/commands/import-dif"}},a={},l=[{value:"Description",id:"description",level:4},{value:"Variables et ensembles syst\xe8me",id:"variables-et-ensembles-syst\xe8me",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const r={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"IMPORT DATA"})," ( ",(0,t.jsx)(r.em,{children:"nomFichier"})," {; ",(0,t.jsx)(r.em,{children:"projet"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Param\xe8tre"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"nomFichier"}),(0,t.jsx)(r.td,{children:"Text"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Chemin d\u2019acc\xe8s et nom du fichier \xe0 importer"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"projet"}),(0,t.jsx)(r.td,{children:"Text, Blob"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Contenu du projet d\u2019import (XML ou r\xe9f\xe9rence d'\xe9l\xe9ment DOM ou BLOB)"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Nouveau contenu du projet d\u2019import (si le param\xe8tre * a \xe9t\xe9 pass\xe9)"}),(0,t.jsx)(r.td,{}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"*"}),(0,t.jsx)(r.td,{children:"Op\xe9rateur"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Affichage de la bo\xeete de dialogue d\u2019import et mise \xe0 jour du projet"})]})]})]}),"\n",(0,t.jsx)(r.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["La commande ",(0,t.jsx)(r.strong,{children:"IMPORT DATA"})," permet d\u2019importer des donn\xe9es depuis le fichier ",(0,t.jsx)(r.em,{children:"nomFichier"}),". 4D peut importer des donn\xe9es au format Texte, Texte de longueur fixe, XML, SYLK, DIF, DBF (dBase), et 4D."]}),"\n",(0,t.jsxs)(r.p,{children:["Si vous passez une cha\xeene vide dans le ",(0,t.jsx)(r.em,{children:"nomFichier"}),", ",(0,t.jsx)(r.strong,{children:"IMPORT DATA"})," provoque l\u2019affichage d\u2019une bo\xeete de dialogue standard d\u2019ouverture de fichiers, permettant \xe0 l\u2019utilisateur de s\xe9lectionner le fichier d\u2019import. Une fois la bo\xeete de dialogue valid\xe9e, la variable syst\xe8me Document contient le chemin d\u2019acc\xe8s et le nom du fichier d\u2019import. Si l\u2019utilisateur clique sur le bouton ",(0,t.jsx)(r.strong,{children:"Annuler"}),", l\u2019ex\xe9cution est stopp\xe9e et la variable syst\xe8me ",(0,t.jsx)(r.strong,{children:"OK"})," prend la valeur 0."]}),"\n",(0,t.jsxs)(r.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(r.em,{children:"projet"})," vous permet d'utiliser un projet pour l'import des donn\xe9es. Lorsque vous passez ce param\xe8tre, l\u2019import s\u2019effectue directement, sans intervention de l\u2019utilisateur (sauf si vous utilisez l'option ",(0,t.jsx)(r.em,{children:"*"}),", cf. ci-dessous). Si vous ne passez pas ce param\xe8tre, la bo\xeete de dialogue de param\xe9trage d\u2019import s\u2019affiche, permettant \xe0 l\u2019utilisateur de d\xe9finir ses param\xe8tres d\u2019import ou de charger un projet d\u2019import existant."]}),"\n",(0,t.jsxs)(r.p,{children:["Un projet d\u2019import contient tous les param\xe8tres de l\u2019import, tels que les tables et champs utilis\xe9s, les d\xe9limiteurs, etc. Vous pouvez passer dans ",(0,t.jsx)(r.em,{children:"projet"})," soit une variable texte contenant du XML, soit une variable texte contenant la r\xe9f\xe9rence \xe0 un \xe9l\xe9ment DOM pr\xe9existant, soit un BLOB. Les projets peuvent avoir \xe9t\xe9 cr\xe9\xe9s par programmation (projets au format XML uniquement) ou \xeatre issus du chargement de param\xe8tres pr\xe9alablement d\xe9finis dans la bo\xeete de dialogue d\u2019import. Dans ce dernier cas, vous disposez de deux solutions :"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["utiliser la commande ",(0,t.jsx)(r.strong,{children:"IMPORT DATA"})," avec un param\xe8tre ",(0,t.jsx)(r.em,{children:"projet"})," vide et le param\xe8tre optionnel ",(0,t.jsx)(r.em,{children:"*"})," (cf. ci-dessous), puis stocker le param\xe8tre ",(0,t.jsx)(r.em,{children:"projet"})," r\xe9sultant dans un champ Texte ou BLOB. Cette solution permet notamment de conserver le projet avec le fichier de donn\xe9es."]}),"\n",(0,t.jsxs)(r.li,{children:["sauvegarder le projet sur disque, puis le charger par exemple \xe0 l\u2019aide de la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/dom-parse-xml-source",children:"DOM Parse XML source"})," et passer sa r\xe9f\xe9rence dans le param\xe8tre ",(0,t.jsx)(r.em,{children:"projet"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note de compatibilit\xe9 :"})," A compter de la version 12 de 4D, les projets d'import sont encod\xe9s en XML. 4D peut ouvrir les projets d'import g\xe9n\xe9r\xe9s avec des versions pr\xe9c\xe9dentes de 4D (format BLOB), mais les projets cr\xe9\xe9s \xe0 compter de la v12 ne peuvent plus \xeatre rouverts avec une v11 ou ant\xe9rieure. Il est d\xe9sormais conseill\xe9 d'utiliser des variables Texte pour manipuler les fichiers d'import."]}),"\n",(0,t.jsxs)(r.p,{children:["Le param\xe8tre optionnel ",(0,t.jsx)(r.em,{children:"*"}),", s\u2019il est est sp\xe9cifi\xe9, provoque l\u2019affichage de la bo\xeete de dialogue de param\xe9trage d\u2019import avec les param\xe9trages d\xe9finis dans le projet. Ce fonctionnement permet d\u2019utiliser un projet pr\xe9d\xe9fini, tout en ayant la possibilit\xe9 de modifier un ou plusieurs param\xe8tres. En outre, le param\xe8tre ",(0,t.jsx)(r.em,{children:"projet"})," contient, apr\xe8s la fermeture de la bo\xeete de dialogue d\u2019import, les param\xe8tres du \u201cnouveau\u201d projet au format XML. Vous pouvez alors le stocker dans un champ Texte, sur disque, etc."]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"Note :"})," Reportez-vous \xe0 la commande ",(0,t.jsx)(r.a,{href:"/docs/fr/commands/export-data",children:"EXPORT DATA"})," pour un exemple de d\xe9finition de projet vide."]}),"\n",(0,t.jsx)(r.h4,{id:"variables-et-ensembles-syst\xe8me",children:"Variables et ensembles syst\xe8me"}),"\n",(0,t.jsxs)(r.p,{children:["Si l'utilisateur clique sur ",(0,t.jsx)(r.strong,{children:"Annuler"})," dans une des bo\xeetes de dialogue (de s\xe9lection de projet ou de param\xe9trage d'import), la variable syst\xe8me OK prend la valeur 0. Si l\u2019import se d\xe9roule correctement, la variable syst\xe8me OK prend la valeur 1."]}),"\n",(0,t.jsx)(r.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/commands/export-data",children:"EXPORT DATA"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/import-dif",children:"IMPORT DIF"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/import-sylk",children:"IMPORT SYLK"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/fr/commands/import-text",children:"IMPORT TEXT"})]})]})}function m(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>d});var t=s(296540);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);