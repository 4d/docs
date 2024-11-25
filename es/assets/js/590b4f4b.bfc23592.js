"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["46172"],{710950:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>o,default:()=>p,assets:()=>a,toc:()=>d,frontMatter:()=>i});var s=JSON.parse('{"id":"REST/filter","title":"$filter","description":"Permite consultar los datos de una clase de datos o de un m\xe9todo (p. ej., $filter=\\"firstName!=\'\' AND salary>30000\\")","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-18/REST/$filter.md","sourceDirName":"REST","slug":"/REST/filter","permalink":"/docs/es/18/REST/filter","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24filter.md%20(18)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"18","frontMatter":{"id":"filter","title":"$filter"},"sidebar":"docs","previous":{"title":"$expand","permalink":"/docs/es/18/REST/expand"},"next":{"title":"$imageformat","permalink":"/docs/es/18/REST/imageformat"}}'),l=n("785893"),t=n("250065");let i={id:"filter",title:"$filter"},o=void 0,a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Utilizar un filtro simple",id:"utilizar-un-filtro-simple",level:3},{value:"Utilizar un filtro complejo",id:"utilizar-un-filtro-complejo",level:3},{value:"Utilizar la propiedad params",id:"utilizar-la-propiedad-params",level:3},{value:"Atributo",id:"atributo",level:2},{value:"Comparador",id:"comparador",level:2},{value:"Ejemplos",id:"ejemplos",level:2}];function c(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(r.p,{children:["Permite consultar los datos de una clase de datos o de un m\xe9todo ",(0,l.jsx)(r.em,{children:"(p. ej."}),", ",(0,l.jsx)(r.code,{children:"$filter=\"firstName!='' AND salary>30000\""}),")"]}),"\n",(0,l.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsx)(r.p,{children:"Este par\xe1metro le permite definir el filtro para su clase de datos o m\xe9todo."}),"\n",(0,l.jsx)(r.h3,{id:"utilizar-un-filtro-simple",children:"Utilizar un filtro simple"}),"\n",(0,l.jsx)(r.p,{children:"Un filtro se compone de los siguientes elementos:"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"{attribute} {comparator} {value}"})}),"\n",(0,l.jsxs)(r.p,{children:["Por ejemplo: ",(0,l.jsx)(r.code,{children:'$filter="firstName=john"'})," donde ",(0,l.jsx)(r.code,{children:"firstName"})," es el ",(0,l.jsx)(r.strong,{children:"atributo"}),", ",(0,l.jsx)(r.code,{children:"="})," es el ",(0,l.jsx)(r.strong,{children:"comparador"})," y ",(0,l.jsx)(r.code,{children:"john"})," es el ",(0,l.jsx)(r.strong,{children:"valor"}),"."]}),"\n",(0,l.jsx)(r.h3,{id:"utilizar-un-filtro-complejo",children:"Utilizar un filtro complejo"}),"\n",(0,l.jsx)(r.p,{children:"Un filtro m\xe1s compejo se compone de los siguientes elementos, que unen dos consultas:"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:"{attribute} {comparator} {value} {AND/OR/EXCEPT} {attribute} {comparator} {value}"})}),"\n",(0,l.jsxs)(r.p,{children:["Por ejemplo: ",(0,l.jsx)(r.code,{children:'$filter="firstName=john AND salary>20000"'})," donde ",(0,l.jsx)(r.code,{children:"firstName"})," y ",(0,l.jsx)(r.code,{children:"salary"})," son atributos de la clase de datos Employee."]}),"\n",(0,l.jsx)(r.h3,{id:"utilizar-la-propiedad-params",children:"Utilizar la propiedad params"}),"\n",(0,l.jsx)(r.p,{children:"Tambi\xe9n puede utilizar la propiedad params de 4D."}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.strong,{children:'{attribute} {comparator} {placeholder} {AND/OR/EXCEPT} {attribute} {comparator} {placeholder}&$params=\'["{value1}","{value2}"]"\''})}),"\n",(0,l.jsxs)(r.p,{children:["Por ejemplo: ",(0,l.jsx)(r.code,{children:'$filter="firstName=:1 AND salary>:2"&$params=\'["john",20000]\''})," donde firstName y salary son los atributos de la clase de datos Employee."]}),"\n",(0,l.jsxs)(r.p,{children:["Para m\xe1s informaci\xf3n sobre c\xf3mo consultar los datos en 4D, consulte la ",(0,l.jsx)(r.a,{href:"https://doc.4d.com/4Dv18/4D/18/dataClassquery.305-4505887.en.html",children:"dataClass.query()"})," documentaci\xf3n."]}),"\n",(0,l.jsxs)(r.blockquote,{children:["\n",(0,l.jsx)(r.p,{children:"Al insertar comillas (') o comillas dobles (\"), debe escaparlas utilizando su c\xf3digo de caracteres:"}),"\n",(0,l.jsx)(r.p,{children:"Quotes ('): \\u0027 Double quotes (\"): \\u0022"}),"\n",(0,l.jsxs)(r.p,{children:["Por ejemplo, se puede escribir lo siguiente al pasar un valor con una comilla cuando se utiliza la propiedad ",(0,l.jsx)(r.em,{children:"params"}),":",(0,l.jsx)(r.br,{}),"\n",(0,l.jsx)(r.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=:1"&$params=\'["O\\u0027Reilly"]\''})]}),"\n",(0,l.jsxs)(r.p,{children:["If you pass the value directly, you can write the following: ",(0,l.jsx)(r.code,{children:'http://127.0.0.1:8081/rest/Person/?$filter="lastName=O\'Reilly"'})]}),"\n"]}),"\n",(0,l.jsx)(r.h2,{id:"atributo",children:"Atributo"}),"\n",(0,l.jsxs)(r.p,{children:["Si el atributo est\xe1 en la misma clase de datos, puede pasarlo directamente (",(0,l.jsx)(r.em,{children:"p. ej."}),", ",(0,l.jsx)(r.code,{children:"firstName"}),"). Sin embargo, si quiere consultar otra clase de datos, debe incluir el nombre del atributo relacional y el nombre del atributo, es decir, la ruta de acceso (",(0,l.jsx)(r.em,{children:"por ejemplo"}),", nombre.empleador). El nombre del atributo distingue entre may\xfasculas y min\xfasculas (",(0,l.jsx)(r.code,{children:"firstName"})," no es igual a ",(0,l.jsx)(r.code,{children:"FirstName"}),")."]}),"\n",(0,l.jsx)(r.p,{children:'Tambi\xe9n puede consultar los atributos de tipo Object utilizando la anotaci\xf3n de puntos. Por ejemplo, si tiene un atributo cuyo nombre es "objAttributo" con la siguiente estructura:'}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:'{\n    prop1: "this is my first property",\n    prop2: 9181,\n    prop3: ["abc","def","ghi"]\n}\n'})}),"\n",(0,l.jsx)(r.p,{children:"Puede buscar en el objeto escribiendo lo siguiente:"}),"\n",(0,l.jsx)(r.p,{children:(0,l.jsx)(r.code,{children:'GET  /rest/Person/?filter="objAttribute.prop2 == 9181"'})}),"\n",(0,l.jsx)(r.h2,{id:"comparador",children:"Comparador"}),"\n",(0,l.jsx)(r.p,{children:"El comparador debe ser uno de los siguientes valores:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(r.table,{children:[(0,l.jsx)(r.thead,{children:(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.th,{children:"Comparador"}),(0,l.jsx)(r.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(r.tbody,{children:[(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"="}),(0,l.jsx)(r.td,{children:"igual a"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"!="}),(0,l.jsx)(r.td,{children:"diferente de"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:">"}),(0,l.jsx)(r.td,{children:"mayor que"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:">="}),(0,l.jsx)(r.td,{children:"mayor o igual que"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"<"}),(0,l.jsx)(r.td,{children:"menor que"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"<="}),(0,l.jsx)(r.td,{children:"menor o igual que"})]}),(0,l.jsxs)(r.tr,{children:[(0,l.jsx)(r.td,{children:"begin"}),(0,l.jsx)(r.td,{children:"comienza con"})]})]})]}),"\n",(0,l.jsx)(r.h2,{id:"ejemplos",children:"Ejemplos"}),"\n",(0,l.jsx)(r.p,{children:'En el siguiente ejemplo, buscamos a todos los empleados cuyo apellido empieza por "j":'}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:' GET  /rest/Employee?$filter="lastName begin j"\n'})}),"\n",(0,l.jsx)(r.p,{children:"En este ejemplo, buscamos en la clase de datos Empleado todos los empleados cuyo salario sea superior a 20.000 y que no trabajen para una empresa llamada Acme:"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:' GET  /rest/Employee?$filter="salary>20000 AND  \n employer.name!=acme"&$orderby="lastName,firstName"\n'})}),"\n",(0,l.jsx)(r.p,{children:"En este ejemplo, buscamos en la clase de datos Person todas las personas cuya propiedad n\xfamero en el atributo anotherobj de tipo Object es mayor que 50:"}),"\n",(0,l.jsx)(r.pre,{children:(0,l.jsx)(r.code,{children:' GET  /rest/Person/?filter="anotherobj.mynum > 50"\n'})})]})}function p(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,l.jsx)(r,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return i}});var s=n(667294);let l={},t=s.createContext(l);function i(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);