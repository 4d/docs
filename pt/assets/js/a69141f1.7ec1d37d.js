"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["14709"],{122029:function(e,r,t){t.r(r),t.d(r,{default:()=>h,frontMatter:()=>i,metadata:()=>n,assets:()=>c,toc:()=>a,contentTitle:()=>d});var n=JSON.parse('{"id":"Events/onPrintingDetail","title":"On Printing Detail","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Defini\xe7\xe3o                                                    |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onPrintingDetail.md","sourceDirName":"Events","slug":"/Events/onPrintingDetail","permalink":"/docs/pt/20/Events/onPrintingDetail","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPrintingDetail.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onPrintingDetail","title":"On Printing Detail"},"sidebar":"docs","previous":{"title":"On Printing Break","permalink":"/docs/pt/20/Events/onPrintingBreak"},"next":{"title":"On Printing Footer","permalink":"/docs/pt/20/Events/onPrintingFooter"}}'),o=t("785893"),s=t("250065");let i={id:"onPrintingDetail",title:"On Printing Detail"},d=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(r.table,{children:[(0,o.jsx)(r.thead,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.th,{children:"Code"}),(0,o.jsx)(r.th,{children:"Pode ser chamado por"}),(0,o.jsx)(r.th,{children:"Defini\xe7\xe3o"})]})}),(0,o.jsx)(r.tbody,{children:(0,o.jsxs)(r.tr,{children:[(0,o.jsx)(r.td,{children:"23"}),(0,o.jsxs)(r.td,{children:[(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/writeProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/buttonGridOverview",children:"Grelha de bot\xf5es"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview",children:"Lista suspensa"})," - Formul\xe1rio - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/listOverview",children:"Lista hier\xe1rquica"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"\xc1rea de entrada"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/pictureButtonOverview",children:"Bot\xe3o imagem"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/picturePopupMenuOverview",children:"Imagen del men\xfa emergente"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/pluginAreaOverview",children:"\xc1rea de plug-in"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/progressIndicator",children:"Indicador de progresso"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/radiobuttonOverview",children:"Bot\xe3o raio"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/ruler",children:"Regra"})," -",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(r.a,{href:"/docs/pt/20/FormObjects/tabControl",children:"Tab"})]}),(0,o.jsx)(r.td,{children:"A \xe1rea de detalhes do formul\xe1rio est\xe1 prestes a ser impressa"})]})})]}),"\n",(0,o.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(r.p,{children:["O evento ",(0,o.jsx)(r.code,{children:"On Printing Detail"})," s\xf3 pode ser usado no contexto de um ",(0,o.jsx)(r.strong,{children:"formul\xe1rio de sa\xedda"}),". Ele \xe9 acionado quando a \xe1rea de detalhe que o formul\xe1rio de sa\xedda est\xe1 prestes a ser impresso, por exemplo, seguindo uma chamada para o comando ",(0,o.jsx)(r.code,{children:"Print form"}),"."]}),"\n",(0,o.jsxs)(r.p,{children:["O comando ",(0,o.jsx)(r.code,{children:"Print form"})," gera apenas um evento ",(0,o.jsx)(r.code,{children:"On Printing Detail"})," para o m\xe9todo formul\xe1rio."]}),"\n",(0,o.jsxs)(r.blockquote,{children:["\n",(0,o.jsxs)(r.p,{children:["Este evento n\xe3o pode ser selecionado para formul\xe1rios projeto, est\xe1 dispon\xedvel apenas com ",(0,o.jsx)(r.strong,{children:"formul\xe1rios tabela"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,o.jsx)(r,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},250065:function(e,r,t){t.d(r,{Z:function(){return d},a:function(){return i}});var n=t(667294);let o={},s=n.createContext(o);function i(e){let r=n.useContext(s);return n.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:i(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);