"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82532],{706349:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>c,toc:()=>i});var r=s(474848),t=s(28453);const l={id:"vp-all",title:"VP All"},d=void 0,c={id:"ViewPro/commands/vp-all",title:"VP All",description:"VP All ( vpAreaName Integer } )  : Object",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-all.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-all",permalink:"/docs/20-R5/ViewPro/commands/vp-all",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-all.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-all",title:"VP All"},sidebar:"docs",previous:{title:"VP ADD STYLESHEET",permalink:"/docs/20-R5/ViewPro/commands/vp-add-stylesheet"},next:{title:"C",permalink:"/docs/20-R5/commands/C"}},o={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP All"})," ( ",(0,r.jsx)(n.em,{children:"vpAreaName"})," : Text { ; ",(0,r.jsx)(n.em,{children:"sheet"})," : Integer } )  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Range object of all cells"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP ALL"})," command returns a new range object referencing all cells."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["In the optional ",(0,r.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to define a range object for all of the cells of the current spreadsheet:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'$all:=VP All("ViewProArea") // all cells of the current sheet\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"vp-cell",children:"VP Cell"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"vp-cells",children:"VP Cells"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-column",children:"VP Column"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-combine-ranges",children:"VP Combine ranges"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-name",children:"VP Name"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-row",children:"VP Row"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>c});var r=s(296540);const t={},l=r.createContext(t);function d(e){const n=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);