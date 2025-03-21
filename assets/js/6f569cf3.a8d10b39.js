"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18282"],{416943:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>s,assets:()=>o,toc:()=>a,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/listbox-set-row-font-style","title":"LISTBOX SET ROW FONT STYLE","description":"LISTBOX SET ROW FONT STYLE ( { ;} object ; row ; style* )","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-set-row-font-style.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-row-font-style","permalink":"/docs/20-R7/commands/listbox-set-row-font-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-row-font-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-row-font-style","title":"LISTBOX SET ROW FONT STYLE","slug":"/commands/listbox-set-row-font-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET ROW COLOR","permalink":"/docs/20-R7/commands/listbox-set-row-color"},"next":{"title":"LISTBOX SET ROW HEIGHT","permalink":"/docs/20-R7/commands/listbox-set-row-height"}}'),r=t("785893"),i=t("250065");let l={id:"listbox-set-row-font-style",title:"LISTBOX SET ROW FONT STYLE",slug:"/commands/listbox-set-row-font-style",displayed_sidebar:"docs"},d=void 0,o={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"LISTBOX SET ROW FONT STYLE"})," ( {* ;} ",(0,r.jsx)(n.em,{children:"object"})," ; ",(0,r.jsx)(n.em,{children:"row"})," ; ",(0,r.jsx)(n.em,{children:"style"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Parameter"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Description"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"*"}),(0,r.jsx)(n.td,{children:"Operator"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"If specified, object is an object name (string) If omitted, object is a variable"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"any"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsxs)(n.td,{children:["Object name (if * is specified) or",(0,r.jsx)(n.br,{}),"Variable (if * is omitted)"]})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"row"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Row number"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"style"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Font style"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," This command only works with array type list boxes."]}),"\n",(0,r.jsxs)(n.p,{children:["The ",(0,r.jsx)(n.strong,{children:"LISTBOX SET ROW FONT STYLE"})," command sets a font style for a row or a cell in the array type list box designated by the ",(0,r.jsx)(n.em,{children:"object"})," and ",(0,r.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,r.jsxs)(n.p,{children:["Passing the optional ",(0,r.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,r.jsx)(n.em,{children:"object"})," parameter is a is a variable. In this case, you pass a variable reference instead of a string."]}),"\n",(0,r.jsxs)(n.p,{children:["You can designate a list box or a list box column in the ",(0,r.jsx)(n.em,{children:"object"})," parameter:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["When ",(0,r.jsx)(n.em,{children:"object"})," designates a list box, the command applies to the row."]}),"\n",(0,r.jsxs)(n.li,{children:["When ",(0,r.jsx)(n.em,{children:"object"})," designates a list box column, the command applies to the cell located at the column/row intersection."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"row"}),", pass the number of the row where you want to apply the new style."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," The command does not take any hidden/shown states of the list box rows into account."]}),"\n",(0,r.jsxs)(n.p,{children:["In ",(0,r.jsx)(n.em,{children:"style"}),", you pass a style value. You must use one (or a combination) of the constants found in the ",(0,r.jsx)(n.em,{children:"Font Styles"})," theme:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constant"}),(0,r.jsx)(n.th,{children:"Type"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bold"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Italic"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Plain"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Underline"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["If an array of font styles has been associated with the list box or column, only the element matching the row is modified. In other words, executing the command has the same effect, in this case, as modifying an element of the font style array.",(0,r.jsx)(n.br,{}),"\nIf there is no font style array associated with the list box or column, one will be created dynamically when this command is called. You can access them using the ",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-get-array",children:"LISTBOX Get array"})," command."]}),"\n",(0,r.jsxs)(n.p,{children:["If conflicting style properties are set for the column or the list box, an order of priority is applied. For more information, refer to the ",(0,r.jsx)(n.em,{children:"Design Reference"})," manual."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Note:"})," Since style arrays for columns take priority over the ones for list boxes, when this command is applied to a list box, it will only have an effect if no style array has been assigned to the columns."]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"Given an array type list box with the following characteristics:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["a font style array associated with the list box (",(0,r.jsx)(n.em,{children:"ArrGlobalStyle"}),")"]}),"\n",(0,r.jsxs)(n.li,{children:["a font style array associated with column 5 (",(0,r.jsx)(n.em,{children:"ArrCol5Style"}),")"]}),"\n",(0,r.jsx)(n.li,{children:"the other columns do not have any style arrays."}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROW FONT STYLE(*;"Col5";3;Bold)\n\xa0\xa0// equivalent to ArrCol5Style{3}:=Bold\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(537820).Z+"",width:"361",height:"122"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0LISTBOX SET ROW FONT STYLE(*;"List Box";3;Italic+Underline)\n\xa0\xa0// equivalent toArrGlobalStyle{3}:=Italic+Underline\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(994873).Z+"",width:"361",height:"122"})}),"\n",(0,r.jsx)(n.p,{children:"After the second statement, all the cells of the third row change to underlined italic, except for the one in the 5th column which stays in bold only (column style arrays take priority over list box arrays)."}),"\n",(0,r.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-get-row-font-style",children:"LISTBOX Get row font style"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/20-R7/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})]}),"\n",(0,r.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Command number"}),(0,r.jsx)(n.td,{children:"1268"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread safe"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},537820:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAWkAAAB6CAIAAADyLDWYAAAEbklEQVR42u3cz04bVxTAYU/Fk1SAqqhP4D5BXAllQ7fZwTJ+iO66gWXYZYsVKVIk+wnKE3TVsGPpBygsKjozdjEmf9p71My91/0+KZFtsPRjJI7GY3ya2dv3z777dgSQYq/9d3h4mDsjzf39fdM0uSs0l0jzYLrZsbe3lzsjzWw2Oz4+zl2huUSaB3B3d7dcLr/JnQFUyewAIswOIMLsACLMDiDi8exYnDY/nF//yycmffPXo1mz5jycdwAhs7fv73snDw+dzLv7H87Gm/vdnfHZh+7x+cloPB4/+eZhXV5eatasOVfz7e3tzc3NZnasilZtW7fnJ/2t9pG2cfX/k2/Odqw1a9Y8vNXs+MxflF7//tvo6uKgma4H24vR6Pnr+bummbTVz3OdI32ZZs2aB/SFv0ZvC1+XkJhCs2bNA/nMtdL9w+9HFz9vXcNdnE5G7fnSaHK6yB2tWbPm/B5d7+heP3WeXqdpHzl7uE7zcMVm65uzvT7UrFlz/mul1Xh8rGuhWfPONK9mh7/vACLMDiDC7AAizA4goumulf75R+4MoBpHR0fL5dL7LJo1a07jfRYgzuwAIswOIMLsACLMDiDCvlLNmjVHOO8AQuwr1axZcxL7SjVr1hxhX2kBNGuuttm+0uw0a66y2b5SzZqLVH6zfaWaNWtOYl+pZs1FqK7Z52iBOLMDiDA7gAizA4iwrxRIY1+pZs1FqK7Z+yxAnNkBRJgdQITZAUSYHUCEfaWad7W5D2mayGdOw0/8D4qrOc7OO9hZi3cXAz/x/8W+Us072TzfRH/qI+198fqB/qsPtz/xRMd5m32lmne7eT0+/v7N6u89/p3sbq9utbX9Vzc/1qC/ktUdZ/tKC6B5MKvXIReTZuvlyP6rN2eXB9PpwaSbHG9e7efO3Cj+ONtXmp3mIXS/if2Jxa8lzYd/UvRxtq9U8842HzzbXBPY//Gn9s7V9Jd14eK8/wmuz19Or9qRMm9fu1xNX65/qsdPzKb842xfqeZdbd5cMP04uw9dfXkTv2nefqLjvM2+Us2ai1Bds8/RAnFmBxBhdgARZgcQYV8pkMa+Us2ai1Bds/dZgDizA4gwO4AIswOIMDuACPtKNWvWHOG8Awixr1SzZs1J7CvVrFlzhH2lBdCsudpm+0qz06y5ymb7SjVrLlL5zfaVatasOYl9pZo1F6G6Zp+jBeLMDiDC7AAizA4gwr5SII19pZo1F6G6Zu+zAHFmBxBhdgARZgcQYXYAEfaVatasOcJ5BxBiX6lmzZqT2FeqWbPmCPtKC6BZc7XN9pVmp1lzlc32lWrWXKTym+0r1axZcxL7SjVrLkJ1zT5HC8SZHUCE2QFEmB1AhH2lQBr7SjVrLkJ1zd5nAeLMDiDC7AAizA4gwuwAIuwr1axZc4TzDiDEvlLNmjUnsa9Us2bNEfaVFkCz5mqb7SvNTrPmKpvtK9WsuUjlN9tXqlmz5iT2lWrWXITqmn2OFogzO4AIswOIMDuACPtKgTSrfaV/AYrZWz8jO3dFAAAAAElFTkSuQmCC"},994873:function(e,n,t){t.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return l}});var s=t(667294);let r={},i=s.createContext(r);function l(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);