"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["74359"],{7438:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>l,assets:()=>a,toc:()=>o,frontMatter:()=>m});var t=JSON.parse('{"id":"commands-legacy/get-menu-item-mark","title":"Get menu item mark","description":"Get menu item mark ( menu ; menuItem {; processo} ) : Text","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-mark.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-mark","permalink":"/docs/pt/commands/get-menu-item-mark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-mark.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-mark","title":"Get menu item mark","slug":"/commands/get-menu-item-mark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item key","permalink":"/docs/pt/commands/get-menu-item-key"},"next":{"title":"Get menu item method","permalink":"/docs/pt/commands/get-menu-item-method"}}'),s=r("785893"),d=r("250065");let m={id:"get-menu-item-mark",title:"Get menu item mark",slug:"/commands/get-menu-item-mark",displayed_sidebar:"docs"},i=void 0,a={},o=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:4},{value:"Exemplo",id:"exemplo",level:4},{value:"Ver tamb\xe9m",id:"ver-tamb\xe9m",level:4},{value:"Propriedades",id:"propriedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get menu item mark"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"menuItem"})," {; ",(0,s.jsx)(n.em,{children:"processo"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe2metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de menu ou menu de refer\xeancia"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menuItem"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de item de menu ou -1 para o \xfaltimo item adicionado"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"processo"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de refer\xeancia de processo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Item de menu atual marcado"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(n.p,{children:["O comando Get menu item mark devolve a marca da linha de menu cujo n\xfamero ou refer\xeancia de menu e n\xfamero de linha se passam em ",(0,s.jsx)(n.em,{children:"menu"})," e ",(0,s.jsx)(n.em,{children:"menuItem"}),". Pode passar -1 em ",(0,s.jsx)(n.em,{children:"menuItem"})," para indicar o \xfaltimo elemento adicionado a ",(0,s.jsx)(n.em,{children:"menu."})]}),"\n",(0,s.jsxs)(n.p,{children:["Se omite o par\xe2metro processo, Get menu item mark \xe9 aplicado a barra de menus do processo atual. Do contrario, Get menu item mark \xe9 aplicado a barra de menus do processo atual cujo n\xfamero de referencia se passa em ",(0,s.jsx)(n.em,{children:"processo"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," se passa um ",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," em ",(0,s.jsx)(n.em,{children:"menu"}),", o par\xe2metro ",(0,s.jsx)(n.em,{children:"processo"})," \xe9 in\xfatil e ser\xe1 ignorado."]}),"\n",(0,s.jsxs)(n.p,{children:["Se a linha de menu n\xe3o tem marca ou se o par\xe2metro ",(0,s.jsx)(n.em,{children:"menuItem"})," especifica um submenu hier\xe1rquico, Get menu item mark devolve uma cadeia vazia."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," para maior informa\xe7\xe3o sobre as marcas das linhas de menus em Macintosh e Windows, consulte a descri\xe7\xe3o do comando ",(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-mark",title:"SET MENU ITEM MARK",children:"SET MENU ITEM MARK"}),"."]}),"\n",(0,s.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,s.jsx)(n.p,{children:"O exemplo a seguir exemplo inverte a marca de uma linha de menu:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET MENU ITEM MARK($vlMenu;$vlItem;Char(18)*Num(Character code(Get menu item mark($vlMenu;$vlItem))#18))\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tamb\xe9m",children:"Ver tamb\xe9m"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/pt/commands/set-menu-item-mark",children:"SET MENU ITEM MARK"})}),"\n",(0,s.jsx)(n.h4,{id:"propriedades",children:"Propriedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero do comando"}),(0,s.jsx)(n.td,{children:"428"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Thread-seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Proibido no servidor"}),(0,s.jsx)(n.td,{})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return m}});var t=r(667294);let s={},d=t.createContext(s);function m(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:m(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);