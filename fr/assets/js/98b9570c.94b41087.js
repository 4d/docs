"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18981"],{51421:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>o,contentTitle:()=>s});var r=JSON.parse('{"id":"Events/onVpRangeChanged","title":"On VP Range Changed","description":"| Code | Peut \xeatre appel\xe9 par                                    | D\xe9finition                                                                                                                                                         |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/Events/onVpRangeChanged.md","sourceDirName":"Events","slug":"/Events/onVpRangeChanged","permalink":"/docs/fr/Events/onVpRangeChanged","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpRangeChanged.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onVpRangeChanged","title":"On VP Range Changed"},"sidebar":"docs","previous":{"title":"On Validate","permalink":"/docs/fr/Events/onValidate"},"next":{"title":"On VP Ready","permalink":"/docs/fr/Events/onVpReady"}}'),d=t("785893"),l=t("250065");let i={id:"onVpRangeChanged",title:"On VP Range Changed"},s=void 0,c={},o=[{value:"Description",id:"description",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Code"}),(0,d.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,d.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"61"}),(0,d.jsx)(n.td,{children:(0,d.jsx)(n.a,{href:"/docs/fr/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})}),(0,d.jsx)(n.td,{children:"La plage de cellules 4D View Pro a chang\xe9 (ex : un calcul de formule, une valeur supprim\xe9e d'une cellule, etc.)"})]})})]}),"\n",(0,d.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,d.jsx)(n.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsqu'un changement intervient dans une plage de cellules dans le document 4D View Pro."}),"\n",(0,d.jsx)(n.p,{children:"L'objet retourn\xe9 par la commande FORM Event contient :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objectName"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"code"}),(0,d.jsx)(n.td,{children:"entier long"}),(0,d.jsx)(n.td,{children:"On VP Range Changed"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Description"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:'"On VP Range Changed"'})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"sheetName"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"range"}),(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"Plage de cellules li\xe9es au changement"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"changedCells"}),(0,d.jsx)(n.td,{children:"object"}),(0,d.jsx)(n.td,{children:"Plage contenant uniquement les cellules modifi\xe9es. Il peut s'agir d'une gamme combin\xe9e."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"action"}),(0,d.jsx)(n.td,{children:"text"}),(0,d.jsxs)(n.td,{children:["Le type d'op\xe9ration g\xe9n\xe9rant l'\xe9v\xe9nement :",(0,d.jsx)(n.li,{children:'"clear" - Une op\xe9ration de suppression de plage'}),(0,d.jsx)(n.li,{children:'"dragDrop" - Une op\xe9ration de glisser-d\xe9poser'}),(0,d.jsx)(n.li,{children:'"dragFill" - Une op\xe9ration de remplissage par glisser'}),(0,d.jsx)(n.li,{children:'"evaluateFormula" - D\xe9finir une formule dans une plage de cellules sp\xe9cifi\xe9e'}),(0,d.jsx)(n.li,{children:'"paste" - Une op\xe9ration de coller'}),(0,d.jsx)(n.li,{children:'"setArrayFormula" - D\xe9finir une formule dans une plage de cellules'}),(0,d.jsx)(n.li,{children:'"sort" - Tri d\'une plage de cellules'})]})]})]})]}),"\n",(0,d.jsxs)(n.blockquote,{children:["\n",(0,d.jsxs)(n.p,{children:["Voir \xe9galement ",(0,d.jsx)(n.a,{href:"/docs/fr/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return i}});var r=t(667294);let d={},l=r.createContext(d);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);