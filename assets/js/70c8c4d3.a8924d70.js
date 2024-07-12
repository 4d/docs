/*! For license information please see 70c8c4d3.a8924d70.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24605],{86149:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=t(474848),o=t(28453);const s={id:"onMouseEnter",title:"On Mouse Enter"},i=void 0,c={id:"Events/onMouseEnter",title:"On Mouse Enter",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R5/Events/onMouseEnter.md",sourceDirName:"Events",slug:"/Events/onMouseEnter",permalink:"/docs/20-R5/Events/onMouseEnter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseEnter.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onMouseEnter",title:"On Mouse Enter"},sidebar:"docs",previous:{title:"On Menu Selected",permalink:"/docs/20-R5/Events/onMenuSelected"},next:{title:"On Mouse Leave",permalink:"/docs/20-R5/Events/onMouseLeave"}},d={},l=[{value:"Description",id:"description",level:2},{value:"Calling stack",id:"calling-stack",level:3},{value:"See also",id:"see-also",level:3}];function a(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Can be called by"}),(0,n.jsx)(r.th,{children:"Definition"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"35"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/tabControl",children:"Tab control"})]}),(0,n.jsx)(r.td,{children:"The mouse cursor enters the graphic area of an object"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(r.p,{children:"This event is generated once, when the mouse cursor enters the graphic area of a form object."}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"On Mouse Enter"})," event updates the ",(0,n.jsx)(r.em,{children:"MouseX"})," and ",(0,n.jsx)(r.em,{children:"MouseY"})," system variables."]}),"\n",(0,n.jsxs)(r.p,{children:["Objects that are made invisible using the ",(0,n.jsx)(r.code,{children:"OBJECT SET VISIBLE"})," command or the ",(0,n.jsx)(r.a,{href:"/docs/20-R5/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," property do not generate this event."]}),"\n",(0,n.jsx)(r.h3,{id:"calling-stack",children:"Calling stack"}),"\n",(0,n.jsxs)(r.p,{children:["If the ",(0,n.jsx)(r.code,{children:"On Mouse Enter"})," event has been checked for the form, it is generated for each form object. If it is checked for an object, it is generated only for that object. When there are superimposed objects, the event is generated by the first object capable of managing it that is found going in order from top level to bottom."]}),"\n",(0,n.jsx)(r.h3,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/20-R5/Events/onMouseMove",children:(0,n.jsx)(r.code,{children:"On Mouse Move"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/20-R5/Events/onMouseLeave",children:(0,n.jsx)(r.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var n,s={},l=null,a=null;for(n in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,n)&&!d.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:l,ref:a,props:s,_owner:c.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(296540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);