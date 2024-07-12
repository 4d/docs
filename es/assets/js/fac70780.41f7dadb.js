/*! For license information please see fac70780.41f7dadb.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74697],{423846:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var o=n(474848),t=n(28453);const s={id:"onDataChange",title:"On Data Change"},a=void 0,i={id:"Events/onDataChange",title:"On Data Change",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                | Definici\xf3n                               |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Events/onDataChange.md",sourceDirName:"Events",slug:"/Events/onDataChange",permalink:"/docs/es/Events/onDataChange",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDataChange.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onDataChange",title:"On Data Change"},sidebar:"docs",previous:{title:"On Column Resize",permalink:"/docs/es/Events/onColumnResize"},next:{title:"On Deactivate",permalink:"/docs/es/Events/onDeactivate"}},d={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Puede ser llamado por"}),(0,o.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"20"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/listboxOverview",children:"Lista"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-columns",children:"Columna de list box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/ruler",children:"Regla"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/spinner",children:"Selector"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/stepper",children:"Pasos"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/subformOverview",children:"Subformulario"})]}),(0,o.jsx)(r.td,{children:"Se han modificado los datos de un objeto"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["Cuando se selecciona la propiedad de evento ",(0,o.jsx)(r.code,{children:"On Data Change"})," para un objeto, se puede detectar y manejar el cambio del valor de la fuente de datos, utilizando el comando ",(0,o.jsx)(r.code,{children:"FORM Event"}),"."]}),"\n",(0,o.jsx)(r.p,{children:"El evento se genera en cuanto la variable asociada al objeto es actualizada internamente por 4D (es decir, en general, cuando la zona de entrada del objeto pierde el foco)."}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Con los ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/subformOverview",children:"subformularios"}),", el evento ",(0,o.jsx)(r.code,{children:"On Data Change"})," se dispara cuando el valor de la variable del objeto subformulario ha sido modificado."]}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,t.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,n)=>{var o=n(296540),t=Symbol.for("react.element"),s=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,n){var o,s={},c=null,l=null;for(o in void 0!==n&&(c=""+n),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)a.call(r,o)&&!d.hasOwnProperty(o)&&(s[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===s[o]&&(s[o]=r[o]);return{$$typeof:t,type:e,key:c,ref:l,props:s,_owner:i.current}}r.Fragment=s,r.jsx=c,r.jsxs=c},474848:(e,r,n)=>{e.exports=n(221020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>i});var o=n(296540);const t={},s=o.createContext(t);function a(e){const r=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);