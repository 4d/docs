/*! For license information please see 9a91dc31.00a666d7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[98588],{170231:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>c});var s=t(474848),r=t(28453);const l={id:"boolean",title:"Boolean"},o=void 0,d={id:"Concepts/boolean",title:"Boolean",description:"A boolean field, variable or expression can be either TRUE or FALSE.",source:"@site/versioned_docs/version-18/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/18/Concepts/boolean",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/18/Concepts/blob"},next:{title:"Collection",permalink:"/docs/18/Concepts/collection"}},i={},c=[{value:"Boolean functions",id:"boolean-functions",level:2},{value:"Example",id:"example",level:3},{value:"Logical operators",id:"logical-operators",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"A boolean field, variable or expression can be either TRUE or FALSE."}),"\n",(0,s.jsx)(n.h2,{id:"boolean-functions",children:"Boolean functions"}),"\n",(0,s.jsxs)(n.p,{children:["4D provides the Boolean functions ",(0,s.jsx)(n.code,{children:"True"}),", ",(0,s.jsx)(n.code,{children:"False"}),", and ",(0,s.jsx)(n.code,{children:"Not"})," in the dedicated ",(0,s.jsx)(n.strong,{children:"Boolean"})," theme. For more information, see the descriptions of these commands"]}),"\n",(0,s.jsx)(n.h3,{id:"example",children:"Example"}),"\n",(0,s.jsx)(n.p,{children:"This example sets a Boolean variable based on the value of a button. It returns True in myBoolean if the myButton button was clicked and False if the button was not clicked. When a button is clicked, the button variable is set to 1."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" If(myButton=1) //If the button was clicked\n    myBoolean:=True //myBoolean is set to True\n Else //If the button was not clicked,\n    myBoolean:=False //myBoolean is set to False\n End if\n"})}),"\n",(0,s.jsx)(n.p,{children:"The previous example can be simplified into one line."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"myBoolean:=(myButton=1)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"logical-operators",children:"Logical operators"}),"\n",(0,s.jsx)(n.p,{children:"4D supports two logical operators that work on Boolean expressions: conjunction (AND) and inclusive disjunction (OR). A logical AND returns TRUE if both expressions are TRUE. A logical OR returns TRUE if at least one of the expressions is TRUE. The following table shows the logical operators:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Operation"}),(0,s.jsx)(n.th,{children:"Syntax"}),(0,s.jsx)(n.th,{children:"Returns"}),(0,s.jsx)(n.th,{children:"Expression"}),(0,s.jsx)(n.th,{children:"Value"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"AND"}),(0,s.jsx)(n.td,{children:"Boolean & Boolean"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'("A" = "A") & (15 # 3)'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'("A" = "B") & (15 # 3)'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'("A" = "B") & (15 = 3)'}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"OR"}),(0,s.jsx)(n.td,{children:"Boolean  | Boolean"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:'("A" = "A") | (15 # 3)'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'("A" = "B") |  (15 # 3)'}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:'("A" = "B") |  (15 = 3)'}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"The following is the truth table for the AND logical operator:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Expr1"}),(0,s.jsx)(n.th,{children:"Expr2"}),(0,s.jsx)(n.th,{children:"Expr1 & Expr2"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"The following is the truth table for the OR logical operator:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Expr1"}),(0,s.jsx)(n.th,{children:"Expr2"}),(0,s.jsx)(n.th,{children:"Expr1 | Expr2"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"True"}),(0,s.jsx)(n.td,{children:"True"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"}),(0,s.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Tip:"})," If you need to calculate the exclusive disjunction between Expr1 and Expr2, evaluate:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},221020:(e,n,t)=>{var s=t(296540),r=Symbol.for("react.element"),l=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var s,l={},c=null,a=null;for(s in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)o.call(n,s)&&!i.hasOwnProperty(s)&&(l[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===l[s]&&(l[s]=n[s]);return{$$typeof:r,type:e,key:c,ref:a,props:l,_owner:d.current}}n.Fragment=l,n.jsx=c,n.jsxs=c},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>d});var s=t(296540);const r={},l=s.createContext(r);function o(e){const n=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);