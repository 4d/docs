"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99140],{805897:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>d,toc:()=>o});var t=s(474848),r=s(28453);const a={id:"vp-add-span",title:"VP ADD SPAN"},i=void 0,d={id:"ViewPro/commands/vp-add-span",title:"VP ADD SPAN",description:"VP ADD SPAN ( rangeObj : Object )",source:"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-add-span.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-add-span",permalink:"/docs/ViewPro/commands/vp-add-span",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-add-span.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-add-span",title:"VP ADD SPAN"},sidebar:"docs",previous:{title:"VP ADD SHEET",permalink:"/docs/ViewPro/commands/vp-add-sheet"},next:{title:"VP ADD STYLESHEET",permalink:"/docs/ViewPro/commands/vp-add-stylesheet"}},l={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP ADD SPAN"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Range object"})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP ADD SPAN"})," command combines the cells in ",(0,t.jsx)(n.em,{children:"rangeObj"})," as a single span of cells."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass a range object of cells. The cells in the range are joined to create a larger cell extending across multiple columns and/or rows. You can pass multiple cell ranges to create several spans at the same time. Note that if cell ranges overlap, only the first cell range is used."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Only the data in the upper-left cell is displayed. Data in the other combined cells is hidden until the span is removed."}),"\n",(0,t.jsx)(n.li,{children:"Hidden data in spanned cells is accessible via formulas (beginning with the upper-left cell)."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"To span the First quarter and Second quarter cells across the two cells beside them, and the South area cell across the two rows below it:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"initial-document",src:s(565919).A+"",width:"679",height:"170"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' // First quarter range\n $q1:=VP Cells("ViewProArea";2;3;3;1)\n \n  // Second quarter range\n $q2:=VP Cells("ViewProArea";5;3;3;1)\n \n  // South area range\n $south:=VP Cells("ViewProArea";0;5;1;3)\n \n VP ADD SPAN(VP Combine ranges($q1;$q2;$south))\n'})}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{alt:"vp-add-span-result",src:s(842002).A+"",width:"679",height:"163"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/ViewPro/getting-started#using-range-objects",children:"4D View Pro Range Object Properties"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-spans",children:"VP Get spans"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-remove-span",children:"VP REMOVE SPAN"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},842002:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/vp-add-span-2-584074a60f1d13d7c891d349b4531166.png"},565919:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/vp-add-span-d3eb740fe3b6369f6553f30743000156.png"},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var t=s(296540);const r={},a=t.createContext(r);function i(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);