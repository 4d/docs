"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92333"],{47667:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>r,default:()=>m,assets:()=>c,toc:()=>l,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/set-about","title":"SET ABOUT","description":"SET ABOUT ( itemText ; method )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-about.md","sourceDirName":"commands-legacy","slug":"/commands/set-about","permalink":"/docs/commands/set-about","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-about.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-about","title":"SET ABOUT","slug":"/commands/set-about","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"REDRAW","permalink":"/docs/commands/redraw"},"next":{"title":"SET APPLICATION COLOR SCHEME","permalink":"/docs/commands/set-application-color-scheme"}}'),o=t("785893"),d=t("250065");let i={id:"set-about",title:"SET ABOUT",slug:"/commands/set-about",displayed_sidebar:"docs"},r=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"SET ABOUT"})," ( ",(0,o.jsx)(n.em,{children:"itemText"})," ; ",(0,o.jsx)(n.em,{children:"method"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"itemText"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"New About menu item text"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"method"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Name of method to execute when menu item is chosen"})]})]})]}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"SET ABOUT"})," command changes the ",(0,o.jsx)(n.strong,{children:"About 4D"})," menu command in the ",(0,o.jsx)(n.strong,{children:"Help"})," menu (Windows) or in the ",(0,o.jsx)(n.strong,{children:"Application"})," menu (macOS) menu to ",(0,o.jsx)(n.em,{children:"itemText"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["After the call, when a user selects this menu command in Design or Application mode, ",(0,o.jsx)(n.em,{children:"method"})," will be called. Typically, this method can open a dialog box to give version information about your application."]}),"\n",(0,o.jsx)(n.p,{children:"This command is used with 4D (all modes), 4D Desktop and 4D Server. A new process is created when it is run on a server machine."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"}),' On Windows, this command modifies the "About 4D" line in the ',(0,o.jsx)(n.strong,{children:"Help"})," menu created by the ",(0,o.jsx)(n.a,{href:"/docs/commands/set-help-menu",children:"SET HELP MENU"})," command."]}),"\n",(0,o.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,o.jsxs)(n.p,{children:["The following example replaces the ",(0,o.jsx)(n.strong,{children:"About"})," menu command with the ",(0,o.jsx)(n.strong,{children:"About Scheduler"})," menu command. The ABOUT method displays a custom About box:"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0SET ABOUT("About Scheduler\u2026";"ABOUT")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,o.jsx)(n.p,{children:"The following example resets the About 4D menu command:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0SET ABOUT("About 4D";"")\n'})}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/commands/set-help-menu",children:"SET HELP MENU"})})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let o={},d=s.createContext(o);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);