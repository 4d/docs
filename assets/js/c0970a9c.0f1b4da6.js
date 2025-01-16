"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86657"],{657483:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>a});var t=JSON.parse('{"id":"WritePro/commands-legacy/wp-selection-range","title":"WP Selection range","description":"WP Selection range ( { ;} wpArea* ) : Object","source":"@site/versioned_docs/version-20-R7/WritePro/commands-legacy/wp-selection-range.md","sourceDirName":"WritePro/commands-legacy","slug":"/WritePro/commands/wp-selection-range","permalink":"/docs/20-R7/WritePro/commands/wp-selection-range","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20WritePro%2Fcommands-legacy%2Fwp-selection-range.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wp-selection-range","title":"WP Selection range","slug":"/WritePro/commands/wp-selection-range","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WP SELECT","permalink":"/docs/20-R7/WritePro/commands/wp-select"},"next":{"title":"WP SET ATTRIBUTES","permalink":"/docs/20-R7/WritePro/commands/wp-set-attributes"}}'),i=r("785893"),s=r("250065");let o={id:"wp-selection-range",title:"WP Selection range",slug:"/WritePro/commands/wp-selection-range",displayed_sidebar:"docs"},a=void 0,c={},d=[{value:"Compatibility",id:"compatibility",level:4},{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Selection range"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"wpArea"})," ) : Object"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, wpArea is a form object name (string). If omitted, wpArea is an object field or variable."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"wpArea"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Form object name (if * is specified) or 4D Write Pro object variable or field (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Object"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Range or Picture object"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(n.h4,{id:"compatibility",children:"Compatibility"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"WP Selection range"})," was named ",(0,i.jsx)(n.strong,{children:"WP Get selection"})," in previous versions of 4D Write Pro. It has been renamed for clarity."]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"WP Selection range"})," command returns a new range object or a picture object based upon the currently selected content in the ",(0,i.jsx)(n.em,{children:"wpArea"})," 4D Write Pro area."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate that ",(0,i.jsx)(n.em,{children:"wpArea"})," is a form object name (string). If you do not pass this parameter, you indicate that ",(0,i.jsx)(n.em,{children:"wpArea"})," is a 4D Write Pro object variable or field. If no 4D Write Pro area is passed in the ",(0,i.jsx)(n.em,{children:"wpArea"})," parameter, an empty object is returned."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note"}),": This command can only be used if the ",(0,i.jsx)(n.em,{children:"wpArea"})," is associated with a form object (",(0,i.jsx)(n.em,{children:"i.e."})," it is displayed in the current form/page)."]}),"\n",(0,i.jsxs)(n.p,{children:["If an anchored image (picture at a fixed location) is selected in ",(0,i.jsx)(n.em,{children:"wpArea"}),", ",(0,i.jsx)(n.strong,{children:"WP Selection range"})," returns a picture reference object and not a range object (for more information, please refer to the ",(0,i.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-add-picture",children:"WP Add picture"})," command description). Otherwise, ",(0,i.jsx)(n.strong,{children:"WP Selection range"})," returns a new range object. For more information on range objects, please refer to ",(0,i.jsx)(n.em,{children:"Range handling commands"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"You want to get the selected text from a 4D Write Pro area:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0$range:=WP Selection range(*;"WParea")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-paragraph-range",children:"WP Paragraph range"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-picture-range",children:"WP Picture range"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/20-R7/WritePro/commands/wp-text-range",children:"WP Text range"})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return o}});var t=r(667294);let i={},s=t.createContext(i);function o(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);