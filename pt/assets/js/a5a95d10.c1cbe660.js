"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["18202"],{860879:function(e,o,r){r.r(o),r.d(o,{default:()=>h,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"Events/onUnload","title":"On Unload","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      | Defini\xe7\xe3o                                             |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-19/Events/onUnload.md","sourceDirName":"Events","slug":"/Events/onUnload","permalink":"/docs/pt/19/Events/onUnload","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonUnload.md%20(19)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"19","frontMatter":{"id":"onUnload","title":"On Unload"},"sidebar":"docs","previous":{"title":"On Timer","permalink":"/docs/pt/19/Events/onTimer"},"next":{"title":"On URL Filtering","permalink":"/docs/pt/19/Events/onUrlFiltering"}}'),s=r("785893"),n=r("250065");let d={id:"onUnload",title:"On Unload"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Code"}),(0,s.jsx)(o.th,{children:"Pode ser chamado por"}),(0,s.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"24"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/viewProAreaOverview",children:"\xc1rea 4D View Pro"})," - ",(0,s.jsx)(o.a,{href:"FormObjects/writeProArea_overview",children:"\xc1rea 4D Write Pro"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonOverview",children:"Bot\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/buttonGridOverview",children:"Grade de bot\xf5es"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/checkboxOverview",children:"Caixa de sele\xe7\xe3o"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/dropdownListOverview",children:"Lista suspensa"})," - Formul\xe1rio - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listOverview#overview",children:"Lista her\xe1rquica"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/inputOverview",children:"Entrada"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/listboxOverview#list-box-columns",children:"Coluna de List Box "})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pictureButtonOverview",children:"Bot\xe3o imagem"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/picturePopupMenuOverview",children:"Pop up menu imagem"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/pluginAreaOverview#overview",children:"\xc1rea de plug-in"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/progressIndicator",children:"Indicador de progresso "})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/radiobuttonOverview",children:"Bot\xe3o r\xe1dio"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/ruler",children:"Regra"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/subformOverview",children:"Subformul\xe1rio"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/tabControl",children:"Guia"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/19/FormObjects/webAreaOverview",children:"\xc1rea Web"})]}),(0,s.jsx)(o.td,{children:"O formul\xe1rio est\xe1 prestes a ser encerrado e libertado"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"Este evento \xe9 acionado quando o formul\xe1rio \xe9 libertado."}),"\n",(0,s.jsxs)(o.p,{children:["Todos os objetos do formul\xe1rio (de qualquer p\xe1gina) cuja propriedade de evento de objeto ",(0,s.jsx)(o.code,{children:"On Unload"})," estiver selecionada ter\xe3o seu m\xe9todo objeto chamado. Ent\xe3o, se a propriedade de evento formul\xe1rio ",(0,s.jsx)(o.code,{children:"On Unload"})," for selecionada, o formul\xe1rio ter\xe1 seu m\xe9todo formul\xe1rio chamado."]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Os eventos ",(0,s.jsx)(o.a,{href:"/docs/pt/19/Events/onLoad",children:(0,s.jsx)(o.code,{children:"On Load"})})," e [",(0,s.jsx)(o.code,{children:"On Unload"}),"] s\xe3o gerados para objetos se estiverem ativados tanto para os objetos quanto para o formul\xe1rio ao qual os objetos pertencem. Se os eventos estiverem ativados somente para objetos, eles n\xe3o ocorrer\xe3o; esses dois eventos tamb\xe9m devem ser ativados no n\xedvel do formul\xe1rio."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,s.jsxs)(o.p,{children:["O evento ",(0,s.jsx)(o.code,{children:"On Unload"})," \xe9 gerado quando o subformul\xe1rio \xe9 fechado (esse evento tamb\xe9m deve ter sido ativado no n\xedvel do formul\xe1rio pai para ser considerado). O evento \xe9 gerado antes dos eventos do formul\xe1rio principal. Observe tamb\xe9m que, conforme os princ\xedpios de funcionamento dos eventos de formul\xe1rio, se o subformul\xe1rio for colocado em uma p\xe1gina diferente da p\xe1gina 0 ou 1, este evento s\xf3 ser\xe1 gerado quando a p\xe1gina for fechada (e n\xe3o quando o formul\xe1rio for fechado)."]}),"\n",(0,s.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/19/Events/onLoad",children:(0,s.jsx)(o.code,{children:"On Load"})})})]})}function h(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},n=t.createContext(s);function d(e){let o=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);