"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["6260"],{604459:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/object-get-list-name","title":"OBJECT Get list name","description":"OBJECT Get list name ( { ;} object {; listType*} ) : Text","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-get-list-name.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-list-name","permalink":"/docs/20-R7/commands/object-get-list-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-list-name.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-list-name","title":"OBJECT Get list name","slug":"/commands/object-get-list-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get keyboard layout","permalink":"/docs/20-R7/commands/object-get-keyboard-layout"},"next":{"title":"OBJECT Get list reference","permalink":"/docs/20-R7/commands/object-get-list-reference"}}'),i=n("785893"),r=n("250065");let d={id:"object-get-list-name",title:"OBJECT Get list name",slug:"/commands/object-get-list-name",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"OBJECT Get list name"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," {; ",(0,i.jsx)(t.em,{children:"listType"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(t.br,{}),"If omitted, object is a variable or a field"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsxs)(t.td,{children:["Object name (if * is specified) or ",(0,i.jsx)(t.br,{}),"Variable or field (if * is omitted)"]})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"listType"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Type of list: Choice list, Required list or Excluded list"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Text"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Name of list (specified in Design mode)"})]})]})]}),"\n",(0,i.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The OBJECT Get list name command returns the name of the choice list associated with the object or group of objects designated by ",(0,i.jsx)(t.em,{children:"object"}),". 4D lets you associate a choice list (created with the choice list editor in Design mode) with form objects using the form editor or the ",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/object-set-list-by-name",children:"OBJECT SET LIST BY NAME"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a field or a variable. In this case, you pass a field or variable reference (object field or variable only) instead of a string."]}),"\n",(0,i.jsxs)(t.p,{children:["You can use the optional ",(0,i.jsx)(t.em,{children:"listType"})," parameter to designate the type of list that you want to get. By default, if you omit this parameter, the command returns the name of the choice list (list of values) associated with the object. You can also get the names of required lists or excluded lists by passing, in ",(0,i.jsx)(t.em,{children:"listType"}),', one of the following constants found in the "',(0,i.jsx)(t.em,{children:"Form Objects (Properties)"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Constant"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Choice list"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:'Simple list of values to choose from ("Choice List" option in the Property List) (default)'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Excluded list"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"2"}),(0,i.jsx)(t.td,{children:'Lists values not accepted for entry ("Excluded List" option in the Property List)'})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Required list"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:'Lists only values accepted for entry ("Required List" option in the Property List)'})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:["If there is no list of the type defined associated with the ",(0,i.jsx)(t.em,{children:"object"}),', the command returns an empty string ("").']}),"\n",(0,i.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/object-get-list-reference",children:"OBJECT Get list reference"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/20-R7/commands/object-set-list-by-name",children:"OBJECT SET LIST BY NAME"})]}),"\n",(0,i.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1072"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return d}});var s=n(667294);let i={},r=s.createContext(i);function d(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);