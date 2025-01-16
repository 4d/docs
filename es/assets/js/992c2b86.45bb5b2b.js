"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["65391"],{740001:function(e,r,s){s.r(r),s.d(r,{default:()=>p,frontMatter:()=>a,metadata:()=>o,assets:()=>d,toc:()=>c,contentTitle:()=>n});var o=JSON.parse('{"id":"FormObjects/inputOverview","title":"Entrada","description":"Las entradas le permiten a\xf1adir expresiones editables o no editables como campos y variables de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/FormObjects/input_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/inputOverview","permalink":"/docs/es/FormObjects/inputOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"inputOverview","title":"Entrada"},"sidebar":"docs","previous":{"title":"\xc1rea de grupo","permalink":"/docs/es/FormObjects/groupBox"},"next":{"title":"Lista jer\xe1rquica","permalink":"/docs/es/FormObjects/listOverview"}}'),t=s("785893"),i=s("250065");let a={id:"inputOverview",title:"Entrada"},n=void 0,d={},c=[{value:"Ejemplo JSON:",id:"ejemplo-json",level:3},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2},{value:"Alternativas",id:"alternativas",level:2}];function l(e){let r={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Las entradas le permiten a\xf1adir expresiones editables o no editables como ",(0,t.jsx)(r.a,{href:"/docs/es/Concepts/identifiers#fields",children:"campos"})," y ",(0,t.jsx)(r.a,{href:"/docs/es/Concepts/variables",children:"variables"})," de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(411476).Z+"",width:"279",height:"175"})}),"\n",(0,t.jsxs)(r.p,{children:["Las entradas pueden contener ",(0,t.jsx)(r.a,{href:"/docs/es/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"expresiones asignables o no asignables"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Adem\xe1s, las entradas pueden ser ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#enterable",children:"editables o no editables"}),". Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable s\xf3lo puede mostrar valores, pero no puede ser editada por el usuario."]}),"\n",(0,t.jsxs)(r.p,{children:["Puede gestionar los datos con los ",(0,t.jsx)(r.a,{href:"/docs/es/Concepts/methods",children:"m\xe9todos"})," objeto o formulario."]}),"\n",(0,t.jsx)(r.h3,{id:"ejemplo-json",children:"Ejemplo JSON:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'	"myText": {\n		"type": "input",	//definir el tipo de objeto\n		"spellcheck": true,	//activar la verificaci\xf3n ortogr\xe1fica\n		"left": 60,			//posici\xf3n izquierda en el formulario\n		"top": 160,			//posici\xf3n superior en el formulario	\n		"width": 100,		//ancho del objeto\n		"height": 20		//altura del objeto\n		}\n'})}),"\n",(0,t.jsx)(r.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,t.jsxs)(r.details,{children:[(0,t.jsx)(r.summary,{children:"Historia"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Lanzamiento"}),(0,t.jsx)(r.th,{children:"Modificaciones"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"19 R7"}),(0,t.jsx)(r.td,{children:"Soporte de la propiedad Radio de esquina"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#allow-fontcolor-picker",children:"Permitir selector de fuente/color"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#alpha-format",children:"Formato alfa"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#auto-spellcheck",children:"Correcci\xf3n ortogr\xe1fica autom\xe1tica"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Color de fondo"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Formato booleano"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de l\xednea de borde"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDataSource#choice-list",children:"Lista de opciones"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#context-menu",children:"Men\xfa contextual"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Radio de esquina"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#date-format",children:"Formato Fecha"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesRangeOfValues#default-value",children:"Valor por defecto"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesAction#draggable",children:"Arrastrable"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesAction#droppable",children:"Soltable"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#enterable",children:"Enterable"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#entry-filter",children:"Filtro de entrada"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesRangeOfValues#excluded-list",children:"Lista excluida"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#expression-type",children:"Tipo de expresi\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Color de relleno"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#font-size",children:"Tama\xf1o de fuente"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height",children:"Alto"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Hide focus rectangle"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#horizontal-alignment",children:"Alineaci\xf3n horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Barra de desplazamiento horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Tama\xf1o horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#italic",children:"Cursiva"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#multiline",children:"Multil\xednea"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#multi-style",children:"Multiestilo"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#formato-num%C3%A9rico",children:"Formato num\xe9rico"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#nombre-de-objeto",children:"Nombre de objeto"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#orientaci%C3%B3n",children:"Orientaci\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#formato-de-imagen",children:"Formato de imagen"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#placeholder",children:"Marcador de posici\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesPrint#print-frame",children:"Marco de impresi\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesRangeOfValues#required-list",children:"Lista obligatoria"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesEntry#selection-always-visible",children:"Selecci\xf3n siempre visible"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#store-with-default-style-tags",children:"Almacenar con etiquetas de estilo predeterminadas"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Texto cuando False/Texto cuando True"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#formato-de-tiempo",children:"Formato de tiempo"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top",children:"Arriba"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesText#underline",children:"Subrayado"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"Variable o expresi\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesAppearance#barra-de-desplazamiento-vertical",children:"Barra de desplazamiento vertical"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#tama%C3%B1o-vertical",children:"Tama\xf1o vertical"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibilidad",children:"Visibilidad"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#ancho",children:"Ancho"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#wordwrap",children:"Ajuste de palabras"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"alternativas",children:"Alternativas"}),"\n",(0,t.jsx)(r.p,{children:"Tambi\xe9n puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, m\xe1s concretamente:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Puede mostrar e introducir datos de los campos de la base directamente en las columnas ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/listboxOverview",children:"de tipo List box"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Men\xfas desplegables/Listas desplegables"})," y ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Combo Box"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Puede representar una expresi\xf3n booleana como una ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"casilla de selecci\xf3n"})," o como un objeto ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"bot\xf3n radio"}),"."]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},411476:function(e,r,s){s.d(r,{Z:function(){return o}});let o=s.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},250065:function(e,r,s){s.d(r,{Z:function(){return n},a:function(){return a}});var o=s(667294);let t={},i=o.createContext(t);function a(e){let r=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);