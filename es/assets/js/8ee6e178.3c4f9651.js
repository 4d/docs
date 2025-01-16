"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["96090"],{30567:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>r,assets:()=>a,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"commands-legacy/split-string","title":"Split string","description":"Split string ( cadenaASeparar ; separador {; opciones} ) : Collection","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/split-string.md","sourceDirName":"commands-legacy","slug":"/commands/split-string","permalink":"/docs/es/20-R7/commands/split-string","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fsplit-string.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"split-string","title":"Split string","slug":"/commands/split-string","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"Replace string","permalink":"/docs/es/20-R7/commands/replace-string"},"next":{"title":"String","permalink":"/docs/es/20-R7/commands/string"}}'),i=s("785893"),t=s("250065");let d={id:"split-string",title:"Split string",slug:"/commands/split-string",displayed_sidebar:"docs"},c=void 0,a={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo 1",id:"ejemplo-1",level:4},{value:"Ejemplo 2",id:"ejemplo-2",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Split string"})," ( ",(0,i.jsx)(n.em,{children:"cadenaASeparar"})," ; ",(0,i.jsx)(n.em,{children:"separador"})," {; ",(0,i.jsx)(n.em,{children:"opciones"}),"} ) : Collection"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"cadenaASeparar"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Valor de la cadena"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"separador"}),(0,i.jsx)(n.td,{children:"Text"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:'Cadena en la que cadenaASeparar se divide. Si cadena vac\xeda (""), cada car\xe1cter de cadenaASeparar es una subcadena'})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"opciones"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Opciones relativas a las cadenas vac\xedas y espacios"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Collection"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Colecci\xf3n de subcadenas"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"Split string"})," devuelve una colecci\xf3n de cadenas, creada al dividir ",(0,i.jsx)(n.em,{children:"cadenaAseparar"})," en subcadenas en los l\xedmites especificados por el par\xe1metro ",(0,i.jsx)(n.em,{children:"separador"}),". Las subcadenas en la colecci\xf3n devuelta no incluyen el ",(0,i.jsx)(n.em,{children:"separador"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si no se encuentra un ",(0,i.jsx)(n.em,{children:"separador"})," en ",(0,i.jsx)(n.em,{children:"cadenaAseparar"}),", ",(0,i.jsx)(n.strong,{children:"Split string"})," devuelve una colecci\xf3n que contiene un elemento \xfanico, ",(0,i.jsx)(n.em,{children:"cadenaAseparar"}),". Si pas\xf3 una cadena vac\xeda en ",(0,i.jsx)(n.em,{children:"separador"}),", ",(0,i.jsx)(n.strong,{children:"Split string"})," devuelve una colecci\xf3n de cada car\xe1cter de ",(0,i.jsx)(n.em,{children:"cadenaAseparar"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro ",(0,i.jsx)(n.em,{children:"opciones"}),", puede pasar una o una combinaci\xf3n de las siguientes constantes del tema ",(0,i.jsx)(n.em,{children:"Cadenas"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sk ignore empty strings"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Eliminar las cadenas vac\xedas de la colecci\xf3n resultante (se ignoran)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"sk trim spaces"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Retirar los espacios al principio y al final de las subcadenas"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-1",children:"Ejemplo 1"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $vt : Text\n\xa0var $col : Collection\n\xa0$col:=New collection\n\xa0\n\xa0$vt:="John;Doe;120 jefferson st.;Riverside;; NJ; 08075"\n\xa0$col:=Split string($vt;";")\xa0//["John","Doe","120 jefferson st.","Riverside",""," NJ"," 08075"]\n\xa0$col:=Split string($vt;";";sk ignore empty strings)\xa0//["John","Doe","120 jefferson st.","Riverside"," NJ"," 08075"]\n\xa0$col:=Split string($vt;";";sk ignore empty strings+sk trim spaces)\xa0//["John","Doe","120 jefferson st.","Riverside","NJ","08075"]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ejemplo-2",children:"Ejemplo 2"}),"\n",(0,i.jsxs)(n.p,{children:["El par\xe1metro ",(0,i.jsx)(n.em,{children:"separador"})," puede ser una cadena de m\xfaltiples caracteres:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0var $vt : Text\n\xa0var $col : Collection\n\xa0$vt:="NameSmithage40"\n\xa0$col:=Split string($vt;"")\n\xa0\xa0//$col=["Name","Smith","age","40"]\n'})}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/text-to-array",children:"TEXT TO ARRAY"})}),"\n",(0,i.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"1554"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return c},a:function(){return d}});var r=s(667294);let i={},t=r.createContext(i);function d(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);