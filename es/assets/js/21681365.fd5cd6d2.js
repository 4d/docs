"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74293],{469658:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>d,toc:()=>l});var r=s(474848),t=s(28453);const o={id:"directory",title:"$directory"},i=void 0,d={id:"REST/directory",title:"$directory",description:"El directorio gestiona el acceso de los usuarios a trav\xe9s de peticiones REST.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/REST/$directory.md",sourceDirName:"REST",slug:"/REST/directory",permalink:"/docs/es/19/REST/directory",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"directory",title:"$directory"},sidebar:"docs",previous:{title:"$catalog",permalink:"/docs/es/19/REST/catalog"},next:{title:"$info",permalink:"/docs/es/19/REST/info"}},c={},l=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Descripci\xf3n",id:"descripci\xf3n",level:3},{value:"Ejemplo",id:"ejemplo",level:3}];function a(e){const n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"El directorio gestiona el acceso de los usuarios a trav\xe9s de peticiones REST."}),"\n",(0,r.jsx)(n.h2,{id:"directorylogin",children:"$directory/login"}),"\n",(0,r.jsx)(n.p,{children:"Abre una sesi\xf3n REST en su aplicaci\xf3n 4D y conecta al usuario."}),"\n",(0,r.jsx)(n.h3,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["Utilice ",(0,r.jsx)(n.code,{children:"$directory/login"})," para abrir una sesi\xf3n en su aplicaci\xf3n 4D a trav\xe9s de REST y conecte un usuario. Tambi\xe9n puede modificar el tiempo de espera por defecto de la sesi\xf3n 4D."]}),"\n",(0,r.jsxs)(n.p,{children:["Todos los par\xe1metros deben pasarse en ",(0,r.jsx)(n.strong,{children:"encabezados"}),"de un m\xe9todo POST:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Llave de encabezado"}),(0,r.jsx)(n.th,{children:"Valor del encabezado"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"username-4D"}),(0,r.jsx)(n.td,{children:"Usuario - No obligatorio"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"password-4D"}),(0,r.jsx)(n.td,{children:"Contrase\xf1a - No obligatorio"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"hashed-password-4D"}),(0,r.jsx)(n.td,{children:"Contrase\xf1a hashed - No obligatorio"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"session-4D-length"}),(0,r.jsx)(n.td,{children:"Tiempo de inactividad de la sesi\xf3n (minutos). No puede ser inferior a 60 - No es obligatorio"})]})]})]}),"\n",(0,r.jsx)(n.h3,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="hashed-password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:=Generate digest("123";4D digest)\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n'})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,r.jsx)(n.p,{children:"Si la conexi\xf3n fue exitosa, el resultado ser\xe1:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n    "result": true\n}\n'})}),"\n",(0,r.jsx)(n.p,{children:"De lo contrario, la respuesta ser\xe1:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:'{\n     "result": false\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>d});var r=s(296540);const t={},o=r.createContext(t);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);