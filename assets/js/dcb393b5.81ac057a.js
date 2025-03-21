"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87030"],{41481:function(e,r,n){n.r(r),n.d(r,{default:()=>p,frontMatter:()=>i,metadata:()=>a,assets:()=>d,toc:()=>c,contentTitle:()=>o});var a=JSON.parse('{"id":"WritePro/commands-legacy/wp-paragraph-range","title":"WP Paragraph range","description":"WP Paragraph range ( targetObj ) : Object","source":"@site/versioned_docs/version-20-R8/WritePro/commands-legacy/wp-paragraph-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-paragraph-range","permalink":"/docs/WritePro/commands/wp-paragraph-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-paragraph-range.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"wp-paragraph-range","title":"WP Paragraph range","slug":"/WritePro/commands/wp-paragraph-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP New text box","permalink":"/docs/WritePro/commands/wp-new-text-box"},"next":{"title":"WP Picture range","permalink":"/docs/WritePro/commands/wp-picture-range"}}'),t=n("785893"),s=n("250065");let i={id:"wp-paragraph-range",title:"WP Paragraph range",slug:"/WritePro/commands/wp-paragraph-range",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Compatibility",id:"compatibility",level:2},{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2}];function l(e){let r={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WP Paragraph range"})," ( ",(0,t.jsx)(r.em,{children:"targetObj"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Parameter"}),(0,t.jsx)(r.th,{children:"Type"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Description"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"targetObj"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Range or element"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Function result"}),(0,t.jsx)(r.td,{children:"Object"}),(0,t.jsx)(r.td,{children:"\u2190"}),(0,t.jsx)(r.td,{children:"Range addressing only paragraphs"})]})]})]}),"\n",(0,t.jsx)(r.h2,{id:"compatibility",children:"Compatibility"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"WP Paragraph range"})," was named ",(0,t.jsx)(r.strong,{children:"WP Create Paragraph range"})," in previous versions of 4D Write Pro. It has been renamed for clarity."]}),"\n",(0,t.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(r.p,{children:["The ",(0,t.jsx)(r.strong,{children:"WP Paragraph range"})," command returns a specific range object that addresses only the paragraphs that intersect with the ",(0,t.jsx)(r.em,{children:"targetObj"})," you passed as parameter. The paragraph range object returned can be used by ",(0,t.jsx)(r.a,{href:"/docs/WritePro/commands/wp-get-attributes",children:"WP GET ATTRIBUTES"})," and ",(0,t.jsx)(r.a,{href:"/docs/WritePro/commands/wp-set-attributes",children:"WP SET ATTRIBUTES"})," to handle paragraph attributes only."]}),"\n",(0,t.jsxs)(r.p,{children:["In ",(0,t.jsx)(r.em,{children:"targetObj"}),", you can pass:"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsx)(r.li,{children:"a range, or"}),"\n",(0,t.jsx)(r.li,{children:"an element (table / row / paragraph / header / footer / body / section / subsection)"}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(r.p,{children:"You want to define padding for the paragraphs only:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:"\xa0$oParagraphs:=WP Paragraph range($oSelection)\n\xa0WP SET ATTRIBUTES($oParagraphs;wk padding;20)\n"})}),"\n",(0,t.jsx)(r.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/WritePro/commands/wp-picture-range",children:"WP Picture range"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/WritePro/commands/wp-selection-range",children:"WP Selection range"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function p(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return i}});var a=n(667294);let t={},s=a.createContext(t);function i(e){let r=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),a.createElement(s.Provider,{value:r},e.children)}}}]);