/*! For license information please see e671c08b.4b400b8e.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51841],{759648:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=r(474848),n=r(28453);const s={id:"onDrop",title:"On Drop"},i=void 0,c={id:"Events/onDrop",title:"On Drop",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Defini\xe7\xe3o                                |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onDrop.md",sourceDirName:"Events",slug:"/Events/onDrop",permalink:"/docs/pt/19/Events/onDrop",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDrop.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onDrop",title:"On Drop"},sidebar:"docs",previous:{title:"On Drag Over",permalink:"/docs/pt/19/Events/onDragOver"},next:{title:"On End URL Loading",permalink:"/docs/pt/19/Events/onEndUrlLoading"}},d={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function h(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Pode ser chamado por"}),(0,o.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"16"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(t.td,{children:"Os dados foram lan\xe7ados sobre um objecto"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"On Drop"})," event is sent once to the destination object when the mouse pointer is released over the object. This event is the second phase of the drag-and-drop operation, in which you perform an operation in response to the user action."]}),"\n",(0,o.jsxs)(t.p,{children:["This event is not sent to the object if the drag was not accepted during the ",(0,o.jsx)(t.a,{href:"/docs/pt/19/Events/onDragOver",children:(0,o.jsx)(t.code,{children:"On Drag Over"})})," events. If you process the ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event for an object and reject a drag, the ",(0,o.jsx)(t.code,{children:"On Drop"})," event does not occur. Thus, if during the ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event you have tested the data type compatibility between the source and destination objects and have accepted a possible drop, you do not need to re-test the data during the ",(0,o.jsx)(t.code,{children:"On Drop"}),". J\xe1 se sabe que os dados s\xe3o adequados para o objeto de destino."]}),"\n",(0,o.jsx)(t.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/pt/19/Events/onBeginDragOver",children:(0,o.jsx)(t.code,{children:"On Begin Drag Over"})})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},221020:(e,t,r)=>{var o=r(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var o,s={},a=null,h=null;for(o in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,o)&&!d.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:n,type:e,key:a,ref:h,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var o=r(296540);const n={},s=o.createContext(n);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);