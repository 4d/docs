"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53309"],{32448:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/object-get-drag-and-drop-options","title":"OBJECT GET DRAG AND DROP OPTIONS","description":"OBJECT GET DRAG AND DROP OPTIONS ( { ;} object ; draggable ; automaticDrag ; droppable ; automaticDrop* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-get-drag-and-drop-options.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-drag-and-drop-options","permalink":"/docs/commands/object-get-drag-and-drop-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-drag-and-drop-options.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-drag-and-drop-options","title":"OBJECT GET DRAG AND DROP OPTIONS","slug":"/commands/object-get-drag-and-drop-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get data source","permalink":"/docs/commands/object-get-data-source"},"next":{"title":"OBJECT Get enabled","permalink":"/docs/commands/object-get-enabled"}}'),s=t("785893"),d=t("250065");let o={id:"object-get-drag-and-drop-options",title:"OBJECT GET DRAG AND DROP OPTIONS",slug:"/commands/object-get-drag-and-drop-options",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT GET DRAG AND DROP OPTIONS"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"draggable"})," ; ",(0,s.jsx)(n.em,{children:"automaticDrag"})," ; ",(0,s.jsx)(n.em,{children:"droppable"})," ; ",(0,s.jsx)(n.em,{children:"automaticDrop"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"draggable"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Draggable = True; otherwise, False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"automaticDrag"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Automatic Drag = True; otherwise, False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"droppable"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Droppable = True; otherwise, False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"automaticDrop"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Automatic Drop = True; otherwise, False"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"OBJECT GET DRAG AND DROP OPTIONS"})," command returns the drag and drop options for the object(s) designated by the ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters for the current process."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,s.jsx)(n.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,s.jsxs)(n.p,{children:["The command returns the current drag and drop options, as set in Design mode or for the current process using the ",(0,s.jsx)(n.a,{href:"/docs/commands/object-set-drag-and-drop-options",children:"OBJECT SET DRAG AND DROP OPTIONS"})," command."]}),"\n",(0,s.jsx)(n.p,{children:"Each parameter returns True or False according to whether the corresponding option is enabled or disabled:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"draggable"})," = True: Object draggable in programmed mode."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"automaticDrag"})," = True (only used with text fields and variables, combo boxes and list boxes): Object draggable in automatic mode."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"droppable"})," = True: Object accepts drops in programmed mode."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"automaticDrop"})," = True (only used with picture fields and variables, text, combo boxes and list boxes): Object accepts drops in automatic mode."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/object-set-drag-and-drop-options",children:"OBJECT SET DRAG AND DROP OPTIONS"})}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1184"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var r=t(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);