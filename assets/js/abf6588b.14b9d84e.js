"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56090"],{941665:function(n,e,r){r.r(e),r.d(e,{metadata:()=>d,contentTitle:()=>a,default:()=>o,assets:()=>l,toc:()=>c,frontMatter:()=>i});var d=JSON.parse('{"id":"commands-legacy/day-number","title":"Day number","description":"Day number ( aDate ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/day-number.md","sourceDirName":"commands-legacy","slug":"/commands/day-number","permalink":"/docs/commands/day-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fday-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"day-number","title":"Day number","slug":"/commands/day-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Date","permalink":"/docs/commands/date"},"next":{"title":"Day of","permalink":"/docs/commands/day-of"}}'),t=r("785893"),s=r("250065");let i={id:"day-number",title:"Day number",slug:"/commands/day-number",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function h(n){let e={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Day number"})," ( ",(0,t.jsx)(e.em,{children:"aDate"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"aDate"}),(0,t.jsx)(e.td,{children:"Date"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Date for which to return the number"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Function result"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"Number representing the weekday on which date falls"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["The ",(0,t.jsx)(e.strong,{children:"Day number"})," command returns a number representing the weekday on which ",(0,t.jsx)(e.em,{children:"aDate"})," falls.",(0,t.jsx)(e.strong,{children:"Day number"})," returns ",(0,t.jsx)(e.em,{children:"2"})," for null dates."]}),"\n",(0,t.jsxs)(e.p,{children:['4D provides the following predefined constants, found in the "',(0,t.jsx)(e.em,{children:"Days and Months"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Constant"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{children:"Value"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Sunday"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"1"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Monday"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"2"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Tuesday"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"3"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Wednesday"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"4"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Thursday"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"5"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Friday"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"6"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Saturday"}),(0,t.jsx)(e.td,{children:"Integer"}),(0,t.jsx)(e.td,{children:"7"})]})]})]}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Note:"})," ",(0,t.jsx)(e.strong,{children:"Day number"})," returns a value between 1 and 7. To get the day number within the month for a date, use the command ",(0,t.jsx)(e.a,{href:"/docs/commands/day-of",children:"Day of"}),"."]}),"\n",(0,t.jsx)(e.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(e.p,{children:"The following example is a function that returns the current day as a string:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:'\xa0$viDay :=Day number(Current date)\xa0// $viDay gets the current day number\n\xa0Case of\n\xa0\xa0\xa0\xa0:($viDay =1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Sunday"\n\xa0\xa0\xa0\xa0:($viDay =2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Monday"\n\xa0\xa0\xa0\xa0:($viDay =3)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Tuesday"\n\xa0\xa0\xa0\xa0:($viDay =4)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Wednesday"\n\xa0\xa0\xa0\xa0:($viDay =5)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Thursday"\n\xa0\xa0\xa0\xa0:($viDay =6)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Friday"\n\xa0\xa0\xa0\xa0:($viDay =7)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:="Saturday"\n\xa0End case\n'})}),"\n",(0,t.jsx)(e.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsx)(e.p,{children:(0,t.jsx)(e.a,{href:"/docs/commands/day-of",children:"Day of"})}),"\n",(0,t.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Command number"}),(0,t.jsx)(e.td,{children:"114"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Thread safe"}),(0,t.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function o(n={}){let{wrapper:e}={...(0,s.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(h,{...n})}):h(n)}},250065:function(n,e,r){r.d(e,{Z:function(){return a},a:function(){return i}});var d=r(667294);let t={},s=d.createContext(t);function i(n){let e=d.useContext(s);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function a(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:i(n.components),d.createElement(s.Provider,{value:e},n.children)}}}]);