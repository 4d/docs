"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4327"],{974561:function(n,e,s){s.r(e),s.d(e,{default:()=>j,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"Events/overview","title":"Ev\xe9nements formulaire","description":"Les \xe9v\xe9nements formulaire sont des \xe9v\xe9nements qui peuvent conduire \xe0 l\'ex\xe9cution de la m\xe9thode de formulaire et/ou de la ou des m\xe9thodes objet de formulaire. Les \xe9v\xe9nements de formulaire vous permettent de contr\xf4ler le flux de votre application et d\'\xe9crire du code qui n\'est ex\xe9cut\xe9 que lorsqu\'un \xe9v\xe9nement sp\xe9cifique se produit.","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Events/overview.md","sourceDirName":"Events","slug":"/Events/overview","permalink":"/docs/fr/Events/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2Foverview.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"overview","title":"Ev\xe9nements formulaire"},"sidebar":"docs","previous":{"title":"Zones Web","permalink":"/docs/fr/FormObjects/propertiesWebArea"},"next":{"title":"On Activate","permalink":"/docs/fr/Events/onActivate"}}'),d=s("785893"),r=s("250065");let i={id:"overview",title:"Ev\xe9nements formulaire"},l=void 0,c={},o=[{value:"Objet \xe9v\xe9nement",id:"objet-\xe9v\xe9nement",level:2},{value:"\xc9v\xe9nements et m\xe9thodes",id:"\xe9v\xe9nements-et-m\xe9thodes",level:2},{value:"Tableau des appels",id:"tableau-des-appels",level:2}];function u(n){let e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(e.p,{children:"Les \xe9v\xe9nements formulaire sont des \xe9v\xe9nements qui peuvent conduire \xe0 l'ex\xe9cution de la m\xe9thode de formulaire et/ou de la ou des m\xe9thodes objet de formulaire. Les \xe9v\xe9nements de formulaire vous permettent de contr\xf4ler le flux de votre application et d'\xe9crire du code qui n'est ex\xe9cut\xe9 que lorsqu'un \xe9v\xe9nement sp\xe9cifique se produit."}),"\n",(0,d.jsxs)(e.p,{children:["In your code, you control the events using the ",(0,d.jsx)(e.a,{href:"/docs/fr/commands/form-event",children:(0,d.jsx)(e.code,{children:"FORM Event"})})," command, that returns the triggered event. Par exemple :"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"//code d'un bouton\nIf(FORM Event.code=On Clicked) \n// faire quelque chose quand on clique sur le bouton\nEnd if\n"})}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsx)(e.p,{children:"Chaque formulaire et chaque objet actif du formulaire peut lire un ensemble pr\xe9d\xe9fini d'\xe9v\xe9nements, mais seuls les \xe9v\xe9nements que vous avez activ\xe9s au niveau du formulaire et/ou \xe0 chaque niveau d'objet se produiront r\xe9ellement."}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"objet-\xe9v\xe9nement",children:"Objet \xe9v\xe9nement"}),"\n",(0,d.jsxs)(e.p,{children:["Each event is returned as an object by the ",(0,d.jsx)(e.a,{href:"/docs/fr/commands/form-event",children:(0,d.jsx)(e.code,{children:"FORM Event"})})," command. Par d\xe9faut, il contient les propri\xe9t\xe9s suivantes :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Propri\xe9t\xe9"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{children:"Description"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"objectName"}),(0,d.jsx)(e.td,{children:"text"}),(0,d.jsx)(e.td,{children:"Nom de l'objet g\xe9n\xe9rant l'\xe9v\xe9nement - Non inclus si l'\xe9v\xe9nement est d\xe9clench\xe9 par le formulaire"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"code"}),(0,d.jsx)(e.td,{children:"entier long"}),(0,d.jsxs)(e.td,{children:["Valeur num\xe9rique de l'\xe9v\xe9nement formulaire. Egalement retourn\xe9 par la commande ",(0,d.jsx)(e.code,{children:"Form event code"})]})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Description"}),(0,d.jsx)(e.td,{children:"text"}),(0,d.jsx)(e.td,{children:'Nom de l\'\xe9v\xe9nement de formulaire (par exemple "On After Edit")'})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"Des propri\xe9t\xe9s suppl\xe9mentaires sont retourn\xe9es lorsque l'\xe9v\xe9nement se produit sur des objets sp\xe9cifiques. En particulier :"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsxs)(e.li,{children:["Les ",(0,d.jsx)(e.a,{href:"/docs/fr/FormObjects/listboxOverview#supported-form-events",children:"list boxes"})," et les ",(0,d.jsx)(e.a,{href:"/docs/fr/FormObjects/listboxOverview#supported-form-events-1",children:"colonnes de list box"})," retournent des ",(0,d.jsx)(e.a,{href:"/docs/fr/FormObjects/listboxOverview#additional-properties",children:"propri\xe9t\xe9s"})," telles que ",(0,d.jsx)(e.code,{children:"columnName"})," ou ",(0,d.jsx)(e.code,{children:"isRowSelected"}),"."]}),"\n",(0,d.jsxs)(e.li,{children:["Les ",(0,d.jsx)(e.a,{href:"/docs/fr/FormObjects/viewProAreaOverview",children:"zones 4D View Pro"})," retournent par exemple des propri\xe9t\xe9s ",(0,d.jsx)(e.code,{children:"sheetName"})," ou ",(0,d.jsx)(e.code,{children:"action"})," dans l'objet \xe9v\xe9nement ",(0,d.jsx)(e.a,{href:"/docs/fr/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]}),"\n",(0,d.jsx)(e.h2,{id:"\xe9v\xe9nements-et-m\xe9thodes",children:"\xc9v\xe9nements et m\xe9thodes"}),"\n",(0,d.jsx)(e.p,{children:"Lorsqu'un \xe9v\xe9nement formulaire se produit, 4D effectue les actions suivantes :"}),"\n",(0,d.jsxs)(e.ul,{children:["\n",(0,d.jsx)(e.li,{children:"Tout d'abord, il parcourt les objets du formulaire et appelle la m\xe9thode objet pour tout objet (associ\xe9 \xe0 l'\xe9v\xe9nement) dont la propri\xe9t\xe9 d'\xe9v\xe9nement d'objet correspondante a \xe9t\xe9 s\xe9lectionn\xe9e."}),"\n",(0,d.jsx)(e.li,{children:"Deuxi\xe8mement, il appelle la m\xe9thode formulaire si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire correspondante a \xe9t\xe9 s\xe9lectionn\xe9e."}),"\n"]}),"\n",(0,d.jsx)(e.p,{children:"Ne supposez pas que les m\xe9thodes objet, le cas \xe9ch\xe9ant, seront appel\xe9es dans un ordre particulier. La r\xe8gle d'or est que les m\xe9thodes objet sont toujours appel\xe9es avant la m\xe9thode formulaire. Si un objet est un sous-formulaire, les m\xe9thodes objet du formulaire liste du sous-formulaire sont appel\xe9es, suivie de la m\xe9thode formulaire du formulaire liste. 4D continue alors d'appeler les m\xe9thodes objet du formulaire parent. En d'autres termes, lorsqu'un objet est un sous-formulaire, 4D utilise la m\xeame r\xe8gle pour les m\xe9thodes objet et formulaire au sein de l'objet sous-formulaire."}),"\n",(0,d.jsxs)(e.p,{children:["\xc0 l'exception des \xe9v\xe9nements ",(0,d.jsx)(e.a,{href:"/docs/fr/Events/onLoad",children:"On Load"})," et ",(0,d.jsx)(e.a,{href:"/docs/fr/Events/onUnload",children:"On Unload"})," (voir ci-dessous), si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire n'est pas s\xe9lectionn\xe9e pour un \xe9v\xe9nement donn\xe9, cela n'emp\xeache pas les appels vers les m\xe9thodes objet pour les objets d En d'autres termes, l'activation ou la d\xe9sactivation d'un \xe9v\xe9nement au niveau du formulaire n'a aucun effet sur les propri\xe9t\xe9s d'\xe9v\xe9nement de l'objet."]}),"\n",(0,d.jsx)(e.p,{children:"Le nombre d'objets associ\xe9s \xe0 un \xe9v\xe9nement d\xe9pend de la nature de l'\xe9v\xe9nement."}),"\n",(0,d.jsx)(e.h2,{id:"tableau-des-appels",children:"Tableau des appels"}),"\n",(0,d.jsx)(e.p,{children:"Le tableau suivant r\xe9sume la mani\xe8re dont les m\xe9thodes objet et formulaire sont appel\xe9es pour chaque type d'\xe9v\xe9nement :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Ev\xe9nement"}),(0,d.jsx)(e.th,{children:"M\xe9thode objet"}),(0,d.jsx)(e.th,{children:"M\xe9thode formulaire"}),(0,d.jsx)(e.th,{children:"Objets"})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Load"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Unload"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Validate"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Clicked"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Double Clicked"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Before Keystroke"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On After Keystroke"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On After Edit"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Getting Focus"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Losing Focus"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Activate"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Deactivate"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Outside Call"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Page Change"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Begin Drag Over"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Drop"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Drag Over"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Mouse Enter"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Mouse Move"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Mouse Leave"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Mouse Up"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Menu Selected"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Bound variable change"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Data Change"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Plug in Area"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Header"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Printing Detail"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Printing Break"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Printing Footer"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Close Box"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Display Detail"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Tous les objets"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Open Detail"}),(0,d.jsx)(e.td,{children:"Oui (List box)"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun, except\xe9 les List box"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Close Detail"}),(0,d.jsx)(e.td,{children:"Oui (List box)"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun, except\xe9 les List box"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Resize"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Selection Change"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Load Record"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Timer"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Aucun"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Scroll"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Before Data Entry"}),(0,d.jsx)(e.td,{children:"Oui (List box)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Column Moved"}),(0,d.jsx)(e.td,{children:"Oui (List box)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Row Moved"}),(0,d.jsx)(e.td,{children:"Oui (List box)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Column Resize"}),(0,d.jsx)(e.td,{children:"Oui (List box et Zone 4D View Pro)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Header Click"}),(0,d.jsx)(e.td,{children:"Oui (List box et Zone 4D View Pro)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Footer Click"}),(0,d.jsx)(e.td,{children:"Oui (List box)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On After Sort"}),(0,d.jsx)(e.td,{children:"Oui (List box)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Long Click"}),(0,d.jsx)(e.td,{children:"Oui (Bouton)"}),(0,d.jsx)(e.td,{children:"Oui"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Alternative Click"}),(0,d.jsx)(e.td,{children:"Oui (Bouton et List box)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Expand"}),(0,d.jsx)(e.td,{children:"Oui (Liste hi\xe9rar. et list box)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Collapse"}),(0,d.jsx)(e.td,{children:"Oui (Liste hi\xe9rar. et list box)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Delete Action"}),(0,d.jsx)(e.td,{children:"Oui (Liste hi\xe9rar. et list box)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On URL Resource Loading"}),(0,d.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Begin URL Loading"}),(0,d.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On URL Loading Error"}),(0,d.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On URL Filtering"}),(0,d.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On End URL Loading"}),(0,d.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Open External Link"}),(0,d.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Window Opening Denied"}),(0,d.jsx)(e.td,{children:"Oui (Zone Web)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On VP Range Changed"}),(0,d.jsx)(e.td,{children:"Oui (4D View Pro Area)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On VP Ready"}),(0,d.jsx)(e.td,{children:"Oui (4D View Pro Area)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"On Row Resize"}),(0,d.jsx)(e.td,{children:"Oui (4D View Pro Area)"}),(0,d.jsx)(e.td,{children:"Jamais"}),(0,d.jsx)(e.td,{children:"Objets concern\xe9s uniquement"})]})]})]}),"\n",(0,d.jsx)(e.p,{children:"Gardez toujours \xe0 l'esprit que, pour tout \xe9v\xe9nement, la m\xe9thode d'un formulaire ou d'un objet est appel\xe9e si la propri\xe9t\xe9 d'\xe9v\xe9nement correspondante est s\xe9lectionn\xe9e pour le formulaire ou les objets. L'avantage de la d\xe9sactivation des \xe9v\xe9nements dans l'environnement de d\xe9veloppement (\xe0 l'aide de la liste des propri\xe9t\xe9s de l'\xe9diteur de formulaires) est la r\xe9duction du nombre d'appels vers des m\xe9thodes et par cons\xe9quent l'optimisation de la vitesse d'ex\xe9cution de vos formulaires."}),"\n",(0,d.jsxs)(e.blockquote,{children:["\n",(0,d.jsxs)(e.p,{children:["ATTENTION : Les \xe9v\xe9nements ",(0,d.jsx)(e.a,{href:"/docs/fr/Events/onLoad",children:"On Load"})," et ",(0,d.jsx)(e.a,{href:"/docs/fr/Events/onUnload",children:"On Unload"})," sont g\xe9n\xe9r\xe9s pour les objets s'ils sont activ\xe9s \xe0 la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les \xe9v\xe9nements sont activ\xe9s pour les objets uniquement, ils ne se produiront pas; ces deux \xe9v\xe9nements doivent \xe9galement \xeatre activ\xe9s au niveau du formulaire."]}),"\n"]})]})}function j(n={}){let{wrapper:e}={...(0,r.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(u,{...n})}):u(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return l},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(n){let e=t.useContext(r);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function l(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(r.Provider,{value:e},n.children)}}}]);