"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81057"],{628969:function(e,n,d){d.r(n),d.d(n,{metadata:()=>s,contentTitle:()=>o,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>i});var s=JSON.parse('{"id":"commands-legacy/backup-info","title":"BACKUP INFO","description":"BACKUP INFO ( seletor ; info1 ; info2 )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/backup-info.md","sourceDirName":"commands-legacy","slug":"/commands/backup-info","permalink":"/docs/pt/commands/backup-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fbackup-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"backup-info","title":"BACKUP INFO","slug":"/commands/backup-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BACKUP","permalink":"/docs/pt/commands/backup"},"next":{"title":"CHECK LOG FILE","permalink":"/docs/pt/commands/check-log-file"}}'),t=d("785893"),r=d("250065");let i={id:"backup-info",title:"BACKUP INFO",slug:"/commands/backup-info",displayed_sidebar:"docs"},o=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BACKUP INFO"})," ( ",(0,t.jsx)(n.em,{children:"seletor"})," ; ",(0,t.jsx)(n.em,{children:"info1"})," ; ",(0,t.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"seletor"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tipo de informa\xe7\xe3o a ser obtida"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info1"}),(0,t.jsx)(n.td,{children:"Integer, Date"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor 1 do seletor"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"info2"}),(0,t.jsx)(n.td,{children:"Time, Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Valor 2 do seletor"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsx)(n.p,{children:"O comando BACKUP INFO permite obter informa\xe7\xe3o relacionada com o \xfaltimo backup efetuado na base de dados."}),"\n",(0,t.jsxs)(n.p,{children:["Passe o tipo de informa\xe7\xe3o a se obter em ",(0,t.jsx)(n.em,{children:"seletor"}),". \xc9 poss\xedvel utilizar uma das constantes a seguir, localizadas no tema \u201C",(0,t.jsx)(n.em,{children:"Backup"}),"\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Coment\xe1rio"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Last backup date"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"info1"})," e ",(0,t.jsx)(n.em,{children:"info2"})," devolvem respectivamente a data e a hora do \xfaltimo backup."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Last backup information"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"info1"})," devolve a \xfaltima c\xf3pia de seguran\xe7a em milissegundos (inteiro longo) e ",(0,t.jsx)(n.em,{children:"info2"})," a \xfaltima timestamp de inicio da c\xf3pia de seguran\xe7a (string, ver os detalhes de formato no comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/timestamp",children:"Timestamp"}),")."]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Last backup status"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"info1"})," devolve o n\xfamero e ",(0,t.jsx)(n.em,{children:"info2"})," o texto de estado da \xfaltima c\xf3pia de seguran\xe7a"]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Next backup date"}),(0,t.jsx)(n.td,{children:"Inteiro longo"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.em,{children:"info1"})," devolve a data e ",(0,t.jsx)(n.em,{children:"info2"})," a hora da pr\xf3xima c\xf3pia de seguran\xe7a programada"]})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/restore",children:"RESTORE"})}),"\n",(0,t.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"888"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,d){d.d(n,{Z:function(){return o},a:function(){return i}});var s=d(667294);let t={},r=s.createContext(t);function i(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);