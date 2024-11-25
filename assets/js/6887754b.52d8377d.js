"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96633"],{951243:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>l,frontMatter:()=>r});var s=JSON.parse('{"id":"commands-legacy/listbox-set-column-width","title":"LISTBOX SET COLUMN WIDTH","description":"LISTBOX SET COLUMN WIDTH ( { ;} object ; width {; minWidth {; maxWidth*}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-set-column-width.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-column-width","permalink":"/docs/commands/listbox-set-column-width","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-column-width.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-column-width","title":"LISTBOX SET COLUMN WIDTH","slug":"/commands/listbox-set-column-width","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET COLUMN FORMULA","permalink":"/docs/commands/listbox-set-column-formula"},"next":{"title":"LISTBOX SET FOOTER CALCULATION","permalink":"/docs/commands/listbox-set-footer-calculation"}}'),i=t("785893"),d=t("250065");let r={id:"listbox-set-column-width",title:"LISTBOX SET COLUMN WIDTH",slug:"/commands/listbox-set-column-width",displayed_sidebar:"docs"},o=void 0,c={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX SET COLUMN WIDTH"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"object"})," ; ",(0,i.jsx)(n.em,{children:"width"})," {; ",(0,i.jsx)(n.em,{children:"minWidth"})," {; ",(0,i.jsx)(n.em,{children:"maxWidth"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Parameter"}),(0,i.jsx)(n.th,{children:"Type"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operator"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"width"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Column width (in pixels)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"minWidth"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Minimum column width (in pixels)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"maxWidth"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Maximum column width (in pixels)"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,i.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.strong,{children:"LISTBOX SET COLUMN WIDTH"})," command allows you to modify through programming the width of one or all column(s) of the object (list box, column or header) set using the ",(0,i.jsx)(n.em,{children:"object"})," and ",(0,i.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(n.p,{children:["If you pass the optional ",(0,i.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, you indicate that the ",(0,i.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,i.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,i.jsxs)(n.p,{children:["Pass the new width (in pixels) of the object in the ",(0,i.jsx)(n.em,{children:"width"})," parameter."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"object"})," sets the list box object, all columns of the list box are resized."]}),"\n",(0,i.jsxs)(n.p,{children:["If ",(0,i.jsx)(n.em,{children:"object"})," sets a column or a column header, only the column set is resized."]}),"\n",(0,i.jsxs)(n.p,{children:["The optional ",(0,i.jsx)(n.em,{children:"minWidth"})," and ",(0,i.jsx)(n.em,{children:"maxWidth"})," parameters can be used to set limits for the manual resizing of the column You can pass, respectively, the minimum and maximum width expressed in pixels in the ",(0,i.jsx)(n.em,{children:"minWidth"})," and ",(0,i.jsx)(n.em,{children:"maxWidth"})," parameters. If you want users to be unable to resize the column, you can pass the same value in ",(0,i.jsx)(n.em,{children:"width"}),", ",(0,i.jsx)(n.em,{children:"minWidth"})," and ",(0,i.jsx)(n.em,{children:"maxWidth"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/commands/listbox-get-column-width",children:"LISTBOX Get column width"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return r}});var s=t(667294);let i={},d=s.createContext(i);function r(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);