"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44620"],{692651:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>o});var r=JSON.parse('{"id":"Events/onDoubleClicked","title":"On Double Clicked","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20/Events/onDoubleClicked.md","sourceDirName":"Events","slug":"/Events/onDoubleClicked","permalink":"/docs/20/Events/onDoubleClicked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDoubleClicked.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onDoubleClicked","title":"On Double Clicked"},"sidebar":"docs","previous":{"title":"On Display Detail","permalink":"/docs/20/Events/onDisplayDetail"},"next":{"title":"On Drag Over","permalink":"/docs/20/Events/onDragOver"}}'),c=t("785893"),s=t("250065");let i={id:"onDoubleClicked",title:"On Double Clicked"},o=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Example",id:"example",level:4}];function h(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Code"}),(0,c.jsx)(n.th,{children:"Can be called by"}),(0,c.jsx)(n.th,{children:"Definition"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"13"}),(0,c.jsxs)(n.td,{children:[(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/inputOverview",children:"Input"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/ruler",children:"Ruler"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/spinner",children:"Spinner"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/splitters",children:"Splitter"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/stepper",children:"Stepper"})," - ",(0,c.jsx)(n.a,{href:"/docs/20/FormObjects/tabControl",children:"Tab control"})]}),(0,c.jsx)(n.td,{children:"A double click occurred on an object"})]})})]}),"\n",(0,c.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"On Double Clicked"})," event is generated when the user double-clicks on an object. The maximum length of time separating a double-click is defined in the system preferences."]}),"\n",(0,c.jsxs)(n.p,{children:["If the ",(0,c.jsx)(n.a,{href:"/docs/20/Events/onClicked",children:(0,c.jsx)(n.code,{children:"On Clicked"})})," or ",(0,c.jsx)(n.code,{children:"On Double Clicked"})," object event property is selected for an object, you can detect and handle the clicks within or on the object, using the ",(0,c.jsx)(n.code,{children:"FORM event"})," command that returns ",(0,c.jsx)(n.a,{href:"/docs/20/Events/onClicked",children:(0,c.jsx)(n.code,{children:"On Clicked"})})," or ",(0,c.jsx)(n.code,{children:"On Double Clicked"}),", depending on the case."]}),"\n",(0,c.jsxs)(n.p,{children:["If both events are selected for an object, the ",(0,c.jsx)(n.code,{children:"On Clicked"})," and then the ",(0,c.jsx)(n.code,{children:"On Double Clicked"})," events will be generated when the user double-clicks the object."]}),"\n",(0,c.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,c.jsxs)(n.p,{children:["This event is generated when the user double-clicks anywhere on a 4D View Pro document. On this context, the ",(0,c.jsx)(n.a,{href:"/docs/20/Events/overview#event-object",children:"event object"})," returned by the ",(0,c.jsx)(n.code,{children:"FORM Event"})," command contains:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Property"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"code"}),(0,c.jsx)(n.td,{children:"longint"}),(0,c.jsx)(n.td,{children:"13"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"description"}),(0,c.jsx)(n.td,{children:"text"}),(0,c.jsx)(n.td,{children:'"On Double Clicked"'})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"objectName"}),(0,c.jsx)(n.td,{children:"text"}),(0,c.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"sheetName"}),(0,c.jsx)(n.td,{children:"text"}),(0,c.jsx)(n.td,{children:"Name of the sheet of the event"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"range"}),(0,c.jsx)(n.td,{children:"object"}),(0,c.jsx)(n.td,{children:"Cell range"})]})]})]}),"\n",(0,c.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:" If(FORM Event.code=On Double Clicked)\n   $value:=VP Get value(FORM Event.range)\n End if\n"})})]})}function a(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var r=t(667294);let c={},s=r.createContext(c);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);