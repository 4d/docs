"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81883"],{823461:function(e,n,t){t.r(n),t.d(n,{default:()=>d,frontMatter:()=>a,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>o});var s=JSON.parse('{"id":"Events/onPageChange","title":"On Page Change","description":"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                  |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/Events/onPageChange.md","sourceDirName":"Events","slug":"/Events/onPageChange","permalink":"/docs/fr/20-R8/Events/onPageChange","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPageChange.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onPageChange","title":"On Page Change"},"sidebar":"docs","previous":{"title":"On Outside Call","permalink":"/docs/fr/20-R8/Events/onOutsideCall"},"next":{"title":"On Plug in Area","permalink":"/docs/fr/20-R8/Events/onPlugInArea"}}'),i=t("785893"),r=t("250065");let a={id:"onPageChange",title:"On Page Change"},o=void 0,l={},c=[{value:"Description",id:"description",level:2}];function u(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Code"}),(0,i.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,i.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"56"}),(0,i.jsx)(n.td,{children:"Formulaire"}),(0,i.jsx)(n.td,{children:"La page courante du formulaire est modifi\xe9e"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["Cet \xe9v\xe9nement n'est disponible qu'au niveau du formulaire (il est appel\xe9 dans la m\xe9thode formulaire). Il est g\xe9n\xe9r\xe9 \xe0 chaque fois que la page courante du formulaire change (suite \xe0 un appel \xe0 la commande ",(0,i.jsx)(n.code,{children:"FORM GOTO PAGE"})," ou \xe0 une action de navigation standard)."]}),"\n",(0,i.jsxs)(n.p,{children:["A noter qu'il est g\xe9n\xe9r\xe9 apr\xe8s le chargement complet de la page, c'est-\xe0-dire une fois tous les objets qu'elle contient sont initialis\xe9s, y compris les ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/FormObjects/webAreaOverview",children:"zones Web"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["La seule exception concerne les zones 4D View Pro, pour lesquelles vous devez appeler l'\xe9v\xe9nement sp\xe9cifique ",(0,i.jsx)(n.a,{href:"/docs/fr/20-R8/Events/onVpReady",children:"On VP Ready"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["L'\xe9v\xe9nement ",(0,i.jsx)(n.code,{children:"On Page Change"})," est utile pour ex\xe9cuter du code qui n\xe9cessite que tous les objets soient pr\xe9alablement initialis\xe9s. Vous pouvez \xe9galement l'utiliser pour optimiser l'application en ex\xe9cutant du code (par exemple, une recherche) uniquement apr\xe8s l'affichage d'une page sp\xe9cifique du formulaire et pas seulement d\xe8s que la page 1 est charg\xe9e. Si l'utilisateur ne va pas sur cette page, le code n'est pas ex\xe9cut\xe9."]})]})}function d(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(667294);let i={},r=s.createContext(i);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);