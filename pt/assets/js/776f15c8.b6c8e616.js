"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60268"],{550380:function(e,n,t){t.r(n),t.d(n,{metadata:()=>s,contentTitle:()=>l,default:()=>m,assets:()=>o,toc:()=>c,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/relate-many-selection","title":"RELATE MANY SELECTION","description":"RELATE MANY SELECTION ( campo )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/relate-many-selection.md","sourceDirName":"commands-legacy","slug":"/commands/relate-many-selection","permalink":"/docs/pt/commands/relate-many-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frelate-many-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"relate-many-selection","title":"RELATE MANY SELECTION","slug":"/commands/relate-many-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RELATE MANY","permalink":"/docs/pt/commands/relate-many"},"next":{"title":"RELATE ONE","permalink":"/docs/pt/commands/relate-one"}}'),r=t("785893"),a=t("250065");let d={id:"relate-many-selection",title:"RELATE MANY SELECTION",slug:"/commands/relate-many-selection",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function i(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RELATE MANY SELECTION"})," ( ",(0,r.jsx)(n.em,{children:"campo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"campo"}),(0,r.jsx)(n.td,{children:"Field"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Campo da tabela Muitos (onde a rela\xe7\xe3o come\xe7a)"})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsx)(n.p,{children:"O comando RELATE MANY SELECTION cria uma sele\xe7\xe3o de registros na tabela Muitos, baseada na sele\xe7\xe3o atual da tabela Um."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota"}),": RELATE MANY SELECTION muda o registro atual da tabela Um."]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsxs)(n.p,{children:["Este exemplo seleciona todas as faturas de clientes com cr\xe9dito superior ou igual a $1.000. O campo ",(0,r.jsx)(n.em,{children:"[Faturas]IDCliente"})," est\xe1 relacionado com o campo ",(0,r.jsx)(n.em,{children:"[Clientes]NumID"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Selecionar os clientes\n\xa0QUERY([Clientes];[Clientes]Credit>=1000)\n\xa0\xa0// Buscar todas as faturas relacionadas com cada um desses clientes\n\xa0RELATE MANY SELECTION([Faturas]IDCliente)\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.a,{href:"/docs/pt/commands/query",children:"QUERY"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/relate-one",children:"RELATE ONE"}),(0,r.jsx)(n.br,{}),"\n",(0,r.jsx)(n.a,{href:"/docs/pt/commands/relate-one-selection",children:"RELATE ONE SELECTION"})]}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"340"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2713"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modificar o registro atual"}),(0,r.jsx)(n.td,{})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,r.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(i,{...e})}):i(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let r={},a=s.createContext(r);function d(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);