"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81419"],{432473:function(e,s,n){n.r(s),n.d(s,{default:()=>u,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/set-group-access","title":"SET GROUP ACCESS","description":"SET GROUP ACCESS {( grupos )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-group-access.md","sourceDirName":"commands-legacy","slug":"/commands/set-group-access","permalink":"/docs/pt/commands/set-group-access","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-group-access.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-group-access","title":"SET GROUP ACCESS","slug":"/commands/set-group-access","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Is user deleted","permalink":"/docs/pt/commands/is-user-deleted"},"next":{"title":"Set group properties","permalink":"/docs/pt/commands/set-group-properties"}}'),o=n("785893"),a=n("250065");let d={id:"set-group-access",title:"SET GROUP ACCESS",slug:"/commands/set-group-access",displayed_sidebar:"docs"},t=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"SET GROUP ACCESS"})," {( ",(0,o.jsx)(s.em,{children:"grupos"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Par\xe2metro"}),(0,o.jsx)(s.th,{children:"Tipo"}),(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"grupos"}),(0,o.jsx)(s.td,{children:"Collection"}),(0,o.jsx)(s.td,{children:"\u2192"}),(0,o.jsx)(s.td,{children:"Nome dos grupos ao qual a conta de usu\xe1rio 4D deve pertencer durante a sess\xe3o"})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(s.p,{children:["O comando ",(0,o.jsx)(s.strong,{children:"SET GROUP ACCESS"})," modifica o n\xedvel de filia\xe7\xe3o da conte de usu\xe1rio 4D para a ses\xe3o atual. Restabelece toda filia\xe7\xe3o a um grupo anterior e define as novas filia\xe7\xf5es aos ",(0,o.jsx)(s.em,{children:"grupos"})," listados."]}),"\n",(0,o.jsx)(s.p,{children:(0,o.jsx)(s.strong,{children:"Nota:"})}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:["o alcance desse comando \xe9 a sess\xe3o atual. Chamar a ",(0,o.jsx)(s.a,{href:"/docs/pt/commands/change-current-user",children:"CHANGE CURRENT USER"})," depois, por exemplo, restabeleceria as filia\xe7\xf5es definidas."]}),"\n",(0,o.jsx)(s.li,{children:"esse comando pode ser chamado apenas de 4D remote ou aplica\xe7\xf5es monousu\xe1rio 4D . N\xe3o \xe9 permitido no 4D Server."}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Passe no par\xe2metro ",(0,o.jsx)(s.em,{children:"grupos"})," uma cole\xe7\xe3o de nomes de grupo existentes aos que deve pertenecer \xe0 conta de usu\xe1rio 4D (se n\xe3o existir um nome de grupo, se ignora). Se passar uma cole\xe7\xe3o vazia, a conta de usu\xe1rio 4D j\xe1 n\xe3o pertencer\xe1 a nenhum grupo."]}),"\n",(0,o.jsxs)(s.p,{children:["Se omitir o par\xe2metro ",(0,o.jsx)(s.em,{children:"grupos"}),", as filia\xe7\xf5es da conta de usu\xe1rio 4D s\xe3o restabelecidas \xe0s filia\xe7\xf5es de grupo armazenadas no disco."]}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.strong,{children:"Nota:"}),(0,o.jsx)(s.br,{}),'\nquando uma filia\xe7\xe3o grupal oferece acesso a uma funcionalidade "serializada" (por exemplo, um plug-in), se utilizar uma licen\xe7a correspondente e permanecer\xe1 anexa \xe0 conta de usu\xe1rio 4D at\xe9 o final da sess\xe3o, mesmo se chamar o comando ',(0,o.jsx)(s.strong,{children:"SET GROUP ACCESS"})," e \xe9 cancelado ao se chamar ao grupo."]}),"\n",(0,o.jsx)(s.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,o.jsx)(s.p,{children:'Se quiser promover o usu\xe1rio atual aos grupos "admin" e "plugins" durante a sess\xe3o:'}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-4d",children:'\xa0$groups:=New collection("admin";"plugins")\n\xa0SET GROUP ACCESS($groups)\n'})}),"\n",(0,o.jsx)(s.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsxs)(s.p,{children:[(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-group-access",children:"Get group access"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/get-plugin-access",children:"Get plugin access"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-plugin-access",children:"SET PLUGIN ACCESS"}),(0,o.jsx)(s.br,{}),"\n",(0,o.jsx)(s.a,{href:"/docs/pt/commands/set-user-alias",children:"SET USER ALIAS"})]}),"\n",(0,o.jsx)(s.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{}),(0,o.jsx)(s.th,{})]})}),(0,o.jsxs)(s.tbody,{children:[(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"N\xfamero do comando"}),(0,o.jsx)(s.td,{children:"1737"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Thread-seguro"}),(0,o.jsx)(s.td,{children:"\u2713"})]}),(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"Proibido no servidor"}),(0,o.jsx)(s.td,{})]})]})]})]})}function u(e={}){let{wrapper:s}={...(0,a.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return d}});var r=n(667294);let o={},a=r.createContext(o);function d(e){let s=r.useContext(a);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),r.createElement(a.Provider,{value:s},e.children)}}}]);