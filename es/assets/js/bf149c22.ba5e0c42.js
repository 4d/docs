/*! For license information please see bf149c22.ba5e0c42.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[568],{676810:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>i,contentTitle:()=>a,default:()=>u,frontMatter:()=>d,metadata:()=>o,toc:()=>l});var t=n(474848),r=n(28453);const d={id:"REST_requests",title:"Acerca de las peticiones REST"},a=void 0,o={id:"REST/REST_requests",title:"Acerca de las peticiones REST",description:"Se soportan las siguientes estructuras para las peticiones REST:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/docs/es/20-R5/REST/REST_requests",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FREST_requests.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"REST_requests",title:"Acerca de las peticiones REST"},sidebar:"docs",previous:{title:"Llamar a las funciones de clase ORDA",permalink:"/docs/es/20-R5/REST/classFunctions"},next:{title:"API (general)",permalink:"/docs/es/20-R5/category/api-general"}},i={},l=[{value:"Estado y respuesta REST",id:"estado-y-respuesta-rest",level:2},{value:"Estado de la petici\xf3n",id:"estado-de-la-petici\xf3n",level:3},{value:"Respuesta",id:"respuesta",level:3}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.p,{children:"Se soportan las siguientes estructuras para las peticiones REST:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"URI"}),(0,t.jsx)(s.th,{children:"Resource (Input)"}),(0,t.jsx)(s.th,{children:"/? o &{filter} (Salida)"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"http://{servername}:{port}/rest/"}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/dataClass",children:"{dataClass}"})}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/filter",children:"$filter"}),", ",(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/attributes",children:"$attributes"}),", ",(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/skip",children:"$skip"}),", ",(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/method",children:"$method=..."}),"..."]})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsxs)(s.td,{children:[(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/dataClass",children:"{dataClass}"}),"/",(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/entityset#entitysetentitysetid",children:"$entityset/{entitySetID}"})]}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/method",children:"$method=..."})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/dataClass#dataclasskey",children:"{dataClass}({key})"})}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/attributes",children:"$attributes"})})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{}),(0,t.jsx)(s.td,{children:(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/dataClass#dataclassattributevalue",children:"{dataClass}:{attribute}(value)"})}),(0,t.jsx)(s.td,{})]})]})]}),"\n",(0,t.jsx)(s.p,{children:"Mientras que todas las solicitudes REST deben contener los par\xe1metros URI y Resource, los filtros de salida (que filtran los datos devueltos) son opcionales."}),"\n",(0,t.jsx)(s.p,{children:'Como en todos los URI, el primer par\xe1metro est\xe1 delimitado por un "?" y todos los siguientes por un "&". Por ejemplo:'}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.code,{children:'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600'})}),"\n",(0,t.jsxs)(s.blockquote,{children:["\n",(0,t.jsx)(s.p,{children:"Puede colocar todos los valores entre comillas en caso de ambig\xfcedad. Por ejemplo, en nuestro ejemplo anterior, podr\xedamos haber puesto el valor del apellido entre comillas simples: \"lastName!='Jones'\"."}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:["Los par\xe1metros le permiten manipular los datos de las clases de datos en su proyecto 4D. Adem\xe1s de recuperar datos mediante los m\xe9todos HTTP ",(0,t.jsx)(s.code,{children:"GET"}),", tambi\xe9n se pueden a\xf1adir, actualizar y eliminar entidades de una clase de datos utilizando los m\xe9todos HTTP ",(0,t.jsx)(s.code,{children:"POST"}),"."]}),"\n",(0,t.jsxs)(s.p,{children:["If you want the data to be returned in an array instead of JSON, use the ",(0,t.jsx)(s.a,{href:"/docs/es/20-R5/REST/asArray",children:(0,t.jsx)(s.code,{children:"$asArray"})})," parameter."]}),"\n",(0,t.jsx)(s.h2,{id:"estado-y-respuesta-rest",children:"Estado y respuesta REST"}),"\n",(0,t.jsx)(s.p,{children:"Con cada petici\xf3n REST, el servidor devuelve el estado y una respuesta (con o sin error)."}),"\n",(0,t.jsx)(s.h3,{id:"estado-de-la-petici\xf3n",children:"Estado de la petici\xf3n"}),"\n",(0,t.jsx)(s.p,{children:"Con cada solicitud REST, se obtiene el estado junto con la respuesta. A continuaci\xf3n se presentan algunos de los estados que pueden surgir:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Estado"}),(0,t.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"0"}),(0,t.jsx)(s.td,{children:"Solicitud no procesada (el servidor podr\xeda no estar iniciado)."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"200 OK"}),(0,t.jsx)(s.td,{children:"Petici\xf3n procesada sin error."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"401 Unauthorized"}),(0,t.jsx)(s.td,{children:"Error de permisos (compruebe los permisos del usuario)."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"402 No session"}),(0,t.jsx)(s.td,{children:"Se ha alcanzado el n\xfamero m\xe1ximo de sesiones."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"404 Not Found"}),(0,t.jsx)(s.td,{children:"La clase de datos no es accesible v\xeda REST o el conjunto de entidades no existe."})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"500 Internal Server Error"}),(0,t.jsx)(s.td,{children:"Error al procesar la solicitud REST."})]})]})]}),"\n",(0,t.jsx)(s.h3,{id:"respuesta",children:"Respuesta"}),"\n",(0,t.jsx)(s.p,{children:"La respuesta (en formato JSON) var\xeda en funci\xf3n de la petici\xf3n."}),"\n",(0,t.jsx)(s.p,{children:"Si se produce un error, se enviar\xe1 junto con la respuesta del servidor o ser\xe1 la respuesta del servidor."})]})}function u(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},221020:(e,s,n)=>{var t=n(296540),r=Symbol.for("react.element"),d=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,s,n){var t,d={},l=null,c=null;for(t in void 0!==n&&(l=""+n),void 0!==s.key&&(l=""+s.key),void 0!==s.ref&&(c=s.ref),s)a.call(s,t)&&!i.hasOwnProperty(t)&&(d[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===d[t]&&(d[t]=s[t]);return{$$typeof:r,type:e,key:l,ref:c,props:d,_owner:o.current}}s.Fragment=d,s.jsx=l,s.jsxs=l},474848:(e,s,n)=>{e.exports=n(221020)},28453:(e,s,n)=>{n.d(s,{R:()=>a,x:()=>o});var t=n(296540);const r={},d=t.createContext(r);function a(e){const s=t.useContext(d);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),t.createElement(d.Provider,{value:s},e.children)}}}]);