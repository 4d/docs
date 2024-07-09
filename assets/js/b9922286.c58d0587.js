/*! For license information please see b9922286.c58d0587.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5659],{526795:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(474848),r=n(28453);const s={id:"onActivate",title:"On Activate"},i=void 0,c={id:"Events/onActivate",title:"On Activate",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20/Events/onActivate.md",sourceDirName:"Events",slug:"/Events/onActivate",permalink:"/docs/20/Events/onActivate",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonActivate.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onActivate",title:"On Activate"},sidebar:"docs",previous:{title:"Form Events",permalink:"/docs/20/Events/overview"},next:{title:"On After Edit",permalink:"/docs/20/Events/onAfterEdit"}},d={},a=[{value:"Description",id:"Description",level:2}];function l(e){const t={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Can be called by"}),(0,o.jsx)(t.th,{children:"Definition"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"11"}),(0,o.jsx)(t.td,{children:"Form"}),(0,o.jsx)(t.td,{children:"The form's window becomes the frontmost window or the subform's container gets the focus"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"Description",children:"Description"}),"\n",(0,o.jsx)(t.p,{children:"If the window of a form was sent to the background, this event is called when the window becomes the frontmost window."}),"\n",(0,o.jsxs)(t.p,{children:["This event applies to the form as a whole and not to a particular object. Consequently, if the ",(0,o.jsx)(t.code,{children:"On Activate"})," form event property is selected, only the form will have its form method called."]}),"\n",(0,o.jsxs)(t.p,{children:["In the case of a subform, this event is passed to the subform when the container gets the focus (if it has the ",(0,o.jsx)(t.a,{href:"/docs/20/FormObjects/propertiesEntry#focusable",children:"focusable"})," property)."]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var o,s={},a=null,l=null;for(o in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,o)&&!d.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:r,type:e,key:a,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(296540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);