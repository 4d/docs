"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66978"],{218641:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>i,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/year-of","title":"Year of","description":"Year of ( date ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/year-of.md","sourceDirName":"commands-legacy","slug":"/commands/year-of","permalink":"/docs/20-R7/commands/year-of","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fyear-of.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"year-of","title":"Year of","slug":"/commands/year-of","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Timestamp","permalink":"/docs/20-R7/commands/timestamp"},"next":{"title":"Design Object Access","permalink":"/docs/20-R7/category/design-object-access"}}'),r=t("785893"),d=t("250065");let a={id:"year-of",title:"Year of",slug:"/commands/year-of",displayed_sidebar:"docs"},l=void 0,o={},i=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Year of"})," ( ",(0,r.jsx)(n.em,{children:"date"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"date"}),(0,r.jsx)(n.td,{children:"Date"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Date for which to return the year"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Number indicating the year of date"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The Year of command returns the year of ",(0,r.jsx)(n.em,{children:"aDate"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsxs)(n.p,{children:["The following example illustrates the use of ",(0,r.jsx)(n.strong,{children:"Year of"}),". The results are assigned to the variable ",(0,r.jsx)(n.em,{children:"vResult"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0vResult:=Year of(!12/25/92!)\xa0// vResult gets 1992\n\xa0vResult:=Year of(!12/25/1992!)\xa0// vResult gets 1992\n\xa0vResult:=Year of(!12/25/1892!)\xa0// vResult gets 1892\n\xa0vResult:=Year of(!12/25/2092!)\xa0// vResult gets 2092\n\xa0vResult:=Year of(Current date)\xa0// vResult gets year of current date\n"})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsxs)(n.p,{children:["See example for the command ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/current-date",children:"Current date"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/day-of",children:"Day of"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/month-of",children:"Month of"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"25"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return a}});var s=t(667294);let r={},d=s.createContext(r);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);