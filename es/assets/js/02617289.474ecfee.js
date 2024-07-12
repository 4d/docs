/*! For license information please see 02617289.474ecfee.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94296],{776727:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>l});var o=s(474848),n=s(28453);const t={id:"onMouseMove",title:"On Mouse Move"},i=void 0,a={id:"Events/onMouseMove",title:"On Mouse Move",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                            | Definici\xf3n                                                                                                                  |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Events/onMouseMove.md",sourceDirName:"Events",slug:"/Events/onMouseMove",permalink:"/docs/es/20/Events/onMouseMove",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseMove.md%20(20)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20",frontMatter:{id:"onMouseMove",title:"On Mouse Move"},sidebar:"docs",previous:{title:"On Mouse Leave",permalink:"/docs/es/20/Events/onMouseLeave"},next:{title:"On Mouse Up",permalink:"/docs/es/20/Events/onMouseUp"}},c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Llamar la pila",id:"llamar-la-pila",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function d(e){const r={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Puede ser llamado por"}),(0,o.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"37"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/picturePopupMenuOverview",children:"Pop up menu imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/progressIndicator",children:"Indicador de progreso "})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/ruler",children:"Regla"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/tabControl",children:"Pesta\xf1a"})]}),(0,o.jsx)(r.td,{children:"El cursor del rat\xf3n se mueve al menos un p\xedxel O se ha presionado una tecla de modificaci\xf3n (Shift, Alt/Option, Shift Lock)"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(r.p,{children:"Se genera este evento:"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"cuando el cursor del rat\xf3n se mueve al menos un p\xedxel"}),"\n",(0,o.jsxs)(r.li,{children:["O cuando se ha presionado una tecla de modificaci\xf3n (",(0,o.jsx)(r.strong,{children:"May\xfas"}),", ",(0,o.jsx)(r.strong,{children:"Alt/Opci\xf3n"}),", ",(0,o.jsx)(r.strong,{children:"Bloq May\xfas"}),"). Esto permite gestionar las operaciones de arrastrar y soltar de tipo copiar o mover."]}),"\n"]}),"\n",(0,o.jsx)(r.p,{children:"Si el evento se marca para un objeto solamente, se genera s\xf3lo cuando el cursor est\xe1 dentro del \xe1rea gr\xe1fica del objeto."}),"\n",(0,o.jsxs)(r.p,{children:["El evento ",(0,o.jsx)(r.code,{children:"On Mouse Move"})," actualiza las variables sistema ",(0,o.jsx)(r.em,{children:"MouseX"})," y ",(0,o.jsx)(r.em,{children:"MouseY"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Los objetos que se hacen invisibles utilizando el comando ",(0,o.jsx)(r.code,{children:"OBJECT SET VISIBLE"})," o la propiedad ",(0,o.jsx)(r.a,{href:"/docs/es/20/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," no generan este evento."]}),"\n",(0,o.jsx)(r.h3,{id:"llamar-la-pila",children:"Llamar la pila"}),"\n",(0,o.jsxs)(r.p,{children:["Si se ha marcado el evento ",(0,o.jsx)(r.code,{children:"On Mouse Move"})," para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera s\xf3lo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior."]}),"\n",(0,o.jsx)(r.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/es/20/Events/onMouseEnter",children:(0,o.jsx)(r.code,{children:"On Mouse Enter"})})}),"\n",(0,o.jsx)(r.li,{children:(0,o.jsx)(r.a,{href:"/docs/es/20/Events/onMouseLeave",children:(0,o.jsx)(r.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function u(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},221020:(e,r,s)=>{var o=s(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var o,t={},l=null,d=null;for(o in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(d=r.ref),r)i.call(r,o)&&!c.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===t[o]&&(t[o]=r[o]);return{$$typeof:n,type:e,key:l,ref:d,props:t,_owner:a.current}}r.Fragment=t,r.jsx=l,r.jsxs=l},474848:(e,r,s)=>{e.exports=s(221020)},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>a});var o=s(296540);const n={},t=o.createContext(n);function i(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);