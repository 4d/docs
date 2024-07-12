/*! For license information please see 3da9b608.b2f6b16e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[66040],{769285:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var t=r(474848),n=r(28453);const s={id:"onLoad",title:"On Load"},i=void 0,c={id:"Events/onLoad",title:"On Load",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Defini\xe7\xe3o                                               |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onLoad.md",sourceDirName:"Events",slug:"/Events/onLoad",permalink:"/docs/pt/19/Events/onLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLoad.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onLoad",title:"On Load"},sidebar:"docs",previous:{title:"On Header Click",permalink:"/docs/pt/19/Events/onHeaderClick"},next:{title:"On Load Record",permalink:"/docs/pt/19/Events/onLoadRecord"}},d={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"1"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/tabControl",children:"Tab control"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,t.jsx)(o.td,{children:"O formul\xe1rio est\xe1 prestes a ser apresentado ou impresso"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(o.p,{children:"Este evento \xe9 acionado quando o formul\xe1rio \xe9 carregado ou impresso."}),"\n",(0,t.jsxs)(o.p,{children:["All the objects of the form (from any page) whose ",(0,t.jsx)(o.code,{children:"On Load"})," object event property is selected will have their object method called. Then, if the ",(0,t.jsx)(o.code,{children:"On Load"})," form event property is selected, the form will have its form method called."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"On Load"})," and ",(0,t.jsx)(o.a,{href:"/docs/pt/19/Events/onUnload",children:(0,t.jsx)(o.code,{children:"On Unload"})})," events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"On Load"})," event is generated when opening the subform (this event must also have been activated at the parent form level in order to be taken into account). O evento \xe9 gerado antes dos eventos do formul\xe1rio principal. Also note that, in accordance with the operating principles of form events, if the subform is placed on a page other than page 0 or 1, this event will only be generated when that page is displayed (and not when the form is displayed)."]}),"\n",(0,t.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/pt/19/Events/onUnload",children:(0,t.jsx)(o.code,{children:"On Unload"})})})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,o,r)=>{var t=r(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,o,r){var t,s={},a=null,l=null;for(t in void 0!==r&&(a=""+r),void 0!==o.key&&(a=""+o.key),void 0!==o.ref&&(l=o.ref),o)i.call(o,t)&&!d.hasOwnProperty(t)&&(s[t]=o[t]);if(e&&e.defaultProps)for(t in o=e.defaultProps)void 0===s[t]&&(s[t]=o[t]);return{$$typeof:n,type:e,key:a,ref:l,props:s,_owner:c.current}}o.Fragment=s,o.jsx=a,o.jsxs=a},474848:(e,o,r)=>{e.exports=r(221020)},28453:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>c});var t=r(296540);const n={},s=t.createContext(n);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);