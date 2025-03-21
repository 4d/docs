"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3014"],{883119:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>o,metadata:()=>a,assets:()=>r,toc:()=>d,contentTitle:()=>i});var a=JSON.parse('{"id":"commands-legacy/blob-to-list","title":"BLOB to list","description":"BLOB to list ( BLOB {; offset} ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/blob-to-list.md","sourceDirName":"commands-legacy","slug":"/commands/blob-to-list","permalink":"/docs/es/commands/blob-to-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fblob-to-list.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"blob-to-list","title":"BLOB to list","slug":"/commands/blob-to-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"BLOB to integer","permalink":"/docs/es/commands/blob-to-integer"},"next":{"title":"BLOB to longint","permalink":"/docs/es/commands/blob-to-longint"}}'),t=s("785893"),l=s("250065");let o={id:"blob-to-list",title:"BLOB to list",slug:"/commands/blob-to-list",displayed_sidebar:"docs"},i=void 0,r={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"BLOB to list"})," ( ",(0,t.jsx)(n.em,{children:"BLOB"})," {; ",(0,t.jsx)(n.em,{children:"offset"}),"} ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"Blob"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"BLOB que contiene una lista jer\xe1rquica"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"offset"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2194"}),(0,t.jsx)(n.td,{children:"Offset en el BLOB (expresado en bytes)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{}),(0,t.jsx)(n.td,{children:"Nuevo offset despu\xe9s de la lectura"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Resultado"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Referencia de la lista creada recientemente"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando BLOB to list crea una nueva lista jer\xe1rquica con los datos almacenados en el BLOB ",(0,t.jsx)(n.em,{children:"blob"})," en el offset de bytes (a partir de cero) especificado por ",(0,t.jsx)(n.em,{children:"offset"})," y devuelve un n\xfamero de referencia de lista jer\xe1rquica para esa nueva lista."]}),"\n",(0,t.jsxs)(n.p,{children:["Los datos del BLOB deben ser compatibles con el comando. Generalmente, usted utiliza BLOBs llenados previamente con el comando ",(0,t.jsx)(n.a,{href:"/docs/es/commands/list-to-blob",title:"LIST TO BLOB",children:"LIST TO BLOB"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:["Si no especifica el par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"offset"}),", los valores de las lista se leen desde el comienzo del BLOB. Si trabaja con un BLOB en el cual se almacenan muchas variables o listas, debe pasar el par\xe1metro ",(0,t.jsx)(n.em,{children:"offset"})," y, adicionalmente, debe pasar una variable num\xe9rica. Antes del llamado, fije esta variable num\xe9rica al offset apropiado. Despu\xe9s del llamado, la misma variable num\xe9rica devuelve el offset de la variable siguiente almacenada en el BLOB."]}),"\n",(0,t.jsx)(n.p,{children:"Despu\xe9s del llamado, si la lista jer\xe1rquica ha sido creada correctamente, la variable OK toma el valor 1. Si la operaci\xf3n no pueder ser efectuada, la variable OK toma el valor 0; por ejemplo, si no hay suficiente memoria."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota sobre la independencia de plataforma:"})," BLOB to list y ",(0,t.jsx)(n.a,{href:"/docs/es/commands/list-to-blob",title:"LIST TO BLOB",children:"LIST TO BLOB"})," utilizan un formato interno 4D para administrar listas almacenadas en BLOBs. La ventaja es que usted no tiene que preocuparse por la conversi\xf3n de bytes (byte swapping) entre plataformas cuando utilice estos dos comandos. En otras palabras, un BLOB creado en Windows utilizando estos dos comandos puede ser reutilizados en Macintosh y viceversa."]}),"\n",(0,t.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"En este ejemplo, el m\xe9todo de un formulario de entrada extrae una lista de un campo BLOB antes de que el formulario aparezca en la pantalla, y lo almacena nuevamente en el campo BLOB si la entrada de datos se valida:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0// M\xe9todo de formulario [Cosas por hacer];"Entrada"\n\xa0\n\xa0Case of\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Load)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0hList:=BLOB to list([Cosas por hacer]Ideas)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0hList:=New list\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\n\xa0\xa0\xa0\xa0:(FORM Event=On Unload)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0CLEAR LIST(hList;*)\n\xa0\n\xa0\xa0\xa0\xa0:(bValidate=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0LIST TO BLOB(hList;[Cosas por hacer]Ideas)\n\xa0\n\xa0End case\n'})}),"\n",(0,t.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,t.jsx)(n.p,{children:"La variable OK toma el valor 1 si la lista se crea correctamente, de lo contrario toma el valor 0."}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/commands/list-to-blob",children:"LIST TO BLOB"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"557"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"OK"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return i},a:function(){return o}});var a=s(667294);let t={},l=a.createContext(t);function o(e){let n=a.useContext(l);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:o(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);