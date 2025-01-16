"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3050"],{656486:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>o,toc:()=>d,contentTitle:()=>l});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-active-cell","title":"VP SET ACTIVE CELL","description":"VP SET ACTIVE CELL ( rangeObj : Object)","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-set-active-cell.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-active-cell","permalink":"/docs/ViewPro/commands/vp-set-active-cell","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-active-cell.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-set-active-cell","title":"VP SET ACTIVE CELL"},"sidebar":"docs","previous":{"title":"S","permalink":"/docs/commands-legacy/S"},"next":{"title":"VP SET ALLOWED METHODS","permalink":"/docs/ViewPro/commands/vp-set-allowed-methods"}}'),c=t("785893"),i=t("250065");let r={id:"vp-set-active-cell",title:"VP SET ACTIVE CELL"},l=void 0,o={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.strong,{children:"VP SET ACTIVE CELL"})," ( ",(0,c.jsx)(n.em,{children:"rangeObj"})," : Object)"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"Parameter"}),(0,c.jsx)(n.th,{children:"Type"}),(0,c.jsx)(n.th,{}),(0,c.jsx)(n.th,{children:"Description"})]})}),(0,c.jsx)(n.tbody,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:"rangeObj"}),(0,c.jsx)(n.td,{children:"Object"}),(0,c.jsx)(n.td,{children:"->"}),(0,c.jsx)(n.td,{children:"Range object"})]})})]}),"\n",(0,c.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,c.jsxs)(n.p,{children:["The ",(0,c.jsx)(n.code,{children:"VP SET ACTIVE CELL"})," command defines a specified cell as active."]}),"\n",(0,c.jsxs)(n.p,{children:["In ",(0,c.jsx)(n.em,{children:"rangeObj"}),", pass a range containing a single cell as an object (see ",(0,c.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-cell",children:"VP Cell"}),"). If ",(0,c.jsx)(n.em,{children:"rangeObj"})," is not a cell range or contains multiple ranges, the first cell of the first range is used."]}),"\n",(0,c.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,c.jsx)(n.p,{children:"To set the cell in column D, row 5 as the active cell:"}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-4d",children:'$activeCell:=VP Cell("myVPArea";3;4)\nVP SET ACTIVE CELL($activeCell)\n'})}),"\n",(0,c.jsx)(n.p,{children:(0,c.jsx)(n.img,{src:t(565994).Z+"",width:"622",height:"408"})}),"\n",(0,c.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-selection",children:"VP Get selection"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-reset-selection",children:"VP RESET SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,c.jsx)(n.br,{}),"\n",(0,c.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(a,{...e})}):a(e)}},565994:function(e,n,t){t.d(n,{Z:function(){return s}});let s=t.p+"assets/images/cmd_vpSetActiveCell-29d40306a042b780ee5d025e11d85c25.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var s=t(667294);let c={},i=s.createContext(c);function r(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:r(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);