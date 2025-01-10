"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7882"],{226736:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>a,assets:()=>t,toc:()=>o,contentTitle:()=>l});var a=JSON.parse('{"id":"commands-legacy/set-picture-to-library","title":"SET PICTURE TO LIBRARY","description":"SET PICTURE TO LIBRARY ( imagen ; refImag ; nomImag )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/set-picture-to-library.md","sourceDirName":"commands-legacy","slug":"/commands/set-picture-to-library","permalink":"/docs/es/commands/set-picture-to-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fset-picture-to-library.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"set-picture-to-library","title":"SET PICTURE TO LIBRARY","slug":"/commands/set-picture-to-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"SET PICTURE METADATA","permalink":"/docs/es/commands/set-picture-metadata"},"next":{"title":"TRANSFORM PICTURE","permalink":"/docs/es/commands/transform-picture"}}'),i=r("785893"),s=r("250065");let d={id:"set-picture-to-library",title:"SET PICTURE TO LIBRARY",slug:"/commands/set-picture-to-library",displayed_sidebar:"docs"},l=void 0,t={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Gesti\xf3n de errores",id:"gesti\xf3n-de-errores",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"SET PICTURE TO LIBRARY"})," ( ",(0,i.jsx)(n.em,{children:"imagen"})," ; ",(0,i.jsx)(n.em,{children:"refImag"})," ; ",(0,i.jsx)(n.em,{children:"nomImag"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"imagen"}),(0,i.jsx)(n.td,{children:"Picture"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nueva imagen"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"refImag"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"N\xfamero de referencia de la imagen en la librer\xeda de im\xe1genes"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"nomImag"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nuevo nombre de la imagen"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsx)(n.p,{children:"El comando SET PICTURE TO LIBRARY crea una nueva imagen o reemplaza una imagen existente en la librer\xeda de im\xe1genes."}),"\n",(0,i.jsx)(n.p,{children:"Antes de llamar el comando, usted pasa:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["el n\xfamero de referencia de la imagen en ",(0,i.jsx)(n.em,{children:"refImag"})," (entre 1 y 32767 )"]}),"\n",(0,i.jsxs)(n.li,{children:["la imagen misma en ",(0,i.jsx)(n.em,{children:"imagen"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["el nombre de la imagen en ",(0,i.jsx)(n.em,{children:"nomImag"})," (longitud m\xe1xima: 255 caracteres)."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Si hay una imagen en la librer\xeda de im\xe1genes con el mismo n\xfamero de referencia, su contenido ser\xe1 reemplazado y la imagen se renombra con los valores pasados en ",(0,i.jsx)(n.em,{children:"imagen"})," y ",(0,i.jsx)(n.em,{children:"nomImag."})]}),"\n",(0,i.jsxs)(n.p,{children:["Si no hay una imagen en la librer\xeda de im\xe1genes con el n\xfamero de referencia pasado en ",(0,i.jsx)(n.em,{children:"refImag"}),", una nueva imagen se a\xf1ade a la librer\xeda de im\xe1genes."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"4D Server:"})," SET PICTURE TO LIBRARY no puede utilizarse dentro de un m\xe9todo ejecutado en el equipo servidor (procedimiento almacenado o trigger). Si llama SET PICTURE TO LIBRARY en un equipo servidor, no pasa nada, la llamada se ignora."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Advertencia:"})," los objetos de estructura (elementos de listas jer\xe1rquicas, l\xedneas de men\xfa, etc.) pueden referirse a una imagen de la librer\xeda de im\xe1genes. Sea prudente cuando modifique por programaci\xf3n una imagen de la librer\xeda de im\xe1genes."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," si pasa una imagen vac\xeda en ",(0,i.jsx)(n.em,{children:"imagen"})," o un valor negativo o nulo en ",(0,i.jsx)(n.em,{children:"refImag"}),", el comando no hace nada."]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.p,{children:"Sin importar el contenido actual de la librer\xeda de im\xe1genes, el siguiente ejemplo a\xf1ade una nueva imagen a la librer\xeda buscando primero un n\xfamero de referencia de una imagen \xfanica:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST($alRefImag;$asNomsImag)\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vlRefImag:=1+Abs(Random)\n\xa0Until(Find in array($alRefImag;$vlRefImag)<0)\n\xa0SET PICTURE TO LIBRARY(vgImagen;$vlRefImag;"Nueva Imagen")\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["El siguiente ejemplo importa en la librer\xeda de im\xe1genes las im\xe1genes (almacenadas en un documento en disco) creadas por el tercer ejemplo del comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/picture-library-list",title:"PICTURE LIBRARY LIST",children:"PICTURE LIBRARY LIST"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0SET CHANNEL(10;"")\n\xa0If(OK=1)\n\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsTag)\n\xa0\xa0\xa0\xa0If($vsTag="4DV6PICTURELIBRARYEXPORT")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlNbImagenes)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0If($vlNbImagenes>0)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0For($vlImag;1;$vlNbImagenes)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vlPicRef)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vsNomImag)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0RECEIVE VARIABLE($vgImag)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0If(OK=1)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0SET PICTURE TO LIBRARY($vgImag;$vlRefImag;$vsNomImag)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0$vlImag:=$vlNbImagenes+1\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Este archivo parece estar da\xf1ado.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0End for\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("Este archivo parece estar da\xf1ado.")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0Else\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0ALERT("El archivo \u201C"+Document+"\u201D no es un archivo de exportaci\xf3n de la librer\xeda de im\xe1genes.")\n\xa0\xa0\xa0\xa0End if\n\xa0\xa0\xa0\xa0SET CHANNEL(11)\n\xa0End if\n'})}),"\n",(0,i.jsx)(n.h4,{id:"gesti\xf3n-de-errores",children:"Gesti\xf3n de errores"}),"\n",(0,i.jsx)(n.p,{children:"Si no hay suficiente memoria para a\xf1adir la imagen a la librer\xeda de im\xe1genes, se genera un error -108. Note que los errores E/S tambi\xe9n pueden ser generados (si por ejemplo el archivo de estructura est\xe1 bloqueado). Puede interceptar estos errores con un m\xe9todo de gesti\xf3n de errores."}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"/docs/es/commands/get-picture-from-library",children:"GET PICTURE FROM LIBRARY"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,i.jsx)(n.br,{}),"\n",(0,i.jsx)(n.a,{href:"/docs/es/commands/remove-picture-from-library",children:"REMOVE PICTURE FROM LIBRARY"})]}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"566"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"error"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,i.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return l},a:function(){return d}});var a=r(667294);let i={},s=a.createContext(i);function d(e){let n=a.useContext(s);return a.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);