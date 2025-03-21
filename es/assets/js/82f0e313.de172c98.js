"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["33383"],{72769:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>a,metadata:()=>d,assets:()=>o,toc:()=>l,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/get-system-format","title":"GET SYSTEM FORMAT","description":"GET SYSTEM FORMAT ( formato ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/get-system-format.md","sourceDirName":"commands-legacy","slug":"/commands/get-system-format","permalink":"/docs/es/20-R7/commands/get-system-format","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fget-system-format.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"get-system-format","title":"GET SYSTEM FORMAT","slug":"/commands/get-system-format","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"FONT STYLE LIST","permalink":"/docs/es/20-R7/commands/font-style-list"},"next":{"title":"Is macOS","permalink":"/docs/es/20-R7/commands/is-macos"}}'),t=r("785893"),s=r("250065");let a={id:"get-system-format",title:"GET SYSTEM FORMAT",slug:"/commands/get-system-format",displayed_sidebar:"docs"},i=void 0,o={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",em:"em",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"GET SYSTEM FORMAT"})," ( ",(0,t.jsx)(n.em,{children:"formato"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"formato"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Formato de sistema a recuperar"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Text"}),(0,t.jsx)(n.td,{children:"\u2190"}),(0,t.jsx)(n.td,{children:"Formato de sistema a recuperar"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsx)(n.p,{children:"El comando GET SYSTEM FORMAT devuelve el valor actual de varios par\xe1metros regionales definidos en el sistema operativo. Este comando puede utilizarse para crear formatos personalizados \u201Cautom\xe1ticos\u201D basados en las preferencias del sistema."}),"\n",(0,t.jsxs)(n.p,{children:["En el par\xe1metro ",(0,t.jsx)(n.em,{children:"formato"}),", pase el tipo del par\xe1metro del que quiere conocer el valor. El resultado es devuelto directamente por el sistema en el par\xe1metro ",(0,t.jsx)(n.em,{children:"valor"})," como una cadena de caracteres. En ",(0,t.jsx)(n.em,{children:"formato"}),", debe pasar una de las siguientes constantes del tema \u201C\u201D. Esta es la descripci\xf3n de estas constantes:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Currency symbol"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"S\xedmbolo de moneda (ej.: \u201C$\u201D)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Date separator"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"13"}),(0,t.jsx)(n.td,{children:"Separador utilizado en formatos de fecha (ej.: \u201C/\u201D)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Decimal separator"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"0"}),(0,t.jsx)(n.td,{children:"Separador decimal (ej.: \u201C.\u201D)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Short date day position"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"15"}),(0,t.jsx)(n.td,{children:"Posici\xf3n de d\xeda en el formato de fecha corto: \u201C1\u201D = izquierda, \u201C2\u201D = en el medio, \u201C3\u201D = a la derecha"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Short date month position"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"16"}),(0,t.jsx)(n.td,{children:"Posici\xf3n del mes en formato de fecha corto: \u201C1\u201D = izquierda, \u201C2\u201D = en el medio, \u201C3\u201D = a la derecha"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Short date year position"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"17"}),(0,t.jsx)(n.td,{children:"Posici\xf3n del a\xf1o en el formato de fecha corto: \u201C1\u201D = izquierda, \u201C2\u201D = medio, \u201C3\u201D = derecha"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System date long pattern"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"Formato de salida de fecha largo \u201Cdddd MMMM yyyy\u201D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System date medium pattern"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"Formato de salida de fecha medio en la forma \u201Cdddd MMMM yyyy\u201D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System date short pattern"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"Formato de salida de fecha corto en la forma \u201Cdddd MMMM yyyy\u201D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System time AM label"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"18"}),(0,t.jsx)(n.td,{children:"Etiqueta adicional para una hora antes del medio d\xeda en formatos de 12 horas (ej.: \u201CMa\xf1ana\u201D)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System time long pattern"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"Formato de salida de hora largo en la forma \u201CHH:MM:SS\u201D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System time medium pattern"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Formato de salida de hora medio en la forma \u201CHH:MM:SS\u201D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System time PM label"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"19"}),(0,t.jsx)(n.td,{children:"Etiqueta adicional para una hora luego del medio d\xeda en formatos de 12 horas (ej.: \u201Ctarde\u201D)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"System time short pattern"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"Formato de salida de hora corto en forma \u201CHH:MM:SS\u201D"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Thousand separator"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Separador de miles (ej.: \u201C,\u201D)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Time separator"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"14"}),(0,t.jsx)(n.td,{children:"Separador utilizado en formatos de hora (ej.: \u201C:\u201D)"})]})]})]}),"\n",(0,t.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/object-set-format",children:"OBJECT SET FORMAT"})}),"\n",(0,t.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"994"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2713"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return a}});var d=r(667294);let t={},s=d.createContext(t);function a(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);