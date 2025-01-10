"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14202"],{262541:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/wa-execute-javascript-function","title":"WA EXECUTE JAVASCRIPT FUNCTION","description":"WA EXECUTE JAVASCRIPT FUNCTION ( { ;} object ; jsFunction ; result| {; param}{; param2 ; ... ; paramN} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/wa-execute-javascript-function.md","sourceDirName":"commands-legacy","slug":"/commands/wa-execute-javascript-function","permalink":"/docs/commands/wa-execute-javascript-function","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwa-execute-javascript-function.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"wa-execute-javascript-function","title":"WA EXECUTE JAVASCRIPT FUNCTION","slug":"/commands/wa-execute-javascript-function","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"WA Evaluate JavaScript","permalink":"/docs/commands/wa-evaluate-javascript"},"next":{"title":"WA Forward URL available","permalink":"/docs/commands/wa-forward-url-available"}}'),a=t("785893"),s=t("250065");let i={id:"wa-execute-javascript-function",title:"WA EXECUTE JAVASCRIPT FUNCTION",slug:"/commands/wa-execute-javascript-function",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"WA EXECUTE JAVASCRIPT FUNCTION"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"object"})," ; ",(0,a.jsx)(n.em,{children:"jsFunction"})," ; result|* {; ",(0,a.jsx)(n.em,{children:"param"}),"}{; ",(0,a.jsx)(n.em,{children:"param2"})," ; ... ; ",(0,a.jsx)(n.em,{children:"paramN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Parameter"}),(0,a.jsx)(n.th,{children:"Type"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operator"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"object"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"jsFunction"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Name of JavaScript function to execute"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"result|*"}),(0,a.jsx)(n.td,{children:"Variable"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"* for a function with no result or"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Function result (if expected)"}),(0,a.jsx)(n.td,{}),(0,a.jsx)(n.td,{})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"param"}),(0,a.jsx)(n.td,{children:"Text, Number, Date, Object, Collection"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Parameter(s) to pass to function"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,a.jsxs)(n.p,{children:["The WA EXECUTE JAVASCRIPT FUNCTION command executes, in the Web area designated by the ",(0,a.jsx)(n.em,{children:"*"})," and ",(0,a.jsx)(n.em,{children:"object"})," parameters, the JavaScript function ",(0,a.jsx)(n.em,{children:"jsFunction"})," and optionally returns its result in the ",(0,a.jsx)(n.em,{children:"result"})," parameter."]}),"\n",(0,a.jsxs)(n.p,{children:["If the function does not return a result, pass ",(0,a.jsx)(n.em,{children:"*"})," in the ",(0,a.jsx)(n.em,{children:"result"})," parameter."]}),"\n",(0,a.jsxs)(n.p,{children:["You can pass one or more parameters containing the parameters of the function in ",(0,a.jsx)(n.em,{children:"param"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["The command supports several types of parameters for both input (",(0,a.jsx)(n.em,{children:"param"}),") and output (",(0,a.jsx)(n.em,{children:"result"}),"). You can pass and retrieve data of the string, number, date, object and collection types. If the parameter type is not defined, the text type is used by default."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Warning:"})," Using this command to call directly a JavaScript function that displays a dialog (",(0,a.jsx)(n.strong,{children:"alert()"}),", ",(0,a.jsx)(n.strong,{children:"print()."}),"..) is not recommended since the user cannot interact with the Web area while the 4D code is running. If you need to implement such interface, for example you can call ",(0,a.jsx)(n.strong,{children:"setTimeout(function(){alert();}, 50))"})," to let the execution of the 4D code finish and allow user interaction."]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,a.jsx)(n.p,{children:"Calling a JavaScript function with 3 parameters:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0$JavaScriptFunction:="TheFunctionToBeExecuted"\n\xa0$Param1:="10"\n\xa0$Param2:="true"\n\xa0$Param3:="1,000.2"\xa0//note "," as thousands separator and "." as the decimal separator\n\xa0\n\xa0WA EXECUTE JAVASCRIPT FUNCTION(MyWArea;$JavaScriptFunction;$Result;$Param1;$Param2;$Param3)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,a.jsx)(n.p,{children:'The "getCustomerInfo" JavaScript function receive a number ID as parameter and returns an object:'}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $Result : Object\n\xa0var $ID : Integer\n\xa0$ID:=1000\n\xa0WA EXECUTE JAVASCRIPT FUNCTION(*,"WA";"getCustomerInfo";$Result;$ID)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/commands/wa-evaluate-javascript",children:"WA Evaluate JavaScript"})}),"\n",(0,a.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Command number"}),(0,a.jsx)(n.td,{children:"1043"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Thread safe"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let a={},s=r.createContext(a);function i(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);