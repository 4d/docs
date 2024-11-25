"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88216"],{643424:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>m,default:()=>l,assets:()=>a,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-menu-item-parameter","title":"SET MENU ITEM PARAMETER","description":"SET MENU ITEM PARAMETER ( menu ; menuItem ; param )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-menu-item-parameter.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-parameter","permalink":"/docs/commands/set-menu-item-parameter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-parameter.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-item-parameter","title":"SET MENU ITEM PARAMETER","slug":"/commands/set-menu-item-parameter","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM METHOD","permalink":"/docs/commands/set-menu-item-method"},"next":{"title":"SET MENU ITEM PROPERTY","permalink":"/docs/commands/set-menu-item-property"}}'),s=t("785893"),i=t("250065");let d={id:"set-menu-item-parameter",title:"SET MENU ITEM PARAMETER",slug:"/commands/set-menu-item-parameter",displayed_sidebar:"docs"},m=void 0,a={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"SET MENU ITEM PARAMETER"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"menuItem"})," ; ",(0,s.jsx)(n.em,{children:"param"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Menu reference or Menu number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuItem"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Number of menu item or -1 for the last item added to the menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"param"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"String to associate as parameter"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"SET MENU ITEM PARAMETER"})," command associates a custom character string with a menu item designated by the ",(0,s.jsx)(n.em,{children:"menu"})," and ",(0,s.jsx)(n.em,{children:"menuItem"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["This parameter is mainly used by the ",(0,s.jsx)(n.a,{href:"/docs/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"})," command."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This code provides a menu including the names of the open windows and lets you get the number of the window chosen:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0WINDOW LIST($alWindow)\n\xa0$tMenuRef:=Create menu\n\xa0For($i;1;Size of array($alWindow))\n\xa0\xa0\xa0\xa0APPEND MENU ITEM($tMenuRef;Get window title($alWindow{$i}))\xa0// Title of menu item\n\xa0\xa0\xa0\xa0SET MENU ITEM PARAMETER($tMenuRef;-1;String($alWindow{$i}))\xa0// Value returned by menu item\n\xa0End for\n\xa0$tWindowRef:=Dynamic pop up menu($tMenuRef)\n\xa0RELEASE MENU($tMenuRef)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/dynamic-pop-up-menu",children:"Dynamic pop up menu"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/get-menu-item-parameter",children:"Get menu item parameter"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/get-selected-menu-item-parameter",children:"Get selected menu item parameter"})]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return m},a:function(){return d}});var r=t(667294);let s={},i=r.createContext(s);function d(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);