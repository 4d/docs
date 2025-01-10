"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25256"],{921146:function(e,n,t){t.r(n),t.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>d,contentTitle:()=>a});var s=JSON.parse('{"id":"ViewPro/commands/vp-suspend-computing","title":"VP SUSPEND COMPUTING","description":"VP SUSPEND COMPUTING ( vpAreaName : Text )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-suspend-computing.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-suspend-computing","permalink":"/docs/ViewPro/commands/vp-suspend-computing","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-suspend-computing.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-suspend-computing","title":"VP SUSPEND COMPUTING"},"sidebar":"docs","previous":{"title":"VP SHOW CELL","permalink":"/docs/ViewPro/commands/vp-show-cell"},"next":{"title":"4D Write Pro","permalink":"/docs/category/4d-write-pro"}}'),o=t("785893"),r=t("250065");let i={id:"vp-suspend-computing",title:"VP SUSPEND COMPUTING"},a=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP SUSPEND COMPUTING"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"4D View Pro area form object name"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command stops the calculation of all formulas in ",(0,o.jsx)(n.em,{children:"vpAreaName"}),". This command is useful when you want to suspend calculations in this 4D View Pro area so you can manually make modifications to formulas without encountering errors before you've finished making the changes."]}),"\n",(0,o.jsxs)(n.p,{children:["The command pauses the calculation service in 4D View Pro. Formulas that have already been calculated remain unchanged, however any formulas added after ",(0,o.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command  is executed are not calculated."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of ",(0,o.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command  must be balanced by a corresponding execution of the ",(0,o.jsx)(n.code,{children:"VP RESUME COMPUTING"})," command. Any formula impacted by modifications made while calculations are suspended will be recalculated when the command is executed."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"You've added two buttons to the form so that the user can suspend/resume calculations:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(899060).Z+"",width:"526",height:"226"})}),"\n",(0,o.jsx)(n.p,{children:"The Suspend Computing button code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' //pause calculations while users enter information\n If(FORM Event.code=On Clicked)\n \n    VP SUSPEND COMPUTING("ViewProArea")\n \n End if\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'If(FORM Event.code=On Clicked)\n \n    VP RESUME COMPUTING("ViewProArea")\n \nEnd if\n'})}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-recompute-formulas",children:"VP RECOMPUTE FORMULAS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-resume-computing",children:"VP RESUME COMPUTING"})]})]})}function u(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},899060:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpStopCalculations-3e947019a84a2b9023514cbb8d15780f.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);