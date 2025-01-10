"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70891"],{210410:function(e,o,r){r.r(o),r.d(o,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>i,toc:()=>c,contentTitle:()=>t});var a=JSON.parse('{"id":"commands-legacy/order-by-formula","title":"ORDER BY FORMULA","description":"ORDER BY FORMULA ( tabela ; expressao {; >ououou<N} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/order-by-formula.md","sourceDirName":"commands-legacy","slug":"/commands/order-by-formula","permalink":"/docs/pt/commands/order-by-formula","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Forder-by-formula.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"order-by-formula","title":"ORDER BY FORMULA","slug":"/commands/order-by-formula","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ORDER BY ATTRIBUTE","permalink":"/docs/pt/commands/order-by-attribute"},"next":{"title":"QUERY","permalink":"/docs/pt/commands/query"}}'),s=r("785893"),n=r("250065");let d={id:"order-by-formula",title:"ORDER BY FORMULA",slug:"/commands/order-by-formula",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"ORDER BY FORMULA"})," ( ",(0,s.jsx)(o.em,{children:"tabela"})," ; ",(0,s.jsx)(o.em,{children:"expressao"})," {; >ou<}{; ",(0,s.jsx)(o.em,{children:"expressao2"})," ; >ou<2 ; ... ; ",(0,s.jsx)(o.em,{children:"expressaoN"})," ; >ou<N} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Par\xe2metro"}),(0,s.jsx)(o.th,{children:"Tipo"}),(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"tabela"}),(0,s.jsx)(o.td,{children:"Table"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Tabela na qual vai ordenar os registros"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"expressao"}),(0,s.jsx)(o.td,{children:"Expression"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"F\xf3rmula de ordem para cada n\xedvel (pode ser de tipo Alfanum\xe9rico, Real, Inteiro, Inteiro longo, Data, Hora ou Booleano)"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:">ou<"}),(0,s.jsx)(o.td,{children:"Operador"}),(0,s.jsx)(o.td,{children:"\u2192"}),(0,s.jsx)(o.td,{children:"Sentido da ordena\xe7\xe3o para cada n\xedvel: > ordem crescente, ou < ordem decrescente"})]})]})]}),"\n",(0,s.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"ORDER BY FORMULA"})," ordena (reordena) os registros da sele\xe7\xe3o atual de ",(0,s.jsx)(o.em,{children:"tabela"})," para o processo atual. Una vez efetuada a ordena\xe7\xe3o, o primeiro registro da nova sele\xe7\xe3o atual \xe9 convertido no novo registro atual. ",(0,s.jsx)(o.strong,{children:"Nota"}),": deve especificar a ",(0,s.jsx)(o.em,{children:"tabela"}),". N\xe3o pode utilizar uma tabela por padr\xe3o."]}),"\n",(0,s.jsxs)(o.p,{children:["Pode ordenar a sele\xe7\xe3o em um ou v\xe1rios n\xedveis. Para cada n\xedvel de ordena\xe7\xe3o, voc\xea passa uma express\xe3o em ",(0,s.jsx)(o.em,{children:"expressao"})," e um crit\xe9rio de ordena\xe7\xe3o em ",(0,s.jsx)(o.em,{children:">"})," ou ",(0,s.jsx)(o.em,{children:"<"}),". Se passa o s\xedmbolo \u201Cmaior que\u201D (",(0,s.jsx)(o.em,{children:">"}),') a ordem \xe9 crescente. Se passa o s\xedmbolo "menor que " (',(0,s.jsx)(o.em,{children:"<"}),") a ordem \xe9 decrescente. Se n\xe3o especifica o crit\xe9rio de ordena\xe7\xe3o, a ordem por padr\xe3o \xe9 crescente."]}),"\n",(0,s.jsxs)(o.p,{children:["O par\xe2metro ",(0,s.jsx)(o.em,{children:"formula"})," pode ser de tipo Alfa, Real (Num\xe9rico), Inteiro, Inteiro longo, Data, Hora ou Booleano."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Aviso:"})," Par\xe2metros ($1...$n) n\xe3o s\xe3o compat\xedveis em ",(0,s.jsx)(o.em,{children:"formula"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota: Se"})," ",(0,s.jsx)(o.strong,{children:"ORDER BY FORMULA"})," for usado em conjun\xe7\xe3o com ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"}),", ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/break-level",children:"BREAK LEVEL"})," e uma vari\xe1vel local, os tr\xeas comandos devem ser executados, desde o mesmo m\xe9todo, sen\xe3o um erro ser\xe1 gerado. Isso \xe9 porque ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})," precisa reavaliar ",(0,s.jsx)(o.em,{children:"formula"})," para computar as quebras de valores. Por exemplo, se executar ",(0,s.jsx)(o.strong,{children:"ORDER BY FORMULA"}),"( [T1] ; [T1]f1 > $value) a partir de um m\xe9todo, a ordena\xe7\xe3o \xe9 feita e o m\xe9todo termina. Qualquer chamada subsequente a ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})," e ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/break-level",children:"BREAK LEVEL"})," vai falhar porque ",(0,s.jsx)(o.em,{children:"$value"})," n\xe3o existe mais e ",(0,s.jsx)(o.em,{children:"formula"})," n\xe3o pode ser reavaliada."]}),"\n",(0,s.jsxs)(o.p,{children:["Sem importar a maneira em que se define uma ordena\xe7\xe3o, se a opera\xe7\xe3o de ordena\xe7\xe3o vai a demorar um certo tempo, 4D mostra automaticamente uma mensagem que cont\xe9m um term\xf4metro de progresso. Estas mensagens podem ser ativadas e desativadas utilizando os comandos ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/messages-on",children:"MESSAGES ON"})," e ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/messages-off",children:"MESSAGES OFF"}),". Se for mostrado o term\xf4metro de progress\xe3o, o usu\xe1rio pode clicar no bot\xe3o Deter para interromper a ordena\xe7\xe3o. Se a ordena\xe7\xe3o \xe9 completada corretamente, OK toma o valor 1. Do contr\xe1rio, se a ordena\xe7\xe3o for interrompida, OK toma o valor 0 (zero)."]}),"\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"4D Server"}),": a partir da vers\xe3o 11 de 4D Server, este comando \xe9 executado no servidor, o qual otimiza sua execu\xe7\xe3o. Note que quando as vari\xe1veis s\xe3o chamadas diretamente na express\xe3o, a ordena\xe7\xe3o se calcula com o valor da vari\xe1vel na m\xe1quina cliente.Por exemplo, ",(0,s.jsx)(o.strong,{children:"ORDER BY FORMULA([mytable];[mytable]myfield*myvariable)"})," ser\xe1 executado no servidor mas com os conte\xfados de minhavariavel da m\xe1quina cliente."]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:[(0,s.jsx)(o.strong,{children:"Nota de Compatibilidade:"})," At\xe9 4D Server v11, esse comando era executado na m\xe1quina cliente. Para compatibilidade reversa, essa opera\xe7\xe3o \xe9 mantida em bancos de dados convertidos. Entretanto, uma propriedade de compatibilidade ou um seletor do comando ",(0,s.jsx)(o.a,{href:"/docs/pt/commands/set-database-parameter",children:"SET DATABASE PARAMETER"})," ativa execu\xe7\xe3o do lado do servidor em bancos de dados convertidos."]}),"\n"]}),"\n",(0,s.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(o.p,{children:"Este exemplo ordena os registros da tabela [Pessoas] em ordem descendente, baseado na longitude do sobrenome de cada pessoa. O registro da pessoa com o sobrenome mais longo ser\xe1 o primeiro registro da sele\xe7\xe3o atual:"}),"\n",(0,s.jsx)(o.pre,{children:(0,s.jsx)(o.code,{className:"language-4d",children:"\xa0ORDER BY FORMULA([Pessoas];Length([Pessoas]Sobrenome);<)\n"})}),"\n",(0,s.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/commands/order-by",children:"ORDER BY"})}),"\n",(0,s.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{}),(0,s.jsx)(o.th,{})]})}),(0,s.jsxs)(o.tbody,{children:[(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"N\xfamero do comando"}),(0,s.jsx)(o.td,{children:"300"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Thread-seguro"}),(0,s.jsx)(o.td,{children:"\u2713"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(o.td,{children:"OK"})]}),(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"Modificar o registro atual"}),(0,s.jsx)(o.td,{})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return t},a:function(){return d}});var a=r(667294);let s={},n=a.createContext(s);function d(e){let o=a.useContext(n);return a.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function t(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(n.Provider,{value:o},e.children)}}}]);