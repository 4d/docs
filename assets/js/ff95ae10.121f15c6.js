/*! For license information please see ff95ae10.121f15c6.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48016],{520473:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=s(474848),r=s(28453);const a={id:"REST_requests",title:"About REST Requests"},d=void 0,i={id:"REST/REST_requests",title:"About REST Requests",description:"The following structures are supported for REST requests:",source:"@site/versioned_docs/version-20/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/docs/20/REST/REST_requests",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FREST_requests.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"REST_requests",title:"About REST Requests"},sidebar:"docs",previous:{title:"Calling ORDA class functions",permalink:"/docs/20/REST/classFunctions"},next:{title:"API (general)",permalink:"/docs/20/category/api-general"}},o={},l=[{value:"REST Status and Response",id:"REST-Status-and-Response",level:2},{value:"Request Status",id:"Request-Status",level:3},{value:"Response",id:"Response",level:3}];function c(e){const t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"The following structures are supported for REST requests:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"URI"}),(0,n.jsx)(t.th,{children:"Resource (Input)"}),(0,n.jsx)(t.th,{children:"/? or &{filter} (Output)"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"http://{servername}:{port}/rest/"}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/20/REST/dataClass",children:"{dataClass}"})}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/20/REST/filter",children:"$filter"}),", ",(0,n.jsx)(t.a,{href:"/docs/20/REST/attributes",children:"$attributes"}),", ",(0,n.jsx)(t.a,{href:"/docs/20/REST/skip",children:"$skip"}),", ",(0,n.jsx)(t.a,{href:"/docs/20/REST/method",children:"$method=..."}),"..."]})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsxs)(t.td,{children:[(0,n.jsx)(t.a,{href:"/docs/20/REST/dataClass",children:"{dataClass}"}),"/",(0,n.jsx)(t.a,{href:"/docs/20/REST/entityset#entitysetentitysetid",children:"$entityset/{entitySetID}"})]}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/20/REST/method",children:"$method=..."})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/20/REST/dataClass#dataclasskey",children:"{dataClass}({key})"})}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/20/REST/attributes",children:"$attributes"})})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{}),(0,n.jsx)(t.td,{children:(0,n.jsx)(t.a,{href:"/docs/20/REST/dataClass#dataclassattributevalue",children:"{dataClass}:{attribute}(value)"})}),(0,n.jsx)(t.td,{})]})]})]}),"\n",(0,n.jsx)(t.p,{children:"While all REST requests must contain the URI and Resource parameters, the Output (which filters the data returned) is optional."}),"\n",(0,n.jsx)(t.p,{children:"As with all URIs, the first parameter is delimited by a \u201c?\u201d and all subsequent parameters by a \u201c&\u201d. For example:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.code,{children:'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600'})}),"\n",(0,n.jsxs)(t.blockquote,{children:["\n",(0,n.jsx)(t.p,{children:"You can place all values in quotes in case of ambiguity. For example, in our above example, we could have put the value for the last name in single quotes: \"lastName!='Jones'\"."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using ",(0,n.jsx)(t.code,{children:"GET"})," HTTP methods, you can also add, update, and delete entities in a dataclass using ",(0,n.jsx)(t.code,{children:"POST"})," HTTP methods."]}),"\n",(0,n.jsxs)(t.p,{children:["If you want the data to be returned in an array instead of JSON, use the ",(0,n.jsx)(t.a,{href:"/docs/20/REST/asArray",children:(0,n.jsx)(t.code,{children:"$asArray"})})," parameter."]}),"\n",(0,n.jsx)(t.h2,{id:"REST-Status-and-Response",children:"REST Status and Response"}),"\n",(0,n.jsx)(t.p,{children:"With each REST request, the server returns the status and a response (with or without an error)."}),"\n",(0,n.jsx)(t.h3,{id:"Request-Status",children:"Request Status"}),"\n",(0,n.jsx)(t.p,{children:"With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Status"}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"0"}),(0,n.jsx)(t.td,{children:"Request not processed (server might not be started)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"200 OK"}),(0,n.jsx)(t.td,{children:"Request processed without error."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"401 Unauthorized"}),(0,n.jsx)(t.td,{children:"Permissions error (check user's permissions)."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"402 No session"}),(0,n.jsx)(t.td,{children:"Maximum number of sessions has been reached."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"404 Not Found"}),(0,n.jsx)(t.td,{children:"The data class is not accessible via REST or the entity set doesn't exist."})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"500 Internal Server Error"}),(0,n.jsx)(t.td,{children:"Error processing the REST request."})]})]})]}),"\n",(0,n.jsx)(t.h3,{id:"Response",children:"Response"}),"\n",(0,n.jsx)(t.p,{children:"The response (in JSON format) varies depending on the request."}),"\n",(0,n.jsx)(t.p,{children:"If an error arises, it will be sent along with the response from the server or it will be the response from the server."})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},221020:(e,t,s)=>{var n=s(296540),r=Symbol.for("react.element"),a=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,i=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,s){var n,a={},l=null,c=null;for(n in void 0!==s&&(l=""+s),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)d.call(t,n)&&!o.hasOwnProperty(n)&&(a[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===a[n]&&(a[n]=t[n]);return{$$typeof:r,type:e,key:l,ref:c,props:a,_owner:i.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},474848:(e,t,s)=>{e.exports=s(221020)},28453:(e,t,s)=>{s.d(t,{R:()=>d,x:()=>i});var n=s(296540);const r={},a=n.createContext(r);function d(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);