"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["60747"],{854048:function(e,r,s){s.r(r),s.d(r,{metadata:()=>o,contentTitle:()=>n,default:()=>p,assets:()=>c,toc:()=>d,frontMatter:()=>a});var o=JSON.parse('{"id":"FormObjects/inputOverview","title":"Entrada","description":"Las entradas le permiten a\xf1adir expresiones editables o no editables como campos y variables de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/FormObjects/input_overview.md","sourceDirName":"FormObjects","slug":"/FormObjects/inputOverview","permalink":"/docs/es/20/FormObjects/inputOverview","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Finput_overview.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"inputOverview","title":"Entrada"},"sidebar":"docs","previous":{"title":"\xc1rea de grupo","permalink":"/docs/es/20/FormObjects/groupBox"},"next":{"title":"Lista jer\xe1rquica","permalink":"/docs/es/20/FormObjects/listOverview"}}'),t=s("785893"),i=s("250065");let a={id:"inputOverview",title:"Entrada"},n=void 0,c={},d=[{value:"Ejemplo JSON:",id:"ejemplo-json",level:3},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2},{value:"Alternativas",id:"alternativas",level:2}];function l(e){let r={a:"a",code:"code",details:"details",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",summary:"summary",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["Las entradas le permiten a\xf1adir expresiones editables o no editables como ",(0,t.jsx)(r.a,{href:"/docs/es/20/Concepts/identifiers#fields",children:"campos"})," y ",(0,t.jsx)(r.a,{href:"/docs/es/20/Concepts/variables",children:"variables"})," de base de datos a sus formularios. Las entradas pueden manejar datos basados en caracteres (texto, fechas, n\xfameros...) o im\xe1genes:"]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.img,{src:s(489331).Z+"",width:"279",height:"175"})}),"\n",(0,t.jsxs)(r.p,{children:["Las entradas pueden contener ",(0,t.jsx)(r.a,{href:"/docs/es/20/Concepts/quick-tour#assignable-vs-non-assignable-expressions",children:"expresiones asignables o no asignables"}),"."]}),"\n",(0,t.jsxs)(r.p,{children:["Adem\xe1s, las entradas pueden ser ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#enterable",children:"editables o no editables"}),". Una entrada introducible acepta los datos. Puede definir los controles de entrada de datos para el objeto. Una entrada no editable s\xf3lo puede mostrar valores, pero no puede ser editada por el usuario."]}),"\n",(0,t.jsxs)(r.p,{children:["Puedes gestionar los datos con los ",(0,t.jsx)(r.a,{href:"/docs/es/20/Concepts/methods",children:"m\xe9todos"})," objeto o formulario."]}),"\n",(0,t.jsx)(r.h3,{id:"ejemplo-json",children:"Ejemplo JSON:"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-4d",children:'    "miTexto": {\n        "tipo": "input", //define el tipo de objeto\n        "spellcheck": true, //activa la verificaci\xf3n ortogr\xe1fica\n        "left": 60, //posici\xf3n izquierda en el formulario  \n        "top": 160, //posici\xf3n superior en el formulario \n        "width": 100, //ancho del objeto\n        "height": 20 //altura del objeto\n        }\n'})}),"\n",(0,t.jsx)(r.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,t.jsxs)(r.details,{children:[(0,t.jsx)(r.summary,{children:"Hist\xf3rico"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Lanzamiento"}),(0,t.jsx)(r.th,{children:"Modificaciones"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"19 R7"}),(0,t.jsx)(r.td,{children:"Soporte de la propiedad Radio de esquina"})]})})]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#allow-fontcolor-picker",children:"Permitir selector de fuente/color"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#alpha-format",children:"Formato alfa"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#auto-spellcheck",children:"Correcci\xf3n ortogr\xe1fica autom\xe1tica"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Color de fondo"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Formato booleano"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#border-line-style",children:"Estilo de l\xednea de borde"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Fondo"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDataSource#choice-list",children:"Lista de opciones"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#context-menu",children:"Men\xfa contextual"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#corner-radius",children:"Radio de esquina"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#date-format",children:"Formato de fecha"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesRangeOfValues#default-value",children:"Valor predeterminado"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAction#draggable",children:"Arrastrable"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAction#droppable",children:"Desplegable"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#enterable",children:"Inscribible"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#entry-filter",children:"Filtro de entrada"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesRangeOfValues#excluded-list",children:"Lista excluida"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#expression-type",children:"Tipo de expresi\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesBackgroundAndBorder#background-color--fill-color",children:"Color de relleno"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#font-size",children:"Tama\xf1o de fuente"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAppearance#hide-focus-rectangle",children:"Ocultar rect\xe1ngulo de enfoque"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#horizontal-alignment",children:"Alineaci\xf3n horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAppearance#horizontal-scroll-bar",children:"Barra de desplazamiento horizontal "})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#italic",children:"Cursiva"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#multiline",children:"Multil\xednea"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#multi-style",children:"Multiestilos"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#number-format",children:"Formato num\xe9rico"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#orientation",children:"Orientaci\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#picture-format",children:"Formato de imagen"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#placeholder",children:"Marcador"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesPrint#print-frame",children:"Marco de impresi\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesRangeOfValues#required-list",children:"Lista obligatoria"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesEntry#selection-always-visible",children:"Selecci\xf3n siempre visible"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#store-with-default-style-tags",children:"Guardar con etiquetas de estilo predeterminadas"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#text-when-falsetext-when-true",children:"Texto cuando False/Texto cuando True"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#time-format",children:"Formato Hora"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesText#underline",children:"Subrayado"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesObject#variable-or-expression",children:"Variable o Expresi\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesAppearance#vertical-scroll-bar",children:"Barra de desplazamiento vertical"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#wordwrap",children:"Ajuste de palabras"})]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"alternativas",children:"Alternativas"}),"\n",(0,t.jsx)(r.p,{children:"Tambi\xe9n puede representar expresiones de campos y de variables en sus formularios utilizando objetos alternativos, m\xe1s concretamente:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Puede mostrar e introducir datos de los campos de la base directamente en las columnas ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/listboxOverview",children:"de tipo List box"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Puede representar un campo de lista o una variable directamente en un formulario utilizando los objetos ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/dropdownListOverview",children:"Men\xfas desplegables/Listas desplegables"})," y ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/comboBoxOverview",children:"Combo Box"}),"."]}),"\n",(0,t.jsxs)(r.li,{children:["Puede representar una expresi\xf3n booleana como una ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/checkboxOverview",children:"casilla de selecci\xf3n"})," o como un objeto ",(0,t.jsx)(r.a,{href:"/docs/es/20/FormObjects/radiobuttonOverview",children:"bot\xf3n radio"}),"."]}),"\n"]})]})}function p(e={}){let{wrapper:r}={...(0,i.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},489331:function(e,r,s){s.d(r,{Z:function(){return o}});let o=s.p+"assets/images/input-a8a6391987cb45456a401c1b9a89c6d0.png"},250065:function(e,r,s){s.d(r,{Z:function(){return n},a:function(){return a}});var o=s(667294);let t={},i=o.createContext(t);function a(e){let r=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function n(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(i.Provider,{value:r},e.children)}}}]);