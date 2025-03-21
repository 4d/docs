"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88244"],{658454:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/listbox-collapse","title":"LISTBOX COLLAPSE","description":"LISTBOX COLLAPSE ( { ;} object {; recursive {; selector {; line {; column*}}}} )","source":"@site/versioned_docs/version-20-R8/commands-legacy/listbox-collapse.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-collapse","permalink":"/docs/commands/listbox-collapse","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-collapse.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-collapse","title":"LISTBOX COLLAPSE","slug":"/commands/listbox-collapse","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"List Box","permalink":"/docs/commands/theme/List-Box"},"next":{"title":"LISTBOX DELETE COLUMN","permalink":"/docs/commands/listbox-delete-column"}}'),l=s("785893"),r=s("250065");let i={id:"listbox-collapse",title:"LISTBOX COLLAPSE",slug:"/commands/listbox-collapse",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX COLLAPSE"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"object"})," {; ",(0,l.jsx)(n.em,{children:"recursive"})," {; ",(0,l.jsx)(n.em,{children:"selector"})," {; ",(0,l.jsx)(n.em,{children:"line"})," {; ",(0,l.jsx)(n.em,{children:"column"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Parameter"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Description"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Operator"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,l.jsx)(n.br,{}),"If omitted, object is a variable"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"object"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,l.jsx)(n.br,{}),"Variable (if * is omitted)"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"recursive"}),(0,l.jsx)(n.td,{children:"Boolean"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsxs)(n.td,{children:["True = collapse sublevels",(0,l.jsx)(n.br,{}),"False = do not collapse sublevels"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"selector"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Part of list box to collapse"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"line"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsxs)(n.td,{children:["Number of break row to collapse or ",(0,l.jsx)(n.br,{}),"Number of list box level to collapse"]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"column"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Number of break column to collapse"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,l.jsxs)(n.p,{children:["The LISTBOX COLLAPSE command is used to collapse the break rows of the list box object designated by the ",(0,l.jsx)(n.em,{children:"object"})," and ",(0,l.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,l.jsxs)(n.p,{children:["If you pass the optional ",(0,l.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,l.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,l.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,l.jsxs)(n.p,{children:["If the list box is not configured in hierarchical mode, the command does nothing. For more information about hierarchical list boxes, please refer to the ",(0,l.jsx)(n.em,{children:"Hierarchical list boxes"})," section."]}),"\n",(0,l.jsxs)(n.p,{children:["The optional ",(0,l.jsx)(n.em,{children:"recursive"})," parameter is used to configure the collapsing of the hierarchical sublevels of the list box. Pass True or omit this parameter for the command to collapse all the levels and all the sublevels. If you pass False, only the first level will be collapsed."]}),"\n",(0,l.jsxs)(n.p,{children:["The optional ",(0,l.jsx)(n.em,{children:"selector"})," parameter is used to specify the scope of the command. You can pass one of the following constants, found in the ",(0,l.jsx)(n.em,{children:"List Box"})," theme, in this parameter:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Constant"}),(0,l.jsx)(n.th,{children:"Type"}),(0,l.jsx)(n.th,{children:"Value"}),(0,l.jsx)(n.th,{children:"Comment"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk all"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"0"}),(0,l.jsx)(n.td,{children:"The command affects all sub-levels (default value, used when parameter is omitted)."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk selection"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"1"}),(0,l.jsx)(n.td,{children:"The command affects selected sub-levels."})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk break row"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"2"}),(0,l.jsxs)(n.td,{children:['The command affects the sub-level to which the "cell" designated by the ',(0,l.jsx)(n.em,{children:"row"})," and ",(0,l.jsx)(n.em,{children:"column"})," parameters belongs. Note that these parameters represent the row and column numbers in the list box in standard mode and not in its hierarchical representation. If the ",(0,l.jsx)(n.em,{children:"row"})," and ",(0,l.jsx)(n.em,{children:"column"})," parameters are omitted, the command does nothing."]})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"lk level"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"3"}),(0,l.jsxs)(n.td,{children:["The command affects all the break rows corresponding to the ",(0,l.jsx)(n.em,{children:"level"})," column. This parameter designates a column number in the list box in standard mode and not in its hierarchical representation. If the ",(0,l.jsx)(n.em,{children:"level"})," parameter is omitted, the command does nothing."]})]})]})]}),"\n",(0,l.jsx)(n.p,{children:"If the selection or list box does not contain a break row or if all the break rows are already collapsed, the command does nothing."}),"\n",(0,l.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,l.jsx)(n.p,{children:"This example collapses the first level of the break rows of the selection in the list box:"}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX COLLAPSE(*;"MyListbox";False;lk selection)\n'})}),"\n",(0,l.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/commands/listbox-expand",children:"LISTBOX EXPAND"})}),"\n",(0,l.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Command number"}),(0,l.jsx)(n.td,{children:"1101"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Thread safe"}),(0,l.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let l={},r=t.createContext(l);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);