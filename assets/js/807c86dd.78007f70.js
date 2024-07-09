/*! For license information please see 807c86dd.78007f70.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82011],{786653:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>u,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(474848),i=n(28453);const s={id:"timeout",title:"$timeout"},r=void 0,c={id:"REST/timeout",title:"$timeout",description:"Defines the number of seconds to save an entity set in 4D Server's cache (e.g., $timeout=1800)",source:"@site/versioned_docs/version-20-R5/REST/$timeout.md",sourceDirName:"REST",slug:"/REST/timeout",permalink:"/docs/REST/timeout",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"timeout",title:"$timeout"},sidebar:"docs",previous:{title:"$skip",permalink:"/docs/REST/skip"},next:{title:"$top/$limit",permalink:"/docs/REST/top_$limit"}},d={},a=[{value:"Description",id:"Description",level:2},{value:"Example",id:"Example",level:2}];function l(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Defines the number of seconds to save an entity set in 4D Server's cache (",(0,o.jsx)(t.em,{children:"e.g."}),", ",(0,o.jsx)(t.code,{children:"$timeout=1800"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"Description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["To define a timeout for an entity set that you create using ",(0,o.jsx)(t.a,{href:"/docs/REST/method#methodentityset",children:(0,o.jsx)(t.code,{children:"$method=entityset"})}),", pass the number of seconds to ",(0,o.jsx)(t.code,{children:"$timeout"}),". For example, if you want to set the timeout to 20 minutes, pass 1200. By default, the timeout is two (2) hours."]}),"\n",(0,o.jsxs)(t.p,{children:["Once the timeout has been defined, each time an entity set is called upon (by using ",(0,o.jsx)(t.code,{children:"$method=entityset"}),"), the timeout is recalculated based on the current time and the timeout."]}),"\n",(0,o.jsxs)(t.p,{children:["If an entity set is removed and then recreated using ",(0,o.jsx)(t.code,{children:"$method=entityset"})," along with ",(0,o.jsx)(t.a,{href:"/docs/REST/savedfilter",children:(0,o.jsx)(t.code,{children:"$savedfilter"})}),", the new default timeout is 10 minutes regardless of the timeout you defined when calling ",(0,o.jsx)(t.code,{children:"$timeout"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"Example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"In our entity set that we're creating, we define the timeout to 20 minutes:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:' GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200'})})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,t,n)=>{var o=n(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,n){var o,s={},a=null,l=null;for(o in void 0!==n&&(a=""+n),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(l=t.ref),t)r.call(t,o)&&!d.hasOwnProperty(o)&&(s[o]=t[o]);if(e&&e.defaultProps)for(o in t=e.defaultProps)void 0===s[o]&&(s[o]=t[o]);return{$$typeof:i,type:e,key:a,ref:l,props:s,_owner:c.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var o=n(296540);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);