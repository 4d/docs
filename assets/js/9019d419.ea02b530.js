"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43968],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>f});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var u=r.createContext({}),d=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=d(e.components);return r.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=d(t),f=l,m=c["".concat(u,".").concat(f)]||c[f]||p[f]||a;return t?r.createElement(m,o(o({ref:n},s),{},{components:t})):r.createElement(m,o({ref:n},s))}));function f(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=c;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:l,o[1]=i;for(var d=2;d<a;d++)o[d]=t[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},25949:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>u,toc:()=>s});t(67294);var r=t(3905);function l(){return l=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l.apply(this,arguments)}function a(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}const o={id:"null-undefined",title:"Null and Undefined"},i=void 0,u={unversionedId:"Concepts/null-undefined",id:"version-19-R8/Concepts/null-undefined",title:"Null and Undefined",description:"Null and Undefined are data types that handle cases where the value of an expression is not known.",source:"@site/versioned_docs/version-19-R8/Concepts/dt_null_undefined.md",sourceDirName:"Concepts",slug:"/Concepts/null-undefined",permalink:"/docs/19-R8/Concepts/null-undefined",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Concepts%2Fdt_null_undefined.md%20(19-R8)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19-R8",frontMatter:{id:"null-undefined",title:"Null and Undefined"},sidebar:"docs",previous:{title:"Date",permalink:"/docs/19-R8/Concepts/date"},next:{title:"Number (Real, Longint, Integer)",permalink:"/docs/19-R8/Concepts/number"}},d={},s=[{value:"Null",id:"null",level:2},{value:"Undefined",id:"undefined",level:2},{value:"Examples",id:"examples",level:2}],p={toc:s};function c(e){var{components:n}=e,t=a(e,["components"]);return(0,r.kt)("wrapper",l({},p,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Null and Undefined are data types that handle cases where the value of an expression is not known.  "),(0,r.kt)("h2",l({},{id:"null"}),"Null"),(0,r.kt)("p",null,"Null is a special data type with only one possible value: ",(0,r.kt)("strong",{parentName:"p"},"null"),". This value is returned by an expression that does not contain any value."),(0,r.kt)("p",null,"In the 4D language and for object field attributes, null values are managed through the ",(0,r.kt)("inlineCode",{parentName:"p"},"Null")," function. This function can be used with the following expressions for setting or comparing the null value:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"object attributes"),(0,r.kt)("li",{parentName:"ul"},"collection elements"),(0,r.kt)("li",{parentName:"ul"},"variables of the object, collection, pointer, picture, or variant type.")),(0,r.kt)("h2",l({},{id:"undefined"}),"Undefined"),(0,r.kt)("p",null,"Undefined is not actually a data type. It denotes a variable that has not yet been defined. A function (a project method that returns a result) can return an undefined value if, within the method, the function result ($0) is assigned an undefined expression (an expression calculated with at least one undefined variable). A field cannot be undefined (the ",(0,r.kt)("inlineCode",{parentName:"p"},"Undefined")," command always returns False for a field). A variant variable has ",(0,r.kt)("strong",{parentName:"p"},"undefined")," as default value."),(0,r.kt)("h2",l({},{id:"examples"}),"Examples"),(0,r.kt)("p",null,"Here are the different results of the ",(0,r.kt)("inlineCode",{parentName:"p"},"Undefined")," command as well as the ",(0,r.kt)("inlineCode",{parentName:"p"},"Null")," command with object properties, depending on the context:"),(0,r.kt)("pre",null,(0,r.kt)("code",l({parentName:"pre"},{className:"language-4d"}),'C_OBJECT($vEmp)\n$vEmp:=New object\n$vEmp.name:="Smith"\n$vEmp.children:=Null\n \n$undefined:=Undefined($vEmp.name) // False\n$null:=($vEmp.name=Null) //False\n \n$undefined:=Undefined($vEmp.children) // False\n$null:=($vEmp.children=Null) //True\n \n$undefined:=Undefined($vEmp.parent) // True\n$null:=($vEmp.parent=Null) //True\n')))}c.isMDXComponent=!0}}]);