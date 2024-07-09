/*! For license information please see 7651647e.50919e61.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[54032],{831919:(e,r,o)=>{o.r(r),o.d(r,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>c});var s=o(474848),n=o(28453);const t={id:"onUnload",title:"On Unload"},i=void 0,d={id:"Events/onUnload",title:"On Unload",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Definici\xf3n                                      |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/Events/onUnload.md",sourceDirName:"Events",slug:"/Events/onUnload",permalink:"/docs/es/20-R4/Events/onUnload",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonUnload.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"onUnload",title:"On Unload"},sidebar:"docs",previous:{title:"On Timer",permalink:"/docs/es/20-R4/Events/onTimer"},next:{title:"On URL Filtering",permalink:"/docs/es/20-R4/Events/onUrlFiltering"}},a={},c=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Subformulario",id:"Subformulario",level:3},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:3}];function l(e){const r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Code"}),(0,s.jsx)(r.th,{children:"Puede ser llamado por"}),(0,s.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"24"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,s.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/inputOverview",children:"Entrada"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/listboxOverview#list-box-columns",children:"Columna de List Box "})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/picturePopupMenuOverview",children:"Pop up menu imagen"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plug-in"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/progressIndicator",children:"Indicador de progreso "})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/ruler",children:"Regla"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/subformOverview",children:"Subformulario"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/tabControl",children:"Pesta\xf1a"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/webAreaOverview",children:"\xc1rea Web"})]}),(0,s.jsx)(r.td,{children:"El formulario est\xe1 a punto de salir y liberarse"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsx)(r.p,{children:"Este evento se activa cuando el formulario es generado."}),"\n",(0,s.jsxs)(r.p,{children:["Todos los objetos del formulario (de cualquier p\xe1gina) cuya propiedad de evento ",(0,s.jsx)(r.code,{children:"On Unload"})," est\xe9 seleccionada tendr\xe1n su m\xe9todo objeto llamado. Entonces, si se selecciona la propiedad de evento formulario ",(0,s.jsx)(r.code,{children:"On Unload"}),", se llamar\xe1 al m\xe9todo formulario."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Los eventos ",(0,s.jsx)(r.a,{href:"/docs/es/20-R4/Events/onLoad",children:(0,s.jsx)(r.code,{children:"On Load"})})," y [",(0,s.jsx)(r.code,{children:"On Unload"}),"] se generan para los objetos si est\xe1n activados tanto para los objetos como para el formulario al que pertenecen los objetos. Si los eventos est\xe1n activados s\xf3lo para los objetos, no se producir\xe1n; estos dos eventos tambi\xe9n deben estar activados a nivel del formulario."]}),"\n"]}),"\n",(0,s.jsx)(r.h3,{id:"Subformulario",children:"Subformulario"}),"\n",(0,s.jsxs)(r.p,{children:["El evento ",(0,s.jsx)(r.code,{children:"On Unload"})," se genera al cerrar el subformulario (este evento debe haberse activado tambi\xe9n a nivel del formulario padre para que se tenga en cuenta). El evento se genera antes que los del formulario padre. The event is generated before those of the parent form."]}),"\n",(0,s.jsx)(r.h3,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/es/20-R4/Events/onLoad",children:(0,s.jsx)(r.code,{children:"On Load"})})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},221020:(e,r,o)=>{var s=o(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,d=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,a={key:!0,ref:!0,__self:!0,__source:!0};function c(e,r,o){var s,t={},c=null,l=null;for(s in void 0!==o&&(c=""+o),void 0!==r.key&&(c=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,s)&&!a.hasOwnProperty(s)&&(t[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===t[s]&&(t[s]=r[s]);return{$$typeof:n,type:e,key:c,ref:l,props:t,_owner:d.current}}r.Fragment=t,r.jsx=c,r.jsxs=c},474848:(e,r,o)=>{e.exports=o(221020)},28453:(e,r,o)=>{o.d(r,{R:()=>i,x:()=>d});var s=o(296540);const n={},t=s.createContext(n);function i(e){const r=s.useContext(t);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(t.Provider,{value:r},e.children)}}}]);