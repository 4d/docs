"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67900],{716619:(e,o,s)=>{s.r(o),s.d(o,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>c,toc:()=>l});var r=s(474848),n=s(28453);const t={id:"onLosingFocus",title:"On Losing focus"},i=void 0,c={id:"Events/onLosingFocus",title:"On Losing focus",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Definici\xf3n                          |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Events/onLosingFocus.md",sourceDirName:"Events",slug:"/Events/onLosingFocus",permalink:"/docs/es/Events/onLosingFocus",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLosingFocus.md%20(20-R7)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R7",frontMatter:{id:"onLosingFocus",title:"On Losing focus"},sidebar:"docs",previous:{title:"On Long Click",permalink:"/docs/es/Events/onLongClick"},next:{title:"On Menu Selected",permalink:"/docs/es/Events/onMenuSelected"}},d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function a(e){const o={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.table,{children:[(0,r.jsx)(o.thead,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.th,{children:"Code"}),(0,r.jsx)(o.th,{children:"Puede ser llamado por"}),(0,r.jsx)(o.th,{children:"Definici\xf3n"})]})}),(0,r.jsx)(o.tbody,{children:(0,r.jsxs)(o.tr,{children:[(0,r.jsx)(o.td,{children:"14"}),(0,r.jsxs)(o.td,{children:[(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,r.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Casilla de verificaci\xf3n"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Cuadro combinado"})," - Formulario - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/listboxOverview",children:"Lista"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-columns",children:"List Box"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"Bot\xf3n de opci\xf3n"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/ruler",children:"Regla"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/spinner",children:"Selector"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/stepper",children:"Pasos"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/subformOverview",children:"Subformulario"})," - ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/webAreaOverview",children:"\xc1rea web"})]}),(0,r.jsx)(o.td,{children:"Un objeto formulario pierde el foco"})]})})]}),"\n",(0,r.jsx)(o.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(o.p,{children:["El evento ",(0,r.jsx)(o.code,{children:"On Losing Focus"}),", junto con el evento ",(0,r.jsx)(o.a,{href:"/docs/es/Events/onGettingFocus",children:(0,r.jsx)(o.code,{children:"On Getting Focus"})}),", se utilizan para detectar y manejar el cambio de foco de los objetos ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesEntry#focusable",children:"focalizables"}),"."]}),"\n",(0,r.jsxs)(o.p,{children:["Con los ",(0,r.jsx)(o.a,{href:"/docs/es/FormObjects/subformOverview",children:"objetos subformulario"}),", este evento se genera en el m\xe9todo del objeto subformulario cuando se verifica. Se env\xeda al m\xe9todo formulario del subformulario, lo que significa, por ejemplo, que se puede gestionar la visualizaci\xf3n de los botones de navegaci\xf3n en el subformulario en funci\xf3n del foco. Tenga en cuenta que los objetos de subformulario pueden tener ellos mismos el foco."]})]})}function u(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,r.jsx)(o,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},28453:(e,o,s)=>{s.d(o,{R:()=>i,x:()=>c});var r=s(296540);const n={},t=r.createContext(n);function i(e){const o=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);