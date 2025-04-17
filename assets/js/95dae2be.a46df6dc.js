"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57231"],{763668:function(e,t,n){n.r(t),n.d(t,{default:()=>a,frontMatter:()=>o,metadata:()=>s,assets:()=>h,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-get-footers-height","title":"LISTBOX Get footers height","description":"LISTBOX Get footers height ( { ;} object {; unit*} ) : Integer","source":"@site/versioned_docs/version-20-R9/commands-legacy/listbox-get-footers-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-footers-height","permalink":"/docs/commands/listbox-get-footers-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-footers-height.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-get-footers-height","title":"LISTBOX Get footers height","slug":"/commands/listbox-get-footers-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get footer calculation","permalink":"/docs/commands/listbox-get-footer-calculation"},"next":{"title":"LISTBOX GET GRID","permalink":"/docs/commands/listbox-get-grid"}}'),i=n("785893"),r=n("250065");let o={id:"listbox-get-footers-height",title:"LISTBOX Get footers height",slug:"/commands/listbox-get-footers-height",displayed_sidebar:"docs"},d=void 0,h={},l=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let t={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"LISTBOX Get footers height"})," ( {* ;} ",(0,i.jsx)(t.em,{children:"object"})," {; ",(0,i.jsx)(t.em,{children:"unit"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Parameter"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{children:"Description"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"*"}),(0,i.jsx)(t.td,{children:"Operator"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"If specified, object is an object name (string)If omitted, object is a variable"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"object"}),(0,i.jsx)(t.td,{children:"any"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Object Name (if * is specified) or Variable (if * is omitted)"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"unit"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2192"}),(0,i.jsx)(t.td,{children:"Unit of height value: 0 or omitted = pixels, 1 = lines"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Function result"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"\u2190"}),(0,i.jsx)(t.td,{children:"Row height"})]})]})]}),"\n",(0,i.jsx)(t.h2,{id:"description",children:"Description"}),"\n",(0,i.jsxs)(t.p,{children:["The ",(0,i.jsx)(t.strong,{children:"LISTBOX Get footers height"})," command returns the height of the footer row in the list box designated by the ",(0,i.jsx)(t.em,{children:"object"})," and ",(0,i.jsx)(t.em,{children:"*"})," parameters."]}),"\n",(0,i.jsxs)(t.p,{children:["If you pass the optional ",(0,i.jsx)(t.em,{children:"*"})," parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," parameter is an object name (a string). If you do not pass this parameter, this indicates that the ",(0,i.jsx)(t.em,{children:"object"})," is a variable. In this case, you pass a variable reference instead of a string. You can designate either the list box or any footer of the list box."]}),"\n",(0,i.jsxs)(t.p,{children:["By default, if you omit the ",(0,i.jsx)(t.em,{children:"unit"})," parameter, the height of the row returned is expressed in pixels. To set a different unit, you can pass one of the following constants (found in the ",(0,i.jsx)(t.em,{children:"List Box"})," theme), in the ",(0,i.jsx)(t.em,{children:"unit"})," parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{children:"Constant"}),(0,i.jsx)(t.th,{children:"Type"}),(0,i.jsx)(t.th,{children:"Value"}),(0,i.jsx)(t.th,{children:"Comment"})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"lk lines"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"1"}),(0,i.jsx)(t.td,{children:"Height is expressed as a number of lines. 4D calculates the height of a line according to the font."})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"lk pixels"}),(0,i.jsx)(t.td,{children:"Integer"}),(0,i.jsx)(t.td,{children:"0"}),(0,i.jsx)(t.td,{children:"Height is expressed as a number of pixels (default)."})]})]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Note:"})," For more information about calculating the height of rows, refer to the ",(0,i.jsx)(t.em,{children:"Design Reference"})," manual."]}),"\n",(0,i.jsx)(t.h2,{id:"see-also",children:"See also"}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/docs/commands/listbox-set-footers-height",children:"LISTBOX SET FOOTERS HEIGHT"})}),"\n",(0,i.jsx)(t.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(t.table,{children:[(0,i.jsx)(t.thead,{children:(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.th,{}),(0,i.jsx)(t.th,{})]})}),(0,i.jsxs)(t.tbody,{children:[(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Command number"}),(0,i.jsx)(t.td,{children:"1146"})]}),(0,i.jsxs)(t.tr,{children:[(0,i.jsx)(t.td,{children:"Thread safe"}),(0,i.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function a(e={}){let{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,t,n){n.d(t,{Z:function(){return d},a:function(){return o}});var s=n(667294);let i={},r=s.createContext(i);function o(e){let t=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);