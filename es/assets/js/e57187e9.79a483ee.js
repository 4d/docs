"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["59752"],{197351:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>d});var t=JSON.parse('{"id":"Events/onValidate","title":"On Validate","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Definici\xf3n                                      |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Events/onValidate.md","sourceDirName":"Events","slug":"/Events/onValidate","permalink":"/docs/es/20-R7/Events/onValidate","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonValidate.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onValidate","title":"On Validate"},"sidebar":"docs","previous":{"title":"On URL Resource Loading","permalink":"/docs/es/20-R7/Events/onUrlResourceLoading"},"next":{"title":"On VP Range Changed","permalink":"/docs/es/20-R7/Events/onVpRangeChanged"}}'),o=s("785893"),n=s("250065");let i={id:"onValidate",title:"On Validate"},d=void 0,a={},c=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Subformulario",id:"subformulario",level:3}];function l(e){let r={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Puede ser llamado por"}),(0,o.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"3"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/checkboxOverview",children:"Casilla de verificaci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/listOverview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/inputOverview",children:"Entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/listboxOverview",children:"Lista"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/listboxOverview#list-box-columns",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/pictureButtonOverview",children:"Bot\xf3n con imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/picturePopupMenuOverview",children:"Men\xfa emergente con imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/pluginAreaOverview",children:"\xc1rea de Plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/radiobuttonOverview",children:"Bot\xf3n de opci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/ruler",children:"Regla"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/spinner",children:"Selector"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/splitters",children:"Separador"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/stepper",children:"Pasos"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/subformOverview",children:"Subformulario"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/tabControl",children:"Control de pesta\xf1as"})]}),(0,o.jsx)(r.td,{children:"Se ha validado la entrada de datos del registro"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["Este evento se dispara cuando la entrada de datos del registro ha sido validada, por ejemplo despu\xe9s de una llamada al comando ",(0,o.jsx)(r.code,{children:"SAVE RECORD"})," o una ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/propertiesAction#standard-action",children:"acci\xf3n est\xe1ndar"})," ",(0,o.jsx)(r.code,{children:"accept"}),"."]}),"\n",(0,o.jsx)(r.h3,{id:"subformulario",children:"Subformulario"}),"\n",(0,o.jsxs)(r.p,{children:["El evento ",(0,o.jsx)(r.code,{children:"On Validate"})," se activa cuando se valida la entrada de datos en el subformulario."]})]})}function h(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return d},a:function(){return i}});var t=s(667294);let o={},n=t.createContext(o);function i(e){let r=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);