"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92785],{459838:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=n(474848),r=n(28453);const l={id:"vp-set-text-value",title:"VP SET TEXT VALUE"},i=void 0,d={id:"ViewPro/commands/vp-set-text-value",title:"VP SET TEXT VALUE",description:"VP SET TEXT VALUE ( rangeObj Text { ; formatPattern : Text }  )",source:"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-set-text-value.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-text-value",permalink:"/docs/ViewPro/commands/vp-set-text-value",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-text-value.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"vp-set-text-value",title:"VP SET TEXT VALUE"},sidebar:"docs",previous:{title:"VP SET TABLE THEME",permalink:"/docs/ViewPro/commands/vp-set-table-theme"},next:{title:"VP SET TIME VALUE",permalink:"/docs/ViewPro/commands/vp-set-time-value"}},c={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"VP SET TEXT VALUE"})," ( ",(0,s.jsx)(t.em,{children:"rangeObj"})," : Object ; ",(0,s.jsx)(t.em,{children:"textValue"})," : Text { ; ",(0,s.jsx)(t.em,{children:"formatPattern"})," : Text }  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"rangeObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Range object"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"textValue"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Text value to set"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"formatPattern"}),(0,s.jsx)(t.td,{children:"Text"}),(0,s.jsx)(t.td,{children:"->"}),(0,s.jsx)(t.td,{children:"Format of value"})]})]})]}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"VP SET TEXT VALUE"})," command assigns a specified text value to a designated cell range."]}),"\n",(0,s.jsxs)(t.p,{children:["In ",(0,s.jsx)(t.em,{children:"rangeObj"}),", pass a range of the cell(s) (created for example with ",(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-cell",children:(0,s.jsx)(t.code,{children:"VP Cell"})})," or ",(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-column",children:(0,s.jsx)(t.code,{children:"VP Column"})}),") whose value you want to specify. If ",(0,s.jsx)(t.em,{children:"rangeObj"})," includes multiple cells, the value specified will be repeated in each cell."]}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.em,{children:"textValue"})," parameter specifies a text value to be assigned to the ",(0,s.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["The optional ",(0,s.jsx)(t.em,{children:"formatPattern"})," defines a ",(0,s.jsx)(t.a,{href:"/docs/ViewPro/configuring#cell-format",children:"pattern"})," for the ",(0,s.jsx)(t.em,{children:"textValue"})," parameter."]}),"\n",(0,s.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'VP SET TEXT VALUE(VP Cell("ViewProArea";3;2);"Test 4D View Pro")\n'})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/ViewPro/configuring#cell-format",children:"Cell Format"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>d});var s=n(296540);const r={},l=s.createContext(r);function i(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);