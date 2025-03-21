"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["95977"],{605071:function(e,n,r){r.r(n),r.d(n,{default:()=>o,frontMatter:()=>d,metadata:()=>s,assets:()=>c,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/set-menu-item-mark","title":"SET MENU ITEM MARK","description":"SET MENU ITEM MARK ( menu ; lineamenu ; marca {; proceso} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-menu-item-mark.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item-mark","permalink":"/docs/es/commands/set-menu-item-mark","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item-mark.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-menu-item-mark","title":"SET MENU ITEM MARK","slug":"/commands/set-menu-item-mark","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU ITEM ICON","permalink":"/docs/es/commands/set-menu-item-icon"},"next":{"title":"SET MENU ITEM METHOD","permalink":"/docs/es/commands/set-menu-item-method"}}'),a=r("785893"),t=r("250065");let d={id:"set-menu-item-mark",title:"SET MENU ITEM MARK",slug:"/commands/set-menu-item-mark",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function m(e){let n={a:"a",em:"em",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"SET MENU ITEM MARK"})," ( ",(0,a.jsx)(n.em,{children:"menu"})," ; ",(0,a.jsx)(n.em,{children:"lineamenu"})," ; ",(0,a.jsx)(n.em,{children:"marca"})," {; ",(0,a.jsx)(n.em,{children:"proceso"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"menu"}),(0,a.jsx)(n.td,{children:"Integer, Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de men\xfa o Referencia de men\xfa"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"lineamenu"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 por el \xfaltimo elemento a\xf1adido"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"marca"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Nueva marca de l\xednea de men\xfa"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"proceso"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de referencia de proceso"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando SET MENU ITEM MARK cambia la marca del elemento de men\xfa cuyo n\xfamero o referencia de men\xfa se pasa en ",(0,a.jsx)(n.em,{children:"menu"})," y cuyo n\xfamero de l\xednea se pasa en ",(0,a.jsx)(n.em,{children:"menuItem"})," al primer car\xe1cter de la cadena pasada en ",(0,a.jsx)(n.em,{children:"marca"}),". Puede pasar -1 en ",(0,a.jsx)(n.em,{children:"menuItem"})," para designar la \xfaltima l\xednea a\xf1adida al men\xfa."]}),"\n",(0,a.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,a.jsx)(n.em,{children:"proceso"}),", SET MENU ITEM MARK se aplica a la barra de men\xfas del proceso actual. De lo contrario, SET MENU ITEM MARK se aplica a la barra de men\xfas del proceso actual cuyo n\xfamero de referencia se pasa en ",(0,a.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota"}),": si pasa un par\xe1metro MenuRef en men\xfa, el par\xe1metro proceso es in\xfatil y se ignorar\xe1"]}),"\n",(0,a.jsx)(n.p,{children:"Si pasa una cadena vac\xeda, toda marca de la l\xednea de men\xfa se elimina. De lo contrario:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"En Macintosh, el primer car\xe1cter de la cadena se convierte en la marca de la l\xednea de men\xfa. Generalmente, pasar\xe1 Char (18), el cual es el car\xe1cter de marca para los men\xfas Macintosh."}),"\n",(0,a.jsx)(n.li,{children:"En Windows, la marca est\xe1ndar de Window se asocia al men\xfa."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(n.p,{children:["Ver ejemplo para el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/get-menu-item-mark",title:"Get menu item mark",children:"Get menu item mark"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/get-menu-item-mark",children:"Get menu item mark"})}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"208"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,a.jsx)(n.td,{})]})]})]})]})}function o(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(m,{...e})}):m(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let a={},t=s.createContext(a);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);