"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90688],{502991:(e,o,r)=>{r.r(o),r.d(o,{assets:()=>c,contentTitle:()=>d,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>a});var t=r(474848),n=r(28453);const s={id:"onDrop",title:"On Drop"},d=void 0,i={id:"Events/onDrop",title:"On Drop",description:"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Defini\xe7\xe3o                                |",source:"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R6/Events/onDrop.md",sourceDirName:"Events",slug:"/Events/onDrop",permalink:"/docs/pt/Events/onDrop",draft:!1,unlisted:!1,editUrl:"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDrop.md%20(20-R6)&body=Please%20enter%20your%20comment%3A",tags:[],version:"20-R6",frontMatter:{id:"onDrop",title:"On Drop"},sidebar:"docs",previous:{title:"On Drag Over",permalink:"/docs/pt/Events/onDragOver"},next:{title:"On End URL Loading",permalink:"/docs/pt/Events/onEndUrlLoading"}},c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){const o={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"16"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - [Lista Dropdown](FormObjects/dropdownList_Overview. d) - Formul\xe1rio - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/listOverview#overview",children:"Lista Hier\xe1rquica"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(o.a,{href:"FormObjects/listObjects/listbox_overview.md",children:"Caixa de lista"})," - [Coluna de caixa de lista](FormObjects/listbox_overview. d#list-box-columns) - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Bot\xe3o de imagens"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Menu de imagens pop-up"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - [Indicadores de progresso](FormObjects/progressIndicador. d) - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Bot\xe3o de R\xe1dio"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/FormObjects/tabControl",children:"Controle de tabula\xe7\xe3o"})]}),(0,t.jsx)(o.td,{children:"Os dados foram lan\xe7ados sobre um objecto"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["El evento ",(0,t.jsx)(o.code,{children:"On Drop"})," se env\xeda una vez al objeto de destino cuando el puntero del rat\xf3n se mueve sobre el objeto. This event is the second phase of the drag-and-drop operation, in which you perform an operation in response to the user action."]}),"\n",(0,t.jsxs)(o.p,{children:["Esse evento n\xe3o ser\xe1 enviado ao objeto se o arrasto n\xe3o tiver sido aceite durante os eventos [",(0,t.jsx)(o.code,{children:"On Drag Over"}),"] (onDragOver.md). Si se procesa el evento ",(0,t.jsx)(o.code,{children:"On Drag Over"})," para un objeto y se rechaza un arrastre, no se produce el evento ",(0,t.jsx)(o.code,{children:"On Drop"}),". As\xed, si durante el evento ",(0,t.jsx)(o.code,{children:"On Drag Over"})," se ha probado la compatibilidad de los tipos de datos entre los objetos origen y destino y se ha aceptado una posible ca\xedda, no es necesario volver a comprobar los datos durante el evento ",(0,t.jsx)(o.code,{children:"On Drop"}),". J\xe1 se sabe que os dados s\xe3o adequados para o objeto de destino."]}),"\n",(0,t.jsx)(o.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"/docs/pt/Events/onBeginDragOver",children:(0,t.jsx)(o.code,{children:"On Begin Drag Over"})})})]})}function p(e={}){const{wrapper:o}={...(0,n.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},28453:(e,o,r)=>{r.d(o,{R:()=>d,x:()=>i});var t=r(296540);const n={},s=t.createContext(n);function d(e){const o=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);