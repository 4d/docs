"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[25075],{603905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>c});var n=a(667294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var i=n.createContext({}),u=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),d=u(a),c=r,k=d["".concat(i,".").concat(c)]||d[c]||s[c]||l;return a?n.createElement(k,o(o({ref:t},m),{},{components:a})):n.createElement(k,o({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,o[1]=p;for(var u=2;u<l;u++)o[u]=a[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},118547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>p,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>m});a(667294);var n=a(603905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const o={id:"boolean",title:"Boolean"},p=void 0,i={unversionedId:"Concepts/boolean",id:"version-20-R4/Concepts/boolean",title:"Boolean",description:"Um campo booleano, vari\xe1vel ou express\xe3o pode ser VERDADEIRO ou FALSO.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/Concepts/dt_boolean.md",sourceDirName:"Concepts",slug:"/Concepts/boolean",permalink:"/docs/pt/Concepts/boolean",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_boolean.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"boolean",title:"Boolean"},sidebar:"docs",previous:{title:"BLOB",permalink:"/docs/pt/Concepts/blob"},next:{title:"Collection",permalink:"/docs/pt/Concepts/collection"}},u={},m=[{value:"Fun\xe7\xf5es booleanas",id:"fun\xe7\xf5es-booleanas",level:2},{value:"Exemplo",id:"exemplo",level:3},{value:"Opera\xe7\xe3o l\xf3gica",id:"opera\xe7\xe3o-l\xf3gica",level:2}],s={toc:m};function d(e){var{components:t}=e,a=l(e,["components"]);return(0,n.kt)("wrapper",r({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Um campo booleano, vari\xe1vel ou express\xe3o pode ser VERDADEIRO ou FALSO."),(0,n.kt)("h2",r({},{id:"fun\xe7\xf5es-booleanas"}),"Fun\xe7\xf5es booleanas"),(0,n.kt)("p",null,"4D fornece as fun\xe7\xf5es booleanas ",(0,n.kt)("inlineCode",{parentName:"p"},"True"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"False"),", e ",(0,n.kt)("inlineCode",{parentName:"p"},"Not")," no tema dedicado ",(0,n.kt)("strong",{parentName:"p"},"Boolean")," . Para obter mais informa\xe7\xf5es, consulte as descri\xe7\xf5es desses comandos"),(0,n.kt)("h3",r({},{id:"exemplo"}),"Exemplo"),(0,n.kt)("p",null,"Esse exemplo define uma vari\xe1vel booleana com base no valor de um bot\xe3o. Retorna verdadeiro em myBoolean se o bot\xe3o myButton foi clicado e falso se o bot\xe3o n\xe3o foi clicado. Quando um bot\xe3o \xe9 clicado, a vari\xe1vel do bot\xe3o \xe9 definida como 1."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," If(myButton=1) //Se apertou o bot\xe3o\n    myBoolean:=True //myBoolean toma o valor True\n Else //Se o bot\xe3o n\xe3o for apertado\n    myBoolean:=False //myBoolean toma o valor False\n End if\n")),(0,n.kt)("p",null,"O exemplo anterior pode ser simplificado numa s\xf3 linha."),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"myBoolean:=(myButton=1)\n")),(0,n.kt)("h2",r({},{id:"opera\xe7\xe3o-l\xf3gica"}),"Opera\xe7\xe3o l\xf3gica"),(0,n.kt)("p",null,"4D suporta dois operadores l\xf3gicos que trabalham com express\xf5es booleanas: conjun\xe7\xe3o (AND) e disjun\xe7\xe3o inclusiva (OR). Uma l\xf3gica E retorna VERDADEIRA se ambas as express\xf5es forem VERDADEIRAS. Uma l\xf3gica OU retorna VERDADEIRA se pelo menos uma das express\xf5es for VERDADEIRA. O quadro seguinte mostra os operadores l\xf3gicos:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Opera\xe7\xe3o"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Sintaxe"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Retorna"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expression"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Valor"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"AND"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean & Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "A") & (15 # 3)'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") & (15 # 3)'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") & (15 = 3)'),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"OU"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Boolean  ","|"," Boolean"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"Par\xe2metros"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "A") ',"|"," (15 # 3)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 # 3)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null})),(0,n.kt)("td",r({parentName:"tr"},{align:null}),'("A" = "B") ',"|","  (15 = 3)"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("p",null,"A tabela seguinte \xe9 a tabela da verdade para o operador l\xf3gico AND:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1 & Expr2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("p",null,"A tabela seguinte \xe9 a tabela da verdade para o operador l\xf3gico OR:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr2"),(0,n.kt)("th",r({parentName:"tr"},{align:null}),"Expr1 ","|"," Expr2"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"True")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False"),(0,n.kt)("td",r({parentName:"tr"},{align:null}),"False")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Dica:")," Se voc\xea precisa calcular a disjun\xe7\xe3o exclusiva entre Expr1 e Expr2, avalie:"),(0,n.kt)("pre",null,(0,n.kt)("code",r({parentName:"pre"},{className:"language-4d"})," (Expr1|Expr2) & Not(Expr1 & Expr2)  \n")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Em contextos booleanos, a linguagem 4D tamb\xe9m \xe9 compat\xedvel ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/Concepts/operators#short-circuit-operators"}),"operadores de curto-circuito")," (",(0,n.kt)("inlineCode",{parentName:"p"},"&&")," e ",(0,n.kt)("inlineCode",{parentName:"p"},"||"),") e o conceito ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/pt/Concepts/operators#truthy-and-falsy"}),"truthy and falsy")," .")))}d.isMDXComponent=!0}}]);