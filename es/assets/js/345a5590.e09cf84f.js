"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["70057"],{75638:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>l,toc:()=>o,contentTitle:()=>a});var t=JSON.parse('{"id":"commands-legacy/listbox-set-headers-height","title":"LISTBOX SET HEADERS HEIGHT","description":"LISTBOX SET HEADERS HEIGHT ( { ;} objeto ; altura {; unidad*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/listbox-set-headers-height.md","sourceDirName":"commands-legacy","slug":"/commands/listbox-set-headers-height","permalink":"/docs/es/commands/listbox-set-headers-height","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Flistbox-set-headers-height.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"listbox-set-headers-height","title":"LISTBOX SET HEADERS HEIGHT","slug":"/commands/listbox-set-headers-height","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"LISTBOX SET GRID COLOR","permalink":"/docs/es/commands/listbox-set-grid-color"},"next":{"title":"LISTBOX SET HIERARCHY","permalink":"/docs/es/commands/listbox-set-hierarchy"}}'),d=s("785893"),r=s("250065");let i={id:"listbox-set-headers-height",title:"LISTBOX SET HEADERS HEIGHT",slug:"/commands/listbox-set-headers-height",displayed_sidebar:"docs"},a=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,r.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"LISTBOX SET HEADERS HEIGHT"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objeto"})," ; ",(0,d.jsx)(n.em,{children:"altura"})," {; ",(0,d.jsx)(n.em,{children:"unidad"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena)Si se omite, objeto es una variable"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"altura"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Alto de la l\xednea"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"unidad"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Unidad de valor de altura: 0 o si se omite = p\xedxeles, 1 = l\xedneas"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"LISTBOX SET HEADERS HEIGHT"})," modifica por programaci\xf3n la altura de la l\xednea de encabezado del list box designado por los par\xe1metros ",(0,d.jsx)(n.em,{children:"objeto"})," y ",(0,d.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,d.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (una cadena). Si no pasa este par\xe1metro, esto indica que el par\xe1metro ",(0,d.jsx)(n.em,{children:"objeto"})," es una variable. En este caso, se pasa una referencia de variable en lugar de una cadena."]}),"\n",(0,d.jsx)(n.p,{children:"Puede designar indiferentemente el list box o todo encabezado del list box."}),"\n",(0,d.jsxs)(n.p,{children:["Pase en el par\xe1metro ",(0,d.jsx)(n.em,{children:"altura"})," la altura a definir. Por defecto, si omite el par\xe1metro unidad, esta altura se expresa en p\xedxeles. Para definir una unidad diferente, puede pasar una de las siguientes constantes (del tema ",(0,d.jsx)(n.em,{children:"Listbox"}),"), en el par\xe1metro ",(0,d.jsx)(n.em,{children:"unidad"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lk lines"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"La altura designa un n\xfamero de l\xedneas. 4D calcula la altura de una l\xednea en funci\xf3n de la fuente."})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"lk pixels"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"La altura es un n\xfamero en p\xedxeles (por defecto)"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Los encabezados deben respetar la altura m\xednima establecida por el sistema. Esta altura es de 24 p\xedxeles en Windows y 17 p\xedxeles en Mac OS. Si pasa un valor m\xe1s bajo en el par\xe1metro de la altura, se aplica la altura m\xednima."}),"\n",(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"Nota"}),": para obtener m\xe1s informaci\xf3n sobre el c\xe1lculo de las alturas de l\xedneas, consulte el manual de ",(0,d.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/commands/listbox-get-headers-height",children:"LISTBOX Get headers height"})}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1143"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return i}});var t=s(667294);let d={},r=t.createContext(d);function i(e){let n=t.useContext(r);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);