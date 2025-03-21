"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92244"],{719483:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-footer","title":"WP Get footer","description":"WP Get footer ( targetObj ) | (wpDoc ; sectionIndex {; sectionSubType} )  : Object","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-get-footer.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-footer","permalink":"/docs/WritePro/commands/wp-get-footer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-footer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-footer","title":"WP Get footer","slug":"/WritePro/commands/wp-get-footer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get elements","permalink":"/docs/WritePro/commands/wp-get-elements"},"next":{"title":"WP Get formulas","permalink":"/docs/WritePro/commands/wp-get-formulas"}}'),s=n("785893"),o=n("250065");let i={id:"wp-get-footer",title:"WP Get footer",slug:"/WritePro/commands/wp-get-footer",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"WP Get footer"})," ( ",(0,s.jsx)(t.em,{children:"targetObj"})," ) | (",(0,s.jsx)(t.em,{children:"wpDoc"})," ; ",(0,s.jsx)(t.em,{children:"sectionIndex"})," {; ",(0,s.jsx)(t.em,{children:"sectionSubType"}),"} )  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"targetObj"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"4D Write Pro range or section/sub-section element"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wpDoc"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"4D Write Pro document"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sectionIndex"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Section index"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"sectionSubType"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsx)(t.td,{children:"Type of subsection (wk first page, wk left page, or wk right page)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"Function result"}),(0,s.jsx)(t.td,{children:"Object"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"4D Write Pro footer"})]})]})]}),"\n",(0,s.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.strong,{children:"WP Get footer"})," command returns the footer associated to the ",(0,s.jsx)(t.em,{children:"targetObj"})," range or to the specified ",(0,s.jsx)(t.em,{children:"sectionIndex"})," of the ",(0,s.jsx)(t.em,{children:"wpDoc"})," document. If no footer is found with regards to the parameter(s), the command returns ",(0,s.jsx)(t.strong,{children:"Null"}),"."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["With the first syntax (using the ",(0,s.jsx)(t.em,{children:"targetObj"})," parameter), the command returns the footer of the first page in the range or the section/sub-section passed in parameter. If a sub-section is active on the page, the command returns the footer of the active sub-section, so it always returns the visible footer."]}),"\n",(0,s.jsxs)(t.li,{children:["With the second syntax (using the ",(0,s.jsx)(t.em,{children:"wpDoc"})," parameter), the command returns the footer of the specified ",(0,s.jsx)(t.em,{children:"sectionIndex"})," section (",(0,s.jsx)(t.em,{children:"sectionIndex"})," value must be >=1).",(0,s.jsx)(t.br,{}),"\nIf the ",(0,s.jsx)(t.em,{children:"subSectionType"})," parameter is passed, the command returns the footer associated to the specified sub-section type. You can pass one of the following constants in the ",(0,s.jsx)(t.em,{children:"subSectionType"})," parameter:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Constant"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{children:"Value"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk first page"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"1"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk left page"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"2"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"wk right page"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"3"})]})]})]}),"\n",(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.em,{children:"subSectionType"})," is not specified, the main section footer will be returned. In this case, if a sub-section is active, the main section footer object is ",(0,s.jsx)(t.em,{children:"undefined"})," (the main section footer is available only if there is no active wk first page or wk left page sub-section)."]}),"\n",(0,s.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(t.p,{children:"You want to copy the footer of the first page of a 4D Write Pro document to the footer of all pages of another 4D Write Pro document:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:"\xa0var $footerSource;$rangeSource;$tempoc;$footerTarget;$rangeTarget : Object\n\xa0\n\xa0$footerSource:=WP Get footer([TEMPLATES]WPtemplate;1;wk first page)\xa0//get the first page footer of section 1\n\xa0$rangeSource:=WP Text range($footerSource;wk start text;wk end text)\n\xa0$tempoc:=WP New($rangeSource)\n\xa0\n\xa0$footerTarget:=WP Get footer([Docs]MyWPDoc;1)\xa0//all pages of section 1\n\xa0$rangeTarget:=WP Text range($footerTarget;wk start text;wk end text)\n\xa0\n\xa0WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)\n"})}),"\n",(0,s.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:"Using a 4D Write Pro area"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/WritePro/commands/wp-delete-footer",children:"WP DELETE FOOTER"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-frame",children:"WP Get frame"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/WritePro/commands/wp-get-header",children:"WP Get header"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/WritePro/commands/wp-new-footer",children:"WP New footer"})]})]})}function h(e={}){let{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return i}});var r=n(667294);let s={},o=r.createContext(s);function i(e){let t=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);