"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["47595"],{948595:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>t,metadata:()=>r,assets:()=>l,toc:()=>c,contentTitle:()=>a});var r=JSON.parse('{"id":"commands-legacy/qr-set-destination","title":"QR SET DESTINATION","description":"QR SET DESTINATION ( area ; tipo {; especificos} )","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/commands-legacy/qr-set-destination.md","sourceDirName":"commands-legacy","slug":"/commands/qr-set-destination","permalink":"/docs/es/20-R7/commands/qr-set-destination","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20commands-legacy%2Fqr-set-destination.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"qr-set-destination","title":"QR SET DESTINATION","slug":"/commands/qr-set-destination","displayed_sidebar":"docs"},"sidebar":"docs","previous":{"title":"QR SET BORDERS","permalink":"/docs/es/20-R7/commands/qr-set-borders"},"next":{"title":"QR SET DOCUMENT PROPERTY","permalink":"/docs/es/20-R7/commands/qr-set-document-property"}}'),i=s("785893"),d=s("250065");let t={id:"qr-set-destination",title:"QR SET DESTINATION",slug:"/commands/qr-set-destination",displayed_sidebar:"docs"},a=void 0,l={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ejemplo",id:"ejemplo",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2},{value:"Propiedades",id:"propiedades",level:2}];function o(e){let n={a:"a",br:"br",code:"code",em:"em",h2:"h2",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"QR SET DESTINATION"})," ( ",(0,i.jsx)(n.em,{children:"area"})," ; ",(0,i.jsx)(n.em,{children:"tipo"})," {; ",(0,i.jsx)(n.em,{children:"especificos"}),"} )"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Par\xe1metro"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"area"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Referencia del \xe1rea"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"tipo"}),(0,i.jsx)(n.td,{children:"Integer"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Tipo de informe"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"especificos"}),(0,i.jsx)(n.td,{children:"Text, Variable"}),(0,i.jsx)(n.td,{children:"\u2192"}),(0,i.jsx)(n.td,{children:"Espec\xedficos del tipo de salida"})]})]})]}),"\n",(0,i.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,i.jsxs)(n.p,{children:["El comando QR SET DESTINATION permite definir el ",(0,i.jsx)(n.em,{children:"tipo"})," de salida del informe r\xe1pido en ",(0,i.jsx)(n.em,{children:"area"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:["En el par\xe1metro ",(0,i.jsx)(n.em,{children:"tipo"}),", pase una de las constantes del tema ",(0,i.jsx)(n.em,{children:"QR Destino de salida"}),". El contenido del par\xe1metro ",(0,i.jsx)(n.em,{children:"especificos"})," depende del valor de ",(0,i.jsx)(n.em,{children:"tipo"}),". La siguiente tabla describe los valores que pueden pasarse en los par\xe1metros ",(0,i.jsx)(n.em,{children:"tipo"})," y ",(0,i.jsx)(n.em,{children:"especificos"}),":"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Constante"}),(0,i.jsx)(n.th,{children:"Tipo"}),(0,i.jsx)(n.th,{children:"Valor"}),(0,i.jsx)(n.th,{children:"Comentario"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"qr HTML file"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"5"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"detalles"}),": ruta de acceso al archivo."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"qr printer"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"1"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"detalles:"}),' "*" para eliminar las cajas de di\xe1logo de impresi\xf3n']})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"qr text file"}),(0,i.jsx)(n.td,{children:"Entero largo"}),(0,i.jsx)(n.td,{children:"2"}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.em,{children:"detalles"}),": ruta de acceso al archivo."]})]})]})]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"qr printer"}),' (1): si pasa una cadena que contiene un asterisco ("*") en el par\xe1metro ',(0,i.jsx)(n.em,{children:"especificos"}),", no se mostrar\xe1 una caja de di\xe1logo durante la impresi\xf3n, los par\xe1metros de impresi\xf3n actuales se utilizar\xe1n autom\xe1ticamente. Esta configuraci\xf3n es necesaria si desea imprimir el reporte en el servidor."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"qr text file"})," (2): si pasa una cadena vac\xeda como en el par\xe1metro ",(0,i.jsx)(n.em,{children:"especificos"}),", se muestra una caja de di\xe1logo est\xe1ndar de guardar archivo. Si pasa una ruta de acceso valida, el informe r\xe1pido se guardar\xe1 en la ubicaci\xf3n indicada.",(0,i.jsx)(n.br,{}),"\nPor defecto, el delimitador del campo es el car\xe1cter tab (ASCII 9). El delimitador de registro por defecto es el car\xe1cter retorno de carro (ASCII 13). Puede cambiar estos caracteres por defecto asignando valores a las variables sistema: FldDelimit y RecDelimit. Si en Windows, FldDelimit es igual a 13, un car\xe1cter 10 (salto de de l\xednea) ser\xe1 a\xf1adido despu\xe9s del retorno de carro. Tenga en cuenta que estas variables son utilizadas por otros comandos como por ejemplo ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/import-text",children:"IMPORT TEXT"}),". Toda modificaci\xf3n de estas variables repercute en toda la aplicaci\xf3n."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.em,{children:"qr HTML file"})," (5): se crea un archivo HTML utilizando la plantilla definida por ",(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/qr-set-html-template",children:"QR SET HTML TEMPLATE"}),". Para mayor informaci\xf3n sobre el modo de conversi\xf3n de los datos, consulte el manual de Dise\xf1o."]}),"\n",(0,i.jsxs)(n.p,{children:["Si pasa un n\xfamero de ",(0,i.jsx)(n.em,{children:"area"})," inv\xe1lido, se genera el error -9850.",(0,i.jsx)(n.br,{}),"\nSi el valor del destino ",(0,i.jsx)(n.em,{children:"tipo"})," es incorrecto, se genera el error -9852."]}),"\n",(0,i.jsx)(n.h2,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,i.jsx)(n.p,{children:"El siguiente c\xf3digo define el archivo texto Midoc.txt como tipo de destino del informe r\xe1pido y lo ejecuta:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-4d",children:'\xa0QR SET DESTINATION(MiArea;qr text file;"MiDoc.txt")\n\xa0QR RUN(MiArea)\n'})}),"\n",(0,i.jsx)(n.h2,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.a,{href:"/docs/es/20-R7/commands/qr-get-destination",children:"QR GET DESTINATION"})}),"\n",(0,i.jsx)(n.h2,{id:"propiedades",children:"Propiedades"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{}),(0,i.jsx)(n.th,{})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"N\xfamero de comando"}),(0,i.jsx)(n.td,{children:"745"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Hilo seguro"}),(0,i.jsx)(n.td,{children:"\u2717"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Modifica variables"}),(0,i.jsx)(n.td,{children:"error"})]})]})]})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}},250065:function(e,n,s){s.d(n,{Z:function(){return a},a:function(){return t}});var r=s(667294);let i={},d=r.createContext(i);function t(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:t(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);