"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98487"],{47206:function(e,n,s){s.r(n),s.d(n,{default:()=>l,frontMatter:()=>o,metadata:()=>r,assets:()=>c,toc:()=>a,contentTitle:()=>i});var r=JSON.parse('{"id":"commands-legacy/set-menu-item","title":"SET MENU ITEM","description":"SET MENU ITEM ( menu ; menuItem ; textoElem {; processo}{; *} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item","permalink":"/docs/pt/20-R7/commands/set-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-item","title":"SET MENU ITEM","slug":"/commands/set-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU BAR","permalink":"/docs/pt/20-R7/commands/set-menu-bar"},"next":{"title":"SET MENU ITEM ICON","permalink":"/docs/pt/20-R7/commands/set-menu-item-icon"}}'),t=s("785893"),d=s("250065");let o={id:"set-menu-item",title:"SET MENU ITEM",slug:"/commands/set-menu-item",displayed_sidebar:"docs"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function m(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET MENU ITEM"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"menuItem"})," ; ",(0,t.jsx)(n.em,{children:"textoElem"})," {; ",(0,t.jsx)(n.em,{children:"processo"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menuItem"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de item menu ou  -1 para o \xfaltimo item adicionado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"textoElem"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Novo texto para o item de menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"processo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de refer\xeancia do processo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Se passado: considerar metacaracteres como caracteres comuns"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando SET MENU ITEM modifica o texto da linha de menu cujo n\xfamero ou referencia de menu se passa em ",(0,t.jsx)(n.em,{children:"menu"})," e cujo n\xfamero de elemento se passa em ",(0,t.jsx)(n.em,{children:"menuItem"}),", para o texto que passou em ",(0,t.jsx)(n.em,{children:"itemText"}),". Pode passar -1 em ",(0,t.jsx)(n.em,{children:"menuItem"})," para designar o \xfaltimo elemento adicionado a ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Se no passa o par\xe2metro ",(0,t.jsx)(n.em,{children:"*"}),', os caracteres "especiais" inclu\xeddos em ',(0,t.jsx)(n.em,{children:"itemText"})," (tais como ",(0,t.jsx)(n.em,{children:"( ; o !)"})," ser\xe3o considerados como caracteres de instru\xe7\xe3o (meta caracteres). Por exemplo, para definir um elemento de menu como uma linha de separa\xe7\xe3o, insere o caractere \u201C-\u201D em ",(0,t.jsx)(n.em,{children:"itemText"}),". Se passa o par\xe2metro ",(0,t.jsx)(n.em,{children:"*"}),', os caracteres "especiais" s\xe3o considerados como caracteres padr\xe3o. Por favor consulte a descri\xe7\xe3o do comando ',(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/append-menu-item",title:"APPEND MENU ITEM",children:"APPEND MENU ITEM"})," para mais informa\xe7\xe3o sobre os detalhes destes caracteres."]}),"\n",(0,t.jsxs)(n.p,{children:["Se omitir o par\xe2metro ",(0,t.jsx)(n.em,{children:"processo"}),", SET MENU ITEM \xe9 aplicada \xe0 barra de menus do processo atual. Do contr\xe1rio, SET MENU ITEM \xe9 aplicado \xe0 barra de menus do processo atual cujo n\xfamero de refer\xeancia \xe9 passada em ",(0,t.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," se passa um ",(0,t.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," em ",(0,t.jsx)(n.em,{children:"menu"}),", o par\xe2metro ",(0,t.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e ser\xe1 ignorado."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/append-menu-item",children:"APPEND MENU ITEM"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-menu-item",children:"Get menu item"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})]}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"348"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Proibido no servidor"}),(0,t.jsx)(n.td,{})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var r=s(667294);let t={},d=r.createContext(t);function o(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);