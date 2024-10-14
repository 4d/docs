"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91931],{704126:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>t,metadata:()=>c,toc:()=>a});var n=s(474848),o=s(28453);const t={id:"onMouseEnter",title:"On Mouse Enter"},i=void 0,c={id:"Events/onMouseEnter",title:"On Mouse Enter",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Definici\xf3n                                                |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onMouseEnter.md",sourceDirName:"Events",slug:"/Events/onMouseEnter",permalink:"/docs/es/19/Events/onMouseEnter",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseEnter.md%20(19)&body=Please%20enter%20your%20comment%3A",tags:[],version:"19",frontMatter:{id:"onMouseEnter",title:"On Mouse Enter"},sidebar:"docs",previous:{title:"On Menu Selected",permalink:"/docs/es/19/Events/onMenuSelected"},next:{title:"On Mouse Leave",permalink:"/docs/es/19/Events/onMouseLeave"}},d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Llamar la pila",id:"llamar-la-pila",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function l(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Puede ser llamado por"}),(0,n.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"35"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/inputOverview",children:"Entrada"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/picturePopupMenuOverview",children:"Pop up menu imagen"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plug-in"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/progressIndicator",children:"Indicador de progreso "})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/ruler",children:"Regla"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/tabControl",children:"Pesta\xf1a"})]}),(0,n.jsx)(r.td,{children:"El cursor del rat\xf3n entra en el \xe1rea gr\xe1fica de un objeto"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsx)(r.p,{children:"Este evento se genera una vez, cuando el cursor del rat\xf3n entra en el \xe1rea gr\xe1fica de un objeto del formulario."}),"\n",(0,n.jsxs)(r.p,{children:["El evento ",(0,n.jsx)(r.code,{children:"On Mouse Enter"})," actualiza las variables sistema ",(0,n.jsx)(r.em,{children:"MouseX"})," y ",(0,n.jsx)(r.em,{children:"MouseY"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Los objetos que se hacen invisibles utilizando el comando ",(0,n.jsx)(r.code,{children:"OBJECT SET VISIBLE"})," o la propiedad ",(0,n.jsx)(r.a,{href:"/docs/es/19/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," no generan este evento."]}),"\n",(0,n.jsx)(r.h3,{id:"llamar-la-pila",children:"Llamar la pila"}),"\n",(0,n.jsxs)(r.p,{children:["Si se ha marcado el evento ",(0,n.jsx)(r.code,{children:"On Mouse Enter"})," para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera s\xf3lo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior."]}),"\n",(0,n.jsx)(r.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/es/19/Events/onMouseMove",children:(0,n.jsx)(r.code,{children:"On Mouse Move"})})}),"\n",(0,n.jsx)(r.li,{children:(0,n.jsx)(r.a,{href:"/docs/es/19/Events/onMouseLeave",children:(0,n.jsx)(r.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>c});var n=s(296540);const o={},t=n.createContext(o);function i(e){const r=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);