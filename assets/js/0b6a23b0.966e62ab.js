"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95330"],{737667:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>i,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/level","title":"Level","description":"Level  : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/level.md","sourceDirName":"commands-legacy","slug":"/commands/level","permalink":"/docs/commands/level","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flevel.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"level","title":"Level","slug":"/commands/level","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is in print preview","permalink":"/docs/commands/is-in-print-preview"},"next":{"title":"OPEN PRINTING JOB","permalink":"/docs/commands/open-printing-job"}}'),s=r("785893"),o=r("250065");let d={id:"level",title:"Level",slug:"/commands/level",displayed_sidebar:"docs"},l=void 0,a={},i=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function c(e){let n={a:"a",br:"br",code:"code",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Level"}),"  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Current break or header level"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Level is used to determine the current header or break level. It returns the level number during the On Header and On Printing Break events."}),"\n",(0,s.jsx)(n.p,{children:"Level 0 is the last level to be printed and is appropriate for printing a grand total. Level returns 1 when 4D prints a break on the first sorted field, 2 when 4D prints a break on the second sorted field, and so on."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This example is a template for a form method. It shows each of the possible events that can occur while a summary report uses a form as an output form. Level is called when a header or a break is printed:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Method of a form being used as output form for a summary report\n\xa0$vpFormTable:=Current form table\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(FORM Event=On Header)\n\xa0\xa0// A header area is about to be printed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection($vpFormTable->))\n\xa0\xa0// Code for the first break header goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// Code for a break header level 1 goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=2)\n\xa0\xa0// Code for a break header level 2 goes here\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Detail)\n\xa0\xa0// A record is about to be printed\n\xa0\xa0// Code for each record goes here\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Break)\n\xa0\xa0// A break area is about to be printed\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=0)\n\xa0\xa0// Code for a break level 0 goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Level=1)\n\xa0\xa0// Code for a break level 1 goes here\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0\xa0\xa0\xa0:(FORM Event=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection($vpFormTable->))\n\xa0\xa0// Code for the last footer goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0// Code for a footer goes here\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/accumulate",children:"ACCUMULATE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/break-level",children:"BREAK LEVEL"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/form-event-code",children:"Form event code"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"101"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let s={},o=t.createContext(s);function d(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);