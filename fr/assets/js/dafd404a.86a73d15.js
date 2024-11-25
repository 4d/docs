"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70790"],{412394:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>d,assets:()=>a,toc:()=>u,frontMatter:()=>l});var s=JSON.parse('{"id":"REST/genInfo","title":"Obtenir des informations du serveur","description":"Vous pouvez obtenir plusieurs informations du serveur REST :","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/REST/genInfo.md","sourceDirName":"REST","slug":"/REST/genInfo","permalink":"/docs/fr/20/REST/genInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"genInfo","title":"Obtenir des informations du serveur"},"sidebar":"docs","previous":{"title":"Sessions et utilisateurs","permalink":"/docs/fr/20/REST/authUsers"},"next":{"title":"Manipulation des donn\xe9es","permalink":"/docs/fr/20/REST/manData"}}'),r=t("785893"),i=t("250065");let l={id:"genInfo",title:"Obtenir des informations du serveur"},o=void 0,a={},u=[{value:"Catalogue",id:"catalogue",level:2},{value:"Informations sur le cache",id:"informations-sur-le-cache",level:2},{value:"queryPath et queryPlan",id:"querypath-et-queryplan",level:2}];function c(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Vous pouvez obtenir plusieurs informations du serveur REST :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"les datastores expos\xe9es et leurs attributs"}),"\n",(0,r.jsx)(n.li,{children:"le contenu du cache du serveur REST, y compris les sessions utilisateur."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"catalogue",children:"Catalogue"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/docs/fr/20/REST/catalog",children:(0,r.jsx)(n.code,{children:"$catalog"})}),", ",(0,r.jsx)(n.a,{href:"/docs/fr/20/REST/catalog#catalogdataclass",children:(0,r.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})}),", or ",(0,r.jsx)(n.a,{href:"/docs/fr/20/REST/catalog#catalogall",children:(0,r.jsx)(n.code,{children:"$catalog/$all"})})," parameters to get the list of ",(0,r.jsx)(n.a,{href:"/docs/fr/20/REST/configuration#exposing-tables-and-fields",children:"exposed dataclasses and their attributes"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"Pour obtenir la collection de toutes les dataclass expos\xe9es avec leurs attributs :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/$catalog/$all"})}),"\n",(0,r.jsx)(n.h2,{id:"informations-sur-le-cache",children:"Informations sur le cache"}),"\n",(0,r.jsxs)(n.p,{children:["Utilisez le param\xe8tre ",(0,r.jsx)(n.a,{href:"/docs/fr/20/REST/info",children:(0,r.jsx)(n.code,{children:"$info"})})," pour obtenir des informations sur les s\xe9lections d'entit\xe9s stock\xe9es dans le cache du 4D Server et sur l'ex\xe9cution des sessions utilisateur."]}),"\n",(0,r.jsx)(n.h2,{id:"querypath-et-queryplan",children:"queryPath et queryPlan"}),"\n",(0,r.jsxs)(n.p,{children:["Les s\xe9lections d'entit\xe9 g\xe9n\xe9r\xe9es par les requ\xeates peuvent avoir les deux propri\xe9t\xe9s suivantes : ",(0,r.jsx)(n.code,{children:"queryPlan"})," et ",(0,r.jsx)(n.code,{children:"queryPath"}),". Pour calculer et retourner ces propri\xe9t\xe9s, il vous suffit d'ajouter ",(0,r.jsx)(n.a,{href:"/docs/fr/20/REST/queryplan",children:(0,r.jsx)(n.code,{children:"$queryPlan"})})," et/ou ",(0,r.jsx)(n.a,{href:"/docs/fr/20/REST/querypath",children:(0,r.jsx)(n.code,{children:"$queryPath"})})," dans la demande REST."]}),"\n",(0,r.jsx)(n.p,{children:"Par exemple :"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true'})}),"\n",(0,r.jsx)(n.p,{children:"Ces propri\xe9t\xe9s sont des objets contenant des informations sur la fa\xe7on dont le serveur ex\xe9cute les requ\xeates composites en interne via des dataclass et des relations :"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"queryPlan"})," : objet contenant la description d\xe9taill\xe9e de la requ\xeate juste avant son ex\xe9cution (c'est-\xe0-dire la requ\xeate planifi\xe9e)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"queryPath"})," : objet contenant la description d\xe9taill\xe9e de la requ\xeate telle qu'elle a \xe9t\xe9 r\xe9ellement effectu\xe9e."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Les informations enregistr\xe9es incluent le type de requ\xeate (index\xe9 et s\xe9quentiel) et chaque sous-requ\xeate n\xe9cessaire ainsi que les op\xe9rateurs de conjonction. Les query paths contiennent \xe9galement le nombre d'entit\xe9s trouv\xe9es et la dur\xe9e d'ex\xe9cution de chaque crit\xe8re de recherche. Il peut \xeatre utile d'analyser ces informations lors du d\xe9veloppement de votre application. G\xe9n\xe9ralement, la description du plan de recherche (queryPlan) et son chemin r\xe9el (queryPath) sont identiques mais ils peuvent diff\xe9rer car 4D peut int\xe9grer des optimisations dynamiques lorsqu'une requ\xeate est ex\xe9cut\xe9e, afin d'am\xe9liorer les performances. Par exemple, le moteur 4D peut convertir dynamiquement une requ\xeate index\xe9e en requ\xeate s\xe9quentielle s'il estime qu'elle sera plus rapide. Ce cas particulier peut se produire lorsque le nombre d'entit\xe9s recherch\xe9es est faible."})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);