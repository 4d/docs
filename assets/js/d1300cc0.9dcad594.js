"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[38917],{559662:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>n,metadata:()=>c,toc:()=>a});var o=t(474848),r=t(28453);const n={id:"onMouseLeave",title:"On Mouse Leave"},i=void 0,c={id:"Events/onMouseLeave",title:"On Mouse Leave",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R7/Events/onMouseLeave.md",sourceDirName:"Events",slug:"/Events/onMouseLeave",permalink:"/docs/Events/onMouseLeave",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseLeave.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"onMouseLeave",title:"On Mouse Leave"},sidebar:"docs",previous:{title:"On Mouse Enter",permalink:"/docs/Events/onMouseEnter"},next:{title:"On Mouse Move",permalink:"/docs/Events/onMouseMove"}},d={},a=[{value:"Description",id:"description",level:2},{value:"Calling stack",id:"calling-stack",level:3},{value:"See also",id:"see-also",level:3}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Code"}),(0,o.jsx)(s.th,{children:"Can be called by"}),(0,o.jsx)(s.th,{children:"Definition"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"36"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(s.td,{children:"The mouse cursor leaves the graphic area of an object"})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(s.p,{children:"This event is generated once when the mouse cursor leaves the graphic area of an object."}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"On Mouse Leave"})," event updates the ",(0,o.jsx)(s.em,{children:"MouseX"})," and ",(0,o.jsx)(s.em,{children:"MouseY"})," system variables."]}),"\n",(0,o.jsxs)(s.p,{children:["Objects that are made invisible using the ",(0,o.jsx)(s.code,{children:"OBJECT SET VISIBLE"})," command or the ",(0,o.jsx)(s.a,{href:"/docs/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," property do not generate this event."]}),"\n",(0,o.jsx)(s.h3,{id:"calling-stack",children:"Calling stack"}),"\n",(0,o.jsxs)(s.p,{children:["If the ",(0,o.jsx)(s.code,{children:"On Mouse Leave"})," event has been checked for the form, it is generated for each form object. If it is checked for an object, it is generated only for that object. When there are superimposed objects, the event is generated by the first object capable of managing it that is found going in order from top level to bottom."]}),"\n",(0,o.jsx)(s.h3,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/docs/Events/onMouseMove",children:(0,o.jsx)(s.code,{children:"On Mouse Move"})})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/docs/Events/onMouseLeave",children:(0,o.jsx)(s.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>i,x:()=>c});var o=t(296540);const r={},n=o.createContext(r);function i(e){const s=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(n.Provider,{value:s},e.children)}}}]);