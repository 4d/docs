"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12092],{423479:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>a,contentTitle:()=>d,default:()=>x,frontMatter:()=>t,metadata:()=>l,toc:()=>c});var r=s(474848),o=s(28453);const t={id:"boolean",title:"Par\xe2metros"},d=void 0,l={id:"Concepts/boolean",title:"Par\xe2metros",description:"Um campo booleano, vari\xe1vel ou express\xe3o pode ser VERDADEIRO ou FALSO.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/pt/20/Concepts/boolean",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"boolean",title:"Par\xe2metros"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/pt/20/Concepts/blob"},next:{title:"Collection",permalink:"/docs/pt/20/Concepts/collection"}},a={},c=[{value:"Fun\xe7\xf5es booleanas",id:"fun\xe7\xf5es-booleanas",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Opera\xe7\xe3o l\xf3gica",id:"opera\xe7\xe3o-l\xf3gica",level:2}];function i(e){const n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Um campo booleano, vari\xe1vel ou express\xe3o pode ser VERDADEIRO ou FALSO."}),"\n",(0,r.jsx)(n.h2,{id:"fun\xe7\xf5es-booleanas",children:"Fun\xe7\xf5es booleanas"}),"\n",(0,r.jsxs)(n.p,{children:["4D fornece as fun\xe7\xf5es booleanas ",(0,r.jsx)(n.code,{children:"True"}),", ",(0,r.jsx)(n.code,{children:"False"}),", e ",(0,r.jsx)(n.code,{children:"Not"})," no tema dedicado ",(0,r.jsx)(n.strong,{children:"Boolean"})," . Para obter mais informa\xe7\xf5es, consulte as descri\xe7\xf5es desses comandos"]}),"\n",(0,r.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Esse exemplo define uma vari\xe1vel booleana com base no valor de um bot\xe3o. Retorna verdadeiro em myBoolean se o bot\xe3o myButton foi clicado e falso se o bot\xe3o n\xe3o foi clicado. Quando um bot\xe3o \xe9 clicado, a vari\xe1vel do bot\xe3o \xe9 definida como 1."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" If(myButton=1) //Se apertou o bot\xe3o\n    myBoolean:=True //myBoolean toma o valor True\n Else //Se o bot\xe3o n\xe3o for apertado\n    myBoolean:=False //myBoolean toma o valor False\n End if\n"})}),"\n",(0,r.jsx)(n.p,{children:"O exemplo anterior pode ser simplificado numa s\xf3 linha."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"myBoolean:=(myButton=1)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"opera\xe7\xe3o-l\xf3gica",children:"Opera\xe7\xe3o l\xf3gica"}),"\n",(0,r.jsx)(n.p,{children:"4D suporta dois operadores l\xf3gicos que trabalham com express\xf5es booleanas: conjun\xe7\xe3o (AND) e disjun\xe7\xe3o inclusiva (OR). Uma l\xf3gica E retorna VERDADEIRA se ambas as express\xf5es forem VERDADEIRAS. Uma l\xf3gica OU retorna VERDADEIRA se pelo menos uma das express\xf5es for VERDADEIRA. O quadro seguinte mostra os operadores l\xf3gicos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Opera\xe7\xe3o"}),(0,r.jsx)(n.th,{children:"Sintaxe"}),(0,r.jsx)(n.th,{children:"Retorna"}),(0,r.jsx)(n.th,{children:"Expression"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"AND"}),(0,r.jsx)(n.td,{children:"Boolean & Boolean"}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsx)(n.td,{children:'("A" = "A") & (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") & (15 # 3)'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") & (15 = 3)'}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"OU"}),(0,r.jsx)(n.td,{children:"Boolean  | Boolean"}),(0,r.jsx)(n.td,{children:"Par\xe2metros"}),(0,r.jsx)(n.td,{children:'("A" = "A") | (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") |  (15 # 3)'}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{}),(0,r.jsx)(n.td,{children:'("A" = "B") |  (15 = 3)'}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"A tabela seguinte \xe9 a tabela da verdade para o operador l\xf3gico AND:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Expr1 & Expr2"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:"A tabela seguinte \xe9 a tabela da verdade para o operador l\xf3gico OR:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Expr1"}),(0,r.jsx)(n.th,{children:"Expr2"}),(0,r.jsx)(n.th,{children:"Expr1 | Expr2"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"True"}),(0,r.jsx)(n.td,{children:"True"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"}),(0,r.jsx)(n.td,{children:"False"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Dica:"})," Se voc\xea precisa calcular a disjun\xe7\xe3o exclusiva entre Expr1 e Expr2, avalie:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:" (Expr1|Expr2) & Not(Expr1 & Expr2)  \n"})}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Em contextos booleanos, a linguagem 4D tamb\xe9m \xe9 compat\xedvel ",(0,r.jsx)(n.a,{href:"/docs/pt/20/Concepts/operators#short-circuit-operators",children:"operadores de curto-circuito"})," (",(0,r.jsx)(n.code,{children:"&&"})," e ",(0,r.jsx)(n.code,{children:"||"}),") e o conceito ",(0,r.jsx)(n.a,{href:"/docs/pt/20/Concepts/operators#truthy-and-falsy",children:"truthy and falsy"})," ."]}),"\n"]})]})}function x(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>d,x:()=>l});var r=s(296540);const o={},t=r.createContext(o);function d(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);