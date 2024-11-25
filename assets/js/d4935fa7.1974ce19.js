"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97417"],{397313:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>l,toc:()=>c,frontMatter:()=>a});var s=JSON.parse('{"id":"commands-legacy/day-of","title":"Day of","description":"Day of ( date ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/day-of.md","sourceDirName":"commands-legacy","slug":"/commands/day-of","permalink":"/docs/commands/day-of","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fday-of.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"day-of","title":"Day of","slug":"/commands/day-of","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Day number","permalink":"/docs/commands/day-number"},"next":{"title":"Milliseconds","permalink":"/docs/commands/milliseconds"}}'),d=t("785893"),r=t("250065");let a={id:"day-of",title:"Day of",slug:"/commands/day-of",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Day of"})," ( ",(0,d.jsx)(n.em,{children:"date"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Parameter"}),(0,d.jsx)(n.th,{children:"Type"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Description"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"date"}),(0,d.jsx)(n.td,{children:"Date"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Date for which to return the day"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Function result"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Day of the month of date"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,d.jsxs)(n.p,{children:["The ",(0,d.jsx)(n.strong,{children:"Day of"})," command returns the day of the month of ",(0,d.jsx)(n.em,{children:"aDate"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Note:"})," ",(0,d.jsx)(n.strong,{children:"Day of"})," returns a value between 1 and 31. To get the day of the week for a date, use the command ",(0,d.jsx)(n.a,{href:"/docs/commands/day-number",children:"Day number"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,d.jsxs)(n.p,{children:["The following example illustrates the use of Day of. The results are assigned to the variable ",(0,d.jsx)(n.em,{children:"vResult"}),". The comments describe what is put in ",(0,d.jsx)(n.em,{children:"vResult"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0vResult:=Day of(!12/25/92!)\xa0// vResult gets 25\n\xa0vResult:=Day of(Current date)\xa0// vResult gets day of current date\n"})}),"\n",(0,d.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,d.jsxs)(n.p,{children:["See the example for the ",(0,d.jsx)(n.a,{href:"/docs/commands/current-date",children:"Current date"})," command."]}),"\n",(0,d.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/commands/day-number",children:"Day number"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/month-of",children:"Month of"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/commands/year-of",children:"Year of"})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(i,{...e})}):i(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return a}});var s=t(667294);let d={},r=s.createContext(d);function a(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);