/*! For license information please see 30c0be35.ad17fc5b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91364],{399372:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>l});var n=o(474848),r=o(28453);const s={id:"onRowMoved",title:"On Row Moved"},i=void 0,d={id:"Events/onRowMoved",title:"On Row Moved",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R6/Events/onRowMoved.md",sourceDirName:"Events",slug:"/Events/onRowMoved",permalink:"/docs/Events/onRowMoved",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonRowMoved.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onRowMoved",title:"On Row Moved"},sidebar:"docs",previous:{title:"On Resize",permalink:"/docs/Events/onResize"},next:{title:"On Row Resize",permalink:"/docs/Events/onRowResize"}},c={},l=[{value:"Description",id:"description",level:2}];function a(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Code"}),(0,n.jsx)(t.th,{children:"Can be called by"}),(0,n.jsx)(t.th,{children:"Definition"})]})}),(0,n.jsx)(t.tbody,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"34"}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview#array-list-boxes",children:"List Box of the array type"})," - ",(0,n.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})]}),(0,n.jsx)(t.td,{children:"A list box row is moved by the user via drag and drop"})]})})]}),"\n",(0,n.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["This event is generated when a row of the list box (",(0,n.jsx)(t.a,{href:"/docs/FormObjects/listboxOverview#array-list-boxes",children:"array type only"}),") is moved by the user using drag and drop (",(0,n.jsx)(t.a,{href:"/docs/FormObjects/propertiesAction#movable-rows",children:"if allowed"}),". It is not generated if the row is dragged and then dropped in its initial location."]}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.code,{children:"LISTBOX MOVED ROW NUMBER"})," command returns the new position of the row."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},221020:(e,t,o)=>{var n=o(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,o){var n,s={},l=null,a=null;for(n in void 0!==o&&(l=""+o),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(a=t.ref),t)i.call(t,n)&&!c.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:a,props:s,_owner:d.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,o)=>{e.exports=o(221020)},28453:(e,t,o)=>{o.d(t,{R:()=>i,x:()=>d});var n=o(296540);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);