"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12913"],{418010:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>i,toc:()=>l,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/end-selection","title":"End selection","description":"End selection {( tabela )} : Boolean","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/end-selection.md","sourceDirName":"commands-legacy","slug":"/commands/end-selection","permalink":"/docs/pt/commands/end-selection","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fend-selection.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"end-selection","title":"End selection","slug":"/commands/end-selection","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Displayed line number","permalink":"/docs/pt/commands/displayed-line-number"},"next":{"title":"FIRST RECORD","permalink":"/docs/pt/commands/first-record"}}'),d=o("785893"),s=o("250065");let t={id:"end-selection",title:"End selection",slug:"/commands/end-selection",displayed_sidebar:"docs"},a=void 0,i={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"End selection"})," {( ",(0,d.jsx)(n.em,{children:"tabela"})," )} : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"tabela"}),(0,d.jsx)(n.td,{children:"Table"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Tabela na qual provar se o ponteiro do registro est\xe1 al\xe9m do \xfaltimo registro selecionado, ou Tabela por padr\xe3o, se omitida"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Boolean"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Sim (TRUE) ou N\xe3o (FALSE)"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["End selection retorna TRUE quando o ponteiro do registro atual est\xe1 al\xe9m do \xfaltimo registro da sele\xe7\xe3o atual de tabela. End selection se utiliza geralmente para testar se a chamada ao comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/next-record",children:"NEXT RECORD"})," ha movido ou n\xe3o o ponteiro do registro atual detr\xe1s do \xfaltimo registro da sele\xe7\xe3o. Se a sele\xe7\xe3o atual est\xe1 vazia, End selection retorna TRUE."]}),"\n",(0,d.jsxs)(n.p,{children:["Para mover o ponteiro do registro atual dentro da sele\xe7\xe3o, utilize ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/first-record",children:"FIRST RECORD"}),", ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/last-record",children:"LAST RECORD"})," ou ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/goto-selected-record",children:"GOTO SELECTED RECORD"}),". ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/previous-record",children:"PREVIOUS RECORD"})," n\xe3o mova o ponteiro \xe0 sele\xe7\xe3o."]}),"\n",(0,d.jsxs)(n.p,{children:["End selection retorna tamb\xe9m TRUE quando o \xfaltimo rodap\xe9 de um relat\xf3rio se imprime com ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})," ou desde o menu Imprimir. Pode utilizar o seguinte c\xf3digo para testar o \xfaltimo rodap\xe9 e imprimir um rodap\xe9 especial para a \xfaltima p\xe1gina:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// M\xe9todo de um formul\xe1rio de sa\xedda utilizado para imprimir um relat\xf3rio $vpFormTabela:=Current form table\n\xa0&NBSP;Case of\n\xa0&NBSP;\xa0// ...\n\xa0&NBSP;:(Form event code=On Printing Footer)\n\xa0&NBSP;\xa0// Um rodap\xe9 ser\xe1 impresso\n\xa0&NBSP;If(End selection($vpFormTabela->))\n\xa0&NBSP;\xa0// O c\xf3digo para o \xfaltimo rodap\xe9 vai aqui\n\xa0&NBSP;Else\n\xa0&NBSP;\xa0// O c\xf3digo para o rodap\xe9 vai aqui\nEnd if\nEnd case\n"})}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Este m\xe9todo de formul\xe1rio \xe9 utilizado durante a impress\xe3o de um relat\xf3rio. Ele define a vari\xe1vel ",(0,d.jsx)(n.em,{children:"vPie"})," a imprimir na \xe1rea de rodap\xe9 da \xfaltima p\xe1gina:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// [Finan\xe7as];"Resumo" M\xe9todo de formul\xe1rio\n\xa0Case of\n\xa0\xa0// ...\n\xa0\xa0\xa0\xa0:(Form event code=On Printing Footer)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(End selection([Finan\xe7as]))\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vPie:="\xa92001 Acme Corp."\xa0// Definir o rodap\xe9 da \xfaltima p\xe1gina\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0vPie:=""\xa0// Apagar o rodap\xe9 para todas as outras p\xe1ginas\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/commands/before-selection",children:"Before selection"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/form-event-code",children:"Form event code"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/last-record",children:"LAST RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/next-record",children:"NEXT RECORD"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/commands/print-selection",children:"PRINT SELECTION"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"36"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return a},a:function(){return t}});var r=o(667294);let d={},s=r.createContext(d);function t(e){let n=r.useContext(s);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);