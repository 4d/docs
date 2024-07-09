/*! For license information please see a5e239ef.5219b7d2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82969],{929081:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var n=t(474848),o=t(28453);const s={id:"onPrintingBreak",title:"On Printing Break"},i=void 0,c={id:"Events/onPrintingBreak",title:"On Printing Break",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R4/Events/onPrintingBreak.md",sourceDirName:"Events",slug:"/Events/onPrintingBreak",permalink:"/docs/20-R4/Events/onPrintingBreak",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPrintingBreak.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"onPrintingBreak",title:"On Printing Break"},sidebar:"docs",previous:{title:"On Plug in Area",permalink:"/docs/20-R4/Events/onPlugInArea"},next:{title:"On Printing Detail",permalink:"/docs/20-R4/Events/onPrintingDetail"}},a={},d=[{value:"Description",id:"Description",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Can be called by"}),(0,n.jsx)(r.th,{children:"Definition"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"6"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R4/FormObjects/tabControl",children:"Tab control"})]}),(0,n.jsx)(r.td,{children:"One of the form\u2019s break areas is about to be printed"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"On Printing Break"})," event can only be used in the context of an ",(0,n.jsx)(r.strong,{children:"output form"}),". It is triggered each time a break area in the output form is about to be printed, so that you can evaluate the break values, for example."]}),"\n",(0,n.jsxs)(r.p,{children:["This event usually follows a call to the ",(0,n.jsx)(r.code,{children:"Subtotal"})," command."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["This event cannot be selected for project forms, it is only available with ",(0,n.jsx)(r.strong,{children:"table forms"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,t){var n,s={},d=null,l=null;for(n in void 0!==t&&(d=""+t),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!a.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:d,ref:l,props:s,_owner:c.current}}r.Fragment=s,r.jsx=d,r.jsxs=d},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(296540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);