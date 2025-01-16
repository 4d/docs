"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28982"],{592400:function(e,t,r){r.r(t),r.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"REST/orderby","title":"$orderby","description":"Sorts the data returned by the attribute and sorting order defined (e.g., $orderby=\\"lastName desc, salary asc\\")","source":"@site/versioned_docs/version-20-R7/REST/$orderby.md","sourceDirName":"REST","slug":"/REST/orderby","permalink":"/docs/20-R7/REST/orderby","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"orderby","title":"$orderby"},"sidebar":"docs","previous":{"title":"$method","permalink":"/docs/20-R7/REST/method"},"next":{"title":"$querypath","permalink":"/docs/20-R7/REST/querypath"}}'),s=r("785893"),d=r("250065");let o={id:"orderby",title:"$orderby"},i=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function l(e){let t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Sorts the data returned by the attribute and sorting order defined (",(0,s.jsx)(t.em,{children:"e.g."}),", ",(0,s.jsx)(t.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$orderby"})," orders the entities returned by the REST request. For each attribute, you specify the order as ",(0,s.jsx)(t.code,{children:"ASC"})," (or ",(0,s.jsx)(t.code,{children:"asc"}),") for ascending order and ",(0,s.jsx)(t.code,{children:"DESC"})," (",(0,s.jsx)(t.code,{children:"desc"}),") for descending order. By default, the data is sorted in ascending order. If you want to specify multiple attributes, you can delimit them with a comma, ",(0,s.jsx)(t.em,{children:"e.g."}),", ",(0,s.jsx)(t.code,{children:'$orderby="lastName desc, firstName asc"'}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"In this example, we retrieve entities and sort them at the same time:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,s.jsx)(t.p,{children:"The example below sorts the entity set by lastName attribute in ascending order:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Result"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n'})})]})}function m(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return o}});var n=r(667294);let s={},d=n.createContext(s);function o(e){let t=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),n.createElement(d.Provider,{value:t},e.children)}}}]);