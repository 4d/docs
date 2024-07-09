/*! For license information please see 7b65f008.660d4447.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10218],{216205:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var t=n(474848),o=n(28453);const s={id:"onDrop",title:"On Drop"},i=void 0,d={id:"Events/onDrop",title:"On Drop",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | D\xe9finition                                |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R4/Events/onDrop.md",sourceDirName:"Events",slug:"/Events/onDrop",permalink:"/docs/fr/20-R4/Events/onDrop",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDrop.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"onDrop",title:"On Drop"},sidebar:"docs",previous:{title:"On Drag Over",permalink:"/docs/fr/20-R4/Events/onDragOver"},next:{title:"On End URL Loading",permalink:"/docs/fr/20-R4/Events/onEndUrlLoading"}},c={},l=[{value:"Description",id:"Description",level:2},{value:"Voir \xe9galement",id:"Voir-\xe9galement",level:4}];function a(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Code"}),(0,t.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,t.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"16"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D WritePro"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/dropdownListOverview",children:"Liste d\xe9roulante"})," - Formulaire - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/inputOverview",children:"Zone de saisie"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/listboxOverview#list-box-columns",children:"Colonne List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/pluginAreaOverview#overview",children:"Zone de plug-in"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/radiobuttonOverview",children:"Bouton radio"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/ruler",children:"R\xe8gle"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/FormObjects/tabControl",children:"Onglet"})]}),(0,t.jsx)(r.td,{children:"Les donn\xe9es ont \xe9t\xe9 d\xe9pos\xe9es sur un objet"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,t.jsx)(r.code,{children:"On Drop"})," est envoy\xe9 une fois \xe0 l'objet de destination lorsque le pointeur de la souris est rel\xe2ch\xe9 sur l'objet. Cet \xe9v\xe9nement est la deuxi\xe8me phase de l'op\xe9ration de glisser-d\xe9poser, o\xf9 l'op\xe9ration que vous r\xe9alisez est en r\xe9ponse \xe0 l'action de l'utilisateur."]}),"\n",(0,t.jsxs)(r.p,{children:["Cet \xe9v\xe9nement n'est pas envoy\xe9 \xe0 l'objet si le glissement n'a pas \xe9t\xe9 accept\xe9 lors des \xe9v\xe9nements ",(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/Events/onDragOver",children:(0,t.jsx)(r.code,{children:"On Drag Over"})}),". Si vous traitez l'\xe9v\xe9nement ",(0,t.jsx)(r.code,{children:"On Drag Over"})," pour un objet et rejetez un glissement, l'\xe9v\xe9nement ",(0,t.jsx)(r.code,{children:"On Drop"})," ne se produit pas. Ainsi, si lors de l'\xe9v\xe9nement ",(0,t.jsx)(r.code,{children:"On Drag Over"})," vous avez test\xe9 la compatibilit\xe9 des types de donn\xe9es entre les objets source et destination, et si vous avez accept\xe9 un \xe9ventuel d\xe9p\xf4t, vous n'avez pas besoin de re-tester les donn\xe9es pendant l'\xe9v\xe9nement ",(0,t.jsx)(r.code,{children:"On Drop"}),". Vous savez d\xe9j\xe0 que les donn\xe9es sont adapt\xe9es \xe0 l'objet de destination."]}),"\n",(0,t.jsx)(r.h4,{id:"Voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/20-R4/Events/onBeginDragOver",children:(0,t.jsx)(r.code,{children:"On Begin Drag Over"})})})]})}function p(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,a=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:a,props:s,_owner:d.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>d});var t=n(296540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);