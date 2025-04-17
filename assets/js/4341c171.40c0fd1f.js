"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77254"],{75427:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>a,assets:()=>o,toc:()=>d,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/clear-variable","title":"CLEAR VARIABLE","description":"CLEAR VARIABLE ( variable )","source":"@site/versioned_docs/version-20-R8/commands-legacy/clear-variable.md","sourceDirName":"commands-legacy","slug":"/commands/clear-variable","permalink":"/docs/20-R8/commands/clear-variable","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fclear-variable.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"clear-variable","title":"CLEAR VARIABLE","slug":"/commands/clear-variable","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Variables","permalink":"/docs/20-R8/commands/theme/Variables"},"next":{"title":"LOAD VARIABLES","permalink":"/docs/20-R8/commands/load-variables"}}'),s=r("785893"),t=r("250065");let l={id:"clear-variable",title:"CLEAR VARIABLE",slug:"/commands/clear-variable",displayed_sidebar:"docs"},i=void 0,o={},d=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CLEAR VARIABLE"})," ( ",(0,s.jsx)(n.em,{children:"variable"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"variable"}),(0,s.jsx)(n.td,{children:"Variable"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Variable to clear"})]})})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["CLEAR VARIABLE resets ",(0,s.jsx)(n.em,{children:"variable"})," to its default type value (",(0,s.jsx)(n.em,{children:"i.e."}),", empty string for Text variables, ",(0,s.jsx)(n.em,{children:"0"})," for numeric variables, no elements for arrays, etc.). The variable still exists in memory."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," For more information on default type values, please refer to the ",(0,s.jsx)(n.em,{children:"Default values"})," paragraph."]}),"\n",(0,s.jsxs)(n.p,{children:["The variable you pass in ",(0,s.jsx)(n.em,{children:"variable"})," can be a local, process or interprocess variable."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," You do not need to clear process variables when a process ends; 4D clears them automatically. Similarly, each local variable is automatically cleared when the method in which it was created completes execution."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsxs)(n.p,{children:["In a form, you are using the drop-down list ",(0,s.jsx)(n.em,{children:"asMyDropDown"})," whose sole purpose is user interface. In other words, you use that array during data entry, but once you are done with the form, you will no longer use that array. Consequently, during the On Unload event, you just get rid of the array:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0//asMyDropDown drop-drop list object method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Load)\n\xa0\xa0//Initialize the array one way or another\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ARRAY TEXT(asMyDropDown;...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Unload)\n\xa0\xa0//No longer need the array\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR VARIABLE(asMyDropDown)\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/20-R8/commands/undefined",children:"Undefined"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"89"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var a=r(667294);let s={},t=a.createContext(s);function l(e){let n=a.useContext(t);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),a.createElement(t.Provider,{value:n},e.children)}}}]);