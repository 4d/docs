"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["66906"],{909859:function(e,n,t){t.r(n),t.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>o,toc:()=>i,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/table-name","title":"Table name","description":"Table name ( numTabela ) Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/table-name.md","sourceDirName":"commands-legacy","slug":"/commands/table-name","permalink":"/docs/pt/20-R8/commands/table-name","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftable-name.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"table-name","title":"Table name","slug":"/commands/table-name","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Table","permalink":"/docs/pt/20-R8/commands/table"},"next":{"title":"Styled Text","permalink":"/docs/pt/20-R8/commands/theme/Styled-Text"}}'),s=t("785893"),r=t("250065");let d={id:"table-name",title:"Table name",slug:"/commands/table-name",displayed_sidebar:"docs"},l=void 0,o={},i=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Table name"})," ( ",(0,s.jsx)(n.em,{children:"numTabela"})," ) : Text",(0,s.jsx)(n.br,{}),(0,s.jsx)(n.strong,{children:"Table name"})," ( ",(0,s.jsx)(n.em,{children:"pontTabela"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numTabela|pontTabela"}),(0,s.jsx)(n.td,{children:"Inteiro longo, Ponteiro"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero da tabela ou ponteiro a tabela"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nome da tabela"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando Table name retorna o nome da tabela cujo n\xfamero ou ponteiro \xe9 passado em ",(0,s.jsx)(n.em,{children:"numTabela"})," ou ",(0,s.jsx)(n.em,{children:"pontTabela"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"O seguinte \xe9 um exemplo de um m\xe9todo gen\xe9rico que mostra os registros de uma tabela. A refer\xeancia \xe0 tabela \xe9 passada como um ponteiro para a tabela. O comando Table name \xe9 utilizado para incluir o nome da tabela na barra de t\xedtulos da janela:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de projeto SHOW CURRENT SELECTION\n\xa0\xa0// SHOW CURRENT SELECTION ( Ponteiro )\n\xa0\xa0// SHOW CURRENT SELECTION (->[Tabela])\n\xa0\n\xa0SET WINDOW TITLE("Registros para "+Table name($1))\xa0// Fixar o t\xedtulo da janela\n\xa0DISPLAY SELECTION($1->)\xa0// Mostrar a sele\xe7\xe3o\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/field-name",children:"Field name"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/last-table-number",children:"Last table number"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-field-titles",children:"SET FIELD TITLES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-table-titles",children:"SET TABLE TITLES"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/table",children:"Table"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"256"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var a=t(667294);let s={},r=a.createContext(s);function d(e){let n=a.useContext(r);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),a.createElement(r.Provider,{value:n},e.children)}}}]);