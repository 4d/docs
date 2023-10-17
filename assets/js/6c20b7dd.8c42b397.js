"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17830],{603905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,g=d["".concat(c,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},157069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>p});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"onPageChange",title:"On Page Change"},l=void 0,c={unversionedId:"Events/onPageChange",id:"version-20-R2/Events/onPageChange",title:"On Page Change",description:"|Code|Can be called by|Definition|",source:"@site/versioned_docs/version-20-R2/Events/onPageChange.md",sourceDirName:"Events",slug:"/Events/onPageChange",permalink:"/docs/20-R2/Events/onPageChange",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPageChange.md%20(20-R2)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R2",frontMatter:{id:"onPageChange",title:"On Page Change"},sidebar:"docs",previous:{title:"On Outside Call",permalink:"/docs/20-R2/Events/onOutsideCall"},next:{title:"On Plug in Area",permalink:"/docs/20-R2/Events/onPlugInArea"}},s={},p=[{value:"Description",id:"description",level:2}],u={toc:p};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Can be called by"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Definition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"56"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Form"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The current page of the form is changed")))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is only available at the form level (it is called in the form method). It is generated each time the current page of the form changes (following a call to the ",(0,r.kt)("inlineCode",{parentName:"p"},"FORM GOTO PAGE")," command or a standard navigation action)."),(0,r.kt)("p",null,"Note that it is generated after the page is fully loaded, i.e. once all the objects it contains are initialized, including ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/20-R2/FormObjects/webAreaOverview"}),"Web areas"),"."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The only exception is 4D View Pro areas, for which you need to call the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/20-R2/Events/onVpReady"}),"On VP Ready")," specific event. ")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Page Change")," event is useful for executing code that requires all objects to be initialized beforehand. You can also use it to optimize the application by executing code (for example, a search) only after a specific page of the form is displayed and not just as soon as page 1 is loaded. If the user does not go to this page, the code is not executed."))}d.isMDXComponent=!0}}]);