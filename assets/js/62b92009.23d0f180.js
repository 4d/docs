"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22917"],{885209:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>r,assets:()=>i,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/get-macro-parameter","title":"GET MACRO PARAMETER","description":"GET MACRO PARAMETER ( selector ; textParam )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-macro-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/get-macro-parameter","permalink":"/docs/20-R7/commands/get-macro-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-macro-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-macro-parameter","title":"GET MACRO PARAMETER","slug":"/commands/get-macro-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Generate UUID","permalink":"/docs/20-R7/commands/generate-uuid"},"next":{"title":"LAUNCH EXTERNAL PROCESS","permalink":"/docs/20-R7/commands/launch-external-process"}}'),s=t("785893"),d=t("250065");let l={id:"get-macro-parameter",title:"GET MACRO PARAMETER",slug:"/commands/get-macro-parameter",displayed_sidebar:"docs"},c=void 0,i={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET MACRO PARAMETER"})," ( ",(0,s.jsx)(n.em,{children:"selector"})," ; ",(0,s.jsx)(n.em,{children:"textParam"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"selector"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Selection to use"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"textParam"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Returned text"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"GET MACRO PARAMETER"})," command returns, in the ",(0,s.jsx)(n.em,{children:"paramText"})," parameter, all or part of the text of the method from which it was called."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"selector"})," parameter can be used to set the type of information to be returned. You can pass one of the following constants, added to the \u201C",(0,s.jsx)(n.em,{children:"4D Environment"}),"\u201D theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Full method text"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Highlighted method text"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass Full method text in ",(0,s.jsx)(n.em,{children:"selector"}),", all of the text of the method will be returned in ",(0,s.jsx)(n.em,{children:"paramText"}),". If you pass Highlighted method text in ",(0,s.jsx)(n.em,{children:"selector"}),", only the text selected in the method will be returned in ",(0,s.jsx)(n.em,{children:"paramText"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["Refer to the example of the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/set-macro-parameter",children:"SET MACRO PARAMETER"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/set-macro-parameter",children:"SET MACRO PARAMETER"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"997"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var r=t(667294);let s={},d=r.createContext(s);function l(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);