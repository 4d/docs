"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28503"],{671003:function(e,n,r){r.r(n),r.d(n,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>d});var t=JSON.parse('{"id":"REST/directory","title":"$directory","description":"El directorio gestiona el acceso de los usuarios a trav\xe9s de peticiones REST.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/REST/$directory.md","sourceDirName":"REST","slug":"/REST/directory","permalink":"/docs/es/20-R6/REST/directory","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"directory","title":"$directory"}}'),s=r("785893"),o=r("250065");let i={id:"directory",title:"$directory"},d=void 0,c={},a=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Ejemplo",id:"ejemplo",level:3}];function l(e){let n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"El directorio gestiona el acceso de los usuarios a trav\xe9s de peticiones REST."}),"\n",(0,s.jsx)(n.h2,{id:"directorylogin",children:"$directory/login"}),"\n",(0,s.jsx)(n.p,{children:"Abre una sesi\xf3n REST en su aplicaci\xf3n 4D y conecta al usuario."}),"\n",(0,s.jsx)(n.h3,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["Utilice ",(0,s.jsx)(n.code,{children:"$directory/login"})," para abrir una sesi\xf3n en su aplicaci\xf3n 4D a trav\xe9s de REST y conecte un usuario. Tambi\xe9n puede modificar el tiempo de espera por defecto de la sesi\xf3n 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["Todos los par\xe1metros deben pasarse en ",(0,s.jsx)(n.strong,{children:"encabezados"}),"de un m\xe9todo POST:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Llave de encabezado"}),(0,s.jsx)(n.th,{children:"Valor del encabezado"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"username-4D"}),(0,s.jsx)(n.td,{children:"Usuario - No obligatorio"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"password-4D"}),(0,s.jsx)(n.td,{children:"Contrase\xf1a en texto plano - No es obligatorio"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"session-4D-length"}),(0,s.jsx)(n.td,{children:"Tiempo de inactividad de la sesi\xf3n (minutos). No puede ser inferior a 60 - No es obligatorio"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Dado que la contrase\xf1a se transmite en texto plano, se recomienda utilizar una conexi\xf3n https segura para la solicitud de acceso."})}),"\n",(0,s.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:="123"\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Si la conexi\xf3n fue exitosa, el resultado ser\xe1:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": true\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"De lo contrario, la respuesta ser\xe1:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n     "result": false\n}\n'})})]})}function u(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var t=r(667294);let s={},o=t.createContext(s);function i(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);