"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18024"],{442292:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>t});var r=JSON.parse('{"id":"commands-legacy/create-folder","title":"CREATE FOLDER","description":"CREATE FOLDER ( rotaPasta {; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/create-folder.md","sourceDirName":"commands-legacy","slug":"/commands/create-folder","permalink":"/docs/pt/20-R7/commands/create-folder","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fcreate-folder.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"create-folder","title":"CREATE FOLDER","slug":"/commands/create-folder","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Create document","permalink":"/docs/pt/20-R7/commands/create-document"},"next":{"title":"DELETE DOCUMENT","permalink":"/docs/pt/20-R7/commands/delete-document"}}'),s=a("785893"),d=a("250065");let o={id:"create-folder",title:"CREATE FOLDER",slug:"/commands/create-folder",displayed_sidebar:"docs"},t=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo 1",id:"exemplo-1",level:2},{value:"Exemplo 2",id:"exemplo-2",level:2},{value:"Exemplo 3",id:"exemplo-3",level:2},{value:"Exemplo 4",id:"exemplo-4",level:2},{value:"Exemplo 5",id:"exemplo-5",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"CREATE FOLDER"})," ( ",(0,s.jsx)(n.em,{children:"rotaPasta"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"rotaPasta"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Rota de acesso a nova pasta a criar"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Cria hierarquia de pastas"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando CREATE FOLDER cria uma pasta de acordo com a rota de acesso que \xe9 passada em ",(0,s.jsx)(n.em,{children:"rotaPasta"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Se passar um nome, a pasta \xe9 criada na pasta do banco. Se passar uma rota de acesso completa, deve ser uma rota v\xe1lida ao nome da pasta que voc\xea deseja criar, a partir da raiz de um volume ou ao n\xedvel da pasta do banco."}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-1",children:"Exemplo 1"}),"\n",(0,s.jsx)(n.p,{children:"O exemplo abaixo cria a pasta \u201CArquivos\u201D na pasta do banco:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("Arquivos")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-2",children:"Exemplo 2"}),"\n",(0,s.jsx)(n.p,{children:"O exemplo abaixo cria a pasta Arquivos na pasta do banco, depois cria as subpastas \u201CJaneiro\u201D e \u201CFevereiro\u201D:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("Arquivos")\n\xa0CREATE FOLDER("Arquivos\\\\Janeiro")\n\xa0CREATE FOLDER("Arquivos\\\\Fevereiro")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-3",children:"Exemplo 3"}),"\n",(0,s.jsx)(n.p,{children:"O exemplo abaixo cria a pasta \u201CArquivos\u201D na raiz do volume C:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("C:\\\\Arquivos")\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-4",children:"Exemplo 4"}),"\n",(0,s.jsx)(n.p,{children:"O exemplo falhar\xe1 se n\xe3o houver uma pasta \u201CNovidades\u201D na raiz do volume C:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("C:\\\\Novidades\\\\Imagens")\xa0// INCORRETO, n\xe3o \xe9 poss\xedvel criar dois n\xedveis de pastas em uma chamada\n'})}),"\n",(0,s.jsx)(n.h2,{id:"exemplo-5",children:"Exemplo 5"}),"\n",(0,s.jsx)(n.p,{children:'Cria\xe7\xe3o da subpasta "\\Fevereiro\\" na atual pasta "C:\\Arquivos\\":'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0CREATE FOLDER("C:\\\\Arquivos\\\\2011\\\\Fevereiro\\\\Doc.txt";*)\n\xa0\xa0// O arquivo "Doc.txt" \xe9 ignorado\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/folder-list",children:"FOLDER LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R7/commands/test-path-name",children:"Test path name"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"475"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modificar vari\xe1veis"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return t},a:function(){return o}});var r=a(667294);let s={},d=r.createContext(s);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);