"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[87477],{719789:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>a,frontMatter:()=>c,metadata:()=>d,toc:()=>l});var t=r(474848),s=r(28453);const c={id:"spell-check-text",title:"SPELL CHECK TEXT",slug:"/commands/spell-check-text",displayed_sidebar:"docs"},o=void 0,d={id:"commands-legacy/spell-check-text",title:"SPELL CHECK TEXT",description:"SPELL CHECK TEXT ( text ; errPos ; errLength ; checkPos ; arrSuggest )",source:"@site/versioned_docs/version-20-R7/commands-legacy/spell-check-text.md",sourceDirName:"commands-legacy",slug:"/commands/spell-check-text",permalink:"/docs/commands/spell-check-text",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fspell-check-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"spell-check-text",title:"SPELL CHECK TEXT",slug:"/commands/spell-check-text",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"SPELL ADD TO USER DICTIONARY",permalink:"/docs/commands/spell-add-to-user-dictionary"},next:{title:"SPELL CHECKING",permalink:"/docs/commands/spell-checking"}},i={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function h(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SPELL CHECK TEXT"})," ( ",(0,t.jsx)(n.em,{children:"text"})," ; ",(0,t.jsx)(n.em,{children:"errPos"})," ; ",(0,t.jsx)(n.em,{children:"errLength"})," ; ",(0,t.jsx)(n.em,{children:"checkPos"})," ; ",(0,t.jsx)(n.em,{children:"arrSuggest"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Text to check"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errPos"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Position of first character of unknown word"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"errLength"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Length of unknown word"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"checkPos"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Start position for check"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrSuggest"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"List of suggestions"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"SPELL CHECK TEXT"})," command checks the contents of the ",(0,t.jsx)(n.em,{children:"text"})," parameter beginning from the ",(0,t.jsx)(n.em,{children:"checkPos"})," character and returns the position of the first unknown word it finds (if any)."]}),"\n",(0,t.jsxs)(n.p,{children:["This command returns the position of the first character of this unknown word in ",(0,t.jsx)(n.em,{children:"errPos"})," and its length in ",(0,t.jsx)(n.em,{children:"errLength"}),". The ",(0,t.jsx)(n.em,{children:"arrSuggest"})," array receives the correction suggestion(s) proposed by the spell checker."]}),"\n",(0,t.jsx)(n.p,{children:"If the check starts without error and an unknown word is found, the OK system variable is set to 0. If an initialization error occurs during the check, or if no unknown words are found, OK is set to 1."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note OS X:"})," Under OS X, when the native spell checker is enabled, this command does not support grammar correction."]}),"\n",(0,t.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,t.jsx)(n.p,{children:"We want to count the number of possible errors in a text:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0$pos:=1\n\xa0$errCount:=0\n\xa0ARRAY TEXT($tErrors;0)\n\xa0ARRAY TEXT($tSuggestions;0)\n\xa0Repeat\n\xa0\xa0\xa0\xa0SPELL CHECK TEXT($myText;$errPos;$errLength;$pos;$tSuggestions)\n\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$errCount:=$errCount+1\xa0// count any errors\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$errorWord:=Substring($myText;$errPos;$errLength)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($tErrors;$errorWord)\xa0// array of errors\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$pos:=$errPos+$errLength \xa0//continue check\n\xa0\xa0\xa0\xa0End if\n\xa0Until(OK=1)\n\xa0\xa0// In the end $errCount=Size of array($tErrors)\n"})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/spell-add-to-user-dictionary",children:"SPELL ADD TO USER DICTIONARY"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/spell-checking",children:"SPELL CHECKING"})]})]})}function a(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},28453:(e,n,r)=>{r.d(n,{R:()=>o,x:()=>d});var t=r(296540);const s={},c=t.createContext(s);function o(e){const n=t.useContext(c);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);