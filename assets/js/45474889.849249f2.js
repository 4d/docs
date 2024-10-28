"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94704],{842615:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>d,default:()=>a,frontMatter:()=>r,metadata:()=>l,toc:()=>h});var s=n(474848),i=n(28453);const r={id:"get-highlight",title:"GET HIGHLIGHT",slug:"/commands/get-highlight",displayed_sidebar:"docs"},d=void 0,l={id:"commands-legacy/get-highlight",title:"GET HIGHLIGHT",description:"GET HIGHLIGHT ( { ;} object ; startSel ; endSel* )",source:"@site/versioned_docs/version-20-R7/commands-legacy/get-highlight.md",sourceDirName:"commands-legacy",slug:"/commands/get-highlight",permalink:"/docs/commands/get-highlight",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-highlight.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-highlight",title:"GET HIGHLIGHT",slug:"/commands/get-highlight",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Get edited text",permalink:"/docs/commands/get-edited-text"},next:{title:"GOTO OBJECT",permalink:"/docs/commands/goto-object"}},c={},h=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4}];function o(e){const t={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"GET HIGHLIGHT"})," ( {* ;} ",(0,s.jsx)(t.em,{children:"object"})," ; ",(0,s.jsx)(t.em,{children:"startSel"})," ; ",(0,s.jsx)(t.em,{children:"endSel"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Parameter"}),(0,s.jsx)(t.th,{children:"Type"}),(0,s.jsx)(t.th,{}),(0,s.jsx)(t.th,{children:"Description"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"*"}),(0,s.jsx)(t.td,{children:"Operator"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["If specified, object is an object name (string) ",(0,s.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"object"}),(0,s.jsx)(t.td,{children:"Field, Variable, any"}),(0,s.jsx)(t.td,{children:"\u2192"}),(0,s.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,s.jsx)(t.br,{}),"Field or variable (if * is omitted)"]})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"startSel"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Current text selection starting position"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"endSel"}),(0,s.jsx)(t.td,{children:"Integer"}),(0,s.jsx)(t.td,{children:"\u2190"}),(0,s.jsx)(t.td,{children:"Current text selection ending position"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(t.p,{children:["The GET HIGHLIGHT command is used to determine what text is currently highlighted in ",(0,s.jsx)(t.em,{children:"object"}),"."]}),"\n",(0,s.jsxs)(t.p,{children:["If you pass the optional ",(0,s.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass the ",(0,s.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass the field or variable reference (form fields or variables only) instead of a string."]}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.strong,{children:"Note:"})," This command cannot be used with fields in the List form of a subform."]}),"\n",(0,s.jsxs)(t.p,{children:["Text can be highlighted by the user or by the ",(0,s.jsx)(t.a,{href:"/docs/commands/highlight-text",children:"HIGHLIGHT TEXT"})," command."]}),"\n",(0,s.jsxs)(t.p,{children:["The parameter ",(0,s.jsx)(t.em,{children:"startSel"})," returns the position of the first highlighted character."]}),"\n",(0,s.jsxs)(t.p,{children:["The parameter ",(0,s.jsx)(t.em,{children:"endSel"})," returns the position of the last highlighted character plus one."]}),"\n",(0,s.jsxs)(t.p,{children:["If ",(0,s.jsx)(t.em,{children:"startSel"})," and ",(0,s.jsx)(t.em,{children:"endSel"})," are returned equal, the insertion point is positioned before the character specified by ",(0,s.jsx)(t.em,{children:"startSel"}),". The user has not selected any text, and no characters are highlighted."]}),"\n",(0,s.jsxs)(t.p,{children:["If the object designated by the ",(0,s.jsx)(t.em,{children:"object"})," parameter is not found in the form, the command returns -1 in ",(0,s.jsx)(t.em,{children:"startSel"})," and -2 in ",(0,s.jsx)(t.em,{children:"endSel"}),"."]}),"\n",(0,s.jsx)(t.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(t.p,{children:["The following example gets the highlighted selection from the field called ",(0,s.jsx)(t.em,{children:"[Products]Comments"}),":"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0GET HIGHLIGHT([Products]Comments;vFirst;vLast)\n\xa0If(vFirst<vlast) \xa0\xa0\xa0\xa0alert("the="" selected="" text="" is:="" "+substring([products]comments;vfirst;vlast-vfirst))="" \xa0end="" if<="" pre=""></vlast)>\n'})}),"\n",(0,s.jsx)(t.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(t.p,{children:["See example for the ",(0,s.jsx)(t.a,{href:"/docs/commands/filter-keystroke",children:"FILTER KEYSTROKE"})," command."]}),"\n",(0,s.jsx)(t.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(t.p,{children:"Modification of highlighted text style:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-4d",children:'\xa0GET HIGHLIGHT(*;"myText";$startsel,$endsel)\n\xa0ST SET ATTRIBUTES(*;"myText";$startsel,$endsel;Attribute underline style;1;Attribute bold style;1)\n'})}),"\n",(0,s.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"/docs/commands/filter-keystroke",children:"FILTER KEYSTROKE"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/highlight-text",children:"HIGHLIGHT TEXT"}),(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.a,{href:"/docs/commands/keystroke",children:"Keystroke"})]})]})}function a(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},28453:(e,t,n)=>{n.d(t,{R:()=>d,x:()=>l});var s=n(296540);const i={},r=s.createContext(i);function d(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);