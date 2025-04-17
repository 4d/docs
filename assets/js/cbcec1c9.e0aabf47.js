"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78936"],{737935:function(e,t,n){n.r(t),n.d(t,{default:()=>l,frontMatter:()=>r,metadata:()=>i,assets:()=>c,toc:()=>u,contentTitle:()=>d});var i=JSON.parse('{"id":"REST/timeout","title":"$timeout","description":"Defines the number of seconds to save an entity set in 4D Server\'s cache (e.g., $timeout=1800)","source":"@site/versioned_docs/version-20-R8/REST/$timeout.md","sourceDirName":"REST","slug":"/REST/timeout","permalink":"/docs/20-R8/REST/timeout","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24timeout.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"timeout","title":"$timeout"},"sidebar":"docs","previous":{"title":"$skip","permalink":"/docs/20-R8/REST/skip"},"next":{"title":"$top/$limit","permalink":"/docs/20-R8/REST/top_$limit"}}'),o=n("785893"),s=n("250065");let r={id:"timeout",title:"$timeout"},d=void 0,c={},u=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function a(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Defines the number of seconds to save an entity set in 4D Server's cache (",(0,o.jsx)(t.em,{children:"e.g."}),", ",(0,o.jsx)(t.code,{children:"$timeout=1800"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["To define a timeout for an entity set that you create using ",(0,o.jsx)(t.a,{href:"/docs/20-R8/REST/method#methodentityset",children:(0,o.jsx)(t.code,{children:"$method=entityset"})}),", pass the number of seconds to ",(0,o.jsx)(t.code,{children:"$timeout"}),". For example, if you want to set the timeout to 20 minutes, pass 1200. By default, the timeout is two (2) hours."]}),"\n",(0,o.jsxs)(t.p,{children:["Once the timeout has been defined, each time an entity set is called upon (by using ",(0,o.jsx)(t.code,{children:"$method=entityset"}),"), the timeout is recalculated based on the current time and the timeout."]}),"\n",(0,o.jsxs)(t.p,{children:["If an entity set is removed and then recreated using ",(0,o.jsx)(t.code,{children:"$method=entityset"})," along with ",(0,o.jsx)(t.a,{href:"/docs/20-R8/REST/savedfilter",children:(0,o.jsx)(t.code,{children:"$savedfilter"})}),", the new default timeout is 10 minutes regardless of the timeout you defined when calling ",(0,o.jsx)(t.code,{children:"$timeout"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"In our entity set that we're creating, we define the timeout to 20 minutes:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:' GET  /rest/Employee/?$filter="salary!=0"&$method=entityset&$timeout=1200'})})]})}function l(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return r}});var i=n(667294);let o={},s=i.createContext(o);function r(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);