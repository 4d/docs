/*! For license information please see f2699f1f.b31ba9ca.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[83360],{874522:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>u,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=t(474848),i=t(28453);const l={id:"global-stamp",title:"Utiliser le marqueur global"},r=void 0,d={id:"ORDA/global-stamp",title:"Utiliser le marqueur global",description:"Vue d\u2019ensemble",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/ORDA/global-stamp.md",sourceDirName:"ORDA",slug:"/ORDA/global-stamp",permalink:"/docs/fr/ORDA/global-stamp",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Fglobal-stamp.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"global-stamp",title:"Utiliser le marqueur global"},sidebar:"docs",previous:{title:"Travailler avec les donn\xe9es",permalink:"/docs/fr/ORDA/entities"},next:{title:"Datastores distants",permalink:"/docs/fr/ORDA/datastores"}},a={},o=[{value:"Vue d\u2019ensemble",id:"Vue-densemble",level:2},{value:"Configuration du suivi des changements de donn\xe9es",id:"Configuration-du-suivi-des-changements-de-donn\xe9es",level:2},{value:"Configuration de la structure",id:"Configuration-de-la-structure",level:3},{value:"Utilisation de l&#39;Editeur de structure",id:"Utilisation-de-lEditeur-de-structure",level:3},{value:"Exemple",id:"Exemple",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"Vue-densemble",children:"Vue d\u2019ensemble"}),"\n",(0,s.jsxs)(n.p,{children:["4D g\xe8re automatiquement un ",(0,s.jsx)(n.strong,{children:"marqueur de modification globale"})," interne, utile en cas d'impl\xe9mentation d'un suivi des modifications de donn\xe9es, par exemple pour surveiller l'activit\xe9, la sauvegarde, la synchronisation incr\xe9mentielle, etc."]}),"\n",(0,s.jsxs)(n.p,{children:["Le marqueur de modification global est un nombre, toujours maintenu par 4D, m\xeame en cas de restitution de la base de donn\xe9es, d'importation, etc. Notez cependant que le marqueur peut \xeatre modifi\xe9 par la fonction ",(0,s.jsx)(n.a,{href:"/docs/fr/API/DataStoreClass#setglobalstamp",children:(0,s.jsx)(n.code,{children:".setGlobalStamp()"})}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Une fois que le ",(0,s.jsx)(n.a,{href:"#configuring-data-change-tracking",children:"suivi des changements de donn\xe9es est configur\xe9 et activ\xe9"}),", les actions suivantes sont automatiquement ex\xe9cut\xe9es par 4D \xe0 chaque modification de l'enregistrement (ajout, modification, suppression) :"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsxs)(n.p,{children:["La valeur courante du marqueur de modification globale est stock\xe9e dans l'attribut sp\xe9cial \"__GlobalStamp\" de l'entit\xe9 concern\xe9e.\nEn cas de suppression, une nouvelle entit\xe9 est \xe9galement ajout\xe9e dans la table ",(0,s.jsx)(n.code,{children:"__DeletedRecords"})," avec des informations \xe0 propos de l'entit\xe9 supprim\xe9e et la valeur courante du marqueur de modification global est enregistr\xe9e dans l'attribut \"__Stamp\"."]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:["\n",(0,s.jsx)(n.p,{children:"La valeur du marqueur de modification global est incr\xe9ment\xe9e."}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Ce m\xe9canisme vous permet d'identifier les entit\xe9s qui ont \xe9t\xe9 modifi\xe9es, ajout\xe9es ou supprim\xe9es depuis un point dans le temps, et de mettre en \u0153uvre toute action appropri\xe9e (voir exemple)."}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["Ne confondez pas le ",(0,s.jsx)(n.strong,{children:"marqueur de modification global"})," avec le ",(0,s.jsx)(n.strong,{children:"marqueur interne d'entit\xe9"}),", utilis\xe9 pour la fonctionnalit\xe9 de ",(0,s.jsx)(n.a,{href:"/docs/fr/ORDA/entities#automatic-optimistic-lock",children:"verrouillage optimiste"}),"."]})}),"\n",(0,s.jsx)(n.h2,{id:"Configuration-du-suivi-des-changements-de-donn\xe9es",children:"Configuration du suivi des changements de donn\xe9es"}),"\n",(0,s.jsxs)(n.p,{children:["Par d\xe9faut, le marqueur de modification global n'est pas cr\xe9\xe9 (la fonction ",(0,s.jsx)(n.a,{href:"/docs/fr/API/DataStoreClass#getglobalstamp",children:(0,s.jsx)(n.code,{children:".getGlobalStamp()"})})," retourne 0. Pour activer le suivi des changements de donn\xe9es, vous devez ajouter des champs sp\xe9ciaux et une table \xe0 votre structure. Vous pouvez utiliser le menu contextuel de l'\xe9diteur de structure pour cr\xe9er automatiquement tous les \xe9l\xe9ments n\xe9cessaires."]}),"\n",(0,s.jsx)(n.h3,{id:"Configuration-de-la-structure",children:"Configuration de la structure"}),"\n",(0,s.jsxs)(n.p,{children:["Pour activer le suivi des changements de donn\xe9es, la structure de l'application doit contenir au moins une table avec un champ ",(0,s.jsx)(n.code,{children:"__GlobalStamp"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"De plus, pour assurer la bonne marche de la fonctionnalit\xe9, les conditions suivantes sont requises :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Le champ ",(0,s.jsx)(n.code,{children:"__GlobalStamp"})," doit \xeatre de type ",(0,s.jsx)(n.em,{children:"Integer 64 bits"}),", avec ",(0,s.jsx)(n.em,{children:"index automatique"}),", ",(0,s.jsx)(n.em,{children:"Exposer comme ressource REST"}),", et ",(0,s.jsx)(n.em,{children:"Invisible"})," s\xe9lectionn\xe9."]}),"\n",(0,s.jsxs)(n.li,{children:["Une table ",(0,s.jsx)(n.code,{children:"__DeletedRecords"})," doit \xeatre ajout\xe9e, avec les champs suivants :"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Champ"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__PrimaryKey"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Cl\xe9 primaire de l'entit\xe9 supprim\xe9e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__Stamp"}),(0,s.jsx)(n.td,{children:"Integer 64 bits"}),(0,s.jsx)(n.td,{children:"Marqueur global juste avant la suppression"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__TableName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"Nom de la table de l'entit\xe9 supprim\xe9e"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"__TableNumber"}),(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"Num\xe9ro de la table de l'entit\xe9 supprim\xe9e"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Vous ne pouvez suivre que les changements de donn\xe9es dans les tables ayant le champ ",(0,s.jsx)(n.code,{children:"__GlobalStamp"}),"."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Dans le langage 4D, la valeur du champ ",(0,s.jsx)(n.code,{children:"__GlobalStamp"})," doit \xeatre g\xe9r\xe9e par le biais d'une variable de type ",(0,s.jsx)(n.code,{children:"Real"}),"."]})}),"\n",(0,s.jsx)(n.h3,{id:"Utilisation-de-lEditeur-de-structure",children:"Utilisation de l'Editeur de structure"}),"\n",(0,s.jsx)(n.p,{children:"L'Editeur de structure de 4D vous permet d'activer ou de d\xe9sactiver le suivi du changement de donn\xe9es \xe0 l'aide d'une commande de menu."}),"\n",(0,s.jsx)(n.p,{children:"Pour activer le suivi des changements de donn\xe9es :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"S\xe9lectionnez la ou les table(s) pour lesquelles vous souhaitez activer le suivi des changements de donn\xe9es."}),"\n",(0,s.jsxs)(n.li,{children:["Faites un clic droit sur une table s\xe9lectionn\xe9e et choisissez ",(0,s.jsx)(n.strong,{children:"Activer le suivi du changement de donn\xe9es"})," dans le menu contextuel."]}),"\n",(0,s.jsxs)(n.li,{children:["Une bo\xeete de dialogue de confirmation s'affiche. Cliquez sur ",(0,s.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"4D effectue alors les modifications suivantes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Un champ ",(0,s.jsx)(n.code,{children:"__GlobalStamp"})," pr\xe9configur\xe9 est ajout\xe9 \xe0 la ou aux table(s)."]}),"\n",(0,s.jsxs)(n.li,{children:["Si elle n'existe pas d\xe9j\xe0, une table ",(0,s.jsx)(n.code,{children:"__DeletedRecords"})," est ajout\xe9e \xe0 la structure."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Pour d\xe9sactiver le suivi des changements de donn\xe9es :"}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"S\xe9lectionnez la ou les table(s) pour lesquelles vous souhaitez supprimer le suivi des changements de donn\xe9es."}),"\n",(0,s.jsxs)(n.li,{children:["Faites un clic droit sur une table s\xe9lectionn\xe9e et choisissez ",(0,s.jsx)(n.strong,{children:"D\xe9sactiver le suivi du changement de donn\xe9es"})," dans le menu contextuel."]}),"\n",(0,s.jsxs)(n.li,{children:["Une bo\xeete de dialogue de confirmation s'affiche. Cliquez sur ",(0,s.jsx)(n.strong,{children:"OK"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["4D supprime alors le champ ",(0,s.jsx)(n.code,{children:"__GlobalStamp"})," de la ou des table(s). Notez que si vous voulez supprimer la table ",(0,s.jsx)(n.code,{children:"__DeletedRecords"}),", vous devez le faire manuellement."]}),"\n",(0,s.jsx)(n.h2,{id:"Exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $oldStamp : Real\nvar $tableName : Text\nvar $modifiedEmps : cs.EmployeeSelection\nvar $deletedEmpsInfo : cs.__DeletedRecordsSelection\n\n$tableName:="Employee"\n$oldStamp:=... //load the previous stamp value  \n\t//from which you want to compare the current stamp\n\nIf ($oldStamp # ds.getGlobalStamp())\n\t\t//get all new or modified entities\n\t$modifiedEmps:=ds[$tableName].query("__GlobalStamp > :1"; $oldStamp)\n\t\t//get all deleted entities\n\t$deletedEmpsInfo:=ds.__DeletedRecords.query("__Stamp > :1 and __TableName = :2";\\\n\t$oldStamp; $tableName)\nEnd if\n'})})]})}function u(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,t)=>{var s=t(296540),i=Symbol.for("react.element"),l=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var s,l={},o=null,c=null;for(s in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(c=n.ref),n)r.call(n,s)&&!a.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:i,type:e,key:o,ref:c,props:l,_owner:d.current}}n.Fragment=l,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>d});var s=t(296540);const i={},l=s.createContext(i);function r(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);