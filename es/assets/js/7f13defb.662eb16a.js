"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["69841"],{100249:function(e,r,s){s.r(r),s.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>d,contentTitle:()=>a});var n=JSON.parse('{"id":"Events/onBeginDragOver","title":"On Begin Drag Over","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                           | Definici\xf3n                    |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R7/Events/onBeginDragOver.md","sourceDirName":"Events","slug":"/Events/onBeginDragOver","permalink":"/docs/es/20-R7/Events/onBeginDragOver","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonBeginDragOver.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onBeginDragOver","title":"On Begin Drag Over"},"sidebar":"docs","previous":{"title":"On Before Keystroke","permalink":"/docs/es/20-R7/Events/onBeforeKeystroke"},"next":{"title":"On Begin URL Loading","permalink":"/docs/es/20-R7/Events/onBeginUrlLoading"}}'),o=s("785893"),t=s("250065");let i={id:"onBeginDragOver",title:"On Begin Drag Over"},a=void 0,c={},d=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Puede ser llamado por"}),(0,o.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"17"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(r.td,{children:"Se est\xe1 arrastrando un objeto"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["El evento de formulario ",(0,o.jsx)(r.code,{children:"On Begin Drag Over"})," puede ser seleccionado para todos los objetos formulario que puedan ser arrastrados. Se genera en todos los casos en que el objeto tiene la propiedad ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/FormObjects/propertiesAction#draggable",children:"Draggable"}),". Se puede llamar desde el m\xe9todo del objeto fuente o desde el m\xe9todo formulario del objeto fuente."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["A diferencia del evento de formulario ",(0,o.jsx)(r.a,{href:"/docs/es/20-R7/Events/onDragOver",children:(0,o.jsx)(r.code,{children:"On Drag Over"})}),", ",(0,o.jsx)(r.code,{children:"On Begin Drag Over"})," se llama dentro del contexto del ",(0,o.jsx)(r.strong,{children:"objeto fuente"})," de la acci\xf3n arrastrar."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["El evento ",(0,o.jsx)(r.code,{children:"On Begin Drag Over"})," es \xfatil para preparar la acci\xf3n de arrastrar. Puede utilizarse para:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["A\xf1adir los datos y las firmas al portapapeles (v\xeda el comando ",(0,o.jsx)(r.code,{children:"APPEND DATA TO PASTEBOARD"}),")."]}),"\n",(0,o.jsxs)(r.li,{children:["Utilizar un icono personalizado durante la acci\xf3n de arrastre (v\xeda el comando ",(0,o.jsx)(r.code,{children:"SET DRAG ICON"}),")."]}),"\n",(0,o.jsxs)(r.li,{children:["Accept or refuse dragging via the result of the method of the dragged object.\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsx)(r.li,{children:"Para indicar que las acciones de arrastre son aceptadas, el m\xe9todo del objeto fuente debe devolver 0 (cero)."}),"\n",(0,o.jsx)(r.li,{children:"To indicate that drag actions are refused, the method of the source object must return -1 (minus one)."}),"\n",(0,o.jsx)(r.li,{children:"Si no se devuelve ning\xfan resultado, 4D considera que las acciones de arrastre son aceptadas."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Los datos 4D se colocan en el portapapeles antes de llamar al evento. Por ejemplo, en el caso de arrastrar sin la acci\xf3n ",(0,o.jsx)(r.strong,{children:"Arrastre autom\xe1tico"}),", el texto arrastrado ya est\xe1 en portapapeles cuando se llama al evento."]})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return a},a:function(){return i}});var n=s(667294);let o={},t=n.createContext(o);function i(e){let r=n.useContext(t);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function a(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(t.Provider,{value:r},e.children)}}}]);