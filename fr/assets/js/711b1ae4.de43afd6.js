"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15371"],{878921:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>a,default:()=>d,assets:()=>l,toc:()=>u,frontMatter:()=>o});var s=JSON.parse('{"id":"Events/onPageChange","title":"Sur changement page","description":"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                  |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onPageChange.md","sourceDirName":"Events","slug":"/Events/onPageChange","permalink":"/docs/fr/20/Events/onPageChange","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPageChange.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onPageChange","title":"Sur changement page"},"sidebar":"docs","previous":{"title":"Sur appel ext\xe9rieur","permalink":"/docs/fr/20/Events/onOutsideCall"},"next":{"title":"Sur appel zone du plug in","permalink":"/docs/fr/20/Events/onPlugInArea"}}'),r=t("785893"),i=t("250065");let o={id:"onPageChange",title:"Sur changement page"},a=void 0,l={},u=[{value:"Description",id:"description",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"56"}),(0,r.jsx)(n.td,{children:"Formulaire"}),(0,r.jsx)(n.td,{children:"La page courante du formulaire est modifi\xe9e"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Cet \xe9v\xe9nement n'est disponible qu'au niveau du formulaire (il est appel\xe9 dans la m\xe9thode formulaire). Il est g\xe9n\xe9r\xe9 \xe0 chaque fois que la page courante du formulaire change (suite \xe0 un appel \xe0 la commande ",(0,r.jsx)(n.code,{children:"FORM GOTO PAGE"})," ou \xe0 une action de navigation standard)."]}),"\n",(0,r.jsxs)(n.p,{children:["A noter qu'il est g\xe9n\xe9r\xe9 apr\xe8s le chargement complet de la page, c'est-\xe0-dire une fois tous les objets qu'elle contient sont initialis\xe9s, y compris les ",(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/webAreaOverview",children:"zones Web"}),"."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["La seule exception concerne les zones 4D View Pro, pour lesquelles vous devez appeler l'\xe9v\xe9nement sp\xe9cifique ",(0,r.jsx)(n.a,{href:"/docs/fr/20/Events/onVpReady",children:"On VP Ready"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,r.jsx)(n.code,{children:"On Page Change"})," est utile pour ex\xe9cuter du code qui n\xe9cessite que tous les objets soient pr\xe9alablement initialis\xe9s. Vous pouvez \xe9galement l'utiliser pour optimiser l'application en ex\xe9cutant du code (par exemple, une recherche) uniquement apr\xe8s l'affichage d'une page sp\xe9cifique du formulaire et pas seulement d\xe8s que la page 1 est charg\xe9e. Si l'utilisateur ne va pas sur cette page, le code n'est pas ex\xe9cut\xe9."]})]})}function d(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return o}});var s=t(667294);let r={},i=s.createContext(r);function o(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);