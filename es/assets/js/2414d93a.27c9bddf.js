"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91539],{64399:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>a,frontMatter:()=>d,metadata:()=>l,toc:()=>o});var s=t(474848),r=t(28453);const d={id:"get-menu-item-style",title:"Get menu item style",slug:"/commands/get-menu-item-style",displayed_sidebar:"docs"},i=void 0,l={id:"commands-legacy/get-menu-item-style",title:"Get menu item style",description:"Get menu item style ( menu ; lineamenu {; proceso} ) -> Resultado",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-menu-item-style.md",sourceDirName:"commands-legacy",slug:"/commands/get-menu-item-style",permalink:"/docs/es/commands/get-menu-item-style",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-style.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"get-menu-item-style",title:"Get menu item style",slug:"/commands/get-menu-item-style",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"GET MENU ITEM PROPERTY",permalink:"/docs/es/commands/get-menu-item-property"},next:{title:"GET MENU ITEMS",permalink:"/docs/es/commands/get-menu-items"}},c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function m(e){const n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Get menu item style"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"lineamenu"})," {; ",(0,s.jsx)(n.em,{children:"proceso"}),"} ) -> Resultado"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de men\xfa o Referencia de men\xfa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lineamenu"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 para el \xfaltimo elemento a\xf1adido"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"proceso"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Process reference number"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Estilo del comando de men\xfa"})]})]})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando Get menu item style devuelve el estilo de fuente de la l\xednea de men\xfa cuyo n\xfamero o referencia se pasa en ",(0,s.jsx)(n.em,{children:"menu"})," y cuyo n\xfamero de elemento se pasa en ",(0,s.jsx)(n.em,{children:"menuItem"}),". Puede pasar -1 en ",(0,s.jsx)(n.em,{children:"menuItem"})," para indicar el \xfaltimo elemento a\xf1adido a ",(0,s.jsx)(n.em,{children:"menu."})]}),"\n",(0,s.jsxs)(n.p,{children:["Si omite el par\xe1metro proceso, Get menu item style se aplica a la barra de men\xfas del proceso actual. De lo contrario, Get menu item style se aplica a la barra de men\xfas del proceso actual cuyo n\xfamero de referencia se pasa en ",(0,s.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," si pasa un ",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"})," en ",(0,s.jsx)(n.em,{children:"menu"}),", el par\xe1metro ",(0,s.jsx)(n.em,{children:"proceso"})," es in\xfatil y se ignorar\xe1."]}),"\n",(0,s.jsx)(n.p,{children:"Get menu item style devuelve una combinaci\xf3n (uno o una suma) de las siguientes constantes predefinidas:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Plain"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Bold"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Italic"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Underline"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,s.jsx)(n.p,{children:"Para probar si un elemento de men\xfa se muestra en negrita, escribe:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0If((Get menu item style($vlMenu;$vlItem)&Bold)#0)\n\xa0\xa0//...\n\xa0End if\n"})}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/set-menu-item-style",children:"SET MENU ITEM STYLE"})})]})}function a(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}},28453:(e,n,t)=>{t.d(n,{R:()=>i,x:()=>l});var s=t(296540);const r={},d=s.createContext(r);function i(e){const n=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);