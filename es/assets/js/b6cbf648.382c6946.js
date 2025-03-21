"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53929"],{849221:function(e,n,r){r.r(n),r.d(n,{default:()=>A,frontMatter:()=>a,metadata:()=>s,assets:()=>o,toc:()=>l,contentTitle:()=>t});var s=JSON.parse('{"id":"commands-legacy/get-printable-margin","title":"GET PRINTABLE MARGIN","description":"GET PRINTABLE MARGIN ( izquierda ; superior ; derecha ; inferior )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-printable-margin.md","sourceDirName":"commands-legacy","slug":"/commands/get-printable-margin","permalink":"/docs/es/20-R7/commands/get-printable-margin","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-printable-margin.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-printable-margin","title":"GET PRINTABLE MARGIN","slug":"/commands/get-printable-margin","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PRINTABLE AREA","permalink":"/docs/es/20-R7/commands/get-printable-area"},"next":{"title":"Get printed height","permalink":"/docs/es/20-R7/commands/get-printed-height"}}'),i=r("785893"),d=r("250065");let a={id:"get-printable-margin",title:"GET PRINTABLE MARGIN",slug:"/commands/get-printable-margin",displayed_sidebar:"docs"},t=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Gesti\xf3n de m\xe1rgenes de impresi\xf3n",id:"gesti\xf3n-de-m\xe1rgenes-de-impresi\xf3n",level:3},{value:"Terminolog\xeda de impresi\xf3n",id:"terminolog\xeda-de-impresi\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET PRINTABLE MARGIN"})," ( ",(0,i.jsx)(n.em,{children:"izquierda"})," ; ",(0,i.jsx)(n.em,{children:"superior"})," ; ",(0,i.jsx)(n.em,{children:"derecha"})," ; ",(0,i.jsx)(n.em,{children:"inferior"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"izquierda"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Margen izquierda"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"superior"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Margen superior"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"derecha"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Margen derecha"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"inferior"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Margen inferior"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando GET PRINTABLE MARGIN devuelve los valores actuales de los diferentes m\xe1rgenes definidos utilizando los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-form",children:"Print form"}),", ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-selection",children:"PRINT SELECTION"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-record",children:"PRINT RECORD"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Los valores son devueltos en p\xedxeles con respecto al borde del papel."}),"\n",(0,i.jsxs)(n.p,{children:["Es posible obtener el tama\xf1o del papel como tambi\xe9n calcular el \xe1rea imprimible utilizando la funci\xf3n ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-printable-area",children:"GET PRINTABLE AREA"})," ."]}),"\n",(0,i.jsx)(n.h3,{id:"gesti\xf3n-de-m\xe1rgenes-de-impresi\xf3n",children:"Gesti\xf3n de m\xe1rgenes de impresi\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"Por defecto, en 4D el c\xe1lculo de las impresiones se efect\xfaa sobre la base de los \u201Cm\xe1rgenes de la impresora\u201D. La ventaja de este sistema es que los formularios se adaptan autom\xe1ticamente a las nuevas impresoras (ya que est\xe1n situados en el \xe1rea imprimible). Por otra parte, en el caso de los formularios pre-impresos, no era posible posicionar los elementos a imprimir de manera precisa porque un cambio de impresora pod\xeda modificar los m\xe1rgenes de la impresora."}),"\n",(0,i.jsxs)(n.p,{children:["Es posible basar la impresi\xf3n de los formularios efectuados utilizando los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-form",children:"Print form"}),", ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-selection",children:"PRINT SELECTION"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-record",children:"PRINT RECORD"})," sobre un margen fijo el cual es id\xe9ntico en cada impresora: los m\xe1rgenes del papel, es decir, los l\xedmites f\xedsicos de la hoja. Para hacer esto, simplemente utilice los comandos ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-printable-margin",children:"GET PRINTABLE MARGIN"}),", ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-printable-margin",children:"SET PRINTABLE MARGIN"})," y ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-printable-area",children:"GET PRINTABLE AREA"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"terminolog\xeda-de-impresi\xf3n",children:"Terminolog\xeda de impresi\xf3n"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Margen del papel"}),": el margen del papel corresponde a los l\xedmites f\xedsicos de la hoja."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Margen de impresi\xf3n"}),": la margen de impresi\xf3n es la margen m\xe1s all\xe1 de la cual la impresora no puede imprimir (por razones f\xedsicas: rodillos de impresi\xf3n, fin del recorrido del cabezal de impresi\xf3n...). Var\xeda de una impresora a otra y de un formato a otro."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Margen muerta:"})," esta es el \xe1rea situada entre la margen del papel y el margen de la impresora."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:r(44834).Z+"",width:"320",height:"166"})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/get-printable-area",children:"GET PRINTABLE AREA"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/print-form",children:"Print form"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/set-printable-margin",children:"SET PRINTABLE MARGIN"})]}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"711"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function A(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},44834:function(e,n,r){r.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,r){r.d(n,{Z:function(){return t},a:function(){return a}});var s=r(667294);let i={},d=s.createContext(i);function a(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);