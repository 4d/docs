"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77116"],{813874:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>c,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-set-enabled","title":"OBJECT SET ENABLED","description":"OBJECT SET ENABLED ( { ;} object ; active* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-set-enabled.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-enabled","permalink":"/docs/20-R8/commands/object-set-enabled","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-enabled.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-set-enabled","title":"OBJECT SET ENABLED","slug":"/commands/object-set-enabled","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET DRAG AND DROP OPTIONS","permalink":"/docs/20-R8/commands/object-set-drag-and-drop-options"},"next":{"title":"OBJECT SET ENTERABLE","permalink":"/docs/20-R8/commands/object-set-enterable"}}'),i=t("785893"),r=t("250065");let o={id:"object-set-enabled",title:"OBJECT SET ENABLED",slug:"/commands/object-set-enabled",displayed_sidebar:"docs"},d=void 0,c={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT SET ENABLED"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"active"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,i.jsx)(n.br,{}),"If omitted, object is a variable or a field"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,i.jsx)(n.br,{}),"Variable (if * is omitted)"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"active"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"True = object(s) enabled; otherwise, False"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OBJECT SET ENABLED"})," command can be used to enable or disable the object or group of objects specified by ",(0,i.jsx)(n.em,{children:"object"})," in the current form. An enabled object reacts to mouse clicks and to keyboard shortcuts."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference (object variable only) instead of a string."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass True in the ",(0,i.jsx)(n.em,{children:"active"})," parameter to enable the objects and False to disable them."]}),"\n",(0,i.jsx)(n.p,{children:"This command can be applied to the following types of objects:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Button, Default button, 3D button, Invisible button, Highlight button"}),"\n",(0,i.jsx)(n.li,{children:"Radio button, 3D radio button, Picture button"}),"\n",(0,i.jsx)(n.li,{children:"Check Box, 3D Check Box"}),"\n",(0,i.jsx)(n.li,{children:"Pop-up menu, Drop-down List, Combo Box, Menu/Drop-down List"}),"\n",(0,i.jsx)(n.li,{children:"Thermometer, Ruler"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," This command has no effect with an object to which a standard action has been assigned (4D looks after modifying the state of this object when necessary), except in the case of the ",(0,i.jsx)(n.strong,{children:"Validate"})," and ",(0,i.jsx)(n.strong,{children:"Cancel"})," actions."]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/20-R8/commands/object-get-enabled",children:"OBJECT Get enabled"})}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1123"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let i={},r=s.createContext(i);function o(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);