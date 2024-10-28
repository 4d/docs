"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2581],{400170:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>d,metadata:()=>o,toc:()=>i});var s=t(474848),r=t(28453);const d={id:"dec",title:"Dec",slug:"/commands/dec",displayed_sidebar:"docs"},c=void 0,o={id:"commands-legacy/dec",title:"Dec",description:"Dec ( number ) -> Function result",source:"@site/versioned_docs/version-20-R7/commands-legacy/dec.md",sourceDirName:"commands-legacy",slug:"/commands/dec",permalink:"/docs/commands/dec",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdec.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"dec",title:"Dec",slug:"/commands/dec",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Cos",permalink:"/docs/commands/cos"},next:{title:"Euro converter",permalink:"/docs/commands/euro-converter"}},l={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Dec"})," ( ",(0,s.jsx)(n.em,{children:"number"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"number"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number whose decimal portion is returned"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Decimal part of number"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["Dec returns the decimal (fractional) portion of ",(0,s.jsx)(n.em,{children:"number"}),".The value returned is always positive or zero."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["The following example takes a monetary value expressed as a real number, and extracts the dollar part and the cents part. If ",(0,s.jsx)(n.em,{children:"vrAmount"})," is 7.31, then ",(0,s.jsx)(n.em,{children:"vlDollars"})," is set to 7 and ",(0,s.jsx)(n.em,{children:"vlCents"})," is set to 31:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0vlDollars:=Int(vrAmount)\xa0// Get the dollars\n\xa0vlCents:=Dec(vrAmount)*100\xa0// Get the fractional part\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/int",children:"Int"})})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var s=t(296540);const r={},d=s.createContext(r);function c(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);