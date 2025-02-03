"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44971"],{207917:function(e,t,r){r.r(t),r.d(t,{default:()=>l,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"Events/onDrop","title":"On Drop","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R8/Events/onDrop.md","sourceDirName":"Events","slug":"/Events/onDrop","permalink":"/docs/Events/onDrop","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDrop.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onDrop","title":"On Drop"},"sidebar":"docs","previous":{"title":"On Drag Over","permalink":"/docs/Events/onDragOver"},"next":{"title":"On End URL Loading","permalink":"/docs/Events/onEndUrlLoading"}}'),o=r("785893"),s=r("250065");let i={id:"onDrop",title:"On Drop"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:4}];function h(e){let t={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Can be called by"}),(0,o.jsx)(t.th,{children:"Definition"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"16"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"/docs/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(t.a,{href:"/docs/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(t.td,{children:"Data has been dropped onto an object"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"On Drop"})," event is sent once to the destination object when the mouse pointer is released over the object. This event is the second phase of the drag-and-drop operation, in which you perform an operation in response to the user action."]}),"\n",(0,o.jsxs)(t.p,{children:["This event is not sent to the object if the drag was not accepted during the ",(0,o.jsx)(t.a,{href:"/docs/Events/onDragOver",children:(0,o.jsx)(t.code,{children:"On Drag Over"})})," events. If you process the ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event for an object and reject a drag, the ",(0,o.jsx)(t.code,{children:"On Drop"})," event does not occur. Thus, if during the ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event you have tested the data type compatibility between the source and destination objects and have accepted a possible drop, you do not need to re-test the data during the ",(0,o.jsx)(t.code,{children:"On Drop"}),". You already know that the data is suitable for the destination object."]}),"\n",(0,o.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/Events/onBeginDragOver",children:(0,o.jsx)(t.code,{children:"On Begin Drag Over"})})})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var n=r(667294);let o={},s=n.createContext(o);function i(e){let t=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);