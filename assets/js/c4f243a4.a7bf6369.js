/*! For license information please see c4f243a4.a7bf6369.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67146],{802166:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var n=r(474848),o=r(28453);const s={id:"version",title:"$version"},i=void 0,c={id:"REST/version",title:"$version",description:"Image version number",source:"@site/versioned_docs/version-20/REST/$version.md",sourceDirName:"REST",slug:"/REST/version",permalink:"/docs/20/REST/version",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24version.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"version",title:"$version"},sidebar:"docs",previous:{title:"$top/$limit",permalink:"/docs/20/REST/top_$limit"},next:{title:"Desktop Applications",permalink:"/docs/20/category/desktop-applications"}},a={},l=[{value:"Description",id:"Description",level:2},{value:"Example",id:"Example",level:2}];function p(e){const t={code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"Image version number"}),"\n",(0,n.jsx)(t.h2,{id:"Description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"$version"})," is the image's version number returned by the server. The version number, which is sent by the server, works around the browser's cache so that you are sure to retrieve the correct image."]}),"\n",(0,n.jsx)(t.p,{children:"The value of the image's version parameter is modified by the server."}),"\n",(0,n.jsx)(t.h2,{id:"Example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"The following example defines the image format to JPEG regardless of the actual type of the photo and passes the actual version number sent by the server:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:"GET  /rest/Employee(1)/photo?$imageformat=jpeg&$version=3&$expand=photo"})})]})}function d(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},221020:(e,t,r)=>{var n=r(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,r){var n,s={},l=null,p=null;for(n in void 0!==r&&(l=""+r),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(p=t.ref),t)i.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:o,type:e,key:l,ref:p,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var n=r(296540);const o={},s=n.createContext(o);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);