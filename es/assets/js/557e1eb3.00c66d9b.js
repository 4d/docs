"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14870],{627816:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>c,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var o=r(474848),n=r(28453);const i={id:"onMouseLeave",title:"On Mouse Leave"},t=void 0,a={id:"Events/onMouseLeave",title:"On Mouse Leave",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Definici\xf3n                                             |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Events/onMouseLeave.md",sourceDirName:"Events",slug:"/Events/onMouseLeave",permalink:"/docs/es/Events/onMouseLeave",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseLeave.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onMouseLeave",title:"On Mouse Leave"},sidebar:"docs",previous:{title:"On Mouse Enter",permalink:"/docs/es/Events/onMouseEnter"},next:{title:"On Mouse Move",permalink:"/docs/es/Events/onMouseMove"}},c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Llamar la pila",id:"llamar-la-pila",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Code"}),(0,o.jsx)(s.th,{children:"Puede ser llamado por"}),(0,o.jsx)(s.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"36"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Casilla de verificaci\xf3n"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Form - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/pictureButtonOverview",children:"Bot\xf3n con imagen"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/picturePopupMenuOverview",children:"Men\xfa emergente con imagen"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"Bot\xf3n de opci\xf3n"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/ruler",children:"Regla"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/spinner",children:"Selector"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/splitters",children:"Separador"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/stepper",children:"Pasos"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/tabControl",children:"Control de pesta\xf1as"})]}),(0,o.jsx)(s.td,{children:"El cursor del rat\xf3n sake del \xe1rea gr\xe1fica de un objeto"})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(s.p,{children:"Este evento se genera una vez cuando el cursor del rat\xf3n abandona el \xe1rea gr\xe1fica de un objeto."}),"\n",(0,o.jsxs)(s.p,{children:["El evento ",(0,o.jsx)(s.code,{children:"On Mouse Leave"})," actualiza las variables sistema ",(0,o.jsx)(s.em,{children:"MouseX"})," y ",(0,o.jsx)(s.em,{children:"MouseY"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Los objetos que se hacen invisibles utilizando el comando ",(0,o.jsx)(s.code,{children:"OBJECT SET VISIBLE"})," o la propiedad ",(0,o.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," no generan este evento."]}),"\n",(0,o.jsx)(s.h3,{id:"llamar-la-pila",children:"Llamar la pila"}),"\n",(0,o.jsxs)(s.p,{children:["Si se ha marcado el evento ",(0,o.jsx)(s.code,{children:"On Mouse Leave"})," para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera s\xf3lo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior."]}),"\n",(0,o.jsx)(s.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/docs/es/Events/onMouseMove",children:(0,o.jsx)(s.code,{children:"On Mouse Move"})})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/docs/es/Events/onMouseLeave",children:(0,o.jsx)(s.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},28453:(e,s,r)=>{r.d(s,{R:()=>t,x:()=>a});var o=r(296540);const n={},i=o.createContext(n);function t(e){const s=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);