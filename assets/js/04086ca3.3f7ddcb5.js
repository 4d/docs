/*! For license information please see 04086ca3.3f7ddcb5.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9802],{446685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>c});var o=t(474848),r=t(28453);const i={id:"onVpReady",title:"On VP Ready"},s=void 0,d={id:"Events/onVpReady",title:"On VP Ready",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20/Events/onVpReady.md",sourceDirName:"Events",slug:"/Events/onVpReady",permalink:"/docs/20/Events/onVpReady",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpReady.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onVpReady",title:"On VP Ready"},sidebar:"docs",previous:{title:"On VP Range Changed",permalink:"/docs/20/Events/onVpRangeChanged"},next:{title:"On Window Opening Denied",permalink:"/docs/20/Events/onWindowOpeningDenied"}},a={},c=[{value:"Description",id:"Description",level:2}];function l(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Can be called by"}),(0,o.jsx)(n.th,{children:"Definition"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"9"}),(0,o.jsx)(n.td,{children:(0,o.jsx)(n.a,{href:"/docs/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})}),(0,o.jsx)(n.td,{children:"The loading of the 4D View Pro area is complete"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,o.jsx)(n.p,{children:"This event is generated when the 4D View Pro area loading is complete."}),"\n",(0,o.jsxs)(n.p,{children:["You need to use this event to write initialization code for the area. Any 4D View Pro area initialization code, for loading or reading values from or in the area, must be located in the ",(0,o.jsx)(n.code,{children:"On VP Ready"})," form event of the area. This form event is triggered once the area loading is complete. Testing this event makes you sure that the code will be executed in a valid context. An error is returned if a 4D View Pro command is called before the ",(0,o.jsx)(n.code,{children:"On VP Ready"})," form event is generated."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["4D View Pro areas are loaded asynchronously in 4D forms. It means that the standard ",(0,o.jsx)(n.a,{href:"/docs/20/Events/onLoad",children:"On load"})," form event cannot be used for 4D View Pro initialization code, since it could be executed before the loading of the area is complete. ",(0,o.jsx)(n.code,{children:"On VP Ready"})," is always generated after ",(0,o.jsx)(n.a,{href:"/docs/20/Events/onLoad",children:"On load"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var o=t(296540),r=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,i={},c=null,l=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(l=n.ref),n)s.call(n,o)&&!a.hasOwnProperty(o)&&(i[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===i[o]&&(i[o]=n[o]);return{$$typeof:r,type:e,key:c,ref:l,props:i,_owner:d.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>d});var o=t(296540);const r={},i=o.createContext(r);function s(e){const n=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);