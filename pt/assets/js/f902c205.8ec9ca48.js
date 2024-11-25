"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["76252"],{60970:function(o,e,r){r.r(e),r.d(e,{metadata:()=>a,contentTitle:()=>n,default:()=>l,assets:()=>d,toc:()=>m,frontMatter:()=>i});var a=JSON.parse('{"id":"commands-legacy/import-data","title":"IMPORT DATA","description":"IMPORT DATA ( nomeArquivo {; projeto {; *}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/import-data.md","sourceDirName":"commands-legacy","slug":"/commands/import-data","permalink":"/docs/pt/commands/import-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fimport-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"import-data","title":"IMPORT DATA","slug":"/commands/import-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"EXPORT TEXT","permalink":"/docs/pt/commands/export-text"},"next":{"title":"IMPORT DIF","permalink":"/docs/pt/commands/import-dif"}}'),t=r("785893"),s=r("250065");let i={id:"import-data",title:"IMPORT DATA",slug:"/commands/import-data",displayed_sidebar:"docs"},n=void 0,d={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Vari\xe1veis e conjuntos do sistema",id:"vari\xe1veis-e-conjuntos-do-sistema",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(o){let e={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...o.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"IMPORT DATA"})," ( ",(0,t.jsx)(e.em,{children:"nomeArquivo"})," {; ",(0,t.jsx)(e.em,{children:"projeto"})," {; *}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(e.table,{children:[(0,t.jsx)(e.thead,{children:(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.th,{children:"Par\xe2metro"}),(0,t.jsx)(e.th,{children:"Tipo"}),(0,t.jsx)(e.th,{}),(0,t.jsx)(e.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(e.tbody,{children:[(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"nomeArquivo"}),(0,t.jsx)(e.td,{children:"Text"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Rota de acesso do arquivo importado"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"projeto"}),(0,t.jsx)(e.td,{children:"Text, Blob"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Conte\xfado do projeto importado"})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"\u2190"}),(0,t.jsx)(e.td,{children:"Novos conte\xfados do projeto importado (se o par\xe2metro * foi passado)"}),(0,t.jsx)(e.td,{}),(0,t.jsx)(e.td,{})]}),(0,t.jsxs)(e.tr,{children:[(0,t.jsx)(e.td,{children:"*"}),(0,t.jsx)(e.td,{children:"Operador"}),(0,t.jsx)(e.td,{children:"\u2192"}),(0,t.jsx)(e.td,{children:"Exibir a caixa de di\xe1logo importada e atualiza o projeto"})]})]})]}),"\n",(0,t.jsx)(e.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(e.p,{children:["O comando IMPORT DATA importa os dados localizados no arquivo ",(0,t.jsx)(e.em,{children:"nomeArquivo"})," 4D pode importar os dados nos seguintes formatos: Texto, Texto de longitude fixa, XML, SYLK, DIF, DBF (dBase) e 4D."]}),"\n",(0,t.jsxs)(e.p,{children:["Se passa uma string vazia em ",(0,t.jsx)(e.em,{children:"nomeArquivo"}),", IMPORT DATA mostra a caixa de di\xe1logo de abertura de arquivos, permitindo ao usu\xe1rio definir o nome, tipo, e localiza\xe7\xe3o do arquivo a importar. Ao aceitar a caixa de di\xe1logo, a vari\xe1vel sistema Documento cont\xe9m a rota de acesso e o nome do arquivo. Se o usu\xe1rio clicar em ",(0,t.jsx)(e.strong,{children:"Cancelar"}),", det\xe9m a execu\xe7\xe3o do comando a vari\xe1vel sistema OK toma o valor 0."]}),"\n",(0,t.jsxs)(e.p,{children:["O par\xe2metro opcional ",(0,t.jsx)(e.em,{children:"projeto"})," lhe permite utilizar um projeto para importar dados. Quando passa este par\xe2metro, a importa\xe7\xe3o \xe9 realizada diretamente, sem interven\xe7\xe3o do usu\xe1rio (a menos que utilize la op\xe7\xe3o *, ver a continua\xe7\xe3o). Se n\xe3o passa este par\xe2metro, aparece a caixa de di\xe1logo de importa\xe7\xe3o. O usu\xe1rio pode definir seus par\xe2metros de importa\xe7\xe3o ou carregar um projeto de importa\xe7\xe3o existente."]}),"\n",(0,t.jsxs)(e.p,{children:["Um projeto de importa\xe7\xe3o cont\xe9m todos os par\xe2metros de importa\xe7\xe3o, tais como as tabelas e campos nas quais importar, os delimitadores a utilizar, etc. No par\xe2metro ",(0,t.jsx)(e.em,{children:"projeto"}),", pode passar uma vari\xe1vel Texto com XML ou uma vari\xe1vel Texto com uma refer\xeancia a um elemento DOM pre existente ou um BLOB. Os projetos podem ser criados por programa\xe7\xe3o (projetos com formato XML unicamente) ou carregando par\xe2metros definidos previamente na caixa de di\xe1logo de importa\xe7\xe3o. No \xfaltimo caso, tem duas solu\xe7\xf5es dispon\xedveis:"]}),"\n",(0,t.jsxs)(e.ul,{children:["\n",(0,t.jsxs)(e.li,{children:["Utilize o comando IMPORT DATA com um par\xe2metro ",(0,t.jsx)(e.em,{children:"projeto"}),"vazio e o par\xe2metro opcional ",(0,t.jsx)(e.em,{children:"*"}),", depois salve o par\xe2metro ",(0,t.jsx)(e.em,{children:"projeto"})," resultante em um campo Texto ou BLOB (ver a continua\xe7\xe3o). Esta solu\xe7\xe3o lhe permite guardar o projeto com o arquivo de dados."]}),"\n",(0,t.jsxs)(e.li,{children:["Salve o projeto no disco, depois carregue-o, utilizando por exemplo o comando ",(0,t.jsx)(e.a,{href:"/docs/pt/commands/dom-parse-xml-source",children:"DOM Parse XML source"}),", e passe sua referencia no par\xe2metro ",(0,t.jsx)(e.em,{children:"projeto"}),".\n",(0,t.jsx)(e.strong,{children:"Nota de compatibilidad"}),"e: a partir da vers\xe3o 12 de 4D, os projetos de importa\xe7\xe3o s\xe3o codificados em XML. 4D pode abrir os projetos de importa\xe7\xe3o gerados com as vers\xf5es anteriores de 4D (formato BLOB), entretanto os projetos criados a partir da v12 n\xe3o podem ser abertos com uma vers\xe3o 11 ou anterior. Recomendamos utilizar vari\xe1veis Texto para manipular os arquivos de importa\xe7\xe3o."]}),"\n"]}),"\n",(0,t.jsxs)(e.p,{children:["O par\xe2metro opcional ",(0,t.jsx)(e.em,{children:"*"}),", se for especificado, faz com que apare\xe7a a caixa de di\xe1logo de importa\xe7\xe3o com os par\xe2metros definidos em ",(0,t.jsx)(e.em,{children:"projeto"}),". Esta caracter\xedstica lhe permite utilizar um projeto predefinido, enquanto tem ainda a possibilidade de modificar um ou mais par\xe2metros. Al\xe9m disso, o par\xe2metro ",(0,t.jsx)(e.em,{children:"projeto"})," cont\xe9m, depois de fechar a caixa de di\xe1logo de importa\xe7\xe3o, os par\xe2metros do \u201Cnovo\u201D projeto. Ent\xe3o pode armazenar o novo projeto em um campo BLOB, em disco, etc."]}),"\n",(0,t.jsx)(e.p,{children:"Se a importa\xe7\xe3o foi exitosa, a vari\xe1vel sistema OK toma o valor 1."}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.strong,{children:"Nota:"})," consulte o comando EXPORT DATA para ver um exemplo sobre a defini\xe7\xe3o de um projeto vazio."]}),"\n",(0,t.jsx)(e.h4,{id:"vari\xe1veis-e-conjuntos-do-sistema",children:"Vari\xe1veis e conjuntos do sistema"}),"\n",(0,t.jsxs)(e.p,{children:["Se o usu\xe1rio clicar em ",(0,t.jsx)(e.strong,{children:"Cancelar"})," na caixa de di\xe1logo de salvar arquivos ou de importa\xe7\xe3o, a vari\xe1vel sistema OK toma o valor 0. Se a importa\xe7\xe3o foi exitosa, a vari\xe1vel sistema OK toma o valor 1."]}),"\n",(0,t.jsx)(e.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(e.p,{children:[(0,t.jsx)(e.a,{href:"/docs/pt/commands/export-data",children:"EXPORT DATA"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/pt/commands/import-dif",children:"IMPORT DIF"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/pt/commands/import-sylk",children:"IMPORT SYLK"}),(0,t.jsx)(e.br,{}),"\n",(0,t.jsx)(e.a,{href:"/docs/pt/commands/import-text",children:"IMPORT TEXT"})]})]})}function l(o={}){let{wrapper:e}={...(0,s.a)(),...o.components};return e?(0,t.jsx)(e,{...o,children:(0,t.jsx)(c,{...o})}):c(o)}},250065:function(o,e,r){r.d(e,{Z:function(){return n},a:function(){return i}});var a=r(667294);let t={},s=a.createContext(t);function i(o){let e=a.useContext(s);return a.useMemo(function(){return"function"==typeof o?o(e):{...e,...o}},[e,o])}function n(o){let e;return e=o.disableParentContext?"function"==typeof o.components?o.components(t):o.components||t:i(o.components),a.createElement(s.Provider,{value:e},o.children)}}}]);