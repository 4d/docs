"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17515],{279530:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>a});var t=r(474848),n=r(28453);const s={id:"onLoad",title:"On Load"},i=void 0,d={id:"Events/onLoad",title:"On Load",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onLoad.md",sourceDirName:"Events",slug:"/Events/onLoad",permalink:"/docs/19/Events/onLoad",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLoad.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onLoad",title:"On Load"},sidebar:"docs",previous:{title:"On Header Click",permalink:"/docs/19/Events/onHeaderClick"},next:{title:"On Load Record",permalink:"/docs/19/Events/onLoadRecord"}},c={},a=[{value:"Description",id:"description",level:2},{value:"Subform",id:"subform",level:3},{value:"See also",id:"see-also",level:3}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Can be called by"}),(0,t.jsx)(o.th,{children:"Definition"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"1"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/tabControl",children:"Tab control"})," - ",(0,t.jsx)(o.a,{href:"/docs/19/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,t.jsx)(o.td,{children:"The form is about to be displayed or printed"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"description",children:"Description"}),"\n",(0,t.jsx)(o.p,{children:"This event is triggered when the form is being loaded or printed."}),"\n",(0,t.jsxs)(o.p,{children:["All the objects of the form (from any page) whose ",(0,t.jsx)(o.code,{children:"On Load"})," object event property is selected will have their object method called.\nThen, if the ",(0,t.jsx)(o.code,{children:"On Load"})," form event property is selected, the form will have its form method called."]}),"\n",(0,t.jsxs)(o.blockquote,{children:["\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"On Load"})," and ",(0,t.jsx)(o.a,{href:"/docs/19/Events/onUnload",children:(0,t.jsx)(o.code,{children:"On Unload"})})," events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]}),"\n",(0,t.jsx)(o.h3,{id:"subform",children:"Subform"}),"\n",(0,t.jsxs)(o.p,{children:["The ",(0,t.jsx)(o.code,{children:"On Load"})," event is generated when opening the subform (this event must also have been activated at the parent form level in order to be taken into account). The event is generated before those of the parent form. Also note that, in accordance with the operating principles of form events, if the subform is placed on a page other than page 0 or 1, this event will only be generated when that page is displayed (and not when the form is displayed)."]}),"\n",(0,t.jsx)(o.h3,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/19/Events/onUnload",children:(0,t.jsx)(o.code,{children:"On Unload"})})})]})}function h(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>i,x:()=>d});var t=r(296540);const n={},s=t.createContext(n);function i(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);