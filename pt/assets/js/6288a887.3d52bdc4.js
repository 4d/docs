"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65966"],{516796:function(e,o,s){s.r(o),s.d(o,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>c,toc:()=>t,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/locked-by","title":"LOCKED BY","description":"LOCKED BY ( {tabela ;} processo ; usuario4D ; usuarioSessao ; nomeProcesso )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/locked-by.md","sourceDirName":"commands-legacy","slug":"/commands/locked-by","permalink":"/docs/pt/commands/locked-by","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flocked-by.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"locked-by","title":"LOCKED BY","slug":"/commands/locked-by","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Locked","permalink":"/docs/pt/commands/locked"},"next":{"title":"Locked records info","permalink":"/docs/pt/commands/locked-records-info"}}'),n=s("785893"),d=s("250065");let i={id:"locked-by",title:"LOCKED BY",slug:"/commands/locked-by",displayed_sidebar:"docs"},a=void 0,c={},t=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let o={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.strong,{children:"LOCKED BY"})," ( {",(0,n.jsx)(o.em,{children:"tabela"})," ;} ",(0,n.jsx)(o.em,{children:"processo"})," ; ",(0,n.jsx)(o.em,{children:"usuario4D"})," ; ",(0,n.jsx)(o.em,{children:"usuarioSessao"})," ; ",(0,n.jsx)(o.em,{children:"nomeProcesso"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Par\xe2metro"}),(0,n.jsx)(o.th,{children:"Tipo"}),(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"tabela"}),(0,n.jsx)(o.td,{children:"Table"}),(0,n.jsx)(o.td,{children:"\u2192"}),(0,n.jsx)(o.td,{children:"Tabela para visualizar os registros bloqueados, ou Tabela Padr\xe3o, se omitido"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"processo"}),(0,n.jsx)(o.td,{children:"Integer"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"N\xba de refer\xeancia do processo"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"usuario4D"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Nome do usu\xe1rio 4D"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"usuarioSessao"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Nome do usu\xe1rio que abriu a sess\xe3o de trabalho"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"nomeProcesso"}),(0,n.jsx)(o.td,{children:"Text"}),(0,n.jsx)(o.td,{children:"\u2190"}),(0,n.jsx)(o.td,{children:"Nome do processo"})]})]})]}),"\n",(0,n.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(o.p,{children:["LOCKED BY devolve a informa\xe7\xe3o sobre o usu\xe1rio e o processo que tem bloqueado um registro. O n\xfamero do processo(*), o nome de usu\xe1rio, o nome do equipo assim como o nome do processo s\xe3o devolvidos nas vari\xe1veis ",(0,n.jsx)(o.em,{children:"processo, usuario4D, usuarioSessao"}),", e ",(0,n.jsx)(o.em,{children:"nomeProcesso"}),". Pode utilizar esta informa\xe7\xe3o em uma caixa de di\xe1logo personalizada para advertir al usu\xe1rio quando um registro est\xe1 bloqueado.",(0,n.jsx)(o.br,{}),'\n(*) Este \xe9 o n\xfamero do processo na m\xe1quina onde se executa o c\xf3digo que origina o bloqueio de registro. No caso de um trigger ou um m\xe9todo que seja executado no servidor, se devolve o n\xfamero de processo "gemeo" na m\xe1quina servidor. No caso de un m\xe9todo que se executa em uma aplica\xf1\xe1o remota, se devolve o n\xfamero de processo na m\xe1quina remota.']}),"\n",(0,n.jsxs)(o.p,{children:["Se o registro n\xe3o estiver bloqueado, ",(0,n.jsx)(o.em,{children:"processo"})," devolve 0 e ",(0,n.jsx)(o.em,{children:"usuario4D, sessaoUsuario"}),", e ",(0,n.jsx)(o.em,{children:"nomeProcesso"})," devolvem cadeias vazias. Se quer carregar em modo leitura/escritura um registro que foi apagado, ",(0,n.jsx)(o.em,{children:"processo"})," devolve -1 e ",(0,n.jsx)(o.em,{children:"usuario, maquina"}),", e ",(0,n.jsx)(o.em,{children:"nomeProcesso"})," devolvem strings vazias."]}),"\n",(0,n.jsxs)(o.p,{children:["O par\xe2metro ",(0,n.jsx)(o.em,{children:"usuario4D"})," devolvido corresponde ao nome do usu\xe1rio do sistema de senha 4D ou o apelido, como definido com ",(0,n.jsx)(o.a,{href:"/docs/pt/commands/set-user-alias",children:"SET USER ALIAS"})," (se houver). Se n\xe3o h\xe1 sistema de senhas ou um apelido definido, devolve \u201CDesenhista\u201D."]}),"\n",(0,n.jsxs)(o.p,{children:["O par\xe2metro ",(0,n.jsx)(o.em,{children:"sessaoUsuario"})," devolvido corresponde ao nome do usu\xe1rio que abriu a sess\xe3o na m\xe1quina cliente (este nome aparece na janela de administra\xe7\xe3o de 4D Server para cada processo aberto)."]}),"\n",(0,n.jsx)(o.p,{children:"Se o registro foi bloqueado por uma peti\xe7\xe3o $lock REST:"}),"\n",(0,n.jsxs)(o.p,{children:["processo devolve -2",(0,n.jsx)(o.br,{}),'\nusuario4D devolve ""',(0,n.jsx)(o.br,{}),'\nsessaoUsuario devolve ""',(0,n.jsx)(o.br,{}),'\nnomeProcesso devolve o endere\xe7o IP do locker, p. ex. "127.0.0.1"']}),"\n",(0,n.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,n.jsxs)(o.p,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/commands/locked",children:"Locked"}),(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.em,{children:"Record Locking"})]}),"\n",(0,n.jsx)(o.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{}),(0,n.jsx)(o.th,{})]})}),(0,n.jsxs)(o.tbody,{children:[(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"N\xfamero do comando"}),(0,n.jsx)(o.td,{children:"353"})]}),(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"Thread-seguro"}),(0,n.jsx)(o.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return a},a:function(){return i}});var r=s(667294);let n={},d=r.createContext(n);function i(e){let o=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);