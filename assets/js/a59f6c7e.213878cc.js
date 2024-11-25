"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7931"],{152418:function(e,s,t){t.r(s),t.d(s,{metadata:()=>n,contentTitle:()=>i,default:()=>h,assets:()=>l,toc:()=>o,frontMatter:()=>d});var n=JSON.parse('{"id":"REST/REST_requests","title":"About REST Requests","description":"The following structures are supported for REST requests:","source":"@site/versioned_docs/version-20-R7/REST/REST_requests.md","sourceDirName":"REST","slug":"/REST/REST_requests","permalink":"/docs/REST/REST_requests","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FREST_requests.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"REST_requests","title":"About REST Requests"},"sidebar":"docs","previous":{"title":"Calling class functions","permalink":"/docs/REST/classFunctions"},"next":{"title":"API (general)","permalink":"/docs/category/api-general"}}'),r=t("785893"),a=t("250065");let d={id:"REST_requests",title:"About REST Requests"},i=void 0,l={},o=[{value:"REST Status and Response",id:"rest-status-and-response",level:2},{value:"Request Status",id:"request-status",level:3},{value:"Response",id:"response",level:3}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"The following structures are supported for REST requests:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"URI"}),(0,r.jsx)(s.th,{children:"Resource (Input)"}),(0,r.jsx)(s.th,{children:"/? or &{filter} (Output)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"http://{servername}:{port}/rest/"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/REST/dataClass",children:"{dataClass}"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/REST/filter",children:"$filter"}),", ",(0,r.jsx)(s.a,{href:"/docs/REST/attributes",children:"$attributes"}),", ",(0,r.jsx)(s.a,{href:"/docs/REST/skip",children:"$skip"}),", ",(0,r.jsx)(s.a,{href:"/docs/REST/method",children:"$method=..."}),"..."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/REST/dataClass",children:"{dataClass}"}),"/",(0,r.jsx)(s.a,{href:"/docs/REST/entityset#entitysetentitysetid",children:"$entityset/{entitySetID}"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/REST/method",children:"$method=..."})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/REST/dataClass#dataclasskey",children:"{dataClass}({key})"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/REST/attributes",children:"$attributes"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/REST/dataClass#dataclassattributevalue",children:"{dataClass}:{attribute}(value)"})}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"While all REST requests must contain the URI and Resource parameters, the Output (which filters the data returned) is optional."}),"\n",(0,r.jsx)(s.p,{children:"As with all URIs, the first parameter is delimited by a \u201C?\u201D and all subsequent parameters by a \u201C&\u201D. For example:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"You can place all values in quotes in case of ambiguity. For example, in our above example, we could have put the value for the last name in single quotes: \"lastName!='Jones'\"."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["The parameters allow you to manipulate data in dataclasses in your 4D project. Besides retrieving data using ",(0,r.jsx)(s.code,{children:"GET"})," HTTP methods, you can also add, update, and delete entities in a dataclass using ",(0,r.jsx)(s.code,{children:"POST"})," HTTP methods."]}),"\n",(0,r.jsxs)(s.p,{children:["If you want the data to be returned in an array instead of JSON, use the ",(0,r.jsx)(s.a,{href:"/docs/REST/asArray",children:(0,r.jsx)(s.code,{children:"$asArray"})})," parameter."]}),"\n",(0,r.jsx)(s.h2,{id:"rest-status-and-response",children:"REST Status and Response"}),"\n",(0,r.jsx)(s.p,{children:"With each REST request, the server returns the status and a response (with or without an error)."}),"\n",(0,r.jsx)(s.h3,{id:"request-status",children:"Request Status"}),"\n",(0,r.jsx)(s.p,{children:"With each REST request, you get the status along with the response. Below are a few of the statuses that can arise:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Status"}),(0,r.jsx)(s.th,{children:"Description"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Request not processed (server might not be started)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"200 OK"}),(0,r.jsx)(s.td,{children:"Request processed without error."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"401 Unauthorized"}),(0,r.jsx)(s.td,{children:"Permissions error (check user's permissions)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"402 No session"}),(0,r.jsx)(s.td,{children:"Maximum number of sessions has been reached."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"404 Not Found"}),(0,r.jsx)(s.td,{children:"The data class is not accessible via REST or the entity set doesn't exist."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"500 Internal Server Error"}),(0,r.jsx)(s.td,{children:"Error processing the REST request."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"response",children:"Response"}),"\n",(0,r.jsx)(s.p,{children:"The response (in JSON format) varies depending on the request."}),"\n",(0,r.jsx)(s.p,{children:"If an error arises, it will be sent along with the response from the server or it will be the response from the server."})]})}function h(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return i},a:function(){return d}});var n=t(667294);let r={},a=n.createContext(r);function d(e){let s=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);