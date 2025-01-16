"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48197"],{567998:function(e,t,n){n.r(t),n.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/listbox-get-footer-calculation","title":"LISTBOX Get footer calculation","description":"LISTBOX Get footer calculation ( { ;} object* ) : Integer","source":"@site/versioned_docs/version-20-R8/commands-legacy/listbox-get-footer-calculation.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-footer-calculation","permalink":"/docs/commands/listbox-get-footer-calculation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-footer-calculation.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-footer-calculation","title":"LISTBOX Get footer calculation","slug":"/commands/listbox-get-footer-calculation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get column width","permalink":"/docs/commands/listbox-get-column-width"},"next":{"title":"LISTBOX Get footers height","permalink":"/docs/commands/listbox-get-footers-height"}}'),o=n("785893"),i=n("250065");let r={id:"listbox-get-footer-calculation",title:"LISTBOX Get footer calculation",slug:"/commands/listbox-get-footer-calculation",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function d(e){let t={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"LISTBOX Get footer calculation"})," ( {* ;} ",(0,o.jsx)(t.em,{children:"object"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Parameter"}),(0,o.jsx)(t.th,{children:"Type"}),(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{children:"Description"})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"*"}),(0,o.jsx)(t.td,{children:"Operator"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"object"}),(0,o.jsx)(t.td,{children:"any"}),(0,o.jsx)(t.td,{children:"\u2192"}),(0,o.jsx)(t.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Function result"}),(0,o.jsx)(t.td,{children:"Integer"}),(0,o.jsx)(t.td,{children:"\u2190"}),(0,o.jsx)(t.td,{children:"Type of calculation"})]})]})]}),"\n",(0,o.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.strong,{children:"LISTBOX Get footer calculation"})," command returns the type of calculation associated with the footer area of the list box designated by the ",(0,o.jsx)(t.em,{children:"object"})," and ",(0,o.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,o.jsxs)(t.p,{children:["If you pass the optional ",(0,o.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,o.jsx)(t.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,o.jsx)(t.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,o.jsxs)(t.p,{children:["The ",(0,o.jsx)(t.em,{children:"object"})," parameter can designate:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"the variable or name of a footer area. In this case, the command returns the calculation associated with this area."}),"\n",(0,o.jsx)(t.li,{children:"the variable or name of a list box column. In this case, the command returns the calculation associated with footer area of this column."}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["You can compare the value returned with the constants of the ",(0,o.jsx)(t.em,{children:"Listbox Footer Calculation"})," theme (see the ",(0,o.jsx)(t.a,{href:"/docs/commands/listbox-set-footer-calculation",children:"LISTBOX SET FOOTER CALCULATION"})," command)."]}),"\n",(0,o.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.a,{href:"/docs/commands/listbox-set-footer-calculation",children:"LISTBOX SET FOOTER CALCULATION"})}),"\n",(0,o.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{}),(0,o.jsx)(t.th,{})]})}),(0,o.jsxs)(t.tbody,{children:[(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Command number"}),(0,o.jsx)(t.td,{children:"1150"})]}),(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"Thread safe"}),(0,o.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return c},a:function(){return r}});var s=n(667294);let o={},i=s.createContext(o);function r(e){let t=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);