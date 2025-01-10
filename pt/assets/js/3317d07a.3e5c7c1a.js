"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["56620"],{953449:function(e,n,t){t.r(n),t.d(n,{default:()=>a,frontMatter:()=>i,metadata:()=>s,assets:()=>o,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/get-menu-item-style","title":"Get menu item style","description":"Get menu item style ( menu ; menuItem {; processo} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-style.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-style","permalink":"/docs/pt/commands/get-menu-item-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-style","title":"Get menu item style","slug":"/commands/get-menu-item-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MENU ITEM PROPERTY","permalink":"/docs/pt/commands/get-menu-item-property"},"next":{"title":"GET MENU ITEMS","permalink":"/docs/pt/commands/get-menu-items"}}'),r=t("785893"),d=t("250065");let i={id:"get-menu-item-style",title:"Get menu item style",slug:"/commands/get-menu-item-style",displayed_sidebar:"docs"},l=void 0,o={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function m(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get menu item style"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"menuItem"})," {; ",(0,r.jsx)(n.em,{children:"processo"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe2metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menuItem"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"processo"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de refer\xeancia de processo"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Estilo do item de menu atual"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,r.jsxs)(n.p,{children:["O comando Get menu item style devolve o estilo de fonte da linha de menu cujo n\xfamero ou refer\xeancia se passa em ",(0,r.jsx)(n.em,{children:"menu"})," e cujo n\xfamero de elemento \xe9 passado em ",(0,r.jsx)(n.em,{children:"menuItem"}),". Pode passar -1 em ",(0,r.jsx)(n.em,{children:"menuItem"})," para indicar o \xfaltimo elemento adicionado a ",(0,r.jsx)(n.em,{children:"menu."})]}),"\n",(0,r.jsxs)(n.p,{children:["Se omite o par\xe2metro processo, Get menu item style \xe9 aplicado \xe0 barra de menus do processo atual. Do contr\xe1rio, Get menu item style \xe9 aplicado \xe0 barra de menus do processo atual cujo n\xfamero de refer\xeancia \xe9 passada em ",(0,r.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," se passa um ",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," em ",(0,r.jsx)(n.em,{children:"menu"}),", o par\xe2metro ",(0,r.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e \xe9 ignorado."]}),"\n",(0,r.jsx)(n.p,{children:"Get menu item style devolve uma combina\xe7\xe3o (um ou uma soma) das seguintes constantes pr\xe9-definidas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Constante"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Valor"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Plain"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"0"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Bold"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"1"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Italic"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"2"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Underline"}),(0,r.jsx)(n.td,{children:"Inteiro longo"}),(0,r.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,r.jsx)(n.p,{children:"Para provar se um elemento de menu \xe9 mostrado em negrito, escreve:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0If((Get menu item style($vlMenu;$vlItem)\xa0&\xa0Bold)#0)\n\xa0\xa0//...\n\xa0End if\n"})}),"\n",(0,r.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-style",children:"SET MENU ITEM STYLE"})}),"\n",(0,r.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero do comando"}),(0,r.jsx)(n.td,{children:"426"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Thread-seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Proibido no servidor"}),(0,r.jsx)(n.td,{})]})]})]})]})}function a(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return i}});var s=t(667294);let r={},d=s.createContext(r);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);