"use strict";(self.webpackChunk=self.webpackChunk||[]).push([["77245"],{75060:function(e,t,r){r.r(t),r.d(t,{default:()=>l,frontMatter:()=>i,metadata:()=>o,assets:()=>a,toc:()=>d,contentTitle:()=>c});var o=JSON.parse('{"id":"Events/onMouseLeave","title":"On Mouse Leave","description":"| Code | Pode ser chamado por                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   | Defini\xe7\xe3o                                          |","source":"@site/i18n/pt/docusaurus-plugin-content-docs/version-20/Events/onMouseLeave.md","sourceDirName":"Events","slug":"/Events/onMouseLeave","permalink":"/docs/pt/20/Events/onMouseLeave","draft":false,"unlisted":false,"editUrl":"https://github.com/4d/docs/issues/new?title=Comment%20on%20Events%2FonMouseLeave.md%20(20)&body=Please%20enter%20your%20comment%3A","tags":[],"version":"20","frontMatter":{"id":"onMouseLeave","title":"On Mouse Leave"},"sidebar":"docs","previous":{"title":"On Mouse Enter","permalink":"/docs/pt/20/Events/onMouseEnter"},"next":{"title":"On Mouse Move","permalink":"/docs/pt/20/Events/onMouseMove"}}'),s=r("785893"),n=r("250065");let i={id:"onMouseLeave",title:"On Mouse Leave"},c=void 0,a={},d=[{value:"Descri\xe7\xe3o",id:"descri\xe7\xe3o",level:2},{value:"Chamar a pilha",id:"chamar-a-pilha",level:3},{value:"Veja tamb\xe9m",id:"veja-tamb\xe9m",level:3}];function h(e){let t={a:"a",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"Code"}),(0,s.jsx)(t.th,{children:"Pode ser chamado por"}),(0,s.jsx)(t.th,{children:"Defini\xe7\xe3o"})]})}),(0,s.jsx)(t.tbody,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:"36"}),(0,s.jsxs)(t.td,{children:[(0,s.jsx)(t.a,{href:"FormObjects/writeProArea_overview",children:"4D Write Pro area"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/buttonOverview",children:"Button"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/buttonGridOverview",children:"Button Grid"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/checkboxOverview",children:"Check Box"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/comboBoxOverview",children:"Combo Box"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/dropdownListOverview",children:"Dropdown list"})," - Form - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/listOverview#overview",children:"Hierarchical List"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/inputOverview",children:"Input"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/listboxOverview",children:"List Box"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/pictureButtonOverview",children:"Picture Button"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/picturePopupMenuOverview",children:"Picture Pop up menu"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/pluginAreaOverview#overview",children:"Plug-in Area"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/progressIndicator",children:"Progress Indicators"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/radiobuttonOverview",children:"Radio Button"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/ruler",children:"Ruler"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/spinner",children:"Spinner"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/splitters",children:"Splitter"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/stepper",children:"Stepper"})," - ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/tabControl",children:"Tab control"})]}),(0,s.jsx)(t.td,{children:"O cursor do rato deixa a \xe1rea gr\xe1fica de um objeto"})]})})]}),"\n",(0,s.jsx)(t.h2,{id:"descri\xe7\xe3o",children:"Descri\xe7\xe3o"}),"\n",(0,s.jsx)(t.p,{children:"This event is generated once when the mouse cursor leaves the graphic area of an object."}),"\n",(0,s.jsxs)(t.p,{children:["The ",(0,s.jsx)(t.code,{children:"On Mouse Leave"})," event updates the ",(0,s.jsx)(t.em,{children:"MouseX"})," and ",(0,s.jsx)(t.em,{children:"MouseY"})," system variables."]}),"\n",(0,s.jsxs)(t.p,{children:["Objetos tornados invis\xedveis usando o comando ",(0,s.jsx)(t.code,{children:"OBJECT SET VISIBLE"})," ou a propriedade ",(0,s.jsx)(t.a,{href:"/docs/pt/20/FormObjects/propertiesDisplay#visibility",children:"Visibility"})," n\xe3o geram este evento."]}),"\n",(0,s.jsx)(t.h3,{id:"chamar-a-pilha",children:"Chamar a pilha"}),"\n",(0,s.jsxs)(t.p,{children:["If the ",(0,s.jsx)(t.code,{children:"On Mouse Leave"})," event has been checked for the form, it is generated for each form object. Se for verificada para um objeto, \xe9 gerada apenas para esse objeto. When there are superimposed objects, the event is generated by the first object capable of managing it that is found going in order from top level to bottom."]}),"\n",(0,s.jsx)(t.h3,{id:"veja-tamb\xe9m",children:"Veja tamb\xe9m"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/pt/20/Events/onMouseMove",children:(0,s.jsx)(t.code,{children:"On Mouse Move"})})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"/docs/pt/20/Events/onMouseLeave",children:(0,s.jsx)(t.code,{children:"On Mouse Leave"})})}),"\n"]})]})}function l(e={}){let{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},250065:function(e,t,r){r.d(t,{Z:function(){return c},a:function(){return i}});var o=r(667294);let s={},n=o.createContext(s);function i(e){let t=o.useContext(n);return o.useMemo(function(){return"function"==typeof e?e(t):{...t,...e}},[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),o.createElement(n.Provider,{value:t},e.children)}}}]);