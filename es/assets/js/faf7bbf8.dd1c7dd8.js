/*! For license information please see faf7bbf8.dd1c7dd8.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36883],{797439:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>i,contentTitle:()=>d,default:()=>x,frontMatter:()=>o,metadata:()=>t,toc:()=>c});var r=s(474848),l=s(28453);const o={id:"boolean",title:"Boolean"},d=void 0,t={id:"Concepts/boolean",title:"Boolean",description:"Un campo, variable o expresi\xf3n booleana puede ser TRUE o FALSE.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/es/19/Concepts/boolean",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/es/19/Concepts/blob"},next:{title:"Collection",permalink:"/docs/es/19/Concepts/collection"}},i={},c=[{value:"Funciones booleanas",id:"funciones-booleanas",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Operadores l\xf3gicos",id:"operadores-l\xf3gicos",level:2}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Un campo, variable o expresi\xf3n booleana puede ser TRUE o FALSE."}),"\n",(0,r.jsx)(n.h2,{id:"funciones-booleanas",children:"Funciones booleanas"}),"\n",(0,r.jsxs)(n.p,{children:["4D ofrece las funciones booleanas ",(0,r.jsx)(n.code,{children:"True"}),", ",(0,r.jsx)(n.code,{children:"False"})," y ",(0,r.jsx)(n.code,{children:"Not"})," en el tema dedicado ",(0,r.jsx)(n.strong,{children:"Booleanos"}),". Para m\xe1s informaci\xf3n, consulte las descripciones de estos comandos"]}),"\n",(0,r.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo define una variable booleana basada en el valor de un bot\xf3n. Devuelve True en myBoolean si el bot\xf3n myButton fue presionado y False si el bot\xf3n no fue presionado. Cuando se hace clic en un bot\xf3n, la variable del bot\xf3n toma el valor 1."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" If(myButton=1) //Si se ha presionado el bot\xf3n\n    myBoolean:=True //myBoolean toma el valor True\n Else //Si el bot\xf3n no fue pulsado\n    myBoolean:=False //myBoolean toma el valor False\n End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"El ejemplo anterior puede simplificarse en una l\xednea."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"myBoolean:=(myButton=1)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"operadores-l\xf3gicos",children:"Operadores l\xf3gicos"}),"\n",(0,r.jsx)(n.p,{children:"4D soporta dos operadores l\xf3gicos que trabajan sobre expresiones booleanas: la conjunci\xf3n (AND) y la disyunci\xf3n inclusiva (OR). Un AND l\xf3gico devuelve TRUE si ambas expresiones son TRUE. Un OR l\xf3gico devuelve TRUE si al menos una de las expresiones es TRUE. La siguiente tabla muestra los operadores l\xf3gicos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operaci\xf3n"}),(0,r.jsx)(n.th,{children:"Sintaxis"}),(0,r.jsx)(n.th,{children:"Devuelve"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AND"}),(0,r.jsx)(n.td,{children:"Booleano & Booleano"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'("A" = "A") & (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") & (15 # 3)'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") & (15 = 3)'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"O"}),(0,r.jsx)(n.td,{children:"Booleano  | Booleano"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'("A" = "A") | (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") |  (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") |  (15 = 3)'}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"La siguiente es la tabla de verdad del operador l\xf3gico AND:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Expr1 & Expr2"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"La siguiente es la tabla de verdad del operador l\xf3gico OR:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Expr1 | Expr2"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consejo:"})," si necesita calcular la conjunci\xf3n exclusiva entre Expr1 y Expr2, escriba:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})})]})}function x(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},221020:(e,n,s)=>{var r=s(296540),l=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,t=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,s){var r,o={},c=null,a=null;for(r in void 0!==s&&(c=""+s),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(a=n.ref),n)d.call(n,r)&&!i.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:l,type:e,key:c,ref:a,props:o,_owner:t.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>t});var r=s(296540);const l={},o=r.createContext(l);function d(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);