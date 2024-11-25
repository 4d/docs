"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67216"],{144069:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>l,assets:()=>m,toc:()=>a,frontMatter:()=>o});var t=JSON.parse('{"id":"commands-legacy/disable-menu-item","title":"DISABLE MENU ITEM","description":"DISABLE MENU ITEM ( menu ; menuItem {; processo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/disable-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/disable-menu-item","permalink":"/docs/pt/commands/disable-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisable-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"disable-menu-item","title":"DISABLE MENU ITEM","slug":"/commands/disable-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE MENU ITEM","permalink":"/docs/pt/commands/delete-menu-item"},"next":{"title":"Dynamic pop up menu","permalink":"/docs/pt/commands/dynamic-pop-up-menu"}}'),r=s("785893"),d=s("250065");let o={id:"disable-menu-item",title:"DISABLE MENU ITEM",slug:"/commands/disable-menu-item",displayed_sidebar:"docs"},i=void 0,m={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"DISABLE MENU ITEM"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"menuItem"})," {; ",(0,r.jsx)(n.em,{children:"processo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuItem"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"processo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de refer\xeancia do processo"})]})]})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Esse comando n\xe3o \xe9 seguro para thread e n\xe3o pode ser usado em c\xf3digo adequado."})}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando DISABLE MENU ITEM desativa o comando de menu cujo n\xfamero ou refer\xeancia de menu e n\xfamero de elemento voc\xea passou em ",(0,r.jsx)(n.em,{children:"menu"})," e ",(0,r.jsx)(n.em,{children:"menuItem"}),". Pode passar -1 em ",(0,r.jsx)(n.em,{children:"menuItem"})," para indicar o \xfaltimo elemento adicionado a ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Se omite o par\xe2metro processo, DISABLE MENU ITEM \xe9 aplicado \xe0 barra de menus do processo atual. Do contr\xe1rio, DISABLE MENU ITEM \xe9 aplicado \xe0 barra de menus do processo atual cujo n\xfamero de refer\xeancia se passa em ",(0,r.jsx)(n.em,{children:"processo."})]}),"\n",(0,r.jsxs)(n.p,{children:["Se o par\xe2metro ",(0,r.jsx)(n.em,{children:"menuItem"})," designa um submenu hier\xe1rquico, todos os elementos deste menu e dos eventuais submenus s\xe3o desativados. Este comando tamb\xe9m funciona com uma barra de menus criada com o comando ",(0,r.jsx)(n.a,{href:"/docs/pt/commands/create-menu",title:"Create menu",children:"Create menu"})," e instalada com o comando SET MENU BAR."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," se passa um ",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," em ",(0,r.jsx)(n.em,{children:"menu"}),", o par\xe2metro ",(0,r.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e ser\xe1 ignorado."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Tip:"})," para ativar/desativar todas as linhas de menus de uma vez, passe 0 (zero) em ",(0,r.jsx)(n.em,{children:"menuItem"}),"."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/enable-menu-item",children:"ENABLE MENU ITEM"})})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var t=s(667294);let r={},d=t.createContext(r);function o(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);