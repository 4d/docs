"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["81780"],{983002:function(e,n,r){r.r(n),r.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>i,toc:()=>l,contentTitle:()=>c});var s=JSON.parse('{"id":"Events/onDoubleClicked","title":"On Double Clicked","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              | Definici\xf3n                                 |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20/Events/onDoubleClicked.md","sourceDirName":"Events","slug":"/Events/onDoubleClicked","permalink":"/docs/es/20/Events/onDoubleClicked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDoubleClicked.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onDoubleClicked","title":"On Double Clicked"},"sidebar":"docs","previous":{"title":"On Display Detail","permalink":"/docs/es/20/Events/onDisplayDetail"},"next":{"title":"On Drag Over","permalink":"/docs/es/20/Events/onDragOver"}}'),o=r("785893"),t=r("250065");let d={id:"onDoubleClicked",title:"On Double Clicked"},c=void 0,i={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Ejemplo",id:"ejemplo",level:4}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Code"}),(0,o.jsx)(n.th,{children:"Puede ser llamado por"}),(0,o.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(n.tbody,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"13"}),(0,o.jsxs)(n.td,{children:[(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/checkboxOverview",children:"Check Box"})," - Form - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(n.a,{href:"/docs/es/20/FormObjects/stepper",children:"Stepper"})]}),(0,o.jsx)(n.td,{children:"Se ha efectuado un doble clic en un objeto"})]})})]}),"\n",(0,o.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(n.p,{children:["El evento ",(0,o.jsx)(n.code,{children:"On Double Clicked"})," se genera cuando el usuario hace doble clic en un objeto. El tiempo m\xe1ximo de separaci\xf3n de un doble clic se define en las preferencias del sistema."]}),"\n",(0,o.jsxs)(n.p,{children:["Si la propiedad de evento de objeto ",(0,o.jsx)(n.a,{href:"/docs/es/20/Events/onClicked",children:(0,o.jsx)(n.code,{children:"On Clicked"})})," u ",(0,o.jsx)(n.code,{children:"On Double Clicked"})," est\xe1 seleccionada para un objeto, puede detectar y manejar los clics dentro o sobre el objeto, utilizando el comando ",(0,o.jsx)(n.code,{children:"FORM event"})," que devuelve ",(0,o.jsx)(n.a,{href:"/docs/es/20/Events/onClicked",children:(0,o.jsx)(n.code,{children:"On Clicked"})})," o ",(0,o.jsx)(n.code,{children:"On Double Clicked"}),", dependiendo del caso."]}),"\n",(0,o.jsxs)(n.p,{children:["Si se seleccionan ambos eventos para un objeto, se generar\xe1 el evento ",(0,o.jsx)(n.code,{children:"On Clicked"})," y luego el evento ",(0,o.jsx)(n.code,{children:"On Double Clicked"})," cuando el usuario haga doble clic en el objeto."]}),"\n",(0,o.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,o.jsxs)(n.p,{children:["Este evento se genera cuando el usuario hace doble clic en cualquier parte en un documento 4D View Pro. En este contexto, el ",(0,o.jsx)(n.a,{href:"/docs/es/20/Events/overview#event-object",children:"objeto evento"})," devuelto por el comando ",(0,o.jsx)(n.code,{children:"FORM Event"})," contiene:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,o.jsxs)(n.table,{children:[(0,o.jsx)(n.thead,{children:(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.th,{children:"Propiedad"}),(0,o.jsx)(n.th,{children:"Tipo"}),(0,o.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,o.jsxs)(n.tbody,{children:[(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"code"}),(0,o.jsx)(n.td,{children:"entero largo"}),(0,o.jsx)(n.td,{children:"13"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"description"}),(0,o.jsx)(n.td,{children:"text"}),(0,o.jsx)(n.td,{children:'"On Double Clicked"'})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"objectName"}),(0,o.jsx)(n.td,{children:"text"}),(0,o.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"sheetName"}),(0,o.jsx)(n.td,{children:"text"}),(0,o.jsx)(n.td,{children:"Nombre de la hoja del evento"})]}),(0,o.jsxs)(n.tr,{children:[(0,o.jsx)(n.td,{children:"range"}),(0,o.jsx)(n.td,{children:"object"}),(0,o.jsx)(n.td,{children:"Rango de celdas"})]})]})]}),"\n",(0,o.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-4d",children:" If(FORM Event.code=On Double Clicked)\n   $value:=VP Get value(FORM Event.range)\n End if\n"})})]})}function h(e={}){let{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,n,r){r.d(n,{Z:function(){return c},a:function(){return d}});var s=r(667294);let o={},t=s.createContext(o);function d(e){let n=s.useContext(t);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:d(e.components),s.createElement(t.Provider,{value:n},e.children)}}}]);