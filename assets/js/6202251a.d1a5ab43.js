"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["40203"],{457189:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>i,assets:()=>l,toc:()=>c,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/listbox-get-print-information","title":"LISTBOX GET PRINT INFORMATION","description":"LISTBOX GET PRINT INFORMATION ( { ;} object ; selector ; info* )","source":"@site/versioned_docs/version-20-R8/commands-legacy/listbox-get-print-information.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-print-information","permalink":"/docs/commands/listbox-get-print-information","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-print-information.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-print-information","title":"LISTBOX GET PRINT INFORMATION","slug":"/commands/listbox-get-print-information","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX GET OBJECTS","permalink":"/docs/commands/listbox-get-objects"},"next":{"title":"LISTBOX Get property","permalink":"/docs/commands/listbox-get-property"}}'),r=t("785893"),s=t("250065");let o={id:"listbox-get-print-information",title:"LISTBOX GET PRINT INFORMATION",slug:"/commands/listbox-get-print-information",displayed_sidebar:"docs"},d=void 0,l={},c=[{value:"Description",id:"description",level:4},{value:"Example 1",id:"example-1",level:4},{value:"Example 2",id:"example-2",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX GET PRINT INFORMATION"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"selector"})," ; ",(0,r.jsx)(n.em,{children:"info"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,r.jsx)(n.br,{}),"If omitted, object is a variable"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Object name (if * is specified) or ",(0,r.jsx)(n.br,{}),"Variable (if * is omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"selector"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Information to get"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Current value"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"LISTBOX GET PRINT INFORMATION"})," command returns the current information relative to the printing of the list box object designated by the ",(0,r.jsx)(n.em,{children:"object"})," and ",(0,r.jsx)(n.em,{children:"*"})," parameters. This command can be used to control the printing of the list box contents."]}),"\n",(0,r.jsxs)(n.p,{children:["If you pass the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter, you indicate that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, you indicate that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,r.jsxs)(n.p,{children:["This command must be called in the context of the printing of a list box via the ",(0,r.jsx)(n.a,{href:"/docs/commands/print-object",children:"Print object"})," command. Outside of this context, it will not return significant values."]}),"\n",(0,r.jsxs)(n.p,{children:["Pass a value indicating the information you want to find out in ",(0,r.jsx)(n.em,{children:"selector"})," and a variable of the number or BLOB type in ",(0,r.jsx)(n.em,{children:"info"}),". In ",(0,r.jsx)(n.em,{children:"selector"}),', you can pass one of the following constants, found in the "',(0,r.jsx)(n.em,{children:"List Box"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"}),(0,r.jsx)(n.th,{children:"Comment"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk last printed row number"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"}),(0,r.jsxs)(n.td,{children:["Returns in ",(0,r.jsx)(n.em,{children:"info"})," the number of the last row printed. Lets you find out the number of the next row to be printed. ",(0,r.jsx)(n.br,{}),"The number returned may be greater than the number of rows actually printed if the list box contains invisible rows or if the ",(0,r.jsx)(n.a,{href:"/docs/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION"})," command has been called. For example, if rows 1, 18 and 20 have been printed, ",(0,r.jsx)(n.em,{children:"info"})," is 20."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk printed height"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"3"}),(0,r.jsxs)(n.td,{children:["Returns in ",(0,r.jsx)(n.em,{children:"info"}),' the height in pixels of the object actually printed (including headers, lines, etc.). Remember that if the number of rows to print is less than the "capacity" of the list box, its height is automatically reduced.']})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk printed rows"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"}),(0,r.jsxs)(n.td,{children:["Returns in ",(0,r.jsx)(n.em,{children:"info"})," the number of rows actually printed during the last call to the ",(0,r.jsx)(n.a,{href:"/docs/commands/print-object",children:"Print object"})," command. This number includes any break rows added in the case of a hierarchical list box. For example, ",(0,r.jsx)(n.em,{children:"info"})," is 10 if the list box contains 20 rows and the odd-numbered rows were hidden."]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lk printing is over"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"}),(0,r.jsxs)(n.td,{children:["Returns in ",(0,r.jsx)(n.em,{children:"info"})," a Boolean indicating whether the last (visible) row of the list box has actually been printed. True = row has been printed; Otherwise, False."]})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["For more information about the principles of printing list boxes, please refer to ",(0,r.jsx)(n.em,{children:"Printing list boxes"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"example-1",children:"Example 1"}),"\n",(0,r.jsx)(n.p,{children:"Printing until all the rows have been printed:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0OPEN PRINTING JOB\n\xa0FORM LOAD("SalesForm")\n\xa0\n\xa0$Over:=False\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"mylistbox")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printing is over;$Over)\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0Until($Over)\n\xa0\n\xa0CLOSE PRINTING JOB\n'})}),"\n",(0,r.jsx)(n.h4,{id:"example-2",children:"Example 2"}),"\n",(0,r.jsx)(n.p,{children:"Printing at least 500 rows of the list box, knowing that certain rows are hidden:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0$GlobalPrinted:=0\n\xa0Repeat\n\xa0\xa0\xa0\xa0$Total:=Print object(*;"mylistbox")\n\xa0\xa0\xa0\xa0LISTBOX GET PRINT INFORMATION(*;"mylistbox";lk printed rows;$Printed)\n\xa0\xa0\xa0\xa0$GlobalPrinted:=$GlobalPrinted+$Printed\n\xa0\xa0\xa0\xa0PAGE BREAK\n\xa0Until($GlobalPrinted>=500)\n'})}),"\n",(0,r.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1110"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var i=t(667294);let r={},s=i.createContext(r);function o(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);