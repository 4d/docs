"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["22209"],{390661:function(e,n,s){s.r(n),s.d(n,{default:()=>l,frontMatter:()=>o,metadata:()=>t,assets:()=>m,toc:()=>a,contentTitle:()=>r});var t=JSON.parse('{"id":"commands-legacy/get-menu-item-modifiers","title":"Get menu item modifiers","description":"Get menu item modifiers ( menu ; menuItem {; processo} ) : Integer","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-modifiers.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-modifiers","permalink":"/docs/pt/20-R7/commands/get-menu-item-modifiers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-modifiers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-modifiers","title":"Get menu item modifiers","slug":"/commands/get-menu-item-modifiers","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item method","permalink":"/docs/pt/20-R7/commands/get-menu-item-method"},"next":{"title":"Get menu item parameter","permalink":"/docs/pt/20-R7/commands/get-menu-item-parameter"}}'),d=s("785893"),i=s("250065");let o={id:"get-menu-item-modifiers",title:"Get menu item modifiers",slug:"/commands/get-menu-item-modifiers",displayed_sidebar:"docs"},r=void 0,m={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Get menu item modifiers"})," ( ",(0,d.jsx)(n.em,{children:"menu"})," ; ",(0,d.jsx)(n.em,{children:"menuItem"})," {; ",(0,d.jsx)(n.em,{children:"processo"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menu"}),(0,d.jsx)(n.td,{children:"Integer, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de refer\xeancia ou N\xfamero de Menu"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menuItem"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado ao menu"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"processo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de processo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Chave de modifica\xe7\xe3o associada com o item de menu"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando Get menu item modifiers devolve os modificadores adicionais associados aos atalhos de teclado padr\xe3o da linha de menu designada pelos par\xe2metros ",(0,d.jsx)(n.em,{children:"menu"})," e ",(0,d.jsx)(n.em,{children:"menuItem"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["O atalho padr\xe3o est\xe1 composto pela tecla ",(0,d.jsx)(n.strong,{children:"Comando"})," (Mac OS) ou ",(0,d.jsx)(n.strong,{children:"Ctrl"})," (Windows) e de uma tecla personalizada. O atalho padr\xe3o \xe9 administrado utilizando os comandos ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-shortcut",title:"SET MENU ITEM SHORTCUT",children:"SET MENU ITEM SHORTCUT"})," e ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-menu-item-key",title:"Get menu item key",children:"Get menu item key"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Os modificadores adicionais s\xe3o a tecla ",(0,d.jsx)(n.strong,{children:"Shift"})," e a tecla Op\xe7\xe3o (Mac OS) /Alt (Windows). Estes modificadores s\xf3 podem ser utilizados quando um atalho padr\xe3o foi definido antecipadamente."]}),"\n",(0,d.jsx)(n.p,{children:"O valor do n\xfamero devolvido pelo comando corresponde ao c\xf3digo das teclas de modifica\xe7\xe3o adicionais. Os c\xf3digos das teclas s\xe3o os seguintes:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Shift"})," = 512"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Op\xe7\xe3o"})," (Mac OS) ou ",(0,d.jsx)(n.strong,{children:"Alt"})," (Windows) = 2048"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Se s\xe3o utilizadas ambas teclas, seus valores s\xe3o combinadas."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," pode avaliar o valor devolvido utilizando as constantes Shift key mask e Option key mask do tema \u201C",(0,d.jsx)(n.em,{children:"Eventos (Modificadores)"}),"\u201D."]}),"\n",(0,d.jsx)(n.p,{children:"Se a linha de menu n\xe3o tem uma tecla de modifica\xe7\xe3o associada, o comando devolve 0."}),"\n",(0,d.jsxs)(n.p,{children:["Pode passar -1 em ",(0,d.jsx)(n.em,{children:"menuItem"})," com o fim de especificar o \xfaltimo elemento adicionado a ",(0,d.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Em ",(0,d.jsx)(n.em,{children:"menu"}),", pode passar uma refer\xeancia de menu (",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") ou um n\xfamero."]}),"\n",(0,d.jsxs)(n.p,{children:["Se passa uma refer\xeancia de menu, o par\xe2metro ",(0,d.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e ser\xe1 ignorado se for passado."]}),"\n",(0,d.jsxs)(n.p,{children:["Se passa um n\xfamero de menu, o comando tomar\xe1 o menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu n\xfamero no par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Consulte o exemplo do comando ",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-menu-item-key",title:"Get menu item key",children:"Get menu item key"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/get-menu-item-key",children:"Get menu item key"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/pt/20-R7/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})]}),"\n",(0,d.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"980"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return o}});var t=s(667294);let d={},i=t.createContext(d);function o(e){let n=t.useContext(i);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:o(e.components),t.createElement(i.Provider,{value:n},e.children)}}}]);