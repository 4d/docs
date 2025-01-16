"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["97513"],{271503:function(e,o,s){s.r(o),s.d(o,{default:()=>u,frontMatter:()=>i,metadata:()=>r,assets:()=>d,toc:()=>l,contentTitle:()=>c});var r=JSON.parse('{"id":"Events/onGettingFocus","title":"On Getting focus","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Definici\xf3n                          |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R8/Events/onGettingFocus.md","sourceDirName":"Events","slug":"/Events/onGettingFocus","permalink":"/docs/es/Events/onGettingFocus","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonGettingFocus.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onGettingFocus","title":"On Getting focus"},"sidebar":"docs","previous":{"title":"On Footer Click","permalink":"/docs/es/Events/onFooterClick"},"next":{"title":"On Header","permalink":"/docs/es/Events/onHeader"}}'),n=s("785893"),t=s("250065");let i={id:"onGettingFocus",title:"On Getting focus"},c=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function a(e){let o={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Code"}),(0,n.jsx)(o.th,{children:"Puede ser llamado por"}),(0,n.jsx)(o.th,{children:"Definici\xf3n"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"15"}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,n.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/checkboxOverview",children:"Casilla de verificaci\xf3n"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/comboBoxOverview",children:"Cuadro combinado"})," - Formulario - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/inputOverview",children:"Entrada"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/listboxOverview",children:"Lista"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/listboxOverview#list-box-columns",children:"List Box"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/radiobuttonOverview",children:"Bot\xf3n de opci\xf3n"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/ruler",children:"Regla"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/spinner",children:"Selector"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/stepper",children:"Pasos"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/subformOverview",children:"Subformulario"})," - ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/webAreaOverview",children:"\xc1rea web"})]}),(0,n.jsx)(o.td,{children:"Un objeto formulario recibe el foco"})]})})]}),"\n",(0,n.jsx)(o.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(o.p,{children:["El evento ",(0,n.jsx)(o.code,{children:"On Getting Focus"}),", junto con el evento ",(0,n.jsx)(o.a,{href:"/docs/es/Events/onLosingFocus",children:(0,n.jsx)(o.code,{children:"On losing Focus"})}),", se utilizan para detectar y manejar el cambio de foco de los objetos ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/propertiesEntry#focusable",children:"focalizables"}),"."]}),"\n",(0,n.jsxs)(o.p,{children:["Con los ",(0,n.jsx)(o.a,{href:"/docs/es/FormObjects/subformOverview",children:"objetos subformulario"}),", este evento se genera en el m\xe9todo del objeto subformulario cuando se verifica. Se env\xeda al m\xe9todo formulario del subformulario, lo que significa, por ejemplo, que se puede gestionar la visualizaci\xf3n de los botones de navegaci\xf3n en el subformulario en funci\xf3n del foco. Tenga en cuenta que los objetos de subformulario pueden tener ellos mismos el foco."]})]})}function u(e={}){let{wrapper:o}={...(0,t.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},250065:function(e,o,s){s.d(o,{Z:function(){return c},a:function(){return i}});var r=s(667294);let n={},t=r.createContext(n);function i(e){let o=r.useContext(t);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function c(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),r.createElement(t.Provider,{value:o},e.children)}}}]);