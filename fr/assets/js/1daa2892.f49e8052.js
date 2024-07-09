/*! For license information please see 1daa2892.f49e8052.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21853],{303349:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=t(474848),i=t(28453);const s={id:"onSelectionChange",title:"On Selection Change"},o=void 0,l={id:"Events/onSelectionChange",title:"On Selection Change",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                  | D\xe9finition                                   |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Events/onSelectionChange.md",sourceDirName:"Events",slug:"/Events/onSelectionChange",permalink:"/docs/fr/Events/onSelectionChange",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonSelectionChange.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onSelectionChange",title:"On Selection Change"},sidebar:"docs",previous:{title:"On Scroll",permalink:"/docs/fr/Events/onScroll"},next:{title:"Sur minuteur",permalink:"/docs/fr/Events/onTimer"}},c={},d=[{value:"Description",id:"Description",level:2},{value:"4D View Pro",id:"4D-View-Pro",level:3},{value:"Exemple",id:"Exemple",level:4},{value:"Formulaire liste",id:"Formulaire-liste",level:3},{value:"Liste hi\xe9rarchique",id:"Liste-hi\xe9rarchique",level:3},{value:"Zone de saisie et 4D Write Pro",id:"Zone-de-saisie-et-4D-Write-Pro",level:3},{value:"List box",id:"List-box",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"31"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/fr/FormObjects/viewProAreaOverview",children:"4D View Pro area"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - Form - ",(0,r.jsx)(n.a,{href:"/docs/fr/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Input"})," - ",(0,r.jsx)(n.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})]}),(0,r.jsx)(n.td,{children:"La s\xe9lection faite dans l'objet est modifi\xe9e"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Cet \xe9v\xe9nement peut \xeatre g\xe9n\xe9r\xe9 dans diff\xe9rents contextes."}),"\n",(0,r.jsx)(n.h3,{id:"4D-View-Pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["La s\xe9lection courante de lignes ou de colonnes est modifi\xe9e. Dans ce contexte, l'",(0,r.jsx)(n.a,{href:"/docs/fr/Events/overview#event-object",children:"objet \xe9v\xe9nement"})," retourn\xe9 par la commande ",(0,r.jsx)(n.code,{children:"FORM Event"})," contient :"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"entier long"}),(0,r.jsx)(n.td,{children:"31"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Selection Change"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oldSelections"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage de cellules avant changement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"newSelections"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage de cellules apr\xe8s changement"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"Exemple",children:"Exemple"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Selection Change)\n    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))\n    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))\n End if\n'})}),"\n",(0,r.jsx)(n.h3,{id:"Formulaire-liste",children:"Formulaire liste"}),"\n",(0,r.jsx)(n.p,{children:"L'enregistrement courant ou la s\xe9lection courante de lignes est modifi\xe9(e) sous dans un formulaire liste."}),"\n",(0,r.jsx)(n.h3,{id:"Liste-hi\xe9rarchique",children:"Liste hi\xe9rarchique"}),"\n",(0,r.jsx)(n.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 \xe0 chaque fois que la s\xe9lection faite dans la liste hi\xe9rarchique est modifi\xe9e apr\xe8s un clic de souris ou une frappe."}),"\n",(0,r.jsx)(n.h3,{id:"Zone-de-saisie-et-4D-Write-Pro",children:"Zone de saisie et 4D Write Pro"}),"\n",(0,r.jsx)(n.p,{children:"La s\xe9lection de texte ou la position du curseur dans la zone est modifi\xe9e suite \xe0 un clic ou une frappe."}),"\n",(0,r.jsx)(n.h3,{id:"List-box",children:"List box"}),"\n",(0,r.jsx)(n.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 chaque fois que la s\xe9lection courante de lignes ou de colonnes de la list box est modifi\xe9e."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,s={},d=null,a=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:a,props:s,_owner:l.current}}n.Fragment=s,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>l});var r=t(296540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);