"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["35857"],{919696:function(e,s,n){n.r(s),n.d(s,{default:()=>h,frontMatter:()=>a,metadata:()=>o,assets:()=>d,toc:()=>l,contentTitle:()=>t});var o=JSON.parse('{"id":"FormObjects/propertiesResizingOptions","title":"Opciones de redimensionamiento","description":"Redimensionamiento columnas auto","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormObjects/properties_ResizingOptions.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesResizingOptions","permalink":"/docs/es/19/FormObjects/propertiesResizingOptions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_ResizingOptions.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"propertiesResizingOptions","title":"Opciones de redimensionamiento"},"sidebar":"docs","previous":{"title":"Rango de valores","permalink":"/docs/es/19/FormObjects/propertiesRangeOfValues"},"next":{"title":"Escala","permalink":"/docs/es/19/FormObjects/propertiesScale"}}'),r=n("785893"),i=n("250065");let a={id:"propertiesResizingOptions",title:"Opciones de redimensionamiento"},t=void 0,d={},l=[{value:"Redimensionamiento columnas auto",id:"redimensionamiento-columnas-auto",level:2},{value:"C\xf3mo funciona el redimensionamiento autom\xe1tico de las columnas",id:"c\xf3mo-funciona-el-redimensionamiento-autom\xe1tico-de-las-columnas",level:3},{value:"Sobre la columna falsa (en blanco)",id:"sobre-la-columna-falsa-en-blanco",level:4},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objetos soportados",id:"objetos-soportados",level:4},{value:"Dimensionamiento horizontal",id:"dimensionamiento-horizontal",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objetos soportados",id:"objetos-soportados-1",level:4},{value:"Dimensionamiento vertical",id:"dimensionamiento-vertical",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:4},{value:"Objetos soportados",id:"objetos-soportados-2",level:4},{value:"Pulsador",id:"pulsador",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4},{value:"Objetos soportados",id:"objetos-soportados-3",level:4},{value:"Redimensionable",id:"redimensionable",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-4",level:4},{value:"Objetos soportados",id:"objetos-soportados-4",level:4}];function c(e){let s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.h2,{id:"redimensionamiento-columnas-auto",children:"Redimensionamiento columnas auto"}),"\n",(0,r.jsxs)(s.p,{children:["Cuando esta propiedad est\xe1 activa (valor ",(0,r.jsx)(s.code,{children:"rightToLeft"})," en JSON), las columnas del listbox se redimensionan autom\xe1ticamente junto con el list box, dentro de los l\xedmites de los anchos ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#minimum-width",children:"m\xednimo"})," y ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#maximum-width",children:"m\xe1ximo"})," definidos."]}),"\n",(0,r.jsxs)(s.p,{children:["Cuando esta propiedad est\xe1 desactivada (valor ",(0,r.jsx)(s.code,{children:"legacy"})," en JSON), s\xf3lo se redimensiona la columna m\xe1s a la derecha del listbox, aunque su ancho supere el valor m\xe1ximo definido."]}),"\n",(0,r.jsx)(s.h3,{id:"c\xf3mo-funciona-el-redimensionamiento-autom\xe1tico-de-las-columnas",children:"C\xf3mo funciona el redimensionamiento autom\xe1tico de las columnas"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["A medida que el ancho del list box aumenta, sus columnas se ampl\xedan, una a una, empezando de derecha a izquierda, hasta que cada una alcanza su ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#maximum-width",children:"ancho m\xe1ximo"}),". S\xf3lo se redimensionan las columnas con la propiedad ",(0,r.jsx)(s.a,{href:"#resizable",children:"Resizable"})," seleccionada."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["El mismo procedimiento se aplica cuando el ancho del list box disminuye, pero en orden inverso (",(0,r.jsx)(s.em,{children:"es decir,"}),", las columnas se redimensionan empezando de izquierda a derecha). Cuando cada columna ha alcanzado su ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#minimum-width",children:"ancho m\xednimo"}),", la barra de desplazamiento horizontal vuelve a activarse."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:['Las columnas se redimensionan s\xf3lo cuando la barra de desplazamiento horizontal no est\xe1 "activa"; ',(0,r.jsx)(s.em,{children:"es decir,"}),", todas las columnas son totalmente visibles en el list box en su tama\xf1o actual. ",(0,r.jsx)(s.strong,{children:"Nota"}),": si la barra de desplazamiento horizontal est\xe1 oculta, esto no altera su estado: una barra de desplazamiento puede seguir estando activa, aunque no sea visible."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Una vez que todas las columnas alcanzan su tama\xf1o m\xe1ximo, dejan de ampliarse y en su lugar se a\xf1ade una columna en blanco (falsa) a la derecha para rellenar el espacio extra. Si hay una columna falsa (en blanco), cuando el ancho del list box disminuye, \xe9sta es la primera \xe1rea que se reduce."}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(929584).Z+"",width:"454",height:"403"})}),"\n",(0,r.jsx)(s.h4,{id:"sobre-la-columna-falsa-en-blanco",children:"Sobre la columna falsa (en blanco)"}),"\n",(0,r.jsx)(s.p,{children:"La apariencia de la columna falsa coincide con la de las columnas existentes; tendr\xe1 un encabezado y/o un pie de p\xe1gina falsos si estos elementos est\xe1n presentes en las columnas del list box existentes y tendr\xe1 aplicados los mismos colores de fondo."}),"\n",(0,r.jsxs)(s.p,{children:["Se puede hacer clic en el encabezado y/o en el pie de p\xe1gina falsos, pero esto no tiene ning\xfan efecto sobre las otras columnas (por ejemplo: no se realiza ninguna ordenaci\xf3n); no obstante, los eventos se generan en consecuencia ",(0,r.jsx)(s.code,{children:"On Clicked"}),", ",(0,r.jsx)(s.code,{children:"On Header Click"})," y ",(0,r.jsx)(s.code,{children:"On Footer Click"})," se generan en consecuencia."]}),"\n",(0,r.jsxs)(s.p,{children:["Si se hace clic en una celda de la columna falsa, el comando ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-GET-CELL-POSITION.301-4311145.en.html",children:"LISTBOX GET CELL POSITION"}),' devuelve "X+1" para su n\xfamero de columna (donde X es el n\xfamero de columnas existentes).']}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"resizingMode"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:'"rightToLeft", "legacy"'})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados",children:"Objetos soportados"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"dimensionamiento-horizontal",children:"Dimensionamiento horizontal"}),"\n",(0,r.jsxs)(s.p,{children:["This property specifies if an object should be horizontally moved or resized when a user resizes the form. Tambi\xe9n puede definirse din\xe1micamente por el comando del lenguaje ",(0,r.jsx)(s.code,{children:"OBJECT SET RESIZING OPTIONS"}),"."]}),"\n",(0,r.jsx)(s.p,{children:"Hay tres opciones disponibles:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Option"}),(0,r.jsx)(s.th,{children:"Valor JSON"}),(0,r.jsx)(s.th,{children:"Result"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Agrandar"}),(0,r.jsx)(s.td,{children:'"grow"'}),(0,r.jsx)(s.td,{children:"El mismo porcentaje se aplica al ancho del objeto cuando el usuario redimensiona el ancho de la ventana,"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Mover"}),(0,r.jsx)(s.td,{children:'"move"'}),(0,r.jsx)(s.td,{children:"El objeto se desplaza la misma cantidad a la izquierda o a la derecha que el aumento del ancho cuando el usuario redimensiona el ancho de la ventana,"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ninguno"}),(0,r.jsx)(s.td,{children:'"fixed"'}),(0,r.jsx)(s.td,{children:"El objeto permanece inm\xf3vil cuando se cambia el tama\xf1o del formulario"})]})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Esta propiedad funciona junto con la propiedad ",(0,r.jsx)(s.a,{href:"#tama%C3%B1o-vertical",children:"Dimensionamiento vertical"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sizingX"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:'"grow", "move", "fixed"'})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-1",children:"Objetos soportados"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/groupBox",children:"Group Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/shapesOverview#line",children:"L\xednea"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview#list-box-columns",children:"Columna List Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/shapesOverview#oval",children:"\xd3valo"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/picturePopupMenuOverview",children:"Men\xfa emergente de imagen"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plugins"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/ruler",children:"Regla"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/shapesOverview#rectangle",children:" Rect\xe1ngulo"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/spinner",children:"Spinner"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/splitters",children:"Splitter"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/staticPicture",children:"Imagen est\xe1tica"})," ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/stepper",children:"Stepper"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/subformOverview",children:"Sub-formulario"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/tabControl",children:"Pesta\xf1a"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/webAreaOverview#overview",children:"\xc1rea Web"})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"dimensionamiento-vertical",children:"Dimensionamiento vertical"}),"\n",(0,r.jsxs)(s.p,{children:["This property specifies if an object should be vertically moved or resized when a user resizes the form.It can also be set dynamically by the ",(0,r.jsx)(s.code,{children:"OBJECT SET RESIZING OPTIONS"})," language command."]}),"\n",(0,r.jsx)(s.p,{children:"Hay tres opciones disponibles:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Option"}),(0,r.jsx)(s.th,{children:"Valor JSON"}),(0,r.jsx)(s.th,{children:"Result"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Agrandar"}),(0,r.jsx)(s.td,{children:'"grow"'}),(0,r.jsx)(s.td,{children:"El mismo porcentaje se aplica a la altura del objeto cuando el usuario redimensiona el ancho de la ventana,"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Mover"}),(0,r.jsx)(s.td,{children:'"move"'}),(0,r.jsx)(s.td,{children:"El objeto se desplaza la misma cantidad hacia arriba o hacia abajo que el aumento de la altura cuando el usuario redimensiona el ancho de la ventana,"})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Ninguno"}),(0,r.jsx)(s.td,{children:'"fixed"'}),(0,r.jsx)(s.td,{children:"El objeto permanece inm\xf3vil cuando se cambia el tama\xf1o del formulario"})]})]})]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsxs)(s.p,{children:["Esta propiedad funciona junto con la propiedad ",(0,r.jsx)(s.a,{href:"#horizontal-sizing",children:"Dimensionamiento horizontal"}),"."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-2",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Nombre"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"sizingY"}),(0,r.jsx)(s.td,{children:"string"}),(0,r.jsx)(s.td,{children:'"grow", "move", "fixed"'})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-2",children:"Objetos soportados"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/groupBox",children:"Group Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/shapesOverview#line",children:"L\xednea"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview#list-box-columns",children:"Columna List Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/shapesOverview#oval",children:"\xd3valo"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/picturePopupMenuOverview",children:"Men\xfa emergente de imagen"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plugins"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/ruler",children:"Regla"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/shapesOverview#rectangle",children:" Rect\xe1ngulo"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/spinner",children:"Spinner"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/splitters",children:"Splitter"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/staticPicture",children:"Imagen est\xe1tica"})," ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/stepper",children:"Stepper"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/subformOverview",children:"Sub-formulario"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/tabControl",children:"Pesta\xf1a"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/webAreaOverview#overview",children:"\xc1rea Web"})]}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"pulsador",children:"Pulsador"}),"\n",(0,r.jsx)(s.p,{children:"Cuando un objeto splitter tiene esta propiedad, los otros objetos a su derecha (splitter vertical) o debajo de \xe9l (separador horizontal) son empujados al mismo tiempo que el splitter, sin parar."}),"\n",(0,r.jsxs)(s.p,{children:["Here is the result of a \u201Cpusher\u201D splitter being moved: ",(0,r.jsx)(s.img,{src:n(369102).Z+"",width:"405",height:"69"})]}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(973159).Z+"",width:"407",height:"67"})}),"\n",(0,r.jsx)(s.p,{children:"Cuando esta propiedad no se aplica al splitter, el resultado es el siguiente:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:n(451619).Z+"",width:"407",height:"67"})}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-3",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Nombre"}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Tipos de datos"}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"splitterMode"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"string"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:'"move" (pusher), "resize" (standard)'})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-3",children:"Objetos soportados"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/splitters",children:"Separador"})}),"\n",(0,r.jsx)(s.hr,{}),"\n",(0,r.jsx)(s.h2,{id:"redimensionable",children:"Redimensionable"}),"\n",(0,r.jsx)(s.p,{children:"Designa si el tama\xf1o de la columna puede ser modificado por el usuario."}),"\n",(0,r.jsx)(s.h4,{id:"gram\xe1tica-json-4",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{style:{textAlign:"left"},children:"Nombre"}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Tipos de datos"}),(0,r.jsx)(s.th,{style:{textAlign:"center"},children:"Valores posibles"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{style:{textAlign:"left"},children:"redimensionable"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:"boolean"}),(0,r.jsx)(s.td,{style:{textAlign:"center"},children:'"true", "false"'})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"objetos-soportados-4",children:"Objetos soportados"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview#list-box-columns",children:"Columna de list box"})})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},929584:function(e,s,n){n.d(s,{Z:function(){return o}});let o=n.p+"assets/images/property_columnAutoResizing-b171a9fdb74d2540bee74495db5f0519.png"},369102:function(e,s,n){n.d(s,{Z:function(){return o}});let o="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAZUAAABFCAIAAAANcOz3AAAGtklEQVR42u3dz28UZRzH8XlKDyQciLEUI8eiRQwHDSY2MSFYE/8AwJDgwXBpuBHvrZFePBE9ES54sQdj/A8g2GrgQjwRKVo0HjCWdtOElKhB+7jb6T7z43lmdn48O88+u+9X/LEzO/PszOeZ+c7s7OxW7D/3SK49Pzgz+XRja+PLySAIpJCBDOJkIESQIT6lkIbnpNCb0VqTUu5NoSYQu62lW+y0MbY7gVRP7s2sEWqpZfL/IpozPYtp/TLXPZmBSIwJh+Irn/kSqWfD9JOTiVTU0tSqiE2e7sIg2Pn3798e3Jk6MaueEarVbvphD4bjhRzTAt3RO1hEix2O0V/ZrN07WR1XLOPEcNSQTK6eMWVtONpSZCLSqPdld3MShoa6L2t+gbxtwLxaWY2k2u8u2o4U8ZVN7IYiHU/WC0ptnLbcUsjUxELs7L2kTOzaMpptL7Rwn5PRLhjPzdw9QVQNRLLNaEptGwUAT1C/APiK+gXAV9QvAL6ifo2KsfH9Uyfedb0UgE3ULwC+on4B8NV4fOCfZ49dLw8AFJWoX9/dXna9PABQ1Hhq+Oz5OdeLBACFjOujNtbXXC8VOm7dvjd7+qTrpRgtZO4XQ/0Sovi30tBf9EXzyNwjfP4IwFfjppEUtcFBXzSPzL1hrF87rpcKCn3RPDL3hqF+lflVJo8J0fN3vaqwm96I9MVA6Zm5EPu0Wf5zvdQjarx+E6Kp45W0emI/lKXBbl/YDXyIpEO2GDuZl2IISyT1bMJm4q078wt3WhljhFV9CtTuQvZ9pRoM3AtF1lpqyNyV3qWnSCs9euvwsQn1T7uf9P4raWLylRpzl1ivCuovWF2tu5+8/Pqhl16zFXg7bfWP63UbVGTuiIX3jwUs/rB+7lh8+ErFhujO3jonCJ9+/+dZW4FvPvklazBn5BAzHKUazxwhF2+2o0PT1vJCeF722XJLmyY8lB2/eC02ut2R+X1JgWvvTGP7kjtYvcBdr44Xms6c7Tzk8mLh6tLMzdm7m+urmytTZ76In2xvLX9xcXpltfPUTzcuuc7IN5nvYvsUODWu+cwRaqZ+zb+jrn8tqS9Xrt37ePHCqRc6D6ff+Pz6yn3Vt60HN68vnpyu8krsSx3iyil1OcZe4LyRyWM7c3X9y5g5HRFycf2r9ST878Ng/vLh+e7Yj75VE2w+vjZ35LLraDwmF5b/OGMx8PDdSrTPqNudtDuhEs+WYmzKI7YzV2lz2MjRTP0yeXFyWruuH4RHp4kjnE7bVzVww/6TrDXpCXyvRBaxkfeZw+tfR09enV9a3goHVpe+WVXPtHu9e6bdur9yrUyjw3Rds+odtlnzVQk8/+Cv7n6qfjPUkLCcec/XG6btvA473x+qdtfTsQt331uYmfhgd2DuxsPomaMfrkxNHO8ctC5dXVSHqfaCHTr8avg47L+N9Z+tLP/AMq6L8VpxOKXYe2hOoELggbar6Jmnxvief/HMkzNZy7ydZzzz9qCxcd9ztkLsP/dIrj0/ODP5dGPrqzM3z56fMxaFvCb8/P7Q4Lt1+8fZ02+WmoXvD9WUlXmP+mXv+48jmHkdnfOvVM+Uvom8qcPAQNzd3iy3fTGCgTtf69HMvDLD+8dn209LNXHgwIFmlrXsgg2B1CpHG3f3kYz/yxsKG0ZwM/OXoX5tb2+XaqLs9Cgula1ev4JY2aJ+WcH27BHT+dezv1wvFfYY+yLn+j3qY/v3iKF+vfX2+66XCh2//v41fdEwMvcLH3YA8BX1C4CvqF8AfEX9AuAr6hcAX9mvXzk3EHNvMQCLbPz9tN2/yOJ6RUZC6gCQHzv9YlE8eVIdHHXrV7iTsKs0Jp4zsTcjlTOxD45+/X6hqmvhYKr7UyONk6E4/exAdP+UYWpMQMgl6dVKHbBTseds2FkjA3qnnj7+/mq849Vj40h9DIoznh3oJ8WE3A/GVI1vSrJG5rSDnmrVr3gBMh6m9Fnom5q4EAMo7n7/PobPJYszXogpEiAhN6945vRONRau39dvIevSAArqeSJGyE4UPEGmdyqrfv+Xus6iEP0goBfs0jfsapeo9H6hp+rr7/V79Tinvyl8peip6h+EqQfq80dCriMr4QpzpT6mVB1E71TTqV+2/kpX6sPErAn0Qa5DF5QVVJHxhFxHzw+jjI+Lf4RF71QzENfvgdHBJ8gW9at+0TGAEbuGRfz+BABfUb8A+Ir6BcBX1C8AvqJ+AfAV9QuAr6hfAHxF/QLgK+oXAF9RvwD4ivoFwFfULwC+on4B8BX1C4CvqF8AfEX9AuAr6hcAX/0PdM8gu4jiN7AAAAAASUVORK5CYII="},451619:function(e,s,n){n.d(s,{Z:function(){return o}});let o="data:image/png;base64,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"},973159:function(e,s,n){n.d(s,{Z:function(){return o}});let o="data:image/png;base64,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"},250065:function(e,s,n){n.d(s,{Z:function(){return t},a:function(){return a}});var o=n(667294);let r={},i=o.createContext(r);function a(e){let s=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);