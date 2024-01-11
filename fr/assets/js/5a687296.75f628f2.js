"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45640],{603905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(667294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(n),m=i,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},452376:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});n(667294);var r=n(603905);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}const a={id:"distinct",title:"$distinct"},l=void 0,s={unversionedId:"REST/distinct",id:"version-18/REST/distinct",title:"$distinct",description:'Retourne les diff\xe9rentes valeurs d\'un attribut sp\xe9cifique dans une collection (par exemple, Company/name?$filter="name=a*"&$distinct=true)',source:"@site/i18n/fr/docusaurus-plugin-content-docs/version-18/REST/$distinct.md",sourceDirName:"REST",slug:"/REST/distinct",permalink:"/docs/fr/18/REST/distinct",draft:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20REST%2F%24distinct.md%20(18)&body=Please%20enter%20your%20comment%3A",tags:[],version:"18",frontMatter:{id:"distinct",title:"$distinct"},sidebar:"docs",previous:{title:"$compute",permalink:"/docs/fr/18/REST/compute"},next:{title:"$entityset",permalink:"/docs/fr/18/REST/entityset"}},u={},c=[{value:"Description",id:"description",level:2},{value:"Exemple",id:"exemple",level:2}],p={toc:c};function d(e){var{components:t}=e,n=o(e,["components"]);return(0,r.kt)("wrapper",i({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Retourne les diff\xe9rentes valeurs d'un attribut sp\xe9cifique dans une collection (par exemple, ",(0,r.kt)("inlineCode",{parentName:"p"},'Company/name?$filter="name=a*"&$distinct=true'),")"),(0,r.kt)("h2",i({},{id:"description"}),"Description"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"$distinct")," vous permet de retourner une collection contenant les diff\xe9rentes valeurs d'une requ\xeate sur un attribut sp\xe9cifique. Un seul attribut dans la dataclass peut \xeatre sp\xe9cifi\xe9. G\xe9n\xe9ralement, le type Cha\xeene est id\xe9al; cependant, vous pouvez \xe9galement l'utiliser sur n'importe quel type d'attribut pouvant contenir plusieurs valeurs."),(0,r.kt)("p",null,"Vous pouvez \xe9galement utiliser ",(0,r.kt)("inlineCode",{parentName:"p"},"$skip")," et ",(0,r.kt)("inlineCode",{parentName:"p"},"$top/$limit")," si vous souhaitez parcourir la s\xe9lection avant qu'elle ne soit plac\xe9e dans un tableau."),(0,r.kt)("h2",i({},{id:"exemple"}),"Exemple"),(0,r.kt)("p",null,"Dans l'exemple ci-dessous, nous souhaitons r\xe9cup\xe9rer les diff\xe9rentes valeurs d'un nom de soci\xe9t\xe9 commen\xe7ant par la lettre \"a\" :"),(0,r.kt)("p",null," ",(0,r.kt)("inlineCode",{parentName:"p"},'GET  /rest/Company/name?$filter="name=a*"&$distinct=true')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"R\xe9ponse")," :"),(0,r.kt)("pre",null,(0,r.kt)("code",i({parentName:"pre"},{}),'[\n    "Adobe",\n    "Apple"\n]\n')))}d.isMDXComponent=!0}}]);