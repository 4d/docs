"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["55645"],{726921:function(e,r,o){o.r(r),o.d(r,{default:()=>p,frontMatter:()=>d,metadata:()=>t,assets:()=>c,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"Events/onDrop","title":"On Drop","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Defini\xe7\xe3o                               |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/Events/onDrop.md","sourceDirName":"Events","slug":"/Events/onDrop","permalink":"/docs/pt/Events/onDrop","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDrop.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onDrop","title":"On Drop"},"sidebar":"docs","previous":{"title":"On Drag Over","permalink":"/docs/pt/Events/onDragOver"},"next":{"title":"On End URL Loading","permalink":"/docs/pt/Events/onEndUrlLoading"}}'),s=o("785893"),n=o("250065");let d={id:"onDrop",title:"On Drop"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let r={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(r.table,{children:[(0,s.jsx)(r.thead,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.th,{children:"Code"}),(0,s.jsx)(r.th,{children:"Pode ser chamado por"}),(0,s.jsx)(r.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(r.tbody,{children:(0,s.jsxs)(r.tr,{children:[(0,s.jsx)(r.td,{children:"16"}),(0,s.jsxs)(r.td,{children:[(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(r.a,{href:"/docs/pt/FormObjects/tabControl",children:"Tab control"})]}),(0,s.jsx)(r.td,{children:"Os dados foram lan\xe7ados sobre um objeto"})]})})]}),"\n",(0,s.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(r.p,{children:["El evento ",(0,s.jsx)(r.code,{children:"On Drop"})," se env\xeda una vez al objeto de destino cuando el puntero del rat\xf3n se mueve sobre el objeto. Esse evento \xe9 a segunda fase da opera\xe7\xe3o de arrastar e soltar, onde voc\xea executa uma opera\xe7\xe3o em resposta \xe0 a\xe7\xe3o do usu\xe1rio."]}),"\n",(0,s.jsxs)(r.p,{children:["Esse evento n\xe3o ser\xe1 enviado ao objeto se o arrasto n\xe3o tiver sido aceite durante os eventos [",(0,s.jsx)(r.code,{children:"On Drag Over"}),"] (onDragOver.md). Si se procesa el evento ",(0,s.jsx)(r.code,{children:"On Drag Over"})," para un objeto y se rechaza un arrastre, no se produce el evento ",(0,s.jsx)(r.code,{children:"On Drop"}),". As\xed, si durante el evento ",(0,s.jsx)(r.code,{children:"On Drag Over"})," se ha probado la compatibilidad de los tipos de datos entre los objetos origen y destino y se ha aceptado una posible ca\xedda, no es necesario volver a comprobar los datos durante el evento ",(0,s.jsx)(r.code,{children:"On Drop"}),". J\xe1 se sabe que os dados s\xe3o adequados para o objeto de destino."]}),"\n",(0,s.jsx)(r.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/docs/pt/Events/onBeginDragOver",children:(0,s.jsx)(r.code,{children:"On Begin Drag Over"})})})]})}function p(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return i},a:function(){return d}});var t=o(667294);let s={},n=t.createContext(s);function d(e){let r=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(n.Provider,{value:r},e.children)}}}]);