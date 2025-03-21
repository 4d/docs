"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89596"],{926549:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>i,assets:()=>d,toc:()=>a,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/is-nil-pointer","title":"Is nil pointer","description":"Is nil pointer ( aPointer ) : Boolean","source":"@site/versioned_docs/version-20-R8/commands-legacy/is-nil-pointer.md","sourceDirName":"commands-legacy","slug":"/commands/is-nil-pointer","permalink":"/docs/commands/is-nil-pointer","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-nil-pointer.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-nil-pointer","title":"Is nil pointer","slug":"/commands/is-nil-pointer","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is a variable","permalink":"/docs/commands/is-a-variable"},"next":{"title":"Null","permalink":"/docs/commands/null"}}'),s=t("785893"),r=t("250065");let l={id:"is-nil-pointer",title:"Is nil pointer",slug:"/commands/is-nil-pointer",displayed_sidebar:"docs"},o=void 0,d={},a=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2},{value:"See also",id:"see-also",level:2},{value:"Properties",id:"properties",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Is nil pointer"})," ( ",(0,s.jsx)(n.em,{children:"aPointer"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Parameter"}),(0,s.jsx)(n.th,{children:"Type"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"aPointer"}),(0,s.jsx)(n.td,{children:"Pointer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Pointer to be tested"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Function result"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"TRUE = Nil pointer (->[]) FALSE = Valid pointer to an existing object"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.strong,{children:"Is nil pointer"})," command returns True if the pointer you pass in ",(0,s.jsx)(n.em,{children:"aPointer"})," is Nil (",(0,s.jsx)(n.em,{children:"->[]"}),"). It returns False in all other cases (pointer to field, table or variable)."]}),"\n",(0,s.jsxs)(n.p,{children:["If you want to find out the name of the variable or the number of the field that is being pointed to, you can use the ",(0,s.jsx)(n.a,{href:"/docs/commands/resolve-pointer",children:"RESOLVE POINTER"})," command."]}),"\n",(0,s.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0var $ptr : Pointer\n\xa0...\n\xa0If(Is nil pointer($ptr))\n\xa0End if\n\xa0\xa0// is equivalent to\n\xa0If($ptr=Null)\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h2,{id:"see-also",children:"See also"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/commands/is-a-variable",children:"Is a variable"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/commands/resolve-pointer",children:"RESOLVE POINTER"})]}),"\n",(0,s.jsx)(n.h2,{id:"properties",children:"Properties"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Command number"}),(0,s.jsx)(n.td,{children:"315"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread safe"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return l}});var i=t(667294);let s={},r=i.createContext(s);function l(e){let n=i.useContext(r);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),i.createElement(r.Provider,{value:n},e.children)}}}]);