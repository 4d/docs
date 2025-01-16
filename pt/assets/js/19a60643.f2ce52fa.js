"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["80469"],{290198:function(e,n,s){s.r(n),s.d(n,{default:()=>h,frontMatter:()=>i,metadata:()=>r,assets:()=>a,toc:()=>c,contentTitle:()=>d});var r=JSON.parse('{"id":"FormObjects/propertiesResizingOptions","title":"Op\xe7\xf5es de redimensionamento","description":"Autodimensionamento coluna","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/FormObjects/properties_ResizingOptions.md","sourceDirName":"FormObjects","slug":"/FormObjects/propertiesResizingOptions","permalink":"/docs/pt/20-R7/FormObjects/propertiesResizingOptions","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_ResizingOptions.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"propertiesResizingOptions","title":"Op\xe7\xf5es de redimensionamento"},"sidebar":"docs","previous":{"title":"Gama de valores","permalink":"/docs/pt/20-R7/FormObjects/propertiesRangeOfValues"},"next":{"title":"Escala","permalink":"/docs/pt/20-R7/FormObjects/propertiesScale"}}'),t=s("785893"),o=s("250065");let i={id:"propertiesResizingOptions",title:"Op\xe7\xf5es de redimensionamento"},d=void 0,a={},c=[{value:"Autodimensionamento coluna",id:"autodimensionamento-coluna",level:2},{value:"Como funciona o redimensionamento autom\xe1tico de colunas",id:"como-funciona-o-redimensionamento-autom\xe1tico-de-colunas",level:3},{value:"Sobre a coluna falsa (em branco)",id:"sobre-a-coluna-falsa-em-branco",level:4},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objectos suportados",id:"objectos-suportados",level:4},{value:"Dimensionamento horizontal",id:"dimensionamento-horizontal",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objectos suportados",id:"objectos-suportados-1",level:4},{value:"Alinhamento vertical",id:"alinhamento-vertical",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:4},{value:"Objectos suportados",id:"objectos-suportados-2",level:4},{value:"Pusher",id:"pusher",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4},{value:"Objectos suportados",id:"objectos-suportados-3",level:4},{value:"Redimension\xe1vel",id:"redimension\xe1vel",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-4",level:4},{value:"Objectos suportados",id:"objectos-suportados-4",level:4}];function l(e){let n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"autodimensionamento-coluna",children:"Autodimensionamento coluna"}),"\n",(0,t.jsxs)(n.p,{children:["When this property is enabled (",(0,t.jsx)(n.code,{children:"rightToLeft"})," value in JSON), list box columns are automatically resized along with the list box, within the limits of the ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#minimum-width",children:"minimum"})," and ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#maximum-width",children:"maximum"})," widths defined."]}),"\n",(0,t.jsxs)(n.p,{children:["Cuando esta propiedad est\xe1 desactivada (valor ",(0,t.jsx)(n.code,{children:"legacy"})," en JSON), s\xf3lo se redimensiona la columna m\xe1s a la derecha del listbox, aunque su ancho supere el valor m\xe1ximo definido."]}),"\n",(0,t.jsx)(n.h3,{id:"como-funciona-o-redimensionamento-autom\xe1tico-de-colunas",children:"Como funciona o redimensionamento autom\xe1tico de colunas"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["A medida que el ancho del list box aumenta, sus columnas se ampl\xedan, una a una, empezando de derecha a izquierda, hasta que cada una alcanza su ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#maximum-width",children:"ancho m\xe1ximo"}),". S\xf3lo se redimensionan las columnas con la propiedad ",(0,t.jsx)(n.a,{href:"#resizable",children:"Resizable"})," seleccionada."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["El mismo procedimiento se aplica cuando el ancho del list box disminuye, pero en orden inverso (",(0,t.jsx)(n.em,{children:"es decir,"}),", las columnas se redimensionan empezando de izquierda a derecha). Cuando cada columna ha alcanzado su ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/propertiesCoordinatesAndSizing#minimum-width",children:"ancho m\xednimo"}),", la barra de desplazamiento horizontal vuelve a activarse."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:['Las columnas se redimensionan s\xf3lo cuando la barra de desplazamiento horizontal no est\xe1 "activa"; ',(0,t.jsx)(n.em,{children:"es decir,"}),", todas las columnas son totalmente visibles en el list box en su tama\xf1o actual. ",(0,t.jsx)(n.strong,{children:"Nota"}),": si la barra de desplazamiento horizontal est\xe1 oculta, esto no altera su estado: una barra de desplazamiento puede seguir estando activa, aunque no sea visible."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"After all columns reach their maximum size, they are no longer enlarged and instead a blank (fake) column is added on the right to fill the extra space. If a fake (blank) column is present, when the list box width decreases, this is the first area to be reduced."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(672760).Z+"",width:"454",height:"403"})}),"\n",(0,t.jsx)(n.h4,{id:"sobre-a-coluna-falsa-em-branco",children:"Sobre a coluna falsa (em branco)"}),"\n",(0,t.jsx)(n.p,{children:"The appearance of the fake column matches that of the existing columns; it will have a fake header and/or footer if these elements are present in the existing list box columns and it will have the same background color(s) applied."}),"\n",(0,t.jsxs)(n.p,{children:["Se puede hacer clic en el encabezado y/o en el pie de p\xe1gina falsos, pero esto no tiene ning\xfan efecto sobre las otras columnas (por ejemplo: no se realiza ninguna ordenaci\xf3n); no obstante, los eventos se generan en consecuencia ",(0,t.jsx)(n.code,{children:"On Clicked"}),", `On Header Cl"]}),"\n",(0,t.jsxs)(n.p,{children:["Si se hace clic en una celda de la columna falsa, el comando ",(0,t.jsx)(n.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-GET-CELL-POSITION.301-4311145.en.html",children:"LISTBOX GET CELL POSITION"}),' devuelve "X+1" para su n\xfamero de columna (donde X es el n\xfamero de columnas existent']}),"\n",(0,t.jsx)(n.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nome"}),(0,t.jsx)(n.th,{children:"Tipo de dados"}),(0,t.jsx)(n.th,{children:"Valores poss\xedveis"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"resizingMode"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:'"rightToLeft", "legacy"'})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"objectos-suportados",children:"Objectos suportados"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"dimensionamento-horizontal",children:"Dimensionamento horizontal"}),"\n",(0,t.jsxs)(n.p,{children:["This property specifies if the horizontal size of an object should be moved or resized when a user resizes the form. Tambi\xe9n puede definirse din\xe1micamente por el comando del lenguaje ",(0,t.jsx)(n.code,{children:"OBJECT SET RESIZING OPTIONS"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Est\xe3o dispon\xedveis tr\xeas op\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Op\xe7\xe3o"}),(0,t.jsx)(n.th,{children:"Valor JSON"}),(0,t.jsx)(n.th,{children:"Resultados"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Agrandar"}),(0,t.jsx)(n.td,{children:'"grow"'}),(0,t.jsx)(n.td,{children:"A mesma percentagem \xe9 aplicada \xe0 largura do objeto quando o usu\xe1rio redimensiona a largura da janela,"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mover"}),(0,t.jsx)(n.td,{children:'"move"'}),(0,t.jsx)(n.td,{children:"The object is moved the same amount left or right as the width increase when the user resizes the width of the window,"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Nenhum"}),(0,t.jsx)(n.td,{children:'"fixed"'}),(0,t.jsx)(n.td,{children:"O objeto permanece estacion\xe1rio quando o formul\xe1rio \xe9 redimensionado"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Esta propiedad funciona junto con la propiedad ",(0,t.jsx)(n.a,{href:"#tama%C3%B1o-vertical",children:"Dimensionamiento vertical"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nome"}),(0,t.jsx)(n.th,{children:"Tipo de dados"}),(0,t.jsx)(n.th,{children:"Valores poss\xedveis"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sizingX"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:'"grow", "move", "fixed"'})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"objectos-suportados-1",children:"Objectos suportados"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/writeProAreaOverview",children:"4D Write Pro Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/groupBox",children:"Group Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/shapesOverview#line",children:"Line"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/shapesOverview#oval",children:"Oval"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/shapesOverview#rectangle",children:"Rectangle"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/staticPicture",children:"Static Picture"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/tabControl",children:"Tab control"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/webAreaOverview#overview",children:"Web Area"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"alinhamento-vertical",children:"Alinhamento vertical"}),"\n",(0,t.jsxs)(n.p,{children:["This property specifies if the vertical size of an object should be moved or resized when a user resizes the form. Tambi\xe9n puede definirse din\xe1micamente por el comando del lenguaje ",(0,t.jsx)(n.code,{children:"OBJECT SET RESIZING OPTIONS"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Est\xe3o dispon\xedveis tr\xeas op\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Op\xe7\xe3o"}),(0,t.jsx)(n.th,{children:"Valor JSON"}),(0,t.jsx)(n.th,{children:"Resultados"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Agrandar"}),(0,t.jsx)(n.td,{children:'"grow"'}),(0,t.jsx)(n.td,{children:"The same percentage is applied to the object's height when the user resizes the width of the window,"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Mover"}),(0,t.jsx)(n.td,{children:'"move"'}),(0,t.jsx)(n.td,{children:"The object is moved the same amount up or down as the height increase when the user resizes the width of the window,"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Nenhum"}),(0,t.jsx)(n.td,{children:'"fixed"'}),(0,t.jsx)(n.td,{children:"O objeto permanece estacion\xe1rio quando o formul\xe1rio \xe9 redimensionado"})]})]})]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["Esta propiedad funciona junto con la propiedad ",(0,t.jsx)(n.a,{href:"#horizontal-sizing",children:"Dimensionamiento horizontal"}),"."]}),"\n"]}),"\n",(0,t.jsx)(n.h4,{id:"gram\xe1tica-json-2",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nome"}),(0,t.jsx)(n.th,{children:"Tipo de dados"}),(0,t.jsx)(n.th,{children:"Valores poss\xedveis"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sizingY"}),(0,t.jsx)(n.td,{children:"string"}),(0,t.jsx)(n.td,{children:'"grow", "move", "fixed"'})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"objectos-suportados-2",children:"Objectos suportados"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/writeProAreaOverview",children:"4D Write Pro Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/groupBox",children:"Group Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/shapesOverview#line",children:"Line"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/shapesOverview#oval",children:"Oval"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/shapesOverview#rectangle",children:"Rectangle"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/staticPicture",children:"Static Picture"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/tabControl",children:"Tab control"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/webAreaOverview#overview",children:"Web Area"})]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"pusher",children:"Pusher"}),"\n",(0,t.jsx)(n.p,{children:"Quando um objeto splitter tem essa propriedade, os outros objetos \xe0 sua direita (splitter vertical) ou abaixo dele (splitter horizontal) s\xe3o empurrados ao mesmo tempo que o divisor, sem parada."}),"\n",(0,t.jsxs)(n.p,{children:['Aqui est\xe1 o resultado de um divisor "pusher" sendo movido:\n',(0,t.jsx)(n.img,{src:s(693240).Z+"",width:"405",height:"69"})]}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(521917).Z+"",width:"407",height:"67"})}),"\n",(0,t.jsx)(n.p,{children:"Quando esta propriedade n\xe3o \xe9 aplicada ao splitter, o resultado \xe9 o seguinte:"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.img,{src:s(526246).Z+"",width:"407",height:"67"})}),"\n",(0,t.jsx)(n.h4,{id:"gram\xe1tica-json-3",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Nome"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Tipo de dados"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Valores poss\xedveis"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"splitterMode"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"string"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:'"move" (pusher), "resize" (standard)'})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"objectos-suportados-3",children:"Objectos suportados"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/splitters",children:"Splitter"})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"redimension\xe1vel",children:"Redimension\xe1vel"}),"\n",(0,t.jsx)(n.p,{children:"Designa se o tamanho da coluna pode ser modificado pelo usu\xe1rio."}),"\n",(0,t.jsx)(n.h4,{id:"gram\xe1tica-json-4",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{style:{textAlign:"left"},children:"Nome"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Tipo de dados"}),(0,t.jsx)(n.th,{style:{textAlign:"center"},children:"Valores poss\xedveis"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{style:{textAlign:"left"},children:"resizable"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:"boolean"}),(0,t.jsx)(n.td,{style:{textAlign:"center"},children:'"true", "false"'})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"objectos-suportados-4",children:"Objectos suportados"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.a,{href:"/docs/pt/20-R7/FormObjects/listboxOverview#list-box-columns",children:"Coluna de list box"})})]})}function h(e={}){let{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},672760:function(e,n,s){s.d(n,{Z:function(){return r}});let r=s.p+"assets/images/property_columnAutoResizing-b171a9fdb74d2540bee74495db5f0519.png"},693240:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},526246:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},521917:function(e,n,s){s.d(n,{Z:function(){return r}});let r="data:image/png;base64,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"},250065:function(e,n,s){s.d(n,{Z:function(){return d},a:function(){return i}});var r=s(667294);let t={},o=r.createContext(t);function i(e){let n=r.useContext(o);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);