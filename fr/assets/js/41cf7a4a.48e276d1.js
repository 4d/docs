"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["21084"],{205715:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>c,contentTitle:()=>o});var i=JSON.parse('{"id":"Events/onSelectionChange","title":"On Selection Change","description":"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                         | D\xe9finition                             |","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R8/Events/onSelectionChange.md","sourceDirName":"Events","slug":"/Events/onSelectionChange","permalink":"/docs/fr/20-R8/Events/onSelectionChange","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonSelectionChange.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onSelectionChange","title":"On Selection Change"},"sidebar":"docs","previous":{"title":"On Scroll","permalink":"/docs/fr/20-R8/Events/onScroll"},"next":{"title":"On Timer","permalink":"/docs/fr/20-R8/Events/onTimer"}}'),r=t("785893"),s=t("250065");let l={id:"onSelectionChange",title:"On Selection Change"},o=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Exemple",id:"exemple",level:4},{value:"Formulaire liste",id:"formulaire-liste",level:3},{value:"Liste hi\xe9rarchique",id:"liste-hi\xe9rarchique",level:3},{value:"Zone de saisie et 4D Write Pro",id:"zone-de-saisie-et-4d-write-pro",level:3},{value:"List box",id:"list-box",level:3}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"31"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/FormObjects/writeProAreaOverview",children:"Zone 4D Write Pro"})," - Formulaire - ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/FormObjects/listOverview",children:"Liste Hi\xe9rarchique"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/FormObjects/inputOverview",children:"Input"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/FormObjects/listboxOverview",children:"List Box"})]}),(0,r.jsx)(n.td,{children:"La s\xe9lection dans l'objet est modifi\xe9e"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Cet \xe9v\xe9nement peut \xeatre g\xe9n\xe9r\xe9 dans diff\xe9rents contextes."}),"\n",(0,r.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["La s\xe9lection courante de lignes ou de colonnes est modifi\xe9e. Dans ce contexte, l'",(0,r.jsx)(n.a,{href:"/docs/fr/20-R8/Events/overview#event-object",children:"objet \xe9v\xe9nement"})," retourn\xe9 par la commande ",(0,r.jsx)(n.code,{children:"FORM Event"})," contient :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"entier long"}),(0,r.jsx)(n.td,{children:"31"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Selection Change"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oldSelections"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage de cellules avant changement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"newSelections"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage de cellules apr\xe8s changement"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Selection Change)\n    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))\n    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))\n End if\n'})}),"\n",(0,r.jsx)(n.h3,{id:"formulaire-liste",children:"Formulaire liste"}),"\n",(0,r.jsx)(n.p,{children:"L'enregistrement courant ou la s\xe9lection courante de lignes est modifi\xe9(e) sous dans un formulaire liste."}),"\n",(0,r.jsx)(n.h3,{id:"liste-hi\xe9rarchique",children:"Liste hi\xe9rarchique"}),"\n",(0,r.jsx)(n.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 \xe0 chaque fois que la s\xe9lection faite dans la liste hi\xe9rarchique est modifi\xe9e apr\xe8s un clic de souris ou une frappe."}),"\n",(0,r.jsx)(n.h3,{id:"zone-de-saisie-et-4d-write-pro",children:"Zone de saisie et 4D Write Pro"}),"\n",(0,r.jsx)(n.p,{children:"La s\xe9lection de texte ou la position du curseur dans la zone est modifi\xe9e suite \xe0 un clic ou une frappe."}),"\n",(0,r.jsx)(n.h3,{id:"list-box",children:"List box"}),"\n",(0,r.jsx)(n.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 chaque fois que la s\xe9lection courante de lignes ou de colonnes de la list box est modifi\xe9e."})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var i=t(667294);let r={},s=i.createContext(r);function l(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);