"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47215"],{39953:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>o,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>l});var i=JSON.parse('{"id":"REST/savedfilter","title":"$savedfilter","description":"Saves the filter defined by $filter when creating an entity set (e.g., $savedfilter=\\"\\")","source":"@site/versioned_docs/version-18/REST/$savedfilter.md","sourceDirName":"REST","slug":"/REST/savedfilter","permalink":"/docs/18/REST/savedfilter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24savedfilter.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"savedfilter","title":"$savedfilter"},"sidebar":"docs","previous":{"title":"$queryplan","permalink":"/docs/18/REST/queryplan"},"next":{"title":"$savedorderby","permalink":"/docs/18/REST/savedorderby"}}'),r=n("785893"),s=n("250065");let l={id:"savedfilter",title:"$savedfilter"},o=void 0,a={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function c(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:["Saves the filter defined by $filter when creating an entity set (",(0,r.jsx)(t.em,{children:"e.g."}),", ",(0,r.jsx)(t.code,{children:'$savedfilter="{filter}"'}),")"]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["When you create an entity set, you can save the filter that you used to create it as a measure of security. If the entity set that you created is removed from 4D Server's cache (due to the timeout, the server's need for space, or your removing it by calling ",(0,r.jsx)(t.a,{href:"/docs/18/REST/method#methodrelease",children:(0,r.jsx)(t.code,{children:"$method=release"})}),")."]}),"\n",(0,r.jsxs)(t.p,{children:["You use ",(0,r.jsx)(t.code,{children:"$savedfilter"})," to save the filter you defined when creating your entity set and then pass ",(0,r.jsx)(t.code,{children:"$savedfilter"})," along with your call to retrieve the entity set each time."]}),"\n",(0,r.jsx)(t.p,{children:"If the entity set is no longer in 4D Server's cache, it will be recreated with a new default timeout of 10 minutes. The entity set will be refreshed (certain entities might be included while others might be removed) since the last time it was created, if it no longer existed before recreating it."}),"\n",(0,r.jsxs)(t.p,{children:["If you have used both ",(0,r.jsx)(t.code,{children:"$savedfilter"})," and ",(0,r.jsx)(t.a,{href:"/docs/18/REST/savedorderby",children:(0,r.jsx)(t.code,{children:"$savedorderby"})})," in your call when creating an entity set and then you omit one of them, the new entity set, which will have the same reference number, will reflect that."]}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"In our example, we first call ``$savedfilter` with the initial call to create an entity set as shown below:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:' GET  /rest/People/?$filter="employer.name=Apple"&$savedfilter="employer.name=Apple"&$method=entityset'})}),"\n",(0,r.jsx)(t.p,{children:"Then, when you access your entity set, you write the following to ensure that the entity set is always valid:"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.code,{children:' GET  /rest/People/$entityset/AEA452C2668B4F6E98B6FD2A1ED4A5A8?$savedfilter="employer.name=Apple"'})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return l}});var i=n(667294);let r={},s=i.createContext(r);function l(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);