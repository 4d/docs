"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93137"],{700648:function(e,s,t){t.r(s),t.d(s,{metadata:()=>r,contentTitle:()=>a,default:()=>h,assets:()=>i,toc:()=>c,frontMatter:()=>d});var r=JSON.parse('{"id":"REST/REST_requests","title":"Sobre peti\xe7\xf5es REST","description":"As estrutyuras abaixo s\xe3o compat\xedveis com peti\xe7\xf5es REST:","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/REST/REST_requests.md","sourceDirName":"REST","slug":"/REST/REST_requests","permalink":"/docs/pt/REST/REST_requests","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2FREST_requests.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"REST_requests","title":"Sobre peti\xe7\xf5es REST"},"sidebar":"docs","previous":{"title":"Chamada de fun\xe7\xf5es de classe","permalink":"/docs/pt/REST/classFunctions"},"next":{"title":"API (general)","permalink":"/docs/pt/category/api-general"}}'),n=t("785893"),o=t("250065");let d={id:"REST_requests",title:"Sobre peti\xe7\xf5es REST"},a=void 0,i={},c=[{value:"Estado e resposta REST",id:"estado-e-resposta-rest",level:2},{value:"Estado da peti\xe7\xe3o",id:"estado-da-peti\xe7\xe3o",level:3},{value:"Resposta",id:"resposta",level:3}];function l(e){let s={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.p,{children:"As estrutyuras abaixo s\xe3o compat\xedveis com peti\xe7\xf5es REST:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"URI"}),(0,n.jsx)(s.th,{children:"Recurso"}),(0,n.jsx)(s.th,{children:"/? ou &{filter} (sa\xedda)"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"http://{servername}:{port}/rest/"}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/pt/REST/dataClass",children:"{dataClass}"})}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/REST/filter",children:"$filter"}),", ",(0,n.jsx)(s.a,{href:"/docs/pt/REST/attributes",children:"$attributes"}),", ",(0,n.jsx)(s.a,{href:"/docs/pt/REST/skip",children:"$skip"}),", ",(0,n.jsx)(s.a,{href:"/docs/pt/REST/method",children:"$method=..."}),"..."]})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/pt/REST/dataClass",children:"{dataClass}"}),"/",(0,n.jsx)(s.a,{href:"/docs/pt/REST/entityset#entitysetentitysetid",children:"$entityset/{entitySetID}"})]}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/pt/REST/method",children:"$method=..."})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/pt/REST/dataClass#dataclasskey",children:"{dataClass}({key})"})}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/pt/REST/attributes",children:"$attributes"})})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{}),(0,n.jsx)(s.td,{children:(0,n.jsx)(s.a,{href:"/docs/pt/REST/dataClass#dataclassattributevalue",children:"{dataClass}:{attribute}(value)"})}),(0,n.jsx)(s.td,{})]})]})]}),"\n",(0,n.jsx)(s.p,{children:"Todas as peti\xe7\xf5es REST devem conter os par\xe2metros URI e Resource, mas o par\xe2metro Subresource (que filtra os dados retornados) \xe9 opcional."}),"\n",(0,n.jsx)(s.p,{children:"Como com todas as URIs, o primeiro par\xe2metro \xe9 definido por um \u201C?\u201D e todos os par\xe2metros subsequentes por \u201C&\u201D. Por exemplo:"}),"\n",(0,n.jsx)(s.p,{children:(0,n.jsx)(s.code,{children:'GET  /rest/Person/?$filter="lastName!=Jones"&$method=entityset&$timeout=600'})}),"\n",(0,n.jsxs)(s.blockquote,{children:["\n",(0,n.jsx)(s.p,{children:"Pode colocar todos os valores entre aspas para evitar ambiguidades. Por exemplo, no exemplo anterior, poder\xedamos colocar o valor para o \xfaltimo nome em aspas simples: \"lastName!='Jones'\"."}),"\n"]}),"\n",(0,n.jsxs)(s.p,{children:["Os par\xe2metros permitem que manipule dados em dataclasses em seu projeto 4D. Adem\xe1s de recuperar datos mediante los m\xe9todos HTTP ",(0,n.jsx)(s.code,{children:"GET"}),", tambi\xe9n se pueden a\xf1adir, actualizar y eliminar entidades de una clase de datos utilizando los m\xe9todos HTTP ",(0,n.jsx)(s.code,{children:"POST"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["If you want the data to be returned in an array instead of JSON, use the ",(0,n.jsx)(s.a,{href:"/docs/pt/REST/asArray",children:(0,n.jsx)(s.code,{children:"$asArray"})})," parameter."]}),"\n",(0,n.jsx)(s.h2,{id:"estado-e-resposta-rest",children:"Estado e resposta REST"}),"\n",(0,n.jsx)(s.p,{children:"Com cada peti\xe7\xe3o REST, o servidor retorna o estado e uma resposta (com ou sem um erro)."}),"\n",(0,n.jsx)(s.h3,{id:"estado-da-peti\xe7\xe3o",children:"Estado da peti\xe7\xe3o"}),"\n",(0,n.jsx)(s.p,{children:"Com cada peti\xe7\xe3o REST, se obt\xe9m o estado junto com a resposta. Abaixo est\xe3o alguns estados que podem surgir:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Estado"}),(0,n.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(s.tbody,{children:[(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"0"}),(0,n.jsx)(s.td,{children:"Peti\xe7\xe3o n\xe3o processada (servidor pode n\xe3o ter iniciado)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"200 OK"}),(0,n.jsx)(s.td,{children:"Peti\xe7\xe3o processada sem erro."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"401 Unauthorized"}),(0,n.jsx)(s.td,{children:"Erro de autoriza\xe7\xe3o (verifique as permiss\xf5es do usu\xe1rio)."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"402 No session"}),(0,n.jsx)(s.td,{children:"N\xfamero m\xe1ximo de sess\xf5es foi alcan\xe7ado."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"404 Not Found"}),(0,n.jsx)(s.td,{children:"A classe de dados n\xe3o \xe9 acess\xedvel via REST ou o conjunto de entidades n\xe3o existe."})]}),(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"500 Internal Server Error"}),(0,n.jsx)(s.td,{children:"Erro processando a peti\xe7\xe3o REST."})]})]})]}),"\n",(0,n.jsx)(s.h3,{id:"resposta",children:"Resposta"}),"\n",(0,n.jsx)(s.p,{children:"A resposta (em formato JSON) varia dependendo da peti\xe7\xe3o."}),"\n",(0,n.jsx)(s.p,{children:"Se um erro surgir, ser\xe1 enviado junto com a resposta do servidor ou ser\xe1 a resposta do servidor."})]})}function h(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,s,t){t.d(s,{Z:function(){return a},a:function(){return d}});var r=t(667294);let n={},o=r.createContext(n);function d(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);