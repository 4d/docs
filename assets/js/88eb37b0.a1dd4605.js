/*! For license information please see 88eb37b0.a1dd4605.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17798],{5113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var o=t(474848),s=t(28453);const r={id:"vp-suspend-computing",title:"VP SUSPEND COMPUTING"},i=void 0,c={id:"ViewPro/commands/vp-suspend-computing",title:"VP SUSPEND COMPUTING",description:"VP SUSPEND COMPUTING ( vpAreaName : Text )",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-suspend-computing.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-suspend-computing",permalink:"/docs/ViewPro/commands/vp-suspend-computing",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-suspend-computing.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-suspend-computing",title:"VP SUSPEND COMPUTING"},sidebar:"docs",previous:{title:"VP SHOW CELL",permalink:"/docs/ViewPro/commands/vp-show-cell"},next:{title:"4D Write Pro Interface",permalink:"/docs/WritePro/writeprointerface"}},a={},d=[{value:"Description",id:"Description",level:4},{value:"Example",id:"Example",level:4},{value:"See also",id:"See-also",level:4}];function l(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP SUSPEND COMPUTING"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"4D View Pro area form object name"})]})})]}),"\n",(0,o.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command stops the calculation of all formulas in ",(0,o.jsx)(n.em,{children:"vpAreaName"}),". This command is useful when you want to suspend calculations in this 4D View Pro area so you can manually make modifications to formulas without encountering errors before you've finished making the changes."]}),"\n",(0,o.jsxs)(n.p,{children:["The command pauses the calculation service in 4D View Pro. Formulas that have already been calculated remain unchanged, however any formulas added after ",(0,o.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command  is executed are not calculated."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["The 4D View Pro calculation service maintains a counter of suspend/resume actions. Therefore, each execution of ",(0,o.jsx)(n.code,{children:"VP SUSPEND COMPUTING"})," command  must be balanced by a corresponding execution of the ",(0,o.jsx)(n.code,{children:"VP RESUME COMPUTING"})," command. Any formula impacted by modifications made while calculations are suspended will be recalculated when the command is executed."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"Example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"You've added two buttons to the form so that the user can suspend/resume calculations:"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.img,{src:t(548762).A+"",width:"526",height:"226"})}),"\n",(0,o.jsx)(n.p,{children:"The Suspend Computing button code:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:' //pause calculations while users enter information\n If(FORM Event.code=On Clicked)\n \n    VP SUSPEND COMPUTING("ViewProArea")\n \n End if\n'})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'If(FORM Event.code=On Clicked)\n \n    VP RESUME COMPUTING("ViewProArea")\n \nEnd if\n'})}),"\n",(0,o.jsx)(n.h4,{id:"See-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-recompute-formulas",children:"VP RECOMPUTE FORMULAS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-resume-computing",children:"VP RESUME COMPUTING"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,n,t)=>{var o=t(296540),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,c=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,t){var o,r={},d=null,l=null;for(o in void 0!==t&&(d=""+t),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)i.call(n,o)&&!a.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:d,ref:l,props:r,_owner:c.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},474848:(e,n,t)=>{e.exports=t(221020)},548762:(e,n,t)=>{t.d(n,{A:()=>o});const o=t.p+"assets/images/cmd_vpStopCalculations-3e947019a84a2b9023514cbb8d15780f.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>c});var o=t(296540);const s={},r=o.createContext(s);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);