"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["15569"],{379929:function(e,t,r){r.r(t),r.d(t,{default:()=>h,frontMatter:()=>s,metadata:()=>n,assets:()=>d,toc:()=>l,contentTitle:()=>c});var n=JSON.parse('{"id":"Events/onPrintingDetail","title":"On Printing Detail","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Defini\xe7\xe3o                                                    |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/Events/onPrintingDetail.md","sourceDirName":"Events","slug":"/Events/onPrintingDetail","permalink":"/docs/pt/Events/onPrintingDetail","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonPrintingDetail.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onPrintingDetail","title":"On Printing Detail"},"sidebar":"docs","previous":{"title":"On Printing Break","permalink":"/docs/pt/Events/onPrintingBreak"},"next":{"title":"On Printing Footer","permalink":"/docs/pt/Events/onPrintingFooter"}}'),o=r("785893"),i=r("250065");let s={id:"onPrintingDetail",title:"On Printing Detail"},c=void 0,d={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function a(e){let t={a:"a",blockquote:"blockquote",code:"code",h2:"h2",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.table,{children:[(0,o.jsx)(t.thead,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.th,{children:"Code"}),(0,o.jsx)(t.th,{children:"Pode ser chamado por"}),(0,o.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,o.jsx)(t.tbody,{children:(0,o.jsxs)(t.tr,{children:[(0,o.jsx)(t.td,{children:"23"}),(0,o.jsxs)(t.td,{children:[(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/splitters",children:"Splitter"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,o.jsx)(t.a,{href:"/docs/pt/FormObjects/tabControl",children:"Tab control"})]}),(0,o.jsx)(t.td,{children:"A \xe1rea de detalhes do formul\xe1rio est\xe1 prestes a ser impressa"})]})})]}),"\n",(0,o.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,o.jsxs)(t.p,{children:["El evento ",(0,o.jsx)(t.code,{children:"On Printing Detail"})," s\xf3lo puede utilizarse en el contexto de un ",(0,o.jsx)(t.strong,{children:"formulario de salida"}),". Se activa cuando el \xe1rea de detalle del formulario de salida est\xe1 a punto de imprimirse, por ejemplo tras una llamada al comando ",(0,o.jsx)(t.code,{children:"Print form"}),"."]}),"\n",(0,o.jsxs)(t.p,{children:["El comando ",(0,o.jsx)(t.code,{children:"Print form"})," genera s\xf3lo un evento ",(0,o.jsx)(t.code,{children:"On Printing Detail"})," para el m\xe9todo formulario."]}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["Este evento n\xe3o pode ser selecionado para formul\xe1rios projeto, est\xe1 dispon\xedvel apenas com ",(0,o.jsx)(t.strong,{children:"formul\xe1rios tabela"}),"."]}),"\n"]})]})}function h(e={}){let{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(a,{...e})}):a(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return s}});var n=r(667294);let o={},i=n.createContext(o);function s(e){let t=n.useContext(i);return n.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);