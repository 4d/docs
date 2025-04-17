"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["45018"],{442919:function(e,t,s){s.r(t),s.d(t,{default:()=>p,frontMatter:()=>o,metadata:()=>n,assets:()=>i,toc:()=>c,contentTitle:()=>d});var n=JSON.parse('{"id":"commands-legacy/set-file-to-pasteboard","title":"SET FILE TO PASTEBOARD","description":"SET FILE TO PASTEBOARD ( archivo {; *} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/set-file-to-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/set-file-to-pasteboard","permalink":"/docs/es/20-R8/commands/set-file-to-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-file-to-pasteboard.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"set-file-to-pasteboard","title":"SET FILE TO PASTEBOARD","slug":"/commands/set-file-to-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Pasteboard data size","permalink":"/docs/es/20-R8/commands/pasteboard-data-size"},"next":{"title":"SET PICTURE TO PASTEBOARD","permalink":"/docs/es/20-R8/commands/set-picture-to-pasteboard"}}'),r=s("785893"),a=s("250065");let o={id:"set-file-to-pasteboard",title:"SET FILE TO PASTEBOARD",slug:"/commands/set-file-to-pasteboard",displayed_sidebar:"docs"},d=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function l(e){let t={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"SET FILE TO PASTEBOARD"})," ( ",(0,r.jsx)(t.em,{children:"archivo"})," {; *} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{children:"Par\xe1metro"}),(0,r.jsx)(t.th,{children:"Tipo"}),(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"archivo"}),(0,r.jsx)(t.td,{children:"Text"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Nombre del archivo o ruta de acceso completa del archivo"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"*"}),(0,r.jsx)(t.td,{children:"Operador"}),(0,r.jsx)(t.td,{children:"\u2192"}),(0,r.jsx)(t.td,{children:"Si se pasa = a\xf1adir; Si se omite= reemplazar"})]})]})]}),"\n",(0,r.jsx)(t.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(t.p,{children:["El comando SET FILE TO PASTEBOARD a\xf1ade al portapapeles la ruta de acceso completa del archivo pasada en el par\xe1metro ",(0,r.jsx)(t.em,{children:"archivo"}),". Este comando permite crear interfaces permitiendo arrastrar y soltar objetos 4D a los archivos en el escritorio por ejemplo."]}),"\n",(0,r.jsxs)(t.p,{children:["En el par\xe1metro ",(0,r.jsx)(t.em,{children:"archivo"}),", puede pasar una ruta de acceso completo o un simple nombre de archivo (sin ruta de acceso). En el \xfaltimo caso, el archivo debe estar ubicado junto al archivo de estructura de la base."]}),"\n",(0,r.jsxs)(t.p,{children:["El comando admite el asterisco ",(0,r.jsx)(t.em,{children:"*"})," como par\xe1metro opcional. Por defecto, cuando se omite este par\xe1metro, el comando reemplaza el contenido del portapapeles por la \xfaltima ruta de acceso definida por ",(0,r.jsx)(t.em,{children:"archivo"}),". Si pasa este par\xe1metro, el comando a\xf1ade el ",(0,r.jsx)(t.em,{children:"archivo"}),' al portapapeles. De esta forma puede contener una "pila" de rutas de acceso de archivos. En ambos casos, se borran los datos diferentes a las rutas de acceso que est\xe9n en el portapapeles.']}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.strong,{children:"Nota:"})," el portapapeles est\xe1 en modo s\xf3lo lectura durante el evento de formulario On Drag Over. Por lo tanto no es posible utilizar este comando en ese contexto."]}),"\n",(0,r.jsx)(t.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.a,{href:"/docs/es/20-R8/commands/get-file-from-pasteboard",children:"Get file from pasteboard"})}),"\n",(0,r.jsx)(t.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(t.table,{children:[(0,r.jsx)(t.thead,{children:(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.th,{}),(0,r.jsx)(t.th,{})]})}),(0,r.jsxs)(t.tbody,{children:[(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"N\xfamero de comando"}),(0,r.jsx)(t.td,{children:"975"})]}),(0,r.jsxs)(t.tr,{children:[(0,r.jsx)(t.td,{children:"Hilo seguro"}),(0,r.jsx)(t.td,{children:"\u2717"})]})]})]})]})}function p(e={}){let{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},250065:function(e,t,s){s.d(t,{Z:function(){return d},a:function(){return o}});var n=s(667294);let r={},a=n.createContext(r);function o(e){let t=n.useContext(a);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);