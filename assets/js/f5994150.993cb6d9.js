"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20040"],{927719:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"ViewPro/commands/vp-resume-computing","title":"VP RESUME COMPUTING","description":"VP RESUME COMPUTING ( vpAreaName : Text )","source":"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-resume-computing.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-resume-computing","permalink":"/docs/20-R6/ViewPro/commands/vp-resume-computing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-resume-computing.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-resume-computing","title":"VP RESUME COMPUTING"},"sidebar":"docs","previous":{"title":"VP RESIZE TABLE","permalink":"/docs/20-R6/ViewPro/commands/vp-resize-table"},"next":{"title":"VP Row","permalink":"/docs/20-R6/ViewPro/commands/vp-row"}}'),r=s("785893"),o=s("250065");let i={id:"vp-resume-computing",title:"VP RESUME COMPUTING"},c=void 0,a={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP RESUME COMPUTING"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP RESUME COMPUTING"})," command  restarts the calculation of formulas in ",(0,r.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The command reactivates the calculation service in 4D View Pro. Any formulas impacted by changes made while calculations were suspended are updated, and formulas added after ",(0,r.jsx)(n.code,{children:"VP RESUME COMPUTING"})," is executed are calculated."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of ",(0,r.jsx)(n.code,{children:"VP RESUME COMPUTING"})," must be balanced by a corresponding execution of the ",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})," command."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["See example in ",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-recompute-formulas",children:"VP RECOMPUTE FORMULAS"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var t=s(667294);let r={},o=t.createContext(r);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);