"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26915"],{770607:function(e,s,t){t.r(s),t.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>c});var o=JSON.parse('{"id":"Events/onMouseMove","title":"On Mouse Move","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R7/Events/onMouseMove.md","sourceDirName":"Events","slug":"/Events/onMouseMove","permalink":"/docs/20-R7/Events/onMouseMove","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseMove.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onMouseMove","title":"On Mouse Move"},"sidebar":"docs","previous":{"title":"On Mouse Leave","permalink":"/docs/20-R7/Events/onMouseLeave"},"next":{"title":"On Mouse Up","permalink":"/docs/20-R7/Events/onMouseUp"}}'),n=t("785893"),r=t("250065");let i={id:"onMouseMove",title:"On Mouse Move"},c=void 0,d={},l=[{value:"Description",id:"description",level:2},{value:"Calling stack",id:"calling-stack",level:3},{value:"See also",id:"see-also",level:3}];function a(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Code"}),(0,n.jsx)(s.th,{children:"Can be called by"}),(0,n.jsx)(s.th,{children:"Definition"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"37"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/tabControl",children:"Tab control"})]}),(0,n.jsx)(s.td,{children:"The mouse cursor moves at least one pixel OR a modifier key (Shift, Alt/Option, Shift Lock) was pressed"})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"description",children:"Description"}),"\n",(0,n.jsx)(s.p,{children:"This event is generated:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"when the mouse cursor moves at least one pixel"}),"\n",(0,n.jsxs)(s.li,{children:["OR when a modifier key (",(0,n.jsx)(s.strong,{children:"Shift"}),", ",(0,n.jsx)(s.strong,{children:"Alt/Option"}),", ",(0,n.jsx)(s.strong,{children:"Shift Lock"}),") was pressed. This makes it possible to manage copy- or move-type drag-and-drop operations."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"If the event is checked for an object only, it is generated only when the cursor is within the graphic area of the object."}),"\n",(0,n.jsxs)(s.p,{children:["The ",(0,n.jsx)(s.code,{children:"On Mouse Move"})," event updates the ",(0,n.jsx)(s.em,{children:"MouseX"})," and ",(0,n.jsx)(s.em,{children:"MouseY"})," system variables."]}),"\n",(0,n.jsxs)(s.p,{children:["Objects that are made invisible using the ",(0,n.jsx)(s.code,{children:"OBJECT SET VISIBLE"})," command or the ",(0,n.jsx)(s.a,{href:"/docs/20-R7/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," property do not generate this event."]}),"\n",(0,n.jsx)(s.h3,{id:"calling-stack",children:"Calling stack"}),"\n",(0,n.jsxs)(s.p,{children:["If the ",(0,n.jsx)(s.code,{children:"On Mouse Move"})," event has been checked for the form, it is generated for each form object. If it is checked for an object, it is generated only for that object. When there are superimposed objects, the event is generated by the first object capable of managing it that is found going in order from top level to bottom."]}),"\n",(0,n.jsx)(s.h3,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/20-R7/Events/onMouseEnter",children:(0,n.jsx)(s.code,{children:"On Mouse Enter"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/20-R7/Events/onMouseLeave",children:(0,n.jsx)(s.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,r.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return c},a:function(){return i}});var o=t(667294);let n={},r=o.createContext(n);function i(e){let s=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(r.Provider,{value:s},e.children)}}}]);