/*! For license information please see 6db9f797.311edc87.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10855],{252623:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=n(474848),o=n(28453);const s={id:"onScroll",title:"On Scroll"},i=void 0,c={id:"Events/onScroll",title:"On Scroll",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onScroll.md",sourceDirName:"Events",slug:"/Events/onScroll",permalink:"/docs/19/Events/onScroll",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonScroll.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onScroll",title:"On Scroll"},sidebar:"docs",previous:{title:"On Row Resize",permalink:"/docs/19/Events/onRowResize"},next:{title:"On Selection Change",permalink:"/docs/19/Events/onSelectionChange"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Picture input",id:"picture-input",level:3},{value:"List box",id:"list-box",level:3}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Code"}),(0,r.jsx)(t.th,{children:"Can be called by"}),(0,r.jsx)(t.th,{children:"Definition"})]})}),(0,r.jsx)(t.tbody,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"59"}),(0,r.jsxs)(t.td,{children:[(0,r.jsx)(t.a,{href:"/docs/19/FormObjects/inputOverview",children:"Input"})," of the ",(0,r.jsx)(t.code,{children:"picture"})," ",(0,r.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,r.jsx)(t.a,{href:"/docs/19/FormObjects/listboxOverview",children:"List Box"})]}),(0,r.jsx)(t.td,{children:"The user scrolls the contents of a picture object or list box using the mouse or keyboard."})]})})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsx)(t.p,{children:"This event can be generated in the context of a picture input or a list box."}),"\n",(0,r.jsxs)(t.p,{children:["This event is triggered after any other user event related to the scrolling action (",(0,r.jsx)(t.a,{href:"/docs/19/Events/onClicked",children:"On Clicked"}),", ",(0,r.jsx)(t.a,{href:"/docs/19/Events/onAfterKeystroke",children:"On After Keystroke"}),", etc.). The event is only generated in the object method (not in the form method)."]}),"\n",(0,r.jsxs)(t.p,{children:["The event is triggered when the scroll is the result of a user action: using the scroll bars and/or cursors, using the mouse wheel or ",(0,r.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"the keyboard"}),". It is not generated when the object is scrolled due to the execution of the ",(0,r.jsx)(t.code,{children:"OBJECT SET SCROLL POSITION"})," command."]}),"\n",(0,r.jsx)(t.h3,{id:"picture-input",children:"Picture input"}),"\n",(0,r.jsxs)(t.p,{children:["The event is generated as soon as a user scrolls a picture within the picture input (field or variable) that contains it. You can scroll the contents of a picture area when the size of the area is smaller than its contents and the ",(0,r.jsx)(t.a,{href:"/docs/19/FormObjects/propertiesDisplay#picture-format",children:"display format"}),' is "Truncated (non Centered)".']}),"\n",(0,r.jsx)(t.h3,{id:"list-box",children:"List box"}),"\n",(0,r.jsx)(t.p,{children:"The event is generated as soon as a user scrolls the rows or columns of the list box."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var r=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,a=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,r)&&!l.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:o,type:e,key:d,ref:a,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var r=n(296540);const o={},s=r.createContext(o);function i(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);