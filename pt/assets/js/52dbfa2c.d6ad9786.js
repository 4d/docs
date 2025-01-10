"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["52648"],{285919:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>t,assets:()=>o,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"commands-legacy/get-menu-items","title":"GET MENU ITEMS","description":"GET MENU ITEMS ( menu ; arrayTitMenus ; arrayRefMenus )","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-items.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-items","permalink":"/docs/pt/commands/get-menu-items","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-items.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-items","title":"GET MENU ITEMS","slug":"/commands/get-menu-items","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item style","permalink":"/docs/pt/commands/get-menu-item-style"},"next":{"title":"Get menu title","permalink":"/docs/pt/commands/get-menu-title"}}'),s=r("785893"),d=r("250065");let a={id:"get-menu-items",title:"GET MENU ITEMS",slug:"/commands/get-menu-items",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Propriedades",id:"propriedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET MENU ITEMS"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"arrayTitMenus"})," ; ",(0,s.jsx)(n.em,{children:"arrayRefMenus"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrayTitMenus"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Array de t\xedtulos de menu"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"arrayRefMenus"}),(0,s.jsx)(n.td,{children:"Text array"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Array de refer\xeancias de menu"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando GET MENU ITEMS devolve, nos arrays ",(0,s.jsx)(n.em,{children:"arrayTitMenus"})," e ",(0,s.jsx)(n.em,{children:"arraysRefMenus"}),", os t\xedtulos e identificadores de todas as linhas de menu ou da barra de menus designada pelo par\xe2metro ",(0,s.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["No par\xe2metro ",(0,s.jsx)(n.em,{children:"menu"}),", pode passar uma refer\xeancia de menu (MenuRef), um n\xfamero de barra de menus ou uma refer\xeancia de barra de menu obtida utilizando o comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/get-menu-bar-reference",title:"Get menu bar reference",children:"Get menu bar reference"}),"."]}),"\n",(0,s.jsx)(n.p,{children:"Se nenhuma refer\xeancia de menu est\xe1 associada a um elemento, uma string vazia \xe9 retornada no elemento de array correspondente."}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"Imagine que queira conhecer o conte\xfado da barra de menu do processo atual:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY STRING(32;arrayTitMenus;0)\n\xa0ARRAY STRING(16;arraysRefMenus;0)\n\xa0RefBarMenu:=Get menu bar reference(Frontmost process)\n\xa0GET MENU ITEMS(RefBarMenu;arrayTitMenus;arraysRefMenus)\n"})}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"977"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var t=r(667294);let s={},d=t.createContext(s);function a(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);