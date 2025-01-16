"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47047"],{278668:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/object-set-drag-and-drop-options","title":"OBJECT SET DRAG AND DROP OPTIONS","description":"OBJECT SET DRAG AND DROP OPTIONS ( { ;} object ; draggable ; automaticDrag ; droppable ; automaticDrop* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/object-set-drag-and-drop-options.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-drag-and-drop-options","permalink":"/docs/20-R7/commands/object-set-drag-and-drop-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-drag-and-drop-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-drag-and-drop-options","title":"OBJECT SET DRAG AND DROP OPTIONS","slug":"/commands/object-set-drag-and-drop-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET DATA SOURCE","permalink":"/docs/20-R7/commands/object-set-data-source"},"next":{"title":"OBJECT SET ENABLED","permalink":"/docs/20-R7/commands/object-set-enabled"}}'),r=t("785893"),d=t("250065");let i={id:"object-set-drag-and-drop-options",title:"OBJECT SET DRAG AND DROP OPTIONS",slug:"/commands/object-set-drag-and-drop-options",displayed_sidebar:"docs"},a=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"OBJECT SET DRAG AND DROP OPTIONS"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"draggable"})," ; ",(0,r.jsx)(n.em,{children:"automaticDrag"})," ; ",(0,r.jsx)(n.em,{children:"droppable"})," ; ",(0,r.jsx)(n.em,{children:"automaticDrop"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"draggable"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Draggable = True; otherwise, False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"automaticDrag"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Automatic Drag = True; otherwise, False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"droppable"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Droppable = True; otherwise, False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"automaticDrop"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Automatic Drop = True; otherwise, False"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"OBJECT SET DRAG AND DROP OPTIONS"})," command sets or dynamically modifies the drag and drop options for the object(s) designated by the ",(0,r.jsx)(n.em,{children:"object"})," and ",(0,r.jsx)(n.em,{children:"*"})," parameters for the current process."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,r.jsx)(n.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,r.jsx)(n.p,{children:"In each parameter, you pass a Boolean indicating whether the corresponding option is enabled or disabled:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"draggable"})," = True: Object draggable in programmed mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"automaticDrag"})," = True (only used with text fields and variables, combo boxes and list boxes): Object draggable in automatic mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"droppable"})," = True: Object accepts drops in programmed mode."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.em,{children:"automaticDrop"})," = True (only used with picture fields and variables, text, combo boxes and list boxes): Object accepts drops in automatic mode."]}),"\n"]}),"\n",(0,r.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Setting a text area to automatic drag and drop:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OBJECT SET DRAG AND DROP OPTIONS(*;"Comments";False;True;False;True)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/object-get-drag-and-drop-options",children:"OBJECT GET DRAG AND DROP OPTIONS"})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1183"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return a},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);