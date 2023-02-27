"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6313],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>m});var o=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);a&&(o=o.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,o)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=o.createContext({}),c=function(e){var a=o.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=c(e.components);return o.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return o.createElement(o.Fragment,{},a)}},u=o.forwardRef((function(e,a){var t=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,b=u["".concat(i,".").concat(m)]||u[m]||d[m]||n;return t?o.createElement(b,s(s({ref:a},p),{},{components:t})):o.createElement(b,s({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var n=t.length,s=new Array(n);s[0]=u;var l={};for(var i in a)hasOwnProperty.call(a,i)&&(l[i]=a[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<n;c++)s[c]=t[c];return o.createElement.apply(null,s)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},86264:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>c,contentTitle:()=>l,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>p});t(67294);var o=t(3905);function r(){return r=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},r.apply(this,arguments)}function n(e,a){if(null==e)return{};var t,o,r=function(e,a){if(null==e)return{};var t,o,r={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}const s={id:"tabControl",title:"Pesta\xf1as"},l=void 0,i={unversionedId:"FormObjects/tabControl",id:"version-19/FormObjects/tabControl",title:"Pesta\xf1as",description:"Un control de pesta\xf1as crea un objeto que permite al usuario elegir entre un conjunto de pantallas virtuales que est\xe1n encerradas por el objeto de control de pesta\xf1as. Se accede a cada pantalla haciendo clic en su pesta\xf1a.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/FormObjects/tabControl.md",sourceDirName:"FormObjects",slug:"/FormObjects/tabControl",permalink:"/docs/es/19/FormObjects/tabControl",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2FtabControl.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"tabControl",title:"Pesta\xf1as"},sidebar:"docs",previous:{title:"Subformulario",permalink:"/docs/es/19/FormObjects/subformOverview"},next:{title:"Text",permalink:"/docs/es/19/FormObjects/text"}},c={},p=[{value:"Ejemplo JSON",id:"ejemplo-json",level:3},{value:"A\xf1adir etiquetas a un control de pesta\xf1as",id:"a\xf1adir-etiquetas-a-un-control-de-pesta\xf1as",level:2},{value:"Utilizar un objeto",id:"utilizar-un-objeto",level:3},{value:"Utilizar una lista de selecci\xf3n",id:"utilizar-una-lista-de-selecci\xf3n",level:3},{value:"Utilizar un array Text",id:"utilizar-un-array-text",level:3},{value:"Funcionalidades de Goto page",id:"funcionalidades-de-goto-page",level:2},{value:"Comando FORM GOTO PAGE",id:"comando-form-goto-page",level:3},{value:"Acci\xf3n Goto Page",id:"acci\xf3n-goto-page",level:3},{value:"Propiedades soportadas",id:"propiedades-soportadas",level:2}],d={toc:p};function u(e){var{components:a}=e,s=n(e,["components"]);return(0,o.kt)("wrapper",r({},d,s,{components:a,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Un control de pesta\xf1as crea un objeto que permite al usuario elegir entre un conjunto de pantallas virtuales que est\xe1n encerradas por el objeto de control de pesta\xf1as. Se accede a cada pantalla haciendo clic en su pesta\xf1a."),(0,o.kt)("p",null,"El siguiente formulario multip\xe1gina utiliza un objeto de control de pesta\xf1as:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(16726).Z,width:"600",height:"534"})),(0,o.kt)("p",null,"Para navegar de una pantalla a otra, el usuario s\xf3lo tiene que hacer clic en la pesta\xf1a deseada."),(0,o.kt)("p",null,"Las pantallas pueden representar p\xe1ginas en un formulario de varias p\xe1ginas o un objeto que cambia cuando el usuario hace clic en una pesta\xf1a. Si el control de pesta\xf1as se utiliza como una herramienta de navegaci\xf3n de la p\xe1gina, entonces el comando ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page247.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"FORM GOTO")," PAGE")," o la acci\xf3n est\xe1ndar ",(0,o.kt)("inlineCode",{parentName:"p"},"gotoPage")," se utilizar\xeda cuando un usuario hace clic en una pesta\xf1a."),(0,o.kt)("p",null,"Otro uso del control de pesta\xf1as es para controlar los datos que se muestran en un subformulario. Por ejemplo, se podr\xeda implementar un Rolodex utilizando un control de pesta\xf1as. Las pesta\xf1as mostrar\xedan las letras del alfabeto y la acci\xf3n del control de pesta\xf1as ser\xeda cargar los datos correspondientes a la letra que el usuario pulsara."),(0,o.kt)("p",null,"Cada pesta\xf1a puede mostrar etiquetas o r\xf3tulos y un peque\xf1o icono. Si incluye iconos, \xe9stos aparecen a la izquierda de cada etiqueta. Este es un ejemplo de un control de pesta\xf1as que utiliza iconos:"),(0,o.kt)("p",null,(0,o.kt)("img",{src:t(82515).Z,width:"599",height:"510"})),(0,o.kt)("p",null,"Cuando se crea un control de pesta\xf1as, 4D gestiona el espaciado y la colocaci\xf3n de las mismas. S\xf3lo tiene que suministrar las etiquetas en forma de array, o los iconos y etiquetas en forma de lista jer\xe1rquica."),(0,o.kt)("p",null,"Si el control de pesta\xf1as es lo suficientemente amplio como para mostrar todas las pesta\xf1as con las etiquetas y los iconos, muestra ambos. Si el control de pesta\xf1as no es lo suficientemente ancho para mostrar tanto las etiquetas como los iconos, 4D muestra s\xf3lo los iconos. Si no caben todos los iconos, coloca flechas de desplazamiento a la derecha de la \xfaltima pesta\xf1a visible. Las flechas de desplazamiento permiten al usuario desplazar los iconos hacia la izquierda o la derecha."),(0,o.kt)("p",null,"En macOS, adem\xe1s de la posici\xf3n est\xe1ndar (arriba), los controles de las pesta\xf1as tambi\xe9n pueden alinearse en la parte inferior."),(0,o.kt)("h3",r({},{id:"ejemplo-json"}),"Ejemplo JSON"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' "myTab": {\n  "type": "tab",\n   "left": 60, \n  "top": 160,  \n  "width": 100, \n  "height": 20, \n  "labelsPlacement": "bottom" //define la direcci\xf3n\n}\n')),(0,o.kt)("h2",r({},{id:"a\xf1adir-etiquetas-a-un-control-de-pesta\xf1as"}),"A\xf1adir etiquetas a un control de pesta\xf1as"),(0,o.kt)("p",null,"Para suministrar las etiquetas de un control de pesta\xf1as, puede utilizar:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"un objeto"),(0,o.kt)("li",{parentName:"ul"},"una lista de selecci\xf3n"),(0,o.kt)("li",{parentName:"ul"},"un array")),(0,o.kt)("h3",r({},{id:"utilizar-un-objeto"}),"Utilizar un objeto"),(0,o.kt)("p",null,"You can assign an ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/Concepts/object"}),"object")," encapsulating a ",(0,o.kt)("a",r({parentName:"p"},{href:"Concepts/dt_collection"}),"collection")," as the ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#variable-or-expression"}),"data source")," of the tab control. El objeto debe contener las siguientes propiedades:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Propiedad"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Tipo"),(0,o.kt)("th",r({parentName:"tr"},{align:null}),"Descripci\xf3n"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"values")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Collection"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Obligatorio - Colecci\xf3n de valores escalares. S\xf3lo se admiten valores de tipo cadena. Si es inv\xe1lido, vac\xedo o no definido, el control de pesta\xf1as est\xe1 vac\xedo")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"index")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"number"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"\xcdndice de la p\xe1gina de la etiqueta actual (valor entre 0 y ",(0,o.kt)("inlineCode",{parentName:"td"},"collection.length-1"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",r({parentName:"tr"},{align:null}),(0,o.kt)("inlineCode",{parentName:"td"},"currentValue")),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Text"),(0,o.kt)("td",r({parentName:"tr"},{align:null}),"Valor actual seleccionado")))),(0,o.kt)("p",null,"El c\xf3digo de inicializaci\xf3n debe ejecutarse antes de que el formulario se presente al usuario."),(0,o.kt)("p",null,"En el siguiente ejemplo, ",(0,o.kt)("inlineCode",{parentName:"p"},"Form.tabControl")," se ha definido como ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#variable-or-expression"}),"expresi\xf3n")," del control de pesta\xf1as. Puede asociar la ",(0,o.kt)("a",r({parentName:"p"},{href:"#goto-page-action"}),"acci\xf3n est\xe1ndar ",(0,o.kt)("inlineCode",{parentName:"a"},"gotoPage"))," al objeto formulario:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),'Form.tabControl:=New object\nForm.tabControl.values:=New collection("Page 1"; "Page 2"; "Page 3")\nForm.tabControl.index:=2 //inicio en la p\xe1gina 3\n')),(0,o.kt)("h3",r({},{id:"utilizar-una-lista-de-selecci\xf3n"}),"Utilizar una lista de selecci\xf3n"),(0,o.kt)("p",null,"Puede asignar una ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesDataSource#choice-list-static-list"}),"lista de opciones"),' al control de pesta\xf1as, ya sea a trav\xe9s de una colecci\xf3n (lista est\xe1tica) o un puntero JSON a una lista json ("$ref"). Los iconos asociados a los elementos de la lista en el editor de listas se mostrar\xe1n en el control de pesta\xf1as.'),(0,o.kt)("h3",r({},{id:"utilizar-un-array-text"}),"Utilizar un array Text"),(0,o.kt)("p",null,"Puede crear un array Texto que contenga los nombres de cada p\xe1gina del formulario. Este c\xf3digo debe ejecutarse antes de que el formulario se presente al usuario. Por ejemplo, podr\xedas colocar el c\xf3digo en el m\xe9todo del objeto del control de la pesta\xf1a y ejecutarlo cuando se produzca el evento ",(0,o.kt)("inlineCode",{parentName:"p"},"On Load"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' ARRAY TEXT(arrPages;3)\n arrPages{1}:="Name"\n arrPages{2}:="Address"\n arrPages{3}:="Notes"  \n')),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Tambi\xe9n puede almacenar los nombres de las p\xe1ginas en una lista jer\xe1rquica y utilizar el comando ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page288.html"}),"LIST TO ARRAY")," para cargar los valores en el array.")),(0,o.kt)("h2",r({},{id:"funcionalidades-de-goto-page"}),"Funcionalidades de Goto page"),(0,o.kt)("h3",r({},{id:"comando-form-goto-page"}),"Comando FORM GOTO PAGE"),(0,o.kt)("p",null,"Puede utilizar el comando ",(0,o.kt)("a",r({parentName:"p"},{href:"https://doc.4d.com/4dv19/help/command/en/page247.html"}),(0,o.kt)("inlineCode",{parentName:"a"},"FORM GOTO PAGE"))," en el m\xe9todo del control de pesta\xf1as:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),"FORM GOTO PAGE(arrPages)\n")),(0,o.kt)("p",null,"El comando se ejecuta cuando se produce el evento ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/Events/onClicked"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Clicked")),". A continuaci\xf3n, debe borrar el array cuando se produzca el evento ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/Events/onUnload"}),(0,o.kt)("inlineCode",{parentName:"a"},"On Unload")),"."),(0,o.kt)("p",null,"He aqu\xed un ejemplo de m\xe9todo objeto:"),(0,o.kt)("pre",null,(0,o.kt)("code",r({parentName:"pre"},{className:"language-4d"}),' Case of\n    :(Form event=On Load)\n       LIST TO ARRAY("Tab Labels";arrPages)\n    :(Form event=On Clicked)\n       FORM GOTO PAGE(arrPages)\n    :(Form event=On Unload)\n       CLEAR VARIABLE(arrPages)\n End case\n')),(0,o.kt)("h3",r({},{id:"acci\xf3n-goto-page"}),"Acci\xf3n Goto Page"),(0,o.kt)("p",null,"Cuando se asigna la acci\xf3n ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesAction#standard-action"}),"acci\xf3n est\xe1ndar")," ",(0,o.kt)("inlineCode",{parentName:"p"},"gotoPage")," a un control de pesta\xf1as, 4D mostrar\xe1 autom\xe1ticamente la p\xe1gina del formulario que corresponde al n\xfamero de la pesta\xf1a que est\xe1 seleccionada."),(0,o.kt)("p",null,"Por ejemplo, si el usuario selecciona la tercera pesta\xf1a, 4D mostrar\xe1 la p\xe1gina 3 del formulario actual (si existe)."),(0,o.kt)("h2",r({},{id:"propiedades-soportadas"}),"Propiedades soportadas"),(0,o.kt)("p",null,(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesText#bold"}),"Negrita")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#bottom"}),"Inferior")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesDataSource#choice-list-static-list"}),"Lista de opciones")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#css-class"}),"Clase")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#expression-type"}),"Tipo de expresi\xf3n")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesText#font"}),"Fuente")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesText#font-size"}),"Tama\xf1o de fuente")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#height"}),"Altura")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesHelp#help-tip"}),"Mensaje de ayuda")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesResizingOptions#horizontal-sizing"}),"Tama\xf1o horizontal")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesText#italic"}),"Italico")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#left"}),"Izquierda")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#object-name"}),"Nombre del objeto")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#right"}),"Derecha")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#save-value"}),"Guardar valor")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesAction#standard-action"}),"Acci\xf3n est\xe1ndar")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesAppearance#tab-control-direction"}),"Direcci\xf3n del control de la ficha")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#top"}),"Superior")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#type"}),"Tipo")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesText#underline"}),"Subrayado")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesResizingOptions#vertical-sizing"}),"Tama\xf1o vertical")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesObject#variable-or-expression"}),"Variable o expresi\xf3n")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesDisplay#visibility"}),"Visibilidad")," - ",(0,o.kt)("a",r({parentName:"p"},{href:"/docs/es/19/FormObjects/propertiesCoordinatesAndSizing#width"}),"Ancho")))}u.isMDXComponent=!0},16726:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/tabControl1-5bdf06c40dd275097aca2322fcb394a6.png"},82515:(e,a,t)=>{t.d(a,{Z:()=>o});const o=t.p+"assets/images/tabControl2-03bf9e8a12aab27741eae04211f19671.png"}}]);