"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58735"],{240910:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>r,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>m});var d=JSON.parse('{"id":"commands-legacy/get-menu-item-method","title":"Get menu item method","description":"Get menu item method ( menu ; menuItem {; processo} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-item-method.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-method","permalink":"/docs/pt/commands/get-menu-item-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-item-method","title":"Get menu item method","slug":"/commands/get-menu-item-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item mark","permalink":"/docs/pt/commands/get-menu-item-mark"},"next":{"title":"Get menu item modifiers","permalink":"/docs/pt/commands/get-menu-item-modifiers"}}'),o=t("785893"),s=t("250065");let r={id:"get-menu-item-method",title:"Get menu item method",slug:"/commands/get-menu-item-method",displayed_sidebar:"docs"},m=void 0,i={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Get menu item method"})," ( ",(0,o.jsx)(n.em,{children:"menu"})," ; ",(0,o.jsx)(n.em,{children:"menuItem"})," {; ",(0,o.jsx)(n.em,{children:"processo"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe2metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"menu"}),(0,o.jsx)(n.td,{children:"Integer, Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de refer\xeancia ou N\xfamero de Menu"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"menuItem"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado ao menu"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"processo"}),(0,o.jsx)(n.td,{children:"Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"N\xfamero de processo"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Nome do m\xe9todo"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(n.p,{children:["O comando Get menu item method devolve o nome do m\xe9todo de projeto 4D associado a linha de menu designada pelos par\xe2metros ",(0,o.jsx)(n.em,{children:"menu"})," e ",(0,o.jsx)(n.em,{children:"menuItem"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Pode passar -1 em ",(0,o.jsx)(n.em,{children:"menuItem"})," com o objetivo de especificar o \xfaltimo elemento adicionado ao ",(0,o.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Em ",(0,o.jsx)(n.em,{children:"menu"}),", pode passar uma refer\xeancia de menu (",(0,o.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") ou um n\xfamero de menu. Se passa uma referencia de menu, o par\xe2metro ",(0,o.jsx)(n.em,{children:"processo"})," n\xe3o \xe9 necess\xe1rio e se for passado ser\xe1 ignorado. Se passa um n\xfamero de menu, o comando tomar\xe1 o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu n\xfamero no par\xe2metro opcional ",(0,o.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,o.jsx)(n.p,{children:"O comando devolve o nome do m\xe9todo 4D como uma cadeia de caracteres (express\xe3o). Se nenhum m\xe9todo est\xe1 associado a linha de menu, o comando devolve uma cadeia vazia."}),"\n",(0,o.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"})}),"\n",(0,o.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero do comando"}),(0,o.jsx)(n.td,{children:"981"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Thread-seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return m},a:function(){return r}});var d=t(667294);let o={},s=d.createContext(o);function r(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);