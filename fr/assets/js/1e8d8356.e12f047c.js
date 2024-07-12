/*! For license information please see 1e8d8356.e12f047c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[29971],{480195:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=t(474848),s=t(28453);const o={id:"genInfo",title:"Obtenir des informations du serveur"},i=void 0,l={id:"REST/genInfo",title:"Obtenir des informations du serveur",description:"Vous pouvez obtenir plusieurs informations du serveur REST :",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/docs/fr/19/REST/genInfo",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"genInfo",title:"Obtenir des informations du serveur"},sidebar:"docs",previous:{title:"Sessions et utilisateurs",permalink:"/docs/fr/19/REST/authUsers"},next:{title:"Manipulation des donn\xe9es",permalink:"/docs/fr/19/REST/manData"}},a={},c=[{value:"Catalogue",id:"catalogue",level:2},{value:"Informations sur le cache",id:"informations-sur-le-cache",level:2},{value:"queryPath et queryPlan",id:"querypath-et-queryplan",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Vous pouvez obtenir plusieurs informations du serveur REST :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:"les datastores expos\xe9es et leurs attributs"}),"\n",(0,n.jsx)(r.li,{children:"le contenu du cache du serveur REST, y compris les sessions utilisateur."}),"\n"]}),"\n",(0,n.jsx)(r.h2,{id:"catalogue",children:"Catalogue"}),"\n",(0,n.jsxs)(r.p,{children:["Use the ",(0,n.jsx)(r.a,{href:"/docs/fr/19/REST/catalog",children:(0,n.jsx)(r.code,{children:"$catalog"})}),", ",(0,n.jsx)(r.a,{href:"/docs/fr/19/REST/catalog#catalogdataclass",children:(0,n.jsx)(r.code,{children:"$catalog/\\{dataClass\\}"})}),", or ",(0,n.jsx)(r.a,{href:"/docs/fr/19/REST/catalog#catalogall",children:(0,n.jsx)(r.code,{children:"$catalog/$all"})})," parameters to get the list of ",(0,n.jsx)(r.a,{href:"/docs/fr/19/REST/configuration#exposing-tables-and-fields",children:"exposed dataclasses and their attributes"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"Pour obtenir la collection de toutes les dataclass expos\xe9es avec leurs attributs :"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:"GET /rest/$catalog/$all"})}),"\n",(0,n.jsx)(r.h2,{id:"informations-sur-le-cache",children:"Informations sur le cache"}),"\n",(0,n.jsxs)(r.p,{children:["Utilisez le param\xe8tre ",(0,n.jsx)(r.a,{href:"/docs/fr/19/REST/info",children:(0,n.jsx)(r.code,{children:"$info"})})," pour obtenir des informations sur les s\xe9lections d'entit\xe9s stock\xe9es dans le cache du 4D Server et sur l'ex\xe9cution des sessions utilisateur."]}),"\n",(0,n.jsx)(r.h2,{id:"querypath-et-queryplan",children:"queryPath et queryPlan"}),"\n",(0,n.jsxs)(r.p,{children:["Les s\xe9lections d'entit\xe9 g\xe9n\xe9r\xe9es par les requ\xeates peuvent avoir les deux propri\xe9t\xe9s suivantes : ",(0,n.jsx)(r.code,{children:"queryPlan"})," et ",(0,n.jsx)(r.code,{children:"queryPath"}),". Pour calculer et retourner ces propri\xe9t\xe9s, il vous suffit d'ajouter ",(0,n.jsx)(r.a,{href:"/docs/fr/19/REST/queryplan",children:(0,n.jsx)(r.code,{children:"$queryPlan"})})," et/ou ",(0,n.jsx)(r.a,{href:"/docs/fr/19/REST/querypath",children:(0,n.jsx)(r.code,{children:"$queryPath"})})," dans la demande REST."]}),"\n",(0,n.jsx)(r.p,{children:"Par exemple :"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.code,{children:'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true'})}),"\n",(0,n.jsx)(r.p,{children:"Ces propri\xe9t\xe9s sont des objets contenant des informations sur la fa\xe7on dont le serveur ex\xe9cute les requ\xeates composites en interne via des dataclass et des relations :"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"queryPlan"})," : objet contenant la description d\xe9taill\xe9e de la requ\xeate juste avant son ex\xe9cution (c'est-\xe0-dire la requ\xeate planifi\xe9e)."]}),"\n",(0,n.jsxs)(r.li,{children:[(0,n.jsx)(r.strong,{children:"queryPath"})," : objet contenant la description d\xe9taill\xe9e de la requ\xeate telle qu'elle a \xe9t\xe9 r\xe9ellement effectu\xe9e."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Les informations enregistr\xe9es incluent le type de requ\xeate (index\xe9 et s\xe9quentiel) et chaque sous-requ\xeate n\xe9cessaire ainsi que les op\xe9rateurs de conjonction. Les query paths contiennent \xe9galement le nombre d'entit\xe9s trouv\xe9es et la dur\xe9e d'ex\xe9cution de chaque crit\xe8re de recherche. Il peut \xeatre utile d'analyser ces informations lors du d\xe9veloppement de votre application. G\xe9n\xe9ralement, la description du plan de recherche (queryPlan) et son chemin r\xe9el (queryPath) sont identiques mais ils peuvent diff\xe9rer car 4D peut int\xe9grer des optimisations dynamiques lorsqu'une requ\xeate est ex\xe9cut\xe9e, afin d'am\xe9liorer les performances. Par exemple, le moteur 4D peut convertir dynamiquement une requ\xeate index\xe9e en requ\xeate s\xe9quentielle s'il estime qu'elle sera plus rapide. Ce cas particulier peut se produire lorsque le nombre d'entit\xe9s recherch\xe9es est faible."})]})}function d(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},221020:(e,r,t)=>{var n=t(296540),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,t){var n,o={},c=null,u=null;for(n in void 0!==t&&(c=""+t),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(u=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===o[n]&&(o[n]=r[n]);return{$$typeof:s,type:e,key:c,ref:u,props:o,_owner:l.current}}r.Fragment=o,r.jsx=c,r.jsxs=c},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>l});var n=t(296540);const s={},o=n.createContext(s);function i(e){const r=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:r},e.children)}}}]);