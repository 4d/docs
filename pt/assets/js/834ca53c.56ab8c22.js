"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80456"],{21224:function(e,o,n){n.r(o),n.d(o,{metadata:()=>r,contentTitle:()=>i,default:()=>m,assets:()=>d,toc:()=>c,frontMatter:()=>t});var r=JSON.parse('{"id":"commands-legacy/before-selection","title":"Before selection","description":"Before selection {( tabela )} : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/before-selection.md","sourceDirName":"commands-legacy","slug":"/commands/before-selection","permalink":"/docs/pt/commands/before-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbefore-selection.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"before-selection","title":"Before selection","slug":"/commands/before-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"APPLY TO SELECTION","permalink":"/docs/pt/commands/apply-to-selection"},"next":{"title":"CREATE SELECTION FROM ARRAY","permalink":"/docs/pt/commands/create-selection-from-array"}}'),a=n("785893"),s=n("250065");let t={id:"before-selection",title:"Before selection",slug:"/commands/before-selection",displayed_sidebar:"docs"},i=void 0,d={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function l(e){let o={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.strong,{children:"Before selection"})," {( ",(0,a.jsx)(o.em,{children:"tabela"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(o.table,{children:[(0,a.jsx)(o.thead,{children:(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.th,{children:"Par\xe2metro"}),(0,a.jsx)(o.th,{children:"Tipo"}),(0,a.jsx)(o.th,{}),(0,a.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,a.jsxs)(o.tbody,{children:[(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"tabela"}),(0,a.jsx)(o.td,{children:"Table"}),(0,a.jsx)(o.td,{children:"\u2192"}),(0,a.jsx)(o.td,{children:"Tabela na qual vai testar se o registro do ponteiro est\xe1 antes do primeiro registro selecionado, ou tabela padr\xe3o, se omitido"})]}),(0,a.jsxs)(o.tr,{children:[(0,a.jsx)(o.td,{children:"Resultado"}),(0,a.jsx)(o.td,{children:"Boolean"}),(0,a.jsx)(o.td,{children:"\u2190"}),(0,a.jsx)(o.td,{children:"Sim (TRUE) ou N\xe3o (FALSE)"})]})]})]}),"\n",(0,a.jsx)(o.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,a.jsxs)(o.p,{children:["Before selection retorna TRUE quando o ponteiro do registro atual se encontra antes do primeiro registro da sele\xe7\xe3o atual de ",(0,a.jsx)(o.em,{children:"tabela"}),". Before selection geralmente \xe9 utilizado para verificar se o comando PREVIOUS RECORD tiver movido o ponteiro do registro atual antes do primeiro registro. Se a sele\xe7\xe3o atual estiver vazia, Before selection retorna TRUE."]}),"\n",(0,a.jsxs)(o.p,{children:["Para mover o ponteiro do registro atual \xe0 sele\xe7\xe3o, utilize os comandos ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/first-record",children:"FIRST RECORD"}),", ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/last-record",children:"LAST RECORD"})," ou ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),". ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/next-record",children:"NEXT RECORD"}),"."]}),"\n",(0,a.jsxs)(o.p,{children:["Before selection retorna TRUE no cabe\xe7alho quando um relat\xf3rio est\xe1 sendo impresso com ",(0,a.jsx)(o.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})," ou a partir do comando de menu Imprimir. Pode utilizar o seguinte c\xf3digo para testar o primeiro cabe\xe7alho e imprimir um cabe\xe7alho especial para a primeira p\xe1gina:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de um formul\xe1rio de sa\xedda utilizado para um relat\xf3rio\n\xa0&NBSP;$vpFormTabela:=Current form table\n\xa0&NBSP;Case of\n\xa0&NBSP;\xa0// ...\n:(Form event code=On Header)\n\xa0&NBSP;\xa0// A \xe1rea cabe\xe7alho vai ser impressa\n\xa0&NBSP;Case of\n\xa0&NBSP;:(Before selectiom($vpFormTabela->))\n\xa0&NBSP;\xa0// O c\xf3digo para a primeira quebra do cabe\xe7alho fica aqui\n\xa0&NBSP;\xa0// ...\n\xa0&NBSP;End case\n"})}),"\n",(0,a.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,a.jsxs)(o.p,{children:["Este formul\xe1rio \xe9 utilizado durante a impress\xe3o de um relat\xf3rio. Define uma vari\xe1vel ",(0,a.jsx)(o.em,{children:"vTitulo"}),", que ser\xe1 imprimida na \xe1rea do cabe\xe7alho na primeira p\xe1gina:"]}),"\n",(0,a.jsx)(o.pre,{children:(0,a.jsx)(o.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de formul\xe1rio [Finan\xe7as];"Array"\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Header)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0:(Before selection([Finan\xe7as))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vTitulo:="Relat\xf3rio de finan\xe7as de 1997"\xa0// Definir o t\xedtulo para a primeira p\xe1gina\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vTitulo:=""\xa0// Apagar o t\xedtulo para todas as outras p\xe1ginas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End case\n\xa0End case\n'})}),"\n",(0,a.jsx)(o.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,a.jsxs)(o.p,{children:[(0,a.jsx)(o.a,{href:"/docs/pt/commands/end-selection",children:"End selection"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/first-record",children:"FIRST RECORD"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/form-event-code",children:"Form event code"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/previous-record",children:"PREVIOUS RECORD"}),(0,a.jsx)(o.br,{}),"\n",(0,a.jsx)(o.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})]})]})}function m(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,a.jsx)(o,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return t}});var r=n(667294);let a={},s=r.createContext(a);function t(e){let o=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:t(e.components),r.createElement(s.Provider,{value:o},e.children)}}}]);