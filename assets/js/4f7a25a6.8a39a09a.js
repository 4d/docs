/*! For license information please see 4f7a25a6.8a39a09a.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73695],{137102:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=o(474848),n=o(28453);const s={id:"onLoad",title:"On Load"},i=void 0,d={id:"Events/onLoad",title:"On Load",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R5/Events/onLoad.md",sourceDirName:"Events",slug:"/Events/onLoad",permalink:"/docs/Events/onLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLoad.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onLoad",title:"On Load"},sidebar:"docs",previous:{title:"On Header Click",permalink:"/docs/Events/onHeaderClick"},next:{title:"On Load Record",permalink:"/docs/Events/onLoadRecord"}},c={},a=[{value:"Description",id:"Description",level:2},{value:"Subform",id:"Subform",level:3},{value:"See also",id:"See-also",level:3}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Code"}),(0,t.jsx)(r.th,{children:"Can be called by"}),(0,t.jsx)(r.th,{children:"Definition"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"1"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"/docs/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/tabControl",children:"Tab control"})," - ",(0,t.jsx)(r.a,{href:"/docs/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,t.jsx)(r.td,{children:"The form is about to be displayed or printed"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,t.jsx)(r.p,{children:"This event is triggered when the form is being loaded or printed."}),"\n",(0,t.jsxs)(r.p,{children:["All the objects of the form (from any page) whose ",(0,t.jsx)(r.code,{children:"On Load"})," object event property is selected will have their object method called.\nThen, if the ",(0,t.jsx)(r.code,{children:"On Load"})," form event property is selected, the form will have its form method called."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"On Load"})," and ",(0,t.jsx)(r.a,{href:"/docs/Events/onUnload",children:(0,t.jsx)(r.code,{children:"On Unload"})})," events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"Subform",children:"Subform"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"On Load"})," event is generated when opening the subform (this event must also have been activated at the parent form level in order to be taken into account). The event is generated before those of the parent form. Also note that, in accordance with the operating principles of form events, if the subform is placed on a page other than page 0 or 1, this event will only be generated when that page is displayed (and not when the form is displayed)."]}),"\n",(0,t.jsx)(r.h3,{id:"See-also",children:"See also"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/Events/onUnload",children:(0,t.jsx)(r.code,{children:"On Unload"})})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},221020:(e,r,o)=>{var t=o(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,o){var t,s={},a=null,l=null;for(t in void 0!==o&&(a=""+o),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,t)&&!c.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:n,type:e,key:a,ref:l,props:s,_owner:d.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},474848:(e,r,o)=>{e.exports=o(221020)},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>d});var t=o(296540);const n={},s=t.createContext(n);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);