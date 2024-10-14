"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84222],{36655:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>c,contentTitle:()=>t,default:()=>p,frontMatter:()=>n,metadata:()=>a,toc:()=>d});var i=s(474848),r=s(28453);const n={id:"comboBoxOverview",title:"Combo Box"},t=void 0,a={id:"FormObjects/comboBoxOverview",title:"Combo Box",description:"Un combo box es similar a una lista desplegable, excepto que acepta texto introducido desde el teclado y tiene opciones adicionales.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/es/FormObjects/comboBoxOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Casilla a seleccionar",permalink:"/docs/es/FormObjects/checkboxOverview"},next:{title:"Lista desplegable",permalink:"/docs/es/FormObjects/dropdownListOverview"}},c={},d=[{value:"Gesti\xf3n de combo boxes",id:"gesti\xf3n-de-combo-boxes",level:2},{value:"Utilizar un objeto",id:"utilizar-un-objeto",level:3},{value:"Utilizar un array",id:"utilizar-un-array",level:3},{value:"Utilizar una lista de selecci\xf3n",id:"utilizar-una-lista-de-selecci\xf3n",level:3},{value:"Opciones",id:"opciones",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}];function l(e){const o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(o.p,{children:["Un combo box es similar a una ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/dropdownListOverview#overview",children:"lista desplegable"}),", excepto que acepta texto introducido desde el teclado y tiene opciones adicionales."]}),"\n",(0,i.jsx)(o.p,{children:(0,i.jsx)(o.img,{src:s(3051).A+"",width:"173",height:"106"})}),"\n",(0,i.jsx)(o.p,{children:"Fundamentalmente, debe considerar un combo box como un \xe1rea editable que utiliza su objeto, array o una lista de selecci\xf3n como el conjunto de valores por defecto."}),"\n",(0,i.jsx)(o.h2,{id:"gesti\xf3n-de-combo-boxes",children:"Gesti\xf3n de combo boxes"}),"\n",(0,i.jsxs)(o.p,{children:["Utilice el evento ",(0,i.jsx)(o.a,{href:"/docs/es/Events/onDataChange",children:(0,i.jsx)(o.code,{children:"On Data Change"})})," para gestionar las entradas en el \xe1rea editable, como lo har\xeda con cualquier objeto de formulario de entrada."]}),"\n",(0,i.jsxs)(o.p,{children:["Un combo box se inicializa exactamente igual que una ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/dropdownListOverview#overview",children:"lista desplegable"}),": utilizando un objeto, un array o una lista de selecci\xf3n."]}),"\n",(0,i.jsx)(o.h3,{id:"utilizar-un-objeto",children:"Utilizar un objeto"}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"Esta funcionalidad s\xf3lo est\xe1 disponible en proyectos 4D."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Un ",(0,i.jsx)(o.a,{href:"/docs/es/Concepts/object",children:"objeto"})," encapsulando una ",(0,i.jsx)(o.a,{href:"/docs/es/Concepts/collection",children:"colecci\xf3n"})," puede utilizarse como fuente de datos de un combo box. El objeto debe contener las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,i.jsxs)(o.table,{children:[(0,i.jsx)(o.thead,{children:(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.th,{children:"Propiedad"}),(0,i.jsx)(o.th,{children:"Tipo"}),(0,i.jsx)(o.th,{children:"Descripci\xf3n"})]})}),(0,i.jsxs)(o.tbody,{children:[(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:"valores"})}),(0,i.jsx)(o.td,{children:"Collection"}),(0,i.jsxs)(o.td,{children:["Obligatorio - Colecci\xf3n de valores escalares. Todos los valores deben ser del mismo tipo. Tipos soportados:",(0,i.jsx)(o.li,{children:"cadenas"}),(0,i.jsx)(o.li,{children:"n\xfameros"}),(0,i.jsx)(o.li,{children:"fechas"}),(0,i.jsx)(o.li,{children:"horas"}),"Si est\xe1 vac\xedo o no se define, el combo box estar\xe1 vac\xedo"]})]}),(0,i.jsxs)(o.tr,{children:[(0,i.jsx)(o.td,{children:(0,i.jsx)(o.code,{children:"currentValue"})}),(0,i.jsx)(o.td,{children:"igual que Collection"}),(0,i.jsx)(o.td,{children:"Texto introducido por el usuario"})]})]})]}),"\n",(0,i.jsx)(o.p,{children:"Si el objeto contiene otras propiedades, se ignoran."}),"\n",(0,i.jsxs)(o.p,{children:["Cuando el usuario introduce texto en el combo box, la propiedad ",(0,i.jsx)(o.code,{children:"currentValue"})," del objeto obtiene el texto introducido."]}),"\n",(0,i.jsx)(o.h3,{id:"utilizar-un-array",children:"Utilizar un array"}),"\n",(0,i.jsxs)(o.p,{children:["Consulte ",(0,i.jsx)(o.strong,{children:"Utilizaci\xf3n de un array"})," en la ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/dropdownListOverview#using-an-array",children:"p\xe1gina de la lista desplegable"})," para obtener informaci\xf3n sobre c\xf3mo inicializar el array."]}),"\n",(0,i.jsx)(o.p,{children:"Cuando el usuario introduce texto en el combo box, el elemento 0 del array recibe el texto introducido."}),"\n",(0,i.jsx)(o.h3,{id:"utilizar-una-lista-de-selecci\xf3n",children:"Utilizar una lista de selecci\xf3n"}),"\n",(0,i.jsx)(o.p,{children:"Si desea utilizar un combo box para gestionar los valores de un \xe1rea de entrada (campo listado o variable), 4D le permite referenciar el campo o variable directamente como fuente de datos del objeto formulario. Esto facilita la gesti\xf3n de los campos/variables listados."}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsx)(o.p,{children:"Si utiliza una lista jer\xe1rquica, s\xf3lo se muestra el primer nivel y se puede seleccionar."}),"\n"]}),"\n",(0,i.jsxs)(o.p,{children:["Para asociar un combo box a un campo o variable, basta con introducir el nombre del campo o variable directamente en ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"Variable o Expresi\xf3n"})," del objeto formulario en la Lista de Propiedades."]}),"\n",(0,i.jsx)(o.p,{children:"Cuando se ejecuta el formulario, 4D gestiona autom\xe1ticamente el combo box durante la entrada o visualizaci\xf3n: cuando un usuario elige un valor, \xe9ste se guarda en el campo; este valor de campo se muestra en el combo box cuando se visualiza el formulario:"}),"\n",(0,i.jsxs)(o.p,{children:["Para m\xe1s informaci\xf3n, consulte ",(0,i.jsx)(o.strong,{children:"Utilizar una opci\xf3n"})," en la ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/dropdownListOverview#using-a-choice-list",children:"p\xe1gina lista desplegable"}),"."]}),"\n",(0,i.jsx)(o.h2,{id:"opciones",children:"Opciones"}),"\n",(0,i.jsx)(o.p,{children:"Los objetos de tipo combo box aceptan dos opciones espec\xedficas:"}),"\n",(0,i.jsxs)(o.ul,{children:["\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesDataSource#automatic-insertion",children:"Inserci\xf3n autom\xe1tica"}),": permite a\xf1adir autom\xe1ticamente un valor a la fuente de datos cuando un usuario introduce un valor que no se encuentra en la lista asociada al combo box."]}),"\n",(0,i.jsxs)(o.li,{children:[(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesRangeOfValues#excluded-list",children:"Exclusi\xf3n"})," (lista de valores excluidos): permite establecer una lista cuyos valores no pueden introducirse en el combo box. Si se introduce un valor excluido, no se acepta y se muestra un mensaje de error."]}),"\n"]}),"\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.blockquote,{children:["\n",(0,i.jsxs)(o.p,{children:["Associating a ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesRangeOfValues#required-list",children:"list of required values"})," is not available for combo boxes. En una interfaz, si un objeto debe proponer una lista finita de valores requeridos, entonces debe utilizar un objeto ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/dropdownListOverview#overview",children:"lista desplegable"}),"."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(o.h2,{id:"propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,i.jsxs)(o.p,{children:[(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesDisplay#alpha-format",children:"Formato Alfa"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Abajo"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesDataSource#choice-list",children:"Lista de opciones"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesDisplay#date-format",children:"Formato de fecha"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesObject#expression-type",children:"Tipo de expresi\xf3n"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesText#font-size",children:"Tama\xf1o de fuente"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesHelp#help-tip",children:"Consejo de ayuda"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Dimensionamiento horizontal"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesText#italic",children:"It\xe1lica"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesDisplay#time-format",children:"Formato de hora"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#top",children:"Superior"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesText#underline",children:"Subrayado"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesObject#variable-or-expression",children:"Variable o expresi\xf3n"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Dimensionamiento vertical"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,i.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]})]})}function p(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,i.jsx)(o,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},3051:(e,o,s)=>{s.d(o,{A:()=>i});const i="data:image/png;base64,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"},28453:(e,o,s)=>{s.d(o,{R:()=>t,x:()=>a});var i=s(296540);const r={},n=i.createContext(r);function t(e){const o=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function a(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),i.createElement(n.Provider,{value:o},e.children)}}}]);