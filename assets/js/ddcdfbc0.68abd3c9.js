"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82941"],{629560:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-header","title":"WP Get header","description":"WP Get header ( targetObj ) | (wpDoc ; sectionIndex {; subSectionType} )  : Object","source":"@site/versioned_docs/version-20-R9/WritePro/commands-legacy/wp-get-header.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-header","permalink":"/docs/WritePro/commands/wp-get-header","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-header.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"wp-get-header","title":"WP Get header","slug":"/WritePro/commands/wp-get-header","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Get frame","permalink":"/docs/WritePro/commands/wp-get-frame"},"next":{"title":"WP Get links","permalink":"/docs/WritePro/commands/wp-get-links"}}'),s=t("785893"),d=t("250065");let i={id:"wp-get-header",title:"WP Get header",slug:"/WritePro/commands/wp-get-header",displayed_sidebar:"docs"},c=void 0,a={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get header"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ) | (",(0,s.jsx)(n.em,{children:"wpDoc"})," ; ",(0,s.jsx)(n.em,{children:"sectionIndex"})," {; ",(0,s.jsx)(n.em,{children:"subSectionType"}),"} )  : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"4D Write Pro range or section/sub-section element"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wpDoc"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"4D Write Pro document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sectionIndex"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Section index"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"subSectionType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Sub-section type (wk first page, wk left page, or wk right page)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"4D Write Pro header"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP Get header"})," command returns the header associated to the ",(0,s.jsx)(n.em,{children:"targetObj"})," or to the specified ",(0,s.jsx)(n.em,{children:"sectionIndex"})," of the ",(0,s.jsx)(n.em,{children:"wpDoc"})," document. If no header is found with regards to the parameter(s), the command returns ",(0,s.jsx)(n.strong,{children:"Null"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["With the first syntax (using the ",(0,s.jsx)(n.em,{children:"targetObj"})," parameter), the command returns the header of the first page in the range or section/sub-section passed in parameter. If a sub-section is active on the page, the command returns the header of the active sub-section, so it always returns the visible header."]}),"\n",(0,s.jsxs)(n.li,{children:["With the second syntax (using the ",(0,s.jsx)(n.em,{children:"wpDoc"})," parameter), the command returns the header of the specified ",(0,s.jsx)(n.em,{children:"sectionIndex"})," section (",(0,s.jsx)(n.em,{children:"sectionIndex"})," value must be >=1).",(0,s.jsx)(n.br,{}),"\nIf the ",(0,s.jsx)(n.em,{children:"subSectionType"})," parameter is passed, the command returns the header associated to the specified sub-section type. You can pass one of the following constants in the ",(0,s.jsx)(n.em,{children:"subSectionType"})," parameter:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk first page"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk left page"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk right page"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If the ",(0,s.jsx)(n.em,{children:"subSectionType"})," is not specified, the main section header will be returned. In this case, if a sub-section is active, the main section header object is ",(0,s.jsx)(n.em,{children:"undefined"})," (the main section header is available only if there is no active wk first page or wk left page sub-section)."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to copy the header of the first page of a 4D Write Pro document to the headers of all pages of another 4D Write Pro document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $headerSource;$rangeSource;$tempoc;$headerTarget;$rangeTarget : Object\n\xa0\n\xa0$headerSource:=WP Get header([TEMPLATES]WPtemplate;1;wk first page)\xa0//get the first page header of section 1\n\xa0$rangeSource:=WP Text range($headerSource;wk start text;wk end text)\n\xa0$tempoc:=WP New($rangeSource)\n\xa0\n\xa0$headerTarget:=WP Get header([Docs]MyWPDoc;1)\xa0//all pages of section 1\n\xa0$rangeTarget:=WP Text range($headerTarget;wk start text;wk end text)\n\xa0\n\xa0WP INSERT DOCUMENT($rangeTarget;$tempoc;wk replace)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"Using a 4D Write Pro area"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-delete-header",children:"WP DELETE HEADER"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-footer",children:"WP Get footer"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-new-header",children:"WP New header"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);