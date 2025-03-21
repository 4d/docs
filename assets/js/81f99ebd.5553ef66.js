"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72796"],{890536:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>o,toc:()=>l,contentTitle:()=>a});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-find-all","title":"WP Find all","description":"WP Find all ( targetObj ; searchValue ; searchCondition {; replaceValue} )  : Collection","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-find-all.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-find-all","permalink":"/docs/20-R7/WritePro/commands/wp-find-all","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-find-all.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-find-all","title":"WP Find all","slug":"/WritePro/commands/wp-find-all","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP EXPORT VARIABLE","permalink":"/docs/20-R7/WritePro/commands/wp-export-variable"},"next":{"title":"WP Find next","permalink":"/docs/20-R7/WritePro/commands/wp-find-next"}}'),i=r("785893"),s=r("250065");let d={id:"wp-find-all",title:"WP Find all",slug:"/WritePro/commands/wp-find-all",displayed_sidebar:"docs"},a=void 0,o={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Find all"})," ( ",(0,i.jsx)(n.em,{children:"targetObj"})," ; ",(0,i.jsx)(n.em,{children:"searchValue"})," ; ",(0,i.jsx)(n.em,{children:"searchCondition"})," {; ",(0,i.jsx)(n.em,{children:"replaceValue"}),"} )  : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"targetObj"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Range or element or 4D Write Pro document"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"searchValue"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Search value"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"searchCondition"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Search rule(s)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"replaceValue"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Replacement string"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Collection of range objects"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"WP Find all"})," command searches the ",(0,i.jsx)(n.em,{children:"targetObj"})," for the ",(0,i.jsx)(n.em,{children:"searchValue"})," based on the ",(0,i.jsx)(n.em,{children:"searchCondition"}),". An optional parameter can be used to replace any results found."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": ",(0,i.jsx)(n.strong,{children:"WP Find all"})," does not search or replace text in formulas. Use the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-get-formulas",children:"WP Get formulas"})," command in this case."]}),"\n",(0,i.jsxs)(n.p,{children:["In the ",(0,i.jsx)(n.em,{children:"targetObj"})," parameter, pass an object containing:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"a range, or"}),"\n",(0,i.jsx)(n.li,{children:"an element (table / row / cell(s) / paragraph / body / header / footer / section / subsection / text box), or"}),"\n",(0,i.jsx)(n.li,{children:"a 4D Write Pro document."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.em,{children:"searchValue"})," parameter lets you pass the text to search for within the ",(0,i.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["You can specify how the search is performed with the ",(0,i.jsx)(n.em,{children:"searchCondition"})," parameter. You can use one (or a combination) of the following constants:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk case insensitive"}),(0,i.jsx)(n.td,{children:'Strings are compared with no consideration of capitalization differences. Note that diacritical marks are taken into consideration. For example, "A" is considered the same as "a", however "a" is not considered the same as "\xe0".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk diacritic insensitive"}),(0,i.jsx)(n.td,{children:'Strings are compared but the diacritical mark (e.g., accent or symbol) of letters is ignored. For example, "a" is considered the same as "\xe0".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk find reverse"}),(0,i.jsx)(n.td,{children:"Search is performed in reverse order."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk kana insensitive"}),(0,i.jsx)(n.td,{children:'For Japanese language. Strings are compared according to the meaning (not the writing style). For example, "\u3042" is considered the same as "\u30A2". When this option is set, wk width insensitive  is implicit (considered set), however, the opposite is not true.'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk keep character style"}),(0,i.jsx)(n.td,{children:"When replacing text, the existing character style is retained (if possible)."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk override protected"}),(0,i.jsx)(n.td,{children:"Read/write protection is ignored and strings in protected areas can be replaced."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk use keyboard language"}),(0,i.jsxs)(n.td,{children:["For string comparison, use the keyboard language property from the form object being edited instead of the current data language (default). ",(0,i.jsx)(n.strong,{children:"Note"}),": Ignored if the document is offscreen."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk whole word"}),(0,i.jsx)(n.td,{children:'Only strings that are complete words are considered. Matching strings within other strings are not considered. For example, "where" is not considered when found within "somewhere".'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wk width insensitive"}),(0,i.jsx)(n.td,{children:'For Japanese language. Strings are compared by character width. For example, "\uFF71" is considered the same as "\u30A2".'})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": Strings are compared to the current data language unless wk use keyboard language is used."]}),"\n",(0,i.jsxs)(n.p,{children:["In the optional ",(0,i.jsx)(n.em,{children:"replaceValue"})," parameter, you can pass text to take the place of any instance of the text in ",(0,i.jsx)(n.em,{children:"searchValue"})," found in the ",(0,i.jsx)(n.em,{children:"targetObj"}),"."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"Returned Collection"})}),"\n",(0,i.jsx)(n.p,{children:"The function returns a collection of range objects describing each value that was found or replaced:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"search operations - the ranges match the found strings positions"}),"\n",(0,i.jsx)(n.li,{children:"replace operations - the ranges match the replaced strings positions"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"targetObj"})," is a range or element, found values are returned in the order they are found."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"targetObj"})," is a 4D Write Pro document, found values are returned in the following order:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"body"}),"\n",(0,i.jsx)(n.li,{children:"first page header for section 1 (if any)"}),"\n",(0,i.jsx)(n.li,{children:"first page footer for section 1 (if any)"}),"\n",(0,i.jsx)(n.li,{children:"left page header for section 1 (if any)"}),"\n",(0,i.jsx)(n.li,{children:"left page footer for section 1 (if any)"}),"\n",(0,i.jsx)(n.li,{children:"right page header for section (if any)"}),"\n",(0,i.jsx)(n.li,{children:"right page footer for section 1 (if any)"}),"\n",(0,i.jsx)(n.li,{children:"main header for section 1 (if any)"}),"\n",(0,i.jsx)(n.li,{children:"main footer for section 1 (if any)"}),"\n",(0,i.jsx)(n.li,{children:"repeat with section 2, section 3, and so on"}),"\n",(0,i.jsx)(n.li,{children:"text boxes."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"The order is reversed if wk find reverse is used."}),"\n",(0,i.jsx)(n.p,{children:"An empty collection is returned if no results are found."}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $userSel ;$target ;$alphaRanges : Object\n\xa0var $bravoRanges: &NBSP;Collection\n\xa0var $options : Integer\n\xa0\n\xa0\xa0// define search options\n\xa0$options:=wk case insensitive+wk diacritic insensitive\n\xa0\n\xa0\xa0// get current user position\n\xa0$userSel:=WP Selection range(*;"WParea")\n\xa0\n\xa0\xa0// define target\n\xa0$target:=WP Get body(WParea)\xa0// search only inside the body\n\xa0\n\xa0\xa0// launch REPLACEMENT of ALL occurences of "alpha" by "bravo" in the body\n\xa0$bravoRanges:=WP Find all($target;"alpha";$options;"bravo")\n'})}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-find-next",children:"WP Find next"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-find-previous",children:"WP Find previous"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var t=r(667294);let i={},s=t.createContext(i);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);