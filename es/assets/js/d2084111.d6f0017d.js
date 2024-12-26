"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["28871"],{359684:function(e,n,r){r.r(n),r.d(n,{metadata:()=>a,contentTitle:()=>d,default:()=>m,assets:()=>i,toc:()=>l,frontMatter:()=>t});var a=JSON.parse('{"id":"commands-legacy/dom-export-to-var","title":"DOM EXPORT TO VAR","description":"DOM EXPORT TO VAR ( elementRef ; vXmlVar )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/dom-export-to-var.md","sourceDirName":"commands-legacy","slug":"/commands/dom-export-to-var","permalink":"/docs/es/commands/dom-export-to-var","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fdom-export-to-var.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"dom-export-to-var","title":"DOM EXPORT TO VAR","slug":"/commands/dom-export-to-var","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"DOM EXPORT TO FILE","permalink":"/docs/es/commands/dom-export-to-file"},"next":{"title":"DOM Find XML element","permalink":"/docs/es/commands/dom-find-xml-element"}}'),o=r("785893"),s=r("250065");let t={id:"dom-export-to-var",title:"DOM EXPORT TO VAR",slug:"/commands/dom-export-to-var",displayed_sidebar:"docs"},d=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Gesti\xf3n de los caracteres de fin de l\xednea y de BOM",id:"gesti\xf3n-de-los-caracteres-de-fin-de-l\xednea-y-de-bom",level:5},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",h5:"h5",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"DOM EXPORT TO VAR"})," ( ",(0,o.jsx)(n.em,{children:"elementRef"})," ; ",(0,o.jsx)(n.em,{children:"vXmlVar"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"elementRef"}),(0,o.jsx)(n.td,{children:"Text"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsx)(n.td,{children:"Referencia del elemento XML ra\xedz"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"vXmlVar"}),(0,o.jsx)(n.td,{children:"Text, Blob"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"Variable a recibir el \xe1rbol XML"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(n.p,{children:"El comando DOM EXPORT TO VAR  permite guardar un \xe1rbol XML en una variable texto o BLOB."}),"\n",(0,o.jsxs)(n.p,{children:["Pase en *",(0,o.jsx)(n.em,{children:"elementRef"})," la referencia del elemento ra\xedz a exportar."]}),"\n",(0,o.jsxs)(n.p,{children:["Pase en ",(0,o.jsx)(n.em,{children:"vXmlVar"})," el nombre de la variable que debe contener el \xe1rbol XML. Esta variable puede ser de tipo Texto o BLOB. Puede seleccionar el tipo en funci\xf3n de las operaciones a efectuar o del tama\xf1o que el \xe1rbol pueda alcanzar (recuerde que en modo Unicode, las variables de tipo Texto est\xe1n limitadas a 32 K de texto, mientras en modo Unicode, este l\xedmite es de 2 GB)."]}),"\n",(0,o.jsxs)(n.p,{children:["Recuerde que si utiliza una variable de tipo texto para almacenar el elemento ",(0,o.jsx)(n.em,{children:"refElement"}),', en modo no Unicode, ser\xe1 codificado utilizando el conjunto de caracteres Mac \u201Cactual\u201D (es decir, Mac Roman en la mayor\xeda de los sistemas occidentales). Esto significa que el texto devuelto perder\xe1 su codificaci\xf3n original (encoding="xxx"). En este caso, la variables ',(0,o.jsx)(n.em,{children:"vVarXml"})," permite visualizar o almacenar el c\xf3digo obtenido pero NO generar un documento XML v\xe1lido (utilizando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/send-packet",title:"SEND PACKET",children:"SEND PACKET"})," por ejemplo)."]}),"\n",(0,o.jsx)(n.p,{children:"En modo Unicode, el c\xf3digo original se conserva en la variable."}),"\n",(0,o.jsx)(n.h5,{id:"gesti\xf3n-de-los-caracteres-de-fin-de-l\xednea-y-de-bom",children:"Gesti\xf3n de los caracteres de fin de l\xednea y de BOM"}),"\n",(0,o.jsx)(n.p,{children:"En XML, los saltos de l\xednea no son significativos, independientemente de si se encuentran dentro o entre los elementos XML. Internamente, XML utiliza caracteres est\xe1ndar LF como separadores de l\xedneas. Durante las operaciones de importaci\xf3n y exportaci\xf3n, los caracteres de salto de l\xednea se pueden convertir. Durante una importaci\xf3n, el analizador XML reemplaza los caracteres CRLF (rupturas de l\xednea est\xe1ndar en Windows) por caracteres de LF. Durante la exportaci\xf3n, los caracteres LF se sustituyen por caracteres CRLF en Windows (sin remplazar en macOS)."}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"}),' si desea mantener los retornos de carro, debe incluir en un elemento XML CDATA de manera que no sea procesado por el analizador XML. En lugar de caracteres CRLF, tambi\xe9n puede utilizar el car\xe1cter "',(0,o.jsx)(n.br,{}),'", que es un retorno de carro expl\xedcito que no ser\xe1 procesado por el analizador.']}),"\n",(0,o.jsx)(n.p,{children:"Por defecto, los archivos XML se escriben sin BOM (Byte order mask)."}),"\n",(0,o.jsxs)(n.p,{children:["Puede controlar el final de l\xednea XML y la gesti\xf3n BOM utilizando el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota de compatibilidad:"})," en bases/proyectos creados con versiones de 4D hasta la v19.x, por defecto 4D utiliza CR como caracteres de fin de l\xednea en macOS y un BOM. Para activar la nueva configuraci\xf3n por defecto, compruebe los ajustes de compatibilidad (ver ",(0,o.jsx)(n.em,{children:"P\xe1gina Compatibilidad"}),") o utilice el comando ",(0,o.jsx)(n.a,{href:"/docs/es/commands/xml-set-options",children:"XML SET OPTIONS"}),"."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:"Este ejemplo guarda el \xe1rbol vRefElem en una variable texto:"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:"\xa0var vtMiTexto : Text\n\xa0DOM EXPORT TO VAR(vRefElem;vtMiTexto)\n"})}),"\n",(0,o.jsx)(n.h4,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,o.jsx)(n.p,{children:"Si el comando se ejecut\xf3 correctamente, la variable sistema OK toma el valor 1. De lo contrario, toma el valor 0 y se genera un error (por ejemplo, si la referencia del elemento no es v\xe1lida)."}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.a,{href:"/docs/es/commands/dom-export-to-file",children:"DOM EXPORT TO FILE"}),(0,o.jsx)(n.br,{}),"\n",(0,o.jsx)(n.a,{href:"/docs/es/commands/svg-export-to-picture",children:"SVG EXPORT TO PICTURE"})]}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"863"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2713"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Modifica variables"}),(0,o.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return t}});var a=r(667294);let o={},s=a.createContext(o);function t(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:t(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);