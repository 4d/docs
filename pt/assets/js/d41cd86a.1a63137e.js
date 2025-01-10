"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98858"],{913084:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"REST/orderby","title":"$orderby","description":"Ordena os dados devolvidos pelo atributo e pela ordem de ordena\xe7\xe3o definidos (e.g., $orderby=\\"lastName desc, salary asc\\")","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$orderby.md","sourceDirName":"REST","slug":"/REST/orderby","permalink":"/docs/pt/19/REST/orderby","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"orderby","title":"$orderby"},"sidebar":"docs","previous":{"title":"$method","permalink":"/docs/pt/19/REST/method"},"next":{"title":"$querypath","permalink":"/docs/pt/19/REST/querypath"}}'),d=o("785893"),t=o("250065");let s={id:"orderby",title:"$orderby"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:["Ordena os dados devolvidos pelo atributo e pela ordem de ordena\xe7\xe3o definidos (",(0,d.jsx)(n.em,{children:"e.g."}),", ",(0,d.jsx)(n.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.code,{children:"$orderby"})," ordena as entidades devolvidas pelo pedido REST. Para cada atributo, especifica-se a ordem como ",(0,d.jsx)(n.code,{children:"ASC"})," (ou ",(0,d.jsx)(n.code,{children:"asc"}),") para ordem ascendente e ",(0,d.jsx)(n.code,{children:"DESC"})," (",(0,d.jsx)(n.code,{children:"desc"}),") para ordem descendente. Por defeito, os dados s\xe3o ordenados por ordem ascendente. By default, the data is sorted in ascending order."]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsx)(n.p,{children:"Neste exemplo, recuperamos entidades e ordenamo-las em simult\xe2neo:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,d.jsx)(n.p,{children:"O exemplo abaixo ordena o conjunto de entidades pelo atributo lastName em ordem ascendente:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Resultadoi"}),":"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n'})})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return s}});var r=o(667294);let d={},t=r.createContext(d);function s(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);