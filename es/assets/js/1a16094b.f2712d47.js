"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["73673"],{831326:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>s,assets:()=>a,toc:()=>d,contentTitle:()=>c});var s=JSON.parse('{"id":"Events/onPrintingBreak","title":"On Printing Break","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Definici\xf3n                                                            |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Events/onPrintingBreak.md","sourceDirName":"Events","slug":"/Events/onPrintingBreak","permalink":"/docs/es/Events/onPrintingBreak","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPrintingBreak.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onPrintingBreak","title":"On Printing Break"},"sidebar":"docs","previous":{"title":"On Plug in Area","permalink":"/docs/es/Events/onPlugInArea"},"next":{"title":"On Printing Detail","permalink":"/docs/es/Events/onPrintingDetail"}}'),t=n("785893"),o=n("250065");let i={id:"onPrintingBreak",title:"On Printing Break"},c=void 0,a={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Code"}),(0,t.jsx)(r.th,{children:"Puede ser llamado por"}),(0,t.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"6"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Casilla de verificaci\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/listOverview",children:"Lista jer\xe1rquica"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/pictureButtonOverview",children:"Bot\xf3n con imagen"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/picturePopupMenuOverview",children:"Men\xfa emergente con imagen"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"Bot\xf3n de opci\xf3n"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/ruler",children:"Regla"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/spinner",children:"Selector"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/splitters",children:"Separador"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/stepper",children:"Pasos"})," - ",(0,t.jsx)(r.a,{href:"/docs/es/FormObjects/tabControl",children:"Control de pesta\xf1as"})]}),(0,t.jsx)(r.td,{children:"Una de las \xe1reas de ruptura del formulario est\xe1 a punto de imprimirse"})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,t.jsxs)(r.p,{children:["El evento ",(0,t.jsx)(r.code,{children:"On Printing Break"})," s\xf3lo puede utilizarse en el contexto de un ",(0,t.jsx)(r.strong,{children:"formulario de salida"}),". Se activa cada vez que un \xe1rea de ruptura del formulario de salida est\xe1 a punto de imprimirse, para poder evaluar los valores de ruptura, por ejemplo."]}),"\n",(0,t.jsxs)(r.p,{children:["Este evento suele producirse tras una llamada al comando ",(0,t.jsx)(r.code,{children:"Subtotal"}),"."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Este evento no se puede seleccionar para los formularios proyecto, s\xf3lo est\xe1 disponible con los ",(0,t.jsx)(r.strong,{children:"formularios tabla"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var s=n(667294);let t={},o=s.createContext(t);function i(e){let r=s.useContext(o);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),s.createElement(o.Provider,{value:r},e.children)}}}]);