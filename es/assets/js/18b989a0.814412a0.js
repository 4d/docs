"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15460"],{348240:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>p,assets:()=>a,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"REST/orderby","title":"$orderby","description":"Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (por ejemplo, $orderby=\\"lastName desc, salary asc\\")","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/REST/$orderby.md","sourceDirName":"REST","slug":"/REST/orderby","permalink":"/docs/es/20-R6/REST/orderby","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"orderby","title":"$orderby"},"sidebar":"docs","previous":{"title":"$method","permalink":"/docs/es/20-R6/REST/method"},"next":{"title":"$querypath","permalink":"/docs/es/20-R6/REST/querypath"}}'),t=r("785893"),o=r("250065");let d={id:"orderby",title:"$orderby"},i=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function c(e){let n={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["Ordena los datos devueltos por el atributo y el orden de clasificaci\xf3n definidos (",(0,t.jsx)(n.em,{children:"por ejemplo"}),", ",(0,t.jsx)(n.code,{children:'$orderby="lastName desc, salary asc"'}),")"]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"$orderby"})," ordena las entidades devueltas por la petici\xf3n REST. Para cada atributo, se especifica el orden como ",(0,t.jsx)(n.code,{children:"ASC"})," (o ",(0,t.jsx)(n.code,{children:"asc"}),") para el orden ascendente y ",(0,t.jsx)(n.code,{children:"DESC"})," (",(0,t.jsx)(n.code,{children:"desc"}),") para el orden descendente. Por defecto, los datos se clasifican en orden ascendente. By default, the data is sorted in ascending order."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"En este ejemplo, recuperamos las entidades y las ordenamos al mismo tiempo:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,t.jsx)(n.p,{children:"El ejemplo siguiente ordena el conjunto de entidades por el atributo lastName en orden ascendente:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// more entities\n    ]\n}\n'})})]})}function p(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let t={},o=s.createContext(t);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);