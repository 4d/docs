"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57014"],{941491:function(e,n,t){t.r(n),t.d(n,{default:()=>l,frontMatter:()=>i,metadata:()=>d,assets:()=>m,toc:()=>c,contentTitle:()=>o});var d=JSON.parse('{"id":"commands-legacy/get-menu-item-method","title":"Get menu item method","description":"Get menu item method ( menu ; lineaMenu {; proceso} ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-item-method.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-method","permalink":"/docs/es/commands/get-menu-item-method","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-method.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-item-method","title":"Get menu item method","slug":"/commands/get-menu-item-method","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item mark","permalink":"/docs/es/commands/get-menu-item-mark"},"next":{"title":"Get menu item modifiers","permalink":"/docs/es/commands/get-menu-item-modifiers"}}'),r=t("785893"),s=t("250065");let i={id:"get-menu-item-method",title:"Get menu item method",slug:"/commands/get-menu-item-method",displayed_sidebar:"docs"},o=void 0,m={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.strong,{children:"Get menu item method"})," ( ",(0,r.jsx)(n.em,{children:"menu"})," ; ",(0,r.jsx)(n.em,{children:"lineaMenu"})," {; ",(0,r.jsx)(n.em,{children:"proceso"}),"} ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Par\xe1metro"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"menu"}),(0,r.jsx)(n.td,{children:"Integer, Text"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"Referencia de men\xfa o N\xfamero de men\xfa"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"lineaMenu"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 para el \xfaltimo elemento a\xf1adido al men\xfa"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"proceso"}),(0,r.jsx)(n.td,{children:"Integer"}),(0,r.jsx)(n.td,{children:"\u2192"}),(0,r.jsx)(n.td,{children:"N\xfamero de proceso"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Resultado"}),(0,r.jsx)(n.td,{children:"Text"}),(0,r.jsx)(n.td,{children:"\u2190"}),(0,r.jsx)(n.td,{children:"Nombre del m\xe9todo"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El comando Get menu item method devuelve el nombre del m\xe9todo de proyecto 4D asociado a la l\xednea de men\xfa designada por los par\xe1metros ",(0,r.jsx)(n.em,{children:"menu"})," y ",(0,r.jsx)(n.em,{children:"lineaMenu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["Puede pasar -1 en ",(0,r.jsx)(n.em,{children:"lineaMenu"})," con el fin de especificar el \xfaltimo elemento a\xf1adido al ",(0,r.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,r.jsxs)(n.p,{children:["En ",(0,r.jsx)(n.em,{children:"menu"}),", puede pasar una referencia de men\xfa (",(0,r.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") o un n\xfamero de men\xfa. Si pasa una referencia de men\xfa, el par\xe1metro ",(0,r.jsx)(n.em,{children:"proceso"})," no ser\xe1 necesario y si se pasa ser\xe1 ignorado. Si pasa un n\xfamero de men\xfa, el comando tomar\xe1 el men\xfa correspondiente en la barra de men\xfas principal del proceso actual. Si quiere designar otro proceso, pase su n\xfamero en el par\xe1metro opcional ",(0,r.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,r.jsx)(n.p,{children:"El comando devuelve el nombre del m\xe9todo 4D como una cadena de caracteres (expresi\xf3n). Si ning\xfan m\xe9todo est\xe1 asociado a la l\xednea de men\xfa, el comando devuelve una cadena vac\xeda."}),"\n",(0,r.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-method",children:"SET MENU ITEM METHOD"})}),"\n",(0,r.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{}),(0,r.jsx)(n.th,{})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"N\xfamero de comando"}),(0,r.jsx)(n.td,{children:"981"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"Hilo seguro"}),(0,r.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function l(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return i}});var d=t(667294);let r={},s=d.createContext(r);function i(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);