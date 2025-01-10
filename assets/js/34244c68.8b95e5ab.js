"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["83875"],{437328:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/dec","title":"Dec","description":"Dec ( number ) : Real","source":"@site/versioned_docs/version-20-R7/commands-legacy/dec.md","sourceDirName":"commands-legacy","slug":"/commands/dec","permalink":"/docs/commands/dec","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdec.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dec","title":"Dec","slug":"/commands/dec","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Cos","permalink":"/docs/commands/cos"},"next":{"title":"Euro converter","permalink":"/docs/commands/euro-converter"}}'),r=t("785893"),d=t("250065");let l={id:"dec",title:"Dec",slug:"/commands/dec",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dec"})," ( ",(0,r.jsx)(n.em,{children:"number"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"number"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number whose decimal portion is returned"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Decimal part of number"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Dec returns the decimal (fractional) portion of ",(0,r.jsx)(n.em,{children:"number"}),".The value returned is always positive or zero."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example takes a monetary value expressed as a real number, and extracts the dollar part and the cents part. If ",(0,r.jsx)(n.em,{children:"vrAmount"})," is 7.31, then ",(0,r.jsx)(n.em,{children:"vlDollars"})," is set to 7 and ",(0,r.jsx)(n.em,{children:"vlCents"})," is set to 31:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0vlDollars:=Int(vrAmount)\xa0// Get the dollars\n\xa0vlCents:=Dec(vrAmount)*100\xa0// Get the fractional part\n"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/int",children:"Int"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"9"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let r={},d=s.createContext(r);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);