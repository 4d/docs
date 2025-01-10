"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65899"],{100370:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/set-user-alias","title":"SET USER ALIAS","description":"SET USER ALIAS ( alias )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-user-alias.md","sourceDirName":"commands-legacy","slug":"/commands/set-user-alias","permalink":"/docs/pt/commands/set-user-alias","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-user-alias.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-user-alias","title":"SET USER ALIAS","slug":"/commands/set-user-alias","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PLUGIN ACCESS","permalink":"/docs/pt/commands/set-plugin-access"},"next":{"title":"Set user properties","permalink":"/docs/pt/commands/set-user-properties"}}'),a=n("785893"),o=n("250065");let t={id:"set-user-alias",title:"SET USER ALIAS",slug:"/commands/set-user-alias",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let s={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"SET USER ALIAS"})," ( ",(0,a.jsx)(s.em,{children:"alias"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{children:"Par\xe2metro"}),(0,a.jsx)(s.th,{children:"Tipo"}),(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsx)(s.tbody,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"alias"}),(0,a.jsx)(s.td,{children:"Text"}),(0,a.jsx)(s.td,{children:"\u2192"}),(0,a.jsx)(s.td,{children:'Alias ou apelido \xe9 o nome de usu\xe1rio alternativo para a conta de usu\xe1rio 4D ou "" para resetar'})]})})]}),"\n",(0,a.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(s.p,{children:["O comando ",(0,a.jsx)(s.strong,{children:"SET USER ALIAS"})," define um nome personalizado alternativo para usar ao inv\xe9s do nome da conta de usu\xe1rio 4D atual para a sess\xe3o atual. O nome alternativo se conserva na mem\xf3ria e se aplica apenas ao usu\xe1rio atual."]}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota:"})," este comando s\xf3 pode ser invocado desde aplica\xe7\xf5es 4D remotas ou 4D mono usu\xe1rio. N\xe3o est\xe1 permitido em 4D Server."]}),"\n",(0,a.jsxs)(s.p,{children:["No par\xe2metro ",(0,a.jsx)(s.em,{children:"alias"})," (nome alternativo), passe o nome alternativo que se mostrar\xe1 ao inv\xe9s do nome da conta de usu\xe1rio 4D atual."]}),"\n",(0,a.jsxs)(s.p,{children:["Quando for executado o comando, o ",(0,a.jsx)(s.em,{children:"alias"})," \xe9 usado onde for devolvido ou mostrado a conta de usu\xe1rio 4D atual, em particular nos comandos ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/current-user",children:"Current user"}),", ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/process-activity",children:"Process activity"})," e ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/locked-by",children:"LOCKED BY"}),", ou o ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/order-by-formula",children:"ORDER BY FORMULA"})," da janela de administra\xe7\xe3o de 4D Server. Em ambientes cliente/servidor, este comando deve ser executado em aplica\xe7\xf5es remotas para que cada usu\xe1rio se identifique no servidor, por exemplo, mediante o comando ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/current-user",children:"Current user"}),", mesmo se todas as aplica\xe7\xf5es remotas utilizam a mesma conta de usu\xe1rio 4D."]}),"\n",(0,a.jsxs)(s.p,{children:["Para eliminar o ",(0,a.jsx)(s.em,{children:"alias"})," de usu\xe1rio 4D atual, chame a ",(0,a.jsx)(s.strong,{children:"SET USER ALIAS"}),'("").']}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.strong,{children:"Nota"}),": ao chamar ao comando ",(0,a.jsx)(s.a,{href:"/docs/pt/commands/change-current-user",children:"CHANGE CURRENT USER"})," se restabelece o nome de alias para o usu\xe1rio atual."]}),"\n",(0,a.jsx)(s.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(s.p,{children:"Seus usu\xe1rios se administran atrav\xe9s de uma tabela personalizada e utilizam a mesma conta de usu\xe1rio 4D. Em cada m\xe1quina cliente, pode executar:"}),"\n",(0,a.jsx)(s.pre,{children:(0,a.jsx)(s.code,{className:"language-4d",children:"\xa0SET USER ALIAS([myUsers]userName)\n"})}),"\n",(0,a.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(s.p,{children:[(0,a.jsx)(s.a,{href:"/docs/pt/commands/change-current-user",children:"CHANGE CURRENT USER"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/pt/commands/current-user",children:"Current user"}),(0,a.jsx)(s.br,{}),"\n",(0,a.jsx)(s.a,{href:"/docs/pt/commands/set-group-access",children:"SET GROUP ACCESS"})]}),"\n",(0,a.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(s.table,{children:[(0,a.jsx)(s.thead,{children:(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.th,{}),(0,a.jsx)(s.th,{})]})}),(0,a.jsxs)(s.tbody,{children:[(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"N\xfamero do comando"}),(0,a.jsx)(s.td,{children:"1666"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Thread-seguro"}),(0,a.jsx)(s.td,{children:"\u2713"})]}),(0,a.jsxs)(s.tr,{children:[(0,a.jsx)(s.td,{children:"Proibido no servidor"}),(0,a.jsx)(s.td,{})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,a.jsx)(s,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return d},a:function(){return t}});var r=n(667294);let a={},o=r.createContext(a);function t(e){let s=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);