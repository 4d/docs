"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["49834"],{254573:function(e,n,s){s.r(n),s.d(n,{default:()=>x,frontMatter:()=>i,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>o});var r=JSON.parse('{"id":"commands-legacy/st-set-options","title":"ST SET OPTIONS","description":"ST SET OPTIONS ( { ;} objeto ; opcion ; valor {; opcion2 ; valor2 ; ... ; opcionN ; valorN*} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/st-set-options.md","sourceDirName":"commands-legacy","slug":"/commands/st-set-options","permalink":"/docs/es/20-R7/commands/st-set-options","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fst-set-options.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"st-set-options","title":"ST SET OPTIONS","slug":"/commands/st-set-options","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"ST SET ATTRIBUTES","permalink":"/docs/es/20-R7/commands/st-set-attributes"},"next":{"title":"ST SET PLAIN TEXT","permalink":"/docs/es/20-R7/commands/st-set-plain-text"}}'),d=s("785893"),t=s("250065");let i={id:"st-set-options",title:"ST SET OPTIONS",slug:"/commands/st-set-options",displayed_sidebar:"docs"},o=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function a(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",img:"img",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsxs)(n.p,{children:[(0,d.jsx)(n.strong,{children:"ST SET OPTIONS"})," ( {* ;} ",(0,d.jsx)(n.em,{children:"objeto"})," ; ",(0,d.jsx)(n.em,{children:"opcion"})," ; ",(0,d.jsx)(n.em,{children:"valor"})," {; ",(0,d.jsx)(n.em,{children:"opcion2"})," ; ",(0,d.jsx)(n.em,{children:"valor2"})," ; ... ; ",(0,d.jsx)(n.em,{children:"opcionN"})," ; ",(0,d.jsx)(n.em,{children:"valorN"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Par\xe1metro"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"*"}),(0,d.jsx)(n.td,{children:"Operador"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Si se especifica, objeto es un nombre de objeto (cadena)",(0,d.jsx)(n.br,{}),"Si se omite, objeto es un campo o una variable"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"objeto"}),(0,d.jsx)(n.td,{children:"any"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsxs)(n.td,{children:["Nombre del objeto (si se especifica *) o",(0,d.jsx)(n.br,{}),"Campo o variable (si se omite *)"]})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"opcion"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Opci\xf3n a definir"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"valor"}),(0,d.jsx)(n.td,{children:"Integer"}),(0,d.jsx)(n.td,{children:"\u2192"}),(0,d.jsx)(n.td,{children:"Nuevo valor de la opci\xf3n"})]})]})]}),"\n",(0,d.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,d.jsxs)(n.p,{children:["El comando ",(0,d.jsx)(n.strong,{children:"ST SET OPTIONS"})," modifica una o varias opciones de funcionamiento del campo o de la variable de texto con estilo designada por el par\xe1metro ",(0,d.jsx)(n.em,{children:"objeto"})," ."]}),"\n",(0,d.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,d.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,d.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no pasa este par\xe1metro, indica que el par\xe1metro ",(0,d.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable objeto \xfanicamente)."]}),"\n",(0,d.jsxs)(n.p,{children:["Pase el c\xf3digo de la opci\xf3n a modificar en ",(0,d.jsx)(n.em,{children:"opcion"})," y su nuevo ",(0,d.jsx)(n.em,{children:"valor"})," en ",(0,d.jsx)(n.em,{children:"valor"}),"."]}),"\n",(0,d.jsxs)(n.p,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"opcion"}),' soporta la siguiente constante del tema "',(0,d.jsx)(n.em,{children:"Texto multiestilo"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsx)(n.tbody,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ST Expressions display mode"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsxs)(n.td,{children:["El par\xe1metro ",(0,d.jsx)(n.em,{children:"valor"})," puede contener ST Values o ST References",(0,d.jsx)(n.br,{}),(0,d.jsx)(n.br,{})]})]})})]}),"\n",(0,d.jsxs)(n.p,{children:["En el par\xe1metro ",(0,d.jsx)(n.em,{children:"valor"}),", puede pasar una de las siguientes constantes:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{children:"Constante"}),(0,d.jsx)(n.th,{children:"Tipo"}),(0,d.jsx)(n.th,{children:"Valor"}),(0,d.jsx)(n.th,{children:"Comentario"})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ST References"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"1"}),(0,d.jsx)(n.td,{children:"Muestra las cadenas fuente de las expresiones"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"ST Values"}),(0,d.jsx)(n.td,{children:"Entero largo"}),(0,d.jsx)(n.td,{children:"0"}),(0,d.jsx)(n.td,{children:"Muestra los valores calculados de las expresiones"})]})]})]}),"\n",(0,d.jsx)(n.p,{children:"Visualizaci\xf3n de los valores:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(416144).Z+"",width:"210",height:"51"})}),"\n",(0,d.jsx)(n.p,{children:"Visualizaci\xf3n de las expresiones:"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.img,{src:s(294547).Z+"",width:"248",height:"50"})}),"\n",(0,d.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,d.jsx)(n.p,{children:"El siguiente c\xf3digo permite cambiar el modo de visualizaci\xf3n del \xe1rea:"}),"\n",(0,d.jsx)(n.pre,{children:(0,d.jsx)(n.code,{className:"language-4d",children:'\xa0ST GET OPTIONS(*;"StyledText_t";ST Expressions display mode;$exprValue)\n\xa0If($exprValue=1)\n\xa0\xa0\xa0\xa0ST SET OPTIONS(*;"StyledText_t";ST Expressions display mode;ST Values)\n\xa0Else\n\xa0\xa0\xa0\xa0ST SET OPTIONS(*;"StyledText_t";ST Expressions display mode;ST References)\n\xa0End if\n'})}),"\n",(0,d.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,d.jsx)(n.p,{children:(0,d.jsx)(n.a,{href:"/docs/es/20-R7/commands/st-get-options",children:"ST GET OPTIONS"})}),"\n",(0,d.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,d.jsxs)(n.table,{children:[(0,d.jsx)(n.thead,{children:(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.th,{}),(0,d.jsx)(n.th,{})]})}),(0,d.jsxs)(n.tbody,{children:[(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"N\xfamero de comando"}),(0,d.jsx)(n.td,{children:"1289"})]}),(0,d.jsxs)(n.tr,{children:[(0,d.jsx)(n.td,{children:"Hilo seguro"}),(0,d.jsx)(n.td,{children:"\u2717"})]})]})]})]})}function x(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(a,{...e})}):a(e)}},294547:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},416144:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return i}});var r=s(667294);let d={},t=r.createContext(d);function i(e){let n=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);