"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[48016],{520473:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>o,contentTitle:()=>a,default:()=>h,frontMatter:()=>d,metadata:()=>i,toc:()=>l});var n=t(474848),r=t(28453);const d={id:"REST_requests",title:"About REST Requests"},a=void 0,i={id:"REST/REST_requests",title:"About REST Requests",description:"The following structures are supported for REST requests:",source:"@site/versioned_docs/version-20/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/docs/20/REST/REST_requests",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FREST_requests.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"REST_requests",title:"About REST Requests"},sidebar:"docs",previous:{title:"Calling ORDA class functions",permalink:"/docs/20/REST/classFunctions"},next:{title:"API (general)",permalink:"/docs/20/category/api-general"}},o={},l=[{value:"REST Status and Response",id:"rest-status-and-response",level:2},{value:"Request Status",id:"request-status",level:3},{value:"Response",id:"response",level:3}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"The following structures are supported for REST requests:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"URI"}),(0,n.jsx)(s.th,{children:"Resource (Input)"}),(0,n.jsx)(s.th,{children:"/? or &{filter} (Output)"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"http://{servername}:{port}/rest/"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/20/REST/dataClass",children:"{dataClass}"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/20/REST/filter",children:"$filter"}),", ",(0,n.jsx)(s.a,{href:"/docs/20/REST/attributes",children:"$attributes"}),", ",(0,n.jsx)(s.a,{href:"/docs/20/REST/skip",children:"$skip"}),", ",(0,n.jsx)(s.a,{href:"/docs/20/REST/method",children:"$method=..."}),"..."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/20/REST/dataClass",children:"{dataClass}"}),"/",(0,n.jsx)(s.a,{href:"/docs/20/REST/entityset#entitysetentitysetid",children:"$entityset/{entitySetID}"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/20/REST/method",children:"$method=..."})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/20/REST/dataClass#dataclasskey",children:"{dataClass}({key})"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/20/REST/attributes",children:"$attributes"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/20/REST/dataClass#dataclassattributevalue",children:"{dataClass}:{attribute}(value)"})}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"While all REST requests must contain the URI and Resource parameters, the Output (which filters the data returned) is optional."}),"\n",(0,n.jsx)(s.p,{children:"As with all URIs, the first parameter is delimited by a \u201c?\u201d and all subsequent parameters by a \u201c&\u201d. For example:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600'})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"You can place all values in quotes in case of ambiguity. For example, in our above example, we could have put the value for the last name in single quotes: \"lastName!='Jones'\"."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using ",(0,n.jsx)(s.code,{children:"GET"})," HTTP methods, you can also add, update, and delete entities in a dataclass using ",(0,n.jsx)(s.code,{children:"POST"})," HTTP methods."]}),"\n",(0,n.jsxs)(s.p,{children:["If you want the data to be returned in an array instead of JSON, use the ",(0,n.jsx)(s.a,{href:"/docs/20/REST/asArray",children:(0,n.jsx)(s.code,{children:"$asArray"})})," parameter."]}),"\n",(0,n.jsx)(s.h2,{id:"rest-status-and-response",children:"REST Status and Response"}),"\n",(0,n.jsx)(s.p,{children:"With each REST request, the server returns the status and a response (with or without an error)."}),"\n",(0,n.jsx)(s.h3,{id:"request-status",children:"Request Status"}),"\n",(0,n.jsx)(s.p,{children:"With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Status"}),(0,n.jsx)(s.th,{children:"Description"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Request not processed (server might not be started)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"200 OK"}),(0,n.jsx)(s.td,{children:"Request processed without error."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"401 Unauthorized"}),(0,n.jsx)(s.td,{children:"Permissions error (check user's permissions)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"402 No session"}),(0,n.jsx)(s.td,{children:"Maximum number of sessions has been reached."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"404 Not Found"}),(0,n.jsx)(s.td,{children:"The data class is not accessible via REST or the entity set doesn't exist."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"500 Internal Server Error"}),(0,n.jsx)(s.td,{children:"Error processing the REST request."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,n.jsx)(s.p,{children:"The response (in JSON format) varies depending on the request."}),"\n",(0,n.jsx)(s.p,{children:"If an error arises, it will be sent along with the response from the server or it will be the response from the server."})]})}function h(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},28453:(e,s,t)=>{t.d(s,{R:()=>a,x:()=>i});var n=t(296540);const r={},d=n.createContext(r);function a(e){const s=n.useContext(d);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);