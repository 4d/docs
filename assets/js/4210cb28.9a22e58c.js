"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35007"],{950626:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","description":"LISTBOX MOVED ROW NUMBER ( { ;} object ; oldPosition ; newPosition* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-moved-row-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-moved-row-number","permalink":"/docs/20-R7/commands/listbox-moved-row-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-moved-row-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-moved-row-number","title":"LISTBOX MOVED ROW NUMBER","slug":"/commands/listbox-moved-row-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX MOVED COLUMN NUMBER","permalink":"/docs/20-R7/commands/listbox-moved-column-number"},"next":{"title":"LISTBOX SELECT BREAK","permalink":"/docs/20-R7/commands/listbox-select-break"}}'),o=t("785893"),r=t("250065");let i={id:"listbox-moved-row-number",title:"LISTBOX MOVED ROW NUMBER",slug:"/commands/listbox-moved-row-number",displayed_sidebar:"docs"},d=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX MOVED ROW NUMBER"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"object"})," ; ",(0,o.jsx)(n.em,{children:"oldPosition"})," ; ",(0,o.jsx)(n.em,{children:"newPosition"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operator"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"oldPosition"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Previous position of the moved row"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"newPosition"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"New position of the moved row"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"LISTBOX MOVED ROW NUMBER"})," command returns two numbers in ",(0,o.jsx)(n.em,{children:"oldPosition"})," and ",(0,o.jsx)(n.em,{children:"newPosition"})," indicating respectively the previous position and the new position of the row moved in the list box, specified by the ",(0,o.jsx)(n.em,{children:"object"})," and ",(0,o.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," You can only move rows in array type list boxes."]}),"\n",(0,o.jsxs)(n.p,{children:["If you pass the optional ",(0,o.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,o.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,o.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,o.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,o.jsxs)(n.p,{children:["This command must be used with the form event On Row Moved (see the ",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/form-event-code",children:"Form event code"})," command)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Note:"})," This command does not take into account any hidden/displayed states of list box rows."]}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/form-event-code",children:"Form event code"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-moved-column-number",children:"LISTBOX MOVED COLUMN NUMBER"})]}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"837"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return i}});var s=t(667294);let o={},r=s.createContext(o);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);