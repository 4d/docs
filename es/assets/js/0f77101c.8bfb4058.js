/*! For license information please see 0f77101c.8bfb4058.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63800],{859768:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>a,toc:()=>l});var o=s(474848),t=s(28453);const r={id:"overview",title:"Acerca de las funciones clase"},i=void 0,a={id:"API/overview",title:"Acerca de las funciones clase",description:"En este apartado se describen las funciones integradas en la clase 4D, as\xed como los comandos constructores asociados. Las funciones y propiedades de clase 4D est\xe1n disponibles a trav\xe9s de los objetos de instancia de clase.",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/API/overview.md",sourceDirName:"API",slug:"/API/overview",permalink:"/docs/es/20-R5/API/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20API%2Foverview.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"overview",title:"Acerca de las funciones clase"},sidebar:"docs",previous:{title:"Classes",permalink:"/docs/es/20-R5/category/class-API-reference"},next:{title:"Blob",permalink:"/docs/es/20-R5/API/BlobClass"}},c={},l=[{value:"Convenciones de escritura",id:"convenciones-de-escritura",level:2}];function d(e){const n={code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.p,{children:"En este apartado se describen las funciones integradas en la clase 4D, as\xed como los comandos constructores asociados. Las funciones y propiedades de clase 4D est\xe1n disponibles a trav\xe9s de los objetos de instancia de clase."}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["las funciones deben llamarse en las instancias con el operador ",(0,o.jsx)(n.code,{children:"()"}),". Por ejemplo, ",(0,o.jsx)(n.code,{children:"collection.sort()"}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["properties are accessed without parentheses, for example ",(0,o.jsx)(n.code,{children:"file.creationTime"}),". Tambi\xe9n puede utilizar la sintaxis [], por ejemplo ",(0,o.jsx)(n.code,{children:'file["creationTime"]'}),"."]}),"\n",(0,o.jsxs)(n.li,{children:["pueden ejecutarse de forma independiente, con o sin par\xe1metros. Por ejemplo ",(0,o.jsx)(n.code,{children:"Folder(fk database folder)"}),"."]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"convenciones-de-escritura",children:"Convenciones de escritura"}),"\n",(0,o.jsx)(n.p,{children:"En la sintaxis de la funci\xf3n se utilizan las siguientes convenciones:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["los caracteres{ }",(0,o.jsx)(n.code,{children:"(llaves) indican par\xe1metros opcionales. For example,"}),".delete( { option : Integer } )` means that the ",(0,o.jsx)(n.em,{children:"option"})," parameter may be omitted when calling the function."]}),"\n",(0,o.jsxs)(n.li,{children:["la notaci\xf3n ",(0,o.jsx)(n.code,{children:"{ ; ...param }"})," indica un n\xfamero ilimitado de par\xe1metros. For example, ",(0,o.jsx)(n.code,{children:".concat( value : any { ;...valueN } ) : Collection"})," means that an unlimited number of values of any type can be passed to the function."]}),"\n",(0,o.jsxs)(n.li,{children:["the ",(0,o.jsx)(n.code,{children:"any"})," keyword is used for parameters that can be of any type that can be stored within attributes (number, text, boolean, date, time, object, collection...)."]}),"\n"]})]})}function u(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,n,s)=>{var o=s(296540),t=Symbol.for("react.element"),r=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,n,s){var o,r={},l=null,d=null;for(o in void 0!==s&&(l=""+s),void 0!==n.key&&(l=""+n.key),void 0!==n.ref&&(d=n.ref),n)i.call(n,o)&&!c.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:t,type:e,key:l,ref:d,props:r,_owner:a.current}}n.Fragment=r,n.jsx=l,n.jsxs=l},474848:(e,n,s)=>{e.exports=s(221020)},28453:(e,n,s)=>{s.d(n,{R:()=>i,x:()=>a});var o=s(296540);const t={},r=o.createContext(t);function i(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);