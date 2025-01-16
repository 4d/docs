"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15310"],{993250:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>n,assets:()=>a,toc:()=>l,contentTitle:()=>i});var n=JSON.parse('{"id":"REST/savedorderby","title":"$savedorderby","description":"Saves the order by defined by $orderby when creating an entity set (e.g., $savedorderby=\\"\\")","source":"@site/versioned_docs/version-20-R7/REST/$savedorderby.md","sourceDirName":"REST","slug":"/REST/savedorderby","permalink":"/docs/20-R7/REST/savedorderby","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedorderby.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"savedorderby","title":"$savedorderby"},"sidebar":"docs","previous":{"title":"$savedfilter","permalink":"/docs/20-R7/REST/savedfilter"},"next":{"title":"$skip","permalink":"/docs/20-R7/REST/skip"}}'),s=r("785893"),o=r("250065");let d={id:"savedorderby",title:"$savedorderby"},i=void 0,a={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Saves the order by defined by ",(0,s.jsx)(t.code,{children:"$orderby"})," when creating an entity set (",(0,s.jsx)(t.em,{children:"e.g."}),", ",(0,s.jsx)(t.code,{children:'$savedorderby="{orderby}"'}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["When you create an entity set, you can save the sort order along with the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,s.jsx)(t.a,{href:"/docs/20-R7/REST/method#methodrelease",children:(0,s.jsx)(t.code,{children:"$method=release"})}),")."]}),"\n",(0,s.jsxs)(t.p,{children:["You use ",(0,s.jsx)(t.code,{children:"$savedorderby"})," to save the order you defined when creating your entity set, you then pass ",(0,s.jsx)(t.code,{children:"$savedorderby"})," along with your call to retrieve the entity set each time."]}),"\n",(0,s.jsxs)(t.p,{children:["If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. If you have used both ",(0,s.jsx)(t.a,{href:"/docs/20-R7/REST/savedfilter",children:(0,s.jsx)(t.code,{children:"$savedfilter"})})," and ",(0,s.jsx)(t.code,{children:"$savedorderby"})," in your call when creating an entity set and then you omit one of them, the new entity set, having the same reference number, will reflect that."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(t.p,{children:["You first call ",(0,s.jsx)(t.code,{children:"$savedorderby"})," with the initial call to create an entity set:"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:'GET  /rest/People/?$filter="lastName!=\'\'"&$savedfilter="lastName!=\'\'"&$orderby="salary"&$savedorderby="salary"&$method=entityset'})}),"\n",(0,s.jsx)(t.p,{children:"Then, when you access your entity set, you write the following (using both $savedfilter and $savedorderby) to ensure that the filter and its sort order always exists:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:' GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="lastName!=\'\'"&$savedorderby="salary"'})})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return i},a:function(){return d}});var n=r(667294);let s={},o=n.createContext(s);function d(e){let t=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);