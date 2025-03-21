"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30726"],{461577:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>l});var r=JSON.parse('{"id":"commands-legacy/listbox-set-grid-color","title":"LISTBOX SET GRID COLOR","description":"LISTBOX SET GRID COLOR ( { ;} object ; color ; horizontal ; vertical* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/listbox-set-grid-color.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-grid-color","permalink":"/docs/commands/listbox-set-grid-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-grid-color.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-grid-color","title":"LISTBOX SET GRID COLOR","slug":"/commands/listbox-set-grid-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET GRID","permalink":"/docs/commands/listbox-set-grid"},"next":{"title":"LISTBOX SET HEADERS HEIGHT","permalink":"/docs/commands/listbox-set-headers-height"}}'),t=s("785893"),i=s("250065");let o={id:"listbox-set-grid-color",title:"LISTBOX SET GRID COLOR",slug:"/commands/listbox-set-grid-color",displayed_sidebar:"docs"},l=void 0,d={},c=[{value:"Description",id:"description",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"LISTBOX SET GRID COLOR"})," ( {* ;} ",(0,t.jsx)(n.em,{children:"object"})," ; ",(0,t.jsx)(n.em,{children:"color"})," ; ",(0,t.jsx)(n.em,{children:"horizontal"})," ; ",(0,t.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Parameter"}),(0,t.jsx)(n.th,{children:"Type"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Description"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operator"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"any"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"color"}),(0,t.jsx)(n.td,{children:"Text, Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"RGB color value"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"horizontal"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Use color for horizontal grid lines"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"vertical"}),(0,t.jsx)(n.td,{children:"Boolean"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Use color for vertical grid lines"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.strong,{children:"LISTBOX SET GRID COLOR"})," command allows you to modify the color of the grid in the list box object set using the ",(0,t.jsx)(n.em,{children:"object"})," and ",(0,t.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,t.jsxs)(n.p,{children:["If you pass the optional ",(0,t.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,t.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,t.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. For more information about object names, refer to the ",(0,t.jsx)(n.em,{children:"Object Properties"})," section."]}),"\n",(0,t.jsxs)(n.p,{children:["Pass the RGB color value in ",(0,t.jsx)(n.em,{children:"color"}),". For more information on RGB colors, refer to the description of the ",(0,t.jsx)(n.a,{href:"/docs/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})," command."]}),"\n",(0,t.jsxs)(n.p,{children:["The ",(0,t.jsx)(n.em,{children:"horizontal"})," and ",(0,t.jsx)(n.em,{children:"vertical"})," parameters allow you to set the grid lines to which you will apply a color:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["If you pass ",(0,t.jsx)(n.strong,{children:"True"})," in ",(0,t.jsx)(n.em,{children:"horizontal"}),", the color will be applied to horizontal grid lines. If you pass ",(0,t.jsx)(n.strong,{children:"False"}),", their color is not changed."]}),"\n",(0,t.jsxs)(n.li,{children:["If you pass ",(0,t.jsx)(n.strong,{children:"True"})," in ",(0,t.jsx)(n.em,{children:"vertical"}),", the color will be applied to vertical grid lines. If you pass ",(0,t.jsx)(n.strong,{children:"False"}),", their color is not changed."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/commands/listbox-get-grid-colors",children:"LISTBOX GET GRID COLORS"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})]}),"\n",(0,t.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Command number"}),(0,t.jsx)(n.td,{children:"842"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread safe"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return l},a:function(){return o}});var r=s(667294);let t={},i=r.createContext(t);function o(e){let n=r.useContext(i);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);