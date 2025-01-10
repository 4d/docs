"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["32730"],{393480:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/object-get-indicator-type","title":"OBJECT Get indicator type","description":"OBJECT Get indicator type ( { ;} object* ) : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-indicator-type.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-indicator-type","permalink":"/docs/commands/object-get-indicator-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-indicator-type.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-indicator-type","title":"OBJECT Get indicator type","slug":"/commands/object-get-indicator-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get horizontal alignment","permalink":"/docs/commands/object-get-horizontal-alignment"},"next":{"title":"OBJECT Get keyboard layout","permalink":"/docs/commands/object-get-keyboard-layout"}}'),i=t("785893"),s=t("250065");let d={id:"object-get-indicator-type",title:"OBJECT Get indicator type",slug:"/commands/object-get-indicator-type",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT Get indicator type"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(n.br,{}),"If omitted, object is a variable"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Indicator type"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OBJECT Get indicator type"})," command returns the current indicator type assigned to the thermometer(s) designated by the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(n.p,{children:["You can set the indicator type using the Property List in Design mode, or using the ",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"})," command."]}),"\n",(0,i.jsxs)(n.p,{children:["Passing the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,i.jsxs)(n.p,{children:['You can compare the value returned by the command with the following constants, found in the "',(0,i.jsx)(n.em,{children:"Form Objects (Properties)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"}),(0,i.jsx)(n.th,{children:"Comment"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Asynchronous progress bar"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Circular indicator displaying continuous animation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Barber shop"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Bar displaying continuous animation"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Progress bar"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Standard progress bar"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"})}),"\n",(0,i.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1247"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var r=t(667294);let i={},s=r.createContext(i);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);