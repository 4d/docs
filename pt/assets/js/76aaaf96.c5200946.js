"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["93231"],{224775:function(e,o,n){n.r(o),n.d(o,{default:()=>h,frontMatter:()=>s,metadata:()=>r,assets:()=>c,toc:()=>l,contentTitle:()=>i});var r=JSON.parse('{"id":"Events/onDoubleClicked","title":"On Double Clicked","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                    | Defini\xe7\xe3o                          |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onDoubleClicked.md","sourceDirName":"Events","slug":"/Events/onDoubleClicked","permalink":"/docs/pt/19/Events/onDoubleClicked","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonDoubleClicked.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onDoubleClicked","title":"On Double Clicked"},"sidebar":"docs","previous":{"title":"On Display Detail","permalink":"/docs/pt/19/Events/onDisplayDetail"},"next":{"title":"On Drag Over","permalink":"/docs/pt/19/Events/onDragOver"}}'),t=n("785893"),d=n("250065");let s={id:"onDoubleClicked",title:"On Double Clicked"},i=void 0,c={},l=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"4D View Pro",id:"4d-view-pro",level:3},{value:"Exemplo",id:"exemplo",level:4}];function a(e){let o={a:"a",code:"code",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,d.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Code"}),(0,t.jsx)(o.th,{children:"Pode ser chamado por"}),(0,t.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,t.jsx)(o.tbody,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"13"}),(0,t.jsxs)(o.td,{children:[(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/viewProAreaOverview",children:"\xc1rea 4D Write Pro"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonGridOverview",children:"Grelha de bot\xf5es"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - Formul\xe1rio - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listOverview",children:"Lista hier\xe1rquica"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"\xc1rea de entrada"})," -",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"Coluna de List Box"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Bot\xe3o imagem"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Imagen del men\xfa emergente"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pluginAreaOverview",children:"\xc1rea de plug-in"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/progressIndicator",children:"Indicador de progresso"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"Bot\xe3o raio"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/ruler",children:"Regua"})," -",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/spinner",children:"Spinner"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/splitters",children:"Splitter"})," - ",(0,t.jsx)(o.a,{href:"/docs/pt/19/FormObjects/stepper",children:"Stepper"})]}),(0,t.jsx)(o.td,{children:"Ocorreu um duplo clique num objeto"})]})})]}),"\n",(0,t.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,t.jsxs)(o.p,{children:["O evento ",(0,t.jsx)(o.code,{children:"On Double Clicked"})," \xe9 gerado quando o usu\xe1rio faz duplo clique em um objeto. O per\xedodo m\xe1ximo de tempo que separa um duplo clique \xe9 definido nas prefer\xeancias do sistema."]}),"\n",(0,t.jsxs)(o.p,{children:["Se a propriedade de evento do objeto ",(0,t.jsx)(o.a,{href:"/docs/pt/19/Events/onClicked",children:(0,t.jsx)(o.code,{children:"On Clicked"})})," ou ",(0,t.jsx)(o.code,{children:"On Double Clicked"})," \xe9 selecionada para um objeto, voc\xea pode detectar e lidar com os cliques dentro ou no objeto, usando o comando ",(0,t.jsx)(o.code,{children:"FORM event"})," que retorna ",(0,t.jsx)(o.a,{href:"/docs/pt/19/Events/onClicked",children:(0,t.jsx)(o.code,{children:"On Clicked"})})," ou ",(0,t.jsx)(o.code,{children:"On Double Clicked"}),", dependendo do caso."]}),"\n",(0,t.jsxs)(o.p,{children:["Se ambos os eventos forem selecionados para um objeto, os eventos ",(0,t.jsx)(o.code,{children:"On Clicked"})," e ",(0,t.jsx)(o.code,{children:"On Double Clicked"})," ser\xe3o gerados quando o usu\xe1rio der duplo clique no objeto."]}),"\n",(0,t.jsx)(o.h3,{id:"4d-view-pro",children:"4D View Pro"}),"\n",(0,t.jsxs)(o.p,{children:["Este evento \xe9 gerado quando o usu\xe1rio faz clique duplo em qualquer lugar em um documento 4D View Pro. Neste contexto, o  ",(0,t.jsx)(o.a,{href:"/docs/pt/19/Events/overview#event-object",children:"objeto de evento"})," retornado pelo comando ",(0,t.jsx)(o.code,{children:"FORM Event"})," cont\xe9m:"]}),"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",(0,t.jsxs)(o.table,{children:[(0,t.jsx)(o.thead,{children:(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.th,{children:"Propriedade"}),(0,t.jsx)(o.th,{children:"Tipo"}),(0,t.jsx)(o.th,{children:"Descri\xe7\xe3o"})]})}),(0,t.jsxs)(o.tbody,{children:[(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"code"}),(0,t.jsx)(o.td,{children:"inteiro longo"}),(0,t.jsx)(o.td,{children:"13"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"description"}),(0,t.jsx)(o.td,{children:"text"}),(0,t.jsx)(o.td,{children:'"On Double Clicked"'})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"objectName"}),(0,t.jsx)(o.td,{children:"text"}),(0,t.jsx)(o.td,{children:"Nome da \xe1rea 4D View Pro"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"sheetName"}),(0,t.jsx)(o.td,{children:"text"}),(0,t.jsx)(o.td,{children:"Nome da folha do evento"})]}),(0,t.jsxs)(o.tr,{children:[(0,t.jsx)(o.td,{children:"range"}),(0,t.jsx)(o.td,{children:"object"}),(0,t.jsx)(o.td,{children:"Intervalo de c\xe9lulas"})]})]})]}),"\n",(0,t.jsx)(o.h4,{id:"exemplo",children:"Exemplo"}),"\n",(0,t.jsx)(o.pre,{children:(0,t.jsx)(o.code,{className:"language-4d",children:" If(FORM Event.code=On Double Clicked)\n   $value:=VP Get value(FORM Event.range)\n End if\n"})})]})}function h(e={}){let{wrapper:o}={...(0,d.a)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},250065:function(e,o,n){n.d(o,{Z:function(){return i},a:function(){return s}});var r=n(667294);let t={},d=r.createContext(t);function s(e){let o=r.useContext(d);return r.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),r.createElement(d.Provider,{value:o},e.children)}}}]);