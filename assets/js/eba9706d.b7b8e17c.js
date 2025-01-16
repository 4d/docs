"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80435"],{168921:function(e,t,s){s.r(t),s.d(t,{default:()=>h,frontMatter:()=>r,metadata:()=>i,assets:()=>o,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/set-list-properties","title":"SET LIST PROPERTIES","description":"SET LIST PROPERTIES ( list ; appearance {; icon {; lineHeight {; doubleClick {; multiSelections {; editable}}}}} )","source":"@site/versioned_docs/version-20-R7/commands-legacy/set-list-properties.md","sourceDirName":"commands-legacy","slug":"/commands/set-list-properties","permalink":"/docs/20-R7/commands/set-list-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-list-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-list-properties","title":"SET LIST PROPERTIES","slug":"/commands/set-list-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET LIST ITEM PROPERTIES","permalink":"/docs/20-R7/commands/set-list-item-properties"},"next":{"title":"SORT LIST","permalink":"/docs/20-R7/commands/sort-list"}}'),n=s("785893"),l=s("250065");let r={id:"set-list-properties",title:"SET LIST PROPERTIES",slug:"/commands/set-list-properties",displayed_sidebar:"docs"},d=void 0,o={},c=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let t={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"SET LIST PROPERTIES"})," ( ",(0,n.jsx)(t.em,{children:"list"})," ; ",(0,n.jsx)(t.em,{children:"appearance"})," {; ",(0,n.jsx)(t.em,{children:"icon"})," {; ",(0,n.jsx)(t.em,{children:"lineHeight"})," {; ",(0,n.jsx)(t.em,{children:"doubleClick"})," {; ",(0,n.jsx)(t.em,{children:"multiSelections"})," {; ",(0,n.jsx)(t.em,{children:"editable"}),"}}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{children:"Parameter"}),(0,n.jsx)(t.th,{children:"Type"}),(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{children:"Description"})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"list"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"List reference number"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"appearance"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"*** Deprecated, must always be 0 ***"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"icon"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"*** Deprecated, must always be 0 ***"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"lineHeight"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Minimal line height expressed in pixels"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"doubleClick"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Expand/Collapse sublist on double-click 0 = Yes, 1= No"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"multiSelections"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"Multiple selections: 0 = No (default), 1 = Yes"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"editable"}),(0,n.jsx)(t.td,{children:"Integer"}),(0,n.jsx)(t.td,{children:"\u2192"}),(0,n.jsx)(t.td,{children:"0 = List is not editable by user, 1 = List is editable by user (default)"})]})]})]}),"\n",(0,n.jsx)(t.h4,{id:"description",children:"Description"}),"\n",(0,n.jsxs)(t.p,{children:["The ",(0,n.jsx)(t.strong,{children:"SET LIST PROPERTIES"})," command sets the line height and selection properties of the hierarchical list whose list reference you pass in ",(0,n.jsx)(t.em,{children:"list"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Compatibility note:"})," ",(0,n.jsx)(t.em,{children:"appearance"})," and ",(0,n.jsx)(t.em,{children:"icon"})," parameters are deprecated, you must pass 0 for them."]}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.strong,{children:"Note:"})," If you want to customize the icon of each item in the list, use the command ",(0,n.jsx)(t.a,{href:"/docs/20-R7/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["If you do not pass the parameter ",(0,n.jsx)(t.em,{children:"lineHeight"}),", the line height of a hierarchical list is determined by the font and font size used for the object. You can also pass in the parameter ",(0,n.jsx)(t.em,{children:"lineHeight"})," the minimal line height of the hierarchical list. If the value you pass is greater than the line height derived from the font and font size used, the line height of the hierarchical list will be forced to the value you pass. Pass 0 to set the default height."]}),"\n",(0,n.jsxs)(t.p,{children:["The optional parameter ",(0,n.jsx)(t.em,{children:"doubleClick"})," allows you to define that a double-click on a parent list item will not provoke the sublist to expand or to collapse. By default, a double-click on a parent list item provokes its child list to expand or to collapse. However, some user interfaces may need to deactivate this behavior. To do this, the ",(0,n.jsx)(t.em,{children:"doubleClick"})," parameter should be set to 1.",(0,n.jsx)(t.br,{}),"\nOnly double-click will be deactivated. Users will still be able to expand or collapse sublists by clicking on the list node.",(0,n.jsx)(t.br,{}),"\nIf you omit the ",(0,n.jsx)(t.em,{children:"doubleClick"})," parameter or pass 0, default behavior will be applied."]}),"\n",(0,n.jsxs)(t.p,{children:["The optional ",(0,n.jsx)(t.em,{children:"multiSelections"})," parameter lets you indicate whether the list must accept multiple selections.",(0,n.jsx)(t.br,{}),"\nBy default, as in previous versions of 4D, you cannot simultaneously select several items of a hierarchical list. If you would like this function to be available for the list, pass the value 1 in the ",(0,n.jsx)(t.em,{children:"multiSelections"})," parameter. In that case, multiple selections can be used:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["manually, using the ",(0,n.jsx)(t.strong,{children:"Shift"}),"+",(0,n.jsx)(t.strong,{children:"click"})," key combination for a continuous selection or ",(0,n.jsx)(t.strong,{children:"Ctrl"}),"+",(0,n.jsx)(t.strong,{children:"click"})," (Windows) / ",(0,n.jsx)(t.strong,{children:"Command"}),"+",(0,n.jsx)(t.strong,{children:"click"})," (Mac OS) for a discontinuous selection,"]}),"\n",(0,n.jsxs)(t.li,{children:["by programming, using the ",(0,n.jsx)(t.a,{href:"/docs/20-R7/commands/select-list-items-by-position",children:"SELECT LIST ITEMS BY POSITION"})," and ",(0,n.jsx)(t.a,{href:"/docs/20-R7/commands/select-list-items-by-reference",children:"SELECT LIST ITEMS BY REFERENCE"})," commands.",(0,n.jsx)(t.br,{}),"\nIf you pass 0 or omit the ",(0,n.jsx)(t.em,{children:"multiSelections"})," parameter, the default behavior will be applied."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["The optional ",(0,n.jsx)(t.em,{children:"editable"})," parameter lets you indicate whether the list must be editable by the user when it is displayed as a choice list associated with a field or a variable during data entry. When the list is editable, a ",(0,n.jsx)(t.strong,{children:"Modify"})," button is added in the choice list window and the user can add, delete and sort the values through a specific editor.",(0,n.jsx)(t.br,{}),"\nIf you pass 1 or omit the ",(0,n.jsx)(t.em,{children:"editable"})," parameter, the list will be editable; if you pass 0, it will not be editable."]}),"\n",(0,n.jsx)(t.h4,{id:"example",children:"Example"}),"\n",(0,n.jsx)(t.p,{children:"You want to disallow the expand/collapse sublist on double-click. You can write in the form method:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-4d",children:'\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hlCities:=Load list("Cities")\xa0//load the Cities choice list in the hlCities form object\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET LIST PROPERTIES(hlCities;0;0;0;1)\xa0//disallow double-click to expand/collapse\n\xa0End case\n'})}),"\n",(0,n.jsx)(t.h4,{id:"see-also",children:"See also"}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.a,{href:"/docs/20-R7/commands/get-list-item-properties",children:"GET LIST ITEM PROPERTIES"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/20-R7/commands/get-list-properties",children:"GET LIST PROPERTIES"}),(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"/docs/20-R7/commands/set-list-item-properties",children:"SET LIST ITEM PROPERTIES"})]}),"\n",(0,n.jsx)(t.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(t.table,{children:[(0,n.jsx)(t.thead,{children:(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.th,{}),(0,n.jsx)(t.th,{})]})}),(0,n.jsxs)(t.tbody,{children:[(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Command number"}),(0,n.jsx)(t.td,{children:"387"})]}),(0,n.jsxs)(t.tr,{children:[(0,n.jsx)(t.td,{children:"Thread safe"}),(0,n.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return r}});var i=s(667294);let n={},l=i.createContext(n);function r(e){let t=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:r(e.components),i.createElement(l.Provider,{value:t},e.children)}}}]);