"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68917"],{811275:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>l,toc:()=>i,contentTitle:()=>o});var a=JSON.parse('{"id":"commands-legacy/read-only-state","title":"Read only state","description":"Read only state {( tabela )} : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/read-only-state.md","sourceDirName":"commands-legacy","slug":"/commands/read-only-state","permalink":"/docs/pt/20-R8/commands/read-only-state","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fread-only-state.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"read-only-state","title":"Read only state","slug":"/commands/read-only-state","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"READ ONLY","permalink":"/docs/pt/20-R8/commands/read-only"},"next":{"title":"READ WRITE","permalink":"/docs/pt/20-R8/commands/read-write"}}'),s=t("785893"),r=t("250065");let d={id:"read-only-state",title:"Read only state",slug:"/commands/read-only-state",displayed_sidebar:"docs"},o=void 0,l={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Read only state"})," {( ",(0,s.jsx)(n.em,{children:"tabela"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"tabela"}),(0,s.jsx)(n.td,{children:"Table"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Tabela na qual vai testar o estado apenas-leitura, ou tabela padr\xe3o, se omitido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Boolean"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Acesso \xe0 tabela \xe9 apenas-leitura (TRUE) ou Acesso a tabela \xe9 leitura-escrita (FALSE)"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["Esta fun\xe7\xe3o \xe9 utilizada para testar se ",(0,s.jsx)(n.em,{children:"tabela"})," est\xe1 em modo apenas leitura no processo no qual se chamou a fun\xe7\xe3o. Read only state devolve TRUE se o estado de ",(0,s.jsx)(n.em,{children:"tabela"})," \xe9 apenas leitura e FALSE se o estado de ",(0,s.jsx)(n.em,{children:"tabela"})," \xe9 leitura/ escrita."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"O seguinte exemplo testa o estado da tabela [Faturas]. Se o estado da tabela [Faturas] \xe9 apenas leitura, se aplica o modo leitura/escrita e se carrega novamente o registro atual."}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(Read only state([Faturas]))\n\xa0\xa0\xa0\xa0READ WRITE([Faturas])\n\xa0\xa0\xa0\xa0LOAD RECORD([Faturas])\n\xa0End if\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota"}),": O registro atual \xe9 carregado novamente para permitir ao usu\xe1rio modifica-lo. Um registro carregado anteriormente em modo apenas leitura permanecer\xe1 bloqueado at\xe9 que se recarregue em modo leitura/escrita."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/read-only",children:"READ ONLY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/read-write",children:"READ WRITE"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"Record Locking"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"362"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var a=t(667294);let s={},r=a.createContext(s);function d(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);