/*! For license information please see 10fc3b72.97f70efc.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[93509],{852242:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>d});var n=t(474848),r=t(28453);const i={id:"configuration",title:"Configuration du serveur"},a=void 0,o={id:"REST/configuration",title:"Configuration du serveur",description:"\xc0 l'aide de requ\xeates HTTP standard, le serveur 4D REST permet aux applications externes d'acc\xe9der directement aux donn\xe9es de votre base, c'est-\xe0-dire de r\xe9cup\xe9rer des informations sur les dataclass de votre projet, de manipuler des donn\xe9es, de vous connecter \xe0 votre application Web et bien plus encore.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/configuration.md",sourceDirName:"REST",slug:"/REST/configuration",permalink:"/docs/fr/18/REST/configuration",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2Fconfiguration.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"configuration",title:"Configuration du serveur"},sidebar:"docs",previous:{title:"Prise en main",permalink:"/docs/fr/18/REST/gettingStarted"},next:{title:"Sessions et utilisateurs",permalink:"/docs/fr/18/REST/authUsers"}},l={},d=[{value:"D\xe9marrage du serveur REST",id:"D\xe9marrage-du-serveur-REST",level:2},{value:"Configuration de l&#39;acc\xe8s REST",id:"Configuration-de-lacc\xe8s-REST",level:2},{value:"Utilisation des param\xe8tres de la base",id:"Utilisation-des-param\xe8tres-de-la-base",level:3},{value:"M\xe9thode base On REST Authentication",id:"M\xe9thode-base-On-REST-Authentication",level:3},{value:"Exposer les tables et les champs",id:"Exposer-les-tables-et-les-champs",level:2},{value:"Exposer des tables",id:"Exposer-des-tables",level:3},{value:"Exposer des champs",id:"Exposer-des-champs",level:3}];function u(e){const s={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"\xc0 l'aide de requ\xeates HTTP standard, le serveur 4D REST permet aux applications externes d'acc\xe9der directement aux donn\xe9es de votre base, c'est-\xe0-dire de r\xe9cup\xe9rer des informations sur les dataclass de votre projet, de manipuler des donn\xe9es, de vous connecter \xe0 votre application Web et bien plus encore."}),"\n",(0,n.jsx)(s.p,{children:"Pour commencer \xe0 utiliser les fonctionnalit\xe9s REST, vous devez d\xe9marrer et configurer le serveur 4D REST."}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["Sur 4D Server, l'ouverture d'une session REST n\xe9cessite une licence client 4D disponible.",(0,n.jsx)(s.br,{})]}),"\n",(0,n.jsxs)(s.li,{children:["On 4D single-user, you can open up to three REST sessions for testing purposes. You need to manage the ",(0,n.jsx)(s.a,{href:"/docs/fr/18/REST/authUsers#session-cookie",children:"session cookie"})," to use the same session for your requesting application."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h2,{id:"D\xe9marrage-du-serveur-REST",children:"D\xe9marrage du serveur REST"}),"\n",(0,n.jsxs)(s.p,{children:["Pour des raisons de s\xe9curit\xe9, par d\xe9faut, 4D ne r\xe9pond pas aux requ\xeates REST. Si vous souhaitez d\xe9marrer le serveur REST, vous devez cocher l'option ",(0,n.jsx)(s.strong,{children:"Exposer en tant que serveur REST"}),' dans la page "Web/REST" des param\xe8tres de la base pour que les demandes REST soient trait\xe9es.']}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.img,{alt:"alt-text",src:t(863264).A+"",width:"862",height:"377"})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Les services REST utilisent le serveur HTTP 4D; vous devez donc vous assurer que le serveur Web 4D est lanc\xe9."}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Le message d'avertissement \"Attention, v\xe9rifiez les privil\xe8ges d'acc\xe8s\" s'affiche lorsque vous cochez cette option, pour attirer votre attention sur le fait que lorsque les services REST sont activ\xe9s, l'acc\xe8s par d\xe9faut aux objets de base de donn\xe9es est gratuit tant que les acc\xe8s REST n'ont pas \xe9t\xe9 configur\xe9s."}),"\n",(0,n.jsx)(s.h2,{id:"Configuration-de-lacc\xe8s-REST",children:"Configuration de l'acc\xe8s REST"}),"\n",(0,n.jsx)(s.p,{children:"Par d\xe9faut, les acc\xe8s REST sont ouverts \xe0 tous les utilisateurs, ce qui n'est \xe9videmment pas recommand\xe9 pour des raisons de s\xe9curit\xe9 et de contr\xf4le de l'utilisation des licences clientes."}),"\n",(0,n.jsx)(s.p,{children:"Vous pouvez configurer les acc\xe8s REST de l'une des mani\xe8res suivantes :"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["assigner un groupe d'utilisateurs en ",(0,n.jsx)(s.strong,{children:"lecture/\xe9criture"}),' aux services REST dans la page "Web/REST" des param\xe8tres de la base;']}),"\n",(0,n.jsxs)(s.li,{children:["saisir d'une m\xe9thode base ",(0,n.jsx)(s.code,{children:"On REST Authentication"}),"pour intercepter et g\xe9rer chaque demande REST initiale."]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Vous ne pouvez pas utiliser les deux fonctionnalit\xe9s simultan\xe9ment. Une fois qu'une m\xe9thode base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," a \xe9t\xe9 d\xe9finie, 4D lui donne enti\xe8rement le contr\xf4le des requ\xeates REST ."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"Utilisation-des-param\xe8tres-de-la-base",children:"Utilisation des param\xe8tres de la base"}),"\n",(0,n.jsxs)(s.p,{children:["Le menu ",(0,n.jsx)(s.strong,{children:"Lecture/\xc9criture"})," de la page \"Web/REST\" des param\xe8tres de la base sp\xe9cifie un groupe d'utilisateurs 4D autoris\xe9 \xe0 \xe9tablir le lien vers la base de donn\xe9es 4D \xe0 l'aide de requ\xeates REST."]}),"\n",(0,n.jsxs)(s.p,{children:["Par d\xe9faut, le menu affiche ",(0,n.jsx)(s.code,{children:"<Anyone>"}),", ce qui signifie que les acc\xe8s REST sont ouverts \xe0 tous les utilisateurs. Une fois que vous avez sp\xe9cifi\xe9 un groupe, seul un compte utilisateur 4D appartenant \xe0 ce groupe peut \xeatre utilis\xe9 pour ",(0,n.jsx)(s.a,{href:"/docs/fr/18/REST/authUsers",children:"acc\xe9der \xe0 4D via une requ\xeate REST"}),". Si un compte utilis\xe9 n'appartient pas \xe0 ce groupe, 4D renvoie une erreur d'authentification \xe0 l'exp\xe9diteur de la requ\xeate."]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsxs)(s.p,{children:["Pour que ce param\xe8tre prenne effet, la m\xe9thode base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," ne doit pas \xeatre d\xe9finie. S'il existe, 4D ignore les param\xe8tres d'acc\xe8s d\xe9finis dans les propri\xe9t\xe9s de la base."]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"M\xe9thode-base-On-REST-Authentication",children:"M\xe9thode base On REST Authentication"}),"\n",(0,n.jsxs)(s.p,{children:["La m\xe9thode base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," vous permet de contr\xf4ler de mani\xe8re personnalis\xe9e l\u2019ouverture des sessions REST sur 4D. Cette m\xe9thode base est automatiquement appel\xe9e lorsqu'une nouvelle session est ouverte \xe0 l'aide d'une requ\xeate REST. Lorsqu'une ",(0,n.jsx)(s.a,{href:"/docs/fr/18/REST/authUsers",children:"requ\xeate d\u2019ouverture de session REST"})," est re\xe7ue, les identifiants de connexion sont fournis dans l\u2019en-t\xeate de la requ\xeate. La m\xe9thode base ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," est appel\xe9e afin de vous permettre d\u2019\xe9valuer ces identifiants. Vous pouvez utiliser la liste des utilisateurs de la base 4D ou votre propre table d\u2019identifiants. For more information, refer to the ",(0,n.jsx)(s.code,{children:"On REST Authentication"})," database method ",(0,n.jsx)(s.a,{href:"https://doc.4d.com/4Dv18/4D/18/On-REST-Authentication-database-method.301-4505004.en.html",children:"documentation"}),"."]}),"\n",(0,n.jsx)(s.h2,{id:"Exposer-les-tables-et-les-champs",children:"Exposer les tables et les champs"}),"\n",(0,n.jsx)(s.p,{children:"Une fois que les services REST sont activ\xe9s dans la base 4D, par d\xe9faut une session REST peut acc\xe9der \xe0 toutes les tables et les champs du datastore, et utiliser leurs donn\xe9es. Par exemple, si votre base de donn\xe9es contient une table [Employee], il est possible d'\xe9crire :"}),"\n",(0,n.jsx)(s.pre,{children:(0,n.jsx)(s.code,{children:'http://127.0.0.1:8044/rest/Employee/?$filter="salary>10000"\n\n'})}),"\n",(0,n.jsx)(s.p,{children:'Cette requ\xeate retournera tous les employ\xe9s dont le champ "salary" est sup\xe9rieur \xe0 10 000.'}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:'Les tables et/ou champs 4D dont l\'attribut est "invisible" sont \xe9galement expos\xe9s par d\xe9faut dans REST.'}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Si vous souhaitez personnaliser les objets du datastore accessibles via REST, vous devez d\xe9sactiver l'exposition de chaque table et/ou champ que vous souhaitez masquer. Lorsqu'une requ\xeate REST tente d'acc\xe9der \xe0 une ressource non autoris\xe9e, 4D retourne une erreur."}),"\n",(0,n.jsx)(s.h3,{id:"Exposer-des-tables",children:"Exposer des tables"}),"\n",(0,n.jsx)(s.p,{children:"Par d\xe9faut, toutes les tables sont expos\xe9es dans REST."}),"\n",(0,n.jsx)(s.p,{children:"Pour des raisons de s\xe9curit\xe9, vous pouvez choisir d'exposer uniquement certaines tables du datastore aux appels REST. Par exemple, si vous avez cr\xe9\xe9 une table [Users] stockant les noms d'utilisateur et les mots de passe, il serait pr\xe9f\xe9rable de ne pas l'exposer."}),"\n",(0,n.jsx)(s.p,{children:"Pour supprimer l'exposition REST d'une table :"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Affichez l'Inspecteur de table dans l'Editeur de structure et s\xe9lectionnez la table \xe0 modifier."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["Uncheck the ",(0,n.jsx)(s.strong,{children:"Expose as REST resource"})," option: ",(0,n.jsx)(s.img,{alt:"alt-text",src:t(653867).A+"",width:"279",height:"330"})," Do this for each table whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(s.h3,{id:"Exposer-des-champs",children:"Exposer des champs"}),"\n",(0,n.jsx)(s.p,{children:"Par d\xe9faut, touts les champs d'une base 4D sont expos\xe9s dans REST."}),"\n",(0,n.jsx)(s.p,{children:"Vous pouvez choisir d'exposer certains champs de vos tables \xe0 REST. Par exemple, si vous ne souhaitez pas exposer le champ [Employees]Salary."}),"\n",(0,n.jsx)(s.p,{children:"Pour supprimer l'exposition REST d'un champ :"}),"\n",(0,n.jsxs)(s.ol,{children:["\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsx)(s.p,{children:"Affichez l'Inspecteur de champ dans l'Editeur de structure et s\xe9lectionnez le champ \xe0 modifier."}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:["\n",(0,n.jsxs)(s.p,{children:["D\xe9cochez la case ",(0,n.jsx)(s.strong,{children:"Exposer en tant que ressource REST"})," pour le champ. ",(0,n.jsx)(s.img,{alt:"alt-text",src:t(501267).A+"",width:"279",height:"271"})," Repeat this for each field whose exposure needs to be modified."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Pour qu'un champ soit accessible via REST, la table parente doit l'\xeatre \xe9galement. Si la table parente n'est pas expos\xe9e, aucun de ses champs ne le sera, quel que soit leur statut."}),"\n"]})]})}function c(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,s,t)=>{var n=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,s,t){var n,i={},d=null,u=null;for(n in void 0!==t&&(d=""+t),void 0!==s.key&&(d=""+s.key),void 0!==s.ref&&(u=s.ref),s)a.call(s,n)&&!l.hasOwnProperty(n)&&(i[n]=s[n]);if(e&&e.defaultProps)for(n in s=e.defaultProps)void 0===i[n]&&(i[n]=s[n]);return{$$typeof:r,type:e,key:d,ref:u,props:i,_owner:o.current}}s.Fragment=i,s.jsx=d,s.jsxs=d},474848:(e,s,t)=>{e.exports=t(221020)},863264:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/Settings-a02f94292e28dc8a9de292c9bd947c8b.png"},501267:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/field-4db67392f4a6381fd75a7ba294943b5b.png"},653867:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/table-1c946003f2068cb28b604481145c98a8.png"},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>o});var n=t(296540);const r={},i=n.createContext(r);function a(e){const s=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(i.Provider,{value:s},e.children)}}}]);