"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69724"],{753831:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"Events/onMouseLeave","title":"On Mouse Leave","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Definici\xf3n                                             |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onMouseLeave.md","sourceDirName":"Events","slug":"/Events/onMouseLeave","permalink":"/docs/es/19/Events/onMouseLeave","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseLeave.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onMouseLeave","title":"On Mouse Leave"},"sidebar":"docs","previous":{"title":"On Mouse Enter","permalink":"/docs/es/19/Events/onMouseEnter"},"next":{"title":"On Mouse Move","permalink":"/docs/es/19/Events/onMouseMove"}}'),o=r("785893"),t=r("250065");let i={id:"onMouseLeave",title:"On Mouse Leave"},a=void 0,c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Llamar la pila",id:"llamar-la-pila",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function l(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(s.table,{children:[(0,o.jsx)(s.thead,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.th,{children:"Code"}),(0,o.jsx)(s.th,{children:"Puede ser llamado por"}),(0,o.jsx)(s.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(s.tbody,{children:(0,o.jsxs)(s.tr,{children:[(0,o.jsx)(s.td,{children:"36"}),(0,o.jsxs)(s.td,{children:[(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," -",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/listOverview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," -",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/picturePopupMenuOverview",children:"Imagen del men\xfa emergente"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/pluginAreaOverview",children:"\xc1rea del plug-in"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/progressIndicator",children:"Indicador de progreso"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/ruler",children:"Regla"})," -",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/tabControl",children:"Control de tabulaci\xf3n"})]}),(0,o.jsx)(s.td,{children:"El cursor del rat\xf3n sake del \xe1rea gr\xe1fica de un objeto"})]})})]}),"\n",(0,o.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsx)(s.p,{children:"Este evento se genera una vez cuando el cursor del rat\xf3n abandona el \xe1rea gr\xe1fica de un objeto."}),"\n",(0,o.jsxs)(s.p,{children:["El evento ",(0,o.jsx)(s.code,{children:"On Mouse Leave"})," actualiza las variables sistema ",(0,o.jsx)(s.em,{children:"MouseX"})," y ",(0,o.jsx)(s.em,{children:"MouseY"}),"."]}),"\n",(0,o.jsxs)(s.p,{children:["Los objetos que se hacen invisibles utilizando el comando ",(0,o.jsx)(s.code,{children:"OBJECT SET VISIBLE"})," o la propiedad ",(0,o.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," no generan este evento."]}),"\n",(0,o.jsx)(s.h3,{id:"llamar-la-pila",children:"Llamar la pila"}),"\n",(0,o.jsxs)(s.p,{children:["Si se ha marcado el evento ",(0,o.jsx)(s.code,{children:"On Mouse Leave"})," para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera s\xf3lo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior."]}),"\n",(0,o.jsx)(s.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/docs/es/19/Events/onMouseMove",children:(0,o.jsx)(s.code,{children:"On Mouse Move"})})}),"\n",(0,o.jsx)(s.li,{children:(0,o.jsx)(s.a,{href:"/docs/es/19/Events/onMouseLeave",children:(0,o.jsx)(s.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return i}});var n=r(667294);let o={},t=n.createContext(o);function i(e){let s=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);