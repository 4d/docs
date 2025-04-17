"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18754"],{336241:function(e,n,t){t.r(n),t.d(n,{default:()=>o,frontMatter:()=>l,metadata:()=>s,assets:()=>c,toc:()=>h,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/highlight-text","title":"HIGHLIGHT TEXT","description":"HIGHLIGHT TEXT ( { ;} object ; startSel ; endSel* )","source":"@site/versioned_docs/version-20-R9/commands-legacy/highlight-text.md","sourceDirName":"commands-legacy","slug":"/commands/highlight-text","permalink":"/docs/commands/highlight-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fhighlight-text.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"highlight-text","title":"HIGHLIGHT TEXT","slug":"/commands/highlight-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GOTO OBJECT","permalink":"/docs/commands/goto-object"},"next":{"title":"Is editing text","permalink":"/docs/commands/is-editing-text"}}'),i=t("785893"),r=t("250065");let l={id:"highlight-text",title:"HIGHLIGHT TEXT",slug:"/commands/highlight-text",displayed_sidebar:"docs"},d=void 0,c={},h=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"Example 4",id:"example-4",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"HIGHLIGHT TEXT"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"startSel"})," ; ",(0,i.jsx)(n.em,{children:"endSel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["If specified, object is an object name (string) ",(0,i.jsx)(n.br,{}),"If omitted, object is a field or variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"Field, Variable, any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object name (if * is specified) or Enterable field or variable (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"startSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"New text selection starting position"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"endSel"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"New text selection ending position"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The HIGHLIGHT TEXT command highlights a section of the text in ",(0,i.jsx)(n.em,{children:"object"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass the ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass the field or variable reference (form fields or variables only) instead of a string."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"object"})," is not the object currently being edited, it gets the focus."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," This command cannot be used with fields in a subform."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"startSel"})," is the first character position to be highlighted, and ",(0,i.jsx)(n.em,{children:"lastSel"})," is the last character plus one to be highlighted. If ",(0,i.jsx)(n.em,{children:"startSel"})," and ",(0,i.jsx)(n.em,{children:"lastSel"})," are equal, the insertion point is positioned before the character specified by ",(0,i.jsx)(n.em,{children:"startSel"}),", and no characters are highlighted."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"lastSel"})," is greater than the number of characters in ",(0,i.jsx)(n.em,{children:"object"}),", then all characters between ",(0,i.jsx)(n.em,{children:"startSel"})," and the end of the text are highlighted."]}),"\n",(0,i.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(n.p,{children:["The following example selects all the characters of the enterable field ",(0,i.jsx)(n.em,{children:"[Products]Comments"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0HIGHLIGHT TEXT([Products]Comments;1;Length([Products]Comments)+1)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(n.p,{children:["The following example moves the insertion point to the beginning of the enterable field ",(0,i.jsx)(n.em,{children:"[Products]Comments"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0HIGHLIGHT TEXT([Products]Comments;1;1)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsxs)(n.p,{children:["The following example moves the insertion point to the end of the enterable field ",(0,i.jsx)(n.em,{children:"[Products]Comments"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:"\xa0$vLen:=Length([Products]Comments)+1\n\xa0HIGHLIGHT TEXT([Products]Comments;$vLen;$vLen)\n"})}),"\n",(0,i.jsx)(n.h2,{id:"example-4",children:"Example 4"}),"\n",(0,i.jsxs)(n.p,{children:["See example for the ",(0,i.jsx)(n.a,{href:"/docs/commands/filter-keystroke",children:"FILTER KEYSTROKE"})," command."]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/get-highlight",children:"GET HIGHLIGHT"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"210"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);