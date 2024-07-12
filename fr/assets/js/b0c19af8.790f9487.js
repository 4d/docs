/*! For license information please see b0c19af8.790f9487.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91181],{880695:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>r,metadata:()=>l,toc:()=>o});var t=s(474848),d=s(28453);const r={id:"overview",title:"Vue d\u2019ensemble"},i=void 0,l={id:"Events/overview",title:"Vue d\u2019ensemble",description:"Les \xe9v\xe9nements formulaire sont des \xe9v\xe9nements qui peuvent conduire \xe0 l'ex\xe9cution de la m\xe9thode de formulaire et/ou de la ou des m\xe9thodes objet de formulaire. Les \xe9v\xe9nements de formulaire vous permettent de contr\xf4ler le flux de votre application et d'\xe9crire du code qui n'est ex\xe9cut\xe9 que lorsqu'un \xe9v\xe9nement sp\xe9cifique se produit.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/overview.md",sourceDirName:"Events",slug:"/Events/overview",permalink:"/docs/fr/19/Events/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"overview",title:"Vue d\u2019ensemble"},sidebar:"docs",previous:{title:"Zones Web",permalink:"/docs/fr/19/FormObjects/propertiesWebArea"},next:{title:"Sur activation",permalink:"/docs/fr/19/Events/onActivate"}},c={},o=[{value:"Objet \xe9v\xe9nement",id:"objet-\xe9v\xe9nement",level:2},{value:"\xc9v\xe9nements et m\xe9thodes",id:"\xe9v\xe9nements-et-m\xe9thodes",level:2},{value:"Tableau des appels",id:"tableau-des-appels",level:2}];function u(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"Les \xe9v\xe9nements formulaire sont des \xe9v\xe9nements qui peuvent conduire \xe0 l'ex\xe9cution de la m\xe9thode de formulaire et/ou de la ou des m\xe9thodes objet de formulaire. Les \xe9v\xe9nements de formulaire vous permettent de contr\xf4ler le flux de votre application et d'\xe9crire du code qui n'est ex\xe9cut\xe9 que lorsqu'un \xe9v\xe9nement sp\xe9cifique se produit."}),"\n",(0,t.jsxs)(n.p,{children:["Dans votre code, vous contr\xf4lez les \xe9v\xe9nements \xe0 l'aide de la commande ",(0,t.jsx)(n.code,{children:"FORM Event"}),", qui retourne l'\xe9v\xe9nement d\xe9clench\xe9. Par exemple :"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"//code d'un bouton\nIf(FORM Event.code=On Clicked) \n// faire quelque chose quand on clique sur le bouton\nEnd if\n"})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsx)(n.p,{children:"Chaque formulaire et chaque objet actif du formulaire peut lire un ensemble pr\xe9d\xe9fini d'\xe9v\xe9nements, mais seuls les \xe9v\xe9nements que vous avez activ\xe9s au niveau du formulaire et/ou \xe0 chaque niveau d'objet se produiront r\xe9ellement."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"objet-\xe9v\xe9nement",children:"Objet \xe9v\xe9nement"}),"\n",(0,t.jsxs)(n.p,{children:["Chaque \xe9v\xe9nement est retourn\xe9 sous forme d'objet par la commande ",(0,t.jsx)(n.code,{children:"FORM Event"}),". Par d\xe9faut, il contient les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objectName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Name of the object triggering the event - Not included if the event is triggered by the form"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Des propri\xe9t\xe9s suppl\xe9mentaires sont retourn\xe9es lorsque l'\xe9v\xe9nement se produit sur des objets sp\xe9cifiques. En particulier :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Les ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#supported-form-events",children:"list box"})," et les ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#supported-form-events-1",children:"colonnes de list box"})," retournent des ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/listboxOverview#additional-properties",children:"propri\xe9t\xe9s suppl\xe9mentaires"})," telles que ",(0,t.jsx)(n.code,{children:"columnName"})," ou ",(0,t.jsx)(n.code,{children:"isRowSelected"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Les ",(0,t.jsx)(n.a,{href:"/docs/fr/19/FormObjects/viewProAreaOverview",children:"zones 4D View Pro"})," retournent par exemple des propri\xe9t\xe9s ",(0,t.jsx)(n.code,{children:"sheetName"})," ou ",(0,t.jsx)(n.code,{children:"action"})," dans l'objet \xe9v\xe9nement ",(0,t.jsx)(n.a,{href:"/docs/fr/19/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"\xe9v\xe9nements-et-m\xe9thodes",children:"\xc9v\xe9nements et m\xe9thodes"}),"\n",(0,t.jsx)(n.p,{children:"Lorsqu'un \xe9v\xe9nement formulaire se produit, 4D effectue les actions suivantes :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tout d'abord, il parcourt les objets du formulaire et appelle la m\xe9thode objet pour tout objet (associ\xe9 \xe0 l'\xe9v\xe9nement) dont la propri\xe9t\xe9 d'\xe9v\xe9nement d'objet correspondante a \xe9t\xe9 s\xe9lectionn\xe9e."}),"\n",(0,t.jsx)(n.li,{children:"Deuxi\xe8mement, il appelle la m\xe9thode formulaire si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire correspondante a \xe9t\xe9 s\xe9lectionn\xe9e."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Ne supposez pas que les m\xe9thodes objet, le cas \xe9ch\xe9ant, seront appel\xe9es dans un ordre particulier. La r\xe8gle d'or est que les m\xe9thodes objet sont toujours appel\xe9es avant la m\xe9thode formulaire. Si un objet est un sous-formulaire, les m\xe9thodes objet du formulaire liste du sous-formulaire sont appel\xe9es, suivie de la m\xe9thode formulaire du formulaire liste. 4D continue alors d'appeler les m\xe9thodes objet du formulaire parent. En d'autres termes, lorsqu'un objet est un sous-formulaire, 4D utilise la m\xeame r\xe8gle pour les m\xe9thodes objet et formulaire au sein de l'objet sous-formulaire."}),"\n",(0,t.jsxs)(n.p,{children:["\xc0 l'exception des \xe9v\xe9nements ",(0,t.jsx)(n.a,{href:"/docs/fr/19/Events/onLoad",children:"On Load"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/19/Events/onUnload",children:"On Unload"})," (voir ci-dessous), si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire n'est pas s\xe9lectionn\xe9e pour un \xe9v\xe9nement donn\xe9, cela n'emp\xeache pas les appels vers les m\xe9thodes objet pour les objets dont la m\xeame propri\xe9t\xe9 d'\xe9v\xe9nement est s\xe9lectionn\xe9e. En d'autres termes, l'activation ou la d\xe9sactivation d'un \xe9v\xe9nement au niveau du formulaire n'a aucun effet sur les propri\xe9t\xe9s d'\xe9v\xe9nement de l'objet."]}),"\n",(0,t.jsx)(n.p,{children:"Le nombre d'objets associ\xe9s \xe0 un \xe9v\xe9nement d\xe9pend de la nature de l'\xe9v\xe9nement."}),"\n",(0,t.jsx)(n.h2,{id:"tableau-des-appels",children:"Tableau des appels"}),"\n",(0,t.jsx)(n.p,{children:"Le tableau suivant r\xe9sume la mani\xe8re dont les m\xe9thodes objet et formulaire sont appel\xe9es pour chaque type d'\xe9v\xe9nement :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Ev\xe9nement"}),(0,t.jsx)(n.th,{children:"M\xe9thode objet"}),(0,t.jsx)(n.th,{children:"M\xe9thode formulaire"}),(0,t.jsx)(n.th,{children:"Objets"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Load"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Unload"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur validation"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Clicked"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Double Clicked"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Before Keystroke"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On After Keystroke"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On After Edit"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Getting Focus"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Losing Focus"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur activation"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Deactivate"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur appel ext\xe9rieur"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur changement page"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Begin Drag Over"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Drop"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Drag Over"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Mouse Enter"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Mouse Move"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Mouse Leave"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Mouse Up"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur menu s\xe9lectionn\xe9"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Bound variable change"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Data Change"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur appel zone du plug in"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur ent\xeate"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Printing Detail"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Printing Break"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Printing Footer"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Close Box"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Display Detail"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Tous les objets"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Open Detail"}),(0,t.jsx)(n.td,{children:"Oui (List box)"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun, except\xe9 les List box"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Close Detail"}),(0,t.jsx)(n.td,{children:"Oui (List box)"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun, except\xe9 les List box"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur redimensionnement"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Selection Change"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur chargement ligne"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur minuteur"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Aucun"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Scroll"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Before Data Entry"}),(0,t.jsx)(n.td,{children:"Oui (List box)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Column Moved"}),(0,t.jsx)(n.td,{children:"Oui (List box)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Row Moved"}),(0,t.jsx)(n.td,{children:"Oui (List box)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Column Resize"}),(0,t.jsx)(n.td,{children:"Oui (List box et Zone 4D View Pro)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Header Click"}),(0,t.jsx)(n.td,{children:"Oui (List box et Zone 4D View Pro)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Footer Click"}),(0,t.jsx)(n.td,{children:"Oui (List box)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On After Sort"}),(0,t.jsx)(n.td,{children:"Oui (List box)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Sur clic long"}),(0,t.jsx)(n.td,{children:"Oui (Bouton)"}),(0,t.jsx)(n.td,{children:"Oui"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Alternative Click"}),(0,t.jsx)(n.td,{children:"Oui (Bouton et List box)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Expand"}),(0,t.jsx)(n.td,{children:"Oui (Liste hi\xe9rar. et list box)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Collapse"}),(0,t.jsx)(n.td,{children:"Oui (Liste hi\xe9rar. et list box)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Delete Action"}),(0,t.jsx)(n.td,{children:"Oui (Liste hi\xe9rar. et list box)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On URL Resource Loading"}),(0,t.jsx)(n.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Begin URL Loading"}),(0,t.jsx)(n.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On URL Loading Error"}),(0,t.jsx)(n.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On URL Filtering"}),(0,t.jsx)(n.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On End URL Loading"}),(0,t.jsx)(n.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Open External Link"}),(0,t.jsx)(n.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Window Opening Denied"}),(0,t.jsx)(n.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On VP Range Changed"}),(0,t.jsx)(n.td,{children:"Oui (4D View Pro Area)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On VP Ready"}),(0,t.jsx)(n.td,{children:"Oui (4D View Pro Area)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"On Row Resize"}),(0,t.jsx)(n.td,{children:"Oui (4D View Pro Area)"}),(0,t.jsx)(n.td,{children:"Jamais"}),(0,t.jsx)(n.td,{children:"Objets concern\xe9s uniquement"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Gardez toujours \xe0 l'esprit que, pour tout \xe9v\xe9nement, la m\xe9thode d'un formulaire ou d'un objet est appel\xe9e si la propri\xe9t\xe9 d'\xe9v\xe9nement correspondante est s\xe9lectionn\xe9e pour le formulaire ou les objets. L'avantage de la d\xe9sactivation des \xe9v\xe9nements dans l'environnement de d\xe9veloppement (\xe0 l'aide de la liste des propri\xe9t\xe9s de l'\xe9diteur de formulaires) est la r\xe9duction du nombre d'appels vers des m\xe9thodes et par cons\xe9quent l'optimisation de la vitesse d'ex\xe9cution de vos formulaires."}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["ATTENTION : Les \xe9v\xe9nements ",(0,t.jsx)(n.a,{href:"/docs/fr/19/Events/onLoad",children:"On Load"})," et ",(0,t.jsx)(n.a,{href:"/docs/fr/19/Events/onUnload",children:"On Unload"})," sont g\xe9n\xe9r\xe9s pour les objets s'ils sont activ\xe9s \xe0 la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les \xe9v\xe9nements sont activ\xe9s pour les objets uniquement, ils ne se produiront pas; ces deux \xe9v\xe9nements doivent \xe9galement \xeatre activ\xe9s au niveau du formulaire."]}),"\n"]})]})}function j(e={}){const{wrapper:n}={...(0,d.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(u,{...e})}):u(e)}},221020:(e,n,s)=>{var t=s(296540),d=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,s){var t,r={},o=null,u=null;for(t in void 0!==s&&(o=""+s),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(u=n.ref),n)i.call(n,t)&&!c.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:d,type:e,key:o,ref:u,props:r,_owner:l.current}}n.Fragment=r,n.jsx=o,n.jsxs=o},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>l});var t=s(296540);const d={},r=t.createContext(d);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);