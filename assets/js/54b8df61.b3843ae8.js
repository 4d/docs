/*! For license information please see 54b8df61.b3843ae8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21227],{50784:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>a,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(474848),o=n(28453);const s={id:"skip",title:"$skip"},r=void 0,c={id:"REST/skip",title:"$skip",description:"Starts the entity defined by this number in the collection (e.g., $skip=10)",source:"@site/versioned_docs/version-20-R6/REST/$skip.md",sourceDirName:"REST",slug:"/REST/skip",permalink:"/docs/REST/skip",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24skip.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"skip",title:"$skip"},sidebar:"docs",previous:{title:"$savedorderby",permalink:"/docs/REST/savedorderby"},next:{title:"$timeout",permalink:"/docs/REST/timeout"}},l={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,o.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Starts the entity defined by this number in the collection (",(0,i.jsx)(t.em,{children:"e.g."}),", ",(0,i.jsx)(t.code,{children:"$skip=10"}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"$skip"})," defines which entity in the collection to start with. By default, the collection sent starts with the first entity. To start with the 10th entity in the collection, pass 10."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"$skip"}),"  is generally used in conjunction with ",(0,i.jsx)(t.a,{href:"/docs/REST/top_$limit",children:(0,i.jsx)(t.code,{children:"$top/$limit"})})," to navigate through an entity collection."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"In the following example, we go to the 20th entity in our entity set:"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20"})})]})}function a(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},221020:(e,t,n)=>{var i=n(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var i,s={},d=null,p=null;for(i in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(p=t.ref),t)r.call(t,i)&&!l.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:o,type:e,key:d,ref:p,props:s,_owner:c.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>c});var i=n(296540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);