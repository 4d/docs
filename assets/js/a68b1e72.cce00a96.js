"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63951"],{897841:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>h,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/object-get-shortcut","title":"OBJECT GET SHORTCUT","description":"OBJECT GET SHORTCUT ( { ;} object ; key ; modifiers* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-get-shortcut.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-shortcut","permalink":"/docs/commands/object-get-shortcut","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-shortcut.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-shortcut","title":"OBJECT GET SHORTCUT","slug":"/commands/object-get-shortcut","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET SCROLLBAR","permalink":"/docs/commands/object-get-scrollbar"},"next":{"title":"OBJECT Get style sheet","permalink":"/docs/commands/object-get-style-sheet"}}'),r=t("785893"),d=t("250065");let i={id:"object-get-shortcut",title:"OBJECT GET SHORTCUT",slug:"/commands/object-get-shortcut",displayed_sidebar:"docs"},c=void 0,o={},h=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT GET SHORTCUT"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"key"})," ; ",(0,r.jsx)(n.em,{children:"modifiers"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"key"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Key associated with object"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"modifiers"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Modifier key mask or combination of masks"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"OBJECT GET SHORTCUT"})," command returns the keyboard shortcut associated with the object(s) designated by the ",(0,r.jsx)(n.em,{children:"object"})," and ",(0,r.jsx)(n.em,{children:"*"})," parameters for the current process."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,r.jsx)(n.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"key"})," parameter returns the character associated with the key (in the case of a standard key) or a string enclosed in brackets designating the key (in the case of a function key). You can compare this value with the constants of the ",(0,r.jsx)(n.em,{children:"Shortcut and Associated Keys"})," theme (see the ",(0,r.jsx)(n.a,{href:"/docs/commands/object-set-shortcut",children:"OBJECT SET SHORTCUT"})," command)."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.em,{children:"modifiers"})," parameter returns a value indicating the modifier key(s) associated with the shortcut. If there are several modifier keys combined, the command returns the sum of their values. You can compare the value returned with the following constants of the ",(0,r.jsx)(n.em,{children:"Events (Modifiers)"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command key mask"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"256"}),(0,r.jsx)(n.td,{children:"Ctrl key under Windows, Command key under macOS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Control key mask"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4096"}),(0,r.jsx)(n.td,{children:"Ctrl key under macOS, or right click under Windows and macOS"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Option key mask"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2048"}),(0,r.jsx)(n.td,{children:"Alt key (also called Option under macOS)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Shift key mask"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"512"}),(0,r.jsx)(n.td,{children:"Windows and macOS"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If there are no modifier keys for the shortcut, ",(0,r.jsx)(n.em,{children:"modifiers"})," returns 0."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," If the ",(0,r.jsx)(n.em,{children:"object"}),' parameter designates several objects in the form that have different settings, the command returns "" in ',(0,r.jsx)(n.em,{children:"key"})," and 0 in ",(0,r.jsx)(n.em,{children:"modifiers"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/commands/object-set-shortcut",children:"OBJECT SET SHORTCUT"})}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1186"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);