"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["23098"],{889933:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/enable-menu-item","title":"ENABLE MENU ITEM","description":"ENABLE MENU ITEM ( menu ; lineamenu {; proceso} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/enable-menu-item.md","sourceDirName":"commands-legacy","slug":"/commands/enable-menu-item","permalink":"/docs/es/20-R7/commands/enable-menu-item","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fenable-menu-item.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"enable-menu-item","title":"ENABLE MENU ITEM","slug":"/commands/enable-menu-item","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Dynamic pop up menu","permalink":"/docs/es/20-R7/commands/dynamic-pop-up-menu"},"next":{"title":"Get menu bar reference","permalink":"/docs/es/20-R7/commands/get-menu-bar-reference"}}'),d=r("785893"),t=r("250065");let i={id:"enable-menu-item",title:"ENABLE MENU ITEM",slug:"/commands/enable-menu-item",displayed_sidebar:"docs"},c=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ENABLE MENU ITEM"})," ( ",(0,d.jsx)(n.em,{children:"menu"})," ; ",(0,d.jsx)(n.em,{children:"lineamenu"})," {; ",(0,d.jsx)(n.em,{children:"proceso"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"menu"}),(0,d.jsx)(n.td,{children:"Integer, Text"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de men\xfa o Referencia del men\xfa"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lineamenu"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 por el \xfaltimo elemento a\xf1adido"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"proceso"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de referencia del proceso"})]})]})]}),"\n",(0,d.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ENABLE MENU ITEM activa el comando de men\xfa cuyo n\xfamero o referencia de men\xfa y n\xfamero de elemento usted pas\xf3 en ",(0,d.jsx)(n.em,{children:"menu"})," y ",(0,d.jsx)(n.em,{children:"menuItem"}),". Puede pasar -1 en ",(0,d.jsx)(n.em,{children:"menuItem"})," para indicar el \xfaltimo elemento a\xf1adido a ",(0,d.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Si omite el par\xe1metro ",(0,d.jsx)(n.em,{children:"proceso"}),", ENABLE MENU ITEM se aplica a la barra de men\xfas del proceso actual. De lo contrario, ENABLE MENU ITEM se aplica a la barra de men\xfas del proceso actual cuyo n\xfamero de referencia se pasa en ",(0,d.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota:"})," si pasa un ",(0,d.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," en ",(0,d.jsx)(n.em,{children:"menu"}),", el par\xe1metro ",(0,d.jsx)(n.em,{children:"proceso"})," es in\xfatil y ser\xe1 ignorado."]}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Tip:"})," para activar/desactivar todas los comandos de men\xfas de una vez, pase 0 (cero) en ",(0,d.jsx)(n.em,{children:"menuItem"}),"."]}),"\n",(0,d.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/disable-menu-item",children:"DISABLE MENU ITEM"})}),"\n",(0,d.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"149"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,d.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(o,{...e})}):o(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return i}});var s=r(667294);let d={},t=s.createContext(d);function i(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);