"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8999"],{825616:function(e,n,s){s.r(n),s.d(n,{default:()=>l,frontMatter:()=>r,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>m});var t=JSON.parse('{"id":"commands-legacy/set-menu-item-method","title":"SET MENU ITEM METHOD","description":"SET MENU ITEM METHOD ( menu ; menuItem ; nomeMetodo {; processo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-menu-item-method.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-method","permalink":"/docs/pt/commands/set-menu-item-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-method.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-menu-item-method","title":"SET MENU ITEM METHOD","slug":"/commands/set-menu-item-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM MARK","permalink":"/docs/pt/commands/set-menu-item-mark"},"next":{"title":"SET MENU ITEM PARAMETER","permalink":"/docs/pt/commands/set-menu-item-parameter"}}'),d=s("785893"),o=s("250065");let r={id:"set-menu-item-method",title:"SET MENU ITEM METHOD",slug:"/commands/set-menu-item-method",displayed_sidebar:"docs"},m=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"SET MENU ITEM METHOD"})," ( ",(0,d.jsx)(n.em,{children:"menu"})," ; ",(0,d.jsx)(n.em,{children:"menuItem"})," ; ",(0,d.jsx)(n.em,{children:"nomeMetodo"})," {; ",(0,d.jsx)(n.em,{children:"processo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe2metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menu"}),(0,d.jsx)(n.td,{children:"Integer, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menuItem"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado ao menu"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"nomeMetodo"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nome do m\xe9todo"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"processo"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de processo"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,d.jsxs)(n.p,{children:["O comando SET MENU ITEM METHOD pode ser utilizada para modificar o m\xe9todo de projeto 4D associado \xe0 linha de menu designada pelos par\xe2metros ",(0,d.jsx)(n.em,{children:"menu"})," e ",(0,d.jsx)(n.em,{children:"menuItem"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Pode passar -1 em ",(0,d.jsx)(n.em,{children:"menuItem"})," para especificar a \xfaltima linha a adicionar a ",(0,d.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Em ",(0,d.jsx)(n.em,{children:"menu"}),", pode passar uma refer\xeancia de menu (",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") ou um n\xfamero de menu. Se passa uma refer\xeancia de menu, o comando se aplicar\xe1 a todas as inst\xe2ncias do menu em todos os processos Neste caso, se for passado, o par\xe2metro ",(0,d.jsx)(n.em,{children:"processo"})," \xe9 ignorado. Se passa um n\xfamero de menu, o comando \xe9 aplicado ao menu correspondente na barra de menus principal do processo atual. Se quer designar outro processo, passe seu n\xfamero no par\xe2metro opcional ",(0,d.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Em ",(0,d.jsx)(n.em,{children:"nomeMetodo"}),", passe o nome do m\xe9todo 4D como cadeia de caracteres (express\xe3o)."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," se a linha de menu corresponde ao t\xedtulo de um submenu hier\xe1rquico, o m\xe9todo n\xe3o ser\xe1 chamado quando a linha de menu seja selecionada."]}),"\n",(0,d.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Consulte o exemplo do comando ",(0,d.jsx)(n.a,{href:"/docs/pt/commands/set-menu-bar",title:"SET MENU BAR",children:"SET MENU BAR"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/pt/commands/get-menu-item-method",children:"Get menu item method"})}),"\n",(0,d.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero do comando"}),(0,d.jsx)(n.td,{children:"982"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Thread-seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return m},a:function(){return r}});var t=s(667294);let d={},o=t.createContext(d);function r(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function m(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);