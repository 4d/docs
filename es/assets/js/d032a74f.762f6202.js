"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["92114"],{810239:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>i,metadata:()=>t,assets:()=>m,toc:()=>c,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/get-menu-item-mark","title":"Get menu item mark","description":"Get menu item mark ( menu ; lineamenu {; proceso} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-item-mark.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-mark","permalink":"/docs/es/20-R8/commands/get-menu-item-mark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-mark.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-item-mark","title":"Get menu item mark","slug":"/commands/get-menu-item-mark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item key","permalink":"/docs/es/20-R8/commands/get-menu-item-key"},"next":{"title":"Get menu item method","permalink":"/docs/es/20-R8/commands/get-menu-item-method"}}'),s=r("785893"),d=r("250065");let i={id:"get-menu-item-mark",title:"Get menu item mark",slug:"/commands/get-menu-item-mark",displayed_sidebar:"docs"},a=void 0,m={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get menu item mark"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"lineamenu"})," {; ",(0,s.jsx)(n.em,{children:"proceso"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de men\xfa o Referencia de men\xfa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lineamenu"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 por el \xfaltimo elemento a\xf1adido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"proceso"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia de proceso"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Marca de l\xednea del men\xfa actual"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando Get menu item mark devuelve la marca de la l\xednea de men\xfa cuyo n\xfamero o referencia de men\xfa y n\xfamero de l\xednea se pasan en ",(0,s.jsx)(n.em,{children:"menu"})," y ",(0,s.jsx)(n.em,{children:"menuItem"}),". Puede pasar -1 en ",(0,s.jsx)(n.em,{children:"menuItem"})," para indicar el \xfaltimo elemento a\xf1adido a ",(0,s.jsx)(n.em,{children:"menu."})]}),"\n",(0,s.jsxs)(n.p,{children:["Si omite el par\xe1metro proceso, Get menu item mark se aplica a la barra de men\xfas del proceso actual. De lo contrario, Get menu item mark se aplica a la barra de men\xfas del proceso actual cuyo n\xfamero de referencia se pasa en ",(0,s.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si pasa un ",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," en ",(0,s.jsx)(n.em,{children:"menu"}),", el par\xe1metro ",(0,s.jsx)(n.em,{children:"proceso"})," es in\xfatil y ser\xe1 ignorado."]}),"\n",(0,s.jsxs)(n.p,{children:["Si la l\xednea de men\xfa no tiene marca o si el par\xe1metro ",(0,s.jsx)(n.em,{children:"menuItem"})," especifica un submen\xfa jer\xe1rquico, Get menu item mark devuelve una cadena vac\xeda."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," para mayor informaci\xf3n sobre las marcas de las l\xedneas de men\xfas en Macintosh y Windows, consulte la descripci\xf3n del comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-menu-item-mark",title:"SET MENU ITEM MARK",children:"SET MENU ITEM MARK"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"El siguiente ejemplo invierte la marca de una l\xednea de men\xfa:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0SET MENU ITEM MARK($vlMenu;$vlItem;Char(18)*Num(Character code(Get menu item mark($vlMenu;$vlItem))#18))\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-menu-item-mark",children:"SET MENU ITEM MARK"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"428"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,s.jsx)(n.td,{})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return i}});var t=r(667294);let s={},d=t.createContext(s);function i(e){let n=t.useContext(d);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(d.Provider,{value:n},e.children)}}}]);