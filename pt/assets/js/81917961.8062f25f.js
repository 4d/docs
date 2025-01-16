"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8570"],{709624:function(e,r,n){n.r(r),n.d(r,{default:()=>m,frontMatter:()=>o,metadata:()=>s,assets:()=>i,toc:()=>c,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/verify-current-data-file","title":"VERIFY CURRENT DATA FILE","description":"VERIFY CURRENT DATA FILE {( objetos ; op\xe7\xf5es ; metodo {; arrayTabelas {; arrayCampos}} )}","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/verify-current-data-file.md","sourceDirName":"commands-legacy","slug":"/commands/verify-current-data-file","permalink":"/docs/pt/commands/verify-current-data-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fverify-current-data-file.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"verify-current-data-file","title":"VERIFY CURRENT DATA FILE","slug":"/commands/verify-current-data-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"USE ENTITY SELECTION","permalink":"/docs/pt/commands/use-entity-selection"},"next":{"title":"VERIFY DATA FILE","permalink":"/docs/pt/commands/verify-data-file"}}'),d=n("785893"),a=n("250065");let o={id:"verify-current-data-file",title:"VERIFY CURRENT DATA FILE",slug:"/commands/verify-current-data-file",displayed_sidebar:"docs"},t=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let r={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(r.p,{children:[(0,d.jsx)(r.strong,{children:"VERIFY CURRENT DATA FILE"})," {( ",(0,d.jsx)(r.em,{children:"objetos"})," ; ",(0,d.jsx)(r.em,{children:"op\xe7\xf5es"})," ; ",(0,d.jsx)(r.em,{children:"metodo"})," {; ",(0,d.jsx)(r.em,{children:"arrayTabelas"})," {; ",(0,d.jsx)(r.em,{children:"arrayCampos"}),"}} )}"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{children:"Par\xe2metro"}),(0,d.jsx)(r.th,{children:"Tipo"}),(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"objetos"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Objeto a ser verificado"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"op\xe7\xf5es"}),(0,d.jsx)(r.td,{children:"Integer"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Op\xe7\xf5es de verifica\xe7\xe3o"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"metodo"}),(0,d.jsx)(r.td,{children:"Text"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"Nome do m\xe9todo 4D de retrochamada"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"arrayTabelas"}),(0,d.jsx)(r.td,{children:"Integer array"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"N\xfameros de tabelas a serem verificadas"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"arrayCampos"}),(0,d.jsx)(r.td,{children:"2D Integer array, 2D Integer array, 2D Real array"}),(0,d.jsx)(r.td,{children:"\u2192"}),(0,d.jsx)(r.td,{children:"N\xfamero de \xedndices a serem verificados"})]})]})]}),"\n",(0,d.jsx)(r.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsx)(r.p,{children:"O comando VERIFY CURRENT DATA FILE realiza uma verifica\xe7\xe3o estrutural dos objetos encontrados no arquivo de dados atualmente aberto por 4D."}),"\n",(0,d.jsxs)(r.p,{children:["Este comando tem o mesmo funcionamento que o comando ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/verify-data-file",children:"VERIFY DATA FILE"}),", exceto que ela s\xf3 se aplica ao arquivo de dados atuais do banco de dados aberto. Por conseguinte, n\xe3o requer par\xe2metros que especificam a estrutura e dados.",(0,d.jsx)(r.br,{}),"\nConsulte o comando ",(0,d.jsx)(r.a,{href:"/docs/pt/commands/verify-data-file",children:"VERIFY DATA FILE"})," para obter uma descri\xe7\xe3o dos par\xe2metros."]}),"\n",(0,d.jsx)(r.p,{children:"Se voc\xea passar o comando VERIFY CURRENT DATA FILE sem par\xe2metros, a verifica\xe7\xe3o \xe9 realizada com os valores padr\xe3o dos par\xe2metros:"}),"\n",(0,d.jsxs)(r.p,{children:["- ",(0,d.jsx)(r.em,{children:"objetos"})," = Verificar todos (= valor 16)",(0,d.jsx)(r.br,{}),"\n- ",(0,d.jsx)(r.em,{children:"op\xe7\xf5es"})," = 0 (\xe9 criado o arquivo de hist\xf3rico)",(0,d.jsx)(r.br,{}),"\n- ",(0,d.jsx)(r.em,{children:"m\xe9todo"}),' = ""',(0,d.jsx)(r.br,{}),"\n- ",(0,d.jsx)(r.em,{children:"arrayTabelas"})," e ",(0,d.jsx)(r.em,{children:"arrayCampos"})," s\xe3o omitidos."]}),"\n",(0,d.jsx)(r.p,{children:"Quando este comando \xe9 executado, o cache de dados s\xe3o liberados e todas as opera\xe7\xf5es para acessar os dados s\xe3o bloqueadas durante a verifica\xe7\xe3o."}),"\n",(0,d.jsx)(r.p,{children:"Se um arquivo de hist\xf3rico foi gerado, o nome completo de caminho \xe9 retornado na vari\xe1vel de sistema Document."}),"\n",(0,d.jsx)(r.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,d.jsx)(r.p,{children:"Se o m\xe9todo de callback n\xe3o existir, a verifica\xe7\xe3o n\xe3o \xe9 efetuada, \xe9 gerado um erro e a vari\xe1vel sistema OK recebe o valor 0. Se um arquivo de log hist\xf3rico for erado, seu nome de caminho completo \xe9 retornado na vari\xe1vel de sistema Document."}),"\n",(0,d.jsx)(r.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(r.p,{children:(0,d.jsx)(r.a,{href:"/docs/pt/commands/verify-data-file",children:"VERIFY DATA FILE"})}),"\n",(0,d.jsx)(r.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(r.table,{children:[(0,d.jsx)(r.thead,{children:(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.th,{}),(0,d.jsx)(r.th,{})]})}),(0,d.jsxs)(r.tbody,{children:[(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"N\xfamero do comando"}),(0,d.jsx)(r.td,{children:"1008"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Thread-seguro"}),(0,d.jsx)(r.td,{children:"\u2713"})]}),(0,d.jsxs)(r.tr,{children:[(0,d.jsx)(r.td,{children:"Modificar vari\xe1veis"}),(0,d.jsx)(r.td,{children:"OK, Document, error"})]})]})]})]})}function m(e={}){let{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,d.jsx)(r,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return t},a:function(){return o}});var s=n(667294);let d={},a=s.createContext(d);function o(e){let r=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);