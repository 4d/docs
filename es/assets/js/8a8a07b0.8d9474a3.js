"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["5529"],{651298:function(e,r,s){s.r(r),s.d(r,{metadata:()=>n,contentTitle:()=>d,default:()=>h,assets:()=>a,toc:()=>c,frontMatter:()=>i});var n=JSON.parse('{"id":"Events/onDrop","title":"On Drop","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Definici\xf3n                               |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-19/Events/onDrop.md","sourceDirName":"Events","slug":"/Events/onDrop","permalink":"/docs/es/19/Events/onDrop","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDrop.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onDrop","title":"On Drop"},"sidebar":"docs","previous":{"title":"On Drag Over","permalink":"/docs/es/19/Events/onDragOver"},"next":{"title":"On End URL Loading","permalink":"/docs/es/19/Events/onEndUrlLoading"}}'),o=s("785893"),t=s("250065");let i={id:"onDrop",title:"On Drop"},d=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function l(e){let r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Puede ser llamado por"}),(0,o.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"16"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/listboxOverview#list-box-columns",children:"Columna List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/picturePopupMenuOverview",children:"Pop up menu image"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/progressIndicator",children:"Indicador de progreso"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/ruler",children:"Regla"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/19/FormObjects/tabControl",children:"Pesta\xf1a"})]}),(0,o.jsx)(r.td,{children:"Los datos se han depositado en un objeto"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["El evento ",(0,o.jsx)(r.code,{children:"On Drop"})," se env\xeda una vez al objeto de destino cuando el puntero del rat\xf3n se mueve sobre el objeto. Este evento es la segunda fase de la operaci\xf3n de arrastrar y soltar, en la que se realiza una operaci\xf3n en respuesta a la acci\xf3n del usuario."]}),"\n",(0,o.jsxs)(r.p,{children:["Este evento no se env\xeda al objeto si el arrastre no fue aceptado durante los eventos ",(0,o.jsx)(r.a,{href:"/docs/es/19/Events/onDragOver",children:(0,o.jsx)(r.code,{children:"On Drag Over"})}),". Si se procesa el evento ",(0,o.jsx)(r.code,{children:"On Drag Over"})," para un objeto y se rechaza un arrastre, no se produce el evento ",(0,o.jsx)(r.code,{children:"On Drop"}),". As\xed, si durante el evento ",(0,o.jsx)(r.code,{children:"On Drag Over"})," se ha probado la compatibilidad de los tipos de datos entre los objetos origen y destino y se ha aceptado una posible ca\xedda, no es necesario volver a comprobar los datos durante el evento ",(0,o.jsx)(r.code,{children:"On Drop"}),". Ya sabe que los datos son adecuados para el objeto de destino."]}),"\n",(0,o.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/es/19/Events/onBeginDragOver",children:(0,o.jsx)(r.code,{children:"On Begin Drag Over"})})})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return i}});var n=s(667294);let o={},t=n.createContext(o);function i(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);