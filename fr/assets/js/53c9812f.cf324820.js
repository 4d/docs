/*! For license information please see 53c9812f.cf324820.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89798],{884706:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>u,metadata:()=>r,toc:()=>a});var t=s(474848),i=s(28453);const u={id:"plug-ins",title:"Plug-ins"},o=void 0,r={id:"Concepts/plug-ins",title:"Plug-ins",description:"Au fur et \xe0 mesure que vous d\xe9velopperez une application 4D, vous d\xe9couvrirez de nombreuses fonctionnalit\xe9s que vous n'aviez pas remarqu\xe9 lorsque vous avez d\xe9marr\xe9. Vous pouvez m\xeame \xe9tendre la version standard de 4D en ajoutant des plug-ins \xe0 votre environnement de d\xe9veloppement 4D.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/Concepts/plug-ins.md",sourceDirName:"Concepts",slug:"/Concepts/plug-ins",permalink:"/docs/fr/18/Concepts/plug-ins",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fplug-ins.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"plug-ins",title:"Plug-ins"},sidebar:"docs",previous:{title:"Composants",permalink:"/docs/fr/18/Concepts/components"},next:{title:"Identifiants",permalink:"/docs/fr/18/Concepts/identifiers"}},l={},a=[{value:"Pourquoi un plug-in ?",id:"pourquoi-un-plug-in-",level:2},{value:"Qu&#39;est-ce qu&#39;un plug-in et \xe0 quoi sert-il ?",id:"quest-ce-quun-plug-in-et-\xe0-quoi-sert-il-",level:2},{value:"Note importante",id:"note-importante",level:3},{value:"Comment cr\xe9er un plug-in ?",id:"comment-cr\xe9er-un-plug-in-",level:2},{value:"Comment installer un plug-in?",id:"comment-installer-un-plug-in",level:2}];function c(e){const n={a:"a",br:"br",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Au fur et \xe0 mesure que vous d\xe9velopperez une application 4D, vous d\xe9couvrirez de nombreuses fonctionnalit\xe9s que vous n'aviez pas remarqu\xe9 lorsque vous avez d\xe9marr\xe9. Vous pouvez m\xeame \xe9tendre la version standard de 4D en ajoutant des ",(0,t.jsx)(n.strong,{children:"plug-ins"})," \xe0 votre environnement de d\xe9veloppement 4D."]}),"\n",(0,t.jsx)(n.h2,{id:"pourquoi-un-plug-in-",children:"Pourquoi un plug-in ?"}),"\n",(0,t.jsx)(n.p,{children:"Bien que 4D propose des centaines de m\xe9thodes int\xe9gr\xe9es permettant de manipuler des objets et des enregistrements, et d'impl\xe9menter une interface utilisateur, une utilisation ou des fonctionnalit\xe9s sp\xe9ciales (parfois d\xe9pendantes de la plate-forme) peuvent \xeatre n\xe9cessaires : l'une peut n\xe9cessiter ODBC sous Windows, une autre peut n\xe9cessiter des services Apple sous macOS, et un autre peut souhaiter impl\xe9menter des outils statistiques sp\xe9cifiques, une connexion \xe0 un r\xe9seau social, une plateforme de paiement, un acc\xe8s \xe0 un fichier sur le r\xe9seau, une interface utilisateur sp\xe9ciale ou une structure d'image priv\xe9e."}),"\n",(0,t.jsx)(n.p,{children:"Il est \xe9vident que couvrir tous les domaines des syst\xe8mes d'exploitation macOS et Windows au moyen de commandes 4D m\xe8nerait certainement \xe0 un produit contenant des milliers de commandes et, dans le m\xeame temps, la plupart des utilisateurs n'auraient pas besoin d'un si grand ensemble de fonctionnalit\xe9s. De plus, la cr\xe9ation d'un outil aussi complet rendrait l'environnement 4D incroyablement complexe et demanderait des mois d'\xe9tude \xe0 la plupart des utilisateurs avant de pouvoir obtenir des r\xe9sultats utiles."}),"\n",(0,t.jsx)(n.p,{children:"La nature modulaire de l'environnement 4D permet la cr\xe9ation d'applications de base, mais n'exclut pas le d\xe9veloppement de syst\xe8mes extr\xeamement complexes. L'architecture du plug-in 4D ouvre l'environnement 4D \xe0 tout type d'application ou d'utilisateur. Les plug-ins 4D multiplient la puissance et la productivit\xe9 de cette application ou de l'utilisateur."}),"\n",(0,t.jsx)(n.h2,{id:"quest-ce-quun-plug-in-et-\xe0-quoi-sert-il-",children:"Qu'est-ce qu'un plug-in et \xe0 quoi sert-il ?"}),"\n",(0,t.jsx)(n.p,{children:"Un plug-in est un morceau de code que 4D lance au d\xe9marrage. Il ajoute des fonctionnalit\xe9s \xe0 4D et augmente ainsi sa capacit\xe9."}),"\n",(0,t.jsx)(n.p,{children:"Habituellement, un plug-in fait des choses :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Que 4D ne peut pas effectuer (c'est-\xe0-dire une technologie de plate-forme sp\xe9cifique),"}),"\n",(0,t.jsx)(n.li,{children:"Qui sera tr\xe8s difficile \xe0 \xe9crire en utilisant uniquement 4D,"}),"\n",(0,t.jsx)(n.li,{children:"Qui sont uniquement disponibles en tant que point d'entr\xe9e de plug-in"}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Un plug-in contient g\xe9n\xe9ralement un ensemble de routines donn\xe9es au d\xe9veloppeur 4D. Il peut g\xe9rer une zone externe et ex\xe9cuter un processus externe."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Une ",(0,t.jsx)(n.strong,{children:"routine de plug-in"})," est une routine \xe9crite en langage natif (g\xe9n\xe9ralement C ou C ++) qui d\xe9clenche une action."]}),"\n",(0,t.jsxs)(n.li,{children:["Une ",(0,t.jsx)(n.strong,{children:"zone externe"})," est une partie d'un formulaire pouvant presque tout afficher et interagir avec l'utilisateur si n\xe9cessaire."]}),"\n",(0,t.jsxs)(n.li,{children:["Un ",(0,t.jsx)(n.strong,{children:"processus externe"})," est un processus qui s'ex\xe9cute seul, g\xe9n\xe9ralement en boucle, et qui fait quasiment tout ce qu'il souhaite. Tout le code de process appartient au plug-in, 4D est simplement pr\xe9sent pour recevoir/envoyer des \xe9v\xe9nements au process."]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"note-importante",children:"Note importante"}),"\n",(0,t.jsxs)(n.p,{children:["Un plug-in peut \xeatre tr\xe8s simple, avec une seule routine effectuant une tr\xe8s petite t\xe2che, ou tr\xe8s complexe, impliquant une centaine de routines et de domaines. Cependant, chaque d\xe9veloppeur de plug-in doit se rappeler qu'un plug-in est un \"\xe9chantillon\" de code. C'est le plug-in qui s'ex\xe9cute dans 4D, et non l'inverse. En tant que morceau de code, c'est l'h\xf4te de 4D; ce n'est pas une application autonome. Il partage le temps CPU et la m\xe9moire avec 4D et d'autres plug-ins. Il doit donc s'agir d'un code poli, qui utilise exactement ce qui est n\xe9cessaire \xe0 son fonctionnement. Par exemple, dans les longues boucles, un plug-in doit appeler ",(0,t.jsx)(n.code,{children:"PA_Yield ()"})," pour donner du temps au planificateur 4D, \xe0 moins que sa t\xe2che ne soit critique aussi bien pour lui que pour la base de donn\xe9es."]}),"\n",(0,t.jsx)(n.h2,{id:"comment-cr\xe9er-un-plug-in-",children:"Comment cr\xe9er un plug-in ?"}),"\n",(0,t.jsxs)(n.p,{children:["Sur GitHub, 4D fournit un ",(0,t.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:(0,t.jsx)(n.strong,{children:"plug-in SDK"})})," open source, contenant le plug-in API 4D et l'assistant de plug-in 4D :"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["le ",(0,t.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API",children:(0,t.jsx)(n.strong,{children:"Plugin API de 4D"})}),", \xe9crit en C, ajoute plus de 400 fonctions qui vous aident \xe0 cr\xe9er facilement vos propres plug-ins pour ajouter de nouvelles fonctionnalit\xe9s \xe0 votre application 4D. Les fonctions du plug-in API de 4D g\xe8rent toutes les interactions entre l'application 4D et votre plug-in."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,t.jsx)(n.strong,{children:"L'assistant de plug-in 4D"})})," est un outil essentiel qui simplifie la t\xe2che de d\xe9veloppement des plug-ins 4D. Il \xe9crit le code dont 4D a besoin pour interagir correctement avec un plug-in et le charger, afin de vous concentrer sur votre propre code."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"comment-installer-un-plug-in",children:"Comment installer un plug-in?"}),"\n",(0,t.jsx)(n.p,{children:"L\u2019installation des plug-ins et composants dans l\u2019environnement 4D s\u2019effectue par simple copie des fichiers des plug-ins ou des composants dans des dossiers appropri\xe9s."}),"\n",(0,t.jsxs)(n.p,{children:["Les dossiers \u201cNomPlugin.bundle\u201d (appel\xe9s paquets ou packages sous Mac Os) contiennent \xe0 la fois les versions Windows et Mac Os des plug-ins 4D. Leur architecture interne sp\xe9cifique permet notamment \xe0 4D Server de charger la version ad\xe9quate en fonction de la plate-forme d\u2019ex\xe9cution du poste client. Pour installer un plug-in dans votre environnement, il vous suffit de placer le dossier ou progiciel \u201cNomPlugin.bundle\u201d concern\xe9 dans le dossier ",(0,t.jsx)(n.strong,{children:"PlugIns"})," souhait\xe9."]}),"\n",(0,t.jsx)(n.p,{children:"Vous pouvez placer les dossiers PlugIns et Components \xe0 deux endroits :"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Au niveau de l\u2019application 4D ex\xe9cutable, c'est-\xe0-dire .:\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Sous Windows : \xe0 c\xf4t\xe9 du fichier .exe"}),"\n",(0,t.jsxs)(n.li,{children:["Sous Mac Os : au premier niveau du dossier Contents, \xe0 l\u2019int\xe9rieur du package de l\u2019application.",(0,t.jsx)(n.br,{}),"\nDans ce cas, les plug-ins et les composants sont disponibles dans toutes les bases de donn\xe9es ouvertes par cette application."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Au m\xeame niveau que le fichier de structure de la base. Dans ce cas, les plug-ins et les composants sont disponibles dans cette base de donn\xe9es uniquement."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"Le choix de l\u2019emplacement d\xe9pend de votre mode d\u2019utilisation du plug-in ou du composant."}),"\n",(0,t.jsx)(n.p,{children:"Si un m\xeame plug-in ou un m\xeame composant est plac\xe9 aux deux endroits, 4D charge uniquement celui situ\xe9 \xe0 c\xf4t\xe9 de la structure. Dans le cas d\u2019une application compil\xe9e et fusionn\xe9e avec 4D Volume Desktop, la pr\xe9sence de plusieurs instances d\u2019un m\xeame plug-in ou d'un m\xeame composant emp\xeachera l\u2019ouverture de l\u2019application."}),"\n",(0,t.jsx)(n.p,{children:"Les plug-ins et les composants sont charg\xe9s par 4D lors du lancement de l\u2019application. Vous devez donc quitter votre application 4D avant d\u2019effectuer vos copies de fichiers ou dossiers. Ouvrez ensuite votre base de donn\xe9es avec 4D. Si l\u2019utilisation d'un plug-in n\xe9cessite une licence sp\xe9cifique, le plug-in est charg\xe9 mais n\u2019est pas actif."})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,n,s)=>{var t=s(296540),i=Symbol.for("react.element"),u=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,r=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,s){var t,u={},a=null,c=null;for(t in void 0!==s&&(a=""+s),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(c=n.ref),n)o.call(n,t)&&!l.hasOwnProperty(t)&&(u[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===u[t]&&(u[t]=n[t]);return{$$typeof:i,type:e,key:a,ref:c,props:u,_owner:r.current}}n.Fragment=u,n.jsx=a,n.jsxs=a},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>r});var t=s(296540);const i={},u=t.createContext(i);function o(e){const n=t.useContext(u);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(u.Provider,{value:n},e.children)}}}]);