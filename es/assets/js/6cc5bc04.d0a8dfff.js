"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73700"],{757257:function(e,s,n){n.r(s),n.d(s,{metadata:()=>r,contentTitle:()=>l,default:()=>m,assets:()=>o,toc:()=>t,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/sum-squares","title":"Sum squares","description":"Sum squares ( series ) : Real","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/sum-squares.md","sourceDirName":"commands-legacy","slug":"/commands/sum-squares","permalink":"/docs/es/commands/sum-squares","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsum-squares.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"sum-squares","title":"Sum squares","slug":"/commands/sum-squares","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Sum","permalink":"/docs/es/commands/sum"},"next":{"title":"Variance","permalink":"/docs/es/commands/variance"}}'),a=n("785893"),d=n("250065");let i={id:"sum-squares",title:"Sum squares",slug:"/commands/sum-squares",displayed_sidebar:"docs"},l=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Sum squares"})," ( ",(0,a.jsx)(s.em,{children:"series"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe1metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"series"}),(0,a.jsx)(s.td,{children:"Field, Array"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"Datos para los cuales se devuelve la suma de cuadrados"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Resultado"}),(0,a.jsx)(s.td,{children:"Real"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Suma de cuadrados de series"})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Sum squares"})," devuelve la suma de cuadrados de ",(0,a.jsx)(s.em,{children:"series"}),". Si ",(0,a.jsx)(s.em,{children:"series"})," es un campo indexado, el \xedndice se utiliza para calcular la suma de cuadrados."]}),"\n",(0,a.jsxs)(s.p,{children:["Puede pasar un array (de una o dos dimensiones) en ",(0,a.jsx)(s.em,{children:"series"}),". En este caso, el array debe ser de tipo Entero, Entero largo o Real."]}),"\n",(0,a.jsx)(s.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsxs)(s.p,{children:["El siguiente ejemplo es un m\xe9todo para la variable ",(0,a.jsx)(s.em,{children:"vCuadrados"}),". El m\xe9todo de objeto asigna la suma de cuadrados de una serie de datos a ",(0,a.jsx)(s.em,{children:"vCuadrados"}),". La variable ",(0,a.jsx)(s.em,{children:"vCuadrados"})," se imprime en la \xfaltima ruptura del informe:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0vCuadrados:=Sum squares([Tabla1]SeriesDatos)\n"})}),"\n",(0,a.jsx)(s.p,{children:"El siguiente m\xe9todo se llama para imprimir los registros en la selecci\xf3n y activar el proceso de ruptura:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'\xa0ALL RECORDS([Tabla1])\n\xa0ORDER BY([Tabla1];[Tabla1]SeriesDatos;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Tabla1]SeriesDatos)\n\xa0OUTPUT FORM([Tabla1];"Imprimir formulario")\n\xa0PRINT SELECTION([Tabla1])\n'})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota:"})," el par\xe1metro del comando ",(0,a.jsx)(s.a,{href:"/docs/es/commands/break-level",children:"BREAK LEVEL"})," debe ser igual al n\xfamero de rupturas en su informe. Para mayor informaci\xf3n sobre el proceso de rupturas, consulte ",(0,a.jsx)(s.em,{children:"Impresi\xf3n"}),"."]}),"\n",(0,a.jsx)(s.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(s.p,{children:"Este ejemplo permite obtener la suma de cuadrados de los valores ubicados en un array:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vSumSquares:=Sum squares($ArrGrades)\n"})}),"\n",(0,a.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/es/commands/average",children:"Average"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/es/commands/std-deviation",children:"Std deviation"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/es/commands/sum",children:"Sum"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/es/commands/variance",children:"Variance"})]}),"\n",(0,a.jsx)(s.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"N\xfamero de comando"}),(0,a.jsx)(s.td,{children:"28"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Hilo seguro"}),(0,a.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return l},a:function(){return i}});var r=n(667294);let a={},d=r.createContext(a);function i(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function l(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);