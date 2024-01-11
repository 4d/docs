"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14598],{603905:(e,t,s)=>{s.d(t,{Zo:()=>c,kt:()=>m});var r=s(667294);function n(e,t,s){return t in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}function i(e,t){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),s.push.apply(s,r)}return s}function a(e){for(var t=1;t<arguments.length;t++){var s=null!=arguments[t]?arguments[t]:{};t%2?i(Object(s),!0).forEach((function(t){n(e,t,s[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}function o(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}var l=r.createContext({}),u=function(e){var t=r.useContext(l),s=t;return e&&(s="function"==typeof e?e(t):a(a({},t),e)),s},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var s=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(s),m=n,f=d["".concat(l,".").concat(m)]||d[m]||p[m]||i;return s?r.createElement(f,a(a({ref:t},c),{},{components:s})):r.createElement(f,a({ref:t},c))}));function m(e,t){var s=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=s.length,a=new Array(i);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,a[1]=o;for(var u=2;u<i;u++)a[u]=s[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,s)}d.displayName="MDXCreateElement"},407164:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});s(667294);var r=s(603905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var s=arguments[t];for(var r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r])}return e},n.apply(this,arguments)}function i(e,t){if(null==e)return{};var s,r,n=function(e,t){if(null==e)return{};var s,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||(n[s]=e[s]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)s=i[r],t.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(n[s]=e[s])}return n}const a={id:"overview",title:"Pr\xe9sentation du contr\xf4le des acc\xe8s"},o=void 0,l={unversionedId:"Users/overview",id:"version-20-R4/Users/overview",title:"Pr\xe9sentation du contr\xf4le des acc\xe8s",description:"Si plusieurs personnes utilisent une application, ce qui est souvent le cas dans une architecture client-serveur ou d'interfaces Web, vous devez contr\xf4ler ses acc\xe8s ou proposer diff\xe9rentes fonctionnalit\xe9s selon les utilisateurs connect\xe9s. Il est \xe9galement essentiel d'assurer la s\xe9curit\xe9 des donn\xe9es sensibles, m\xeame dans les applications monoposte.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Users/overview.md",sourceDirName:"Users",slug:"/Users/overview",permalink:"/docs/fr/Users/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Users%2Foverview.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"overview",title:"Pr\xe9sentation du contr\xf4le des acc\xe8s"},sidebar:"docs",previous:{title:"Access Rights",permalink:"/docs/fr/category/access-rights"},next:{title:"Gestion des groupes et utilisateurs 4D",permalink:"/docs/fr/Users/editing"}},u={},c=[{value:"Contr\xf4le des acc\xe8s dans les applications multi-utilisateurs",id:"contr\xf4le-des-acc\xe8s-dans-les-applications-multi-utilisateurs",level:2},{value:"Contr\xf4le d&#39;acc\xe8s dans les applications monoposte",id:"contr\xf4le-dacc\xe8s-dans-les-applications-monoposte",level:2},{value:"Identification de l&#39;utilisateur",id:"identification-de-lutilisateur",level:3},{value:"Protection des acc\xe8s",id:"protection-des-acc\xe8s",level:3},{value:"Privileges",id:"privileges",level:4},{value:"Chiffrement des donn\xe9es",id:"chiffrement-des-donn\xe9es",level:4}],p={toc:c};function d(e){var{components:t}=e,s=i(e,["components"]);return(0,r.kt)("wrapper",n({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Si plusieurs personnes utilisent une application, ce qui est souvent le cas dans une architecture client-serveur ou d'interfaces Web, vous devez contr\xf4ler ses acc\xe8s ou proposer diff\xe9rentes fonctionnalit\xe9s selon les utilisateurs connect\xe9s. Il est \xe9galement essentiel d'assurer la s\xe9curit\xe9 des donn\xe9es sensibles, m\xeame dans les applications monoposte."),(0,r.kt)("p",null,"La strat\xe9gie de contr\xf4le d'acc\xe8s 4D d\xe9pend de la configuration de votre d\xe9ploiement :"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dans les applications multi-utilisateurs, vous pouvez vous appuyer sur les utilisateurs et les groupes 4D,"),(0,r.kt)("li",{parentName:"ul"},"dans les applications monoposte, l'acc\xe8s des utilisateurs est contr\xf4l\xe9 par la session du syst\xe8me, \xe0 l'aide de commandes telles que ",(0,r.kt)("a",n({parentName:"li"},{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Current system user")),".")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Consultez le document ",(0,r.kt)("a",n({parentName:"p"},{href:"https://blog.4d.com/4d-security-guide/"}),"4D Security guide")," pour une vue d'ensemble des fonctions de s\xe9curit\xe9 de 4D.")),(0,r.kt)("h2",n({},{id:"contr\xf4le-des-acc\xe8s-dans-les-applications-multi-utilisateurs"}),"Contr\xf4le des acc\xe8s dans les applications multi-utilisateurs"),(0,r.kt)("p",null,"Les applications multi-utilisateurs sont d\xe9ploy\xe9es avec 4D Server. Il peut s'agir d'applications client-serveur, Web ou REST."),(0,r.kt)("p",null,"Dans les applications multi-utilisateurs, le contr\xf4le des acc\xe8s se fait par le biais des ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/Users/editing"}),"utilisateurs et des groupes 4D"),". Vous pouvez cr\xe9er des utilisateurs, attribuer des mots de passe et cr\xe9er des groupes d'acc\xe8s qui ont diff\xe9rents niveaux de privil\xe8ges dans l'application."),(0,r.kt)("p",null,"Initiez le syst\xe8me de contr\xf4le des acc\xe8s par mot de passe 4D avec 4D Server, ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/Users/editing#designer-and-administrator"}),"en attribuant un mot de passe au Super utilisateur"),". Tant que vous n'attribuez pas de mot de passe au Super utilisateur, tous les acc\xe8s \xe0 l'application se font avec les droits d'acc\xe8s du Super utilisateur, m\xeame si vous avez ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/Users/editing"}),"configur\xe9 des utilisateurs et des groupes")," (\xe0 l'ouverture de l'application, aucun identifiant n'est requis). N'importe quelle partie de l'application peut \xeatre ouverte."),(0,r.kt)("p",null,"Lorsqu\u2019un mot de passe est affect\xe9 au Super_Utilisateur, tous les privil\xe8ges d\u2019acc\xe8s que vous avez affect\xe9s prennent effet. Pour se connecter \xe0 l'application ou \xe0 un ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/Users/editing#assigning-group-access"}),"serveur \xe0 acc\xe8s prot\xe9g\xe9"),", les utilisateurs distants doivent saisir un login/mot de passe."),(0,r.kt)("p",null,"Pour d\xe9sactiver le syst\xe8me de restriction d\u2019acc\xe8s, il suffit de supprimer (mettre \xe0 blanc) le mot de passe du Super_Utilisateur."),(0,r.kt)("h2",n({},{id:"contr\xf4le-dacc\xe8s-dans-les-applications-monoposte"}),"Contr\xf4le d'acc\xe8s dans les applications monoposte"),(0,r.kt)("p",null,"Les applications monoposte sont des applications de bureau, d\xe9ploy\xe9es avec 4D ou fusionn\xe9es avec 4D Volume License. Dans les applications monoposte, tous les utilisateurs qui ouvrent l'application sont des ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/Users/editing#designer-and-administrator"}),"Super utilisateurs"),'; ils poss\xe8dent tous les privil\xe8ges et leur nom est "Super utilisateur". Le contr\xf4le des acc\xe8s n\'est pas bas\xe9 sur les utilisateurs et les groupes 4D, mais sur les ',(0,r.kt)("strong",{parentName:"p"},"sessions utilisateur"),"."),(0,r.kt)("h3",n({},{id:"identification-de-lutilisateur"}),"Identification de l'utilisateur"),(0,r.kt)("p",null,"Pour identifier l'utilisateur courant dans une application 4D monoposte, vous pouvez vous appuyer sur la commande ",(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page484.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"Current system user")),", qui retourne l'utilisateur ayant ouvert la session syst\xe8me. Ainsi, l'authentification des utilisateurs est d\xe9l\xe9gu\xe9e au syst\xe8me d'exploitation."),(0,r.kt)("p",null,"Vous pouvez alors autoriser ou refuser les acc\xe8s \xe0 votre application en utilisant un code suivant :"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"If(Current system user = $user) //you can store users in a database table\n    // give access to some features\nEnd if\n")),(0,r.kt)("p",null,'Si vous souhaitez utiliser le nom d\'utilisateur du syst\xe8me dans 4D au lieu du "Super utilisatur" (par exemple dans les fichiers journaux), vous pouvez appeler la commande ',(0,r.kt)("a",n({parentName:"p"},{href:"https://doc.4d.com/4dv19R/help/command/en/page1666.html"}),(0,r.kt)("inlineCode",{parentName:"a"},"SET USER ALIAS")),", par exemple :"),(0,r.kt)("pre",null,(0,r.kt)("code",n({parentName:"pre"},{className:"language-4d"}),"SET USER ALIAS(Current system user)\n")),(0,r.kt)("h3",n({},{id:"protection-des-acc\xe8s"}),"Protection des acc\xe8s"),(0,r.kt)("h4",n({},{id:"privileges"}),"Privileges"),(0,r.kt)("p",null,"Sur une machine partag\xe9e par plusieurs utilisateurs, vous pouvez installer l'application 4D dans un dossier et octroyer les privil\xe8ges d'acc\xe8s utilisateur appropri\xe9s au dossier au niveau de l'OS."),(0,r.kt)("h4",n({},{id:"chiffrement-des-donn\xe9es"}),"Chiffrement des donn\xe9es"),(0,r.kt)("p",null,"Si vous souhaitez prot\xe9ger les acc\xe8s aux donn\xe9es de l'application, nous vous recommandons de ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/fr/MSC/encrypt"}),"chiffrer les donn\xe9es")," et de fournir la cl\xe9 de chiffrement \xe0 l'utilisateur ou aux utilisateurs autoris\xe9s."))}d.isMDXComponent=!0}}]);