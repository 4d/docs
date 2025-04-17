"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["84920"],{130723:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/get-system-format","title":"GET SYSTEM FORMAT","description":"GET SYSTEM FORMAT ( format ; value )","source":"@site/versioned_docs/version-20-R9/commands-legacy/get-system-format.md","sourceDirName":"commands-legacy","slug":"/commands/get-system-format","permalink":"/docs/commands/get-system-format","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-system-format.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-system-format","title":"GET SYSTEM FORMAT","slug":"/commands/get-system-format","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FONT STYLE LIST","permalink":"/docs/commands/font-style-list"},"next":{"title":"Is macOS","permalink":"/docs/commands/is-macos"}}'),s=t("785893"),d=t("250065");let i={id:"get-system-format",title:"GET SYSTEM FORMAT",slug:"/commands/get-system-format",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET SYSTEM FORMAT"})," ( ",(0,s.jsx)(n.em,{children:"format"})," ; ",(0,s.jsx)(n.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"format"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"System format to be retrieved"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"value"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Value of format defined in the system"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"GET SYSTEM FORMAT"})," command returns the current value of several regional parameters defined in the operating system. This command can be used to build \u201Cautomatic\u201D custom formats based on the system preferences."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"format"})," parameter, pass the type of parameter whose value you want to know. The result is returned directly by the system in the ",(0,s.jsx)(n.em,{children:"value"})," parameter as a character string. In ",(0,s.jsx)(n.em,{children:"format"}),", you must pass one of the following constants of the ",(0,s.jsx)(n.em,{children:"System Format"})," theme. Below is a description of these constants:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Currency symbol"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Currency symbol (e.g.: \u201C$\u201D)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Date separator"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"13"}),(0,s.jsx)(n.td,{children:"Separator used in date formats (e.g.: \u201C/\u201D)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Decimal separator"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Decimal separator (e.g.: \u201C.\u201D)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Short date day position"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"15"}),(0,s.jsx)(n.td,{children:"Position of the day in the short date format: \u201C1\u201D = left, \u201C2\u201D = middle, \u201C3\u201D = right"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Short date month position"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{children:"Position of the month in the short date format: \u201C1\u201D = left, \u201C2\u201D = middle, \u201C3\u201D = right"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Short date year position"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"17"}),(0,s.jsx)(n.td,{children:"Position of the year in the short date format: \u201C1\u201D = left, \u201C2\u201D = middle, \u201C3\u201D = right"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"System date long pattern"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"Long date display format in the form \u201Cdddd MMMM yyyy\u201D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"System date medium pattern"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"7"}),(0,s.jsx)(n.td,{children:"Medium date display format in the form \u201Cdddd MMMM yyyy\u201D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"System date short pattern"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"Short date display format in the form \u201Cdddd MMMM yyyy\u201D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"System time AM label"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"18"}),(0,s.jsx)(n.td,{children:"Additional label for a time before noon in 12-hour formats (e.g.: \u201CMorning\u201D)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"System time long pattern"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Long time display format in the form \u201CHH:MM:SS\u201D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"System time medium pattern"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Medium time display format in the form \u201CHH:MM:SS\u201D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"System time PM label"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"19"}),(0,s.jsx)(n.td,{children:"Additional label for a time after noon in 12-hour formats (e.g.: \u201CAfternoon\u201D)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"System time short pattern"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Short time display format in the form \u201CHH:MM:SS\u201D"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thousand separator"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Thousand separator (e.g.: \u201C,\u201D)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Time separator"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"14"}),(0,s.jsx)(n.td,{children:"Separator used in time formats (e.g.: \u201C:\u201D)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/object-set-format",children:"OBJECT SET FORMAT"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"994"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);