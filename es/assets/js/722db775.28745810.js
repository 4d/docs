"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8922"],{944379:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>i});var o=JSON.parse('{"id":"REST/format","title":"$format","description":"Define un formato espec\xedfico para devolver datos de una clase de datos, (e.g., $format=looker)","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/REST/$format.md","sourceDirName":"REST","slug":"/REST/format","permalink":"/docs/es/20-R7/REST/format","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24format.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"format","title":"$format"},"sidebar":"docs","previous":{"title":"$filter","permalink":"/docs/es/20-R7/REST/filter"},"next":{"title":"$imageformat","permalink":"/docs/es/20-R7/REST/imageformat"}}'),r=t("785893"),s=t("250065");let a={id:"format",title:"$format"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Define un formato espec\xedfico para devolver datos de una clase de datos, (",(0,r.jsx)(n.em,{children:"e.g."}),", ",(0,r.jsx)(n.code,{children:"$format=looker"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Este par\xe1metro permite definir el formato que se utilizar\xe1 para devolver los datos de la clase de datos."}),"\n",(0,r.jsx)(n.p,{children:"Se soportan los siguientes formatos:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Formato"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"json"})}),(0,r.jsx)(n.td,{children:"Formato est\xe1ndar del servidor 4D REST (utilizado por defecto)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"looker"})}),(0,r.jsxs)(n.td,{children:["Formato JSON compatible con ",(0,r.jsx)(n.a,{href:"https://lookerstudio.google.com/",children:"Looker Studio"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker'})}),"\n",(0,r.jsx)(n.p,{children:"El servidor REST devuelve un objeto JSON que contiene el esquema y los datos de la petici\xf3n:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{"__COUNT":1000,\n"__FIRST":10,\n"schema": [\n  {\n    "name": "ID",\n    "dataType": "NUMBER",\n    "semantics": {\n      "conceptType": "METRIC",\n      "semanticGroup": "NUMERIC",\n      "semanticType": "NUMBER"\n    }\n  }, {\n    "name": "name",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }, {\n    "name": "address",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }\n  }\n],"rows": [\n    {\n      "values": [ \n      	1,\n      	"Alpha Astral Animations",\n        "Ullman Drive (82)"]\n    },\n    {\n      "values": [ \n      	2,\n      	"Alpha Bart Computing",\n        "Lehigh Square (110)"]\n    },\n    {\n      "values": [ \n      	3,\n      	"Alpha Business Clock-making",\n        "Larchmont Terrace (90)"]\n    }\n  ],\n  "filtersApplied": false\n}\n'})})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var o=t(667294);let r={},s=o.createContext(r);function a(e){let n=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);