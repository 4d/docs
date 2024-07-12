/*! For license information please see aaa30c06.712e4f43.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23852],{633746:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>a,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var o=t(474848),r=t(28453);const i={id:"onLongClick",title:"On Long Click"},s=void 0,c={id:"Events/onLongClick",title:"On Long Click",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R5/Events/onLongClick.md",sourceDirName:"Events",slug:"/Events/onLongClick",permalink:"/docs/20-R5/Events/onLongClick",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLongClick.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onLongClick",title:"On Long Click"},sidebar:"docs",previous:{title:"On Load Record",permalink:"/docs/20-R5/Events/onLoadRecord"},next:{title:"On Losing focus",permalink:"/docs/20-R5/Events/onLosingFocus"}},l={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:3}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Can be called by"}),(0,o.jsx)(n.th,{children:"Definition"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"39"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview",children:"Button"})}),(0,o.jsx)(n.td,{children:"A button is clicked and the mouse button remains pushed for a certain length of time"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"This event is generated when a button receives a click and the mouse button is held for a certain length of time. In theory, the length of time for which this event is generated is equal to the maximum length of time separating a double-click, as defined in the system preferences."}),"\n",(0,o.jsx)(n.p,{children:"This event can be generated for the following button styles:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview#toolbar",children:"Toolbar"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview#bevel",children:"Bevel"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview#rounded-bevel",children:"Rounded Bevel"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview#os-x-gradient",children:"OS X Gradient"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview#os-x-textured",children:"OS X Textured"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview#office-xp",children:"Office XP"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview#help",children:"Help"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview#circle",children:"Circle"})}),"\n",(0,o.jsx)(n.li,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/FormObjects/buttonOverview#custom",children:"Custom"})}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["This event is generally used to display pop-up menus in case of long button clicks. The ",(0,o.jsx)(n.a,{href:"/docs/20-R5/Events/onClicked",children:(0,o.jsx)(n.code,{children:"On Clicked"})}),' event, if enabled, is generated if the user releases the mouse button before the "long click" time limit.']}),"\n",(0,o.jsx)(n.h3,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/20-R5/Events/onAlternativeClick",children:(0,o.jsx)(n.code,{children:"On Alternative Click"})})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},221020:(e,n,t)=>{var o=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,i={},d=null,h=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(h=n.ref),n)s.call(n,o)&&!l.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:r,type:e,key:d,ref:h,props:i,_owner:c.current}}n.Fragment=i,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>c});var o=t(296540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);