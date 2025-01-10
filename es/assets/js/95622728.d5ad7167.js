"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["75246"],{422849:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>t,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/min","title":"Min","description":"Min ( series {; rutaAtributo} ) : any","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/min.md","sourceDirName":"commands-legacy","slug":"/commands/min","permalink":"/docs/es/commands/min","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmin.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"min","title":"Min","slug":"/commands/min","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Max","permalink":"/docs/es/commands/max"},"next":{"title":"Std deviation","permalink":"/docs/es/commands/std-deviation"}}'),a=r("785893"),l=r("250065");let i={id:"min",title:"Min",slug:"/commands/min",displayed_sidebar:"docs"},d=void 0,o={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ejemplo 3",id:"ejemplo-3",level:4},{value:"Ejemplo 4",id:"ejemplo-4",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Min"})," ( ",(0,a.jsx)(n.em,{children:"series"})," {; ",(0,a.jsx)(n.em,{children:"rutaAtributo"}),"} ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"series"}),(0,a.jsx)(n.td,{children:"Field, Array"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Datos para los cuales devuelve el valor m\xednimo"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"rutaAtributo"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Ruta de atributo para el cual calcular el valor m\xednimo"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Date, Number"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Valor m\xednimo en series"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Min"})," devuelve el valor m\xednimo en ",(0,a.jsx)(n.em,{children:"series"}),". Si ",(0,a.jsx)(n.em,{children:"series"})," es un campo indexado, el \xedndice se utiliza para encontrar el valor m\xednimo."]}),"\n",(0,a.jsxs)(n.p,{children:["Si la selecci\xf3n de ",(0,a.jsx)(n.em,{children:"series"})," est\xe1 vac\xeda, ",(0,a.jsx)(n.strong,{children:"Min"})," devuelve 0."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede pasar en ",(0,a.jsx)(n.em,{children:"series"})," un array (de una o dos dimensiones). En este caso, el array debe ser de tipo Entero, Entero largo, Real o Fecha."]}),"\n",(0,a.jsxs)(n.p,{children:["Este comando acepta un par\xe1metro opcional de tipo texto ",(0,a.jsx)(n.em,{children:"rutaAtributo"}),", que puede utilizar si ",(0,a.jsx)(n.em,{children:"series"}),' es un campo de tipo Objeto. Le permite definir la ruta del atributo a calcular. Utilice la notaci\xf3n est\xe1ndar para definir las rutas de los atributos anidados, por ejemplo "company.address.number". Recuerde que los nombres de los atributos de objetos tienen en cuanta las may\xfasculas y min\xfasculas.',(0,a.jsx)(n.br,{}),"\nS\xf3lo los valores num\xe9ricos de los atributos se utilizan para el calculo. Si hay valores en la ruta del atributo que no son de tipo num\xe9rico, se omiten."]}),"\n",(0,a.jsxs)(n.p,{children:["Si el comando se ejecuta correctamente, la variable sistema OK toma el valor 1. Si se interrumpe (por ejemplo si el usuario hace clic en el bot\xf3n ",(0,a.jsx)(n.strong,{children:"Detener"})," del term\xf3metro de progreso), la variable OK toma el valor 0."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsxs)(n.p,{children:["El siguiente ejemplo es un m\xe9todo de objeto para la variable ",(0,a.jsx)(n.em,{children:"vMin"})," ubicada en el \xe1rea de ruptura 0 del formulario. La variable se imprime al final del informe. El m\xe9todo de objeto asigna el valor m\xednimo del campo a la variable, el cual se imprime en la \xfaltima ruptura del informe:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0vMin:=Min([Employees]Salary)\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Note:"}),' aseg\xfarese de que el evento formulario "On printing break" est\xe9 seleccionado para la variable.']}),"\n",(0,a.jsx)(n.p,{children:"El siguiente m\xe9todo se llama para imprimir los registros en la selecci\xf3n y activar el proceso de ruptura:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ALL RECORDS([Employees])\n\xa0ORDER BY([Employees];[Employees]Company;>)\n\xa0BREAK LEVEL(1)\n\xa0ACCUMULATE([Employees]Salary)\n\xa0FORM SET OUTPUT([Employees];"PrintForm")\n\xa0PRINT SELECTION([Employees])\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," el par\xe1metro del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/break-level",children:"BREAK LEVEL"})," debe ser igual al n\xfamero de rupturas en su informe. Para mayor informaci\xf3n sobre rupturas, consulte el cap\xedtulo ",(0,a.jsx)(n.em,{children:"Impresi\xf3n"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsx)(n.p,{children:"El siguiente ejemplo busca la venta m\xe1s baja de un empleado y muestra el resultado en una caja de di\xe1logo de alerta. Las cantidades vendidas son guardadas en el subcampo [Empleados]VentasDolares:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ALERT("Ventaminima = "+String(Min([Empleados]VentasDolares)))\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,a.jsx)(n.p,{children:"Este ejemplo obtiene el valor m\xednimo en el array:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY REAL($ArrGrades;0)\n\xa0QUERY([Exams];[Exams]Exam_Date=!01/07/11!)\n\xa0SELECTION TO ARRAY([Exams]Exam_Grade;$ArrGrades)\n\xa0vMin:=Min($ArrGrades)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-4",children:"Ejemplo 4"}),"\n",(0,a.jsxs)(n.p,{children:["Para un ejemplo de c\xe1lculo de un atributo campo de objeto, consulte el ejemplo 3 del comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/average",children:"Average"}),"."]}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/max",children:"Max"})}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"4"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let a={},l=s.createContext(a);function i(e){let n=s.useContext(l);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),s.createElement(l.Provider,{value:n},e.children)}}}]);