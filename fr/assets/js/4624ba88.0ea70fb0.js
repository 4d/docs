"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44615],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=p(n),m=a,v=f["".concat(c,".").concat(m)]||f[m]||s[m]||o;return n?r.createElement(v,i(i({ref:t},u),{},{components:n})):r.createElement(v,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},15584:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>i,metadata:()=>c,toc:()=>u});n(67294);var r=n(3905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"onDeactivate",title:"On Deactivate"},l=void 0,c={unversionedId:"Events/onDeactivate",id:"version-20/Events/onDeactivate",title:"On Deactivate",description:"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                              |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20/Events/onDeactivate.md",sourceDirName:"Events",slug:"/Events/onDeactivate",permalink:"/docs/fr/Events/onDeactivate",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDeactivate.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onDeactivate",title:"On Deactivate"},sidebar:"docs",previous:{title:"On Data Change",permalink:"/docs/fr/Events/onDataChange"},next:{title:"On Delete Action",permalink:"/docs/fr/Events/onDeleteAction"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Voir \xe9galement",id:"voir-\xe9galement",level:3}],s={toc:u};function f(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Peut \xeatre appel\xe9 par"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"D\xe9finition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"12"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Formulaire"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"La fen\xeatre du formulaire cesse d'\xeatre la fen\xeatre active")))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"Si la fen\xeatre d'un formulaire \xe9tait la fen\xeatre de premier plan, cet \xe9v\xe9nement est appel\xe9 lorsque la fen\xeatre est envoy\xe9e en arri\xe8re-plan."),(0,r.kt)("p",null,"Cet \xe9v\xe9nement s'applique au formulaire dans son ensemble et non \xe0 un objet particulier. Par cons\xe9quent, si la propri\xe9t\xe9 de l'\xe9v\xe9nement formulaire ",(0,r.kt)("inlineCode",{parentName:"p"},"On Deactivate")," est s\xe9lectionn\xe9e, seul le formulaire verra sa m\xe9thode formulaire appel\xe9e."),(0,r.kt)("h3",a({},{id:"voir-\xe9galement"}),"Voir \xe9galement"),(0,r.kt)("p",null,(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/Events/onActivate"}),"Sur activation")))}f.isMDXComponent=!0}}]);