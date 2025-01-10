"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54416"],{172128:function(e,t,n){n.r(t),n.d(t,{default:()=>u,frontMatter:()=>o,metadata:()=>i,assets:()=>a,toc:()=>l,contentTitle:()=>r});var i=JSON.parse('{"id":"REST/distinct","title":"$distinct","description":"Returns the distinct values for a specific attribute in a collection (e.g., Company/name?$filter=\\"name=a*\\"&$distinct=true)","source":"@site/versioned_docs/version-20/REST/$distinct.md","sourceDirName":"REST","slug":"/REST/distinct","permalink":"/docs/20/REST/distinct","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"distinct","title":"$distinct"},"sidebar":"docs","previous":{"title":"$compute","permalink":"/docs/20/REST/compute"},"next":{"title":"$entityset","permalink":"/docs/20/REST/entityset"}}'),s=n("785893"),c=n("250065");let o={id:"distinct",title:"$distinct"},r=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function d(e){let t={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Returns the distinct values for a specific attribute in a collection (",(0,s.jsx)(t.em,{children:"e.g."}),", ",(0,s.jsx)(t.code,{children:'Company/name?$filter="name=a*"&$distinct=true'}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$distinct"})," allows you to return a collection containing the distinct values for a query on a specific attribute. Only one attribute in the dataclass can be specified. Generally, the String type is best; however, you can also use it on any attribute type that could contain multiple values."]}),"\n",(0,s.jsxs)(t.p,{children:["You can also use ",(0,s.jsx)(t.code,{children:"$skip"})," and ",(0,s.jsx)(t.code,{children:"$top/$limit"})," as well, if you'd like to navigate the selection before it's placed in an array."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:'In our example below, we want to retrieve the distinct values for a company name starting with the letter "a":'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/Company/name?$filter="name=a*"&$distinct=true'})}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Response"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{children:'[\n    "Adobe",\n    "Apple"\n]\n'})})]})}function u(e={}){let{wrapper:t}={...(0,c.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return o}});var i=n(667294);let s={},c=i.createContext(s);function o(e){let t=i.useContext(c);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);