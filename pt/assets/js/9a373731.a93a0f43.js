"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["24052"],{368749:function(e,o,r){r.r(o),r.d(o,{default:()=>u,frontMatter:()=>d,metadata:()=>t,assets:()=>a,toc:()=>c,contentTitle:()=>i});var t=JSON.parse('{"id":"Events/onLoad","title":"On Load","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               | Defini\xe7\xe3o                                               |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/Events/onLoad.md","sourceDirName":"Events","slug":"/Events/onLoad","permalink":"/docs/pt/Events/onLoad","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLoad.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onLoad","title":"On Load"},"sidebar":"docs","previous":{"title":"On Header Click","permalink":"/docs/pt/Events/onHeaderClick"},"next":{"title":"On Load Record","permalink":"/docs/pt/Events/onLoadRecord"}}'),s=r("785893"),n=r("250065");let d={id:"onLoad",title:"On Load"},i=void 0,a={},c=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Subformul\xe1rio",id:"subformul\xe1rio",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function l(e){let o={a:"a",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Code"}),(0,s.jsx)(o.th,{children:"Pode ser chamado por"}),(0,s.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"1"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/subformOverview",children:"Subform"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/tabControl",children:"Tab control"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/webAreaOverview",children:"Web Area"})]}),(0,s.jsx)(o.td,{children:"O formul\xe1rio est\xe1 prestes a ser apresentado ou impresso"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(o.p,{children:"Este evento \xe9 acionado quando o formul\xe1rio \xe9 carregado ou impresso."}),"\n",(0,s.jsxs)(o.p,{children:["Todos os objetos do formul\xe1rio (de qualquer p\xe1gina) cuja propriedade de evento de objeto ",(0,s.jsx)(o.code,{children:"On Load"})," estiver selecionada ter\xe3o seu m\xe9todo objeto chamado.\nEnt\xe3o, se a propriedade de evento formul\xe1rio ",(0,s.jsx)(o.code,{children:"On Load"})," for selecionada, o formul\xe1rio ter\xe1 seu m\xe9todo formul\xe1rio chamado."]}),"\n",(0,s.jsxs)(o.blockquote,{children:["\n",(0,s.jsxs)(o.p,{children:["Os eventos ",(0,s.jsx)(o.code,{children:"On Load"})," e [",(0,s.jsx)(o.code,{children:"On Unload"}),"] (onUnload.md) s\xe3o gerados para objetos se estiverem ativados tanto para os objetos quanto para o formul\xe1rio ao qual os objetos pertencem. Se os eventos estiverem ativados somente para objetos, eles n\xe3o ocorrer\xe3o; esses dois eventos tamb\xe9m devem ser ativados no n\xedvel do formul\xe1rio."]}),"\n"]}),"\n",(0,s.jsx)(o.h3,{id:"subformul\xe1rio",children:"Subformul\xe1rio"}),"\n",(0,s.jsxs)(o.p,{children:["O evento ",(0,s.jsx)(o.code,{children:"On Load"})," \xe9 gerado ao abrir o subformul\xe1rio (esse evento tamb\xe9m deve ter sido ativado no n\xedvel do formul\xe1rio pai para ser considerado). O evento \xe9 gerado antes dos eventos do formul\xe1rio principal. Observe tamb\xe9m que, conforme os princ\xedpios operacionais dos eventos de formul\xe1rio, se o subformul\xe1rio for colocado em uma p\xe1gina diferente da p\xe1gina 0 ou 1, esse evento s\xf3 ser\xe1 gerado quando essa p\xe1gina for exibida (e n\xe3o quando o formul\xe1rio for exibido)."]}),"\n",(0,s.jsx)(o.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsx)(o.p,{children:(0,s.jsx)(o.a,{href:"/docs/pt/Events/onUnload",children:(0,s.jsx)(o.code,{children:"On Unload"})})})]})}function u(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return d}});var t=r(667294);let s={},n=t.createContext(s);function d(e){let o=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:d(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);