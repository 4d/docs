/*! For license information please see 8975bd73.d2c0ca10.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[24558],{467900:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>i,contentTitle:()=>d,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var r=t(474848),o=t(28453);const n={id:"REST_requests",title:"Sobre peti\xe7\xf5es REST"},d=void 0,a={id:"REST/REST_requests",title:"Sobre peti\xe7\xf5es REST",description:"As estrutyuras abaixo s\xe3o compat\xedveis com peti\xe7\xf5es REST:",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/REST_requests.md",sourceDirName:"REST",slug:"/REST/REST_requests",permalink:"/docs/pt/19/REST/REST_requests",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FREST_requests.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"REST_requests",title:"Sobre peti\xe7\xf5es REST"},sidebar:"docs",previous:{title:"Chamada de fun\xe7\xf5es de classe ORDA",permalink:"/docs/pt/19/REST/classFunctions"},next:{title:"$catalog",permalink:"/docs/pt/19/REST/catalog"}},i={},c=[{value:"Estado e resposta REST",id:"Estado-e-resposta-REST",level:2},{value:"Estado da peti\xe7\xe3o",id:"Estado-da-peti\xe7\xe3o",level:3},{value:"Resposta",id:"Resposta",level:3}];function l(e){const s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"As estrutyuras abaixo s\xe3o compat\xedveis com peti\xe7\xf5es REST:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"URI"}),(0,r.jsx)(s.th,{children:"Recurso"}),(0,r.jsx)(s.th,{children:"/? or &{filter} (Output)"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"http://{servername}:{port}/rest/"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/19/REST/dataClass",children:"{dataClass}"})}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"manData.html#selecting-attributes-to-get",children:"{attribute1, attribute2, ...}"}),"/"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"/docs/pt/19/REST/dataClass",children:"{dataClass}"}),"/",(0,r.jsx)(s.a,{href:"/docs/pt/19/REST/entityset#entitysetentitysetid",children:"$entityset/{entitySetID}"})]}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/19/REST/method",children:"$method=..."})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/19/REST/dataClass#dataclasskey",children:"{dataClass}({key})"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/19/REST/attributes",children:"$attributes"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.a,{href:"/docs/pt/19/REST/dataClass#dataclassattributevalue",children:"{dataClass}:{attribute}(value)"})}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Todas as peti\xe7\xf5es REST devem conter os par\xe2metros URI e Resource, mas o par\xe2metro Subresource (que filtra os dados retornados) \xe9 opcional."}),"\n",(0,r.jsx)(s.p,{children:"Como com todas as URIs, o primeiro par\xe2metro \xe9 definido por um \u201c?\u201d e todos os par\xe2metros subsequentes por \u201c&\u201d. Por exemplo:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.code,{children:'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600'})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Pode colocar todos os valores entre aspas para evitar ambiguidades. Por exemplo, no exemplo anterior, poder\xedamos colocar o valor para o \xfaltimo nome em aspas simples: \"lastName!='Jones'\"."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Os par\xe2metros permitem que manipule dados em dataclasses em seu projeto 4D. Al\xe9m de recuperar dados usando m\xe9todos HTTP",(0,r.jsx)(s.code,{children:"GET"}),", tamb\xe9m pode adicionar, atualizar e apagar entidades em uma dataclass usando os m\xe9todos HTTP ",(0,r.jsx)(s.code,{children:"POST"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Se quiser que os dados sejam retornados em um array ao inv\xe9s de um JSON, use o par\xe2metro ",(0,r.jsx)(s.a,{href:"/docs/pt/19/REST/asArray",children:(0,r.jsx)(s.code,{children:"$asArray"})}),"."]}),"\n",(0,r.jsx)(s.h2,{id:"Estado-e-resposta-REST",children:"Estado e resposta REST"}),"\n",(0,r.jsx)(s.p,{children:"Com cada peti\xe7\xe3o REST, o servidor retorna o estado e uma resposta (com ou sem um erro)."}),"\n",(0,r.jsx)(s.h3,{id:"Estado-da-peti\xe7\xe3o",children:"Estado da peti\xe7\xe3o"}),"\n",(0,r.jsx)(s.p,{children:"Com cada peti\xe7\xe3o REST, se obt\xe9m o estado junto com a resposta. Abaixo est\xe3o alguns estados que podem surgir:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Estado"}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"0"}),(0,r.jsx)(s.td,{children:"Peti\xe7\xe3o n\xe3o processada (servidor pode n\xe3o ter iniciado)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"200 OK"}),(0,r.jsx)(s.td,{children:"Peti\xe7\xe3o processada sem erro."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"401 Unauthorized"}),(0,r.jsx)(s.td,{children:"Erro de autoriza\xe7\xe3o (verifique as permiss\xf5es do usu\xe1rio)."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"402 No session"}),(0,r.jsx)(s.td,{children:"N\xfamero m\xe1ximo de sess\xf5es foi alcan\xe7ado."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"404 Not Found"}),(0,r.jsx)(s.td,{children:"A classe de dados n\xe3o \xe9 acess\xedvel via REST ou o conjunto de entidades n\xe3o existe."})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"500 Internal Server Error"}),(0,r.jsx)(s.td,{children:"Erro processando a peti\xe7\xe3o REST."})]})]})]}),"\n",(0,r.jsx)(s.h3,{id:"Resposta",children:"Resposta"}),"\n",(0,r.jsx)(s.p,{children:"A resposta (em formato JSON) varia dependendo da peti\xe7\xe3o."}),"\n",(0,r.jsx)(s.p,{children:"Se um erro surgir, ser\xe1 enviado junto com a resposta do servidor ou ser\xe1 a resposta do servidor."})]})}function p(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},221020:(e,s,t)=>{var r=t(296540),o=Symbol.for("react.element"),n=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function c(e,s,t){var r,n={},c=null,l=null;for(r in void 0!==t&&(c=""+t),void 0!==s.key&&(c=""+s.key),void 0!==s.ref&&(l=s.ref),s)d.call(s,r)&&!i.hasOwnProperty(r)&&(n[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===n[r]&&(n[r]=s[r]);return{$$typeof:o,type:e,key:c,ref:l,props:n,_owner:a.current}}s.Fragment=n,s.jsx=c,s.jsxs=c},474848:(e,s,t)=>{e.exports=t(221020)},28453:(e,s,t)=>{t.d(s,{R:()=>d,x:()=>a});var r=t(296540);const o={},n=r.createContext(o);function d(e){const s=r.useContext(n);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(n.Provider,{value:s},e.children)}}}]);