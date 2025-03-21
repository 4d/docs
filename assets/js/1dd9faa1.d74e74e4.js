"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44436"],{821705:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"ViewPro/commands/vp-get-row-count","title":"VP Get row count","description":"VP Get row count ( vpAreaName Integer } ) : Integer","source":"@site/versioned_docs/version-20-R8/ViewPro/commands/vp-get-row-count.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-row-count","permalink":"/docs/ViewPro/commands/vp-get-row-count","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-row-count.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"vp-get-row-count","title":"VP Get row count"},"sidebar":"docs","previous":{"title":"VP Get row attributes","permalink":"/docs/ViewPro/commands/vp-get-row-attributes"},"next":{"title":"VP Get selection","permalink":"/docs/ViewPro/commands/vp-get-selection"}}'),o=t("785893"),s=t("250065");let i={id:"vp-get-row-count",title:"VP Get row count"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"VP Get row count"})," ( ",(0,o.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,o.jsx)(n.em,{children:"sheet"})," : Integer } ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vpAreaName"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"4D View Pro area from object name"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sheet"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"->"}),(0,o.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Result"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"<-"}),(0,o.jsx)(n.td,{children:"Total number of rows"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"VP Get row count"})," command returns the total number of rows from the designated ",(0,o.jsx)(n.em,{children:"sheet"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"vpAreaName"}),", pass the name property of the 4D View Pro area. If you pass a name that does not exist, an error is returned."]}),"\n",(0,o.jsxs)(n.p,{children:["You can define where to get the row count in the optional ",(0,o.jsx)(n.em,{children:"sheet"})," parameter using the sheet index (counting begins at 0). If omitted or if you pass ",(0,o.jsx)(n.code,{children:"vk current sheet"}),", the current spreadsheet is used."]}),"\n",(0,o.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(n.p,{children:"The following code returns the number of rows in the 4D View Pro area:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'var $rowCount : Integer\n$rowCount:=VP Get row count("ViewProarea")\n'})}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-get-column-count",children:"VP Get column count"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-column-count",children:"VP SET COLUMN COUNT"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/ViewPro/commands/vp-set-row-count",children:"VP SET ROW COUNT"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let o={},s=r.createContext(o);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);