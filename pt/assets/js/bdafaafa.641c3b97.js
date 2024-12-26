"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53848"],{405529:function(e,r,n){n.r(r),n.d(r,{metadata:()=>s,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/query-with-array","title":"QUERY WITH ARRAY","description":"QUERY WITH ARRAY ( campoAlvo ; array )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/query-with-array.md","sourceDirName":"commands-legacy","slug":"/commands/query-with-array","permalink":"/docs/pt/commands/query-with-array","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fquery-with-array.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"query-with-array","title":"QUERY WITH ARRAY","slug":"/commands/query-with-array","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QUERY SELECTION WITH ARRAY","permalink":"/docs/pt/commands/query-selection-with-array"},"next":{"title":"SET QUERY AND LOCK","permalink":"/docs/pt/commands/set-query-and-lock"}}'),a=n("785893"),t=n("250065");let o={id:"query-with-array",title:"QUERY WITH ARRAY",slug:"/commands/query-with-array",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let r={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(r.p,{children:[(0,a.jsx)(r.strong,{children:"QUERY WITH ARRAY"})," ( ",(0,a.jsx)(r.em,{children:"campoAlvo"})," ; ",(0,a.jsx)(r.em,{children:"array"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{children:"Par\xe2metro"}),(0,a.jsx)(r.th,{children:"Tipo"}),(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"campoAlvo"}),(0,a.jsx)(r.td,{children:"Field"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Campo usado para comparar os valores"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"array"}),(0,a.jsx)(r.td,{children:"Array"}),(0,a.jsx)(r.td,{children:"\u2192"}),(0,a.jsx)(r.td,{children:"Array de valores pesquisados"})]})]})]}),"\n",(0,a.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(r.p,{children:["O comando ",(0,a.jsx)(r.strong,{children:"QUERY WITH ARRAY"})," busca na tabela do campo passado no primeiro par\xe2metro todos os registros para os quais o valor de ",(0,a.jsx)(r.em,{children:"campoAlvo"}),", for igual ao menos a um dos valores dos elementos em ",(0,a.jsx)(r.a,{href:"#",title:"An array of values",children:"Array"}),". Os registros encontrados constituem a nova sele\xe7\xe3o atual."]}),"\n",(0,a.jsx)(r.p,{children:"Este comando lhe permite construir r\xe1pida e simplesmente uma pesquisa em m\xfaltiplos valores."}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.strong,{children:"Notas:"})}),"\n",(0,a.jsxs)(r.p,{children:["\u2022 Este comando n\xe3o pode ser utilizado com campos de tipo Imagem, subcampo e BLOB.",(0,a.jsx)(r.br,{}),"\n\u2022 ",(0,a.jsx)(r.em,{children:"campoAlvo"})," e ",(0,a.jsx)(r.a,{href:"#",title:"An array of values",children:"Array"})," devem ser do mesmo tipo. Exce\xe7\xe3o: pode utilizar um array de tipo Inteiro longo com um campo de tipo Hora."]}),"\n",(0,a.jsx)(r.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsx)(r.p,{children:"O exemplo a seguir lhe permite recuperar os registros de clientes franceses e americanos:"}),"\n",(0,a.jsx)(r.pre,{children:(0,a.jsx)(r.code,{className:"language-4d",children:'\xa0ARRAY TEXT(ArrayPesquisa;2)\n\xa0ArrayPesquisa{1}:="FR"\n\xa0ArrayPesquisa{2}:="US"\n\xa0QUERY WITH ARRAY([Clientes]Pa\xedses;ArrayPesquisa)\n'})}),"\n",(0,a.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsx)(r.p,{children:(0,a.jsx)(r.a,{href:"/docs/pt/commands/query-selection-with-array",children:"QUERY SELECTION WITH ARRAY"})}),"\n",(0,a.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(r.table,{children:[(0,a.jsx)(r.thead,{children:(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.th,{}),(0,a.jsx)(r.th,{})]})}),(0,a.jsxs)(r.tbody,{children:[(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"N\xfamero do comando"}),(0,a.jsx)(r.td,{children:"644"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Thread-seguro"}),(0,a.jsx)(r.td,{children:"\u2713"})]}),(0,a.jsxs)(r.tr,{children:[(0,a.jsx)(r.td,{children:"Modificar a sele\xe7\xe3o atual"}),(0,a.jsx)(r.td,{})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,a.jsx)(r,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return d},a:function(){return o}});var s=n(667294);let a={},t=s.createContext(a);function o(e){let r=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);