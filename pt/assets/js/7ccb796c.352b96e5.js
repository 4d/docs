"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["25579"],{893642:function(e,o,r){r.r(o),r.d(o,{default:()=>u,frontMatter:()=>c,metadata:()=>t,assets:()=>d,toc:()=>a,contentTitle:()=>i});var t=JSON.parse('{"id":"Events/onLosingFocus","title":"On Losing focus","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Defini\xe7\xe3o                                  |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20-R8/Events/onLosingFocus.md","sourceDirName":"Events","slug":"/Events/onLosingFocus","permalink":"/docs/pt/Events/onLosingFocus","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonLosingFocus.md%20(20-R8)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20-R8","frontMatter":{"id":"onLosingFocus","title":"On Losing focus"},"sidebar":"docs","previous":{"title":"On Long Click","permalink":"/docs/pt/Events/onLongClick"},"next":{"title":"On Menu Selected","permalink":"/docs/pt/Events/onMenuSelected"}}'),s=r("785893"),n=r("250065");let c={id:"onLosingFocus",title:"On Losing focus"},i=void 0,d={},a=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2}];function l(e){let o={a:"a",code:"code",h2:"h2",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(o.table,{children:[(0,s.jsx)(o.thead,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.th,{children:"Code"}),(0,s.jsx)(o.th,{children:"Pode ser chamado por"}),(0,s.jsx)(o.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(o.tbody,{children:(0,s.jsxs)(o.tr,{children:[(0,s.jsx)(o.td,{children:"14"}),(0,s.jsxs)(o.td,{children:[(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/viewProAreaOverview",children:"4D View Pro Area"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/writeProAreaOverview",children:"4D Write Pro area"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/comboBoxOverview",children:"Combo Box"})," - Form - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listOverview",children:"Hierarchical List"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/listboxOverview#list-box-columns",children:"List Box Column"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/pluginAreaOverview",children:"Plug-in Area"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/subformOverview",children:"Subform"})," - ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/webAreaOverview",children:"Web area"})]}),(0,s.jsx)(o.td,{children:"Um objecto formul\xe1rio est\xe1 a perder o foco"})]})})]}),"\n",(0,s.jsx)(o.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsxs)(o.p,{children:["O evento ",(0,s.jsx)(o.code,{children:"On Losing Focus"}),", juntamente com o evento ",(0,s.jsx)(o.a,{href:"/docs/pt/Events/onGettingFocus",children:(0,s.jsx)(o.code,{children:"On Getting Focus"})}),", s\xe3o usados para detectar e tratar a mudan\xe7a de foco para objetos ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/propertiesEntry#focusable",children:"focusable"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Con los ",(0,s.jsx)(o.a,{href:"/docs/pt/FormObjects/subformOverview",children:"objetos subformulario"}),", este evento se genera en el m\xe9todo del objeto subformulario cuando se verifica. \xc9 enviado para o m\xe9todo de formul\xe1rio do subformul\xe1rio, o que significa, por exemplo, que voc\xea pode gerenciar a exibi\xe7\xe3o dos bot\xf5es de navega\xe7\xe3o no subformul\xe1rio conforme o foco. Note-se que os objetos de subformul\xe1rio podem ter eles pr\xf3prios o foco."]})]})}function u(e={}){let{wrapper:o}={...(0,n.a)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},250065:function(e,o,r){r.d(o,{Z:function(){return i},a:function(){return c}});var t=r(667294);let s={},n=t.createContext(s);function c(e){let o=t.useContext(n);return t.useMemo(function(){return"function"==typeof e?e(o):{...o,...e}},[o,e])}function i(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),t.createElement(n.Provider,{value:o},e.children)}}}]);