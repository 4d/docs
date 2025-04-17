"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["37759"],{182220:function(e,n,i){i.r(n),i.d(n,{default:()=>m,frontMatter:()=>t,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/get-menu-item-icon","title":"GET MENU ITEM ICON","description":"GET MENU ITEM ICON ( menu ; lineamenu ; refIcono {; proceso} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/get-menu-item-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-menu-item-icon","permalink":"/docs/es/20-R8/commands/get-menu-item-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-menu-item-icon.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"get-menu-item-icon","title":"GET MENU ITEM ICON","slug":"/commands/get-menu-item-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Get menu item","permalink":"/docs/es/20-R8/commands/get-menu-item"},"next":{"title":"Get menu item key","permalink":"/docs/es/20-R8/commands/get-menu-item-key"}}'),s=i("785893"),d=i("250065");let t={id:"get-menu-item-icon",title:"GET MENU ITEM ICON",slug:"/commands/get-menu-item-icon",displayed_sidebar:"docs"},o=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let n={a:"a",br:"br",em:"em",filesystem:"filesystem",h2:"h2",li:"li",name:"name",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET MENU ITEM ICON"})," ( ",(0,s.jsx)(n.em,{children:"menu"})," ; ",(0,s.jsx)(n.em,{children:"lineamenu"})," ; ",(0,s.jsx)(n.em,{children:"refIcono"})," {; ",(0,s.jsx)(n.em,{children:"proceso"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"menu"}),(0,s.jsx)(n.td,{children:"Integer, Text"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia de men\xfa o n\xfamero de men\xfa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"lineamenu"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de l\xednea de men\xfa o -1 para el \xfaltimo elemento a\xf1adido al men\xfa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refIcono"}),(0,s.jsx)(n.td,{children:"Text, Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Nombre o n\xfamero de imagen asociado con la l\xednea de men\xfa"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"proceso"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de proceso"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando GET MENU ITEM ICON devuelve, en la variable ",(0,s.jsx)(n.em,{children:"refIcono"}),", la referencia del icono asociado a la l\xednea de men\xfa designada por los par\xe1metros ",(0,s.jsx)(n.em,{children:"menu"})," y ",(0,s.jsx)(n.em,{children:"menuItem"}),". Esta referencia es el nombre o n\xfamero de la imagen en la librer\xeda de im\xe1genes."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede pasar -1 en ",(0,s.jsx)(n.em,{children:"lineaMenu"})," para especificar la \xfaltima l\xednea a\xf1adida a ",(0,s.jsx)(n.em,{children:"menu"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["En ",(0,s.jsx)(n.em,{children:"menu"}),", puede pasar una referencia de men\xfa (",(0,s.jsx)(n.a,{href:"#",title:"Unique ID (16-character alphanumeric) of a menu",children:"MenuRef"}),") o un n\xfamero de men\xfa. Si pasa una referencia de men\xfa, el par\xe1metro ",(0,s.jsx)(n.em,{children:"proceso"})," no ser\xe1 necesario y si se pasa seignorar\xe1. Si pasa un n\xfamero de men\xfa, el comando tendr\xe1 en cuenta el men\xfa correspondiente en la barra de men\xfas principal del proceso actual. Si quiere designar otro proceso, pase su n\xfamero en el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"proceso"}),"."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Si el icono se ha especificado utilizando un archivo de imagen, el comando devuelve el nombre de la imagen en ",(0,s.jsx)(n.em,{children:"refIcono"})," utilizando ",(0,s.jsxs)(n.strong,{children:["path:",(0,s.jsx)(n.filesystem,{path:""})]}),"."]}),"\n",(0,s.jsxs)(n.li,{children:["Si el icono se ha especificado utilizando una imagen de librer\xeda (bases binarias \xfanicamente), el comando devuelve el nombre o el n\xfamero de la imagen dependiendo del tipo de variable pasada en este par\xe1metro. TSe utiliza para un nombre: ",(0,s.jsxs)(n.strong,{children:["pictlib:",(0,s.jsx)(n.name,{})]}),".",(0,s.jsx)(n.br,{}),"\nSi no atribuye un tipo espec\xedfico a la variable ",(0,s.jsx)(n.em,{children:"refIcono"}),", por defecto, se devuelve el nombre de la imagen (tipo texto)."]}),"\n"]}),"\n",(0,s.jsx)(n.p,{children:"Si ning\xfan icono est\xe1 asociado a la l\xednea de men\xfa, el comando devuelve un valor vac\xedo."}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/set-menu-item-icon",children:"SET MENU ITEM ICON"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"983"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,n,i){i.d(n,{Z:function(){return o},a:function(){return t}});var r=i(667294);let s={},d=r.createContext(s);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);