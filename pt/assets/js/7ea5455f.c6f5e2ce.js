"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86102"],{720458:function(e,r,n){n.r(r),n.d(r,{default:()=>h,frontMatter:()=>a,metadata:()=>t,assets:()=>d,toc:()=>l,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/get-table-properties","title":"GET TABLE PROPERTIES","description":"GET TABLE PROPERTIES ( ponTabela|NumTabela ; invisivel {; trigSalvarNovo {; trigSalvarRegistro {; trigApagarRegistro {; trigCarregarRegistro}}}} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-table-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-table-properties","permalink":"/docs/pt/20-R7/commands/get-table-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-table-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-table-properties","title":"GET TABLE PROPERTIES","slug":"/commands/get-table-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET RELATION PROPERTIES","permalink":"/docs/pt/20-R7/commands/get-relation-properties"},"next":{"title":"IMPORT STRUCTURE","permalink":"/docs/pt/20-R7/commands/import-structure"}}'),s=n("785893"),i=n("250065");let a={id:"get-table-properties",title:"GET TABLE PROPERTIES",slug:"/commands/get-table-properties",displayed_sidebar:"docs"},o=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let r={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.strong,{children:"GET TABLE PROPERTIES"})," ( ponTabela|NumTabela ; ",(0,s.jsx)(r.em,{children:"invisivel"})," {; ",(0,s.jsx)(r.em,{children:"trigSalvarNovo"})," {; ",(0,s.jsx)(r.em,{children:"trigSalvarRegistro"})," {; ",(0,s.jsx)(r.em,{children:"trigApagarRegistro"})," {; ",(0,s.jsx)(r.em,{children:"trigCarregarRegistro"}),"}}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Par\xe2metro"}),(0,s.jsx)(r.th,{children:"Tipo"}),(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"ponTabela|NumTabela"}),(0,s.jsx)(r.td,{children:"Ponteiro, Inteiro longo"}),(0,s.jsx)(r.td,{children:"\u2192"}),(0,s.jsx)(r.td,{children:"Ponteiro de tabela ou n\xfamero de tabela"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"invisivel"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"True = invis\xedvel, False = vis\xedvel"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"trigSalvarNovo"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:'True = Trigger "On saving new record" ativado; sen\xe3o, False'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"trigSalvarRegistro"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:'True = Trigger "On saving an existing record" ativado; sen\xe3o, False'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"trigApagarRegistro"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:'True = Trigger "On deleting a record" ativado; sen\xe3o, False'})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"trigCarregarRegistro"}),(0,s.jsx)(r.td,{children:"Boolean"}),(0,s.jsx)(r.td,{children:"\u2190"}),(0,s.jsx)(r.td,{children:"*** N\xe3o usar (obsoleto) ***"})]})]})]}),"\n",(0,s.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["O comando GET TABLE PROPERTIES retorna as propriedades da tabela passada por ",(0,s.jsx)(r.em,{children:"pontTabela"})," ou ",(0,s.jsx)(r.em,{children:"numTabela"}),". Pode passar no primeiro par\xe2metro o n\xfamero de tabela ou ponteiro da tabela."]}),"\n",(0,s.jsx)(r.p,{children:"Una vez executado o comando:"}),"\n",(0,s.jsxs)(r.ul,{children:["\n",(0,s.jsxs)(r.li,{children:["O par\xe2metro ",(0,s.jsx)(r.em,{children:"invis\xedvel"})," retorna True se o atributo \u201CInvisible\u201D tiver sido definido para a tabela, do contr\xe1rio False. O atributo invis\xedvel permite ocultar a tabela nos editores padr\xe3o de 4D (etiquetas, gr\xe1ficos...)."]}),"\n",(0,s.jsxs)(r.li,{children:["O par\xe2metro ",(0,s.jsx)(r.em,{children:"trigSalvarNovo"})," retorna True se o trigger \u201COn saving new record\u201D for ativado para a tabela, do contr\xe1rio False."]}),"\n",(0,s.jsxs)(r.li,{children:["O par\xe2metro ",(0,s.jsx)(r.em,{children:"trigSalvarReg"})," retorna True se o trigger \u201COn saving an existing record\u201D for ativado para a tabela, do contr\xe1rio False."]}),"\n",(0,s.jsxs)(r.li,{children:["O par\xe2metro ",(0,s.jsx)(r.em,{children:"trigApagarReg"})," retorna True se o trigger \u201COn deleting a record\u201D for ativado para esta tabela, do contr\xe1rio False."]}),"\n"]}),"\n",(0,s.jsx)(r.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/get-field-entry-properties",children:"GET FIELD ENTRY PROPERTIES"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,s.jsx)(r.br,{}),"\n",(0,s.jsx)(r.a,{href:"/docs/pt/20-R7/commands/get-relation-properties",children:"GET RELATION PROPERTIES"})]}),"\n",(0,s.jsx)(r.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{}),(0,s.jsx)(r.th,{})]})}),(0,s.jsxs)(r.tbody,{children:[(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"N\xfamero do comando"}),(0,s.jsx)(r.td,{children:"687"})]}),(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"Thread-seguro"}),(0,s.jsx)(r.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return o},a:function(){return a}});var t=n(667294);let s={},i=t.createContext(s);function a(e){let r=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);