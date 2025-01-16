"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64025"],{241468:function(e,a,t){t.r(a),t.d(a,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/on-server-startup-database-method","title":"On Server Startup database method","description":"On Server Startup database method","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-server-startup-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-startup-database-method","permalink":"/docs/pt/20-R7/commands/on-server-startup-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-startup-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-server-startup-database-method","title":"On Server Startup database method","slug":"/commands/on-server-startup-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Server Shutdown database method","permalink":"/docs/pt/20-R7/commands/on-server-shutdown-database-method"},"next":{"title":"On SQL Authentication database method","permalink":"/docs/pt/20-R7/commands/on-sql-authentication-database-method"}}'),n=t("785893"),s=t("250065");let o={id:"on-server-startup-database-method",title:"On Server Startup database method",slug:"/commands/on-server-startup-database-method",displayed_sidebar:"docs"},d=void 0,i={},c=[];function u(e){let a={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.p,{children:(0,n.jsx)(a.strong,{children:"On Server Startup database method"})}),"\n\n\n\n\n\n\n\n",(0,n.jsx)(a.table,{children:(0,n.jsx)(a.thead,{children:(0,n.jsxs)(a.tr,{children:[(0,n.jsx)(a.th,{children:"Este comando n\xe3o requer par\xe2metros"}),(0,n.jsx)(a.th,{})]})})}),"\n",(0,n.jsx)(a.h4,{id:""}),"\n",(0,n.jsx)(a.p,{children:"O On Server Startup database method \xe9 chamado uma vez na m\xe1quina servidor quando abre uma base com 4D Server. O On Server Startup database method N\xc3O \xe9 executado em um ambiente diferente a 4D Server."}),"\n",(0,n.jsx)(a.p,{children:"O On Server Startup database method \xe9 a localiza\xe7\xe3o ideal para:"}),"\n",(0,n.jsxs)(a.ul,{children:["\n",(0,n.jsx)(a.li,{children:"Inicializar as vari\xe1veis interprocesso utilizadas durante toda a sess\xe3o 4D Server."}),"\n",(0,n.jsxs)(a.li,{children:["Iniciar automaticamente os ",(0,n.jsx)(a.em,{children:"Procedimentos armazenados"})," ao abrir a base."]}),"\n",(0,n.jsx)(a.li,{children:"Carregar prefer\xeancias ou par\xe2metros guardados durante a sess\xe3o anterior de 4D Server."}),"\n",(0,n.jsxs)(a.li,{children:["Evitar a abertura da base se n\xe3o se cumpre uma condi\xe7\xe3o (aus\xeancia de recursos sistema) para uma chamada expl\xedcita a ",(0,n.jsx)(a.a,{href:"/docs/pt/20-R7/commands/quit-4d",children:"QUIT 4D"}),"."]}),"\n",(0,n.jsx)(a.li,{children:"Realizar outras a\xe7\xf5es que queira fazer automaticamente cada vez que seja aberta a base."}),"\n"]}),"\n",(0,n.jsxs)(a.p,{children:["Para executar c\xf3digo automaticamente na m\xe1quina cliente quando um 4D remoto se conecta ao servidor, utilize o ",(0,n.jsx)(a.a,{href:"metodo-banco-de-dados-on-startup.md",children:"M\xe9todo banco de dados On Startup"}),"."]}),"\n",(0,n.jsxs)(a.p,{children:[(0,n.jsx)(a.strong,{children:"Nota"}),": O On Server Startup database method se executa de forma at\xf4mica, o que significa que nenhum 4D remoto pode ser conectado enquanto a execu\xe7\xe3o do m\xe9todo n\xe3o tenha terminado."]})]})}function m(e={}){let{wrapper:a}={...(0,s.a)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},250065:function(e,a,t){t.d(a,{Z:function(){return d},a:function(){return o}});var r=t(667294);let n={},s=r.createContext(n);function o(e){let a=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(a):{...a,...e}},[a,e])}function d(e){let a;return a=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),r.createElement(s.Provider,{value:a},e.children)}}}]);