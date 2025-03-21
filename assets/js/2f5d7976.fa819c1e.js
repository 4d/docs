"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91032"],{577645:function(n,e,s){s.r(e),s.d(e,{default:()=>h,frontMatter:()=>o,metadata:()=>d,assets:()=>l,toc:()=>c,contentTitle:()=>r});var d=JSON.parse('{"id":"commands-legacy/window-list","title":"WINDOW LIST","description":"WINDOW LIST ( windows {; *} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/window-list.md","sourceDirName":"commands-legacy","slug":"/commands/window-list","permalink":"/docs/20-R7/commands/window-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fwindow-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"window-list","title":"WINDOW LIST","slug":"/commands/window-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Window kind","permalink":"/docs/20-R7/commands/window-kind"},"next":{"title":"Window process","permalink":"/docs/20-R7/commands/window-process"}}'),t=s("785893"),i=s("250065");let o={id:"window-list",title:"WINDOW LIST",slug:"/commands/window-list",displayed_sidebar:"docs"},r=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...n.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"WINDOW LIST"})," ( ",(0,t.jsx)(e.em,{children:"windows"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Parameter"}),(0,t.jsx)(e.th,{children:"Type"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Description"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"windows"}),(0,t.jsx)(e.td,{children:"Array"}),(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"Array of window reference numbers"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"*"}),(0,t.jsx)(e.td,{children:"Operator"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"If specified, take floating windows into account If omitted, ignore floating windows"})]})]})]}),"\n",(0,t.jsx)(e.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(e.p,{children:["The WINDOW LIST command populates the array ",(0,t.jsx)(e.em,{children:"windows"}),' with the window reference numbers of the windows currently open in all running processes (kernel or user processes). Only "visible" windows (i.e. windows that are not hidden) are returned.']}),"\n",(0,t.jsxs)(e.p,{children:["If you do not pass the optional ",(0,t.jsx)(e.em,{children:"*"})," parameter, floating windows are ignored."]}),"\n",(0,t.jsx)(e.h2,{id:"example",children:"Example"}),"\n",(0,t.jsx)(e.p,{children:"The following project method tiles all the current open window, except floating windows and dialog boxes:"}),"\n",(0,t.jsx)(e.pre,{children:(0,t.jsx)(e.code,{className:"language-4d",children:"\xa0\xa0// TILE WINDOWS project method\n\xa0\n\xa0WINDOW LIST($alWnd)\n\xa0$vlLeft:=10\n\xa0$vlTop:=80\xa0// Leave enough room for the Tool bar\n\xa0For($vlWnd;1;Size of array($alWnd))\n\xa0\xa0\xa0\xa0If(Window kind($alWnd{$vlWnd})#Modal dialog)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0GET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWR:=$vlLeft+($vlWR-$vlWL)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWB:=$vlTop+($vlWB-$vlWT)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWL:=$vlLeft\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlWT:=$vlTop\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET WINDOW RECT($vlWL;$vlWT;$vlWR;$vlWB;$alWnd{$vlWnd})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlLeft:=$vlLeft+10\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlTop:=$vlTop+25\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n"})}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Note:"})," This method could be improved by adding tests on the size of the main window (on Windows) or the size and location of the screens (on Macintosh)."]}),"\n",(0,t.jsx)(e.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/20-R7/commands/window-kind",children:"Window kind"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/20-R7/commands/window-process",children:"Window process"})]}),"\n",(0,t.jsx)(e.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Command number"}),(0,t.jsx)(e.td,{children:"442"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"Thread safe"}),(0,t.jsx)(e.td,{children:"\u2717"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,i.a)(),...n.components};return e?(0,t.jsx)(e,{...n,children:(0,t.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return o}});var d=s(667294);let t={},i=d.createContext(t);function o(n){let e=d.useContext(i);return d.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(t):n.components||t:o(n.components),d.createElement(i.Provider,{value:e},n.children)}}}]);