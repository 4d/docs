"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["34129"],{469941:function(e,n,s){s.r(n),s.d(n,{metadata:()=>r,contentTitle:()=>t,default:()=>h,assets:()=>d,toc:()=>c,frontMatter:()=>i});var r=JSON.parse('{"id":"commands-legacy/listbox-set-grid-color","title":"LISTBOX SET GRID COLOR","description":"LISTBOX SET GRID COLOR ( { ;} objeto ; color ; horizontal ; vertical* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/listbox-set-grid-color.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-grid-color","permalink":"/docs/es/commands/listbox-set-grid-color","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-grid-color.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"listbox-set-grid-color","title":"LISTBOX SET GRID COLOR","slug":"/commands/listbox-set-grid-color","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET GRID","permalink":"/docs/es/commands/listbox-set-grid"},"next":{"title":"LISTBOX SET HEADERS HEIGHT","permalink":"/docs/es/commands/listbox-set-headers-height"}}'),o=s("785893"),l=s("250065");let i={id:"listbox-set-grid-color",title:"LISTBOX SET GRID COLOR",slug:"/commands/listbox-set-grid-color",displayed_sidebar:"docs"},t=void 0,d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"LISTBOX SET GRID COLOR"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ; ",(0,o.jsx)(n.em,{children:"color"})," ; ",(0,o.jsx)(n.em,{children:"horizontal"})," ; ",(0,o.jsx)(n.em,{children:"vertical"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"color"}),(0,o.jsx)(n.td,{children:"Text, Integer"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Valor de color RGB"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"horizontal"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Utilice el color para las l\xedneas horizontales"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vertical"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Utilice el color para las l\xedneas verticales"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"LISTBOX SET GRID COLOR"})," le permite modificar el color de la rejilla del objeto list box designado por los par\xe1metros ",(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si omite este par\xe1metro, indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es una variable. En ese caso, no pasa una cadena, sino una referencia de variable. Para mayor informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,o.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,o.jsx)(n.em,{children:"color"})," un valor de color RGB. Para mayor informaci\xf3n sobre los colores RGB, consulte la descripci\xf3n del comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:["Los par\xe1metros ",(0,o.jsx)(n.em,{children:"horizontal"})," y ",(0,o.jsx)(n.em,{children:"vertical"})," le permiten especificar las l\xedneas a las cuales quiere darle color:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Si pasa ",(0,o.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," en ",(0,o.jsx)(n.em,{children:"horizontal"}),", el color se aplicar\xe1 a las l\xedneas horizontales. Si pasa ",(0,o.jsx)(n.strong,{children:"False"}),", el color de las l\xedneas horizontales no cambiar\xe1."]}),"\n",(0,o.jsxs)(n.li,{children:["Si pasa ",(0,o.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," en ",(0,o.jsx)(n.em,{children:"vertical"}),", el color se aplicar\xe1 a las l\xedneas verticales. Si pasa ",(0,o.jsx)(n.strong,{children:"False"}),", el color de las l\xedneas verticales no cambiar\xe1."]}),"\n"]}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/listbox-get-grid-colors",children:"LISTBOX GET GRID COLORS"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/listbox-set-grid",children:"LISTBOX SET GRID"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/object-set-rgb-colors",children:"OBJECT SET RGB COLORS"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"842"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return t},a:function(){return i}});var r=s(667294);let o={},l=r.createContext(o);function i(e){let n=r.useContext(l);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),r.createElement(l.Provider,{value:n},e.children)}}}]);