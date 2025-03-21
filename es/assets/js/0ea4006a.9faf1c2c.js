"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34237"],{547368:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>d,assets:()=>a,toc:()=>l,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/set-menu-item-method","title":"SET MENU ITEM METHOD","description":"SET MENU ITEM METHOD ( menu ; lineaMenu ; nomMetodo {; proceso} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-menu-item-method.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-method","permalink":"/docs/es/commands/set-menu-item-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-menu-item-method","title":"SET MENU ITEM METHOD","slug":"/commands/set-menu-item-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM MARK","permalink":"/docs/es/commands/set-menu-item-mark"},"next":{"title":"SET MENU ITEM PARAMETER","permalink":"/docs/es/commands/set-menu-item-parameter"}}'),t=s("785893"),r=s("250065");let i={id:"set-menu-item-method",title:"SET MENU ITEM METHOD",slug:"/commands/set-menu-item-method",displayed_sidebar:"docs"},o=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET MENU ITEM METHOD"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"lineaMenu"})," ; ",(0,t.jsx)(n.em,{children:"nomMetodo"})," {; ",(0,t.jsx)(n.em,{children:"proceso"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia de men\xfa o n\xfamero de men\xfa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lineaMenu"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 para el \xfaltimo elemento a\xf1adido al men\xfa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"nomMetodo"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre del m\xe9todo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"proceso"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de proceso"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando SET MENU ITEM METHOD puede utilizarse para modificar el m\xe9todo de proyecto 4D asociado a la l\xednea de men\xfa designada por los par\xe1metros ",(0,t.jsx)(n.em,{children:"menu"})," y ",(0,t.jsx)(n.em,{children:"lineaMenu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Puede pasar -1 en ",(0,t.jsx)(n.em,{children:"lineaMenu"})," para especificar la \xfaltima l\xednea a a\xf1adida a ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"menu"}),", puede pasar una referencia de men\xfa (",(0,t.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") o un n\xfamero de men\xfa. Si pasa una referencia de men\xfa, el comando se aplicar\xe1 a todas las instancias del men\xfa en todos los procesos En este caso, si se pasa el par\xe1metro ",(0,t.jsx)(n.em,{children:"proceso"})," se ignora. Si pasa un n\xfamero de men\xfa, el comando se aplicar\xe1 al men\xfa correspondiente en la barra de men\xfas principal del proceso actual. Si quiere designar otro proceso, pase su n\xfamero en el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["En ",(0,t.jsx)(n.em,{children:"metodo"}),", pase el nombre del m\xe9todo 4D como cadena de caracteres (expresi\xf3n)."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," si la l\xednea de men\xfa corresponde al t\xedtulo de un submen\xfa jer\xe1rquico, el m\xe9todo no se llamar\xe1 cuando la l\xednea de men\xfa sea seleccionada."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/set-menu-bar",title:"SET MENU BAR",children:"SET MENU BAR"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/get-menu-item-method",children:"Get menu item method"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"982"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var d=s(667294);let t={},r=d.createContext(t);function i(e){let n=d.useContext(r);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),d.createElement(r.Provider,{value:n},e.children)}}}]);