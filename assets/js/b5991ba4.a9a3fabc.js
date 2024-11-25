"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25447"],{551650:function(e,n,t){t.r(n),t.d(n,{metadata:()=>o,contentTitle:()=>r,default:()=>m,assets:()=>d,toc:()=>l,frontMatter:()=>c});var o=JSON.parse('{"id":"commands-legacy/listbox-move-column","title":"LISTBOX MOVE COLUMN","description":"LISTBOX MOVE COLUMN ( { ;} object ; colPosition* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-move-column.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-move-column","permalink":"/docs/commands/listbox-move-column","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-move-column.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-move-column","title":"LISTBOX MOVE COLUMN","slug":"/commands/listbox-move-column","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX INSERT ROWS","permalink":"/docs/commands/listbox-insert-rows"},"next":{"title":"LISTBOX MOVED COLUMN NUMBER","permalink":"/docs/commands/listbox-moved-column-number"}}'),s=t("785893"),i=t("250065");let c={id:"listbox-move-column",title:"LISTBOX MOVE COLUMN",slug:"/commands/listbox-move-column",displayed_sidebar:"docs"},r=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX MOVE COLUMN"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"colPosition"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Object name (if * is specified) or",(0,s.jsx)(n.br,{}),"Variable (if * is omitted) of the column to be moved"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colPosition"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"New location of column"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"LISTBOX MOVE COLUMN"})," command moves the column designated by the ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters by programming in the context of the form being executed (Application mode). The original form, generated in the Design mode, is not modified."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters designate the column to move. Passing the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a column name (string). If you do not pass this parameter, this indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a column variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,s.jsxs)(n.p,{children:["The column is moved to just in front of the one designated by the ",(0,s.jsx)(n.em,{children:"colPosition"})," parameter. If the ",(0,s.jsx)(n.em,{children:"colPosition"})," parameter is greater than the total number of columns, then the column is moved to just after the last column."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command does nothing when it is applied to the first column of a list box displayed in hierarchical mode."]}),"\n",(0,s.jsx)(n.p,{children:"The command takes the static and locked column properties into account: for example, if you try to move a static column, the command does nothing."}),"\n",(0,s.jsx)(n.p,{children:"This functionality was already found in 4D in Application mode: the user can move non-static columns using the mouse. However, unlike columns moved by the user, this command does not generate the On Column Moved event."}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"You want to swap the 2nd and 3rd columns of the list box:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX MOVE COLUMN(*;"column2";3)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/commands/listbox-duplicate-column",children:"LISTBOX DUPLICATE COLUMN"})})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return c}});var o=t(667294);let s={},i=o.createContext(s);function c(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);