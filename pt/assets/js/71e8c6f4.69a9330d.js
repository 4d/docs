"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["86233"],{986012:function(e,n,o){o.r(n),o.d(n,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"Events/onDoubleClicked","title":"On Double Clicked","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Defini\xe7\xe3o                          |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/Events/onDoubleClicked.md","sourceDirName":"Events","slug":"/Events/onDoubleClicked","permalink":"/docs/pt/Events/onDoubleClicked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDoubleClicked.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onDoubleClicked","title":"On Double Clicked"},"sidebar":"docs","previous":{"title":"On Display Detail","permalink":"/docs/pt/Events/onDisplayDetail"},"next":{"title":"On Drag Over","permalink":"/docs/pt/Events/onDragOver"}}'),t=o("785893"),d=o("250065");let s={id:"onDoubleClicked",title:"On Double Clicked"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Exemplo",id:"exemplo",level:4}];function a(e){let n={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Code"}),(0,t.jsx)(n.th,{children:"Pode ser chamado por"}),(0,t.jsx)(n.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(n.tbody,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"13"}),(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - Form - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(n.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})]}),(0,t.jsx)(n.td,{children:"Ocorreu um duplo clique num objeto"})]})})]}),"\n",(0,t.jsx)(n.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(n.p,{children:["O evento ",(0,t.jsx)(n.code,{children:"On Double Clicked"})," \xe9 gerado quando o usu\xe1rio faz duplo clique em um objeto. O per\xedodo m\xe1ximo de tempo que separa um duplo clique \xe9 definido nas prefer\xeancias do sistema."]}),"\n",(0,t.jsxs)(n.p,{children:["Se a propriedade do evento de objeto ",(0,t.jsx)(n.a,{href:"/docs/pt/Events/onClicked",children:(0,t.jsx)(n.code,{children:"On Clicked"})})," ou ",(0,t.jsx)(n.code,{children:"On Double Clicked"})," for selecionada para um objeto, voc\xea pode detectar e lidar com os cliques dentro ou no objeto, usando o comando ",(0,t.jsx)(n.code,{children:"FORM event"})," que retorna ",(0,t.jsx)(n.a,{href:"/docs/pt/Events/onClicked",children:(0,t.jsx)(n.code,{children:"On Clicked"})})," ou ",(0,t.jsx)(n.code,{children:"On Double Clicked"}),", dependendo do caso."]}),"\n",(0,t.jsxs)(n.p,{children:["Si se seleccionan ambos eventos para un objeto, se generar\xe1 el evento ",(0,t.jsx)(n.code,{children:"On Clicked"})," y luego el evento ",(0,t.jsx)(n.code,{children:"On Double Clicked"})," cuando el usuario haga doble clic en el objeto."]}),"\n",(0,t.jsx)(n.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,t.jsxs)(n.p,{children:["Este evento \xe9 gerado quando o usu\xe1rio faz clique duplo em qualquer lugar em um documento 4D View Pro. En este contexto, el ",(0,t.jsx)(n.a,{href:"/docs/pt/Events/overview#event-object",children:"objeto evento"})," devuelto por el comando ",(0,t.jsx)(n.code,{children:"FORM Event"})," contiene:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Propriedade"}),(0,t.jsx)(n.th,{children:"Tipo"}),(0,t.jsx)(n.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"code"}),(0,t.jsx)(n.td,{children:"inteiro longo"}),(0,t.jsx)(n.td,{children:"13"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"description"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:'"On Double Clicked"'})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"objectName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nome da \xe1rea 4D View Pro"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"sheetName"}),(0,t.jsx)(n.td,{children:"text"}),(0,t.jsx)(n.td,{children:"Nome da folha do evento"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"range"}),(0,t.jsx)(n.td,{children:"object"}),(0,t.jsx)(n.td,{children:"Intervalo de c\xe9lulas"})]})]})]}),"\n",(0,t.jsx)(n.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-4d",children:" If(FORM Event.code=On Double Clicked)\n   $value:=VP Get value(FORM Event.range)\n End if\n"})})]})}function h(e={}){let{wrapper:n}={...(0,d.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,n,o){o.d(n,{Z:function(){return i},a:function(){return s}});var r=o(667294);let t={},d=r.createContext(t);function s(e){let n=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(n):{...n,...e}},[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(d.Provider,{value:n},e.children)}}}]);