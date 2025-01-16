"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18641"],{480412:function(e,a,s){s.r(a),s.d(a,{default:()=>u,frontMatter:()=>t,metadata:()=>o,assets:()=>r,toc:()=>l,contentTitle:()=>d});var o=JSON.parse('{"id":"ORDA/overview","title":"ORDA","description":"ORDA significa Object Relational Data Access. Se trata de una tecnolog\xeda avanzada que permite acceder tanto al modelo como a los datos de una base a trav\xe9s de objetos.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/ORDA/overview.md","sourceDirName":"ORDA","slug":"/ORDA/overview","permalink":"/docs/es/20-R7/ORDA/overview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Foverview.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"overview","title":"ORDA"},"sidebar":"docs","previous":{"title":"Archivo de historial","permalink":"/docs/es/20-R7/Debugging/debugLogFiles"},"next":{"title":"Objeto del modelo de datos","permalink":"/docs/es/20-R7/ORDA/dsmapping"}}'),n=s("785893"),i=s("250065");let t={id:"overview",title:"ORDA"},d=void 0,r={},l=[{value:"\xbfPor qu\xe9 utilizar ORDA?",id:"por-qu\xe9-utilizar-orda",level:2},{value:"\xbfC\xf3mo utilizar ORDA?",id:"c\xf3mo-utilizar-orda",level:2}];function c(e){let a={a:"a",code:"code",h2:"h2",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(a.p,{children:["ORDA significa ",(0,n.jsx)(a.strong,{children:"Object Relational Data Access"}),". Se trata de una tecnolog\xeda avanzada que permite acceder tanto al modelo como a los datos de una base a trav\xe9s de objetos."]}),"\n",(0,n.jsxs)(a.p,{children:["Las relaciones se incluyen de forma transparente en el concepto, en combinaci\xf3n con el principio del ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/ORDA/glossary#lazy-loading",children:"lazy loading"}),", para eliminar todas las molestias t\xedpicas de la selecci\xf3n o la transferencia de datos del desarrollador."]}),"\n",(0,n.jsxs)(a.p,{children:["Con ORDA, se accede a los datos a trav\xe9s de una capa de abstracci\xf3n, el ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/ORDA/dsmapping#datastore",children:"datastore"}),". Un datastore es un objeto que ofrece una interfaz al modelo de base de datos y a los datos a trav\xe9s de objetos y de clases. Por ejemplo, una tabla corresponde a un objeto ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/ORDA/dsmapping#dataclass",children:"dataclass"}),", un campo es un ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/ORDA/dsmapping##attribute",children:"atributo"})," de una dataclass, y se accede a los registros a trav\xe9s de ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/ORDA/dsmapping#entity",children:"entidades"})," y ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/ORDA/dsmapping#entity-selection",children:"entity selections"}),"."]}),"\n",(0,n.jsx)(a.h2,{id:"por-qu\xe9-utilizar-orda",children:"\xbfPor qu\xe9 utilizar ORDA?"}),"\n",(0,n.jsx)(a.p,{children:"En lugar de representar la informaci\xf3n como tablas, registros y campos, ORDA utiliza un enfoque alternativo que asigna con mayor precisi\xf3n los datos a conceptos concretos."}),"\n",(0,n.jsx)(a.p,{children:"Imagine la posibilidad de desnormalizar una estructura relacional sin que afectar la eficacia. Imagine que describe todo lo relativo a los objetos de su aplicaci\xf3n de tal forma que el uso de los datos se convierte en algo sencillo y directo y elimina la necesidad de comprender por completo la estructura relacional."}),"\n",(0,n.jsx)(a.p,{children:"En el modelo de datos ORDA, una \xfanica clase de datos puede incorporar todos los elementos que componen una tabla de base de datos relacional tradicional, pero tambi\xe9n puede incluir valores de entidades padres relacionadas y las referencias directas a las entidades y a las selecciones de entidades relacionadas."}),"\n",(0,n.jsx)(a.p,{children:'Una petici\xf3n devuelve una lista de entidades denominada selecci\xf3n de entidades, que cumple la funci\xf3n de un conjunto de l\xedneas de una petici\xf3n SQL. La diferencia es que cada entidad "sabe" cu\xe1l es su lugar en el modelo de datos y "comprende" su relaci\xf3n con las dem\xe1s entidades. Esto significa que un desarrollador no necesita explicar en una petici\xf3n c\xf3mo relacionar las distintas piezas de informaci\xf3n, ni en una actualizaci\xf3n c\xf3mo volver a escribir los valores modificados en la estructura relacional.'}),"\n",(0,n.jsxs)(a.p,{children:["Adem\xe1s, los objetos ORDA, como las selecciones de entidades o las entidades, pueden vincularse f\xe1cilmente a los objetos de interfaz de usuario, como los list box o las variables. Combinadas con las funcionalidades poderosas tales como los comandos ",(0,n.jsx)(a.code,{children:"This"})," y ",(0,n.jsx)(a.code,{children:"Form"}),", permiten construir interfaces modernas y modulares basadas en objetos y colecciones."]}),"\n",(0,n.jsx)(a.h2,{id:"c\xf3mo-utilizar-orda",children:"\xbfC\xf3mo utilizar ORDA?"}),"\n",(0,n.jsxs)(a.p,{children:["Fundamentalmente, ORDA gestiona objetos. En ORDA, todos los conceptos principales, incluido el propio datastore, est\xe1n disponibles a trav\xe9s de objetos. En 4D, el datastore es autom\xe1ticamente ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/ORDA/dsmapping",children:"mapeado sobre la estructura 4D"}),"."]}),"\n",(0,n.jsx)(a.p,{children:"Los objetos en ORDA pueden manejarse como los objetos est\xe1ndar 4D, pero se benefician autom\xe1ticamente de propiedades y de m\xe9todos espec\xedficos."}),"\n",(0,n.jsxs)(a.p,{children:["Los objetos ORDA son creados e instanciados cuando es necesario por los m\xe9todos 4D (no necesitas crearlos). Sin embargo, los objetos del modelo de datos ORDA est\xe1n asociados a las ",(0,n.jsx)(a.a,{href:"/docs/es/20-R7/ORDA/ordaClasses",children:"clases en las que se pueden a\xf1adir funciones personalizadas"}),"."]})]})}function u(e={}){let{wrapper:a}={...(0,i.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,s){s.d(a,{Z:function(){return d},a:function(){return t}});var o=s(667294);let n={},i=o.createContext(n);function t(e){let a=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(i.Provider,{value:a},e.children)}}}]);