"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["67911"],{488769:function(e,r,s){s.r(r),s.d(r,{metadata:()=>o,contentTitle:()=>i,default:()=>h,assets:()=>d,toc:()=>l,frontMatter:()=>a});var o=JSON.parse('{"id":"Events/onDragOver","title":"On Drag Over","description":"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  | Definici\xf3n                              |","source":"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R6/Events/onDragOver.md","sourceDirName":"Events","slug":"/Events/onDragOver","permalink":"/docs/es/20-R6/Events/onDragOver","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDragOver.md%20(20-R6)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R6","frontMatter":{"id":"onDragOver","title":"On Drag Over"},"sidebar":"docs","previous":{"title":"On Double Clicked","permalink":"/docs/es/20-R6/Events/onDoubleClicked"},"next":{"title":"On Drop","permalink":"/docs/es/20-R6/Events/onDrop"}}'),n=s("785893"),t=s("250065");let a={id:"onDragOver",title:"On Drag Over"},i=void 0,d={},l=[{value:"Descripci\xf3n",id:"descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"ver-tambi\xe9n",level:4}];function c(e){let r={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Puede ser llamado por"}),(0,n.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"21"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/checkboxOverview",children:"Casilla de verificaci\xf3n"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/inputOverview",children:"Entrada"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/listboxOverview",children:"Lista"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/listboxOverview#list-box-columns",children:"Columna de lista"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/pictureButtonOverview",children:"Bot\xf3n con imagen"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/picturePopupMenuOverview",children:"Men\xfa emergente con imagen"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/progressIndicator",children:"Indicadores de progreso"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/radiobuttonOverview",children:"Bot\xf3n de opci\xf3n"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/ruler",children:"Regla"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/spinner",children:"Selector"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/splitters",children:"Separador"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/stepper",children:"Pasos"})," - ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/FormObjects/tabControl",children:"Control de pesta\xf1as"})]}),(0,n.jsx)(r.td,{children:"Los datos se pueden soltar en un objeto"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,n.jsxs)(r.p,{children:["El evento ",(0,n.jsx)(r.code,{children:"On Drag Over"})," se env\xeda repetidamente al objeto de destino cuando el puntero del rat\xf3n se mueve sobre el objeto. Normalmente, en respuesta a este evento:"]}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Obtenga los datos y las firmas que se encuentran en portapapeles (mediante el comando ",(0,n.jsx)(r.code,{children:"GET PASTEBOARD DATA"}),")."]}),"\n",(0,n.jsxs)(r.li,{children:["Seg\xfan la naturaleza y el tipo de datos en el portapapeles, se ",(0,n.jsx)(r.strong,{children:"acepta"})," o ",(0,n.jsx)(r.strong,{children:"rechaza"})," el arrastrar y soltar."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Para ",(0,n.jsx)(r.strong,{children:"aceptar"})," el arrastre, el m\xe9todo del objeto destino debe devolver 0 (cero), por lo que se escribe ",(0,n.jsx)(r.code,{children:"$0:=0"}),".\nPara ",(0,n.jsx)(r.strong,{children:"rechazar"})," el arrastre, el m\xe9todo del objeto debe devolver -1 (menos uno), por lo que se escribe ",(0,n.jsx)(r.code,{children:"$0:=-1"}),".\nDurante un evento ",(0,n.jsx)(r.code,{children:"On Drag Over"}),", 4D trata el m\xe9todo objeto como una funci\xf3n. Si no se devuelve ning\xfan resultado, 4D asume que el arrastre es aceptado."]}),"\n",(0,n.jsxs)(r.p,{children:["Si acepta el arrastre, el objeto de destino se resalta. Si rechaza el arrastre, el destino no se resalta. Aceptar el arrastre no significa que los datos arrastrados vayan a ser insertados en el objeto de destino. Esto solo significa que si se soltara el bot\xf3n del rat\xf3n en este punto, el objeto de destino aceptar\xeda los datos arrastrados y se disparar\xeda el evento ",(0,n.jsx)(r.a,{href:"/docs/es/20-R6/Events/onDrop",children:(0,n.jsx)(r.code,{children:"On Drop"})}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["Si no se procesa el evento ",(0,n.jsx)(r.code,{children:"On Drag Over"})," para un objeto soltable, ese objeto ser\xe1 resaltado para todas las operaciones de arrastre, sin importar la naturaleza y el tipo de los datos arrastrados."]}),"\n",(0,n.jsxs)(r.p,{children:["El evento ",(0,n.jsx)(r.code,{children:"On Drag Over"})," es el medio por el que se controla la primera fase de una operaci\xf3n de arrastrar y soltar. No s\xf3lo puede probar si los datos arrastrados son de un tipo compatible con el objeto de destino, y luego aceptar o rechazar el arrastre; puede notificar simult\xe1neamente al usuario de este hecho, porque 4D resalta (o no) el objeto de destino, bas\xe1ndose en su decisi\xf3n."]}),"\n",(0,n.jsxs)(r.p,{children:["El c\xf3digo que maneja un evento ",(0,n.jsx)(r.code,{children:"On Drag Over"})," debe ser corto y ejecutarse r\xe1pidamente, porque ese evento se env\xeda repetidamente al objeto de destino actual, debido a los movimientos del rat\xf3n."]}),"\n",(0,n.jsx)(r.h4,{id:"ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.a,{href:"/docs/es/20-R6/Events/onBeginDragOver",children:(0,n.jsx)(r.code,{children:"On Begin Drag Over"})})})]})}function h(e={}){let{wrapper:r}={...(0,t.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},250065:function(e,r,s){s.d(r,{Z:function(){return i},a:function(){return a}});var o=s(667294);let n={},t=o.createContext(n);function a(e){let r=o.useContext(t);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);