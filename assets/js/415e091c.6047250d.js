"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85297"],{812380:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/object-get-vertical-alignment","title":"OBJECT Get vertical alignment","description":"OBJECT Get vertical alignment ( { ;} object* ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/object-get-vertical-alignment.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-vertical-alignment","permalink":"/docs/commands/object-get-vertical-alignment","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-vertical-alignment.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-vertical-alignment","title":"OBJECT Get vertical alignment","slug":"/commands/object-get-vertical-alignment","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get value","permalink":"/docs/commands/object-get-value"},"next":{"title":"OBJECT Get visible","permalink":"/docs/commands/object-get-visible"}}'),i=t("785893"),r=t("250065");let l={id:"object-get-vertical-alignment",title:"OBJECT Get vertical alignment",slug:"/commands/object-get-vertical-alignment",displayed_sidebar:"docs"},c=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function o(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT Get vertical alignment"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Function result"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Type of alignment"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"OBJECT Get vertical alignment"})," command returns a value indicating the type of vertical alignment applied to the object designated by the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,i.jsx)(n.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," If you apply this command to a set of objects, only the alignment value for the last object is returned."]}),"\n",(0,i.jsxs)(n.p,{children:["The value returned corresponds to one of the following constants, found in the ",(0,i.jsx)(n.em,{children:"Form Objects (Properties)"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constant"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{children:"Value"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align bottom"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"4"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align center"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"3"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Align top"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:"Vertical alignment can be applied to the following types of form objects:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"list boxes,"}),"\n",(0,i.jsx)(n.li,{children:"list box columns,"}),"\n",(0,i.jsx)(n.li,{children:"list box headers and footers."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/commands/object-get-horizontal-alignment",children:"OBJECT Get horizontal alignment"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-horizontal-alignment",children:"OBJECT SET HORIZONTAL ALIGNMENT"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/commands/object-set-vertical-alignment",children:"OBJECT SET VERTICAL ALIGNMENT"})]}),"\n",(0,i.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Command number"}),(0,i.jsx)(n.td,{children:"1188"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Thread safe"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return l}});var s=t(667294);let i={},r=s.createContext(i);function l(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);