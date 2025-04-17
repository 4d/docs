"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64665"],{186749:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>s,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"Events/onVpReady","title":"On VP Ready","description":"| Code | Peut \xeatre appel\xe9 par                                    | D\xe9finition                                       |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R9/Events/onVpReady.md","sourceDirName":"Events","slug":"/Events/onVpReady","permalink":"/docs/fr/Events/onVpReady","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpReady.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"onVpReady","title":"On VP Ready"},"sidebar":"docs","previous":{"title":"On VP Range Changed","permalink":"/docs/fr/Events/onVpRangeChanged"},"next":{"title":"On Window Opening Denied","permalink":"/docs/fr/Events/onWindowOpeningDenied"}}'),o=t("785893"),i=t("250065");let s={id:"onVpReady",title:"On VP Ready"},d=void 0,a={},l=[{value:"Description",id:"description",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,o.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"9"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/fr/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})}),(0,o.jsx)(n.td,{children:"Le chargement de la zone 4D View Pro est termin\xe9"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsque le chargement de la zone 4D View Pro est termin\xe9."}),"\n",(0,o.jsxs)(n.p,{children:["Vous devez utiliser cet \xe9v\xe9nement pour \xe9crire le code d'initialisation de la zone. Tout code d'initialisation de zone 4D View Pro, pour le chargement ou la lecture de valeurs issues de la zone ou contenues dans la zone, doit se trouver dans l'\xe9v\xe9nement formulaire ",(0,o.jsx)(n.code,{children:"On VP Ready"})," de la zone. Cet \xe9v\xe9nement formulaire est d\xe9clench\xe9 une fois le chargement de la zone termin\xe9. Tester cet \xe9v\xe9nement vous garantit que le code sera ex\xe9cut\xe9 dans un contexte valide. Une erreur est retourn\xe9e si une commande 4D View Pro est appel\xe9e avant la g\xe9n\xe9ration de l'\xe9v\xe9nement formulaire ",(0,o.jsx)(n.code,{children:"On VP Ready"}),"."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Les zones 4D View Pro sont charg\xe9es de mani\xe8re asynchrone dans les formulaires 4D. Cela signifie que l'\xe9v\xe9nement standard ",(0,o.jsx)(n.a,{href:"/docs/fr/Events/onLoad",children:"On load"})," form ne peut pas \xeatre utilis\xe9 pour le code d'initialisation de 4D View Pro, car il pourrait \xeatre ex\xe9cut\xe9 avant la fin du chargement de la zone. ",(0,o.jsx)(n.code,{children:"On VP Ready"})," est toujours g\xe9n\xe9r\xe9 apr\xe8s ",(0,o.jsx)(n.a,{href:"/docs/fr/Events/onLoad",children:"On load"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return s}});var r=t(667294);let o={},i=r.createContext(o);function s(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);