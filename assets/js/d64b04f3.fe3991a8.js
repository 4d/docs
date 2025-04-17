"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45505"],{685982:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>d,contentTitle:()=>r});var s=JSON.parse('{"id":"commands-legacy/listbox-get-locked-columns","title":"LISTBOX Get locked columns","description":"LISTBOX Get locked columns ( { ;} object* ) : Integer","source":"@site/versioned_docs/version-20-R9/commands-legacy/listbox-get-locked-columns.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-locked-columns","permalink":"/docs/commands/listbox-get-locked-columns","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-locked-columns.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-get-locked-columns","title":"LISTBOX Get locked columns","slug":"/commands/listbox-get-locked-columns","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET HIERARCHY","permalink":"/docs/commands/listbox-get-hierarchy"},"next":{"title":"LISTBOX Get number of columns","permalink":"/docs/commands/listbox-get-number-of-columns"}}'),o=t("785893"),c=t("250065");let i={id:"listbox-get-locked-columns",title:"LISTBOX Get locked columns",slug:"/commands/listbox-get-locked-columns",displayed_sidebar:"docs"},r=void 0,l={},d=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,c.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX Get locked columns"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"object"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Parameter"}),(0,o.jsx)(n.th,{children:"Type"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Description"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operator"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Function result"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Number of locked columns"})]})]})]}),"\n",(0,o.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.strong,{children:"LISTBOX Get locked columns"})," command returns the number of locked columns in the list box designated by the ",(0,o.jsx)(n.em,{children:"object"})," and ",(0,o.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,o.jsxs)(n.p,{children:["If you pass the optional ",(0,o.jsx)(n.em,{children:"*"})," parameter, this indicates that the ",(0,o.jsx)(n.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,o.jsx)(n.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,o.jsxs)(n.p,{children:["Columns can be locked through the Property List or using the ",(0,o.jsx)(n.a,{href:"/docs/commands/listbox-set-locked-columns",children:"LISTBOX SET LOCKED COLUMNS"})," command. For more information, refer to the ",(0,o.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,o.jsx)(n.p,{children:"If a column is inserted or deleted by programming within the locked area, the number of columns returned by this command takes this change into account. For example, if you delete a locked column, the number of locked columns is decreased by 1. Similarly, if you insert a column by programming into a locked area, this column is locked automatically and the number of locked columns is increased by 1."}),"\n",(0,o.jsx)(n.p,{children:"However, the command does not take into account the visible/invisible status of columns."}),"\n",(0,o.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/commands/listbox-set-locked-columns",children:"LISTBOX SET LOCKED COLUMNS"})}),"\n",(0,o.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Command number"}),(0,o.jsx)(n.td,{children:"1152"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread safe"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return i}});var s=t(667294);let o={},c=s.createContext(o);function i(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);