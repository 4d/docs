"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7885"],{403887:function(e,n,r){r.r(n),r.d(n,{metadata:()=>t,contentTitle:()=>i,default:()=>h,assets:()=>o,toc:()=>c,frontMatter:()=>d});var t=JSON.parse('{"id":"commands-legacy/get-file-from-pasteboard","title":"Get file from pasteboard","description":"Get file from pasteboard ( indiceN ) : Text","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-file-from-pasteboard.md","sourceDirName":"commands-legacy","slug":"/commands/get-file-from-pasteboard","permalink":"/docs/es/commands/get-file-from-pasteboard","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-file-from-pasteboard.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-file-from-pasteboard","title":"Get file from pasteboard","slug":"/commands/get-file-from-pasteboard","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"CLEAR PASTEBOARD","permalink":"/docs/es/commands/clear-pasteboard"},"next":{"title":"GET PASTEBOARD DATA","permalink":"/docs/es/commands/get-pasteboard-data"}}'),a=r("785893"),s=r("250065");let d={id:"get-file-from-pasteboard",title:"Get file from pasteboard",slug:"/commands/get-file-from-pasteboard",displayed_sidebar:"docs"},i=void 0,o={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function l(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Get file from pasteboard"})," ( ",(0,a.jsx)(n.em,{children:"indiceN"})," ) : Text"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"indiceN"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N archivo incluido en la acci\xf3n arrastrar"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Resultado"}),(0,a.jsx)(n.td,{children:"Text"}),(0,a.jsx)(n.td,{children:"\u2190"}),(0,a.jsx)(n.td,{children:"Ruta de acceso al archivo extra\xeddo del portapapeles"})]})]})]}),"\n",(0,a.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:["El comando Get file from pasteboard devuelve la ruta de acceso absoluto de un archivo incluido en una operaci\xf3n de arrastrar y soltar. Varios archivos pueden ser seleccionados y movidos simult\xe1neamente. El par\xe1metro ",(0,a.jsx)(n.em,{children:"indiceN"})," se utiliza para designar un archivo entre un conjunto de archivos seleccionados."]}),"\n",(0,a.jsx)(n.p,{children:"Si no hay archivo N en el portapapeles, el comando devuelve una cadena vac\xeda."}),"\n",(0,a.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,a.jsx)(n.p,{children:"El siguiente ejemplo puede utilizarse para recuperar en un array todas las rutas de acceso a los archivos inclu\xeddos en la operaci\xf3n arrastrar y soltar:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($arrayArchivos;0)\n\xa0var $vtarchivo : Text\n\xa0var $n : Integer\n\xa0$n:=1\n\xa0Repeat\n\xa0\xa0\xa0\xa0$vtarchivo:=Get file from pasteboard($n)\n\xa0\xa0\xa0\xa0If($vtarchivo#"")\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0APPEND TO ARRAY($arrayArchivos;$vtarchivo)\n\xa0\xa0\xa0\xa0\xa0\xa0\xa0$n:=$n+1\n\xa0\xa0\xa0\xa0End if\n\xa0Until($vtarchivo="")\n'})}),"\n",(0,a.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/set-file-to-pasteboard",children:"SET FILE TO PASTEBOARD"})}),"\n",(0,a.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"976"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return d}});var t=r(667294);let a={},s=t.createContext(a);function d(e){let n=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);