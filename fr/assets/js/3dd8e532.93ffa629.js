"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77479],{26181:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>d,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var t=s(474848),r=s(28453);const i={id:"vp-remove-span",title:"VP REMOVE SPAN"},o=void 0,c={id:"ViewPro/commands/vp-remove-span",title:"VP REMOVE SPAN",description:"VP REMOVE SPAN ( rangeObj : Object )",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/ViewPro/commands/vp-remove-span.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-remove-span",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-remove-span",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-remove-span.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-remove-span",title:"VP REMOVE SPAN"},sidebar:"docs",previous:{title:"VP REMOVE SHEET",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-remove-sheet"},next:{title:"VP REMOVE STYLESHEET",permalink:"/docs/fr/20-R6/ViewPro/commands/vp-remove-stylesheet"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Exemple",id:"exemple",level:4},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"VP REMOVE SPAN"})," ( ",(0,t.jsx)(n.em,{children:"rangeObj"})," : Object )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Param\xe8tres"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"}),(0,t.jsx)(n.th,{})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rangeObj"}),(0,t.jsx)(n.td,{children:"Object"}),(0,t.jsx)(n.td,{children:"->"}),(0,t.jsx)(n.td,{children:"Objet plage"}),(0,t.jsx)(n.td,{})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.code,{children:"VP REMOVE SPAN"})," command removes the span from the cells in ",(0,t.jsx)(n.em,{children:"rangeObj"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["In ",(0,t.jsx)(n.em,{children:"rangeObj"}),", pass a range object of the cell span. Les cellules fusionn\xe9es de la plage sont divis\xe9es en cellules individuelles."]}),"\n",(0,t.jsx)(n.h4,{id:"exemple",children:"Exemple"}),"\n",(0,t.jsx)(n.p,{children:"Pour retirer toutes les fusions de cellules de ce document :"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(447611).A+"",width:"683",height:"162"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:' //find all cell spans\n $span:=VP Get spans(VP All("ViewProArea"))\n\n \n  //remove the cell spans\n VP REMOVE SPAN($span)\n'})}),"\n",(0,t.jsx)(n.p,{children:"R\xe9sultat:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(253472).A+"",width:"670",height:"162"})}),"\n",(0,t.jsx)(n.h4,{id:"voir-\xe9galement",children:"Voir \xe9galement"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-add-span",children:"VP ADD SPAN"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/fr/20-R6/ViewPro/commands/vp-get-spans",children:"VP Get spans"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},447611:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cmd_vpRemoveSpan1-fee2730f9c75949086185290f1a0b64a.PNG"},253472:(e,n,s)=>{s.d(n,{A:()=>t});const t=s.p+"assets/images/cmd_vpRemoveSpan2-c69b0babe3e0461982532ff0403a0839.PNG"},28453:(e,n,s)=>{s.d(n,{R:()=>o,x:()=>c});var t=s(296540);const r={},i=t.createContext(r);function o(e){const n=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);