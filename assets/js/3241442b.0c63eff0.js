/*! For license information please see 3241442b.0c63eff0.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13541],{972235:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>h,frontMatter:()=>d,metadata:()=>l,toc:()=>c});var r=t(474848),i=t(28453);const d={id:"onVpRangeChanged",title:"On VP Range Changed"},s=void 0,l={id:"Events/onVpRangeChanged",title:"On VP Range Changed",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20/Events/onVpRangeChanged.md",sourceDirName:"Events",slug:"/Events/onVpRangeChanged",permalink:"/docs/20/Events/onVpRangeChanged",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpRangeChanged.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onVpRangeChanged",title:"On VP Range Changed"},sidebar:"docs",previous:{title:"On Validate",permalink:"/docs/20/Events/onValidate"},next:{title:"On VP Ready",permalink:"/docs/20/Events/onVpReady"}},o={},c=[{value:"Description",id:"Description",level:2}];function a(e){const n={a:"a",blockquote:"blockquote",h2:"h2",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Can be called by"}),(0,r.jsx)(n.th,{children:"Definition"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"61"}),(0,r.jsx)(n.td,{children:(0,r.jsx)(n.a,{href:"/docs/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})}),(0,r.jsx)(n.td,{children:"The 4D View Pro cell range has changed (e.g., a formula calculation, value removed from a cell, etc.)"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"Description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"This event is generated when a change occurs within a cell range in the 4D View Pro document."}),"\n",(0,r.jsx)(n.p,{children:"The object returned by the FORM Event command contains:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"longint"}),(0,r.jsx)(n.td,{children:"On VP Range Changed"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On VP Range Changed"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Name of the sheet of the event"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Cell range of the change"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"changedCells"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Range containing only the changed cells. It can be a combined range."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"action"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsxs)(n.td,{children:["The type of operation generating the event:",(0,r.jsx)(n.li,{children:'"clear" - A clear range value operation'}),(0,r.jsx)(n.li,{children:'"dragDrop" - A drag and drop operation'}),(0,r.jsx)(n.li,{children:'"dragFill" - A drag fill operation'}),(0,r.jsx)(n.li,{children:'"evaluateFormula" - Setting a formula in a specified cell range'}),(0,r.jsx)(n.li,{children:'"paste" - A paste operation'}),(0,r.jsx)(n.li,{children:'"setArrayFormula" - Setting a formula in a specified cell range'}),(0,r.jsx)(n.li,{children:'"sort" - Sorting a range of cells'})]})]})]})]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["See also ",(0,r.jsx)(n.a,{href:"/docs/20/Events/onAfterEdit",children:"On After Edit"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),d=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,d={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)s.call(n,r)&&!o.hasOwnProperty(r)&&(d[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===d[r]&&(d[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:a,props:d,_owner:l.current}}n.Fragment=d,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>l});var r=t(296540);const i={},d=r.createContext(i);function s(e){const n=r.useContext(d);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);