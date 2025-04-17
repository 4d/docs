"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["9329"],{565037:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>a,metadata:()=>i,assets:()=>t,toc:()=>o,contentTitle:()=>d});var i=JSON.parse('{"id":"commands-legacy/get-picture-from-library","title":"GET PICTURE FROM LIBRARY","description":"GET PICTURE FROM LIBRARY ( refImag | nomImag ; imagen )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R9/commands-legacy/get-picture-from-library.md","sourceDirName":"commands-legacy","slug":"/commands/get-picture-from-library","permalink":"/docs/es/commands/get-picture-from-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-picture-from-library.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"get-picture-from-library","title":"GET PICTURE FROM LIBRARY","slug":"/commands/get-picture-from-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"GET PICTURE FORMATS","permalink":"/docs/es/commands/get-picture-formats"},"next":{"title":"GET PICTURE KEYWORDS","permalink":"/docs/es/commands/get-picture-keywords"}}'),s=r("785893"),l=r("250065");let a={id:"get-picture-from-library",title:"GET PICTURE FROM LIBRARY",slug:"/commands/get-picture-from-library",displayed_sidebar:"docs"},d=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo 1",id:"ejemplo-1",level:2},{value:"Ejemplo 2",id:"ejemplo-2",level:2},{value:"Ejemplo 3",id:"ejemplo-3",level:2},{value:"Variables y conjuntos del sistema",id:"variables-y-conjuntos-del-sistema",level:2},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"GET PICTURE FROM LIBRARY"})," ( refImag | nomImag ; ",(0,s.jsx)(n.em,{children:"imagen"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"refImag | nomImag"}),(0,s.jsx)(n.td,{children:"Entero largo, Cadena"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de referencia o nombre de una imagen de la librer\xeda de im\xe1genes"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"imagen"}),(0,s.jsx)(n.td,{children:"Picture"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Imagen de la librer\xeda de im\xe1genes"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando GET PICTURE FROM LIBRARY devuelve en el par\xe1metro ",(0,s.jsx)(n.em,{children:"imagen"})," la imagen de la librer\xeda de im\xe1genes cuyo n\xfamero de referencia se pasa en ",(0,s.jsx)(n.em,{children:"refImag"})," o cuyo nombre se pasa en ",(0,s.jsx)(n.em,{children:"nomImag"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si no hay una imagen con ese nombre o n\xfamero de referencia, GET PICTURE FROM LIBRARY no modifica ",(0,s.jsx)(n.em,{children:"imagen"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo devuelve en ",(0,s.jsx)(n.em,{children:"vgMiImagen"})," la imagen cuyo n\xfamero de referencia se almacena en la variable local ",(0,s.jsx)(n.em,{children:"$vlRefImag"}),":"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:"\xa0GET PICTURE FROM LIBRARY($vlRefImag;vgMiImagen)\n"})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,s.jsxs)(n.p,{children:["El siguiente ejemplo devuelve en ",(0,s.jsx)(n.em,{children:"$DDcom_Prot_MiImagen"}),' la imagen con el nombre "DDcom_Prot_Boton1" almacenada en la librer\xeda de im\xe1genes:']}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-4d",children:'\xa0GET PICTURE FROM LIBRARY("XP - Aceptar";$XP_Aceptar)\n'})}),"\n",(0,s.jsx)(n.h2,{id:"ejemplo-3",children:"Ejemplo 3"}),"\n",(0,s.jsxs)(n.p,{children:["Ver el tercer ejemplo para el comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/picture-library-list",title:"PICTURE LIBRARY LIST",children:"PICTURE LIBRARY LIST"}),"."]}),"\n",(0,s.jsx)(n.h2,{id:"variables-y-conjuntos-del-sistema",children:"Variables y conjuntos del sistema"}),"\n",(0,s.jsx)(n.p,{children:"La variable sistema OK toma el valor 1 si la imagen existe en la librer\xeda de im\xe1genes. De lo contrario, OK toma el valor cero."}),"\n",(0,s.jsx)(n.h2,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,s.jsx)(n.p,{children:"Si no hay suficiente memoria para devolver la imagen, se genera el error -108. Puede interceptar este error utilizando un m\xe9todo de gesti\xf3n de errores."}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.a,{href:"/docs/es/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/remove-picture-from-library",children:"REMOVE PICTURE FROM LIBRARY"}),(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.a,{href:"/docs/es/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"565"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"OK, error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return d},a:function(){return a}});var i=r(667294);let s={},l=i.createContext(s);function a(e){let n=i.useContext(l);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);