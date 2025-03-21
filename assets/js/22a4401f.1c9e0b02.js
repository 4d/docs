"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33143"],{82437:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>d});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-get-breaks","title":"WP Get breaks","description":"WP Get breaks ( targetObj {; breakType} ) : Collection","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-get-breaks.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-get-breaks","permalink":"/docs/WritePro/commands/wp-get-breaks","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-get-breaks.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-get-breaks","title":"WP Get breaks","slug":"/WritePro/commands/wp-get-breaks","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP GET BOOKMARKS","permalink":"/docs/WritePro/commands/wp-get-bookmarks"},"next":{"title":"WP Get data context","permalink":"/docs/WritePro/commands/wp-get-data-context"}}'),s=r("785893"),i=r("250065");let a={id:"wp-get-breaks",title:"WP Get breaks",slug:"/WritePro/commands/wp-get-breaks",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get breaks"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," {; ",(0,s.jsx)(n.em,{children:"breakType"}),"} ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"breakType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type of breaks to return"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Collection of ranges"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP Get breaks"})," command returns the collection of all breaks inserted in ",(0,s.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"This command only returns breaks entered by a user or the code, and not those automatically generated by 4D Write Pro for layout purposes."}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"targetObj"})," parameter, you can pass:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a range, or"}),"\n",(0,s.jsx)(n.li,{children:"an element (table / row / paragraph / body / header / footer / section / subsection / text box), or"}),"\n",(0,s.jsx)(n.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["By default, breaks of any type are returned. You can select a specific break type to return by passing one of the following constants in the optional ",(0,s.jsx)(n.em,{children:"breakType"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk column break"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Column break: inserts a column break"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk continuous section break"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Defines a continuous section break (often used to change the number of columns without starting a new page)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk line break"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Line break (in the same paragraph)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk page break"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Page break: defines a new page"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk paragraph break"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Paragraph break: defines a new paragraph"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk section break"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Section break: defines a new section"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Returned value"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP Get breaks"})," returns a collection of range objects, each of them describing a break within the targetObj. A specific read-only property is available in each range object, providing the type of the break:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Property"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Type"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Constant"})}),(0,s.jsx)(n.th,{children:(0,s.jsx)(n.strong,{children:"Description"})})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"[ ].breakType"}),(0,s.jsx)(n.td,{children:"Number"}),(0,s.jsx)(n.td,{children:"wk break type"}),(0,s.jsx)(n.td,{children:"Read-only: type of the break"})]})})]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"targetObj"})," is a range or element, breaks are returned in the order they are found."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"targetObj"})," is a 4D Write Pro document, breaks are returned in the following order:"]}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"body"}),"\n",(0,s.jsx)(n.li,{children:"first page header for section 1 (if any)"}),"\n",(0,s.jsx)(n.li,{children:"first page footer for section 1 (if any)"}),"\n",(0,s.jsx)(n.li,{children:"left page header for section 1 (if any)"}),"\n",(0,s.jsx)(n.li,{children:"left page footer for section 1 (if any)"}),"\n",(0,s.jsx)(n.li,{children:"right page header for section (if any)"}),"\n",(0,s.jsx)(n.li,{children:"right page footer for section 1 (if any)"}),"\n",(0,s.jsx)(n.li,{children:"main header for section 1 (if any)"}),"\n",(0,s.jsx)(n.li,{children:"main footer for section 1 (if any)"}),"\n",(0,s.jsx)(n.li,{children:"repeat with section 2, section 3, and so on"}),"\n",(0,s.jsx)(n.li,{children:"text boxes."}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["An empty collection is returned if ",(0,s.jsx)(n.em,{children:"targetObj"})," does not contain any break (or any break of the requested ",(0,s.jsx)(n.em,{children:"breakType"}),")."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to replace all line breaks with paragraph breaks in the document:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $_filteredBreaks : Collection\n\xa0var $break : Object\n\xa0$_filteredBreaks:=WP Get breaks(WParea;wk line break)\n\xa0For each($break;$_filteredBreaks)\n\xa0\xa0\xa0\xa0WP INSERT BREAK($break;wk paragraph break;wk replace)\n\xa0End for each\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-elements",children:"WP Get elements"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-insert-break",children:"WP INSERT BREAK"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);