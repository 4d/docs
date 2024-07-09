/*! For license information please see 60c5b390.2a4ada2d.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26815],{414241:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var n=t(474848),o=t(28453);const s={id:"onBeginDragOver",title:"On Begin Drag Over"},i=void 0,c={id:"Events/onBeginDragOver",title:"On Begin Drag Over",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R5/Events/onBeginDragOver.md",sourceDirName:"Events",slug:"/Events/onBeginDragOver",permalink:"/docs/Events/onBeginDragOver",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeginDragOver.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onBeginDragOver",title:"On Begin Drag Over"},sidebar:"docs",previous:{title:"On Before Keystroke",permalink:"/docs/Events/onBeforeKeystroke"},next:{title:"On Begin URL Loading",permalink:"/docs/Events/onBeginUrlLoading"}},d={},a=[{value:"Description",id:"Description",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Can be called by"}),(0,n.jsx)(r.th,{children:"Definition"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"17"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/tabControl",children:"Tab control"})]}),(0,n.jsx)(r.td,{children:"An object is being dragged"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"Description",children:"Description"}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"On Begin Drag Over"})," form event can be selected for any form objects that can be dragged. It is generated in every case where the object has the ",(0,n.jsx)(r.a,{href:"/docs/FormObjects/propertiesAction#draggable",children:"Draggable"})," property. It can be called from the method of the source object or the form method of the source object."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Unlike the ",(0,n.jsx)(r.a,{href:"/docs/Events/onDragOver",children:(0,n.jsx)(r.code,{children:"On Drag Over"})})," form event, ",(0,n.jsx)(r.code,{children:"On Begin Drag Over"})," is called within the context of the ",(0,n.jsx)(r.strong,{children:"source object"})," of the drag action."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["The ",(0,n.jsx)(r.code,{children:"On Begin Drag Over"})," event is useful for preparing of the drag action. It can be used to:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Add data and signatures to the pasteboard (via the ",(0,n.jsx)(r.code,{children:"APPEND DATA TO PASTEBOARD"})," command)."]}),"\n",(0,n.jsxs)(r.li,{children:["Use a custom icon during the drag action (via the ",(0,n.jsx)(r.code,{children:"SET DRAG ICON"})," command)."]}),"\n",(0,n.jsxs)(r.li,{children:["Accept or refuse dragging via $0 in the method of the dragged object.\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["To indicate that drag actions are accepted, the method of the source object must return 0 (zero); you must therefore execute ",(0,n.jsx)(r.code,{children:"$0:=0"}),"."]}),"\n",(0,n.jsxs)(r.li,{children:["To indicate that drag actions are refused, the method of the source object must return -1 (minus one); you must therefore execute ",(0,n.jsx)(r.code,{children:"$0:=-1"}),"."]}),"\n",(0,n.jsx)(r.li,{children:"If no result is returned, 4D considers that drag actions are accepted."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["4D data are put in the pasteboard before calling the event. For example, in the case of dragging without the ",(0,n.jsx)(r.strong,{children:"Automatic Drag"})," action, the dragged text is already in the pasteboard when the event is called."]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,r,t)=>{var n=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,r,t){var n,s={},a=null,l=null;for(n in void 0!==t&&(a=""+t),void 0!==r.key&&(a=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,n)&&!d.hasOwnProperty(n)&&(s[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===s[n]&&(s[n]=r[n]);return{$$typeof:o,type:e,key:a,ref:l,props:s,_owner:c.current}}r.Fragment=s,r.jsx=a,r.jsxs=a},474848:(e,r,t)=>{e.exports=t(221020)},28453:(e,r,t)=>{t.d(r,{R:()=>i,x:()=>c});var n=t(296540);const o={},s=n.createContext(o);function i(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);