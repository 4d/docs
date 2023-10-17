"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51238],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(667294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=o,f=m["".concat(s,".").concat(d)]||m[d]||p[d]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},928160:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>u});n(667294);var r=n(603905);function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},o.apply(this,arguments)}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}const i={id:"overview",title:"About class functions"},l=void 0,s={unversionedId:"API/overview",id:"version-20-R2/API/overview",title:"About class functions",description:"This section describes the built-in 4D class functions as well as the associated constructor commands. 4D class functions and properties are available through class instance objects.",source:"@site/versioned_docs/version-20-R2/API/overview.md",sourceDirName:"API",slug:"/API/overview",permalink:"/docs/20-R2/API/overview",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2Foverview.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"overview",title:"About class functions"},sidebar:"docs",previous:{title:"Class Functions",permalink:"/docs/20-R2/category/class-API-reference"},next:{title:"Blob",permalink:"/docs/20-R2/API/BlobClass"}},c={},u=[{value:"Writing conventions",id:"writing-conventions",level:2}],p={toc:u};function m(e){var{components:t}=e,n=a(e,["components"]);return(0,r.kt)("wrapper",o({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This section describes the built-in 4D class functions as well as the associated constructor commands. 4D class functions and properties are available through class instance objects. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"functions must be called on instances with the ",(0,r.kt)("inlineCode",{parentName:"li"},"()")," operator. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"collection.sort()"),"."),(0,r.kt)("li",{parentName:"ul"},"properties are accessed without parentheses, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"file.creationTime"),". You can also use the ","[","] syntax, for example ",(0,r.kt)("inlineCode",{parentName:"li"},'file["creationTime"]'),"."),(0,r.kt)("li",{parentName:"ul"},"commands can be called independantly, with or without parameters. For example ",(0,r.kt)("inlineCode",{parentName:"li"},"Folder(fk database folder)"),".")),(0,r.kt)("h2",o({},{id:"writing-conventions"}),"Writing conventions"),(0,r.kt)("p",null,"The following conventions are used in the function syntax: "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"{ }")," characters (braces) indicate optional parameters. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},".delete( { option : Integer } )")," means that the ",(0,r.kt)("em",{parentName:"li"},"option")," parameter may be omitted when calling the function."),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"{ ; ...param }")," notation indicates an unlimited number of parameters. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},".concat( value : any { ;...valueN } ) : Collection")," means that an unlimited number of values of any type can be passed to the function. "),(0,r.kt)("li",{parentName:"ul"},"the ",(0,r.kt)("inlineCode",{parentName:"li"},"any")," keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...).")))}m.isMDXComponent=!0}}]);