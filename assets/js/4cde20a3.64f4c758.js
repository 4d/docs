"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43193"],{75751:function(e,o,r){r.r(o),r.d(o,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>l,contentTitle:()=>d});var t=JSON.parse('{"id":"Events/onLoad","title":"On Load","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-19/Events/onLoad.md","sourceDirName":"Events","slug":"/Events/onLoad","permalink":"/docs/19/Events/onLoad","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLoad.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onLoad","title":"On Load"},"sidebar":"docs","previous":{"title":"On Header Click","permalink":"/docs/19/Events/onHeaderClick"},"next":{"title":"On Load Record","permalink":"/docs/19/Events/onLoadRecord"}}'),n=r("785893"),s=r("250065");let i={id:"onLoad",title:"On Load"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Subform",id:"subform",level:3},{value:"See also",id:"see-also",level:3}];function a(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Code"}),(0,n.jsx)(o.th,{children:"Can be called by"}),(0,n.jsx)(o.th,{children:"Definition"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"1"}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/subformOverview",children:"Subform"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/tabControl",children:"Tab control"})," - ",(0,n.jsx)(o.a,{href:"/docs/19/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,n.jsx)(o.td,{children:"The form is about to be displayed or printed"})]})})]}),"\n",(0,n.jsx)(o.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(o.p,{children:"This event is triggered when the form is being loaded or printed."}),"\n",(0,n.jsxs)(o.p,{children:["All the objects of the form (from any page) whose ",(0,n.jsx)(o.code,{children:"On Load"})," object event property is selected will have their object method called.\nThen, if the ",(0,n.jsx)(o.code,{children:"On Load"})," form event property is selected, the form will have its form method called."]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"On Load"})," and ",(0,n.jsx)(o.a,{href:"/docs/19/Events/onUnload",children:(0,n.jsx)(o.code,{children:"On Unload"})})," events are generated for objects if they are enabled for both the objects and the form to which the objects belong. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"subform",children:"Subform"}),"\n",(0,n.jsxs)(o.p,{children:["The ",(0,n.jsx)(o.code,{children:"On Load"})," event is generated when opening the subform (this event must also have been activated at the parent form level in order to be taken into account). The event is generated before those of the parent form. Also note that, in accordance with the operating principles of form events, if the subform is placed on a page other than page 0 or 1, this event will only be generated when that page is displayed (and not when the form is displayed)."]}),"\n",(0,n.jsx)(o.h3,{id:"see-also",children:"See also"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/19/Events/onUnload",children:(0,n.jsx)(o.code,{children:"On Unload"})})})]})}function h(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return d},a:function(){return i}});var t=r(667294);let n={},s=t.createContext(n);function i(e){let o=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);