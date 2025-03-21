"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62661"],{735015:function(e,r,n){n.r(r),n.d(r,{default:()=>c,frontMatter:()=>d,metadata:()=>o,assets:()=>t,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"commands-legacy/min","title":"Min","description":"Min ( series {; atributoRota} ) : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/min.md","sourceDirName":"commands-legacy","slug":"/commands/min","permalink":"/docs/pt/commands/min","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmin.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"min","title":"Min","slug":"/commands/min","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Max","permalink":"/docs/pt/commands/max"},"next":{"title":"Std deviation","permalink":"/docs/pt/commands/std-deviation"}}'),a=n("785893"),s=n("250065");let d={id:"min",title:"Min",slug:"/commands/min",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let r={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Min"})," ( ",(0,a.jsx)(r.em,{children:"series"})," {; ",(0,a.jsx)(r.em,{children:"atributoRota"}),"} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"series"}),(0,a.jsx)(r.td,{children:"Field, Array"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Dados para os quais se retorna o valor m\xednimo"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"atributoRota"}),(0,a.jsx)(r.td,{children:"Text"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Rota do atributo para o qual retorna o valor m\xednimo"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Resultado"}),(0,a.jsx)(r.td,{children:"Date, Number"}),(0,a.jsx)(r.td,{children:"\u2190"}),(0,a.jsx)(r.td,{children:"Valor m\xednimo em s\xe9ries"})]})]})]}),"\n",(0,a.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["Min devolve o m\xednimo valor em ",(0,a.jsx)(r.em,{children:"series"}),". Se ",(0,a.jsx)(r.em,{children:"series"})," for um campo indexado, o \xedndice \xe9 utilizado para encontrar o valor m\xednimo."]}),"\n",(0,a.jsxs)(r.p,{children:["Se a sele\xe7\xe3o de ",(0,a.jsx)(r.em,{children:"series"})," est\xe1 vazia, Min devolve 0."]}),"\n",(0,a.jsxs)(r.p,{children:["Voc\xea pode passar um array (uma ou duas dimens\xf5es) em ",(0,a.jsx)(r.em,{children:"series"}),". Neste caso, o array deve ser do tipo inteiro, inteiro longo, real ou tipo dados."]}),"\n",(0,a.jsx)(r.p,{children:'Este comando aceita um par\xe2metro opcional atribCaminho do tipo Texto, que pode usar se series for um campo objeto. Permite que defina a rota do atributo a computar. Usar a nota\xe7\xe3o padr\xe3o ponto para definir rotas para atributos aninhados, por exemplo "company.address.number". Lembre que nomes de atributos objeto diferenciam entre min\xfasculas e mai\xfasculas.'}),"\n",(0,a.jsx)(r.p,{children:"Apenas valores de atributos num\xe9ricos s\xe3o computados. Se estes valores no atributo rota que n\xe3o s\xe3o do tipo num\xe9rico que s\xe3o ignorados."}),"\n",(0,a.jsx)(r.p,{children:"Se o comando \xe9 executado corretamente, a vari\xe1vel sistema OK toma o valor 1. Se for interrompida (por exemplo se o usuario cliar no bot\xe3o Parar o term\xf4metro de progresso), a vari\xe1vel OK toma o valor 0."}),"\n",(0,a.jsx)(r.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(r.p,{children:["O exemplo a seguir \xe9 um m\xe9todo de objeto para a vari\xe1vel ",(0,a.jsx)(r.em,{children:"vMin"})," localizada na \xe1rea de quebra 0 do formul\xe1rio. A vari\xe1vel \xe9 impressa ao final do relat\xf3rio. O m\xe9todo de objeto atribui o valor m\xednimo do campo \xe0 vari\xe1vel, a qual se imprime na \xfaltima quebra do relat\xf3rio:"]}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0vMin:=Min([Empregados]Sal\xe1rio)\n"})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"}),' tenha certeza que o evento de formul\xe1rio "On printing break" est\xe1 selecionado para a vari\xe1vel.']}),"\n",(0,a.jsx)(r.p,{children:"O m\xe9todo a seguir \xe9 chamado para imprimir os registros na sele\xe7\xe3o e ativar o processo de quebra:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0ALL RECORDS([Empregados])\n\xa0ORDER BY([Empregados];[Empregados]Sobrenome;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Empregados]Sal\xe1rio)\n\xa0FORM SET OUTPUT([Empregados];"Imprimir formul\xe1rio")\n\xa0PRINT SELECTION([Empregados])\n'})}),"\n",(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"Nota:"})," o par\xe2metro do comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/break-level",children:"BREAK LEVEL"})," deve ser igual ao n\xfamero de quebras em seu relat\xf3rio. Para maior informa\xe7\xe3o sobre quebras, consulte os comandos do tema ",(0,a.jsx)(r.em,{children:"Imprimir"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(r.p,{children:"O exemplo a seguir procura a venda mais baixa de um empregado e mostra o resultado em uma caixa de di\xe1logo de alerta. As quantidades vendidas s\xe3o guardadas no subcampo [Empregados]VendasDolares:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0ALERT("Vendaminima = "+String(Min([Empregados]VendasDolares)))\n'})}),"\n",(0,a.jsx)(r.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,a.jsx)(r.p,{children:"Este exemplo obt\xe9m o valor m\xednimo no array:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vMin:=Min($ArrGrades)\n"})}),"\n",(0,a.jsx)(r.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,a.jsxs)(r.p,{children:["Para um exemplo de computar um atributo campo objeto, veja o exemplo 3 da descri\xe7\xe3o do comando ",(0,a.jsx)(r.a,{href:"/docs/pt/commands/average",children:"Average"}),"."]}),"\n",(0,a.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/docs/pt/commands/max",children:"Max"})}),"\n",(0,a.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero do comando"}),(0,a.jsx)(r.td,{children:"4"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Thread-seguro"}),(0,a.jsx)(r.td,{children:"\u2713"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,a.jsx)(r.td,{children:"OK"})]})]})]})]})}function c(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return i},a:function(){return d}});var o=n(667294);let a={},s=o.createContext(a);function d(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);