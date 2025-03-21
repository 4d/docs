"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3037"],{556648:function(e,n,a){a.r(n),a.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>d});var s=JSON.parse('{"id":"commands-legacy/regenerate-missing-table","title":"REGENERATE MISSING TABLE","description":"REGENERATE MISSING TABLE ( nomeTabela )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/regenerate-missing-table.md","sourceDirName":"commands-legacy","slug":"/commands/regenerate-missing-table","permalink":"/docs/pt/commands/regenerate-missing-table","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fregenerate-missing-table.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"regenerate-missing-table","title":"REGENERATE MISSING TABLE","slug":"/commands/regenerate-missing-table","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"PAUSE INDEXES","permalink":"/docs/pt/commands/pause-indexes"},"next":{"title":"RELOAD EXTERNAL DATA","permalink":"/docs/pt/commands/reload-external-data"}}'),r=a("785893"),t=a("250065");let o={id:"regenerate-missing-table",title:"REGENERATE MISSING TABLE",slug:"/commands/regenerate-missing-table",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"REGENERATE MISSING TABLE"})," ( ",(0,r.jsx)(n.em,{children:"nomeTabela"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"nomeTabela"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Nome de tabela n\xe3o encontrada a regenerar"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando REGENERATE MISSING TABLE reconstrui a tabela n\xe3o encontrada cujo nome \xe9 passado no par\xe2metro ",(0,r.jsx)(n.em,{children:"nomTabela"}),". Quando se reconstrui uma tabela n\xe3o encontrada, ela se torna vis\xedvel no editor de estrutura e seus dados s\xe3o acess\xedveis novamente."]}),"\n",(0,r.jsxs)(n.p,{children:["As tabelas n\xe3o encontradas s\xe3o tabelas cujos dados est\xe3o presentes no arquivo de dados mas que n\xe3o existem a n\xedvel da estrutura. Pode identificar as tabelas n\xe3o encontradas que possam estar presentes, utilizando o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/get-missing-table-names",children:"GET MISSING TABLE NAMES"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Se a tabela designada pelo par\xe2metro ",(0,r.jsx)(n.em,{children:"nomTabela"})," n\xe3o for uma tabela faltante do banco, o comando n\xe3o faz nada."]}),"\n",(0,r.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Este m\xe9todo regenera todas as tabelas n\xe3o encontradas eventualmente presentes no banco:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrMissingTables;0)\n\xa0GET MISSING TABLE NAMES($arrMissingTables)\n\xa0$SizeArray:=Size of array($arrMissingTables)\n\xa0If($SizeArray#0)\n\xa0\xa0//Preenche o array com os nomes de todas as tabelas no banco de dados.\n\xa0\xa0\xa0\xa0ARRAY TEXT(arrTables;Last table number)\n\xa0\xa0\xa0\xa0If(Last table number>0)\xa0//Se houver tabelas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlTables;Size of array(arrTables);1;-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Is table number valid($vlTables))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0arrTables{$vlTables}:=Table name($vlTables)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0DELETE FROM ARRAY(arrTables;$vlTables)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0For($i;1;$SizeArray)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(Find in array(arrTables;$arrMissingTables{$i})=-1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0CONFIRM("Regenerar a tabela"+$arrMissingTables{$i}+"?")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0REGENERATE MISSING TABLE($arrMissingTables{$i})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Imposs\xedvel regenerar a tabela "+$arrMissingTables{$i}+" porque j\xe1 existe uma tabela com esse nome no banco de dados.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0End for\n\xa0Else\n\xa0\xa0\xa0\xa0ALERT("N\xe3o h\xe1 tabelas a regenerar.")\n\xa0End if\n'})}),"\n",(0,r.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/get-missing-table-names",children:"GET MISSING TABLE NAMES"})}),"\n",(0,r.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"1126"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,a){a.d(n,{Z:function(){return d},a:function(){return o}});var s=a(667294);let r={},t=s.createContext(r);function o(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);