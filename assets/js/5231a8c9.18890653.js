"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5730],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>d});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,b=u["".concat(l,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(b,i(i({ref:t},c),{},{components:r})):n.createElement(b,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},2206:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>p,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>c});r(67294);var n=r(3905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const i={id:"propertiesPrint",title:"Print"},p=void 0,l={unversionedId:"FormObjects/propertiesPrint",id:"version-20/FormObjects/propertiesPrint",title:"Print",description:"Print frame",source:"@site/versioned_docs/version-20/FormObjects/properties_Print.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesPrint",permalink:"/docs/FormObjects/propertiesPrint",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Print.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"propertiesPrint",title:"Print"},sidebar:"docs",previous:{title:"Plug-ins",permalink:"/docs/FormObjects/propertiesPlugIns"},next:{title:"Range of Values",permalink:"/docs/FormObjects/propertiesRangeOfValues"}},s={},c=[{value:"Print frame",id:"print-frame",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4}],m={toc:c};function u(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},m,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"print-frame"}),"Print frame"),(0,n.kt)("p",null,"This property handles the print mode for objects whose size can vary from one record to another depending on their contents. These objects can be set to print with either a fixed or variable frame. Fixed frame objects print within the confines of the object as it was created on the form. Variable frame objects expand during printing to include the entire contents of the object. Note that the width of objects printed as a variable size is not affected by this property; only the height varies automatically based on the contents of the object."),(0,n.kt)("p",null,"You cannot place more than one variable frame object side-by-side on a form. You can place non-variable frame objects on either side of an object that will be printed with a variable size provided that the variable frame object is at least one line longer than the object beside it and that all objects are aligned on the top. If this condition is not respected, the contents of the other fields will be repeated for every horizontal slice of the variable frame object."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"Print object")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"Print form")," commands do not support this property.")),(0,n.kt)("p",null,"The print options are:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Variable")," option / ",(0,n.kt)("strong",{parentName:"p"},"Print Variable Frame")," checked: 4D enlarges or reduces the form object area in order to print all the subrecords.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fixed (Truncation)")," option / ",(0,n.kt)("strong",{parentName:"p"},"Print Variable Frame")," unchecked: 4D only prints the contents that appear in the object area. The form is only printed once and the contents not printed are ignored.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Fixed (Multiple Records)")," (subforms only): the initial size of the subform area is kept but 4D prints the form several times in order to print all the records."))),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This property can be set by programming using the ",(0,n.kt)("inlineCode",{parentName:"p"},"OBJECT SET PRINT VARIABLE FRAME")," command.")),(0,n.kt)("h4",o({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Data Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"printFrame"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"string"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),'"fixed", "variable", (subform only) "fixedMultiple"')))),(0,n.kt)("h4",o({},{id:"objects-supported"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/inputOverview"}),"Input")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/subformOverview"}),"Subforms")," (list subforms only) - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/FormObjects/writeProAreaOverview"}),"4D Write Pro areas")))}u.isMDXComponent=!0}}]);