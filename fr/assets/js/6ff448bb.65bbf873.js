/*! For license information please see 6ff448bb.65bbf873.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94673],{224369:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(474848),o=n(28453);const s={id:"onUnload",title:"On Unload"},i=void 0,c={id:"Events/onUnload",title:"On Unload",description:"| Code | Peut \xeatre appel\xe9 par                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | D\xe9finition                                             |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/Events/onUnload.md",sourceDirName:"Events",slug:"/Events/onUnload",permalink:"/docs/fr/Events/onUnload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonUnload.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onUnload",title:"On Unload"},sidebar:"docs",previous:{title:"Sur minuteur",permalink:"/docs/fr/Events/onTimer"},next:{title:"On URL Filtering",permalink:"/docs/fr/Events/onUrlFiltering"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Sous-formulaire",id:"sous-formulaire",level:3},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Code"}),(0,t.jsx)(r.th,{children:"Peut \xeatre appel\xe9 par"}),(0,t.jsx)(r.th,{children:"D\xe9finition"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"24"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/tabControl",children:"Tab control"})," - ",(0,t.jsx)(r.a,{href:"/docs/fr/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,t.jsx)(r.td,{children:"Le formulaire est sur le point d'\xeatre quitt\xe9 et g\xe9n\xe9r\xe9"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"Cet \xe9v\xe9nement est d\xe9clench\xe9 lorsque le formulaire est g\xe9n\xe9r\xe9."}),"\n",(0,t.jsxs)(r.p,{children:["Tous les objets du formulaire (de n'importe quelle page) dont la propri\xe9t\xe9 d'\xe9v\xe9nement ",(0,t.jsx)(r.code,{children:"On Unload"})," est s\xe9lectionn\xe9e verront leur m\xe9thode objet appel\xe9e.\nEnsuite, si la propri\xe9t\xe9 d'\xe9v\xe9nement formulaire ",(0,t.jsx)(r.code,{children:"On Unload"})," est s\xe9lectionn\xe9e, la m\xe9thode formulaire sera appel\xe9e."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.a,{href:"/docs/fr/Events/onLoad",children:(0,t.jsx)(r.code,{children:"On Load"})})," and [",(0,t.jsx)(r.code,{children:"On Unload"}),"] events are generated for objects if they are enabled for both the objects and the form to which the objects belong. Si les \xe9v\xe9nements sont activ\xe9s pour les objets uniquement, ils ne se produiront pas; ces deux \xe9v\xe9nements doivent \xe9galement \xeatre activ\xe9s au niveau du formulaire."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"sous-formulaire",children:"Sous-formulaire"}),"\n",(0,t.jsxs)(r.p,{children:["L'\xe9v\xe9nement ",(0,t.jsx)(r.code,{children:"On Unload"})," est g\xe9n\xe9r\xe9 \xe0 la fermeture du sous-formulaire (cet \xe9v\xe9nement doit \xe9galement avoir \xe9t\xe9 activ\xe9 au niveau du formulaire parent pour \xeatre pris en compte). L'\xe9v\xe9nement est g\xe9n\xe9r\xe9 avant ceux du formulaire parent. Notez \xe9galement que, conform\xe9ment aux principes de fonctionnement des \xe9v\xe9nements de formulaire, si le sous-formulaire est plac\xe9 sur une page autre que la page 0 ou 1, cet \xe9v\xe9nement ne sera g\xe9n\xe9r\xe9 que lorsque cette page sera ferm\xe9e (et non lorsque le formulaire sera ferm\xe9)."]}),"\n",(0,t.jsx)(r.h3,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/fr/Events/onLoad",children:(0,t.jsx)(r.code,{children:"On Load"})})})]})}function u(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,a=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,t)&&!d.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:a,props:s,_owner:c.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(296540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);