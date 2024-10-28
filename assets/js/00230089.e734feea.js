"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11863],{574146:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>a});var r=t(474848),s=t(28453);const i={id:"vp-set-field",title:"VP SET FIELD"},d=void 0,l={id:"ViewPro/commands/vp-set-field",title:"VP SET FIELD",description:"VP SET FIELD ( rangeObj Pointer { ; formatPattern : Text } )",source:"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-set-field.md",sourceDirName:"ViewPro/commands",slug:"/ViewPro/commands/vp-set-field",permalink:"/docs/20-R6/ViewPro/commands/vp-set-field",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-field.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"vp-set-field",title:"VP SET FIELD"},sidebar:"docs",previous:{title:"VP SET DEFAULT STYLE",permalink:"/docs/20-R6/ViewPro/commands/vp-set-default-style"},next:{title:"VP SET FORMULA",permalink:"/docs/20-R6/ViewPro/commands/vp-set-formula"}},c={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"VP SET FIELD"})," ( ",(0,r.jsx)(n.em,{children:"rangeObj"})," : Object ; ",(0,r.jsx)(n.em,{children:"field"})," : Pointer { ; ",(0,r.jsx)(n.em,{children:"formatPattern"})," : Text } )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"rangeObj"}),(0,r.jsx)(n.td,{children:"Object"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Range object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"field"}),(0,r.jsx)(n.td,{children:"Pointer"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Reference to field in virtual structure"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"formatPattern"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"->"}),(0,r.jsx)(n.td,{children:"Format of field"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.code,{children:"VP SET FIELD"})," command assigns a 4D database virtual field to a designated cell range."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"rangeObj"}),", pass a range of the cell(s) whose value you want to specify. If ",(0,r.jsx)(n.em,{children:"rangeObj"})," includes multiple cells, the specified field will be linked in each cell."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"field"})," parameter specifies a 4D database ",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/formulas#referencing-fields-using-the-virtual-structure",children:"virtual field"})," to be assigned to the ",(0,r.jsx)(n.em,{children:"rangeObj"}),". The virtual structure name for ",(0,r.jsx)(n.em,{children:"field"})," can be viewed in the formula bar. If any of the cells in ",(0,r.jsx)(n.em,{children:"rangeObj"})," have existing content, it will be replaced by ",(0,r.jsx)(n.em,{children:"field"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["The optional ",(0,r.jsx)(n.em,{children:"formatPattern"})," defines a pattern for the ",(0,r.jsx)(n.em,{children:"field"})," parameter. You can pass any valid ",(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/configuring#cell-format",children:"custom format"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'VP SET FIELD(VP Cell("ViewProArea";5;2);->[TableName]Field)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-value",children:"VP SET VALUE"})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>d,x:()=>l});var r=t(296540);const s={},i=r.createContext(s);function d(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);