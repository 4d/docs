"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11403"],{420852:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>s,assets:()=>d,toc:()=>c,contentTitle:()=>h});var s=JSON.parse('{"id":"commands-legacy/listbox-get-row-height","title":"LISTBOX Get row height","description":"LISTBOX Get row height ( { ;} object ; row* ) : Integer","source":"@site/versioned_docs/version-20-R9/commands-legacy/listbox-get-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-row-height","permalink":"/docs/commands/listbox-get-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-row-height.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-get-row-height","title":"LISTBOX Get row height","slug":"/commands/listbox-get-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get row font style","permalink":"/docs/commands/listbox-get-row-font-style"},"next":{"title":"LISTBOX Get rows height","permalink":"/docs/commands/listbox-get-rows-height"}}'),i=n("785893"),r=n("250065");let o={id:"listbox-get-row-height",title:"LISTBOX Get row height",slug:"/commands/listbox-get-row-height",displayed_sidebar:"docs"},h=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function l(e){let t={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"LISTBOX Get row height"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," ; ",(0,i.jsx)(t.em,{children:"row"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"row"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"List box row whose height you want to get"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Row height"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"LISTBOX Get row height"})," command returns the current height of the specified ",(0,i.jsx)(t.em,{children:"row"})," in the list box object designated using the ",(0,i.jsx)(t.em,{children:"object"})," and ",(0,i.jsx)(t.em,{children:"*"})," parameters. Row height can be set globally using the Property List or the ",(0,i.jsx)(t.a,{href:"/docs/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," command, or individually by means of the ",(0,i.jsx)(t.a,{href:"/docs/commands/listbox-set-row-height",children:"LISTBOX SET ROW HEIGHT"})," command."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,i.jsx)(t.em,{children:"Object Properties"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:["If the specified ",(0,i.jsx)(t.em,{children:"row"})," does not exist in the list box, the command returns 0 (zero)."]}),"\n",(0,i.jsx)(t.p,{children:"The returned height value is expressed:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["in the current unit defined globally for the list box rows either in the Property list or by a prior call to the ",(0,i.jsx)(t.a,{href:"/docs/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," command when the row height is fixed,"]}),"\n",(0,i.jsxs)(t.li,{children:["in pixels when the row height is variable, i.e. set to automatic (see ",(0,i.jsx)(t.em,{children:"Automatic Row Height"}),") or handled by an array."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"/docs/commands/listbox-get-auto-row-height",children:"LISTBOX Get auto row height"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/listbox-get-rows-height",children:"LISTBOX Get rows height"}),(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.a,{href:"/docs/commands/listbox-set-row-height",children:"LISTBOX SET ROW HEIGHT"})]}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1408"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return h},a:function(){return o}});var s=n(667294);let i={},r=s.createContext(i);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function h(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);