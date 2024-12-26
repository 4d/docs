"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25339"],{650793:function(e,n,o){o.r(n),o.d(n,{metadata:()=>s,contentTitle:()=>i,default:()=>c,assets:()=>r,toc:()=>l,frontMatter:()=>d});var s=JSON.parse('{"id":"commands-legacy/object-set-data-source","title":"OBJECT SET DATA SOURCE","description":"OBJECT SET DATA SOURCE ( { ;} objeto ; fuenteDatos* )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-set-data-source.md","sourceDirName":"commands-legacy","slug":"/commands/object-set-data-source","permalink":"/docs/es/commands/object-set-data-source","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-set-data-source.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-set-data-source","title":"OBJECT SET DATA SOURCE","slug":"/commands/object-set-data-source","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT SET CORNER RADIUS","permalink":"/docs/es/commands/object-set-corner-radius"},"next":{"title":"OBJECT SET DRAG AND DROP OPTIONS","permalink":"/docs/es/commands/object-set-drag-and-drop-options"}}'),a=o("785893"),t=o("250065");let d={id:"object-set-data-source",title:"OBJECT SET DATA SOURCE",slug:"/commands/object-set-data-source",displayed_sidebar:"docs"},i=void 0,r={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function A(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"OBJECT SET DATA SOURCE"})," ( {* ;} ",(0,a.jsx)(n.em,{children:"objeto"})," ; ",(0,a.jsx)(n.em,{children:"fuenteDatos"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"*"}),(0,a.jsx)(n.td,{children:"Operador"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,a.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"objeto"}),(0,a.jsx)(n.td,{children:"any"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsxs)(n.td,{children:["Nombre de objeto (si se especifica *) o",(0,a.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"fuenteDatos"}),(0,a.jsx)(n.td,{children:"Pointer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Puntero a la nueva fuente de datos del objeto"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando ",(0,a.jsx)(n.strong,{children:"OBJECT SET DATA SOURCE"})," modifica la fuente de datos de los objetos designados por los par\xe1metros ",(0,a.jsx)(n.em,{children:"objeto"})," y ",(0,a.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,a.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,a.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro objeto es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,a.jsx)(n.p,{children:"La fuente de datos es el campo o la variable cuyo valor es representado por el objeto cuando se ejecuta el formulario. En modo Dise\xf1o, la fuente de datos se define en la lista de propiedades, por lo general a trav\xe9s de las l\xedneas Fuente y Campo fuente (campos) o Nombre de variable (variables):"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:o(592428).Z+"",width:"277",height:"244"})}),"\n",(0,a.jsx)(n.p,{children:"A excepci\xf3n de los list box (ver m\xe1s adelante), todas las fuentes de datos del formulario pueden ser modificadas por este comando. Es responsabilidad del desarrollador asegurar la consistencia de los cambios realizados."}),"\n",(0,a.jsx)(n.p,{children:"En el caso de los list box, se deben tener en cuenta los siguientes puntos:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Los cambios de fuentes de datos deben tener en cuenta el tipo de list box: por ejemplo, no es posible utilizar un campo como fuente de datos de una columna de en un list box de tipo array."}),"\n",(0,a.jsx)(n.li,{children:"Para los list box de tipo selecci\xf3n, no es posible modificar o leer la fuente de datos del objeto list box en s\xed: \u200B\u200Ben este caso, se trata de una referencia interna y no de una fuente de datos."}),"\n",(0,a.jsxs)(n.li,{children:["Este comando se utiliza en el contexto de los list box de tipo array. Para los list box de tipo selecci\xf3n, puede en vez utilizar el comando [",(0,a.jsx)(n.a,{href:"/docs/es/commands/listbox-set-column-formula",children:"LISTBOX SET COLUMN FORMULA"})]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Si este comando se aplica a una fuente de datos que no se puede editar, no hace nada."}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"Cambio de la fuente de datos para un \xe1rea de entrada:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0var $ptrField : Pointer\n\xa0$ptrField:=Field(3;2)\n\xa0OBJECT SET DATA SOURCE(*;"Input";$ptrField)\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/listbox-set-column-formula",children:"LISTBOX SET COLUMN FORMULA"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/object-get-data-source",children:"OBJECT Get data source"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"1264"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function c(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}},592428:function(e,n,o){o.d(n,{Z:function(){return s}});let s="data:image/png;base64,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"},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var s=o(667294);let a={},t=s.createContext(a);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);