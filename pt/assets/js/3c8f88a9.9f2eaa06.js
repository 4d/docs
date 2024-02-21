"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[75036],{603905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(r),d=o,b=u["".concat(p,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},350896:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>c});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"propertiesPrint",title:"Print"},s=void 0,p={unversionedId:"FormObjects/propertiesPrint",id:"version-20-R4/FormObjects/propertiesPrint",title:"Print",description:"Impress\xe3o quadro",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R4/FormObjects/properties_Print.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPrint",permalink:"/docs/pt/FormObjects/propertiesPrint",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Print.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"propertiesPrint",title:"Print"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/pt/FormObjects/propertiesPlugIns"},next:{title:"Range of Values",permalink:"/docs/pt/FormObjects/propertiesRangeOfValues"}},l={},c=[{value:"Impress\xe3o quadro",id:"impress\xe3o-quadro",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4},{value:"Objectos suportados",id:"objectos-suportados",level:4}],m={toc:c};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"impress\xe3o-quadro"}),"Impress\xe3o quadro"),(0,n.kt)("p",null,"This property handles the print mode for objects whose size can vary from one record to another depending on their contents. Estes objetos podem ser definidos para imprimir com uma moldura fixa ou vari\xe1vel. Fixed frame objects print within the confines of the object as it was created on the form. Variable frame objects expand during printing to include the entire contents of the object. Note that the width of objects printed as a variable size is not affected by this property; only the height varies automatically based on the contents of the object."),(0,n.kt)("p",null,"You cannot place more than one variable frame object side-by-side on a form. You can place non-variable frame objects on either side of an object that will be printed with a variable size provided that the variable frame object is at least one line longer than the object beside it and that all objects are aligned on the top. If this condition is not respected, the contents of the other fields will be repeated for every horizontal slice of the variable frame object."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Print object")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Print form")," commands do not support this property.")),(0,n.kt)("p",null,"As op\xe7\xf5es de impress\xe3o s\xe3o:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Variable")," option / ",(0,n.kt)("strong",{parentName:"p"},"Print Variable Frame")," checked: 4D enlarges or reduces the form object area in order to print all the subrecords.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fixed (Truncation)")," option / ",(0,n.kt)("strong",{parentName:"p"},"Print Variable Frame")," unchecked: 4D only prints the contents that appear in the object area. O formul\xe1rio s\xf3 \xe9 impresso uma vez e os conte\xfados n\xe3o impressos s\xe3o ignorados.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fixed (Multiple Records)")," (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This property can be set by programming using the ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT SET PRINT VARIABLE FRAME")," command.")),(0,n.kt)("h4",o({},{id:"gram\xe1tica-json"}),"Gram\xe1tica JSON"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Nome"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Tipo de dados"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Valores poss\xedveis"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"printFrame"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'"fixed", "variable", (apenas subformul\xe1rio) "fixedMultiple"')))),(0,n.kt)("h4",o({},{id:"objectos-suportados"}),"Objectos suportados"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/inputOverview"}),"Input")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/subformOverview"}),"Subforms")," (list subforms only) - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/pt/FormObjects/writeProAreaOverview"}),"4D Write Pro areas")))}u.isMDXComponent=!0}}]);