"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["54176"],{917201:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>o,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"ViewPro/commands/vp-get-show-print-lines","title":"VP Get show print lines","description":"VP Get show print lines ( vpAreaName Integer } ) : Boolean","source":"@site/versioned_docs/version-20-R6/ViewPro/commands/vp-get-show-print-lines.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-get-show-print-lines","permalink":"/docs/20-R6/ViewPro/commands/vp-get-show-print-lines","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-get-show-print-lines.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"vp-get-show-print-lines","title":"VP Get show print lines"},"sidebar":"docs","previous":{"title":"VP Get sheet options","permalink":"/docs/20-R6/ViewPro/commands/vp-get-sheet-options"},"next":{"title":"VP Get spans","permalink":"/docs/20-R6/ViewPro/commands/vp-get-spans"}}'),i=t("785893"),r=t("250065");let o={id:"vp-get-show-print-lines",title:"VP Get show print lines"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"VP Get show print lines"})," ( ",(0,i.jsx)(n.em,{children:"vpAreaName"})," : Text {; ",(0,i.jsx)(n.em,{children:"sheet"})," : Integer } ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"vpAreaName"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"->"}),(0,i.jsx)(n.td,{children:"4D View Pro area form object name"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sheet"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"Sheet index"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"<-"}),(0,i.jsx)(n.td,{children:"True if print lines are visible, False otherwise"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"VP Get show print lines"})," command returns ",(0,i.jsx)(n.code,{children:"True"})," if the print preview lines are visible and ",(0,i.jsx)(n.code,{children:"False"})," if they are hidden."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"vpAreaName"}),", pass the name of the 4D View Pro area."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.em,{children:"sheet"}),", pass the index of the target sheet. If ",(0,i.jsx)(n.em,{children:"sheet"})," is omitted, the command applies to the current sheet."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"Indexing starts at 0."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"The following code checks if preview lines are displayed or hidden in the document:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:' var $result : Boolean\n $result:=VP Get show print lines("ViewProArea";1)\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R6/ViewPro/commands/vp-set-show-print-lines",children:"VP SET SHOW PRINT LINES"})})]})}function a(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);