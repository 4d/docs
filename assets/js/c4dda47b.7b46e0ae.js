"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76668"],{182383:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>o,assets:()=>s,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"Events/onVpReady","title":"On VP Ready","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R7/Events/onVpReady.md","sourceDirName":"Events","slug":"/Events/onVpReady","permalink":"/docs/20-R7/Events/onVpReady","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonVpReady.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onVpReady","title":"On VP Ready"},"sidebar":"docs","previous":{"title":"On VP Range Changed","permalink":"/docs/20-R7/Events/onVpRangeChanged"},"next":{"title":"On Window Opening Denied","permalink":"/docs/20-R7/Events/onWindowOpeningDenied"}}'),i=t("785893"),r=t("250065");let d={id:"onVpReady",title:"On VP Ready"},a=void 0,s={},c=[{value:"Description",id:"description",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Code"}),(0,i.jsx)(n.th,{children:"Can be called by"}),(0,i.jsx)(n.th,{children:"Definition"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"9"}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.a,{href:"/docs/20-R7/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})}),(0,i.jsx)(n.td,{children:"The loading of the 4D View Pro area is complete"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsx)(n.p,{children:"This event is generated when the 4D View Pro area loading is complete."}),"\n",(0,i.jsxs)(n.p,{children:["You need to use this event to write initialization code for the area. Any 4D View Pro area initialization code, for loading or reading values from or in the area, must be located in the ",(0,i.jsx)(n.code,{children:"On VP Ready"})," form event of the area. This form event is triggered once the area loading is complete. Testing this event makes you sure that the code will be executed in a valid context. An error is returned if a 4D View Pro command is called before the ",(0,i.jsx)(n.code,{children:"On VP Ready"})," form event is generated."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:["4D View Pro areas are loaded asynchronously in 4D forms. It means that the standard ",(0,i.jsx)(n.a,{href:"/docs/20-R7/Events/onLoad",children:"On load"})," form event cannot be used for 4D View Pro initialization code, since it could be executed before the loading of the area is complete. ",(0,i.jsx)(n.code,{children:"On VP Ready"})," is always generated after ",(0,i.jsx)(n.a,{href:"/docs/20-R7/Events/onLoad",children:"On load"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return d}});var o=t(667294);let i={},r=o.createContext(i);function d(e){let n=o.useContext(r);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);