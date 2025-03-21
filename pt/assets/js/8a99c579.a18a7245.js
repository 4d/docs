"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["63423"],{400103:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>o,metadata:()=>n,assets:()=>a,toc:()=>c,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/is-user-deleted","title":"Is user deleted","description":"Is user deleted ( numUsuario ) : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/is-user-deleted.md","sourceDirName":"commands-legacy","slug":"/commands/is-user-deleted","permalink":"/docs/pt/commands/is-user-deleted","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fis-user-deleted.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"is-user-deleted","title":"Is user deleted","slug":"/commands/is-user-deleted","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET USER PROPERTIES","permalink":"/docs/pt/commands/get-user-properties"},"next":{"title":"SET GROUP ACCESS","permalink":"/docs/pt/commands/set-group-access"}}'),d=r("785893"),t=r("250065");let o={id:"is-user-deleted",title:"Is user deleted",slug:"/commands/is-user-deleted",displayed_sidebar:"docs"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.strong,{children:"Is user deleted"})," ( ",(0,d.jsx)(s.em,{children:"numUsuario"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{children:"Par\xe2metro"}),(0,d.jsx)(s.th,{children:"Tipo"}),(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"numUsuario"}),(0,d.jsx)(s.td,{children:"Integer"}),(0,d.jsx)(s.td,{children:"\u2192"}),(0,d.jsx)(s.td,{children:"N\xfamero de ID de usu\xe1rio"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Resultado"}),(0,d.jsx)(s.td,{children:"Boolean"}),(0,d.jsx)(s.td,{children:"\u2190"}),(0,d.jsx)(s.td,{children:"TRUE = conta de usu\xe1rio foi apagada ou n\xe3o existe; FALSE = Conta de usu\xe1rio est\xe1 ativa"})]})]})]}),"\n",(0,d.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(s.p,{children:["O comando Is user deleted testa a conta de usu\xe1rio cujo n\xfamero de identifica\xe7\xe3o \xfanico se passa em ",(0,d.jsx)(s.em,{children:"numUsuario"}),"."]}),"\n",(0,d.jsx)(s.p,{children:"Se a conta de usu\xe1rio n\xe3o existir ou tiver sido apagada, Is user deleted retorna TRUE. Do contr\xe1rio, retorna FALSE."}),"\n",(0,d.jsx)(s.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,d.jsxs)(s.p,{children:["Se n\xe3o tiver os privil\xe9gios de acesso adequados para chamar Is user deleted ou se o sistema de Senhas j\xe1 tiver sido acessado por outro processo, um erro de privil\xe9gio de acesso ser\xe1 gerado. Voc\xea pode interceptar o erro com um m\xe9todo de gest\xe3o de erros instalado usando ",(0,d.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,d.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(s.p,{children:[(0,d.jsx)(s.a,{href:"/docs/pt/commands/delete-user",children:"DELETE USER"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,d.jsx)(s.br,{}),"\n",(0,d.jsx)(s.a,{href:"/docs/pt/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,d.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(s.table,{children:[(0,d.jsx)(s.thead,{children:(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.th,{}),(0,d.jsx)(s.th,{})]})}),(0,d.jsxs)(s.tbody,{children:[(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"N\xfamero do comando"}),(0,d.jsx)(s.td,{children:"616"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Thread-seguro"}),(0,d.jsx)(s.td,{children:"\u2717"})]}),(0,d.jsxs)(s.tr,{children:[(0,d.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(s.td,{children:"error"})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,d.jsx)(s,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return i},a:function(){return o}});var n=r(667294);let d={},t=n.createContext(d);function o(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);