"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94296],{776727:(e,s,o)=>{o.r(s),o.d(s,{assets:()=>a,contentTitle:()=>t,default:()=>h,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var r=o(474848),n=o(28453);const i={id:"onMouseMove",title:"On Mouse Move"},t=void 0,c={id:"Events/onMouseMove",title:"On Mouse Move",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Definici\xf3n                                                                                                                  |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Events/onMouseMove.md",sourceDirName:"Events",slug:"/Events/onMouseMove",permalink:"/docs/es/20/Events/onMouseMove",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseMove.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onMouseMove",title:"On Mouse Move"},sidebar:"docs",previous:{title:"On Mouse Leave",permalink:"/docs/es/20/Events/onMouseLeave"},next:{title:"On Mouse Up",permalink:"/docs/es/20/Events/onMouseUp"}},a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Llamar la pila",id:"llamar-la-pila",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function l(e){const s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s.table,{children:[(0,r.jsx)(s.thead,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.th,{children:"Code"}),(0,r.jsx)(s.th,{children:"Puede ser llamado por"}),(0,r.jsx)(s.th,{children:"Definici\xf3n"})]})}),(0,r.jsx)(s.tbody,{children:(0,r.jsxs)(s.tr,{children:[(0,r.jsx)(s.td,{children:"37"}),(0,r.jsxs)(s.td,{children:[(0,r.jsx)(s.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/inputOverview",children:"Entrada"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/picturePopupMenuOverview",children:"Pop up menu imagen"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plug-in"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/progressIndicator",children:"Indicador de progreso "})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/ruler",children:"Regla"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/spinner",children:"Spinner"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/splitters",children:"Splitter"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/stepper",children:"Stepper"})," - ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/tabControl",children:"Pesta\xf1a"})]}),(0,r.jsx)(s.td,{children:"El cursor del rat\xf3n se mueve al menos un p\xedxel O se ha presionado una tecla de modificaci\xf3n (Shift, Alt/Option, Shift Lock)"})]})})]}),"\n",(0,r.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsx)(s.p,{children:"Se genera este evento:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:"cuando el cursor del rat\xf3n se mueve al menos un p\xedxel"}),"\n",(0,r.jsxs)(s.li,{children:["O cuando se ha presionado una tecla de modificaci\xf3n (",(0,r.jsx)(s.strong,{children:"May\xfas"}),", ",(0,r.jsx)(s.strong,{children:"Alt/Opci\xf3n"}),", ",(0,r.jsx)(s.strong,{children:"Bloq May\xfas"}),"). Esto permite gestionar las operaciones de arrastrar y soltar de tipo copiar o mover."]}),"\n"]}),"\n",(0,r.jsx)(s.p,{children:"Si el evento se marca para un objeto solamente, se genera s\xf3lo cuando el cursor est\xe1 dentro del \xe1rea gr\xe1fica del objeto."}),"\n",(0,r.jsxs)(s.p,{children:["El evento ",(0,r.jsx)(s.code,{children:"On Mouse Move"})," actualiza las variables sistema ",(0,r.jsx)(s.em,{children:"MouseX"})," y ",(0,r.jsx)(s.em,{children:"MouseY"}),"."]}),"\n",(0,r.jsxs)(s.p,{children:["Los objetos que se hacen invisibles utilizando el comando ",(0,r.jsx)(s.code,{children:"OBJECT SET VISIBLE"})," o la propiedad ",(0,r.jsx)(s.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," no generan este evento."]}),"\n",(0,r.jsx)(s.h3,{id:"llamar-la-pila",children:"Llamar la pila"}),"\n",(0,r.jsxs)(s.p,{children:["Si se ha marcado el evento ",(0,r.jsx)(s.code,{children:"On Mouse Move"})," para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera s\xf3lo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior."]}),"\n",(0,r.jsx)(s.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/es/20/Events/onMouseEnter",children:(0,r.jsx)(s.code,{children:"On Mouse Enter"})})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.a,{href:"/docs/es/20/Events/onMouseLeave",children:(0,r.jsx)(s.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},28453:(e,s,o)=>{o.d(s,{R:()=>t,x:()=>c});var r=o(296540);const n={},i=r.createContext(n);function t(e){const s=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),r.createElement(i.Provider,{value:s},e.children)}}}]);