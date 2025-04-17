"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["30618"],{600876:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"REST/format","title":"$format","description":"Defines a specific format to return data of a dataclass, (e.g., $format=looker)","source":"@site/versioned_docs/version-20-R8/REST/$format.md","sourceDirName":"REST","slug":"/REST/format","permalink":"/docs/20-R8/REST/format","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24format.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"format","title":"$format"},"sidebar":"docs","previous":{"title":"$filter","permalink":"/docs/20-R8/REST/filter"},"next":{"title":"$imageformat","permalink":"/docs/20-R8/REST/imageformat"}}'),a=t("785893"),o=t("250065");let s={id:"format",title:"$format"},i=void 0,c={},l=[{value:"Description",id:"description",level:2},{value:"Example",id:"example",level:2}];function d(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["Defines a specific format to return data of a dataclass, (",(0,a.jsx)(n.em,{children:"e.g."}),", ",(0,a.jsx)(n.code,{children:"$format=looker"}),")"]}),"\n",(0,a.jsx)(n.h2,{id:"description",children:"Description"}),"\n",(0,a.jsx)(n.p,{children:"This parameter allows you to define the format to use to return data of your dataclass."}),"\n",(0,a.jsx)(n.p,{children:"The following formats are supported:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Format"}),(0,a.jsx)(n.th,{children:"Description"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"json"})}),(0,a.jsx)(n.td,{children:"Standard 4D REST server format (used by default)"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:(0,a.jsx)(n.code,{children:"looker"})}),(0,a.jsxs)(n.td,{children:["JSON format compliant with the ",(0,a.jsx)(n.a,{href:"https://lookerstudio.google.com/",children:"Looker Studio"}),"."]})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:'GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker'})}),"\n",(0,a.jsx)(n.p,{children:"The REST server returns a JSON object that contains the schema and data for the request:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{"__COUNT":1000,\n"__FIRST":10,\n"schema": [\n  {\n    "name": "ID",\n    "dataType": "NUMBER",\n    "semantics": {\n      "conceptType": "METRIC",\n      "semanticGroup": "NUMERIC",\n      "semanticType": "NUMBER"\n    }\n  }, {\n    "name": "name",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }, {\n    "name": "address",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }\n  }\n],"rows": [\n    {\n      "values": [ \n      	1,\n      	"Alpha Astral Animations",\n        "Ullman Drive (82)"]\n    },\n    {\n      "values": [ \n      	2,\n      	"Alpha Bart Computing",\n        "Lehigh Square (110)"]\n    },\n    {\n      "values": [ \n      	3,\n      	"Alpha Business Clock-making",\n        "Larchmont Terrace (90)"]\n    }\n  ],\n  "filtersApplied": false\n}\n'})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return s}});var r=t(667294);let a={},o=r.createContext(a);function s(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);