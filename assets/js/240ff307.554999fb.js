"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70335"],{557070:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/set-window-title","title":"SET WINDOW TITLE","description":"SET WINDOW TITLE ( title {; window} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/set-window-title.md","sourceDirName":"commands-legacy","slug":"/commands/set-window-title","permalink":"/docs/commands/set-window-title","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-window-title.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-window-title","title":"SET WINDOW TITLE","slug":"/commands/set-window-title","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET WINDOW RECT","permalink":"/docs/commands/set-window-rect"},"next":{"title":"SHOW TOOL BAR","permalink":"/docs/commands/show-tool-bar"}}'),s=t("785893"),r=t("250065");let o={id:"set-window-title",title:"SET WINDOW TITLE",slug:"/commands/set-window-title",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET WINDOW TITLE"})," ( ",(0,s.jsx)(n.em,{children:"title"})," {; ",(0,s.jsx)(n.em,{children:"window"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"title"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Window title"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"window"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Window reference number, or Frontmost window of current process, if omitted"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SET WINDOW TITLE"})," command changes the title of the window whose reference number is passed in ",(0,s.jsx)(n.em,{children:"window"})," to the text passed in ",(0,s.jsx)(n.em,{children:"title"})," (max. length 80 characters)."]}),"\n",(0,s.jsxs)(n.p,{children:["If the window does not exist, ",(0,s.jsx)(n.strong,{children:"SET WINDOW TITLE"})," does nothing."]}),"\n",(0,s.jsxs)(n.p,{children:["If you omit the ",(0,s.jsx)(n.em,{children:"window"})," parameter, ",(0,s.jsx)(n.strong,{children:"SET WINDOW TITLE"})," changes the title of the frontmost window for the current process."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," In the Design environment, 4D changes the window titles automatically \u2014i.e., \u201CEntry for Table\u201D when you perform data entry. If you change a window title, 4D will probably override it. On the other hand, in the Application environment, 4D does not change the titles of the windows."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"While performing data entry in a form, you click on a button that executes a lengthy operation (i.e., browsing programmatically related records shown in a subform). You keep informed about the progress of the operation using the title of the current window:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// bAnalysis button Object Method\n\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Clicked)\n\xa0\xa0// Save current window title in a local variable\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vsCurTitle:=Get window title\n\xa0\xa0// Start the lengthy operation\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0FIRST RECORD([Invoice Line Items])\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlRecord;1;Records in selection([Invoice Line Items]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DO SOMETHING\n\xa0\xa0// Show progress information\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW TITLE("Processing Line Item #"+String($vlRecord))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0// Restore original window title\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW TITLE($vsCurTitle)\n\xa0End case\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/get-window-title",children:"Get window title"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"213"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var i=t(667294);let s={},r=i.createContext(s);function o(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);