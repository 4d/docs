"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75717"],{307923:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>d,default:()=>l,assets:()=>o,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/match-regex","title":"Match regex","description":"Match regex ( pattern ; aString ; start {; posfound ; lengthfound}{; *} ) -> Function result","source":"@site/versioned_docs/version-20-R7/commands-legacy/match-regex.md","sourceDirName":"commands-legacy","slug":"/commands/match-regex","permalink":"/docs/commands/match-regex","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmatch-regex.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"match-regex","title":"Match regex","slug":"/commands/match-regex","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Lowercase","permalink":"/docs/commands/lowercase"},"next":{"title":"Num","permalink":"/docs/commands/num"}}'),s=r("785893"),i=r("250065");let a={id:"match-regex",title:"Match regex",slug:"/commands/match-regex",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"Error management",id:"error-management",level:4}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Match regex"})," ( ",(0,s.jsx)(n.em,{children:"pattern"})," ; ",(0,s.jsx)(n.em,{children:"aString"})," ; ",(0,s.jsx)(n.em,{children:"start"})," {; pos_found ; length_found}{; *} ) -> Function result\xa0",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.strong,{children:"Match regex"})," ( ",(0,s.jsx)(n.em,{children:"pattern"})," ; ",(0,s.jsx)(n.em,{children:"aString"})," ) -> Function result"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Regular expression"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aString"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"String in which search will be done"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"start"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Position in aString where search will start"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pos_found"}),(0,s.jsx)(n.td,{children:"Array integer, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Position of occurrence"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"length_found"}),(0,s.jsx)(n.td,{children:"Array integer, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Length of occurrence"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If passed: only searches at position indicated"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = search has found an occurrence; Otherwise, False."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Match regex ( pattern ; aString ) -> Function result"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Parameter"}),(0,s.jsx)(n.td,{children:"Type"}),(0,s.jsx)(n.td,{children:"Description"}),(0,s.jsx)(n.td,{})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"pattern"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Regular expression (complete equality)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aString"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"String in which search will be done"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"True = search has found an occurrence; Otherwise, False."})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Match regex"})," command checks the conformity of a character string with respect to a set of synthesized rules by means of a meta-language called \u201Cregular expression\u201D or \u201Crational expression.\u201D The regex abbreviation is commonly used to indicate these types of notations."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the regular expression to search for in ",(0,s.jsx)(n.em,{children:"pattern"}),". This consists of a set of characters used for describing a character string, using special characters."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the string where you want to search for the regular expression in ",(0,s.jsx)(n.em,{children:"aString"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"start"}),", pass the position at which to start the search in ",(0,s.jsx)(n.em,{children:"aString"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If ",(0,s.jsx)(n.em,{children:"pos_found"})," and ",(0,s.jsx)(n.em,{children:"length_found"})," are variables, the command returns the position and length of the occurrence in these variables. If you pass arrays, the command returns the position and length of the occurrence in the element zero of the arrays and the positions and lengths of the groups captured by the regular expression in the following elements."]}),"\n",(0,s.jsxs)(n.p,{children:["The optional ",(0,s.jsx)(n.em,{children:"*"})," parameter indicates, when it is passed, that the search must be carried out at the position specified by ",(0,s.jsx)(n.em,{children:"start"})," without searching any further in the case of failure."]}),"\n",(0,s.jsxs)(n.p,{children:["The command returns ",(0,s.jsx)(n.strong,{children:"True"})," if the search has found an occurrence."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about regex, refer to the following address:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"http://en.wikipedia.org/wiki/Regular%5Fexpression",children:"http://en.wikipedia.org/wiki/Regular%5Fexpression"})]}),"\n",(0,s.jsxs)(n.p,{children:["For more information about the syntax of the regular expression passed in the ",(0,s.jsx)(n.em,{children:"pattern"})," parameter, refer to the following address:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:(0,s.jsx)(n.a,{href:"https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions",children:"https://unicode-org.github.io/icu/userguide/strings/regexp.html#regular-expressions"})})]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsxs)(n.p,{children:["Search for complete equality (simple syntax):",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"vfound:=Match regex(pattern;mytext)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0QUERY BY FORMULA([Employees];Match regex(".*smith.*";[Employees]name))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["Search in text by position:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"vfound:=Match regex( pattern;mytext; start; pos_found; length_found)"}),(0,s.jsx)(n.br,{}),"\nExample to display all the $1 tags:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0$start:=1\n\xa0Repeat\n\xa0\xa0\xa0\xa0vfound:=Match regex("<.*>";$1;$start;pos_found;length_found)\n\xa0\xa0\xa0\xa0If(vfound)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT(Substring($1;pos_found;length_found))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$start:=pos_found+length_found\n\xa0\xa0\xa0\xa0End if\n\xa0Until(Not(vfound))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsxs)(n.p,{children:["Search with support of \u201Ccapture groups\u201D via parentheses. ( ) are used to specify groups in the regexes:",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"vfound:=Match regex( pattern;mytext; start; pos_found_array; length_found_array)"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY LONGINT(pos_found_array;0)\n\xa0ARRAY LONGINT(length_found_array;0)\n\xa0vfound:=Match regex("(.*)stuff(.*)";$1;1;pos_found_array;length_found_array)\n\xa0If(vfound)\n\xa0\xa0\xa0\xa0$group1:=Substring($1;pos_found_array{1};length_found_array{1})\n\xa0\xa0\xa0\xa0$group2:=Substring($1;pos_found_array{2};length_found_array{2})\n\xa0End if\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsxs)(n.p,{children:["Search limiting the comparison of the pattern to the position indicated:",(0,s.jsx)(n.br,{}),"\nAdd a star to the end of one of the two previous syntaxes."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vfound:=Match regex("a.b";"---a-b---";1;$pos_found;$length_found)\n\xa0\xa0//returns True\n\xa0vfound:=Match regex("a.b";"---a-b---";1;$pos_found;$length_found;*)\n\xa0\xa0//returns False\n\xa0vfound:=Match regex("a.b";"---a-b---";4;$pos_found;$length_found;*)\n\xa0\xa0//returns True\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The positions and lengths returned are only meaningful in Unicode mode or if the text being worked with is of the 7-bit ASCII type."]}),"\n",(0,s.jsx)(n.h4,{id:"error-management",children:"Error management"}),"\n",(0,s.jsxs)(n.p,{children:["In the event of an error, the command generates an error that you can intercept via a method installed by the ",(0,s.jsx)(n.a,{href:"/docs/commands/on-err-call",children:"ON ERR CALL"})," command."]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);