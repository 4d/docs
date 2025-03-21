"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["85677"],{625302:function(e,a,o){o.r(a),o.d(a,{default:()=>u,frontMatter:()=>s,metadata:()=>t,assets:()=>i,toc:()=>m,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/on-server-shutdown-database-method","title":"On Server Shutdown database method","description":"On Server Shutdown database method","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-shutdown-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-shutdown-database-method","permalink":"/docs/pt/20-R7/commands/on-server-shutdown-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-shutdown-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-shutdown-database-method","title":"On Server Shutdown database method","slug":"/commands/on-server-shutdown-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Open Connection database method","permalink":"/docs/pt/20-R7/commands/on-server-open-connection-database-method"},"next":{"title":"On Server Startup database method","permalink":"/docs/pt/20-R7/commands/on-server-startup-database-method"}}'),n=o("785893"),r=o("250065");let s={id:"on-server-shutdown-database-method",title:"On Server Shutdown database method",slug:"/commands/on-server-shutdown-database-method",displayed_sidebar:"docs"},d=void 0,i={},m=[];function c(e){let a={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"On Server Shutdown database method"})}),"\n\n\n\n\n\n\n\n",(0,n.jsx)(a.table,{children:(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,n.jsx)(a.th,{})]})})}),"\n",(0,n.jsx)(a.h2,{id:""}),"\n",(0,n.jsx)(a.p,{children:"O On Server Shutdown database method \xe9 chamado uma vez na m\xe1quina servidor quando a base atual \xe9 fechada em 4D Server. O On Server Shutdown database method N\xc3O \xe9 chamado por outro ambiente 4D diferente de 4D Server."}),"\n",(0,n.jsxs)(a.p,{children:["Para fechar a base atual no servidor, pode selecionar o comando de menu ",(0,n.jsx)(a.strong,{children:"Fechar a base..."})," no servidor. Tamb\xe9m pode escolher o comando ",(0,n.jsx)(a.strong,{children:"Sair"})," ou chamar ao comando ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R7/commands/quit-4d",children:"QUIT 4D"})," dentro de um procedimento armazenado executado no servidor."]}),"\n",(0,n.jsx)(a.p,{children:"Quando se inicia o processo de fechamento da base, 4D realiza as seguintes a\xe7\xf5es:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Se n\xe3o h\xe1 um On Server Shutdown database method, 4D Server aborta cada processo em execu\xe7\xe3o um por um, sem distin\xe7\xe3o."}),"\n",(0,n.jsx)(a.li,{children:"Se existe um On Server Shutdown database method, 4D Server executa este m\xe9todo em um novo processo local. Portanto pode utilizar este m\xe9todo base para informar os outros processos, via comunica\xe7\xe3o interprocesso, que devem deter sua execu\xe7\xe3o. Note que 4D Server sair\xe1 finalmente, o On Server Shutdown database method pode realizar todas as opera\xe7\xf5es de limpeza ou fechamento que voc\xea queira, mas n\xe3o pode recusar a sair e em algum momento terminar\xe1."}),"\n"]}),"\n",(0,n.jsx)(a.p,{children:"O On Server Shutdown database method \xe9 o lugar ideal para:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Deter os procedimentos armazenados lan\xe7ados automaticamente quando \xe9 aberta a base."}),"\n",(0,n.jsxs)(a.li,{children:["Guardar (localmente, em disco) as prefer\xeancias ou os par\xe2metros a reutilizar ao inicio da sess\xe3o seguinte no ",(0,n.jsx)(a.em,{children:"M\xe9todo banco de dados On Server Startup"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Realizar qualquer outra a\xe7\xe3o que queira ativar automaticamente cada vez que sair da base."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Importante:"})," Se utiliza o On Server Shutdown database method para fechar os procedimentos armazenados, lembre que o servidor sai logo que se executa o On Server Shutdown database method (e n\xe3o os procedimentos armazenados). Se os procedimentos armazenados ainda est\xe3o correndo neste momento, ser\xe3o abortados. Portanto, se deseja estar seguro de que os procedimentos armazenados se executem completamente antes de ser abortados pelo servidor, o On Server Shutdown database method deve indicar aos procedimentos armazenados que devem terminar sua execu\xe7\xe3o (por exemplo, utilizando uma vari\xe1vel interprocesso) e deve permitir a eles fechar (por meio de um la\xe7o de x segundos ou outra vari\xe1vel interprocesso)."]}),"\n",(0,n.jsxs)(a.p,{children:["Se deseja que o c\xf3digo se execute automaticamente em uma m\xe1quina cliente quando um 4D remoto deixa de conectar-se ao servidor, utilize o ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R7/commands/semaphore",children:"Semaphore"}),"."]})]})}function u(e={}){let{wrapper:a}={...(0,r.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,a,o){o.d(a,{Z:function(){return d},a:function(){return s}});var t=o(667294);let n={},r=t.createContext(n);function s(e){let a=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:s(e.components),t.createElement(r.Provider,{value:a},e.children)}}}]);