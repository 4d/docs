"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[27658],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>c});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,m=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),c=n,k=u["".concat(m,".").concat(c)]||u[c]||d[c]||o;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function c(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var m in t)hasOwnProperty.call(t,m)&&(i[m]=t[m]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},24584:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>m,toc:()=>p});a(67294);var r=a(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},n.apply(this,arguments)}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}const l={id:"formSize",title:"Tama\xf1o formulario"},i=void 0,m={unversionedId:"FormEditor/formSize",id:"version-20-R3/FormEditor/formSize",title:"Tama\xf1o formulario",description:"4D permite definir el tama\xf1o tanto del formulario como de la ventana. Estas propiedades son interdependientes y su interfaz de aplicaci\xf3n es el resultado de su interacci\xf3n.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R3/FormEditor/properties_FormSize.md",sourceDirName:"FormEditor",slug:"/FormEditor/formSize",permalink:"/docs/es/FormEditor/formSize",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_FormSize.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"formSize",title:"Tama\xf1o formulario"},sidebar:"docs",previous:{title:"Propiedades de los formularios",permalink:"/docs/es/FormEditor/propertiesForm"},next:{title:"Marcadores",permalink:"/docs/es/FormEditor/markers"}},s={},p=[{value:"Tama\xf1o basado en",id:"tama\xf1o-basado-en",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Altura",id:"altura",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-1",level:4},{value:"Margen hor.",id:"margen-hor",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-2",level:4},{value:"Margen hor.",id:"margen-hor-1",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-3",level:4},{value:"Ancho",id:"ancho",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json-4",level:4}],d={toc:p};function u(e){var{components:t}=e,a=o(e,["components"]);return(0,r.kt)("wrapper",n({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"4D permite definir el tama\xf1o tanto del formulario como de la ",(0,r.kt)("a",n({parentName:"p"},{href:"/docs/es/FormEditor/windowSize"}),"ventana"),". Estas propiedades son interdependientes y su interfaz de aplicaci\xf3n es el resultado de su interacci\xf3n."),(0,r.kt)("p",null,"Las opciones de tama\xf1o dependen del valor de la opci\xf3n ",(0,r.kt)("strong",{parentName:"p"},"Tama\xf1o basado en"),"."),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"tama\xf1o-basado-en"}),"Tama\xf1o basado en"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Tama\xf1o autom\xe1tico"),": el tama\xf1o del formulario ser\xe1 el necesario para mostrar todos los objetos, al que se a\xf1adir\xe1n los valores de margen (en p\xedxeles) introducidos en los campos ",(0,r.kt)("a",n({parentName:"p"},{href:"#hor-margin"}),(0,r.kt)("strong",{parentName:"a"},"Hor Margin"))," y ",(0,r.kt)("a",n({parentName:"p"},{href:"#vert-margin"}),(0,r.kt)("strong",{parentName:"a"},"Vert Margin")),"."),(0,r.kt)("p",{parentName:"li"},"Puede elegir esta opci\xf3n cuando desee utilizar objetos activos situados en un \xe1rea fuera de la pantalla (",(0,r.kt)("em",{parentName:"p"},"es decir"),", fuera del rect\xe1ngulo delimitador de la ventana) con una ventana de tama\xf1o autom\xe1tico. Gracias a esta opci\xf3n, la presencia de estos objetos no modificar\xe1 el tama\xf1o de la ventana."))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Definir tama\xf1o"),": el tama\xf1o del formulario se basar\xe1 en lo que introduzca (en p\xedxeles) en los campos ",(0,r.kt)("a",n({parentName:"p"},{href:"#width"}),(0,r.kt)("strong",{parentName:"a"},"Ancho"))," y ",(0,r.kt)("a",n({parentName:"p"},{href:"#height"}),(0,r.kt)("strong",{parentName:"a"},"Alto")),".")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("inlineCode",{parentName:"p"},"<object name>"),": el tama\xf1o del formulario se basar\xe1 en la posici\xf3n del objeto formulario seleccionado. Por ejemplo, si elige un objeto situado en la parte inferior derecha del \xe1rea a mostrar, el tama\xf1o del formulario consistir\xe1 en un rect\xe1ngulo cuya esquina superior izquierda ser\xe1 el origen del formulario y la esquina inferior derecha corresponder\xe1 a la del objeto seleccionado, m\xe1s los valores de los m\xe1rgenes."))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Para los formularios de salida, s\xf3lo est\xe1n disponibles los campos ",(0,r.kt)("a",n({parentName:"p"},{href:"#hor-margin"}),(0,r.kt)("strong",{parentName:"a"},"Hor margin"))," o ",(0,r.kt)("a",n({parentName:"p"},{href:"#width"}),(0,r.kt)("strong",{parentName:"a"},"Width")),".")),(0,r.kt)("h4",n({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nombre"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipos de datos"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valores posibles"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"formSizeAnchor"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"string"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"Nombre del objeto a utilizar para definir el tama\xf1o del formulario")))),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"altura"}),"Altura"),(0,r.kt)("p",null,"Altura del formulario (en p\xedxeles) cuando el ",(0,r.kt)("a",n({parentName:"p"},{href:"#size-based-on"}),"tama\xf1o del formulario")," es definido en ",(0,r.kt)("strong",{parentName:"p"},"Definir tama\xf1o"),"."),(0,r.kt)("h4",n({},{id:"gram\xe1tica-json-1"}),"Gram\xe1tica JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nombre"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipos de datos"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valores posibles"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"height"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"valor entero largo")))),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"margen-hor"}),"Margen hor."),(0,r.kt)("p",null,"Valor a a\xf1adir (en p\xedxeles) al margen inferior del formulario cuando el ",(0,r.kt)("a",n({parentName:"p"},{href:"#size-based-on"}),"tama\xf1o del formulario")," est\xe1 definido en ",(0,r.kt)("strong",{parentName:"p"},"Tama\xf1o autom\xe1tico")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"\\&#060;object name&#062;")),(0,r.kt)("p",null,"Este valor tambi\xe9n determina los m\xe1rgenes derechos de los formularios utilizados en el editor de etiquetas."),(0,r.kt)("h4",n({},{id:"gram\xe1tica-json-2"}),"Gram\xe1tica JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nombre"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipos de datos"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valores posibles"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"rightMargin"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"valor entero largo")))),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"margen-hor-1"}),"Margen hor."),(0,r.kt)("p",null,"Valor a a\xf1adir (en p\xedxeles) al margen inferior del formulario cuando el ",(0,r.kt)("a",n({parentName:"p"},{href:"#size-based-on"}),"tama\xf1o del formulario")," est\xe1 definido en ",(0,r.kt)("strong",{parentName:"p"},"Tama\xf1o autom\xe1tico")," o ",(0,r.kt)("inlineCode",{parentName:"p"},"\\&#060;object name&#062;"),"."),(0,r.kt)("p",null,"Este valor tambi\xe9n determina los m\xe1rgenes superiores de los formularios utilizados en el editor de etiquetas."),(0,r.kt)("h4",n({},{id:"gram\xe1tica-json-3"}),"Gram\xe1tica JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nombre"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipos de datos"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valores posibles"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"bottomMargin"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"valor entero largo")))),(0,r.kt)("hr",null),(0,r.kt)("h2",n({},{id:"ancho"}),"Ancho"),(0,r.kt)("p",null,"Ancho del formulario (en p\xedxeles) cuando el ",(0,r.kt)("a",n({parentName:"p"},{href:"#size-based-on"}),"tama\xf1o del formulario")," est\xe1 definido en ",(0,r.kt)("strong",{parentName:"p"},"Definir tama\xf1o"),"."),(0,r.kt)("h4",n({},{id:"gram\xe1tica-json-4"}),"Gram\xe1tica JSON"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Nombre"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Tipos de datos"),(0,r.kt)("th",n({parentName:"tr"},{align:null}),"Valores posibles"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",n({parentName:"tr"},{align:null}),"ancho"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"number"),(0,r.kt)("td",n({parentName:"tr"},{align:null}),"valor entero largo")))))}u.isMDXComponent=!0}}]);