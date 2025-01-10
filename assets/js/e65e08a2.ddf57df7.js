"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65481"],{72478:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/wa-evaluate-javascript","title":"WA Evaluate JavaScript","description":"WA Evaluate JavaScript ( { ;} object ; jsCode {; type*} )  : any","source":"@site/versioned_docs/version-20-R7/commands-legacy/wa-evaluate-javascript.md","sourceDirName":"commands-legacy","slug":"/commands/wa-evaluate-javascript","permalink":"/docs/commands/wa-evaluate-javascript","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-evaluate-javascript.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-evaluate-javascript","title":"WA Evaluate JavaScript","slug":"/commands/wa-evaluate-javascript","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Create URL history menu","permalink":"/docs/commands/wa-create-url-history-menu"},"next":{"title":"WA EXECUTE JAVASCRIPT FUNCTION","permalink":"/docs/commands/wa-execute-javascript-function"}}'),a=t("785893"),r=t("250065");let i={id:"wa-evaluate-javascript",title:"WA Evaluate JavaScript",slug:"/commands/wa-evaluate-javascript",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WA Evaluate JavaScript"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"object"})," ; ",(0,a.jsx)(n.em,{children:"jsCode"})," {; ",(0,a.jsx)(n.em,{children:"type"}),"} )  : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operator"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"object"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"jsCode"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"JavaScript code"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"type"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Type into which to convert result"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Function result"}),(0,a.jsx)(n.td,{children:"Date, Object, Pointer, Real, Text, Time"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Result of evaluation"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The WA Evaluate JavaScript command executes, in the Web area designated by the ",(0,a.jsx)(n.em,{children:"*"})," and ",(0,a.jsx)(n.em,{children:"object"})," parameters, the JavaScript code passed in ",(0,a.jsx)(n.em,{children:"jsCode"})," and returns the result. This command must be called after the page is loaded (the On End URL Loading form event must have been generated)."]}),"\n",(0,a.jsxs)(n.p,{children:["By default, the command returns values as strings. You can use the optional ",(0,a.jsx)(n.em,{children:"type"}),' parameter to specify typing for the value returned. To do this, pass one of the following constants, found in the "',(0,a.jsx)(n.em,{children:"Field and Variable Types"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Constant"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{children:"Value"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is Boolean"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"6"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is collection"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"42"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is date"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"4"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is longint"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"9"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is object"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"38"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is real"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"1"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is text"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"2"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Is time"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"11"})]})]})]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Warning"}),": Using this command to call directly a JavaScript function that displays a dialog (",(0,a.jsx)(n.strong,{children:"alert()"}),", ",(0,a.jsx)(n.strong,{children:"print()"}),"...) is not recommended since the user cannot interact with the Web area while the 4D code is running. If you need to implement such interface, for example you can call ",(0,a.jsx)(n.strong,{children:"setTimeout(function(){alert();}, 50))"})," to let the execution of the 4D code finish and allow user interaction."]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(n.p,{children:"This example of JavaScript code causes the previous URL to be displayed:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$result:=WA Evaluate JavaScript(MyWArea;"history.back()")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(n.p,{children:"This example shows a few evaluations with conversion of the values received."}),"\n",(0,a.jsx)(n.p,{children:"JavaScript functions placed in an HTML file:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-HTML",children:'<!DOCTYPE html>\n<html>\n\xa0\xa0\xa0 <head>\n\xa0\xa0\xa0 \xa0\xa0\xa0 <script>\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalLong(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return 123;\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalText(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return "456";\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalObject(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return {a:1,b:"hello world"};\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 \xa0\xa0\xa0 function evalDate(){\n\xa0\xa0\xa0 \xa0\xa0\xa0 \xa0\xa0\xa0 return new Date();\n\xa0\xa0\xa0 \xa0\xa0\xa0 }\n\xa0\xa0\xa0 <\/script>\n\xa0\xa0\xa0 </head>\n\xa0\xa0\xa0 <body>\n\xa0\xa0\xa0 \xa0\xa0\xa0 TEST PAGE\n\xa0\xa0\xa0 </body>\n</html>\n'})}),"\n",(0,a.jsx)(n.p,{children:"In the 4D form method, you write:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0If(Form event code=On Load)\n\xa0\xa0\xa0\xa0WA OPEN URL(*;"Web Area";"C:\\\\myDatabase\\\\index.html")\n\xa0End if\n'})}),"\n",(0,a.jsx)(n.p,{children:"You can then evaluate the JavaScript code from 4D:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$Eval1:=WA Evaluate JavaScript(*;"Web Area";"evalLong()";Is longint)\n\xa0\xa0//$Eval1 = 123\n\xa0\xa0//$Eval1 = "123" if type is omitted\n\xa0$Eval2:=WA Evaluate JavaScript(*;"Web Area";"evalText()";Is text)\n\xa0\xa0//$Eval2 = "456"\n\xa0$Eval3:=WA Evaluate JavaScript(*;"Web Area";"evalObject()";Is object)\n\xa0\xa0//$Eval3 = {"a":1,"b":"hello world"}\n\xa0$Eval4:=WA Evaluate JavaScript(*;"Web Area";"evalDate()";Is date)\n\xa0\xa0// $Eval4 = 06/21/13\n\xa0\xa0// $Eval4 = "2013-06-21T14:45:09.694Z" if type is omitted\n'})}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/commands/wa-execute-javascript-function",children:"WA EXECUTE JAVASCRIPT FUNCTION"})}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"1029"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let a={},r=s.createContext(a);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);