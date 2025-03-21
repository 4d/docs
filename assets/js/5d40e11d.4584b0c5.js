"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44590"],{578446:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/object-get-list-reference","title":"OBJECT Get list reference","description":"OBJECT Get list reference ( { ;} object {; listType*} ) : ListRef","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-list-reference.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-list-reference","permalink":"/docs/20-R7/commands/object-get-list-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-list-reference.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-list-reference","title":"OBJECT Get list reference","slug":"/commands/object-get-list-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get list name","permalink":"/docs/20-R7/commands/object-get-list-name"},"next":{"title":"OBJECT GET MAXIMUM VALUE","permalink":"/docs/20-R7/commands/object-get-maximum-value"}}'),r=n("785893"),i=n("250065");let d={id:"object-get-list-reference",title:"OBJECT Get list reference",slug:"/commands/object-get-list-reference",displayed_sidebar:"docs"},c=void 0,l={},o=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function h(e){let t={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"OBJECT Get list reference"})," ( {* ;} ",(0,r.jsx)(t.em,{children:"object"})," {; ",(0,r.jsx)(t.em,{children:"listType"}),"} ) : ListRef"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Parameter"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Description"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operator"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(t.br,{}),"If omitted, object is a field or variable"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"object"}),(0,r.jsx)(t.td,{children:"any"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsxs)(t.td,{children:["Object name (if * is specified) or",(0,r.jsx)(t.br,{}),"Field or variable (if * is omitted)"]})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"listType"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Type of list: Choice list, Required list or Excluded list"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Function result"}),(0,r.jsx)(t.td,{children:"ListRef"}),(0,r.jsx)(t.td,{children:"\u2190"}),(0,r.jsx)(t.td,{children:"List reference number"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.strong,{children:"OBJECT Get list reference"})," command returns the reference number (ListRef) of the hierarchical list associated with the object or group of objects designated by ",(0,r.jsx)(t.em,{children:"object"})," and ",(0,r.jsx)(t.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Passing the optional ",(0,r.jsx)(t.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, this indicates that the ",(0,r.jsx)(t.em,{children:"object"})," parameter is a field or variable. In this case, you pass a field or variable reference instead of a string (field or variable object only)."]}),"\n",(0,r.jsxs)(t.p,{children:["By default, if you omit the ",(0,r.jsx)(t.em,{children:"listType"})," parameter, the command returns the name of the choice list (list of values) associated with the object. You can also get the reference number for required lists or excluded lists by passing, in ",(0,r.jsx)(t.em,{children:"listType"}),', one of the following constants found in the "',(0,r.jsx)(t.em,{children:"Form Objects (Properties)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Constant"}),(0,r.jsx)(t.th,{children:"Type"}),(0,r.jsx)(t.th,{children:"Value"}),(0,r.jsx)(t.th,{children:"Comment"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Choice list"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"0"}),(0,r.jsx)(t.td,{children:'Simple list of values to choose from ("Choice List" option in the Property List) (default)'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Excluded list"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"2"}),(0,r.jsx)(t.td,{children:'Lists values not accepted for entry ("Excluded List" option in the Property List)'})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Required list"}),(0,r.jsx)(t.td,{children:"Integer"}),(0,r.jsx)(t.td,{children:"1"}),(0,r.jsx)(t.td,{children:'Lists only values accepted for entry ("Required List" option in the Property List)'})]})]})]}),"\n",(0,r.jsxs)(t.p,{children:["If there is no hierarchical list associated with the object for the ",(0,r.jsx)(t.em,{children:"listType"})," defined, the command returns 0."]}),"\n",(0,r.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/object-get-list-name",children:"OBJECT Get list name"}),(0,r.jsx)(t.br,{}),"\n",(0,r.jsx)(t.a,{href:"/docs/20-R7/commands/object-set-list-by-reference",children:"OBJECT SET LIST BY REFERENCE"})]}),"\n",(0,r.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Command number"}),(0,r.jsx)(t.td,{children:"1267"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Thread safe"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var s=n(667294);let r={},i=s.createContext(r);function d(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);