"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["61299"],{585922:function(e,o,r){r.r(o),r.d(o,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"Events/onUnload","title":"On Unload","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        | Defini\xe7\xe3o                                             |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R7/Events/onUnload.md","sourceDirName":"Events","slug":"/Events/onUnload","permalink":"/docs/pt/Events/onUnload","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonUnload.md%20(20-R7)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R7","frontMatter":{"id":"onUnload","title":"On Unload"},"sidebar":"docs","previous":{"title":"On Timer","permalink":"/docs/pt/Events/onTimer"},"next":{"title":"On URL Filtering","permalink":"/docs/pt/Events/onUrlFiltering"}}'),n=r("785893"),s=r("250065");let d={id:"onUnload",title:"On Unload"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(o.table,{children:[(0,n.jsx)(o.thead,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.th,{children:"Code"}),(0,n.jsx)(o.th,{children:"Pode ser chamado por"}),(0,n.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,n.jsx)(o.tbody,{children:(0,n.jsxs)(o.tr,{children:[(0,n.jsx)(o.td,{children:"24"}),(0,n.jsxs)(o.td,{children:[(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/viewProAreaOverview",children:"\xc1rea do 4D View Pro"})," - ",(0,n.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea do 4D Write Pro"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Grade de Bot\xf5es"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Caixa de Sele\xe7\xe3o"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Caixa de Combina\xe7\xe3o"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Lista Dropdown"})," - Formul\xe1rio - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/listOverview#overview",children:"Lista Hier\xe1rquica"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"Caixa de Lista"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"Coluna de Caixa de Lista"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Bot\xe3o de Imagem"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Menu Pop-up de Imagem"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de Plug-in"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Indicadores de Progresso"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Bot\xe3o de R\xe1dio"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/ruler",children:"R\xe9gua"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/splitters",children:"Divisor"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/subformOverview",children:"Subformul\xe1rio"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/tabControl",children:"Controle de Abas"})," - ",(0,n.jsx)(o.a,{href:"/docs/pt/FormObjects/webAreaOverview",children:"\xc1rea da Web"})]}),(0,n.jsx)(o.td,{children:"O formul\xe1rio est\xe1 prestes a ser encerrado e libertado"})]})})]}),"\n",(0,n.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,n.jsx)(o.p,{children:"This event is triggered when the form is being exited released."}),"\n",(0,n.jsxs)(o.p,{children:["Todos os objetos do formul\xe1rio (de qualquer p\xe1gina) cuja propriedade de evento de objeto ",(0,n.jsx)(o.code,{children:"On Unload"})," estiver selecionada ter\xe3o seu m\xe9todo objeto chamado.\nEnt\xe3o, se a propriedade de evento formul\xe1rio ",(0,n.jsx)(o.code,{children:"On Unload"})," for selecionada, o formul\xe1rio ter\xe1 seu m\xe9todo formul\xe1rio chamado."]}),"\n",(0,n.jsxs)(o.blockquote,{children:["\n",(0,n.jsxs)(o.p,{children:["Os eventos ",(0,n.jsx)(o.a,{href:"/docs/pt/Events/onLoad",children:(0,n.jsx)(o.code,{children:"On Load"})})," e [",(0,n.jsx)(o.code,{children:"On Unload"}),"] s\xe3o gerados para objetos se estiverem ativados tanto para os objetos quanto para o formul\xe1rio ao qual os objetos pertencem. If the events are enabled for objects only, they will not occur; these two events must also be enabled at the form level."]}),"\n"]}),"\n",(0,n.jsx)(o.h3,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,n.jsxs)(o.p,{children:["O evento ",(0,n.jsx)(o.code,{children:"On Unload"})," \xe9 gerado quando o subformul\xe1rio \xe9 fechado (esse evento tamb\xe9m deve ter sido ativado no n\xedvel do formul\xe1rio pai para ser considerado). O evento \xe9 gerado antes dos eventos do formul\xe1rio principal. The event is generated before those of the parent form."]}),"\n",(0,n.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,n.jsx)(o.p,{children:(0,n.jsx)(o.a,{href:"/docs/pt/Events/onLoad",children:(0,n.jsx)(o.code,{children:"On Load"})})})]})}function h(e={}){let{wrapper:o}={...(0,s.a)(),...e.components};return o?(0,n.jsx)(o,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return d}});var t=r(667294);let n={},s=t.createContext(n);function d(e){let o=t.useContext(s);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:d(e.components),t.createElement(s.Provider,{value:o},e.children)}}}]);