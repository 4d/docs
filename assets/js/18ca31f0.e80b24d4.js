"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95063"],{589442:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>d});var s=JSON.parse('{"id":"Concepts/boolean","title":"Boolean","description":"A boolean field, variable or expression can be either TRUE or FALSE.","source":"@site/versioned_docs/version-20-R9/Concepts/dt_boolean.md","sourceDirName":"Concepts","slug":"/Concepts/boolean","permalink":"/docs/Concepts/boolean","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"boolean","title":"Boolean"},"sidebar":"docs","previous":{"title":"BLOB","permalink":"/docs/Concepts/blob"},"next":{"title":"Collection","permalink":"/docs/Concepts/collection"}}'),r=t("785893"),l=t("250065");let o={id:"boolean",title:"Boolean"},d=void 0,i={},c=[{value:"Boolean functions",id:"boolean-functions",level:2},{value:"Example",id:"example",level:3},{value:"Logical operators",id:"logical-operators",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"A boolean field, variable or expression can be either TRUE or FALSE."}),"\n",(0,r.jsx)(n.h2,{id:"boolean-functions",children:"Boolean functions"}),"\n",(0,r.jsxs)(n.p,{children:["4D provides the Boolean functions ",(0,r.jsx)(n.code,{children:"True"}),", ",(0,r.jsx)(n.code,{children:"False"}),", and ",(0,r.jsx)(n.code,{children:"Not"})," in the dedicated ",(0,r.jsx)(n.strong,{children:"Boolean"})," theme. For more information, see the descriptions of these commands."]}),"\n",(0,r.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.p,{children:"This example sets a Boolean variable based on the value of a button. It returns True in myBoolean if the myButton button was clicked and False if the button was not clicked. When a button is clicked, the button variable is set to 1."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" If(myButton=1) //If the button was clicked\n    myBoolean:=True //myBoolean is set to True\n Else //If the button was not clicked,\n    myBoolean:=False //myBoolean is set to False\n End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"The previous example can be simplified into one line."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"myBoolean:=(myButton=1)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"logical-operators",children:"Logical operators"}),"\n",(0,r.jsx)(n.p,{children:"4D supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns TRUE if both expressions are TRUE. A logical OR returns TRUE if at least one of the expressions is TRUE. The following table shows the logical operators:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operation"}),(0,r.jsx)(n.th,{children:"Syntax"}),(0,r.jsx)(n.th,{children:"Returns"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Value"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AND"}),(0,r.jsx)(n.td,{children:"Boolean & Boolean"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'("A" = "A") & (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") & (15 # 3)'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") & (15 = 3)'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OR"}),(0,r.jsx)(n.td,{children:"Boolean  | Boolean"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'("A" = "A") | (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") |  (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") |  (15 = 3)'}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The following is the truth table for the AND logical operator:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Expr1 & Expr2"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"The following is the truth table for the OR logical operator:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Expr1 | Expr2"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tip:"})," If you need to calculate the exclusive disjunction between Expr1 and Expr2, evaluate:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["In boolean contexts, the 4D language also supports ",(0,r.jsx)(n.a,{href:"/docs/Concepts/operators#short-circuit-operators",children:"short-circuit operators"})," (",(0,r.jsx)(n.code,{children:"&&"})," and ",(0,r.jsx)(n.code,{children:"||"}),") and the ",(0,r.jsx)(n.a,{href:"/docs/Concepts/operators#truthy-and-falsy",children:"truthy and falsy"})," concept."]}),"\n"]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return d},a:function(){return o}});var s=t(667294);let r={},l=s.createContext(r);function o(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);