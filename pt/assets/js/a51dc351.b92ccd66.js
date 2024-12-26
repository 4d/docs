"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34082"],{367351:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/one-record-select","title":"ONE RECORD SELECT","description":"ONE RECORD SELECT {( tabela )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/one-record-select.md","sourceDirName":"commands-legacy","slug":"/commands/one-record-select","permalink":"/docs/pt/commands/one-record-select","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fone-record-select.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"one-record-select","title":"ONE RECORD SELECT","slug":"/commands/one-record-select","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"NEXT RECORD","permalink":"/docs/pt/commands/next-record"},"next":{"title":"PREVIOUS RECORD","permalink":"/docs/pt/commands/previous-record"}}'),t=n("785893"),a=n("250065");let o={id:"one-record-select",title:"ONE RECORD SELECT",slug:"/commands/one-record-select",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Nota",id:"nota",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.strong,{children:"ONE RECORD SELECT"})," {( ",(0,t.jsx)(r.em,{children:"tabela"})," )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Par\xe2metro"}),(0,t.jsx)(r.th,{children:"Tipo"}),(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"tabela"}),(0,t.jsx)(r.td,{children:"Table"}),(0,t.jsx)(r.td,{children:"\u2192"}),(0,t.jsx)(r.td,{children:"Tabela na qual reduzir a sele\xe7\xe3o ao registro atual, ou tabela padr\xe3o, se omitido"})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["ONE RECORD SELECT reduza sele\xe7\xe3o atual de ",(0,t.jsx)(r.em,{children:"tabela"})," ao registro atual. Se n\xe3o existir um registro atual ou se o registro atual n\xe3o estiver carregado na mem\xf3ria (caso particular), ONE RECORD SELECT n\xe3o tem nenhum efeito."]}),"\n",(0,t.jsx)(r.h4,{id:"nota",children:"Nota"}),"\n",(0,t.jsxs)(r.p,{children:["Este comando era \xfatil para \u201Cretirar\u201D um registro que tivesse sido empilhado e desempilhado da pilha de registro enquanto a sele\xe7\xe3o da tabela for modificada. ",(0,t.jsx)(r.a,{href:"/docs/pt/commands/set-query-destination",children:"SET QUERY DESTINATION"})," permite realizar uma pesquisa sem ter que mudar a sele\xe7\xe3o nem o registro atual de uma tabela; portanto, n\xe3o necessita mais empilhar e desempilhar um registro atual para realizar uma pesquisa em sua tabela. Por isso, ONE RECORD SELECT \xe9 menos \xfatil, a n\xe3o ser que queira expressamente reduzir a sele\xe7\xe3o de uma tabela ao registro atual."]}),"\n",(0,t.jsxs)(r.p,{children:["Aviso: lembre que um n\xfamero de registro pode ser reutilizado se o registro for apagado e outro registro for criado (ver ",(0,t.jsx)(r.em,{children:"Sobre N\xfameros de Registros"}),")."]}),"\n",(0,t.jsx)(r.p,{children:")"}),"\n",(0,t.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/commands/create-selection-from-array",children:"CREATE SELECTION FROM ARRAY"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.em,{children:"Sele\xe7\xf5es tempor\xe1rias"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/selection-range-to-array",children:"SELECTION RANGE TO ARRAY"}),(0,t.jsx)(r.br,{}),"\n",(0,t.jsx)(r.a,{href:"/docs/pt/commands/selection-to-array",children:"SELECTION TO ARRAY"})]}),"\n",(0,t.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{}),(0,t.jsx)(r.th,{})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"N\xfamero do comando"}),(0,t.jsx)(r.td,{children:"189"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Thread-seguro"}),(0,t.jsx)(r.td,{children:"\u2713"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modificar o registro atual"}),(0,t.jsx)(r.td,{})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,t.jsx)(r.td,{})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return o}});var s=n(667294);let t={},a=s.createContext(t);function o(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);