"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77408"],{725057:function(e,n,a){a.r(n),a.d(n,{metadata:()=>t,contentTitle:()=>o,default:()=>u,assets:()=>c,toc:()=>l,frontMatter:()=>r});var t=JSON.parse('{"id":"REST/atomic_$atonce","title":"$atomic/$atOnce","description":"Permite que las acciones de la solicitud REST est\xe9n en una transacci\xf3n. Si no hay errores, la transacci\xf3n se valida. En caso contrario, la transacci\xf3n se cancela.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/REST/$atomic_$atonce.md","sourceDirName":"REST","slug":"/REST/atomic_$atonce","permalink":"/docs/es/20/REST/atomic_$atonce","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24atomic_%24atonce.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"atomic_$atonce","title":"$atomic/$atOnce"},"sidebar":"docs","previous":{"title":"$asArray","permalink":"/docs/es/20/REST/asArray"},"next":{"title":"$attributes","permalink":"/docs/es/20/REST/attributes"}}'),s=a("785893"),i=a("250065");let r={id:"atomic_$atonce",title:"$atomic/$atOnce"},o=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function d(e){let n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Permite que las acciones de la solicitud REST est\xe9n en una transacci\xf3n. Si no hay errores, la transacci\xf3n se valida. En caso contrario, la transacci\xf3n se cancela."}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Cuando tiene varias acciones juntas, puede utilizar ",(0,s.jsx)(n.code,{children:"$atomic/$atOnce"})," para asegurarse de que ninguna de las acciones se complete si una de ellas falla. Puede utilizar ",(0,s.jsx)(n.code,{children:"$atomic"})," o ",(0,s.jsx)(n.code,{children:"$atOnce"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Llamamos a la siguiente petici\xf3n REST en una transacci\xf3n."}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.code,{children:"POST  /rest/Employee?$method=update&$atomic=true"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Datos POST"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Obtenemos el siguiente error en la segunda entidad y por lo tanto la primera entidad tampoco se guarda:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n'})}),"\n",(0,s.jsxs)(n.blockquote,{children:["\n",(0,s.jsxs)(n.p,{children:["Aunque el salario de la primera entidad tiene un valor de 45000, este valor no se guard\xf3 en el servidor y tampoco se modific\xf3 el ",(0,s.jsx)(n.em,{children:"timestamp (__STAMP)"}),". Si recargamos la entidad, veremos el valor anterior."]}),"\n"]})]})}function u(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return o},a:function(){return r}});var t=a(667294);let s={},i=t.createContext(s);function r(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);