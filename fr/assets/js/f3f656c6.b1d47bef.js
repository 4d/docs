/*! For license information please see f3f656c6.b1d47bef.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[85488],{169603:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var i=t(474848),s=t(28453);const n={id:"propertiesHierarchy",title:"Hi\xe9rarchie"},o=void 0,c={id:"FormObjects/propertiesHierarchy",title:"Hi\xe9rarchie",description:"List box hi\xe9rarchique",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/FormObjects/properties_Hierarchy.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesHierarchy",permalink:"/docs/fr/18/FormObjects/propertiesHierarchy",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Hierarchy.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"propertiesHierarchy",title:"Hi\xe9rarchie"},sidebar:"docs",previous:{title:"Aide",permalink:"/docs/fr/18/FormObjects/propertiesHelp"},next:{title:"List Box",permalink:"/docs/fr/18/FormObjects/propertiesListBox"}},a={},l=[{value:"List box hi\xe9rarchique",id:"list-box-hi\xe9rarchique",level:2},{value:"Grammaire JSON",id:"grammaire-json",level:4},{value:"Objets pris en charge",id:"objets-pris-en-charge",level:4}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.h2,{id:"list-box-hi\xe9rarchique",children:"List box hi\xe9rarchique"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.code,{children:"List box de type tableau"})}),"\n",(0,i.jsxs)(r.p,{children:["Cette propri\xe9t\xe9 permet de d\xe9finir que la list box doit \xeatre affich\xe9e sous forme hi\xe9rarchique. Dans le formulaire JSON, cette fonctionnalit\xe9 est d\xe9clench\xe9e ",(0,i.jsxs)(r.a,{href:"/docs/fr/18/FormObjects/propertiesObject#array-list-box",children:["lorsque la valeur de la propri\xe9t\xe9 ",(0,i.jsx)(r.em,{children:"dataSource"})," de la colonne est un tableau"]}),", c'est-\xe0-dire une collection."]}),"\n",(0,i.jsxs)(r.p,{children:["Des options suppl\xe9mentaires (",(0,i.jsx)(r.strong,{children:"Variable 1...10"}),") sont disponibles lorsqu'une ",(0,i.jsx)(r.em,{children:"List box hi\xe9rarchique"})," est d\xe9finie, correspondant \xe0 chaque \xe9l\xe9ment du tableau ",(0,i.jsx)(r.em,{children:"dataSource"})," \xe0 utiliser comme colonne de rupture. A chaque saisie d\u2019une valeur dans un champ, une nouvelle ligne est ajout\xe9e. Jusqu\u2019\xe0 10 variables peuvent \xeatre d\xe9finies. Ces variables d\xe9finissent les niveaux hi\xe9rarchiques \xe0 afficher dans la premi\xe8re colonne."]}),"\n",(0,i.jsxs)(r.p,{children:["Voir ",(0,i.jsx)(r.a,{href:"/docs/fr/18/FormObjects/listboxOverview#hierarchical-list-boxes",children:"List box hi\xe9rarchiques"})]}),"\n",(0,i.jsx)(r.h4,{id:"grammaire-json",children:"Grammaire JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Nom"}),(0,i.jsx)(r.th,{children:"Type de donn\xe9es"}),(0,i.jsx)(r.th,{children:"Valeurs possibles"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"datasource"}),(0,i.jsx)(r.td,{children:"tableau cha\xeene"}),(0,i.jsx)(r.td,{children:"Collection de noms de tableaux d\xe9finissant la hi\xe9rarchie"})]})})]}),"\n",(0,i.jsx)(r.h4,{id:"objets-pris-en-charge",children:"Objets pris en charge"}),"\n",(0,i.jsx)(r.p,{children:(0,i.jsx)(r.a,{href:"/docs/fr/18/FormObjects/listboxOverview",children:"List Box"})})]})}function h(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,r,t)=>{var i=t(296540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var i,n={},l=null,d=null;for(i in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)o.call(r,i)&&!a.hasOwnProperty(i)&&(n[i]=r[i]);if(e&&e.defaultProps)for(i in r=e.defaultProps)void 0===n[i]&&(n[i]=r[i]);return{$$typeof:s,type:e,key:l,ref:d,props:n,_owner:c.current}}r.Fragment=n,r.jsx=l,r.jsxs=l},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>o,x:()=>c});var i=t(296540);const s={},n=i.createContext(s);function o(e){const r=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:r},e.children)}}}]);