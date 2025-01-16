"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41647"],{214998:function(e,t,n){n.r(t),n.d(t,{default:()=>p,frontMatter:()=>r,metadata:()=>i,assets:()=>l,toc:()=>d,contentTitle:()=>c});var i=JSON.parse('{"id":"REST/skip","title":"$skip","description":"Starts the entity defined by this number in the collection (e.g., $skip=10)","source":"@site/versioned_docs/version-20-R7/REST/$skip.md","sourceDirName":"REST","slug":"/REST/skip","permalink":"/docs/20-R7/REST/skip","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24skip.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"skip","title":"$skip"},"sidebar":"docs","previous":{"title":"$savedorderby","permalink":"/docs/20-R7/REST/savedorderby"},"next":{"title":"$timeout","permalink":"/docs/20-R7/REST/timeout"}}'),s=n("785893"),o=n("250065");let r={id:"skip",title:"$skip"},c=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function a(e){let t={a:"a",code:"code",em:"em",h2:"h2",p:"p",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:["Starts the entity defined by this number in the collection (",(0,s.jsx)(t.em,{children:"e.g."}),", ",(0,s.jsx)(t.code,{children:"$skip=10"}),")"]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$skip"})," defines which entity in the collection to start with. By default, the collection sent starts with the first entity. To start with the 10th entity in the collection, pass 10."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.code,{children:"$skip"}),"  is generally used in conjunction with ",(0,s.jsx)(t.a,{href:"/docs/20-R7/REST/top_$limit",children:(0,s.jsx)(t.code,{children:"$top/$limit"})})," to navigate through an entity collection."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"In the following example, we go to the 20th entity in our entity set:"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.code,{children:"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20"})})]})}function p(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var i=n(667294);let s={},o=i.createContext(s);function r(e){let t=i.useContext(o);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);