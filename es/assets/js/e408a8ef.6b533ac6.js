"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42328"],{474439:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>d,assets:()=>l,toc:()=>o,contentTitle:()=>t});var d=JSON.parse('{"id":"commands-legacy/std-deviation","title":"Std deviation","description":"Std deviation ( series ) : Real","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/std-deviation.md","sourceDirName":"commands-legacy","slug":"/commands/std-deviation","permalink":"/docs/es/20-R8/commands/std-deviation","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fstd-deviation.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"std-deviation","title":"Std deviation","slug":"/commands/std-deviation","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Min","permalink":"/docs/es/20-R8/commands/min"},"next":{"title":"Sum","permalink":"/docs/es/20-R8/commands/sum"}}'),r=s("785893"),i=s("250065");let a={id:"std-deviation",title:"Std deviation",slug:"/commands/std-deviation",displayed_sidebar:"docs"},t=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Std deviation"})," ( ",(0,r.jsx)(n.em,{children:"series"})," ) : Real"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"series"}),(0,r.jsx)(n.td,{children:"Field, Array"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Datos para los cuales se devuelve la desviaci\xf3n est\xe1ndar"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Real"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Desviaci\xf3n est\xe1ndar de series"})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Std deviation"})," devuelve la desviaci\xf3n est\xe1ndar de ",(0,r.jsx)(n.em,{children:"series"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Si ",(0,r.jsx)(n.em,{children:"series"})," es un campo indexado, el \xedndice se utiliza para calcular la desviaci\xf3n est\xe1ndar."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede pasar en ",(0,r.jsx)(n.em,{children:"series"})," un array (de una o dos dimensiones). En este caso, el array debe ser de tipo Entero, Entero largo o Real."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente ejemplo es un m\xe9todo de objeto para la variable ",(0,r.jsx)(n.em,{children:"vDesv"}),". El m\xe9todo de objeto asigna la desviaci\xf3n est\xe1ndar de una serie de datos a ",(0,r.jsx)(n.em,{children:"vDesv"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0vDesv:=Std deviation([Tabla1]SeriesDatos)\n"})}),"\n",(0,r.jsx)(n.p,{children:"El siguiente m\xe9todo se llama para imprimir los registros en la selecci\xf3n y activar el proceso de ruptura:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Tabla1])\n\xa0ORDER BY([Tabla1];[Tabla1]SeriesDatos;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Tabla1]SeriesDatos)\n\xa0OUTPUT FORM([Tabla1];"Imprimir formulario")\n\xa0PRINT SELECTION([Tabla1])\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," el par\xe1metro del comando ",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/break-level",title:"BREAK LEVEL",children:"BREAK LEVEL"})," debe ser igual al n\xfamero de rupturas de su informe. Para mayor informaci\xf3n sobre rupturas, consulte los comandos de impresi\xf3n."]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,r.jsx)(n.p,{children:"Este ejemplo obtiene la desviaci\xf3n est\xe1ndar de una serie de valores ubicados en un array:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vStdDev:=Std deviation($ArrGrades)\n"})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/average",children:"Average"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/sum",children:"Sum"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/sum-squares",children:"Sum squares"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/es/20-R8/commands/variance",children:"Variance"})]}),"\n",(0,r.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"26"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return a}});var d=s(667294);let r={},i=d.createContext(r);function a(e){let n=d.useContext(i);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),d.createElement(i.Provider,{value:n},e.children)}}}]);