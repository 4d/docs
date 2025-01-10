"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["3870"],{154387:function(e,n,s){s.r(n),s.d(n,{default:()=>m,frontMatter:()=>i,metadata:()=>t,assets:()=>o,toc:()=>r,contentTitle:()=>d});var t=JSON.parse('{"id":"commands-legacy/font-style-list","title":"FONT STYLE LIST","description":"FONT STYLE LIST ( familiaFuiente ; listaEstilosFuente ; listaNomsFuente )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/font-style-list.md","sourceDirName":"commands-legacy","slug":"/commands/font-style-list","permalink":"/docs/es/commands/font-style-list","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Ffont-style-list.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"font-style-list","title":"FONT STYLE LIST","slug":"/commands/font-style-list","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FONT LIST","permalink":"/docs/es/commands/font-list"},"next":{"title":"GET SYSTEM FORMAT","permalink":"/docs/es/commands/get-system-format"}}'),l=s("785893"),a=s("250065");let i={id:"font-style-list",title:"FONT STYLE LIST",slug:"/commands/font-style-list",displayed_sidebar:"docs"},d=void 0,o={},r=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,a.a)(),...e.components};return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsxs)(n.p,{children:[(0,l.jsx)(n.strong,{children:"FONT STYLE LIST"})," ( ",(0,l.jsx)(n.em,{children:"familiaFuiente"})," ; ",(0,l.jsx)(n.em,{children:"listaEstilosFuente"})," ; ",(0,l.jsx)(n.em,{children:"listaNomsFuente"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{children:"Par\xe1metro"}),(0,l.jsx)(n.th,{children:"Tipo"}),(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"familiaFuiente"}),(0,l.jsx)(n.td,{children:"Text"}),(0,l.jsx)(n.td,{children:"\u2192"}),(0,l.jsx)(n.td,{children:"Nombre de la familia de fuente"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"listaEstilosFuente"}),(0,l.jsx)(n.td,{children:"Text array"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Lista de estilos fuente soportados por la familia de fuente"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"listaNomsFuente"}),(0,l.jsx)(n.td,{children:"Text array"}),(0,l.jsx)(n.td,{children:"\u2190"}),(0,l.jsx)(n.td,{children:"Lista de nombres completos soportados por la familia de fuente"})]})]})]}),"\n",(0,l.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,l.jsxs)(n.p,{children:["El comando ",(0,l.jsx)(n.strong,{children:"FONT STYLE LIST"})," devuelve la lista de estilos y la lista de nombres completos soportados por la familia de fuente designada por el par\xe1metro ",(0,l.jsx)(n.em,{children:"familiaFuente"}),". Este comando le permite dise\xf1ar interfaces de manejo de fuentes y estilos, en particular en el contexto de las \xe1reas 4D Write Pro (ver ",(0,l.jsx)(n.em,{children:"Referencia 4D Write Pro"}),")."]}),"\n",(0,l.jsxs)(n.p,{children:["En ",(0,l.jsx)(n.em,{children:"familiaFuente"}),", pase el nombre de la familia de fuente para el que desea conocer los estilos y nombres de fuentes soportados."]}),"\n",(0,l.jsxs)(n.p,{children:["En ",(0,l.jsx)(n.em,{children:"listaEstilosFuente"}),", pase un array texto para ser llenado con la lista de estilos de fuente soportados por la ",(0,l.jsx)(n.em,{children:"familiaFuente"}),'. Los estilos se devuelven utilizando sus nombres localizados (es decir, un elemento "cursiva" ser\xe1 devuelto como "It\xe1lico" en un sistema espa\xf1ol), por lo que se puede construir un men\xfa pop-up "Estilos" localizado, por ejemplo.']}),"\n",(0,l.jsxs)(n.p,{children:["En ",(0,l.jsx)(n.em,{children:"listaNomsFuente"}),", pase un array texto para ser llenado con la lista completa de nombres de fuentes soportadas por la ",(0,l.jsx)(n.em,{children:"familiaFuente"}),". A diferencia del array ",(0,l.jsx)(n.em,{children:"listaEstilosFuente"}),", el array ",(0,l.jsx)(n.em,{children:"listaNomsFuente"})," devuelve los valores no localizados, es decir, los nombres de fuentes basados en la identificaci\xf3n del sistema. Por lo tanto, los nombres de fuentes ser\xe1n independientes del idioma del sistema. Los elementos de este array son cadenas destinadas a ser utilizadas con el atributo wk font del comando 4D Write Pro   ",(0,l.jsx)(n.em,{children:"WP SET ATTRIBUTES"}),". Al utilizar esta funcionalidad, los documentos 4D Write Pro pueden almacenar nombres de fuente y que luego se abrir\xe1n en m\xe1quinas utilizando cualquier lenguaje del sistema sin problemas de fuentes."]}),"\n",(0,l.jsxs)(n.p,{children:["Si la ",(0,l.jsx)(n.em,{children:"familiaFuente"})," no se encuentra en la m\xe1quina, los arrays se devuelven vac\xedos. Para obtener la lista de familias de fuentes disponibles en la m\xe1quina, utilice el comando ",(0,l.jsx)(n.a,{href:"/docs/es/commands/font-list",children:"FONT LIST"}),"."]}),"\n",(0,l.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,l.jsx)(n.p,{children:'Usted desea seleccionar estilos de la familia de fuentes "Verdana" (si est\xe1 disponible):'}),"\n",(0,l.jsx)(n.pre,{children:(0,l.jsx)(n.code,{className:"language-4d",children:'\xa0ARRAY TEXT($aTfonts;0)\n\xa0ARRAY TEXT($aTStyles;0)\n\xa0ARRAY TEXT($aTnames;0)\n\xa0var $numStyle : Integer\n\xa0\n\xa0FONT LIST($aTfonts)\n\xa0$numStyle:=Find in array($aTfonts;"Verdana")\n\xa0If($numStyle#0)\n\xa0\xa0\xa0\xa0FONT STYLE LIST($aTfonts{$numStyle};$aTStyles;$aTnames)\n\xa0End if\n\xa0\n\xa0\xa0//Por ejemplo, los arrays resultantes son:\n\xa0\xa0//$aTStyles{1}="Normal"\n\xa0\xa0//$aTStyles{1}="Italic"\n\xa0\xa0//$aTStyles{1}="Bold"\n\xa0\xa0//$aTStyles{1}="Bold Italic"\n\xa0\n\xa0\xa0// $aTnames{1}="Verdana"\n\xa0\xa0// $aTnames{1}="Verdana Italic"\n\xa0\xa0// $aTnames{1}="Verdana Bold"\n\xa0\xa0// $aTnames{1}="Verdana Bold Italic"\n'})}),"\n",(0,l.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,l.jsx)(n.p,{children:(0,l.jsx)(n.a,{href:"/docs/es/commands/font-list",children:"FONT LIST"})}),"\n",(0,l.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,l.jsxs)(n.table,{children:[(0,l.jsx)(n.thead,{children:(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.th,{}),(0,l.jsx)(n.th,{})]})}),(0,l.jsxs)(n.tbody,{children:[(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"N\xfamero de comando"}),(0,l.jsx)(n.td,{children:"1362"})]}),(0,l.jsxs)(n.tr,{children:[(0,l.jsx)(n.td,{children:"Hilo seguro"}),(0,l.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,l.jsx)(n,{...e,children:(0,l.jsx)(c,{...e})}):c(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var t=s(667294);let l={},a=t.createContext(l);function i(e){let n=t.useContext(a);return t.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:i(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);