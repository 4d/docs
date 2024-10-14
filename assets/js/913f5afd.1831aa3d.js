"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3550],{17263:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>r,metadata:()=>d,toc:()=>h});var s=n(474848),o=n(28453);const r={id:"vp-get-sheet-options",title:"VP Get sheet options"},i=void 0,d={id:"ViewPro/commands/vp-get-sheet-options",title:"VP Get sheet options",description:"VP Get sheet options ( vpAreaName Integer } ) ) : Object",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-get-sheet-options.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-sheet-options",permalink:"/docs/20-R5/ViewPro/commands/vp-get-sheet-options",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-sheet-options.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-sheet-options",title:"VP Get sheet options"},sidebar:"docs",previous:{title:"VP Get sheet name",permalink:"/docs/20-R5/ViewPro/commands/vp-get-sheet-name"},next:{title:"VP Get show print lines",permalink:"/docs/20-R5/ViewPro/commands/vp-get-show-print-lines"}},c={},h=[{value:"Description",id:"description",level:4},{value:"Returned object",id:"returned-object",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP Get sheet options"})," ( ",(0,s.jsx)(t.em,{children:"vpAreaName"})," : Text {; ",(0,s.jsx)(t.em,{children:"sheet"})," : Integer } ) ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"vpAreaName"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"4D View Pro area from object name"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sheet"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Result"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"<-"}),(0,s.jsx)(t.td,{children:"Sheet options object"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP Get sheet options"})," command returns an object containing the current sheet options of the ",(0,s.jsx)(t.em,{children:"vpAreaName"})," area."]}),"\n",(0,s.jsxs)(t.p,{children:["Pass the name of the 4D View Pro area in ",(0,s.jsx)(t.em,{children:"vpAreaName"}),". If you pass a name that does not exist, an error is returned."]}),"\n",(0,s.jsxs)(t.p,{children:["In the optional ",(0,s.jsx)(t.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet (counting begins at 0). If omitted or if you pass ",(0,s.jsx)(t.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,s.jsx)(t.h4,{id:"returned-object",children:"Returned object"}),"\n",(0,s.jsxs)(t.p,{children:["The method returns an object containing the current values for all available sheet options. An option value may have been modified by the user or by the ",(0,s.jsx)(t.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-sheet-options",children:"VP SET SHEET OPTIONS"})," method."]}),"\n",(0,s.jsxs)(t.p,{children:["To view the full list of the options, see ",(0,s.jsx)(t.a,{href:"/docs/20-R5/ViewPro/configuring#sheet-options",children:"Sheet Options"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'$options:=VP Get sheet options("ViewProArea")\nIf($options.colHeaderVisible) //column headers are visible\n    ... //do something\nEnd if\n'})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/20-R5/ViewPro/configuring#sheet-options",children:"4D VIEW PRO SHEET OPTIONS"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-sheet-options",children:"VP SET SHEET OPTIONS"})]})]})}function l(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(296540);const o={},r=s.createContext(o);function i(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);