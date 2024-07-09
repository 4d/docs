/*! For license information please see d51792e4.032b88de.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[47624],{428751:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var r=t(474848),i=t(28453);const s={id:"print",title:"Print"},o=void 0,d={id:"FormEditor/print",title:"Print",description:"Settings",source:"@site/versioned_docs/version-20-R4/FormEditor/properties_Print.md",sourceDirName:"FormEditor",slug:"/FormEditor/print",permalink:"/docs/20-R4/FormEditor/print",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Print.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"print",title:"Print"},sidebar:"docs",previous:{title:"Menu",permalink:"/docs/20-R4/FormEditor/menu"},next:{title:"Window Size",permalink:"/docs/20-R4/FormEditor/windowSize"}},l={},c=[{value:"Settings",id:"Settings",level:2},{value:"JSON Grammar",id:"JSON-Grammar",level:4}];function a(e){const n={blockquote:"blockquote",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h2,{id:"Settings",children:"Settings"}),"\n",(0,r.jsx)(n.p,{children:"Allows defining specific print settings for the form. This feature is useful to view printing page limits in the form editor."}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Compatibility:"})," Even if these settings are taken into account when the form is printed in Application mode, it is discouraged to rely on this feature to store print settings for the form, due to limitations regarding the platform and driver dependency. It is highly recommended to use the 4D commands ",(0,r.jsx)(n.code,{children:"Print settings to BLOB"}),"/",(0,r.jsx)(n.code,{children:"BLOB to print settings"})," which are more powerful."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"You can modify the following print settings:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Paper format"}),"\n",(0,r.jsx)(n.li,{children:"Paper orientation"}),"\n",(0,r.jsx)(n.li,{children:"Page scaling"}),"\n"]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsx)(n.p,{children:"Available options depend on the system configuration."}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"JSON-Grammar",children:"JSON Grammar"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Name"}),(0,r.jsx)(n.th,{children:"Data Type"}),(0,r.jsx)(n.th,{children:"Possible Values"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"pageFormat"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Available print properties: paperName, paperWidth, paperHeight, orientation, scale"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paperName"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:'"A4", "US Letter"...'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paperWidth"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"paperHeight"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:"Used if a paper named paperName was not found. Requires unit suffix: pt, in, mm, cm."})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"orientation"}),(0,r.jsx)(n.td,{children:"string"}),(0,r.jsx)(n.td,{children:'"landscape" (default is "portrait")'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"scale"}),(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"minimum: 0"})]})]})]}),"\n",(0,r.jsx)(n.hr,{})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var r=t(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,s={},c=null,a=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,r)&&!l.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:i,type:e,key:c,ref:a,props:s,_owner:d.current}}n.Fragment=s,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var r=t(296540);const i={},s=r.createContext(i);function o(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);