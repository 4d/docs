"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["4277"],{775209:function(e,n,t){t.r(n),t.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>a,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/listbox-get-row-height","title":"LISTBOX Get row height","description":"LISTBOX Get row height  ( { ;} objeto ; linea* ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/listbox-get-row-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-get-row-height","permalink":"/docs/es/commands/listbox-get-row-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-get-row-height.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"listbox-get-row-height","title":"LISTBOX Get row height","slug":"/commands/listbox-get-row-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX Get row font style","permalink":"/docs/es/commands/listbox-get-row-font-style"},"next":{"title":"LISTBOX Get rows height","permalink":"/docs/es/commands/listbox-get-rows-height"}}'),i=t("785893"),r=t("250065");let d={id:"listbox-get-row-height",title:"LISTBOX Get row height",slug:"/commands/listbox-get-row-height",displayed_sidebar:"docs"},o=void 0,l={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"LISTBOX Get row height"}),"  ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"linea"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"linea"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"L\xednea de list box, cuya altura desea obtener"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Altura de la fila"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"LISTBOX Get row height"}),"  devuelve la altura de la ",(0,i.jsx)(n.em,{children:"fila"})," especificada en el objeto list box designado utilizando el ",(0,i.jsx)(n.em,{children:"objeto"})," y los par\xe1metros ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia variable en lugar de una cadena. Para m\xe1s informaci\xf3n sobre nombres de objetos, consulte la secci\xf3n ",(0,i.jsx)(n.em,{children:"Propiedades de los objetos"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si la ",(0,i.jsx)(n.em,{children:"linea"})," especificada no existe en el list box, el comando devuelve 0 (cero)."]}),"\n",(0,i.jsx)(n.p,{children:"El valor de la altura de la l\xednea se expresa:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["en la unidad actual definida globalmente para las l\xedneas del list box, ya sea en la lista de Propiedades o mediante una llamada previa al comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-set-rows-height",children:"LISTBOX SET ROWS HEIGHT"})," cuando la altura de la l\xednea es fija,"]}),"\n",(0,i.jsxs)(n.li,{children:["en p\xedxeles cuando la altura de la l\xednea es variable, es decir, autom\xe1tica ( ver ",(0,i.jsx)(n.em,{children:"Altura de l\xednea autom\xe1tica"}),") o manejada por un array."]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-get-auto-row-height",children:"LISTBOX Get auto row height "}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-get-rows-height",children:"LISTBOX Get rows height"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/listbox-set-row-height",children:"LISTBOX SET ROW HEIGHT"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1408"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return o},a:function(){return d}});var s=t(667294);let i={},r=s.createContext(i);function d(e){let n=s.useContext(r);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);