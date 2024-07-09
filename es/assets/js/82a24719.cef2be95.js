/*! For license information please see 82a24719.cef2be95.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62809],{906860:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>i,contentTitle:()=>a,default:()=>h,frontMatter:()=>t,metadata:()=>d,toc:()=>l});var o=s(474848),n=s(28453);const t={id:"onDragOver",title:"On Drag Over"},a=void 0,d={id:"Events/onDragOver",title:"On Drag Over",description:"| Code | Puede ser llamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Definici\xf3n                              |",source:"@site/i18n/es/docusaurus-plugin-content-docs/version-20-R4/Events/onDragOver.md",sourceDirName:"Events",slug:"/Events/onDragOver",permalink:"/docs/es/20-R4/Events/onDragOver",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDragOver.md%20(20-R4)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R4",frontMatter:{id:"onDragOver",title:"On Drag Over"},sidebar:"docs",previous:{title:"On Double Clicked",permalink:"/docs/es/20-R4/Events/onDoubleClicked"},next:{title:"On Drop",permalink:"/docs/es/20-R4/Events/onDrop"}},i={},l=[{value:"Descripci\xf3n",id:"Descripci\xf3n",level:2},{value:"Ver tambi\xe9n",id:"Ver-tambi\xe9n",level:4}];function c(e){const r={a:"a",code:"code",h2:"h2",h4:"h4",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Puede ser llamado por"}),(0,o.jsx)(r.th,{children:"Definici\xf3n"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"21"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/buttonOverview",children:"Bot\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/buttonGridOverview",children:"Rejilla de botones"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/checkboxOverview",children:"Casilla de selecci\xf3n"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/dropdownListOverview",children:"Lista desplegable"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/listOverview#overview",children:"Lista jer\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/inputOverview",children:"\xc1rea de entrada"})," -",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/listboxOverview",children:"List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/listboxOverview#list-box-columns",children:"Columna de List Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/pictureButtonOverview",children:"Bot\xf3n imagen"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/picturePopupMenuOverview",children:"Imagen del men\xfa emergente"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/progressIndicator",children:"Indicador de progreso"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/radiobuttonOverview",children:"Bot\xf3n radio"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/ruler",children:"Regla"})," -",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/FormObjects/tabControl",children:"Pesta\xf1a"})]}),(0,o.jsx)(r.td,{children:"Los datos se pueden soltar en un objeto"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"Descripci\xf3n",children:"Descripci\xf3n"}),"\n",(0,o.jsxs)(r.p,{children:["El evento ",(0,o.jsx)(r.code,{children:"On Drag Over"})," se env\xeda repetidamente al objeto de destino cuando el puntero del rat\xf3n se mueve sobre el objeto. Normalmente, en respuesta a este evento:"]}),"\n",(0,o.jsxs)(r.ul,{children:["\n",(0,o.jsxs)(r.li,{children:["Obtenga los datos y las firmas que se encuentran en portapapeles (mediante el comando ",(0,o.jsx)(r.code,{children:"GET PASTEBOARD DATA"}),")."]}),"\n",(0,o.jsxs)(r.li,{children:["Seg\xfan la naturaleza y el tipo de datos en el portapapeles, se ",(0,o.jsx)(r.strong,{children:"acepta"})," o ",(0,o.jsx)(r.strong,{children:"rechaza"})," el arrastrar y soltar."]}),"\n"]}),"\n",(0,o.jsxs)(r.p,{children:["Para ",(0,o.jsx)(r.strong,{children:"aceptar"})," el arrastre, el m\xe9todo del objeto destino debe devolver 0 (cero), por lo que se escribe ",(0,o.jsx)(r.code,{children:"$0:=0"}),". Para ",(0,o.jsx)(r.strong,{children:"rechazar"})," el arrastre, el m\xe9todo del objeto debe devolver -1 (menos uno), por lo que se escribe ",(0,o.jsx)(r.code,{children:"$0:=-1"}),". Durante un evento ",(0,o.jsx)(r.code,{children:"On Drag Over"}),", 4D trata el m\xe9todo objeto como una funci\xf3n. Si no se devuelve ning\xfan resultado, 4D asume que el arrastre es aceptado."]}),"\n",(0,o.jsxs)(r.p,{children:["Si acepta el arrastre, el objeto de destino se resalta. Si rechaza el arrastre, el destino no se resalta. Aceptar el arrastre no significa que los datos arrastrados vayan a ser insertados en el objeto de destino. Esto s\xf3lo significa que si se soltara el bot\xf3n del rat\xf3n en este punto, el objeto de destino aceptar\xeda los datos arrastrados y se disparar\xeda el evento ",(0,o.jsx)(r.a,{href:"/docs/es/20-R4/Events/onDrop",children:(0,o.jsx)(r.code,{children:"On Drop"})}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["Si no se procesa el evento ",(0,o.jsx)(r.code,{children:"On Drag Over"})," para un objeto soltable, ese objeto ser\xe1 resaltado para todas las operaciones de arrastre, sin importar la naturaleza y el tipo de los datos arrastrados."]}),"\n",(0,o.jsxs)(r.p,{children:["El evento ",(0,o.jsx)(r.code,{children:"On Drag Over"})," es el medio por el que se controla la primera fase de una operaci\xf3n de arrastrar y soltar. No s\xf3lo puede probar si los datos arrastrados son de un tipo compatible con el objeto de destino, y luego aceptar o rechazar el arrastre; puede notificar simult\xe1neamente al usuario de este hecho, porque 4D resalta (o no) el objeto de destino, bas\xe1ndose en su decisi\xf3n."]}),"\n",(0,o.jsxs)(r.p,{children:["El c\xf3digo que maneja un evento ",(0,o.jsx)(r.code,{children:"On Drag Over"})," debe ser corto y ejecutarse r\xe1pidamente, porque ese evento se env\xeda repetidamente al objeto de destino actual, debido a los movimientos del rat\xf3n."]}),"\n",(0,o.jsx)(r.h4,{id:"Ver-tambi\xe9n",children:"Ver tambi\xe9n"}),"\n",(0,o.jsx)(r.p,{children:(0,o.jsx)(r.a,{href:"/docs/es/20-R4/Events/onBeginDragOver",children:(0,o.jsx)(r.code,{children:"On Begin Drag Over"})})})]})}function h(e={}){const{wrapper:r}={...(0,n.R)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(c,{...e})}):c(e)}},221020:(e,r,s)=>{var o=s(296540),n=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,d=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,s){var o,t={},l=null,c=null;for(o in void 0!==s&&(l=""+s),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)a.call(r,o)&&!i.hasOwnProperty(o)&&(t[o]=r[o]);if(e&&e.defaultProps)for(o in r=e.defaultProps)void 0===t[o]&&(t[o]=r[o]);return{$$typeof:n,type:e,key:l,ref:c,props:t,_owner:d.current}}r.Fragment=t,r.jsx=l,r.jsxs=l},474848:(e,r,s)=>{e.exports=s(221020)},28453:(e,r,s)=>{s.d(r,{R:()=>a,x:()=>d});var o=s(296540);const n={},t=o.createContext(n);function a(e){const r=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),o.createElement(t.Provider,{value:r},e.children)}}}]);