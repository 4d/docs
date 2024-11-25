"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20901"],{920726:function(e,t,r){r.r(t),r.d(t,{metadata:()=>o,contentTitle:()=>c,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>i});var o=JSON.parse('{"id":"Events/onUnload","title":"On Unload","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R6/Events/onUnload.md","sourceDirName":"Events","slug":"/Events/onUnload","permalink":"/docs/20-R6/Events/onUnload","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonUnload.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onUnload","title":"On Unload"},"sidebar":"docs","previous":{"title":"On Timer","permalink":"/docs/20-R6/Events/onTimer"},"next":{"title":"On URL Filtering","permalink":"/docs/20-R6/Events/onUrlFiltering"}}'),n=r("785893"),s=r("250065");let i={id:"onUnload",title:"On Unload"},c=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Subform",id:"subform",level:3},{value:"See also",id:"see-also",level:3}];function a(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Code"}),(0,n.jsx)(t.th,{children:"Can be called by"}),(0,n.jsx)(t.th,{children:"Definition"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"24"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,n.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/subformOverview",children:"Subform"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/tabControl",children:"Tab control"})," - ",(0,n.jsx)(t.a,{href:"/docs/20-R6/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,n.jsx)(t.td,{children:"The form is about to be exited and released"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(t.p,{children:"This event is triggered when the form is being exited released."}),"\n",(0,n.jsxs)(t.p,{children:["All the objects of the form (from any page) whose ",(0,n.jsx)(t.code,{children:"On Unload"})," object event property is selected will have their object method called.\nThen, if the ",(0,n.jsx)(t.code,{children:"On Unload"})," form event property is selected, the form will have its form method called."]}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.a,{href:"/docs/20-R6/Events/onLoad",children:(0,n.jsx)(t.code,{children:"On Load"})})," and [",(0,n.jsx)(t.code,{children:"On Unload"}),"] events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"subform",children:"Subform"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"On Unload"})," event is generated when the subform is closing (this event must also have been activated at the parent form level in order to be taken into account). The event is generated before those of the parent form. Also note that, in accordance with the operating principles of form events, if the subform is placed on a page other than page 0 or 1, this event will only be generated when that page is closed (and not when the form is closed)."]}),"\n",(0,n.jsx)(t.h3,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.a,{href:"/docs/20-R6/Events/onLoad",children:(0,n.jsx)(t.code,{children:"On Load"})})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var o=r(667294);let n={},s=o.createContext(n);function i(e){let t=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);