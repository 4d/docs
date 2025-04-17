"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28141"],{747710:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>i,toc:()=>d,contentTitle:()=>c});var t=JSON.parse('{"id":"ViewPro/commands/vp-recompute-formulas","title":"VP RECOMPUTE FORMULAS","description":"VP RECOMPUTE FORMULAS ( vpAreaName : Text )","source":"@site/versioned_docs/version-20-R9/ViewPro/commands/vp-recompute-formulas.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-recompute-formulas","permalink":"/docs/ViewPro/commands/vp-recompute-formulas","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-recompute-formulas.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"vp-recompute-formulas","title":"VP RECOMPUTE FORMULAS"},"sidebar":"docs","previous":{"title":"R","permalink":"/docs/commands-legacy/R"},"next":{"title":"VP REMOVE NAME","permalink":"/docs/ViewPro/commands/vp-remove-name"}}'),r=o("785893"),s=o("250065");let a={id:"vp-recompute-formulas",title:"VP RECOMPUTE FORMULAS"},c=void 0,i={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP RECOMPUTE FORMULAS"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"})," command immediately evaluates all formulas in ",(0,r.jsx)(n.em,{children:"vpAreaName"}),". By default, 4D automatically computes formulas when they are inserted, imported, or exported. ",(0,r.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"})," allows you to force the compute at any time (e.g, in case modifications are made to the formulas or if the formulas contain calls to the database). The command launches the execution of the ",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-flush-commands",children:"VP FLUSH COMMANDS"})," command to execute any stored commands and clear the command buffer, then calculates all formulas in the workbook."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Be sure the ",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})," command has not been executed before using ",(0,r.jsx)(n.code,{children:"VP RECOMPUTE FORMULAS"}),", otherwise the command does nothing."]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"To refresh all formulas in the workbook:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP RECOMPUTE FORMULAS("ViewProArea")\n'})}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-resume-computing",children:"VP RESUME COMPUTING"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-suspend-computing",children:"VP SUSPEND COMPUTING"})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return a}});var t=o(667294);let r={},s=t.createContext(r);function a(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);