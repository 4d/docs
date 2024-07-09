/*! For license information please see 662ef798.8ef8fe55.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77170],{57199:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>a});var t=r(474848),s=r(28453);const l={id:"vp-set-num-value",title:"VP SET NUM VALUE"},o=void 0,i={id:"ViewPro/commands/vp-set-num-value",title:"VP SET NUM VALUE",description:"VP SET NUM VALUE ( rangeObj Number { ; formatPattern : Text } )",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-set-num-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-num-value",permalink:"/docs/ViewPro/commands/vp-set-num-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-num-value.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-num-value",title:"VP SET NUM VALUE"},sidebar:"docs",previous:{title:"VP SET FROZEN PANES",permalink:"/docs/ViewPro/commands/vp-set-frozen-panes"},next:{title:"VP SET PRINT INFO",permalink:"/docs/ViewPro/commands/vp-set-print-info"}},c={},a=[{value:"Description",id:"Description",level:4},{value:"Example",id:"Example",level:4},{value:"See also",id:"See-also",level:4}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET NUM VALUE"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"numberValue"})," : Number { ; ",(0,t.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Range object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numberValue"}),(0,t.jsx)(n.td,{children:"Number"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Number value to set"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formatPattern"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Format of value"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"Description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP SET NUM VALUE"})," command assigns a specified numeric value to a designated cell range."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-cell",children:(0,t.jsx)(n.code,{children:"VP Cell"})})," or ",(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-column",children:(0,t.jsx)(n.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,t.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"numberValue"})," parameter specifies a numeric value to be assigned to the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["The optional ",(0,t.jsx)(n.em,{children:"formatPattern"})," defines a ",(0,t.jsx)(n.a,{href:"/docs/ViewPro/configuring#cell-format",children:"pattern"})," for the ",(0,t.jsx)(n.em,{children:"numberValue"})," parameter."]}),"\n",(0,t.jsx)(n.h4,{id:"Example",children:"Example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'//Set the cell value to 2\nVP SET NUM VALUE(VP Cell("ViewProArea";3;2);2)\n \n//Set the cell value and format it in dollars\nVP SET NUM VALUE(VP Cell("ViewProArea";3;2);12.356;"_($* #,##0.00_)")\n'})}),"\n",(0,t.jsx)(n.h4,{id:"See-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ViewPro/configuring#cell-format",children:"Cell format"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},221020:(e,n,r)=>{var t=r(296540),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function a(e,n,r){var t,l={},a=null,d=null;for(t in void 0!==r&&(a=""+r),void 0!==n.key&&(a=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,t)&&!c.hasOwnProperty(t)&&(l[t]=n[t]);if(e&&e.defaultProps)for(t in n=e.defaultProps)void 0===l[t]&&(l[t]=n[t]);return{$$typeof:s,type:e,key:a,ref:d,props:l,_owner:i.current}}n.Fragment=l,n.jsx=a,n.jsxs=a},474848:(e,n,r)=>{e.exports=r(221020)},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>i});var t=r(296540);const s={},l=t.createContext(s);function o(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);