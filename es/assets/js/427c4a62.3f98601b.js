/*! For license information please see 427c4a62.3f98601b.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[71354],{212451:(e,s,a)=>{a.r(s),a.d(s,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>t});var r=a(474848),n=a(28453);const o={id:"dropdownListOverview",title:"Lista desplegable"},i=void 0,d={id:"FormObjects/dropdownListOverview",title:"Lista desplegable",description:"Las listas desplegables son objetos de formulario que permiten al usuario seleccionar de una lista. Los elementos mostrados en la lista desplegable se gestionan mediante un objeto, array, una lista de selecci\xf3n o una acci\xf3n est\xe1ndar.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/FormObjects/dropdownList_Overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/dropdownListOverview",permalink:"/docs/es/20-R4/FormObjects/dropdownListOverview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FdropdownList_Overview.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"dropdownListOverview",title:"Lista desplegable"},sidebar:"docs",previous:{title:"Combo Box",permalink:"/docs/es/20-R4/FormObjects/comboBoxOverview"},next:{title:"Group Box",permalink:"/docs/es/20-R4/FormObjects/groupBox"}},l={},t=[{value:"Tipos de listas desplegables",id:"Tipos-de-listas-desplegables",level:2},{value:"Gesti\xf3n de listas desplegables",id:"Gesti\xf3n-de-listas-desplegables",level:2},{value:"Utilizar un objeto",id:"Utilizar-un-objeto",level:3},{value:"Utilizar un array",id:"Utilizar-un-array",level:3},{value:"Utilizar una lista de selecci\xf3n",id:"Utilizar-una-lista-de-selecci\xf3n",level:3},{value:"Valor del elemento seleccionado o Referencia del elemento seleccionado",id:"Valor-del-elemento-seleccionado-o-Referencia-del-elemento-seleccionado",level:4},{value:"Uso de una lista de selecci\xf3n jer\xe1rquica",id:"Uso-de-una-lista-de-selecci\xf3n-jer\xe1rquica",level:3},{value:"Utilizar una acci\xf3n est\xe1ndar",id:"Utilizar-una-acci\xf3n-est\xe1ndar",level:3},{value:"Propiedades soportadas",id:"Propiedades-soportadas",level:2}];function c(e){const s={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.p,{children:"Las listas desplegables son objetos de formulario que permiten al usuario seleccionar de una lista. Los elementos mostrados en la lista desplegable se gestionan mediante un objeto, array, una lista de selecci\xf3n o una acci\xf3n est\xe1ndar."}),"\n",(0,r.jsx)(s.p,{children:'En macOS, las listas desplegables tambi\xe9n se denominan a veces "men\xfa emergente". Ambos nombres se refieren a los mismos objetos. Como muestra el siguiente ejemplo, el aspecto de estos objetos puede variar ligeramente seg\xfan la plataforma:'}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:a(720959).A+"",width:"458",height:"158"})}),"\n",(0,r.jsx)(s.h2,{id:"Tipos-de-listas-desplegables",children:"Tipos de listas desplegables"}),"\n",(0,r.jsxs)(s.p,{children:["Puede crear diferentes tipos de listas desplegables con distintas funcionalidades. Para definir un tipo, seleccione los valores apropiados ",(0,r.jsx)(s.strong,{children:"Tipo de expresi\xf3n"})," y ",(0,r.jsx)(s.strong,{children:"Tipo de datos"})," en la lista Propiedades o utilice su equivalente JSON."]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Funcionalidades"}),(0,r.jsx)(s.th,{children:"Tipo de expresi\xf3n"}),(0,r.jsx)(s.th,{children:"Tipos de datos"}),(0,r.jsx)(s.th,{children:"Definici\xf3n JSON"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"Creado sobre una colecci\xf3n"}),(0,r.jsx)(s.td,{children:"Object"}),(0,r.jsx)(s.td,{children:"Numeric, Text, Date o Time"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"dataSourceTypeHint: object"})," + ",(0,r.jsx)(s.code,{children:"numberFormat: <format>"})," or ",(0,r.jsx)(s.code,{children:"textFormat: <format>"})," o ",(0,r.jsx)(s.code,{children:"dateFormat: <format>"})," o ",(0,r.jsx)(s.code,{children:"timeFormat: <format>"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Array"}),(0,r.jsx)(s.td,{children:"Basado en un array"}),(0,r.jsx)(s.td,{children:"Array"}),(0,r.jsx)(s.td,{children:"Numeric, Text, Date o Time"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"dataSourceTypeHint: arrayNumber"})," o ",(0,r.jsx)(s.code,{children:"arrayText"})," o ",(0,r.jsx)(s.code,{children:"arrayDate"})," o ",(0,r.jsx)(s.code,{children:"arrayTime"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Lista de selecci\xf3n guardada como valor"}),(0,r.jsx)(s.td,{children:"Crear en una lista de selecci\xf3n (est\xe1ndar)"}),(0,r.jsx)(s.td,{children:"Lista"}),(0,r.jsx)(s.td,{children:"Valor del elemento seleccionado"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"dataSourceTypeHint: text"})," + ",(0,r.jsx)(s.code,{children:"saveAs: value"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Lista de selecci\xf3n guardada como referencia"}),(0,r.jsx)(s.td,{children:"Creado sobre una lista de selecci\xf3n. La posici\xf3n del elemento es guardada"}),(0,r.jsx)(s.td,{children:"Lista"}),(0,r.jsx)(s.td,{children:"Referencia del elemento seleccionado"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.code,{children:"dataSourceTypeHint: integer"})," + ",(0,r.jsx)(s.code,{children:"saveAs: reference"})]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Lista de selecci\xf3n jer\xe1rquica"}),(0,r.jsx)(s.td,{children:"Puede mostrar contenido jer\xe1rquico"}),(0,r.jsx)(s.td,{children:"Lista"}),(0,r.jsx)(s.td,{children:"Referencia de la lista"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"dataSourceTypeHint: integer"})})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"Acci\xf3n est\xe1ndar"}),(0,r.jsx)(s.td,{children:"Creado autom\xe1ticamente por la acci\xf3n"}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.em,{children:"any"})}),(0,r.jsx)(s.td,{children:(0,r.jsx)(s.em,{children:"todo excepto referencia de lista"})}),(0,r.jsxs)(s.td,{children:["toda definici\xf3n + ",(0,r.jsx)(s.code,{children:"action: <action>"})," (+ ",(0,r.jsx)(s.code,{children:"focusable: false"})," para acciones que se aplican a otras \xe1reas)"]})]})]})]}),"\n",(0,r.jsx)(s.h2,{id:"Gesti\xf3n-de-listas-desplegables",children:"Gesti\xf3n de listas desplegables"}),"\n",(0,r.jsx)(s.h3,{id:"Utilizar-un-objeto",children:"Utilizar un objeto"}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Esta funcionalidad s\xf3lo est\xe1 disponible en proyectos 4D."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Un ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/Concepts/object",children:"objeto"})," encapsulando una ",(0,r.jsx)(s.a,{href:"Concepts/dt_collection",children:"colecci\xf3n"})," puede utilizarse como fuente de datos de una lista desplegable. El objeto debe contener las siguientes propiedades:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Propiedad"}),(0,r.jsx)(s.th,{children:"Tipo"}),(0,r.jsx)(s.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(s.tbody,{children:[(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"values"})}),(0,r.jsx)(s.td,{children:"Collection"}),(0,r.jsxs)(s.td,{children:["Obligatorio - Colecci\xf3n de valores escalares. Todos los valores deben ser del mismo tipo. Tipos soportados:",(0,r.jsx)(s.li,{children:"cadenas"}),(0,r.jsx)(s.li,{children:"numbers"}),(0,r.jsx)(s.li,{children:"dates"}),(0,r.jsx)(s.li,{children:"horas"}),"Si est\xe1 vac\xedo o no est\xe1 definido, la lista desplegable est\xe1 vac\xeda"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"index"})}),(0,r.jsx)(s.td,{children:"number"}),(0,r.jsxs)(s.td,{children:["\xcdndice del elemento seleccionado actualmente (valor comprendido entre 0 y ",(0,r.jsx)(s.code,{children:"collection.length-1"}),"). Si se establece -1, ",(0,r.jsx)(s.code,{children:"currentValue"})," se muestra como una cadena de marcador de posici\xf3n"]})]}),(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:(0,r.jsx)(s.code,{children:"currentValue"})}),(0,r.jsx)(s.td,{children:"igual que Collection"}),(0,r.jsx)(s.td,{children:"Elemento seleccionado actualmente (se utiliza como valor de marcador de posici\xf3n si se define por c\xf3digo)"})]})]})]}),"\n",(0,r.jsx)(s.p,{children:"Si el objeto contiene otras propiedades, se ignoran."}),"\n",(0,r.jsx)(s.p,{children:"Para inicializar el objeto asociado a la lista desplegable, puede:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Introduzca una lista de valores por defecto en las propiedades del objeto seleccionando ",(0,r.jsx)(s.code,{children:"\\&#060;Lista Est\xe1tica&#062;"})," en el tema ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDataSource",children:"Fuente de Datos"})," de la Lista de Propiedades. Los valores por defecto se cargan en un objeto autom\xe1ticamente."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:['Ejecutar c\xf3digo que crea el objeto y sus propiedades. Por ejemplo, si "myList" es la variable ',(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#variable-or-expression"})," asociada a la lista desplegable, puede escribir en el evento de formulario ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/Events/onLoad",children:"On Load"}),":"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'// Form.myDrop es la fuente de datos del objeto formulario\n\nForm.myDrop:=New object\nForm.myDrop.values:=New collection("apples"; "nuts"; "pears"; "oranges"; "carrots")\nForm.myDrop.index:=-1  //currentValue es un marcador de posici\xf3n\nForm.myDrop.currentValue:="Select a fruit" \n'})}),"\n",(0,r.jsx)(s.p,{children:"La lista desplegable se muestra con la cadena del marcador de posici\xf3n:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:a(217268).A+"",width:"230",height:"33"})}),"\n",(0,r.jsx)(s.p,{children:"Despu\xe9s de que el usuario seleccione un valor:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:a(954749).A+"",width:"234",height:"116"})}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'Form.myDrop.values // ["apples","nuts","pears","oranges","carrots"]\nForm.myDrop.currentValue //"oranges"\nForm.myDrop.index //3\n'})}),"\n",(0,r.jsx)(s.h3,{id:"Utilizar-un-array",children:"Utilizar un array"}),"\n",(0,r.jsxs)(s.p,{children:["Un ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/Concepts/arrays",children:"array"})," es una lista de valores en memoria a la que se hace referencia por el nombre del array. Una lista desplegable puede mostrar un array como una lista de valores cuando se hace clic en ella."]}),"\n",(0,r.jsx)(s.p,{children:"Para inicializar el array asociado a la lista desplegable, puede:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Introduzca una lista de valores por defecto en las propiedades del objeto seleccionando ",(0,r.jsx)(s.code,{children:"\\&#060;Lista Est\xe1tica&#062;"})," en el tema ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDataSource",children:"Fuente de Datos"})," de la Lista de Propiedades. Los valores por defecto se cargan en un array autom\xe1ticamente. Puede referirse al array utilizando el nombre de la variable asociada al objeto."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsx)(s.p,{children:"Antes de mostrar el objeto, ejecute el c\xf3digo que asigna valores a los elementos del array. Por ejemplo:"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'  ARRAY TEXT(aCities;6) \n  aCities{1}:="Philadelphia" \n  aCities{2}:="Pittsburg" \n  aCities{3}:="Grand Blanc" \n  aCities{4}:="Bad Axe" \n  aCities{5}:="Frostbite Falls" \n  aCities{6}:="Green Bay" \n'})}),"\n",(0,r.jsxs)(s.p,{children:["En este caso, el nombre de la ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," asociada al objeto en el formulario debe ser ",(0,r.jsx)(s.code,{children:"aCities"}),". Este c\xf3digo podr\xeda colocarse en el m\xe9todo formulario y ejecutarse cuando se ejecute el evento formulario ",(0,r.jsx)(s.code,{children:"On Load"}),"."]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["Antes de que se muestre el objeto, cargue los valores de una lista en el array utilizando el comando ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page288.html",children:"LIST TO ARRAY"}),". Por ejemplo:"]}),"\n"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'   LIST TO ARRAY("Cities";aCities)\n'})}),"\n",(0,r.jsxs)(s.p,{children:["En este caso tambi\xe9n, el nombre de la ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#variable-or-expression",children:"variable"})," asociada al objeto en el formulario debe ser ",(0,r.jsx)(s.code,{children:"aCities"}),". Este c\xf3digo puede ejecutarse en lugar de las sentencias de asignaci\xf3n mostradas anteriormente."]}),"\n",(0,r.jsx)(s.p,{children:"Si necesita guardar la elecci\xf3n del usuario en un campo, deber\xe1 utilizar una sentencia de asignaci\xf3n que se ejecute despu\xe9s de aceptar el registro. El c\xf3digo podr\xeda ser as\xed:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-4d",children:'  Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Cities";aCities)\n       If(Record number([People])<0) `nuevo registro\n          aCities:=3 `mostrar un valor por defecto\n       Else `registro existente, mostrar valor almacenado\n          aCities:=Find in array(aCities;City)\n       End if\n    :(Form event=On Clicked) `el usuario modifica la selecci\xf3n\n       City:=aCities{aCities} `el campo obtiene un nuevo valor\n    :(Form event=On Validate)\n       City:=aCities{aCities}\n    :(Form event=On Unload)\n       CLEAR VARIABLE(aCities)\n End case\n'})}),"\n",(0,r.jsx)(s.p,{children:"Debe seleccionar cada evento que pruebe en sus sentencia Case. Los arrays siempre contienen un n\xfamero finito de elementos. La lista de elementos es din\xe1mica y puede ser modificada por un m\xe9todo. Los elementos de un array pueden modificarse, ordenarse y a\xf1adirse."}),"\n",(0,r.jsx)(s.h3,{id:"Utilizar-una-lista-de-selecci\xf3n",children:"Utilizar una lista de selecci\xf3n"}),"\n",(0,r.jsxs)(s.p,{children:["Si desea utilizar una lista desplegable para gestionar los valores de un \xe1rea de entrada (campo listado o variable), 4D le permite hacer referencia al campo o variable directamente como ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#variable-or-expression",children:"fuente de datos"})," de la lista desplegable. Esto facilita la gesti\xf3n de los campos/variables listados."]}),"\n",(0,r.jsx)(s.p,{children:'Por ejemplo, en el caso de un campo "Color" que s\xf3lo puede contener los valores "Blanco", "Azul", "Verde" o "Rojo", es posible crear una lista que contenga estos valores y asociarla a una lista desplegable que haga referencia al campo "Color" 4D. 4D se encarga entonces de gestionar autom\xe1ticamente la entrada y la visualizaci\xf3n del valor actual en el formulario.'}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Si utiliza una lista jer\xe1rquica, s\xf3lo se muestra el primer nivel y se puede seleccionar. If you use a hierarchical list, only the first level is displayed and can be selected."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Para asociar una lista desplegable a un campo o variable, introduzca directamente el nombre del campo o variable como campo ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#variable-or-expression",children:"Variable o Expresi\xf3n"})," de la lista desplegable en la Lista de propiedades."]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:'No es posible utilizar esta funcionalidad con una lista desplegable de objetos o arrays. Si introduce un nombre de campo en el \xe1rea "Variable o expresi\xf3n", deber\xe1 utilizar una lista de selecci\xf3n.'}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Cuando se ejecuta el formulario, 4D gestiona autom\xe1ticamente la lista desplegable durante la introducci\xf3n o la visualizaci\xf3n: cuando un usuario elige un valor, \xe9ste se guarda en el campo; este valor de campo se muestra en la lista desplegable cuando se visualiza el formulario:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:a(280096).A+"",width:"755",height:"171"})}),"\n",(0,r.jsx)(s.h4,{id:"Valor-del-elemento-seleccionado-o-Referencia-del-elemento-seleccionado",children:"Valor del elemento seleccionado o Referencia del elemento seleccionado"}),"\n",(0,r.jsxs)(s.p,{children:["Cuando haya asociado una lista desplegable con una lista de opciones y con un campo o una variable, puede definir la propiedad ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDataSource#data-type",children:(0,r.jsx)(s.strong,{children:"Tipo de datos"})})," en ",(0,r.jsx)(s.strong,{children:"valor del elemento seleccionado"})," o ",(0,r.jsx)(s.strong,{children:"referencia del elemento seleccionado"}),". Esta opci\xf3n permite optimizar el tama\xf1o de los datos guardados."]}),"\n",(0,r.jsx)(s.h3,{id:"Uso-de-una-lista-de-selecci\xf3n-jer\xe1rquica",children:"Uso de una lista de selecci\xf3n jer\xe1rquica"}),"\n",(0,r.jsx)(s.p,{children:"Una lista desplegable jer\xe1rquica tiene una sublista asociada a cada elemento de la lista. Este es un ejemplo de lista desplegable jer\xe1rquica:"}),"\n",(0,r.jsx)(s.p,{children:(0,r.jsx)(s.img,{src:a(455160).A+"",width:"248",height:"177"})}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"En los formularios, las listas desplegables jer\xe1rquicas est\xe1n limitadas a dos niveles."}),"\n"]}),"\n",(0,r.jsxs)(s.p,{children:["Puede asignar la lista de selecci\xf3n jer\xe1rquica al objeto de lista desplegable utilizando el campo ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDataSource#choice-list",children:"Lista de selecci\xf3n"})," de la Lista de propiedades."]}),"\n",(0,r.jsxs)(s.p,{children:["Las listas jer\xe1rquicas desplegables se gestionan utilizando los comandos ",(0,r.jsx)(s.strong,{children:"Listas jer\xe1rquicas"})," del Lenguaje 4D. Todos los comandos que soportan la sintaxis ",(0,r.jsx)(s.code,{children:'(*; "name")'})," pueden utilizarse con listas desplegables jer\xe1rquicas, por ejemplo ",(0,r.jsx)(s.a,{href:"https://doc.4d.com/4dv19/help/command/en/page633.html",children:(0,r.jsx)(s.code,{children:"List item parent"})}),"."]}),"\n",(0,r.jsx)(s.h3,{id:"Utilizar-una-acci\xf3n-est\xe1ndar",children:"Utilizar una acci\xf3n est\xe1ndar"}),"\n",(0,r.jsxs)(s.p,{children:["Puede crear autom\xe1ticamente una lista desplegable utilizando una acci\xf3n est\xe1ndar ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesAction#standard-action"}),". Esta funcionalidad es soportada en los siguientes contextos:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Uso de la acci\xf3n est\xe1ndar ",(0,r.jsx)(s.code,{children:"gotoPage"}),". En este caso, 4D mostrar\xe1 autom\xe1ticamente la ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormEditor/forms#form-pages",children:"p\xe1gina del formulario"})," que corresponda al n\xfamero del elemento seleccionado. Por ejemplo, si el usuario selecciona el tercer elemento, 4D mostrar\xe1 la tercera p\xe1gina del formulario actual (si existe). En tiempo de ejecuci\xf3n, la lista desplegable muestra por defecto los n\xfameros de p\xe1gina (1, 2...)."]}),"\n"]}),"\n",(0,r.jsxs)(s.li,{children:["\n",(0,r.jsxs)(s.p,{children:["Uso de una acci\xf3n est\xe1ndar que muestra una sublista de elementos, por ejemplo ",(0,r.jsx)(s.code,{children:"backgroundColor"}),". Esta funcionalidad requiere que:"]}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:["un \xe1rea de texto con estilo (",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/writeProAreaOverview",children:"\xe1rea 4D Write Pro"})," o ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/inputOverview",children:"entrada"})," con la propiedad ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesText#multi-style",children:"multiestilo"}),") est\xe1 presente en el formulario como objetivo de la acci\xf3n est\xe1ndar."]}),"\n",(0,r.jsxs)(s.li,{children:["la propiedad ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesEntry#focusable",children:"focusable"})," no est\xe1 definida en la lista desplegable. En tiempo de ejecuci\xf3n, la lista desplegable mostrar\xe1 una lista autom\xe1tica de valores, por ejemplo, colores de fondo. Puede reemplazar esta lista autom\xe1tica asignando adem\xe1s una lista de selecci\xf3n en la que cada elemento tenga asignada una acci\xf3n est\xe1ndar personalizada."]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(s.blockquote,{children:["\n",(0,r.jsx)(s.p,{children:"Esta funcionalidad no puede utilizarse con una lista desplegable jer\xe1rquica."}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"Propiedades-soportadas",children:"Propiedades soportadas"}),"\n",(0,r.jsxs)(s.p,{children:[(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDisplay#alpha-format",children:"Formato alfa"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesText#bold",children:"Negrita"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesCoordinatesAndSizing#bottom",children:"Inferior"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesTextAndPicture#button-style",children:"Estilo de bot\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDataSource#choice-list",children:"Lista de opciones"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#css-class",children:"Clase"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDataSource#data-type-expression-type",children:"Tipo de datos (tipo de expresi\xf3n)"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDataSource#data-type-list",children:"Tipo de datos (lista)"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDisplay#date-format",children:"Formato de fecha"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#expression-type",children:"Tipo de expresi\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesEntry#focusable",children:"Enfocable"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesText#font",children:"Fuente"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesText#font-color",children:"Color de fuente"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesText#font-size",children:"Tama\xf1o de fuente"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesCoordinatesAndSizing#height",children:"Altura"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesHelp#help-tip",children:"Mensaje de ayuda"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesResizingOptions#horizontal-sizing",children:"Tama\xf1o horizontal"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesText#italic",children:"It\xe1lica"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesCoordinatesAndSizing#left",children:"Izquierda"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDisplay#not-rendered",children:"No renderizado"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#object-name",children:"Nombre del objeto"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesCoordinatesAndSizing#right",children:"Derecha"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesAction#standard-action",children:"Acci\xf3n est\xe1ndar"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#save-value",children:"Guardar valor"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDisplay#time-format",children:"Hora Formato"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesCoordinatesAndSizing#top",children:"Arriba"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#type",children:"Tipo"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesText#underline",children:"Subrayado"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesObject#variable-or-expression",children:"Variable o expresi\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesResizingOptions#vertical-sizing",children:"Tama\xf1o vertical"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20-R4/FormObjects/propertiesCoordinatesAndSizing#width",children:"Ancho"})]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},221020:(e,s,a)=>{var r=a(296540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function t(e,s,a){var r,o={},t=null,c=null;for(r in void 0!==a&&(t=""+a),void 0!==s.key&&(t=""+s.key),void 0!==s.ref&&(c=s.ref),s)i.call(s,r)&&!l.hasOwnProperty(r)&&(o[r]=s[r]);if(e&&e.defaultProps)for(r in s=e.defaultProps)void 0===o[r]&&(o[r]=s[r]);return{$$typeof:n,type:e,key:t,ref:c,props:o,_owner:d.current}}s.Fragment=o,s.jsx=t,s.jsxs=t},474848:(e,s,a)=>{e.exports=a(221020)},217268:(e,s,a)=>{a.d(s,{A:()=>r});const r="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOYAAAAhCAYAAADNh9e3AAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwgAADsIBFShKgAAAAiJJREFUeF7t2M2xgyAUhmF7spcsaIZCsrGBrFKBRaSAdGAHXA9qggiKeud6Zu67eGb4OUYWfIGx6rrOAdCFYAIKEUxAIYIJKPQJ5uPxAHChbDDf7zeACxBMQCGCCShEMAGFCCagEMEEFCKYgELlwWyMq6pqZFwTzi00zlS1s21q7g9Ma62ta1PzOa119ZXrBkZlwfQbNghj37fN2E46E8yzoZbnK2dW11fi4j8X/GtlwZQTaNfpc3UwfyNQBBPXKQum36SVq20bjI38aRpfcaNNnawRrbP1NC6n3PCeqV+ZZqz7asza/Pz5Yb3DWoyp+zF5d7S2WX9qz38ntQ6g1PP5TI6L3FxhMMU3RN9rYrTJ+5M1DMN8s8c1w+8twx7VZ+Xq4nHph+9JzU/9XBs45vV6udvt5u73+2JOxmROauK5HcEcjaefD+fsJAxPl2BT52r8eOoj0kYgZh+hUnXx83v6uTZwXCqca6EU+4PZa21/LSwNV67mSDBnz8iJm6qLn9/Tz7WBc8JwboVSlAWzscEGDa+gsnm3rqO5mgNX2fAjlA9pqi5+Pu4P7/1cx/0JHK411QbOm8K5FUpReGLKJo2uotOcD0g8F23qZM3yd6ewfD7whO/xhlD5udo4c+jE7IXXYdP/TiaM+XUAx0ggt0IpCoMJ4C8RTEAhggkoRDABhQgmoBDBBBQimIBCBBNQiGACCq0GE8B1ksEEoAfBBNTp3A89HOoPkDBgIQAAAABJRU5ErkJggg=="},954749:(e,s,a)=>{a.d(s,{A:()=>r});const r="data:image/png;base64,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"},720959:(e,s,a)=>{a.d(s,{A:()=>r});const r=a.p+"assets/images/popupDropdown_appearance-be4e6872edee7cab175cf9702b8731e4.png"},280096:(e,s,a)=>{a.d(s,{A:()=>r});const r=a.p+"assets/images/popupDropdown_choiceList-f3bc797fde9f06db0a718cbc323d678b.png"},455160:(e,s,a)=>{a.d(s,{A:()=>r});const r="data:image/png;base64,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"},28453:(e,s,a)=>{a.d(s,{R:()=>i,x:()=>d});var r=a(296540);const n={},o=r.createContext(n);function i(e){const s=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function d(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(o.Provider,{value:s},e.children)}}}]);