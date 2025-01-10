"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49518"],{597240:function(e,s,a){a.r(s),a.d(s,{default:()=>m,frontMatter:()=>r,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>i});var n=JSON.parse('{"id":"commands-legacy/resolve-alias","title":"RESOLVE ALIAS","description":"RESOLVE ALIAS ( rotaAlias ; rotaObjetivo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/resolve-alias.md","sourceDirName":"commands-legacy","slug":"/commands/resolve-alias","permalink":"/docs/pt/commands/resolve-alias","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fresolve-alias.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"resolve-alias","title":"RESOLVE ALIAS","slug":"/commands/resolve-alias","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Path to object","permalink":"/docs/pt/commands/path-to-object"},"next":{"title":"Select document","permalink":"/docs/pt/commands/select-document"}}'),t=a("785893"),o=a("250065");let r={id:"resolve-alias",title:"RESOLVE ALIAS",slug:"/commands/resolve-alias",displayed_sidebar:"docs"},i=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let s={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"RESOLVE ALIAS"})," ( ",(0,t.jsx)(s.em,{children:"rotaAlias"})," ; ",(0,t.jsx)(s.em,{children:"rotaObjetivo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rotaAlias"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2192"}),(0,t.jsx)(s.td,{children:"Nome ou rota de acesso do alias/atalho"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"rotaObjetivo"}),(0,t.jsx)(s.td,{children:"Text"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nome ou rota de acesso do alias/atalho alvo"})]})]})]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(s.p,{children:"O comando RESOLVE ALIAS retorna a rota completa do arquivo ou pasta objetivo de um alias (chamado atalho em Windows)."}),"\n",(0,t.jsxs)(s.p,{children:["Em ",(0,t.jsx)(s.em,{children:"rotaAlias"})," se passa o nome ou rota de acesso completa do alias."]}),"\n",(0,t.jsxs)(s.p,{children:["Uma vez executado o comando, a vari\xe1vel ",(0,t.jsx)(s.em,{children:"rotaObjetivo"})," cont\xe9m a rota de acesso completa ao arquivo ou pasta do alias e a vari\xe1vel sistema OK toma o valor 1."]}),"\n",(0,t.jsxs)(s.p,{children:["Se a rota for passada em ",(0,t.jsx)(s.em,{children:"rotaAlias"})," corresponde a um arquivo e n\xe3o a um alias, ",(0,t.jsx)(s.em,{children:"rotaObjetivo"})," retorna a rota de acesso do arquivo e a vari\xe1vel sistema OK toma o valor 0."]}),"\n",(0,t.jsx)(s.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsxs)(s.p,{children:["Se ",(0,t.jsx)(s.em,{children:"rotaAlias"})," especifica um alias/atalho, a vari\xe1vel sistema OK assume o valor 1. Se ",(0,t.jsx)(s.em,{children:"rotaAlias"})," especifica um arquivo padr\xe3o, a vari\xe1vel sistema OK assume o valor 0."]}),"\n",(0,t.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/pt/commands/create-alias",children:"CREATE ALIAS"})}),"\n",(0,t.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"N\xfamero do comando"}),(0,t.jsx)(s.td,{children:"695"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread-seguro"}),(0,t.jsx)(s.td,{children:"\u2713"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Modificar vari\xe1veis"}),(0,t.jsx)(s.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,a){a.d(s,{Z:function(){return i},a:function(){return r}});var n=a(667294);let t={},o=n.createContext(t);function r(e){let s=n.useContext(o);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function i(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:r(e.components),n.createElement(o.Provider,{value:s},e.children)}}}]);