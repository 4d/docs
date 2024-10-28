"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[41005],{349220:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>d,metadata:()=>c,toc:()=>t});var a=s(474848),r=s(28453);const d={id:"variance",title:"Variance",slug:"/commands/variance",displayed_sidebar:"docs"},i=void 0,c={id:"commands-legacy/variance",title:"Variance",description:"Variance ( series ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/variance.md",sourceDirName:"commands-legacy",slug:"/commands/variance",permalink:"/docs/es/commands/variance",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fvariance.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"variance",title:"Variance",slug:"/commands/variance",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"Sum squares",permalink:"/docs/es/commands/sum-squares"},next:{title:"PHP Execute",permalink:"/docs/es/commands/php-execute"}},l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function o(e){const n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Variance"})," ( ",(0,a.jsx)(n.em,{children:"series"})," ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"series"}),(0,a.jsx)(n.td,{children:"Field, Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Datos para los cuales se devuelve la varianza"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Real"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Varianza de series"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Variance"})," devuelve la varianza para ",(0,a.jsx)(n.em,{children:"series"}),". Si ",(0,a.jsx)(n.em,{children:"series"})," es un campo indexado, el \xedndice se utiliza para calcular la varianza."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede pasar en ",(0,a.jsx)(n.em,{children:"series"})," un array (de una o dos dimensiones). En este caso, el array debe ser de tipo Entero, Entero largo o Real."]}),"\n",(0,a.jsx)(n.p,{children:"La varianza de un conjunto de valores es el promedio de los cuadrados de las desviaciones est\xe1ndar. La varianza media mide la dispersi\xf3n de valores alrededor de la media. 4D utiliza la siguiente f\xf3rmula de varianza:"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Varianza(x) = Sum (x-m)*(x-m)/(n-1)"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"m = Media"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"n = N\xfamero de valores"})]}),"\n",(0,a.jsxs)(n.p,{children:["Si los valores no se consideran una muestra, multiplique el valor devuelto por ",(0,a.jsx)(n.strong,{children:"Variance"})," por (n-1)/n."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsxs)(n.p,{children:["El siguiente ejemplo es un m\xe9todo de objeto para la variable ",(0,a.jsx)(n.em,{children:"var"}),". El m\xe9todo de objeto asigna la suma de cuadrados de una serie de datos a ",(0,a.jsx)(n.em,{children:"var"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0var:=Variance(Estudiantes]Notas)\n"})}),"\n",(0,a.jsx)(n.p,{children:"El siguiente m\xe9todo se llama para imprimir los registros en la selecci\xf3n y activar el proceso de ruptura:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Estudiantes])\n\xa0ORDER BY([Estudiantes];[Estudiantes]Clase;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Estudiantes]Notas)\n\xa0OUTPUT FORM([Estudiantes];"Imprimir formulario")\n\xa0PRINT SELECTION([Estudiantes])\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," el par\xe1metro del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/break-level",children:"BREAK LEVEL"})," debe ser igual al n\xfamero de rupturas en su informe. Para mayor informaci\xf3n sobre el proceso de rupturas, consulte ",(0,a.jsx)(n.em,{children:"Impresi\xf3n"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"Este ejemplo permite obtener la varianza de valores ubicados en un array:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vVariance:=Variance($ArrGrades)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/average",children:"Average"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/std-deviation",children:"Std deviation"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/sum",children:"Sum"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/sum-squares",children:"Sum squares"})]})]})}function m(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>c});var a=s(296540);const r={},d=a.createContext(r);function i(e){const n=a.useContext(d);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);