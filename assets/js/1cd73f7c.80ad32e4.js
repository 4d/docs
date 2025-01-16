"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30634"],{24069:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/delete-string","title":"Delete string","description":"Delete string ( source ; where ; numChars ) : Text","source":"@site/versioned_docs/version-20-R8/commands-legacy/delete-string.md","sourceDirName":"commands-legacy","slug":"/commands/delete-string","permalink":"/docs/commands/delete-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-string.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-string","title":"Delete string","slug":"/commands/delete-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Convert to text","permalink":"/docs/commands/convert-to-text"},"next":{"title":"GET TEXT KEYWORDS","permalink":"/docs/commands/get-text-keywords"}}'),r=t("785893"),i=t("250065");let l={id:"delete-string",title:"Delete string",slug:"/commands/delete-string",displayed_sidebar:"docs"},d=void 0,c={},h=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Delete string"})," ( ",(0,r.jsx)(n.em,{children:"source"})," ; ",(0,r.jsx)(n.em,{children:"where"})," ; ",(0,r.jsx)(n.em,{children:"numChars"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"source"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"String from which to delete characters"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"where"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"First character to delete"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"numChars"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Number of characters to delete"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Function result"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Resulting string"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["Delete string deletes ",(0,r.jsx)(n.em,{children:"numChars"})," from ",(0,r.jsx)(n.em,{children:"source"}),", starting at ",(0,r.jsx)(n.em,{children:"where"}),", and returns the resulting string."]}),"\n",(0,r.jsxs)(n.p,{children:["Delete string returns the same string as ",(0,r.jsx)(n.em,{children:"source"})," when:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"source"})," is an empty string"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"where"})," is greater than the length of ",(0,r.jsx)(n.em,{children:"source"})]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"numChars"})," is zero (0)"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"where"})," is less than one, the characters are deleted from the beginning of the string."]}),"\n",(0,r.jsxs)(n.p,{children:["If ",(0,r.jsx)(n.em,{children:"where"})," plus ",(0,r.jsx)(n.em,{children:"numChars"})," is equal to or greater than the length of ",(0,r.jsx)(n.em,{children:"source"}),", the characters are deleted from ",(0,r.jsx)(n.em,{children:"where"})," to the end of ",(0,r.jsx)(n.em,{children:"source"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsxs)(n.p,{children:["The following example illustrates the use of Delete string. The results are assigned to the variable ",(0,r.jsx)(n.em,{children:"vtResult"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0vtResult:=Delete string("Lamborghini";6;6)\xa0// vtResult gets "Lambo"\n\xa0vtResult:=Delete string("Indentation";6;2)\xa0// vtResult gets "Indention"\n\xa0vtResult:=Delete string(vtOtherVar;3;32000)\xa0// vtResult gets the first two characters of vtOtherVar\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/commands/change-string",children:"Change string"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/insert-string",children:"Insert string"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/commands/replace-string",children:"Replace string"})]}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"232"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);