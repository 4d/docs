/*! For license information please see bcab7695.eb47d82a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12186],{389125:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=o(474848),t=o(28453);const s={id:"onLoad",title:"On Load"},i=void 0,c={id:"Events/onLoad",title:"On Load",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | D\xe9finition                                               |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onLoad.md",sourceDirName:"Events",slug:"/Events/onLoad",permalink:"/docs/fr/20/Events/onLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLoad.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onLoad",title:"On Load"},sidebar:"docs",previous:{title:"On Header Click",permalink:"/docs/fr/20/Events/onHeaderClick"},next:{title:"Sur chargement ligne",permalink:"/docs/fr/20/Events/onLoadRecord"}},d={},l=[{value:"Description",id:"Description",level:2},{value:"Sous-formulaire",id:"Sous-formulaire",level:3},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,n.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"1"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,n.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/dropdownListOverview",children:"Liste d\xe9roulante"})," - Formulaire - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/inputOverview",children:"Zone de saisie"})," -",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/listboxOverview#list-box-columns",children:"Colonne de List Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/pluginAreaOverview#overview",children:"Zone de plug-in"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/radiobuttonOverview",children:"Bouton radio"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/ruler",children:"R\xe8gle"})," -",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/subformOverview",children:"Sous-formulaire"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/tabControl",children:"Onglet"})," - ",(0,n.jsx)(r.a,{href:"/docs/fr/20/FormObjects/webAreaOverview",children:"Zone Web"})]}),(0,n.jsx)(r.td,{children:"Le formulaire est sur le point d'\xeatre affich\xe9 ou imprim\xe9"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"Cet \xe9v\xe9nement est d\xe9clench\xe9 lorsque le formulaire est en cours de chargement ou d'impression."}),"\n",(0,n.jsxs)(r.p,{children:["Tous les objets du formulaire (de n'importe quelle page) dont la propri\xe9t\xe9 d'\xe9v\xe9nement ",(0,n.jsx)(r.code,{children:"On Load"})," est s\xe9lectionn\xe9e verront leur m\xe9thode objet appel\xe9e. Ensuite, si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire ",(0,n.jsx)(r.code,{children:"On Load"})," est s\xe9lectionn\xe9e, la m\xe9thode formulaire sera appel\xe9e."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Les \xe9v\xe9nements ",(0,n.jsx)(r.code,{children:"On Load"})," et ",(0,n.jsx)(r.a,{href:"/docs/fr/20/Events/onUnload",children:(0,n.jsx)(r.code,{children:"On Unload"})})," sont g\xe9n\xe9r\xe9s pour les objets s'ils sont activ\xe9s \xe0 la fois pour les objets et pour le formulaire auquel appartiennent les objets. Si les \xe9v\xe9nements sont activ\xe9s pour les objets uniquement, ils ne se produiront pas; ces deux \xe9v\xe9nements doivent \xe9galement \xeatre activ\xe9s au niveau du formulaire."]}),"\n"]}),"\n",(0,n.jsx)(r.h3,{id:"Sous-formulaire",children:"Sous-formulaire"}),"\n",(0,n.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,n.jsx)(r.code,{children:"On Load"})," est g\xe9n\xe9r\xe9 \xe0 l'ouverture du sous-formulaire (cet \xe9v\xe9nement doit \xe9galement avoir \xe9t\xe9 activ\xe9 au niveau du formulaire parent pour \xeatre pris en compte). L'\xe9v\xe9nement est g\xe9n\xe9r\xe9 avant ceux du formulaire parent. A noter \xe9galement que, conform\xe9ment aux principes de fonctionnement des \xe9v\xe9nements de formulaire, si le sous-formulaire est plac\xe9 sur une page autre que la page 0 ou 1, cet \xe9v\xe9nement ne sera g\xe9n\xe9r\xe9 que lorsque cette page sera affich\xe9e (et non lorsque le formulaire sera affich\xe9)."]}),"\n",(0,n.jsx)(r.h3,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/fr/20/Events/onUnload",children:(0,n.jsx)(r.code,{children:"On Unload"})})})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},221020:(e,r,o)=>{var n=o(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,o){var n,s={},l=null,a=null;for(n in void 0!==o&&(l=""+o),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,n)&&!d.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:t,type:e,key:l,ref:a,props:s,_owner:c.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,o)=>{e.exports=o(221020)},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>c});var n=o(296540);const t={},s=n.createContext(t);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);