"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22191"],{926271:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>c});var t=JSON.parse('{"id":"commands-legacy/form-get-current-page","title":"FORM Get current page","description":"FORM Get current page {( * )} : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/form-get-current-page.md","sourceDirName":"commands-legacy","slug":"/commands/form-get-current-page","permalink":"/docs/20-R7/commands/form-get-current-page","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fform-get-current-page.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"form-get-current-page","title":"FORM Get current page","slug":"/commands/form-get-current-page","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FORM Get color scheme","permalink":"/docs/20-R7/commands/form-get-color-scheme"},"next":{"title":"FORM GET ENTRY ORDER","permalink":"/docs/20-R7/commands/form-get-entry-order"}}'),s=r("785893"),o=r("250065");let a={id:"form-get-current-page",title:"FORM Get current page",slug:"/commands/form-get-current-page",displayed_sidebar:"docs"},c=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"FORM Get current page"})," {( * )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Returns number of current subform page"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Number of currently displayed form page"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"FORM Get current page"})," command returns the number of the currently displayed form page or of the current form loaded by the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/form-load",children:"FORM LOAD"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"*"})," parameter is useful when the command is called in the context of a page type subform containing several pages. In this case, when you pass this parameter, the command changes the page of the current subform (the one that called the command). By default, when the ",(0,s.jsx)(n.em,{children:"*"})," parameter is omitted, the command is always applied to the parent form."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"In a form, when you select a menu item from the menu bar or when the form receives a call from another process, you can perform different actions depending on the form page currently displayed. In this example, you write:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// [myTable];"myForm" Form Method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlMenuNumber:=Menu selected>>16\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlItemNumber:=Menu selected\xa0&\xa00xFFFF\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlMenuNumber=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlItemNumber=...)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Do appropriate action for page 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Do appropriate action for page 2\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlItemNumber=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($vlMenuNumber=...)\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Outside Call)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=1)\n\xa0\xa0// Do appropriate reply for page 1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(FORM Get current page=2)\n\xa0\xa0// Do appropriate reply for page 2\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0// ...\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/form-first-page",children:"FORM FIRST PAGE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/form-goto-page",children:"FORM GOTO PAGE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/form-last-page",children:"FORM LAST PAGE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/form-next-page",children:"FORM NEXT PAGE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/form-previous-page",children:"FORM PREVIOUS PAGE"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"276"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(i,{...e})}):i(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return a}});var t=r(667294);let s={},o=t.createContext(s);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);