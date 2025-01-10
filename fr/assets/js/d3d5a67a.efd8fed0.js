"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77533"],{318069:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"REST/orderby","title":"$orderby","description":"Trie les donn\xe9es retourn\xe9es par l\'attribut et l\'ordre de tri d\xe9finis (par exemple,$orderby=\\"lastName desc, salaire asc\\")","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R6/REST/$orderby.md","sourceDirName":"REST","slug":"/REST/orderby","permalink":"/docs/fr/20-R6/REST/orderby","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24orderby.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"orderby","title":"$orderby"},"sidebar":"docs","previous":{"title":"$method","permalink":"/docs/fr/20-R6/REST/method"},"next":{"title":"$querypath","permalink":"/docs/fr/20-R6/REST/querypath"}}'),s=n("785893"),o=n("250065");let i={id:"orderby",title:"$orderby"},d=void 0,l={},a=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function c(e){let r={code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:["Trie les donn\xe9es retourn\xe9es par l'attribut et l'ordre de tri d\xe9finis (par exemple,",(0,s.jsx)(r.code,{children:'$orderby="lastName desc, salaire asc"'}),")"]}),"\n",(0,s.jsx)(r.h2,{id:"description",children:"Description"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.code,{children:"$orderby"})," ordonne les entit\xe9s retourn\xe9es par la requ\xeate REST. Pour chaque attribut, d\xe9finissez l'ordre sur ",(0,s.jsx)(r.code,{children:"ASC"})," (ou ",(0,s.jsx)(r.code,{children:"asc"}),") pour l'ordre croissant et sur ",(0,s.jsx)(r.code,{children:"DESC"})," (",(0,s.jsx)(r.code,{children:"desc"}),") pour l'ordre d\xe9croissant. Par d\xe9faut, les donn\xe9es sont tri\xe9es par ordre croissant. Si vous souhaitez sp\xe9cifier plusieurs attributs, vous pouvez les d\xe9limiter avec une virgule, ",(0,s.jsx)(r.em,{children:"par exemple"}),", ",(0,s.jsx)(r.code,{children:'$orderby="lastName desc, firstName asc"'}),"."]}),"\n",(0,s.jsx)(r.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(r.p,{children:"Dans cet exemple, nous r\xe9cup\xe9rons les entit\xe9s et les trions en m\xeame temps :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:'GET  /rest/Employee/?$filter="salary!=0"&$orderby="salary DESC,lastName ASC,firstName ASC"'})}),"\n",(0,s.jsx)(r.p,{children:"L'exemple ci-dessous trie l'entit\xe9 d\xe9finie par l'attribut lastName dans l'ordre croissant :"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.code,{children:'GET  /rest/Employee/$entityset/CB1BCC603DB0416D939B4ED379277F02?$orderby="lastName"'})}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"R\xe9sultat"})," :"]}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{children:'{\n    __entityModel: "Employee",\n    __COUNT: 10,\n    __SENT: 10,\n    __FIRST: 0,\n    __ENTITIES: [\n        {\n            __KEY: "1",\n            __STAMP: 1,\n            firstName: "John",\n            lastName: "Smith",\n            salary: 90000\n        },\n        {\n            __KEY: "2",\n            __STAMP: 2,\n            firstName: "Susan",\n            lastName: "O\'Leary",\n            salary: 80000\n        },\n// plus d\'entit\xe9s\n    ]\n}\n'})})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return i}});var t=n(667294);let s={},o=t.createContext(s);function i(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);