"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73314"],{569451:function(e,s,r){r.r(s),r.d(s,{default:()=>h,frontMatter:()=>t,metadata:()=>o,assets:()=>c,toc:()=>l,contentTitle:()=>a});var o=JSON.parse('{"id":"Events/onMouseMove","title":"On Mouse Move","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                       | Definici\xf3n                                                                                                                  |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onMouseMove.md","sourceDirName":"Events","slug":"/Events/onMouseMove","permalink":"/docs/es/19/Events/onMouseMove","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseMove.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onMouseMove","title":"On Mouse Move"},"sidebar":"docs","previous":{"title":"On Mouse Leave","permalink":"/docs/es/19/Events/onMouseLeave"},"next":{"title":"On Mouse Up","permalink":"/docs/es/19/Events/onMouseUp"}}'),n=r("785893"),i=r("250065");let t={id:"onMouseMove",title:"On Mouse Move"},a=void 0,c={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Llamar la pila",id:"llamar-la-pila",level:3},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:3}];function d(e){let s={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(s.table,{children:[(0,n.jsx)(s.thead,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.th,{children:"Code"}),(0,n.jsx)(s.th,{children:"Puede ser llamado por"}),(0,n.jsx)(s.th,{children:"Definici\xf3n"})]})}),(0,n.jsx)(s.tbody,{children:(0,n.jsxs)(s.tr,{children:[(0,n.jsx)(s.td,{children:"37"}),(0,n.jsxs)(s.td,{children:[(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," -",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/listOverview",children:"Lista jer\xe1rquica"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," -",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/picturePopupMenuOverview",children:"Imagen del men\xfa emergente"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/pluginAreaOverview",children:"\xc1rea del plug-in"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/progressIndicator",children:"Indicador de progreso"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/ruler",children:"Regla"})," -",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/tabControl",children:"Control de tabulaci\xf3n"})]}),(0,n.jsx)(s.td,{children:"El cursor del rat\xf3n se mueve al menos un p\xedxel O se ha presionado una tecla de modificaci\xf3n (Shift, Alt/Option, Shift Lock)"})]})})]}),"\n",(0,n.jsx)(s.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsx)(s.p,{children:"Se genera este evento:"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:"cuando el cursor del rat\xf3n se mueve al menos un p\xedxel"}),"\n",(0,n.jsxs)(s.li,{children:["O cuando se ha presionado una tecla de modificaci\xf3n (",(0,n.jsx)(s.strong,{children:"May\xfas"}),", ",(0,n.jsx)(s.strong,{children:"Alt/Opci\xf3n"}),", ",(0,n.jsx)(s.strong,{children:"Bloq May\xfas"}),"). Esto permite gestionar las operaciones de arrastrar y soltar de tipo copiar o mover."]}),"\n"]}),"\n",(0,n.jsx)(s.p,{children:"Si el evento se marca para un objeto solamente, se genera s\xf3lo cuando el cursor est\xe1 dentro del \xe1rea gr\xe1fica del objeto."}),"\n",(0,n.jsxs)(s.p,{children:["El evento ",(0,n.jsx)(s.code,{children:"On Mouse Move"})," actualiza las variables sistema ",(0,n.jsx)(s.em,{children:"MouseX"})," y ",(0,n.jsx)(s.em,{children:"MouseY"}),"."]}),"\n",(0,n.jsxs)(s.p,{children:["Los objetos que se hacen invisibles utilizando el comando ",(0,n.jsx)(s.code,{children:"OBJECT SET VISIBLE"})," o la propiedad ",(0,n.jsx)(s.a,{href:"/docs/es/19/FormObjects/propertiesDisplay#visibility",children:"Visibilidad"})," no generan este evento."]}),"\n",(0,n.jsx)(s.h3,{id:"llamar-la-pila",children:"Llamar la pila"}),"\n",(0,n.jsxs)(s.p,{children:["Si se ha marcado el evento ",(0,n.jsx)(s.code,{children:"On Mouse Move"})," para el formulario, se genera para cada objeto de formulario. Si se verifica para un objeto, se genera s\xf3lo para ese objeto. Cuando hay objetos superpuestos, el evento es generado por el primer objeto capaz de gestionarlo que se encuentra yendo en orden del nivel superior al inferior."]}),"\n",(0,n.jsx)(s.h3,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/es/19/Events/onMouseEnter",children:(0,n.jsx)(s.code,{children:"On Mouse Enter"})})}),"\n",(0,n.jsx)(s.li,{children:(0,n.jsx)(s.a,{href:"/docs/es/19/Events/onMouseLeave",children:(0,n.jsx)(s.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function h(e={}){let{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},250065:function(e,s,r){r.d(s,{Z:function(){return a},a:function(){return t}});var o=r(667294);let n={},i=o.createContext(n);function t(e){let s=o.useContext(i);return o.useMemo(function(){return"function"==typeof e?e(s):{...s,...e}},[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:t(e.components),o.createElement(i.Provider,{value:s},e.children)}}}]);