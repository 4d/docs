"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72669],{826425:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>t,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>i,toc:()=>m});var a=r(474848),d=r(28453);const n={id:"sum-squares",title:"Sum squares",slug:"/commands/sum-squares",displayed_sidebar:"docs"},o=void 0,i={id:"commands-legacy/sum-squares",title:"Sum squares",description:"Sum squares ( series ) -> Resultado",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sum-squares.md",sourceDirName:"commands-legacy",slug:"/commands/sum-squares",permalink:"/docs/pt/commands/sum-squares",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsum-squares.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"sum-squares",title:"Sum squares",slug:"/commands/sum-squares",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Sum",permalink:"/docs/pt/commands/sum"},next:{title:"Variance",permalink:"/docs/pt/commands/variance"}},t={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){const s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Sum squares"})," ( ",(0,a.jsx)(s.em,{children:"series"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe2metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"series"}),(0,a.jsx)(s.td,{children:"Field, Array"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Dados para os quais se retorna a soma de quadrados."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Resultado"}),(0,a.jsx)(s.td,{children:"Real"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Soma dos quadrados dos valores da s\xe9rie"})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Sum squares"})," devolve a soma de quadrados de ",(0,a.jsx)(s.em,{children:"series"}),". Se ",(0,a.jsx)(s.em,{children:"series"})," for um campo indexado, o \xedndice \xe9 utilizado para calcular a soma de quadrados. S\xf3 pode utilizar um campo com esta fun\xe7\xe3o quando imprime um relat\xf3rio."]}),"\n",(0,a.jsxs)(s.p,{children:["Voc\xea pode passar um array (uma ou duas dimens\xf5es) em ",(0,a.jsx)(s.em,{children:"series"}),". Neste caso, o array deve ser do tipo inteiro, inteiro longo ou real."]}),"\n",(0,a.jsx)(s.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,a.jsxs)(s.p,{children:["O exemplo a seguir \xe9 um m\xe9todo para a vari\xe1vel ",(0,a.jsx)(s.em,{children:"vQuadrados"}),". O m\xe9todo de objeto atribui a soma de quadrados de uma s\xe9rie de dados a ",(0,a.jsx)(s.em,{children:"vQuadrados"}),". A vari\xe1vel ",(0,a.jsx)(s.em,{children:"vQuadrados"})," se imprime na \xfaltima quebra do relat\xf3rio:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0vQuadrados:=Sum squares([Tabela1]SeriesDados)\n"})}),"\n",(0,a.jsx)(s.p,{children:"O m\xe9todo a seguir se chama para imprimir os registros na sele\xe7\xe3o e ativar o processo de quebra:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'\xa0ALL RECORDS([Tabela1])\n\xa0ORDER BY([Tabela1];[Tabela1]SeriesDados;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Tabela1]SeriesDados)\n\xa0OUTPUT FORM([Tabela1];"Imprimir formul\xe1rio")\n\xa0PRINT SELECTION([Tabela1])\n'})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota:"})," o par\xe2metro do comando ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/break-level",children:"BREAK LEVEL"})," deve ser igual ao n\xfamero de quebras em seu relat\xf3rio. Para maior informa\xe7\xe3o sobre o processo de quebras, consulte os comandos do cap\xedtulo ",(0,a.jsx)(s.em,{children:"Imprimir"}),"."]}),"\n",(0,a.jsx)(s.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,a.jsx)(s.p,{children:"Este exemplo permite obter a soma de quadrados dos valores localizados num array:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vSumSquares:=Sum squares($ArrGrades)\n"})}),"\n",(0,a.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/pt/commands/average",children:"Average"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/pt/commands/std-deviation",children:"Std deviation"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/pt/commands/sum",children:"Sum"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/pt/commands/variance",children:"Variance"})]})]})}function l(e={}){const{wrapper:s}={...(0,d.R)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>o,x:()=>i});var a=r(296540);const d={},n=a.createContext(d);function o(e){const s=a.useContext(n);return a.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),a.createElement(n.Provider,{value:s},e.children)}}}]);