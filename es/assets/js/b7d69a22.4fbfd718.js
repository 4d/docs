"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[58665],{3905:(e,t,o)=>{o.d(t,{Zo:()=>l,kt:()=>u});var r=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function s(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):s(s({},t),e)),o},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var o=e.components,a=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(o),u=a,b=m["".concat(c,".").concat(u)]||m[u]||d[u]||n;return o?r.createElement(b,s(s({ref:t},l),{},{components:o})):r.createElement(b,s({ref:t},l))}));function u(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=o.length,s=new Array(n);s[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<n;p++)s[p]=o[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,o)}m.displayName="MDXCreateElement"},77907:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>c,toc:()=>l});o(67294);var r=o(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(e[r]=o[r])}return e},a.apply(this,arguments)}function n(e,t){if(null==e)return{};var o,r,a=function(e,t){if(null==e)return{};var o,r,a={},n=Object.keys(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)o=n[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}const s={id:"comboBoxOverview",title:"Combo Box"},i=void 0,c={unversionedId:"FormObjects/comboBoxOverview",id:"version-18/FormObjects/comboBoxOverview",title:"Combo Box",description:"Generalidades",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/FormObjects/comboBox_overview.md",sourceDirName:"FormObjects",slug:"/FormObjects/comboBoxOverview",permalink:"/docs/es/18/FormObjects/comboBoxOverview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FcomboBox_overview.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"comboBoxOverview",title:"Combo Box"},sidebar:"docs",previous:{title:"Casilla a seleccionar",permalink:"/docs/es/18/FormObjects/checkboxOverview"},next:{title:"Lista desplegable",permalink:"/docs/es/18/FormObjects/dropdownListOverview"}},p={},l=[{value:"Generalidades",id:"generalidades",level:2},{value:"Opciones de los combo box",id:"opciones-de-los-combo-box",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}],d={toc:l};function m(e){var{components:t}=e,s=n(e,["components"]);return(0,r.kt)("wrapper",a({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",a({},{id:"generalidades"}),"Generalidades"),(0,r.kt)("p",null,"Un combo box es similar a una ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/dropdownListOverview#overview"}),"lista desplegable"),", excepto que acepta texto introducido desde el teclado y tiene opciones adicionales."),(0,r.kt)("p",null,(0,r.kt)("img",{src:o(41314).Z,width:"173",height:"106"})),(0,r.kt)("p",null,"Un combo box se inicializa exactamente igual que una lista desplegable. Si el usuario introduce un texto en el combo box, llena el elemento 0 del array. En otros aspectos, debe considerar un combo box como un \xe1rea editable que utiliza su array o una lista de selecci\xf3n como el conjunto de valores por defecto."),(0,r.kt)("p",null,"Utilice el evento ",(0,r.kt)("inlineCode",{parentName:"p"},"On Data Change")," para gestionar las entradas en el \xe1rea editable, como lo har\xeda con cualquier objeto de \xe1rea editable. Para m\xe1s informaci\xf3n, consulte la descripci\xf3n del comando ",(0,r.kt)("a",a({parentName:"p"},{href:"https://doc.4d.com/4Dv17R5/4D/17-R5/Form-event.301-4127796.en.html"}),"Form event")," en el manual ",(0,r.kt)("em",{parentName:"p"},"Lenguaje de 4D"),"."),(0,r.kt)("h2",a({},{id:"opciones-de-los-combo-box"}),"Opciones de los combo box"),(0,r.kt)("p",null,"Los objetos de tipo Combo box aceptan dos opciones espec\xedficas relativas a las listas de selecci\xf3n asociadas a ellos:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/18/FormObjects/propertiesDataSource#automatic-insertion"}),"Inserci\xf3n autom\xe1tica"),": permite a\xf1adir autom\xe1ticamente un valor a una lista almacenada en memoria cuando el usuario introduce un valor que no se encuentra en la lista de selecci\xf3n asociada al combo box."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",a({parentName:"li"},{href:"/docs/es/18/FormObjects/propertiesRangeOfValues#excluded-list"}),"Exclusi\xf3n")," (lista de valores excluidos): permite establecer una lista cuyos valores no pueden introducirse en el combo box. Si se introduce un valor excluido, no se acepta y se muestra un mensaje de error.",(0,r.kt)("blockquote",{parentName:"li"},(0,r.kt)("blockquote",{parentName:"blockquote"},(0,r.kt)("p",{parentName:"blockquote"},"Associating a ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesRangeOfValues#required-list"}),"list of required values")," is not available for combo boxes. En una interfaz, si un objeto debe proponer una lista finita de valores requeridos, entonces debe utilizar un objeto ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/dropdownListOverview#overview"}),"Tipo men\xfa desplegable"),"."))))),(0,r.kt)("h2",a({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDisplay#alpha-format"}),"Formato Alfa")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesText#bold"}),"Negrita")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Inferior")," - ","[","Estilo del bot\xf3n","]","(properties_TextAndPicture. md#button-style) - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDataSource#choice-list"}),"Lista de opciones")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDisplay#date-format"}),"Formato de fecha")," - ","[","Focusable","]","(properties_Entry. md#focusable) - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesText#font"}),"Fuente")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesText#font-color"}),"Color de la fuente")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesText#font-size"}),"Tama\xf1o de la fuente")," - ","[","Altura","]","(properties_CoordinatesAndSizing. md#height) - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesHelp#help-tip"}),"Consejo de ayuda")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Tama\xf1o horizontal")," - ","[","It\xe1lica","]","(properties_Text. md#italic) - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDisplay#not-rendered"}),"No renderizado")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#object-name"}),"Nombre del objeto")," - ","[","Derecha","]","(properties_CoordinatesAndSizing. md#right) - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesAction#standard-action"}),"Acci\xf3n est\xe1ndar")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDisplay#time-format"}),"Formato de hora")," - ","[","Top","]","(properties_CoordinatesAndSizing. md#top) - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#type"}),"Tipo")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesText#underline"}),"Subrayado")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable o Expresi\xf3n")," - ","[","Tama\xf1o vertical","]","(properties_ResizingOptions. md#vertical-sizing) - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")))}m.isMDXComponent=!0},41314:(e,t,o)=>{o.d(t,{Z:()=>r});const r="data:image/png;base64,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"}}]);