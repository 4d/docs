/*! For license information please see 8ef47fcf.57b6ed35.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[26452],{727835:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(474848),s=n(28453);const i={id:"onOpenDetail",title:"On Open Detail"},r=void 0,l={id:"Events/onOpenDetail",title:"On Open Detail",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-19/Events/onOpenDetail.md",sourceDirName:"Events",slug:"/Events/onOpenDetail",permalink:"/docs/19/Events/onOpenDetail",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonOpenDetail.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onOpenDetail",title:"On Open Detail"},sidebar:"docs",previous:{title:"On Mouse Up",permalink:"/docs/19/Events/onMouseUp"},next:{title:"On Open External Link",permalink:"/docs/19/Events/onOpenExternalLink"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Displayed line number",id:"displayed-line-number",level:3}];function a(e){const t={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Can be called by"}),(0,o.jsx)(t.th,{children:"Definition"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"25"}),(0,o.jsxs)(t.td,{children:["Form - ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/listboxOverview",children:"List Box"})]}),(0,o.jsx)(t.td,{children:"The detail form associated with the output form or with the list box is about to be opened."})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"On Open Detail"})," event can be used in the following contexts:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"Output forms"}),": A record is about to be displayed in the detail form associated with the output form. This event cannot be selected for project forms, it is only available with ",(0,o.jsx)(t.strong,{children:"table forms"}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["List box of the ",(0,o.jsx)(t.a,{href:"/docs/19/FormObjects/listboxOverview#selection-list-boxes",children:(0,o.jsx)(t.strong,{children:"selection type"})}),": This event is generated when a record is about to be displayed in the detail form associated with a list box of the selection type (and before this form is opened)."]}),"\n"]}),"\n",(0,o.jsx)(t.h3,{id:"displayed-line-number",children:"Displayed line number"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.code,{children:"Displayed line number"})," 4D command works with the ",(0,o.jsx)(t.code,{children:"On Open Detail"})," form event. It returns the number of the row being processed while a list of records or list box rows is displayed on screen."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},221020:(e,t,n)=>{var o=n(296540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,l=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var o,i={},c=null,a=null;for(o in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(a=t.ref),t)r.call(t,o)&&!d.hasOwnProperty(o)&&(i[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===i[o]&&(i[o]=t[o]);return{$$typeof:s,type:e,key:c,ref:a,props:i,_owner:l.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>l});var o=n(296540);const s={},i=o.createContext(s);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);