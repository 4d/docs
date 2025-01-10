"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93318"],{120834:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>t,assets:()=>c,toc:()=>d,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/listbox-set-locked-columns","title":"LISTBOX SET LOCKED COLUMNS","description":"LISTBOX SET LOCKED COLUMNS ( { ;} object ; numColumns* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-set-locked-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-locked-columns","permalink":"/docs/commands/listbox-set-locked-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-locked-columns.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-locked-columns","title":"LISTBOX SET LOCKED COLUMNS","slug":"/commands/listbox-set-locked-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET HIERARCHY","permalink":"/docs/commands/listbox-set-hierarchy"},"next":{"title":"LISTBOX SET PROPERTY","permalink":"/docs/commands/listbox-set-property"}}'),o=s("785893"),i=s("250065");let l={id:"listbox-set-locked-columns",title:"LISTBOX SET LOCKED COLUMNS",slug:"/commands/listbox-set-locked-columns",displayed_sidebar:"docs"},r=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX SET LOCKED COLUMNS"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"object"})," ; ",(0,o.jsx)(n.em,{children:"numColumns"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operator"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"numColumns"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Number of columns to lock"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"LISTBOX SET LOCKED COLUMNS"})," command locks ",(0,o.jsx)(n.em,{children:"numColumns"})," columns (starting from the first on the left) in the list box designated by the ",(0,o.jsx)(n.em,{children:"object"})," and ",(0,o.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,o.jsxs)(n.p,{children:["Locked columns are shown in the left part of the list box and do not scroll with the rest of the list box columns. For more information, refer to the ",(0,o.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,o.jsxs)(n.p,{children:["If you pass the optional ",(0,o.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,o.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,o.jsx)(n.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,o.jsxs)(n.p,{children:["In ",(0,o.jsx)(n.em,{children:"numColumns"}),", you can pass any value included between 1 and the total number of columns in the list box minus 1. For a list box with X columns, if you pass a value > X-1 in ",(0,o.jsx)(n.em,{children:"numColumns"}),", it will be reduced automatically to the value X-1."]}),"\n",(0,o.jsxs)(n.p,{children:["To remove the column locking, pass 0 or a negative value in ",(0,o.jsx)(n.em,{children:"numColumns"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/commands/listbox-get-locked-columns",children:"LISTBOX Get locked columns"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/commands/listbox-set-static-columns",children:"LISTBOX SET STATIC COLUMNS"})]}),"\n",(0,o.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"1151"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return l}});var t=s(667294);let o={},i=t.createContext(o);function l(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:l(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);