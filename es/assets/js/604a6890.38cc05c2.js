"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["2828"],{563467:function(e,s,r){r.r(s),r.d(s,{default:()=>u,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>d,contentTitle:()=>c});var o=JSON.parse('{"id":"Events/onMouseLeave","title":"On Mouse Leave","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Definici\xf3n                                             |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Events/onMouseLeave.md","sourceDirName":"Events","slug":"/Events/onMouseLeave","permalink":"/docs/es/Events/onMouseLeave","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseLeave.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onMouseLeave","title":"On Mouse Leave"},"sidebar":"docs","previous":{"title":"On Mouse Enter","permalink":"/docs/es/Events/onMouseEnter"},"next":{"title":"On Mouse Move","permalink":"/docs/es/Events/onMouseMove"}}'),n=r("785893"),t=r("250065");let i={id:"onMouseLeave",title:"On Mouse Leave"},c=void 0,a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Llamar la pila",id:"llamar-la-pila",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function l(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Code"}),(0,n.jsx)(s.th,{children:"Puede ser llamado por"}),(0,n.jsx)(s.th,{children:"Definici\xf3n"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"36"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/tabControl",children:"Tab control"})]}),(0,n.jsx)(s.td,{children:"El cursor del rat\xf3n sake del \xe1rea gr\xe1fica de un objeto"})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsx)(s.p,{children:"Este evento se genera una vez cuando el cursor del rat\xf3n abandona el \xe1rea gr\xe1fica de un objeto."}),"\n",(0,n.jsxs)(s.p,{children:["El evento ",(0,n.jsx)(s.code,{children:"On Mouse Leave"})," actualiza las variables sistema ",(0,n.jsx)(s.em,{children:"MouseX"})," y ",(0,n.jsx)(s.em,{children:"MouseY"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Los objetos que se hacen invisibles utilizando el comando ",(0,n.jsx)(s.code,{children:"OBJECT SET VISIBLE"})," o la propiedad ",(0,n.jsx)(s.a,{href:"/docs/es/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," no generan este evento."]}),"\n",(0,n.jsx)(s.h3,{id:"llamar-la-pila",children:"Llamar la pila"}),"\n",(0,n.jsxs)(s.p,{children:["Si se ha marcado el evento ",(0,n.jsx)(s.code,{children:"On Mouse Leave"})," para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera s\xf3lo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior."]}),"\n",(0,n.jsx)(s.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/es/Events/onMouseMove",children:(0,n.jsx)(s.code,{children:"On Mouse Move"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/es/Events/onMouseLeave",children:(0,n.jsx)(s.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function u(e={}){let{wrapper:s}={...(0,t.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return c},a:function(){return i}});var o=r(667294);let n={},t=o.createContext(n);function i(e){let s=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);