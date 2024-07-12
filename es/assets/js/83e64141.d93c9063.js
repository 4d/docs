/*! For license information please see 83e64141.d93c9063.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[11149],{584549:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>d});var o=s(474848),t=s(28453);const i={id:"inputOverview",title:"Entrada"},a=void 0,n={id:"FormObjects/inputOverview",title:"Entrada",description:"Las entradas le permiten a\xf1adir expresiones editables o no editables como campos y variables de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/es/20/FormObjects/inputOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"inputOverview",title:"Entrada"},sidebar:"docs",previous:{title:"\xc1rea de grupo",permalink:"/docs/es/20/FormObjects/groupBox"},next:{title:"Lista jer\xe1rquica",permalink:"/docs/es/20/FormObjects/listOverview"}},c={},d=[{value:"Ejemplo JSON:",id:"ejemplo-json",level:3},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2},{value:"Alternativas",id:"alternativas",level:2}];function l(e){const r={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.p,{children:["Las entradas le permiten a\xf1adir expresiones editables o no editables como ",(0,o.jsx)(r.a,{href:"/docs/es/20/Concepts/identifiers#fields",children:"campos"})," y ",(0,o.jsx)(r.a,{href:"/docs/es/20/Concepts/variables",children:"variables"})," de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(331276).A+"",width:"279",height:"175"})}),"\n",(0,o.jsxs)(r.p,{children:["Las entradas pueden contener ",(0,o.jsx)(r.a,{href:"/docs/es/20/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"expresiones asignables o no asignables"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Adem\xe1s, las entradas pueden ser ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#enterable",children:"editables o no editables"}),". Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable s\xf3lo puede mostrar valores, pero no puede ser editada por el usuario."]}),"\n",(0,o.jsxs)(r.p,{children:["Puedes gestionar los datos con los ",(0,o.jsx)(r.a,{href:"/docs/es/20/Concepts/methods",children:"m\xe9todos"})," objeto o formulario."]}),"\n",(0,o.jsx)(r.h3,{id:"ejemplo-json",children:"Ejemplo JSON:"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:'    "miTexto": {\n        "tipo": "input", //define el tipo de objeto\n        "spellcheck": true, //activa la verificaci\xf3n ortogr\xe1fica\n        "left": 60, //posici\xf3n izquierda en el formulario  \n        "top": 160, //posici\xf3n superior en el formulario \n        "width": 100, //ancho del objeto\n        "height": 20 //altura del objeto\n        }\n'})}),"\n",(0,o.jsx)(r.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,o.jsxs)(r.details,{children:[(0,o.jsx)(r.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Lanzamiento"}),(0,o.jsx)(r.th,{children:"Modificaciones"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"19 R7"}),(0,o.jsx)(r.td,{children:"Soporte de la propiedad Radio de esquina"})]})})]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#allow-font-color-picker",children:"Permitir selector de fuente/color"})," -",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#alpha-format",children:"Formato Alfa"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#auto-spellcheck",children:"Revisi\xf3n ortogr\xe1fica autom\xe1tica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#text-when-false-text-when-true",children:"Prueba cuando es falso/texto cuando es verdadero"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de l\xednea de borde"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Fondo"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDataSource#choice-list",children:"Lista de selecci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#context-menu",children:"Men\xfa contextual"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Radio de esquina"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#date-format",children:"Formato de fecha"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesRangeOfValues#default-value",children:"Valor por defecto"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAction#draggable",children:"Arrastrable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAction#droppable",children:"Abandonable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#enterable",children:"Ingresable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#entry-filter",children:"Filtro de entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesRangeOfValues#excluded-list",children:"Lista de excluidos"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#expression-type",children:"Tipo de expresi\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#fill-color",children:"Color de relleno"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#font-size",children:"Tama\xf1o de fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Ocultar rect\xe1ngulo de enfoque"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#horizontal-alignment",children:"Alineaci\xf3n horizontal"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Barra de desplazamiento horizontal"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Tama\xf1o horizontal"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#italic",children:"It\xe1lica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#multiline",children:"Multil\xednea"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#multi-style",children:"Multiestilo"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#number-format",children:"Formato de n\xfamero"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#object-name",children:"Nombre de objeto"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#orientation",children:"Orientaci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#picture-format",children:"Formato de imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#placeholder",children:"Marcador de posici\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesPrint#print-frame",children:"Imprimir marco"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesRangeOfValues#required-list",children:"Lista requerida"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#selection-always-visible",children:"Selecci\xf3n siempre visible"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#store-with-default-style-tags",children:"Almacenar con etiquetas de estilo por defecto"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#text-when-false-text-when-true",children:"Texto cuando es falso/Texto cuando es verdadero"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#time-format",children:"Formato de tiempo"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#underline",children:"Subrayado"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#variable-or-expression",children:"Variable o expresi\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Barra de desplazamiento vertical"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Tama\xf1o vertical"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#wordwrap",children:"Ajustar texto"})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"alternativas",children:"Alternativas"}),"\n",(0,o.jsx)(r.p,{children:"Tambi\xe9n puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, m\xe1s concretamente:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Puede mostrar e introducir datos de los campos de la base directamente en las columnas ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/listboxOverview",children:"de tipo List box"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/dropdownListOverview",children:"Men\xfas desplegables/Listas desplegables"})," y ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/comboBoxOverview",children:"Combo Box"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Puede representar una expresi\xf3n booleana como una ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/checkboxOverview",children:"casilla de selecci\xf3n"})," o como un objeto ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/radiobuttonOverview",children:"bot\xf3n radio"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,s)=>{var o=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,n=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var o,i={},d=null,l=null;for(o in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,o)&&!c.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:t,type:e,key:d,ref:l,props:i,_owner:n.current}}r.Fragment=i,r.jsx=d,r.jsxs=d},474848:(e,r,s)=>{e.exports=s(221020)},331276:(e,r,s)=>{s.d(r,{A:()=>o});const o=s.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>n});var o=s(296540);const t={},i=o.createContext(t);function a(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);