"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["17713"],{797239:function(e,n,t){t.r(n),t.d(n,{default:()=>j,frontMatter:()=>d,metadata:()=>s,assets:()=>r,toc:()=>c,contentTitle:()=>l});var s=JSON.parse('{"id":"commands-legacy/object-is-styled-text","title":"OBJECT Is styled text","description":"OBJECT Is styled text ( { ;} objeto* ) : Boolean","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-is-styled-text.md","sourceDirName":"commands-legacy","slug":"/commands/object-is-styled-text","permalink":"/docs/es/20-R7/commands/object-is-styled-text","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-is-styled-text.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-is-styled-text","title":"OBJECT Is styled text","slug":"/commands/object-is-styled-text","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get visible","permalink":"/docs/es/20-R7/commands/object-get-visible"},"next":{"title":"OBJECT MOVE","permalink":"/docs/es/20-R7/commands/object-move"}}'),o=t("785893"),i=t("250065");let d={id:"object-is-styled-text",title:"OBJECT Is styled text",slug:"/commands/object-is-styled-text",displayed_sidebar:"docs"},l=void 0,r={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={br:"br",code:"code",em:"em",h4:"h4",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"OBJECT Is styled text"})," ( {* ;} ",(0,o.jsx)(n.em,{children:"objeto"})," ) : Boolean"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Par\xe1metro"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"*"}),(0,o.jsx)(n.td,{children:"Operador"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,o.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objeto"}),(0,o.jsx)(n.td,{children:"any"}),(0,o.jsx)(n.td,{children:"\u2192"}),(0,o.jsxs)(n.td,{children:["Nombre de objeto (si se especifica *) o",(0,o.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Resultado"}),(0,o.jsx)(n.td,{children:"Boolean"}),(0,o.jsx)(n.td,{children:"\u2190"}),(0,o.jsx)(n.td,{children:"True si el objeto es un texto multi estilo, False en caso contrario"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El comando ",(0,o.jsx)(n.strong,{children:"OBJECT Is styled text"})," devuelve ",(0,o.jsx)(n.strong,{children:"True"}),' sila opci\xf3n "Multiestilo" est\xe1 seleccionada para el(los) objeto(s) designado(s) por los par\xe1metros ',(0,o.jsx)(n.em,{children:"objeto"})," y ",(0,o.jsx)(n.em,{children:"*"})," ."]}),"\n",(0,o.jsxs)(n.p,{children:['La opci\xf3n "Multiestilo" permite utilizar \xe1reas de texto enriquecido incluyendo variaciones de estilo individuales. Para obtener m\xe1s informaci\xf3n, consulte la secci\xf3n ',(0,o.jsx)(n.em,{children:"Multiestilo (\xe1rea de texto enriquecido)"})," en el manual de ",(0,o.jsx)(n.em,{children:"Dise\xf1o"}),"."]}),"\n",(0,o.jsxs)(n.p,{children:['Los objetos multiestilo se pueden administrar por programaci\xf3n utilizando los comandos del tema "',(0,o.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n",(0,o.jsxs)(n.p,{children:["Al pasar el par\xe1metro opcional ",(0,o.jsx)(n.em,{children:"*"})," se indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,o.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Nota:"})," el comando ",(0,o.jsx)(n.strong,{children:"OBJECT Is styled text"})," devuelve ",(0,o.jsx)(n.strong,{children:"True"})," cuando se aplica a un \xe1rea 4D Write Pro."]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.p,{children:'Un formulario contiene un campo representado por dos objetos diferentes, uno de los objetos tiene la propiedad "Multi-estilo" marcada, y el otro no. Usted puede escribir:'}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:'\xa0$Style:=OBJECT Is styled text(*;"Styled_text")\n\xa0\xa0// devuelve True ( si la opci\xf3n "Multi-estilo" est\xe1 seleccionada)\n\xa0\n\xa0$Style:=OBJECT Is styled text(*;"Plain_text")\n\xa0\xa0// devuelve False (si la opci\xf3n "Multi-estilo" no est\xe1 seleccionada)\n'})}),"\n",(0,o.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(n.p,{children:(0,o.jsx)(n.em,{children:"Texto multiestilo"})}),"\n",(0,o.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{}),(0,o.jsx)(n.th,{})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"N\xfamero de comando"}),(0,o.jsx)(n.td,{children:"1261"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"Hilo seguro"}),(0,o.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function j(e={}){let{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return l},a:function(){return d}});var s=t(667294);let o={},i=s.createContext(o);function d(e){let n=s.useContext(i);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);