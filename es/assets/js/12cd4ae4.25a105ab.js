"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["29761"],{24177:function(e,n,s){s.r(n),s.d(n,{metadata:()=>t,contentTitle:()=>r,default:()=>m,assets:()=>i,toc:()=>c,frontMatter:()=>a});var t=JSON.parse('{"id":"commands-legacy/listbox-get-table-source","title":"LISTBOX GET TABLE SOURCE","description":"LISTBOX GET TABLE SOURCE ( { ;} objeto ; numTabla {; nombre {; nomSel*}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-get-table-source.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-table-source","permalink":"/docs/es/commands/listbox-get-table-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-table-source.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-get-table-source","title":"LISTBOX GET TABLE SOURCE","slug":"/commands/listbox-get-table-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get static columns","permalink":"/docs/es/commands/listbox-get-static-columns"},"next":{"title":"LISTBOX INSERT COLUMN","permalink":"/docs/es/commands/listbox-insert-column"}}'),l=s("785893"),o=s("250065");let a={id:"listbox-get-table-source",title:"LISTBOX GET TABLE SOURCE",slug:"/commands/listbox-get-table-source",displayed_sidebar:"docs"},r=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function d(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"LISTBOX GET TABLE SOURCE"})," ( {* ;} ",(0,l.jsx)(n.em,{children:"objeto"})," ; ",(0,l.jsx)(n.em,{children:"numTabla"})," {; ",(0,l.jsx)(n.em,{children:"nombre"})," {; ",(0,l.jsx)(n.em,{children:"nomSel"}),"}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"*"}),(0,l.jsx)(n.td,{children:"Operador"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"objeto"}),(0,l.jsx)(n.td,{children:"any"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"numTabla"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"N\xfamero de la tabla de la selecci\xf3n"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nombre"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:'Nombre de la selecci\xf3n temporal o "" para la selecci\xf3n actual'})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"nomSel"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Nombre del conjunto seleccionado"})]})]})]}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando LISTBOX GET TABLE SOURCE permite conocer la fuente actual de datos mostrados en el list box designado por los par\xe1metros ",(0,l.jsx)(n.em,{children:"*"})," y ",(0,l.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,l.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,l.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,l.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, no pase una cadena sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objeto, por favor consulte la secci\xf3n ",(0,l.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["El comando devuelve en el par\xe1metro ",(0,l.jsx)(n.em,{children:"numTabla"})," el n\xfamero de la tabla principal asociada al list box y en el par\xe1metro opcional ",(0,l.jsx)(n.em,{children:"tempo"})," el nombre de la selecci\xf3n temporal eventualmente utilizada."]}),"\n",(0,l.jsxs)(n.p,{children:["Si las l\xedneas del list box est\xe1n vinculadas con la selecci\xf3n actual de la tabla, el par\xe1metro ",(0,l.jsx)(n.em,{children:"nombre"}),", si se pasa, devuelve una cadena vac\xeda. Si las l\xedneas del list box est\xe1n vinculadas con una selecci\xf3n temporal, el par\xe1metro ",(0,l.jsx)(n.em,{children:"nombre"})," devuelve el nombre de esta selecci\xf3n temporal."]}),"\n",(0,l.jsxs)(n.p,{children:["Si el list box est\xe1 asociado con arrays, ",(0,l.jsx)(n.em,{children:"numTabla"})," devuelve -1 y ",(0,l.jsx)(n.em,{children:"tempo"}),", si se pasa, devuelve una cadena vac\xeda."]}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/es/commands/listbox-set-table-source",children:"LISTBOX SET TABLE SOURCE"})})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(d,{...e})}):d(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return r},a:function(){return a}});var t=s(667294);let l={},o=t.createContext(l);function a(e){let n=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:a(e.components),t.createElement(o.Provider,{value:n},e.children)}}}]);