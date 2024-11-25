"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58157"],{424824:function(e,r,a){a.r(r),a.d(r,{metadata:()=>n,contentTitle:()=>d,default:()=>u,assets:()=>l,toc:()=>c,frontMatter:()=>o});var n=JSON.parse('{"id":"FormEditor/markers","title":"Marcadores","description":"Estas propiedades permiten especificar la ubicaci\xf3n precisa de los marcadores en la regla vertical de un formulario tabla. Los marcadores se utilizan principalmente en los formularios de salida. Controlan la informaci\xf3n que se lista y definen las \xe1reas de encabezado, saltos, detalles y pie de p\xe1gina del formulario. Todo objeto que se coloque en estas \xe1reas se mostrar\xe1 o imprimir\xe1 en el lugar correspondiente.","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/FormEditor/properties_Markers.md","sourceDirName":"FormEditor","slug":"/FormEditor/markers","permalink":"/docs/es/20/FormEditor/markers","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Markers.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"markers","title":"Marcadores"},"sidebar":"docs","previous":{"title":"Tama\xf1o formulario","permalink":"/docs/es/20/FormEditor/formSize"},"next":{"title":"Men\xfa","permalink":"/docs/es/20/FormEditor/menu"}}'),i=a("785893"),s=a("250065");let o={id:"markers",title:"Marcadores"},d=void 0,l={},c=[{value:"Ruptura de formulario",id:"ruptura-de-formulario",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Formulario detallado",id:"formulario-detallado",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Pie del formulario",id:"pie-del-formulario",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:4},{value:"Encabezado del formulario",id:"encabezado-del-formulario",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4},{value:"\xc1reas adicionales",id:"\xe1reas-adicionales",level:2}];function t(e){let r={a:"a",blockquote:"blockquote",br:"br",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(r.p,{children:["Estas propiedades permiten especificar la ubicaci\xf3n precisa de los marcadores en la regla vertical de un ",(0,i.jsx)(r.strong,{children:"formulario tabla"}),". Los marcadores se utilizan principalmente en los formularios de salida. Controlan la informaci\xf3n que se lista y definen las \xe1reas de encabezado, saltos, detalles y pie de p\xe1gina del formulario. Todo objeto que se coloque en estas \xe1reas se mostrar\xe1 o imprimir\xe1 en el lugar correspondiente."]}),"\n",(0,i.jsx)(r.p,{children:"Siempre que se utilice cualquier formulario para la salida, ya sea para la visualizaci\xf3n en pantalla o para la impresi\xf3n, las l\xedneas de marcador de salida tienen efecto y las \xe1reas se muestran o imprimen en los lugares designados. Los marcadores tambi\xe9n tienen efecto cuando un formulario se utiliza como formulario lista en un \xe1rea de subformulario. Sin embargo, no tienen ning\xfan efecto cuando se utiliza un formulario para introducir datos."}),"\n",(0,i.jsxs)(r.p,{children:["Los m\xe9todos asociados a los objetos de estas \xe1reas se ejecutan cuando las \xe1reas se imprimen o se muestran siempre que se hayan activado los eventos correspondientes. Por ejemplo, un m\xe9todo objeto colocado en el \xe1rea Encabezado se ejecuta cuando se produce el evento ",(0,i.jsx)(r.code,{children:"On Header"}),"."]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"ruptura-de-formulario",children:"Ruptura de formulario"}),"\n",(0,i.jsx)(r.p,{children:"Las \xe1reas de Ruptura del formulario se muestran una vez al final de la lista de registros y se imprimen una vez despu\xe9s de imprimir los registros en un informe."}),"\n",(0,i.jsxs)(r.p,{children:["El \xe1rea Ruptura se define como el \xe1rea comprendida entre la l\xednea de control Detalle y la l\xednea de control Ruptura. Puede haber ",(0,i.jsx)(r.a,{href:"#additional-areas",children:"varias \xe1reas de ruptura"})," en su informe."]}),"\n",(0,i.jsx)(r.p,{children:"Puede hacer que las \xe1reas Ruptura sean m\xe1s peque\xf1as o m\xe1s grandes. Puede utilizar un \xe1rea de pausa para mostrar informaci\xf3n que no forme parte de los registros (instrucciones, fecha actual, hora actual, etc.), o para mostrar una l\xednea u otro elemento gr\xe1fico que concluya la visualizaci\xf3n de la pantalla. En un informe impreso, puede utilizar un \xe1rea de Ruptura para calcular e imprimir subtotales y otros c\xe1lculos de resumen."}),"\n",(0,i.jsx)(r.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Nombre"}),(0,i.jsx)(r.th,{children:"Tipos de datos"}),(0,i.jsx)(r.th,{children:"Valores posibles"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"markerBreak"}),(0,i.jsx)(r.td,{children:"integer | integer collection"}),(0,i.jsxs)(r.td,{children:["Posici\xf3n del marcador de ruptura o colecci\xf3n de posiciones del marcador de ruptura en p\xedxeles.",(0,i.jsx)(r.br,{}),"Valor m\xednimo: 0"]})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"formulario-detallado",children:"Formulario detallado"}),"\n",(0,i.jsx)(r.p,{children:"El \xe1rea Detalle del formulario se muestra en la pantalla y se imprime una vez por cada registro de un informe. El \xe1rea Detalle se define como el \xe1rea comprendida entre la l\xednea de control Encabezado y la l\xednea de control Detalle."}),"\n",(0,i.jsx)(r.p,{children:"Puede hacer el \xe1rea Detalle m\xe1s peque\xf1a o m\xe1s grande. Lo que coloque en el \xe1rea Detalle se muestra o imprime una vez por cada registro. Lo m\xe1s habitual es colocar campos o variables en el \xe1rea Detalle para que se muestre o imprima la informaci\xf3n de cada registro, pero tambi\xe9n se pueden colocar otros elementos en el \xe1rea Detalle."}),"\n",(0,i.jsx)(r.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Nombre"}),(0,i.jsx)(r.th,{children:"Tipos de datos"}),(0,i.jsx)(r.th,{children:"Valores posibles"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"markerBody"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"Posici\xf3n del marcador de detalle. M\xednimo: 0"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"pie-del-formulario",children:"Pie del formulario"}),"\n",(0,i.jsx)(r.p,{children:"El \xe1rea de pie de p\xe1gina del formulario se muestra en pantalla bajo la lista de registros. Siempre se imprime al final de cada p\xe1gina de un informe. El \xe1rea de pie de p\xe1gina se define como el \xe1rea comprendida entre la l\xednea de control de salto y la l\xednea de control de pie de p\xe1gina."}),"\n",(0,i.jsx)(r.p,{children:"Puede hacer que el \xe1rea del pie de p\xe1gina sea m\xe1s peque\xf1a o m\xe1s grande."}),"\n",(0,i.jsx)(r.p,{children:"Puede utilizar el \xe1rea de pie de p\xe1gina para imprimir gr\xe1ficos, n\xfameros de p\xe1gina, la fecha actual o cualquier texto que desee en la parte inferior de cada p\xe1gina de un informe. En los formularios de salida dise\xf1ados para su uso en pantalla, el \xe1rea de pie de p\xe1gina suele contener botones que ofrecen al usuario opciones como realizar una b\xfasqueda u ordenaci\xf3n, imprimir registros o guardar el informe actual. Se aceptan los objetos activos."}),"\n",(0,i.jsx)(r.h4,{id:"gram\xe1tica-json-2",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Nombre"}),(0,i.jsx)(r.th,{children:"Tipos de datos"}),(0,i.jsx)(r.th,{children:"Valores posibles"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"markerFooter"}),(0,i.jsx)(r.td,{children:"integer"}),(0,i.jsx)(r.td,{children:"m\xednimo: 0"})]})})]}),"\n",(0,i.jsx)(r.hr,{}),"\n",(0,i.jsx)(r.h2,{id:"encabezado-del-formulario",children:"Encabezado del formulario"}),"\n",(0,i.jsx)(r.p,{children:"El \xe1rea de encabezado del formulario se muestra en la parte superior de cada pantalla y se imprime en la parte superior de cada p\xe1gina de un informe. El \xe1rea de encabezado se define como el \xe1rea por encima de la l\xednea de control del encabezado."}),"\n",(0,i.jsx)(r.p,{children:"Puede hacer el \xe1rea Encabezado m\xe1s peque\xf1a o m\xe1s grande. Puede utilizar el \xe1rea Encabezado para los nombres de las columnas, para instrucciones, informaci\xf3n adicional o incluso un gr\xe1fico como el logotipo de una empresa o un patr\xf3n decorativo."}),"\n",(0,i.jsxs)(r.p,{children:["Tambi\xe9n puede colocar y utilizar objetos activos en el \xe1rea de encabezado de los formularios de salida mostrados como subformularios, en la ventana de visualizaci\xf3n de registros o utilizando los comandos ",(0,i.jsx)(r.code,{children:"DISPLAY SELECTION"})," y ",(0,i.jsx)(r.code,{children:"MODIFY SELECTION"}),". Se pueden insertar los siguientes objetos activos:"]}),"\n",(0,i.jsxs)(r.ul,{children:["\n",(0,i.jsx)(r.li,{children:"Botones, botones imagen,"}),"\n",(0,i.jsx)(r.li,{children:"Combo boxes, listas desplegables, men\xfas emergentes de im\xe1genes,"}),"\n",(0,i.jsx)(r.li,{children:"listas jer\xe1rquicas, list boxes"}),"\n",(0,i.jsx)(r.li,{children:"Botones de radio, casillas de selecci\xf3n, casillas de selecci\xf3n 3D,"}),"\n",(0,i.jsx)(r.li,{children:"Indicadores de progreso, reglas, steppers, spinners."}),"\n"]}),"\n",(0,i.jsxs)(r.p,{children:["A los botones insertados se les pueden asignar acciones est\xe1ndar como ",(0,i.jsx)(r.code,{children:"Add Subrecord"}),", ",(0,i.jsx)(r.code,{children:"Cancel"})," (listas visualizadas utilizando ",(0,i.jsx)(r.code,{children:"DISPLAY SELECTION"})," y ",(0,i.jsx)(r.code,{children:"MODIFY SELECTION"}),") o ",(0,i.jsx)(r.code,{children:"Automatic splitter"}),". Los siguientes eventos se aplican a los objetos activos que inserte en el \xe1rea Encabezado: ",(0,i.jsx)(r.code,{children:"On Load"}),", ",(0,i.jsx)(r.code,{children:"On Clicked"}),", ",(0,i.jsx)(r.code,{children:"On Header"}),", ",(0,i.jsx)(r.code,{children:"On Printing Footer"}),", ",(0,i.jsx)(r.code,{children:"On Double Clicked"}),", ",(0,i.jsx)(r.code,{children:"On Drop"}),", ",(0,i.jsx)(r.code,{children:"On Drag Over"}),", ",(0,i.jsx)(r.code,{children:"On Unload"}),". Tenga en cuenta que el m\xe9todo formulario se llama con el evento ",(0,i.jsx)(r.code,{children:"On Header"})," despu\xe9s de llamar a los m\xe9todos del objeto del \xe1rea."]}),"\n",(0,i.jsxs)(r.p,{children:["El formulario puede contener ",(0,i.jsx)(r.a,{href:"#additional-areas",children:"\xe1reas de encabezado adicionales"})," que se asociar\xe1n a rupturas adicionales. Se imprime un Encabezado nivel 1 justo antes de imprimir los registros agrupados por el primer campo ordenado."]}),"\n",(0,i.jsx)(r.h4,{id:"gram\xe1tica-json-3",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Nombre"}),(0,i.jsx)(r.th,{children:"Tipos de datos"}),(0,i.jsx)(r.th,{children:"Valores posibles"})]})}),(0,i.jsx)(r.tbody,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"markerHeader"}),(0,i.jsx)(r.td,{children:"integer | integer collection"}),(0,i.jsxs)(r.td,{children:["Posici\xf3n del marcador de encabezado o colecci\xf3n de posiciones del marcador de encabezado en p\xedxeles.",(0,i.jsx)(r.br,{}),"Valor m\xednimo: 0"]})]})})]}),"\n",(0,i.jsx)(r.h2,{id:"\xe1reas-adicionales",children:"\xc1reas adicionales"}),"\n",(0,i.jsx)(r.p,{children:"Puede crear \xe1reas de Ruptura y Encabezados adicionales para un informe. Estas \xe1reas adicionales permiten imprimir subtotales y otros c\xe1lculos en un informe y mostrar otra informaci\xf3n de forma eficaz."}),"\n",(0,i.jsxs)(r.p,{children:["Las \xe1reas adicionales se definen cuando se utiliza una colecci\xf3n de posiciones en las propiedades ",(0,i.jsx)(r.a,{href:"#form-break",children:"Ruptura"})," y ",(0,i.jsx)(r.a,{href:"#form-header",children:"Encabezado"}),"."]}),"\n",(0,i.jsxs)(r.blockquote,{children:["\n",(0,i.jsxs)(r.p,{children:["En el editor de formularios 4D, puede crear l\xedneas de control adicionales manteniendo presionada la tecla ",(0,i.jsx)(r.strong,{children:"Alt"})," mientras hace clic en el marcador de control apropiado."]}),"\n"]}),"\n",(0,i.jsx)(r.p,{children:"Un formulario comienza siempre con las \xe1reas de Encabezado, Detalle, Nivel 0 y Pie de p\xe1gina."}),"\n",(0,i.jsx)(r.p,{children:"La Ruptura en el nivel 0 cero toma todos los registros; se produce despu\xe9s de imprimir todos los registros. Se pueden a\xf1adir \xe1reas de ruptura adicionales, es decir, un nivel de ruptura 1, un nivel de ruptura 2, etc."}),"\n",(0,i.jsx)(r.p,{children:"Un nivel de Ruptura 1 se produce despu\xe9s de imprimir los registros agrupados por el primer campo ordenado."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Etiqueta"}),(0,i.jsx)(r.th,{children:"Descripci\xf3n"}),(0,i.jsx)(r.th,{children:"Imprime despu\xe9s de grupos creados por"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"B1"}),(0,i.jsx)(r.td,{children:"Nivel de ruptura 1"}),(0,i.jsx)(r.td,{children:"Primer campo ordenado"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"B2"}),(0,i.jsx)(r.td,{children:"Nivel de ruptura 2"}),(0,i.jsx)(r.td,{children:"Segundo campo ordenado"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"B3"}),(0,i.jsx)(r.td,{children:"Nivel de ruptura 3"}),(0,i.jsx)(r.td,{children:"Tercer campo ordenado"})]})]})]}),"\n",(0,i.jsx)(r.p,{children:"Las \xe1reas adicionales del encabezado est\xe1n asociadas a las interrupciones. Se imprime un Encabezado nivel 1 justo antes de imprimir los registros agrupados por el primer campo ordenado."}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(r.table,{children:[(0,i.jsx)(r.thead,{children:(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.th,{children:"Etiqueta"}),(0,i.jsx)(r.th,{children:"Descripci\xf3n"}),(0,i.jsx)(r.th,{children:"Imprime despu\xe9s de grupos creados por"})]})}),(0,i.jsxs)(r.tbody,{children:[(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"H1"}),(0,i.jsx)(r.td,{children:"Encabezado en el nivel 1"}),(0,i.jsx)(r.td,{children:"Primer campo ordenado"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"H2"}),(0,i.jsx)(r.td,{children:"Encabezado en el nivel 2"}),(0,i.jsx)(r.td,{children:"Segundo campo ordenado"})]}),(0,i.jsxs)(r.tr,{children:[(0,i.jsx)(r.td,{children:"H3"}),(0,i.jsx)(r.td,{children:"Encabezado en el nivel 3"}),(0,i.jsx)(r.td,{children:"Tercer campo ordenado"})]})]})]}),"\n",(0,i.jsxs)(r.p,{children:["Si utiliza la funci\xf3n ",(0,i.jsx)(r.code,{children:"Subtotal"})," para iniciar el procesamiento de Rupturas, deber\xe1 crear un \xe1rea de Pausa para cada nivel de Ruptura que generar\xe1 el orden de clasificaci\xf3n, menos uno. Si no necesita imprimir nada en una de las \xe1reas de Ruptura, puede reducir su tama\xf1o a nada colocando su marcador sobre otra l\xednea de control. Si tiene m\xe1s niveles de clasificaci\xf3n que \xe1reas de pausa, la \xfaltima \xe1rea de pausa se repetir\xe1 durante la impresi\xf3n."]})]})}function u(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,i.jsx)(r,{...e,children:(0,i.jsx)(t,{...e})}):t(e)}},250065:function(e,r,a){a.d(r,{Z:function(){return d},a:function(){return o}});var n=a(667294);let i={},s=n.createContext(i);function o(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);