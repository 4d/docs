"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["19310"],{796216:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>s});var r=JSON.parse('{"id":"REST/genInfo","title":"Getting Server Information","description":"You can get several information from the REST server:","source":"@site/versioned_docs/version-20-R8/REST/genInfo.md","sourceDirName":"REST","slug":"/REST/genInfo","permalink":"/docs/REST/genInfo","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"genInfo","title":"Getting Server Information"},"sidebar":"docs","previous":{"title":"Users and sessions","permalink":"/docs/REST/authUsers"},"next":{"title":"Manipulating Data","permalink":"/docs/REST/manData"}}'),a=t("785893"),i=t("250065");let o={id:"genInfo",title:"Getting Server Information"},s=void 0,l={},c=[{value:"Catalog",id:"catalog",level:2},{value:"Cache info",id:"cache-info",level:2},{value:"queryPath and queryPlan",id:"querypath-and-queryplan",level:2}];function d(e){let n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"You can get several information from the REST server:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"the exposed datastores and their attributes"}),"\n",(0,a.jsx)(n.li,{children:"the REST server cache contents, including user sessions."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"catalog",children:"Catalog"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.a,{href:"/docs/REST/catalog",children:(0,a.jsx)(n.code,{children:"$catalog"})}),", ",(0,a.jsx)(n.a,{href:"/docs/REST/catalog#catalogdataclass",children:(0,a.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})}),", or ",(0,a.jsx)(n.a,{href:"/docs/REST/catalog#catalogall",children:(0,a.jsx)(n.code,{children:"$catalog/$all"})})," parameters to get the list of ",(0,a.jsx)(n.a,{href:"/docs/REST/configuration#exposing-tables-and-fields",children:"exposed dataclasses and their attributes"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"To get the collection of all exposed dataclasses along with their attributes:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"GET /rest/$catalog/$all"})}),"\n",(0,a.jsx)(n.h2,{id:"cache-info",children:"Cache info"}),"\n",(0,a.jsxs)(n.p,{children:["Use the ",(0,a.jsx)(n.a,{href:"/docs/REST/info",children:(0,a.jsx)(n.code,{children:"$info"})})," parameter to get information about the entity selections currently stored in 4D Server's cache as well as running user sessions."]}),"\n",(0,a.jsx)(n.h2,{id:"querypath-and-queryplan",children:"queryPath and queryPlan"}),"\n",(0,a.jsxs)(n.p,{children:["Entity selections that are generated through queries can have the following two properties: ",(0,a.jsx)(n.code,{children:"queryPlan"})," and ",(0,a.jsx)(n.code,{children:"queryPath"}),". To calculate and return these properties, you just need to add ",(0,a.jsx)(n.a,{href:"/docs/REST/queryplan",children:(0,a.jsx)(n.code,{children:"$queryPlan"})})," and/or ",(0,a.jsx)(n.a,{href:"/docs/REST/querypath",children:(0,a.jsx)(n.code,{children:"$queryPath"})})," in the REST request."]}),"\n",(0,a.jsx)(n.p,{children:"For example:"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true'})}),"\n",(0,a.jsx)(n.p,{children:"These properties are objects that contain information about how the server performs composite queries internally through dataclasses and relations:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"queryPlan"}),": object containing the detailed description of the query just before it was executed (i.e., the planned query)."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.strong,{children:"queryPath"}),": object containing the detailed description of the query as it was actually performed."]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"The information recorded includes the query type (indexed and sequential) and each necessary subquery along with conjunction operators. Query paths also contain the number of entities found and the time required to execute each search criterion. You may find it useful to analyze this information while developing your application. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low."})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return o}});var r=t(667294);let a={},i=r.createContext(a);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);