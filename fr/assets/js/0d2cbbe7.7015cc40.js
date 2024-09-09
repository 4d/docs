/*! For license information please see 0d2cbbe7.7015cc40.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73826],{591939:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var s=r(474848),t=r(28453);const i={id:"propertiesWebArea",title:"Zones Web"},a=void 0,o={id:"FormObjects/propertiesWebArea",title:"Zones Web",description:"---",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/FormObjects/properties_WebArea.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesWebArea",permalink:"/docs/fr/FormObjects/propertiesWebArea",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_WebArea.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"propertiesWebArea",title:"Zones Web"},sidebar:"docs",previous:{title:"Texte et Image",permalink:"/docs/fr/FormObjects/propertiesTextAndPicture"},next:{title:"Ev\xe9nements formulaire",permalink:"/docs/fr/Events/overview"}},l={},d=[{value:"Acc\xe9der aux m\xe9thodes 4D",id:"acc\xe9der-aux-m\xe9thodes-4d",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge",level:4},{value:"Variable Progression",id:"variable-progression",level:2},{value:"Grammaire JSON",id:"grammaire-json-1",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-1",level:4},{value:"Variable URL",id:"variable-url",level:2},{value:"Variable URL et commande WA OUVRIR URL",id:"variable-url-et-commande-wa-ouvrir-url",level:3},{value:"Grammaire JSON",id:"grammaire-json-2",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-2",level:4},{value:"Utiliser le moteur de rendu Web int\xe9gr\xe9",id:"utiliser-le-moteur-de-rendu-web-int\xe9gr\xe9",level:2},{value:"Grammaire JSON",id:"grammaire-json-3",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge-3",level:4}];function c(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"acc\xe9der-aux-m\xe9thodes-4d",children:"Acc\xe9der aux m\xe9thodes 4D"}),"\n",(0,s.jsx)(n.p,{children:"Il est possible d\u2019appeler des m\xe9thodes 4D depuis le code JavaScript ex\xe9cut\xe9 dans une zone Web et de recevoir des valeurs en retour. Pour pouvoir appeler des m\xe9thodes 4D depuis la zone Web, vous devez cocher l'option Acc\xe8s m\xe9thodes 4D pour la zone dans la Liste des propri\xe9t\xe9s ."}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Cette option n\u2019appara\xeet que si l\u2019option ",(0,s.jsx)(n.a,{href:"#use-embedded-web-rendering-engine",children:"Utiliser le moteur de rendu Web int\xe9gr\xe9"})," est coch\xe9e."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["Lorsque cette propri\xe9t\xe9 est coch\xe9e, un objet JavaScript sp\xe9cial ",(0,s.jsx)(n.code,{children:"$4d"})," est instanci\xe9 dans la zone Web et permet de ",(0,s.jsx)(n.a,{href:"/docs/fr/FormObjects/webAreaOverview#4d-object",children:"g\xe9rer les appels aux m\xe9thodes projet de 4D"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nom"}),(0,s.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,s.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"methodsAccessibility"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'"none" (par d\xe9faut), "all"'})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"objets-pris-en-charge",children:"Objets pris en charge"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/FormObjects/webAreaOverview",children:"Web Area"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"variable-progression",children:"Variable Progression"}),"\n",(0,s.jsx)(n.p,{children:'La variable "Progression" est de type Entier long. Elle contient une valeur entre 0 et 100, repr\xe9sentant le pourcentage du chargement complet de la page affich\xe9e dans la zone Web. La variable est mise \xe0 jour automatiquement par 4D. Il n\u2019est pas possible de la modifier manuellement.'}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["\xc0 partir de 4D v19 R5, cette variable n'est plus mise \xe0 jour dans les zones Web utilisant le ",(0,s.jsx)(n.a,{href:"/docs/fr/FormObjects/webAreaOverview#web-rendering-engine",children:"moteur de rendu du syst\xe8me Windows"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"grammaire-json-1",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nom"}),(0,s.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,s.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"progressSource"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Nom d'une variable Entier long"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"objets-pris-en-charge-1",children:"Objets pris en charge"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/FormObjects/webAreaOverview",children:"Web Area"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"variable-url",children:"Variable URL"}),"\n",(0,s.jsx)(n.p,{children:'La variable "URL" est de type cha\xeene. Elle contient l\u2019URL charg\xe9 ou en cours de chargement par la zone Web associ\xe9e. L\u2019association entre la variable et la zone Web s\u2019effectue dans les deux sens :'}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Si l\u2019utilisateur affecte un nouvel URL \xe0 la variable, l\u2019URL est automatiquement charg\xe9 par la zone Web."}),"\n",(0,s.jsx)(n.li,{children:"Toute navigation effectu\xe9e \xe0 l\u2019int\xe9rieur de la zone Web met automatiquement \xe0 jour le contenu de la variable."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Sch\xe9matiquement, cette variable fonctionne comme la zone d\u2019adresse d\u2019un navigateur Web. Vous pouvez la repr\xe9senter par une zone de texte situ\xe9e au-dessus de la zone Web."}),"\n",(0,s.jsx)(n.h3,{id:"variable-url-et-commande-wa-ouvrir-url",children:"Variable URL et commande WA OUVRIR URL"}),"\n",(0,s.jsxs)(n.p,{children:["La variable URL produit les m\xeames effets que la commande ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OUVRIR URL"}),". Les diff\xe9rences suivantes sont toutefois \xe0 noter :"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:['Pour les acc\xe8s aux documents, la variable accepte uniquement des URLs conformes aux RFC ("file://c:/Mon%20Doc") et non les chemins d\u2019acc\xe8s syst\xe8me ("c:\\MonDoc"). La commande ',(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"})," accepte les deux notations."]}),"\n",(0,s.jsxs)(n.li,{children:["Si la variable URL contient une cha\xeene vide, la zone Web ne tente pas de charger l\u2019URL. La commande ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"})," g\xe9n\xe8re une erreur dans ce cas."]}),"\n",(0,s.jsxs)(n.li,{children:['Si la variable URL ne contient pas de protocole (http, mailto, file, etc.), la zone Web ajoute "http://", ce qui n\u2019est pas le cas pour la commande ',(0,s.jsx)(n.a,{href:"https://doc.4d.com/4Dv18/4D/18/WA-OPEN-URL.301-4504841.en.html",children:"WA OPEN URL"}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Lorsque la zone Web n'est pas affich\xe9e dans le formulaire (lorsqu'elle se trouve sur une autre page du formulaire), l'ex\xe9cution de la commande ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1020.html",children:"WA OPEN URL"})," est sans effet, tandis que l'assignation d'une valeur \xe0 la variable URL permet de mettre \xe0 jour l'URL courant."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"grammaire-json-2",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nom"}),(0,s.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,s.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"urlSource"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:"Une URL."})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"objets-pris-en-charge-2",children:"Objets pris en charge"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/FormObjects/webAreaOverview",children:"Web Area"})}),"\n",(0,s.jsx)(n.hr,{}),"\n",(0,s.jsx)(n.h2,{id:"utiliser-le-moteur-de-rendu-web-int\xe9gr\xe9",children:"Utiliser le moteur de rendu Web int\xe9gr\xe9"}),"\n",(0,s.jsx)(n.p,{children:"Cette option vous permet de choisir entre deux moteurs de rendus pour la zone Web, en fonction des sp\xe9cificit\xe9s de votre application :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"non coch\xe9"})," - ",(0,s.jsx)(n.code,{children:"valeur JSON : system"}),' (par d\xe9faut) : Dans ce cas, 4D utilise le "meilleur" moteur correspondant au syst\xe8me. Ce fonctionnement vous permet de b\xe9n\xe9ficier automatiquement des derni\xe8res avanc\xe9es en mati\xe8re de rendu Web, via HTML5 ou JavaScript. Cependant, vous pouvez remarquer des diff\xe9rences de rendu entre les plates-formes. Sous Windows, 4D utilise Microsoft Edge WebView2. Sur macOS, 4D utilise la version courante du WebKit (Safari).']}),"\n"]}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsx)(n.p,{children:"Sur Windows, si Microsoft Edge WebView2 n'est pas install\xe9, 4D utilise le moteur int\xe9gr\xe9 en tant que moteur de rendu syst\xe8me. Pour savoir s'il est install\xe9 sur votre syst\xe8me, recherchez \"Microsoft Edge WebView2 Runtime\" dans votre panneau d'applications."}),"\n"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"coch\xe9"})," - ",(0,s.jsx)(n.code,{children:"JSON value: embedded"}),": Dans ce cas, 4D utilise le Chromium Embedded Framework (CEF). L\u2019utilisation d'un moteur Web int\xe9gr\xe9 vous permet d\u2019avoir l\u2019assurance que le rendu et le fonctionnement des zones Web de votre application seront quasiment identiques, quelle que soit la plate-forme d\u2019ex\xe9cution de 4D (de l\xe9g\xe8res variations de pixels ou des diff\xe9rences li\xe9es \xe0 l\u2019impl\xe9mentation r\xe9seau pourront toutefois \xeatre constat\xe9es). L\u2019utilisation d'un moteur Web int\xe9gr\xe9 vous permet d\u2019avoir l\u2019assurance que le rendu et le fonctionnement des zones Web de votre application seront quasiment identiques, quelle que soit la plate-forme d\u2019ex\xe9cution de 4D (de l\xe9g\xe8res variations de pixels ou des diff\xe9rences li\xe9es \xe0 l\u2019impl\xe9mentation r\xe9seau pourront toutefois \xeatre constat\xe9es)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Le moteur CEF a les limitations suivantes :"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1037.html",children:"WA SET PAGE CONTENT"}),": l'utilisation de cette commande n\xe9cessite qu'au moins une page soit d\xe9j\xe0 charg\xe9e dans la zone (par un appel \xe0 ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1020.html",children:(0,s.jsx)(n.code,{children:"WA OPEN URL"})})," ou une affectation \xe0 la variable URL associ\xe9e \xe0 la zone)."]}),"\n",(0,s.jsxs)(n.li,{children:["Lorsque les d\xe9p\xf4ts d'URL sont activ\xe9s via le s\xe9lecteur ",(0,s.jsx)(n.code,{children:"WA enable URL drop"})," de ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1041.html",children:"WA SET PREFERENCE"}),", le premier d\xe9p\xf4t doit \xeatre pr\xe9c\xe9d\xe9 par au moins un appel \xe0 ",(0,s.jsx)(n.a,{href:"https://doc.4d.com/4dv20/help/command/fr/page1020.html",children:"WA OPEN URL"})," ou une affectation \xe0 la variable URL associ\xe9e \xe0 la zone."]}),"\n"]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["Vous pouvez personnaliser les param\xe8tres de la zone CEF en cr\xe9ant un fichier de configuration local ",(0,s.jsx)(n.a,{href:"webAreaOverview#4dcefparametersjson",children:"4DCEFParameters.json"}),"."]})}),"\n",(0,s.jsx)(n.h4,{id:"grammaire-json-3",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Nom"}),(0,s.jsx)(n.th,{children:"Type de donn\xe9es"}),(0,s.jsx)(n.th,{children:"Valeurs possibles"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"webEngine"}),(0,s.jsx)(n.td,{children:"string"}),(0,s.jsx)(n.td,{children:'"embedded", "system"'})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"objets-pris-en-charge-3",children:"Objets pris en charge"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/fr/FormObjects/webAreaOverview",children:"Web Area"})})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},221020:(e,n,r)=>{var s=r(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,r){var s,i={},d=null,c=null;for(s in void 0!==r&&(d=""+r),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(c=n.ref),n)a.call(n,s)&&!l.hasOwnProperty(s)&&(i[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===i[s]&&(i[s]=n[s]);return{$$typeof:t,type:e,key:d,ref:c,props:i,_owner:o.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>a,x:()=>o});var s=r(296540);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);