"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3749"],{662255:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"REST/directory","title":"$directory","description":"O diret\xf3rio processa o acesso dos usu\xe1rios atrav\xe9s de pedidos REST.","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/REST/$directory.md","sourceDirName":"REST","slug":"/REST/directory","permalink":"/docs/pt/19/REST/directory","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24directory.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"directory","title":"$directory"},"sidebar":"docs","previous":{"title":"$catalog","permalink":"/docs/pt/19/REST/catalog"},"next":{"title":"$info","permalink":"/docs/pt/19/REST/info"}}'),o=r("785893"),t=r("250065");let i={id:"directory",title:"$directory"},d=void 0,a={},l=[{value:"$directory/login",id:"directorylogin",level:2},{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:3},{value:"Exemplo",id:"exemplo",level:3}];function c(e){let n={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"O diret\xf3rio processa o acesso dos usu\xe1rios atrav\xe9s de pedidos REST."}),"\n",(0,o.jsx)(n.h2,{id:"directorylogin",children:"$directory/login"}),"\n",(0,o.jsx)(n.p,{children:"Abre uma sess\xe3o REST na sua aplica\xe7\xe3o 4D e faz o login do usu\xe1rio."}),"\n",(0,o.jsx)(n.h3,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["Utilize ",(0,o.jsx)(n.code,{children:"$directory/login"})," para abrir uma sess\xe3o na sua aplica\xe7\xe3o 4D atrav\xe9s de REST e fazer o login de um usu\xe1rio. Tamb\xe9m pode modificar o tempo limite predefinido da sess\xe3o 4D."]}),"\n",(0,o.jsx)(n.p,{children:"Todos os par\xe2metros devem ser transmitidos nos **cabe\xe7alhos ** de um m\xe9todo POST:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Chave de cabe\xe7alho"}),(0,o.jsx)(n.th,{children:"Valor do cabe\xe7alho"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"username-4D"}),(0,o.jsx)(n.td,{children:"Usu\xe1rio - N\xe3o obrigat\xf3rio"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"password-4D"}),(0,o.jsx)(n.td,{children:"Palavra-passe - N\xe3o obrigat\xf3ria"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"hashed-password-4D"}),(0,o.jsx)(n.td,{children:"Palavra-passe com hash - N\xe3o obrigat\xf3rio"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"session-4D-length"}),(0,o.jsx)(n.td,{children:"Tempo de inatividade da sess\xe3o (minutos). N\xe3o pode ser inferior a 60 - N\xe3o obrigat\xf3rio"})]})]})]}),"\n",(0,o.jsx)(n.h3,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'C_TEXT($response;$body_t)\nARRAY TEXT($hKey;3)\nARRAY TEXT($hValues;3)\n$hKey{1}:="username-4D"\n$hKey{2}:="hashed-password-4D"\n$hKey{3}:="session-4D-length"\n$hValues{1}:="john"\n$hValues{2}:=Generate digest("123";4D digest)\n$hValues{3}:=120\n$httpStatus:=HTTP Request(HTTP POST method;"app.example.com:9000/rest/$directory/login";$body_t;$response;$hKey;$hValues)\n'})}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Resultadoi"}),":"]}),"\n",(0,o.jsx)(n.p,{children:"Se o login for bem-sucedido, o resultado ser\xe1:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n    "result": true\n}\n'})}),"\n",(0,o.jsx)(n.p,{children:"Caso contr\xe1rio, a resposta ser\xe1:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{children:'{\n     "result": false\n}\n'})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return i}});var s=r(667294);let o={},t=s.createContext(o);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);