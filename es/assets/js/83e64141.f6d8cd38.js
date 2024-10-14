"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11149],{584549:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=s(474848),t=s(28453);const i={id:"inputOverview",title:"Entrada"},n=void 0,a={id:"FormObjects/inputOverview",title:"Entrada",description:"Las entradas le permiten a\xf1adir expresiones editables o no editables como campos y variables de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/es/20/FormObjects/inputOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"inputOverview",title:"Entrada"},sidebar:"docs",previous:{title:"\xc1rea de grupo",permalink:"/docs/es/20/FormObjects/groupBox"},next:{title:"Lista jer\xe1rquica",permalink:"/docs/es/20/FormObjects/listOverview"}},c={},d=[{value:"Ejemplo JSON:",id:"ejemplo-json",level:3},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2},{value:"Alternativas",id:"alternativas",level:2}];function l(e){const r={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["Las entradas le permiten a\xf1adir expresiones editables o no editables como ",(0,o.jsx)(r.a,{href:"/docs/es/20/Concepts/identifiers#fields",children:"campos"})," y ",(0,o.jsx)(r.a,{href:"/docs/es/20/Concepts/variables",children:"variables"})," de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(331276).A+"",width:"279",height:"175"})}),"\n",(0,o.jsxs)(r.p,{children:["Las entradas pueden contener ",(0,o.jsx)(r.a,{href:"/docs/es/20/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"expresiones asignables o no asignables"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Adem\xe1s, las entradas pueden ser ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#enterable",children:"editables o no editables"}),". Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable s\xf3lo puede mostrar valores, pero no puede ser editada por el usuario."]}),"\n",(0,o.jsxs)(r.p,{children:["Puedes gestionar los datos con los ",(0,o.jsx)(r.a,{href:"/docs/es/20/Concepts/methods",children:"m\xe9todos"})," objeto o formulario."]}),"\n",(0,o.jsx)(r.h3,{id:"ejemplo-json",children:"Ejemplo JSON:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'    "miTexto": {\n        "tipo": "input", //define el tipo de objeto\n        "spellcheck": true, //activa la verificaci\xf3n ortogr\xe1fica\n        "left": 60, //posici\xf3n izquierda en el formulario  \n        "top": 160, //posici\xf3n superior en el formulario \n        "width": 100, //ancho del objeto\n        "height": 20 //altura del objeto\n        }\n'})}),"\n",(0,o.jsx)(r.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,o.jsxs)(r.details,{children:[(0,o.jsx)(r.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Lanzamiento"}),(0,o.jsx)(r.th,{children:"Modificaciones"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"19 R7"}),(0,o.jsx)(r.td,{children:"Soporte de la propiedad Radio de esquina"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#allow-font-color-picker",children:"Allow font/color picker"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#alpha-format",children:"Alpha Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#auto-spellcheck",children:"Auto Spellcheck"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Background Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#bold",children:"Bold"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Boolean format"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Border Line Style"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Bottom"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDataSource#choice-list",children:"Choice List"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#css-class",children:"Class"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#context-menu",children:"Context Menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Corner radius"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#date-format",children:"Date Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesRangeOfValues#default-value",children:"Default value"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAction#draggable",children:"Draggable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAction#droppable",children:"Droppable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#entry-filter",children:"Entry Filter"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesRangeOfValues#excluded-list",children:"Excluded List"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#expression-type",children:"Expression type"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Fill Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#font",children:"Font"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#font-color",children:"Font Color"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#font-size",children:"Font Size"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Height"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#horizontal-alignment",children:"Horizontal Alignment"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Horizontal Scroll Bar"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Horizontal Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#italic",children:"Italic"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Left"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#multiline",children:"Multiline"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#multi-style",children:"Multi-style"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#number-format",children:"Number Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#object-name",children:"Object Name"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#orientation",children:"Orientation"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#picture-format",children:"Picture Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#placeholder",children:"Placeholder"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesPrint#print-frame",children:"Print Frame"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesRangeOfValues#required-list",children:"Required List"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Right"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#selection-always-visible",children:"Selection always visible"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#store-with-default-style-tags",children:"Store with default style tags"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Text when False/Text when True"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#time-format",children:"Time Format"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Top"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#type",children:"Type"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#underline",children:"Underline"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#variable-or-expression",children:"Variable or Expression"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Vertical Scroll Bar"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Vertical Sizing"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Width"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#wordwrap",children:"Wordwrap"})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"alternativas",children:"Alternativas"}),"\n",(0,o.jsx)(r.p,{children:"Tambi\xe9n puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, m\xe1s concretamente:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Puede mostrar e introducir datos de los campos de la base directamente en las columnas ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/listboxOverview",children:"de tipo List box"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/dropdownListOverview",children:"Men\xfas desplegables/Listas desplegables"})," y ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/comboBoxOverview",children:"Combo Box"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Puede representar una expresi\xf3n booleana como una ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/checkboxOverview",children:"casilla de selecci\xf3n"})," o como un objeto ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/radiobuttonOverview",children:"bot\xf3n radio"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},331276:(e,r,s)=>{s.d(r,{A:()=>o});const o=s.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},28453:(e,r,s)=>{s.d(r,{R:()=>n,x:()=>a});var o=s(296540);const t={},i=o.createContext(t);function n(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:n(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);