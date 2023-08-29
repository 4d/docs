"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37295],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},87457:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});a(67294);var n=a(3905);function r(){return r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},r.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}const i={id:"genInfo",title:"Obtener informaci\xf3n del servidor"},l=void 0,s={unversionedId:"REST/genInfo",id:"version-20-R2/REST/genInfo",title:"Obtener informaci\xf3n del servidor",description:"Puede obtener varias informaciones del servidor REST:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R2/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/docs/es/REST/genInfo",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"genInfo",title:"Obtener informaci\xf3n del servidor"},sidebar:"docs",previous:{title:"Usuarios y sesiones",permalink:"/docs/es/REST/authUsers"},next:{title:"Manipulaci\xf3n de datos",permalink:"/docs/es/REST/manData"}},c={},u=[{value:"Cat\xe1logo",id:"cat\xe1logo",level:2},{value:"Informaci\xf3n de la cach\xe9",id:"informaci\xf3n-de-la-cach\xe9",level:2},{value:"queryPath y queryPlan",id:"querypath-y-queryplan",level:2}],d={toc:u};function p(e){var{components:t}=e,a=o(e,["components"]);return(0,n.kt)("wrapper",r({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Puede obtener varias informaciones del servidor REST:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"los almacenes de datos expuestos y sus atributos"),(0,n.kt)("li",{parentName:"ul"},"el contenido de la cach\xe9 del servidor REST, incluidas las sesiones de los usuarios.")),(0,n.kt)("h2",r({},{id:"cat\xe1logo"}),"Cat\xe1logo"),(0,n.kt)("p",null,"Utilice los par\xe1metros ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/catalog"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog")),", ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/catalog#catalogdataclass"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog/{dataClass}")),", o ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/catalog#catalogall"}),(0,n.kt)("inlineCode",{parentName:"a"},"$catalog/$all"))," para obtener la lista de ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/configuration#exposing-tables-and-fields"}),"las clases de datos expuestas y sus atributos"),"."),(0,n.kt)("p",null,"Para obtener la colecci\xf3n de todas las clases de datos expuestas junto con sus atributos:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"GET /rest/$catalog/$all")),(0,n.kt)("h2",r({},{id:"informaci\xf3n-de-la-cach\xe9"}),"Informaci\xf3n de la cach\xe9"),(0,n.kt)("p",null,"Utilice el par\xe1metro ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/info"}),(0,n.kt)("inlineCode",{parentName:"a"},"$info"))," para obtener informaci\xf3n sobre las selecciones de entidades actualmente almacenadas en la cach\xe9 de 4D Server, as\xed como sobre las sesiones de usuario en ejecuci\xf3n."),(0,n.kt)("h2",r({},{id:"querypath-y-queryplan"}),"queryPath y queryPlan"),(0,n.kt)("p",null,"Las selecciones de entidades generadas a trav\xe9s de b\xfasquedas pueden tener las dos propiedades siguientes: ",(0,n.kt)("inlineCode",{parentName:"p"},"queryPlan")," y ",(0,n.kt)("inlineCode",{parentName:"p"},"queryPath"),". Para calcular y devolver estas propiedades, basta con a\xf1adir ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/queryplan"}),(0,n.kt)("inlineCode",{parentName:"a"},"$queryPlan"))," y/o ",(0,n.kt)("a",r({parentName:"p"},{href:"/docs/es/REST/querypath"}),(0,n.kt)("inlineCode",{parentName:"a"},"$queryPath"))," en la petici\xf3n REST."),(0,n.kt)("p",null,"Por ejemplo:"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true')),(0,n.kt)("p",null,"Estas propiedades son objetos que contienen informaci\xf3n sobre c\xf3mo el servidor realiza consultas compuestas internamente a trav\xe9s de clases de datos y relaciones:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"queryPlan"),": objeto que contiene la descripci\xf3n detallada de la petici\xf3n justo antes de ser ejecutada (es decir, la consulta planificada)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"queryPath"),": objeto que contiene la descripci\xf3n detallada de la consulta tal y como se ha realizado realmente.")),(0,n.kt)("p",null,"La informaci\xf3n registrada incluye el tipo de consulta (indexada y secuencial) y cada subconsulta necesaria junto con los operadores de conjunci\xf3n. Query paths also contain the number of entities found and the time required to execute each search criterion. Query paths also contain the number of entities found and the time required to execute each search criterion. Generally, the description of the query plan and its path are identical but they can differ because 4D can implement dynamic optimizations when a query is executed in order to improve performance. For example, the 4D engine can dynamically convert an indexed query into a sequential one if it estimates that it is faster. This particular case can occur when the number of entities being searched for is low."))}p.isMDXComponent=!0}}]);