/*! For license information please see 5e567685.b06971d2.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30350],{539129:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=t(474848),n=t(28453);const o={id:"REST_requests",title:"Sobre peti\xe7\xf5es REST"},d=void 0,a={id:"REST/REST_requests",title:"Sobre peti\xe7\xf5es REST",description:"As estrutyuras abaixo s\xe3o compat\xedveis com peti\xe7\xf5es REST:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/docs/pt/REST/REST_requests",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FREST_requests.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"REST_requests",title:"Sobre peti\xe7\xf5es REST"},sidebar:"docs",previous:{title:"Calling class functions",permalink:"/docs/pt/REST/classFunctions"},next:{title:"API (general)",permalink:"/docs/pt/category/api-general"}},i={},c=[{value:"Estado e resposta REST",id:"estado-e-resposta-rest",level:2},{value:"Estado da peti\xe7\xe3o",id:"estado-da-peti\xe7\xe3o",level:3},{value:"Resposta",id:"resposta",level:3}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"As estrutyuras abaixo s\xe3o compat\xedveis com peti\xe7\xf5es REST:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"URI"}),(0,r.jsx)(s.th,{children:"Recurso"}),(0,r.jsx)(s.th,{children:"/? or &{filter} (Output)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"http://{servername}:{port}/rest/"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/REST/dataClass",children:"{dataClass}"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/REST/filter",children:"$filter"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/REST/attributes",children:"$attributes"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/REST/skip",children:"$skip"}),", ",(0,r.jsx)(s.a,{href:"/docs/pt/REST/method",children:"$method=..."}),"..."]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/REST/dataClass",children:"{dataClass}"}),"/",(0,r.jsx)(s.a,{href:"/docs/pt/REST/entityset#entitysetentitysetid",children:"$entityset/{entitySetID}"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/REST/method",children:"$method=..."})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/REST/dataClass#dataclasskey",children:"{dataClass}({key})"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/REST/attributes",children:"$attributes"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/REST/dataClass#dataclassattributevalue",children:"{dataClass}:{attribute}(value)"})}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Todas as peti\xe7\xf5es REST devem conter os par\xe2metros URI e Resource, mas o par\xe2metro Subresource (que filtra os dados retornados) \xe9 opcional."}),"\n",(0,r.jsx)(s.p,{children:"Como com todas as URIs, o primeiro par\xe2metro \xe9 definido por um \u201c?\u201d e todos os par\xe2metros subsequentes por \u201c&\u201d. Por exemplo:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Pode colocar todos os valores entre aspas para evitar ambiguidades. Por exemplo, no exemplo anterior, poder\xedamos colocar o valor para o \xfaltimo nome em aspas simples: \"lastName!='Jones'\"."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Os par\xe2metros permitem que manipule dados em dataclasses em seu projeto 4D. Adem\xe1s de recuperar datos mediante los m\xe9todos HTTP ",(0,r.jsx)(s.code,{children:"GET"}),", tambi\xe9n se pueden a\xf1adir, actualizar y eliminar entidades de una clase de datos utilizando los m\xe9todos HTTP ",(0,r.jsx)(s.code,{children:"POST"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["If you want the data to be returned in an array instead of JSON, use the ",(0,r.jsx)(s.a,{href:"/docs/pt/REST/asArray",children:(0,r.jsx)(s.code,{children:"$asArray"})})," parameter."]}),"\n",(0,r.jsx)(s.h2,{id:"estado-e-resposta-rest",children:"Estado e resposta REST"}),"\n",(0,r.jsx)(s.p,{children:"Com cada peti\xe7\xe3o REST, o servidor retorna o estado e uma resposta (com ou sem um erro)."}),"\n",(0,r.jsx)(s.h3,{id:"estado-da-peti\xe7\xe3o",children:"Estado da peti\xe7\xe3o"}),"\n",(0,r.jsx)(s.p,{children:"Com cada peti\xe7\xe3o REST, se obt\xe9m o estado junto com a resposta. Abaixo est\xe3o alguns estados que podem surgir:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Estado"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Peti\xe7\xe3o n\xe3o processada (servidor pode n\xe3o ter iniciado)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"200 OK"}),(0,r.jsx)(s.td,{children:"Peti\xe7\xe3o processada sem erro."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"401 Unauthorized"}),(0,r.jsx)(s.td,{children:"Erro de autoriza\xe7\xe3o (verifique as permiss\xf5es do usu\xe1rio)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"402 No session"}),(0,r.jsx)(s.td,{children:"N\xfamero m\xe1ximo de sess\xf5es foi alcan\xe7ado."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"404 Not Found"}),(0,r.jsx)(s.td,{children:"A classe de dados n\xe3o \xe9 acess\xedvel via REST ou o conjunto de entidades n\xe3o existe."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"500 Internal Server Error"}),(0,r.jsx)(s.td,{children:"Erro processando a peti\xe7\xe3o REST."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"resposta",children:"Resposta"}),"\n",(0,r.jsx)(s.p,{children:"A resposta (em formato JSON) varia dependendo da peti\xe7\xe3o."}),"\n",(0,r.jsx)(s.p,{children:"Se um erro surgir, ser\xe1 enviado junto com a resposta do servidor ou ser\xe1 a resposta do servidor."})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,s,t)=>{var r=t(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var r,o={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)d.call(s,r)&&!i.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:n,type:e,key:c,ref:l,props:o,_owner:a.current}}s.Fragment=o,s.jsx=c,s.jsxs=c},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>a});var r=t(296540);const n={},o=r.createContext(n);function d(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);