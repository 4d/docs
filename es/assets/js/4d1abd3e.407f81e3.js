"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8366"],{459425:function(e,n,s){s.r(n),s.d(n,{metadata:()=>d,contentTitle:()=>a,default:()=>u,assets:()=>t,toc:()=>i,frontMatter:()=>c});var d=JSON.parse('{"id":"commands-legacy/menu-selected","title":"Menu selected","description":"Menu selected {( subMenu )} : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/menu-selected.md","sourceDirName":"commands-legacy","slug":"/commands/menu-selected","permalink":"/docs/es/commands/menu-selected","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fmenu-selected.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"menu-selected","title":"Menu selected","slug":"/commands/menu-selected","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"INSERT MENU ITEM","permalink":"/docs/es/commands/insert-menu-item"},"next":{"title":"RELEASE MENU","permalink":"/docs/es/commands/release-menu"}}'),r=s("785893"),l=s("250065");let c={id:"menu-selected",title:"Menu selected",slug:"/commands/menu-selected",displayed_sidebar:"docs"},a=void 0,t={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Menu selected"})," {( ",(0,r.jsx)(n.em,{children:"subMenu"})," )} : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"subMenu"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Referencia del men\xfa que contiene la l\xednea seleccionada"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Comando de men\xfa seleccionado Palabra superior: N\xfamero de men\xfa Palabra inferior: N\xfamero de comando de men\xfa"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(n.p,{children:"Menu selected se utiliza s\xf3lo cuando se muestran formularios. Esta funci\xf3n detecta el comando de men\xfa elegido en un men\xfa y en el caso de un submen\xfa jer\xe1rquico, devuelve la referencia del submen\xfa."}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Consejo:"})," siempre que sea posible, utilice m\xe9todos asociados con comandos de men\xfa en una barra asociada (con un n\xfamero de barra negativo) en lugar de utilizar Menu selected. Las barras de men\xfas asociadas son m\xe1s f\xe1ciles de administrar, ya que no es necesario probar su selecci\xf3n. Sin embargo, si utiliza los comandos ",(0,r.jsx)(n.a,{href:"/docs/es/commands/append-menu-item",title:"APPEND MENU ITEM",children:"APPEND MENU ITEM"})," o ",(0,r.jsx)(n.a,{href:"/docs/es/commands/insert-menu-item",title:"INSERT MENU ITEM",children:"INSERT MENU ITEM"}),", debe utilizar Menu selected porque las l\xedneas de men\xfas a\xf1adidas por estos comandos no tienen m\xe9todos asociados."]}),"\n",(0,r.jsxs)(n.p,{children:["El comando Menu selected puede utilizarse para trabajar con submen\xfas jer\xe1rquicos. Cuando se selecciona una l\xednea de un men\xfa jer\xe1rquico m\xe1s all\xe1 del primer nivel, el comando devuelve, en el par\xe1metro opcional submen\xfa, la referencia (tipo ",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),", cadena de 16 caracteres) del submen\xfa al cual pertenece la l\xednea seleccionada. Si el comando de men\xfa no contiene un submen\xfa jer\xe1rquico, este par\xe1metro recibe una cadena vac\xeda."]}),"\n",(0,r.jsx)(n.p,{children:"Menu selected devuelve el n\xfamero del men\xfa seleccionado, un entero largo. Para encontrar el n\xfamero de men\xfa, divida Menu selected por 65,536 y convierta el resultado en un entero. Para obtener el n\xfamero del comando de men\xfa, calcule el m\xf3dulo de Menu selected con el coeficiente 65,536. Utilice las siguientes f\xf3rmulas para calcular el n\xfamero de men\xfa y del comando de men\xfa:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Menu:=Menu selected\\ 65536\n\xa0comando de menu:=Menu selected% 65536\n"})}),"\n",(0,r.jsx)(n.p,{children:"Igualmente puede extraer estos valores utilizando los Operadores bitwise como en el siguiente ejemplo:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Menu:=(Menu selected\xa0&\xa00xFFFF0000)>>16\n\xa0comando de menu:=Menu selected\xa0&\xa00xFFFF\n"})}),"\n",(0,r.jsx)(n.p,{children:"Si ning\xfan comando de men\xfa est\xe1 seleccionado, Menu selected devuelve 0."}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsxs)(n.p,{children:["El siguiente m\xe9todo de formulario utiliza Menu selected para proporcionar los argumentos men\xfa y l\xednea de men\xfa a ",(0,r.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-mark",title:"SET MENU ITEM MARK",children:"SET MENU ITEM MARK"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(FORM Event=On Menu Selected)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0C_STRING(16;$MenuRefIncludingItem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0var $ref;$MenuNum;$MenuItemNum : Integer\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$ref:=Menu selected($MenuRefIncludingItem)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MenuNum:=$ref\\65536\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$MenuItemNum:=$ref%65536\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET MENU ITEM MARK(MenuRefIncludingItem;$MenuItemNum;Char(18))\n\xa0End case\n"})}),"\n",(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Nota:"})," el evento de formulario On Menu Selected no es activado si ninguna l\xednea est\xe1 seleccionada, ",(0,r.jsx)(n.em,{children:"$MenuRefIncludingItem"})," siempre es dado y ",(0,r.jsx)(n.em,{children:"$MenuNum"})," vale 0 si el men\xfa no es uno de los men\xfas de la barra."]}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.em,{children:"Gesti\xf3n de men\xfas"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"152"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,r.jsx)(n.td,{})]})]})]})]})}function u(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return c}});var d=s(667294);let r={},l=d.createContext(r);function c(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);