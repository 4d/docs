"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94673],{224369:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var o=n(474848),t=n(28453);const s={id:"onUnload",title:"On Unload"},i=void 0,l={id:"Events/onUnload",title:"On Unload",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | D\xe9finition                                             |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Events/onUnload.md",sourceDirName:"Events",slug:"/Events/onUnload",permalink:"/docs/fr/20-R6/Events/onUnload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonUnload.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onUnload",title:"On Unload"},sidebar:"docs",previous:{title:"Sur minuteur",permalink:"/docs/fr/20-R6/Events/onTimer"},next:{title:"On URL Filtering",permalink:"/docs/fr/20-R6/Events/onUrlFiltering"}},c={},d=[{value:"Description",id:"description",level:2},{value:"Sous-formulaire",id:"sous-formulaire",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,o.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"24"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/viewProAreaOverview",children:"Zone 4D View Pro"})," - ",(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"Zone 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/buttonOverview",children:"Bouton"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/buttonGridOverview",children:"Grille de boutons"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/checkboxOverview",children:"Case \xe0 cocher"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/listOverview#overview",children:"Liste hi\xe9rarchique"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/listboxOverview#list-box-columns",children:"Colonne de list box"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/pictureButtonOverview",children:"Bouton image"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/pluginAreaOverview#overview",children:"Zone de Plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/subformOverview",children:"Sous-formulaire"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/tabControl",children:"Onglet"})," - ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/FormObjects/webAreaOverview",children:"Zone Web"})]}),(0,o.jsx)(r.td,{children:"Le formulaire est sur le point d'\xeatre quitt\xe9 et g\xe9n\xe9r\xe9"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(r.p,{children:"Cet \xe9v\xe9nement est d\xe9clench\xe9 lorsque le formulaire est g\xe9n\xe9r\xe9."}),"\n",(0,o.jsxs)(r.p,{children:["Tous les objets du formulaire (de n'importe quelle page) dont la propri\xe9t\xe9 d'\xe9v\xe9nement ",(0,o.jsx)(r.code,{children:"On Unload"})," est s\xe9lectionn\xe9e verront leur m\xe9thode objet appel\xe9e.\nEnsuite, si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire ",(0,o.jsx)(r.code,{children:"On Unload"})," est s\xe9lectionn\xe9e, la m\xe9thode formulaire sera appel\xe9e."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Les \xe9v\xe9nements ",(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/Events/onLoad",children:(0,o.jsx)(r.code,{children:"On Load"})})," et [",(0,o.jsx)(r.code,{children:"On Unload"}),"] sont g\xe9n\xe9r\xe9s pour les objets s'ils sont activ\xe9s tant pour les objets que pour le formulaire auquels ils appartiennent. Si les \xe9v\xe9nements sont activ\xe9s pour les objets uniquement, ils ne se produiront pas; ces deux \xe9v\xe9nements doivent \xe9galement \xeatre activ\xe9s au niveau du formulaire."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"sous-formulaire",children:"Sous-formulaire"}),"\n",(0,o.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,o.jsx)(r.code,{children:"On Unload"})," est g\xe9n\xe9r\xe9 \xe0 la fermeture du sous-formulaire (cet \xe9v\xe9nement doit \xe9galement avoir \xe9t\xe9 activ\xe9 au niveau du formulaire parent pour \xeatre pris en compte). L'\xe9v\xe9nement est g\xe9n\xe9r\xe9 avant ceux du formulaire parent. Notez \xe9galement que, conform\xe9ment aux principes de fonctionnement des \xe9v\xe9nements de formulaire, si le sous-formulaire est plac\xe9 sur une page autre que la page 0 ou 1, cet \xe9v\xe9nement ne sera g\xe9n\xe9r\xe9 que lorsque cette page sera ferm\xe9e (et non lorsque le formulaire sera ferm\xe9)."]}),"\n",(0,o.jsx)(r.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/fr/20-R6/Events/onLoad",children:(0,o.jsx)(r.code,{children:"On Load"})})})]})}function u(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>l});var o=n(296540);const t={},s=o.createContext(t);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);