"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["7031"],{866344:function(e,o,r){r.r(o),r.d(o,{default:()=>p,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"Events/onDrop","title":"On Drop","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Defini\xe7\xe3o                               |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onDrop.md","sourceDirName":"Events","slug":"/Events/onDrop","permalink":"/docs/pt/19/Events/onDrop","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDrop.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onDrop","title":"On Drop"},"sidebar":"docs","previous":{"title":"On Drag Over","permalink":"/docs/pt/19/Events/onDragOver"},"next":{"title":"On End URL Loading","permalink":"/docs/pt/19/Events/onEndUrlLoading"}}'),s=r("785893"),n=r("250065");let d={id:"onDrop",title:"On Drop"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:4}];function l(e){let o={a:"a",code:"code",h2:"h2",h4:"h4",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Code"}),(0,s.jsx)(o.th,{children:"Pode ser chamado por"}),(0,s.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"16"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonGridOverview",children:"Grelha de bot\xf5es"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/dropdownListOverview",children:"Lista suspensa"})," - Formul\xe1rio - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listOverview",children:"Lista hier\xe1rquica"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," -",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"Coluna de List Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Bot\xe3o imagem"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Imagen del men\xfa emergente"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pluginAreaOverview",children:"\xc1rea de plug-in"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/progressIndicator",children:"Indicador de progresso"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"Bot\xe3o de raio"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/ruler",children:"Regua"})," -",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/tabControl",children:"Tab"})]}),(0,s.jsx)(o.td,{children:"Os dados foram lan\xe7ados sobre um objeto"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O evento ",(0,s.jsx)(o.code,{children:"On Drop"})," \xe9 enviado uma vez para o objeto de destino quando o ponteiro do mouse \xe9 liberado sobre o objeto. Esse evento \xe9 a segunda fase da opera\xe7\xe3o de arrastar e soltar, onde voc\xea executa uma opera\xe7\xe3o em resposta \xe0 a\xe7\xe3o do usu\xe1rio."]}),"\n",(0,s.jsxs)(o.p,{children:["Este evento n\xe3o \xe9 enviado para o objeto se o arrastar n\xe3o foi aceite durante os eventos ",(0,s.jsx)(o.a,{href:"/docs/pt/19/Events/onDragOver",children:(0,s.jsx)(o.code,{children:"On Drag Over"})}),". Se voc\xea processar o evento ",(0,s.jsx)(o.code,{children:"On Drag Over"})," para um objeto e rejeitar um arraste, o evento ",(0,s.jsx)(o.code,{children:"On Drop"})," n\xe3o ocorre. Assim, se durante o evento ",(0,s.jsx)(o.code,{children:"On Drag over"})," voc\xea testou a compatibilidade do tipo de dados entre os objetos de origem e de destino e aceitou um poss\xedvel drop, voc\xea n\xe3o precisa re-testar os dados durante o ",(0,s.jsx)(o.code,{children:"On Drop"}),". J\xe1 se sabe que os dados s\xe3o adequados para o objeto de destino."]}),"\n",(0,s.jsx)(o.h4,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/19/Events/onBeginDragOver",children:(0,s.jsx)(o.code,{children:"On Begin Drag Over"})})})]})}function p(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},n=t.createContext(s);function d(e){let o=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);