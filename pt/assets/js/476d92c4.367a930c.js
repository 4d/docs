/*! For license information please see 476d92c4.367a930c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72678],{26882:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=t(474848),n=t(28453);const s={id:"onUnload",title:"On Unload"},i=void 0,c={id:"Events/onUnload",title:"On Unload",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Defini\xe7\xe3o                                             |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onUnload.md",sourceDirName:"Events",slug:"/Events/onUnload",permalink:"/docs/pt/20/Events/onUnload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonUnload.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onUnload",title:"On Unload"},sidebar:"docs",previous:{title:"On Timer",permalink:"/docs/pt/20/Events/onTimer"},next:{title:"On URL Filtering",permalink:"/docs/pt/20/Events/onUrlFiltering"}},d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Pode ser chamado por"}),(0,o.jsx)(r.th,{children:"Defini\xe7\xe3o"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"24"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/subformOverview",children:"Subform"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/tabControl",children:"Tab control"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,o.jsx)(r.td,{children:"O formul\xe1rio est\xe1 prestes a ser encerrado e libertado"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsx)(r.p,{children:"Este evento \xe9 acionado quando o formul\xe1rio \xe9 libertado."}),"\n",(0,o.jsxs)(r.p,{children:["All the objects of the form (from any page) whose ",(0,o.jsx)(r.code,{children:"On Unload"})," object event property is selected will have their object method called. Then, if the ",(0,o.jsx)(r.code,{children:"On Unload"})," form event property is selected, the form will have its form method called."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.a,{href:"/docs/pt/20/Events/onLoad",children:(0,o.jsx)(r.code,{children:"On Load"})})," and [",(0,o.jsx)(r.code,{children:"On Unload"}),"] events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]}),"\n",(0,o.jsx)(r.h3,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"On Unload"})," event is generated when the subform is closing (this event must also have been activated at the parent form level in order to be taken into account). O evento \xe9 gerado antes dos eventos do formul\xe1rio principal. The event is generated before those of the parent form."]}),"\n",(0,o.jsx)(r.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/pt/20/Events/onLoad",children:(0,o.jsx)(r.code,{children:"On Load"})})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},221020:(e,r,t)=>{var o=t(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var o,s={},l=null,a=null;for(o in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,o)&&!d.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:n,type:e,key:l,ref:a,props:s,_owner:c.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var o=t(296540);const n={},s=o.createContext(n);function i(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);