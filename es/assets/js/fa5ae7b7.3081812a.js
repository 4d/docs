"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["48704"],{29022:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>d,metadata:()=>s,assets:()=>l,toc:()=>t,contentTitle:()=>i});var s=JSON.parse('{"id":"Events/onClicked","title":"On Clicked","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         | Definici\xf3n                           |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Events/onClicked.md","sourceDirName":"Events","slug":"/Events/onClicked","permalink":"/docs/es/20-R7/Events/onClicked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonClicked.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onClicked","title":"On Clicked"},"sidebar":"docs","previous":{"title":"On Bound Variable Change","permalink":"/docs/es/20-R7/Events/onBoundVariableChange"},"next":{"title":"On Close Box","permalink":"/docs/es/20-R7/Events/onCloseBox"}}'),r=o("785893"),c=o("250065");let d={id:"onClicked",title:"On Clicked"},i=void 0,l={},t=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"On Clicked y On Double Clicked",id:"on-clicked-y-on-double-clicked",level:3},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Ejemplo",id:"ejemplo",level:4}];function a(e){let n={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,c.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Code"}),(0,r.jsx)(n.th,{children:"Puede ser llamado por"}),(0,r.jsx)(n.th,{children:"Definici\xf3n"})]})}),(0,r.jsx)(n.tbody,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"4"}),(0,r.jsxs)(n.td,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,r.jsx)(n.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/checkboxOverview",children:"Casilla de verificaci\xf3n"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - Formulario - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/inputOverview",children:"Entrada"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/listboxOverview",children:"Lista"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/listboxOverview#list-box-columns",children:"Columna de lista"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/pictureButtonOverview",children:"Bot\xf3n con imagen"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/picturePopupMenuOverview",children:"Men\xfa emergente con imagen"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/radiobuttonOverview",children:"Bot\xf3n de opci\xf3n"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/ruler",children:"Regla"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/spinner",children:"Selector"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/splitters",children:"Separador"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/stepper",children:"Pasos"})," - ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/tabControl",children:"Control de pesta\xf1as"})]}),(0,r.jsx)(n.td,{children:"Se ha producido un clic en un objeto"})]})})]}),"\n",(0,r.jsx)(n.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,r.jsxs)(n.p,{children:["El evento ",(0,r.jsx)(n.code,{children:"On Clicked"})," se genera cuando el usuario hace clic en un objeto."]}),"\n",(0,r.jsxs)(n.blockquote,{children:["\n",(0,r.jsxs)(n.p,{children:["Ciertos objetos de formulario pueden activarse con el teclado. Por ejemplo, una vez que una casilla de selecci\xf3n recibe el foco, se puede introducir con la barra espaciadora. En tal caso, se sigue generando el evento ",(0,r.jsx)(n.code,{children:"On Clicked"}),"."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["El evento ",(0,r.jsx)(n.code,{children:"On Clicked"})," suele producirse una vez que se suelta el bot\xf3n del rat\xf3n. Sin embargo, hay varias excepciones:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/propertiesDisplay#not-rendered",children:"Botones invisibles"}),": el evento ",(0,r.jsx)(n.code,{children:"On Clicked"})," se produce en cuanto se hace clic y no espera a que se suelte el bot\xf3n del rat\xf3n."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/ruler",children:"Reglas"}),": si la opci\xf3n de ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/propertiesAction#execute-object-method",children:"m\xe9todo de ejecuci\xf3n del objeto"})," se define en ",(0,r.jsx)(n.strong,{children:"true"}),", el evento ",(0,r.jsx)(n.code,{children:"On Clicked"})," se produce en cuanto se hace clic."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/comboBoxOverview",children:"Combo box"}),": el evento ",(0,r.jsx)(n.code,{children:"On Clicked"})," ocurre s\xf3lo si el usuario selecciona otro valor en el men\xfa asociado. Un ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/comboBoxOverview",children:"combo box"})," debe ser tratado como un \xe1rea de texto introducible cuya lista desplegable asociada ofrece valores por defecto. Por lo tanto, se maneja la entrada de datos dentro de un combo box a trav\xe9s de los eventos ",(0,r.jsx)(n.code,{children:"On Before Keystroke"}),", ",(0,r.jsx)(n.code,{children:"On After Keystroke"})," y ",(0,r.jsx)(n.code,{children:"On Data Change"}),"."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/dropdownListOverview",children:"Listas desplegables"}),": el evento ",(0,r.jsx)(n.code,{children:"On Clicked"})," ocurre s\xf3lo si el usuario selecciona otro valor en el men\xfa. El evento ",(0,r.jsx)(n.code,{children:"On Data Change"})," permite detectar la activaci\xf3n del objeto cuando se selecciona un valor diferente al actual"]}),"\n",(0,r.jsxs)(n.li,{children:["Cuando una celda de entrada del list box est\xe1 ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/FormObjects/listboxOverview#managing-entry",children:"siendo editada"}),", se genera el evento ",(0,r.jsx)(n.code,{children:"On Clicked"})," cuando se presiona el bot\xf3n del rat\xf3n, permitiendo utilizar el comando ",(0,r.jsx)(n.code,{children:"Contextual click"})," por ejemplo."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["En el contexto de un evento ",(0,r.jsx)(n.code,{children:"On Clicked"}),", se puede comprobar el n\xfamero de clics realizados por el usuario utilizando el comando ",(0,r.jsx)(n.code,{children:"Clickcount"}),"."]}),"\n",(0,r.jsx)(n.h3,{id:"on-clicked-y-on-double-clicked",children:"On Clicked y On Double Clicked"}),"\n",(0,r.jsxs)(n.p,{children:["Despu\xe9s de seleccionar la propiedad del evento de objeto ",(0,r.jsx)(n.code,{children:"On Clicked"})," o ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/Events/onDoubleClicked",children:(0,r.jsx)(n.code,{children:"On Double Clicked"})})," para un objeto, puede detectar y manejar los clics dentro o sobre el objeto, utilizando el comando de evento ",(0,r.jsx)(n.code,{children:"FORM"})," que devuelve ",(0,r.jsx)(n.code,{children:"On Clicked"})," o ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/Events/onDoubleClicked",children:(0,r.jsx)(n.code,{children:"On Double Clicked"})}),", dependiendo del caso."]}),"\n",(0,r.jsxs)(n.p,{children:["Si se seleccionan ambos eventos para un objeto, se generar\xe1 el evento ",(0,r.jsx)(n.code,{children:"On Clicked"})," y luego el evento ",(0,r.jsx)(n.code,{children:"On Double Clicked"})," cuando el usuario haga doble clic en el objeto."]}),"\n",(0,r.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,r.jsxs)(n.p,{children:["Este evento se genera cuando el usuario hace clic en cualquier parte en un documento 4D View Pro. En este contexto, el ",(0,r.jsx)(n.a,{href:"/docs/es/20-R7/Events/overview#event-object",children:"objeto evento"})," devuelto por el comando ",(0,r.jsx)(n.code,{children:"FORM Event"})," contiene:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,r.jsxs)(n.table,{children:[(0,r.jsx)(n.thead,{children:(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.th,{children:"Propiedad"}),(0,r.jsx)(n.th,{children:"Tipo"}),(0,r.jsx)(n.th,{children:"Descripci\xf3n"})]})}),(0,r.jsxs)(n.tbody,{children:[(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"code"}),(0,r.jsx)(n.td,{children:"entero largo"}),(0,r.jsx)(n.td,{children:"On Clicked"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"description"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:'"On Clicked"'})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"objectName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nombre del \xe1rea 4D View Pro"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"sheetName"}),(0,r.jsx)(n.td,{children:"text"}),(0,r.jsx)(n.td,{children:"Nombre de la hoja del evento"})]}),(0,r.jsxs)(n.tr,{children:[(0,r.jsx)(n.td,{children:"range"}),(0,r.jsx)(n.td,{children:"object"}),(0,r.jsx)(n.td,{children:"Rango de celdas"})]})]})]}),"\n",(0,r.jsx)(n.h4,{id:"ejemplo",children:"Ejemplo"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-4d",children:' If(FORM Event.code=On Clicked)\n    VP SET CELL STYLE(FORM Event.range;New object("backColor";"green"))\n End if\n'})})]})}function h(e={}){let{wrapper:n}={...(0,c.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return d}});var s=o(667294);let r={},c=s.createContext(r);function d(e){let n=s.useContext(c);return s.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:d(e.components),s.createElement(c.Provider,{value:n},e.children)}}}]);