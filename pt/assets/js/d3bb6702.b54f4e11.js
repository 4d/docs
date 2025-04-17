"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["78998"],{507928:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>t,assets:()=>m,toc:()=>a,contentTitle:()=>o});var t=JSON.parse('{"id":"commands-legacy/delete-menu-item","title":"DELETE MENU ITEM","description":"DELETE MENU ITEM ( menu ; menuItem {; processo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/delete-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/delete-menu-item","permalink":"/docs/pt/20-R8/commands/delete-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdelete-menu-item.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"delete-menu-item","title":"DELETE MENU ITEM","slug":"/commands/delete-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Create menu","permalink":"/docs/pt/20-R8/commands/create-menu"},"next":{"title":"DISABLE MENU ITEM","permalink":"/docs/pt/20-R8/commands/disable-menu-item"}}'),s=r("785893"),d=r("250065");let i={id:"delete-menu-item",title:"DELETE MENU ITEM",slug:"/commands/delete-menu-item",displayed_sidebar:"docs"},o=void 0,m={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"DELETE MENU ITEM"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"menuItem"})," {; ",(0,s.jsx)(n.em,{children:"processo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuItem"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"processo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de refer\xeancia do processo"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando DELETE MENU ITEM elimina a linha de menu cujo n\xfamero ou refer\xeancia de menu e n\xfamero de elemento voc\xea passou em ",(0,s.jsx)(n.em,{children:"menu"})," e ",(0,s.jsx)(n.em,{children:"menuItem"}),". Pode passar -1 em ",(0,s.jsx)(n.em,{children:"menuItem"})," para indicar o \xfaltimo elemento adicionado a ",(0,s.jsx)(n.em,{children:"menu."})]}),"\n",(0,s.jsxs)(n.p,{children:["Se a linha de menu especificada ",(0,s.jsx)(n.em,{children:"menu"})," e ",(0,s.jsx)(n.em,{children:"menuItem"})," \xe9 um menu administrado por refer\xeancia e criado, por exemplo, utilizando o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/create-menu",title:"Create menu",children:"Create menu"}),", DELETE MENU ITEM apagar\xe1 unicamente a inst\xe2ncia de ",(0,s.jsx)(n.em,{children:"menuItem"})," em ",(0,s.jsx)(n.em,{children:"menu."})," O submenu referenciado por ",(0,s.jsx)(n.em,{children:"menuItem"})," continuar\xe1 existindo em mem\xf3ria. Deve utilizar o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/release-menu",title:"RELEASE MENU",children:"RELEASE MENU"})," para apagar definitivamente um menu que \xe9 administrado por refer\xeancia."]}),"\n",(0,s.jsxs)(n.p,{children:["Este comando tamb\xe9m funciona com uma barra de menus criada com o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/create-menu",title:"Create menu",children:"Create menu"})," e instalada com o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/set-menu-bar",title:"SET MENU BAR",children:"SET MENU BAR"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Se omite o par\xe2metro ",(0,s.jsx)(n.em,{children:"processo"}),", DELETE MENU ITEM \xe9 aplicado a barra de menus do processo atual. Do contrario, DELETE MENU ITEM \xe9 aplicado a barra de menus do processo atual cujo n\xfamero de referencia \xe9 passado em ",(0,s.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," se passa um ",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," em ",(0,s.jsx)(n.em,{children:"menu"}),", o par\xe2metro ",(0,s.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e ser\xe1 ignorado."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," por consist\xeancia na interface do usu\xe1rio, n\xe3o se conserva um menu que n\xe3o tenha linhas."]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/append-menu-item",children:"APPEND MENU ITEM"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/pt/20-R8/commands/insert-menu-item",children:"INSERT MENU ITEM"})]}),"\n",(0,s.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"413"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Proibido no servidor"}),(0,s.jsx)(n.td,{})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);