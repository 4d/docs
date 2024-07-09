/*! For license information please see c14207f5.06d39195.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2741],{686328:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=r(474848),i=r(28453);const s={id:"savedfilter",title:"$savedfilter"},o=void 0,l={id:"REST/savedfilter",title:"$savedfilter",description:'Saves the filter defined by $filter when creating an entity set (e.g., $savedfilter="")',source:"@site/versioned_docs/version-18/REST/$savedfilter.md",sourceDirName:"REST",slug:"/REST/savedfilter",permalink:"/docs/18/REST/savedfilter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"savedfilter",title:"$savedfilter"},sidebar:"docs",previous:{title:"$queryplan",permalink:"/docs/18/REST/queryplan"},next:{title:"$savedorderby",permalink:"/docs/18/REST/savedorderby"}},a={},d=[{value:"Description",id:"Description",level:2},{value:"Example",id:"Example",level:2}];function c(e){const t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,i.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Saves the filter defined by $filter when creating an entity set (",(0,n.jsx)(t.em,{children:"e.g."}),", ",(0,n.jsx)(t.code,{children:'$savedfilter="{filter}"'}),")"]}),"\n",(0,n.jsx)(t.h2,{id:"Description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["When you create an entity set, you can save the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,n.jsx)(t.a,{href:"/docs/18/REST/method#methodrelease",children:(0,n.jsx)(t.code,{children:"$method=release"})}),")."]}),"\n",(0,n.jsxs)(t.p,{children:["You use ",(0,n.jsx)(t.code,{children:"$savedfilter"})," to save the filter you defined when creating your entity set and then pass ",(0,n.jsx)(t.code,{children:"$savedfilter"})," along with your call to retrieve the entity set each time."]}),"\n",(0,n.jsx)(t.p,{children:"If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it."}),"\n",(0,n.jsxs)(t.p,{children:["If you have used both ",(0,n.jsx)(t.code,{children:"$savedfilter"})," and ",(0,n.jsx)(t.a,{href:"/docs/18/REST/savedorderby",children:(0,n.jsx)(t.code,{children:"$savedorderby"})})," in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that."]}),"\n",(0,n.jsx)(t.h2,{id:"Example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"In our example, we first call ``$savedfilter` with the initial call to create an entity set as shown below:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:' GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset'})}),"\n",(0,n.jsx)(t.p,{children:"Then, when you access your entity set, you write the following to ensure that the entity set is always valid:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:' GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"'})})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,t,r)=>{var n=r(296540),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var n,s={},d=null,c=null;for(n in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,n)&&!a.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:d,ref:c,props:s,_owner:l.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},474848:(e,t,r)=>{e.exports=r(221020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>l});var n=r(296540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);