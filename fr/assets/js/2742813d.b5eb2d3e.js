"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14840],{216355:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>a,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var s=o(474848),t=o(28453);const n={id:"onLosingFocus",title:"Sur perte focus"},i=void 0,c={id:"Events/onLosingFocus",title:"Sur perte focus",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             | D\xe9finition                        |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-19/Events/onLosingFocus.md",sourceDirName:"Events",slug:"/Events/onLosingFocus",permalink:"/docs/fr/19/Events/onLosingFocus",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLosingFocus.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onLosingFocus",title:"Sur perte focus"},sidebar:"docs",previous:{title:"On Long Click",permalink:"/docs/fr/19/Events/onLongClick"},next:{title:"Sur menu s\xe9lectionn\xe9",permalink:"/docs/fr/19/Events/onMenuSelected"}},d={},l=[{value:"Description",id:"description",level:2}];function u(e){const r={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Code"}),(0,s.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,s.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"14"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,s.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - Formulaire - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/inputOverview",children:"Zone de saisie"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/listboxOverview#list-box-columns",children:"Colonne de List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/pluginAreaOverview#overview",children:"Zone de Plug-in"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/progressIndicator",children:"Indicateur de progression"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/radiobuttonOverview",children:"Bouton Radio"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/ruler",children:"R\xe8gle"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/subformOverview",children:"Sous-formulaire"})," - ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/webAreaOverview",children:"Zone Web"})]}),(0,s.jsx)(r.td,{children:"Un objet formulaire perd le focus"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:["Les \xe9v\xe9nements ",(0,s.jsx)(r.code,{children:"On Losing Focus"})," et ",(0,s.jsx)(r.a,{href:"/docs/fr/19/Events/onGettingFocus",children:(0,s.jsx)(r.code,{children:"On Getting Focus"})})," permettent de d\xe9tecter et de g\xe9rer le changement de focus pour les objets ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/propertiesEntry#focusable",children:"focalisables"}),"."]}),"\n",(0,s.jsxs)(r.p,{children:["Avec les ",(0,s.jsx)(r.a,{href:"/docs/fr/19/FormObjects/subformOverview",children:"objets sous-formulaire"}),", cet \xe9v\xe9nement est g\xe9n\xe9r\xe9 dans la m\xe9thode de l'objet sous-formulaire lorsqu'il est v\xe9rifi\xe9. Il est envoy\xe9 \xe0 la m\xe9thode formulaire du sous-formulaire, ce qui signifie, par exemple, que vous pouvez g\xe9rer l'affichage des boutons de navigation dans le sous-formulaire en fonction du focus. A noter que les objets de sous-formulaire peuvent eux-m\xeames avoir le focus."]})]})}function a(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>c});var s=o(296540);const t={},n=s.createContext(t);function i(e){const r=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);