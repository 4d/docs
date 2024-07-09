/*! For license information please see db003710.3477408f.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63588],{395659:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var o=t(474848),n=t(28453);const s={id:"onValidate",title:"Sur validation"},i=void 0,d={id:"Events/onValidate",title:"Sur validation",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | D\xe9finition                                           |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onValidate.md",sourceDirName:"Events",slug:"/Events/onValidate",permalink:"/docs/fr/20/Events/onValidate",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonValidate.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onValidate",title:"Sur validation"},sidebar:"docs",previous:{title:"On URL Resource Loading",permalink:"/docs/fr/20/Events/onUrlResourceLoading"},next:{title:"On VP Range Changed",permalink:"/docs/fr/20/Events/onVpRangeChanged"}},c={},a=[{value:"Description",id:"Description",level:2},{value:"Sous-formulaire",id:"Sous-formulaire",level:3}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,o.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"3"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/dropdownListOverview",children:"Liste d\xe9roulante"})," - Formulaire - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/inputOverview",children:"Zone de saisie"})," -",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"Colonne de List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/pluginAreaOverview#overview",children:"Zone de plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/radiobuttonOverview",children:"Bouton radio"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/ruler",children:"R\xe8gle"})," -",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/subformOverview",children:"Sous-formulaire"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/tabControl",children:"Onglet"})]}),(0,o.jsx)(r.td,{children:"La saisie des donn\xe9es d'enregistrement a \xe9t\xe9 valid\xe9e"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,o.jsxs)(r.p,{children:["Cet \xe9v\xe9nement est d\xe9clench\xe9 lorsque la saisie des donn\xe9es d'enregistrement a \xe9t\xe9 valid\xe9e, par exemple apr\xe8s un appel de la commande ",(0,o.jsx)(r.code,{children:"SAVE RECORD"})," ou apr\xe8s une ",(0,o.jsx)(r.a,{href:"/docs/fr/20/FormObjects/propertiesAction#standard-action",children:"action standard"})," ",(0,o.jsx)(r.code,{children:"accept"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"Sous-formulaire",children:"Sous-formulaire"}),"\n",(0,o.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,o.jsx)(r.code,{children:"On Validate"})," est d\xe9clench\xe9 lorsque la saisie de donn\xe9es est valid\xe9e dans le sous-formulaire."]})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var o=t(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var o,s={},a=null,l=null;for(o in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,o)&&!c.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:n,type:e,key:a,ref:l,props:s,_owner:d.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>d});var o=t(296540);const n={},s=o.createContext(n);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);