"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[96795],{865040:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var s=t(474848),r=t(28453);const c={id:"vp-get-selection",title:"VP Get selection"},i=void 0,o={id:"ViewPro/commands/vp-get-selection",title:"VP Get selection",description:"VP Get selection ( vpAreaName Integer } ) ) : Object",source:"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-get-selection.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-selection",permalink:"/docs/ViewPro/commands/vp-get-selection",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-selection.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-get-selection",title:"VP Get selection"},sidebar:"docs",previous:{title:"VP Get row count",permalink:"/docs/ViewPro/commands/vp-get-row-count"},next:{title:"VP Get sheet count",permalink:"/docs/ViewPro/commands/vp-get-sheet-count"}},d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP Get selection"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer } ) ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"4D View Pro area from object name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"<-"}),(0,s.jsx)(n.td,{children:"Range object of cells"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP Get selection"})," command returns a new range object referencing the current selected cells."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["In the optional ",(0,s.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass ",(0,s.jsx)(n.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(930843).A+"",width:"553",height:"365"})}),"\n",(0,s.jsx)(n.p,{children:"The following code will retrieve the coordinates of all the cells in the current selection:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'$currentSelection:=VP Get selection("myVPArea")\n\n \n//returns a range object containing:  \n//$currentSelection.ranges[0].column=5\n//$currentSelection.ranges[0].columnCount=2\n//$currentSelection.ranges[0].row=8\n//$currentSelection.ranges[0].rowCount=6\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-add-selection",children:"VP ADD SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-active-cell",children:"VP Get active cell"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-active-cell",children:"VP SET ACTIVE CELL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-selection",children:"VP SET SELECTION"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-show-cell",children:"VP SHOW CELL"})]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},930843:(e,n,t)=>{t.d(n,{A:()=>s});const s=t.p+"assets/images/cmd_vpGetSelection-f6160840f42a7d437018fd26a4a1c6c4.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>o});var s=t(296540);const r={},c=s.createContext(r);function i(e){const n=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);