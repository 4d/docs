/*! For license information please see 6de5b3d0.b5fd3d70.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5798],{772014:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(474848),a=t(28453);const o={id:"genInfo",title:"Getting Server Information"},s=void 0,i={id:"REST/genInfo",title:"Getting Server Information",description:"You can get several information from the REST server:",source:"@site/versioned_docs/version-20-R5/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/docs/REST/genInfo",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"genInfo",title:"Getting Server Information"},sidebar:"docs",previous:{title:"Users and sessions",permalink:"/docs/REST/authUsers"},next:{title:"Manipulating Data",permalink:"/docs/REST/manData"}},l={},c=[{value:"Catalog",id:"Catalog",level:2},{value:"Cache info",id:"Cache-info",level:2},{value:"queryPath and queryPlan",id:"queryPath-and-queryPlan",level:2}];function d(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"You can get several information from the REST server:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"the exposed datastores and their attributes"}),"\n",(0,r.jsx)(n.li,{children:"the REST server cache contents, including user sessions."}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"Catalog",children:"Catalog"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/docs/REST/catalog",children:(0,r.jsx)(n.code,{children:"$catalog"})}),", ",(0,r.jsx)(n.a,{href:"/docs/REST/catalog#catalogdataclass",children:(0,r.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})}),", or ",(0,r.jsx)(n.a,{href:"/docs/REST/catalog#catalogall",children:(0,r.jsx)(n.code,{children:"$catalog/$all"})})," parameters to get the list of ",(0,r.jsx)(n.a,{href:"/docs/REST/configuration#exposing-tables-and-fields",children:"exposed dataclasses and their attributes"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"To get the collection of all exposed dataclasses along with their attributes:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:"GET /rest/$catalog/$all"})}),"\n",(0,r.jsx)(n.h2,{id:"Cache-info",children:"Cache info"}),"\n",(0,r.jsxs)(n.p,{children:["Use the ",(0,r.jsx)(n.a,{href:"/docs/REST/info",children:(0,r.jsx)(n.code,{children:"$info"})})," parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions."]}),"\n",(0,r.jsx)(n.h2,{id:"queryPath-and-queryPlan",children:"queryPath and queryPlan"}),"\n",(0,r.jsxs)(n.p,{children:["Entity selections that are generated through queries can have the following two properties: ",(0,r.jsx)(n.code,{children:"queryPlan"})," and ",(0,r.jsx)(n.code,{children:"queryPath"}),". To calculate and return these properties, you just need to add ",(0,r.jsx)(n.a,{href:"/docs/REST/queryplan",children:(0,r.jsx)(n.code,{children:"$queryPlan"})})," and/or ",(0,r.jsx)(n.a,{href:"/docs/REST/querypath",children:(0,r.jsx)(n.code,{children:"$queryPath"})})," in the REST request."]}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true'})}),"\n",(0,r.jsx)(n.p,{children:"These properties are objects that contain information about how the server performs composite queries internally through dataclasses and relations:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"queryPlan"}),": object containing the detailed description of the query just before it was executed (i.e., the planned query)."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"queryPath"}),": object containing the detailed description of the query as it was actually performed."]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"The information recorded includes the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Query paths also contain the number of entities found and the time required to execute each search criterion. You may find it useful to analyze this information while developing your application. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low."})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),a=Symbol.for("react.element"),o=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var r,o={},c=null,d=null;for(r in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)s.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:a,type:e,key:c,ref:d,props:o,_owner:i.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>s,x:()=>i});var r=t(296540);const a={},o=r.createContext(a);function s(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);