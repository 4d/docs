"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30206],{834585:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>t,contentTitle:()=>d,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>m});var a=r(474848),n=r(28453);const s={id:"max",title:"Max",slug:"/commands/max",displayed_sidebar:"docs"},d=void 0,i={id:"commands-legacy/max",title:"Max",description:"Max ( s\xe9ries {; atributoRota} ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/max.md",sourceDirName:"commands-legacy",slug:"/commands/max",permalink:"/docs/pt/commands/max",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmax.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"max",title:"Max",slug:"/commands/max",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Average",permalink:"/docs/pt/commands/average"},next:{title:"Min",permalink:"/docs/pt/commands/min"}},t={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){const o={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Max"})," ( ",(0,a.jsx)(o.em,{children:"s\xe9ries"})," {; ",(0,a.jsx)(o.em,{children:"atributoRota"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"s\xe9ries"}),(0,a.jsx)(o.td,{children:"Field, Array"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Dados para os quais se retorna o valor m\xe1ximo"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"atributoRota"}),(0,a.jsx)(o.td,{children:"Text"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Rota do atributo para o qual retornar o valor m\xe1ximo"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Resultado"}),(0,a.jsx)(o.td,{children:"Date, Number"}),(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Valor m\xe1ximo na s\xe9rie"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Max"})," retorna o valor m\xe1ximo em ",(0,a.jsx)(o.em,{children:"series"}),". Se ",(0,a.jsx)(o.em,{children:"series"})," \xe9 um campo indexado, o \xedndice \xe9 utiliizado para buscar o m\xe1ximo valor."]}),"\n",(0,a.jsx)(o.p,{children:"Voc\xea pode passar um array (uma ou duas dimens\xf5es) em series. Neste caso, o array deve ser do tipo inteiro, inteiro longo, real ou tipo dados."}),"\n",(0,a.jsxs)(o.p,{children:["Se a sele\xe7\xe3o de ",(0,a.jsx)(o.em,{children:"series"})," estiver vazia, ",(0,a.jsx)(o.strong,{children:"Max"})," retorna 0."]}),"\n",(0,a.jsxs)(o.p,{children:["Este comando aceita um par\xe2metro opcional ",(0,a.jsx)(o.em,{children:"atributoRota"})," do tipo Texto, que pode usar se ",(0,a.jsx)(o.em,{children:"series"}),' for um campo objeto. Permite que defina a rota do atributo a computar. Use a nota\xe7\xe3o padr\xe3o ponto para definir rotas para atributos aninhados, por exemplo "company.address.number". Lembre que nomes de atributo objeto diferenciam entre mai\xfasculas e min\xfasculas.']}),"\n",(0,a.jsx)(o.p,{children:"Apenas valores de atributo num\xe9rico s\xe3o computados. Se houver valores na rota atributo que n\xe3o forem do tipo num\xe9rico, ser\xe3o ignoradas."}),"\n",(0,a.jsx)(o.p,{children:"Se o comando for executado corretamente, a vari\xe1vel sistema OK toma o valor 1. Se for interrompida (por exemplo se o usu\xe1rio clicar no bot\xe3o Deter o term\xf4metro de progresso), a vari\xe1vel OK toma o valor 0."}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(o.p,{children:["O exemplo a seguir \xe9 um m\xe9todo de objeto da vari\xe1vel ",(0,a.jsx)(o.em,{children:"vMax"})," localizada na \xe1rea de quebra 0 do formul\xe1rio. A vari\xe1vel \xe9 impressa ao final do relat\xf3rio. O m\xe9todo de objeto atribui o valor m\xe1ximo de campo \xe0 vari\xe1vel, o qual \xe9 impresso na \xfaltima quebra do relat\xf3rio."]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0vMax:=Max([Empregados] Sal\xe1rio)\n"})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"}),' Tenha certeza que o evento formul\xe1rio "On printing break" for selecionado para a vari\xe1vel.']}),"\n",(0,a.jsx)(o.p,{children:"O m\xe9todo a seguir \xe9 chamada para imprimir os registros da sele\xe7\xe3o e ativar o processo de quebra:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0ALL RECORDS([Empregados])\n\xa0ORDER BY([Empregados];[Empregados]Sobrenome;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Empregados]Sal\xe1rio)\n\xa0FORM SET OUTPUT([Empregados];"Imprimir formul\xe1rio")\n\xa0PRINT SELECTION([Empregados])\n'})}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Nota:"})," o par\xe2metro do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/break-level",children:"BREAK LEVEL"})," deve ser igual ao n\xfamero de quebras em seu relat\xf3rio. Para maior informa\xe7\xe3o sobre quebras, consulte os comandos do tema ",(0,a.jsx)(o.em,{children:"Imprimir"}),"."]}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(o.p,{children:"Este exemplo permite obter o valor mais elevado de um array:"}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vMax:=Max($ArrGrades)\n"})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsxs)(o.p,{children:["Para um exemplo de computar um atributo campo objeto, veja o exemplo 3 da descri\xe7\xe3o do comando ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/average",children:"Average"}),"."]}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(o.p,{children:(0,a.jsx)(o.a,{href:"/docs/pt/commands/min",children:"Min"})})]})}function c(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>d,x:()=>i});var a=r(296540);const n={},s=a.createContext(n);function d(e){const o=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),a.createElement(s.Provider,{value:o},e.children)}}}]);