"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45985"],{347441:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>c,assets:()=>r,toc:()=>i,contentTitle:()=>s});var c=JSON.parse('{"id":"commands-legacy/get-document-icon","title":"GET DOCUMENT ICON","description":"GET DOCUMENT ICON ( rutaDoc ; icono {; tama\xf1o} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-document-icon.md","sourceDirName":"commands-legacy","slug":"/commands/get-document-icon","permalink":"/docs/es/20-R7/commands/get-document-icon","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-document-icon.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-document-icon","title":"GET DOCUMENT ICON","slug":"/commands/get-document-icon","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FOLDER LIST","permalink":"/docs/es/20-R7/commands/folder-list"},"next":{"title":"Get document position","permalink":"/docs/es/20-R7/commands/get-document-position"}}'),t=o("785893"),d=o("250065");let a={id:"get-document-icon",title:"GET DOCUMENT ICON",slug:"/commands/get-document-icon",displayed_sidebar:"docs"},s=void 0,r={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET DOCUMENT ICON"})," ( ",(0,t.jsx)(n.em,{children:"rutaDoc"})," ; ",(0,t.jsx)(n.em,{children:"icono"})," {; ",(0,t.jsx)(n.em,{children:"tama\xf1o"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"rutaDoc"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Nombre o ruta de acceso del archivo del cual obtener el icono o cadena vac\xeda para mostrar la caja de di\xe1logo de apertura de archivos"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"icono"}),(0,t.jsx)(n.td,{children:"Picture, Picture"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Icono de documentaci\xf3n"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"tama\xf1o"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Tama\xf1o del icono (en p\xedxeles)"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando GET DOCUMENT ICON devuelve en el campo o la variable imagen 4D ",(0,t.jsx)(n.em,{children:"icono"}),", el icono del documento cuyo nombre o ruta de acceso se pasa en ",(0,t.jsx)(n.em,{children:"rutaDoc"}),".puede especificar un archivo de todo tipo (ejecutable, documento, atajo o alias, etc.) o una carpeta."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase en ",(0,t.jsx)(n.em,{children:"rutaDoc"})," la ruta de acceso absoluta del documento. Igualmente, puede pasar \xfanicamente el nombre del documento o ruta de acceso relativa, en este caso el documento debe encontrarse en el directorio actual de la base (generalmente, la carpeta que contiene el archivo de estructura de la base)."]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa una cadena vac\xeda en ",(0,t.jsx)(n.em,{children:"rutaDoc"}),", aparece la caja de di\xe1logo est\xe1ndar de apertura de archivos, permitiendo al usuario seleccionar el archivo a leer. Una vez se valida la caja de di\xe1logo, la variable sistema Document contiene la ruta de acceso completa del archivo seleccionado."]}),"\n",(0,t.jsxs)(n.p,{children:["Pase en ",(0,t.jsx)(n.em,{children:"icono"})," un campo o una variable imagen 4D. Despu\xe9s de la ejecuci\xf3n del comando, este par\xe1metro contiene el icono del archivo (formato PICT)."]}),"\n",(0,t.jsxs)(n.p,{children:["El par\xe1metro opcional ",(0,t.jsx)(n.em,{children:"tama\xf1o"})," permite indicar las dimensiones en p\xedxeles del icono. Este valor representa el largo del cuadrado incluyendo el icono. Generalmente, los iconos se definen de 32x32 p\xedxeles (\u201Ciconos largos\u201D) o 16x16 p\xedxeles (\u201Ciconos peque\xf1os\u201D). Si pasa 0 u omite este par\xe1metro, el comando devuelve el icono m\xe1s grande disponible."]}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"700"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"Document, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return s},a:function(){return a}});var c=o(667294);let t={},d=c.createContext(t);function a(e){let n=c.useContext(d);return c.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),c.createElement(d.Provider,{value:n},e.children)}}}]);