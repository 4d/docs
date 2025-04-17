"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52010"],{104042:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>a,contentTitle:()=>c});var n=JSON.parse('{"id":"Events/onBeginDragOver","title":"On Begin Drag Over","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R9/Events/onBeginDragOver.md","sourceDirName":"Events","slug":"/Events/onBeginDragOver","permalink":"/docs/Events/onBeginDragOver","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeginDragOver.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"onBeginDragOver","title":"On Begin Drag Over"},"sidebar":"docs","previous":{"title":"On Before Keystroke","permalink":"/docs/Events/onBeforeKeystroke"},"next":{"title":"On Begin URL Loading","permalink":"/docs/Events/onBeginUrlLoading"}}'),o=t("785893"),s=t("250065");let i={id:"onBeginDragOver",title:"On Begin Drag Over"},c=void 0,d={},a=[{value:"Description",id:"description",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Can be called by"}),(0,o.jsx)(r.th,{children:"Definition"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"17"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"/docs/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(r.td,{children:"An object is being dragged"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"On Begin Drag Over"})," form event can be selected for any form objects that can be dragged. It is generated in every case where the object has the ",(0,o.jsx)(r.a,{href:"/docs/FormObjects/propertiesAction#draggable",children:"Draggable"})," property. It can be called from the method of the source object or the form method of the source object."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Unlike the ",(0,o.jsx)(r.a,{href:"/docs/Events/onDragOver",children:(0,o.jsx)(r.code,{children:"On Drag Over"})})," form event, ",(0,o.jsx)(r.code,{children:"On Begin Drag Over"})," is called within the context of the ",(0,o.jsx)(r.strong,{children:"source object"})," of the drag action."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["The ",(0,o.jsx)(r.code,{children:"On Begin Drag Over"})," event is useful for preparing of the drag action. It can be used to:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Add data and signatures to the pasteboard (via the ",(0,o.jsx)(r.code,{children:"APPEND DATA TO PASTEBOARD"})," command)."]}),"\n",(0,o.jsxs)(r.li,{children:["Use a custom icon during the drag action (via the ",(0,o.jsx)(r.code,{children:"SET DRAG ICON"})," command)."]}),"\n",(0,o.jsxs)(r.li,{children:["Accept or refuse dragging via the result of the method of the dragged object.\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"To indicate that drag actions are accepted, the method of the source object must return 0 (zero)."}),"\n",(0,o.jsx)(r.li,{children:"To indicate that drag actions are refused, the method of the source object must return -1 (minus one)."}),"\n",(0,o.jsx)(r.li,{children:"If no result is returned, 4D considers that drag actions are accepted."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["4D data are put in the pasteboard before calling the event. For example, in the case of dragging without the ",(0,o.jsx)(r.strong,{children:"Automatic Drag"})," action, the dragged text is already in the pasteboard when the event is called."]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return c},a:function(){return i}});var n=t(667294);let o={},s=n.createContext(o);function i(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);