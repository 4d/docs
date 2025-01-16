"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56007"],{571748:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>r,metadata:()=>o,assets:()=>c,toc:()=>a,contentTitle:()=>l});var o=JSON.parse('{"id":"ViewPro/commands/vp-set-sheet-options","title":"VP SET SHEET OPTIONS","description":"VP SET SHEET OPTIONS ( vpAreaName Object { ; sheet : Integer}  )","source":"@site/versioned_docs/version-20-R7/ViewPro/commands/vp-set-sheet-options.md","sourceDirName":"ViewPro/commands","slug":"/ViewPro/commands/vp-set-sheet-options","permalink":"/docs/20-R7/ViewPro/commands/vp-set-sheet-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ViewPro%2Fcommands%2Fvp-set-sheet-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"vp-set-sheet-options","title":"VP SET SHEET OPTIONS"},"sidebar":"docs","previous":{"title":"VP SET SHEET NAME","permalink":"/docs/20-R7/ViewPro/commands/vp-set-sheet-name"},"next":{"title":"VP SET SHOW PRINT LINES","permalink":"/docs/20-R7/ViewPro/commands/vp-set-show-print-lines"}}'),s=t("785893"),i=t("250065");let r={id:"vp-set-sheet-options",title:"VP SET SHEET OPTIONS"},l=void 0,c={},a=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Example 3",id:"example-3",level:4},{value:"Example 4",id:"example-4",level:4},{value:"See also",id:"see-also",level:4}];function d(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"VP SET SHEET OPTIONS"})," ( ",(0,s.jsx)(n.em,{children:"vpAreaName"})," : Text; ",(0,s.jsx)(n.em,{children:"sheetOptions"})," : Object { ; ",(0,s.jsx)(n.em,{children:"sheet"})," : Integer}  )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"vpAreaName"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"4D View Pro area name"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheetOptions"}),(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Sheet option(s) to set"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"sheet"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"->"}),(0,s.jsx)(n.td,{children:"Sheet index (current sheet if omitted)"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"VP SET SHEET OPTIONS"})," command allows defining various sheet options of the ",(0,s.jsx)(n.em,{children:"vpAreaName"})," area."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass the name of the 4D View Pro area in ",(0,s.jsx)(n.em,{children:"vpAreaName"}),". If you pass a name that does not exist, an error is returned."]}),"\n",(0,s.jsxs)(n.p,{children:["Pass an object containing definitions for the options to set in the ",(0,s.jsx)(n.em,{children:"sheetOptions"})," parameter. To view the full list of the available options, see the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/configuring#sheet-options",children:"Sheet Options"})," paragraph."]}),"\n",(0,s.jsxs)(n.p,{children:["In the optional ",(0,s.jsx)(n.em,{children:"sheet"})," parameter, you can designate a specific spreadsheet (counting begins at 0). If omitted, the current spreadsheet is used by default. You can explicitly select the current spreadsheet with the following constant:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.code,{children:"vk current sheet"})}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,s.jsx)(n.p,{children:"You want to protect all cells except the range C5:D10:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'// Activate protection on the current sheet\nvar $options : Object\n  \n$options:=New object\n$options.isProtected:=True\nVP SET SHEET OPTIONS("ViewProArea";$options)\n  \n// mark cells C5:D10 as \'unlocked\'\nVP SET CELL STYLE(VP Cells("ViewProArea";2;4;2;6);New object("locked";False))\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,s.jsx)(n.p,{children:"You need to protect your document while your users can resize rows and columns:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n  \n$options:=New object\n// Activate protection\n$options.isProtected:=True\n$options.protectionOptions:=New object\n// Allow user to resize rows\n$options.protectionOptions.allowResizeRows=True;\n// Allow user to resize columns\n$options.protectionOptions.allowResizeColumns=True;\n    \n// Apply protection on the current sheet\nVP SET SHEET OPTIONS("ViewProArea";$options)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"Example 3"}),"\n",(0,s.jsx)(n.p,{children:"You want to customize the colors of your sheet tabs, frozen lines, grid lines, selection background and selection border:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n   \n$options:=New object\n// Customize color of Sheet 1 tab\n$options.sheetTabColor:="Black"\n$options.gridline:=New object("color";"Purple")\n$options.selectionBackColor:="rgb(255,128,0,0.4)"\n$options.selectionBorderColor:="Yellow"\n$options.frozenlineColor:="Gold"\n   \nVP SET SHEET OPTIONS("ViewProArea";$options;0)\n \n// Customize color of Sheet 2 tab\n$options.sheetTabColor:="red"\n   \nVP SET SHEET OPTIONS("ViewProArea";$options;1)\n \n// Customize color of Sheet 3 tab\n$options.sheetTabColor:="blue"\n  \nVP SET SHEET OPTIONS("ViewProArea";$options;2)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(187210).Z+"",width:"880",height:"274"})}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"Example 4"}),"\n",(0,s.jsx)(n.p,{children:"You want to hide the grid lines as well as the row and column headers."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'var $options : Object\n  \n$options:=New object\n$options.gridline:=New object()\n$options.gridline.showVerticalGridline:=False\n$options.gridline.showHorizontalGridline:=False\n$options.rowHeaderVisible:=False\n$options.colHeaderVisible:=False\n  \nVP SET SHEET OPTIONS("ViewProArea";$options)\n'})}),"\n",(0,s.jsx)(n.p,{children:"Result:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(559515).Z+"",width:"612",height:"422"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/configuring#sheet-options",children:"4D View Pro sheet options"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/ViewPro/commands/vp-get-sheet-options",children:"VP Get sheet options"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},187210:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/cmd_vpSetSheetOptions1-96730ac48f5cd59db7184fac7e74ffe7.PNG"},559515:function(e,n,t){t.d(n,{Z:function(){return o}});let o=t.p+"assets/images/cmd_vpSetSheetOptions2-596c33f630f32c68dc3da440cbd1349f.PNG"},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return r}});var o=t(667294);let s={},i=o.createContext(s);function r(e){let n=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),o.createElement(i.Provider,{value:n},e.children)}}}]);