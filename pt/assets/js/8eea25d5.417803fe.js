"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32778],{10424:(n,e,d)=>{d.r(e),d.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>o,toc:()=>l});var s=d(474848),r=d(28453);const t={id:"data-types",title:"Tipos de dados"},i=void 0,o={id:"Concepts/data-types",title:"Tipos de dados",description:"Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Concepts/data-types.md",sourceDirName:"Concepts",slug:"/Concepts/data-types",permalink:"/docs/pt/19/Concepts/data-types",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdata-types.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"data-types",title:"Tipos de dados"},sidebar:"docs",previous:{title:"Uma visita r\xe1pida",permalink:"/docs/pt/19/Concepts/quick-tour"},next:{title:"BLOB",permalink:"/docs/pt/19/Concepts/blob"}},c={},l=[{value:"Valor padr\xe3o",id:"valor-padr\xe3o",level:2},{value:"Convers\xe3o de tipos de dados",id:"convers\xe3o-de-tipos-de-dados",level:2}];function a(n){const e={a:"a",code:"code",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...n.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.p,{children:"Em 4D, os dados se manejam segundo seu tipo em dois lugares: os campos do banco de dados e a linguagem 4D."}),"\n",(0,s.jsx)(e.p,{children:"Apesar de geralmente serem equivalentes, alguns tipos de dados dispon\xedveis no n\xedvel do banco de dados n\xe3o est\xe3o diretamente dispon\xedveis na linguagem e s\xe3o convertidos automaticamente. Por outro lado, alguns tipos de dados pode somente ser manejados atrav\xe9s da linguagem. A tabela lista todos os tipos de dados dispon\xedveis e sua compatibilidade/declara\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Tipos de dados"}),(0,s.jsx)(e.th,{children:"Suporte para o banco (1)"}),(0,s.jsx)(e.th,{children:"Suporte Linguagem"}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/variables#using-the-var-keyword",children:"Declara\xe7\xe3o de vari\xe1veis"})}),(0,s.jsx)(e.th,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/variables#using-a-c_-directive",children:'"a um valor aleat\xf3rio": 0x72677267 para n\xfameros e horas, sempre True para booleanos, igual que "em zero" para os outros,'})})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/string",children:"Alfanum\xe9rico"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Convertido em texto"}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/string",children:"Text"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_TEXT"}),", ",(0,s.jsx)(e.code,{children:"ARRAY TEXTO"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/date",children:"Date"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Date"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_DATE"}),", ",(0,s.jsx)(e.code,{children:"ARRAY DATE"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/time",children:"Hora"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Hora"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_TIME"}),", ",(0,s.jsx)(e.code,{children:"ARRAY TIME"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/boolean",children:"Par\xe2metros"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Par\xe2metros"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_BOOLEAN"}),", ",(0,s.jsx)(e.code,{children:"ARRAY BOOLEAN"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/number",children:"Integer"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Convertido para longInt"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"ARRAY INTEGER"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/number",children:"Longint"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Integer"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_LONGINT"}),", ",(0,s.jsx)(e.code,{children:"ARRAY LONGINT"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/number",children:"Inteiro longo 64 bits"})}),(0,s.jsx)(e.td,{children:"Sim (SQL)"}),(0,s.jsx)(e.td,{children:"Convertido para real"}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/number",children:"Real"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Real"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_REAL"}),", ",(0,s.jsx)(e.code,{children:"ARRAY REAL"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/null-undefined",children:"Indefinido"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/null-undefined",children:"Null"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"-"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/pointer",children:"Ponteiro"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Ponteiro"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_POINTER"}),", ",(0,s.jsx)(e.code,{children:"ARRAY POINTER"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/picture",children:"Imagem"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Imagem"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_PICTURE"}),", ",(0,s.jsx)(e.code,{children:"ARRAY PICTURE"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/blob",children:"BLOB"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Blob"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_BLOB"}),", ",(0,s.jsx)(e.code,{children:"ARRAY BLOB"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/object",children:"Object"})}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.code,{children:"C_OBJECT"}),", ",(0,s.jsx)(e.code,{children:"ARRAY OBJECT"})]})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/collection",children:"Collection"})}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Collection"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"C_COLLECTION"})})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsxs)(e.td,{children:[(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/variant",children:"Variant"}),"(2)"]}),(0,s.jsx)(e.td,{children:"-"}),(0,s.jsx)(e.td,{children:"Sim"}),(0,s.jsx)(e.td,{children:"Diferente de"}),(0,s.jsx)(e.td,{children:(0,s.jsx)(e.code,{children:"C_VARIANT"})})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["(1) Note que ORDA maneja campos de bancos de dados atrav\xe9s de objetos (entidades) e assim, s\xf3 \xe9 compat\xedvel com tipos de dados dispon\xedveis a esses objetos. Para saber mais, veja a descri\xe7\xe3o de tipo de dados ",(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/object",children:"Object"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["(2) Variante n\xe3o \xe9 um tipo ",(0,s.jsx)(e.em,{children:"data"})," mas um tipo ",(0,s.jsx)(e.em,{children:"vari\xe1vel"})," que cont\xe9m um valor de qualquer outro tipo de dados."]}),"\n",(0,s.jsx)(e.h2,{id:"valor-padr\xe3o",children:"Valor padr\xe3o"}),"\n",(0,s.jsxs)(e.p,{children:["Quando as ",(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/variables",children:"vari\xe1veis"})," ou ",(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/parameters",children:"par\xe2metros"})," s\xe3o digitados por meio de uma ",(0,s.jsx)(e.a,{href:"/docs/pt/19/Concepts/variables#declaring-variables",children:"declara\xe7\xe3o expl\xedcita"}),", recebem um valor por defeito, que manter\xe3o durante a sess\xe3o enquanto n\xe3o lhes for atribu\xeddo."]}),"\n",(0,s.jsx)(e.p,{children:"O valor por defeito depende do tipo de vari\xe1vel:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Tipo"}),(0,s.jsx)(e.th,{children:"Valor padr\xe3o"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Booleano"}),(0,s.jsx)(e.td,{children:"False"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Date"}),(0,s.jsx)(e.td,{children:"00-00-00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Longint"}),(0,s.jsx)(e.td,{children:"0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hora"}),(0,s.jsx)(e.td,{children:"00:00:00"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Imagem"}),(0,s.jsx)(e.td,{children:"tamanho da imagem=0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Real"}),(0,s.jsx)(e.td,{children:"0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Ponteiro"}),(0,s.jsx)(e.td,{children:"Nil=true"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Text"}),(0,s.jsx)(e.td,{children:'""'})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Blob"}),(0,s.jsx)(e.td,{children:"Tamanho do Blob =0"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Object"}),(0,s.jsx)(e.td,{children:"null"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Collection"}),(0,s.jsx)(e.td,{children:"null"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Diferente de"}),(0,s.jsx)(e.td,{children:"indefinido"})]})]})]}),"\n",(0,s.jsx)(e.h2,{id:"convers\xe3o-de-tipos-de-dados",children:"Convers\xe3o de tipos de dados"}),"\n",(0,s.jsx)(e.p,{children:'A linguagem 4D cont\xe9m operadores e comandos para converter entre tipos de dados, onde tais convers\xf5es s\xe3o significativas. A l\xedngua 4D obriga \xe0 verifica\xe7\xe3o do tipo de dados. Por exemplo, n\xe3o se pode escrever: "abc"+0.5+!12/25/96!-?00:30:45?. Isto ir\xe1 gerar erros de sintaxe.'}),"\n",(0,s.jsx)(e.p,{children:"O quadro seguinte lista os tipos de dados b\xe1sicos, os tipos de dados para os quais podem ser convertidos, e os comandos utilizados para o fazer:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(e.table,{children:[(0,s.jsx)(e.thead,{children:(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.th,{children:"Tipo de dados a converter"}),(0,s.jsx)(e.th,{children:"para String"}),(0,s.jsx)(e.th,{children:"para N\xfamero"}),(0,s.jsx)(e.th,{children:"para Data"}),(0,s.jsx)(e.th,{children:"para Tempo"}),(0,s.jsx)(e.th,{children:"para Booleano"})]})}),(0,s.jsxs)(e.tbody,{children:[(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"String (1)"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Num"}),(0,s.jsx)(e.td,{children:"Date"}),(0,s.jsx)(e.td,{children:"Hora"}),(0,s.jsx)(e.td,{children:"Bool"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"N\xfamero (2)"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Bool"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Date"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Bool"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Hora"}),(0,s.jsx)(e.td,{children:"String"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Bool"})]}),(0,s.jsxs)(e.tr,{children:[(0,s.jsx)(e.td,{children:"Par\xe2metros"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{children:"Num"}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{}),(0,s.jsx)(e.td,{})]})]})]}),"\n",(0,s.jsxs)(e.p,{children:["(1) Strings formatadas em JSON podem ser convertidas em dados escalares, objetos ou cole\xe7\xf5es, usando o comando ",(0,s.jsx)(e.code,{children:"JSON Parse"})]}),"\n",(0,s.jsx)(e.p,{children:"(2) Os valores de tempo podem ser tratados como n\xfameros."}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.strong,{children:"Nota:"})," Al\xe9m das convers\xf5es de dados listadas nesta tabela. Convers\xf5es de dados mais sofisticadas podem ser obtidas combinando operadores e outros comandos."]})]})}function h(n={}){const{wrapper:e}={...(0,r.R)(),...n.components};return e?(0,s.jsx)(e,{...n,children:(0,s.jsx)(a,{...n})}):a(n)}},28453:(n,e,d)=>{d.d(e,{R:()=>i,x:()=>o});var s=d(296540);const r={},t=s.createContext(r);function i(n){const e=s.useContext(t);return s.useMemo((function(){return"function"==typeof n?n(e):{...e,...n}}),[e,n])}function o(n){let e;return e=n.disableParentContext?"function"==typeof n.components?n.components(r):n.components||r:i(n.components),s.createElement(t.Provider,{value:e},n.children)}}}]);