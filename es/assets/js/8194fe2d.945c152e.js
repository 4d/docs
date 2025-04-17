"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["57827"],{131404:function(e,n,r){r.r(n),r.d(n,{default:()=>j,frontMatter:()=>o,metadata:()=>d,assets:()=>c,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/object-get-border-style","title":"OBJECT Get border style","description":"OBJECT Get border style ( { ;} objeto* ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/object-get-border-style.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-border-style","permalink":"/docs/es/20-R8/commands/object-get-border-style","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-border-style.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"object-get-border-style","title":"OBJECT Get border style","slug":"/commands/object-get-border-style","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET BEST SIZE","permalink":"/docs/es/20-R8/commands/object-get-best-size"},"next":{"title":"OBJECT Get context menu","permalink":"/docs/es/20-R8/commands/object-get-context-menu"}}'),s=r("785893"),t=r("250065");let o={id:"object-get-border-style",title:"OBJECT Get border style",slug:"/commands/object-get-border-style",displayed_sidebar:"docs"},i=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"OBJECT Get border style"})," ( {* ;} ",(0,s.jsx)(n.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"*"}),(0,s.jsx)(n.td,{children:"Operador"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es un campo o una variable"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"objeto"}),(0,s.jsx)(n.td,{children:"any"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsxs)(n.td,{children:["Nombre de objeto (si se especifica *) o ",(0,s.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Resultado"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Estilo de l\xednea de borde"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(n.p,{children:["El comando ",(0,s.jsx)(n.strong,{children:"OBJECT Get border style"})," devuelve el estilo de l\xednea de borde del objeto o de los objetos designado(s) por los par\xe1metros ",(0,s.jsx)(n.em,{children:"objeto"})," y ",(0,s.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Puede definir el estilo de l\xednea del borde para un objeto en modo de dise\xf1o utilizando la lista de propiedades, o utilizando el comando ",(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/object-set-border-style",children:"OBJECT SET BORDER STYLE"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,s.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro ",(0,s.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,s.jsxs)(n.p,{children:['El comando devuelve un valor que corresponde al estilo de la l\xednea fronteriza. Puede comparar el valor recibido con las siguientes constantes, que se encuentran en el tema "',(0,s.jsx)(n.em,{children:"Propiedades de los objetos"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Dotted"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Los objetos aparecen enmarcados con una l\xednea punteada de 1-pt."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Double"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"5"}),(0,s.jsx)(n.td,{children:"Los objetos aparecen enmarcados con una l\xednea doble, es decir, dos l\xedneas continuas de 1-pt. separadas por un p\xedxel"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border None"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"0"}),(0,s.jsx)(n.td,{children:"Los objetos aparecen sin borde"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Plain"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Los objetos aparecen enmarcado con una l\xednea de borde continua de 1-pt."})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Raised"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"3"}),(0,s.jsx)(n.td,{children:"Los objetos aparecen con un efecto 3D (relieve)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border Sunken"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Los objetos aparecen enmarcados con un efecto 3D hundido (relieve inverso)"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Border System"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"6"}),(0,s.jsx)(n.td,{children:"La l\xednea del borde se dibuja en funci\xf3n de las especificaciones gr\xe1ficas del sistema"})]})]})]}),"\n",(0,s.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/20-R8/commands/object-set-border-style",children:"OBJECT SET BORDER STYLE"})}),"\n",(0,s.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"1263"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return o}});var d=r(667294);let s={},t=d.createContext(s);function o(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);