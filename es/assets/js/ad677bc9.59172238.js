"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["89023"],{137025:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>l,metadata:()=>d,assets:()=>o,toc:()=>a,contentTitle:()=>i});var d=JSON.parse('{"id":"commands-legacy/qr-set-text-property","title":"QR SET TEXT PROPERTY","description":"QR SET TEXT PROPERTY ( area ; numColumna ; numLinea ; propiedad ; valor )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-text-property.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-text-property","permalink":"/docs/es/20-R7/commands/qr-set-text-property","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-text-property.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-text-property","title":"QR SET TEXT PROPERTY","slug":"/commands/qr-set-text-property","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET SORTS","permalink":"/docs/es/20-R7/commands/qr-set-sorts"},"next":{"title":"QR SET TOTALS DATA","permalink":"/docs/es/20-R7/commands/qr-set-totals-data"}}'),t=r("785893"),s=r("250065");let l={id:"qr-set-text-property",title:"QR SET TEXT PROPERTY",slug:"/commands/qr-set-text-property",displayed_sidebar:"docs"},i=void 0,o={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:4},{value:"Ejemplo",id:"ejemplo",level:4},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4},{value:"Propiedades",id:"propiedades",level:4}];function c(e){let n={a:"a",br:"br",code:"code",em:"em",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"QR SET TEXT PROPERTY"})," ( ",(0,t.jsx)(n.em,{children:"area"})," ; ",(0,t.jsx)(n.em,{children:"numColumna"})," ; ",(0,t.jsx)(n.em,{children:"numLinea"})," ; ",(0,t.jsx)(n.em,{children:"propiedad"})," ; ",(0,t.jsx)(n.em,{children:"valor"})," )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Par\xe1metro"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"area"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numColumna"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de columna"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"numLinea"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de l\xednea"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"propiedad"}),(0,t.jsx)(n.td,{children:"Integer"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"N\xfamero de propiedad"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"valor"}),(0,t.jsx)(n.td,{children:"Integer, Text"}),(0,t.jsx)(n.td,{children:"\u2192"}),(0,t.jsx)(n.td,{children:"Valor de la propiedad seleccionada"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(n.p,{children:["El comando QR SET TEXT PROPERTY permite definir las propiedades de texto de la celda determinada por los par\xe1metros ",(0,t.jsx)(n.em,{children:"numColumna"})," y ",(0,t.jsx)(n.em,{children:"numLinea"}),"."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"area"})," es la referencia del \xe1rea del informe r\xe1pido."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"numColumna"})," es el n\xfamero de la columna de la celda."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"numLinea"})," es la referencia de la l\xednea de la celda. Puede pasar:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"un valor positivo, designando la l\xednea del subtotal correspondiente."}),"\n",(0,t.jsxs)(n.li,{children:["una de las constantes del tema ",(0,t.jsx)(n.em,{children:"QR Filas para propiedades"}),":"]}),"\n"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr detail"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"-2"}),(0,t.jsx)(n.td,{children:"\xc1rea de detalle del informe"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr footer"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"-5"}),(0,t.jsx)(n.td,{children:"Pie de p\xe1gina"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr grand total"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"-3"}),(0,t.jsx)(n.td,{children:"\xc1rea total general"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr header"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"-4"}),(0,t.jsx)(n.td,{children:"Encabezado de p\xe1gina"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr title"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"-1"}),(0,t.jsx)(n.td,{children:"T\xedtulo del informe"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," cuando pasa -4 o -5 en ",(0,t.jsx)(n.em,{children:"numLinea"}),", necesita pasar un n\xfamero de columna en ",(0,t.jsx)(n.em,{children:"numColumna"}),", incluso si no lo utiliza."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"Nota:"})," en modo tablas cruzadas, el principio es similar excepto para los valores de las l\xedneas, que siempre son positivos."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"propiedad"})," es el valor del atributo de texto a asignar. Puede utilizar las constantes del tema ",(0,t.jsx)(n.em,{children:"QR Propiedades de texto"})," y los siguientes valores pueden definirs"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Constante"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Valor"}),(0,t.jsx)(n.th,{children:"Comentario"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"_o_qr font"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"1"}),(0,t.jsx)(n.td,{children:"Obsoleto desde 4D v14R3 (utilice qr font name)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr alternate background color"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"9"}),(0,t.jsx)(n.td,{children:"N\xfamero de color de fondo alterno"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr background color"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"8"}),(0,t.jsx)(n.td,{children:"N\xfamero de color de fondo"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr bold"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"3"}),(0,t.jsx)(n.td,{children:"Atributo negrita (0 \xf3 1)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr font name"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"10"}),(0,t.jsxs)(n.td,{children:["Nombre de la fuente como la devuelve por ejemplo el comando ",(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/font-list",children:"FONT LIST"})]})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr font size"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"2"}),(0,t.jsx)(n.td,{children:"Tama\xf1o de fuente expresado en puntos (9 a 255)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr italic"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"4"}),(0,t.jsx)(n.td,{children:"Atributo it\xe1lica (0 \xf3 1)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr justification"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"7"}),(0,t.jsx)(n.td,{children:"Atributo de justificaci\xf3n (0 por defecto, 1 a la izquierda, 2 al centro y 3 a la derecha)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr text color"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"6"}),(0,t.jsx)(n.td,{children:"Atributo de n\xfamero de color (Entero largo)"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"qr underline"}),(0,t.jsx)(n.td,{children:"Entero largo"}),(0,t.jsx)(n.td,{children:"5"}),(0,t.jsx)(n.td,{children:"Atributo de estilo subrayado (0 \xf3 1)"})]})]})]}),"\n",(0,t.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,t.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,t.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,t.jsx)(n.em,{children:"numColumna"})," incorrecto, se genera el error -9852.",(0,t.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,t.jsx)(n.em,{children:"numLinea"})," incorrecto, se genera el error -9853.",(0,t.jsx)(n.br,{}),"\nSi el par\xe1metro ",(0,t.jsx)(n.em,{children:"propiedad"})," incorrecto, se genera el error -9854."]}),"\n",(0,t.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,t.jsx)(n.p,{children:"Este m\xe9todo define varios atributos para el t\xedtulo de la primera columna:"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:'\xa0\xa0//Asigna la fuente Times:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr font name;"Times")\n\xa0\xa0//asigna el tama\xf1o de fuente de 10 puntos:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr font size;10)\n\xa0\xa0//asigna el atributo de fuente negrita:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr bold;1)\n\xa0\xa0//asigna el atributo de fuente Italica:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr italic;1)\n\xa0\xa0//asigna el atributo de fuente subrayado:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr underline;1)\n\xa0\xa0//asigna el color verde claro:\n\xa0QR SET TEXT PROPERTY(qr_area;1;-1;qr text color;0x0000FF00)\n'})}),"\n",(0,t.jsx)(n.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/es/20-R7/commands/qr-get-text-property",children:"QR Get text property"})}),"\n",(0,t.jsx)(n.h4,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"N\xfamero de comando"}),(0,t.jsx)(n.td,{children:"759"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Hilo seguro"}),(0,t.jsx)(n.td,{children:"\u2717"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Modifica variables"}),(0,t.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return i},a:function(){return l}});var d=r(667294);let t={},s=d.createContext(t);function l(e){let n=d.useContext(s);return d.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:l(e.components),d.createElement(s.Provider,{value:n},e.children)}}}]);