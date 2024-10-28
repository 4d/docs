"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[31425],{746499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>a});var o=n(474848),r=n(28453);const s={id:"wp-new-footer",title:"WP New footer",slug:"/WritePro/commands/wp-new-footer",displayed_sidebar:"docs"},i=void 0,c={id:"WritePro/commands-legacy/wp-new-footer",title:"WP New footer",description:"WP New footer ( wpSection ) -> Function result",source:"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-new-footer.md",sourceDirName:"WritePro/commands-legacy",slug:"/WritePro/commands/wp-new-footer",permalink:"/docs/WritePro/commands/wp-new-footer",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-new-footer.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"wp-new-footer",title:"WP New footer",slug:"/WritePro/commands/wp-new-footer",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"WP NEW BOOKMARK",permalink:"/docs/WritePro/commands/wp-new-bookmark"},next:{title:"WP New header",permalink:"/docs/WritePro/commands/wp-new-header"}},d={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"WP New footer"})," ( ",(0,o.jsx)(t.em,{children:"wpSection"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"wpSection"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"4D Write Pro section or subsection"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Function result"}),(0,o.jsx)(t.td,{children:"Object"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"4D Write Pro footer"})]})]})]}),"\n",(0,o.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"WP New footer"})," command creates and returns the footer associated to the section or subsection defined by the ",(0,o.jsx)(t.em,{children:"wpSection"})," parameter."]}),"\n",(0,o.jsxs)(t.p,{children:["If a footer element is already defined for the section or subsection, an ",(0,o.jsx)(t.em,{children:"undefined"})," object is returned and an error is generated."]}),"\n",(0,o.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"You want to create a footer for the left pages of a section:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-4d",children:"\xa0var $section ;$subsection ;$footer : Object\n\xa0\xa0//Retrieve the first section\n\xa0$section:=WP Get section(wpDoc;1)\n\xa0\xa0//Retrieve the reference on the left subsection of the first section\n\xa0$subsection:=WP Get subsection($section;wk left page)\n\xa0\n\xa0\xa0//If the subsection exists, set the footer\n\xa0If($subsection#Null)\n\xa0\xa0\xa0\xa0$footer:=WP New footer($subsection)\n\xa0End if\n"})}),"\n",(0,o.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.a,{href:"/docs/WritePro/commands/wp-delete-footer",children:"WP DELETE FOOTER"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,o.jsx)(t.br,{}),"\n",(0,o.jsx)(t.a,{href:"/docs/WritePro/commands/wp-new-header",children:"WP New header"})]})]})}function h(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>i,x:()=>c});var o=n(296540);const r={},s=o.createContext(r);function i(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);