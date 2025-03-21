"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65594"],{180598:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>i,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/character-code","title":"Character code","description":"Character code ( character ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/character-code.md","sourceDirName":"commands-legacy","slug":"/commands/character-code","permalink":"/docs/commands/character-code","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcharacter-code.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"character-code","title":"Character code","slug":"/commands/character-code","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Char","permalink":"/docs/commands/char"},"next":{"title":"Compare strings","permalink":"/docs/commands/compare-strings"}}'),s=r("785893"),c=r("250065");let a={id:"character-code",title:"Character code",slug:"/commands/character-code",displayed_sidebar:"docs"},d=void 0,o={},i=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Example 3",id:"example-3",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Character code"})," ( ",(0,s.jsx)(n.em,{children:"character"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"character"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Character for which you want to get the code"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Character code"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Character code"})," command returns the Unicode UTF-16 code (included between 1 and 65535) of ",(0,s.jsx)(n.em,{children:"character"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["If there is more than one character in the string, ",(0,s.jsx)(n.strong,{children:"Character code"})," returns only the code of the first character."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.a,{href:"/docs/commands/char",children:"Char"})," function is the counterpart of ",(0,s.jsx)(n.strong,{children:"Character code"}),". It returns the character that the UTF-16 code represents."]}),"\n",(0,s.jsx)(n.h2,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"Uppercase and lowercase characters are considered equal within a comparison. You can use Character code to differentiate between uppercase and lowercase characters. Thus, this line returns True:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0("A"="a")\n'})}),"\n",(0,s.jsx)(n.p,{children:"On the other hand, this line returns False:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0(Character code("A")=Character code("a"))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["This example returns the code of the first character of the string ",(0,s.jsx)(n.em,{children:'"ABC"'}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0GetCode:=Character code("ABC")\xa0// GetCode gets 65, the character code of A\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"The following example tests for carriage returns and tabs:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0For($vlChar;1;Length(vtText))\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(vtText[[$vlChar]]=Char(Carriage return))\n\xa0\xa0// Do something\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(vtText[[$vlChar]]=Char(Tab))\n\xa0\xa0// Do something else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0End case\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.p,{children:"When executed multiple times on large texts, this test will run faster when compiled if it is written this way:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0For($vlChar;1;Length(vtText))\n\xa0\xa0\xa0\xa0$vlCode:=Character code(vtText[[$vlChar]])\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCode=Carriage return)\n\xa0\xa0// Do something\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlCode=Tab)\n\xa0\xa0// Do something else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0End case\n\xa0End for\n"})}),"\n",(0,s.jsx)(n.p,{children:"The second piece of code runs faster for two reasons: it does only one character reference by iteration and uses LongInt comparisons instead of string comparisons to test for carriage returns and tabs. Use this technique when working with common codes such as CR and TAB."}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/char",children:"Char"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Character Reference Symbols"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"91"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var t=r(667294);let s={},c=t.createContext(s);function a(e){let n=t.useContext(c);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(c.Provider,{value:n},e.children)}}}]);