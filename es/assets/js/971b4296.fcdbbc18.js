"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89371"],{455548:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>r,assets:()=>o,toc:()=>a,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/get-menu-item-key","title":"Get menu item key","description":"Get menu item key ( menu ; lineamenu {; proceso} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-item-key.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-key","permalink":"/docs/es/commands/get-menu-item-key","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-key.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-item-key","title":"Get menu item key","slug":"/commands/get-menu-item-key","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MENU ITEM ICON","permalink":"/docs/es/commands/get-menu-item-icon"},"next":{"title":"Get menu item mark","permalink":"/docs/es/commands/get-menu-item-mark"}}'),s=t("785893"),d=t("250065");let i={id:"get-menu-item-key",title:"Get menu item key",slug:"/commands/get-menu-item-key",displayed_sidebar:"docs"},c=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function m(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get menu item key"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"lineamenu"})," {; ",(0,s.jsx)(n.em,{children:"proceso"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de men\xfa o Referencia de men\xfa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lineamenu"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 por el \xfaltimo elemento a\xf1adido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"proceso"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia de proceso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"C\xf3digo de caracter de la tecla de atajo est\xe1ndar asociada a la l\xednea de men\xfa"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando Get menu item key devuelve el c\xf3digo del atajo ",(0,s.jsx)(n.strong,{children:"Ctrl"})," (Windows) o ",(0,s.jsx)(n.strong,{children:"Comando"})," (Mac OS) para el comando de men\xfa cuyo n\xfamero o referencia de men\xfa se pasa en ",(0,s.jsx)(n.em,{children:"menu"})," y cuyo n\xfamero de comando se pasa en ",(0,s.jsx)(n.em,{children:"menuItem"}),". Puede pasar -1 en ",(0,s.jsx)(n.em,{children:"menuItem"})," para indicar el \xfaltimo elemento a\xf1adido a ",(0,s.jsx)(n.em,{children:"menu."})]}),"\n",(0,s.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,s.jsx)(n.em,{children:"proceso"}),", Get menu item key se aplica a la barra de men\xfas del proceso actual. De lo contrario, Get menu item key se aplica a la barra de men\xfas del proceso actual cuyo n\xfamero de referencia se pasa en ",(0,s.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si pasa un ",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," en ",(0,s.jsx)(n.em,{children:"menu"}),", el par\xe1metro ",(0,s.jsx)(n.em,{children:"proceso"})," es in\xfatil y se ignorar\xe1."]}),"\n",(0,s.jsxs)(n.p,{children:["Si el comando de men\xfa no tiene ning\xfan atajo asociado o si el par\xe1metro ",(0,s.jsx)(n.em,{children:"menuItem"})," designa un submen\xfa jer\xe1rquico, Get menu item key devuelve ",(0,s.jsx)(n.em,{children:"0"})," (cero)."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Para obtener un atajo asociado con un comando de men\xfa, es \xfatil implementar una estructura de programaci\xf3n del siguiente tipo:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If(Get menu item key(mimenu;1)#0)\n\xa0\xa0\xa0\xa0$modificadores:=Get menu item modifiers(mymenu;1)\n\xa0\xa0\xa0\xa0Case of\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($modificadores=Option key mask)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($modificadores=Shift key mask)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0:($modificadores=Option key mask+Shift key mask)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0...\n\xa0\xa0\xa0\xa0End case\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/get-menu-item-key",children:"Get menu item key"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"424"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,s.jsx)(n.td,{})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return c},a:function(){return i}});var r=t(667294);let s={},d=r.createContext(s);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);