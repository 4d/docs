"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29330"],{231830:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>i,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-set-formula","title":"VP SET FORMULA","description":"VP SET FORMULA ( rangeObj Text { ; formatPattern : Text } )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-set-formula.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-formula","permalink":"/docs/20-R7/ViewPro/commands/vp-set-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-formula","title":"VP SET FORMULA"},"sidebar":"docs","previous":{"title":"VP SET FIELD","permalink":"/docs/20-R7/ViewPro/commands/vp-set-field"},"next":{"title":"VP SET FORMULAS","permalink":"/docs/20-R7/ViewPro/commands/vp-set-formulas"}}'),t=r("785893"),l=r("250065");let o={id:"vp-set-formula",title:"VP SET FORMULA"},d=void 0,a={},i=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2}];function c(e){let n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP SET FORMULA"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,t.jsx)(n.em,{children:"formula"})," : Text { ; ",(0,t.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Range object"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formula"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Formula or 4D method"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formatPattern"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Format of field"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP SET FORMULA"})," command assigns a specified formula or 4D method to a designated cell range."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-cell",children:(0,t.jsx)(n.code,{children:"VP Cell"})})," or ",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-column",children:(0,t.jsx)(n.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,t.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the formula specified will be linked in each cell."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"formula"})," parameter specifies a formula or 4D method name to be assigned to the ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["If the ",(0,t.jsx)(n.em,{children:"formula"})," is a string, use the period ",(0,t.jsx)(n.code,{children:"."})," as numerical separator and the comma ",(0,t.jsx)(n.code,{children:","})," as parameter separator.\nIf a 4D method is used, it must be allowed with the ",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-allowed-methods",children:(0,t.jsx)(n.code,{children:"VP SET ALLOWED METHODS"})})," command."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The optional ",(0,t.jsx)(n.em,{children:"formatPattern"})," defines a ",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/configuring#cell-format",children:"pattern"})," for the ",(0,t.jsx)(n.em,{children:"formula"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["You remove the formula in ",(0,t.jsx)(n.em,{children:"rangeObj"}),' by replacing it with an empty string ("").']}),"\n",(0,t.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP SET FORMULA(VP Cell("ViewProArea";5;2);"SUM($A$1:$C$10)")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(n.p,{children:"To remove the formula:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP SET FORMULA(VP Cell("ViewProArea";5;2);"")\n'})}),"\n",(0,t.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'VP SET FORMULA($range;"SUM(A1,B7,C11)") //"," to separate parameters\n'})}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/configuring#cell-format",children:"Cell format"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-get-formula",children:"VP Get Formula"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-formulas",children:"VP SET FORMULAS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var s=r(667294);let t={},l=s.createContext(t);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);