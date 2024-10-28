"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[18851],{259680:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var r=n(474848),o=n(28453);const t={id:"listbox-set-grid",title:"LISTBOX SET GRID",slug:"/commands/listbox-set-grid",displayed_sidebar:"docs"},i=void 0,d={id:"commands-legacy/listbox-set-grid",title:"LISTBOX SET GRID",description:"LISTBOX SET GRID ( { ;} objeto ; horizontal ; vertical* )",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-grid.md",sourceDirName:"commands-legacy",slug:"/commands/listbox-set-grid",permalink:"/docs/es/commands/listbox-set-grid",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-grid.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"listbox-set-grid",title:"LISTBOX SET GRID",slug:"/commands/listbox-set-grid",displayed_sidebar:"docs"},sidebar:"docs",previous:{title:"LISTBOX SET FOOTERS HEIGHT",permalink:"/docs/es/commands/listbox-set-footers-height"},next:{title:"LISTBOX SET GRID COLOR",permalink:"/docs/es/commands/listbox-set-grid-color"}},a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const s={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.strong,{children:"LISTBOX SET GRID"})," ( {* ;} ",(0,r.jsx)(s.em,{children:"objeto"})," ; ",(0,r.jsx)(s.em,{children:"horizontal"})," ; ",(0,r.jsx)(s.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Par\xe1metro"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"*"}),(0,r.jsx)(s.td,{children:"Operador"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"objeto"}),(0,r.jsx)(s.td,{children:"any"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"horizontal"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"True = mostrar, False = ocultar"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"vertical"}),(0,r.jsx)(s.td,{children:"Boolean"}),(0,r.jsx)(s.td,{children:"\u2192"}),(0,r.jsx)(s.td,{children:"True = mostrar, False = ocultar"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,r.jsx)(s.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["El comando LISTBOX SET GRID permite mostrar u ocultar las l\xedneas horizontales y/o verticales que componen la matriz del objeto list box designado por los par\xe1metros ",(0,r.jsx)(s.em,{children:"objeto"})," y ",(0,r.jsx)(s.em,{children:"*"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Si pasa el par\xe1metro opcional *, indica que el par\xe1metro ",(0,r.jsx)(s.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(s.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n indica que el par\xe1metro ",(0,r.jsx)(s.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,r.jsx)(s.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,r.jsx)(s.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Pase en los par\xe1metros ",(0,r.jsx)(s.em,{children:"horizontal"})," y ",(0,r.jsx)(s.em,{children:"vertical"})," los valores booleanos que indican si la l\xedneas de la matriz deben mostrarse (",(0,r.jsx)(s.a,{href:"/docs/es/commands/true",title:"True",children:"True"}),") u ocultarse (",(0,r.jsx)(s.a,{href:"/docs/es/commands/false",title:"False",children:"False"}),"). La matriz se muestra por defecto."]}),"\n",(0,r.jsx)(s.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/commands/listbox-get-grid",children:"LISTBOX GET GRID"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/listbox-get-property",children:"LISTBOX Get property"}),(0,r.jsx)(s.br,{}),"\n",(0,r.jsx)(s.a,{href:"/docs/es/commands/listbox-set-grid-color",children:"LISTBOX SET GRID COLOR"})]})]})}function m(e={}){const{wrapper:s}={...(0,o.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,n)=>{n.d(s,{R:()=>i,x:()=>d});var r=n(296540);const o={},t=r.createContext(o);function i(e){const s=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(t.Provider,{value:s},e.children)}}}]);