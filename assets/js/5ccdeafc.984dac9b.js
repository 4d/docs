/*! For license information please see 5ccdeafc.984dac9b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[40121],{322122:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(474848),i=t(28453);const o={id:"onSelectionChange",title:"On Selection Change"},s=void 0,c={id:"Events/onSelectionChange",title:"On Selection Change",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onSelectionChange.md",sourceDirName:"Events",slug:"/Events/onSelectionChange",permalink:"/docs/19/Events/onSelectionChange",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonSelectionChange.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onSelectionChange",title:"On Selection Change"},sidebar:"docs",previous:{title:"On Scroll",permalink:"/docs/19/Events/onScroll"},next:{title:"On Timer",permalink:"/docs/19/Events/onTimer"}},l={},d=[{value:"Description",id:"description",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Example",id:"example",level:4},{value:"List form",id:"list-form",level:3},{value:"Hierarchical list",id:"hierarchical-list",level:3},{value:"Input &amp; 4D Write Pro",id:"input--4d-write-pro",level:3},{value:"List box",id:"list-box",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Can be called by"}),(0,r.jsx)(n.th,{children:"Definition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"31"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/viewProAreaOverview",children:"4D View Pro area"})," - ",(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - Form - ",(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/inputOverview",children:"Input"})," - ",(0,r.jsx)(n.a,{href:"/docs/19/FormObjects/listboxOverview",children:"List Box"})]}),(0,r.jsx)(n.td,{children:"The selection in the object is modified"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This event can be generated in different contexts."}),"\n",(0,r.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["The current selection of rows or columns is modified. In this context, the ",(0,r.jsx)(n.a,{href:"/docs/19/Events/overview#event-object",children:"event object"})," returned by the ",(0,r.jsx)(n.code,{children:"FORM Event"})," command contains:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"longint"}),(0,r.jsx)(n.td,{children:"31"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Selection Change"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Name of the sheet of the event"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"oldSelections"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Cell range before change"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"newSelections"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Cell range after change"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Selection Change)\n    VP SET CELL STYLE(FORM Event.oldSelections;New object("backColor";Null))\n    VP SET CELL STYLE(FORM Event.newSelections;New object("backColor";"red"))\n End if\n'})}),"\n",(0,r.jsx)(n.h3,{id:"list-form",children:"List form"}),"\n",(0,r.jsx)(n.p,{children:"The current record or the current selection of rows is modified in a list form."}),"\n",(0,r.jsx)(n.h3,{id:"hierarchical-list",children:"Hierarchical list"}),"\n",(0,r.jsx)(n.p,{children:"This event is generated every time the selection in the hierarchical list is modified after a mouse click or keystroke."}),"\n",(0,r.jsx)(n.h3,{id:"input--4d-write-pro",children:"Input & 4D Write Pro"}),"\n",(0,r.jsx)(n.p,{children:"The text selection or the position of the cursor in the area is modified following a click or a keystroke."}),"\n",(0,r.jsx)(n.h3,{id:"list-box",children:"List box"}),"\n",(0,r.jsx)(n.p,{children:"This event is generated each time the current selection of rows or columns of the list box is modified."})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var r,o={},d=null,h=null;for(r in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(h=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:i,type:e,key:d,ref:h,props:o,_owner:c.current}}n.Fragment=o,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var r=t(296540);const i={},o=r.createContext(i);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);