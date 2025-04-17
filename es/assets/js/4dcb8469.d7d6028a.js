"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95428"],{42551:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>d,metadata:()=>l,assets:()=>i,toc:()=>c,contentTitle:()=>t});var l=JSON.parse('{"id":"Concepts/boolean","title":"Boolean","description":"Un campo, variable o expresi\xf3n booleana puede ser TRUE o FALSE.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/Concepts/dt_boolean.md","sourceDirName":"Concepts","slug":"/Concepts/boolean","permalink":"/docs/es/Concepts/boolean","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"boolean","title":"Boolean"},"sidebar":"docs","previous":{"title":"BLOB","permalink":"/docs/es/Concepts/blob"},"next":{"title":"Collection","permalink":"/docs/es/Concepts/collection"}}'),r=s("785893"),o=s("250065");let d={id:"boolean",title:"Boolean"},t=void 0,i={},c=[{value:"Funciones booleanas",id:"funciones-booleanas",level:2},{value:"Ejemplo",id:"ejemplo",level:3},{value:"Operadores l\xf3gicos",id:"operadores-l\xf3gicos",level:2}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Un campo, variable o expresi\xf3n booleana puede ser TRUE o FALSE."}),"\n",(0,r.jsx)(n.h2,{id:"funciones-booleanas",children:"Funciones booleanas"}),"\n",(0,r.jsxs)(n.p,{children:["4D ofrece las funciones booleanas ",(0,r.jsx)(n.code,{children:"True"}),", ",(0,r.jsx)(n.code,{children:"False"})," y ",(0,r.jsx)(n.code,{children:"Not"})," en el tema dedicado ",(0,r.jsx)(n.strong,{children:"Booleanos"}),". Para m\xe1s informaci\xf3n, consulte las descripciones de estos comandos."]}),"\n",(0,r.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo define una variable booleana basada en el valor de un bot\xf3n. Devuelve True en myBoolean si el bot\xf3n myButton fue presionado y False si el bot\xf3n no fue presionado. Cuando se hace clic en un bot\xf3n, la variable del bot\xf3n toma el valor 1."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" If(myButton=1) //Si se ha presionado el bot\xf3n\n    myBoolean:=True //myBoolean toma el valor True\n Else //Si el bot\xf3n no fue pulsado\n    myBoolean:=False //myBoolean toma el valor False\n End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"El ejemplo anterior puede simplificarse en una l\xednea."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"myBoolean:=(myButton=1)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"operadores-l\xf3gicos",children:"Operadores l\xf3gicos"}),"\n",(0,r.jsx)(n.p,{children:"4D soporta dos operadores l\xf3gicos que trabajan sobre expresiones booleanas: la conjunci\xf3n (AND) y la disyunci\xf3n inclusiva (OR). Un AND l\xf3gico devuelve TRUE si ambas expresiones son TRUE. Un OR l\xf3gico devuelve TRUE si al menos una de las expresiones es TRUE. La siguiente tabla muestra los operadores l\xf3gicos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Operaci\xf3n"}),(0,r.jsx)(n.th,{children:"Sintaxis"}),(0,r.jsx)(n.th,{children:"Devuelve"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AND"}),(0,r.jsx)(n.td,{children:"Booleano & Booleano"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'("A" = "A") & (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") & (15 # 3)'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") & (15 = 3)'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"O"}),(0,r.jsx)(n.td,{children:"Booleano  | Booleano"}),(0,r.jsx)(n.td,{children:"Boolean"}),(0,r.jsx)(n.td,{children:'("A" = "A") | (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") |  (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") |  (15 = 3)'}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"La siguiente es la tabla de verdad del operador l\xf3gico AND:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Expr1 & Expr2"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"La siguiente es la tabla de verdad del operador l\xf3gico OR:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Expr1 | Expr2"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consejo:"})," si necesita calcular la conjunci\xf3n exclusiva entre Expr1 y Expr2, escriba:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["En contextos booleanos, el lenguaje 4D tambi\xe9n soporta los operadores ",(0,r.jsx)(n.a,{href:"/docs/es/Concepts/operators#short-circuit-operators",children:"cortocircuitos"})," (",(0,r.jsx)(n.code,{children:"&&"})," y ",(0,r.jsx)(n.code,{children:"||"}),") y el concepto ",(0,r.jsx)(n.a,{href:"/docs/es/Concepts/operators#truthy-and-falsy",children:"truthy y falsy"}),"."]}),"\n"]})]})}function x(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return d}});var l=s(667294);let r={},o=l.createContext(r);function d(e){let n=l.useContext(o);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),l.createElement(o.Provider,{value:n},e.children)}}}]);