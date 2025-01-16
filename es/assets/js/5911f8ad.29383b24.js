"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["79872"],{110329:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>d,metadata:()=>i,assets:()=>l,toc:()=>t,contentTitle:()=>o});var i=JSON.parse('{"id":"commands-legacy/remove-picture-from-library","title":"REMOVE PICTURE FROM LIBRARY","description":"REMOVE PICTURE FROM LIBRARY ( refImag | nomImag )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/remove-picture-from-library.md","sourceDirName":"commands-legacy","slug":"/commands/remove-picture-from-library","permalink":"/docs/es/commands/remove-picture-from-library","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fremove-picture-from-library.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"remove-picture-from-library","title":"REMOVE PICTURE FROM LIBRARY","slug":"/commands/remove-picture-from-library","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"READ PICTURE FILE","permalink":"/docs/es/commands/read-picture-file"},"next":{"title":"SET PICTURE FILE NAME","permalink":"/docs/es/commands/set-picture-file-name"}}'),a=r("785893"),s=r("250065");let d={id:"remove-picture-from-library",title:"REMOVE PICTURE FROM LIBRARY",slug:"/commands/remove-picture-from-library",displayed_sidebar:"docs"},o=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"REMOVE PICTURE FROM LIBRARY"})," ( refImag | nomImag )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsx)(n.tbody,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"refImag | nomImag"}),(0,a.jsx)(n.td,{children:"Entero largo, Cadena"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de referencia o nombre de una imagen de la librer\xeda de im\xe1genes"})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando REMOVE PICTURE FROM LIBRARY elimina de la librer\xeda de im\xe1genes la imagen cuyo n\xfamero de referencia se pasa en ",(0,a.jsx)(n.em,{children:"refImag"})," o cuyo nombre se pasa en ",(0,a.jsx)(n.em,{children:"nomImag"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Si el n\xfamero de referencia o nombre no corresponden a ninguna imagen, el comando no hace nada."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"4D Server:"})," REMOVE PICTURE FROM LIBRARY no puede utilizarse desde un m\xe9todo ejecutado en el equipo servidor (procedimiento almacenado o trigger). Si llama REMOVE PICTURE FROM LIBRARY en un equipo servidor, no pasa nada, se ignora la llamada."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Advertencia:"})," los objetos de dise\xf1o (elementos de lista jer\xe1rquica, l\xedneas de men\xfa, etc.) pueden hacer referencia a una imagen de la librer\xeda. Sea prudente cuando elimine por programaci\xf3n una imagen de la librer\xeda de im\xe1genes."]}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,a.jsx)(n.p,{children:"El siguiente ejemplo borra la imagen #4444 de la librer\xeda de im\xe1genes."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:"\xa0REMOVE PICTURE FROM LIBRARY(4444)\n"})}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,a.jsxs)(n.p,{children:["El siguiente ejemplo borra de la librer\xeda de im\xe1genes toda imagen cuyo nombre comience por el s\xedmbolo d\xf3lar (",(0,a.jsx)(n.em,{children:"$"}),"):"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0PICTURE LIBRARY LIST($alRefImag;$asNomImag)\n\xa0For($vlImag;1;Size of array($alRefImag))\n\xa0\xa0\xa0\xa0If($asNomImag{$vlImag}="$@")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0REMOVE PICTURE FROM LIBRARY($alRefImag{$vlImag})\n\xa0\xa0\xa0\xa0End if\n\xa0End for\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/docs/es/commands/get-picture-from-library",children:"GET PICTURE FROM LIBRARY"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/picture-library-list",children:"PICTURE LIBRARY LIST"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.a,{href:"/docs/es/commands/set-picture-to-library",children:"SET PICTURE TO LIBRARY"})]}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"567"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Prohibido en el servidor"}),(0,a.jsx)(n.td,{})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return d}});var i=r(667294);let a={},s=i.createContext(a);function d(e){let n=i.useContext(s);return i.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);