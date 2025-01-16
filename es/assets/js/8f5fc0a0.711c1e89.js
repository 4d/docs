"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86997"],{600162:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>o,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/set-menu-item","title":"SET MENU ITEM","description":"SET MENU ITEM ( menu ; lineamenu ; textoElem {; proceso}{; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/set-menu-item","permalink":"/docs/es/commands/set-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-menu-item.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-menu-item","title":"SET MENU ITEM","slug":"/commands/set-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET MENU BAR","permalink":"/docs/es/commands/set-menu-bar"},"next":{"title":"SET MENU ITEM ICON","permalink":"/docs/es/commands/set-menu-item-icon"}}'),t=s("785893"),d=s("250065");let i={id:"set-menu-item",title:"SET MENU ITEM",slug:"/commands/set-menu-item",displayed_sidebar:"docs"},c=void 0,a={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"SET MENU ITEM"})," ( ",(0,t.jsx)(n.em,{children:"menu"})," ; ",(0,t.jsx)(n.em,{children:"lineamenu"})," ; ",(0,t.jsx)(n.em,{children:"textoElem"})," {; ",(0,t.jsx)(n.em,{children:"proceso"}),"}{; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"menu"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de men\xfa o referencia de men\xfa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"lineamenu"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 para el \xfaltimo elemento a\xf1adido"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"textoElem"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nuevo texto de la l\xednea de men\xfa"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"proceso"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de referencia del proceso"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"*"}),(0,t.jsx)(n.td,{children:"Operador"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Si se pasa: considerar metacaracteres como caracteres est\xe1ndar"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando SET MENU ITEM cambia el texto de la l\xednea de men\xfa cuyo n\xfamero o referencia de men\xfa se pasa en ",(0,t.jsx)(n.em,{children:"menu"})," y cuyo n\xfamero de elemento se pasa en ",(0,t.jsx)(n.em,{children:"menuItem"}),", para el texto que pas\xf3 en ",(0,t.jsx)(n.em,{children:"itemText"}),". Puede pasar -1 en ",(0,t.jsx)(n.em,{children:"menuItem"})," para designar el \xfaltimo elemento a\xf1adido a ",(0,t.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si no pasa el par\xe1metro ",(0,t.jsx)(n.em,{children:"*"}),', los caracteres "especiales" inclu\xeddos en ',(0,t.jsx)(n.em,{children:"itemText"})," (tales como ",(0,t.jsx)(n.em,{children:"( ; o !)"})," ser\xe1n considerados como caracteres de instrucci\xf3n (metacaracteres). Por ejemplo, para definir un elemento de men\xfa como una l\xednea de separaci\xf3n, inserte el car\xe1cter \u201C-\u201D en ",(0,t.jsx)(n.em,{children:"itemText"}),'. Si pasa el par\xe1metro *, los caracteres "especiales" se considerar\xe1n como caracteres est\xe1ndar. Por favor consulte la descripci\xf3n del comando ',(0,t.jsx)(n.a,{href:"/docs/es/commands/append-menu-item",title:"APPEND MENU ITEM",children:"APPEND MENU ITEM"})," para m\xe1s informaci\xf3n sobre los detalles de estos caracteres."]}),"\n",(0,t.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,t.jsx)(n.em,{children:"proceso"}),", SET MENU ITEM se aplica a la barra de men\xfas del proceso actual. De lo contrario, SET MENU ITEM se aplica a la barra de men\xfas del proceso actual cuyo n\xfamero de referencia se pasa en ",(0,t.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," si pasa un ",(0,t.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," en ",(0,t.jsx)(n.em,{children:"menu"}),", el par\xe1metro ",(0,t.jsx)(n.em,{children:"proceso"})," es in\xfatil y se ignorar\xe1."]}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/es/commands/append-menu-item",children:"APPEND MENU ITEM"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/get-menu-item",children:"Get menu item"}),(0,t.jsx)(n.br,{}),"\n",(0,t.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-shortcut",children:"SET MENU ITEM SHORTCUT"})]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"348"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,t.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return i}});var r=s(667294);let t={},d=r.createContext(t);function i(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);