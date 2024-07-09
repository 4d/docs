/*! For license information please see 5185b1c7.0a940644.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7529],{263440:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>n,toc:()=>c});var o=s(474848),t=s(28453);const i={id:"inputOverview",title:"Entrada"},a=void 0,n={id:"FormObjects/inputOverview",title:"Entrada",description:"Generalidades",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/FormObjects/input_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/inputOverview",permalink:"/docs/es/18/FormObjects/inputOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"inputOverview",title:"Entrada"},sidebar:"docs",previous:{title:"\xc1rea de grupo",permalink:"/docs/es/18/FormObjects/groupBox"},next:{title:"Lista jer\xe1rquica",permalink:"/docs/es/18/FormObjects/listOverview"}},d={},c=[{value:"Generalidades",id:"Generalidades",level:2},{value:"Ejemplo JSON",id:"Ejemplo-JSON",level:3},{value:"Propiedades soportadas",id:"Propiedades-soportadas",level:2},{value:"Alternativas",id:"Alternativas",level:2}];function l(e){const r={a:"a",code:"code",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.h2,{id:"Generalidades",children:"Generalidades"}),"\n",(0,o.jsxs)(r.p,{children:["Las entradas le permiten a\xf1adir expresiones editables o no editables como ",(0,o.jsx)(r.a,{href:"/docs/es/18/Concepts/identifiers#fields",children:"campos"})," y ",(0,o.jsx)(r.a,{href:"/docs/es/18/Concepts/variables",children:"variables"})," de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:"]}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.img,{src:s(801981).A+"",width:"279",height:"175"})}),"\n",(0,o.jsxs)(r.p,{children:["Las entradas pueden contener ",(0,o.jsx)(r.a,{href:"/docs/es/18/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"expresiones asignables o no asignables"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Adem\xe1s, las entradas pueden ser ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesEntry#enterable",children:"editables o no editables"}),". Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable s\xf3lo puede mostrar valores, pero no puede ser editada por el usuario."]}),"\n",(0,o.jsxs)(r.p,{children:["Puedes gestionar los datos con los ",(0,o.jsx)(r.a,{href:"/docs/es/18/Concepts/methods",children:"m\xe9todos"})," objeto o formulario."]}),"\n",(0,o.jsx)(r.h3,{id:"Ejemplo-JSON",children:"Ejemplo JSON"}),"\n",(0,o.jsx)(r.pre,{children:(0,o.jsx)(r.code,{className:"language-4d",children:' "myText": {\n  "type": "input", //definir el tipo de objeto\n  "spellcheck": true, //activar la verificaci\xf3n ortogr\xe1fica\n  "left": 60,   //posici\xf3n izquierda en el formulario  \n  "top": 160,   //posici\xf3n superior en el formulario\n  "width": 100,  //ancho del objeto\n  "height": 20  //altura del objeto\n  }\n'})}),"\n",(0,o.jsx)(r.h2,{id:"Propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,o.jsxs)(r.p,{children:[(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesDisplay#alpha-format",children:"Formato Alfa"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesEntry#auto-spellcheck",children:"Comprobaci\xf3n ortogr\xe1fica autom\xe1tica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesText#bold",children:"Negrita"})," - [Formato booleano](properties_Display. md#boolean-format) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de l\xednea de borde"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Fondo"})," - [Lista de opciones](properties_DataSource. md#choice-list) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesEntry#context-menu",children:"Men\xfa de contexto"})," - [Formato de fecha](properties_Display. md#date-format) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesRangeOfValues#default-value",children:"Valor por defecto"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesAction#draggable",children:"Arrastrable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesAction#droppable",children:"Soltable"})," - [Editable](properties_Entry. md#enterable) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesEntry#entry-filter",children:"Filtro de entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesRangeOfValues#excluded-list",children:"Lista de exclusi\xf3n"})," - [Tipo de expresi\xf3n](properties_Object. md#expression-type) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#fill-color",children:"Color de relleno"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - [Tama\xf1o de la fuente](properties_Text. md#font-size) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Ocultar rect\xe1ngulo de enfoque"})," - [Alineaci\xf3n horizontal](properties_Text. md#horizontal-alignment) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Barra de desplazamiento horizontal"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Tama\xf1o horizontal"})," - [It\xe1lica](properties_Text. md#italic) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#line-width",children:"Ancho de l\xednea"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesEntry#multiline",children:"Multiline"})," - [Multi-estilo](properties_Text. md#multi-style) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesDisplay#number-format",children:"Formato num\xe9rico"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - [Orientaci\xf3n](properties_Text. md#orientation) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesDisplay#picture-format",children:"Formato de imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesEntry#placeholder",children:"Titular"})," - [Marco de impresi\xf3n](properties_Print. md#print-frame) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesRangeOfValues#required-list",children:"Lista requerida"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesDataSource#save-as",children:"Guardar como"})," - [Selecci\xf3n siempre visible](properties_Entry. md#selection-always-visible) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesText#store-with-default-style-tags",children:"Guardar con etiquetas de estilo por defecto"})," - [Texto cuando es falso/Texto cuando es verdadero](properties_Display. md#text-when-false-text-when-true) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesDisplay#time-format",children:"Formato de tiempo"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesObject#type",children:"Type"})," - [Subrayado](properties_Text. md#underline) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression",children:"Variable o expresi\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Barra de desplazamiento vertical"})," - [Tama\xf1o vertical](properties_ResizingOptions. md#vertical-sizing) - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/propertiesDisplay#wordwrap",children:"Wordwrap"})]}),"\n",(0,o.jsx)(r.hr,{}),"\n",(0,o.jsx)(r.h2,{id:"Alternativas",children:"Alternativas"}),"\n",(0,o.jsx)(r.p,{children:"Tambi\xe9n puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, m\xe1s concretamente:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Puede mostrar e introducir datos de los campos de la base directamente en las columnas ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/listboxOverview",children:"de tipo List box"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos ",(0,o.jsx)(r.a,{href:"popupMenuDropdownList_overview",children:"Men\xfas desplegables/Listas desplegables"})," y ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/comboBoxOverview",children:"Combo Box"}),"."]}),"\n",(0,o.jsxs)(r.li,{children:["Puede representar una expresi\xf3n booleana como una ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/checkboxOverview",children:"casilla de selecci\xf3n"})," o como un objeto ",(0,o.jsx)(r.a,{href:"/docs/es/18/FormObjects/radiobuttonOverview",children:"bot\xf3n radio"}),"."]}),"\n"]})]})}function p(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,s)=>{var o=s(296540),t=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,n=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,s){var o,i={},c=null,l=null;for(o in void 0!==s&&(c=""+s),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,o)&&!d.hasOwnProperty(o)&&(i[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===i[o]&&(i[o]=r[o]);return{$$typeof:t,type:e,key:c,ref:l,props:i,_owner:n.current}}r.Fragment=i,r.jsx=c,r.jsxs=c},474848:(e,r,s)=>{e.exports=s(221020)},801981:(e,r,s)=>{s.d(r,{A:()=>o});const o=s.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>n});var o=s(296540);const t={},i=o.createContext(t);function a(e){const r=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);