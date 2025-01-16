"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["68851"],{825042:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>c,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/trigger-properties","title":"TRIGGER PROPERTIES","description":"TRIGGER PROPERTIES ( nivelTrigger ; dbEvent ; numTabela ; numRegistro )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/trigger-properties.md","sourceDirName":"commands-legacy","slug":"/commands/trigger-properties","permalink":"/docs/pt/20-R7/commands/trigger-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ftrigger-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"trigger-properties","title":"TRIGGER PROPERTIES","slug":"/commands/trigger-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Trigger level","permalink":"/docs/pt/20-R7/commands/trigger-level"},"next":{"title":"User Interface","permalink":"/docs/pt/20-R7/category/user-interface"}}'),d=r("785893"),s=r("250065");let i={id:"trigger-properties",title:"TRIGGER PROPERTIES",slug:"/commands/trigger-properties",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"TRIGGER PROPERTIES"})," ( ",(0,d.jsx)(n.em,{children:"nivelTrigger"})," ; ",(0,d.jsx)(n.em,{children:"dbEvent"})," ; ",(0,d.jsx)(n.em,{children:"numTabela"})," ; ",(0,d.jsx)(n.em,{children:"numRegistro"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nivelTrigger"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xedvel de ciclo de execu\xe7\xe3o do Trigger"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"dbEvent"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Evento de banco de dados"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numTabela"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"N\xfamero de tabela envolvido"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"numRegistro"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"N\xfamero de registro envolvido"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando TRIGGER PROPERTIES retorna a informa\xe7\xe3o sobre o n\xedvel de execu\xe7\xe3o do trigger que se passa em ",(0,d.jsx)(n.em,{children:"nivelTrigger"}),". Pode utilizar ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/trigger-level",children:"Trigger level"})," junto com Trigger level para realizar diferentes a\xe7\xf5es em fun\xe7\xe3o da cascada do trigger. Para maior informa\xe7\xe3o, consulte ."]}),"\n",(0,d.jsx)(n.p,{children:"Se passa um n\xedvel de execu\xe7\xe3o de trigger inexistente, o comando retorna 0 (zero) em todos os par\xe2metros."}),"\n",(0,d.jsxs)(n.p,{children:["A natureza do evento de banco de dados para o n\xedvel de execu\xe7\xe3o do trigger \xe9 retornado em ",(0,d.jsx)(n.em,{children:"dbEvent"}),". As seguintes constantes pr\xe9-definidas s\xe3o oferecidas no tema ",(0,d.jsx)(n.em,{children:"_o_LAST SUBRECORD"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On Deleting Record Event"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"3"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On Saving Existing Record Event"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"2"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"On Saving New Record Event"}),(0,d.jsx)(n.td,{children:"Inteiro longo"}),(0,d.jsx)(n.td,{children:"1"})]})]})]}),"\n",(0,d.jsxs)(n.p,{children:["O n\xfamero de tabela e de registro para o registro relacionado pelo evento de banco de dados para o n\xedvel de execu\xe7\xe3o do trigger se retornan em ",(0,d.jsx)(n.em,{children:"numTabela"})," e ",(0,d.jsx)(n.em,{children:"numRegistro"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.em,{children:"Sobre N\xfameros de Registros"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/trigger-event",children:"Trigger event"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/trigger-level",children:"Trigger level"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.em,{children:"Triggers"})]}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"399"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(667294);let d={},s=t.createContext(d);function i(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);