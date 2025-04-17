"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["41683"],{558439:function(e,s,r){r.r(s),r.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>a});var n=JSON.parse('{"id":"commands-legacy/delete-user","title":"DELETE USER","description":"DELETE USER ( refUsuario )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/delete-user.md","sourceDirName":"commands-legacy","slug":"/commands/delete-user","permalink":"/docs/pt/commands/delete-user","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-user.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"delete-user","title":"DELETE USER","slug":"/commands/delete-user","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Current user","permalink":"/docs/pt/commands/current-user"},"next":{"title":"EDIT ACCESS","permalink":"/docs/pt/commands/edit-access"}}'),o=r("785893"),d=r("250065");let t={id:"delete-user",title:"DELETE USER",slug:"/commands/delete-user",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Gest\xe3o de erros",id:"gest\xe3o-de-erros",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"DELETE USER"})," ( ",(0,o.jsx)(s.em,{children:"refUsuario"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"refUsuario"}),(0,o.jsx)(s.td,{children:"Integer"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"N\xfamero de ID de usu\xe1rio a apagar"})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"})," apaga o usu\xe1rio cujo n\xfamero se passa em ",(0,o.jsx)(s.em,{children:"refUsuario"}),". Deve passar um n\xfamero v\xe1lido de usu\xe1rio retornado pelo comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-user-list",children:"GET USER LIST"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Se a conta de usu\xe1rio n\xe3o existir ou tiver sido apagadas, o erro -9979 \xe9 gerado. Pode interceptar este erro com um m\xe9todo de gest\xe3o de erros instalado pelo comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(s.p,{children:"Apenas o Desenhador e o Administrador podem apagar usu\xe1rios. O Administrador n\xe3o pode apagar um usu\xe1rio criado pelo Desenhador."}),"\n",(0,o.jsxs)(s.p,{children:["Os usu\xe1rios apagados n\xe3o aparecer\xe3o mais no editor de usu\xe1rios quando chame a ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/edit-access",children:"EDIT ACCESS"})," nem em modo Desenho. Note que os n\xfameros de usu\xe1rios apagados possam ser retribu\xeddos ao criar novas contas."]}),"\n",(0,o.jsx)(s.h2,{id:"gest\xe3o-de-erros",children:"Gest\xe3o de erros"}),"\n",(0,o.jsxs)(s.p,{children:["Se n\xe3o tiver os privil\xe9gios de acesso para chamar DELETE USER ou se outro processo j\xe1 acessou ao sistema de senhas, um erro de privil\xe9gios de acesso \xe9 gerado. Pode interceptar este erro com um m\xe9todo de gest\xe3o de erros instalado pelo comando ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/on-err-call",children:"ON ERR CALL"}),"."]}),"\n",(0,o.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-user-list",children:"GET USER LIST"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-user-properties",children:"GET USER PROPERTIES"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/is-user-deleted",children:"Is user deleted"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-user-properties",children:"Set user properties"})]}),"\n",(0,o.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"615"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2717"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,o.jsx)(s.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,d.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return t}});var n=r(667294);let o={},d=n.createContext(o);function t(e){let s=n.useContext(d);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),n.createElement(d.Provider,{value:s},e.children)}}}]);