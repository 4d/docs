"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34516"],{842903:function(e,n,s){s.r(n),s.d(n,{default:()=>u,frontMatter:()=>t,metadata:()=>a,assets:()=>o,toc:()=>l,contentTitle:()=>r});var a=JSON.parse('{"id":"commands-legacy/describe-query-execution","title":"DESCRIBE QUERY EXECUTION","description":"DESCRIBE QUERY EXECUTION ( estado )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/describe-query-execution.md","sourceDirName":"commands-legacy","slug":"/commands/describe-query-execution","permalink":"/docs/es/20-R7/commands/describe-query-execution","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdescribe-query-execution.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"describe-query-execution","title":"DESCRIBE QUERY EXECUTION","slug":"/commands/describe-query-execution","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"B\xfasquedas","permalink":"/docs/es/20-R7/commands/theme/Queries"},"next":{"title":"Find in field","permalink":"/docs/es/20-R7/commands/find-in-field"}}'),i=s("785893"),d=s("250065");let t={id:"describe-query-execution",title:"DESCRIBE QUERY EXECUTION",slug:"/commands/describe-query-execution",displayed_sidebar:"docs"},r=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"DESCRIBE QUERY EXECUTION"})," ( ",(0,i.jsx)(n.em,{children:"estado"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsx)(n.tbody,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"estado"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"True=Activar an\xe1lisis de b\xfasquedas internas, False=Desactivar el an\xe1lisis de b\xfasquedas internas"})]})})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando DESCRIBE QUERY EXECUTION permite activar o desactivar el modo de an\xe1lisis de la ejecuci\xf3n de b\xfasquedas para el proceso actual. El comando funciona \xfanicamente en el contexto de los comandos de b\xfasqueda del lenguaje 4D tal como ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/query",children:"QUERY"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["La llamada del comando con el par\xe1metro ",(0,i.jsx)(n.em,{children:"estado"})," en ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/true",title:"True",children:"True"})," activa el modo del an\xe1lisis de b\xfasquedas. En este modo, el motor de 4D registra internamente dos series de informaciones espec\xedficas para cada b\xfasqueda posterior efectuada sobre los datos:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Una descripci\xf3n interna detallada de la b\xfasqueda justo antes de su ejecuci\xf3n, en otras palabras, la b\xfasqueda previa (el plan de b\xfasqueda),"}),"\n",(0,i.jsx)(n.li,{children:"Una descripci\xf3n interna detallada de la b\xfasqueda que se ejecut\xf3 realmente (la ruta de b\xfasqueda)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["La informaci\xf3n registrada incluye el tipo de b\xfasqueda (indexada, secuencial), el n\xfamero de registro encontrados y el tiempo necesario para cada criterio de b\xfasqueda a ejecutar. Puede leer esta informaci\xf3n utilizando los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/last-query-plan",children:"Last query plan"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/last-query-path",children:"Last query path"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Por lo general, la descripci\xf3n del plan de una b\xfasqueda y su ruta son id\xe9nticos, pero podr\xedan eventualmente ser diferentes porque 4D podr\xeda implementar optimizaciones din\xe1micas durante la ejecuci\xf3n de la b\xfasqueda para mejorar el rendimiento. Por ejemplo, una b\xfasqueda \xedndexada puede convertirse din\xe1micamente en una b\xfasqueda secuencial si el motor 4D estima que ser\xeda m\xe1s r\xe1pida, este es el caso, cuando el n\xfamero de registros en los cuales se efect\xfaa la b\xfasqueda es bajo."}),"\n",(0,i.jsxs)(n.p,{children:["Pase ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/false",title:"False",children:"False"})," en el par\xe1metro ",(0,i.jsx)(n.em,{children:"estado"})," cuando no necesite analizar las b\xfasquedas. El modo de an\xe1lisis de la ejecuci\xf3n de las b\xfasquedas puede volver lenta la aplicaci\xf3n."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente ejemplo ilustra el tipo de informaci\xf3n obtenida utilizando estos comandos:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $vResultPlan;$vResultPath : Text\n\xa0DESCRIBE QUERY EXECUTION(True)\xa0//modo an\xe1lisis\n\xa0QUERY([Employees];[Employees]LastName="T@";*)\xa0// B\xfasqueda de los empleados cuyo apellido comienza por T...\n\xa0QUERY([Employees];&;[Companies]Name="H@";*)\xa0// que trabajan para una empresa\xa0 cuyo nombre comienza por H\n\xa0QUERY([Employees];&;[Employees]Salary>2500;*)\xa0// cuyo salario es > 2500\n\xa0QUERY([Employees];&;[Cities]Pop<50000)\xa0// que viven en una ciudad con menos de 50 000 habitantes\n\xa0$vResultPlan:=Last query plan(Description in text format)\n\xa0$vResultPath:=Last query path(Description in text format)\n\xa0DESCRIBE QUERY EXECUTION(False)\xa0//Fin del modelo de an\xe1lisis\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Despu\xe9s de ejecutar este c\xf3digo, ",(0,i.jsx)(n.em,{children:"$vResultPlan"})," y ",(0,i.jsx)(n.em,{children:"$vResultPath"})," contienen descripciones de las b\xfasquedas realizadas, por ejemplo:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-RAW",children:"$vResultPlan : \xa0\xa0\xa0Employees.LastName == T@ And  Employees.Salary > 2500 And Join on Table : Companies\xa0 :\xa0  Employees.Company = Companies.Name [index : Companies.Name ] LIKE H@ And Join  on Table : Cities\xa0 :\xa0 Employees.City = Cities.Name [index : Cities.Pop  ] < 50000$vResultPath : (Employees.LastName == T@ And Employees.Salary\xa0 > 2500) And (Join on Table : Companies\xa0 :\xa0 Employees.Company\xa0 = Companies.Name with filter {[index : Companies.Name ]  LIKE H@}) And (Join on Table : Cities\xa0 :\xa0 Employees.City = Cities.Name  with filter {[index : Cities.Pop ] < 50000})\xa0\xa0 (3 registros encontrados en 1  minuto)\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Si la constante Description in XML Format se pasa al comando ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/last-query-path",title:"Last query path",children:"Last query path"}),", ",(0,i.jsx)(n.em,{children:"$vResultPath"})," contiene la descripci\xf3n de la b\xfasqueda expresada en XML:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-XML",children:'$vResultPath : \n\xa0\xa0\xa0<QueryExecution>\n\xa0\xa0\xa0\xa0\xa0\xa0<steps description="And" time="0" recordsfounds="1227">\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<steps description="[Merge] : ACTORS with CITIES" time="13" recordsfounds="1227">\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0<steps  description="[Join] : ACTORS.Birth_City_ID =CITIES.City_ID" time="13"  recordsfounds="1227"/>\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0</steps>\n\xa0\xa0\xa0\xa0\xa0\xa0</steps>\n\xa0\xa0\xa0</QueryExecution>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/last-query-path",children:"Last query path"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/last-query-plan",children:"Last query plan"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1044"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return t}});var a=s(667294);let i={},d=a.createContext(i);function t(e){let n=a.useContext(d);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),a.createElement(d.Provider,{value:n},e.children)}}}]);