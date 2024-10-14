"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18554],{629391:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>a});var r=t(474848),s=t(28453);const o={id:"vp-get-frozen-panes",title:"VP Get frozen panes"},d=void 0,i={id:"ViewPro/commands/vp-get-frozen-panes",title:"VP Get frozen panes",description:"VP Get frozen panes ( vpAreaName Integer } ) : Object",source:"@site/versioned_docs/version-20-R5/ViewPro/commands/vp-get-frozen-panes.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-get-frozen-panes",permalink:"/docs/20-R5/ViewPro/commands/vp-get-frozen-panes",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-frozen-panes.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"vp-get-frozen-panes",title:"VP Get frozen panes"},sidebar:"docs",previous:{title:"VP Get formulas",permalink:"/docs/20-R5/ViewPro/commands/vp-get-formulas"},next:{title:"VP Get names",permalink:"/docs/20-R5/ViewPro/commands/vp-get-names"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Returned object",id:"returned-object",level:5},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){const n={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP Get frozen panes"})," ( vpAreaName : Text { ; sheet : Integer } ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"vpAreaName"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheet"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Result"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"<-"}),(0,r.jsx)(n.td,{children:"Object containing frozen column and row information"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP Get frozen panes"})," command returns an object with information about the frozen columns and rows in ",(0,r.jsx)(n.em,{children:"vpAreaName"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,r.jsxs)(n.p,{children:["In the optional ",(0,r.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet where the range will be defined (counting begins at 0). If omitted or if you pass ",(0,r.jsx)(n.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,r.jsx)(n.h5,{id:"returned-object",children:"Returned object"}),"\n",(0,r.jsx)(n.p,{children:"The command returns an object describing the frozen columns and rows. This object can contain the following properties:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Property"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"columnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"The number of frozen columns on the left of the sheet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trailingColumnCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"The number of frozen columns on the right of the sheet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rowCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"The number of frozen rows on the top of the sheet"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"trailingRowCount"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"The number of frozen rows on the bottom of the sheet"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"You want to retrieve information about the number of frozen columns and rows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'var $panesObj : Object\n\n \n$panesObj:=VP Get frozen panes("ViewProArea")\n'})}),"\n",(0,r.jsx)(n.p,{children:"The returned object contains, for example:"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(215003).A+"",width:"1123",height:"210"})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R5/ViewPro/commands/vp-set-frozen-panes",children:"VP SET FROZEN PANES"})})]})}function l(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},215003:(e,n,t)=>{t.d(n,{A:()=>r});const r=t.p+"assets/images/cmd_vpGetFrozenpanes-398acd4f3af923b58c396d0fa808b53c.PNG"},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>i});var r=t(296540);const s={},o=r.createContext(s);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);