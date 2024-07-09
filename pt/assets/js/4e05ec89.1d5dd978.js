/*! For license information please see 4e05ec89.1d5dd978.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27198],{20753:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>l,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var o=r(474848),n=r(28453);const s={id:"onDragOver",title:"On Drag Over"},i=void 0,d={id:"Events/onDragOver",title:"On Drag Over",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Defini\xe7\xe3o                                   |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onDragOver.md",sourceDirName:"Events",slug:"/Events/onDragOver",permalink:"/docs/pt/19/Events/onDragOver",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDragOver.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onDragOver",title:"On Drag Over"},sidebar:"docs",previous:{title:"On Double Clicked",permalink:"/docs/pt/19/Events/onDoubleClicked"},next:{title:"On Drop",permalink:"/docs/pt/19/Events/onDrop"}},a={},c=[{value:"Descri\xe7\xe3o",id:"Descri\xe7\xe3o",level:2},{value:"Veja tamb\xe9m",id:"Veja-tamb\xe9m",level:4}];function h(e){const t={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Pode ser chamado por"}),(0,o.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"21"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/19/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(t.td,{children:"Os dados podem ser largados sobre um objeto"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"Descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event is repeatedly sent to the destination object when the mouse pointer is moved over the object. Em resposta a este evento, normalmente:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Get the data and signatures found in the pasteboard (via the ",(0,o.jsx)(t.code,{children:"GET PASTEBOARD DATA"})," command)."]}),"\n",(0,o.jsxs)(t.li,{children:["Depending on the nature and type of data in the pasteboard, you ",(0,o.jsx)(t.strong,{children:"accept"})," or ",(0,o.jsx)(t.strong,{children:"reject"})," the drag and drop."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["To ",(0,o.jsx)(t.strong,{children:"accept"})," the drag, the destination object method must return 0 (zero), so you write ",(0,o.jsx)(t.code,{children:"$0:=0"}),". To ",(0,o.jsx)(t.strong,{children:"reject"})," the drag, the object method must return -1 (minus one), so you write ",(0,o.jsx)(t.code,{children:"$0:=-1"}),". During an ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event, 4D treats the object method as a function. Se nenhum resultado for devolvido, 4D assume que o arrasto \xe9 aceite."]}),"\n",(0,o.jsxs)(t.p,{children:["Se aceitar o arrastamento, o objeto de destino \xe9 real\xe7ado. Se rejeitar o arrastamento, o destino n\xe3o \xe9 real\xe7ado. Accepting the drag does not mean that the dragged data is going to be inserted into the destination object. It only means that if the mouse button was released at this point, the destination object would accept the dragged data and the ",(0,o.jsx)(t.a,{href:"/docs/pt/19/Events/onDrop",children:(0,o.jsx)(t.code,{children:"On Drop"})})," event would be fired."]}),"\n",(0,o.jsxs)(t.p,{children:["If you do not process the ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event for a droppable object, that object will be highlighted for all drag over operations, no matter what the nature and type of the dragged data."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event is the means by which you control the first phase of a drag-and-drop operation. Not only can you test whether the dragged data is of a type compatible with the destination object, and then accept or reject the drag; you can simultaneously notify the user of this fact, because 4D highlights (or not) the destination object, based on your decision."]}),"\n",(0,o.jsxs)(t.p,{children:["The code handling an ",(0,o.jsx)(t.code,{children:"On Drag Over"})," event should be short and execute quickly, because that event is sent repeatedly to the current destination object, due to the movements of the mouse."]}),"\n",(0,o.jsx)(t.h4,{id:"Veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/pt/19/Events/onBeginDragOver",children:(0,o.jsx)(t.code,{children:"On Begin Drag Over"})})})]})}function l(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},221020:(e,t,r)=>{var o=r(296540),n=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var o,s={},c=null,h=null;for(o in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(h=t.ref),t)i.call(t,o)&&!a.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:n,type:e,key:c,ref:h,props:s,_owner:d.current}}t.Fragment=s,t.jsx=c,t.jsxs=c},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>d});var o=r(296540);const n={},s=o.createContext(n);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);