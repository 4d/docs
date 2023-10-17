"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89518],{603905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(667294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(r),d=o,b=m["".concat(l,".").concat(d)]||m[d]||s[d]||a;return r?n.createElement(b,p(p({ref:t},u),{},{components:r})):n.createElement(b,p({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,p[1]=i;for(var c=2;c<a;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},119926:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>p,metadata:()=>l,toc:()=>u});r(667294);var n=r(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}const p={id:"propertiesCrop",title:"Crop"},i=void 0,l={unversionedId:"FormObjects/propertiesCrop",id:"version-20/FormObjects/propertiesCrop",title:"Crop",description:"Columns",source:"@site/versioned_docs/version-20/FormObjects/properties_Crop.md",sourceDirName:"FormObjects",slug:"/FormObjects/propertiesCrop",permalink:"/docs/20/FormObjects/propertiesCrop",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormObjects%2Fproperties_Crop.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"propertiesCrop",title:"Crop"},sidebar:"docs",previous:{title:"Coordinates & Sizing",permalink:"/docs/20/FormObjects/propertiesCoordinatesAndSizing"},next:{title:"Data Source",permalink:"/docs/20/FormObjects/propertiesDataSource"}},c={},u=[{value:"Columns",id:"columns",level:2},{value:"JSON Grammar",id:"json-grammar",level:4},{value:"Objects Supported",id:"objects-supported",level:4},{value:"Rows",id:"rows",level:2},{value:"JSON Grammar",id:"json-grammar-1",level:4},{value:"Objects Supported",id:"objects-supported-1",level:4}],s={toc:u};function m(e){var{components:t}=e,r=a(e,["components"]);return(0,n.kt)("wrapper",o({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",o({},{id:"columns"}),"Columns"),(0,n.kt)("p",null,"Sets the number of columns in a thumbnail table."),(0,n.kt)("h4",o({},{id:"json-grammar"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Data Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"columnCount"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"integer"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"minimum: 1")))),(0,n.kt)("h4",o({},{id:"objects-supported"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20/FormObjects/pictureButtonOverview"}),"Picture Button")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20/FormObjects/buttonGridOverview"}),"Button Grid")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20/FormObjects/picturePopupMenuOverview"}),"Picture Pop-up Menu")),(0,n.kt)("hr",null),(0,n.kt)("h2",o({},{id:"rows"}),"Rows"),(0,n.kt)("p",null,"Sets the number of rows in a thumbnail table."),(0,n.kt)("h4",o({},{id:"json-grammar-1"}),"JSON Grammar"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:"left"}),"Name"),(0,n.kt)("th",o({parentName:"tr"},{align:"center"}),"Data Type"),(0,n.kt)("th",o({parentName:"tr"},{align:null}),"Possible Values"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:"left"}),"rowCount"),(0,n.kt)("td",o({parentName:"tr"},{align:"center"}),"integer"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"minimum: 1")))),(0,n.kt)("h4",o({},{id:"objects-supported-1"}),"Objects Supported"),(0,n.kt)("p",null,(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20/FormObjects/pictureButtonOverview"}),"Picture Button")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20/FormObjects/buttonGridOverview"}),"Button Grid")," - ",(0,n.kt)("a",o({parentName:"p"},{href:"/docs/20/FormObjects/picturePopupMenuOverview"}),"Picture Pop-up Menu")))}m.isMDXComponent=!0}}]);