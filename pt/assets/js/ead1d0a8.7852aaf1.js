"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12891"],{214339:function(e,n,o){o.r(n),o.d(n,{metadata:()=>r,contentTitle:()=>c,default:()=>m,assets:()=>a,toc:()=>i,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/qr-on-command","title":"QR ON COMMAND","description":"QR ON COMMAND ( area ; nomeMetodo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-on-command.md","sourceDirName":"commands-legacy","slug":"/commands/qr-on-command","permalink":"/docs/pt/commands/qr-on-command","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-on-command.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-on-command","title":"QR ON COMMAND","slug":"/commands/qr-on-command","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR New offscreen area","permalink":"/docs/pt/commands/qr-new-offscreen-area"},"next":{"title":"QR REPORT","permalink":"/docs/pt/commands/qr-report"}}'),s=o("785893"),d=o("250065");let t={id:"qr-on-command",title:"QR ON COMMAND",slug:"/commands/qr-on-command",displayed_sidebar:"docs"},c=void 0,a={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR ON COMMAND"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"nomeMetodo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Refer\xeancia da \xe1rea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"nomeMetodo"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Nome do m\xe9todo a ser chamado"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando QR ON COMMAND executa o m\xe9todo de projeto 4D passado no par\xe2metro ",(0,s.jsx)(n.em,{children:"nomMetodo"})," quando um comando do editor de relat\xf3rios r\xe1pidos for chamado pelo usu\xe1rio, selecionando um comando de menu ou clicando em um bot\xe3o."]}),"\n",(0,s.jsxs)(n.p,{children:["Se ",(0,s.jsx)(n.em,{children:"area"})," for igual a zero, ",(0,s.jsx)(n.em,{children:"nomMetodo"}),' se aplicar\xe1 a todas as \xe1reas do editor de relat\xf3rios r\xe1pidos at\xe9 que se feche o banco ou se execute a seguinte instru\xe7\xe3o QR ON COMMAND(0;"").']}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"nomMetodo"})," recebe dois par\xe2metros:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"$1"})," \xe9 a refer\xeancia da \xe1rea (Inteiro longo)."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.em,{children:"$2"})," \xe9 o n\xfamero do comando selecionado (Inteiro longo). Pode comparar este valor com as constantes do tema ",(0,s.jsx)(n.em,{children:"QR Comandos"}),".",(0,s.jsx)(n.br,{}),"\n| Constante            | Tipo          | Valor | Coment\xe1rio                                     |",(0,s.jsx)(n.br,{}),"\n| -------------------- | ------------- | ----- | ---------------------------------------------- |",(0,s.jsx)(n.br,{}),"\n| qr cmd generate      | Inteiro longo | 2008  | uso do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/qr-run",children:"QR RUN"})," recomendado |",(0,s.jsx)(n.br,{}),"\n| qr cmd page setup    | Inteiro longo | 2006  |                                                |",(0,s.jsx)(n.br,{}),"\n| qr cmd print preview | Inteiro longo | 2007  |                                                |"]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": Se planeja compilar o banco, \xe9 necess\xe1rio declarar explicitamente os par\xe2metros ",(0,s.jsx)(n.em,{children:"$1"})," e ",(0,s.jsx)(n.em,{children:"$2"})," como Inteiros longos, inclusive se n\xe3o os utilizar."]}),"\n",(0,s.jsxs)(n.p,{children:["Se deseja que o comando inicial seja executado, deve incluir a seguinte instru\xe7\xe3o no m\xe9todo: ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),"($1;$2)."]}),"\n",(0,s.jsxs)(n.p,{children:["Se passa um n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se gera o erro -9850."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"QR Comandos"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/qr-execute-command",children:"QR EXECUTE COMMAND"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/qr-get-command-status",children:"QR Get command status"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"790"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return c},a:function(){return t}});var r=o(667294);let s={},d=r.createContext(s);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);