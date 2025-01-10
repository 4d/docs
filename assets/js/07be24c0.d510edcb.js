"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["43674"],{500493:function(e,t,s){s.r(t),s.d(t,{default:()=>a,frontMatter:()=>c,metadata:()=>n,assets:()=>i,toc:()=>d,contentTitle:()=>o});var n=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-style-sheets","title":"WP Get style sheets","description":"WP Get style sheets ( wpDoc ; type ) : Collection","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-get-style-sheets.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-style-sheets","permalink":"/docs/WritePro/commands/wp-get-style-sheets","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-style-sheets.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-get-style-sheets","title":"WP Get style sheets","slug":"/WritePro/commands/wp-get-style-sheets","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get style sheet","permalink":"/docs/WritePro/commands/wp-get-style-sheet"},"next":{"title":"WP Get subsection","permalink":"/docs/WritePro/commands/wp-get-subsection"}}'),r=s("785893"),l=s("250065");let c={id:"wp-get-style-sheets",title:"WP Get style sheets",slug:"/WritePro/commands/wp-get-style-sheets",displayed_sidebar:"docs"},o=void 0,i={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Get style sheets"})," ( ",(0,r.jsx)(t.em,{children:"wpDoc"})," ; ",(0,r.jsx)(t.em,{children:"type"})," ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpDoc"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"4D Write Pro document"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"type"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Type of style sheet"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Collection"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Collection of style sheet objects"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WP Get style sheets"})," command returns a collection of all the style sheet objects of the defined ",(0,r.jsx)(t.em,{children:"type"})," in ",(0,r.jsx)(t.em,{children:"wpDoc"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In the ",(0,r.jsx)(t.em,{children:"wpDoc"})," parameter, pass the 4D Write Pro document with the style sheets you want to get."]}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.em,{children:"type"})," parameter specifies the type of style sheet to return. The available types are:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"wk type character for character style sheets"}),"\n",(0,r.jsx)(t.li,{children:"wk type paragraph for paragraph style sheets"}),"\n"]}),"\n",(0,r.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"You want to retrieve a collection of all character style sheets:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-4d",children:"\xa0var $styleSheets : Collection\n\xa0$styleSheets:=WP Get style sheets(myDoc;wk type character)\n"})}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.em,{children:"Accessing document contents by programming"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-delete-style-sheet",children:"WP DELETE STYLE SHEET"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-style-sheet",children:"WP Get style sheet"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-import-style-sheets",children:"WP IMPORT STYLE SHEETS"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/WritePro/commands/wp-new-style-sheet",children:"WP New style sheet"})]})]})}function a(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return o},a:function(){return c}});var n=s(667294);let r={},l=n.createContext(r);function c(e){let t=n.useContext(l);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),n.createElement(l.Provider,{value:t},e.children)}}}]);