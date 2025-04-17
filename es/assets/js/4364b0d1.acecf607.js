"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["51969"],{914142:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>r,assets:()=>c,toc:()=>t,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/goto-selected-record","title":"GOTO SELECTED RECORD","description":"GOTO SELECTED RECORD ( {tabla ;} registro )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/goto-selected-record.md","sourceDirName":"commands-legacy","slug":"/commands/goto-selected-record","permalink":"/docs/es/commands/goto-selected-record","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fgoto-selected-record.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"goto-selected-record","title":"GOTO SELECTED RECORD","slug":"/commands/goto-selected-record","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET HIGHLIGHTED RECORDS","permalink":"/docs/es/commands/get-highlighted-records"},"next":{"title":"HIGHLIGHT RECORDS","permalink":"/docs/es/commands/highlight-records"}}'),l=s("785893"),o=s("250065");let d={id:"goto-selected-record",title:"GOTO SELECTED RECORD",slug:"/commands/goto-selected-record",displayed_sidebar:"docs"},a=void 0,c={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function i(e){let n={a:"a",code:"code",em:"em",h2:"h2",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"GOTO SELECTED RECORD"})," ( {",(0,l.jsx)(n.em,{children:"tabla"})," ;} ",(0,l.jsx)(n.em,{children:"registro"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"tabla"}),(0,l.jsx)(n.td,{children:"Table"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Tabla en la cual ir al registro seleccionado o Tabla por defecto, si se omite"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"registro"}),(0,l.jsx)(n.td,{children:"Integer"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Posici\xf3n del registro en la selecci\xf3n"})]})]})]}),"\n",(0,l.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"GOTO SELECTED RECORD"})," vuelve el registro especificado en la selecci\xf3n actual de ",(0,l.jsx)(n.em,{children:"tabla"})," el registro actual. La selecci\xf3n actual no cambia. El par\xe1metro ",(0,l.jsx)(n.em,{children:"registro"})," no es el mismo del n\xfamero devuelto por ",(0,l.jsx)(n.a,{href:"/docs/es/commands/record-number",children:"Record number"}),"; Este par\xe1metro representa la posici\xf3n del registro en la selecci\xf3n actual. La posici\xf3n del registro depende de la manera en que la selecci\xf3n ha sido creada y ordenada."]}),"\n",(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"GOTO SELECTED RECORD"})," no hace nada si:"]}),"\n",(0,l.jsxs)(n.ul,{children:["\n",(0,l.jsx)(n.li,{children:"no hay registros en la selecci\xf3n actual"}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"registro"})," no est\xe1 en la selecci\xf3n actual,"]}),"\n",(0,l.jsxs)(n.li,{children:[(0,l.jsx)(n.em,{children:"registro"})," ya es el registro actual."]}),"\n"]}),"\n",(0,l.jsxs)(n.p,{children:["Si pasa 0 en ",(0,l.jsx)(n.em,{children:"registro"}),", no habr\xe1 registro actual en ",(0,l.jsx)(n.em,{children:"tabla"}),". Este mecanismo permite deseleccionar todos los registros en una lista, en particular en el caso de los subformularios incluidos, cuando el modo de selecci\xf3n es \u201C\xfanico\u201D."]}),"\n",(0,l.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsxs)(n.p,{children:["El siguiente ejemplo carga datos del campo [People]Last Name en el array ",(0,l.jsx)(n.em,{children:"atNames"}),". Un array de enteros largos, llamado ",(0,l.jsx)(n.em,{children:"alRecNum"}),", se llena con los n\xfameros que representar\xe1n a los registros seleccionados. Luego se ordenan los dos arrays:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0\xa0// Crear aqu\xed la selecci\xf3n de la tabla [People]\n\xa0\xa0// ...\n\xa0\xa0// Obtener los nombres\n\xa0SELECTION TO ARRAY([People]Last Name;atNames)\n\xa0\xa0// Crear un array para los n\xfameros de registros seleccionados\n\xa0$vlNbRecords:=Size of array(atNames)\n\xa0ARRAY LONGINT(alRecNum;$vlNbRecords)\n\xa0For($vlRecord;1;$vlNbRecords)\n\xa0\xa0\xa0\xa0alRecNum{$vlRecord}:=$vlRecord\n\xa0End for\n\xa0\xa0// Ordenar los dos arrays en orden alfab\xe9tico\n\xa0SORT ARRAY(atNames;alRecNum;>)\n"})}),"\n",(0,l.jsxs)(n.p,{children:["Si el array ",(0,l.jsx)(n.em,{children:"atNames"})," se muestra en un \xe1rea de desplazamiento, el usuario hace clic en uno de los elementos. Como la ordenaci\xf3n de los dos arrays est\xe1 sincronizada, todo elemento de ",(0,l.jsx)(n.em,{children:"alRecNum"})," ofrece el n\xfamero del registro seleccionado para el registro cuyo nombre se guarda en el elemento correspondiente en ",(0,l.jsx)(n.em,{children:"atNames"}),"."]}),"\n",(0,l.jsxs)(n.p,{children:["El siguiente m\xe9todo de objeto del \xe1rea desplegable ",(0,l.jsx)(n.em,{children:"atNames"})," selecciona el registro correcto en la selecci\xf3n de [People], de acuerdo al nombre elegido en el \xe1rea de desplazamiento:"]}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:"\xa0Case of\n\xa0\xa0\xa0\xa0:(Form event code=On Clicked)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(atNames#0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0GOTO SELECTED RECORD(alRecNum{atNames})\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0End case\n"})}),"\n",(0,l.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/es/commands/selected-record-number",children:"Selected record number"})}),"\n",(0,l.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"245"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Modifica el registro actual"}),(0,l.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(i,{...e})}):i(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return d}});var r=s(667294);let l={},o=r.createContext(l);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);