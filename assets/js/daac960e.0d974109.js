"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64236"],{38880:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"WritePro/commands-legacy/wp-insert-break","title":"WP INSERT BREAK","description":"WP INSERT BREAK ( targetObj ; breakType ; mode {; rangeUpdate} )","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-insert-break.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-insert-break","permalink":"/docs/WritePro/commands/wp-insert-break","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-insert-break.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-insert-break","title":"WP INSERT BREAK","slug":"/WritePro/commands/wp-insert-break","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP IMPORT STYLE SHEETS","permalink":"/docs/WritePro/commands/wp-import-style-sheets"},"next":{"title":"WP INSERT DOCUMENT","permalink":"/docs/WritePro/commands/wp-insert-document"}}'),s=t("785893"),d=t("250065");let i={id:"wp-insert-break",title:"WP INSERT BREAK",slug:"/WritePro/commands/wp-insert-break",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"WP INSERT BREAK"})," ( ",(0,s.jsx)(n.em,{children:"targetObj"})," ; ",(0,s.jsx)(n.em,{children:"breakType"})," ; ",(0,s.jsx)(n.em,{children:"mode"})," {; ",(0,s.jsx)(n.em,{children:"rangeUpdate"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"targetObj"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"breakType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type of break to insert"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"mode"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Insertion mode"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rangeUpdate"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Range update mode"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"WP INSERT BREAK"})," command inserts a new break of the ",(0,s.jsx)(n.em,{children:"breakType"})," type in the ",(0,s.jsx)(n.em,{children:"targetObj"})," according to the specified insertion ",(0,s.jsx)(n.em,{children:"mode"})," and ",(0,s.jsx)(n.em,{children:"rangeUpdate"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"targetObj"}),", pass:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"a range, or"}),"\n",(0,s.jsx)(n.li,{children:"an element (table / row / paragraph / body / header / footer / inline picture / section / subsection), or"}),"\n",(0,s.jsx)(n.li,{children:"a 4D Write Pro document"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"breakType"}),", pass one of the following constants from the ",(0,s.jsx)(n.em,{children:"4D Write Pro Constants"})," theme to define the type of break to insert:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk column break"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Column break: inserts a column break"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk continuous section break"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Defines a continuous section break (often used to change the number of columns without starting a new page)."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk line break"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Line break (in the same paragraph)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk page break"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Page break: defines a new page"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk paragraph break"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Paragraph break: defines a new paragraph"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk section break"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Section break: defines a new section"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"mode"})," parameter, pass a constant to indicate the insertion mode to be used for the break in the destination ",(0,s.jsx)(n.em,{children:"targetObj"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk append"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Insert contents at end of target"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk prepend"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Insert contents at beginning of target"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk replace"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Replace target contents"})]})]})]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"targetObj"})," is a range, you can use the optional ",(0,s.jsx)(n.em,{children:"rangeUpdate"})," parameter to pass one of the following constants to specify whether or not the inserted contents are included in the resulting range:"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"}),(0,s.jsx)(n.th,{children:"Comment"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk exclude from range"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Inserted contents not included in updated range"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"wk include in range"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Inserted contents included in updated range (default)"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["If you do not pass a ",(0,s.jsx)(n.em,{children:"rangeUpdate"})," parameter, by default the inserted contents are included in the resulting range."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["If ",(0,s.jsx)(n.em,{children:"targetObj"})," is not a range, ",(0,s.jsx)(n.em,{children:"rangeUpdate"})," is ignored."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"While building invoices, you want to insert page breaks except on the last page:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$nbInvoices:=Records in selection([INVOICE])\n\xa0For($j;1;$nbInvoices)\n\xa0\xa0\xa0\xa0...\xa0//processing invoices\n\xa0\xa0\xa0\xa0If($j#$nbInvoices)\xa0//insert page break except for last page\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP INSERT BREAK($buildRange;wk page break;wk append;wk exclude from range)\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You want to insert a continuous section break to have a single column section and a two-column section on the same page."}),"\n",(0,s.jsxs)(n.ol,{children:["\n",(0,s.jsx)(n.li,{children:"Insert a continuous section break at the selection to create a new section:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$range:=WP Selection range(*;"WParea")  \n\xa0WP INSERT BREAK($range;wk continuous section break;wk append)  \n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.img,{src:t(877642).Z+"",width:"591",height:"197"}),"\n2. Set the column count to 2 for the first section:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0$section:=WP Get section(WParea;1)  \n\xa0WP SET ATTRIBUTES($section;wk column count;2)  \n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(922853).Z+"",width:"590",height:"199"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-get-breaks",children:"WP Get breaks"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/WritePro/commands/wp-insert-document",children:"WP INSERT DOCUMENT"})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},877642:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict5562056.en-017db0db310210ab1d86cf43b1ded43a.png"},922853:function(e,n,t){t.d(n,{Z:function(){return r}});let r=t.p+"assets/images/pict5562058.en-9a8a96af5d3eb875a4d8bb9d213eb4de.png"},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);