"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["53798"],{487880:function(e,r,t){t.r(r),t.d(r,{metadata:()=>o,contentTitle:()=>c,default:()=>h,assets:()=>a,toc:()=>d,frontMatter:()=>i});var o=JSON.parse('{"id":"Events/onPrintingBreak","title":"On Printing Break","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Defini\xe7\xe3o                                                              |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onPrintingBreak.md","sourceDirName":"Events","slug":"/Events/onPrintingBreak","permalink":"/docs/pt/Events/onPrintingBreak","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPrintingBreak.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onPrintingBreak","title":"On Printing Break"},"sidebar":"docs","previous":{"title":"On Plug in Area","permalink":"/docs/pt/Events/onPlugInArea"},"next":{"title":"On Printing Detail","permalink":"/docs/pt/Events/onPrintingDetail"}}'),n=t("785893"),s=t("250065");let i={id:"onPrintingBreak",title:"On Printing Break"},c=void 0,a={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Pode ser chamado por"}),(0,n.jsx)(r.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"6"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Grade de bot\xf5es"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Lista suspensa"})," - Formul\xe1rio - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview",children:"Lista hier\xe1rquica"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Entrada"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Bot\xe3o com imagem"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Menu pop-up com imagem"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Indicadores de progresso"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Bot\xe3o de op\xe7\xe3o"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/ruler",children:"Regra"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/spinner",children:"Seletor"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/splitters",children:"Separador"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/stepper",children:"Etapas"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/tabControl",children:"Controle de tabula\xe7\xe3o"})]}),(0,n.jsx)(r.td,{children:"Uma das \xe1reas de interrup\xe7\xe3o do formul\xe1rio est\xe1 prestes a ser impressa"})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["O evento ",(0,n.jsx)(r.code,{children:"On Printing Break"})," s\xf3 pode ser usado no contexto de um ",(0,n.jsx)(r.strong,{children:"formul\xe1rio de sa\xedda"}),". It is triggered each time a break area in the output form is about to be printed, so that you can evaluate the break values, for example."]}),"\n",(0,n.jsxs)(r.p,{children:["Este evento geralmente segue uma chamada para o comando ",(0,n.jsx)(r.code,{children:"Subtotal"}),"."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Este evento n\xe3o pode ser selecionado para formul\xe1rios projeto, est\xe1 dispon\xedvel apenas com ",(0,n.jsx)(r.strong,{children:"formul\xe1rios tabela"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return c},a:function(){return i}});var o=t(667294);let n={},s=o.createContext(n);function i(e){let r=o.useContext(s);return o.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),o.createElement(s.Provider,{value:r},e.children)}}}]);