/*! For license information please see bac37023.b0cb8279.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49750],{720758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=t(474848),i=t(28453);const d={id:"onVpRangeChanged",title:"On VP Range Changed"},s=void 0,l={id:"Events/onVpRangeChanged",title:"On VP Range Changed",description:"| Code | Peut \xeatre appel\xe9 par                                    | D\xe9finition                                                                                                                                                         |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Events/onVpRangeChanged.md",sourceDirName:"Events",slug:"/Events/onVpRangeChanged",permalink:"/docs/fr/20-R5/Events/onVpRangeChanged",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpRangeChanged.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onVpRangeChanged",title:"On VP Range Changed"},sidebar:"docs",previous:{title:"Sur validation",permalink:"/docs/fr/20-R5/Events/onValidate"},next:{title:"On VP Ready",permalink:"/docs/fr/20-R5/Events/onVpReady"}},o={},c=[{value:"Description",id:"description",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"61"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})}),(0,r.jsx)(n.td,{children:"La plage de cellules 4D View Pro a chang\xe9 (ex : un calcul de formule, une valeur supprim\xe9e d'une cellule, etc.)"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsqu'un changement intervient dans une plage de cellules dans le document 4D View Pro."}),"\n",(0,r.jsx)(n.p,{children:"L'objet retourn\xe9 par la commande FORM Event contient :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"entier long"}),(0,r.jsx)(n.td,{children:"On VP Range Changed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On VP Range Changed"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage de cellules li\xe9es au changement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"changedCells"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage contenant uniquement les cellules modifi\xe9es. Il peut s'agir d'une gamme combin\xe9e."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"action"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["The type of operation generating the event:",(0,r.jsx)(n.li,{children:'"clear" - A clear range value operation'}),(0,r.jsx)(n.li,{children:'"dragDrop" - A drag and drop operation'}),(0,r.jsx)(n.li,{children:'"dragFill" - A drag fill operation'}),(0,r.jsx)(n.li,{children:'"evaluateFormula" - Setting a formula in a specified cell range'}),(0,r.jsx)(n.li,{children:'"paste" - A paste operation'}),(0,r.jsx)(n.li,{children:'"setArrayFormula" - Setting a formula in a specified cell range'}),(0,r.jsx)(n.li,{children:'"sort" - Sorting a range of cells'})]})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Voir \xe9galement ",(0,r.jsx)(n.a,{href:"/docs/fr/20-R5/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,d={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,r)&&!o.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:a,props:d,_owner:l.current}}n.Fragment=d,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(296540);const i={},d=r.createContext(i);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);