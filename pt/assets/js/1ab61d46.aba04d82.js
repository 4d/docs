"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51e3],{351730:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var s=d(474848),r=d(28453);const t={id:"data-types",title:"Tipos de dados"},i=void 0,c={id:"Concepts/data-types",title:"Tipos de dados",description:"Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/pt/20-R5/Concepts/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"data-types",title:"Tipos de dados"},sidebar:"docs",previous:{title:"Operadores",permalink:"/docs/pt/20-R5/Concepts/operators"},next:{title:"BLOB",permalink:"/docs/pt/20-R5/Concepts/blob"}},o={},l=[{value:"Valor padr\xe3o",id:"valor-padr\xe3o",level:2},{value:"Null como valor padr\xe3o",id:"null-como-valor-padr\xe3o",level:3},{value:"Convers\xe3o de tipos de dados",id:"convers\xe3o-de-tipos-de-dados",level:2}];function a(e){const n={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D."}),"\n",(0,s.jsx)(n.p,{children:"Apesar de geralmente serem equivalentes, alguns tipos de dados dispon\xedveis no n\xedvel do banco de dados n\xe3o est\xe3o diretamente dispon\xedveis na linguagem e s\xe3o convertidos automaticamente. Por outro lado, alguns tipos de dados pode somente ser manejados atrav\xe9s da linguagem. A tabela lista todos os tipos de dados dispon\xedveis e sua compatibilidade/declara\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Tipos de dados"}),(0,s.jsx)(n.th,{children:"Suporte para o banco (1)"}),(0,s.jsx)(n.th,{children:"Suporte Linguagem"}),(0,s.jsxs)(n.th,{children:["[Declara\xe7\xe3o ",(0,s.jsx)(n.code,{children:"var"}),"] (variables.md#using-the-var-keyword)"]}),(0,s.jsxs)(n.th,{children:["Declara\xe7\xe3o [",(0,s.jsx)(n.code,{children:"C_"})," ou ",(0,s.jsx)(n.code,{children:"ARRAY"}),"] (variables.md#using-a-c_-directive)"]})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/string",children:"Alfanum\xe9rico"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Convertido em texto"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/string",children:"Text"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Text"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_TEXT"}),", ",(0,s.jsx)(n.code,{children:"ARRAY TEXT"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/date",children:"Date"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Date"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_DATE"}),", ",(0,s.jsx)(n.code,{children:"ARRAY DATE"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/time",children:"Time"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Time"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_TIME"}),", ",(0,s.jsx)(n.code,{children:"ARRAY TIME"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/boolean",children:"Boolean"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Boolean"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_BOOLEAN"}),", ",(0,s.jsx)(n.code,{children:"ARRAY BOOLEAN"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/number",children:"Integer"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Convertido para longInt"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Integer"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"ARRAY INTEGER"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/number",children:"Longint"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Integer"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_LONGINT"}),", ",(0,s.jsx)(n.code,{children:"ARRAY LONGINT"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/number",children:"Longint 64 bits"})}),(0,s.jsx)(n.td,{children:"Sim (SQL)"}),(0,s.jsx)(n.td,{children:"Convertido para real"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/number",children:"Real"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Real"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_REAL"}),", ",(0,s.jsx)(n.code,{children:"ARRAY REAL"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/null-undefined",children:"Undefined"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/null-undefined",children:"Null"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"-"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/pointer",children:"Ponteiro"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Pointer"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_POINTER"}),", ",(0,s.jsx)(n.code,{children:"ARRAY POINTER"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/picture",children:"Picture"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Picture"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_PICTURE"}),", ",(0,s.jsx)(n.code,{children:"ARRAY PICTURE"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/blob",children:"BLOB"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"Blob"}),", ",(0,s.jsx)(n.code,{children:"4D.Blob"})]}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_BLOB"}),", ",(0,s.jsx)(n.code,{children:"ARRAY BLOB"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/object",children:"Object"})}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Object"})}),(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.code,{children:"C_OBJECT"}),", ",(0,s.jsx)(n.code,{children:"ARRAY OBJECT"})]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/collection",children:"Cole\xe7\xe3o"})}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Collection"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"C_COLLECTION"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsxs)(n.td,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/variant",children:"Variant"}),"(2)"]}),(0,s.jsx)(n.td,{children:"-"}),(0,s.jsx)(n.td,{children:"Sim"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Variant"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"(1) Note que ORDA maneja campos de bancos de dados atrav\xe9s de objetos (entidades) e assim, s\xf3 \xe9 compat\xedvel com tipos de dados dispon\xedveis a esses objetos. Para obter mais informa\xe7\xf5es, consulte a descri\xe7\xe3o do tipo de dados [Object] (Concepts/dt_object.md)."}),"\n",(0,s.jsxs)(n.p,{children:["(2) Na verdade, a variante n\xe3o \xe9 um tipo de ",(0,s.jsx)(n.em,{children:"dado"}),", mas um tipo de ",(0,s.jsx)(n.em,{children:"vari\xe1vel"})," que pode conter um valor de qualquer outro tipo de dado."]}),"\n",(0,s.jsx)(n.h2,{id:"valor-padr\xe3o",children:"Valor padr\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["Quando as ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/variables",children:"vari\xe1veis"})," ou os ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/parameters",children:"par\xe2metros"})," s\xe3o digitados por meio de uma ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R5/Concepts/variables#declaring-variables",children:"declara\xe7\xe3o expl\xedcita"}),", eles recebem um valor padr\xe3o, que manter\xe3o durante a sess\xe3o, desde que n\xe3o tenham sido atribu\xeddos."]}),"\n",(0,s.jsx)(n.p,{children:"O valor por defeito depende do tipo de vari\xe1vel:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor padr\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Booleano"}),(0,s.jsx)(n.td,{children:"False"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:"00-00-00"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Longint"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:"00:00:00"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Imagem"}),(0,s.jsx)(n.td,{children:"tamanho da imagem=0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Real"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Ponteiro"}),(0,s.jsx)(n.td,{children:"Nil=true"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:'""'})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Blob"}),(0,s.jsx)(n.td,{children:"Tamanho do Blob =0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Object"}),(0,s.jsx)(n.td,{children:"null"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Collection"}),(0,s.jsx)(n.td,{children:"null"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Diferente de"}),(0,s.jsx)(n.td,{children:"indefinido"})]})]})]}),"\n",(0,s.jsx)(n.h3,{id:"null-como-valor-padr\xe3o",children:"Null como valor padr\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["As vari\xe1veis do tipo Object, Collection, Pointer e Picture t\xeam ",(0,s.jsx)(n.strong,{children:"null"})," como valor padr\xe3o, mas na verdade recebem um status intermedi\xe1rio quando s\xe3o declaradas e n\xe3o atribu\xeddas. Eles ",(0,s.jsx)(n.em,{children:"se comportam como"})," valores ",(0,s.jsx)(n.strong,{children:"null"}),", mas com algumas diferen\xe7as, gerar menos erros quando o c\xf3digo tenta acess\xe1-los."]}),"\n",(0,s.jsx)(n.h2,{id:"convers\xe3o-de-tipos-de-dados",children:"Convers\xe3o de tipos de dados"}),"\n",(0,s.jsx)(n.p,{children:'A linguagem 4D cont\xe9m operadores e comandos para converter entre tipos de dados, onde tais convers\xf5es s\xe3o significativas. A l\xedngua 4D obriga \xe0 verifica\xe7\xe3o do tipo de dados. Por exemplo, n\xe3o se pode escrever: "abc"+0.5+!12/25/96!-?00:30:45?. Isto ir\xe1 gerar erros de sintaxe.'}),"\n",(0,s.jsx)(n.p,{children:"O quadro seguinte lista os tipos de dados b\xe1sicos, os tipos de dados para os quais podem ser convertidos, e os comandos utilizados para o fazer:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Tipo de dados a converter"}),(0,s.jsx)(n.th,{children:"para String"}),(0,s.jsx)(n.th,{children:"para N\xfamero"}),(0,s.jsx)(n.th,{children:"para Data"}),(0,s.jsx)(n.th,{children:"para Tempo"}),(0,s.jsx)(n.th,{children:"para Booleano"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"String (1)"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Num"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Date"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Time"})}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Bool"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero (2)"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Bool"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Date"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Bool"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hora"}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"String"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Bool"})})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Par\xe2metros"}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"Num"})}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{}),(0,s.jsx)(n.td,{})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["(1) As cadeias de caracteres formatadas em JSON podem ser convertidas em dados escalares, objetos ou cole\xe7\xf5es, usando o comando ",(0,s.jsx)(n.code,{children:"JSON Parse"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"(2) Os valores de tempo podem ser tratados como n\xfameros."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," Al\xe9m das convers\xf5es de dados listadas nesta tabela, as convers\xf5es de dados mais sofisticadas podem ser obtidas combinando operadores e outros comandos."]})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},28453:(e,n,d)=>{d.d(n,{R:()=>i,x:()=>c});var s=d(296540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);