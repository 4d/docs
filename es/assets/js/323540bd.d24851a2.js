"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10370],{244136:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>a,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>i,toc:()=>c});var o=s(474848),n=s(28453);const t={id:"onDrop",title:"On Drop"},d=void 0,i={id:"Events/onDrop",title:"On Drop",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Definici\xf3n                               |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Events/onDrop.md",sourceDirName:"Events",slug:"/Events/onDrop",permalink:"/docs/es/Events/onDrop",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDrop.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"onDrop",title:"On Drop"},sidebar:"docs",previous:{title:"On Drag Over",permalink:"/docs/es/Events/onDragOver"},next:{title:"On End URL Loading",permalink:"/docs/es/Events/onEndUrlLoading"}},a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Puede ser llamado por"}),(0,o.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"16"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Casilla de verificaci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/listboxOverview",children:"Lista"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-columns",children:"Columna de lista"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/pictureButtonOverview",children:"Bot\xf3n con imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/picturePopupMenuOverview",children:"Men\xfa emergente con imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"Bot\xf3n de opci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/ruler",children:"Regla"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/spinner",children:"Selector"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/splitters",children:"Separador"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/stepper",children:"Pasos"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/FormObjects/tabControl",children:"Control de pesta\xf1as"})]}),(0,o.jsx)(r.td,{children:"Los datos se han depositado en un objeto"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["El evento ",(0,o.jsx)(r.code,{children:"On Drop"})," se env\xeda una vez al objeto de destino cuando el puntero del rat\xf3n se mueve sobre el objeto. Este evento es la segunda fase de la operaci\xf3n de arrastrar y soltar, en la que se realiza una operaci\xf3n en respuesta a la acci\xf3n del usuario."]}),"\n",(0,o.jsxs)(r.p,{children:["Este evento no se env\xeda al objeto si el arrastre no fue aceptado durante los eventos ",(0,o.jsx)(r.a,{href:"/docs/es/Events/onDragOver",children:(0,o.jsx)(r.code,{children:"On Drag Over"})}),". Si se procesa el evento ",(0,o.jsx)(r.code,{children:"On Drag Over"})," para un objeto y se rechaza un arrastre, no se produce el evento ",(0,o.jsx)(r.code,{children:"On Drop"}),". As\xed, si durante el evento ",(0,o.jsx)(r.code,{children:"On Drag Over"})," se ha probado la compatibilidad de los tipos de datos entre los objetos origen y destino y se ha aceptado una posible ca\xedda, no es necesario volver a comprobar los datos durante el evento ",(0,o.jsx)(r.code,{children:"On Drop"}),". Ya sabe que los datos son adecuados para el objeto de destino."]}),"\n",(0,o.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/es/Events/onBeginDragOver",children:(0,o.jsx)(r.code,{children:"On Begin Drag Over"})})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>d,x:()=>i});var o=s(296540);const n={},t=o.createContext(n);function d(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);