"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["8212"],{977707:function(e,n,t){t.r(n),t.d(n,{metadata:()=>r,contentTitle:()=>s,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>d});var r=JSON.parse('{"id":"commands-legacy/object-get-indicator-type","title":"OBJECT Get indicator type","description":"OBJECT Get indicator type ( { ;} objeto* ) : Integer","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/object-get-indicator-type.md","sourceDirName":"commands-legacy","slug":"/commands/object-get-indicator-type","permalink":"/docs/es/commands/object-get-indicator-type","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fobject-get-indicator-type.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"object-get-indicator-type","title":"OBJECT Get indicator type","slug":"/commands/object-get-indicator-type","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"OBJECT Get horizontal alignment","permalink":"/docs/es/commands/object-get-horizontal-alignment"},"next":{"title":"OBJECT Get keyboard layout","permalink":"/docs/es/commands/object-get-keyboard-layout"}}'),i=t("785893"),o=t("250065");let d={id:"object-get-indicator-type",title:"OBJECT Get indicator type",slug:"/commands/object-get-indicator-type",displayed_sidebar:"docs"},s=void 0,c={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let n={a:"a",em:"em",h4:"h4",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"OBJECT Get indicator type"})," ( {* ;} ",(0,i.jsx)(n.em,{children:"objeto"})," ) : Integer"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"*"}),(0,i.jsx)(n.td,{children:"Operador"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Si se especifica, objeto es un nombre de objeto (cadena) Si se omite, objeto es una variable"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"objeto"}),(0,i.jsx)(n.td,{children:"any"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Nombre de objeto (si se especifica *) o Variable (si se omite *)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Resultado"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2190"}),(0,i.jsx)(n.td,{children:"Tipo de indicador"})]})]})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.em,{children:"Este comando no es hilo seguro, no puede ser utilizado en c\xf3digo apropiativo."})}),"\n",(0,i.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando ",(0,i.jsx)(n.strong,{children:"OBJECT Get indicator type"})," devuelve el tipo del indicador actual asignado al term\xf3metro(s) designado por los par\xe1metros ",(0,i.jsx)(n.em,{children:"objeto"})," y ",(0,i.jsx)(n.em,{children:"*"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Puede definir el tipo de indicador utilizando la lista de propiedades en modo de dise\xf1o o utilizando el comando ",(0,i.jsx)(n.a,{href:"/docs/es/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa el par\xe1metro opcional ",(0,i.jsx)(n.em,{children:"*"})," indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un nombre de objeto (cadena). Si no se pasa este par\xe1metro, indica que el par\xe1metro ",(0,i.jsx)(n.em,{children:"objeto"})," es un campo o una variable. En este caso, se pasa una referencia de campo o variable en lugar de una cadena (campo o variable del objeto \xfanicamente)."]}),"\n",(0,i.jsxs)(n.p,{children:['Puede comparar el valor devuelto por el comando con las siguientes constantes, que se encuentran en el tema "',(0,i.jsx)(n.em,{children:"Propiedades de los objetos"}),'":']}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Asynchronous progress bar"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"3"}),(0,i.jsx)(n.td,{children:"Indicador circular muestra una animaci\xf3n continua"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Barber shop"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsx)(n.td,{children:"Barra que muestra una animaci\xf3n continua"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Progress bar"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsx)(n.td,{children:"Barra de progreso est\xe1ndar"})]})]})]}),"\n",(0,i.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/commands/object-set-indicator-type",children:"OBJECT SET INDICATOR TYPE"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},250065:function(e,n,t){t.d(n,{Z:function(){return s},a:function(){return d}});var r=t(667294);let i={},o=r.createContext(i);function d(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);