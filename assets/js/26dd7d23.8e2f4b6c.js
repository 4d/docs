"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68852"],{258607:function(e,n,r){r.r(n),r.d(n,{default:()=>a,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>o,contentTitle:()=>l});var t=JSON.parse('{"id":"commands-legacy/trigger-properties","title":"TRIGGER PROPERTIES","description":"TRIGGER PROPERTIES ( triggerLevel ; dbEvent ; tableNum ; recordNum )","source":"@site/versioned_docs/version-20-R8/commands-legacy/trigger-properties.md","sourceDirName":"commands-legacy","slug":"/commands/trigger-properties","permalink":"/docs/commands/trigger-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-properties.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"trigger-properties","title":"TRIGGER PROPERTIES","slug":"/commands/trigger-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Trigger level","permalink":"/docs/commands/trigger-level"},"next":{"title":"User Interface","permalink":"/docs/commands/theme/User-Interface"}}'),s=r("785893"),i=r("250065");let d={id:"trigger-properties",title:"TRIGGER PROPERTIES",slug:"/commands/trigger-properties",displayed_sidebar:"docs"},l=void 0,c={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," ( ",(0,s.jsx)(n.em,{children:"triggerLevel"})," ; ",(0,s.jsx)(n.em,{children:"dbEvent"})," ; ",(0,s.jsx)(n.em,{children:"tableNum"})," ; ",(0,s.jsx)(n.em,{children:"recordNum"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"triggerLevel"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Trigger execution cycle level"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"dbEvent"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Database event"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tableNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Involved table number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"recordNum"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Involved record number"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," command returns information about the trigger execution level you pass in ",(0,s.jsx)(n.em,{children:"triggerLevel"}),". You use this command in conjunction with ",(0,s.jsx)(n.a,{href:"/docs/commands/trigger-level",children:"Trigger level"})," to perform different actions depending on the cascading of trigger execution levels. For more information, see ",(0,s.jsx)(n.em,{children:"Triggers"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"If you pass a non-existing trigger execution level, the command returns 0 (zero) in all parameters."}),"\n",(0,s.jsxs)(n.p,{children:["The nature of the database event for the trigger execution level is returned in ",(0,s.jsx)(n.em,{children:"dbEvent"}),". The following predefined constants are provided in the ",(0,s.jsx)(n.em,{children:"Trigger Events"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Deleting Record Event"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving Existing Record Event"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On Saving New Record Event"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["The table number and record number for the record involved by the database event for the trigger execution level are returned in ",(0,s.jsx)(n.em,{children:"tableNum"})," and ",(0,s.jsx)(n.em,{children:"recordNum"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"About Record Numbers"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/trigger-event",children:"Trigger event"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/trigger-level",children:"Trigger level"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Triggers"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"399"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var t=r(667294);let s={},i=t.createContext(s);function d(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);