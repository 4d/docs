/*! For license information please see 5a003ec8.12ee9f60.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4676],{981283:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var t=o(474848),s=o(28453);const r={id:"onCloseBox",title:"On Close Box"},i=void 0,l={id:"Events/onCloseBox",title:"On Close Box",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20/Events/onCloseBox.md",sourceDirName:"Events",slug:"/Events/onCloseBox",permalink:"/docs/20/Events/onCloseBox",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonCloseBox.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onCloseBox",title:"On Close Box"},sidebar:"docs",previous:{title:"On Clicked",permalink:"/docs/20/Events/onClicked"},next:{title:"On Close Detail",permalink:"/docs/20/Events/onCloseDetail"}},d={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Can be called by"}),(0,t.jsx)(n.th,{children:"Definition"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"22"}),(0,t.jsx)(n.td,{children:"Form"}),(0,t.jsx)(n.td,{children:"The window\u2019s close box has been clicked"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"On Close Box"})," event is generated when the user clicks on the clos box of the window."]}),"\n",(0,t.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"This example shows how to respond to a close window event with a form used for record data entry:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'  //Method for an input form\n $vpFormTable:=Current form table\n Case of\n  //...\n    :(Form event code=On Close Box)\n       If(Modified record($vpFormTable->))\n          CONFIRM("This record has been modified. Save Changes?")\n          If(OK=1)\n             ACCEPT\n          Else\n             CANCEL\n          End if\n       Else\n          CANCEL\n       End if\n  //...\n End case\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,n,o)=>{var t=o(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,o){var t,r={},c=null,a=null;for(t in void 0!==o&&(c=""+o),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)i.call(n,t)&&!d.hasOwnProperty(t)&&(r[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===r[t]&&(r[t]=n[t]);return{$$typeof:s,type:e,key:c,ref:a,props:r,_owner:l.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},474848:(e,n,o)=>{e.exports=o(221020)},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>l});var t=o(296540);const s={},r=t.createContext(s);function i(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);