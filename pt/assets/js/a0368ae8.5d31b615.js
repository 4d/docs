"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78531"],{963755:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>t,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>a});var o=JSON.parse('{"id":"commands-legacy/users-to-blob","title":"USERS TO BLOB","description":"USERS TO BLOB ( usuarios )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/users-to-blob.md","sourceDirName":"commands-legacy","slug":"/commands/users-to-blob","permalink":"/docs/pt/20-R7/commands/users-to-blob","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fusers-to-blob.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"users-to-blob","title":"USERS TO BLOB","slug":"/commands/users-to-blob","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"User in group","permalink":"/docs/pt/20-R7/commands/user-in-group"},"next":{"title":"Validate password","permalink":"/docs/pt/20-R7/commands/validate-password"}}'),r=n("785893"),d=n("250065");let t={id:"users-to-blob",title:"USERS TO BLOB",slug:"/commands/users-to-blob",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"USERS TO BLOB"})," ( ",(0,r.jsx)(s.em,{children:"usuarios"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe2metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"usuarios"}),(0,r.jsx)(s.td,{children:"Blob"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Blob que cont\xe9m os usu\xe1rios"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"\u2190"}),(0,r.jsx)(s.td,{children:"Conta de usu\xe1rios (criptografadas)"}),(0,r.jsx)(s.td,{}),(0,r.jsx)(s.td,{})]})]})]}),"\n",(0,r.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsxs)(s.em,{children:[(0,r.jsx)(s.em,{children:"Nota de compatibilidade"}),": este comando s\xf3 funciona em bancos de dados bin\xe1rios. Sempre devolve um BLOB vazio em projetos."]})}),"\n",(0,r.jsxs)(s.p,{children:["O comando USERS TO BLOB guarda no BLOB ",(0,r.jsx)(s.em,{children:"usuarios"})," a lista de todas as contas de usu\xe1rios e os grupos da banco criados pelo Administrador."]}),"\n",(0,r.jsx)(s.p,{children:"Apenas o Administrador e o Desenhador da banco podem ser executados este comando. Se outro usu\xe1rio tentar execut\xe1-lo, o comando n\xe3o faz nada e \xe9 gerado um erro de privil\xe9gio (-9949)."}),"\n",(0,r.jsxs)(s.p,{children:["O BLOB gerado \xe9 automaticamente encriptografado e apenas pode ser lido utilizando o comando ",(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/blob-to-users",children:"BLOB TO USERS"}),". Pode armazenar este BLOB em um arquivo em seu disco duro ou em um campo."]}),"\n",(0,r.jsx)(s.p,{children:"Este comando \xe9 o equivalente ao registro dos grupos e usu\xe1rios desde a janela de gest\xe3o dos grupos da Caixa de ferramentas. A \xfanica diferen\xe7a \xe9 que permite armazenar contas de usu\xe1rios em um campo BLOB e n\xe3o apenas em um arquivo."}),"\n",(0,r.jsx)(s.p,{children:"Este conceito permite conservar um backup de usu\xe1rios no banco e implementar um mecanismo de backup al\xe9m de um sistema para carregar automaticamente aos usu\xe1rios em caso de uma atualiza\xe7\xe3o da estrutura do banco (a informa\xe7\xe3o relacionada com as contas de usu\xe1rio s\xe3o guardadas por 4D no arquivo de estrutura do banco)."}),"\n",(0,r.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/pt/20-R7/commands/blob-to-users",children:"BLOB TO USERS"})}),"\n",(0,r.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"N\xfamero do comando"}),(0,r.jsx)(s.td,{children:"849"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Thread-seguro"}),(0,r.jsx)(s.td,{children:"\u2717"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,r.jsx)(s.td,{children:"OK, error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return a},a:function(){return t}});var o=n(667294);let r={},d=o.createContext(r);function t(e){let s=o.useContext(d);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(d.Provider,{value:s},e.children)}}}]);