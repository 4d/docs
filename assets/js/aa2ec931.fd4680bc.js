"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81624"],{440703:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/listbox-set-property","title":"LISTBOX SET PROPERTY","description":"LISTBOX SET PROPERTY ( { ;} object ; property ; value* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/listbox-set-property.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-property","permalink":"/docs/commands/listbox-set-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-property.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-set-property","title":"LISTBOX SET PROPERTY","slug":"/commands/listbox-set-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET LOCKED COLUMNS","permalink":"/docs/commands/listbox-set-locked-columns"},"next":{"title":"LISTBOX SET ROW COLOR","permalink":"/docs/commands/listbox-set-row-color"}}'),t=n("785893"),l=n("250065");let i={id:"listbox-set-property",title:"LISTBOX SET PROPERTY",slug:"/commands/listbox-set-property",displayed_sidebar:"docs"},o=void 0,d={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function x(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"LISTBOX SET PROPERTY"})," ( {* ;} ",(0,t.jsx)(s.em,{children:"object"})," ; ",(0,t.jsx)(s.em,{children:"property"})," ; ",(0,t.jsx)(s.em,{children:"value"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Parameter"}),(0,t.jsx)(s.th,{children:"Type"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Description"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"*"}),(0,t.jsx)(s.td,{children:"Operator"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"If specified, object is an object name (string). If omitted, object is a variable."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"object"}),(0,t.jsx)(s.td,{children:"any"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Object name (if * is specified) or Variable (if * is omitted)"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"property"}),(0,t.jsx)(s.td,{children:"Integer"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"List box or column property"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"value"}),(0,t.jsx)(s.td,{children:"Integer, Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Value of property"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"description",children:"Description"}),"\n",(0,t.jsxs)(s.p,{children:["The ",(0,t.jsx)(s.strong,{children:"LISTBOX SET PROPERTY"})," command sets the ",(0,t.jsx)(s.em,{children:"value"})," for the ",(0,t.jsx)(s.em,{children:"property"})," of the list box or list box column specified using the ",(0,t.jsx)(s.em,{children:"object"})," and ",(0,t.jsx)(s.em,{children:"*"})," parameters."]}),"\n",(0,t.jsxs)(s.p,{children:["If you pass the optional ",(0,t.jsx)(s.em,{children:"*"})," parameter, you indicate that the ",(0,t.jsx)(s.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,t.jsx)(s.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," If the list box or list box column specified using the ",(0,t.jsx)(s.em,{children:"object"})," and ",(0,t.jsx)(s.em,{children:"*"})," parameters does not exist, the command does nothing and no error is triggered."]}),"\n",(0,t.jsxs)(s.p,{children:["In the ",(0,t.jsx)(s.em,{children:"property"})," and ",(0,t.jsx)(s.em,{children:"value"})," parameters, you indicate, respectively, the property to set and its new value. You can use the following constants found in the \u201C",(0,t.jsx)(s.em,{children:"List Box"}),"\u201D theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Constant"}),(0,t.jsx)(s.th,{children:"Value"}),(0,t.jsx)(s.th,{children:"Comment"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk allow wordwrap"}),(0,t.jsx)(s.td,{children:"14"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Wordwrap"})," property",(0,t.jsx)(s.br,{}),"Applies to: Column*",(0,t.jsx)(s.br,{}),"Possible values:",(0,t.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk auto row height"}),(0,t.jsx)(s.td,{children:"31"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Automatic row height"})," property for array type list box",(0,t.jsx)(s.br,{}),"Applies to: List box or column",(0,t.jsx)(s.br,{}),"Possible values: lk no (0) lk yes (1)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk background color expression"}),(0,t.jsx)(s.td,{children:"22"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Background Color Expression"})," property for record selection, collection or entity selection type list boxes",(0,t.jsx)(s.br,{}),"Applies to: List box or column"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk cell horizontal padding"}),(0,t.jsx)(s.td,{children:"36"}),(0,t.jsxs)(s.td,{children:["Cell horizontal padding in pixels (same value for left and right padding)",(0,t.jsx)(s.br,{}),"Applies to: List box, column, header, footer"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk cell vertical padding"}),(0,t.jsx)(s.td,{children:"37"}),(0,t.jsxs)(s.td,{children:["Cell vertical padding in pixels (same value for top and bottom padding)",(0,t.jsx)(s.br,{}),"Applies to: List box, column, header, footer"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk column max width"}),(0,t.jsx)(s.td,{children:"26"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Maximum Width"})," property",(0,t.jsx)(s.br,{}),"Applies to: Column*"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk column min width"}),(0,t.jsx)(s.td,{children:"25"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Minimum Width"})," property",(0,t.jsx)(s.br,{}),"Applies to: Column*"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk column resizable"}),(0,t.jsx)(s.td,{children:"15"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Resizable"})," property",(0,t.jsx)(s.br,{}),"Applies to: Column*",(0,t.jsx)(s.br,{}),"Possible values:",(0,t.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk detail form name"}),(0,t.jsx)(s.td,{children:"19"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Detail Form Name"})," property for selection type list box",(0,t.jsx)(s.br,{}),"Applies to: List box"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk display footer"}),(0,t.jsx)(s.td,{children:"8"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Display Footers"})," property",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values:",(0,t.jsx)(s.br,{}),"lk no (0): hiddenlk yes (1): shown"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk display header"}),(0,t.jsx)(s.td,{children:"0"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Display Headers"})," property",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values:",(0,t.jsx)(s.br,{}),"lk no (0): hiddenlk yes (1): shown"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk display type"}),(0,t.jsx)(s.td,{children:"21"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Display Type"})," property for numeric columns",(0,t.jsx)(s.br,{}),"Applies to: Column*",(0,t.jsx)(s.br,{}),"Possible values:**",(0,t.jsx)(s.br,{}),"**lk numeric format (0): displays values in numeric formatlk three states checkbox (1): displays values as three-state checkboxes"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk double click on row"}),(0,t.jsx)(s.td,{children:"18"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Double-click on row"})," property for selection type list box",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values:**",(0,t.jsx)(s.br,{}),"**lk do nothing (0): does not trigger any automatic actionlk edit record (1): displays corresponding record in read-write modelk display record (2): displays corresponding record in read-only mode"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk extra rows"}),(0,t.jsx)(s.td,{children:"13"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Hide extra blank rows"})," property",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values:**",(0,t.jsx)(s.br,{}),"**lk display (0)lk hide (1)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk font color expression"}),(0,t.jsx)(s.td,{children:"23"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Font Color Expression"})," property for record selection, collection or entity selection type list boxes",(0,t.jsx)(s.br,{}),"Applies to: List box or column"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk font style expression"}),(0,t.jsx)(s.td,{children:"24"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Style Expression"})," property for record selection, collection or entity selection type list boxes",(0,t.jsx)(s.br,{}),"Applies to: List box or column"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk hide selection highlight"}),(0,t.jsx)(s.td,{children:"16"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Hide selection highlight"})," property",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values:**",(0,t.jsx)(s.br,{}),"**lk no (0)lk yes (1)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk highlight set"}),(0,t.jsx)(s.td,{children:"27"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Highlight Set"})," property for selection type list box",(0,t.jsx)(s.br,{}),"Applies to: List box"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk hor scrollbar height"}),(0,t.jsx)(s.td,{children:"3"}),(0,t.jsx)(s.td,{children:"Height in pixels"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk meta expression"}),(0,t.jsx)(s.td,{children:"34"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Meta Info Expression"})," property for collection or entity selection type list boxes",(0,t.jsx)(s.br,{}),"Applies to: List box"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk movable rows"}),(0,t.jsx)(s.td,{children:"35"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Movable Rows"})," property for array type list box ",(0,t.jsx)(s.br,{}),"Applies to: List box (excluding hierarchical mode) ",(0,t.jsx)(s.br,{}),"Possible values: lk no (0): Rows cannot be moved at runtime lk yes (1): Rows can be moved at runtime (default)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk multi style"}),(0,t.jsx)(s.td,{children:"30"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Multi-style"})," property ",(0,t.jsx)(s.br,{}),"Applies to: Column*",(0,t.jsx)(s.br,{}),"Possible values:",(0,t.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk named selection"}),(0,t.jsx)(s.td,{children:"28"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Named Selection"})," property for selection type list box",(0,t.jsx)(s.br,{}),"Applies to: List box"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk resizing mode"}),(0,t.jsx)(s.td,{children:"11"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Column Auto-Resizing"})," property",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values:",(0,t.jsx)(s.br,{}),"lk manual (0)lk automatic (2)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk row height unit"}),(0,t.jsx)(s.td,{children:"17"}),(0,t.jsxs)(s.td,{children:["Unit of ",(0,t.jsx)(s.strong,{children:"Row Height"})," property ",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values:**",(0,t.jsx)(s.br,{}),"**lk lines (1)",(0,t.jsx)(s.br,{}),"lk pixels (0)",(0,t.jsx)(s.br,{})]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk selection mode"}),(0,t.jsx)(s.td,{children:"10"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Selection Mode"})," property",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values: **",(0,t.jsx)(s.br,{}),"**lk none (0)",(0,t.jsx)(s.br,{}),"lk single (1)",(0,t.jsx)(s.br,{}),"lk multiple (2)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk single click edit"}),(0,t.jsx)(s.td,{children:"29"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Single-Click Edit"})," property",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values:",(0,t.jsx)(s.br,{}),"lk no (0)lk yes (1)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk sortable"}),(0,t.jsx)(s.td,{children:"20"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Sortable"})," property",(0,t.jsx)(s.br,{}),"Applies to: List box",(0,t.jsx)(s.br,{}),"Possible values:**",(0,t.jsx)(s.br,{}),"**lk no (0)lk yes (1)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk truncate"}),(0,t.jsx)(s.td,{children:"12"}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.strong,{children:"Truncate with ellipsis"})," property",(0,t.jsx)(s.br,{}),"Applies to: List box or column",(0,t.jsx)(s.br,{}),"Possible values:**",(0,t.jsx)(s.br,{}),"**lk without ellipsis (0)lk with ellipsis (1)"]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"lk ver scrollbar width"}),(0,t.jsx)(s.td,{children:"5"}),(0,t.jsx)(s.td,{children:"Width in pixels"})]})]})]}),"\n",(0,t.jsxs)(s.p,{children:["*These properties can only be applied to list box columns; however, if you pass a list box as parameter, ",(0,t.jsx)(s.strong,{children:"LISTBOX SET PROPERTY"})," applies the ",(0,t.jsx)(s.em,{children:"property"})," to each column of the list box."]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Note:"})," If you pass a ",(0,t.jsx)(s.em,{children:"property"})," that does not exist, or that is not available for the specified list box or column, for example lk font style expression in the case of an array type list box, the command does nothing and no error is triggered."]}),"\n",(0,t.jsx)(s.h4,{id:"example-1",children:"Example 1"}),"\n",(0,t.jsx)(s.p,{children:'You want to make all columns of the "MyListbox" list box resizable:'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0LISTBOX SET PROPERTY(*;"MyListbox";lk column resizable;lk yes)\xa0//All columns of the "MyListbox" list box are set as resizable\n'})}),"\n",(0,t.jsx)(s.h4,{id:"example-2",children:"Example 2"}),"\n",(0,t.jsx)(s.p,{children:'You want to set a maximum width for the column whose name is "ProductNumber":'}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-4d",children:'\xa0LISTBOX SET PROPERTY(*;"ProductNumber";lk column max width;200)\xa0//This column will have a maximum width of 200\n'})}),"\n",(0,t.jsx)(s.h4,{id:"see-also",children:"See also"}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.em,{children:"List Box"}),(0,t.jsx)(s.br,{}),"\n",(0,t.jsx)(s.a,{href:"/docs/commands/listbox-get-property",children:"LISTBOX Get property"})]}),"\n",(0,t.jsx)(s.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Command number"}),(0,t.jsx)(s.td,{children:"1440"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread safe"}),(0,t.jsx)(s.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:s}={...(0,l.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(x,{...e})}):x(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return o},a:function(){return i}});var r=n(667294);let t={},l=r.createContext(t);function i(e){let s=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);