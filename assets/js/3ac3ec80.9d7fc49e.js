"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["661"],{382489:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>d,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/num","title":"Num","description":"Num ( expression {; separator} ) : Real","source":"@site/versioned_docs/version-20-R8/commands-legacy/num.md","sourceDirName":"commands-legacy","slug":"/commands/num","permalink":"/docs/commands/num","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fnum.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"num","title":"Num","slug":"/commands/num","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Match regex","permalink":"/docs/commands/match-regex"},"next":{"title":"Position","permalink":"/docs/commands/position"}}'),t=s("785893"),i=s("250065");let a={id:"num",title:"Num",slug:"/commands/num",displayed_sidebar:"docs"},o=void 0,l={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Num"})," ( ",(0,t.jsx)(n.em,{children:"expression"})," {; ",(0,t.jsx)(n.em,{children:"separator"}),"} ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"expression"}),(0,t.jsx)(n.td,{children:"Text, Boolean, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"String for which to return the numeric form, or Boolean to return 0 or 1, or Numeric expression"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"separator"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Decimal separator"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Function result"}),(0,t.jsx)(n.td,{children:"Real"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Numeric form of the expression parameter"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The Num command returns the numeric form of the String, Boolean or numeric expression you pass in ",(0,t.jsx)(n.em,{children:"expression"}),". The optional ",(0,t.jsx)(n.em,{children:"separator"})," parameter designates a decimal separator for evaluating string type expressions."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"String Expressions"}),(0,t.jsx)(n.br,{}),"\nIf ",(0,t.jsx)(n.em,{children:"expression"})," consists only of one or more alphabetic characters, Num returns a zero. If ",(0,t.jsx)(n.em,{children:"expression"}),' includes alphabetic and numeric characters, the command ignores the alphabetic characters. Thus, it transforms the string "a1b2c3" into the number 123.']}),"\n",(0,t.jsxs)(n.p,{children:["There are three reserved characters that Num treats specially: the decimal separator as defined in the system (if the ",(0,t.jsx)(n.em,{children:"separator"})," parameter is not passed), the hyphen \u201C",(0,t.jsx)(n.em,{children:"-"}),"\u201D, and \u201C",(0,t.jsx)(n.em,{children:"e"}),"\u201D ",(0,t.jsx)(n.em,{children:"or"})," \u201CE\u201D. These characters are interpreted as numeric format characters."]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["The decimal separator is interpreted as a decimal place and must appear embedded in a numeric string. By default, the command uses the decimal separator set by the operating system. You can modify this character using the ",(0,t.jsx)(n.em,{children:"separator"})," parameter (see below)."]}),"\n",(0,t.jsxs)(n.li,{children:["The hyphen causes the number or exponent to be negative. The hyphen must appear before any negative numeric characters or after the \u201Ce\u201D for an exponent. Except for the \u201Ce\u201D character, if a hyphen is embedded in a numeric string, the portion of the string after the hyphen is ignored. For example, ",(0,t.jsx)(n.strong,{children:"Num"}),'("123-456") returns 123, but ',(0,t.jsx)(n.strong,{children:"Num"}),'("-9") returns -9.']}),"\n",(0,t.jsxs)(n.li,{children:["The e or E causes any numeric characters to its right to be interpreted as the power of an exponent. The \u201Ce\u201D must be embedded in a numeric string. Thus, ",(0,t.jsx)(n.strong,{children:"Num"}),'("123e\u20132") returns 1.23.',(0,t.jsx)(n.br,{}),'\nNote that when the string includes more than one "e", conversion might give different results under Mac OS and under Windows.']}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"separator"})," parameter designates a custom decimal separator for evaluating the ",(0,t.jsx)(n.em,{children:"expression"}),". When the string to be evaluated is expressed with a decimal separator different from the system operator, the command returns an incorrect result. The ",(0,t.jsx)(n.em,{children:"separator"})," parameter can be used in this case to obtain a correct evaluation. When this parameter is passed, the command does not take the system decimal separator into account. You can pass one or more characters."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Note:"})," The ",(0,t.jsx)(n.a,{href:"/docs/commands/get-system-format",children:"GET SYSTEM FORMAT"})," command can be used to find out the current decimal separator as well as several other regional system parameters."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Boolean Expressions"}),(0,t.jsx)(n.br,{}),"\nIf you pass a Boolean expression, Num returns 1 if the expression is True; otherwise, it returns ",(0,t.jsx)(n.em,{children:"0"})," (zero)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Numeric Expressions"}),(0,t.jsx)(n.br,{}),"\nIf you pass a numeric expression in the ",(0,t.jsx)(n.em,{children:"expression"})," parameter, Num returns the value passed in the ",(0,t.jsx)(n.em,{children:"expression"})," parameter as is. This can be useful more particularly in the case of generic programming using pointers."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Undefined Expressions"}),(0,t.jsx)(n.br,{}),"\nIf ",(0,t.jsx)(n.em,{children:"expression"})," evaluates to undefined, the command returns 0 (zero). This is useful when you expect the result of an expression (e.g. an object attribute) to be a number, even if it can be undefined."]}),"\n",(0,t.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsxs)(n.p,{children:["The following example illustrates how Num works when passed a string argument. Each line assigns a number to the ",(0,t.jsx)(n.em,{children:"vResult"})," variable. The comments describe the results:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0vResult:=Num("ABCD")\xa0// vResult gets 0\n\xa0vResult:=Num("A1B2C3")\xa0// vResult gets 123\n\xa0vResult:=Num("123")\xa0// vResult gets 123\n\xa0vResult:=Num("123.4")\xa0// vResult gets 123.4\n\xa0vResult:=Num("\u2013123")\xa0// vResult gets \u2013123\n\xa0vResult:=Num("\u2013123e2")\xa0// vResult gets \u201312300\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsxs)(n.p,{children:["Here, ",(0,t.jsx)(n.em,{children:"[Client]Debt"})," is compared with ",(0,t.jsx)(n.em,{children:"$1000"}),". The Num command applied to these comparisons returns 1 or 0. Multiplying 1 or 0 with a string repeats the string once or returns the empty string. As a result, ",(0,t.jsx)(n.em,{children:"[Client]Risk"})," gets either \u201CGood\u201D or \u201CBad\u201D:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// If client owes less than 1000, a good risk.\n\xa0\xa0// If client owes more than 1000, a bad risk.\n\xa0[Client]Risk:=("Good"*Num([Client]Debt<1000))+("Bad"*Num([Client]Debt>=1000))\n'})}),"\n",(0,t.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,t.jsx)(n.p,{children:"This example compares the results obtained depending on the \u201Ccurrent\u201D separator:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0$thestring:="33,333.33"\n\xa0$thenum:=Num($thestring)\n\xa0\xa0// by default, $thenum equals 33,33333 on a French system\n\xa0$thenum:=Num($thestring;".")\n\xa0\xa0// $thenum will be correctly evaluated regardless of the system;\n\xa0\xa0// for example, 33 333,33 on a French system\n'})}),"\n",(0,t.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/bool",children:"Bool"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/get-system-format",children:"GET SYSTEM FORMAT"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/string",children:"String"})]}),"\n",(0,t.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"11"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return a}});var r=s(667294);let t={},i=r.createContext(t);function a(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);