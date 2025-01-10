"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["82981"],{981655:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>i,assets:()=>o,toc:()=>l,contentTitle:()=>c});var i=JSON.parse('{"id":"commands-legacy/listbox-get-column-width","title":"LISTBOX Get column width","description":"LISTBOX Get column width ( { ;} object {; minWidth {; maxWidth*}} )  : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-get-column-width.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-column-width","permalink":"/docs/commands/listbox-get-column-width","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-column-width.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-column-width","title":"LISTBOX Get column width","slug":"/commands/listbox-get-column-width","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get column formula","permalink":"/docs/commands/listbox-get-column-formula"},"next":{"title":"LISTBOX Get footer calculation","permalink":"/docs/commands/listbox-get-footer-calculation"}}'),s=t("785893"),r=t("250065");let d={id:"listbox-get-column-width",title:"LISTBOX Get column width",slug:"/commands/listbox-get-column-width",displayed_sidebar:"docs"},c=void 0,o={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX Get column width"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," {; ",(0,s.jsx)(n.em,{children:"minWidth"})," {; ",(0,s.jsx)(n.em,{children:"maxWidth"}),"}} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"minWidth"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Minimum column width (in pixels)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"maxWidth"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Maximum column width (in pixels)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Column width (in pixels)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"LISTBOX Get column width"})," command returns the width (in pixels) of the column set in the ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters. You can pass either a list box column or a column header in the ",(0,s.jsx)(n.em,{children:"object"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["If you pass the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,s.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX Get column width"})," can return the resizing limits of the column in the ",(0,s.jsx)(n.em,{children:"minWidth"})," and ",(0,s.jsx)(n.em,{children:"maxWidth"})," parameters. These limits can be specified via the ",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-set-column-width",children:"LISTBOX SET COLUMN WIDTH"})," command.",(0,s.jsx)(n.br,{}),"\nIf no minimum and/or maximum value has been set for the column, the corresponding parameter returns 0."]}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/listbox-set-column-width",children:"LISTBOX SET COLUMN WIDTH"})}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"834"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return d}});var i=t(667294);let s={},r=i.createContext(s);function d(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);