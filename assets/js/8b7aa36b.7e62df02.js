"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32730"],{393480:function(e,t,n){n.r(t),n.d(t,{metadata:()=>i,contentTitle:()=>c,default:()=>h,assets:()=>o,toc:()=>a,frontMatter:()=>d});var i=JSON.parse('{"id":"commands-legacy/object-get-indicator-type","title":"OBJECT Get indicator type","description":"OBJECT Get indicator type ( { ;} object* ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-indicator-type.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-indicator-type","permalink":"/docs/commands/object-get-indicator-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-indicator-type.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-indicator-type","title":"OBJECT Get indicator type","slug":"/commands/object-get-indicator-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get horizontal alignment","permalink":"/docs/commands/object-get-horizontal-alignment"},"next":{"title":"OBJECT Get keyboard layout","permalink":"/docs/commands/object-get-keyboard-layout"}}'),r=n("785893"),s=n("250065");let d={id:"object-get-indicator-type",title:"OBJECT Get indicator type",slug:"/commands/object-get-indicator-type",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function l(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT Get indicator type"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(t.br,{}),"If omitted, object is a variable"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"Indicator type"})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,r.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"OBJECT Get indicator type"})," command returns the current indicator type assigned to the thermometer(s) designated by the ",(0,r.jsx)(t.em,{children:"object"})," and ",(0,r.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,r.jsxs)(t.p,{children:["You can set the indicator type using the Property List in Design mode, or using the ",(0,r.jsx)(t.a,{href:"/docs/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"})," command."]}),"\n",(0,r.jsxs)(t.p,{children:["Passing the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,r.jsxs)(t.p,{children:['You can compare the value returned by the command with the following constants, found in the "',(0,r.jsx)(t.em,{children:"Form Objects (Properties)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Asynchronous progress bar"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"3"}),(0,r.jsx)(t.td,{children:"Circular indicator displaying continuous animation"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Barber shop"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:"Bar displaying continuous animation"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Progress bar"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:"Standard progress bar"})]})]})]}),"\n",(0,r.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"})})]})}function h(e={}){let{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var i=n(667294);let r={},s=i.createContext(r);function d(e){let t=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);