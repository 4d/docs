"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17755"],{911826:function(e,n,r){r.r(n),r.d(n,{default:()=>p,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"REST/orderby","title":"$orderby","description":"Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (por ejemplo, $orderby=\\"lastName desc, salary asc\\")","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/REST/$orderby.md","sourceDirName":"REST","slug":"/REST/orderby","permalink":"/docs/pt/REST/orderby","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"orderby","title":"$orderby"},"sidebar":"docs","previous":{"title":"$method","permalink":"/docs/pt/REST/method"},"next":{"title":"$querypath","permalink":"/docs/pt/REST/querypath"}}'),t=r("785893"),s=r("250065");let d={id:"orderby",title:"$orderby"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (",(0,t.jsx)(n.em,{children:"por ejemplo"}),", ",(0,t.jsx)(n.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$orderby"})," ordena las entidades devueltas por la petici\xf3n REST. Para cada atributo, se especifica el orden como ",(0,t.jsx)(n.code,{children:"ASC"})," (o ",(0,t.jsx)(n.code,{children:"asc"}),") para el orden ascendente y ",(0,t.jsx)(n.code,{children:"DESC"})," (",(0,t.jsx)(n.code,{children:"desc"}),") para el orden descendente. Por defeito, os dados s\xe3o ordenados por ordem ascendente. By default, the data is sorted in ascending order."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.p,{children:"Neste exemplo, recuperamos entidades e ordenamo-las em simult\xe2neo:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,t.jsx)(n.p,{children:"O exemplo abaixo ordena o conjunto de entidades pelo atributo lastName em ordem ascendente:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return d}});var o=r(667294);let t={},s=o.createContext(t);function d(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);