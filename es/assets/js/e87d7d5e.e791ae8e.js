"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15334"],{115168:function(e,r,n){n.r(r),n.d(r,{default:()=>u,frontMatter:()=>i,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"Events/onPrintingBreak","title":"On Printing Break","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Definici\xf3n                                                            |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Events/onPrintingBreak.md","sourceDirName":"Events","slug":"/Events/onPrintingBreak","permalink":"/docs/es/20-R7/Events/onPrintingBreak","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPrintingBreak.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onPrintingBreak","title":"On Printing Break"},"sidebar":"docs","previous":{"title":"On Plug in Area","permalink":"/docs/es/20-R7/Events/onPlugInArea"},"next":{"title":"On Printing Detail","permalink":"/docs/es/20-R7/Events/onPrintingDetail"}}'),s=n("785893"),o=n("250065");let i={id:"onPrintingBreak",title:"On Printing Break"},c=void 0,d={},a=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,o.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Code"}),(0,s.jsx)(r.th,{children:"Puede ser llamado por"}),(0,s.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"6"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/tabControl",children:"Tab control"})]}),(0,s.jsx)(r.td,{children:"Una de las \xe1reas de ruptura del formulario est\xe1 a punto de imprimirse"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,s.jsxs)(r.p,{children:["El evento ",(0,s.jsx)(r.code,{children:"On Printing Break"})," s\xf3lo puede utilizarse en el contexto de un ",(0,s.jsx)(r.strong,{children:"formulario de salida"}),". Se activa cada vez que un \xe1rea de ruptura del formulario de salida est\xe1 a punto de imprimirse, para poder evaluar los valores de ruptura, por ejemplo."]}),"\n",(0,s.jsxs)(r.p,{children:["Este evento suele producirse tras una llamada al comando ",(0,s.jsx)(r.code,{children:"Subtotal"}),"."]}),"\n",(0,s.jsxs)(r.blockquote,{children:["\n",(0,s.jsxs)(r.p,{children:["Este evento no se puede seleccionar para los formularios proyecto, s\xf3lo est\xe1 disponible con los ",(0,s.jsx)(r.strong,{children:"formularios tabla"}),"."]}),"\n"]})]})}function u(e={}){let{wrapper:r}={...(0,o.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,n){n.d(r,{Z:function(){return c},a:function(){return i}});var t=n(667294);let s={},o=t.createContext(s);function i(e){let r=t.useContext(o);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),t.createElement(o.Provider,{value:r},e.children)}}}]);