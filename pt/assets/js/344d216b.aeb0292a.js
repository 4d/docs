"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["20375"],{464941:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>m,assets:()=>c,toc:()=>d,frontMatter:()=>s});var t=JSON.parse('{"id":"REST/atomic_$atonce","title":"$atomic/$atOnce","description":"Permite que as a\xe7\xf5es no pedido REST estejam numa transa\xe7\xe3o. Se n\xe3o houver erros, a transa\xe7\xe3o \xe9 validada. Caso contr\xe1rio, a transa\xe7\xe3o \xe9 cancelada.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/REST/$atomic_$atonce.md","sourceDirName":"REST","slug":"/REST/atomic_$atonce","permalink":"/docs/pt/20-R6/REST/atomic_$atonce","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24atomic_%24atonce.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"atomic_$atonce","title":"$atomic/$atOnce"},"sidebar":"docs","previous":{"title":"$asArray","permalink":"/docs/pt/20-R6/REST/asArray"},"next":{"title":"$attributes","permalink":"/docs/pt/20-R6/REST/attributes"}}'),o=a("785893"),r=a("250065");let s={id:"atomic_$atonce",title:"$atomic/$atOnce"},i=void 0,c={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function l(e){let n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"Permite que as a\xe7\xf5es no pedido REST estejam numa transa\xe7\xe3o. Se n\xe3o houver erros, a transa\xe7\xe3o \xe9 validada. Caso contr\xe1rio, a transa\xe7\xe3o \xe9 cancelada."}),"\n",(0,o.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["Cuando tiene varias acciones juntas, puede utilizar ",(0,o.jsx)(n.code,{children:"$atomic/$atOnce"})," para asegurarse de que ninguna de las acciones se complete si una de ellas falla. Puede utilizar ",(0,o.jsx)(n.code,{children:"$atomic"})," o ",(0,o.jsx)(n.code,{children:"$atOnce"}),"."]}),"\n",(0,o.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.p,{children:"Chamamos o seguinte pedido REST numa transa\xe7\xe3o."}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.code,{children:"POST  /rest/Employee?$method=update&$atomic=true"})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Datos POST"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n'})}),"\n",(0,o.jsx)(n.p,{children:"Obtemos o seguinte erro na segunda entidade e, por conseguinte, a primeira entidade tamb\xe9m n\xe3o \xe9 guardada:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n'})}),"\n",(0,o.jsxs)(n.blockquote,{children:["\n",(0,o.jsxs)(n.p,{children:["Embora o sal\xe1rio da primeira entidade tenha um valor de 45000, este valor n\xe3o foi guardado no servidor e o ",(0,o.jsx)(n.em,{children:"timestamp (__STAMP)"})," tamb\xe9m n\xe3o foi modificado. Se recarregarmos a entidade, veremos o valor anterior."]}),"\n"]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return i},a:function(){return s}});var t=a(667294);let o={},r=t.createContext(o);function s(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);