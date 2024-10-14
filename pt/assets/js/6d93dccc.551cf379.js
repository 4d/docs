"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[39576],{333380:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>a});var s=o(474848),r=o(28453);const t={id:"directory",title:"$directory"},i=void 0,d={id:"REST/directory",title:"$directory",description:"O diret\xf3rio processa o acesso dos usu\xe1rios atrav\xe9s de pedidos REST.",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R5/REST/$directory.md",sourceDirName:"REST",slug:"/REST/directory",permalink:"/docs/pt/20-R5/REST/directory",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"directory",title:"$directory"},sidebar:"docs",previous:{title:"$catalog",permalink:"/docs/pt/20-R5/REST/catalog"},next:{title:"$info",permalink:"/docs/pt/20-R5/REST/info"}},c={},a=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"O diret\xf3rio processa o acesso dos usu\xe1rios atrav\xe9s de pedidos REST."}),"\n",(0,s.jsx)(n.h2,{id:"directorylogin",children:"$directory/login"}),"\n",(0,s.jsx)(n.p,{children:"Abre uma sess\xe3o REST na sua aplica\xe7\xe3o 4D e faz o login do usu\xe1rio."}),"\n",(0,s.jsx)(n.h3,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["Utilice ",(0,s.jsx)(n.code,{children:"$directory/login"})," para abrir una sesi\xf3n en su aplicaci\xf3n 4D a trav\xe9s de REST y conecte un usuario. Tamb\xe9m pode modificar o tempo limite predefinido da sess\xe3o 4D."]}),"\n",(0,s.jsxs)(n.p,{children:["Todos los par\xe1metros deben pasarse en ",(0,s.jsx)(n.strong,{children:"encabezados"}),"de un m\xe9todo POST:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Chave de cabe\xe7alho"}),(0,s.jsx)(n.th,{children:"Valor do cabe\xe7alho"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"username-4D"}),(0,s.jsx)(n.td,{children:"Usu\xe1rio - N\xe3o obrigat\xf3rio"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"password-4D"}),(0,s.jsx)(n.td,{children:"Senha em texto simples - N\xe3o obrigat\xf3rio"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"session-4D-length"}),(0,s.jsx)(n.td,{children:"Tempo de inatividade da sess\xe3o (minutos). N\xe3o pode ser inferior a 60 - N\xe3o obrigat\xf3rio"})]})]})]}),"\n",(0,s.jsx)(n.admonition,{type:"caution",children:(0,s.jsx)(n.p,{children:"Since the password is transmitted in plain text, it is strongly recommended to use a secured https connection for the login request."})}),"\n",(0,s.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:="123"\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Resultado"}),":"]}),"\n",(0,s.jsx)(n.p,{children:"Se o login for bem-sucedido, o resultado ser\xe1:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n    "result": true\n}\n'})}),"\n",(0,s.jsx)(n.p,{children:"Caso contr\xe1rio, a resposta ser\xe1:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:'{\n     "result": false\n}\n'})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},28453:(e,n,o)=>{o.d(n,{R:()=>i,x:()=>d});var s=o(296540);const r={},t=s.createContext(r);function i(e){const n=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);