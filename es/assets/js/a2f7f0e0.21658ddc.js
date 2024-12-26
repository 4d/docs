"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["10146"],{252764:function(e,n,r){r.r(n),r.d(n,{metadata:()=>d,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>o,frontMatter:()=>t});var d=JSON.parse('{"id":"commands-legacy/qr-get-borders","title":"QR GET BORDERS","description":"QR GET BORDERS ( area ; columna ; linea ; borde ; grueso {; color} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-get-borders.md","sourceDirName":"commands-legacy","slug":"/commands/qr-get-borders","permalink":"/docs/es/commands/qr-get-borders","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-get-borders.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-get-borders","title":"QR GET BORDERS","slug":"/commands/qr-get-borders","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR Get area property","permalink":"/docs/es/commands/qr-get-area-property"},"next":{"title":"QR Get command status","permalink":"/docs/es/commands/qr-get-command-status"}}'),s=r("785893"),l=r("250065");let t={id:"qr-get-borders",title:"QR GET BORDERS",slug:"/commands/qr-get-borders",displayed_sidebar:"docs"},i=void 0,c={},o=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function a(e){let n={a:"a",br:"br",em:"em",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"QR GET BORDERS"})," ( ",(0,s.jsx)(n.em,{children:"area"})," ; ",(0,s.jsx)(n.em,{children:"columna"})," ; ",(0,s.jsx)(n.em,{children:"linea"})," ; ",(0,s.jsx)(n.em,{children:"borde"})," ; ",(0,s.jsx)(n.em,{children:"grueso"})," {; ",(0,s.jsx)(n.em,{children:"color"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Par\xe1metro"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"area"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"columna"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de columna"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"linea"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"N\xfamero de l\xednea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"borde"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2192"}),(0,s.jsx)(n.td,{children:"Valor del borde"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"grueso"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Grueso de l\xednea"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"color"}),(0,s.jsx)(n.td,{children:"Integer"}),(0,s.jsx)(n.td,{children:"\u2190"}),(0,s.jsx)(n.td,{children:"Color del borde"})]})]})]}),"\n",(0,s.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(n.p,{children:"El comando QR GET BORDERS permite recuperar el estilo del borde de una celda determinada."}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"area"})," es la referencia del \xe1rea del informe r\xe1pido.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"columna"})," es el n\xfamero de columna de la celda.",(0,s.jsx)(n.br,{}),"\n",(0,s.jsx)(n.em,{children:"linea"})," designa el n\xfamero de fila de la celda."]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"pase un valor entero positivo para designar el nivel (ruptura) subtotal correspondiente que est\xe1 afectado."}),"\n",(0,s.jsxs)(n.li,{children:["pase una de las siguientes constantes del tema ",(0,s.jsx)(n.em,{children:"QR Filas para propiedades"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr detail"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"-2"}),(0,s.jsx)(n.td,{children:"\xc1rea de detalle del informe"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr grand total"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"-3"}),(0,s.jsx)(n.td,{children:"\xc1rea total general"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr title"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"-1"}),(0,s.jsx)(n.td,{children:"T\xedtulo del informe"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"borde"})," es el valor que indica qu\xe9 borde de celda se afecta. Pase una de las constantes del tema ",(0,s.jsx)(n.em,{children:"QR Bordes"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{children:"Constante"}),(0,s.jsx)(n.th,{children:"Tipo"}),(0,s.jsx)(n.th,{children:"Valor"}),(0,s.jsx)(n.th,{children:"Comentario"})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr bottom border"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"8"}),(0,s.jsx)(n.td,{children:"Borde inferior"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr inside horizontal border"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"32"}),(0,s.jsx)(n.td,{children:"Borde interior horizontal"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr inside vertical border"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"16"}),(0,s.jsx)(n.td,{children:"Borde interior vertical"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr left border"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"1"}),(0,s.jsx)(n.td,{children:"Borde izquierdo"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr right border"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"4"}),(0,s.jsx)(n.td,{children:"Borde derecho"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"qr top border"}),(0,s.jsx)(n.td,{children:"Entero largo"}),(0,s.jsx)(n.td,{children:"2"}),(0,s.jsx)(n.td,{children:"Borde superior"})]})]})]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"Nota:"})," a diferencia del comando ",(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-set-borders",children:"QR SET BORDERS"}),", QR GET BORDERS no acepta un valor acumulativo. Debe probar todos los par\xe1metros por separado para tener una visi\xf3n general del borde de celda."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"grueso"})," es el grueso de la l\xednea:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"0 indica no linea"}),"\n",(0,s.jsx)(n.li,{children:"1 indica un grueso de 1/4 de punto"}),"\n",(0,s.jsx)(n.li,{children:"2 indica un grueso de 1/2 de punto"}),"\n",(0,s.jsx)(n.li,{children:"3 indica un grueso de 1 punto"}),"\n",(0,s.jsx)(n.li,{children:"4 indica un grueso de 2 puntos"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"color"})," is the color of the line; it returns the value of the color applied to the line segment."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.em,{children:"color"})," es el color de la l\xednea; devuelve el valor del color aplicado a la l\xednea."]}),"\n",(0,s.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,s.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,s.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,s.jsx)(n.em,{children:"columna"})," es incorrecto, se genera el error -9852.",(0,s.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,s.jsx)(n.em,{children:"linea"})," es incorrecto, se genera el error -9853.",(0,s.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,s.jsx)(n.em,{children:"borde"})," es incorrecto, se genera el error -9854.",(0,s.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,s.jsx)(n.em,{children:"area"})," es incorrecto, se genera el error -9850."]}),"\n",(0,s.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.a,{href:"/docs/es/commands/qr-set-borders",children:"QR SET BORDERS"})}),"\n",(0,s.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,s.jsxs)(n.table,{children:[(0,s.jsx)(n.thead,{children:(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.th,{}),(0,s.jsx)(n.th,{})]})}),(0,s.jsxs)(n.tbody,{children:[(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"N\xfamero de comando"}),(0,s.jsx)(n.td,{children:"798"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Hilo seguro"}),(0,s.jsx)(n.td,{children:"\u2717"})]}),(0,s.jsxs)(n.tr,{children:[(0,s.jsx)(n.td,{children:"Modifica variables"}),(0,s.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,l.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return t}});var d=r(667294);let s={},l=d.createContext(s);function t(e){let n=d.useContext(l);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),d.createElement(l.Provider,{value:n},e.children)}}}]);