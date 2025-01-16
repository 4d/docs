"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["91619"],{146967:function(e,s,n){n.r(s),n.d(s,{default:()=>l,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>h,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/verify-password-hash","title":"Verify password hash","description":"Verify password hash  ( senha ; hash ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/verify-password-hash.md","sourceDirName":"commands-legacy","slug":"/commands/verify-password-hash","permalink":"/docs/pt/commands/verify-password-hash","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-password-hash.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"verify-password-hash","title":"Verify password hash","slug":"/commands/verify-password-hash","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"STOP MONITORING ACTIVITY","permalink":"/docs/pt/commands/stop-monitoring-activity"},"next":{"title":"Transactions","permalink":"/docs/pt/category/transactions"}}'),a=n("785893"),d=n("250065");let o={id:"verify-password-hash",title:"Verify password hash",slug:"/commands/verify-password-hash",displayed_sidebar:"docs"},t=void 0,i={},h=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:5},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let s={a:"a",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Verify password hash"}),"  ( ",(0,a.jsx)(s.em,{children:"senha"})," ; ",(0,a.jsx)(s.em,{children:"hash"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe2metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"senha"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"A senha do usu\xe1rio. S\xf3 os primeiros 72 caracteres s\xe3o usados"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"hash"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:"O hash da senha"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Resultado"}),(0,a.jsx)(s.td,{children:"Boolean"}),(0,a.jsx)(s.td,{children:"\u2190"}),(0,a.jsx)(s.td,{children:"Retorna TRUE se a senha e o hash coincidirem, ou ent\xe3o retorna FALSE"})]})]})]}),"\n",(0,a.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(s.p,{children:["A fun\xe7\xe3o ",(0,a.jsx)(s.strong,{children:"Verify password hash"})," verifica que o hash dado coincida com a ",(0,a.jsx)(s.em,{children:"senha"})," dada."]}),"\n",(0,a.jsxs)(s.p,{children:["Esta fun\xe7\xe3o compara a ",(0,a.jsx)(s.em,{children:"senha"})," com um ",(0,a.jsx)(s.em,{children:"hash"})," gerado pela fun\xe7\xe3o ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/generate-password-hash",children:"Generate password hash"}),"."]}),"\n",(0,a.jsx)(s.h5,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,a.jsxs)(s.p,{children:["Os erros abaixo podem ser devolvidos. Pode revisar um erro com os comandos ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/last-errors",children:"Last errors"}),"  e ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"N\xfamero"})}),(0,a.jsx)(s.th,{children:(0,a.jsx)(s.strong,{children:"Mensagem"})})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"850"}),(0,a.jsx)(s.td,{children:"Password-hash: Algoritmo n\xe3o compat\xedvel."})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"851"}),(0,a.jsx)(s.td,{children:"Password-hash: Falha na verifica\xe7\xe3o de consist\xeancia."})]})]})]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Lembrete:"})," S\xf3 algoritmo bcrypt \xe9 compat\xedvel. Se seu hash n\xe3o foi gerado usando bcrypt, um erro \xe9 retornado."]}),"\n",(0,a.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsxs)(s.p,{children:["Este exemplo verifica um hash de senha previamente criado por ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/generate-password-hash",children:"Generate password hash"})," e o armazena em uma tabela [Users] com uma nova senha digitada:"]}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:'\xa0var $password : Text\n\xa0$password:=Request("Por favor digite sua senha")\n\xa0\n\xa0If(Verify password hash($password;[Users]hash))\n\xa0\xa0\xa0\xa0ALERT("Boa senha")\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("Erro de senha")\n\xa0End if\n'})}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota:"})," A senha nunca \xe9 armazenada no disco, apenas o hash. Usando uma aplica\xe7\xe3o remota 4D, o hash poderia ser produzido no lado do cliente. Se ao inv\xe9s disso quiser usar um front end baseado em JavaScript (ou similar) a melhor pr\xe1tica para seguran\xe7a \xe9 criar o hash do lado do servidor. Deve usar uma conex\xe3o de rede TLS criptografada para seguran\xe7a, j\xe1 que isso exige a transfer\xeancia de uma senha pela rede"]}),"\n",(0,a.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(s.p,{children:(0,a.jsx)(s.a,{href:"/docs/pt/commands/generate-password-hash",children:"Generate password hash"})}),"\n",(0,a.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"N\xfamero do comando"}),(0,a.jsx)(s.td,{children:"1534"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread-seguro"}),(0,a.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function l(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return o}});var r=n(667294);let a={},d=r.createContext(a);function o(e){let s=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),r.createElement(d.Provider,{value:s},e.children)}}}]);