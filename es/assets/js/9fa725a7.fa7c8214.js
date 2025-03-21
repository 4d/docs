"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60714"],{943295:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>s,assets:()=>i,toc:()=>o,contentTitle:()=>c});var s=JSON.parse('{"id":"commands-legacy/get-menu-bar-reference","title":"Get menu bar reference","description":"Get menu bar reference {( proceso )} : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-bar-reference.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-bar-reference","permalink":"/docs/es/commands/get-menu-bar-reference","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-bar-reference.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-bar-reference","title":"Get menu bar reference","slug":"/commands/get-menu-bar-reference","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ENABLE MENU ITEM","permalink":"/docs/es/commands/enable-menu-item"},"next":{"title":"Get menu item","permalink":"/docs/es/commands/get-menu-item"}}'),d=r("785893"),a=r("250065");let t={id:"get-menu-bar-reference",title:"Get menu bar reference",slug:"/commands/get-menu-bar-reference",displayed_sidebar:"docs"},c=void 0,i={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Get menu bar reference"})," {( ",(0,d.jsx)(n.em,{children:"proceso"})," )} : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"proceso"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"N\xfamero de referencia del proceso"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Resultado"}),(0,d.jsx)(n.td,{children:"Text"}),(0,d.jsx)(n.td,{children:"\u2190"}),(0,d.jsx)(n.td,{children:"Identificador de la barra de men\xfas"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"Get menu bar reference"})," devuelve la identificaci\xf3n \xfanica de la barra de men\xfas actual o de la barra de men\xfas de un proceso espec\xedfico."]}),"\n",(0,d.jsxs)(n.p,{children:["Si la barra de men\xfas fue creada por el comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/create-menu",children:"Create menu"}),", este identificaci\xf3n corresponde a la referencia \xfanica del men\xfa creado. De lo contrario, el comando devuelve una identificaci\xf3n(*). interna espec\xedfica. En todos los casos, esta identificaci\xf3n, MenuRef puede utilizarse para referenciar la barra de men\xfas par todos los otros comandos del tema."]}),"\n",(0,d.jsxs)(n.p,{children:["(*) Este ID espec\xedfico es temporal y deja de ser v\xe1lido tan pronto como se llame a otra barra de men\xfa con ",(0,d.jsx)(n.a,{href:"/docs/es/commands/set-menu-bar",children:"SET MENU BAR"}),". Si desea conservar la referencia de un men\xfa creado en el editor de men\xfa, debe copiarlo en la memoria utilizando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/create-menu",children:"Create menu"}),". Por ejemplo:"]}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:"\xa0$vEditorRef:=Get menu bar reference(Frontmost process)\xa0//men\xfa del editor de barras de men\xfa\n\xa0$vMenuRef:=Create menu($vEditorRef)\xa0//copia el men\xfa en memoria\n\xa0SET MENU BAR(2)\xa0//instala otra barra de men\xfa\n\xa0...\xa0// execute code\n\xa0SET MENU BAR($vMenuRef)\xa0//regresa a la barra de men\xfa inicial\n"})}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"proceso"})," puede utilizarse para designar el proceso del que quiere obtener la identificaci\xf3n de la barra de men\xfas actual. Si omite este par\xe1metro, el comando devuelve la identificaci\xf3n de la barra de men\xfas del proceso actual."]}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsxs)(n.p,{children:["Consulte el ejemplo del comando ",(0,d.jsx)(n.a,{href:"/docs/es/commands/get-menu-items",title:"GET MENU ITEMS",children:"GET MENU ITEMS"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/commands/set-menu-bar",children:"SET MENU BAR"})}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"979"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return t}});var s=r(667294);let d={},a=s.createContext(d);function t(e){let n=s.useContext(a);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);