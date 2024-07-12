/*! For license information please see cf6de9b7.982b3c6d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60465],{572750:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var n=r(474848),o=r(28453);const i={id:"onPrintingDetail",title:"On Printing Detail"},s=void 0,c={id:"Events/onPrintingDetail",title:"On Printing Detail",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onPrintingDetail.md",sourceDirName:"Events",slug:"/Events/onPrintingDetail",permalink:"/docs/19/Events/onPrintingDetail",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPrintingDetail.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onPrintingDetail",title:"On Printing Detail"},sidebar:"docs",previous:{title:"On Printing Break",permalink:"/docs/19/Events/onPrintingBreak"},next:{title:"On Printing Footer",permalink:"/docs/19/Events/onPrintingFooter"}},d={},l=[{value:"Description",id:"description",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Code"}),(0,n.jsx)(t.th,{children:"Can be called by"}),(0,n.jsx)(t.th,{children:"Definition"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"23"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(t.a,{href:"/docs/19/FormObjects/tabControl",children:"Tab control"})]}),(0,n.jsx)(t.td,{children:"The form\u2019s detail area is about to be printed"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"On Printing Detail"})," event can only be used in the context of an ",(0,n.jsx)(t.strong,{children:"output form"}),". It is triggered when the detail area the output form is about to be printed, for example following a call to the ",(0,n.jsx)(t.code,{children:"Print form"})," command."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"Print form"})," command generates only one ",(0,n.jsx)(t.code,{children:"On Printing Detail"})," event for the form method."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["This event cannot be selected for project forms, it is only available with ",(0,n.jsx)(t.strong,{children:"table forms"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},221020:(e,t,r)=>{var n=r(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,i={},l=null,a=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)s.call(t,n)&&!d.hasOwnProperty(n)&&(i[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===i[n]&&(i[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:a,props:i,_owner:c.current}}t.Fragment=i,t.jsx=l,t.jsxs=l},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>s,x:()=>c});var n=r(296540);const o={},i=n.createContext(o);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);