"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49369"],{573433:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>i,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/on-server-close-connection-database-method","title":"On Server Close Connection database method","description":"On Server Close Connection ($user Integer ; $toIgnore : Integer)","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/on-server-close-connection-database-method.md","sourceDirName":"commands-legacy","slug":"/commands/on-server-close-connection-database-method","permalink":"/docs/pt/20-R8/commands/on-server-close-connection-database-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fon-server-close-connection-database-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"on-server-close-connection-database-method","title":"On Server Close Connection database method","slug":"/commands/on-server-close-connection-database-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"On REST Authentication database method","permalink":"/docs/pt/20-R8/commands/on-rest-authentication-database-method"},"next":{"title":"On Server Open Connection database method","permalink":"/docs/pt/20-R8/commands/on-server-open-connection-database-method"}}'),t=o("785893"),s=o("250065");let d={id:"on-server-close-connection-database-method",title:"On Server Close Connection database method",slug:"/commands/on-server-close-connection-database-method",displayed_sidebar:"docs"},a=void 0,c={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2}];function l(e){let n={a:"a",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"On Server Close Connection ($user : Integer ; $id : Integer ; $toIgnore : Integer)"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$user"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de usu\xe1rio utilizado internamente por 4D Server para identificar usu\xe1rios"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$id"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"N\xfamero de conex\xe3o utilizado internamente por 4D Server para identificar uma conex\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$toIgnore"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Obsoleto: devolve sempre 0 mas deve ser declarado"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O ",(0,t.jsx)(n.strong,{children:"On Server Close Connection database method"})," \xe9 chamado no computador servidor cada vez que termina um processo 4D Client."]}),"\n",(0,t.jsxs)(n.p,{children:["Como para o ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),", 4D Server passa tr\xeas par\xe2metros de tipo inteiro longo ao ",(0,t.jsx)(n.strong,{children:"On Server Close Connection database method"}),". Por outra parte, 4D Server n\xe3o espera um resultado em retorno."]}),"\n",(0,t.jsx)(n.p,{children:"O m\xe9todo deve conter a declara\xe7\xe3o expl\xedcita de tr\xeas par\xe2metros Inteiro longo:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0#DECLARE($user : Integer ; $id : Integer ; $toIgnore : Integer)\n"})}),"\n",(0,t.jsx)(n.p,{children:"Esta tabela detalha a informa\xe7\xe3o oferecida pelos tr\xeas par\xe2metros passados ao m\xe9todo base:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Par\xe2metro"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Descri\xe7\xe3o"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$user"}),(0,t.jsx)(n.td,{children:"N\xfamero de usu\xe1rio utilizado internamente por 4D Server para identificar usu\xe1rios"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$id"}),(0,t.jsx)(n.td,{children:"N\xfamero de conex\xe3o utilizado internamente por 4D Server para identificar uma conex\xe3o"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"$toIgnore"}),(0,t.jsx)(n.td,{children:"Obsoleto: devolve sempre 0 mas deve ser declarado"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["O ",(0,t.jsx)(n.strong,{children:"On Server Close Connection database method"})," \xe9 o inverso exato do ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),". Para maior informa\xe7\xe3o e uma descri\xe7\xe3o deste m\xe9todo base, assim como para a descri\xe7\xe3o dos ",(0,t.jsx)(n.strong,{children:"processos 4D Client"}),", ver a descri\xe7\xe3o deste m\xe9todo base."]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Ver o primeiro exemplo para ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R8/commands/on-server-open-connection-database-method",children:"On Server Open Connection database method"}),"."]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return d}});var r=o(667294);let t={},s=r.createContext(t);function d(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);