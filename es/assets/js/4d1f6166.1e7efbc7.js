/*! For license information please see 4d1f6166.1e7efbc7.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56953],{160685:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(474848),r=t(28453);const s={id:"atomic_$atonce",title:"$atomic/$atOnce"},o=void 0,i={id:"REST/atomic_$atonce",title:"$atomic/$atOnce",description:"Permite que las acciones de la solicitud REST est\xe9n en una transacci\xf3n. Si no hay errores, la transacci\xf3n se valida. En caso contrario, la transacci\xf3n se cancela.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/REST/$atomic_$atonce.md",sourceDirName:"REST",slug:"/REST/atomic_$atonce",permalink:"/docs/es/20-R5/REST/atomic_$atonce",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24atomic_%24atonce.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"atomic_$atonce",title:"$atomic/$atOnce"},sidebar:"docs",previous:{title:"$asArray",permalink:"/docs/es/20-R5/REST/asArray"},next:{title:"$attributes",permalink:"/docs/es/20-R5/REST/attributes"}},c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2}];function d(e){const n={blockquote:"blockquote",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"Permite que las acciones de la solicitud REST est\xe9n en una transacci\xf3n. Si no hay errores, la transacci\xf3n se valida. En caso contrario, la transacci\xf3n se cancela."}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["Cuando tiene varias acciones juntas, puede utilizar ",(0,a.jsx)(n.code,{children:"$atomic/$atOnce"})," para asegurarse de que ninguna de las acciones se complete si una de ellas falla. Puede utilizar ",(0,a.jsx)(n.code,{children:"$atomic"})," o ",(0,a.jsx)(n.code,{children:"$atOnce"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Llamamos a la siguiente petici\xf3n REST en una transacci\xf3n."}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.code,{children:"POST  /rest/Employee?$method=update&$atomic=true"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Datos POST"}),":"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'[\n{\n    "__KEY": "200",\n    "firstname": "John"\n},\n{\n    "__KEY": "201",\n    "firstname": "Harry"\n}\n]\n'})}),"\n",(0,a.jsx)(n.p,{children:"Obtenemos el siguiente error en la segunda entidad y por lo tanto la primera entidad tampoco se guarda:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n    "__STATUS": {\n        "success": true\n    },\n    "__KEY": "200",\n    "__STAMP": 1,\n    "uri": "/rest/Employee(200)",\n    "__TIMESTAMP": "!!2020-04-03!!",\n    "ID": 200,\n    "firstname": "John",\n    "lastname": "Keeling",\n    "isWoman": false,\n    "numberOfKids": 2,\n    "addressID": 200,\n    "gender": false,\n    "address": {\n        "__deferred": {\n            "uri": "/rest/Address(200)",\n            "__KEY": "200"\n        }\n    },\n    "__ERROR": [\n        {\n            "message": "Cannot find entity with \\"201\\" key in the \\"Employee\\" dataclass",\n            "componentSignature": "dbmg",\n            "errCode": 1542\n        }\n    ]\n}\n'})}),"\n",(0,a.jsxs)(n.blockquote,{children:["\n",(0,a.jsxs)(n.p,{children:["Aunque el salario de la primera entidad tiene un valor de 45000, este valor no se guard\xf3 en el servidor y tampoco se modific\xf3 el ",(0,a.jsx)(n.em,{children:"timestamp (__STAMP)"}),". Si recargamos la entidad, veremos el valor anterior."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},221020:(e,n,t)=>{var a=t(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,i=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,t){var a,s={},l=null,d=null;for(a in void 0!==t&&(l=""+t),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)o.call(n,a)&&!c.hasOwnProperty(a)&&(s[a]=n[a]);if(e&&e.defaultProps)for(a in n=e.defaultProps)void 0===s[a]&&(s[a]=n[a]);return{$$typeof:r,type:e,key:l,ref:d,props:s,_owner:i.current}}n.Fragment=s,n.jsx=l,n.jsxs=l},474848:(e,n,t)=>{e.exports=t(221020)},28453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>i});var a=t(296540);const r={},s=a.createContext(r);function o(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);