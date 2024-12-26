"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["12767"],{455836:function(e,n,s){s.r(n),s.d(n,{metadata:()=>i,contentTitle:()=>o,default:()=>m,assets:()=>l,toc:()=>a,frontMatter:()=>r});var i=JSON.parse('{"id":"commands-legacy/get-menu-item-modifiers","title":"Get menu item modifiers","description":"Get menu item modifiers ( menu ; lineaMenu {; proceso} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-modifiers.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-modifiers","permalink":"/docs/es/commands/get-menu-item-modifiers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-modifiers.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-menu-item-modifiers","title":"Get menu item modifiers","slug":"/commands/get-menu-item-modifiers","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item method","permalink":"/docs/es/commands/get-menu-item-method"},"next":{"title":"Get menu item parameter","permalink":"/docs/es/commands/get-menu-item-parameter"}}'),d=s("785893"),t=s("250065");let r={id:"get-menu-item-modifiers",title:"Get menu item modifiers",slug:"/commands/get-menu-item-modifiers",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Get menu item modifiers"})," ( ",(0,d.jsx)(n.em,{children:"menu"})," ; ",(0,d.jsx)(n.em,{children:"lineaMenu"})," {; ",(0,d.jsx)(n.em,{children:"proceso"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menu"}),(0,d.jsx)(n.td,{children:"Integer, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Referencia de men\xfa o n\xfamero de men\xfa"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lineaMenu"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 para el \xfaltimo elemento a\xf1adido al men\xfa"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"proceso"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de proceso"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Tecla(s) de modificaci\xf3n asociada(s) a la l\xednea de men\xfa"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando Get menu item modifiers devuelve los modificadores adicionales asociados a los atajos de teclado est\xe1ndar de la l\xednea de men\xfa designada por los par\xe1metros ",(0,d.jsx)(n.em,{children:"menu"})," y ",(0,d.jsx)(n.em,{children:"lineaMenu"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["El atajo est\xe1ndar est\xe1 compuesto por la tecla ",(0,d.jsx)(n.strong,{children:"Comando"})," (Mac OS) o ",(0,d.jsx)(n.strong,{children:"Ctrl"})," (Windows) y de una tecla personalizada. El atajo est\xe1ndar se administra utilizando los comandos ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-shortcut",title:"SET MENU ITEM SHORTCUT",children:"SET MENU ITEM SHORTCUT"})," y ",(0,d.jsx)(n.a,{href:"/docs/es/commands/get-menu-item-key",title:"Get menu item key",children:"Get menu item key"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Los modificadores adicionales son la tecla ",(0,d.jsx)(n.strong,{children:"May\xfas"}),"  y la tecla Opci\xf3n (Mac OS) /Alt (Windows). Estos modificadores s\xf3lo pueden utilizarse cuando un atajo est\xe1ndar ha sido definido de antemano."]}),"\n",(0,d.jsx)(n.p,{children:"El valor del n\xfamero devuelto por el comando corresponde al c\xf3digo de las teclas de modificaci\xf3n adicionales. Los c\xf3digos de las teclas son los siguientes:"}),"\n",(0,d.jsxs)(n.ul,{children:["\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"May\xfas"})," = 512"]}),"\n",(0,d.jsxs)(n.li,{children:[(0,d.jsx)(n.strong,{children:"Opci\xf3n"})," (Mac OS) o ",(0,d.jsx)(n.strong,{children:"Alt"})," (Windows) = 2048"]}),"\n"]}),"\n",(0,d.jsx)(n.p,{children:"Si se utilizan ambas teclas, sus valores se combinan."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," puede evaluar el valor devuelto utilizando las constantes Shift key mask  y Option key mask del tema \u201C\u201D."]}),"\n",(0,d.jsx)(n.p,{children:"Si la l\xednea de men\xfa no tiene una tecla de modificaci\xf3n asociada, el comando devuelve 0."}),"\n",(0,d.jsxs)(n.p,{children:["Puede pasar -1 en ",(0,d.jsx)(n.em,{children:"lineaMenu"})," con el fin de especificar el \xfaltimo elemento a\xf1adido a ",(0,d.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["En ",(0,d.jsx)(n.em,{children:"menu"}),", puede pasar una referencia de men\xfa (",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") o un n\xfamero."]}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa una referencia de men\xfa, el par\xe1metro ",(0,d.jsx)(n.em,{children:"proceso"})," es in\xfatil y ser\xe1 ignorado si se pasa."]}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa un n\xfamero de men\xfa, el comando tomar\xe1 el men\xfa correspondiente en la barra de men\xfas principal del proceso actual. Si quiere designar otro proceso, pase su n\xfamero en el par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/get-menu-item-key",title:"Get menu item key",children:"Get menu item key"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.a,{href:"/docs/es/commands/get-menu-item-key",children:"Get menu item key"}),(0,d.jsx)(n.br,{}),"\n",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})]}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"980"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return r}});var i=s(667294);let d={},t=i.createContext(d);function r(e){let n=i.useContext(t);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:r(e.components),i.createElement(t.Provider,{value:n},e.children)}}}]);