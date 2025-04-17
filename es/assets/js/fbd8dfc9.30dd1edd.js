"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["72607"],{635812:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>a});var s=JSON.parse('{"id":"commands-legacy/get-menu-items","title":"GET MENU ITEMS","description":"GET MENU ITEMS ( menu ; arrayTitMenus ; arraysRefMenus )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-menu-items.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-items","permalink":"/docs/es/commands/get-menu-items","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-items.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-menu-items","title":"GET MENU ITEMS","slug":"/commands/get-menu-items","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item style","permalink":"/docs/es/commands/get-menu-item-style"},"next":{"title":"Get menu title","permalink":"/docs/es/commands/get-menu-title"}}'),t=r("785893"),d=r("250065");let i={id:"get-menu-items",title:"GET MENU ITEMS",slug:"/commands/get-menu-items",displayed_sidebar:"docs"},a=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET MENU ITEMS"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"arrayTitMenus"})," ; ",(0,t.jsx)(n.em,{children:"arraysRefMenus"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia de men\xfa o n\xfamero de men\xfa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arrayTitMenus"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array de t\xedtulos de men\xfa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"arraysRefMenus"}),(0,t.jsx)(n.td,{children:"Text array"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Array de referencias de men\xfa"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando GET MENU ITEMS devuelve, en los arrays ",(0,t.jsx)(n.em,{children:"arrayTitMenus"})," y ",(0,t.jsx)(n.em,{children:"arraysRefMenus"}),", los t\xedtulos e identificadores de todas las l\xedneas de men\xfa o de la barra de men\xfas designada por el par\xe1metro ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"menu"}),", puede pasar una referencia de men\xfa (MenuRef), un n\xfamero de barra de men\xfas o una referencia de barra de men\xfa obtenida utilizando el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/get-menu-bar-reference",title:"Get menu bar reference",children:"Get menu bar reference"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Si ninguna referencia de men\xfa est\xe1 asociada a un elemento, una cadena vac\xeda se devuelve en el elemento de array correspondiente."}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Usted quiere conocer el contenido de la barra de men\xfa del proceso actual:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:"\xa0ARRAY STRING(32;arrayTitMenus;0)\n\xa0ARRAY STRING(16;arraysRefMenus;0)\n\xa0RefBarMenu:=Get menu bar reference(Frontmost process)\n\xa0GET MENU ITEMS(RefBarMenu;arrayTitMenus;arraysRefMenus)\n"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"977"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var s=r(667294);let t={},d=s.createContext(t);function i(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);