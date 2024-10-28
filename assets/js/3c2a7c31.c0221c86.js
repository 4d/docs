"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21624],{740017:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=o(474848),t=o(28453);const r={id:"listbox-set-row-color",title:"LISTBOX SET ROW COLOR",slug:"/commands/listbox-set-row-color",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/listbox-set-row-color",title:"LISTBOX SET ROW COLOR",description:"LISTBOX SET ROW COLOR ( { ;} object ; row ; color {; colorType*} )",source:"@site/versioned_docs/version-20-R7/commands-legacy/listbox-set-row-color.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-set-row-color",permalink:"/docs/commands/listbox-set-row-color",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-color.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-set-row-color",title:"LISTBOX SET ROW COLOR",slug:"/commands/listbox-set-row-color",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX SET PROPERTY",permalink:"/docs/commands/listbox-set-property"},next:{title:"LISTBOX SET ROW FONT STYLE",permalink:"/docs/commands/listbox-set-row-font-style"}},l={},a=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function d(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX SET ROW COLOR"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"row"})," ; ",(0,s.jsx)(n.em,{children:"color"})," {; ",(0,s.jsx)(n.em,{children:"colorType"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Object name (if * is specified) or",(0,s.jsx)(n.br,{}),"Variable (if * is omitted)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"row"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Row number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"color"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"RGB color value"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"colorType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Listbox font color (default) or listbox background color"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command only works with array type list boxes."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"LISTBOX SET ROW COLOR"})," command sets the color for a row or a cell in the array list box designated by the ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["Passing the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the object parameter is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,s.jsxs)(n.p,{children:["You can designate a list box or a list box column in the ",(0,s.jsx)(n.em,{children:"object"})," parameter:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.em,{children:"object"})," designates a list box, the command applies to the row."]}),"\n",(0,s.jsxs)(n.li,{children:["When ",(0,s.jsx)(n.em,{children:"object"})," designates a list box column, the command applies to the cell located at the column/row intersection."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"row"}),", pass the number of the row where you want to apply the new color."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," The command does not take any hidden/visible states of the list box rows into account."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"color"}),", pass an RGB color value. For more information about RGB colors, refer to the description of the ",(0,s.jsx)(n.a,{href:"/docs/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})," command. If you want the row to inherit the color set for the higher level, you can pass the lk inherited constant in ",(0,s.jsx)(n.em,{children:"color"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In the ",(0,s.jsx)(n.em,{children:"colorType"})," parameter, pass the lk background color or lk font color constants to indicate whether you want to apply the color as the background or the font color of the row. If you omit this parameter, the color is applied as the font color."]}),"\n",(0,s.jsxs)(n.p,{children:["This command modifies values found in the array of colors that may have been defined for the column or list box. If these arrays are not already defined, the command dynamically creates arrays that you can access using the ",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-get-array",children:"LISTBOX Get array"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["If conflicting color values are set using properties for list boxes or list box columns, an order of priority is applied. For more information, refer to the ",(0,s.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"In an array type list box, we want to set colors for a row and for one cell in this row:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// Definition of font color for cell\n\xa0LISTBOX SET ROW COLOR(*;"Col5";3;"yellow")\n\xa0\n\xa0\xa0// Definition of background and font color for row 3\n\xa0LISTBOX SET ROW COLOR(*;"ListBox";3;"red";lk background color)\n\xa0LISTBOX SET ROW COLOR(*;"ListBox";3;"blue")\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:o(190100).A+"",width:"363",height:"122"})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"List Box"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-get-row-color",children:"LISTBOX Get row color"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-get-row-color-as-number",children:"LISTBOX Get row color as number"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},190100:(e,n,o)=>{o.d(n,{A:()=>s});const s="data:image/png;base64,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"},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>c});var s=o(296540);const t={},r=s.createContext(t);function i(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);