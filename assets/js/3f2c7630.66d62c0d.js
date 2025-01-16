"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["27539"],{294804:function(e,t,s){s.r(t),s.d(t,{default:()=>a,frontMatter:()=>i,metadata:()=>n,assets:()=>d,toc:()=>o,contentTitle:()=>c});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-style-sheet","title":"WP Get style sheet","description":"WP Get style sheet ( wpDoc ; styleSheetName ) : Object","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-get-style-sheet.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-style-sheet","permalink":"/docs/WritePro/commands/wp-get-style-sheet","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-style-sheet.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-style-sheet","title":"WP Get style sheet","slug":"/WritePro/commands/wp-get-style-sheet","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get sections","permalink":"/docs/WritePro/commands/wp-get-sections"},"next":{"title":"WP Get style sheets","permalink":"/docs/WritePro/commands/wp-get-style-sheets"}}'),r=s("785893"),l=s("250065");let i={id:"wp-get-style-sheet",title:"WP Get style sheet",slug:"/WritePro/commands/wp-get-style-sheet",displayed_sidebar:"docs"},c=void 0,d={},o=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get style sheet"})," ( ",(0,r.jsx)(t.em,{children:"wpDoc"})," ; ",(0,r.jsx)(t.em,{children:"styleSheetName"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpDoc"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"4D Write Pro document"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"styleSheetName"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Style sheet name"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Style sheet object"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WP Get style sheet"})," command returns the style sheet object designated by the ",(0,r.jsx)(t.em,{children:"styleSheetName"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"wpDoc"}),", pass the 4D Write Pro document that contains the style sheet."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"styleSheetName"})," parameter allows you to specify the name of the style sheet to return. If the style sheet name does not exist in ",(0,r.jsx)(t.em,{children:"wpDoc"}),", an null object is returned."]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:'To retrieve the "Main title" style sheet:'}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:'\xa0var $styleSheet : Object\n\xa0\n\xa0$styleSheet:=WP Get style sheet(wpArea;"Main title")\n\xa0If($styleSheet=Null)\xa0// check if the style sheet exists//if not create it\n\xa0\xa0\xa0\xa0$styleSheet:=WP New style sheet(wpArea;wk type paragraph;"Main title")\n\xa0End if\n'})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Accessing document contents by programming"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-style-sheets",children:"WP Get style sheets"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-import-style-sheets",children:"WP IMPORT STYLE SHEETS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-new-style-sheet",children:"WP New style sheet"})]})]})}function a(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return c},a:function(){return i}});var n=s(667294);let r={},l=n.createContext(r);function i(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);