"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98750"],{346226:function(e,t,n){n.r(t),n.d(t,{metadata:()=>o,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>d,frontMatter:()=>s});var o=JSON.parse('{"id":"Events/onPageChange","title":"On Page Change","description":"|Code|Can be called by|Definition|","source":"@site/versioned_docs/version-20-R6/Events/onPageChange.md","sourceDirName":"Events","slug":"/Events/onPageChange","permalink":"/docs/20-R6/Events/onPageChange","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPageChange.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onPageChange","title":"On Page Change"},"sidebar":"docs","previous":{"title":"On Outside Call","permalink":"/docs/20-R6/Events/onOutsideCall"},"next":{"title":"On Plug in Area","permalink":"/docs/20-R6/Events/onPlugInArea"}}'),i=n("785893"),a=n("250065");let s={id:"onPageChange",title:"On Page Change"},r=void 0,c={},d=[{value:"Description",id:"description",level:2}];function l(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Code"}),(0,i.jsx)(t.th,{children:"Can be called by"}),(0,i.jsx)(t.th,{children:"Definition"})]})}),(0,i.jsx)(t.tbody,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"56"}),(0,i.jsx)(t.td,{children:"Form"}),(0,i.jsx)(t.td,{children:"The current page of the form is changed"})]})})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["This event is only available at the form level (it is called in the form method). It is generated each time the current page of the form changes (following a call to the ",(0,i.jsx)(t.code,{children:"FORM GOTO PAGE"})," command or a standard navigation action)."]}),"\n",(0,i.jsxs)(t.p,{children:["Note that it is generated after the page is fully loaded, i.e. once all the objects it contains are initialized, including ",(0,i.jsx)(t.a,{href:"/docs/20-R6/FormObjects/webAreaOverview",children:"Web areas"}),"."]}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsxs)(t.p,{children:["The only exception is 4D View Pro areas, for which you need to call the ",(0,i.jsx)(t.a,{href:"/docs/20-R6/Events/onVpReady",children:"On VP Ready"})," specific event."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.code,{children:"On Page Change"})," event is useful for executing code that requires all objects to be initialized beforehand. You can also use it to optimize the application by executing code (for example, a search) only after a specific page of the form is displayed and not just as soon as page 1 is loaded. If the user does not go to this page, the code is not executed."]})]})}function h(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return r},a:function(){return s}});var o=n(667294);let i={},a=o.createContext(i);function s(e){let t=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);