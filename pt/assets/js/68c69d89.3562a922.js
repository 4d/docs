"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["44345"],{210373:function(e,r,o){o.r(r),o.d(r,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>i,toc:()=>a,contentTitle:()=>c});var t=JSON.parse('{"id":"Events/onHeader","title":"On Header","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          | Defini\xe7\xe3o                                                                                 |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R9/Events/onHeader.md","sourceDirName":"Events","slug":"/Events/onHeader","permalink":"/docs/pt/Events/onHeader","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonHeader.md%20(20-R9)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R9","frontMatter":{"id":"onHeader","title":"On Header"},"sidebar":"docs","previous":{"title":"On getting focus","permalink":"/docs/pt/Events/onGettingFocus"},"next":{"title":"On Header Click","permalink":"/docs/pt/Events/onHeaderClick"}}'),n=o("785893"),s=o("250065");let d={id:"onHeader",title:"On Header"},c=void 0,i={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){let r={a:"a",blockquote:"blockquote",code:"code",h2:"h2",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(r.table,{children:[(0,n.jsx)(r.thead,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.th,{children:"Code"}),(0,n.jsx)(r.th,{children:"Pode ser chamado por"}),(0,n.jsx)(r.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(r.tbody,{children:(0,n.jsxs)(r.tr,{children:[(0,n.jsx)(r.td,{children:"5"}),(0,n.jsxs)(r.td,{children:[(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form (list form only) - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/splitters",children:"Splitter"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(r.a,{href:"/docs/pt/FormObjects/tabControl",children:"Tab control"})]}),(0,n.jsx)(r.td,{children:"A \xe1rea de cabe\xe7alho do formul\xe1rio est\xe1 prestes a ser impressa ou exibida."})]})})]}),"\n",(0,n.jsx)(r.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsxs)(r.p,{children:["El evento ",(0,n.jsx)(r.code,{children:"On Header"})," se llama cuando un registro est\xe1 a punto de ser visualizado en un formulario de lista que se muestra v\xeda ",(0,n.jsx)(r.code,{children:"DISPLAY SELECTION"})," y ",(0,n.jsx)(r.code,{children:"MODIFY SELECTION"}),"."]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Este evento n\xe3o pode ser selecionado para formul\xe1rios projeto, est\xe1 dispon\xedvel apenas com ",(0,n.jsx)(r.strong,{children:"formul\xe1rios tabela"}),"."]}),"\n"]}),"\n",(0,n.jsx)(r.p,{children:"Neste contexto, a seguinte sequ\xeancia de chamadas para os m\xe9todos e eventos de formul\xe1rio \xe9 ativada:"}),"\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["Para cada objecto na \xe1rea do cabe\xe7alho:\n",(0,n.jsxs)(r.ul,{children:["\n",(0,n.jsxs)(r.li,{children:["M\xe9todo objeto con el evento ",(0,n.jsx)(r.code,{children:"On Header"})]}),"\n",(0,n.jsxs)(r.li,{children:["M\xe9todo formulario con el evento ",(0,n.jsx)(r.code,{children:"On Header"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(r.blockquote,{children:["\n",(0,n.jsxs)(r.p,{children:["Os registros impressos s\xe3o tratados usando o evento ",(0,n.jsx)(r.a,{href:"/docs/pt/Events/onDisplayDetail",children:(0,n.jsx)(r.code,{children:"On Display Detail"})}),"."]}),"\n"]}),"\n",(0,n.jsxs)(r.p,{children:["Llamar a un comando 4D que muestra una caja de di\xe1logo desde el evento ",(0,n.jsx)(r.code,{children:"On Header"})," no est\xe1 permitido y provocar\xe1 un error de sintaxis. Mais especificamente, os comandos em quest\xe3o s\xe3o: ",(0,n.jsx)(r.code,{children:"ALERT"}),", ",(0,n.jsx)(r.code,{children:"DIALOG"}),", ",(0,n.jsx)(r.code,{children:"CONFIRM"}),", ",(0,n.jsx)(r.code,{children:"Request"}),", ",(0,n.jsx)(r.code,{children:"ADD RECORD"}),", ",(0,n.jsx)(r.code,{children:"MODIFY RECORD"}),", ",(0,n.jsx)(r.code,{children:"DISPLAY SELECTION"}),", and ",(0,n.jsx)(r.code,{children:"MODIFY SELECTION"}),"."]})]})}function h(e={}){let{wrapper:r}={...(0,s.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,r,o){o.d(r,{Z:function(){return c},a:function(){return d}});var t=o(667294);let n={},s=t.createContext(n);function d(e){let r=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(r):{...r,...e}},[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(s.Provider,{value:r},e.children)}}}]);