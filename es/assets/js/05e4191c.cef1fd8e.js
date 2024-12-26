"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["26897"],{478048:function(e,n,r){r.r(n),r.d(n,{metadata:()=>s,contentTitle:()=>d,default:()=>h,assets:()=>l,toc:()=>a,frontMatter:()=>o});var s=JSON.parse('{"id":"commands-legacy/listbox-get-hierarchy","title":"LISTBOX GET HIERARCHY","description":"LISTBOX GET HIERARCHY ( { ;} objeto ; jerarquico {; jerarquia*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-hierarchy.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-hierarchy","permalink":"/docs/es/commands/listbox-get-hierarchy","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-hierarchy.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-hierarchy","title":"LISTBOX GET HIERARCHY","slug":"/commands/listbox-get-hierarchy","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get headers height","permalink":"/docs/es/commands/listbox-get-headers-height"},"next":{"title":"LISTBOX Get locked columns","permalink":"/docs/es/commands/listbox-get-locked-columns"}}'),i=r("785893"),t=r("250065");let o={id:"listbox-get-hierarchy",title:"LISTBOX GET HIERARCHY",slug:"/commands/listbox-get-hierarchy",displayed_sidebar:"docs"},d=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX GET HIERARCHY"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"jerarquico"})," {; ",(0,i.jsx)(n.em,{children:"jerarquia"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena). Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o variables (si * se omite)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jerarquico"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = list box jer\xe1rquico, False = list box no jer\xe1rquico"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"jerarquia"}),(0,i.jsx)(n.td,{children:"Pointer array"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Array de punteros"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando LISTBOX GET HIERARCHY permite buscar las propiedades jer\xe1rquicas del objeto list box designado por los par\xe1metros ",(0,i.jsx)(n.em,{children:"objeto"})," y ",(0,i.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro booleano ",(0,i.jsx)(n.em,{children:"jerarquico"})," indica si el listbox est\xe1 o no en modo jer\xe1rquico:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Si el par\xe1metro devuelve True, el list box est\xe1 en modo jer\xe1rquico,"}),"\n",(0,i.jsx)(n.li,{children:"Si el par\xe1metro devuelve False, el list box se muestra en modo no jer\xe1rquico (modo de array est\xe1ndar)."}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si el list box est\xe1 en modo jer\xe1rquico, el comando llena el array ",(0,i.jsx)(n.em,{children:"jerarquia"})," con los punteros a los arrays del list box utilizado para definir la jerarqu\xeda."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota"}),": si el list box est\xe1 en modo no jer\xe1rquico, el comando devuelve, en el primer elemento del array ",(0,i.jsx)(n.em,{children:"jerarquia"}),", un puntero al array de la primera columna del listbox."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-set-hierarchy",children:"LISTBOX SET HIERARCHY"})}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1099"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return o}});var s=r(667294);let i={},t=s.createContext(i);function o(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);