/*! For license information please see 6bff6ecf.7c589b21.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[57327],{118826:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>d});var s=a(474848),o=a(28453);const r={id:"genInfo",title:"Obtener informaci\xf3n del servidor"},t=void 0,c={id:"REST/genInfo",title:"Obtener informaci\xf3n del servidor",description:"Puede obtener varias informaciones del servidor REST:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/REST/genInfo.md",sourceDirName:"REST",slug:"/REST/genInfo",permalink:"/docs/es/REST/genInfo",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FgenInfo.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"genInfo",title:"Obtener informaci\xf3n del servidor"},sidebar:"docs",previous:{title:"Usuarios y sesiones",permalink:"/docs/es/REST/authUsers"},next:{title:"Manipulaci\xf3n de datos",permalink:"/docs/es/REST/manData"}},i={},d=[{value:"Cat\xe1logo",id:"cat\xe1logo",level:2},{value:"Informaci\xf3n de la cach\xe9",id:"informaci\xf3n-de-la-cach\xe9",level:2},{value:"queryPath y queryPlan",id:"querypath-y-queryplan",level:2}];function l(e){const n={a:"a",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Puede obtener varias informaciones del servidor REST:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"los almacenes de datos expuestos y sus atributos"}),"\n",(0,s.jsx)(n.li,{children:"el contenido de la cach\xe9 del servidor REST, incluidas las sesiones de los usuarios."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"cat\xe1logo",children:"Cat\xe1logo"}),"\n",(0,s.jsxs)(n.p,{children:["Utilice los par\xe1metros ",(0,s.jsx)(n.a,{href:"/docs/es/REST/catalog",children:(0,s.jsx)(n.code,{children:"$catalog"})}),", ",(0,s.jsx)(n.a,{href:"/docs/es/REST/catalog#catalogdataclass",children:(0,s.jsx)(n.code,{children:"$catalog/\\{dataClass\\}"})}),", o ",(0,s.jsx)(n.a,{href:"/docs/es/REST/catalog#catalogall",children:(0,s.jsx)(n.code,{children:"$catalog/$all"})})," para obtener la lista de ",(0,s.jsx)(n.a,{href:"/docs/es/REST/configuration#exposing-tables-and-fields",children:"clases de datos expuestas y sus atributos"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Para obtener la colecci\xf3n de todas las clases de datos expuestas junto con sus atributos:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"GET /rest/$catalog/$all"})}),"\n",(0,s.jsx)(n.h2,{id:"informaci\xf3n-de-la-cach\xe9",children:"Informaci\xf3n de la cach\xe9"}),"\n",(0,s.jsxs)(n.p,{children:["Utilice el par\xe1metro ",(0,s.jsx)(n.a,{href:"/docs/es/REST/info",children:(0,s.jsx)(n.code,{children:"$info"})})," para obtener informaci\xf3n sobre las selecciones de entidades actualmente almacenadas en la cach\xe9 de 4D Server, as\xed como sobre las sesiones de usuario en ejecuci\xf3n."]}),"\n",(0,s.jsx)(n.h2,{id:"querypath-y-queryplan",children:"queryPath y queryPlan"}),"\n",(0,s.jsxs)(n.p,{children:["Las selecciones de entidades generadas a trav\xe9s de b\xfasquedas pueden tener las dos propiedades siguientes: ",(0,s.jsx)(n.code,{children:"queryPlan"})," y ",(0,s.jsx)(n.code,{children:"queryPath"}),". Para calcular y devolver estas propiedades, basta con a\xf1adir ",(0,s.jsx)(n.a,{href:"/docs/es/REST/queryplan",children:(0,s.jsx)(n.code,{children:"$queryPlan"})})," y/o ",(0,s.jsx)(n.a,{href:"/docs/es/REST/querypath",children:(0,s.jsx)(n.code,{children:"$queryPath"})})," en la petici\xf3n REST."]}),"\n",(0,s.jsx)(n.p,{children:"Por ejemplo:"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET /rest/People/$filter="employer.name=acme AND lastName=Jones"&$queryplan=true&$querypath=true'})}),"\n",(0,s.jsx)(n.p,{children:"Estas propiedades son objetos que contienen informaci\xf3n sobre c\xf3mo el servidor realiza consultas compuestas internamente a trav\xe9s de clases de datos y relaciones:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"queryPlan"}),": objeto que contiene la descripci\xf3n detallada de la petici\xf3n justo antes de ser ejecutada (es decir, la consulta planificada)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"queryPath"}),": objeto que contiene la descripci\xf3n detallada de la consulta tal y como se ha realizado realmente."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"La informaci\xf3n registrada incluye el tipo de consulta (indexada y secuencial) y cada subconsulta necesaria junto con los operadores de conjunci\xf3n. Las rutas de acceso de las peticiones tambi\xe9n contienen el n\xfamero de entidades encontradas y el tiempo necesario para ejecutar cada criterio de b\xfasqueda. Query paths also contain the number of entities found and the time required to execute each search criterion. Generalmente, la descripci\xf3n del plan de consulta y su ruta de acceso son id\xe9nticas, pero pueden diferir porque 4D puede implementar optimizaciones din\xe1micas cuando se ejecuta una consulta para mejorar el rendimiento. Por ejemplo, el motor 4D puede convertir din\xe1micamente una consulta indexada en una secuencial si estima que es m\xe1s r\xe1pida. Este caso concreto puede darse cuando el n\xfamero de entidades que se buscan es bajo."})]})}function u(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,n,a)=>{var s=a(296540),o=Symbol.for("react.element"),r=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,c=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function d(e,n,a){var s,r={},d=null,l=null;for(s in void 0!==a&&(d=""+a),void 0!==n.key&&(d=""+n.key),void 0!==n.ref&&(l=n.ref),n)t.call(n,s)&&!i.hasOwnProperty(s)&&(r[s]=n[s]);if(e&&e.defaultProps)for(s in n=e.defaultProps)void 0===r[s]&&(r[s]=n[s]);return{$$typeof:o,type:e,key:d,ref:l,props:r,_owner:c.current}}n.Fragment=r,n.jsx=d,n.jsxs=d},474848:(e,n,a)=>{e.exports=a(221020)},28453:(e,n,a)=>{a.d(n,{R:()=>t,x:()=>c});var s=a(296540);const o={},r=s.createContext(o);function t(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);