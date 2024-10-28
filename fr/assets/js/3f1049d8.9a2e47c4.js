"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58294],{530946:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>d,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var s=r(474848),t=r(28453);const i={id:"trigger-event",title:"Trigger event",slug:"/commands/trigger-event",displayed_sidebar:"docs"},a=void 0,l={id:"commands-legacy/trigger-event",title:"Trigger event",description:"Trigger event  -> R\xe9sultat",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trigger-event.md",sourceDirName:"commands-legacy",slug:"/commands/trigger-event",permalink:"/docs/fr/commands/trigger-event",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-event.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"trigger-event",title:"Trigger event",slug:"/commands/trigger-event",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"VALIDATE TRANSACTION",permalink:"/docs/fr/commands/validate-transaction"},next:{title:"Trigger level",permalink:"/docs/fr/commands/trigger-level"}},d={},o=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir aussi",id:"voir-aussi",level:4}];function c(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Trigger event"}),"  -> R\xe9sultat"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Param\xe8tre"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"R\xe9sultat"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"0=Hors de tout \xe9v\xe9nement de trigger, 1=Sauvegarde d'un nouvel enregistrement, 2=Sauvegarde d'un enregistrement existant, 3=Suppression d'un enregistrement"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["La commande ",(0,s.jsx)(n.strong,{children:"Trigger event"})," est appel\xe9e dans un trigger et renvoie une valeur num\xe9rique qui indique le type de l'\xe9v\xe9nement de la base, ou la raison pour laquelle le trigger a \xe9t\xe9 appel\xe9. 4D fournit les constantes pr\xe9d\xe9finies suivantes, plac\xe9es dans le th\xe8me ",(0,s.jsx)(n.em,{children:"Ev\xe9nements trigger"})," :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Valeur"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Deleting Record Event"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving Existing Record Event"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving New Record Event"}),(0,s.jsx)(n.td,{children:"Entier long"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si, dans un trigger, vous effectuez des op\xe9rations de base de donn\xe9es sur plusieurs enregistrements (par exemple mise \xe0 jour de plusieurs enregistrements dans la table ",(0,s.jsx)(n.em,{children:"[Produits]"})," et ajout d'enregistrement dans la table ",(0,s.jsx)(n.em,{children:"[Factures]"}),"), vous pouvez rencontrer des situations (comme des enregistrements verrouill\xe9s) qui emp\xeachent le trigger d'ex\xe9cuter correctement les op\xe9rations pour lesquelles il est appel\xe9. Il vous faut alors stopper les actions de la base et retourner une erreur pour que le process appelant sache que la requ\xeate n'a pu \xeatre ex\xe9cut\xe9e. Ce process doit \xe9galement \xeatre en mesure d'annuler les op\xe9rations non ex\xe9cut\xe9es. Autrement dit, lorsqu'une telle situation se produit, vous avez besoin de savoir dans le trigger si vous \xeates en transaction avant m\xeame d'essayer de faire quoi que ce soit. Pour cela, utilisez la fonction ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/in-transaction",children:"In transaction"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Dans 4D, il n'y a pas de limite, \xe0 part la m\xe9moire disponible, aux appels de triggers en cascade. Pour optimiser l'ex\xe9cution d'un trigger, vous pouvez \xe9crire le code de vos triggers non seulement en fonction de l'\xe9v\xe9nement de la base mais aussi du niveau de l'appel lorsque les triggers sont appel\xe9s en cascade. Par exemple, pendant l'\xe9v\xe9nement trigger ",(0,s.jsx)(n.strong,{children:"Sur suppression enregistrement"})," pour la table ",(0,s.jsx)(n.em,{children:"[Factures]"}),", vous pouvez ne pas effectuer la mise \xe0 jour du champ ",(0,s.jsx)(n.em,{children:"[Clients]Ventes"})," si la suppression de l'enregistrement de la table ",(0,s.jsx)(n.em,{children:"[Factures]"})," fait partie de la suppression en cascade des factures li\xe9es \xe0 l'enregistrement dans la table ",(0,s.jsx)(n.em,{children:"[Clients]"})," que vous \xeates en train de supprimer. Pour cela, utilisez les routines ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/trigger-level",children:"Trigger level"})," et ",(0,s.jsx)(n.a,{href:"/docs/fr/commands/trigger-properties",children:"TRIGGER PROPERTIES"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsxs)(n.p,{children:["Utilisez la fonction ",(0,s.jsx)(n.strong,{children:"Trigger event"})," pour structurer vos triggers comme ci-dessous :"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Un trigger de la table [toute table]\n\xa0var $0 : Integer\n\xa0$0:=0\xa0// S'assurer que la requ\xeate de la base sera accord\xe9e\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Trigger event=On Saving New Record Event)\n\xa0\xa0// Ex\xe9cuter les actions appropri\xe9es pour la sauvegarde d'un nouvel enregistrement\n\xa0\xa0\xa0\xa0:(Trigger event=On Saving Existing Record Event)\n\xa0\xa0// Ex\xe9cuter les actions appropri\xe9es pour la sauvegarde d'un enregistrement existant\n\xa0\xa0\xa0\xa0:(Trigger event=On Deleting Record Event)\n\xa0\xa0// Ex\xe9cuter les actions appropri\xe9es pour la suppression d'un enregistrement\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"voir-aussi",children:"Voir aussi"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/fr/commands/in-transaction",children:"In transaction"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Pr\xe9sentation des triggers"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/trigger-level",children:"Trigger level"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/fr/commands/trigger-properties",children:"TRIGGER PROPERTIES"})]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>l});var s=r(296540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);