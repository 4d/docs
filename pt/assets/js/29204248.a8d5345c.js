"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["38029"],{721875:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>l,assets:()=>o,toc:()=>i,contentTitle:()=>d});var l=JSON.parse('{"id":"commands-legacy/table","title":"Table","description":"Table ( numTabela|Ponteiro ) : any","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/table.md","sourceDirName":"commands-legacy","slug":"/commands/table","permalink":"/docs/pt/commands/table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"table","title":"Table","slug":"/commands/table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET INDEX","permalink":"/docs/pt/commands/set-index"},"next":{"title":"Table name","permalink":"/docs/pt/commands/table-name"}}'),s=a("785893"),r=a("250065");let t={id:"table",title:"Table",slug:"/commands/table",displayed_sidebar:"docs"},d=void 0,o={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo 1",id:"exemplo-1",level:4},{value:"Exemplo 2",id:"exemplo-2",level:4},{value:"Exemplo 3",id:"exemplo-3",level:4},{value:"Exemplo 4",id:"exemplo-4",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Table"})," ( numTabela|Ponteiro ) : any"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numTabela|Ponteiro"}),(0,s.jsx)(n.td,{children:"Inteiro longo, Ponteiro"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de tabela, ou ponteiro de Tabela, ou ponteiro de Campo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer, Pointer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsxs)(n.td,{children:["Ponteiro tabela, se um n\xfamero de tabela for passado.",(0,s.jsx)(n.br,{}),"N\xfamero de tabela, se um ponteiro de tabela for passado.",(0,s.jsx)(n.br,{}),"N\xfamero de tabela, se um ponteiro de Campo for passado."]})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(n.p,{children:"O comando Table tem tr\xeas sintaxes diferentes:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Se passa um n\xfamero de tabela em ",(0,s.jsx)(n.em,{children:"numTabela"}),", Table retorna um ponteiro para a tabela."]}),"\n",(0,s.jsxs)(n.li,{children:["Se passa um ponteiro de tabela em ",(0,s.jsx)(n.em,{children:"Ponteiro"}),", Table retorna o n\xfamero da tabela."]}),"\n",(0,s.jsxs)(n.li,{children:["Se passa um ponteiro de campo em ",(0,s.jsx)(n.em,{children:"Ponteiro"}),", Table retorna o n\xfamero de tabela do campo."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["Esse exemplo, a vari\xe1vel ",(0,s.jsx)(n.em,{children:"ponTabela"})," recebe um ponteiro da tabela 3 do banco:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ponTabela:=Table(3)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["Se passa ",(0,s.jsx)(n.em,{children:"pontTabela"})," (um ponteiro a tabela 3) a Table retorna 3. Na linha abaixo, a vari\xe1vel ",(0,s.jsx)(n.em,{children:"numTabela"})," assume o valor 3:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0numTabela:=Table(pontTabela)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Neste exemplo, a vari\xe1vel ",(0,s.jsx)(n.em,{children:"numTabela"})," \xe9 igual ao n\xfamero da tabela ",(0,s.jsx)(n.em,{children:"[Tabela3]"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0numTabela:=Table(->[Tabela3])\n"})}),"\n",(0,s.jsx)(n.h4,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,s.jsxs)(n.p,{children:["Este exemplo, a vari\xe1vel ",(0,s.jsx)(n.em,{children:"numTabela"})," \xe9 igual ao n\xfamero da tabela a qual pertence o campo ",(0,s.jsx)(n.em,{children:"[Tabela3]Campo1"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0numTabela:=Table(->[Tabela3]Campo1)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/commands/field",children:"Field"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/last-table-number",children:"Last table number"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/commands/table-name",children:"Table name"})]}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"252"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return t}});var l=a(667294);let s={},r=l.createContext(s);function t(e){let n=l.useContext(r);return l.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),l.createElement(r.Provider,{value:n},e.children)}}}]);