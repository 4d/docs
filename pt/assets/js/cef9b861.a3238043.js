/*! For license information please see cef9b861.a3238043.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13789],{661150:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var t=s(474848),n=s(28453);const i={id:"propertiesResizingOptions",title:"Op\xe7\xf5es de redimensionamento"},o=void 0,d={id:"FormObjects/propertiesResizingOptions",title:"Op\xe7\xf5es de redimensionamento",description:"Autodimensionamento coluna",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/FormObjects/properties_ResizingOptions.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesResizingOptions",permalink:"/docs/pt/20/FormObjects/propertiesResizingOptions",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_ResizingOptions.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"propertiesResizingOptions",title:"Op\xe7\xf5es de redimensionamento"},sidebar:"docs",previous:{title:"Gama de valores",permalink:"/docs/pt/20/FormObjects/propertiesRangeOfValues"},next:{title:"Escala",permalink:"/docs/pt/20/FormObjects/propertiesScale"}},c={},l=[{value:"Autodimensionamento coluna",id:"autodimensionamento-coluna",level:2},{value:"Como funciona o redimensionamento autom\xe1tico de colunas",id:"como-funciona-o-redimensionamento-autom\xe1tico-de-colunas",level:3},{value:"Sobre a coluna falsa (em branco)",id:"sobre-a-coluna-falsa-em-branco",level:4},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objectos suportados",id:"objectos-suportados",level:4},{value:"Dimensionamento horizontal",id:"dimensionamento-horizontal",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Objectos suportados",id:"objectos-suportados-1",level:4},{value:"Alinhamento vertical",id:"alinhamento-vertical",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:4},{value:"Objectos suportados",id:"objectos-suportados-2",level:4},{value:"Pusher",id:"pusher",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4},{value:"Objectos suportados",id:"objectos-suportados-3",level:4},{value:"Redimension\xe1vel",id:"redimension\xe1vel",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-4",level:4},{value:"Objectos suportados",id:"objectos-suportados-4",level:4}];function a(e){const r={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.h2,{id:"autodimensionamento-coluna",children:"Autodimensionamento coluna"}),"\n",(0,t.jsxs)(r.p,{children:["When this property is enabled (",(0,t.jsx)(r.code,{children:"rightToLeft"})," value in JSON), list box columns are automatically resized along with the list box, within the limits of the ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#minimum-width",children:"minimum"})," and ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#maximum-width",children:"maximum"})," widths defined."]}),"\n",(0,t.jsxs)(r.p,{children:["When this property is disabled (",(0,t.jsx)(r.code,{children:"legacy"})," value in JSON), only the rightmost column of the list box is resized, even if its width exceeds the maximum value defined."]}),"\n",(0,t.jsx)(r.h3,{id:"como-funciona-o-redimensionamento-autom\xe1tico-de-colunas",children:"Como funciona o redimensionamento autom\xe1tico de colunas"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["As the list box width increases, its columns are enlarged, one by one, starting from right to left, until each reaches its ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#maximum-width",children:"maximum width"}),". Only columns with the ",(0,t.jsx)(r.a,{href:"#resizable",children:"Resizable"})," property selected are resized."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:["The same procedure applies when the list box width decreases, but in reverse order (",(0,t.jsx)(r.em,{children:"i.e."}),", columns are resized starting from left to right). When each column has reached its ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/propertiesCoordinatesAndSizing#minimum-width",children:"minimum width"}),", the horizontal scroll bar becomes active again."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsxs)(r.p,{children:['Columns are resized only when the horizontal scroll bar is not "active"; ',(0,t.jsx)(r.em,{children:"i.e."}),", all columns are fully visible in the list box at its current size. ",(0,t.jsx)(r.strong,{children:"Note"}),": If the horizontal scroll bar is hidden, this does not alter its state: a scroll bar may still be active, even though it is not visible."]}),"\n"]}),"\n",(0,t.jsxs)(r.li,{children:["\n",(0,t.jsx)(r.p,{children:"After all columns reach their maximum size, they are no longer enlarged and instead a blank (fake) column is added on the right to fill the extra space. If a fake (blank) column is present, when the list box width decreases, this is the first area to be reduced."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(233368).A+"",width:"454",height:"403"})}),"\n",(0,t.jsx)(r.h4,{id:"sobre-a-coluna-falsa-em-branco",children:"Sobre a coluna falsa (em branco)"}),"\n",(0,t.jsx)(r.p,{children:"The appearance of the fake column matches that of the existing columns; it will have a fake header and/or footer if these elements are present in the existing list box columns and it will have the same background color(s) applied."}),"\n",(0,t.jsxs)(r.p,{children:["The fake header and/or footer can be clicked but this does not have any effect on the other columns (e.g.: no sort is performed); nevertheless, the ",(0,t.jsx)(r.code,{children:"On Clicked"}),", ",(0,t.jsx)(r.code,{children:"On Header Click"})," and ",(0,t.jsx)(r.code,{children:"On Footer Click"})," events are generated accordingly."]}),"\n",(0,t.jsxs)(r.p,{children:["If a cell in the fake column is clicked, the ",(0,t.jsx)(r.a,{href:"https://doc.4d.com/4Dv17R6/4D/17-R6/LISTBOX-GET-CELL-POSITION.301-4311145.en.html",children:"LISTBOX GET CELL POSITION"}),' command returns "X+1" for its column number (where X is the number of existing columns).']}),"\n",(0,t.jsx)(r.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nome"}),(0,t.jsx)(r.th,{children:"Tipo de dados"}),(0,t.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"resizingMode"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:'"rightToLeft", "legacy"'})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objectos-suportados",children:"Objectos suportados"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"dimensionamento-horizontal",children:"Dimensionamento horizontal"}),"\n",(0,t.jsxs)(r.p,{children:["This property specifies if the horizontal size of an object should be moved or resized when a user resizes the form. Tamb\xe9m pode ser definido dinamicamente atrav\xe9s do comando de linguagem ",(0,t.jsx)(r.code,{children:"OBJECT SET RESIZING OPTIONS"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Est\xe3o dispon\xedveis tr\xeas op\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Op\xe7\xe3o"}),(0,t.jsx)(r.th,{children:"Valor JSON"}),(0,t.jsx)(r.th,{children:"Resultados"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Agrandar"}),(0,t.jsx)(r.td,{children:'"grow"'}),(0,t.jsx)(r.td,{children:"A mesma percentagem \xe9 aplicada \xe0 largura do objeto quando o usu\xe1rio redimensiona a largura da janela,"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Mover"}),(0,t.jsx)(r.td,{children:'"move"'}),(0,t.jsx)(r.td,{children:"The object is moved the same amount left or right as the width increase when the user resizes the width of the window,"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Nenhum"}),(0,t.jsx)(r.td,{children:'"fixed"'}),(0,t.jsx)(r.td,{children:"O objeto permanece estacion\xe1rio quando o formul\xe1rio \xe9 redimensionado"})]})]})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["This property works in conjunction with the ",(0,t.jsx)(r.a,{href:"#vertical-sizing",children:"Vertical Sizing"})," property."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"gram\xe1tica-json-1",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nome"}),(0,t.jsx)(r.th,{children:"Tipo de dados"}),(0,t.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sizingX"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:'"grow", "move", "fixed"'})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objectos-suportados-1",children:"Objectos suportados"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/writeProAreaOverview",children:"4D Write Pro Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/groupBox",children:"Group Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/shapesOverview#line",children:"Line"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/shapesOverview#oval",children:"Oval"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/shapesOverview#rectangle",children:"Rectangle"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/staticPicture",children:"Static Picture"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/tabControl",children:"Tab control"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/webAreaOverview#overview",children:"Web Area"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"alinhamento-vertical",children:"Alinhamento vertical"}),"\n",(0,t.jsxs)(r.p,{children:["This property specifies if the vertical size of an object should be moved or resized when a user resizes the form. Tamb\xe9m pode ser definido dinamicamente atrav\xe9s do comando de linguagem ",(0,t.jsx)(r.code,{children:"OBJECT SET RESIZING OPTIONS"}),"."]}),"\n",(0,t.jsx)(r.p,{children:"Est\xe3o dispon\xedveis tr\xeas op\xe7\xf5es:"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Op\xe7\xe3o"}),(0,t.jsx)(r.th,{children:"Valor JSON"}),(0,t.jsx)(r.th,{children:"Resultados"})]})}),(0,t.jsxs)(r.tbody,{children:[(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Agrandar"}),(0,t.jsx)(r.td,{children:'"grow"'}),(0,t.jsx)(r.td,{children:"The same percentage is applied to the object's height when the user resizes the width of the window,"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Mover"}),(0,t.jsx)(r.td,{children:'"move"'}),(0,t.jsx)(r.td,{children:"The object is moved the same amount up or down as the height increase when the user resizes the width of the window,"})]}),(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"Nenhum"}),(0,t.jsx)(r.td,{children:'"fixed"'}),(0,t.jsx)(r.td,{children:"O objeto permanece estacion\xe1rio quando o formul\xe1rio \xe9 redimensionado"})]})]})]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["This property works in conjunction with the ",(0,t.jsx)(r.a,{href:"#horizontal-sizing",children:"Horizontal Sizing"})," property."]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"gram\xe1tica-json-2",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Nome"}),(0,t.jsx)(r.th,{children:"Tipo de dados"}),(0,t.jsx)(r.th,{children:"Valores poss\xedveis"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"sizingY"}),(0,t.jsx)(r.td,{children:"string"}),(0,t.jsx)(r.td,{children:'"grow", "move", "fixed"'})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objectos-suportados-2",children:"Objectos suportados"}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/writeProAreaOverview",children:"4D Write Pro Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview",children:"Dropdown list"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/groupBox",children:"Group Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listboxOverview#overview",children:"List Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/shapesOverview#line",children:"Line"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/shapesOverview#oval",children:"Oval"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/shapesOverview#rectangle",children:"Rectangle"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/staticPicture",children:"Static Picture"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/subformOverview",children:"Subform"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/tabControl",children:"Tab control"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/webAreaOverview#overview",children:"Web Area"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"pusher",children:"Pusher"}),"\n",(0,t.jsx)(r.p,{children:"When a splitter object has this property, other objects to its right (vertical splitter) or below it (horizontal splitter) are pushed at the same time as the splitter, with no stop."}),"\n",(0,t.jsxs)(r.p,{children:["Here is the result of a \u201cpusher\u201d splitter being moved: ",(0,t.jsx)(r.img,{src:s(162156).A+"",width:"405",height:"69"})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(312318).A+"",width:"407",height:"67"})}),"\n",(0,t.jsx)(r.p,{children:"Quando esta propriedade n\xe3o \xe9 aplicada ao splitter, o resultado \xe9 o seguinte:"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(64807).A+"",width:"407",height:"67"})}),"\n",(0,t.jsx)(r.h4,{id:"gram\xe1tica-json-3",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Nome"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"Tipo de dados"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"Valores poss\xedveis"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"splitterMode"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:"string"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:'"move" (pusher), "resize" (standard)'})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objectos-suportados-3",children:"Objectos suportados"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/splitters",children:"Separador"})}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"redimension\xe1vel",children:"Redimension\xe1vel"}),"\n",(0,t.jsx)(r.p,{children:"Designa se o tamanho da coluna pode ser modificado pelo usu\xe1rio."}),"\n",(0,t.jsx)(r.h4,{id:"gram\xe1tica-json-4",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{style:{textAlign:"left"},children:"Nome"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"Tipo de dados"}),(0,t.jsx)(r.th,{style:{textAlign:"center"},children:"Valores poss\xedveis"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{style:{textAlign:"left"},children:"resizable"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:"boolean"}),(0,t.jsx)(r.td,{style:{textAlign:"center"},children:'"true", "false"'})]})})]}),"\n",(0,t.jsx)(r.h4,{id:"objectos-suportados-4",children:"Objectos suportados"}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listboxOverview#list-box-columns",children:"Coluna da List Box"})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},221020:(e,r,s)=>{var t=s(296540),n=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,d=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var t,i={},l=null,a=null;for(t in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(a=r.ref),r)o.call(r,t)&&!c.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:n,type:e,key:l,ref:a,props:i,_owner:d.current}}r.Fragment=i,r.jsx=l,r.jsxs=l},474848:(e,r,s)=>{e.exports=s(221020)},233368:(e,r,s)=>{s.d(r,{A:()=>t});const t=s.p+"assets/images/property_columnAutoResizing-b171a9fdb74d2540bee74495db5f0519.png"},162156:(e,r,s)=>{s.d(r,{A:()=>t});const t="data:image/png;base64,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"},64807:(e,r,s)=>{s.d(r,{A:()=>t});const t="data:image/png;base64,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"},312318:(e,r,s)=>{s.d(r,{A:()=>t});const t="data:image/png;base64,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"},28453:(e,r,s)=>{s.d(r,{R:()=>o,x:()=>d});var t=s(296540);const n={},i=t.createContext(n);function o(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);