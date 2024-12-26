"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["87841"],{278291:function(n,e,s){s.r(e),s.d(e,{metadata:()=>t,contentTitle:()=>r,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>i});var t=JSON.parse('{"id":"commands-legacy/shift-down","title":"Shift down","description":"Shift down  : Boolean","source":"@site/versioned_docs/version-20-R7/commands-legacy/shift-down.md","sourceDirName":"commands-legacy","slug":"/commands/shift-down","permalink":"/docs/commands/shift-down","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fshift-down.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"shift-down","title":"Shift down","slug":"/commands/shift-down","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET TABLE TITLES","permalink":"/docs/commands/set-table-titles"},"next":{"title":"SHOW MENU BAR","permalink":"/docs/commands/show-menu-bar"}}'),d=s("785893"),o=s("250065");let i={id:"shift-down",title:"Shift down",slug:"/commands/shift-down",displayed_sidebar:"docs"},r=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(n){let e={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...n.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.strong,{children:"Shift down"}),"  : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{children:"Parameter"}),(0,d.jsx)(e.th,{children:"Type"}),(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{children:"Description"})]})}),(0,d.jsx)(e.tbody,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Function result"}),(0,d.jsx)(e.td,{children:"Boolean"}),(0,d.jsx)(e.td,{children:"\u2190"}),(0,d.jsx)(e.td,{children:"State of the Shift key"})]})})]}),"\n",(0,d.jsx)(e.h4,{id:"description",children:"Description"}),"\n",(0,d.jsx)(e.p,{children:"Shift down returns TRUE if the Shift key is pressed."}),"\n",(0,d.jsx)(e.h4,{id:"example",children:"Example"}),"\n",(0,d.jsxs)(e.p,{children:["The following object method for the button ",(0,d.jsx)(e.em,{children:"bAnyButton"})," performs different actions, depending on which modifier keys are pressed when the button is clicked:"]}),"\n",(0,d.jsx)(e.pre,{children:(0,d.jsx)(e.code,{className:"language-4d",children:"\xa0\xa0// bAnyButton Object Method\n\xa0Case of\n\xa0\xa0// Other multiple key combinations could be tested here\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Shift down&Windows Ctrl down)\n\xa0\xa0// Shift and Windows Ctrl (or Macintosh Command) keys are pressed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DO ACTION1\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Shift down)\n\xa0\xa0// Only Shift key is pressed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DO ACTION2\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Windows Ctrl down)\n\xa0\xa0// Only Windows Ctrl (or Macintosh Command) key is pressed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0DO ACTION3\n\xa0\xa0// ...\n\xa0\xa0// Other individual keys could be tested here\n\xa0\xa0// ...\n\xa0End case\n"})}),"\n",(0,d.jsx)(e.h4,{id:"see-also",children:"See also"}),"\n",(0,d.jsxs)(e.p,{children:[(0,d.jsx)(e.a,{href:"/docs/commands/caps-lock-down",children:"Caps lock down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/commands/macintosh-command-down",children:"Macintosh command down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/commands/macintosh-control-down",children:"Macintosh control down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/commands/macintosh-option-down",children:"Macintosh option down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/commands/windows-alt-down",children:"Windows Alt down"}),(0,d.jsx)(e.br,{}),"\n",(0,d.jsx)(e.a,{href:"/docs/commands/windows-ctrl-down",children:"Windows Ctrl down"})]}),"\n",(0,d.jsx)(e.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(e.table,{children:[(0,d.jsx)(e.thead,{children:(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.th,{}),(0,d.jsx)(e.th,{})]})}),(0,d.jsxs)(e.tbody,{children:[(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Command number"}),(0,d.jsx)(e.td,{children:"543"})]}),(0,d.jsxs)(e.tr,{children:[(0,d.jsx)(e.td,{children:"Thread safe"}),(0,d.jsx)(e.td,{children:"\u2713"})]})]})]})]})}function h(n={}){let{wrapper:e}={...(0,o.a)(),...n.components};return e?(0,d.jsx)(e,{...n,children:(0,d.jsx)(a,{...n})}):a(n)}},250065:function(n,e,s){s.d(e,{Z:function(){return r},a:function(){return i}});var t=s(667294);let d={},o=t.createContext(d);function i(n){let e=t.useContext(o);return t.useMemo(function(){return"function"==typeof n?n(e):{...e,...n}},[e,n])}function r(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(d):n.components||d:i(n.components),t.createElement(o.Provider,{value:e},n.children)}}}]);