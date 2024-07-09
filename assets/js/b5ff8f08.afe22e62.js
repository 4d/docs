/*! For license information please see b5ff8f08.afe22e62.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58402],{193703:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=n(474848),o=n(28453);const r={id:"top_$limit",title:"$top/$limit"},s=void 0,l={id:"REST/top_$limit",title:"$top/$limit",description:"Limits the number of entities to return (e.g., $top=50)",source:"@site/versioned_docs/version-19/REST/$top_$limit.md",sourceDirName:"REST",slug:"/REST/top_$limit",permalink:"/docs/19/REST/top_$limit",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24top_%24limit.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"top_$limit",title:"$top/$limit"},sidebar:"docs",previous:{title:"$timeout",permalink:"/docs/19/REST/timeout"},next:{title:"$version",permalink:"/docs/19/REST/version"}},c={},d=[{value:"Description",id:"Description",level:2},{value:"Example",id:"Example",level:2}];function p(e){const t={a:"a",code:"code",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Limits the number of entities to return (e.g., ",(0,i.jsx)(t.code,{children:"$top=50"}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"Description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"$top/$limit"})," defines the limit of entities to return. By default, the number is limited to 100. You can use either keyword: ",(0,i.jsx)(t.code,{children:"$top"})," or ",(0,i.jsx)(t.code,{children:"$limit"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["When used in conjunction with ",(0,i.jsx)(t.a,{href:"/docs/19/REST/skip",children:(0,i.jsx)(t.code,{children:"$skip"})}),", you can navigate through the entity selection returned by the REST request."]}),"\n",(0,i.jsx)(t.h2,{id:"Example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"In the following example, we request the next ten entities after the 20th entity:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10"})})]})}function u(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,t,n)=>{var i=n(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,l=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,r={},d=null,p=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)s.call(t,i)&&!c.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:o,type:e,key:d,ref:p,props:r,_owner:l.current}}t.Fragment=r,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>l});var i=n(296540);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);