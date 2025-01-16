"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["62356"],{440862:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>i});var r=JSON.parse('{"id":"REST/format","title":"$format","description":"D\xe9finit un format sp\xe9cifique pour retourner les donn\xe9es d\'une dataclass, (par exemple, $format=looker)","source":"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R7/REST/$format.md","sourceDirName":"REST","slug":"/REST/format","permalink":"/docs/fr/20-R7/REST/format","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24format.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"format","title":"$format"},"sidebar":"docs","previous":{"title":"$filter","permalink":"/docs/fr/20-R7/REST/filter"},"next":{"title":"$imageformat","permalink":"/docs/fr/20-R7/REST/imageformat"}}'),s=t("785893"),o=t("250065");let a={id:"format",title:"$format"},i=void 0,l={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:["D\xe9finit un format sp\xe9cifique pour retourner les donn\xe9es d'une dataclass, (",(0,s.jsx)(n.em,{children:"par exemple"}),", ",(0,s.jsx)(n.code,{children:"$format=looker"}),")"]}),"\n",(0,s.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,s.jsx)(n.p,{children:"Ce param\xe8tre vous permet de d\xe9finir le format \xe0 utiliser pour retourner les donn\xe9es de votre dataclass."}),"\n",(0,s.jsx)(n.p,{children:"Les formats suivants sont pris en charge:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Format"}),(0,s.jsx)(n.th,{children:"Description"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"json"})}),(0,s.jsx)(n.td,{children:"Format standard du serveur REST 4D (utilis\xe9 par d\xe9faut)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:(0,s.jsx)(n.code,{children:"looker"})}),(0,s.jsxs)(n.td,{children:["Format JSON conforme au ",(0,s.jsx)(n.a,{href:"https://lookerstudio.google.com/",children:"Looker Studio"}),"."]})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"exemple",children:"Exemple"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:'GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker'})}),"\n",(0,s.jsx)(n.p,{children:"Le serveur REST renvoie un objet JSON qui contient le sch\xe9ma et les donn\xe9es pour la requ\xeate :"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{"__COUNT":1000,\n"__FIRST":10,\n"schema": [\n  {\n    "name": "ID",\n    "dataType": "NUMBER",\n    "semantics": {\n      "conceptType": "METRIC",\n      "semanticGroup": "NUMERIC",\n      "semanticType": "NUMBER"\n    }\n  }, {\n    "name": "name",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }, {\n    "name": "address",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }\n  }\n],"rows": [\n    {\n      "values": [ \n      	1,\n      	"Alpha Astral Animations",\n        "Ullman Drive (82)"]\n    },\n    {\n      "values": [ \n      	2,\n      	"Alpha Bart Computing",\n        "Lehigh Square (110)"]\n    },\n    {\n      "values": [ \n      	3,\n      	"Alpha Business Clock-making",\n        "Larchmont Terrace (90)"]\n    }\n  ],\n  "filtersApplied": false\n}\n'})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return a}});var r=t(667294);let s={},o=r.createContext(s);function a(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);