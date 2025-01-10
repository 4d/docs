"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["42149"],{377380:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>o,metadata:()=>s,assets:()=>a,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/restore-info","title":"RESTORE INFO","description":"RESTORE INFO ( seletor ; info1 ; info2 )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/restore-info.md","sourceDirName":"commands-legacy","slug":"/commands/restore-info","permalink":"/docs/pt/commands/restore-info","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Frestore-info.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"restore-info","title":"RESTORE INFO","slug":"/commands/restore-info","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"RESTORE","permalink":"/docs/pt/commands/restore"},"next":{"title":"SELECT LOG FILE","permalink":"/docs/pt/commands/select-log-file"}}'),r=t("785893"),d=t("250065");let o={id:"restore-info",title:"RESTORE INFO",slug:"/commands/restore-info",displayed_sidebar:"docs"},i=void 0,a={},l=[{value:"Description",id:"description",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"RESTORE INFO"})," ( ",(0,r.jsx)(n.em,{children:"seletor"})," ; ",(0,r.jsx)(n.em,{children:"info1"})," ; ",(0,r.jsx)(n.em,{children:"info2"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"seletor"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Tipo de informa\xe7\xe3o a ser obtida"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info1"}),(0,r.jsx)(n.td,{children:"Integer, Date"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor 1 do seletor"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"info2"}),(0,r.jsx)(n.td,{children:"Text, Time"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Valor 2 do seletor"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"description",children:"Description"}),"\n",(0,r.jsx)(n.p,{children:"O comando RESTORE INFO permite obter informa\xe7\xf5es relacionadas com a \xfaltima restaura\xe7\xe3o autom\xe1tica da base de dados."}),"\n",(0,r.jsxs)(n.p,{children:["Passe o tipo de informa\xe7\xe3o a obter em ",(0,r.jsx)(n.em,{children:"seletor"}),". \xc9 poss\xedvel utilizar uma das constantes a seguir, localizadas no tema \u201CBackup and Restore\u201D:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last restore date"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Last restore status"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]})]})]}),"\n",(0,r.jsxs)(n.p,{children:["O tipo e o conte\xfado dos par\xe2metros ",(0,r.jsx)(n.em,{children:"info1"})," e ",(0,r.jsx)(n.em,{children:"info2"})," dependem do valor do ",(0,r.jsx)(n.em,{children:"seletor"}),".",(0,r.jsx)(n.br,{}),"\n\u2022 Se ",(0,r.jsx)(n.em,{children:"seletor"})," = 0 (Last Restore Date), ",(0,r.jsx)(n.em,{children:"info1"})," retorna a data e ",(0,r.jsx)(n.em,{children:"info2"})," a hora da \xfaltima restaura\xe7\xe3o autom\xe1tica da base de dados.",(0,r.jsx)(n.br,{}),"\n\u2022 Se ",(0,r.jsx)(n.em,{children:"seletor"})," = 2 (Last Restore Status), ",(0,r.jsx)(n.em,{children:"info1"})," retorna o n\xfamero e ",(0,r.jsx)(n.em,{children:"info2"})," o texto do estado da \xfaltima restaura\xe7\xe3o autom\xe1tica da base de dados."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," este comando n\xe3o leva em conta restaura\xe7\xf5es manuais da base de dados."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/restore",children:"RESTORE"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"889"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return i},a:function(){return o}});var s=t(667294);let r={},d=s.createContext(r);function o(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);