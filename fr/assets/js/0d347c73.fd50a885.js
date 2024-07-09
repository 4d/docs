/*! For license information please see 0d347c73.fd50a885.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20822],{23828:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>o});var r=t(474848),l=t(28453);const s={id:"onVpRangeChanged",title:"On VP Range Changed"},d=void 0,i={id:"Events/onVpRangeChanged",title:"On VP Range Changed",description:"| Code | Peut \xeatre appel\xe9 par                                    | D\xe9finition                                                                                                      |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onVpRangeChanged.md",sourceDirName:"Events",slug:"/Events/onVpRangeChanged",permalink:"/docs/fr/20/Events/onVpRangeChanged",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpRangeChanged.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onVpRangeChanged",title:"On VP Range Changed"},sidebar:"docs",previous:{title:"Sur validation",permalink:"/docs/fr/20/Events/onValidate"},next:{title:"On VP Ready",permalink:"/docs/fr/20/Events/onVpReady"}},c={},o=[{value:"Description",id:"Description",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Peut \xeatre appel\xe9 par"}),(0,r.jsx)(n.th,{children:"D\xe9finition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"61"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/fr/20/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})}),(0,r.jsx)(n.td,{children:"La plage de cellules 4D View Pro a chang\xe9 (ex : un calcul de formule, une valeur supprim\xe9e d'une cellule, etc.)"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"Cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 lorsqu'un changement intervient dans une plage de cellules dans le document 4D View Pro."}),"\n",(0,r.jsx)(n.p,{children:"L'objet retourn\xe9 par la commande FORM Event contient :"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propri\xe9t\xe9"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la zone 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"entier long"}),(0,r.jsx)(n.td,{children:"On VP Range Changed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On VP Range Changed"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nom de la feuille de l'\xe9v\xe9nement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage de cellules li\xe9es au changement"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"changedCells"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Plage contenant uniquement les cellules modifi\xe9es. Il peut s'agir d'une gamme combin\xe9e."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"action"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["Le type d'op\xe9ration g\xe9n\xe9rant l'\xe9v\xe9nement :",(0,r.jsx)(n.li,{children:'"clear" - effacement de la valeur de la plage'}),(0,r.jsx)(n.li,{children:'"dragDrop" - glisser-d\xe9poser'}),(0,r.jsx)(n.li,{children:'"dragFill" - remplissage par glisser'}),(0,r.jsx)(n.li,{children:'"evaluateFormula" - \xe9valuation d\'une formule dans une plage de cellules sp\xe9cifi\xe9e'}),(0,r.jsx)(n.li,{children:'"paste" - coller'}),(0,r.jsx)(n.li,{children:'"setArrayFormula" - D\xe9finition d\'une formule dans une plage de cellules sp\xe9cifi\xe9e'}),(0,r.jsx)(n.li,{children:'"sort" - Tri d\'une plage de cellules'})]})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Voir \xe9galement ",(0,r.jsx)(n.a,{href:"/docs/fr/20/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),l=Symbol.for("react.element"),s=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function o(e,n,t){var r,s={},o=null,a=null;for(r in void 0!==t&&(o=""+t),void 0!==n.key&&(o=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:l,type:e,key:o,ref:a,props:s,_owner:i.current}}n.Fragment=s,n.jsx=o,n.jsxs=o},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const l={},s=r.createContext(l);function d(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);