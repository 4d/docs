/*! For license information please see 9cbe5164.7d93ece8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[28432],{257287:(n,e,s)=>{s.r(e),s.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>j,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var t=s(474848),r=s(28453);const d={id:"overview",title:"Ev\xe9nements formulaire"},i=void 0,l={id:"Events/overview",title:"Ev\xe9nements formulaire",description:"Les \xe9v\xe9nements formulaire sont des \xe9v\xe9nements qui peuvent conduire \xe0 l'ex\xe9cution de la m\xe9thode de formulaire et/ou de la ou des m\xe9thodes objet de formulaire. Les \xe9v\xe9nements de formulaire vous permettent de contr\xf4ler le flux de votre application et d'\xe9crire du code qui n'est ex\xe9cut\xe9 que lorsqu'un \xe9v\xe9nement sp\xe9cifique se produit.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/overview.md",sourceDirName:"Events",slug:"/Events/overview",permalink:"/docs/fr/20/Events/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"overview",title:"Ev\xe9nements formulaire"},sidebar:"docs",previous:{title:"Zones Web",permalink:"/docs/fr/20/FormObjects/propertiesWebArea"},next:{title:"Sur activation",permalink:"/docs/fr/20/Events/onActivate"}},c={},o=[{value:"Objet \xe9v\xe9nement",id:"Objet-\xe9v\xe9nement",level:2},{value:"\xc9v\xe9nements et m\xe9thodes",id:"\xc9v\xe9nements-et-m\xe9thodes",level:2},{value:"Tableau des appels",id:"Tableau-des-appels",level:2}];function u(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(e.p,{children:"Les \xe9v\xe9nements formulaire sont des \xe9v\xe9nements qui peuvent conduire \xe0 l'ex\xe9cution de la m\xe9thode de formulaire et/ou de la ou des m\xe9thodes objet de formulaire. Les \xe9v\xe9nements de formulaire vous permettent de contr\xf4ler le flux de votre application et d'\xe9crire du code qui n'est ex\xe9cut\xe9 que lorsqu'un \xe9v\xe9nement sp\xe9cifique se produit."}),"\n",(0,t.jsxs)(e.p,{children:["Dans votre code, vous contr\xf4lez les \xe9v\xe9nements \xe0 l'aide de la commande ",(0,t.jsx)(e.code,{children:"FORM Event"}),", qui retourne l'\xe9v\xe9nement d\xe9clench\xe9. Par exemple :"]}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"//code d'un bouton\nIf(FORM Event.code=On Clicked) \n// faire quelque chose quand on clique sur le bouton\nEnd if\n"})}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsx)(e.p,{children:"Chaque formulaire et chaque objet actif du formulaire peut lire un ensemble pr\xe9d\xe9fini d'\xe9v\xe9nements, mais seuls les \xe9v\xe9nements que vous avez activ\xe9s au niveau du formulaire et/ou \xe0 chaque niveau d'objet se produiront r\xe9ellement."}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"Objet-\xe9v\xe9nement",children:"Objet \xe9v\xe9nement"}),"\n",(0,t.jsxs)(e.p,{children:["Chaque \xe9v\xe9nement est retourn\xe9 sous forme d'objet par la commande ",(0,t.jsx)(e.code,{children:"FORM Event"}),". Par d\xe9faut, il contient les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Propri\xe9t\xe9"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"objectName"}),(0,t.jsx)(e.td,{children:"text"}),(0,t.jsx)(e.td,{children:"Name of the object triggering the event - Not included if the event is triggered by the form"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"Des propri\xe9t\xe9s suppl\xe9mentaires sont retourn\xe9es lorsque l'\xe9v\xe9nement se produit sur des objets sp\xe9cifiques. En particulier :"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Les ",(0,t.jsx)(e.a,{href:"/docs/fr/20/FormObjects/listboxOverview#supported-form-events",children:"list box"})," et les ",(0,t.jsx)(e.a,{href:"/docs/fr/20/FormObjects/listboxOverview#supported-form-events-1",children:"colonnes de list box"})," retournent des ",(0,t.jsx)(e.a,{href:"/docs/fr/20/FormObjects/listboxOverview#additional-properties",children:"propri\xe9t\xe9s suppl\xe9mentaires"})," telles que ",(0,t.jsx)(e.code,{children:"columnName"})," ou ",(0,t.jsx)(e.code,{children:"isRowSelected"}),"."]}),"\n",(0,t.jsxs)(e.li,{children:["Les ",(0,t.jsx)(e.a,{href:"/docs/fr/20/FormObjects/viewProAreaOverview",children:"zones 4D View Pro"})," retournent par exemple des propri\xe9t\xe9s ",(0,t.jsx)(e.code,{children:"sheetName"})," ou ",(0,t.jsx)(e.code,{children:"action"})," dans l'objet \xe9v\xe9nement ",(0,t.jsx)(e.a,{href:"/docs/fr/20/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]}),"\n",(0,t.jsx)(e.h2,{id:"\xc9v\xe9nements-et-m\xe9thodes",children:"\xc9v\xe9nements et m\xe9thodes"}),"\n",(0,t.jsx)(e.p,{children:"Lorsqu'un \xe9v\xe9nement formulaire se produit, 4D effectue les actions suivantes :"}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsx)(e.li,{children:"Tout d'abord, il parcourt les objets du formulaire et appelle la m\xe9thode objet pour tout objet (associ\xe9 \xe0 l'\xe9v\xe9nement) dont la propri\xe9t\xe9 d'\xe9v\xe9nement d'objet correspondante a \xe9t\xe9 s\xe9lectionn\xe9e."}),"\n",(0,t.jsx)(e.li,{children:"Deuxi\xe8mement, il appelle la m\xe9thode formulaire si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire correspondante a \xe9t\xe9 s\xe9lectionn\xe9e."}),"\n"]}),"\n",(0,t.jsx)(e.p,{children:"Ne supposez pas que les m\xe9thodes objet, le cas \xe9ch\xe9ant, seront appel\xe9es dans un ordre particulier. La r\xe8gle d'or est que les m\xe9thodes objet sont toujours appel\xe9es avant la m\xe9thode formulaire. Si un objet est un sous-formulaire, les m\xe9thodes objet du formulaire liste du sous-formulaire sont appel\xe9es, suivie de la m\xe9thode formulaire du formulaire liste. 4D continue alors d'appeler les m\xe9thodes objet du formulaire parent. En d'autres termes, lorsqu'un objet est un sous-formulaire, 4D utilise la m\xeame r\xe8gle pour les m\xe9thodes objet et formulaire au sein de l'objet sous-formulaire."}),"\n",(0,t.jsxs)(e.p,{children:["\xc0 l'exception des \xe9v\xe9nements ",(0,t.jsx)(e.a,{href:"/docs/fr/20/Events/onLoad",children:"On Load"})," et ",(0,t.jsx)(e.a,{href:"/docs/fr/20/Events/onUnload",children:"On Unload"})," (voir ci-dessous), si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire n'est pas s\xe9lectionn\xe9e pour un \xe9v\xe9nement donn\xe9, cela n'emp\xeache pas les appels vers les m\xe9thodes objet pour les objets dont la m\xeame propri\xe9t\xe9 d'\xe9v\xe9nement est s\xe9lectionn\xe9e. En d'autres termes, l'activation ou la d\xe9sactivation d'un \xe9v\xe9nement au niveau du formulaire n'a aucun effet sur les propri\xe9t\xe9s d'\xe9v\xe9nement de l'objet."]}),"\n",(0,t.jsx)(e.p,{children:"Le nombre d'objets associ\xe9s \xe0 un \xe9v\xe9nement d\xe9pend de la nature de l'\xe9v\xe9nement."}),"\n",(0,t.jsx)(e.h2,{id:"Tableau-des-appels",children:"Tableau des appels"}),"\n",(0,t.jsx)(e.p,{children:"Le tableau suivant r\xe9sume la mani\xe8re dont les m\xe9thodes objet et formulaire sont appel\xe9es pour chaque type d'\xe9v\xe9nement :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Ev\xe9nement"}),(0,t.jsx)(e.th,{children:"M\xe9thode objet"}),(0,t.jsx)(e.th,{children:"M\xe9thode formulaire"}),(0,t.jsx)(e.th,{children:"Objets"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Load"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Unload"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur validation"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Clicked"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Double Clicked"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Before Keystroke"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On After Keystroke"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On After Edit"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Getting Focus"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Losing Focus"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur activation"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Deactivate"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur appel ext\xe9rieur"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur changement page"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Begin Drag Over"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Drop"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Drag Over"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Mouse Enter"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Mouse Move"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Mouse Leave"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Mouse Up"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur menu s\xe9lectionn\xe9"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Bound variable change"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Data Change"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur appel zone du plug in"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur ent\xeate"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Printing Detail"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Printing Break"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Printing Footer"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Close Box"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Display Detail"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Tous les objets"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Open Detail"}),(0,t.jsx)(e.td,{children:"Oui (List box)"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun, except\xe9 les List box"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Close Detail"}),(0,t.jsx)(e.td,{children:"Oui (List box)"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun, except\xe9 les List box"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur redimensionnement"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Selection Change"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur chargement ligne"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur minuteur"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Aucun"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Scroll"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Before Data Entry"}),(0,t.jsx)(e.td,{children:"Oui (List box)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Column Moved"}),(0,t.jsx)(e.td,{children:"Oui (List box)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Row Moved"}),(0,t.jsx)(e.td,{children:"Oui (List box)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Column Resize"}),(0,t.jsx)(e.td,{children:"Oui (List box et Zone 4D View Pro)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Header Click"}),(0,t.jsx)(e.td,{children:"Oui (List box et Zone 4D View Pro)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Footer Click"}),(0,t.jsx)(e.td,{children:"Oui (List box)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On After Sort"}),(0,t.jsx)(e.td,{children:"Oui (List box)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sur clic long"}),(0,t.jsx)(e.td,{children:"Oui (Bouton)"}),(0,t.jsx)(e.td,{children:"Oui"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Alternative Click"}),(0,t.jsx)(e.td,{children:"Oui (Bouton et List box)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Expand"}),(0,t.jsx)(e.td,{children:"Oui (Liste hi\xe9rar. et list box)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Collapse"}),(0,t.jsx)(e.td,{children:"Oui (Liste hi\xe9rar. et list box)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Delete Action"}),(0,t.jsx)(e.td,{children:"Oui (Liste hi\xe9rar. et list box)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On URL Resource Loading"}),(0,t.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Begin URL Loading"}),(0,t.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On URL Loading Error"}),(0,t.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On URL Filtering"}),(0,t.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On End URL Loading"}),(0,t.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Open External Link"}),(0,t.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Window Opening Denied"}),(0,t.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On VP Range Changed"}),(0,t.jsx)(e.td,{children:"Oui (4D View Pro Area)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On VP Ready"}),(0,t.jsx)(e.td,{children:"Oui (4D View Pro Area)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"On Row Resize"}),(0,t.jsx)(e.td,{children:"Oui (4D View Pro Area)"}),(0,t.jsx)(e.td,{children:"Jamais"}),(0,t.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]})]})]}),"\n",(0,t.jsx)(e.p,{children:"Gardez toujours \xe0 l'esprit que, pour tout \xe9v\xe9nement, la m\xe9thode d'un formulaire ou d'un objet est appel\xe9e si la propri\xe9t\xe9 d'\xe9v\xe9nement correspondante est s\xe9lectionn\xe9e pour le formulaire ou les objets. L'avantage de la d\xe9sactivation des \xe9v\xe9nements dans l'environnement de d\xe9veloppement (\xe0 l'aide de la liste des propri\xe9t\xe9s de l'\xe9diteur de formulaires) est la r\xe9duction du nombre d'appels vers des m\xe9thodes et par cons\xe9quent l'optimisation de la vitesse d'ex\xe9cution de vos formulaires."}),"\n",(0,t.jsxs)(e.blockquote,{children:["\n",(0,t.jsxs)(e.p,{children:["ATTENTION : Les \xe9v\xe9nements ",(0,t.jsx)(e.a,{href:"/docs/fr/20/Events/onLoad",children:"On Load"})," et ",(0,t.jsx)(e.a,{href:"/docs/fr/20/Events/onUnload",children:"On Unload"})," sont g\xe9n\xe9r\xe9s pour les objets s'ils sont activ\xe9s \xe0 la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les \xe9v\xe9nements sont activ\xe9s pour les objets uniquement, ils ne se produiront pas; ces deux \xe9v\xe9nements doivent \xe9galement \xeatre activ\xe9s au niveau du formulaire."]}),"\n"]})]})}function j(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(u,{...n})}):u(n)}},221020:(n,e,s)=>{var t=s(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(n,e,s){var t,d={},o=null,u=null;for(t in void 0!==s&&(o=""+s),void 0!==e.key&&(o=""+e.key),void 0!==e.ref&&(u=e.ref),e)i.call(e,t)&&!c.hasOwnProperty(t)&&(d[t]=e[t]);if(n&&n.defaultProps)for(t in e=n.defaultProps)void 0===d[t]&&(d[t]=e[t]);return{$$typeof:r,type:n,key:o,ref:u,props:d,_owner:l.current}}e.Fragment=d,e.jsx=o,e.jsxs=o},474848:(n,e,s)=>{n.exports=s(221020)},28453:(n,e,s)=>{s.d(e,{R:()=>i,x:()=>l});var t=s(296540);const r={},d=t.createContext(r);function i(n){const e=t.useContext(d);return t.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),t.createElement(d.Provider,{value:e},n.children)}}}]);