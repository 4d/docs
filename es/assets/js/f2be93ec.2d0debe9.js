"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["98433"],{638809:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>r,assets:()=>l,toc:()=>o,contentTitle:()=>d});var r=JSON.parse('{"id":"commands-legacy/get-relation-properties","title":"GET RELATION PROPERTIES","description":"GET RELATION PROPERTIES ( ptrCamp|numTabla {; numCamp}; tablaUno ; campUno {; discriminante {; autoUno {; autoMuchos}}} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-relation-properties.md","sourceDirName":"commands-legacy","slug":"/commands/get-relation-properties","permalink":"/docs/es/commands/get-relation-properties","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-relation-properties.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-relation-properties","title":"GET RELATION PROPERTIES","slug":"/commands/get-relation-properties","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET MISSING TABLE NAMES","permalink":"/docs/es/commands/get-missing-table-names"},"next":{"title":"GET TABLE PROPERTIES","permalink":"/docs/es/commands/get-table-properties"}}'),i=s("785893"),t=s("250065");let a={id:"get-relation-properties",title:"GET RELATION PROPERTIES",slug:"/commands/get-relation-properties",displayed_sidebar:"docs"},d=void 0,l={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"GET RELATION PROPERTIES"})," ( ptrCamp|numTabla {; ",(0,i.jsx)(n.em,{children:"numCamp"}),"}; ",(0,i.jsx)(n.em,{children:"tablaUno"})," ; ",(0,i.jsx)(n.em,{children:"campUno"})," {; ",(0,i.jsx)(n.em,{children:"discriminante"})," {; ",(0,i.jsx)(n.em,{children:"autoUno"})," {; ",(0,i.jsx)(n.em,{children:"autoMuchos"}),"}}} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"ptrCamp|numTabla"}),(0,i.jsx)(n.td,{children:"Puntero, Entero largo"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Puntero de campo o n\xfamero de tabla"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"numCamp"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de campo si se pasa un n\xfamero de tabla  como primer par\xe1metro"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tablaUno"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"N\xfamero de la tabla Uno \xf3 0 si no se define  ninguna relaci\xf3n desde el campo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"campUno"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"N\xfamero de campo Uno \xf3 0 si no se define  ninguna relaci\xf3n desde el campo"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"discriminante"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"N\xfamero de campo discriminante o 0 si ning\xfan campo discriminante"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"autoUno"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = Relaci\xf3n uno autom\xe1tica,  False = Relaci\xf3n uno manual"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"autoMuchos"}),(0,i.jsx)(n.td,{children:"Boolean"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"True = Relaci\xf3n unos a muchos autom\xe1tica,  False = Relaci\xf3n unos a muchos manual"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando GET RELATION PROPERTIES devuelve las propiedades de la relaci\xf3n (si la hay) que comienza del campo fuente definido por ",(0,i.jsx)(n.em,{children:"numTabla"})," y ",(0,i.jsx)(n.em,{children:"numCamp"})," o por ",(0,i.jsx)(n.em,{children:"ptrCamp"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"Puede pasar:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["N\xfameros de tabla y de campo en ",(0,i.jsx)(n.em,{children:"numTabla"})," y ",(0,i.jsx)(n.em,{children:"numCamp"}),","]}),"\n",(0,i.jsxs)(n.li,{children:["O un puntero al campo en ",(0,i.jsx)(n.em,{children:"ptrCamp"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"Una se haya ejecutado el comando:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Los par\xe1metros ",(0,i.jsx)(n.em,{children:"tablaUno"})," y ",(0,i.jsx)(n.em,{children:"campoUno"})," contienen respectivamente el n\xfamero de la tabla y del campo hacia los cuales apunta la relaci\xf3n (del campo fuente). Si ninguna relaci\xf3n comienza en el campo, este par\xe1metro devuelve 0."]}),"\n",(0,i.jsxs)(n.li,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"discriminante"})," contiene el n\xfamero del campo discriminante (de la tabla objetivo) definido dentro de esta relaci\xf3n. Si no se ha definido un campo discriminante en esta relaci\xf3n, o si ninguna relaci\xf3n parte del campo fuente, este par\xe1metro devuelve 0."]}),"\n",(0,i.jsxs)(n.li,{children:["Los par\xe1metro ",(0,i.jsx)(n.em,{children:"autoUno"})," y ",(0,i.jsx)(n.em,{children:"autoMuchos"})," devuelven ",(0,i.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," si, respectivamente, las opciones \u201CRelaci\xf3n uno a muchos autom\xe1tica\u201D y \u201CRelaci\xf3n muchos a uno autom\xe1tica\u201D se han seleccionado para esta relaci\xf3n; de lo contrario, devuelven ",(0,i.jsx)(n.a,{href:"/docs/es/commands/false",title:"False",children:"False"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," los par\xe1metros ",(0,i.jsx)(n.em,{children:"autoUno"})," y ",(0,i.jsx)(n.em,{children:"autoMuchos"})," tambi\xe9n devolver\xe1n ",(0,i.jsx)(n.a,{href:"/docs/es/commands/true",title:"True",children:"True"})," si ninguna relaci\xf3n parte del campo fuente (en este caso devuelven valores no significativos.). El valor de los par\xe1metros ",(0,i.jsx)(n.em,{children:"tablaUno"})," y ",(0,i.jsx)(n.em,{children:"campUno"})," permiten asegurarse de que una relaci\xf3n existe."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/get-field-entry-properties",children:"GET FIELD ENTRY PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/get-field-properties",children:"GET FIELD PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/get-table-properties",children:"GET TABLE PROPERTIES"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-automatic-relations",children:"SET AUTOMATIC RELATIONS"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/set-field-relation",children:"SET FIELD RELATION"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"686"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return a}});var r=s(667294);let i={},t=r.createContext(i);function a(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);