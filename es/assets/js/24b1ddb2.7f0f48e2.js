"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7255],{3905:(e,r,t)=>{t.d(r,{Zo:()=>m,kt:()=>d});var o=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=o.createContext({}),p=function(e){var r=o.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},m=function(e){var r=p(e.components);return o.createElement(l.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},u=o.forwardRef((function(e,r){var t=e.components,a=e.mdxType,n=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(t),d=a,b=u["".concat(l,".").concat(d)]||u[d]||c[d]||n;return t?o.createElement(b,i(i({ref:r},m),{},{components:t})):o.createElement(b,i({ref:r},m))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var n=t.length,i=new Array(n);i[0]=u;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<n;p++)i[p]=t[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},87467:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>p,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>m});t(67294);var o=t(3905);function a(){return a=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},a.apply(this,arguments)}function n(e,r){if(null==e)return{};var t,o,a=function(e,r){if(null==e)return{};var t,o,a={},n=Object.keys(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(o=0;o<n.length;o++)t=n[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}const i={id:"propertiesPrint",title:"Imprimir"},s=void 0,l={unversionedId:"FormObjects/propertiesPrint",id:"version-20-R3/FormObjects/propertiesPrint",title:"Imprimir",description:"Impresi\xf3n marco",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R3/FormObjects/properties_Print.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPrint",permalink:"/docs/es/FormObjects/propertiesPrint",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Print.md%20(20-R3)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R3",frontMatter:{id:"propertiesPrint",title:"Imprimir"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/es/FormObjects/propertiesPlugIns"},next:{title:"Rango de valores",permalink:"/docs/es/FormObjects/propertiesRangeOfValues"}},p={},m=[{value:"Impresi\xf3n marco",id:"impresi\xf3n-marco",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objetos soportados",id:"objetos-soportados",level:4}],c={toc:m};function u(e){var{components:r}=e,t=n(e,["components"]);return(0,o.kt)("wrapper",a({},c,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h2",a({},{id:"impresi\xf3n-marco"}),"Impresi\xf3n marco"),(0,o.kt)("p",null,"Esta propiedad gestiona el modo de impresi\xf3n de los objetos cuyo tama\xf1o puede variar de un registro a otro en funci\xf3n de su contenido. Estos objetos pueden configurarse para imprimirse con un marco fijo o variable. Los objetos de marco fijo se imprimen dentro de los l\xedmites del objeto tal y como fue creado en el formulario. Los objetos de marco variable se expanden durante la impresi\xf3n para incluir todo el contenido del objeto. Tenga en cuenta que el ancho de los objetos impresos como tama\xf1o variable no se ve afectado por esta propiedad; s\xf3lo la altura var\xeda autom\xe1ticamente en funci\xf3n del contenido del objeto."),(0,o.kt)("p",null,"No se puede colocar m\xe1s de un objeto de marco variable uno al lado del otro en un formulario. Puede colocar objetos de marco no variable a ambos lados de un objeto que se imprimir\xe1 con un tama\xf1o variable siempre que el objeto de marco variable sea al menos una l\xednea m\xe1s largo que el objeto de al lado y que todos los objetos est\xe9n alineados en la parte superior. Si no se respeta esta condici\xf3n, el contenido de los otros campos se repetir\xe1 para cada corte horizontal del objeto marco variable."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Los comandos ",(0,o.kt)("inlineCode",{parentName:"p"},"objeto Print")," y ",(0,o.kt)("inlineCode",{parentName:"p"},"Print form")," no soportan esta propiedad.")),(0,o.kt)("p",null,"Las opciones de impresi\xf3n son:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"La opci\xf3n ",(0,o.kt)("strong",{parentName:"p"},"Variable")," / ",(0,o.kt)("strong",{parentName:"p"},"Imprimir marco variable")," marcada: 4D ampl\xeda o reduce el \xe1rea del objeto del formulario para imprimir todos los subregistros.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Opci\xf3n fija (truncamiento)")," / ",(0,o.kt)("strong",{parentName:"p"},"Imprimir marco variable")," no seleccionada: 4D s\xf3lo imprime el contenido que aparece en el \xe1rea del objeto. El formulario s\xf3lo se imprime una vez y el contenido no impreso se ignora.")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Fijo (M\xfaltiples Registros)")," (s\xf3lo subformularios): se mantiene el tama\xf1o inicial del \xe1rea del subformulario pero 4D imprime el formulario varias veces para imprimir todos los registros."))),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Esta propiedad puede definirse por programaci\xf3n utilizando el comando ",(0,o.kt)("inlineCode",{parentName:"p"},"OBJECT SET PRINT VARIABLE FRAME"),".")),(0,o.kt)("h4",a({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",a({parentName:"tr"},{align:"center"}),"Nombre"),(0,o.kt)("th",a({parentName:"tr"},{align:"center"}),"Tipos de datos"),(0,o.kt)("th",a({parentName:"tr"},{align:null}),"Valores posibles"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",a({parentName:"tr"},{align:"center"}),"printFrame"),(0,o.kt)("td",a({parentName:"tr"},{align:"center"}),"string"),(0,o.kt)("td",a({parentName:"tr"},{align:null}),'"fixed", "variable", (subformulario \xfanicamente) "fixedMultiple"')))),(0,o.kt)("h4",a({},{id:"objetos-soportados"}),"Objetos soportados"),(0,o.kt)("p",null,(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/inputOverview"}),"Entrada")," - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/subformOverview"}),"Subformularios")," (s\xf3lo subformularios lista) - ",(0,o.kt)("a",a({parentName:"p"},{href:"/docs/es/FormObjects/writeProAreaOverview"}),"\xc1reas 4D Write Pro")))}u.isMDXComponent=!0}}]);