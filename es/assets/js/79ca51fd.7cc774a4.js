"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["16109"],{336919:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>d,assets:()=>i,toc:()=>c,contentTitle:()=>a});var d=JSON.parse('{"id":"commands-legacy/qr-get-totals-data","title":"QR GET TOTALS DATA","description":"QR GET TOTALS DATA ( area ; numColumna ; numRuptura ; operador ; texto )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-totals-data.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-totals-data","permalink":"/docs/es/commands/qr-get-totals-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-totals-data.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-totals-data","title":"QR GET TOTALS DATA","slug":"/commands/qr-get-totals-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get text property","permalink":"/docs/es/commands/qr-get-text-property"},"next":{"title":"QR GET TOTALS SPACING","permalink":"/docs/es/commands/qr-get-totals-spacing"}}'),s=r("785893"),t=r("250065");let l={id:"qr-get-totals-data",title:"QR GET TOTALS DATA",slug:"/commands/qr-get-totals-data",displayed_sidebar:"docs"},a=void 0,i={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Informe en lista",id:"informe-en-lista",level:5},{value:"Informe tabla cruzada",id:"informe-tabla-cruzada",level:5},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function o(e){let n={a:"a",br:"br",em:"em",h4:"h4",h5:"h5",img:"img",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR GET TOTALS DATA"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"numColumna"})," ; ",(0,s.jsx)(n.em,{children:"numRuptura"})," ; ",(0,s.jsx)(n.em,{children:"operador"})," ; ",(0,s.jsx)(n.em,{children:"texto"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numColumna"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"numRuptura"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de ruptura"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"operador"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Operador de la celda"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"texto"}),(0,s.jsx)(n.td,{children:"Text"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Contenido de la celda"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.h5,{id:"informe-en-lista",children:"Informe en lista"}),"\n",(0,s.jsx)(n.p,{children:"El comando QR GET TOTALS DATA permite recuperar el contenido de una l\xednea de ruptura espec\xedfica."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"area"})," es la referencia del \xe1rea del informe r\xe1pido."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"numColumna"})," es el n\xfamero de la columna de la celda cuyos datos ser\xe1n recuperados."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"numRuptura"})," es el n\xfamero de la l\xednea de ruptura cuyos datos ser\xe1n recuperados (subtotal o total general). Para una l\xednea de subtotal, ",(0,s.jsx)(n.em,{children:"numRuptura"})," corresponde al n\xfamero de la l\xednea. Para el total general, ",(0,s.jsx)(n.em,{children:"numRuptura"})," vale -3 (tambi\xe9n puede utilizar la constante ",(0,s.jsx)(n.em,{children:"qr grand total"}),")."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"operador"})," devuelve la suma de todos los operadores presentes en la celda. Puede utilizar las constantes del tema para tratar los valores devueltos:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr sum"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr average"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr min"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr max"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"8"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr count"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"16"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr standard deviation"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"32"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:["Si ",(0,s.jsx)(n.em,{children:"operador"})," devuelve 0, la celda no contiene ning\xfan operador."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"texto"})," devuelve el texto en la celda."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," ",(0,s.jsx)(n.em,{children:"operador"})," y ",(0,s.jsx)(n.em,{children:"texto"})," son mutuamente exclusivos, de manera que s\xf3lo uno de los dos par\xe1metros devuelve un valor."]}),"\n",(0,s.jsx)(n.h5,{id:"informe-tabla-cruzada",children:"Informe tabla cruzada"}),"\n",(0,s.jsx)(n.p,{children:"El comando QR GET TOTALS DATA permite recuperar el contenido de una celda espec\xedfica."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"area"})," es la referencia del \xe1rea del informe r\xe1pido."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"numColumna"})," es el n\xfamero de la columna de la celda cuyos datos van a ser recuperados."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"numruptura"})," es el n\xfamero de la l\xednea de la celda cuyos datos van a ser recuperados."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"operador"})," devuelve la suma de todos los operadores presentes en la celda. Puede utilizar las constantes del tema  para procesar el valor devuelto (ver el p\xe1rrafo anterior)."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"texto"})," devuelve el texto en la celda."]}),"\n",(0,s.jsxs)(n.p,{children:["La siguiente imagen muestra c\xf3mo los par\xe1metros ",(0,s.jsx)(n.em,{children:"numColumna"})," y ",(0,s.jsx)(n.em,{children:"numRuptura"})," son combinados en una tabla cruzada:"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:r(434042).Z+"",width:"556",height:"233"})}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,s.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,s.jsx)(n.em,{children:"numColumna"})," es incorrecto, se genera el error -9852.",(0,s.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,s.jsx)(n.em,{children:"numRuptura"})," es incorrecto, se genera el error -9853."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-set-totals-data",children:"QR SET TOTALS DATA"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"768"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(o,{...e})}):o(e)}},434042:function(e,n,r){r.d(n,{Z:function(){return d}});let d=r.p+"assets/images/pict30726.es-3249b6229cc098d54848cc27cb789e27.png"},250065:function(e,n,r){r.d(n,{Z:function(){return a},a:function(){return l}});var d=r(667294);let s={},t=d.createContext(s);function l(e){let n=d.useContext(t);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),d.createElement(t.Provider,{value:n},e.children)}}}]);