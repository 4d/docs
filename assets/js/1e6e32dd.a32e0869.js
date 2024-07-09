/*! For license information please see 1e6e32dd.a32e0869.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62949],{637531:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(474848),o=t(28453);const i={id:"onUrlFiltering",title:"On URL Filtering"},s=void 0,l={id:"Events/onUrlFiltering",title:"On URL Filtering",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R5/Events/onUrlFiltering.md",sourceDirName:"Events",slug:"/Events/onUrlFiltering",permalink:"/docs/Events/onUrlFiltering",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonUrlFiltering.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onUrlFiltering",title:"On URL Filtering"},sidebar:"docs",previous:{title:"On Unload",permalink:"/docs/Events/onUnload"},next:{title:"On URL Loading Error",permalink:"/docs/Events/onUrlLoadingError"}},d={},c=[{value:"Description",id:"Description",level:2},{value:"See also",id:"See-also",level:3}];function a(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Can be called by"}),(0,r.jsx)(n.th,{children:"Definition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"51"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/FormObjects/webAreaOverview",children:"Web Area"})}),(0,r.jsx)(n.td,{children:"A URL was blocked by the Web area"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["This event is generated when the loading of a URL is blocked by the Web area because of a filter set up using the ",(0,r.jsx)(n.code,{children:"WA SET URL FILTERS"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["You can find out the blocked URL using the ",(0,r.jsx)(n.code,{children:"WA Get last filtered URL"})," command."]}),"\n",(0,r.jsx)(n.h3,{id:"See-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/Events/onOpenExternalLink",children:(0,r.jsx)(n.code,{children:"On Open External Link"})})})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),i=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,i={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,r)&&!d.hasOwnProperty(r)&&(i[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===i[r]&&(i[r]=n[r]);return{$$typeof:o,type:e,key:c,ref:a,props:i,_owner:l.current}}n.Fragment=i,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(296540);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);