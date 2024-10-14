"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15824],{627648:(n,e,t)=>{t.r(e),t.d(e,{assets:()=>i,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>c});var s=t(474848),r=t(28453);const o={id:"boolean",title:"Boolean"},l=void 0,d={id:"Concepts/boolean",title:"Boolean",description:"A boolean field, variable or expression can be either TRUE or FALSE.",source:"@site/versioned_docs/version-20-R5/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/20-R5/Concepts/boolean",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/20-R5/Concepts/blob"},next:{title:"Collection",permalink:"/docs/20-R5/Concepts/collection"}},i={},c=[{value:"Boolean functions",id:"boolean-functions",level:2},{value:"Example",id:"example",level:3},{value:"Logical operators",id:"logical-operators",level:2}];function a(n){const e={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"A boolean field, variable or expression can be either TRUE or FALSE."}),"\n",(0,s.jsx)(e.h2,{id:"boolean-functions",children:"Boolean functions"}),"\n",(0,s.jsxs)(e.p,{children:["4D provides the Boolean functions ",(0,s.jsx)(e.code,{children:"True"}),", ",(0,s.jsx)(e.code,{children:"False"}),", and ",(0,s.jsx)(e.code,{children:"Not"})," in the dedicated ",(0,s.jsx)(e.strong,{children:"Boolean"})," theme. For more information, see the descriptions of these commands."]}),"\n",(0,s.jsx)(e.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(e.p,{children:"This example sets a Boolean variable based on the value of a button. It returns True in myBoolean if the myButton button was clicked and False if the button was not clicked. When a button is clicked, the button variable is set to 1."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:" If(myButton=1) //If the button was clicked\n    myBoolean:=True //myBoolean is set to True\n Else //If the button was not clicked,\n    myBoolean:=False //myBoolean is set to False\n End if\n"})}),"\n",(0,s.jsx)(e.p,{children:"The previous example can be simplified into one line."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:"myBoolean:=(myButton=1)\n"})}),"\n",(0,s.jsx)(e.h2,{id:"logical-operators",children:"Logical operators"}),"\n",(0,s.jsx)(e.p,{children:"4D supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns TRUE if both expressions are TRUE. A logical OR returns TRUE if at least one of the expressions is TRUE. The following table shows the logical operators:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Operation"}),(0,s.jsx)(e.th,{children:"Syntax"}),(0,s.jsx)(e.th,{children:"Returns"}),(0,s.jsx)(e.th,{children:"Expression"}),(0,s.jsx)(e.th,{children:"Value"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"AND"}),(0,s.jsx)(e.td,{children:"Boolean & Boolean"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:'("A" = "A") & (15 # 3)'}),(0,s.jsx)(e.td,{children:"True"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:'("A" = "B") & (15 # 3)'}),(0,s.jsx)(e.td,{children:"False"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:'("A" = "B") & (15 = 3)'}),(0,s.jsx)(e.td,{children:"False"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"OR"}),(0,s.jsx)(e.td,{children:"Boolean  | Boolean"}),(0,s.jsx)(e.td,{children:"Boolean"}),(0,s.jsx)(e.td,{children:'("A" = "A") | (15 # 3)'}),(0,s.jsx)(e.td,{children:"True"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:'("A" = "B") |  (15 # 3)'}),(0,s.jsx)(e.td,{children:"True"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:'("A" = "B") |  (15 = 3)'}),(0,s.jsx)(e.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"The following is the truth table for the AND logical operator:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Expr1"}),(0,s.jsx)(e.th,{children:"Expr2"}),(0,s.jsx)(e.th,{children:"Expr1 & Expr2"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"True"}),(0,s.jsx)(e.td,{children:"True"}),(0,s.jsx)(e.td,{children:"True"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"True"}),(0,s.jsx)(e.td,{children:"False"}),(0,s.jsx)(e.td,{children:"False"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"False"}),(0,s.jsx)(e.td,{children:"True"}),(0,s.jsx)(e.td,{children:"False"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"False"}),(0,s.jsx)(e.td,{children:"False"}),(0,s.jsx)(e.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(e.p,{children:"The following is the truth table for the OR logical operator:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Expr1"}),(0,s.jsx)(e.th,{children:"Expr2"}),(0,s.jsx)(e.th,{children:"Expr1 | Expr2"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"True"}),(0,s.jsx)(e.td,{children:"True"}),(0,s.jsx)(e.td,{children:"True"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"True"}),(0,s.jsx)(e.td,{children:"False"}),(0,s.jsx)(e.td,{children:"True"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"False"}),(0,s.jsx)(e.td,{children:"True"}),(0,s.jsx)(e.td,{children:"True"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"False"}),(0,s.jsx)(e.td,{children:"False"}),(0,s.jsx)(e.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Tip:"})," If you need to calculate the exclusive disjunction between Expr1 and Expr2, evaluate:"]}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})}),"\n",(0,s.jsxs)(e.blockquote,{children:["\n",(0,s.jsxs)(e.p,{children:["In boolean contexts, the 4D language also supports ",(0,s.jsx)(e.a,{href:"/docs/20-R5/Concepts/operators#short-circuit-operators",children:"short-circuit operators"})," (",(0,s.jsx)(e.code,{children:"&&"})," and ",(0,s.jsx)(e.code,{children:"||"}),") and the ",(0,s.jsx)(e.a,{href:"/docs/20-R5/Concepts/operators#truthy-and-falsy",children:"truthy and falsy"})," concept."]}),"\n"]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,t)=>{t.d(e,{R:()=>l,x:()=>d});var s=t(296540);const r={},o=s.createContext(r);function l(n){const e=s.useContext(o);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function d(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:l(n.components),s.createElement(o.Provider,{value:e},n.children)}}}]);