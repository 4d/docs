"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4357"],{549212:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>o,metadata:()=>d,assets:()=>t,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/std-deviation","title":"Std deviation","description":"Std deviation ( series ) : Real","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/std-deviation.md","sourceDirName":"commands-legacy","slug":"/commands/std-deviation","permalink":"/docs/pt/20-R7/commands/std-deviation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstd-deviation.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"std-deviation","title":"Std deviation","slug":"/commands/std-deviation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Min","permalink":"/docs/pt/20-R7/commands/min"},"next":{"title":"Sum","permalink":"/docs/pt/20-R7/commands/sum"}}'),r=n("785893"),a=n("250065");let o={id:"std-deviation",title:"Std deviation",slug:"/commands/std-deviation",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Std deviation"})," ( ",(0,r.jsx)(s.em,{children:"series"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"series"}),(0,r.jsx)(s.td,{children:"Field, Array"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Dados para os quais se retorna o desvio padr\xe3o"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Resultado"}),(0,r.jsx)(s.td,{children:"Real"}),(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Desvio padr\xe3o da s\xe9rie"})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(s.p,{children:["Std deviation devolve o desvio padr\xe3o de ",(0,r.jsx)(s.em,{children:"series"}),". Se ",(0,r.jsx)(s.em,{children:"series"})," for um campo indexado, o \xedndice \xe9 utilizado para calcular o desvio padr\xe3o."]}),"\n",(0,r.jsxs)(s.p,{children:["Voc\xea pode passar um array (uma ou duas dimens\xf5es) em ",(0,r.jsx)(s.em,{children:"series"}),". Neste caso, o array deve ser do tipo inteiro, inteiro longo ou real."]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,r.jsxs)(s.p,{children:["O exemplo a seguir \xe9 um m\xe9todo de objeto para a vari\xe1vel ",(0,r.jsx)(s.em,{children:"vDesv"}),". O m\xe9todo de objeto atribui o desvio padr\xe3o de uma s\xe9rie de dados a ",(0,r.jsx)(s.em,{children:"vDesv"}),":"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0vDesv:=Std deviation([Tabela1]SeriesDados)\n"})}),"\n",(0,r.jsx)(s.p,{children:"O m\xe9todo a seguir \xe9 chamado para imprimir os registros na sele\xe7\xe3o e ativar o processo de quebra:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'\xa0ALL RECORDS([Tabela1])\n\xa0ORDER BY([Tabla1];[Tabela1]SeriesDados;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Tabela1]SeriesDados)\n\xa0OUTPUT FORM([Tabela1];"Imprimir formul\xe1rio")\n\xa0PRINT SELECTION([Tabela1])\n'})}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"Nota:"})," o par\xe2metro do comando ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/break-level",children:"BREAK LEVEL"})," deve ser igual ao n\xfamero de quebras de seu relat\xf3rio. Para maior informa\xe7\xe3o sobre quebras, consulte os comandos do cap\xedtulo ",(0,r.jsx)(s.em,{children:"Imprimir"}),"."]}),"\n",(0,r.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,r.jsx)(s.p,{children:"Este exemplo obt\xe9m o desvio padr\xe3o de uma s\xe9rie de valores localizados num array:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vStdDev:=Std deviation($ArrGrades)\n"})}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/average",children:"Average"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/sum",children:"Sum"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/sum-squares",children:"Sum squares"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/variance",children:"Variance"})]}),"\n",(0,r.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"26"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return i},a:function(){return o}});var d=n(667294);let r={},a=d.createContext(r);function o(e){let s=d.useContext(a);return d.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),d.createElement(a.Provider,{value:s},e.children)}}}]);