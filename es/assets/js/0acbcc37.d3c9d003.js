/*! For license information please see 0acbcc37.d3c9d003.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43161],{685557:(e,o,t)=>{t.r(o),t.d(o,{assets:()=>a,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>d,toc:()=>c});var n=t(474848),r=t(28453);const s={id:"action",title:"Acci\xf3n"},i=void 0,d={id:"FormEditor/action",title:"Acci\xf3n",description:"M\xe9todo",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/FormEditor/properties_Action.md",sourceDirName:"FormEditor",slug:"/FormEditor/action",permalink:"/docs/es/FormEditor/action",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20FormEditor%2Fproperties_Action.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"action",title:"Acci\xf3n"},sidebar:"docs",previous:{title:"Lista de propiedades JSON del formulario",permalink:"/docs/es/FormEditor/jsonReference"},next:{title:"Propiedades de los formularios",permalink:"/docs/es/FormEditor/propertiesForm"}},a={},c=[{value:"M\xe9todo",id:"m\xe9todo",level:2},{value:"Gram\xe1tica JSON",id:"gram\xe1tica-json",level:4}];function l(e){const o={a:"a",br:"br",code:"code",em:"em",h2:"h2",h4:"h4",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(o.h2,{id:"m\xe9todo",children:"M\xe9todo"}),"\n",(0,n.jsxs)(o.p,{children:["Referencia de un m\xe9todo adjunto al formulario. Puede utilizar un m\xe9todo formulario para gestionar datos y objetos, pero generalmente es m\xe1s sencillo y eficiente utilizar un m\xe9todo objeto para estos fines. Ver ",(0,n.jsx)(o.a,{href:"/docs/es/Concepts/methods#specialized-methods",children:"M\xe9todos especializados"}),"."]}),"\n",(0,n.jsx)(o.p,{children:"No llame a un m\xe9todo formulario - 4D lo llama autom\xe1ticamente cuando un evento implica el formulario al que el m\xe9todo est\xe1 asociado."}),"\n",(0,n.jsx)(o.p,{children:"Se soportan varios tipos de referencias de m\xe9todos:"}),"\n",(0,n.jsxs)(o.ul,{children:["\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["a standard project method file path, i.e. that uses the following pattern:",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.code,{children:"method.4dm"}),(0,n.jsx)(o.br,{}),'\nThis type of reference indicates that the method file is located at the default location ("sources/{TableForms/',(0,n.jsx)(o.em,{children:"numTable"}),"} | {Forms}/",(0,n.jsx)(o.em,{children:"formName"}),'/"). En este caso, 4D maneja autom\xe1ticamente el m\xe9todo formulario cuando se ejecutan operaciones en el formulario (renombrar, duplicar, copiar/pegar...)']}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["a project method name: name of an existing project method without file extension, i.e.: ",(0,n.jsx)(o.code,{children:"myMethod"})," In this case, 4D does not provide automatic support for form operations."]}),"\n"]}),"\n",(0,n.jsxs)(o.li,{children:["\n",(0,n.jsxs)(o.p,{children:["a custom method file path including the .4dm extension, e.g.:",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.code,{children:"MyMethods/myFormMethod.4dm"}),"\nYou can also use a filesystem:",(0,n.jsx)(o.br,{}),"\n",(0,n.jsx)(o.code,{children:"/RESOURCES/Forms/FormMethod.4dm"}),"\nIn this case, 4D does not provide automatic support for object operations."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(o.h4,{id:"gram\xe1tica-json",children:"Gram\xe1tica JSON"}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Nombre"}),(0,n.jsx)(o.th,{children:"Tipos de datos"}),(0,n.jsx)(o.th,{children:"Valores posibles"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"method"}),(0,n.jsx)(o.td,{children:"text"}),(0,n.jsx)(o.td,{children:"Ruta est\xe1ndar o personalizada del m\xe9todo formulario, o nombre del m\xe9todo proyecto"})]})})]})]})}function m(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},221020:(e,o,t)=>{var n=t(296540),r=Symbol.for("react.element"),s=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,o,t){var n,s={},c=null,l=null;for(n in void 0!==t&&(c=""+t),void 0!==o.key&&(c=""+o.key),void 0!==o.ref&&(l=o.ref),o)i.call(o,n)&&!a.hasOwnProperty(n)&&(s[n]=o[n]);if(e&&e.defaultProps)for(n in o=e.defaultProps)void 0===s[n]&&(s[n]=o[n]);return{$$typeof:r,type:e,key:c,ref:l,props:s,_owner:d.current}}o.Fragment=s,o.jsx=c,o.jsxs=c},474848:(e,o,t)=>{e.exports=t(221020)},28453:(e,o,t)=>{t.d(o,{R:()=>i,x:()=>d});var n=t(296540);const r={},s=n.createContext(r);function i(e){const o=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function d(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:o},e.children)}}}]);