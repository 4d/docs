"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51658],{603905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>u});var a=t(667294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function n(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=a.createContext({}),d=function(e){var r=a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},l=function(e){var r=d(e.components);return a.createElement(p.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,s=e.originalType,p=e.parentName,l=n(e,["components","mdxType","originalType","parentName"]),m=d(t),u=o,b=m["".concat(p,".").concat(u)]||m[u]||c[u]||s;return t?a.createElement(b,i(i({ref:r},l),{},{components:t})):a.createElement(b,i({ref:r},l))}));function u(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var s=t.length,i=new Array(s);i[0]=m;var n={};for(var p in r)hasOwnProperty.call(r,p)&&(n[p]=r[p]);n.originalType=e,n.mdxType="string"==typeof e?e:o,i[1]=n;for(var d=2;d<s;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},546269:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>d,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>l});t(667294);var a=t(603905);function o(){return o=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}const i={id:"progressIndicator",title:"Indicador de progreso"},n=void 0,p={unversionedId:"FormObjects/progressIndicator",id:"version-18/FormObjects/progressIndicator",title:"Indicador de progreso",description:"Generalidades",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-18/FormObjects/progressIndicator.md",sourceDirName:"FormObjects",slug:"/FormObjects/progressIndicator",permalink:"/docs/es/18/FormObjects/progressIndicator",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FprogressIndicator.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"progressIndicator",title:"Indicador de progreso"},sidebar:"docs",previous:{title:"\xc1rea de plug-in",permalink:"/docs/es/18/FormObjects/pluginAreaOverview"},next:{title:"Bot\xf3n radio",permalink:"/docs/es/18/FormObjects/radiobuttonOverview"}},d={},l=[{value:"Generalidades",id:"generalidades",level:2},{value:"Utilizar los indicadores",id:"utilizar-los-indicadores",level:3},{value:"El term\xf3metro por defecto",id:"el-term\xf3metro-por-defecto",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:3},{value:"Barber shop",id:"barber-shop",level:2},{value:"Propiedades soportadas",id:"propiedades-soportadas-1",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:2}],c={toc:l};function m(e){var{components:r}=e,i=s(e,["components"]);return(0,a.kt)("wrapper",o({},c,i,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h2",o({},{id:"generalidades"}),"Generalidades"),(0,a.kt)("p",null,'Un indicador de progreso (tambi\xe9n llamado "term\xf3metro") est\xe1 dise\xf1ado para mostrar o definir gr\xe1ficamente los valores num\xe9ricos o fecha/hora.'),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(352940).Z,width:"288",height:"45"})),(0,a.kt)("h3",o({},{id:"utilizar-los-indicadores"}),"Utilizar los indicadores"),(0,a.kt)("p",null,"Los indicadores se pueden utilizar tanto para visualizar como para definir valores. Por ejemplo, si a un indicador de progreso se le da un valor por un m\xe9todo, muestra el valor. Si el usuario arrastra el punto indicador, el valor cambia. El valor puede utilizarse en otro objeto, como un campo o un objeto introducible o no introducible."),(0,a.kt)("p",null,"La variable asociada al indicador controla la visualizaci\xf3n. Puede introducir y utilizar lo valores del indicador utilizando m\xe9todos. Por ejemplo, un m\xe9todo para un campo o un objeto introducible podr\xeda utilizarse para controlar un indicador de progreso:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"})," $vTherm:=[Employees]Salary\n")),(0,a.kt)("p",null,"Este m\xe9todo asigna el valor del campo Salary a la variable $vTherm. Este m\xe9todo se adjuntar\xe1 al campo Salario."),(0,a.kt)("p",null,"Por el contrario, puede utilizar el indicador para controlar el valor de un campo. El usuario arrastra el indicador para definir el valor. En este caso el m\xe9todo se convierte en:"),(0,a.kt)("pre",null,(0,a.kt)("code",o({parentName:"pre"},{className:"language-4d"})," [Employees]Salary:=$vTherm\n")),(0,a.kt)("p",null,"El m\xe9todo asigna el valor del indicador al campo Salario. A medida que el usuario arrastra el indicador, el valor del campo Salario cambia."),(0,a.kt)("h2",o({},{id:"el-term\xf3metro-por-defecto"}),"El term\xf3metro por defecto"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(755422).Z,width:"53",height:"176"})),(0,a.kt)("p",null,"El term\xf3metro es el indicador b\xe1sico de progreso."),(0,a.kt)("p",null,"Puede mostrar barras de term\xf3metros horizontales o verticales. Esto viene determinado por la forma del objeto que se dibuja."),(0,a.kt)("p",null,"Dispone de m\xfaltiples opciones gr\xe1ficas: valores m\xednimos/m\xe1ximos, graduaciones, pasos."),(0,a.kt)("h3",o({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale#barber-shop"}),"Barber shop")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesText#bold"}),"Negrita")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesBackgroundAndBorder#border-line-style"}),"Estilo de l\xednea de borde")," -","[","Abajo","]","(properties_CoordinatesAndSizing. md#bottom) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale#display-graduation"}),"Graduaci\xf3n de la pantalla")," - ","[","Enterable","]","(properties_Entry. md#enterable) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesAction#execute-object-method"}),"Ejecutar m\xe9todo objeto")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#expression-type"}),"Tipo de expresi\xf3n"),' (s\xf3lo "entero", "n\xfamero", "fecha" o "hora") - ',"[","Altura","]","(properties_CoordinatesAndSizing. md#height) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale#graduation-step"}),"Paso de graduaci\xf3n")," -",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesHelp#help-tip"}),"Consejo de ayuda")," - ","[","Tama\xf1o horizontal","]","(properties_ResizingOptions. md#horizontal-sizing) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale#label-location"}),"Lugar de la etiqueta")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ","[","M\xe1ximo","]","(properties_Scale. md#maximum) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale#minimum"}),"M\xednimo")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDisplay#number-format"}),"Formato num\xe9rico")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#object-name"}),"Nombre del objeto")," - ","[","Derecha","]","(properties_CoordinatesAndSizing. md#right) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale#step"}),"Paso")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#top"}),"Arriba")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#type"}),"Tipo")," - ","[","Variable o expresi\xf3n","]","(properties_Object. md#variable-or-expression) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Tama\xf1o vertical")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")),(0,a.kt)("h2",o({},{id:"barber-shop"}),"Barber shop"),(0,a.kt)("p",null,(0,a.kt)("img",{src:t(21728).Z,width:"280",height:"40"})),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Barber shop")," es una variante del term\xf3metro por defecto. Para activar esta variante, es necesario definir la propiedad ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale#barber-shop"}),"Barber shop"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},'En JSON, basta con eliminar la propiedad "max" del objeto term\xf3metro por defecto para activar la variante Barber shop.')),(0,a.kt)("p",null,"La Barber shop muestra una animaci\xf3n continua, como la ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/spinner"}),"spinner"),". Estos term\xf3metros se utilizan generalmente para indicar al usuario que el programa est\xe1 en proceso de realizar una operaci\xf3n larga. Cuando se selecciona esta variante term\xf3metro, ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale"}),"las propiedades de la escala gr\xe1fica")," no est\xe1n disponibles."),(0,a.kt)("p",null,"Cuando se ejecuta el formulario, el objeto no se anima. La animaci\xf3n se gestiona pasando un valor a su ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression"}),"variable o expresi\xf3n asociada"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"1 = Iniciar animaci\xf3n,"),(0,a.kt)("li",{parentName:"ul"},"0 = Detener la animaci\xf3n.")),(0,a.kt)("h3",o({},{id:"propiedades-soportadas-1"}),"Propiedades soportadas"),(0,a.kt)("p",null,(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesScale#barber-shop"}),"Barber shop")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesText#bold"}),"Negrita")," - ","[","Estilo de la l\xednea de borde","]","(properties_BackgroundAndBorder. md#border-line-style) -",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Abajo")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#css-class"}),"Clase")," - ","[","Enterable","]","(properties_Entry. md#enterable) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesAction#execute-object-method"}),"Ejecutar m\xe9todo objeto")," - ","[","Tipo de expresi\xf3n","]",'(properties_Object. md#expression-type) (s\xf3lo "entero", "n\xfamero", "fecha" o "hora") - ',(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," - ","[","Consejo de ayuda","]","(properties_Help. md#help-tip) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Tama\xf1o horizontal")," - ","[","Izquierda","]","(properties_CoordinatesAndSizing. md#left) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#object-name"}),"Nombre del objeto")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#right"}),"Derecha")," - ","[","Arriba","]","(properties_CoordinatesAndSizing. md#top) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#type"}),"Tipo")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesObject#variable-or-expression"}),"Variable o Expresi\xf3n")," - ","[","Tama\xf1o vertical","]","(properties_ResizingOptions. md#vertical-sizing) - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,a.kt)("a",o({parentName:"p"},{href:"/docs/es/18/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")),(0,a.kt)("h2",o({},{id:"ver-tambi\xe9n"}),"Ver tambi\xe9n"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/docs/es/18/FormObjects/ruler"}),"reglas"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",o({parentName:"li"},{href:"/docs/es/18/FormObjects/stepper"}),"steppers"))))}m.isMDXComponent=!0},21728:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/indicator-4aede0e01bdd9a603abe016a5ec90d03.gif"},755422:(e,r,t)=>{t.d(r,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADUAAACwCAIAAAAg+bFMAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAMCSURBVHhe7drBjdswEIVhn7aTtLD1qBsX48sWkBpcxp5dQoacIUVqJNvyk0YK8H4ICE0D8geJOZDYy+Pc0YcV5bsNl8twsw/6MfV9vS/O5AJ89+u32IZh9IlFxzJQj5+xwt5vFXRDsSeOnykd4OsEedrP2Hji+wuna0izm1ob+X6x5A52r2n/j68dmszPlI7wCcHGMpkxfqZ0hE+ST7lxys/kwnwfRh8WfVj0YdGHRR8WfVj0YdGHRR8WfVj0YYX4yt62O8SYzCwU4BOLMtrB/GmBb39fc6Birspzpy2+gOdXDebqTI11to19uqo0u6mUjn9SKjnS9877PZdvRtOYum/n2v/5iaZ5fmkoKAM23y20v29cfs3hnsD6iaUifEj0YdGHRR8WfVj0YdGHRR8WfVj0YdGHRR9WkK/sd5udevd5sQifOyWQiROdH9yGiaHyznL+kv54cnydMydGy23sU4ZmNxVBeYn6Oo/0LTy/Isjjs/vamROsv8RRg2AyrPzbfLVYgE9BufZB9hNLhfiA6MOiD4s+LPqw6MOiD4s+LPqw6MOiD4s+rDhf2gTXzXjZ/77YnQf6ssg4Mj7V+UF+eMO1nLVUXp5/DgzxJd34d2udqbHOtrFPV5VmN3WuI33++Y2ac/rsP2pNaKdbf1q1yMCAIn3OO8QnCSz39N2mAn0fRR8WfVj0YdGHRR/W1Pf18we56HM/ueqiz/3kqos+95OrLvrcT6666HM/ueqiz/3kqmvWVza7zV68TL3YnUf47terbcLraYEMPj0/mPze2mv2+ZXKAULl9WcKs0X6zNWZGutsG/t0VWl201J9l0f6Fp6fkMaFdjafW2ONyX03bX+ff0LpaepUfeeL7e5LmCbjCCz39N2mYtbf59GHRR8WfVj0YdGHRR8WfVj0YdGHRR8WfVghvrLbfbEXnyvAVw8QXp8W+Pb3Vd4bpy2+3X2dqbG+2cY+XWea3nNjH57dq7Slb5c2XH+7JCgDinQtL8AnCSy38t2mQnxA9GGd2/d4/AMvdxxgkVtTAQAAAABJRU5ErkJggg=="},352940:(e,r,t)=>{t.d(r,{Z:()=>a});const a="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASAAAAAtCAIAAACBCCG9AAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAASdEVYdFNvZnR3YXJlAEdyZWVuc2hvdF5VCAUAAAF2SURBVHhe7dXBbQIxEEDRnNJJWqAeuqEYLikgNVBGzpQQhwxkycbY4Mwlfk9zACR7pdF+8XQE0ggMEgkMEgkMEgkMEvUFtt8+nWx2h/gFJvH58m/38eW3Fm7W0RNYueDrAeWDxJjHYbcpcW3P73+xbqFRR0dglxtOD1QYk1kEsG6hVUc7sKtji+tgDt8v/bqFZh0Cg9sEBomSA1seu7oOprAIYN1Cq46OwMq5uKNcpi9mc93QjxZadXQEVpSzJ+fnwDwWgRXrFm7W0RcY8BCBQaI7Ait/gvEJ5tbfgsDgbgKDRAKDRH8f2BuwEGG03BHY8+vLP5h3GCaw6sSGYIDAqhMbggECq05sCAYIrDqxIRggsOrEhmCAwKoTG4IBAqtObAgGCKw6sSEYILDqxIZggMCqExuCAQKrTmwIBgisOrEhGCCw6sSGYIDAqhMbggECq05sCAakBAZcRBgtvYEBDxAYJBIYJBIYJBIYJBIYJBIYpDkePwAePMhF3WLIcQAAAABJRU5ErkJggg=="}}]);