"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["31853"],{630482:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/listbox-get-array","title":"LISTBOX Get array","description":"LISTBOX Get array ( { ;} object ; arrType* ) : Pointer","source":"@site/versioned_docs/version-20-R7/commands-legacy/listbox-get-array.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-array","permalink":"/docs/commands/listbox-get-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-array","title":"LISTBOX Get array","slug":"/commands/listbox-get-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX EXPAND","permalink":"/docs/commands/listbox-expand"},"next":{"title":"LISTBOX GET ARRAYS","permalink":"/docs/commands/listbox-get-arrays"}}'),s=r("785893"),i=r("250065");let a={id:"listbox-get-array",title:"LISTBOX Get array",slug:"/commands/listbox-get-array",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Description",id:"description",level:4},{value:"Example",id:"example",level:4},{value:"See also",id:"see-also",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"LISTBOX Get array"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"object"})," ; ",(0,s.jsx)(n.em,{children:"arrType"})," ) : Pointer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operator"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["If specified, object is an object name (string)",(0,s.jsx)(n.br,{}),"If omitted, object is a variable"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"object"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Object name (if * is specified) or",(0,s.jsx)(n.br,{}),"Variable (if * is omitted)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrType"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Type of array"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Pointer to array associated with property"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"This command is not thread-safe, it cannot be used in preemptive code."})}),"\n",(0,s.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Note:"})," This command only works with array type list boxes."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"LISTBOX Get array"})," command returns a pointer to the ",(0,s.jsx)(n.em,{children:"arrType"})," array of the list box or list box column designated by the ",(0,s.jsx)(n.em,{children:"object"})," and ",(0,s.jsx)(n.em,{children:"*"})," parameters."]}),"\n",(0,s.jsxs)(n.p,{children:["Style, color, background color or row control arrays can be associated with array type list boxes or (except for row control arrays) with the columns of array type list boxes, using the Property list in Design mode or using the ",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})," command."]}),"\n",(0,s.jsxs)(n.p,{children:["Passing the optional ",(0,s.jsx)(n.em,{children:"*"})," parameter indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is an object name (string). If you do not pass this parameter, it indicates that the ",(0,s.jsx)(n.em,{children:"object"})," parameter is a variable. In this case, you pass a variable reference instead of a string. You can designate a list box or a list box column in the ",(0,s.jsx)(n.em,{children:"object"})," parameter."]}),"\n",(0,s.jsxs)(n.p,{children:["In ",(0,s.jsx)(n.em,{children:"arrType"}),', pass the type of array for the property you want to get. You can use one of the following constants, available in the "',(0,s.jsx)(n.em,{children:"List Box"}),'" theme:']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constant"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk background color array"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk control array"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"3"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk font color array"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk row height array"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lk style array"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"The command returns one of the following values:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/is-nil-pointer",children:"Is nil pointer"})," if no array for the requested property is associated with the column or the list box."]}),"\n",(0,s.jsx)(n.li,{children:"a pointer to the array of the requested property, defined by the user."}),"\n",(0,s.jsxs)(n.li,{children:["a pointer to the array of the requested property, defined dynamically when calling the ",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-set-row-color",children:"LISTBOX SET ROW COLOR"})," or ",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-set-row-font-style",children:"LISTBOX SET ROW FONT STYLE"})," command."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"Typical examples of use:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0vPtr:=LISTBOX Get array(*;"MyLB";lk font color array)\n\xa0\xa0// returns a pointer to the font color array\n\xa0\xa0// associated with the "MyLB" list box\n\xa0\n\xa0vPtr:=LISTBOX Get array(*;"Col4";lk style array)\n\xa0\xa0// returns a pointer to the font style array\n\xa0\xa0// associated with the columns of the "Col4" list box\n'})}),"\n",(0,s.jsx)(n.h4,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/listbox-get-arrays",children:"LISTBOX GET ARRAYS"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/listbox-set-array",children:"LISTBOX SET ARRAY"})]})]})}function h(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return a}});var t=r(667294);let s={},i=t.createContext(s);function a(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);