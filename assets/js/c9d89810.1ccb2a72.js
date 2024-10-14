"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90423],{718304:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>m,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var l=s(474848),o=s(28453);const r={id:"vp-set-formulas",title:"VP SET FORMULAS"},t=void 0,c={id:"ViewPro/commands/vp-set-formulas",title:"VP SET FORMULAS",description:"VP SET FORMULAS ( rangeObj Collection )",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-set-formulas.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-formulas",permalink:"/docs/20-R5/ViewPro/commands/vp-set-formulas",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-formulas.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-set-formulas",title:"VP SET FORMULAS"},sidebar:"docs",previous:{title:"VP SET FORMULA",permalink:"/docs/20-R5/ViewPro/commands/vp-set-formula"},next:{title:"VP SET FROZEN PANES",permalink:"/docs/20-R5/ViewPro/commands/vp-set-frozen-panes"}},i={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function d(e){const n={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"VP SET FORMULAS"})," ( ",(0,l.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,l.jsx)(n.em,{children:"formulasCol"})," : Collection )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"rangeObj"}),(0,l.jsx)(n.td,{children:"Object"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Cell range object"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"formulasCol"}),(0,l.jsx)(n.td,{children:"Collection"}),(0,l.jsx)(n.td,{children:"->"}),(0,l.jsx)(n.td,{children:"Collection of formulas"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.code,{children:"VP SET FORMULAS"})," command assigns a collection of formulas starting at the specified cell range."]}),"\n",(0,l.jsxs)(n.p,{children:["In ",(0,l.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell (created with ",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-cell",children:"VP Cell"}),") whose formula you want to specify. If ",(0,l.jsx)(n.em,{children:"rangeObj"})," includes multiple ranges, only the first range is used."]}),"\n",(0,l.jsxs)(n.p,{children:["The ",(0,l.jsx)(n.em,{children:"formulasCol"})," is a two-dimensional collection:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"The first-level collection contains subcollections of formulas. Each subcollection defines a row."}),"\n",(0,l.jsx)(n.li,{children:"Each subcollection defines cell values for the row. Values must be text elements containing the formulas to assign to the cells."}),"\n"]}),"\n",(0,l.jsxs)(n.blockquote,{children:["\n",(0,l.jsxs)(n.p,{children:["If the formula is a string, use the period ",(0,l.jsx)(n.code,{children:"."})," as numerical separator and the comma ",(0,l.jsx)(n.code,{children:","})," as parameter separator.\nIf a 4D method is used, it must be allowed with the ",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-allowed-methods",children:(0,l.jsx)(n.code,{children:"VP SET ALLOWED METHODS"})})," command."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["You remove the formulas in ",(0,l.jsx)(n.em,{children:"rangeObj"}),' by replacing them with an empty string ("").']}),"\n",(0,l.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$formulas:=New collection\n$formulas.push(New collection("MAX(B11,C11,D11)";"myMethod(G4)")) // First row\n$formulas.push(New collection("SUM(B11:D11)";"AVERAGE(B11:D11)")) // Second row\n\n \nVP SET FORMULAS(VP Cell("ViewProArea";6;3);$formulas) // Set the cells with the formulas\n'})}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.em,{children:"myMethod"}),":"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"$0:=$1*3.33\n"})}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.img,{src:s(355495).A+"",width:"977",height:"474"})}),"\n",(0,l.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,l.jsx)(n.p,{children:"To remove formulas:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'$formulas:=New collection\n$formulas.push(New collection("";"")) // first collection\n$formulas.push(New collection("";"")) // second collection\n \nVP SET FORMULAS(VP Cell("ViewProArea";0;0);$formulas) // Assign to cells\n'})}),"\n",(0,l.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-formulas",children:"VP Get Formulas"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-get-values",children:"VP GET VALUES"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-formula",children:"VP SET FORMULA"}),(0,l.jsx)(n.br,{}),"\n",(0,l.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-values",children:"VP SET VALUES"})]})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},355495:(e,n,s)=>{s.d(n,{A:()=>l});const l=s.p+"assets/images/cmd_vpSetFormulas-d9a5e529fd8008034b0694f768bb2bbb.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>t,x:()=>c});var l=s(296540);const o={},r=l.createContext(o);function t(e){const n=l.useContext(r);return l.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);