/*! For license information please see 4787c6dc.c18e4a10.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[455],{103629:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>d});var o=s(474848),n=s(28453);const t={id:"onMouseLeave",title:"On Mouse Leave"},i=void 0,a={id:"Events/onMouseLeave",title:"On Mouse Leave",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Definici\xf3n                                             |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R5/Events/onMouseLeave.md",sourceDirName:"Events",slug:"/Events/onMouseLeave",permalink:"/docs/es/Events/onMouseLeave",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseLeave.md%20(20-R5)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R5",frontMatter:{id:"onMouseLeave",title:"On Mouse Leave"},sidebar:"docs",previous:{title:"On Mouse Enter",permalink:"/docs/es/Events/onMouseEnter"},next:{title:"On Mouse Move",permalink:"/docs/es/Events/onMouseMove"}},c={},d=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Llamar la pila",id:"Llamar-la-pila",level:3},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:3}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Puede ser llamado por"}),(0,o.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"36"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Casilla de verificaci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Form - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/pictureButtonOverview",children:"Bot\xf3n con imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/picturePopupMenuOverview",children:"Men\xfa emergente con imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"Bot\xf3n de opci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/ruler",children:"Regla"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/spinner",children:"Selector"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/splitters",children:"Separador"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/stepper",children:"Pasos"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/tabControl",children:"Control de pesta\xf1as"})]}),(0,o.jsx)(r.td,{children:"El cursor del rat\xf3n sake del \xe1rea gr\xe1fica de un objeto"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(r.p,{children:"Este evento se genera una vez cuando el cursor del rat\xf3n abandona el \xe1rea gr\xe1fica de un objeto."}),"\n",(0,o.jsxs)(r.p,{children:["El evento ",(0,o.jsx)(r.code,{children:"On Mouse Leave"})," actualiza las variables sistema ",(0,o.jsx)(r.em,{children:"MouseX"})," y ",(0,o.jsx)(r.em,{children:"MouseY"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Los objetos que se hacen invisibles utilizando el comando ",(0,o.jsx)(r.code,{children:"OBJECT SET VISIBLE"})," o la propiedad ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," no generan este evento."]}),"\n",(0,o.jsx)(r.h3,{id:"Llamar-la-pila",children:"Llamar la pila"}),"\n",(0,o.jsxs)(r.p,{children:["Si se ha marcado el evento ",(0,o.jsx)(r.code,{children:"On Mouse Leave"})," para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera s\xf3lo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior."]}),"\n",(0,o.jsx)(r.h3,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/es/Events/onMouseMove",children:(0,o.jsx)(r.code,{children:"On Mouse Move"})})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/es/Events/onMouseLeave",children:(0,o.jsx)(r.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},221020:(e,r,s)=>{var o=s(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,r,s){var o,t={},d=null,l=null;for(o in void 0!==s&&(d=""+s),void 0!==r.key&&(d=""+r.key),void 0!==r.ref&&(l=r.ref),r)i.call(r,o)&&!c.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===t[o]&&(t[o]=r[o]);return{$$typeof:n,type:e,key:d,ref:l,props:t,_owner:a.current}}r.Fragment=t,r.jsx=d,r.jsxs=d},474848:(e,r,s)=>{e.exports=s(221020)},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var o=s(296540);const n={},t=o.createContext(n);function i(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);