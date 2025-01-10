"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35772"],{896501:function(e,n,o){o.r(n),o.d(n,{default:()=>m,frontMatter:()=>r,metadata:()=>s,assets:()=>d,toc:()=>a,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/object-get-scroll-position","title":"OBJECT GET SCROLL POSITION","description":"OBJECT GET SCROLL POSITION ( { ;} objeto ; posicionLinea {; posicionH*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-scroll-position.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-scroll-position","permalink":"/docs/es/commands/object-get-scroll-position","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-scroll-position.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-scroll-position","title":"OBJECT GET SCROLL POSITION","slug":"/commands/object-get-scroll-position","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT GET RGB COLORS","permalink":"/docs/es/commands/object-get-rgb-colors"},"next":{"title":"OBJECT GET SCROLLBAR","permalink":"/docs/es/commands/object-get-scrollbar"}}'),i=o("785893"),t=o("250065");let r={id:"object-get-scroll-position",title:"OBJECT GET SCROLL POSITION",slug:"/commands/object-get-scroll-position",displayed_sidebar:"docs"},l=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT GET SCROLL POSITION"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ; ",(0,i.jsx)(n.em,{children:"posicionLinea"})," {; ",(0,i.jsx)(n.em,{children:"posicionH"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,i.jsx)(n.br,{}),"Si se omite, objeto es una variable o un campo"]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre del objeto (si se especifica *) o Variable o campo (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"posicionLinea"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"N\xfamero de la primera l\xednea mostrada o desplazamiento vertical en p\xedxeles (im\xe1genes)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"posicionH"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"N\xfamero de la primera columna mostrada (list box) o desplazamiento horizontal en p\xedxeles (im\xe1genes)"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["OBJECT GET SCROLL POSITION devuelve, en los par\xe1metros ",(0,i.jsx)(n.em,{children:"posicionLinea"})," y ",(0,i.jsx)(n.em,{children:"posicionH"}),", informaci\xf3n relacionada con la posici\xf3n de las barras de desplazamiento del objeto de formulario designado por los par\xe1metros ",(0,i.jsx)(n.em,{children:"*"})," y ",(0,i.jsx)(n.em,{children:"objeto"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"}),", indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es el nombre de un objeto de tipo subformulario, lista jer\xe1rquica, \xe1rea de desplazamiento, list box o imagen (en este caso, pase una cadena en objeto). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es una variable (RefLista de lista jer\xe1rquica, imagen o list box) o un campo."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Nota:"})," con los objetos de tipo subformulario, s\xf3lo se soporta la sintaxis con ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"objeto"})," designa un objeto de tipo lista (subformulario, lista jer\xe1rquica, \xe1rea de desplazamiento o list box), ",(0,i.jsx)(n.em,{children:"posicionLinea"})," devuelve el n\xfamero de la primera l\xednea mostrada en el objeto. ",(0,i.jsx)(n.em,{children:"posicionH"})," (list box \xfanicamente) devuelve el n\xfamero de la primera columna mostrada en la parte izquierda del list box. Con otros tipos de objetos, este par\xe1metro devuelve 0."]}),"\n",(0,i.jsxs)(n.p,{children:["Si ",(0,i.jsx)(n.em,{children:"objeto"})," designa una imagen (variable o campo), ",(0,i.jsx)(n.em,{children:"posicionLinea"})," devuelve el desplazamiento vertical y ",(0,i.jsx)(n.em,{children:"posicionH"})," el desplazamiento horizontal de la imagen. Estos valores se expresan en p\xedxeles con respecto al origen de la imagen en el sistema de coordenadas locales."]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/object-set-scroll-position",children:"OBJECT SET SCROLL POSITION "})}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1114"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return l},a:function(){return r}});var s=o(667294);let i={},t=s.createContext(i);function r(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);