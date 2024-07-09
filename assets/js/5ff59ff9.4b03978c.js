/*! For license information please see 5ff59ff9.4b03978c.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97779],{696732:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var i=n(474848),r=n(28453);const s={id:"distinct",title:"$distinct"},o=void 0,c={id:"REST/distinct",title:"$distinct",description:'Returns the distinct values for a specific attribute in a collection (e.g., Company/name?$filter="name=a*"&$distinct=true)',source:"@site/versioned_docs/version-20-R5/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/docs/REST/distinct",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/docs/REST/compute"},next:{title:"$entityset",permalink:"/docs/REST/entityset"}},a={},l=[{value:"Description",id:"Description",level:2},{value:"Example",id:"Example",level:2}];function d(e){const t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:["Returns the distinct values for a specific attribute in a collection (",(0,i.jsx)(t.em,{children:"e.g."}),", ",(0,i.jsx)(t.code,{children:'Company/name?$filter="name=a*"&$distinct=true'}),")"]}),"\n",(0,i.jsx)(t.h2,{id:"Description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.code,{children:"$distinct"})," allows you to return a collection containing the distinct values for a query on a specific attribute. Only one attribute in the dataclass can be specified. Generally, the String type is best; however, you can also use it on any attribute type that could contain multiple values."]}),"\n",(0,i.jsxs)(t.p,{children:["You can also use ",(0,i.jsx)(t.code,{children:"$skip"})," and ",(0,i.jsx)(t.code,{children:"$top/$limit"})," as well, if you'd like to navigate the selection before it's placed in an array."]}),"\n",(0,i.jsx)(t.h2,{id:"Example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:'In our example below, we want to retrieve the distinct values for a company name starting with the letter "a":'}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.code,{children:'GET  /rest/Company/name?$filter="name=a*"&$distinct=true'})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'[\n    "Adobe",\n    "Apple"\n]\n'})})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},221020:(e,t,n)=>{var i=n(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var i,s={},l=null,d=null;for(i in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(d=t.ref),t)o.call(t,i)&&!a.hasOwnProperty(i)&&(s[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===s[i]&&(s[i]=t[i]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:c.current}}t.Fragment=s,t.jsx=l,t.jsxs=l},474848:(e,t,n)=>{e.exports=n(221020)},28453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>c});var i=n(296540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);