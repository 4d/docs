"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30338"],{971071:function(e,t,i){i.r(t),i.d(t,{default:()=>u,frontMatter:()=>s,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>l});var n=JSON.parse('{"id":"REST/top_$limit","title":"$top/$limit","description":"Limits the number of entities to return (e.g., $top=50)","source":"@site/versioned_docs/version-20-R8/REST/$top_$limit.md","sourceDirName":"REST","slug":"/REST/top_$limit","permalink":"/docs/REST/top_$limit","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24top_%24limit.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"top_$limit","title":"$top/$limit"},"sidebar":"docs","previous":{"title":"$timeout","permalink":"/docs/REST/timeout"},"next":{"title":"$version","permalink":"/docs/REST/version"}}'),o=i("785893"),r=i("250065");let s={id:"top_$limit",title:"$top/$limit"},l=void 0,c={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function p(e){let t={a:"a",code:"code",h2:"h2",p:"p",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["Limits the number of entities to return (e.g., ",(0,o.jsx)(t.code,{children:"$top=50"}),")"]}),"\n",(0,o.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.code,{children:"$top/$limit"})," defines the limit of entities to return. By default, the number is limited to 100. You can use either keyword: ",(0,o.jsx)(t.code,{children:"$top"})," or ",(0,o.jsx)(t.code,{children:"$limit"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["When used in conjunction with ",(0,o.jsx)(t.a,{href:"/docs/REST/skip",children:(0,o.jsx)(t.code,{children:"$skip"})}),", you can navigate through the entity selection returned by the REST request."]}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"In the following example, we request the next ten entities after the 20th entity:"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.code,{children:"GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$skip=20&$top=10"})})]})}function u(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(p,{...e})}):p(e)}},250065:function(e,t,i){i.d(t,{Z:function(){return l},a:function(){return s}});var n=i(667294);let o={},r=n.createContext(o);function s(e){let t=n.useContext(r);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);