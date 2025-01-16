"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55287"],{533054:function(e,s,n){n.r(s),n.d(s,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>i,toc:()=>l,contentTitle:()=>r});var a=JSON.parse('{"id":"commands-legacy/get-missing-table-names","title":"GET MISSING TABLE NAMES","description":"GET MISSING TABLE NAMES ( tabelasNaoEncontradas )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-missing-table-names.md","sourceDirName":"commands-legacy","slug":"/commands/get-missing-table-names","permalink":"/docs/pt/20-R7/commands/get-missing-table-names","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-missing-table-names.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-missing-table-names","title":"GET MISSING TABLE NAMES","slug":"/commands/get-missing-table-names","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET FIELD PROPERTIES","permalink":"/docs/pt/20-R7/commands/get-field-properties"},"next":{"title":"GET RELATION PROPERTIES","permalink":"/docs/pt/20-R7/commands/get-relation-properties"}}'),t=n("785893"),o=n("250065");let d={id:"get-missing-table-names",title:"GET MISSING TABLE NAMES",slug:"/commands/get-missing-table-names",displayed_sidebar:"docs"},r=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let s={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"GET MISSING TABLE NAMES"})," ( ",(0,t.jsx)(s.em,{children:"tabelasNaoEncontradas"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{children:"Par\xe2metro"}),(0,t.jsx)(s.th,{children:"Tipo"}),(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(s.tbody,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"tabelasNaoEncontradas"}),(0,t.jsx)(s.td,{children:"Text array"}),(0,t.jsx)(s.td,{children:"\u2190"}),(0,t.jsx)(s.td,{children:"Nomes de tabelas n\xe3o encontradas no banco de dados"})]})})]}),"\n",(0,t.jsx)(s.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(s.p,{children:["O comando GET MISSING TABLE NAMES retorna os nomes de todas as tabelas faltantes do banco no array ",(0,t.jsx)(s.em,{children:"tabelaNaoEncontrada"}),"."]}),"\n",(0,t.jsx)(s.p,{children:"As tabelas n\xe3o encontradas s\xe3o tabelas cujos dados est\xe3o presentes no archivo de dados mas que n\xe3o existem a n\xedvel da estrutura atual. Isso pode acontecer quando um archivo de dados \xe9 aberto com vers\xf5es diferentes da estrutura."}),"\n",(0,t.jsx)(s.p,{children:"Geralmente, o cen\xe1rio \xe9 o seguinte:"}),"\n",(0,t.jsxs)(s.ul,{children:["\n",(0,t.jsx)(s.li,{children:"o desenvolvedor oferece uma estrutura com as tabelas A, B e C,"}),"\n",(0,t.jsx)(s.li,{children:"o usu\xe1rio adiciona tabelas personalizadas D e E, utilizando, por exemplo, os comandos  integrados de 4D, e salva os dados nessas tabelas,"}),"\n",(0,t.jsxs)(s.li,{children:["O desenvolvedor oferece uma nova vers\xe3o da estrutura, que n\xe3o contenha as tabelas D e E.",(0,t.jsx)(s.br,{}),'\nNesse caso, a vers\xe3o usu\xe1rio do banco ainda cont\xe9m os dados das tabelas D e E, mas n\xe3o s\xe3o acess\xedveis. O comando GET MISSING TABLE NAMES devolver\xe1 os nomes "D" e "E".\nQuando tiver identificado as tabelas faltantes do banco, pode reativ\xe1-las atrav\xe9s do comando ',(0,t.jsx)(s.a,{href:"/docs/pt/20-R7/commands/regenerate-missing-table",children:"REGENERATE MISSING TABLE"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(s.p,{children:[(0,t.jsx)(s.strong,{children:"Nota"}),": os dados das tabelas n\xe3o encontradas s\xe3o apagadas quando o arquivo de dados for encontrado (se as tabelas n\xe3o forem regeneradas)."]}),"\n",(0,t.jsx)(s.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(s.p,{children:(0,t.jsx)(s.a,{href:"/docs/pt/20-R7/commands/regenerate-missing-table",children:"REGENERATE MISSING TABLE"})}),"\n",(0,t.jsx)(s.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(s.table,{children:[(0,t.jsx)(s.thead,{children:(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.th,{}),(0,t.jsx)(s.th,{})]})}),(0,t.jsxs)(s.tbody,{children:[(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"N\xfamero do comando"}),(0,t.jsx)(s.td,{children:"1125"})]}),(0,t.jsxs)(s.tr,{children:[(0,t.jsx)(s.td,{children:"Thread-seguro"}),(0,t.jsx)(s.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:s}={...(0,o.a)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,s,n){n.d(s,{Z:function(){return r},a:function(){return d}});var a=n(667294);let t={},o=a.createContext(t);function d(e){let s=a.useContext(o);return a.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),a.createElement(o.Provider,{value:s},e.children)}}}]);