"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["88345"],{253767:function(e,n,r){r.r(n),r.d(n,{default:()=>l,frontMatter:()=>a,metadata:()=>s,assets:()=>m,toc:()=>o,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/set-menu-item-mark","title":"SET MENU ITEM MARK","description":"SET MENU ITEM MARK ( menu ; menuItem ; marcar {; processo} )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-menu-item-mark.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-mark","permalink":"/docs/pt/commands/set-menu-item-mark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-mark.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-menu-item-mark","title":"SET MENU ITEM MARK","slug":"/commands/set-menu-item-mark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM ICON","permalink":"/docs/pt/commands/set-menu-item-icon"},"next":{"title":"SET MENU ITEM METHOD","permalink":"/docs/pt/commands/set-menu-item-method"}}'),t=r("785893"),d=r("250065");let a={id:"set-menu-item-mark",title:"SET MENU ITEM MARK",slug:"/commands/set-menu-item-mark",displayed_sidebar:"docs"},i=void 0,m={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Exemplo",id:"exemplo",level:2},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:2},{value:"Propriedades",id:"propriedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET MENU ITEM MARK"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"menuItem"})," ; ",(0,t.jsx)(n.em,{children:"marcar"})," {; ",(0,t.jsx)(n.em,{children:"processo"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe2metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menuItem"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de Item ou -1 para o \xfaltimo item adicionado"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"marcar"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Marcar item Novo menu"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"processo"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de refer\xeancia de processo"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O comando SET MENU ITEM MARK modifica a marca do elemento de menu cujo n\xfamero ou refer\xeancia de menu \xe9 passado em ",(0,t.jsx)(n.em,{children:"menu"})," e cujo n\xfamero de linha se passa em ",(0,t.jsx)(n.em,{children:"menuItem"})," ao primeiro caractere da cadeia passada em ",(0,t.jsx)(n.em,{children:"marcar"}),". Pode passar -1 em ",(0,t.jsx)(n.em,{children:"menuItem"})," para designar a \xfaltima linha adicionada ao menu."]}),"\n",(0,t.jsxs)(n.p,{children:["Se omitir o par\xe2metro ",(0,t.jsx)(n.em,{children:"processo"}),", SET MENU ITEM MARK \xe9 aplicada \xe0 barra de menus do processo atual. Do contr\xe1rio, SET MENU ITEM MARK \xe9 aplicado a barra de menus do processo atual cujo n\xfamero de refer\xeancia se passa em ",(0,t.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota"}),": se passa um par\xe2metro MenuRef em menu, ou par\xe2metro processo \xe9 in\xfatil e ser\xe1 ignorado"]}),"\n",(0,t.jsx)(n.p,{children:"Se passa uma cadeia vazia, toda marca da linha de menu \xe9 eliminada. Do contr\xe1rio:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Em Macintosh, o primeiro caractere da cadeia \xe9 convertido na marca da linha de menu. Geralmente, passar\xe1 Char (18), o qual \xe9 o caractere de marca para os menus Macintosh."}),"\n",(0,t.jsx)(n.li,{children:"Em Windows, a marca autom\xe1tica de Window \xe9 associada ao menu"}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Ver exemplo para o comando ",(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-menu-item-mark",title:"Get menu item mark",children:"Get menu item mark"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/commands/get-menu-item-mark",children:"Get menu item mark"})}),"\n",(0,t.jsx)(n.h2,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero do comando"}),(0,t.jsx)(n.td,{children:"208"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thread-seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Proibido no servidor"}),(0,t.jsx)(n.td,{})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var s=r(667294);let t={},d=s.createContext(t);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);