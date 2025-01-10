"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82884"],{798011:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>d,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/copy-parameters","title":"Copy parameters","description":"Copy parameters {( startFrom )} : Collection","source":"@site/versioned_docs/version-20-R7/commands-legacy/copy-parameters.md","sourceDirName":"commands-legacy","slug":"/commands/copy-parameters","permalink":"/docs/commands/copy-parameters","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcopy-parameters.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"copy-parameters","title":"Copy parameters","slug":"/commands/copy-parameters","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Command name","permalink":"/docs/commands/command-name"},"next":{"title":"Count parameters","permalink":"/docs/commands/count-parameters"}}'),s=t("785893"),a=t("250065");let o={id:"copy-parameters",title:"Copy parameters",slug:"/commands/copy-parameters",displayed_sidebar:"docs"},l=void 0,i={},d=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Copy parameters"})," {( ",(0,s.jsx)(n.em,{children:"startFrom"})," )} : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"startFrom"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Starting index (included)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"New collection containing parameters actually passed"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"The Copy parameters command returns a new collection containing all parameters actually passed to a method or a function. This command is useful when you need to forward a various number of parameters from a method or function to another method or function."}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"startFrom"})," optional parameter, you can pass the index of the parameter from which to start collecting parameters to forward. The ",(0,s.jsx)(n.em,{children:"startFrom"})," parameter itself is included."]}),"\n",(0,s.jsxs)(n.p,{children:["When called inside a formula, ",(0,s.jsx)(n.strong,{children:"Copy parameters"})," returns the parameters passed explicitely using ",(0,s.jsx)(n.em,{children:"apply()"})," or ",(0,s.jsx)(n.em,{children:"call()"})," (and not those passed to the parent method or function)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Copy parameters"})," returns an empty collection if:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"it is not called in a method or function that has been called by another method or function,"}),"\n",(0,s.jsx)(n.li,{children:"no parameter was passed to the parent method or function."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"Calling a different function depending on the first parameter and passing other parameters to this function:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0Function selectTask($task Text)\n\xa0Case of\n\xa0\xa0\xa0\xa0:($task="Task1")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0This.task1(Copy parameters(2))\n\xa0\xa0\xa0\xa0:($task="Task2")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0This.task2(Copy parameters(2))\n\xa0End case\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Or, calling another function on another object with ",(0,s.jsx)(n.strong,{children:"apply()"})," and pass the parameters:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0Function doSomething($param Text;$extraParameters Variant)\n\xa0This.delegate.doSomething.apply(This.delegate;Copy parameters)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsxs)(n.p,{children:["Since the command returns a collection, it can be used with ",(0,s.jsx)(n.strong,{children:".join()"})," to build for example a html list:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Class\n\xa0\n\xa0Function list($typeText)->Text\n\xa0\xa0//type of list is "u" or "o"\n\xa0var $value : Collection\n\xa0$value:=Copy parameters(2)\n\xa0$html:="<"+$type+"l>\n* "  \n\xa0$html+=$value.join("\n* ")  \n\xa0$html+="\n"\n\xa0return$html\n\xa0\n\xa0\xa0// Method\n\xa0\n\xa0$htmlList:=$c.list("u";"Alpha";"Bravo";"Charlie")\n\xa0\xa0// $htmlList = \n* Alpha\n* Bravo\n* Charlie\n\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/count-parameters",children:"Count parameters"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1790"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return o}});var r=t(667294);let s={},a=r.createContext(s);function o(e){let n=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:n},e.children)}}}]);