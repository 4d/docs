"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68648"],{476898:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"WritePro/commands-legacy/wp-is-font-style-supported","title":"WP Is font style supported","description":"WP Is font style supported ( targetObj ; wpFontStyle ) : Boolean","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-is-font-style-supported.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-is-font-style-supported","permalink":"/docs/20-R7/WritePro/commands/wp-is-font-style-supported","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-is-font-style-supported.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-is-font-style-supported","title":"WP Is font style supported","slug":"/WritePro/commands/wp-is-font-style-supported","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP Insert table","permalink":"/docs/20-R7/WritePro/commands/wp-insert-table"},"next":{"title":"WP New","permalink":"/docs/20-R7/WritePro/commands/wp-new"}}'),r=n("785893"),d=n("250065");let o={id:"wp-is-font-style-supported",title:"WP Is font style supported",slug:"/WritePro/commands/wp-is-font-style-supported",displayed_sidebar:"docs"},l=void 0,i={},a=[{value:"Description",id:"description",level:4}];function c(e){let t={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"WP Is font style supported"})," ( ",(0,r.jsx)(t.em,{children:"targetObj"})," ; ",(0,r.jsx)(t.em,{children:"wpFontStyle"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"targetObj"}),(0,r.jsx)(t.td,{children:"Object"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Range or element"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wpFontStyle"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Font style constant"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Boolean"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"True if any part of targetObj supports wpFontStyle; False otherwise"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"WP Is font style supported"})," command returns True if the ",(0,r.jsx)(t.em,{children:"wpFontStyle"})," style is supported by any part of the text in ",(0,r.jsx)(t.em,{children:"rangeObj"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"targetObj"}),", you can pass:"]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"a range, or"}),"\n",(0,r.jsx)(t.li,{children:"an element (table / row / paragraph / inline picture / body / header / footer)"}),"\n"]}),"\n",(0,r.jsxs)(t.p,{children:["In ",(0,r.jsx)(t.em,{children:"wpFontStyle"}),', pass one of the following style constants from the "4D Write Pro" constant theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk font bold"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"fontBold"}),(0,r.jsxs)(t.td,{children:["Specifies thickness of text (depends on available font styles). Possible values:",(0,r.jsx)(t.br,{}),"wk true to set selected characters to bold font style; with the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," command, wk true is returned if at least one selected character supports a bold font style.wk false (default) to remove the bold font style from selected characters if any; with the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," command, wk false is returned if none of the selected characters supports a bold font style."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk font italic"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"fontItalic"}),(0,r.jsxs)(t.td,{children:["Specifies italic style of text (depends on available font styles). Possible values:",(0,r.jsx)(t.br,{}),"wk true to set selected characters to italic or oblique font style; with the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," command, wk true is returned if at least one selected character supports an italic or oblique font style.wk false (default) to remove the italic or oblique font style from selected characters if any; with the ",(0,r.jsx)(t.a,{href:"/docs/20-R7/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," command, wk false is returned if none of the selected characters supports an italic or oblique font style."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk text linethrough style"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"textLinethroughStyle"}),(0,r.jsxs)(t.td,{children:["Specifies style of text linethrough (if any). Possible values:",(0,r.jsx)(t.br,{}),"wk none (default): no linethrough effectwk solid: draw a solid line on the selected textwk dotted: draw a dotted line on the selected textwk dashed: draw a dashed line on the selected textwk double: draw a double line on the selected textwk semi transparent: dimmed line on the selected text. Can be combined with another line style.wk word: draw a line on words only (exclude blank spaces). Can be combined with another line style."]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"wk text underline style"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"textUnderlineStyle"}),(0,r.jsxs)(t.td,{children:["Specifies style of text underline (if any). Possible values:",(0,r.jsx)(t.br,{}),"wk none (default): no underlinewk solid: draw a solid underlinewk dotted: draw a dotted underlinewk dashed: draw a dashed underlinewk double: draw a double underlinewk semi transparent: dimmed underline. Can be combined with another line style.wk word: draw an underline for words only (exclude blank spaces). Can be combined with another line style."]})]})]})]}),"\n",(0,r.jsx)(t.p,{children:"Typically, this command is provided to allow developers to implement custom interface objects, such as a pop-up menu offering style options based on the selected text."})]})}function h(e={}){let{wrapper:t}={...(0,d.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return o}});var s=n(667294);let r={},d=s.createContext(r);function o(e){let t=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:t},e.children)}}}]);