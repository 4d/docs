"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88893"],{178656:function(e,n,s){s.r(n),s.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>m,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/disable-menu-item","title":"DISABLE MENU ITEM","description":"DISABLE MENU ITEM ( menu ; menuItem {; processo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/disable-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/disable-menu-item","permalink":"/docs/pt/20-R8/commands/disable-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdisable-menu-item.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"disable-menu-item","title":"DISABLE MENU ITEM","slug":"/commands/disable-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DELETE MENU ITEM","permalink":"/docs/pt/20-R8/commands/delete-menu-item"},"next":{"title":"Dynamic pop up menu","permalink":"/docs/pt/20-R8/commands/dynamic-pop-up-menu"}}'),d=s("785893"),t=s("250065");let i={id:"disable-menu-item",title:"DISABLE MENU ITEM",slug:"/commands/disable-menu-item",displayed_sidebar:"docs"},o=void 0,a={},m=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"DISABLE MENU ITEM"})," ( ",(0,d.jsx)(n.em,{children:"menu"})," ; ",(0,d.jsx)(n.em,{children:"menuItem"})," {; ",(0,d.jsx)(n.em,{children:"processo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menu"}),(0,d.jsx)(n.td,{children:"Integer, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menuItem"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"processo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de refer\xeancia do processo"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando DISABLE MENU ITEM desativa o comando de menu cujo n\xfamero ou refer\xeancia de menu e n\xfamero de elemento voc\xea passou em ",(0,d.jsx)(n.em,{children:"menu"})," e ",(0,d.jsx)(n.em,{children:"menuItem"}),". Pode passar -1 em ",(0,d.jsx)(n.em,{children:"menuItem"})," para indicar o \xfaltimo elemento adicionado a ",(0,d.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Se omite o par\xe2metro processo, DISABLE MENU ITEM \xe9 aplicado \xe0 barra de menus do processo atual. Do contr\xe1rio, DISABLE MENU ITEM \xe9 aplicado \xe0 barra de menus do processo atual cujo n\xfamero de refer\xeancia se passa em ",(0,d.jsx)(n.em,{children:"processo."})]}),"\n",(0,d.jsxs)(n.p,{children:["Se o par\xe2metro ",(0,d.jsx)(n.em,{children:"menuItem"})," designa um submenu hier\xe1rquico, todos os elementos deste menu e dos eventuais submenus s\xe3o desativados. Este comando tamb\xe9m funciona com uma barra de menus criada com o comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/create-menu",title:"Create menu",children:"Create menu"})," e instalada com o comando SET MENU BAR."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," se passa um ",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," em ",(0,d.jsx)(n.em,{children:"menu"}),", o par\xe2metro ",(0,d.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e ser\xe1 ignorado."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Tip:"})," para ativar/desativar todas as linhas de menus de uma vez, passe 0 (zero) em ",(0,d.jsx)(n.em,{children:"menuItem"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/20-R8/commands/enable-menu-item",children:"ENABLE MENU ITEM"})}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"150"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Proibido no servidor"}),(0,d.jsx)(n.td,{})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let d={},t=r.createContext(d);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);