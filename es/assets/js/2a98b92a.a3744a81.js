"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[79214],{603905:(e,a,o)=>{o.d(a,{Zo:()=>d,kt:()=>m});var t=o(667294);function n(e,a,o){return a in e?Object.defineProperty(e,a,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[a]=o,e}function r(e,a){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),o.push.apply(o,t)}return o}function s(e){for(var a=1;a<arguments.length;a++){var o=null!=arguments[a]?arguments[a]:{};a%2?r(Object(o),!0).forEach((function(a){n(e,a,o[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(o,a))}))}return e}function i(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var l=t.createContext({}),c=function(e){var a=t.useContext(l),o=a;return e&&(o="function"==typeof e?e(a):s(s({},a),e)),o},d=function(e){var a=c(e.components);return t.createElement(l.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var o=e.components,n=e.mdxType,r=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(o),m=n,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||r;return o?t.createElement(f,s(s({ref:a},d),{},{components:o})):t.createElement(f,s({ref:a},d))}));function m(e,a){var o=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var r=o.length,s=new Array(r);s[0]=u;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<r;c++)s[c]=o[c];return t.createElement.apply(null,s)}return t.createElement.apply(null,o)}u.displayName="MDXCreateElement"},773873:(e,a,o)=>{o.r(a),o.d(a,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>d});o(667294);var t=o(603905);function n(){return n=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var o=arguments[a];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(e[t]=o[t])}return e},n.apply(this,arguments)}function r(e,a){if(null==e)return{};var o,t,n=function(e,a){if(null==e)return{};var o,t,n={},r=Object.keys(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||(n[o]=e[o]);return n}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(t=0;t<r.length;t++)o=r[t],a.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}const s={id:"overview",title:"ORDA"},i=void 0,l={unversionedId:"ORDA/overview",id:"version-20-R2/ORDA/overview",title:"ORDA",description:"ORDA significa Object Relational Data Access. Se trata de una tecnolog\xeda avanzada que permite acceder tanto al modelo como a los datos de una base a trav\xe9s de objetos.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/ORDA/overview.md",sourceDirName:"ORDA",slug:"/ORDA/overview",permalink:"/docs/es/20-R2/ORDA/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20ORDA%2Foverview.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"overview",title:"ORDA"},sidebar:"docs",previous:{title:"Rutas de acceso",permalink:"/docs/es/20-R2/Concepts/paths"},next:{title:"Objeto del modelo de datos",permalink:"/docs/es/20-R2/ORDA/dsmapping"}},c={},d=[{value:"\xbfPor qu\xe9 utilizar ORDA?",id:"por-qu\xe9-utilizar-orda",level:2},{value:"\xbfC\xf3mo utilizar ORDA?",id:"c\xf3mo-utilizar-orda",level:2}],p={toc:d};function u(e){var{components:a}=e,o=r(e,["components"]);return(0,t.kt)("wrapper",n({},p,o,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"ORDA significa ",(0,t.kt)("strong",{parentName:"p"},"Object Relational Data Access"),". Se trata de una tecnolog\xeda avanzada que permite acceder tanto al modelo como a los datos de una base a trav\xe9s de objetos."),(0,t.kt)("p",null,"Las relaciones se incluyen de forma transparente en el concepto, en combinaci\xf3n con el principio del ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/ORDA/glossary#lazy-loading"}),"lazy loading"),", para eliminar todas las molestias t\xedpicas de la selecci\xf3n o la transferencia de datos del desarrollador."),(0,t.kt)("p",null,"Con ORDA, se accede a los datos a trav\xe9s de una capa de abstracci\xf3n, el ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/ORDA/dsmapping#datastore"}),"datastore"),". Un datastore es un objeto que ofrece una interfaz al modelo de base de datos y a los datos a trav\xe9s de objetos y de clases. Por ejemplo, una tabla corresponde a un objeto ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/ORDA/dsmapping#dataclass"}),"dataclass"),", un campo es un ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/ORDA/dsmapping##attribute"}),"atributo ")," de una dataclass, y se accede a los registros a trav\xe9s de ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/ORDA/dsmapping#entity"}),"entidades ")," y ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/ORDA/dsmapping#entity-selection"}),"selecciones de entidades"),"."),(0,t.kt)("h2",n({},{id:"por-qu\xe9-utilizar-orda"}),"\xbfPor qu\xe9 utilizar ORDA?"),(0,t.kt)("p",null,"En lugar de representar la informaci\xf3n como tablas, registros y campos, ORDA utiliza un enfoque alternativo que asigna con mayor precisi\xf3n los datos a conceptos concretos."),(0,t.kt)("p",null,"Imagine la posibilidad de desnormalizar una estructura relacional sin que afectar la eficacia. Imagine que describe todo lo relativo a los objetos de su aplicaci\xf3n de tal forma que el uso de los datos se convierte en algo sencillo y directo y elimina la necesidad de comprender por completo la estructura relacional."),(0,t.kt)("p",null,"En el modelo de datos ORDA, una \xfanica clase de datos puede incorporar todos los elementos que componen una tabla de base de datos relacional tradicional, pero tambi\xe9n puede incluir valores de entidades padres relacionadas y las referencias directas a las entidades y a las selecciones de entidades relacionadas."),(0,t.kt)("p",null,'Una petici\xf3n devuelve una lista de entidades denominada selecci\xf3n de entidades, que cumple la funci\xf3n de un conjunto de l\xedneas de una petici\xf3n SQL. La diferencia es que cada entidad "sabe" cu\xe1l es su lugar en el modelo de datos y "comprende" su relaci\xf3n con las dem\xe1s entidades. Esto significa que un desarrollador no necesita explicar en una petici\xf3n c\xf3mo relacionar las distintas piezas de informaci\xf3n, ni en una actualizaci\xf3n c\xf3mo volver a escribir los valores modificados en la estructura relacional.'),(0,t.kt)("p",null,"Adem\xe1s, los objetos ORDA, como las selecciones de entidades o las entidades, pueden vincularse f\xe1cilmente a los objetos de interfaz de usuario, como los list box o las variables. Combinadas con las funcionalidades poderosas tales como los comandos ",(0,t.kt)("inlineCode",{parentName:"p"},"This")," y ",(0,t.kt)("inlineCode",{parentName:"p"},"Form"),", permiten construir interfaces modernas y modulares basadas en objetos y colecciones."),(0,t.kt)("h2",n({},{id:"c\xf3mo-utilizar-orda"}),"\xbfC\xf3mo utilizar ORDA?"),(0,t.kt)("p",null,"Fundamentalmente, ORDA gestiona objetos. En ORDA, todos los conceptos principales, incluido el propio datastore, est\xe1n disponibles a trav\xe9s de objetos. En 4D, el datastore es autom\xe1ticamente ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/ORDA/dsmapping"}),"mapeado sobre la estructura 4D"),"."),(0,t.kt)("p",null,"Los objetos en ORDA pueden manejarse como los objetos est\xe1ndar 4D, pero se benefician autom\xe1ticamente de propiedades y de m\xe9todos espec\xedficos."),(0,t.kt)("p",null,"Los objetos ORDA son creados e instanciados cuando es necesario por los m\xe9todos 4D (no necesitas crearlos). Sin embargo, los objetos del modelo de datos ORDA est\xe1n asociados a las ",(0,t.kt)("a",n({parentName:"p"},{href:"/docs/es/20-R2/ORDA/ordaClasses"}),"clases en las que se pueden a\xf1adir funciones personalizadas"),"."))}u.isMDXComponent=!0}}]);