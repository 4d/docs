"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["58415"],{892423:function(e,r,o){o.r(r),o.d(r,{metadata:()=>s,contentTitle:()=>i,default:()=>h,assets:()=>c,toc:()=>a,frontMatter:()=>d});var s=JSON.parse('{"id":"Events/onHeader","title":"On Header","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                 | Defini\xe7\xe3o                                                                                 |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onHeader.md","sourceDirName":"Events","slug":"/Events/onHeader","permalink":"/docs/pt/Events/onHeader","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonHeader.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onHeader","title":"On Header"},"sidebar":"docs","previous":{"title":"On getting focus","permalink":"/docs/pt/Events/onGettingFocus"},"next":{"title":"On Header Click","permalink":"/docs/pt/Events/onHeaderClick"}}'),t=o("785893"),n=o("250065");let d={id:"onHeader",title:"On Header"},i=void 0,c={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.table,{children:[(0,t.jsx)(r.thead,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.th,{children:"Code"}),(0,t.jsx)(r.th,{children:"Pode ser chamado por"}),(0,t.jsx)(r.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(r.tbody,{children:(0,t.jsxs)(r.tr,{children:[(0,t.jsx)(r.td,{children:"5"}),(0,t.jsxs)(r.td,{children:[(0,t.jsx)(r.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Grade de bot\xf5es"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Lista suspensa"})," - Formul\xe1rio (somente formul\xe1rio listado) - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview#overview",children:"Lista hier\xe1rquica"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Entrada"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Bot\xe3o com imagem"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Menu pop-up com imagem"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Indicadores de progresso"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Bot\xe3o de op\xe7\xe3o"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/ruler",children:"Regra"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/spinner",children:"Seletor"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/splitters",children:"Separador"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/stepper",children:"Etapas"})," - ",(0,t.jsx)(r.a,{href:"/docs/pt/FormObjects/tabControl",children:"Controle de tabula\xe7\xe3o"})]}),(0,t.jsx)(r.td,{children:"A \xe1rea de cabe\xe7alho do formul\xe1rio est\xe1 prestes a ser impressa ou exibida."})]})})]}),"\n",(0,t.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(r.p,{children:["El evento ",(0,t.jsx)(r.code,{children:"On Header"})," se llama cuando un registro est\xe1 a punto de ser visualizado en un formulario de lista que se muestra v\xeda ",(0,t.jsx)(r.code,{children:"DISPLAY SELECTION"})," y ",(0,t.jsx)(r.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Este evento n\xe3o pode ser selecionado para formul\xe1rios projeto, est\xe1 dispon\xedvel apenas com ",(0,t.jsx)(r.strong,{children:"formul\xe1rios tabela"}),"."]}),"\n"]}),"\n",(0,t.jsx)(r.p,{children:"In this context, the following sequence of calls to methods and form events is triggered:"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Para cada objecto na \xe1rea do cabe\xe7alho:\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["M\xe9todo objeto con el evento ",(0,t.jsx)(r.code,{children:"On Header"})]}),"\n",(0,t.jsxs)(r.li,{children:["M\xe9todo formulario con el evento ",(0,t.jsx)(r.code,{children:"On Header"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(r.blockquote,{children:["\n",(0,t.jsxs)(r.p,{children:["Os registros impressos s\xe3o tratados usando o evento ",(0,t.jsx)(r.a,{href:"/docs/pt/Events/onDisplayDetail",children:(0,t.jsx)(r.code,{children:"On Display Detail"})}),"."]}),"\n"]}),"\n",(0,t.jsxs)(r.p,{children:["Llamar a un comando 4D que muestra una caja de di\xe1logo desde el evento ",(0,t.jsx)(r.code,{children:"On Header"})," no est\xe1 permitido y provocar\xe1 un error de sintaxis. Mais especificamente, os comandos em quest\xe3o s\xe3o: ",(0,t.jsx)(r.code,{children:"ALERT"}),", ",(0,t.jsx)(r.code,{children:"DIALOG"}),", ",(0,t.jsx)(r.code,{children:"CONFIRM"}),", ",(0,t.jsx)(r.code,{children:"Request"}),", ",(0,t.jsx)(r.code,{children:"ADD RECORD"}),", ",(0,t.jsx)(r.code,{children:"MODIFY RECORD"}),", ",(0,t.jsx)(r.code,{children:"DISPLAY SELECTION"}),", and ",(0,t.jsx)(r.code,{children:"MODIFY SELECTION"}),"."]})]})}function h(e={}){let{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return i},a:function(){return d}});var s=o(667294);let t={},n=s.createContext(t);function d(e){let r=s.useContext(n);return s.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:d(e.components),s.createElement(n.Provider,{value:r},e.children)}}}]);