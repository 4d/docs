/*! For license information please see bb94e5af.b2ea6ecf.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90451],{603256:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>u,metadata:()=>o,toc:()=>a});var i=t(474848),s=t(28453);const u={id:"develop-plug-ins",title:"D\xe9veloppement de Plug-ins"},r=void 0,o={id:"Extensions/develop-plug-ins",title:"D\xe9veloppement de Plug-ins",description:"Pourquoi un plug-in ?",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Extensions/develop-plug-ins.md",sourceDirName:"Extensions",slug:"/Extensions/develop-plug-ins",permalink:"/docs/fr/20/Extensions/develop-plug-ins",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Extensions%2Fdevelop-plug-ins.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"develop-plug-ins",title:"D\xe9veloppement de Plug-ins"},sidebar:"docs",previous:{title:"D\xe9veloppement de composants",permalink:"/docs/fr/20/Extensions/develop-components"},next:{title:"Web Applications",permalink:"/docs/fr/20/category/web-applications"}},l={},a=[{value:"Pourquoi un plug-in ?",id:"pourquoi-un-plug-in-",level:2},{value:"Qu&#39;est-ce qu&#39;un plug-in et \xe0 quoi sert-il ?",id:"quest-ce-quun-plug-in-et-\xe0-quoi-sert-il-",level:2},{value:"Note importante",id:"note-importante",level:3},{value:"Comment cr\xe9er un plug-in ?",id:"comment-cr\xe9er-un-plug-in-",level:2},{value:"Partager des plug-ins",id:"partager-des-plug-ins",level:2}];function p(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"pourquoi-un-plug-in-",children:"Pourquoi un plug-in ?"}),"\n",(0,i.jsx)(n.p,{children:"Bien que 4D propose des centaines de m\xe9thodes int\xe9gr\xe9es permettant de manipuler des objets et des enregistrements, et d'impl\xe9menter une interface utilisateur, une utilisation ou des fonctionnalit\xe9s sp\xe9ciales (parfois d\xe9pendantes de la plate-forme) peuvent \xeatre n\xe9cessaires : l'une peut n\xe9cessiter ODBC sous Windows, une autre peut n\xe9cessiter des services Apple sous macOS, et un autre peut souhaiter impl\xe9menter des outils statistiques sp\xe9cifiques, une connexion \xe0 un r\xe9seau social, une plateforme de paiement, un acc\xe8s \xe0 un fichier sur le r\xe9seau, une interface utilisateur sp\xe9ciale ou une structure d'image priv\xe9e."}),"\n",(0,i.jsx)(n.p,{children:"Il est \xe9vident que couvrir tous les domaines des syst\xe8mes d'exploitation macOS et Windows au moyen de commandes 4D m\xe8nerait certainement \xe0 un produit contenant des milliers de commandes et, dans le m\xeame temps, la plupart des utilisateurs n'auraient pas besoin d'un si grand ensemble de fonctionnalit\xe9s. De plus, la cr\xe9ation d'un outil aussi complet rendrait l'environnement 4D incroyablement complexe et demanderait des mois d'\xe9tude \xe0 la plupart des utilisateurs avant de pouvoir obtenir des r\xe9sultats utiles."}),"\n",(0,i.jsx)(n.p,{children:"La nature modulaire de l'environnement 4D permet la cr\xe9ation d'applications de base, mais n'exclut pas le d\xe9veloppement de syst\xe8mes extr\xeamement complexes. L'architecture du plug-in 4D ouvre l'environnement 4D \xe0 tout type d'application ou d'utilisateur. Les plug-ins 4D multiplient la puissance et la productivit\xe9 de cette application ou de l'utilisateur."}),"\n",(0,i.jsx)(n.h2,{id:"quest-ce-quun-plug-in-et-\xe0-quoi-sert-il-",children:"Qu'est-ce qu'un plug-in et \xe0 quoi sert-il ?"}),"\n",(0,i.jsx)(n.p,{children:"Un plug-in est un morceau de code que 4D lance au d\xe9marrage. Il ajoute des fonctionnalit\xe9s \xe0 4D et augmente ainsi sa capacit\xe9."}),"\n",(0,i.jsx)(n.p,{children:"Habituellement, un plug-in fait des choses :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Que 4D ne peut pas effectuer (c'est-\xe0-dire une technologie de plate-forme sp\xe9cifique),"}),"\n",(0,i.jsx)(n.li,{children:"Qui sera tr\xe8s difficile \xe0 \xe9crire en utilisant uniquement 4D,"}),"\n",(0,i.jsx)(n.li,{children:"Qui sont uniquement disponibles en tant que point d'entr\xe9e de plug-in"}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Un plug-in contient g\xe9n\xe9ralement un ensemble de routines donn\xe9es au d\xe9veloppeur 4D. Il peut g\xe9rer une zone externe et ex\xe9cuter un processus externe."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Une ",(0,i.jsx)(n.strong,{children:"routine de plug-in"})," est une routine \xe9crite en langage natif (g\xe9n\xe9ralement C ou C ++) qui d\xe9clenche une action."]}),"\n",(0,i.jsxs)(n.li,{children:["Une ",(0,i.jsx)(n.strong,{children:"zone externe"})," est une partie d'un formulaire pouvant presque tout afficher et interagir avec l'utilisateur si n\xe9cessaire."]}),"\n",(0,i.jsxs)(n.li,{children:["Un ",(0,i.jsx)(n.strong,{children:"processus externe"})," est un processus qui s'ex\xe9cute seul, g\xe9n\xe9ralement en boucle, et qui fait quasiment tout ce qu'il souhaite. Tout le code de process appartient au plug-in, 4D est simplement pr\xe9sent pour recevoir/envoyer des \xe9v\xe9nements au process."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"note-importante",children:"Note importante"}),"\n",(0,i.jsxs)(n.p,{children:["Un plug-in peut \xeatre tr\xe8s simple, avec une seule routine effectuant une tr\xe8s petite t\xe2che, ou tr\xe8s complexe, impliquant une centaine de routines et de domaines. Cependant, chaque d\xe9veloppeur de plug-in doit se rappeler qu'un plug-in est un \"\xe9chantillon\" de code. C'est le plug-in qui s'ex\xe9cute dans 4D, et non l'inverse. En tant que morceau de code, c'est l'h\xf4te de 4D; ce n'est pas une application autonome. Il partage le temps CPU et la m\xe9moire avec 4D et d'autres plug-ins. Il doit donc s'agir d'un code poli, qui utilise exactement ce qui est n\xe9cessaire \xe0 son fonctionnement. Par exemple, dans les longues boucles, un plug-in doit appeler ",(0,i.jsx)(n.code,{children:"PA_Yield ()"})," pour donner du temps au planificateur 4D, \xe0 moins que sa t\xe2che ne soit critique aussi bien pour lui que pour l'application."]}),"\n",(0,i.jsx)(n.h2,{id:"comment-cr\xe9er-un-plug-in-",children:"Comment cr\xe9er un plug-in ?"}),"\n",(0,i.jsxs)(n.p,{children:["Sur GitHub, 4D fournit un ",(0,i.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK",children:(0,i.jsx)(n.strong,{children:"plug-in SDK"})})," open source, contenant le plug-in API 4D et l'assistant de plug-in 4D :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["le ",(0,i.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20API",children:(0,i.jsx)(n.strong,{children:"Plugin API de 4D"})}),", \xe9crit en C, ajoute plus de 400 fonctions qui vous aident \xe0 cr\xe9er facilement vos propres plug-ins pour ajouter de nouvelles fonctionnalit\xe9s \xe0 votre application 4D. Les fonctions du plug-in API de 4D g\xe8rent toutes les interactions entre l'application 4D et votre plug-in."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"https://github.com/4d/4D-Plugin-SDK/blob/master/4D%20Plugin%20Wizard",children:(0,i.jsx)(n.strong,{children:"L'assistant de plug-in 4D"})})," est un outil essentiel qui simplifie la t\xe2che de d\xe9veloppement des plug-ins 4D. Il \xe9crit le code dont 4D a besoin pour interagir correctement avec un plug-in et le charger, afin de vous concentrer sur votre propre code."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"partager-des-plug-ins",children:"Partager des plug-ins"}),"\n",(0,i.jsxs)(n.p,{children:["Nous vous encourageons \xe0 soutenir la communaut\xe9 des d\xe9veloppeurs 4D en partageant vos plug-ins, notamment sur la ",(0,i.jsx)(n.a,{href:"https://github.com/topics/4d-plugin",children:"plateforme GitHub"}),". Afin d'\xeatre correctement r\xe9f\xe9renc\xe9, nous vous recommandons d'utiliser la rubrique ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.code,{children:"4d-plugin"})}),"."]})]})}function c(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,n,t)=>{var i=t(296540),s=Symbol.for("react.element"),u=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,t){var i,u={},a=null,p=null;for(i in void 0!==t&&(a=""+t),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(p=n.ref),n)r.call(n,i)&&!l.hasOwnProperty(i)&&(u[i]=n[i]);if(e&&e.defaultProps)for(i in n=e.defaultProps)void 0===u[i]&&(u[i]=n[i]);return{$$typeof:s,type:e,key:a,ref:p,props:u,_owner:o.current}}n.Fragment=u,n.jsx=a,n.jsxs=a},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>o});var i=t(296540);const s={},u=i.createContext(s);function r(e){const n=i.useContext(u);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(u.Provider,{value:n},e.children)}}}]);