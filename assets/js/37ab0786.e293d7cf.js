"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4546"],{391521:function(e,t,n){n.r(t),n.d(t,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/count-parameters","title":"Count parameters","description":"Count parameters  : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/count-parameters.md","sourceDirName":"commands-legacy","slug":"/commands/count-parameters","permalink":"/docs/commands/count-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcount-parameters.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"count-parameters","title":"Count parameters","slug":"/commands/count-parameters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Copy parameters","permalink":"/docs/commands/copy-parameters"},"next":{"title":"cs","permalink":"/docs/commands/cs"}}'),a=n("785893"),s=n("250065");let o={id:"count-parameters",title:"Count parameters",slug:"/commands/count-parameters",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Description",id:"description",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.strong,{children:"Count parameters"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{children:"Parameter"}),(0,a.jsx)(t.th,{children:"Type"}),(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{children:"Description"})]})}),(0,a.jsx)(t.tbody,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Function result"}),(0,a.jsx)(t.td,{children:"Integer"}),(0,a.jsx)(t.td,{children:"\u2190"}),(0,a.jsx)(t.td,{children:"Number of parameters actually passed"})]})})]}),"\n",(0,a.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(t.p,{children:"The Count parameters command returns the number of parameters passed to a project method.Count parameters is meaningful only in a project method that has been called by another method (project method or other). If the project method calling this command is associated with a menu, it returns 0."}),"\n",(0,a.jsx)(t.h2,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsxs)(t.p,{children:["4D project methods accept optional parameters, starting from the right.",(0,a.jsx)(t.br,{}),"\nFor example, you can call the method MyMethod(a;b;c;d) in the following ways:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:"\xa0MyMethod(a;b;c;d)\xa0// All parameters are passed\n\xa0MyMethod(a;b;c)\xa0// The last parameter is not passed\n\xa0MyMethod(a;b)\xa0// The last two parameters are not passed\n\xa0MyMethod(a)\xa0// Only the first parameter is passed\n\xa0MyMethod\xa0// No Parameter is passed at all\n"})}),"\n",(0,a.jsx)(t.p,{children:"Using Count parameters from within MyMethod, you can detect the actual number of parameters and perform different operations depending on what you have received. The following example displays a text message and can insert the text into a 4D Write area or send the text into a document on disk:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0// APPEND TEXT Project Method\n\xa0\xa0// APPEND TEXT ( Text { ; Long { ; Time } } )\n\xa0\xa0// APPEND TEXT ( Text { ; 4D Write Area { ; DocRef } } )\n\xa0\n\xa0#DECLARE ($text : Text ; $4dwp : Object ; $doc : Time)\n\xa0\n\xa0MESSAGE($text)\n\xa0If(Count parameters>=3)\n\xa0\xa0\xa0\xa0SEND PACKET($doc;$text)\n\xa0Else\n\xa0\xa0\xa0\xa0If(Count parameters>=2)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0WP SET TEXT($4dwp;$text;wk prepend)\n\xa0\xa0\xa0\xa0End if\n\xa0End if\n"})}),"\n",(0,a.jsx)(t.p,{children:"After this project method has been added to your application, you can write:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:"\xa0APPEND TEXT(vtSomeText)\xa0// Will only display the text message\n\xa0APPEND TEXT(vtSomeText;$wrArea)\xa0// Displays text message and appends it to $wrArea\n\xa0APPEND TEXT(vtSomeText;0;$vhDocRef)\xa0// Displays text message and writes it to $vhDocRef\n"})}),"\n",(0,a.jsx)(t.h2,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsxs)(t.p,{children:["4D project methods accept a variable number of parameters of the same type, starting from the right. To declare these parameters, you use a compiler directive to which you pass ",(0,a.jsx)(t.em,{children:"${N}"})," as a variable, where N specifies the first parameter. Using Count parameters you can address those parameters with a For loop and the parameter indirection syntax. This example is a function that returns the greatest number received as parameter:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:"\xa0\xa0// Max of Project Method\n\xa0\xa0// Max of ( Real { ; Real2... ; RealN } ) -> Real\n\xa0\xa0// Max of ( Value { ; Value2... ; ValueN } ) -> Greatest value\n\xa0\n\xa0var $0;${1} : Real\xa0// All parameters will be of type REAL as well as the function result\n\xa0$0:=${1}\n\xa0For($vlParam;2;Count parameters)\n\xa0\xa0\xa0\xa0If(${$vlParam}>$0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$0:=${$vlParam}\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,a.jsx)(t.p,{children:"After this project method has been added to your application, you can write:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:'\xa0vrResult:=Max of(Records in set("Operation A");Records in set("Operation B"))\n'})}),"\n",(0,a.jsx)(t.p,{children:"or:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-4d",children:"\xa0vrResult:=Max of(r1;r2;r3;r4;r5;r6)\n"})}),"\n",(0,a.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.em,{children:"Compiler Commands"}),(0,a.jsx)(t.br,{}),"\n",(0,a.jsx)(t.a,{href:"/docs/commands/copy-parameters",children:"Copy parameters"})]}),"\n",(0,a.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(t.table,{children:[(0,a.jsx)(t.thead,{children:(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.th,{}),(0,a.jsx)(t.th,{})]})}),(0,a.jsxs)(t.tbody,{children:[(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Command number"}),(0,a.jsx)(t.td,{children:"259"})]}),(0,a.jsxs)(t.tr,{children:[(0,a.jsx)(t.td,{children:"Thread safe"}),(0,a.jsx)(t.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var r=n(667294);let a={},s=r.createContext(a);function o(e){let t=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);