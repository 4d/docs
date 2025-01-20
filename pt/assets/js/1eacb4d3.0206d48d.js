"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11039"],{468661:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>o,assets:()=>i,toc:()=>c,contentTitle:()=>r});var o=JSON.parse('{"id":"commands-legacy/on-system-event-database-method","title":"On System Event database method","description":"$1 -> M\xe9todo base de dados On System Event","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/on-system-event-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-system-event-database-method","permalink":"/docs/pt/20-R7/commands/on-system-event-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-system-event-database-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"on-system-event-database-method","title":"On System Event database method","slug":"/commands/on-system-event-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On Startup database method","permalink":"/docs/pt/20-R7/commands/on-startup-database-method"},"next":{"title":"On Web Authentication database method","permalink":"/docs/pt/20-R7/commands/on-web-authentication-database-method"}}'),s=t("785893"),a=t("250065");let d={id:"on-system-event-database-method",title:"On System Event database method",slug:"/commands/on-system-event-database-method",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4}];function l(e){let n={code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"$1 -> M\xe9todo base de dados On System Event"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsx)(n.tbody,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"$1"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"C\xf3digo do evento"})]})})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O m\xe9todo ",(0,s.jsx)(n.strong,{children:"M\xe9todo base de dados On System Event"})," \xe9 chamado toda vez que ocorre um evento sistema. Isto \xe9 para todos os ambientes 4D: 4D (todos os modos) e 4D Server, assim como as aplica\xe7\xf5es 4D compiladas e fusionadas com 4D Volume Desktop."]}),"\n",(0,s.jsxs)(n.p,{children:["Para processar um evento, deve provar o valor do par\xe2metro $1 no interior do m\xe9todo e compar\xe1-lo com una das seguintes constantes do tema ",(0,s.jsx)(n.em,{children:"Eventos da base de dados"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On application background move"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"A aplica\xe7\xe3o 4D passa em segundo plano"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"On application foreground move"}),(0,s.jsx)(n.td,{children:"Inteiro longo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"A aplica\xe7\xe3o 4D passa ao primeiro plano"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:"Estes eventos s\xe3o gerados quando a aplica\xe7\xe3o 4D muda de n\xedvel, sem importar a a\xe7\xe3o do usu\xe1rio que gera esta mudan\xe7a. Por exemplo:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"clique na janela da aplica\xe7\xe3o ou de outra aplica\xe7\xe3o,"}),"\n",(0,s.jsxs)(n.li,{children:["sele\xe7\xe3o utilizando o atalho de teclado ",(0,s.jsx)(n.strong,{children:"Alt+Tab"})," (Windows) ou ",(0,s.jsx)(n.strong,{children:"Comando+Tab"})," (Mac OS),"]}),"\n",(0,s.jsxs)(n.li,{children:["sele\xe7\xe3o do comando ",(0,s.jsx)(n.strong,{children:"Ocultar"})," no dock (Mac OS),"]}),"\n",(0,s.jsx)(n.li,{children:"clique no \xedcone da aplica\xe7\xe3o no dock ou na barra de tarefas,"}),"\n",(0,s.jsx)(n.li,{children:"clique no bot\xe3o minimizar da janela principal (Windows)."}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"\xc9 completamente necess\xe1rio declarar o par\xe2metro $1 (inteiro longo) no m\xe9todo base. A estrutura do c\xf3digo do m\xe9todo base vai ser ent\xe3o:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo base On System Event\n\xa0\n\xa0var $1 : Integer\n\xa0Case of\n\xa0\xa0\xa0\xa0:($1=On application background move)\n\xa0\xa0//Fazer alguma coisa\n\xa0\xa0\xa0\xa0:($1=On application foreground move)\n\xa0\xa0//Fazer outra coisa\n\xa0End case\n"})})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return r},a:function(){return d}});var o=t(667294);let s={},a=o.createContext(s);function d(e){let n=o.useContext(a);return o.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),o.createElement(a.Provider,{value:n},e.children)}}}]);