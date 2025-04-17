"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["11784"],{35684:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>s,assets:()=>t,toc:()=>l,contentTitle:()=>i});var s=JSON.parse('{"id":"commands-legacy/dom-export-to-file","title":"DOM EXPORT TO FILE","description":"DOM EXPORT TO FILE ( elementRef ; rutaArchivo )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/dom-export-to-file.md","sourceDirName":"commands-legacy","slug":"/commands/dom-export-to-file","permalink":"/docs/es/commands/dom-export-to-file","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-export-to-file.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"dom-export-to-file","title":"DOM EXPORT TO FILE","slug":"/commands/dom-export-to-file","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM Create XML Ref","permalink":"/docs/es/commands/dom-create-xml-ref"},"next":{"title":"DOM EXPORT TO VAR","permalink":"/docs/es/commands/dom-export-to-var"}}'),a=r("785893"),o=r("250065");let d={id:"dom-export-to-file",title:"DOM EXPORT TO FILE",slug:"/commands/dom-export-to-file",displayed_sidebar:"docs"},i=void 0,t={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Gesti\xf3n de los caracteres de fin de l\xednea y de BOM",id:"gesti\xf3n-de-los-caracteres-de-fin-de-l\xednea-y-de-bom",level:3},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"DOM EXPORT TO FILE"})," ( ",(0,a.jsx)(n.em,{children:"elementRef"})," ; ",(0,a.jsx)(n.em,{children:"rutaArchivo"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"elementRef"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Referencia del elemento XML ra\xedz"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"rutaArchivo"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Ruta de acceso completa del archivo"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsx)(n.p,{children:"El comando DOM EXPORT TO FILE  permite guardar un \xe1rbol XML en un archivo en el disco."}),"\n",(0,a.jsxs)(n.p,{children:["Pase en ",(0,a.jsx)(n.em,{children:"elementRef"})," la referencia del elemento ra\xedz a exportar."]}),"\n",(0,a.jsxs)(n.p,{children:["Pase en ",(0,a.jsx)(n.em,{children:"rutaArchivo"})," la ruta de acceso completa del archivo de exportaci\xf3n a utilizar o a crear. Si el archivo no existe, se crea."]}),"\n",(0,a.jsx)(n.p,{children:"Si pasa \xfanicamente un nombre de archivo (sin ruta de acceso), se buscar\xe1 el archivo o se crear\xe1 junto al archivo de estructura."}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa una cadena vac\xeda (",(0,a.jsx)(n.em,{children:'""'}),"), aparece una caja de di\xe1logo est\xe1ndar de apertura y creaci\xf3n de archivos."]}),"\n",(0,a.jsx)(n.h3,{id:"gesti\xf3n-de-los-caracteres-de-fin-de-l\xednea-y-de-bom",children:"Gesti\xf3n de los caracteres de fin de l\xednea y de BOM"}),"\n",(0,a.jsx)(n.p,{children:"En XML, los saltos de l\xednea no son significativos, independientemente de si se encuentran dentro o entre los elementos XML. Internamente, XML utiliza caracteres est\xe1ndar LF como separadores de l\xedneas. Durante las operaciones de importaci\xf3n y exportaci\xf3n, los caracteres de salto de l\xednea se pueden convertir. Durante una importaci\xf3n, el analizador XML reemplaza los caracteres CRLF (rupturas de l\xednea est\xe1ndar en Windows) por caracteres de LF. Durante la exportaci\xf3n, los caracteres LF se sustituyen por caracteres CRLF en Windows (sin remplazar en macOS)."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"}),' si desea mantener los retornos de carro, debe incluir en un elemento XML CDATA de manera que no sea procesado por el analizador XML. En lugar de caracteres CRLF, tambi\xe9n puede utilizar el car\xe1cter "',(0,a.jsx)(n.br,{}),'", que es un retorno de carro expl\xedcito que no ser\xe1 procesado por el analizador.']}),"\n",(0,a.jsx)(n.p,{children:"Por defecto, los archivos XML se escriben sin BOM (Byte order mask)."}),"\n",(0,a.jsxs)(n.p,{children:["Puede controlar el final de l\xednea XML y la gesti\xf3n BOM utilizando el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota de compatibilidad:"})," en bases/proyectos creados con versiones de 4D hasta la v19.x, por defecto 4D utiliza CR como caracteres de fin de l\xednea en macOS y un BOM. Para activar la nueva configuraci\xf3n por defecto, compruebe los ajustes de compatibilidad (ver ",(0,a.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),") o utilice el comando ",(0,a.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,a.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsxs)(n.p,{children:["Este ejemplo guarda el \xe1rbol ",(0,a.jsx)(n.em,{children:"vRefElem"})," en el archivo MiDoc.xml:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0DOM EXPORT TO FILE(vRefElem;"C:\\\\carpeta\\MiDoc.xml")\n'})}),"\n",(0,a.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,a.jsx)(n.p,{children:"Si el comando se ejecut\xf3 correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0 y se genera un error."}),"\n",(0,a.jsx)(n.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,a.jsx)(n.p,{children:"Se genera un error cuando:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"La referencia del elemento no es v\xe1lida,"}),"\n",(0,a.jsx)(n.li,{children:"La ruta de acceso especificada no es v\xe1lida,"}),"\n",(0,a.jsx)(n.li,{children:"El volumen de almacenamiento devuelve un error (disco lleno, etc.)."}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/dom-export-to-var",children:"DOM EXPORT TO VAR"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/svg-export-to-picture",children:"SVG EXPORT TO PICTURE"})]}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"862"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2713"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var s=r(667294);let a={},o=s.createContext(a);function d(e){let n=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),s.createElement(o.Provider,{value:n},e.children)}}}]);