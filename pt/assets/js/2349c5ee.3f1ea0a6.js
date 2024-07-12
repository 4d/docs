/*! For license information please see 2349c5ee.3f1ea0a6.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[553],{635364:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var r=t(474848),o=t(28453);const s={id:"format",title:"$format"},a=void 0,i={id:"REST/format",title:"$format",description:"Defines a specific format to return data of a dataclass, (e.g., $format=looker)",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/REST/$format.md",sourceDirName:"REST",slug:"/REST/format",permalink:"/docs/pt/20-R5/REST/format",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24format.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"format",title:"$format"},sidebar:"docs",previous:{title:"$filter",permalink:"/docs/pt/20-R5/REST/filter"},next:{title:"$imageformat",permalink:"/docs/pt/20-R5/REST/imageformat"}},c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function d(e){const n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["Defines a specific format to return data of a dataclass, (",(0,r.jsx)(n.em,{children:"e.g."}),", ",(0,r.jsx)(n.code,{children:"$format=looker"}),")"]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"This parameter allows you to define the format to use to return data of your dataclass."}),"\n",(0,r.jsx)(n.p,{children:"The following formats are supported:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Formato"}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"json"})}),(0,r.jsx)(n.td,{children:"Standard 4D REST server format (used by default)"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:(0,r.jsx)(n.code,{children:"looker"})}),(0,r.jsxs)(n.td,{children:["JSON format compliant with the ",(0,r.jsx)(n.a,{href:"https://lookerstudio.google.com/",children:"Looker Studio"}),"."]})]})]})]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.code,{children:'GET /rest/Company/?$filter="name begin a"&$top=3&$format=looker'})}),"\n",(0,r.jsx)(n.p,{children:"The REST server returns a JSON object that contains the schema and data for the request:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{"__COUNT":1000,\n"__FIRST":10,\n"schema": [\n  {\n    "name": "ID",\n    "dataType": "NUMBER",\n    "semantics": {\n      "conceptType": "METRIC",\n      "semanticGroup": "NUMERIC",\n      "semanticType": "NUMBER"\n    }\n  }, {\n    "name": "name",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }, {\n    "name": "address",\n    "dataType": "STRING",\n    "semantics": {\n      "conceptType": "DIMENSION",\n      "semanticGroup": "TEXT",\n      "semanticType": "TEXT"\n    }\n  }\n],"rows": [\n    {\n      "values": [ \n      \t1,\n      \t"Alpha Astral Animations",\n        "Ullman Drive (82)"]\n    },\n    {\n      "values": [ \n      \t2,\n      \t"Alpha Bart Computing",\n        "Lehigh Square (110)"]\n    },\n    {\n      "values": [ \n      \t3,\n      \t"Alpha Business Clock-making",\n        "Larchmont Terrace (90)"]\n    }\n  ],\n  "filtersApplied": false\n}\n'})})]})}function m(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var r=t(296540),o=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var r,s={},l=null,d=null;for(r in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,r)&&!c.hasOwnProperty(r)&&(s[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===s[r]&&(s[r]=n[r]);return{$$typeof:o,type:e,key:l,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>a,x:()=>i});var r=t(296540);const o={},s=r.createContext(o);function a(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);