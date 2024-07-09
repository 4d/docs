/*! For license information please see 88c711b9.b37866ad.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[60664],{938567:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var t=n(474848),o=n(28453);const s={id:"onHeader",title:"On Header"},i=void 0,c={id:"Events/onHeader",title:"On Header",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20/Events/onHeader.md",sourceDirName:"Events",slug:"/Events/onHeader",permalink:"/docs/20/Events/onHeader",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonHeader.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onHeader",title:"On Header"},sidebar:"docs",previous:{title:"On Getting focus",permalink:"/docs/20/Events/onGettingFocus"},next:{title:"On Header Click",permalink:"/docs/20/Events/onHeaderClick"}},d={},l=[{value:"Description",id:"Description",level:2}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Code"}),(0,t.jsx)(r.th,{children:"Can be called by"}),(0,t.jsx)(r.th,{children:"Definition"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form (list form only) - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(r.a,{href:"/docs/20/FormObjects/tabControl",children:"Tab control"})]}),(0,t.jsx)(r.td,{children:"The form's header area is about to be printed or displayed."})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.code,{children:"On Header"})," event is called when a record is about to be displayed in a list form displayed via ",(0,t.jsx)(r.code,{children:"DISPLAY SELECTION"})," and ",(0,t.jsx)(r.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["This event cannot be selected for project forms, it is only available with ",(0,t.jsx)(r.strong,{children:"table forms"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"In this context, the following sequence of calls to methods and form events is triggered:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["For each object in the header area:\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Object method with ",(0,t.jsx)(r.code,{children:"On Header"})," event"]}),"\n",(0,t.jsxs)(r.li,{children:["Form method with ",(0,t.jsx)(r.code,{children:"On Header"})," event"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Printed records are handled using the ",(0,t.jsx)(r.a,{href:"/docs/20/Events/onDisplayDetail",children:(0,t.jsx)(r.code,{children:"On Display Detail"})})," event."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Calling a 4D command that displays a dialog box from the ",(0,t.jsx)(r.code,{children:"On Header"})," event is not allowed and will cause a syntax error to occur. More particularly, the commands concerned are: ",(0,t.jsx)(r.code,{children:"ALERT"}),", ",(0,t.jsx)(r.code,{children:"DIALOG"}),", ",(0,t.jsx)(r.code,{children:"CONFIRM"}),", ",(0,t.jsx)(r.code,{children:"Request"}),", ",(0,t.jsx)(r.code,{children:"ADD RECORD"}),", ",(0,t.jsx)(r.code,{children:"MODIFY RECORD"}),", ",(0,t.jsx)(r.code,{children:"DISPLAY SELECTION"}),", and ",(0,t.jsx)(r.code,{children:"MODIFY SELECTION"}),"."]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,r,n)=>{var t=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,n){var t,s={},l=null,a=null;for(t in void 0!==n&&(l=""+n),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)i.call(r,t)&&!d.hasOwnProperty(t)&&(s[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===s[t]&&(s[t]=r[t]);return{$$typeof:o,type:e,key:l,ref:a,props:s,_owner:c.current}}r.Fragment=s,r.jsx=l,r.jsxs=l},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>i,x:()=>c});var t=n(296540);const o={},s=t.createContext(o);function i(e){const r=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);