"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82179],{603905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(667294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,m=d["".concat(p,".").concat(f)]||d[f]||s[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},219301:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>u});n(667294);var r=n(603905);function a(){return a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},a.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}const i={id:"onOutsideCall",title:"Sur appel ext\xe9rieur"},l=void 0,p={unversionedId:"Events/onOutsideCall",id:"version-20-R5/Events/onOutsideCall",title:"Sur appel ext\xe9rieur",description:"| Code | Peut \xeatre appel\xe9 par | D\xe9finition                                   |",source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-20-R5/Events/onOutsideCall.md",sourceDirName:"Events",slug:"/Events/onOutsideCall",permalink:"/docs/fr/Events/onOutsideCall",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonOutsideCall.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onOutsideCall",title:"Sur appel ext\xe9rieur"},sidebar:"docs",previous:{title:"On Open External Link",permalink:"/docs/fr/Events/onOpenExternalLink"},next:{title:"Sur changement page",permalink:"/docs/fr/Events/onPageChange"}},c={},u=[{value:"Description",id:"description",level:2}],s={toc:u};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",a({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Code"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"Peut \xeatre appel\xe9 par"),(0,r.kt)("th",a({parentName:"tr"},{align:null}),"D\xe9finition"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",a({parentName:"tr"},{align:null}),"10"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"Formulaire"),(0,r.kt)("td",a({parentName:"tr"},{align:null}),"The form received a ",(0,r.kt)("inlineCode",{parentName:"td"},"POST OUTSIDE CALL")," call")))),(0,r.kt)("h2",a({},{id:"description"}),"Description"),(0,r.kt)("p",null,"This event is called when the form is called from another process through the ",(0,r.kt)("inlineCode",{parentName:"p"},"POST OUTSIDE CALL")," command."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"On Outside Call")," event modifies the entry context of the receiving input form. In particular, if a field was being edited, the ",(0,r.kt)("a",a({parentName:"p"},{href:"/docs/fr/Events/onDataChange"}),(0,r.kt)("inlineCode",{parentName:"a"},"On Data Change"))," event is generated.")))}d.isMDXComponent=!0}}]);