"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["64377"],{220780:function(e,n,r){r.r(n),r.d(n,{default:()=>m,frontMatter:()=>l,metadata:()=>s,assets:()=>t,toc:()=>i,contentTitle:()=>o});var s=JSON.parse('{"id":"commands-legacy/qr-set-totals-data","title":"QR SET TOTALS DATA","description":"QR SET TOTALS DATA ( area ; numColumna ; numRuptura ; operador | valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/commands-legacy/qr-set-totals-data.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-totals-data","permalink":"/docs/es/commands/qr-set-totals-data","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-totals-data.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"qr-set-totals-data","title":"QR SET TOTALS DATA","slug":"/commands/qr-set-totals-data","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET TEXT PROPERTY","permalink":"/docs/es/commands/qr-set-text-property"},"next":{"title":"QR SET TOTALS SPACING","permalink":"/docs/es/commands/qr-set-totals-spacing"}}'),a=r("785893"),d=r("250065");let l={id:"qr-set-totals-data",title:"QR SET TOTALS DATA",slug:"/commands/qr-set-totals-data",displayed_sidebar:"docs"},o=void 0,t={},i=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Modo listado",id:"modo-listado",level:3},{value:"Informe tabla cruzada",id:"informe-tabla-cruzada",level:3},{value:"Tipos de datos soportados",id:"tipos-de-datos-soportados",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function c(e){let n={a:"a",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,d.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"QR SET TOTALS DATA"})," ( ",(0,a.jsx)(n.em,{children:"area"})," ; ",(0,a.jsx)(n.em,{children:"numColumna"})," ; ",(0,a.jsx)(n.em,{children:"numRuptura"})," ; operador | valor )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{children:"Par\xe1metro"}),(0,a.jsx)(n.th,{children:"Tipo"}),(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"area"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"numColumna"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de columna"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"numRuptura"}),(0,a.jsx)(n.td,{children:"Integer"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"N\xfamero de ruptura"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"operador | valor"}),(0,a.jsx)(n.td,{children:"Entero largo, Cadena"}),(0,a.jsx)(n.td,{children:"\u2192"}),(0,a.jsx)(n.td,{children:"Operador para la celda o contenido de la celda"})]})]})]}),"\n",(0,a.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," este comando no puede crear un subtotal."]}),"\n",(0,a.jsx)(n.h3,{id:"modo-listado",children:"Modo listado"}),"\n",(0,a.jsx)(n.p,{children:"El comando QR SET TOTALS DATA permite definir el contenido de una l\xednea de ruptura espec\xedfica (total o subtotal)."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"area"})," es la referencia del \xe1rea del informe r\xe1pido."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"numColumna"})," es el n\xfamero de columna de la celda que quiere definir."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"numRuptura"})," es el n\xfamero de la l\xednea de ruptura a modificar (subtotal o total general). Para una l\xednea de subtotal, ",(0,a.jsx)(n.em,{children:"numRuptura"})," corresponde al n\xfamero del orden de la ruptura. Para el total general, ",(0,a.jsx)(n.em,{children:"numRuptura"})," es igual a -3 o la constante ",(0,a.jsx)(n.em,{children:"qr grand total"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"operador"})," es el valor acumulado de todos los operadores presentes en la celda. Utilice las constantes del tema ",(0,a.jsx)(n.em,{children:"QR Operadores"})," para definir este par\xe1metro:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"ConstanteValor"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"qr sum"})," ",(0,a.jsx)(n.em,{children:"1"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"qr average"})," ",(0,a.jsx)(n.em,{children:"2"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"qr min"})," ",(0,a.jsx)(n.em,{children:"4"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"qr max"})," ",(0,a.jsx)(n.em,{children:"8"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"qr count"})," ",(0,a.jsx)(n.em,{children:"16"}),(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"qr standard deviation"})," ",(0,a.jsx)(n.em,{children:"32"})]}),"\n",(0,a.jsxs)(n.p,{children:["Si ",(0,a.jsx)(n.em,{children:"operador"})," es igual a 0, no hay operador."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"valor"})," es el texto a ubicar en la celda."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Nota:"})," operador/valor son mutuamente exclusivos, de manera que puede definir un operador o un texto."]}),"\n",(0,a.jsxs)(n.p,{children:["Puede pasar los siguientes valores:",(0,a.jsx)(n.br,{}),"\n- # para el valor que provoc\xf3 la ruptura o el subtotal.",(0,a.jsx)(n.br,{}),"\n- ##S se reemplazar\xe1 por la suma.",(0,a.jsx)(n.br,{}),"\n- ##A se reemplazar\xe1 por el promedio.",(0,a.jsx)(n.br,{}),"\n- ##C se reemplazar\xe1 por el n\xfamero",(0,a.jsx)(n.br,{}),"\n- ##X se reemplazar\xe1 por el m\xe1ximo.",(0,a.jsx)(n.br,{}),"\n- ##N se reemplazar\xe1 por el m\xednimo.",(0,a.jsx)(n.br,{}),"\n- ##D se reemplazar\xe1 por la desviaci\xf3n est\xe1ndar.",(0,a.jsx)(n.br,{}),"\n- ##xx, donde xx es un n\xfamero de columna. Este c\xf3digo se reemplazar\xe1 por el valor de la columna, utilizando su propio formato. Si esta columna no existe, entonces no se reemplazar\xe1."]}),"\n",(0,a.jsx)(n.h3,{id:"informe-tabla-cruzada",children:"Informe tabla cruzada"}),"\n",(0,a.jsx)(n.p,{children:"El comando QR SET TOTALS DATA permite definir el contenido de una celda espec\xedfica."}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"area"})," es la referencia del \xe1rea del informe r\xe1pido."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"numColumna"})," es el n\xfamero de columna de la celda que se va a definir."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"numRuptura"})," es el n\xfamero de la l\xednea de la celda que se va a definir."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.em,{children:"operador"})," contiene el valor acumulado de todos los operadores presentes en la celda. Puede utilizar las constantes del tema ",(0,a.jsx)(n.em,{children:"QR Operators"})," para definir este par\xe1metro (ver el p\xe1rrafo anterior).",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"valor"})," es el texto a ubicar en la celda."]}),"\n",(0,a.jsxs)(n.p,{children:["La siguiente imagen muestra c\xf3mo los par\xe1metros ",(0,a.jsx)(n.em,{children:"numColumna"})," y ",(0,a.jsx)(n.em,{children:"numRuptura"})," son combinados en modo tabla cruzada:"]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:r(509930).Z+"",width:"556",height:"233"})}),"\n",(0,a.jsx)(n.h3,{id:"tipos-de-datos-soportados",children:"Tipos de datos soportados"}),"\n",(0,a.jsx)(n.p,{children:"Puede pasar dos tipos de datos:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["T\xedtulo",(0,a.jsx)(n.br,{}),"\nUn t\xedtulo se pasa v\xeda el par\xe1metro ",(0,a.jsx)(n.em,{children:"valor"}),". Este valor es una cadena y puede pasarse \xfanicamente con las siguientes celdas: ",(0,a.jsx)(n.em,{children:"colNum=3 breakNum=1"})," y ",(0,a.jsx)(n.em,{children:"colNum=1"})," ",(0,a.jsx)(n.em,{children:"breakNum=3"}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["Operador",(0,a.jsx)(n.br,{}),"\nUn operador o una combinaci\xf3n de operadores (como se describi\xf3 anteriormente) puede ser pasado por las siguientes celdas:",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"numColumna"}),"=2, ",(0,a.jsx)(n.em,{children:"numRuptura"}),"=2",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"numColumna"}),"=3, ",(0,a.jsx)(n.em,{children:"numRuptura"}),"=2",(0,a.jsx)(n.br,{}),"\n",(0,a.jsx)(n.em,{children:"numColumna"}),"=2, ",(0,a.jsx)(n.em,{children:"numRuptura"}),"=3"]}),"\n"]}),"\n",(0,a.jsx)(n.p,{children:"Note que estos dos \xfaltimos valores afectan igualmente a la celda (Columna 3; L\xednea 3). Si por ejemplo un c\xe1lculo se efect\xfaa en la celda (Columna 2; L\xednea 3), el contenido de la celda (Columna 3; L\xednea 3) ser\xe1 modificado en consecuencia."}),"\n",(0,a.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,a.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,a.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,a.jsx)(n.em,{children:"numColumna"})," es incorrecto, se genera el error -9852.",(0,a.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,a.jsx)(n.em,{children:"numRuptura"})," es incorrecto, se genera el error -9853."]}),"\n",(0,a.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.a,{href:"/docs/es/commands/qr-get-totals-data",children:"QR GET TOTALS DATA"})}),"\n",(0,a.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,a.jsxs)(n.table,{children:[(0,a.jsx)(n.thead,{children:(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.th,{}),(0,a.jsx)(n.th,{})]})}),(0,a.jsxs)(n.tbody,{children:[(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"N\xfamero de comando"}),(0,a.jsx)(n.td,{children:"767"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Hilo seguro"}),(0,a.jsx)(n.td,{children:"\u2717"})]}),(0,a.jsxs)(n.tr,{children:[(0,a.jsx)(n.td,{children:"Modifica variables"}),(0,a.jsx)(n.td,{children:"error"})]})]})]})]})}function m(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},509930:function(e,n,r){r.d(n,{Z:function(){return s}});let s=r.p+"assets/images/pict31186.es-66521f9ff7b53a31d2e0ee420f408967.png"},250065:function(e,n,r){r.d(n,{Z:function(){return o},a:function(){return l}});var s=r(667294);let a={},d=s.createContext(a);function l(e){let n=s.useContext(d);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(d.Provider,{value:n},e.children)}}}]);