"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88677"],{732451:function(e,t,n){n.r(t),n.d(t,{metadata:()=>s,contentTitle:()=>l,default:()=>o,assets:()=>c,toc:()=>h,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/get-highlight","title":"GET HIGHLIGHT","description":"GET HIGHLIGHT ( { ;} object ; startSel ; endSel* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/get-highlight.md","sourceDirName":"commands-legacy","slug":"/commands/get-highlight","permalink":"/docs/commands/get-highlight","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-highlight.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-highlight","title":"GET HIGHLIGHT","slug":"/commands/get-highlight","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get edited text","permalink":"/docs/commands/get-edited-text"},"next":{"title":"GOTO OBJECT","permalink":"/docs/commands/goto-object"}}'),i=n("785893"),r=n("250065");let d={id:"get-highlight",title:"GET HIGHLIGHT",slug:"/commands/get-highlight",displayed_sidebar:"docs"},l=void 0,c={},h=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"GET HIGHLIGHT"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ; ",(0,i.jsx)(t.em,{children:"startSel"})," ; ",(0,i.jsx)(t.em,{children:"endSel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, object is an object name (string) ",(0,i.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"Field, Variable, any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,i.jsx)(t.br,{}),"Field or variable (if * is omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"startSel"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Current text selection starting position"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"endSel"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Current text selection ending position"})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The GET HIGHLIGHT command is used to determine what text is currently highlighted in ",(0,i.jsx)(t.em,{children:"object"}),"."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass the ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass the field or variable reference (form fields or variables only) instead of a string."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," This command cannot be used with fields in the List form of a subform."]}),"\n",(0,i.jsxs)(t.p,{children:["Text can be highlighted by the user or by the ",(0,i.jsx)(t.a,{href:"/docs/commands/highlight-text",children:"HIGHLIGHT TEXT"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["The parameter ",(0,i.jsx)(t.em,{children:"startSel"})," returns the position of the first highlighted character."]}),"\n",(0,i.jsxs)(t.p,{children:["The parameter ",(0,i.jsx)(t.em,{children:"endSel"})," returns the position of the last highlighted character plus one."]}),"\n",(0,i.jsxs)(t.p,{children:["If ",(0,i.jsx)(t.em,{children:"startSel"})," and ",(0,i.jsx)(t.em,{children:"endSel"})," are returned equal, the insertion point is positioned before the character specified by ",(0,i.jsx)(t.em,{children:"startSel"}),". The user has not selected any text, and no characters are highlighted."]}),"\n",(0,i.jsxs)(t.p,{children:["If the object designated by the ",(0,i.jsx)(t.em,{children:"object"})," parameter is not found in the form, the command returns -1 in ",(0,i.jsx)(t.em,{children:"startSel"})," and -2 in ",(0,i.jsx)(t.em,{children:"endSel"}),"."]}),"\n",(0,i.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,i.jsxs)(t.p,{children:["The following example gets the highlighted selection from the field called ",(0,i.jsx)(t.em,{children:"[Products]Comments"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0GET HIGHLIGHT([Products]Comments;vFirst;vLast)\n\xa0If(vFirst<vlast) \xa0\xa0\xa0\xa0alert("the="" selected="" text="" is:="" "+substring([products]comments;vfirst;vlast-vfirst))="" \xa0end="" if<="" pre=""></vlast)>\n'})}),"\n",(0,i.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,i.jsxs)(t.p,{children:["See example for the ",(0,i.jsx)(t.a,{href:"/docs/commands/filter-keystroke",children:"FILTER KEYSTROKE"})," command."]}),"\n",(0,i.jsx)(t.h4,{id:"example-3",children:"Example 3"}),"\n",(0,i.jsx)(t.p,{children:"Modification of highlighted text style:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-4d",children:'\xa0GET HIGHLIGHT(*;"myText";$startsel,$endsel)\n\xa0ST SET ATTRIBUTES(*;"myText";$startsel,$endsel;Attribute underline style;1;Attribute bold style;1)\n'})}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/highlight-text",children:"HIGHLIGHT TEXT"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/keystroke",children:"Keystroke"})]})]})}function o(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return l},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);