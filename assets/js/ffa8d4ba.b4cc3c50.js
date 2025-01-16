"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67991"],{410532:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>o,assets:()=>c,toc:()=>d,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/listbox-get-row-color-as-number","title":"LISTBOX Get row color as number","description":"LISTBOX Get row color as number ( { ;} object ; row {; colorType*} )  : Integer","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-get-row-color-as-number.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-row-color-as-number","permalink":"/docs/20-R7/commands/listbox-get-row-color-as-number","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-row-color-as-number.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-row-color-as-number","title":"LISTBOX Get row color as number","slug":"/commands/listbox-get-row-color-as-number","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get row color","permalink":"/docs/20-R7/commands/listbox-get-row-color"},"next":{"title":"LISTBOX Get row font style","permalink":"/docs/20-R7/commands/listbox-get-row-font-style"}}'),s=r("785893"),t=r("250065");let l={id:"listbox-get-row-color-as-number",title:"LISTBOX Get row color as number",slug:"/commands/listbox-get-row-color-as-number",displayed_sidebar:"docs"},i=void 0,c={},d=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4},{value:"Properties",id:"properties",level:4}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX Get row color as number"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"row"})," {; ",(0,s.jsx)(n.em,{children:"colorType"}),"} )  : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,s.jsx)(n.br,{}),"If omitted, object is a variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Object name (if * is specified) or",(0,s.jsx)(n.br,{}),"Variable (if * is omitted)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"row"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Row number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colorType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"List box font color (default) or list box background color"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Color value"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command only works with array type list boxes."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"LISTBOX Get row color as number"})," command returns the color of a row or a cell in the list box designated by the ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters as a number in 0x00rrggbb format."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," If you want to get the color as a CSS string, you need to use the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-get-row-color",children:"LISTBOX Get row color"})," command. For more information on color formats, please refer to the ",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})," command description."]}),"\n",(0,s.jsxs)(n.p,{children:["Passing the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. You can designate a list box or a list box column in the ",(0,s.jsx)(n.em,{children:"object"})," parameter:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.em,{children:"object"})," designates a list box, the command returns the color of the row."]}),"\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.em,{children:"object"})," designates a list box column, the command returns the color of the cell."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"row"}),", pass the number of the row whose color you want to get."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The command does not take any hidden/visible states of the list box rows into account."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"colorType"}),' parameter, you can pass either the lk background color or lk font color constant ("',(0,s.jsx)(n.em,{children:"List Box"}),'" theme) in order to find out the background or font color for the row. If you omit this parameter, the font color is returned.']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Warning:"})," a color assigned to a row is not necessarily displayed in every cell of the row (see example). If conflicting color values are set using properties for list boxes or list box columns, an order of priority is applied. For more information, refer to the ",(0,s.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Given the following list box:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(960124).Z+"",width:"363",height:"122"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0var $vLColor;$vLColor2;$vLColor3 : Integer\n\xa0$vLColor:=LISTBOX Get row color as number(*;"Col5";3)\n\xa0$vLColor2:=LISTBOX Get row color as number(*;"List Box";3)\n\xa0$vLColor3:=LISTBOX Get row color as number(*;"List Box";3;lk background color)\n\xa0\xa0// $vLColor contains 0xFFFF00 (yellow)\n\xa0\xa0// $vLColor2 contains 0x00FF (blue)\n\xa0\xa0// $vLColor3 contains 0x00FF0000 (red)\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"List Box"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-get-row-color",children:"LISTBOX Get row color"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})]}),"\n",(0,s.jsx)(n.h4,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"1271"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},960124:function(e,n,r){r.d(n,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var o=r(667294);let s={},t=o.createContext(s);function l(e){let n=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),o.createElement(t.Provider,{value:n},e.children)}}}]);